const bcrypt = require("bcrypt")

module.exports.generate_hash = async function (data) {
    let salt = await bcrypt.genSalt(10); //promise qaytararkan 
    return bcrypt.hash(data, salt)
}
module.exports.compare_hash = async (data, hash) => {
    return await bcrypt.compare(data, hash)
}