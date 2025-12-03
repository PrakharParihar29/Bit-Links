"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import toast from "react-hot-toast"


const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({ url, shorturl })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("")
        setShortUrl("")
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        toast(result.message, {
          style: {
            background: "#fff",
            color: "#9333ea",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "12px 16px",
          },
        })
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="min-h-[91.3vh] flex items-center justify-center bg-linear-to-br from-purple-100 via-purple-200 to-purple-300">
      <div className="mx-auto max-w-lg bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl flex flex-col gap-6 animate-fadeIn">
        <h1 className="font-extrabold text-3xl text-purple-700 text-center drop-shadow-md">
          ✨ Generate Your Short URLs
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="px-4 py-3 rounded-md border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            value={shorturl}
            className="px-4 py-3 rounded-md border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
            placeholder="Enter your preferred short text"
            onChange={(e) => setShortUrl(e.target.value)}
          />

          <button
            onClick={generate}
            className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg px-6 py-3 font-bold text-white transform hover:scale-105"
          >
            🚀 Generate URL
          </button>
        </div>

        {generated && (
          <div className="mt-6 text-center">
            <span className="font-bold text-lg text-purple-700">Your Link:</span>
            <p className="mt-2">
              <code className="bg-white px-3 py-2 rounded-md shadow-md text-purple-600 font-semibold">
                <Link target="_blank" href={generated}>
                  {generated}
                </Link>
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shorten