const MongoClient = require("mongodb").MongoClient

// 接続先URL
const url = ''
//読み込み
async function read01(){

let client;
let movies;
//DBに接続する
client = await MongoClient.connect(url);
//コレクションを取得する
movies = await client.db("sample_mflix").collection("movies");

//カーソルの処理
let filter = "Salma Hayek";
let result = await movies.find({ cast: filter });

let movieArray = await result.toArray();
for (var i = 0; i < movieArray.length - 1; i++) {
    let movie = movieArray[i]
    console.log(movie.title)
}

client.close();
}

read01();