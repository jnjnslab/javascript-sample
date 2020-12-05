const MongoClient = require("mongodb").MongoClient

// 接続先URL
const url = ''
//読み込み
async function read01(){

let client
let movies
//DBに接続する
client = await MongoClient.connect(url)
//コレクションを取得する
movies = await client.db("sample_mflix").collection("movies")

//1件読み込む
let filter = "Salma Hayek"
let result = await movies.findOne({ cast: filter })
//console.log(result)
console.log(result.title)
console.log(result.year)
console.log(result.cast)

//project
let result2 = await movies.findOne(
    { cast: filter },
    { projection: { title: 1, year: 1, _id: 0 } },
)
console.log(result2)

//all
let result3 = await movies.find({
    cast: { $all: ["Salma Hayek", "Johnny Depp"] },
})
let doc = await result3.next()
//console.log(doc)
console.log(doc.title)
console.log(doc.year)
console.log(doc.cast)

client.close()
}

read01()