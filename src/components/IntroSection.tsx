
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      className="overflow-hidden bg-[#f3f1e9] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">

          {/* Left: Introduction */}
          <div className="max-w-xl">

            {/* Heading */}
            <h2
              id="intro-heading"
              className={`mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#25372b] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl lg:text-[4.2rem] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "100ms" }}
            >
              A great garden starts with a{" "}
              <span className="font-normal italic text-[#71836a]">
                considered plan.
              </span>
            </h2>

            {/* Supporting copy */}
            <div
              className={`mt-8 space-y-5 text-[15px] leading-7 text-[#62685e] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-base sm:leading-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "250ms" }}
            >
              <p className="text-lg leading-8 text-[#394a3b]">
                Your outdoor space should be more than just somewhere to look
                at. It should be somewhere to unwind, spend time with family
                and enjoy the outdoors.
              </p>

              <p>
                Whether you're refreshing an existing patio, making better
                use of your garden or planning a complete transformation, we
                take the time to understand your space and how you'd like to
                use it.
              </p>

              <p>
                From the layout and paving to the planting and finishing
                details, we bring every element together to create an outdoor
                space that's practical, welcoming and made to last.
              </p>
            </div>

            {/* Closing statement */}
            <div
              className={`mt-9 border-l-2 border-[#829078] pl-5 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="font-medium leading-7 text-[#304534]">
                Thoughtful design. Practical choices.
                <br />
                A garden that feels like home.
              </p>
            </div>
          </div>

          {/* Right: Garden Image */}
          <div
            className={`relative transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Decorative background frame */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#aab29e] sm:-right-5 sm:-top-5"
            />

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#d9ddcf] shadow-[0_20px_50px_rgba(38,59,46,0.12)] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]">
              <Image
                src="/images/Garden_Intro.png"
                alt="Beautifully designed garden and landscaped outdoor space"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.03]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
