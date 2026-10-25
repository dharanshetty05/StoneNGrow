"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Garden Design",
    description:
      "Thoughtful layouts, planting and materials shaped around your outdoor space, lifestyle and budget.",
    image: "/services/garden-design.png",
    alt: "Thoughtfully designed residential garden",
  },
  {
    number: "02",
    title: "Patios & Paving",
    description:
      "Well-planned patios and durable paving that create a natural setting for dining, entertaining and everyday life.",
    image: "/services/patios-paving.png",
    alt: "Finished patio and paving in a residential garden",
  },
  {
    number: "03",
    title: "Planting & Lawns",
    description:
      "New lawns, considered planting schemes and carefully chosen details that bring the garden together.",
    image: "/services/planting-lawns.png",
    alt: "Lawn and planting scheme in a landscaped garden",
  },
  {
    number: "04",
    title: "Fencing & Features",
    description:
      "Fencing, pathways, raised beds and garden features that add privacy, structure and character to your space.",
    image: "/services/fencing-features.png",
    alt: "Timber fencing and features in a residential garden",
  },
];

export default function ServicesSection() {
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
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="group overflow-hidden bg-[#f4f1eb] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Introduction */}
        <div className="max-w-3xl">
          <p
            className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
          >
            <span
              aria-hidden="true"
              className="h-px w-9 bg-neutral-900"
            />
            What we do
          </p>

          <h2
            id="services-heading"
            className={`mt-7 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl lg:text-[4.1rem] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
            style={{ transitionDelay: "100ms" }}
          >
            Outdoor spaces, thoughtfully brought to life.
          </h2>

          <p
            className={`mt-7 max-w-2xl text-[15px] leading-7 text-neutral-600 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-base sm:leading-8 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
            style={{ transitionDelay: "250ms" }}
          >
            From the first design decisions to the finishing details, we bring
            together the elements that make a garden practical, welcoming and
            a natural extension of your home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-y-14 lg:mt-20 lg:gap-x-8 lg:gap-y-16">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`group/service min-w-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              style={{
                transitionDelay: isVisible
                  ? `${300 + index * 120}ms`
                  : "0ms",
              }}
            >
              {/* Image */}
              <Link
                href="/contact"
                aria-label={`Enquire about ${service.title}`}
                className="block overflow-hidden rounded-lg bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 36px), (max-width: 1456px) calc(50vw - 48px), 676px"
                    className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/service:scale-[1.035] motion-reduce:transition-none"
                  />
                </div>
              </Link>

              {/* Service Information */}
              <div className="mt-5 border-t border-neutral-900/15 pt-5 sm:mt-6 sm:pt-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-xs font-medium tracking-[0.14em] text-neutral-400 transition-colors duration-300 group-hover/service:text-neutral-700">
                      {service.number} / SERVICE
                    </p>

                    <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.035em] text-neutral-900 sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-900/15 transition-all duration-300 group-hover/service:border-neutral-900 group-hover/service:bg-neutral-900 group-hover/service:text-white motion-reduce:transition-none"
                  >
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/service:translate-x-0.5 group-hover/service:-translate-y-0.5 motion-reduce:transition-none"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-[15px] sm:leading-7">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
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
              Every garden starts with an idea.
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500 sm:text-base">
              Tell us what you have in mind and let&apos;s explore what&apos;s
              possible.
            </p>
          </div>

          <Link
            href="/contact"
            className="group/cta inline-flex w-fit shrink-0 items-center gap-2 text-base font-medium tracking-[-0.015em] text-neutral-900 transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none"
          >
            Tell us about your garden
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