import { MongoClient, WithId } from "mongodb"

const uri = process.env.MONGODB_URI || ""
const options = {}

let client: MongoClient

if (!uri) {
  throw new Error("Please add your MONGODB_URI environment variable")
}

export const getClient = () => {
  try {
    if (client) {
      return client
    }

    client = new MongoClient(uri, options)
    console.log("MongoDB connection successfully!")
    return client
  } catch (error) {
    console.log(error)
    throw error
  }
}
