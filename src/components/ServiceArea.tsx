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
return ( <section className="bg-[#f7f6f2]"> <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"> <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"> <div className="flex items-start"> <div className="flex items-center gap-3"> <span
             className="h-px w-8 bg-neutral-900"
             aria-hidden="true"
           /> <p className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
LOCAL LANDSCAPERS </p> </div> </div>

```
      <div className="max-w-3xl">
        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-950 sm:text-5xl">
          Landscaping across Cork.
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
          Stone &amp; Grove Landscapes works with homeowners across Cork
          and surrounding areas.
        </p>

        <div className="mt-10 border-y border-neutral-200">
          <div className="flex flex-wrap gap-x-0">
            {serviceAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center py-4 pr-5 text-sm font-medium text-neutral-900 sm:py-5 sm:pr-6"
              >
                <span>{area}</span>
                {index < serviceAreas.length - 1 && (
                  <span
                    className="ml-5 h-1 w-1 rounded-full bg-neutral-400 sm:ml-6"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800"
          >
            Check if we cover your area
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
