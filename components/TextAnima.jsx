"use client"
import SplitText from "./SplitText"

const TextAnima = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!")
  }
  return (
    <div>
      <SplitText
        text="BlueFish Consultancy"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-white"
        delay={100}
        duration={1.0}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  )
}

export default TextAnima
