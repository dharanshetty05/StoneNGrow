import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_0.9fr_0.8fr] lg:gap-12 lg:py-24">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block text-xl font-semibold tracking-[-0.025em]"
            >
              Stone &amp; Grove Landscapes
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
              Garden design and landscaping across Cork.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40">
              NAVIGATION
            </p>

            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40">
              CONTACT
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href="tel:+353000000000"
                className="w-fit text-white/70 transition-colors duration-200 hover:text-white"
              >
                021 XXX XXXX
              </a>

              <a
                href="mailto:hello@stoneandgrove.ie"
                className="w-fit text-white/70 transition-colors duration-200 hover:text-white"
              >
                hello@stoneandgrove.ie
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:justify-self-end">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40">
              START A PROJECT
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-neutral-200"
            >
              Request a Quote

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Stone &amp; Grove Landscapes. All
            rights reserved.
          </p>

          <p>Cork, Ireland</p>
        </div>
      </div>
    </footer>
  );
}