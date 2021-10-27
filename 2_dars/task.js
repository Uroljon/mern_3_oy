const { MongoClient } = require("mongodb")
const { MONGO_URL, PORT } = require("./config")
const cors = require("cors")

let client = new MongoClient(MONGO_URL)
let db_name = "2_dars";

async function mongo_init() {
    await client.connect()
    console.log("connected succesfully to databse");
    const db = client.db(db_name)
    return db.collection("users_table") //returns promise
}

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ //api larni hamma joydan ishlashini yoqish
    "Access-Control-Allow-Origin": "*"
}))
async function delete_table(param) {
    let users_table = await mongo_init()
    await users_table.deleteMany({})
    console.log("kiritildi");
}
// delete_table()
app.post("/user", async (req, res) => {
    let users_table = await mongo_init()

    let {username, password} = req.body;
    if(username && password){
        users_table.findOne({name : username.toLowerCase()}, async (err, found)=>{
            if(err){
                console.log(err);
                return
            }
            if(found===null){//if there's no user
                users_table.insertOne({name: username.toLowerCase(), password})
            }else{
                res.status(400).json({
                    ok: false,
                    message: "user exists"
                })
            }
        })
    }
})

app.listen(PORT, _ => console.log("server started"))