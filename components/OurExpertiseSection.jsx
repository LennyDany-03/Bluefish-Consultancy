"use client"

import { Briefcase, FileText, UserCheck, CreditCard, Shield, LogOut } from "lucide-react"
import PlasmaBackground from "./PlasmaBackground"
import { useState } from "react"

const OurExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState("individuals")

  const individualsServices = [
    {
      icon: Briefcase,
      title: "PF Final Settlement Assistance",
      description:
        "We ensure your final PF claim is processed smoothly, even when accounts are inactive or multiple UANs exist.",
      details: [
        "Verification of past service history",
        "Guidance on Form 19, 10C, and composite claim submission",
        "Handling of rejections or returned claims",
      ],
    },
    {
      icon: FileText,
      title: "PF Transfer & Withdrawal Support",
      description: "When UANs, previous employers, or service overlaps block your transfer — we fix it.",
      details: ["Checking transfer tracking via EPFO", "Escalation and follow-up until confirmation"],
    },
    {
      icon: UserCheck,
      title: "Name, DOB & KYC Correction Services",
      description: "We correct mismatches between EPFO, PAN, Aadhaar, and employer data.",
      details: [
        "Data verification and digital correction process",
        "Online claim rectification submission",
        "Liaison with employer for approval",
      ],
    },
    {
      icon: CreditCard,
      title: "Unclaimed & Inoperative PF Accounts Recovery",
      description: "Reclaim your forgotten funds easily.",
      details: ["Identifying old accounts using your PAN/UAN", "Re-activating UANs linked to previous employments"],
    },
    {
      icon: Shield,
      title: "PF Claim Rejection Handling",
      description: "Rejections are not the end — we find the cause and resolve it.",
      details: ["Root-cause analysis from claim portal", "Documentation & re-submission through employer"],
    },
  ]

  const companiesServices = [
    {
      icon: Briefcase,
      title: "SEZ & Corporate PF Compliance",
      description: "Full support for SEZ units to meet special EPFO norms.",
      details: ["Monthly filing coordination", "Employee-wise compliance mapping", "Liaison during EPFO inspections"],
    },
    {
      icon: FileText,
      title: "Employer Registration & Code Allotment",
      description: "New establishment setup or transfer? We handle the PF registration end-to-end.",
      details: ["Online registration with EPFO", "DSC mapping & UAN generation setup"],
    },
    {
      icon: UserCheck,
      title: "Monthly ECR Filing & Return Support",
      description: "Timely ECR preparation, validation, and upload with zero errors.",
      details: ["Salary capping logic (₹15,000 base) review", "Ensuring contribution compliance"],
    },
    {
      icon: Shield,
      title: "Audit, Inspection & Legal Representation",
      description: "When inspectors arrive, we ensure you're fully compliant.",
      details: ["Handling Section 7A inquiries", "Documentation review and representation"],
    },
    {
      icon: LogOut,
      title: "Employee Exit & Settlement Process Management",
      description: "Automate exit procedures and reduce HR burden.",
      details: ["Tracking pending claims", "Coordinating with employees for KYC"],
    },
  ]

  const services = activeTab === "individuals" ? individualsServices : companiesServices

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <PlasmaBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Our Expertise</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">Showcase What You Do Best — the BlueFish Edge</p>

          {/* Tab Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab("individuals")}
              className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "individuals"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50"
                  : "bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20"
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab("companies")}
              className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "companies"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50"
                  : "bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20"
              }`}
            >
              For Companies
            </button>
          </div>

          {/* Tab Description */}
          <p className="text-gray-300 text-base sm:text-lg mb-12 max-w-3xl mx-auto">
            {activeTab === "individuals"
              ? "Helping Employees Resolve Their Most Complex PF Issues"
              : "Compliance made simple — BlueFish ensures your organization stays 100% PF-compliant"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-orange-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg group-hover:from-orange-500/40 group-hover:to-red-500/40 transition-all flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400 group-hover:text-red-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{service.description}</p>

                {/* Details List */}
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* How We Work Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">1</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Understand the Case</h4>
              <p className="text-gray-300 text-sm sm:text-base">We study your PF issue or compliance gap thoroughly.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">2</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Take Transparent Action</h4>
              <p className="text-gray-300 text-sm sm:text-base">All progress updates are shared directly with you.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">3</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Deliver Closure</h4>
              <p className="text-gray-300 text-sm sm:text-base">Every case ends with proof of resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurExpertiseSection
