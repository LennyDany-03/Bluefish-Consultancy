"use client"

import { useState, useEffect, type ReactNode } from "react"
import { LoaderThree } from "@/components/ui/loader"

interface PageLoaderProps {
  children: ReactNode
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <LoaderThree />
          <div className="text-cyan-400 font-semibold text-lg tracking-wider animate-pulse">Welcome to BlueFish Consultancy...</div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
