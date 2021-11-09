const { profile_get, avatar_patch } = require("../controllers/user_controller")
const auth_middleware = require("../middlewares/auth_middleware")
const express_fileupload = require("express-fileupload")
const router = require("express").Router()

router.patch("/avatar", express_fileupload(), auth_middleware, avatar_patch)
router.get("/:username", auth_middleware, profile_get)

module.exports = {
    path: "/",
    router
}