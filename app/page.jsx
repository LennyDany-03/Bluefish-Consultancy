"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Shield,
  Factory,
  Briefcase,
  Building,
  Scale,
  TrendingUp,
  ArrowRight,
  Send,
  Zap,
  Globe,
  Fish,
  Store,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/Navbar"
import InteractiveBackground from "@/components/InteractiveBackground"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="min-h-screen relative bg-gray-50">
      <div className="floating-particles fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <InteractiveBackground />
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-10">
        <motion.section
          id="home"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ y }}
        >
          <motion.div
            className="max-w-7xl mx-auto w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <motion.div className="mt-20 flex-1 text-center lg:text-left space-y-8" variants={itemVariants}>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight"
                  variants={itemVariants}
                >
                  Simplifying{" "}
                  <span className="gradient-text">
                    PF &<br className="sm:hidden" /> Labor
                  </span>{" "}
                  Compliance
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed px-2 sm:px-0"
                  variants={itemVariants}
                >
                  We bring expert compliance solutions directly to your business. From our expertise to your peace of
                  mind - handling PF, ESI, Payroll, and Labor Law compliance with precision and care.
                </motion.p>

                <motion.div
                  className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-600"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">Govt. Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold">15+ Years Experience</span>
                  </div>
                </motion.div>

                <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-0" variants={itemVariants}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl w-full sm:w-auto"
                    >
                      <motion.div whileHover={{ rotate: 12 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                      <span>Book Consultation</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/our-services"
                      className="bg-white/80 backdrop-blur-xl hover:bg-white text-gray-900 hover:text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 border border-gray-200 w-full sm:w-auto"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Our Services</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="flex-1 flex justify-center mt-8 lg:mt-0" variants={itemVariants}>
                <motion.div
                  className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-3xl max-w-sm w-full mx-4 sm:mx-0 border border-gray-200"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="text-center space-y-4 sm:space-y-6">
                    <motion.div
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto border-4 border-blue-200"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <Fish className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Your Compliance Partner</h3>
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      "From our expertise to your success - delivering compliance solutions right to your doorstep"
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 font-semibold">
                      Trusted by 200+ businesses across India
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-12 sm:mb-16 space-y-4 px-4 sm:px-0" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">Our Services</h2>
              <p className="text-lg sm:text-xl text-gray-500">Comprehensive compliance solutions for your business</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Building,
                  title: "PF Registration & Filing",
                  desc: "Complete PF setup and monthly compliance",
                  color: "bg-gray-100/50",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Briefcase,
                  title: "Payroll & ESI Management",
                  desc: "End-to-end payroll and ESI solutions",
                  color: "bg-gray-100/50",
                  iconColor: "text-emerald-500",
                },
                {
                  icon: Scale,
                  title: "Labor Law Advisory",
                  desc: "Expert guidance on labor compliance",
                  color: "bg-gray-100/50",
                  iconColor: "text-blue-500",
                },
                {
                  icon: Factory,
                  title: "Factory & Shops Act",
                  desc: "Complete compliance solutions",
                  color: "bg-gray-100/50",
                  iconColor: "text-emerald-400",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl group text-center space-y-4 border border-gray-200"
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <motion.div
                    className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mx-auto border border-gray-200`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 text-lg">{service.title}</h4>
                  <p className="text-gray-500">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-12 sm:mb-16 space-y-4 px-4 sm:px-0" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">Why Choose Us</h2>
              <p className="text-lg sm:text-xl text-gray-500">Trusted expertise with proven results</p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: TrendingUp, value: "10+", label: "Years Experience", color: "text-blue-600" },
                { icon: Users, value: "200+", label: "Happy Clients", color: "text-emerald-500" },
                { icon: Globe, value: "PAN", label: "India Service", color: "text-blue-500" },
                { icon: Shield, value: "100%", label: "Govt. Certified", color: "text-emerald-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl text-center space-y-4 border border-gray-200"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className={`w-12 h-12 ${stat.color} mx-auto`} />
                  </motion.div>
                  <motion.div
                    className={`text-4xl font-black ${stat.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              className="bg-white/80 backdrop-blur-xl p-16 rounded-3xl border border-gray-200"
              variants={cardVariants}
            >
              <motion.div
                className="w-24 h-24 bg-gray-100/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-200"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
              >
                <Zap className="w-12 h-12 text-amber-500" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Ready to Simplify Your Compliance?
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 mb-6 sm:mb-8 px-4 sm:px-0">
                Don't let compliance issues slow down your business. Get expert help today!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 shadow-xl"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Get Free Consultation</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}

