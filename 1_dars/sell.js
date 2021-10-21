const{sell} = require("./commands")
let [, , product, count] = process.argv;
sell(product, count)