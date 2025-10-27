import { Users, MapPin, Award, Zap } from "lucide-react"
import BeamsBackground from "./BeamsBackground"

const WhoWeAreSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BeamsBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We Simplify the Complex
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Helping individuals and companies achieve PF clarity with confidence
          </p>

          {/* Overview Paragraph */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 mb-12 backdrop-blur-sm">
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              BlueFish Consultancy is a specialized Provident Fund consultancy that focuses exclusively on complex PF
              cases — from individual settlements to nationwide corporate compliance. Established in 2022, we've guided
              hundreds of clients PAN India with transparent strategies and results-driven action.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all">
              <div className="flex justify-center mb-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-1">Expertise</p>
              <p className="text-sm sm:text-base font-bold text-white">Complex PF Cases</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all">
              <div className="flex justify-center mb-3">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-1">Coverage</p>
              <p className="text-sm sm:text-base font-bold text-white">PAN India</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all">
              <div className="flex justify-center mb-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-1">Clients Served</p>
              <p className="text-sm sm:text-base font-bold text-white">200+</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all">
              <div className="flex justify-center mb-3">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-1">Experience</p>
              <p className="text-sm sm:text-base font-bold text-white">10+ Years</p>
            </div>
          </div>

          {/* Differentiation */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 rounded-lg p-6 sm:p-8 mb-12 backdrop-blur-sm">
            <p className="text-gray-100 text-base sm:text-lg">
              While most consultants focus on routine filings, we focus on solving what others can't — rejected claims,
              mismatched data, and cross-state transfers.
            </p>
          </div>

          {/* Founder's Note */}
          <div className="border-l-4 border-blue-400 pl-6 py-4 text-left max-w-2xl mx-auto">
            <p className="text-gray-200 italic mb-3">
              "At BlueFish, every PF case is treated with personal attention. We believe clarity, honesty, and closure
              are the true pillars of client trust."
            </p>
            <p className="text-blue-400 font-semibold">— Joseph Vijay Anand, Compliance Partner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreSection
