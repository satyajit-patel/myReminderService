let express  = require("express");
let app      = express();
let {PORT} = require("./config/serverConfig.js");

// let bodyParser = require("body-parser");

let {sendBasicEmail} = require("./service/mailService.js");
let cron = require('node-cron');

app.listen(PORT, () => {
    console.log("server started on port ", PORT);


    cron.schedule('*/2 * * * *', () => {
        console.log('running a task every two minutes');

        
        sendBasicEmail(
            "satyajitpatel770001@gmail.com",
            "satyajitpatel45@gmail.com",
            "demo",
            "hi there"
        );

    });


}); 