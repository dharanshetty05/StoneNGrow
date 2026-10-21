"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="final-cta-heading"
      className="bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-xl bg-[#222522] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <div
              className={`transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <h2
                id="final-cta-heading"
                className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
              >
                Ready to make more of your garden?
              </h2>
            </div>

            <div
              className={`mt-8 max-w-2xl transform-gpu transition-all duration-1000 delay-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-base font-normal leading-7 text-white/70 sm:text-lg sm:leading-8">
                Whether you&apos;re refreshing an existing garden or planning
                a complete outdoor transformation, we&apos;ll help you explore
                what&apos;s possible for your space.
              </p>

              <p className="mt-5 text-base font-normal leading-7 text-white/70 sm:text-lg sm:leading-8">
                Tell us a little about your project and let&apos;s start a
                conversation.
              </p>
            </div>

            <div
              className={`mt-10 transform-gpu transition-all duration-1000 delay-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none sm:mt-12 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold tracking-[-0.01em] text-neutral-900 transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#222522] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span>Request a Quote</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={1.5}
                />
              </Link>
            </div>

            <p
              className={`mt-6 text-sm leading-6 text-white/45 transform-gpu transition-all duration-1000 delay-[650ms] motion-reduce:transform-none motion-reduce:transition-none ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              No obligation. Just a conversation about your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}