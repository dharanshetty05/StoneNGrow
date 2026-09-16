import { ArrowDown } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Eyebrow / Section Marker */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 bg-neutral-900"
                aria-hidden="true"
              />

              <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
                YOUR GARDEN, DONE PROPERLY
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              A great garden starts with a plan.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              <p>
                Your outdoor space should work for the way you actually live.
              </p>

              <p>
                Whether you&apos;re starting with an empty garden, replacing a
                tired patio or completely transforming the space, we bring the
                design, materials and workmanship together into one clear
                process.
              </p>

              <p>
                No unnecessary complexity. Just a better outdoor space, built
                properly.
              </p>
            </div>

            {/* Visual continuation cue */}
            <div
              className="mt-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700"
              aria-hidden="true"
            >
              <ArrowDown className="h-4 w-4" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}