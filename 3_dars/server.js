let { PORT } = require("./config")
const mongo_init = require("./src/modules/mongoose")
mongo_init()

const express = require("express")
const app = express();
const cookie_parser = require("cookie-parser")

const fs = require("fs/promises")
const path = require("path")

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookie_parser())
app.use("/static", express.static(path.join(__dirname, "src", "public"))) //bu shunchaki /static/Birnarsa.jpeg deb yozganimizda url emas, brior faylni tushunishi uchun kerak. "/static" degan narsani yozish shart emas edi. Lekin uni yozsak, /static folderga faqat "/static" mount path orqali ulanish mumkin. 
//To create a virtual path prefix (where the path does not actually exist in the file system) for files, use=> app.use('/static', express.static('public'))
// Now, you can load the files that are in the public directory from the /static path prefix:
// http://localhost:3000/static/images/kitten.jpg or http://localhost:3000/static/css/style.css
let import_routes = async () => {
    let directories = await fs.readdir(path.join(__dirname, "src", "routes")).catch((e) => console.log(e))
    directories.forEach((file_name) => {
        let route_path = path.join(__dirname, "src", "routes", file_name);
        const Route = require(route_path) //har bir faylni shu shunday import qivoldi. Keyingi siklda eski Route override bop ketadi
        if (Route.path && Route.router) app.use(Route.path, Route.router) //kerakli fayl bolsa, har safar har xil middleware qo'shadi
    })
}
import_routes()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src", "views"))


app.listen(PORT, _ => console.log(`server started at http://localhost:${PORT}`))    