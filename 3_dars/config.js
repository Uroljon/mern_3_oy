require("dotenv").config();
const { PORT, MONGO_URL, MONGO_LOCAL_URL, SECRET_WORD } = process.env;
module.exports = {
    PORT,
    MONGO_LOCAL_URL,
    SECRET_WORD
}