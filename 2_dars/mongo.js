const { MongoClient } = require("mongodb")
const { MONGO_URL } = require("./config")

let client = new MongoClient(MONGO_URL) 
let db_name = "2_dars";

async function mongo_init() {  
    await client.connect() //db ga uandi
    console.log("connected succesfully to databse");
    const db = client.db(db_name) //db tanlab olindi
    const collection = db.collection("users_table") //collection tanlab olindi
// INSERT
    // collection.insertOne({ //asyn function, returns promise
    //     name: "Uroljon",
    //     age: 21
    // }, (err, res)=>{
    //     if(!err) console.log(res);
    // })
    // yoki:
    // let insert_many_result = await collection.insertMany([{name: "Anton", age: 40}, {name: "Sergey", age: 30}])
    // console.log(insert_many_result);
// FIND
    // collection.findOne({name: "Sergey"}, (err, res)=>{
    //     console.log(res);
    // })
    // let find_result = await collection.find({name: "Sergey"}).toArray() //this one doesn't work with callbacks
    // console.log(find_result);

    
}

mongo_init()