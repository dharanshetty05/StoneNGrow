export default function TrustStrip() {
  const services = [
    "Garden Design",
    "Patios & Paving",
    "Planting & Lawns",
    "Fencing & Outdoor Spaces",
  ];

  return (
    <section
      aria-label="Our landscaping services"
      className="border-y border-neutral-200 bg-[#f7f6f2]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-neutral-200 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service}
              className={`flex min-h-24 items-center justify-center px-4 text-center sm:min-h-28 sm:px-6 ${
                index >= 2 ? "border-t border-neutral-200 lg:border-t-0" : ""
              }`}
            >
              <p className="text-sm font-medium tracking-[-0.01em] text-neutral-800 sm:text-base">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}