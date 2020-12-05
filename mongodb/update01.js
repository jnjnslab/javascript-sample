const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId

// 接続先URL
const url = ''

//更新
async function update01(){

let client
let theaters

client = await MongoClient.connect(url)
theaters = await client.db("sample_mflix").collection("theaters")
//1件更新する
let oldTheaterAddress = await theaters.findOne({ theaterId: 8 })

console.log(oldTheaterAddress)

const updateOneResult = await theaters.updateOne(
  { theaterId: 8 },
  {
    $set: { "location.address.street1": "14161 Aldrich Ave S" },
    $inc: {
      "location.geo.coordinates.0": -10,
      "location.geo.coordinates.1": -25,
    },
  },
)
console.log(updateOneResult.matchedCount)
console.log(updateOneResult.modifiedCount)

const newTheaterAddress = await theaters.findOne(
  { theaterId: 8 },
  { "location.address.street1": 1 },
)
console.log(newTheaterAddress)

let cleanUp = await theaters.updateOne(
  { theaterId: 8 },
  {
    $set: { "location.address.street1": "14141 Aldrich Ave S" },
    $inc: {
      "location.geo.coordinates.0": 10,
      "location.geo.coordinates.1": 25,
    },
  },
)

//複数件更新する
let updateManyResult = await theaters.updateMany(
  { "location.address.zipcode": "55111" },
  { $set: { "location.address.city": "Bloomington" } },
)
console.log(updateManyResult.matchedCount)
console.log(updateManyResult.modifiedCount)

let newTheaterDocuments = await (await theaters.find({
  "location.address.zipcode": "55111",
})).toArray()

for (var i = 0; i < newTheaterDocuments.length; i++) {
  let temp = newTheaterDocuments[i]
  console.log(temp.location.address.city)
}

let cleanUp2 = await theaters.updateMany(
  { "location.address.zipcode": "55111" },
  { $set: { "location.address.city": "Minneapolis" } },
)

client.close()

}

update01()