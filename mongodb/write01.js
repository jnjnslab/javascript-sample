const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId

// 接続先URL
const url = ''

//書き込み
async function write01(){
let client
let videoGames

client = await MongoClient.connect(url)
videoGames = await client.db("sample_mflix").collection("videoGames")
//全件削除する
await videoGames.deleteMany({})

//1件書き込む
let insertResult = await videoGames.insertOne({
    title: "Fortnite",
    year: 2018,
})
//console.log(insertResult)
console.log('insertOne')
console.log(insertResult.result.n)
console.log(insertResult.result.ok)
console.log(insertResult.insertedId)

let inserted = await videoGames.findOne({
    _id: ObjectId(insertResult.insertedId),
  })
console.log(inserted)

try {
    let dupId = await videoGames.insertOne({
      _id: insertResult.insertedId,
      title: "Foonite",
      year: 2099,
    })
  } catch (e) {
    console.log(e.errmsg)
  }

//複数件書き込む
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
// Creating documents to insert based on the megaManYears array above
let docs = megaManYears.map((year, idx) => ({
  title: `Mega Man ${idx + 1}`,
  year,
}))
// now let's insert these into the database
let insertResult2 = await videoGames.insertMany(docs)
console.log('insertMany')
console.log(Object.values(insertResult2.insertedIds))

//upsert
let upsertResult = await videoGames.updateOne(
     { title: "Call of Duty" },
     {
      $set: {
        title: "Call of Duty",
        year: 2003,
      },
    },
     { upsert: true },
  )
console.log('upsert1')
console.log(upsertResult.result.nModified)
console.log(upsertResult.result.upserted)

upsertResult = await videoGames.updateOne(
    { title: "Call of Duty" },
    {
      $set: {
        title: "Call of Duty",
        year: 2018,
      },
    },
    { upsert: true },
  )
console.log('upsert2')
console.log(upsertResult.result.nModified)
console.log(upsertResult.result.upserted)

//全件削除する
//await videoGames.deleteMany({})

client.close()
}

write01()