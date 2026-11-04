
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

type BeforeAfterProject = {
  number: string;
  title: string;
  description: string;
  location: string;
  type: "before-after";
  before: string;
  after: string;
  during: string;
};

type GalleryProject = {
  number: string;
  title: string;
  description: string;
  location: string;
  type: "gallery";
  images: ProjectImage[];
};

type Project = BeforeAfterProject | GalleryProject;

const projects: Project[] = [
  {
    number: "01",
    title: "Modern Garden Transformation",
    description:
      "A tired rear garden redesigned with clean paving, structured planting and a dedicated outdoor seating area.",
    location: "Cork",
    type: "before-after",
    before: "/Projects/Modern Garden Transformation/Before.png",
    after: "/Projects/Modern Garden Transformation/After.png",
    during: "/Projects/Modern Garden Transformation/During.png",
  },
  {
    number: "02",
    title: "Low-Maintenance Family Garden",
    description:
      "A practical family space combining lawn, planting, natural paving and improved boundaries. Designed to give the family room to relax, play and enjoy the garden without demanding constant upkeep.",
    location: "Douglas, Cork",
    type: "gallery",
    images: [
      {
        src: "/Projects/Family Garden/Wide finished shot.png",
        alt: "Wide finished view of the family garden",
      },
      {
        src: "/Projects/Family Garden/detail.png",
        alt: "Detail of the finished family garden",
      },
      {
        src: "/Projects/Family Garden/lawn.png",
        alt: "Lawn and planting in the family garden",
      },
    ],
  },
  {
    number: "03",
    title: "Contemporary Patio & Planting",
    description:
      "A compact outdoor space transformed into a simple, welcoming area for relaxing and entertaining. Carefully considered paving and planting bring warmth, structure and purpose to the garden.",
    location: "Ballincollig, Cork",
    type: "gallery",
    images: [
      {
        src: "/Projects/Compact Patio/Wide.png",
        alt: "Wide finished view of the compact patio",
      },
      {
        src: "/Projects/Compact Patio/Before.png",
        alt: "Before view of the compact patio",
      },
      {
        src: "/Projects/Compact Patio/Detail.png",
        alt: "Detail of the completed compact patio",
      },
    ],
  },
];

const metadataClass =
  "font-sans text-[10px] font-medium uppercase tracking-[0.17em]";

const bodyTextClass =
  "font-sans text-sm leading-7 text-[#62695f] sm:text-[15px] sm:leading-8";

const projectTitleClass =
  "font-sans text-[clamp(1.8rem,2.8vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.045em] text-[#25372b]";

export default function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 88px", "start -92px"],
  });

  const [isCompact, setIsCompact] = useState(false);

  const headerHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [180, 88]
  );

  const headingSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["clamp(2.8rem, 5.5vw, 5.2rem)", "1.45rem"]
  );

  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 0.4, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsCompact(latest > 0.72);
  });

  const featured = projects[0];
  const familyGarden = projects[1];
  const patioGarden = projects[2];

  if (
    featured.type !== "before-after" ||
    familyGarden.type !== "gallery" ||
    patioGarden.type !== "gallery"
  ) {
    return null;
  }

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-clip bg-[#e9e9e1] text-[#25372b]"
    >
      {/* ============================================================ */}
      {/* COLLAPSING STICKY PROJECT HEADING                            */}
      {/* ============================================================ */}

      <div className="relative z-30 bg-[#e9e9e1] lg:sticky lg:top-[88px]">
        <motion.div
          style={{ height: headerHeight }}
          className="relative mx-auto flex max-w-[1440px] items-center px-5 sm:px-8 lg:px-14"
        >
          <motion.h2
            id="projects-heading"
            style={{ fontSize: headingSize }}
            className="max-w-3xl font-sans font-semibold leading-[1.04] tracking-[-0.045em] text-[#25372b]"
          >
            Gardens shaped{" "}
            <span className={isCompact ? "inline" : "block"}>
              around{" "}
              <span className="font-medium italic text-[#71836a]">
                living.
              </span>
            </span>
          </motion.h2>

          <motion.p
            style={{ opacity: descriptionOpacity }}
            className="absolute right-8 hidden max-w-md font-sans text-sm leading-7 text-[#62695f] lg:right-14 lg:block"
          >
            Every outdoor space has its own character. Explore a selection
            of garden transformations shaped by thoughtful design,
            considered materials and an appreciation for the outdoors.
          </motion.p>
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* STACKED PROJECT CARDS                                        */}
      {/* ============================================================ */}

      <div className="relative space-y-8 py-8 sm:space-y-10 lg:space-y-0 lg:py-0">

        {/* ---------------------------------------------------------- */}
        {/* PROJECT 01: BEFORE / AFTER                                 */}
        {/* ---------------------------------------------------------- */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          style={{ zIndex: 1 }}
          className="relative mx-auto w-full max-w-[1360px] bg-[#f4f1eb] shadow-[0_-10px_40px_rgba(37,55,43,0.035)] lg:sticky lg:top-[176px] lg:h-[calc(100svh-176px)] lg:min-h-[560px]"
        >
          <div className="mx-auto flex min-h-full max-w-[1320px] flex-col px-5 py-10 sm:px-8 sm:py-12 lg:h-full lg:justify-center lg:px-10 lg:py-6">

            <ProjectMeta
              number="01"
              location={featured.location}
              category="FEATURED TRANSFORMATION"
              count="01 / 03"
            />

            <div className="mt-5 grid gap-6 lg:min-h-0 lg:flex-1 lg:grid-cols-[1.55fr_0.45fr] lg:items-center lg:gap-10">

              <div className="min-w-0">
                <BeforeAfter
                  before={featured.before}
                  after={featured.after}
                  reducedMotion={shouldReduceMotion}
                />
              </div>

              <div className="flex flex-col justify-center lg:py-4">
                <span className={`${metadataClass} mb-5 text-[#71836a]`}>
                  GARDEN REDESIGN
                </span>

                <h3 className={projectTitleClass}>
                  {featured.title}
                </h3>

                <p className={`mt-4 ${bodyTextClass}`}>
                  {featured.description}
                </p>

                <div className="mt-7 h-px w-12 bg-[#71836a]" />

                <p className="mt-4 font-sans text-xs leading-6 text-[#85877d]">
                  A considered transformation, from the original space
                  to the finished garden.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-5 lg:mt-4 lg:max-w-[650px]">
              <ProgressImage
                src={featured.before}
                alt="Original garden before transformation"
                label="BEFORE"
              />

              <ProgressImage
                src={featured.during}
                alt="Garden during the transformation"
                label="DURING"
              />

              <ProgressImage
                src={featured.after}
                alt="Completed modern garden transformation"
                label="AFTER"
              />
            </div>
          </div>
        </motion.article>

        {/* ---------------------------------------------------------- */}
        {/* PROJECT 02: FAMILY GARDEN                                  */}
        {/* ---------------------------------------------------------- */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          style={{ zIndex: 2 }}
          className="relative mx-auto w-full max-w-[1360px] bg-[#f4f1eb] shadow-[0_-18px_50px_rgba(37,55,43,0.07)] lg:sticky lg:top-[176px] lg:h-[calc(100svh-176px)] lg:min-h-[560px]"
        >
          <div className="mx-auto flex min-h-full max-w-[1320px] flex-col px-5 py-10 sm:px-8 sm:py-12 lg:h-full lg:justify-center lg:px-10 lg:py-6">

            <ProjectMeta
              number="02"
              location={familyGarden.location}
              category="FAMILY GARDEN"
              count="02 / 03"
            />

            <div className="mt-6 grid gap-7 lg:min-h-0 lg:flex-1 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-12">

              {/* AUTOMATIC IMAGE SLIDER */}

              <div className="min-w-0">
                <ProjectGallery
                  images={familyGarden.images}
                  label={familyGarden.title}
                  reducedMotion={shouldReduceMotion}
                />
              </div>

              {/* PROJECT INFORMATION */}

              <div className="flex flex-col justify-center">
                <div className="mb-6 h-px w-12 bg-[#71836a]" />

                <span className={`${metadataClass} mb-5 text-[#71836a]`}>
                  RESIDENTIAL LANDSCAPING
                </span>

                <h3 className={projectTitleClass}>
                  {familyGarden.title}
                </h3>

                <p className={`mt-4 ${bodyTextClass}`}>
                  {familyGarden.description}
                </p>

                <p className={`${metadataClass} mt-8 text-[#71836a]`}>
                  {familyGarden.location}
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ---------------------------------------------------------- */}
        {/* PROJECT 03: PATIO & PLANTING                               */}
        {/* ---------------------------------------------------------- */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          style={{ zIndex: 3 }}
          className="relative mx-auto w-full max-w-[1360px] bg-[#f4f1eb] shadow-[0_-18px_50px_rgba(37,55,43,0.07)] lg:sticky lg:top-[176px] lg:h-[calc(100svh-176px)] lg:min-h-[560px]"
        >
          <div className="mx-auto flex min-h-full max-w-[1320px] flex-col px-5 py-10 sm:px-8 sm:py-12 lg:h-full lg:justify-center lg:px-10 lg:py-6">

            <ProjectMeta
              number="03"
              location={patioGarden.location}
              category="PATIO & PLANTING"
              count="03 / 03"
            />

            <div className="mt-6 grid gap-7 lg:min-h-0 lg:flex-1 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-12">

              {/* PROJECT INFORMATION */}

              <div className="order-2 flex flex-col justify-center lg:order-1">
                <div className="mb-6 h-px w-12 bg-[#71836a]" />

                <span className={`${metadataClass} mb-5 text-[#71836a]`}>
                  CONTEMPORARY LANDSCAPING
                </span>

                <h3 className={projectTitleClass}>
                  {patioGarden.title}
                </h3>

                <p className={`mt-4 ${bodyTextClass}`}>
                  {patioGarden.description}
                </p>

                <p className={`${metadataClass} mt-8 text-[#71836a]`}>
                  {patioGarden.location}
                </p>
              </div>

              {/* AUTOMATIC IMAGE SLIDER */}

              <div className="order-1 min-w-0 lg:order-2">
                <ProjectGallery
                  images={patioGarden.images}
                  label={patioGarden.title}
                  reducedMotion={shouldReduceMotion}
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* ============================================================ */}
      {/* CLOSING CTA                                                  */}
      {/* ============================================================ */}

      <div className="relative z-[4] bg-[#e9e9e1]">
        <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-14 lg:pb-36">

          <div className="border-t border-[#25372b]/15 pt-10 sm:pt-12">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

              <div>
                <p className={`${metadataClass} mb-4 text-[#71836a]`}>
                  YOUR OUTDOOR SPACE
                </p>

                <h3 className="max-w-xl font-sans text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#25372b] sm:text-4xl">
                  Have a garden in mind?
                  <span className="font-medium italic text-[#71836a]">
                    {" "}Let's shape it.
                  </span>
                </h3>
              </div>

              <Link
                href="/work"
                className="group inline-flex min-h-12 items-center gap-4 self-start border-b border-[#25372b]/40 pb-2 font-sans text-sm font-medium text-[#25372b] transition-colors hover:border-[#71836a] hover:text-[#71836a] sm:self-auto"
              >
                Explore our work

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* PROJECT METADATA                                                           */
/* ========================================================================== */

function ProjectMeta({
  number,
  location,
  category,
  count,
}: {
  number: string;
  location: string;
  category: string;
  count: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#25372b]/15 pb-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`${metadataClass} text-[#71836a]`}>
          {number}
        </span>

        <span className="h-3 w-px bg-[#25372b]/20" />

        <span className={`${metadataClass} text-[#777a70]`}>
          {category}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden font-sans text-xs text-[#73786e] sm:inline">
          {location}
        </span>

        <span className="font-sans text-[10px] font-medium tracking-wide text-[#8b8c82]">
          {count}
        </span>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* PROGRESS IMAGE                                                             */
/* ========================================================================== */

function ProgressImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden bg-[#e7e4dc]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
      />

      <span className="absolute bottom-2 left-2 bg-[#25372b]/80 px-2 py-1 font-sans text-[9px] font-medium tracking-[0.12em] text-white">
        {label}
      </span>
    </div>
  );
}

/* ========================================================================== */
/* AUTOMATIC PROJECT GALLERY                                                  */
/* ========================================================================== */

function ProjectGallery({
  images,
  label,
  reducedMotion,
}: {
  images: ProjectImage[];
  label: string;
  reducedMotion: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (reducedMotion || isPaused || images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [reducedMotion, isPaused, images.length]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setIsPaused(false);
        }
      }}
    >
      {/* IMAGE VIEWPORT */}

      <div
        className="group relative aspect-[4/3] overflow-hidden bg-[#e7e4dc] sm:aspect-[16/10]"
        aria-roledescription="carousel"
        aria-label={`${label} project images`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: 32 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: -32 }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* IMAGE COUNTER */}

        <div className="absolute left-4 top-4 z-20 bg-[#25372b]/75 px-3 py-2 font-sans text-[10px] font-medium tracking-[0.15em] text-white backdrop-blur-sm">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* NAVIGATION */}

        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous project image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-[#25372b]/75 text-white backdrop-blur-sm transition-colors hover:bg-[#25372b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft size={19} strokeWidth={1.6} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-[#25372b]/75 text-white backdrop-blur-sm transition-colors hover:bg-[#25372b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight size={19} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* PAGINATION */}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-[3px] transition-all duration-300 ${
                activeIndex === index
                  ? "w-9 bg-[#71836a]"
                  : "w-5 bg-[#25372b]/20 hover:bg-[#25372b]/50"
              }`}
            />
          ))}
        </div>

        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.13em] text-[#85877d]">
          {isPaused ? "PAUSED" : "EXPLORE PROJECT"}
        </span>
      </div>
    </div>
  );
}

/* ========================================================================== */
/* ACCESSIBLE BEFORE / AFTER SLIDER                                           */
/* ========================================================================== */

function BeforeAfter({
  before,
  after,
  reducedMotion,
}: {
  before: string;
  after: string;
  reducedMotion: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    const nextPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.buttons !== 1) return;

    updatePosition(event.clientX);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    let nextPosition = position;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        nextPosition = position - 2;
        break;

      case "ArrowRight":
      case "ArrowUp":
        nextPosition = position + 2;
        break;

      case "Home":
        nextPosition = 0;
        break;

      case "End":
        nextPosition = 100;
        break;

      default:
        return;
    }

    event.preventDefault();
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize touch-none select-none overflow-hidden bg-[#e7e4dc] sm:aspect-[16/9] lg:aspect-[2/0.92]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Compare the garden before and after transformation"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} percent showing the original garden`}
        tabIndex={0}
      >
        {/* COMPLETED GARDEN */}

        <Image
          src={after}
          alt="Completed modern garden transformation"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 90vw"
          className="pointer-events-none object-cover"
        />

        {/* ORIGINAL GARDEN */}

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-[100vw]">
            <Image
              src={before}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 90vw"
              className="pointer-events-none object-cover"
            />
          </div>
        </div>

        {/* DIVIDER */}

        <div
          className="absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* SLIDER CONTROL */}

        <div
          className="absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[#25372b]/85 text-white shadow-lg backdrop-blur-sm"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <MoveHorizontal size={19} strokeWidth={1.5} />
        </div>

        {/* LABELS */}

        <span className="pointer-events-none absolute left-4 top-4 z-20 bg-[#25372b]/75 px-3 py-2 font-sans text-[10px] font-medium tracking-[0.15em] text-white backdrop-blur-sm">
          BEFORE
        </span>

        <span className="pointer-events-none absolute right-4 top-4 z-20 bg-[#f4f1eb]/90 px-3 py-2 font-sans text-[10px] font-medium tracking-[0.15em] text-[#25372b] backdrop-blur-sm">
          AFTER
        </span>
      </div>

      <p className="mt-3 text-right font-sans text-[10px] tracking-[0.12em] text-[#85877d]">
        {reducedMotion
          ? "USE THE SLIDER TO EXPLORE"
          : "DRAG TO EXPLORE THE TRANSFORMATION"}
      </p>
    </div>
  );
}
