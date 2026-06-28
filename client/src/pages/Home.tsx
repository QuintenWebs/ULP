/*
 * Home page, /
 * Design: Warm Savanna Editorial
 * Sections: full-bleed hero, intro + collage, four pillars, ULP Invest CTA, mission/vision, get involved CTA
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663668553315/82ai2dTBzGDCZKp5bSqxUt/hero-usambara-JusTpstPNxex4soRUxCzgf.webp";
const IMG_TEAM        = "/manus-storage/community_team_photo_ulp_b2094ca1.jpg";
const IMG_MARKET_DAY1 = "/manus-storage/local_market_day_1_44ddb0bd.jpg";
const IMG_AGRI        = "/manus-storage/agriculture_mountain_farming_1670cf31.jpg";
const IMG_SUNSET      = "/manus-storage/sunset_dinner_mountain_view_7d1d5409.jpg";
const IMG_STUDENTS    = "/manus-storage/community_women_hillside_waving_c42caa72.jpg";

const pillars = [
  {
    num: "01",
    label: "ULP Business School",
    sublabel: "The core",
    color: "#D4521A",
    desc: "A one-year training and coaching curriculum for young people from the Usambara.",
    href: "/the-program/",
  },
  {
    num: "02",
    label: "ULP Investment Fund",
    sublabel: "Scale-ups",
    color: "#C4921A",
    desc: "Microcredit and tailored coaching for existing local scale-up entrepreneurs.",
    href: "https://ulpinvest.com",
    external: true,
  },
  {
    num: "03",
    label: "Ubuntu Leadership Trips",
    sublabel: "Sustaining",
    color: "#8B3A1A",
    desc: "Immersive trips for European professionals that sustain the program.",
    href: "/407-2/",
  },
  {
    num: "04",
    label: "ULP Short Courses",
    sublabel: "Community",
    color: "#2D5016",
    desc: "Demand-driven practical courses and clinics for the wider community.",
    href: "/the-program/",
  },
];

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
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,20,0.88) 0%, rgba(26,26,20,0.3) 55%, rgba(26,26,20,0.05) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="ulp-label mb-5 inline-block">Ubuntu Leadership Program</span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Empowering the{" "}
              <span style={{ color: "#E8693A" }}>Usambara</span>{" "}
              Region
            </h1>
            <p className="text-lg mb-8 max-w-lg" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", lineHeight: 1.65 }}>
              A business school, an investment fund, leadership trips and short courses in the Usambara Mountains, Tanzania.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/the-program/" className="ulp-btn">Discover the program</Link>
              <Link href="/donate/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#C8B89A", color: "#C8B89A" }}>Support us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <span className="ulp-label ulp-label-outline mb-6 inline-block">Our story</span>
              <h2 className="ulp-section-title mb-6">Empowering the Youth of the Usambara Mountains</h2>
              <hr className="ulp-rule" />
              <p className="text-[#2C2416] mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                The Ubuntu Leadership Program is created to empower the youth of Tanzania's Usambara Mountains. Known for its rich biodiversity, the Usambara region attracts people that want to make a living.
              </p>
              <p className="text-[#2C2416] mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                However, many young people from the area leave in search of work, as the economy in the Usambara Mountains is still very agricultural oriented.
              </p>
              <p className="text-[#2C2416] mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                The Ubuntu Leadership Program invests in local entrepreneurs and offers tailored coaching and training in leadership, entrepreneurship and craftsmanship. The ULP Business School was founded to offer youth in the region a chance to gain industry-specific skills without having to leave their community.
              </p>
              <Link href="/the-program/" className="ulp-btn inline-block">Read more about the program</Link>
            </FadeSection>

            {/* Image collage, fixed three photos on all screen sizes */}
            <FadeSection delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {/* Top: full-width team photo */}
                <div className="col-span-2">
                  <img
                    src={IMG_TEAM}
                    alt="ULP community team in the Usambara Mountains"
                    className="w-full h-56 object-cover"
                    style={{ objectPosition: "center 60%" }}
                  />
                </div>
                {/* Bottom-left: local market day */}
                <img
                  src={IMG_MARKET_DAY1}
                  alt="Local market day in Lushoto"
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center center" }}
                />
                {/* Bottom-right: mountain agriculture */}
                <img
                  src={IMG_AGRI}
                  alt="Mountain farming in the Usambara"
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center 40%" }}
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
            <span className="ulp-label mb-5 inline-block">The program</span>
            <h2 className="ulp-section-title mb-3">The Four Pillars</h2>
            <p className="text-[#6B5B45] mb-12 max-w-xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              One program, four reinforcing parts that build a stronger local economy.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {pillars.map((p, i) => (
              <FadeSection key={p.num} delay={i * 80}>
                {p.external ? (
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
              <img src={IMG_STUDENTS} alt="ULP students in class" className="w-full h-[420px] object-cover" />
            </FadeSection>
            <FadeSection delay={100}>
              <span className="ulp-label mb-6 inline-block">Our mission</span>
              <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15, color: "#F5EFE0" }}>
                Skilled Youth, Stronger Businesses &amp; a Thriving Local Economy
              </h2>
              <hr className="ulp-rule" />
              <p className="mb-6 leading-relaxed" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                ULP tackles the shortage of qualified labour and the need for stronger businesses in the Usambara region. Through the ULP Business School, the ULP Investment Fund, Ubuntu Leadership Trips that sustain the program, and demand-driven ULP Short Courses, we help young people become skilled professionals, support existing entrepreneurs, and build a more dynamic and sustainable local economy.
              </p>
              <Link href="/about-us/" className="ulp-btn ulp-btn-light">Our mission and vision</Link>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Get Involved CTA ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#D4521A" }}>
        <div className="container text-center">
          <FadeSection>
            <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#FDFAF4", fontWeight: 700 }}>
              Ready to make a difference?
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: "#F5EFE0", fontFamily: "'Source Serif 4', Georgia, serif", opacity: 0.9 }}>
              Whether you want to participate, donate, partner with us, or join a leadership trip, there are many ways to support the Ubuntu Leadership Program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate/" className="ulp-btn ulp-btn-light">Donate</Link>
              <Link href="/participate/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#FDFAF4", color: "#FDFAF4" }}>Participate</Link>
              <Link href="/407-2/" className="ulp-btn ulp-btn-outline" style={{ borderColor: "#FDFAF4", color: "#FDFAF4" }}>Join the Leadership Trip</Link>
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
        >
          {p.sublabel}
        </span>
        {(p as any).external && (
          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-bold mb-3 text-[#2C2416]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{p.label}</h3>
      <p className="text-sm text-[#6B5B45] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{p.desc}</p>
    </div>
  );
}
