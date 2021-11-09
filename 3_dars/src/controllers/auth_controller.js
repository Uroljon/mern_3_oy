const users = require("../models/user_model");
const { generate_hash, compare_hash } = require("../modules/bcrypt");
const { signup_validation, login_validation } = require("../modules/validation")
const { generate_token } = require("../modules/jwt")
module.exports = class Auth_controller {
    static login_get(req, res) {
        res.render("login")
    }
    static signup_get(req, res) {
        res.render("signup")
    }
    static async signup_post(req, res) {
        try {//sababi validationdan xato chiqib qolsa, catch bilan ushlab olish oson
            const { full_name, username, email, password } = await signup_validation(req.body); //chunki validateAsync() joi dan promise qaytaryapti
            
            let is_email_free = await users.findOne({email}) //cheks email is in use or not
            if (is_email_free) {
                throw new Error("This email already exists in our database")
            }
            let is_username_free = await users.findOne({username}) //cheks email is in use or not
            if (is_username_free) {
                throw new Error("This username has already been taken")
            }
            let hash = await generate_hash(password) //baribir promise qaytararkan
            let user = await users.create({
                full_name,
                username,
                email,
                password: hash
            })
            let token = generate_token({
                ...user,
                password: undefined
            })
            res.cookie("token", token).redirect("/") //token berib, home ga redirect qivordik
        } catch (e) {
            res.render("signup", {
                error: e + ""
            })
        }
    }
    static async login_post(req, res) {
        try {
            const { email, password } = await login_validation(req.body)

            let user = await users.findOne({ email })
            if (!user) throw new Error("Email doesn't exist in our database") 
            // const {password : hash} = res.cookie.token
            let is_pass = await compare_hash(password, user.password)
            if(!is_pass) throw new Error("Password is incorrect  :(")
            let token = generate_token({
                ...user,
                password: undefined
            })
            res.cookie("token", token).redirect("/") //token berib, home ga redirect qivordik
        } catch (e) {
            res.render("login", {
                error: e + ""
            })
        }
    }
}