
"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const headingLines = [
    "A great garden",
    "starts with a",
  ];

  return (
    <section
      ref={sectionRef}
      id="intro"
      aria-labelledby="intro-heading"
      className="overflow-hidden bg-[#f3f1e9] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-24">

          {/* LEFT: Typography */}

          <div className="max-w-[560px]">

            <h2
              id="intro-heading"
              className="text-[clamp(2.8rem,4.5vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#25372b]"
            >
              {headingLines.map((line, index) => (
                <span
                  key={line}
                  className="block overflow-hidden pb-[0.06em]"
                >
                  <motion.span
                    initial={
                      shouldReduceMotion
                        ? false
                        : { y: "110%" }
                    }
                    animate={
                      isInView ? { y: "0%" } : {}
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1,
                      delay: shouldReduceMotion ? 0 : index * 0.15,
                      ease,
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}

              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? false
                      : { y: "110%" }
                  }
                  animate={
                    isInView ? { y: "0%" } : {}
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.1,
                    delay: shouldReduceMotion ? 0 : 0.3,
                    ease,
                  }}
                  className="block font-normal italic text-[#71836a]"
                >
                  considered plan.
                </motion.span>
              </span>
            </h2>

            {/* Subtle divider */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              animate={
                isInView ? { scaleX: 1 } : {}
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.55,
                ease,
              }}
              style={{ transformOrigin: "left" }}
              className="mt-9 h-px w-12 bg-[#71836a]"
            />

            {/* Description */}

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 14 }
              }
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.65,
                ease,
              }}
              className="mt-7 max-w-[440px] text-[15px] leading-[1.9] text-[#62685e] sm:text-base"
            >
              Your outdoor space should be more than just somewhere to look
              at. It should be somewhere to unwind, spend time with family
              and enjoy the outdoors.
            </motion.p>

          </div>

          {/* RIGHT: Photography */}

          <div className="relative">

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      clipPath: "inset(0 100% 0 0)",
                    }
              }
              animate={
                isInView
                  ? {
                      clipPath: "inset(0 0% 0 0)",
                    }
                  : {}
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 1.5,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease,
              }}
              className="relative aspect-[1.28/1] overflow-hidden bg-[#d9ddcf] sm:aspect-[1.3/1] lg:aspect-[1.2/1] xl:aspect-[1.28/1]"
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { scale: 1.08 }
                }
                animate={
                  isInView
                    ? { scale: 1 }
                    : {}
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.8,
                  delay: shouldReduceMotion ? 0 : 0.1,
                  ease,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/Garden_Intro.png"
                  alt="Landscaping professionals carefully planning a garden installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
