import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="group relative overflow-hidden bg-[#f4f1eb]">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-10 pt-16 sm:px-8 md:px-10 lg:pb-12 lg:pt-20 xl:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand and Copyright */}
          <div className="shrink-0">
            <Link
              href="/"
              className="inline-block text-left text-[17px] font-semibold tracking-[-0.035em] text-neutral-900 transition-opacity duration-200 hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none"
            >
              Stone &amp; Grove Landscapes
            </Link>

            <p className="mt-5 text-[13px] leading-6 tracking-[-0.01em] text-neutral-500">
              Garden design and landscaping across Cork.
            </p>

            <p className="mt-1 text-[13px] leading-6 tracking-[-0.01em] text-neutral-500">
              © {new Date().getFullYear()} Stone &amp; Grove Landscapes.
              All rights reserved.
            </p>
          </div>

          {/* Horizontal Navigation */}
          <nav
            aria-label="Footer navigation"
            className="lg:pt-0.5"
          >
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-5 sm:gap-x-8 lg:justify-end lg:gap-x-7 xl:gap-x-8">
              {navigation.map((item) => (
                <li key={item.label} className="shrink-0">
                  <Link
                    href={item.href}
                    className="group/link relative inline-block text-left text-[14px] leading-5 tracking-[-0.01em] text-neutral-600 transition-colors duration-200 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f1eb] motion-reduce:transition-none"
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-neutral-900 transition-transform duration-200 ease-out group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100 motion-reduce:transition-none"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Breathing Space */}
        <div className="h-[clamp(5rem,10vw,9rem)]" />
      </div>

      {/* Oversized Background Wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.08em] select-none overflow-hidden whitespace-nowrap text-center"
      >
        <span className="inline-block text-[clamp(3rem,9.5vw,9rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-neutral-900/[0.045] transition-[transform,color] duration-500 ease-out group-hover:-translate-y-1 group-hover:text-neutral-900/[0.065] motion-reduce:transition-none motion-reduce:transform-none">
          Stone &amp; Grove
        </span>
      </div>
    </footer>
  );
}