/*
 * Home page, /
 * Design: Warm Savanna Editorial
 * Sections: full-bleed hero, intro + collage, four pillars, ULP Invest CTA, mission/vision, get involved CTA
 *
 * All copy and imagery come from content.json so they can be edited in the
 * Mirantic CMS. Anything structural — links, colours, layout — stays in code:
 * the CMS edits content, not navigation or design.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";

const c = content.home;

// Structure that belongs to the design rather than the content. Merged with the
// editable pillar copy by position.
const PILLAR_DESIGN = [
  { num: "01", color: "#D4521A", href: "/the-program/" },
  { num: "02", color: "#C4921A", href: "https://ulpinvest.com", external: true },
  { num: "03", color: "#8B3A1A", href: "/407-2/" },
  { num: "04", color: "#2D5016", href: "/the-program/" },
];

const pillars = c.pillars.items.map((item, i) => ({ ...PILLAR_DESIGN[i], ...item }));

function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[85vh] flex items-end pb-16 lg:pb-24"
        data-cms-field="home.hero.backgroundImage"
        data-cms-image
        style={{ backgroundImage: `url(${c.hero.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,20,0.88) 0%, rgba(26,26,20,0.3) 55%, rgba(26,26,20,0.05) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="ulp-label mb-5 inline-block" data-cms-field="home.hero.eyebrow">{c.hero.eyebrow}</span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              <span data-cms-field="home.hero.titleStart">{c.hero.titleStart}</span>{" "}
              <span style={{ color: "#E8693A" }} data-cms-field="home.hero.titleAccent">{c.hero.titleAccent}</span>{" "}
              <span data-cms-field="home.hero.titleEnd">{c.hero.titleEnd}</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", lineHeight: 1.65 }} data-cms-field="home.hero.subtitle">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/the-program/" className="ulp-btn" data-cms-field="home.hero.primaryCta">{c.hero.primaryCta}</Link>
              <Link href="/donate/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#C8B89A", color: "#C8B89A" }} data-cms-field="home.hero.secondaryCta">{c.hero.secondaryCta}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <span className="ulp-label ulp-label-outline mb-6 inline-block" data-cms-field="home.intro.eyebrow">{c.intro.eyebrow}</span>
              <h2 className="ulp-section-title mb-6" data-cms-field="home.intro.title">{c.intro.title}</h2>
              <hr className="ulp-rule" />
              {c.intro.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={i === c.intro.paragraphs.length - 1 ? "text-[#2C2416] mb-6" : "text-[#2C2416] mb-4"}
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                  data-cms-field={`home.intro.paragraphs[${i}]`}
                >
                  {text}
                </p>
              ))}
              <Link href="/the-program/" className="ulp-btn inline-block" data-cms-field="home.intro.cta">{c.intro.cta}</Link>
            </FadeSection>

            {/* Image collage, fixed three photos on all screen sizes */}
            <FadeSection delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {/* Top: full-width team photo */}
                <div className="col-span-2">
                  <img
                    src={c.intro.imageTeam}
                    alt={c.intro.imageTeamAlt}
                    className="w-full h-56 object-cover"
                    style={{ objectPosition: "center 60%" }}
                    data-cms-field="home.intro.imageTeam"
                  />
                </div>
                {/* Bottom-left: local market day */}
                <img
                  src={c.intro.imageMarket}
                  alt={c.intro.imageMarketAlt}
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center center" }}
                  data-cms-field="home.intro.imageMarket"
                />
                {/* Bottom-right: mountain agriculture */}
                <img
                  src={c.intro.imageAgriculture}
                  alt={c.intro.imageAgricultureAlt}
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center 40%" }}
                  data-cms-field="home.intro.imageAgriculture"
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFAF4" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label mb-5 inline-block" data-cms-field="home.pillars.eyebrow">{c.pillars.eyebrow}</span>
            <h2 className="ulp-section-title mb-3" data-cms-field="home.pillars.title">{c.pillars.title}</h2>
            <p className="text-[#6B5B45] mb-12 max-w-xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="home.pillars.intro">
              {c.pillars.intro}
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {pillars.map((p, i) => (
              <FadeSection key={p.num} delay={i * 80}>
                {(p as { external?: boolean }).external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="block group h-full">
                    <PillarCard p={p} i={i} />
                  </a>
                ) : (
                  <Link href={p.href} className="block group h-full">
                    <PillarCard p={p} i={i} />
                  </Link>
                )}
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <img src={c.mission.image} alt={c.mission.imageAlt} className="w-full h-[420px] object-cover" data-cms-field="home.mission.image" />
            </FadeSection>
            <FadeSection delay={100}>
              <span className="ulp-label mb-6 inline-block" data-cms-field="home.mission.eyebrow">{c.mission.eyebrow}</span>
              <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15, color: "#F5EFE0" }} data-cms-field="home.mission.title">
                {c.mission.title}
              </h2>
              <hr className="ulp-rule" />
              <p className="mb-6 leading-relaxed" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="home.mission.body">
                {c.mission.body}
              </p>
              <Link href="/about-us/" className="ulp-btn ulp-btn-light" data-cms-field="home.mission.cta">{c.mission.cta}</Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Get Involved CTA ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#D4521A" }}>
        <div className="container text-center">
          <FadeSection>
            <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#FDFAF4", fontWeight: 700 }} data-cms-field="home.getInvolved.title">
              {c.getInvolved.title}
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: "#F5EFE0", fontFamily: "'Source Serif 4', Georgia, serif", opacity: 0.9 }} data-cms-field="home.getInvolved.body">
              {c.getInvolved.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate/" className="ulp-btn ulp-btn-light" data-cms-field="home.getInvolved.donateCta">{c.getInvolved.donateCta}</Link>
              <Link href="/participate/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#FDFAF4", color: "#FDFAF4" }} data-cms-field="home.getInvolved.participateCta">{c.getInvolved.participateCta}</Link>
              <Link href="/407-2/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#FDFAF4", color: "#FDFAF4" }} data-cms-field="home.getInvolved.tripCta">{c.getInvolved.tripCta}</Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}

// Extracted pillar card to avoid duplication between Link and <a>
function PillarCard({ p, i }: { p: typeof pillars[0]; i: number }) {
  return (
    <div
      className="h-full p-7 border-t-4 transition-all duration-200 hover:shadow-md"
      style={{ borderTopColor: p.color, backgroundColor: i === 0 ? "#FFF3EC" : "#FDFAF4" }}
    >
      <div className="ulp-pillar-num mb-3" style={{ color: p.color }}>{p.num}</div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-xs px-2 py-1 font-semibold uppercase tracking-wider"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", backgroundColor: p.color, color: "#FDFAF4", fontSize: "0.65rem", letterSpacing: "0.15em" }}
          data-cms-field={`home.pillars.items[${i}].sublabel`}
        >
          {p.sublabel}
        </span>
        {(p as { external?: boolean }).external && (
          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-bold mb-3 text-[#2C2416]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }} data-cms-field={`home.pillars.items[${i}].label`}>{p.label}</h3>
      <p className="text-sm text-[#6B5B45] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`home.pillars.items[${i}].desc`}>{p.desc}</p>
    </div>
  );
}
