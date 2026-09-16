"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";

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
      "A practical family space combining lawn, planting, natural paving and improved boundaries.",
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
      "A compact outdoor space transformed into a simple, welcoming area for relaxing and entertaining.",
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

export default function FeaturedWork() {
  return (
    <section className="bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-8 bg-neutral-900"
              aria-hidden="true"
            />

            <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
              RECENT PROJECTS
            </p>
          </div>

          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            See what a considered approach can do.
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              {/* Project Meta */}
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.16em] text-neutral-400">
                  PROJECT {project.number}
                </p>

                <p className="text-sm text-neutral-500">
                  {project.location}
                </p>
              </div>

              {/* Project Visual */}
              {project.type === "before-after" ? (
                <BeforeAfter
                  before={project.before}
                  after={project.after}
                  during={project.during}
                />
              ) : (
                <ProjectGallery images={project.images} />
              )}

              {/* Project Information */}
              <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-neutral-950 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                    {project.description}
                  </p>
                </div>

                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
                >
                  View project

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-20 border-t border-neutral-200 pt-10 sm:mt-24">
          <Link
            href="/work"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800"
          >
            View Our Work

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

/* -------------------------------------------------------------------------- */
/* Before / After Slider                                                       */
/* -------------------------------------------------------------------------- */

function BeforeAfter({
  before,
  after,
  during,
}: {
  before: string;
  after: string;
  during: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();

    const newPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.buttons !== 1) return;

    updatePosition(event.clientX);
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  return (
    <div className="grid gap-3 lg:grid-cols-[1.7fr_0.8fr]">
      {/* Before / After */}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-200 select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        role="slider"
        aria-label="Before and after garden transformation comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
      >
        {/* After Image */}
        <Image
          src={after}
          alt="After view of the modern garden transformation"
          fill
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="pointer-events-none object-cover"
        />

        {/* Before Image */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-full">
            <Image
              src={before}
              alt="Before view of the modern garden transformation"
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="pointer-events-none object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.2)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* Slider Handle */}
        <div
          className="absolute top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/60 text-white shadow-lg backdrop-blur-sm"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <MoveHorizontal
            className="h-4 w-4"
            strokeWidth={1.75}
          />
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          Before
        </div>

        <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-900 backdrop-blur-sm">
          After
        </div>
      </div>

      {/* During Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-200 lg:aspect-auto">
        <Image
          src={during}
          alt="During the modern garden transformation"
          fill
          sizes="(max-width: 1024px) 100vw, 32vw"
          className="object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          During
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Project Gallery                                                             */
/* -------------------------------------------------------------------------- */

function ProjectGallery({
  images,
}: {
  images: ProjectImage[];
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.65fr_0.8fr]">
      {/* Primary Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-200">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.015]"
        />
      </div>

      {/* Supporting Images */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        {images.slice(1).map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-neutral-200 lg:aspect-auto"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 32vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.015]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}