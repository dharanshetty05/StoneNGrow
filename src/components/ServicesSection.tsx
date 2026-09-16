"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Garden Design",
    description:
      "Thoughtful layouts, planting and materials designed around your space, lifestyle and budget.",
    image: "/services/garden-design.png",
    alt: "Thoughtfully designed residential garden in Cork",
  },
  {
    number: "02",
    title: "Patios & Paving",
    description:
      "Create a practical, durable outdoor area for dining, entertaining and everyday life.",
    image: "/services/patios-paving.png",
    alt: "Professionally installed patio and paving in a residential garden",
  },
  {
    number: "03",
    title: "Planting & Lawns",
    description:
      "New lawns, planting schemes and finishing touches that bring the whole garden together.",
    image: "/services/planting-lawns.png",
    alt: "Finished lawn and planting scheme in a residential garden",
  },
  {
    number: "04",
    title: "Fencing & Features",
    description:
      "Fencing, paths, raised beds and other details that add structure, privacy and character.",
    image: "/services/fencing-features.png",
    alt: "Contemporary timber fencing and garden features",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-8 bg-neutral-900"
              aria-hidden="true"
            />

            <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
              WHAT WE DO
            </p>
          </div>

          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            From a simple refresh to a complete garden transformation.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-20 lg:gap-x-10 lg:gap-y-16">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="group"
            >
              {/* Image */}
              <Link
                href="/contact"
                aria-label={`Tell us about your garden for ${service.title}`}
                className="block overflow-hidden rounded-[1.5rem]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              {/* Service Information */}
              <div className="mt-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-neutral-400">
                      SERVICE {service.number}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-neutral-950 sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-neutral-200 pt-10 sm:mt-20 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-xl text-base text-neutral-600">
            Have a garden project in mind? Tell us what you&apos;re looking to
            create and we&apos;ll help you plan the next step.
          </p>

          <Link
            href="/contact"
            className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800 sm:mt-0"
          >
            Tell us about your garden

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