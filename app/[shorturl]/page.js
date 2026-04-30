import { connectDB } from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
    const { shorturl } = await params

    try {
        const client = await connectDB()
        const db = client.db("bit-links")
        const collection = db.collection("url")

        const doc = await collection.findOne({ shorturl: shorturl })
        if (doc) {
            redirect(doc.url)
        }
    } catch (error) {
        console.error('[shorturl redirect] Error:', error)
    }

    // Fallback: redirect to home if not found or on error
    const host = process.env.NEXT_PUBLIC_HOST || '/'
    redirect(host)
}