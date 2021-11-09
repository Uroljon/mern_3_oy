const { login_get, signup_get, signup_post, login_post } = require("../controllers/auth_controller")

const router = require("express").Router()

router.get("/login", login_get)
router.get("/signup", signup_get)   
router.post("/login", login_post)
router.post("/signup", signup_post)

module.exports = {
    path: "/users",
    router
}