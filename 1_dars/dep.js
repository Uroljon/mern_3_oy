const{dep} = require("./commands")
let [, , product, count] = process.argv;
dep(product, count)