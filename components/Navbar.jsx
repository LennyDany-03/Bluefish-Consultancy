"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Heart, Star, Phone } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl mx-auto z-50 backdrop-blur-3xl bg-white/80 border-2 border-white/60 rounded-2xl shadow-2xl shadow-blue-500/20">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Enhanced with glassmorphism */}
          <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-green-600 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl border-2 border-white/50 shadow-blue-500/30">
                <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white drop-shadow-lg" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-orange-600 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/60 shadow-lg shadow-orange-500/30">
                <Star className="w-2 h-2 lg:w-3 lg:h-3 text-white drop-shadow-lg" />
              </div>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-black text-gray-800 drop-shadow-md">
                <span className="lg:hidden">Bluefish</span>
                <span className="hidden lg:inline">Bluefish Consultancy</span>
              </h1>
              <p className="text-xs lg:text-sm text-orange-700 font-bold drop-shadow-md">
                <span className="lg:hidden">Trusted Partners</span>
                <span className="hidden lg:inline">Your Trusted Partners</span>
              </p>
            </div>
          </Link>

          {/* Desktop Menu - Enhanced glassmorphism hover effects */}
          <div className="hidden lg:flex items-center space-x-6">
            {["Home", "About Us", "Our Services", "Our Team", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-800 hover:text-blue-700 px-4 py-2 text-sm font-bold transition-all duration-300 relative group rounded-lg hover:bg-white/60 hover:backdrop-blur-xl hover:border-2 hover:border-white/40 hover:shadow-xl hover:shadow-blue-500/20"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-700 to-orange-700 transition-all duration-300 group-hover:w-3/4 rounded-full shadow-md"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button - Enhanced glassmorphism */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-700 to-green-700 backdrop-blur-xl text-white hover:from-orange-700 hover:to-orange-700 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl shadow-blue-500/30 hover:shadow-orange-500/40 flex items-center space-x-2 border-2 border-white/50"
            >
              <Phone className="w-4 h-4" />
              <span>Let&apos;s Chat</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced glassmorphism */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-800 hover:text-blue-700 focus:outline-none transition-colors duration-300 p-2 rounded-full hover:bg-white/60 hover:backdrop-blur-xl hover:border-2 hover:border-white/40 hover:shadow-lg"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced glassmorphism */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/60 backdrop-blur-3xl border-t-2 border-white/50 rounded-b-2xl shadow-inner">
          {["Home", "About Us", "Our Services", "Our Team", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-800 hover:text-blue-700 hover:bg-white/60 hover:backdrop-blur-xl block px-4 py-3 text-sm font-bold transition-all duration-300 rounded-lg border-l-4 border-transparent hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {item}
            </Link>
          ))}

          {/* Mobile CTA Button - Enhanced glassmorphism */}
          <div className="px-4 py-3">
            <Link
              href="/contact"
              className="w-full bg-gradient-to-r from-blue-700 to-green-700 backdrop-blur-xl text-white hover:from-orange-700 hover:to-orange-700 px-4 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-2xl shadow-blue-500/30 hover:shadow-orange-500/40 flex items-center justify-center space-x-2 border-2 border-white/50"
            >
              <Phone className="w-4 h-4" />
              <span>Let&apos;s Chat</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
