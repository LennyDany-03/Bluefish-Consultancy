import { TracingBeam } from "@/components/ui/tracing-beam"
import { FlipWords } from "@/components/ui/flip-words"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import DottedGlowBackground from "@/components/ui/dotted-glow-background"
import NavbarDemo from "@/components/navbar-demo"

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum
          reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt
          enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
          reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit
          laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat
          veniam commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit
          adipisicing. Proident duis exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat
          adipisicing officia qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia
          aliquip deserunt veniam deserunt officia adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor
          et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do
          do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum
          occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt
          reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut
          mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor
          et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do
          do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum
          occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function HomePage() {
  const words = ["better", "modern", "impactful", "fast"]
  return (
    <div className="relative min-h-screen bg-black text-white">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10">
        <NavbarDemo />

        <main className="relative">
          <section aria-label="Hero" className="flex h-[100svh] flex-col items-center justify-center px-6 text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
              BETA RELEASE
            </span>

            <h1 className="text-balance text-4xl font-light leading-tight text-white/90 md:text-6xl">
              Unlock your <span className="italic">future</span> growth with{" "}
              <span className="inline-block">
                <FlipWords words={words} className="px-1 text-white" duration={2600} />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-sm text-white/70 md:text-base">
              Through modern strategies and delightful UX that outperform the market.
            </p>

            <div className="mt-10">
              <HoverBorderGradient
                as="a"
                href="#features"
                containerClassName="rounded-full"
                className="bg-black text-white"
              >
                <span className="px-4">Contact Us</span>
              </HoverBorderGradient>
            </div>
          </section>

          <section id="features" className="relative py-16">
            <TracingBeam className="px-6">
              <div className="max-w-2xl mx-auto antialiased relative">
                {dummyContent.map((item, index) => (
                  <div key={`content-${index}`} className="mb-12">
                    <h2 className="rounded-full bg-white/10 px-4 py-1 text-sm text-white w-fit mb-4">{item.badge}</h2>

                    <p className="mb-4 text-xl">{item.title}</p>

                    <div className="prose prose-invert text-sm">
                      {item?.image && (
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt="section visual"
                          height="1000"
                          width="1000"
                          className="mb-8 rounded-lg object-cover"
                        />
                      )}
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </TracingBeam>
          </section>
        </main>
      </div>
    </div>
  )
}
