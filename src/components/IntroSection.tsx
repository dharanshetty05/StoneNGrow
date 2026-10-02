import CountUp from "./CountUp";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Gardens transformed across Cork",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years of landscaping experience",
  },
  {
    value: 4.9,
    decimals: 1,
    prefix: "★ ",
    label: "Average customer rating",
    note: "from 100+ reviews",
  },
  {
    value: 100,
    suffix: "%",
    label: "Projects completed with care",
  },
];

export default function IntroSection() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="bg-[#f7f6f2]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-neutral-900"
              />

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                Your garden, done properly
              </p>
            </div>

            <h2
              id="intro-heading"
              className="mt-8 max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[4rem]"
            >
              A great garden starts with a plan.
            </h2>

            <div className="mt-7 max-w-lg space-y-5 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              <p>
                Your outdoor space should work for the way you actually live.
              </p>

              <p>
                Whether you&apos;re starting with an empty garden, replacing a
                tired patio or completely transforming the space, we bring
                design, materials and craftsmanship together through one clear
                process.
              </p>

              <p className="font-medium text-neutral-900">
                Thoughtful design. Proper materials. One clear process.
              </p>
            </div>
          </div>

          {/* Right: Statistics */}
          <div className="self-center">
            <div className="grid grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={[
                    "py-7 sm:py-8",
                    index % 2 === 0
                      ? "pr-7 sm:pr-10"
                      : "border-l border-neutral-300 pl-7 sm:pl-10",
                    index >= 2
                      ? "border-t border-neutral-300"
                      : "",
                  ].join(" ")}
                >
                  <div className="text-5xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-6xl lg:text-[4.25rem]">
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="mt-3 max-w-[180px] text-sm font-medium leading-5 text-neutral-600 sm:text-base sm:leading-6">
                    {stat.label}
                  </p>

                  {stat.note && (
                    <p className="mt-1 text-xs text-neutral-500">
                      {stat.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}