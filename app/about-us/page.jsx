"use client"

import { motion } from "framer-motion"
import {
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Phone,
  MessageCircle,
  Building,
  User,
  FileText,
  Star,
} from "lucide-react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import InteractiveBackground from "../../components/InteractiveBackground"

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const values = [
    {
      icon: CheckCircle,
      title: "Govt. Certified Consultants",
      description: "Our team holds official government certifications",
    },
    {
      icon: Award,
      title: "10+ Years of Experience",
      description: "Decade of expertise in compliance management",
    },
    {
      icon: Users,
      title: "200+ Clients Across India",
      description: "Trusted by businesses nationwide",
    },
    {
      icon: TrendingUp,
      title: "End-to-End Compliance Solutions",
      description: "Complete regulatory support under one roof",
    },
  ]

  const stats = [
    {
      icon: Building,
      number: "200+",
      label: "Businesses Served",
    },
    {
      icon: User,
      number: "15+",
      label: "Years Combined Experience",
    },
    {
      icon: FileText,
      number: "1000+",
      label: "Compliance Filings Completed",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Satisfaction",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <InteractiveBackground />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              About <span className="text-blue-600">Bluefish</span> Consultancy
            </motion.h1>
            <motion.p className="text-xl sm:text-2xl text-gray-600 mb-8" variants={itemVariants}>
              Your Trusted Partner in PF, ESI, Payroll & Labor Compliance
            </motion.p>
            <motion.div className="w-24 h-1 bg-blue-600 mx-auto" variants={itemVariants} />
          </div>
        </motion.section>

        {/* Company Story Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Who We Are</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Bluefish Consultancy is a government-certified compliance consultancy helping businesses across
                      India simplify PF, ESI, Payroll, and labor law regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our mission is to take the complexity out of compliance so businesses can focus on growth.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become India's most trusted partner in labor law and compliance management.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <Building className="w-24 h-24 text-blue-600" />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">Professional Excellence in Compliance</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Businesses Trust Us</h2>
              <p className="text-xl text-gray-600">Delivering excellence through expertise and reliability</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-300">Numbers that speak for our commitment</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Meet the Founder Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            </motion.div>

            <motion.div className="bg-gray-50 rounded-2xl p-8 sm:p-12" variants={itemVariants}>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-24 h-24 text-blue-600" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Joseph Vijay Anand</h3>
                  <p className="text-blue-600 font-semibold mb-4">Founder & Chief Consultant</p>
                  <p className="text-gray-600 leading-relaxed">
                    "With 15+ years of experience in PF, ESI, and labor law advisory, Joseph Vijay has been instrumental in
                    guiding businesses through regulatory complexities. His expertise and dedication have helped
                    hundreds of companies achieve seamless compliance."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" variants={itemVariants}>
              Let us handle your compliance, so you can handle your business growth.
            </motion.h2>
            <motion.p className="text-xl text-blue-100 mb-8" variants={itemVariants}>
              Ready to simplify your compliance journey?
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Let's Chat
              </motion.button>
              <motion.button
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Book Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
        <Footer />
      </main>

    </div>
  )
}
