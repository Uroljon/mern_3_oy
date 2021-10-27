require("dotenv").config()
const { PORT, MONGO_URL, MONGO_LOCAL_URL } = process.env;
module.exports = {
    PORT,
    MONGO_URL,
    MONGO_LOCAL_URL
}
// console.log(PORT);