
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
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type KeyboardEvent,
} from "react";

/* ========================================================================== */
/* TYPES                                                                      */
/* ========================================================================== */

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

/* ========================================================================== */
/* PROJECT DATA                                                               */
/* ========================================================================== */

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

/* ========================================================================== */
/* DESIGN TOKENS                                                              */
/* ========================================================================== */

const metadataClass =
  "font-sans text-[10px] font-medium uppercase tracking-[0.17em]";

const bodyTextClass =
  "font-sans text-sm leading-7 text-[#62695f] sm:text-[15px] sm:leading-8";

const projectTitleClass =
  "font-sans text-[clamp(1.8rem,2.8vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.045em] text-[#25372b]";

/* ========================================================================== */
/* MAIN COMPONENT                                                             */
/* ========================================================================== */

export default function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const sectionRef = useRef<HTMLElement>(null);

  /* ------------------------------------------------------------------------ */
  /* HEADER SCROLL ANIMATION                                                  */
  /* ------------------------------------------------------------------------ */

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

  /* ------------------------------------------------------------------------ */
  /* PROJECT SELECTION                                                        */
  /* ------------------------------------------------------------------------ */

  const [featured, familyGarden, patioGarden] = projects;

  if (
    !featured ||
    !familyGarden ||
    !patioGarden ||
    featured.type !== "before-after" ||
    familyGarden.type !== "gallery" ||
    patioGarden.type !== "gallery"
  ) {
    return null;
  }

  /* ------------------------------------------------------------------------ */
  /* REVEAL ANIMATION                                                         */
  /* ------------------------------------------------------------------------ */

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  /* ======================================================================== */
  /* RENDER                                                                   */
  /* ======================================================================== */

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-clip bg-[#e9e9e1] text-[#25372b]"
    >
      {/* ================================================================== */}
      {/* STICKY HEADING + PROJECTS 01 & 02                                 */}
      {/* ================================================================== */}

      <div className="relative">

        {/* COLLAPSING STICKY HEADING */}

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

        {/* PROJECT CARDS 01 + 02 */}

        <div className="relative space-y-8 py-8 sm:space-y-10 lg:space-y-0 lg:py-0">

          {/* ============================================================ */}
          {/* PROJECT 01: BEFORE / AFTER                                   */}
          {/* ============================================================ */}

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

                {/* BEFORE / AFTER COMPARISON */}

                <div className="min-w-0">
                  <BeforeAfter
                    before={featured.before}
                    after={featured.after}
                    reducedMotion={shouldReduceMotion}
                  />
                </div>

                {/* PROJECT INFORMATION */}

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
            </div>
          </motion.article>

          {/* ============================================================ */}
          {/* PROJECT 02: FAMILY GARDEN                                    */}
          {/* ============================================================ */}

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

                {/* MOVING IMAGE SLIDER */}

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
        </div>
      </div>

      {/* ================================================================== */}
      {/* PROJECT 03: CONTEMPORARY PATIO                                   */}
      {/* ================================================================== */}

      {/* Heading releases before this project enters. */}

      <motion.article
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        style={{ zIndex: 3 }}
        className="relative mx-auto w-full max-w-[1360px] bg-[#f4f1eb] shadow-[0_-18px_50px_rgba(37,55,43,0.07)]"
      >
        <div className="mx-auto flex min-h-full max-w-[1320px] flex-col px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12">

          <ProjectMeta
            number="03"
            location={patioGarden.location}
            category="PATIO & PLANTING"
            count="03 / 03"
          />

          <div className="mt-6 grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-12">

            {/* PROJECT INFORMATION */}

            <div className="flex flex-col justify-center">
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

            {/* MOVING IMAGE SLIDER */}

            <div className="min-w-0">
              <ProjectGallery
                images={patioGarden.images}
                label={patioGarden.title}
                reducedMotion={shouldReduceMotion}
              />
            </div>
          </div>
        </div>
      </motion.article>

      {/* ================================================================== */}
      {/* CLOSING CTA                                                        */}
      {/* ================================================================== */}

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
/* AUTOMATIC HORIZONTAL PROJECT GALLERY                                       */
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
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  const activeImage = images[activeIndex] ?? images[0];

  /* ------------------------------------------------------------------------ */
  /* NAVIGATION                                                               */
  /* ------------------------------------------------------------------------ */

  const changeSlide = (nextIndex: number, nextDirection: 1 | -1) => {
    if (images.length < 2) return;

    setDirection(nextDirection);
    setActiveIndex((nextIndex + images.length) % images.length);
  };

  const next = () => {
    changeSlide(activeIndex + 1, 1);
  };

  const previous = () => {
    changeSlide(activeIndex - 1, -1);
  };

  /* ------------------------------------------------------------------------ */
  /* AUTOMATIC SLIDING                                                        */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (reducedMotion || isPaused || images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [reducedMotion, isPaused, images.length]);

  if (!activeImage) return null;

  /* ------------------------------------------------------------------------ */
  /* SLIDE ANIMATION                                                          */
  /* ------------------------------------------------------------------------ */

  const slideVariants = {
    enter: (slideDirection: 1 | -1) => ({
      opacity: 0,
      x: slideDirection === 1 ? 55 : -55,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (slideDirection: 1 | -1) => ({
      opacity: 0,
      x: slideDirection === 1 ? -55 : 55,
    }),
  };

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

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
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >

      {/* IMAGE VIEWPORT */}

      <div
        className="group relative aspect-[4/3] overflow-hidden bg-[#e7e4dc] sm:aspect-[16/10]"
        aria-roledescription="carousel"
        aria-label={`${label} project images`}
      >
        <AnimatePresence
          initial={false}
          mode="sync"
          custom={direction}
        >
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: reducedMotion ? 0 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* IMAGE COUNTER */}

        <div className="absolute left-4 top-4 z-20 bg-[#25372b]/70 px-3 py-2 font-sans text-[10px] font-medium tracking-[0.15em] text-white backdrop-blur-sm">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* NAVIGATION */}

        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">

            <button
              type="button"
              onClick={previous}
              aria-label="Previous project image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-[#25372b]/70 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-[#25372b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft size={18} strokeWidth={1.6} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next project image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-[#25372b]/70 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-[#25372b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight size={18} strokeWidth={1.6} />
            </button>
          </div>
        )}
      </div>

      {/* MINIMAL SLIDE INDICATOR */}

      <div className="mt-4 flex items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => {
                changeSlide(index, index > activeIndex ? 1 : -1);
              }}
              aria-label={`Show project image ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-[3px] transition-all duration-500 ${
                activeIndex === index
                  ? "w-9 bg-[#71836a]"
                  : "w-5 bg-[#25372b]/20 hover:bg-[#25372b]/45"
              }`}
            />
          ))}
        </div>

        <span className="font-sans text-[9px] font-medium uppercase tracking-[0.13em] text-[#85877d]">
          {isPaused ? "PAUSED" : "EXPLORE"}
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

  /* ------------------------------------------------------------------------ */
  /* UPDATE SLIDER POSITION                                                   */
  /* ------------------------------------------------------------------------ */

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    if (rect.width === 0) return;

    const nextPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  /* ------------------------------------------------------------------------ */
  /* POINTER EVENTS                                                           */
  /* ------------------------------------------------------------------------ */

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    updatePosition(event.clientX);
  };

  /* ------------------------------------------------------------------------ */
  /* KEYBOARD ACCESSIBILITY                                                   */
  /* ------------------------------------------------------------------------ */

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>
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

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

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
          className="pointer-events-none absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={before}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 90vw"
            className="object-cover"
          />
        </div>

        {/* DIVIDER */}

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* SLIDER HANDLE */}

        <div
          className="pointer-events-none absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[#25372b]/85 text-white shadow-lg backdrop-blur-sm"
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
