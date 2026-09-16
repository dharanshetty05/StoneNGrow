"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-neutral-900 sm:min-h-[720px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/landscaping-hero-poster.jpg"
        aria-hidden="true"
      >
        <source
          src="/videos/landscaping-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />

      {/* Subtle Depth Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[680px] items-center justify-center px-6 py-24 sm:min-h-[720px] sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span
              className="h-px w-7 bg-white/70"
              aria-hidden="true"
            />

            <p className="text-xs font-semibold tracking-[0.18em] text-white/90 sm:text-sm">
              LANDSCAPING &amp; GARDEN DESIGN IN CORK
            </p>

            <span
              className="h-px w-7 bg-white/70"
              aria-hidden="true"
            />
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.75rem]">
            Outdoor spaces you&apos;ll actually want to come home to.
          </h1>

          {/* Supporting Copy */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            From garden makeovers and paving to planting, fencing and complete
            landscape projects, we design and build outdoor spaces that look
            good, work well and last.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-neutral-100 sm:w-auto"
            >
              Request a Quote

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/work"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/70 hover:bg-white/15 sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Line */}
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-white/75">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15"
              aria-hidden="true"
            >
              <Check
                className="h-3 w-3 text-white"
                strokeWidth={2.5}
              />
            </span>

            <span>
              Serving homeowners across Cork and surrounding areas.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}