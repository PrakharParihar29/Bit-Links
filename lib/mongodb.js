// lib/mongodb.js
// Uses a lazy connection pattern so the module never throws at load time.
// The connection is established on first use, not when the module is imported.

import { MongoClient } from 'mongodb'

let client
let clientPromise

function getClientPromise() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error('Missing environment variable: MONGODB_URI. Add it to your Vercel project settings.')
  }

  if (process.env.NODE_ENV === 'development') {
    // In development, reuse the connection across hot reloads
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    return global._mongoClientPromise
  }

  // In production, create a new client per cold start
  if (!clientPromise) {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  }
  return clientPromise
}

// Export a Proxy so existing code using `await clientPromise` still works,
// but the connection is only established when actually awaited.
const clientPromiseProxy = {
  then(...args) {
    return getClientPromise().then(...args)
  },
  catch(...args) {
    return getClientPromise().catch(...args)
  },
}

export default clientPromiseProxy