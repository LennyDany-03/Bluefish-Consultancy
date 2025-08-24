"use client"

import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import InteractiveBackground from "../../components/InteractiveBackground"

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "Provident Fund (PF) Settlements",
      description:
        "We handle end-to-end PF settlement cases, ensuring smooth withdrawal, transfer, and claim processing—even in challenging situations.",
      icon: "💼",
      features: ["End-to-end settlement", "Withdrawal processing", "Transfer assistance", "Claim resolution"],
    },
    {
      id: 2,
      title: "Compliance for SEZ Units",
      description:
        "Specialized consultancy for Special Economic Zone (SEZ) organizations, covering PF compliance, employee settlements, and statutory obligations.",
      icon: "🏢",
      features: ["SEZ compliance", "Employee settlements", "Statutory obligations", "Regulatory guidance"],
    },
    {
      id: 3,
      title: "Complex Case Resolution",
      description:
        "We specialize in resolving challenging PF-related issues that require expert intervention and detailed analysis.",
      icon: "🔧",
      features: [
        "PF account mismatches",
        "Dual/multiple UANs",
        "Date of birth/name discrepancies",
        "Unclaimed PF accounts",
        "Missing contribution histories",
      ],
    },
    {
      id: 4,
      title: "Statutory Advisory & Support",
      description:
        "We provide professional guidance on labour law compliance, PF-related statutory filings, and ensure businesses meet regulatory standards.",
      icon: "📋",
      features: ["Labour law compliance", "Statutory filings", "Regulatory standards", "Professional guidance"],
    },
    {
      id: 5,
      title: "Personalized Consultancy",
      description:
        "Every case is unique. We offer tailored consultancy services designed to meet the specific requirements of our clients, ensuring complete compliance with no loose ends.",
      icon: "🎯",
      features: ["Tailored solutions", "Specific requirements", "Complete compliance", "No loose ends"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <InteractiveBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <motion.section
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Blue Fish Consultancy, we focus exclusively on complex Provident Fund (PF) and compliance solutions.
              Our goal is to ensure that businesses, SEZ units, and individuals can confidently manage statutory
              obligations without delays or complications.
            </motion.p>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Our Services */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Why Choose Our Services?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Knowledge",
                  description: "Deep understanding of PF regulations and compliance requirements",
                  icon: "🎓",
                },
                {
                  title: "Proven Results",
                  description: "Successfully resolved complex cases for 200+ businesses across India",
                  icon: "✅",
                },
                {
                  title: "Personalized Approach",
                  description: "Tailored solutions designed to meet your specific business needs",
                  icon: "🤝",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              Ready to Simplify Your PF Compliance?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Let our experts handle your complex PF cases while you focus on growing your business.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                📞 Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  )
}
