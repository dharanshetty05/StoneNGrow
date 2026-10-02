export default function TrustStrip() {
  const items = [
    "Garden Design",
    "Patios & Paving",
    "Planting & Lawns",
    "Fencing & Features",
  ];

  return (
    <section
      aria-label="Stone & Grove Landscapes services"
      className="relative z-20 -mt-10 px-5 sm:-mt-12 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-sm border border-neutral-300 bg-[#e8e5dc] shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item}
              className={`
                flex min-h-20 items-center justify-center px-5 py-5
                text-center
                sm:min-h-24
                ${
                  index !== items.length - 1
                    ? "border-b border-neutral-300 sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900 sm:text-[15px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}