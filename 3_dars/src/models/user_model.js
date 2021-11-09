const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    // id: {
    //     type: objectId,
    //     required: true,
    //     unique: true
    // },
    full_name: {
        type: String,
        required: true,
        min: 4,
        max: 25,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 25,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})
const users = mongoose.model("users", userSchema)
module.exports = users;