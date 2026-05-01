import { connectDB } from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
    const { shorturl } = await params

    let urlToRedirect = null

    try {
        const client = await connectDB()
        const db = client.db("bit-links")
        const collection = db.collection("url")

        const doc = await collection.findOne({ shorturl: shorturl })
        if (doc) {
            urlToRedirect = doc.url
        }
    } catch (error) {
        // Only log actual database errors, ignore the redirect error if we were to call it here
        console.error('[shorturl redirect] Database Error:', error)
    }

    if (urlToRedirect) {
        redirect(urlToRedirect)
    }

    // Fallback: redirect to home if not found or on error
    const host = process.env.NEXT_PUBLIC_HOST || '/'
    redirect(host)
}