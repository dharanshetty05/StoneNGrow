import { ArrowDown } from "lucide-react";

export default function IntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="bg-[#f7f6f2]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Section Marker */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10 bg-neutral-900"
                aria-hidden="true"
              />

              <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
                YOUR GARDEN, DONE PROPERLY
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <h2
              id="intro-heading"
              className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl"
            >
              A great garden starts with a plan.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              <p>
                Your outdoor space should work for the way you actually live.
              </p>

              <p>
                Whether you&apos;re starting with an empty garden, replacing a
                tired patio or completely transforming the space, we bring
                design, materials and craftsmanship together through one clear
                process.
              </p>

              <p className="font-medium text-neutral-800">
                Thoughtful design. Proper materials. One clear process.
              </p>
            </div>

            {/* Continue to next section */}
            <a
              href="#process"
              aria-label="Continue to the next section"
              className="mt-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors duration-200 hover:border-neutral-500 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f2]"
            >
              <ArrowDown
                className="h-4 w-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}