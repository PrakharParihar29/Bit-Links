"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-linear-to-r from-purple-700 via-purple-600 to-purple-800 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="logo font-extrabold text-2xl tracking-wide hover:text-pink-300 transition-colors duration-300">
          <Link href="/">BitLinks</Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex justify-center gap-6 items-center font-medium">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-pink-300 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden bg-purple-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 font-medium px-6">
          <li className="w-full text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2 hover:bg-purple-600 rounded-lg transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2 hover:bg-purple-600 rounded-lg transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              href="/shorten"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2 hover:bg-purple-600 rounded-lg transition-colors duration-300"
            >
              Shortener
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2 hover:bg-purple-600 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li className="flex flex-col gap-3 w-full mt-2">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="w-full cursor-pointer bg-pink-400 text-purple-900 rounded-lg shadow-md px-5 py-2 font-bold transition-transform duration-300 hover:bg-pink-500">
                🚀 Try Now
              </button>
            </Link>
            <Link href="https://github.com/PrakharParihar29" target="_blank" onClick={() => setIsOpen(false)}>
              <button className="w-full cursor-pointer bg-gray-900 text-white rounded-lg shadow-md px-5 py-2 font-bold transition-transform duration-300 hover:bg-black">
                💻 GitHub
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar