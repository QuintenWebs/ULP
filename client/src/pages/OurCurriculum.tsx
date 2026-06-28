/**
 * Our Curriculum page, /our-curriculum/
 * Design: Warm Savanna Editorial
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const IMG_KITCHEN  = "/manus-storage/kitchen_team_photo_8780a760.jpg";
const IMG_CAMPFIRE = "/manus-storage/cooking_together_around_fire_3872ef73.jpg";

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up">{children}</div>;
}

// Four info cards with icons
const infoCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Timeline",
    value: "Jan - Dec",
    detail: "One full annual cycle, from first-day orientation through to graduation.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "ULP Training Centre",
    detail: "On the ground in the Usambara region, at participating hotels and the ULP training facility.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: "Focus",
    value: "Hospitality",
    detail: "Real, in-demand skills across hotel departments, from front-of-house to food & beverage to management.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Audience",
    value: "Ages 18 - 28",
    detail: "School leavers from the Usambara region who want to build a professional future close to home.",
  },
];

export default function OurCurriculum() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">The curriculum</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>The Curriculum</h1>
        </div>
      </section>

      {/* Intro + kitchen photo */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <FadeSection>
              <p className="text-[#2C2416] text-lg leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                The ULP Business School partners with <strong>Ukarimu</strong>, a Uganda-based hospitality training organisation, which provides a proven and comprehensive curriculum for our students. With their expertise and ready-made training materials, we ensure that our participants receive high-quality, industry-relevant education that equips them with the skills to succeed in the hospitality sector. This collaboration plays a key role in empowering youth in the Usambara region, while supporting the growth of the local economy.
              </p>
            </FadeSection>
            <FadeSection delay={80}>
              <img
                src={IMG_KITCHEN}
                alt="Kitchen team at the ULP Business School, hospitality training in action"
                className="w-full h-64 object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </FadeSection>
          </div>

          {/* Four icon info cards */}
          <FadeSection delay={60}>
            <span className="ulp-label mb-5 inline-block">What we are</span>
            <h2 className="ulp-section-title mb-3">A one-year training &amp; coaching programme in hospitality.</h2>
            <p className="text-[#6B5B45] mb-8 max-w-xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Four things define the ULP Business School experience:
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {infoCards.map((card, i) => (
              <FadeSection key={card.label} delay={i * 70}>
                <div className="p-6 h-full" style={{ backgroundColor: "#FDFAF4", borderTop: "3px solid #D4521A" }}>
                  <div className="mb-4" style={{ color: "#D4521A" }}>{card.icon}</div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#9A8A72", letterSpacing: "0.14em" }}>{card.label}</p>
                  <p className="font-bold mb-3 text-[#2C2416]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem" }}>{card.value}</p>
                  <p className="text-sm leading-relaxed text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{card.detail}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Three phases timeline */}
          <FadeSection delay={80}>
            <span className="ulp-label mb-5 inline-block">The curriculum</span>
            <h2 className="ulp-section-title mb-6">What the programme does</h2>
            <div className="relative mb-10">
              <div className="absolute top-6 left-6 right-6 h-0.5 hidden sm:block" style={{ backgroundColor: "#C4921A" }} />
              <div className="grid sm:grid-cols-3 gap-6 relative z-10">
                {[
                  { num: "1", phase: "Phase one", sub: "Low season", desc: "General training across all hotel departments, front desk, housekeeping, food & beverage, and more." },
                  { num: "2", phase: "Phase two", sub: "Peak season", desc: "Work as trained professionals in real hotel operations, applying skills under live conditions." },
                  { num: "3", phase: "Phase three", sub: "Sept - Dec", desc: "Specialisation in a chosen area of the industry, culminating in a graduation project." },
                ].map((p) => (
                  <div key={p.num} className="text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg" style={{ backgroundColor: "#D4521A", fontFamily: "'Barlow Condensed', sans-serif" }}>{p.num}</div>
                    <p className="font-bold text-[#2C2416] text-sm mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}>{p.phase}</p>
                    <p className="text-xs text-[#D4521A] mb-2" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{p.sub}</p>
                    <p className="text-sm text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5" style={{ backgroundColor: "#1A1A14" }}>
              <span className="ulp-label mb-3 inline-block">Throughout</span>
              <p className="text-sm leading-relaxed" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }}>Coaching in personal leadership, craftsmanship and entrepreneurship, plus practising English in class, through role plays, and on the job. The result is a broad, diverse, hands-on curriculum.</p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Campfire / community cooking image section */}
      <section className="py-0">
        <div className="relative">
          <img
            src={IMG_CAMPFIRE}
            alt="Cooking together around the fire, community and culture at the heart of ULP"
            className="w-full object-cover"
            style={{ height: "420px", objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(to top, rgba(26,26,20,0.82) 0%, rgba(26,26,20,0.2) 60%, transparent 100%)" }}>
            <div className="container pb-10">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A", letterSpacing: "0.14em" }}>Community &amp; culture</p>
              <p className="max-w-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#F5EFE0", fontWeight: 600, lineHeight: 1.3 }}>
                "Learning happens in the kitchen, around the fire, and in every shared moment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          <FadeSection>
            <Link href="/our-partners/" className="ulp-btn">Meet our partners</Link>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
