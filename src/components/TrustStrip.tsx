
"use client";

import { useEffect, useRef, useState } from "react";

const trustSignals = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 5.0,
    suffix: "",
    label: "Google Rating",
    decimal: true,
    star: true,
  },
  {
    value: "Cork",
    label: "Based & Serving",
    static: true,
  },
];

function AnimatedNumber({
  value,
  decimal = false,
  suffix = "",
  start,
}: {
  value: number;
  decimal?: boolean;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame: number;
    const duration = 1800;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(value * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value]);

  return (
    <>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </>
  );
}

export default function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Stone & Grove Landscapes trust signals"
      className="relative z-20 -mt-10 px-5 sm:-mt-12 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 overflow-hidden rounded-sm border border-neutral-300 bg-[#e8e5dc] sm:grid-cols-4">
          {trustSignals.map((item, index) => (
            <div
              key={item.label}
              className={`
                flex min-h-24 flex-col items-center justify-center
                px-4 py-5 text-center sm:min-h-28 sm:px-5
                ${index % 2 === 0 ? "border-r border-neutral-300" : ""}
                ${index < 2 ? "border-b border-neutral-300 sm:border-b-0" : ""}
                ${index === 1 || index === 2 ? "sm:border-r" : ""}
              `}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-medium tracking-tight text-neutral-900 sm:text-2xl">
                  {item.static ? (
                    item.value
                  ) : (
                    <AnimatedNumber
                      value={item.value as number}
                      decimal={item.decimal}
                      suffix={item.suffix}
                      start={isVisible}
                    />
                  )}
                </span>

                {item.star && (
                  <span
                    aria-hidden="true"
                    className="text-lg text-[#967b5d]"
                  >
                    ★
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-600 sm:text-[11px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
