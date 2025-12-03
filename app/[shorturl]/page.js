import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise
    const db = client.db("bit-links")
    const collection = db.collection("url")

    //if the short url exist
    const doc = await collection.findOne({ shorturl: shorturl })
    if (doc) {
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
}