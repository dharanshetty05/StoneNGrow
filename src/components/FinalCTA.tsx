import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
return ( <section className="bg-neutral-950 text-white"> <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"> <div className="mx-auto max-w-4xl text-center"> <p className="text-xs font-semibold tracking-[0.18em] text-white/45">
START YOUR PROJECT </p>

```
      <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
        Ready to make more of your garden?
      </h2>

      <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
        Tell us what you&apos;re planning and we&apos;ll help you understand
        what comes next.
      </p>

      <div className="mt-10">
        <Link
          href="/contact"
          className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-neutral-200"
        >
          Request a Quote
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>

      <p className="mt-5 text-sm text-white/40">
        No obligation. Just a conversation about your space.
      </p>
    </div>
  </div>
</section>
);
}
