const path = require("path");
const fs = require('fs');
const readlineSync = require('readline-sync');
const inkjet = require('inkjet');
const im = require('imagemagick');
const PNG = require('pngjs').PNG;
var Module = require('./libs/NftMarkerCreator_wasm.js');

// GLOBAL VARs
var params = [];

var validImageExt = [".jpg", ".jpeg", ".png"];

var srcImage;

var outputPath = '../static/img-tracking/data/nft/';

var buffer;

var foundInputPath = {
    b: false,
    i: -1
}

var foundOutputPath = {
    b: false,
    i: -1
}

var imageData = {
    sizeX: 0,
    sizeY: 0,
    nc: 0,
    dpi: 0,
    array: []
}

Module.onRuntimeInitialized = async function() {
    for (let j = 2; j < process.argv.length; j++) {
        if (process.argv[j].indexOf('-i') !== -1 || process.argv[j].indexOf('-I') !== -1) {
            foundInputPath.b = true;
            foundInputPath.i = j + 1;
            j++;
        } else if (process.argv[j].indexOf('-o') !== -1 || process.argv[j].indexOf('-O') !== -1) {
            foundOutputPath.b = true;
            foundOutputPath.i = j + 1;
            j++;
        } else {
            params.push(process.argv[j]);
        }
    }

    if (!foundInputPath.b) {
        console.log("\nERROR: No image in INPUT command!\n e.g:(-i /PATH/TO/IMAGE)\n");
        process.exit(1);
    } else {
        srcImage = path.join(__dirname, process.argv[foundInputPath.i]);
    }

    if (foundOutputPath.b) {
        outputPath = process.argv[foundOutputPath.i];
        if (!outputPath.startsWith('/'))
            outputPath = '/' + outputPath;
        if (!outputPath.endsWith('/'))
            outputPath += '/';
        console.log('Set output path: ' + outputPath);
    }

    let fileNameWithExt = path.basename(srcImage);
    let fileName = path.parse(fileNameWithExt).name;
    let extName = path.parse(fileNameWithExt).ext;

    let foundExt = false;
    for (let ext in validImageExt) {
        if (extName.toLowerCase() === validImageExt[ext]) {
            foundExt = true;
            break;
        }
    }

    if (!foundExt) {
        console.log("\nERROR: Invalid image TYPE!\n Valid types:(jpg,JPG,jpeg,JPEG,png,PNG)\n");
        process.exit(1);
    }

    if (!fs.existsSync(srcImage)) {
        console.log("\nERROR: Not possible to read image, probably invalid image PATH!\n");
        process.exit(1);
    } else {
        buffer = fs.readFileSync(srcImage);
    }

    console.log('Check output path: ' + path.join(__dirname, outputPath));
    if (!fs.existsSync(path.join(__dirname, outputPath))) {
        fs.mkdirSync(path.join(__dirname, outputPath));
    }

    if (extName.toLowerCase() == ".jpg" || extName.toLowerCase() == ".jpeg") {
        await useJPG(buffer)
    } else if (extName.toLowerCase() == ".png") {
        usePNG(buffer);
    }

    let paramStr = params.join(' ');

    let StrBuffer = Module._malloc(paramStr.length + 1);
    Module.writeStringToMemory(paramStr, StrBuffer);

    let heapSpace = Module._malloc(imageData.array.length * imageData.array.BYTES_PER_ELEMENT);
    Module.HEAPU8.set(imageData.array, heapSpace);

    Module._createImageSet(heapSpace, imageData.dpi, imageData.sizeX, imageData.sizeY, imageData.nc, StrBuffer)

    Module._free(heapSpace);
    Module._free(StrBuffer);

    let filenameIset = "asa.iset";
    let filenameFset = "asa.fset";
    let filenameFset3 = "asa.fset3";

    let ext = ".iset";
    let ext2 = ".fset";
    let ext3 = ".fset3";

    let content = Module.FS.readFile(filenameIset);
    let contentFset = Module.FS.readFile(filenameFset);
    let contentFset3 = Module.FS.readFile(filenameFset3);

    fs.writeFileSync(path.join(__dirname, outputPath) + fileName + ext, content);
    fs.writeFileSync(path.join(__dirname, outputPath) + fileName + ext2, contentFset);
    fs.writeFileSync(path.join(__dirname, outputPath) + fileName + ext3, contentFset3);

    process.exit(0);
}

async function useJPG(buf) {
    inkjet.decode(buf, function(err, decoded) {
        if (err) {
            console.log("\n" + err + "\n");
            process.exit(1);
        } else {
            let newArr = [];

            let verifyColorSpace = detectColorSpace(decoded.data);

            if (verifyColorSpace == 1) {
                for (let j = 0; j < decoded.data.length; j += 4) {
                    newArr.push(decoded.data[j]);
                }
            } else if (verifyColorSpace == 3) {
                for (let j = 0; j < decoded.data.length; j += 4) {
                    newArr.push(decoded.data[j]);
                    newArr.push(decoded.data[j + 1]);
                    newArr.push(decoded.data[j + 2]);
                }
            }

            let uint = new Uint8Array(newArr);
            imageData.nc = verifyColorSpace;
            imageData.array = uint;
        }
    });

    await extractExif(buf);
}

function extractExif(buf) {
    return new Promise((resolve, reject) => {
        inkjet.exif(buf, async function(err, metadata) {
            if (err) {
                console.log("\n" + err + "\n");
                process.exit(1);
            } else {
                if (metadata == null || metadata == undefined || Object.keys(metadata).length == undefined || Object.keys(metadata).length <= 0) {
                    let ret = await imageMagickIdentify(srcImage);
                    console.log('ret:', ret); {
                        if (ret.err) {
                            console.log(ret.err);
                            var answer = readlineSync.question('The EXIF info of this image is empty or it does not exist. Do you want to inform its properties manually?[y/n]\n');

                            if (answer == "y") {
                                var answerWH = readlineSync.question('Inform the width and height: e.g W=200 H=400\n');

                                let valWH = getValues(answerWH, "wh");
                                imageData.sizeX = valWH.w;
                                imageData.sizeY = valWH.h;

                                var answerDPI = readlineSync.question('Inform the DPI: e.g DPI=220 [Default = 72](Press enter to use default)\n');

                                if (answerDPI == "") {
                                    imageData.dpi = 72;
                                } else {
                                    let val = getValues(answerDPI, "dpi");
                                    imageData.dpi = val;
                                }
                            } else {
                                console.log("Exiting process!")
                                process.exit(1);
                            }
                        } else {
                            imageData.sizeX = ret.features.width;
                            imageData.sizeY = ret.features.height;
                            var resolution = ret.features.resolution;
                            let dpi = null;
                            if (resolution) {
                                let resolutions = resolution.split('x');
                                if (resolutions.length == 2) {
                                    dpi = Math.min(parseInt(resolutions[0]), parseInt(resolutions[1]));
                                    if (dpi == null || dpi == undefined || dpi == NaN) {
                                        dpi = 72;
                                    }
                                }

                            } else {
                                dpi = 72;
                            }

                            imageData.dpi = dpi;
                        }
                    }
                } else {
                    let dpi = Math.min(parseInt(metadata.XResolution.value), parseInt(metadata.YResolution.value));
                    if (dpi == null || dpi == undefined || dpi == NaN) {
                        console.log("\nWARNING: No DPI value found! Using 72 as default value!\n")
                        dpi = 72;
                    }

                    if (metadata.ImageWidth == null || metadata.ImageWidth == undefined) {
                        if (metadata.PixelXDimension == null || metadata.PixelXDimension == undefined) {
                            var answer = readlineSync.question('The image does not contain any width or height info, do you want to inform them?[y/n]\n');
                            if (answer == "y") {
                                var answer2 = readlineSync.question('Inform the width and height: e.g W=200 H=400\n');

                                let vals = getValues(answer2, "wh");
                                imageData.sizeX = vals.w;
                                imageData.sizeY = vals.h;
                            } else {
                                console.log("It's not possible to proceed without width or height info!")
                                process.exit(1);
                            }
                        } else {
                            imageData.sizeX = metadata.PixelXDimension.value;
                            imageData.sizeY = metadata.PixelYDimension.value;
                        }
                    } else {
                        imageData.sizeX = metadata.ImageWidth.value;
                        imageData.sizeY = metadata.ImageLength.value;
                    }

                    if (metadata.SamplesPerPixel == null || metadata.ImageWidth == undefined) {} else {
                        imageData.nc = metadata.SamplesPerPixel.value;
                    }
                    imageData.dpi = dpi;
                }
            }
            resolve(true);
        });
    })

}

function usePNG(buf) {
    let data;
    var png = PNG.sync.read(buf);

    var arrByte = new Uint8Array(png.data);
    if (png.alpha) {
        data = rgbaToRgb(arrByte);
    } else {
        data = arrByte;
    }

    let newArr = [];

    let verifyColorSpace = detectColorSpace(data);

    if (verifyColorSpace == 1) {
        for (let j = 0; j < data.length; j += 4) {
            newArr.push(data[j]);
        }
    } else if (verifyColorSpace == 3) {
        for (let j = 0; j < data.length; j += 4) {
            newArr.push(data[j]);
            newArr.push(data[j + 1]);
            newArr.push(data[j + 2]);
        }
    }

    let uint = new Uint8Array(newArr);

    imageData.array = uint;
    imageData.nc = verifyColorSpace;
    imageData.sizeX = png.width;
    imageData.sizeY = png.height;
    imageData.dpi = 72;
}

function imageMagickIdentify(srcImage) {
    return new Promise((resolve, reject) => {
        im.identify(srcImage, function(err, features) {
            resolve({ err: err, features: features });
        })
    })
}

function getValues(str, type) {
    let values;
    if (type == "wh") {
        let Wstr = "W=";
        let Hstr = "H=";
        var doesContainW = str.indexOf(Wstr);
        var doesContainH = str.indexOf(Hstr);

        let valW = parseInt(str.slice(doesContainW + 2, doesContainH));
        let valH = parseInt(str.slice(doesContainH + 2));

        values = {
            w: valW,
            h: valH
        }
    } else if (type == "nc") {
        let nc = "NC=";
        var doesContainNC = str.indexOf(nc);
        values = parseInt(str.slice(doesContainNC + 3));
    } else if (type == "dpi") {
        let dpi = "DPI=";
        var doesContainDPI = str.indexOf(dpi);
        values = parseInt(str.slice(doesContainDPI + 4));
    }

    return values;
}

function detectColorSpace(arr) {
    let target = parseInt(arr.length / 4);

    let counter = 0;

    for (let j = 0; j < arr.length; j += 4) {
        let r = arr[j];
        let g = arr[j + 1];
        let b = arr[j + 2];

        if (r == g && r == b) {
            counter++;
        }
    }

    if (target == counter) {
        return 1;
    } else {
        return 3;
    }
}

function rgbaToRgb(arr) {
    let newArr = [];
    let BGColor = {
        R: 255,
        G: 255,
        B: 255
    }

    for (let i = 0; i < arr.length; i += 4) {

        let r = parseInt(255 * (((1 - arr[i + 3]) * BGColor.R) + (arr[i + 3] * arr[i])));
        let g = parseInt(255 * (((1 - arr[i + 3]) * BGColor.G) + (arr[i + 3] * arr[i + 1])));
        let b = parseInt(255 * (((1 - arr[i + 3]) * BGColor.B) + (arr[i + 3] * arr[i + 2])));

        newArr.push(r);
        newArr.push(g);
        newArr.push(b);
    }
    return newArr;
}