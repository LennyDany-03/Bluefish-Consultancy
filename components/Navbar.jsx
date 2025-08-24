"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Heart, Star, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const menuItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl mx-auto z-50 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="px-4 sm:px-6">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-12 lg:h-14" : "h-16 lg:h-20"
          }`}
        >
          <motion.div variants={logoVariants} whileHover="hover">
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="relative">
                <motion.div
                  className={`bg-blue-600 rounded-full flex items-center justify-center shadow-xl border border-gray-200 transition-all duration-300 ${
                    isScrolled ? "w-8 h-8 lg:w-10 lg:h-10" : "w-10 h-10 lg:w-12 lg:h-12"
                  }`}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)",
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Heart
                    className={`text-white transition-all duration-300 ${
                      isScrolled ? "w-4 h-4 lg:w-5 lg:h-5" : "w-5 h-5 lg:w-6 lg:h-6"
                    }`}
                  />
                </motion.div>
                <motion.div
                  className={`absolute -top-1 -right-1 bg-emerald-500 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 ${
                    isScrolled ? "w-3 h-3 lg:w-4 lg:h-4" : "w-4 h-4 lg:w-5 lg:h-5"
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Star
                    className={`text-white transition-all duration-300 ${
                      isScrolled ? "w-1.5 h-1.5 lg:w-2 lg:h-2" : "w-2 h-2 lg:w-3 lg:h-3"
                    }`}
                  />
                </motion.div>
              </div>
              <div>
                <h1
                  className={`font-black text-gray-900 transition-all duration-300 ${
                    isScrolled ? "text-base lg:text-lg" : "text-lg lg:text-xl"
                  }`}
                >
                  <span className="lg:hidden">Bluefish</span>
                  <span className="hidden lg:inline">Bluefish Consultancy</span>
                </h1>
                <p
                  className={`text-gray-500 font-bold transition-all duration-300 ${
                    isScrolled ? "text-xs" : "text-xs lg:text-sm"
                  }`}
                >
                  <span className="lg:hidden">Trusted Partners</span>
                  <span className="hidden lg:inline">Your Trusted Partners</span>
                </p>
              </div>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6">
            {["Home", "About Us", "Our Services", "Our Team", "Contact"].map((item, index) => (
              <motion.div key={index} variants={menuItemVariants} whileHover="hover">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-900 hover:text-gray-600 px-4 py-2 text-sm font-bold transition-colors duration-300 relative group rounded-lg underline-effect"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2 border border-blue-600"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone className="w-4 h-4" />
                </motion.div>
                <span>Let&apos;s Chat</span>
              </Link>
            </motion.div>
          </div>

          <motion.button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-900 hover:text-gray-600 focus:outline-none transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50/90 backdrop-blur-xl border-t border-gray-200 rounded-b-2xl">
              {["Home", "About Us", "Our Services", "Our Team", "Contact"].map((item, index) => (
                <motion.div key={index} custom={index} variants={mobileItemVariants} initial="hidden" animate="visible">
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-900 hover:text-gray-600 hover:bg-gray-100 block px-4 py-3 text-sm font-bold transition-all duration-300 rounded-lg border-l-4 border-transparent hover:border-blue-600"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="px-4 py-3"
                custom={5}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 border border-blue-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>Let&apos;s Chat</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
