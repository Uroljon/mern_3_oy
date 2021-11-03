const mongoose = require("mongoose")
const { Schema } = require("mongoose")
let url = "null"

const client = mongoose.connect(url)
    .then(_ => console.log("MongoDB ga ulanvoldim Shef"))//promise yechilyapti
    .catch(err => console.error("Ulanib bo'mayapti-ku Rais buva", err))

let userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Users_collection = mongoose.model("users", userSchema)

    ; (async () => { //self invoking function
        // CREATE NEW USER
        // let user = new Users_collection({
        //     username: "Uroljon",
        //     password: "123456"
        // })
        // user.save()

        // SEARCH
        // let found = await Users_collection.find()
        // console.log(found);

        // UPDATE (faqat schema da bor xossalarni update qiladi)
        // let user = await Users_collection.findOneAndUpdate({ username: "Uroljon" }, { password: "topolmisan baribir" })
        // let updated = await user.save()
            // yoki
        // let user = await Users_collection.find({ username: "Uroljon" })
        // user[0].set({
        //     // username: "Janob Rais",
        //     password: "RaisBuva"
        // })
                // yoki
        //     user[0].password = "Shunaqa ham qisa boladi"
        // let updated_2 = await user[0].save()
        // console.log(updated_2);

        // DELETE
        let user = await Users_collection.deleteOne({username: "Uroljon"})
        console.log(user);
    })()
