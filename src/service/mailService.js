let sender = require("../config/mailConfig.js");

let sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        let response = await sender.sendMail({
            from    : mailFrom,
            to      : mailTo,
            subject : mailSubject,
            text    : mailBody
        });
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail
}