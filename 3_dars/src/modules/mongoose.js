// bu faqat bazaga ulanish kodi:

const mongoose = require("mongoose");
const { MONGO_LOCAL_URL } = require("../../config");

module.exports = async function mongo() {
    try {
        await mongoose.connect(MONGO_LOCAL_URL)
        console.log("connected to db");
    } catch (error) {
        console.log("connection failed", error);
    }
}