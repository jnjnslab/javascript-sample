const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId

// 接続先URL
const url = ''

//削除
async function delete01(){

let client
let videoGames

client = await MongoClient.connect(url)
videoGames = await client.db("sample_mflix").collection("videoGames")

//テストデータ
let megaManYears = [
  1987,
  1988,
  1990,
  1991,
  1992,
  1993,
  1995,
  1996,
  2008,
  2010,
]
// Here we are creating documents to insert based on the megaManYears array above
let docs = megaManYears.map((year, idx) => ({
  title: "Mega Man",
  year,
}))
let insertResult = await videoGames.insertMany(docs)

//1件削除する
let countDocumentsBefore = await videoGames.count({})
let deleteDocument = await videoGames.deleteOne({})
console.log(deleteDocument.result.n)
let countDocuments = await videoGames.count({})
console.log(
  `collection had ${countDocumentsBefore} documents, now has ${countDocuments}`,
)

//条件を指定して削除する
let deleteDocument2 = await videoGames.deleteOne({ year: 2008 })
console.log(deleteDocument2.result.n)
countDocuments = await videoGames.count({})
console.log(countDocuments)

//複数件削除する
let deleteManyDocs = await videoGames.deleteMany({ year: { $lt: 1993 } })
console.log(deleteManyDocs.result.n)

let findResult = await videoGames.find({})
let findResultArray = await findResult.toArray()
for (var i = 0; i < findResultArray.length; i++) {
  let videoGame = findResultArray[i]
  console.log(videoGame)
}

//全件削除する
await videoGames.deleteMany({})

client.close()
}

delete01()