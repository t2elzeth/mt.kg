const axios = require("axios");


axios.put("http://127.0.0.1:8001/api/v1/ar/not_rendered/update/2/", {code: 0}).then(successCallback).catch(console.log)

function successCallback(res){
  console.log(res.data)
}