import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || ""
const options = {}

let client: MongoClient

if (!uri) {
  throw new Error("Please add your MONGODB_URI environment variable")
}

const mongoClient = async () => {
  try {
    if (client) return client

    client = await new MongoClient(uri, options).connect()

    return client    
  } catch (error) {
    console.log(error)
    throw error
  }
}
