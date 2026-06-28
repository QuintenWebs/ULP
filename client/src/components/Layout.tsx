/*
 * ULP Layout — Navigation header + footer
 * Design: Warm Savanna Editorial
 * Nav: slim white bar, tree logo left-aligned, Barlow Condensed uppercase links, dropdown menus
 * Footer: dark charcoal with contact info and social links
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

const LOGO_URL = "/manus-storage/ulp-logo_b15c6eb4.png";

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Business School",
    href: "/the-program/",
    dropdown: [
      { label: "Our Program Explained", href: "/the-program/" },
      { label: "The Curriculum", href: "/our-curriculum/" },
      { label: "Our Partners", href: "/our-partners/" },
    ],
  },
  { label: "Investment Fund", href: "https://ulpinvest.com", external: true },
  { label: "Leadership Trips", href: "/407-2/" },
  { label: "Short Courses", href: "/short-courses/" },
  { label: "News & Stories", href: "/news-stories/" },
  {
    label: "About Us",
    dropdown: [
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Meet Our Team", href: "/meet-our-team/" },
      { label: "Get Involved", href: "/participate/" },
      { label: "ANBI Report", href: "/450-2/" },
    ],
  },
];

function DropdownMenu({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) {
  return (
    <div
      className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg z-50 overflow-hidden"
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0) scaleY(1)" : "translateY(-8px) scaleY(0.95)",
        transformOrigin: "top",
        pointerEvents: isOpen ? "auto" : "none",
        transition: "opacity 200ms cubic-bezier(0.23,1,0.32,1), transform 200ms cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      {items.map((item) =>
        item.external ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-3 text-sm font-medium text-[#2C2416] hover:bg-[#F5EFE0] hover:text-[#D4521A] transition-colors duration-150"
            style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", letterSpacing: "0.04em", fontSize: "0.88rem" }}
          >
            {item.label}
          </a>
        ) : (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-3 text-sm font-medium text-[#2C2416] hover:bg-[#F5EFE0] hover:text-[#D4521A] transition-colors duration-150"
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
            letterSpacing: "0.04em",
            fontSize: "0.88rem",
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5EFE0" }}>
      {/* Header */}
      <header
        ref={navRef}
        className="sticky top-0 z-40 transition-shadow duration-300"
        style={{
          backgroundColor: "#FDFAF4",
          borderBottom: "1px solid #D9CDB8",
          boxShadow: scrolled ? "0 2px 12px rgba(44,36,22,0.08)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="Ubuntu Leadership Program"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      className="nav-link flex items-center gap-1"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.href ? (
                        <Link href={item.href} className="nav-link">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="nav-link">{item.label}</span>
                      )}
                      <svg
                        className="w-3 h-3 opacity-60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : item.external ? (
                    <a
                      href={item.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                      style={{ color: "#C4921A", fontWeight: 700 }}
                    >
                      {item.label}
                    </a>
                  ) : item.comingSoon ? (
                    <button
                      className="nav-link"
                      onClick={() => toast("Coming soon — this page is under construction.")}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`nav-link ${location === item.href || location === item.href?.replace(/\/$/, "") ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenu
                        items={item.dropdown}
                        isOpen={openDropdown === item.label}
                      />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-[#2C2416]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? "600px" : "0",
            borderTop: mobileOpen ? "1px solid #D9CDB8" : "none",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href && !item.dropdown && (
                  item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 nav-link text-base"
                      style={{ color: "#C4921A", fontWeight: 700 }}
                    >
                      {item.label}
                    </a>
                  ) : item.comingSoon ? (
                    <button
                      className="block py-2 nav-link text-base w-full text-left"
                      onClick={() => { setMobileOpen(false); toast("Coming soon — this page is under construction."); }}
                    >
                      {item.label}
                    </button>
                  ) : (
                  <Link
                    href={item.href}
                    className="block py-2 nav-link text-base"
                  >
                    {item.label}
                  </Link>
                  )
                )}
                {item.dropdown && (
                  <>
                    <div
                      className="py-2 font-semibold text-[#6B5B45] text-sm uppercase tracking-widest"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {item.label}
                    </div>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block py-1.5 pl-4 nav-link text-sm"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1A1A14", color: "#C8B89A" }}>
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <img
                src={LOGO_URL}
                alt="Ubuntu Leadership Program"
                className="h-12 w-auto object-contain mb-4"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-sm leading-relaxed" style={{ color: "#9A8A72" }}>
                A business school, an investment fund, leadership trips and short courses in the Usambara Mountains, Tanzania.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Our program explained", href: "/the-program/" },
                  { label: "The curriculum", href: "/our-curriculum/" },
                  { label: "Meet Our Team", href: "/meet-our-team/" },
                  { label: "News & Stories", href: "/news-stories/" },
                  { label: "Donate", href: "/donate/" },
                  { label: "Contact us", href: "/contact-us/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-[#D4521A] transition-colors duration-150"
                      style={{ color: "#9A8A72" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}
              >
                Contact
              </h4>
              <address className="not-italic text-sm space-y-2" style={{ color: "#9A8A72" }}>
                <p>Oudegracht 417<br />3511 PJ Utrecht<br />The Netherlands</p>
                <p>
                  <a href="tel:+31622475658" className="hover:text-[#D4521A] transition-colors">
                    +31 6 22 47 56 58
                  </a>
                </p>
                <p>
                  <a href="mailto:info@ubuntuleadershipprogram.nl" className="hover:text-[#D4521A] transition-colors">
                    info@ubuntuleadershipprogram.nl
                  </a>
                </p>
                <p style={{ color: "#6B5B45" }}>
                  Bank: NL56 RABO 0323 7422 70
                </p>
              </address>
              {/* Social */}
              <div className="flex gap-4 mt-5">
                <a
                  href="https://www.instagram.com/ubuntuleadershipprogram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4521A] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ubuntu-leadership-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4521A] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-10 pt-6 text-xs text-center"
            style={{ borderTop: "1px solid #2C2C22", color: "#4A3E2E" }}
          >
            © {new Date().getFullYear()} Ubuntu Leadership Program Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
