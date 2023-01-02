let nodeMailer = require("nodemailer");

let {mailId, mailPass} = require("./serverConfig.js");

let sender = nodeMailer.createTransport({
    service : "Gmail",
    auth : {
        user : mailId,
        pass : mailPass
    }
});

module.exports = sender;