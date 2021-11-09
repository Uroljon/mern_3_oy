const { sign, verify } = require("jsonwebtoken")
const { SECRET_WORD } = require("../../config")

module.exports = {
    generate_token(data){
        return sign(data, SECRET_WORD)
    },
    check_token(token){ //token xato bolsa bu error bervoradi
        try {
            let {_doc} = verify(token, SECRET_WORD) //datani _doc ni ichiga tiqvorarkan
            return _doc;
        } catch (error) {
            return false
        }
    }

}