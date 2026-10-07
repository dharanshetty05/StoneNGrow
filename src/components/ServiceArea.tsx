import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceAreas = [
  "Cork City",
  "Douglas",
  "Ballincollig",
  "Carrigaline",
  "Glanmire",
  "Bishopstown",
  "Blarney",
];

export default function ServiceArea() {
  return (
    <section className="bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Areas we cover
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            We provide landscaping services to homeowners throughout Cork and
            the surrounding areas.
          </p>
        </div>

        <div className="mt-10 max-w-4xl border-t border-neutral-300">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="border-b border-neutral-300 py-5"
            >
              <span className="text-lg text-neutral-900">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <span className="text-sm text-neutral-500">
            Don't see your area? Ask us.
          </span>
        </div>
      </div>
    </section>
  );
}