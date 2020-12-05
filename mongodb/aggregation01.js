const MongoClient = require("mongodb").MongoClient

// 接続先URL
const url = ''

//aggregation
async function read01(){

let client
let movies

client = await MongoClient.connect(url)
movies = await client.db("sample_mflix").collection("movies")
//aggregation 1
const limitedCursor = await movies
      .find({ directors: "Sam Raimi" }, { _id: 0, title: 1, cast: 1 })
      .limit(2)
cresults = await limitedCursor.toArray()

for (var i = 0; i < cresults.length; i++) {
  let temp = cresults[i]
  console.log(temp.title)
}

const limitPipeline = [
  { $match: { directors: "Sam Raimi" } },
  { $project: { _id: 0, title: 1, cast: 1 } },
  { $limit: 2 },
]
const limitedAggregation = await movies.aggregate(limitPipeline)
aresults = await limitedAggregation.toArray()

for (var i = 0; i < aresults.length; i++) {
  let temp = aresults[i]
  console.log(temp.title)
}

//sort
const sortedCursor = movies
      .find({ directors: "Sam Raimi" }, { _id: 0, year: 1, title: 1, cast: 1 })
      .sort([["year", 1]])
const movieArray = await sortedCursor.toArray()

for (var i = 0; i < movieArray.length; i++) {
  let movie = movieArray[i]
  console.log(movie.year,movie.title)
}

const sortPipeline = [
  { $match: { directors: "Sam Raimi" } },
  { $project: { _id: 0, year: 1, title: 1, cast: 1 } },
  { $sort: { year: 1 } },
]
const sortAggregation = await movies.aggregate(sortPipeline)
const movieArray2 = await sortAggregation.toArray()

for (var i = 0; i < movieArray2.length; i++) {
  let movie = movieArray2[i]
  console.log(movie.year,movie.title)
}

//skip
const skippedCursor = movies
      .find({ directors: "Sam Raimi" }, { _id: 0, year: 1, title: 1, cast: 1 })
      .sort([["year", 1]])
      .skip(5)
const skippedArray = await skippedCursor.toArray()

for (var i = 0; i < skippedArray.length; i++) {
  let movie = skippedArray[i]
  console.log(movie.year,movie.title)
}

const skippedPipeline = [
  { $match: { directors: "Sam Raimi" } },
  { $project: { _id: 0, year: 1, title: 1, cast: 1 } },
  { $sort: { year: 1 } },
  { $skip: 5 },
]
const skippedAggregation = await movies.aggregate(skippedPipeline)
const skippedArray2 = await skippedAggregation.toArray()

for (var i = 0; i < skippedArray2.length; i++) {
  let movie = skippedArray2[i]
  console.log(movie.year,movie.title)
}

client.close()

}

read01()
