let dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    mailId : process.env.mailId, 
    mailPass : process.env.mailPass
}