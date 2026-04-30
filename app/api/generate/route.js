import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.url || !body.shorturl) {
      return Response.json(
        { success: false, error: true, message: 'URL and short URL are required' },
        { status: 400 }
      )
    }

    // Basic URL validation
    try {
      new URL(body.url)
    } catch {
      return Response.json(
        { success: false, error: true, message: 'Please enter a valid URL (include https://)' },
        { status: 400 }
      )
    }

    // Sanitize shorturl: only allow alphanumeric and hyphens
    const sanitizedShorturl = body.shorturl.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')
    if (!sanitizedShorturl) {
      return Response.json(
        { success: false, error: true, message: 'Short URL contains invalid characters' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("bit-links")
    const collection = db.collection("url")

    // Check if the short url already exists
    const doc = await collection.findOne({ shorturl: sanitizedShorturl })
    if (doc) {
      return Response.json({ success: false, error: true, message: 'Short URL already exists, please choose another' })
    }

    await collection.insertOne({
      url: body.url,
      shorturl: sanitizedShorturl,
      createdAt: new Date(),
    })

    return Response.json({ success: true, error: false, message: 'URL Generated successfully', shorturl: sanitizedShorturl })
  } catch (error) {
    console.error('[/api/generate] Error:', error)
    return Response.json(
      { success: false, error: true, message: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}