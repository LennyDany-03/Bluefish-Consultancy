"use client"

import { motion } from "framer-motion"
import Navbar  from "../../components/Navbar"
import  Footer from "../../components/Footer"
import  InteractiveBackground  from "../../components/InteractiveBackground"

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Joseph Vijay Anand",
      position: "Founder & Managing Director",
      image: "/team-member-1.png",
      description:
        "With over 15 years of experience in PF and labor law compliance, Vijay leads our team with expertise and dedication.",
      expertise: ["PF Settlements", "Labor Law", "Compliance Strategy"],
    },
    {
      name: "Member 2",
      position: "Senior Compliance Manager",
      image: "images/team-2.png",
      description:
        "Priya specializes in complex case resolution and has successfully handled over 500+ PF settlement cases.",
      expertise: ["Complex Cases", "ESI Compliance", "Statutory Advisory"],
    },
    {
      name: "Member 3",
      position: "SEZ Compliance Specialist",
      image: "/professional-indian-man-in-business-casual.png",
      description:
        "Expert in SEZ unit compliance with deep knowledge of export-import regulations and zone-specific requirements.",
      expertise: ["SEZ Compliance", "Export Documentation", "Zone Regulations"],
    },
    {
      name: "Member 4",
      position: "Client Relations Manager",
      image: "/professional-indian-woman-smiling-in-office-settin.png",
      description:
        "Sneha ensures seamless client communication and manages relationships with our 200+ satisfied clients.",
      expertise: ["Client Management", "Communication", "Process Optimization"],
    },
  ]

  const values = [
    {
      title: "Expertise",
      description: "Deep knowledge in PF, ESI, and labor law compliance",
      icon: "🎯",
    },
    {
      title: "Reliability",
      description: "Consistent delivery and trustworthy service",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "Modern solutions for traditional compliance challenges",
      icon: "💡",
    },
    {
      title: "Dedication",
      description: "Committed to client success and satisfaction",
      icon: "⭐",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <InteractiveBackground />

      {/* Floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-blue-600">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our dedicated professionals bring years of experience in PF, ESI, and labor law compliance to help your
                business navigate complex regulatory requirements with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experts who make compliance simple and stress-free for businesses across India.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-100"
                        />
                      </motion.div>

                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our team and drive our commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 sm:p-12 text-white"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Growing Team</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We're always looking for talented professionals who share our passion for excellence in compliance and
                client service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  View Open Positions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Contact HR
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
