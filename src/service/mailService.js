let sender = require("../config/mailConfig.js");

let sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    let response = await sender.sendMail({
        from    : mailFrom,
        to      : mailTo,
        subject : mailSubject,
        text    : mailBody
    });
    console.log(response)
}

module.exports = {
    sendBasicEmail
}