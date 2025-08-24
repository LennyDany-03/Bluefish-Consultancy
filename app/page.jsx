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
  User,
  Shield,
  Factory,
  Briefcase,
  Building,
  Scale,
  TrendingUp,
  ArrowRight,
  Quote,
  Send,
  Zap,
  Globe,
} from "lucide-react"
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
    <div className="min-h-screen relative bg-white">
      <InteractiveBackground />
      <Navbar />

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Govt. Certified Consultants</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                Simplifying <span className="text-blue-600">PF & Labor</span> Compliance
              </h1>

              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                We help businesses handle PF, ESI, Payroll, and Labor Law compliance with accuracy and ease. Focus on
                growing your business while we handle the complexities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover-lift flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="/services"
                  className="glass hover:glass-card text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover-lift flex items-center justify-center space-x-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Our Services</span>
                </Link>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="glass-card p-12 rounded-3xl max-w-md hover-lift">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto floating-animation">
                    <Handshake className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Building Trust Together</h3>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">Trusted by 200+ businesses across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-700">Comprehensive compliance solutions for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "PF Registration & Filing",
                desc: "Complete PF setup and monthly compliance",
                color: "from-blue-100 to-blue-200",
                iconColor: "text-blue-600",
              },
              {
                icon: Briefcase,
                title: "Payroll & ESI Management",
                desc: "End-to-end payroll and ESI solutions",
                color: "from-orange-100 to-orange-200",
                iconColor: "text-orange-600",
              },
              {
                icon: Scale,
                title: "Labor Law Advisory",
                desc: "Expert guidance on labor compliance",
                color: "from-green-100 to-green-200",
                iconColor: "text-green-600",
              },
              {
                icon: Factory,
                title: "Factory & Shops Act",
                desc: "Complete compliance solutions",
                color: "from-purple-100 to-purple-200",
                iconColor: "text-purple-600",
              },
            ].map((service, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover-lift group text-center space-y-4">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{service.title}</h4>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Why Choose Us</h2>
            <p className="text-xl text-gray-700">Trusted expertise with proven results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "10+", label: "Years Experience", color: "text-blue-600" },
              { icon: Users, value: "200+", label: "Happy Clients", color: "text-orange-600" },
              { icon: Globe, value: "PAN", label: "India Service", color: "text-green-600" },
              { icon: Shield, value: "100%", label: "Govt. Certified", color: "text-purple-600" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover-lift text-center space-y-4">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto`} />
                <div className={`text-4xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-700">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Gupta",
                role: "CEO, Tech Solutions",
                quote: "Bluefish made PF filing stress-free. Professional, responsive, and highly knowledgeable!",
                color: "from-blue-50 to-blue-100",
              },
              {
                name: "Priya Sharma",
                role: "HR Manager",
                quote: "Outstanding payroll service. They handle everything seamlessly, great value for money!",
                color: "from-orange-50 to-orange-100",
              },
              {
                name: "Amit Patel",
                role: "Director, Retail Chain",
                quote: "Unmatched expertise in labor law. Quick responses and always available when needed!",
                color: "from-green-50 to-green-100",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl hover-lift space-y-6 bg-gradient-to-br ${testimonial.color}`}
              >
                <Quote className="w-8 h-8 text-blue-600/50" />
                <p className="text-gray-900 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-700 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="glass-card p-16 rounded-3xl">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-8 floating-animation">
              <Zap className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Ready to Simplify Your Compliance?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't let compliance issues slow down your business. Get expert help today!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover-lift"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-700">Ready to simplify your compliance? Let's talk!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white backdrop-blur-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none text-gray-900 placeholder-gray-500"
                    placeholder="Tell us about your compliance needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover-lift flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", info: "+91 98765 43210", color: "text-blue-600" },
                    { icon: Mail, title: "Email", info: "info@bluefishconsultancy.com", color: "text-orange-600" },
                    {
                      icon: MapPin,
                      title: "Address",
                      info: "123 Business Park, Sector 18\nGurgaon, Haryana 122001",
                      color: "text-green-600",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{contact.title}</h4>
                        <p className="text-gray-700 whitespace-pre-line">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
