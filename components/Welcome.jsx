"use client";
import SplitText from "@/components/SplitText";
import React from 'react'

const Welcome = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
  return (
    <>
        <SplitText
            text="Welcome to BlueFish Consultancy!"
            className="text-5xl font-semibold text-center"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
        />
    </>
  )
}

export default Welcome
