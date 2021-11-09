const users = require("../models/user_model");
const path = require("path")
module.exports = class User_controller {
    static async profile_get(req, res) {
        const { username } = req.params;
        if (username !== "favicon.ico") { //this idiot favicon.ico is messing with my code !!!
            let user = await users.findOne({ username })
            if (!user) {
                res.redirect("/404")
                return; //bu pastdagi render ni o'qimasligi uchun
            }
            res.render("profile", {
                user
            })
        }
    }
    static async avatar_patch(req, res) {
        let { photo } = req.files;
        await photo.mv(path.join(__dirname, "..", "public", photo.md5 + "." + photo.mimetype.split("/")[1]))
        let user = await users.findByIdAndUpdate({ _id: req.user._id }, {
            avatar: `/static/${photo.md5 + "." + photo.mimetype.split("/")[1]}`
        })
        res.status(200).json({
            ok: true,
            src: `/static/${photo.md5 + "." + photo.mimetype.split("/")[1]}`
        })
    }
}