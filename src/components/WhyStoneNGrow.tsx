import { ArrowRight } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "A garden designed around how you live",
    description:
      "We start with how you want to use the space, then design around it. Whether you want somewhere to entertain, relax, play or simply enjoy from the kitchen window.",
  },
  {
    number: "02",
    title: "Practical from day one",
    description:
      "Beautiful is only useful if it works. We consider layout, materials, drainage, maintenance and everyday use so the finished garden is as practical as it is good-looking.",
  },
  {
    number: "03",
    title: "A straightforward process",
    description:
      "You’ll know what’s happening and when. From the initial consultation through to the final finishing touches, we keep the process clear and organised.",
  },
  {
    number: "04",
    title: "Work we’re proud to put our name to",
    description:
      "We take care with the details that are easy to overlook. Clean finishes, quality materials and careful workmanship make the difference between a garden that looks finished and one that feels finished.",
  },
];

export default function WhyStoneNGrow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            A better garden starts with a better plan.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We design and build outdoor spaces around the people who use them.
            The result is a garden that looks right, works well and feels like
            it belongs to your home.
          </p>
        </div>

        <div className="mt-16 border-t border-neutral-200 lg:mt-20">
          <div className="grid md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.number}
                className={`py-10 md:px-10 md:py-12 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                } ${index < 2 ? "border-b border-neutral-200" : ""}`}
              >
                <div className="flex gap-6">
                  <span className="shrink-0 pt-1 text-sm font-medium text-neutral-400">
                    {reason.number}
                  </span>

                  <div className="max-w-lg">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-2xl">
                      {reason.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-medium text-neutral-950">
              Thinking about improving your garden?
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Tell us what you have in mind and we’ll take it from there.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Discuss your garden
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