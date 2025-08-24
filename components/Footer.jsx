"use client"

import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative glass-card border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Bluefish Consultancy</h3>
            </div>
            <p className="text-gray-700">
              Your trusted partner for PF, ESI, and labor law compliance solutions across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Services</h4>
            <ul className="space-y-2">
              {["PF Registration", "ESI Compliance", "Payroll Management", "Labor Law Advisory"].map(
                (service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Company</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">info@bluefishconsultancy.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                <span className="text-gray-700">
                  123 Business Park, Sector 18
                  <br />
                  Gurgaon, Haryana 122001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-700">&copy; 2025 Bluefish Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
