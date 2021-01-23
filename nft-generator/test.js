const axios = require("axios");

function update() {
  axios.put("http://127.0.0.1:8001/api/v1/ar/not_rendered/update/2/", {code: 0})
                 .then(() => Promise.resolve("FUCK"))
                 .catch(console.log)
}
const res = update();

res.then(message => console.log(message))