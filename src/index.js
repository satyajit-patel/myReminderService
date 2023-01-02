let express  = require("express");
let app      = express();

let bodyParser = require("body-parser");

let {PORT} = require("./config/serverConfig.js");

let {sendBasicEmail} = require("./service/mailService.js");
const { getMaxListeners } = require("process");

app.listen(PORT, () => {
    console.log("server started on port ", PORT);

    sendBasicEmail(
        "satyajitpatel770001@gmail.com",
        "satyajitpatel45@gmail.com",
        "demo",
        "hi there"
    );
}); 