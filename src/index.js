let express  = require("express");
let app      = express();

let bodyParser = require("body-parser");

let {PORT} = require("./config/serverConfig.js");

app.listen(PORT, () => {
    console.log("server started on port ", PORT);
}); 