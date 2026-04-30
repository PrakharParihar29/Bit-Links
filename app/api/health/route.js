// Temporary health check endpoint — shows if env vars are set and if MongoDB connects.
// DELETE this file after debugging is done.

import { connectDB } from "@/lib/mongodb"

export async function GET() {
  const checks = {
    MONGODB_URI: !!process.env.MONGODB_URI,
    MONGODB_URI_preview: process.env.MONGODB_URI
      ? process.env.MONGODB_URI.substring(0, 20) + '...'
      : 'NOT SET',
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST || 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    mongoConnected: false,
    error: null,
  }

  try {
    const client = await connectDB()
    // Try a quick ping to confirm the connection actually works
    await client.db('admin').command({ ping: 1 })
    checks.mongoConnected = true
  } catch (err) {
    checks.error = err.message
  }

  return Response.json(checks)
}
