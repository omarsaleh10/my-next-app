"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-black p-4 md:p-8 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-lg md:text-xl font-semibold">printforge</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li>
            <Link
              href="/"
              className={`uppercase tracking-wide text-sm font-medium hover:text-gray-600 transition-colors ${
                pathname === "/" ? "text-orange-500" : "text-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`uppercase tracking-wide text-sm font-medium hover:text-gray-600 transition-colors ${
                pathname === "/about" ? "text-orange-500" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/models"
              className={`uppercase tracking-wide text-sm font-medium hover:text-gray-600 transition-colors ${
                pathname.startsWith("/models") ? "text-orange-500" : "text-gray-700"
              }`}
            >
              3D Models
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`uppercase tracking-wide text-sm font-medium hover:text-gray-600 transition-colors ${
                pathname === "/contact" ? "text-orange-500" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="py-4 space-y-3 border-t border-gray-100">
          <li>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 uppercase tracking-wide text-sm font-medium hover:bg-gray-50 transition-colors ${
                pathname === "/" ? "text-orange-500 bg-gray-50" : "text-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 uppercase tracking-wide text-sm font-medium hover:bg-gray-50 transition-colors ${
                pathname === "/about" ? "text-orange-500 bg-gray-50" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/models"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 uppercase tracking-wide text-sm font-medium hover:bg-gray-50 transition-colors ${
                pathname.startsWith("/models") ? "text-orange-500 bg-gray-50" : "text-gray-700"
              }`}
            >
              3D Models
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 uppercase tracking-wide text-sm font-medium hover:bg-gray-50 transition-colors ${
                pathname === "/contact" ? "text-orange-500 bg-gray-50" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
} 