"use client"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-[91.3vh] flex items-center justify-center bg-linear-to-br from-purple-100 via-purple-200 to-purple-300">
      <div className="max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 animate-fadeIn">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-purple-700 text-center mb-6 drop-shadow-md">
          About Us
        </h1>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed mb-4 text-center">
          Welcome to <span className="font-bold text-purple-600">Mlock URL Shortener</span> — 
          the simplest, fastest, and most privacy-friendly way to shorten your links.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike most shorteners that track your activity or require sign-ups, 
          we believe in keeping things straightforward. Our mission is to provide 
          a tool that respects your privacy, saves you time, and looks great while doing it.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you&#8217;re sharing links with friends, embedding them in your projects, 
          or managing campaigns, our shortener is designed to be lightweight, 
          reliable, and user-friendly.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-100 rounded-lg p-6 shadow-md text-center">
            <h2 className="font-bold text-purple-700 mb-2">⚡ Fast</h2>
            <p className="text-gray-600 text-sm">Instantly generate short links without delays.</p>
          </div>
          <div className="bg-purple-100 rounded-lg p-6 shadow-md text-center">
            <h2 className="font-bold text-purple-700 mb-2">🔒 Private</h2>
            <p className="text-gray-600 text-sm">No tracking, no logins, just pure simplicity.</p>
          </div>
          <div className="bg-purple-100 rounded-lg p-6 shadow-md text-center">
            <h2 className="font-bold text-purple-700 mb-2">🎨 Stylish</h2>
            <p className="text-gray-600 text-sm">Modern UI with smooth gradients and polish.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <Link href="/shorten">
            <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg px-6 py-3 font-bold text-white transform hover:scale-105">
              🚀 Try Our Shortener
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}