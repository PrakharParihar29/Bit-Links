// lib/mongodb.js
// Clean async function pattern — connection is lazy (only on first call).
// Safe to import at module level; never throws during module evaluation.

import { MongoClient } from 'mongodb'

let client
let clientPromise

export async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Go to Vercel → Project Settings → Environment Variables and add it.'
    )
  }

  if (process.env.NODE_ENV === 'development') {
    // Reuse connection across hot reloads in development
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    return global._mongoClientPromise
  }

  // In production: one client per cold start (serverless-safe)
  if (!clientPromise) {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  }
  return clientPromise
}