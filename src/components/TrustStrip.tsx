export default function TrustStrip() {
  return (
    <section
      aria-label="Stone & Grove Landscapes reassurance"
      className="border-y border-neutral-200 bg-[#f7f6f2]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex min-h-20 flex-col items-center justify-center gap-2 py-5 text-center sm:min-h-24 sm:flex-row sm:gap-5 sm:py-0">
          <p className="text-sm font-medium tracking-[-0.01em] text-neutral-900 sm:text-base">
            Landscaping &amp; garden design
          </p>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 shrink-0 rounded-full bg-neutral-400 sm:block"
          />

          <p className="text-sm text-neutral-600 sm:text-base">
            Cork &amp; surrounding areas
          </p>

          <span
            aria-hidden="true"
            className="hidden h-1 w-1 shrink-0 rounded-full bg-neutral-400 sm:block"
          />

          <p className="text-sm text-neutral-600 sm:text-base">
            Free consultation · No obligation
          </p>
        </div>
      </div>
    </section>
  );
}