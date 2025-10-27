import { Lightbulb, Cog, Eye, Users, Zap } from "lucide-react"
import DarkVeilBackground from "./DarkVeilBackground"

const WhyBlueFishSection = () => {
  const differentiators = [
    {
      icon: Lightbulb,
      title: "Expertise in Complex Cases",
      description: "We solve rejected, delayed, or disputed PF cases others avoid.",
    },
    {
      icon: Cog,
      title: "End-to-End Handling",
      description: "From claim tracking to closure, we manage it all.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Clients see every step — no hidden updates.",
    },
    {
      icon: Users,
      title: "PAN India Support",
      description: "Serving clients and companies across India.",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Time-bound processing and follow-ups that deliver results.",
    },
  ]

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeilBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Why BlueFish?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">Because We Think Beyond Routine PF</p>

          {/* Subheading */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 mb-12 backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-gray-200 text-base sm:text-lg">
              At BlueFish, we go beyond standard procedures. Our focus is on accuracy, transparency, and closure — three
              things most clients never experience in typical PF processes.
            </p>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-2 border-transparent bg-clip-padding p-6 sm:p-8 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1)), linear-gradient(to right, rgb(15, 23, 42), rgb(30, 41, 59))",
                  borderImage: "linear-gradient(135deg, #3b82f6, #22c55e) 1",
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg group-hover:from-blue-500/40 group-hover:to-green-500/40 transition-all">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-green-400 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
        </div>
      </div>
    </div>
  )
}

export default WhyBlueFishSection
