import Navbar from "@/components/Navbar"
import Silk from "@/components/Silk"
import { FlipWords } from "@/components/flip-words"
import GettingStarted from "@/components/GettingStarted"
import SplitText from "@/components/Welcome"
import DotAnimation from "@/components/DotAnimation"
import PageLoader from "@/components/PageLoader"
import Slide2 from "../components/Slide2"
import OurExpertise from "../components/OurExpertise"

const page = () => {
  const words = ["Resolve", "Simplify", "Secure", "Protect"]

  return (
    <PageLoader>
      <Navbar />

      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Silk speed={5} scale={1} color="rgb(82, 39, 255)" noiseIntensity={1.5} rotation={0} />
        </div>

        <div className="absolute inset-0 flex justify-center items-center z-10 px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="mb-30">
              <SplitText />
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl mx-auto font-normal text-white text-center">
              Build
              <FlipWords words={words} className="text-white mb-5" /> <br />
              PF journey with BlueFish Consultancy
            </div>
            <div className="mt-10">
              <GettingStarted />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slide2 />
      </div>
      <div>
        <OurExpertise />
      </div>
    </PageLoader>
  )
}

export default page
