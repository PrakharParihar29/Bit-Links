"use client"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-[91.3vh] flex items-center justify-center bg-linear-to-br from-purple-100 via-purple-200 to-purple-300 p-4 sm:p-6">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 animate-fadeIn">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 text-center mb-6 drop-shadow-md">
          Contact Us
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-center mb-8 text-sm sm:text-base">
          Have questions, feedback, or just want to say hello?  
          We&#8217;d love to hear from you!
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="👤 Your Name"
            className="px-4 py-3 rounded-md border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="📧 Your Email"
            className="px-4 py-3 rounded-md border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
          />
          <textarea
            rows="4"
            placeholder="💬 Your Message"
            className="px-4 py-3 rounded-md border border-purple-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg px-6 py-3 font-bold text-white transform hover:scale-105 cursor-pointer w-full sm:w-auto self-center sm:self-auto"
          >
            📩 Send Message
          </button>
        </form>

        {/* Quick Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">Or reach us directly:</p>
          <div className="flex justify-center gap-6">
            <Link href="mailto:pariharprakhar5@gmail.com" className="cursor-pointer text-purple-700 font-semibold hover:underline text-sm sm:text-base">
              Email
            </Link>
            <Link href="https://github.com/PrakharParihar29" target="_blank" className="cursor-pointer text-purple-700 font-semibold hover:underline text-sm sm:text-base">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}