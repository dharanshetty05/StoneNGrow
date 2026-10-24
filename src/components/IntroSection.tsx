"use client";

import { useEffect, useRef, useState } from "react";
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
      id="intro"
      aria-labelledby="intro-heading"
      className="group overflow-hidden bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-24">
          {/* Introduction */}
          <div className="max-w-xl">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
            >
              <span
                aria-hidden="true"
                className="h-px w-9 bg-neutral-900"
              />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Your garden, thoughtfully considered
              </p>
            </div>

            <h2
              id="intro-heading"
              className={`mt-7 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl lg:text-[4.1rem] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "100ms" }}
            >
              A great garden starts with a considered plan.
            </h2>

            <div
              className={`mt-7 max-w-lg space-y-5 text-[15px] leading-7 text-neutral-600 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-base sm:leading-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "250ms" }}
            >
              <p>
                Your outdoor space should work for the way you actually live.
              </p>

              <p>
                Whether you&apos;re starting with a blank canvas, replacing a
                tired patio or planning a complete transformation, every
                decision should have a purpose. From the layout and materials
                to the finishing touches, we bring the details together
                through one clear process.
              </p>

              <p className="font-medium tracking-[-0.015em] text-neutral-900">
                Thoughtful design. Practical choices. A garden that feels like
                home.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div
            className={`self-center transition-opacity duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } motion-reduce:transition-none`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={[
                    "py-7 sm:py-9",
                    index % 2 === 0
                      ? "pr-5 sm:pr-10"
                      : "border-l border-neutral-900/15 pl-5 sm:pl-10",
                    index >= 2
                      ? "border-t border-neutral-900/15"
                      : "",
                  ].join(" ")}
                >
                  <div className="text-4xl font-medium leading-none tracking-[-0.055em] text-neutral-900 sm:text-5xl lg:text-[4rem]">
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="mt-4 max-w-[190px] text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                    {stat.label}
                  </p>

                  {stat.note && (
                    <p className="mt-1 text-xs leading-5 text-neutral-500">
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