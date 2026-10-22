"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "A garden designed around how you live",
    description:
      "We start with how you want to use your outdoor space, then design around it. Whether you want somewhere to entertain, relax, play or simply enjoy from the kitchen window.",
  },
  {
    number: "02",
    title: "Practical from day one",
    description:
      "A beautiful garden should work just as well as it looks. We consider layout, materials, drainage and maintenance to create an outdoor space that suits everyday life.",
  },
  {
    number: "03",
    title: "A straightforward process",
    description:
      "You'll know what's happening and what comes next. From the initial consultation to the finishing touches, we keep communication clear and the process organised.",
  },
  {
    number: "04",
    title: "Craftsmanship in every detail",
    description:
      "The difference is often in the details. We focus on quality materials, considered finishes and careful workmanship to create a garden that feels complete.",
  },
];

export default function WhyStoneNGrow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-stone-and-grove"
      aria-labelledby="why-heading"
      className="group bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:grid-cols-[0.75fr_1.25fr] xl:gap-24">
          {/* Section Introduction */}
          <div className="max-w-xl lg:pr-6">
            <h2
              id="why-heading"
              className={`mt-6 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl lg:text-[4.1rem] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "100ms" }}
            >
              A better garden starts with a better plan.
            </h2>

            <p
              className={`mt-7 max-w-md text-[15px] leading-7 text-neutral-600 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-base sm:leading-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "250ms" }}
            >
              Your garden should feel like a natural extension of your home.
              We bring together thoughtful design, practical planning and
              careful workmanship to create outdoor spaces made for living.
            </p>
          </div>

          {/* Reasons */}
          <div className="border-t border-neutral-900/15">
            {reasons.map((reason, index) => (
              <article
                key={reason.number}
                className={`group/reason border-b border-neutral-900/15 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
                style={{
                  transitionDelay: isVisible
                    ? `${250 + index * 130}ms`
                    : "0ms",
                }}
              >
                <div className="grid gap-5 py-8 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-9 lg:grid-cols-[64px_1fr] lg:gap-8 lg:py-10">
                  <span className="text-xs font-medium tracking-[0.12em] text-neutral-400 transition-colors duration-300 group-hover/reason:text-neutral-900">
                    {reason.number}
                  </span>

                  <div className="grid gap-3 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] sm:gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-9">
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] text-neutral-900 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/reason:translate-x-1 sm:text-[1.65rem]">
                      {reason.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-neutral-500 sm:text-[15px] sm:leading-7">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 flex flex-col gap-5 border-t border-neutral-900/10 pt-8 transition-opacity duration-1000 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:pt-10 ${
            isVisible ? "opacity-100" : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:transition-none`}
          style={{ transitionDelay: "850ms" }}
        >
          <div>
            <p className="text-base font-medium tracking-[-0.02em] text-neutral-900">
              Thinking about transforming your garden?
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500 sm:text-base">
              Tell us what you have in mind. Let's explore the possibilities.
            </p>
          </div>

          <Link
            href="/contact"
            className="group/cta inline-flex w-fit shrink-0 items-center gap-2 text-base font-medium tracking-[-0.015em] text-neutral-900 transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none"
          >
            Discuss your garden
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}