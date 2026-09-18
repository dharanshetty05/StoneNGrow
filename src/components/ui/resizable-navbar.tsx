"use client";

import * as React from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

type NavItem = {
  name: string;
  link: string;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Our Work",
    link: "#work",
  },
  {
    name: "About",
    link: "#about",
  },
];

const CTA_HREF = "#contact";

export default function StoneGroveNavbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        {/* Desktop Navbar */}
        <motion.div
          initial={false}
          animate={{
            width: visible
              ? "min(100%, 880px)"
              : "100%",
            y: visible ? 4 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 28,
            mass: 0.8,
          }}
          className={cn(
            "relative hidden h-[68px] items-center rounded-full px-3 lg:flex",
            "border border-white/50",
            "bg-[#F8F6F1]/90 backdrop-blur-xl",
            "shadow-[0_12px_40px_rgba(43,40,33,0.08)]",
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            className="relative z-20 flex shrink-0 items-center px-4"
            aria-label="Stone & Grove home"
          >
            <span className="font-serif text-[21px] font-medium tracking-[-0.02em] text-[#282720]">
              Stone & Grove
            </span>
          </a>

          {/* Navigation */}
          <nav
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Main navigation"
          >
            <NavItems items={navItems} />
          </nav>

          {/* CTA */}
          <div className="relative z-20 ml-auto flex items-center">
            <NavbarButton href={CTA_HREF}>
              Request a Quote
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </NavbarButton>
          </div>
        </motion.div>

        {/* Mobile Navbar */}
        <motion.div
          initial={false}
          animate={{
            width: visible ? "94%" : "100%",
            y: visible ? 4 : 0,
            borderRadius: visible ? "24px" : "999px",
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 28,
            mass: 0.8,
          }}
          className={cn(
            "relative flex w-full max-w-[calc(100vw-2rem)] flex-col lg:hidden",
            "border border-white/50",
            "bg-[#F8F6F1]/90 backdrop-blur-xl",
            "shadow-[0_12px_40px_rgba(43,40,33,0.08)]",
          )}
        >
          <div className="flex h-[62px] items-center justify-between px-3">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="flex items-center px-3"
              aria-label="Stone & Grove home"
            >
              <span className="font-serif text-[19px] font-medium tracking-[-0.02em] text-[#282720]">
                Stone & Grove
              </span>
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                "text-[#282720] transition-colors",
                "hover:bg-[#EDE9E1]",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.8} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.8} />
              )}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-5 pt-2">
                  <nav
                    aria-label="Mobile navigation"
                    className="flex flex-col"
                  >
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.link}
                        onClick={closeMobileMenu}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.2,
                        }}
                        className={cn(
                          "border-b border-[#282720]/8 py-4",
                          "text-[15px] font-medium text-[#4F4C43]",
                          "transition-colors hover:text-[#282720]",
                        )}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="pt-4">
                    <NavbarButton
                      href={CTA_HREF}
                      onClick={closeMobileMenu}
                      className="w-full justify-center"
                    >
                      Request a Quote
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.8}
                      />
                    </NavbarButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}

function NavItems({
  items,
}: {
  items: NavItem[];
}) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className="flex items-center gap-1"
    >
      {items.map((item, index) => (
        <a
          key={item.name}
          href={item.link}
          onMouseEnter={() => setHovered(index)}
          className="relative rounded-full px-4 py-2 text-[14px] font-medium text-[#5C594F]"
        >
          {hovered === index && (
            <motion.div
              layoutId="stone-grove-navbar-hover"
              className="absolute inset-0 rounded-full bg-[#EBE7DE]"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            />
          )}

          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
}

function NavbarButton({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        "bg-[#292923] px-5 py-3",
        "text-[13px] font-medium text-[#F8F6F1]",
        "shadow-[0_6px_18px_rgba(41,41,35,0.14)]",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:bg-[#1F1F1A]",
        className,
      )}
    >
      {children}
    </a>
  );
}