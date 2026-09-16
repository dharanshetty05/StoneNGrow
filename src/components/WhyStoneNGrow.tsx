import { ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Designed around your space",
    description:
      "Every garden is different. We consider how you use it before deciding what goes into it.",
  },
  {
    number: "02",
    title: "Built for everyday life",
    description:
      "We focus on practical layouts, durable materials and details that continue to work long after the project is finished.",
  },
  {
    number: "03",
    title: "One clear process",
    description:
      "From the first conversation to the finished garden, everything is planned around a straightforward process.",
  },
  {
    number: "04",
    title: "Quality you can see",
    description:
      "Good workmanship, careful finishing and attention to the small details that make the finished space feel complete.",
  },
];

export default function WhyStoneNGrow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 bg-neutral-900"
                aria-hidden="true"
              />

              <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
                WHY HOMEOWNERS CHOOSE US
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Good landscaping is about more than making a garden look better.
            </h2>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-16 border-t border-neutral-200 lg:mt-24">
          <div className="grid md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.number}
                className={`border-b border-neutral-200 py-10 md:px-8 md:py-12 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                } ${
                  index >= 2 ? "md:border-b-0" : ""
                }`}
              >
                <div className="flex gap-6 sm:gap-8">
                  {/* Number */}
                  <span className="shrink-0 pt-1 text-xs font-semibold tracking-[0.12em] text-neutral-400">
                    {reason.number}
                  </span>

                  {/* Content */}
                  <div className="max-w-md">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-2xl">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-neutral-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-7 text-neutral-500">
            A well-planned garden should feel natural, useful and considered
            from the moment you step outside.
          </p>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-neutral-900"
          >
            Start a conversation

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}