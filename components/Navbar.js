import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="h-16 bg-linear-to-r from-purple-700 via-purple-600 to-purple-800 shadow-lg flex justify-between px-6 items-center text-white">
      
      {/* Logo */}
      <div className="logo font-extrabold text-2xl tracking-wide hover:text-pink-300 transition-colors duration-300">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-center gap-6 items-center font-medium">
        <li>
          <Link href="/" className="hover:text-pink-300 transition-colors duration-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-pink-300 transition-colors duration-300">About</Link>
        </li>
        <li>
          <Link href="/shorten" className="hover:text-pink-300 transition-colors duration-300">Shortener</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-pink-300 transition-colors duration-300">Contact Us</Link>
        </li>

        {/* Buttons */}
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="cursor-pointer bg-pink-400 text-purple-900 rounded-lg shadow-md px-5 py-2 font-bold transition-transform duration-300 hover:scale-105 hover:bg-pink-500">
              🚀 Try Now
            </button>
          </Link>
          <Link href="https://github.com/PrakharParihar29" target="_blank">
            <button className="cursor-pointer bg-gray-900 text-white rounded-lg shadow-md px-5 py-2 font-bold transition-transform duration-300 hover:scale-105 hover:bg-black">
              💻 GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar