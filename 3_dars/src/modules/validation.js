const Joi = require("joi")

module.exports = class Validations{
    static signup_validation(data){
        return Joi.object({
            full_name: Joi.string().min(3).max(50).required(),
            email: Joi.string().required(),
            username: Joi.string().min(4).max(25),
            password: Joi.string().min(5).required()
        }).validateAsync(data)
    }
    static login_validation(data){
        return Joi.object({
            email: Joi.string().required(),
            password: Joi.string().min(5).required()
        }).validateAsync(data)
    }
}