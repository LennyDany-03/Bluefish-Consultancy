"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Bluefish Consultancy</span>
          </div>

          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-500 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-500 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-gray-500 text-sm">&copy; 2025 Bluefish Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
