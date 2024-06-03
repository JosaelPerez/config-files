import { WithId } from "mongodb"

export function serialize<T>(document: WithId<T> | null) {
  if (document) {
    return {
      ...document,
      _id: document._id.toString(),
    }
  }

  return null
}

export function serializeArray<T>(documents: WithId<T>[] | null) {
  if (documents) {
    return documents.map((document) => {
      return {
        ...document,
        _id: document._id.toString(),
      }
    })
  }

  return []
}
