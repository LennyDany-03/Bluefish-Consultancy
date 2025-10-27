import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import TextAnime from "@/components/TextAnima"
import WhoWeAreSection from "@/components/WhoWeAreSection"
import WhyBlueFishSection from "@/components/WhyBlueFishSection"
import OurExpertiseSection from "@/components/OurExpertiseSection"

const page = () => {
  return (
    <>
      <Background />
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-12 sm:pt-16 md:pt-20 px-4">
        <div className="text-center px-2 sm:px-4 max-w-2xl mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-6 sm:mb-8 text-xs sm:text-sm">
            <span className="text-gray-300">✨ New Background</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              We Welcome you to
            </h3>
            <TextAnime />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Get Started
            </button>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Why BlueFish Section */}
      <WhyBlueFishSection />

      {/* Our Expertise Section */}
      <OurExpertiseSection />
    </>
  )
}

export default page
