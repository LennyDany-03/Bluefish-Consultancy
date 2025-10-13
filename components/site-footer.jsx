import { Facebook, X, Linkedin, Instagram } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer
      aria-label="Footer"
      className="relative z-10 border-t border-white/10 bg-white/5 text-white/80 backdrop-blur"
      role="contentinfo"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-5">
        {/* top inner divider to mimic the reference look */}
        <div className="mb-4 h-px w-full bg-white/10" />

        {/* main row: brand | copyright | social icons */}
        <div className="grid grid-cols-3 items-center gap-3">
          {/* Brand (left) */}
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white/90 ring-1 ring-white/20 shadow-sm"
            >
              BF
            </span>
            <span className="text-sm font-medium text-white/90">Blue Fish Consultancy</span>
          </div>

          {/* Center copyright */}
          <p className="text-center text-xs sm:text-sm text-white/70">Copyright © 2025 Blue Fish Consultancy</p>

          {/* Social icons (right) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="group rounded-full border border-white/20 p-2 text-white/70 transition hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <Facebook className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="group rounded-full border border-white/20 p-2 text-white/70 transition hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="group rounded-full border border-white/20 p-2 text-white/70 transition hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <Linkedin className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="group rounded-full border border-white/20 p-2 text-white/70 transition hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <Instagram className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Secondary line: your tagline and contact info (kept minimal and centered) */}
        <div className="mt-3 text-center text-xs text-white/55">
          <span className="text-white/70">Provident Fund Experts – Pan India Service</span>
          <span className="mx-2 text-white/30">•</span>
          <a
            href="https://maps.google.com/?q=Chennai%2C+Tamil+Nadu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            Chennai, Tamil Nadu
          </a>
          <span className="mx-2 text-white/30">•</span>
          <a href="tel:+91-00000-00000" className="hover:text-white/80 transition-colors">
            +91 [Phone]
          </a>
          <span className="mx-2 text-white/30">•</span>
          <a href="mailto:[Email]" className="hover:text-white/80 transition-colors">
            [Email]
          </a>
        </div>
      </div>
    </footer>
  )
}
