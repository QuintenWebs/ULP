/**
 * The Program page, /the-program/
 * Design: Warm Savanna Editorial
 * Structure: Page header → Business School intro (4 cards + prose) → Presentation PDF → Our Vision
 * The Investment Fund / Our Approach block belongs on the Investment Fund pillar page, not here.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const IMG_AGRICULTURE  = "/manus-storage/agriculture_mountain_farming_2e305ef0.jpg";
const IMG_TREE_NURSERY = "/manus-storage/tree_nursery_seedlings_2f1a2f5f.jpg";
const IMG_COMMUNITY    = "/manus-storage/community_women_hillside_waving_c42caa72.jpg";
const PDF_PRESENTATION = "/manus-storage/ULP-presentation-2024_03d5038f.pdf";

function FadeSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

// Four info cards for the Business School description
const infoCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Timeline",
    value: "One year",
    detail: "A full-year training & coaching programme combining theory, on-the-job practice, and personal leadership development.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Usambara Mountains",
    detail: "Training takes place at participating hotels in the Usambara region, in cooperation with Mabughai Technical College.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Focus",
    value: "Hospitality & Tourism",
    detail: "On-the-job training across hotel departments, followed by six months of specialisation in a chosen area of the industry.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Audience",
    value: "Ages 18 – 28",
    detail: "School leavers from the Usambara region who want to build a professional career and future close to home.",
  },
];

export default function TheProgram() {
  return (
    <Layout>
      {/* Page header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">The program</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Our Program Explained</h1>
        </div>
      </section>

      {/* ── 1. Business School introduction ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Text + cards column */}
            <div className="lg:col-span-3">
              <FadeSection>
                <span className="ulp-label mb-5 inline-block">Pillar 1</span>
                <h2 className="ulp-section-title mb-3">ULP Business School</h2>
                <p className="text-[#6B5B45] mb-8 max-w-xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  A one-year training and coaching programme in hospitality, built for the Usambara.
                </p>
              </FadeSection>

              {/* Four icon info cards */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {infoCards.map((card, i) => (
                  <FadeSection key={card.label} delay={i * 70}>
                    <div className="p-6 h-full" style={{ backgroundColor: "#FDFAF4", borderTop: "3px solid #D4521A" }}>
                      <div className="mb-4" style={{ color: "#D4521A" }}>{card.icon}</div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#9A8A72", letterSpacing: "0.14em" }}>{card.label}</p>
                      <p className="font-bold mb-3 text-[#2C2416]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem" }}>{card.value}</p>
                      <p className="text-sm leading-relaxed text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{card.detail}</p>
                    </div>
                  </FadeSection>
                ))}
              </div>

              <FadeSection delay={80}>
                <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  The programme qualifies participants as professional workforce and entrepreneurs through on-the-job training across all departments of participating hotels. After six months of broad exposure, students specialise in a chosen area of the industry. Throughout, they receive coaching in personal leadership, craftsmanship, and entrepreneurship, and practise their English in class, through role plays, and on the job.
                </p>
              </FadeSection>
            </div>

            {/* Image column — fills the same height as the cards + prose column */}
            <div className="lg:col-span-2 lg:flex flex-col">
              <FadeSection delay={60} className="flex-1 flex flex-col">
                <img
                  src={IMG_TREE_NURSERY}
                  alt="Tree nursery seedlings, community environmental project"
                  className="w-full flex-1 object-cover"
                  style={{ minHeight: "400px", objectPosition: "center 50%" }}
                />
              </FadeSection>
            </div>
          </div>
        </div>
      </section>



      {/* ── 3. Our Vision ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeSection>
              <img
                src={IMG_COMMUNITY}
                alt="Community members in the Usambara Mountains"
                className="w-full h-[380px] object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </FadeSection>
            <FadeSection delay={100}>
              <span className="ulp-label mb-5 inline-block">Our vision</span>
              <h2 className="mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F5EFE0", fontWeight: 700 }}>
                A future where young people choose to stay.
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Thriving businesses anchor the Usambara economy. By empowering local youth with practical skills, investing in promising scale-ups, engaging donors through Ubuntu Leadership Trips, and delivering demand-driven ULP Short Courses, the four pillars strengthen local enterprise, create employment, and generate lasting prosperity for the broader community.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/our-curriculum/" className="ulp-btn">The curriculum</Link>
                <Link href="/our-partners/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#C8B89A", color: "#C8B89A" }}>Our partners</Link>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
