
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

  const renderServiceCard = (
    service: (typeof services)[number],
    duplicate = false
  ) => (
    <article
      key={`${service.number}-${duplicate ? "duplicate" : "original"}`}
      className="services-marquee-card group/service shrink-0"
    >
      <Link
        href="/contact"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={
          duplicate
            ? undefined
            : `Enquire about ${service.title}`
        }
        className="block h-full overflow-hidden rounded-xl border border-neutral-900/[0.07] bg-[#faf9f6] transition-all duration-500 hover:-translate-y-1 hover:border-neutral-900/15 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb]"
      >
        {/* Image */}
        <div className="relative aspect-[5/4] overflow-hidden bg-[#e8e5dd]">
          <Image
            src={service.image}
            alt={duplicate ? "" : service.alt}
            fill
            sizes="(max-width: 639px) 82vw, (max-width: 1023px) 44vw, 370px"
            className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/service:scale-[1.045] motion-reduce:transition-none"
          />

          {/* Service Number */}
          <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/40 bg-[#f4f1eb]/90 px-3 text-[11px] font-medium tracking-wider text-neutral-800 backdrop-blur-sm">
            {service.number}
          </span>

          {/* Image Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-70" />
        </div>

        {/* Card Content */}
        <div className="flex min-h-[190px] flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[21px] font-medium leading-tight tracking-[-0.04em] text-neutral-900 sm:text-2xl">
              {service.title}
            </h3>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-900/15 transition-all duration-300 group-hover/service:border-neutral-900 group-hover/service:bg-neutral-900 group-hover/service:text-white motion-reduce:transition-none"
            >
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover/service:translate-x-0.5 group-hover/service:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={1.5}
              />
            </span>
          </div>

          <p className="mt-3 max-w-sm text-[13px] leading-[1.75] text-neutral-500 sm:text-sm">
            {service.description}
          </p>

          <div className="mt-auto pt-5">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400 transition-colors duration-300 group-hover/service:text-neutral-800">
              Explore service
            </span>
          </div>
        </div>
      </Link>
    </article>
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="overflow-hidden bg-[#f4f1eb] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div
          className={`mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
        >
          <h2
  id="services-heading"
  className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#25372b] sm:text-5xl lg:text-[4.2rem]"
>
  Outdoor spaces, thoughtfully{" "}
  <span className="font-normal italic text-[#71836a]">
    brought to life.
  </span>
</h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:mt-6 sm:text-base sm:leading-8">
            From the first design decisions to the finishing details, we bring
            together the elements that make a garden practical, welcoming and
            a natural extension of your home.
          </p>
        </div>

        {/* Infinite Services Carousel */}
        <div
          className={`services-marquee-viewport mt-12 transition-opacity duration-1000 sm:mt-16 lg:mt-20 ${
            isVisible ? "opacity-100" : "opacity-0"
          } motion-reduce:opacity-100`}
          aria-label="Our landscaping services"
        >
          <div className="services-marquee-track">
            {/* Original Cards */}
            <div className="services-marquee-group" aria-label="Services">
              {services.map((service) =>
                renderServiceCard(service)
              )}
            </div>

            {/* Duplicate Cards for Seamless Loop */}
            <div
              className="services-marquee-group"
              aria-hidden="true"
            >
              {services.map((service) =>
                renderServiceCard(service, true)
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mx-6 mt-12 flex flex-col gap-5 border-t border-neutral-900/10 pt-7 transition-opacity duration-1000 sm:mx-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8 lg:mx-0 ${
            isVisible ? "opacity-100" : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:transition-none`}
          style={{ transitionDelay: "400ms" }}
        >
          <div>
            <p className="text-base font-medium tracking-[-0.025em] text-neutral-900 sm:text-lg">
              Every garden starts with an idea.
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Tell us what you have in mind and let&apos;s explore what&apos;s
              possible.
            </p>
          </div>

          <Link
            href="/contact"
            className="group/cta inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb]"
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
