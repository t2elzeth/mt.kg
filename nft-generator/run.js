const {render} = require("./render");

async function run(imagepath) {
  return await render(imagepath);
}

const res = run("img/som200.png")
console.log(res)
res
    .then(() => console.log("SUCCESS SMAZAKAFDAF!"))
    .catch(() => console.log("ERROR ((((((((((((((("))
    .finally(() => console.log("I HAVE FINISHED WORK!"))