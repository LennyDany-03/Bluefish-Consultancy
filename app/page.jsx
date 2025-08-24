"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Users,
  Handshake,
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
              <motion.div className="mt- flex-1 text-center lg:text-left space-y-8" variants={itemVariants}>
                <motion.div
                  className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-gray-500">Govt. Certified Consultants</span>
                </motion.div>

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
                  className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed px-2 sm:px-0"
                  variants={itemVariants}
                >
                  We help businesses handle PF, ESI, Payroll, and Labor Law compliance with accuracy and ease. Focus on
                  growing your business while we handle the complexities.
                </motion.p>

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
                      href="/services"
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
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100/50 rounded-full flex items-center justify-center mx-auto border border-gray-200"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <Handshake className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Building Trust Together</h3>
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
                    <p className="text-sm sm:text-base text-gray-500">Trusted by 200+ businesses across India</p>
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

        <motion.section
          id="contact"
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12 sm:mb-16 space-y-4 px-4 sm:px-0" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">Get In Touch</h2>
              <p className="text-lg sm:text-xl text-gray-500">Ready to simplify your compliance? Let's talk!</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
              <motion.div
                className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl space-y-6 border border-gray-200"
                variants={cardVariants}
              >
                <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-500 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100/50 backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Your Full Name"
                        required
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-500 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100/50 backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                        placeholder="+91 9876543210"
                        required
                      />
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100/50 backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all text-gray-900 placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100/50 backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
                      placeholder="Tell us about your compliance needs..."
                      required
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </motion.div>

              <motion.div className="space-y-8" variants={itemVariants}>
                <motion.div
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl space-y-6 border border-gray-200"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Phone, title: "Phone", info: "+91 98765 43210", color: "text-blue-600" },
                      { icon: Mail, title: "Email", info: "info@bluefishconsultancy.com", color: "text-emerald-500" },
                      {
                        icon: MapPin,
                        title: "Address",
                        info: "123 Business Park, Sector 18\nGurgaon, Haryana 122001",
                        color: "text-blue-500",
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="w-12 h-12 bg-gray-100/50 rounded-xl flex items-center justify-center border border-gray-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <contact.icon className={`w-6 h-6 ${contact.color}`} />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-gray-900">{contact.title}</h4>
                          <p className="text-gray-500 whitespace-pre-line">{contact.info}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}
