import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Tell us what you have in mind",
    description:
      "We start with a conversation about your garden, what you want to change and how you'd like to use the space.",
  },
  {
    number: "02",
    title: "Work out the right approach",
    description:
      "We look at the space, discuss your requirements and agree on the layout, materials and work involved before anything begins.",
  },
  {
    number: "03",
    title: "We take care of the work",
    description:
      "Once everything is agreed, our team handles the preparation, construction and finishing, keeping the work organised from start to finish.",
  },
  {
    number: "04",
    title: "Enjoy your finished garden",
    description:
      "You’re left with an outdoor space that looks right, works for everyday life and is built to be enjoyed for years to come.",
  },
];

export default function Process() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            A straightforward process, from first conversation to finished
            garden.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We keep things simple. You tell us what you want, we work out the
            details together, and our team takes care of the rest.
          </p>
        </div>

        <div className="mt-16 border-t border-neutral-200 lg:mt-20">
          <div className="grid md:grid-cols-2">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`py-10 md:px-10 md:py-12 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                } ${index < 2 ? "border-b border-neutral-200" : ""}`}
              >
                <div className="flex gap-6">
                  <span className="shrink-0 pt-1 text-sm font-medium text-neutral-400">
                    {step.number}
                  </span>

                  <div className="max-w-lg">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {step.description}
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
              Have a garden project in mind?
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Get in touch and tell us what you’re looking to create.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Discuss your project
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