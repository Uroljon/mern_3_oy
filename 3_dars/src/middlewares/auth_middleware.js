// bu middleware cookie da token bor/yo'qligini tekshirish orqali user login qigan/qimaganini tekshiradi

const { check_token } = require("../modules/jwt");

module.exports = (req, res, next) => {
    let token = req.cookies.token; //login qilgan odamni tokeni bo'ladi
    token = check_token(token); //bu sign(data, secretWord) dagi data ni yoki false qaytaradi

    if (!token) { //agar login qimagan odam bo'lsa
        res.redirect("/users/login")
        return;
    }
    req.user = token; //user degan xossa qo'shib, unga data ya'ni user malumotlarini bervoramiz
    // console.log(req.user, "req. user");
    next()
}