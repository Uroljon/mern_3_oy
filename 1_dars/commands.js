const Fs = require("fs/promises")

class commands {
    static async dep(name, count) {
        count = Number(count)
        let db = await Fs.readFile("ombor.JSON", "utf-8")
        db = JSON.parse(db)
        
        let index = db.products.findIndex(product => product.name === name.toLowerCase());
        if(index < 0){
            console.log(`${count}ta ${name} muvofaqqiyatli qo'shildi:`);
            db.products.push({name: name.toLowerCase(), quantity: Number(count)})
            console.table([db.products[db.products.length-1]])
            await Fs.writeFile("ombor.JSON", JSON.stringify(db))
            return
        }
        let prev_quantity = Number(db.products[index].quantity);
        console.log(`Sizda ${prev_quantity}ta ${name} bor edi. Omborga ${count}ta ${name} muvofaqqiyatli qo'shildi va ${name}lar ${prev_quantity + count}ta bo'ldi. Mana o'zingiz ko'ring :`);
        db.products[index] = {name: name.toLowerCase(), quantity: count+prev_quantity}
        console.table([db.products[index]])
        await Fs.writeFile("ombor.JSON", JSON.stringify(db))
    }
    static async sell(name, count){
        count = Number(count)
        let db = await Fs.readFile("ombor.JSON", "utf-8")
        db = JSON.parse(db)
        
        let index = db.products.findIndex(product => product.name === name.toLowerCase());
        if(index < 0){
            console.log("!!! bunday tovar yo'q !!!");
            return
        }
        let prev_quantity = Number(db.products[index].quantity);
        if(prev_quantity>=count){
            console.log(`Avval ${prev_quantity}ta ${name} bor edi. Ulardan ${count}ta ${name} muvofaqqiyatli sotildi va ${prev_quantity - count}ta ${name} qoldi. Mana qolgan ${name}lar :`);
            db.products[index] = {name: name.toLowerCase(), quantity: prev_quantity - count}
            console.table([db.products[index]])
            await Fs.writeFile("ombor.JSON", JSON.stringify(db))
        }else{
            console.log(`!!! Sizda ${count}ta ${name} yo'q !!!`);
        }
    }
    static dash(){
        Fs.readFile("ombor.JSON", "utf-8").then((db) => {
            let { products } = JSON.parse(db)
            console.log("Ombordagi barcha tovarlar bilan tanishing :");
            console.table(products);
        }).catch((err) => console.log(err))
    }
}
module.exports = {
    dash: commands.dash,
    dep: commands.dep,
    sell: commands.sell
}