"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceAreas = [
  {
    name: "Cork City",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Douglas",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ballincollig",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Carrigaline",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Glanmire",
    image:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bishopstown",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Blarney",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
];

export default function ServiceArea() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="group overflow-hidden bg-[#f4f1eb] px-6 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p
            className="mb-6 translate-y-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 opacity-0 transition-all duration-700 group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
          >
            Our service areas
          </p>

          <h2
            id="service-areas-heading"
            className="translate-y-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:text-5xl lg:text-[4rem]"
            style={{ transitionDelay: "100ms" }}
          >
            Beautiful outdoor spaces across Cork.
          </h2>

          <p
            className="mt-7 max-w-2xl translate-y-4 text-base leading-7 text-neutral-600 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:text-lg sm:leading-8"
            style={{ transitionDelay: "250ms" }}
          >
            From Cork City to the surrounding communities, we create
            thoughtfully designed gardens and outdoor spaces tailored to
            your home and the way you live.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-20 sm:gap-x-5 sm:gap-y-12 lg:mt-24 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
          {serviceAreas.map((area, index) => (
            <article
              key={area.name}
              className="translate-y-5 opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-[.is-visible]:translate-y-0 group-[.is-visible]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
              style={{ transitionDelay: `${350 + index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-lg bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={`Landscaping and outdoor spaces in ${area.name}, Cork`}
                    fill
                    unoptimized
                    sizes="(max-width: 639px) calc(50vw - 28px), (max-width: 1023px) calc(50vw - 36px), (max-width: 1456px) calc(25vw - 36px), 332px"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] motion-reduce:transition-none"
                  />
                </div>
              </div>

              <h3 className="mt-4 text-base font-medium tracking-[-0.025em] text-neutral-900 sm:mt-5 sm:text-lg">
                {area.name}
              </h3>
            </article>
          ))}
        </div>

        <div
          className="mt-20 flex flex-col gap-5 border-t border-neutral-900/10 pt-8 opacity-0 transition-opacity duration-[950ms] sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-10 group-[.is-visible]:opacity-100 motion-reduce:opacity-100 motion-reduce:transition-none"
          style={{ transitionDelay: "1.2s" }}
        >
          <p className="text-sm leading-6 text-neutral-500 sm:text-base">
            Planning a garden project outside these areas?
          </p>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 text-base font-medium tracking-[-0.02em] text-neutral-900 transition-opacity duration-300 hover:opacity-60 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb]"
          >
            <span>Let&apos;s talk.</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}