"use client"

import { useState, useRef, useEffect } from "react"
import { WobbleCard } from "./ui/wobble-card"
import { gsap } from "gsap"
import {
  Briefcase,
  RefreshCw,
  Edit3,
  Search,
  ShieldAlert,
  Building2,
  FileText,
  BarChart3,
  Scale,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

const OurExpertise = () => {
  const [activeTab, setActiveTab] = useState("individuals")
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            // Animate section title
            gsap.from(".expertise-title", {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: "power3.out",
            })

            // Animate tabs
            gsap.from(".tab-button", {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              delay: 0.3,
            })

            // Animate cards
            gsap.from(".expertise-card", {
              opacity: 0,
              y: 50,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              delay: 0.6,
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
      gradient: "from-violet-500/20 to-purple-500/20",
      iconBg: "bg-violet-500/20",
      iconColor: "text-violet-400",
    },
    {
      icon: RefreshCw,
      title: "PF Transfer & Withdrawal Support",
      description: "When UANs, previous employers, or service overlaps block your transfer — we fix it.",
      details: ["Checking transfer tracking via EPFO", "Escalation and follow-up until confirmation"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Edit3,
      title: "Name, DOB & KYC Correction Services",
      description: "We correct mismatches between EPFO, PAN, Aadhaar, and employer data.",
      details: [
        "Data verification and digital correction process",
        "Online claim rectification submission",
        "Liaison with employer for approval",
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: Search,
      title: "Unclaimed & Inoperative PF Accounts Recovery",
      description: "Reclaim your forgotten funds easily.",
      details: ["Identifying old accounts using your PAN/UAN", "Re-activating UANs linked to previous employments"],
      gradient: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-400",
    },
    {
      icon: ShieldAlert,
      title: "PF Claim Rejection Handling",
      description: "Rejections are not the end — we find the cause and resolve it.",
      details: ["Root-cause analysis from claim portal", "Documentation & re-submission through employer"],
      gradient: "from-rose-500/20 to-pink-500/20",
      iconBg: "bg-rose-500/20",
      iconColor: "text-rose-400",
    },
  ]

  const companiesServices = [
    {
      icon: Building2,
      title: "SEZ & Corporate PF Compliance",
      description: "Full support for SEZ units to meet special EPFO norms.",
      details: ["Monthly filing coordination", "Employee-wise compliance mapping", "Liaison during EPFO inspections"],
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconBg: "bg-indigo-500/20",
      iconColor: "text-indigo-400",
    },
    {
      icon: FileText,
      title: "Employer Registration & Code Allotment",
      description: "New establishment setup or transfer? We handle the PF registration end-to-end.",
      details: ["Online registration with EPFO", "DSC mapping & UAN generation setup"],
      gradient: "from-cyan-500/20 to-teal-500/20",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: BarChart3,
      title: "Monthly ECR Filing & Return Support",
      description: "Timely ECR preparation, validation, and upload with zero errors.",
      details: ["Salary capping logic (₹15,000 base) review", "Ensuring contribution compliance"],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Scale,
      title: "Audit, Inspection & Legal Representation",
      description: "When inspectors arrive, we ensure you're fully compliant.",
      details: ["Handling Section 7A inquiries", "Documentation review and representation"],
      gradient: "from-orange-500/20 to-red-500/20",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400",
    },
    {
      icon: Users,
      title: "Employee Exit & Settlement Process Management",
      description: "Automate exit procedures and reduce HR burden.",
      details: ["Tracking pending claims", "Coordinating with employees for KYC"],
      gradient: "from-fuchsia-500/20 to-purple-500/20",
      iconBg: "bg-fuchsia-500/20",
      iconColor: "text-fuchsia-400",
    },
  ]

  const currentServices = activeTab === "individuals" ? individualsServices : companiesServices

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative w-full min-h-screen py-12 md:py-16 px-4 overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0a0118]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#5227FF]/20 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[180px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#5227FF] rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="expertise-title text-center mb-1">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-[#5227FF] animate-pulse" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-[#5227FF] to-blue-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <Sparkles
              className="w-6 h-6 md:w-7 md:h-7 text-blue-500 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcase What We Do Best — the <span className="font-bold text-white">BlueFish Edge</span>
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8 md:mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("individuals")}
            className={`tab-button group relative px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 overflow-hidden ${
              activeTab === "individuals"
                ? "bg-gradient-to-r from-[#5227FF] to-blue-600 text-white shadow-2xl shadow-[#5227FF]/50 scale-105"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105 backdrop-blur-sm border border-white/10"
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              <span>For Individuals</span>
            </div>
            {activeTab === "individuals" && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("companies")}
            className={`tab-button group relative px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 overflow-hidden ${
              activeTab === "companies"
                ? "bg-gradient-to-r from-[#5227FF] to-blue-600 text-white shadow-2xl shadow-[#5227FF]/50 scale-105"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105 backdrop-blur-sm border border-white/10"
            }`}
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 md:w-5 md:h-5" />
              <span>For Companies</span>
            </div>
            {activeTab === "companies" && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            )}
          </button>
        </div>

        <div className="text-center mb-8 md:mb-12">
          {activeTab === "individuals" ? (
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
              Helping <span className="text-[#5227FF] font-bold">Employees</span> Resolve Their Most Complex PF Issues.
            </p>
          ) : (
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
              Compliance made simple — BlueFish ensures your organization stays{" "}
              <span className="text-[#5227FF] font-bold">100% PF-compliant</span>.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <WobbleCard
                key={`${activeTab}-${index}`}
                containerClassName={`expertise-card group h-full bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-[#d3eb19]/50 hover:bg-[#d3eb19]/10 transition-all duration-300 min-h-[320px]`}
              >
                <div className="flex flex-col h-full p-4 md:p-5">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#d3eb19] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  {/* Details */}
                  <ul className="space-y-2 mt-auto">
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-xs md:text-sm text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#5227FF] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </WobbleCard>
            )
          })}
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 text-center">How We Work</h3>
          <p className="text-base md:text-lg text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Our proven 3-step process ensures transparency and results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#5227FF]/30 to-blue-500/30 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 md:w-10 md:h-10 text-[#5227FF]" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#5227FF] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  1
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Understand the Case</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We study your PF issue or compliance gap in detail.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  2
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Take Transparent Action</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                All progress updates are shared directly with you.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  3
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Deliver Closure</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Every case ends with proof of resolution.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#5227FF] to-blue-600 text-white text-base md:text-lg font-bold rounded-xl shadow-2xl shadow-[#5227FF]/50 hover:shadow-[#5227FF]/70 hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  )
}

export default OurExpertise
