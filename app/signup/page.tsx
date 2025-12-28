import { FishSymbol } from "lucide-react"
import { SignupForm } from "@/components/signup-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-svh">

      {/* FIXED LOGO – TOP LEFT (GLOBAL) */}
      <div className="absolute left-6 top-6 z-50">
        <a href="/" className="flex items-center gap-2 font-medium text-white">
          <div className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md">
            <FishSymbol className="size-6" />
          </div>
          BlueFish Consultancy
        </a>
      </div>

      {/* MAIN GRID */}
      <div className="grid min-h-svh lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block">
          <img
            src="/image.jpg"
            alt="Login background"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.25]"
          />
        </div>

        {/* RIGHT LOGIN */}
        <div className="flex flex-col justify-center p-6 md:p-10 bg-black">
          <div className="mx-auto w-full max-w-xs">
            <SignupForm />
          </div>
        </div>

      </div>
    </div>
  )
}
