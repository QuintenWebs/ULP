/**
 * Blog post: Ubuntu Leadership Trip 2026, by Janne
 * Route: /uncategorized/ubuntu-leadership-trip-2026/
 * Design: Warm Savanna Editorial
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const IMG_SUNSET = "/manus-storage/sunset_dinner_mountain_view_7d1d5409.jpg";
const IMG_COMMUNITY = "/manus-storage/community_gathering_roundhouse_6cd0652e.jpg";

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

export default function BlogLeadershipTrip2026() {
  return (
    <Layout>
      {/* Article header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}>June 11, 2026</span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by Janne</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>
            Join the Ubuntu Leadership Trip 2026
          </h1>
          <p className="mt-4 text-lg" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Adventure, connection, and reflection, in the most beautiful places in Tanzania.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="w-full" style={{ maxHeight: "480px", overflow: "hidden" }}>
        <img
          src={IMG_SUNSET}
          alt="Sunset dinner with mountain views, Ubuntu Leadership Trip"
          className="w-full object-cover"
          style={{ height: "480px", objectPosition: "center 50%" }}
        />
      </div>

      {/* Article body */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The <strong>Ubuntu Leadership Trip 2026</strong> takes place in the first week of November. After three highly successful retreats, it will once again be a celebration of adventure, connection, and reflection.
            </p>
          </FadeSection>

          <FadeSection delay={60}>
            {/* Pull quote */}
            <blockquote className="border-l-4 pl-6 my-10" style={{ borderColor: "#D4521A" }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem", color: "#2C2416", fontWeight: 600, lineHeight: 1.45 }}>
                "Ubuntu Leadership, leading in relationship with the other."
              </p>
            </blockquote>
          </FadeSection>

          <FadeSection delay={80}>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              This time, we focus on the theme: <em>Ubuntu Leadership, leading in relationship with the other.</em> Organisational expert, leadership coach, and author of several books on the subject, <strong>Margreet Oostenbrink</strong>, will guide us through the theme.
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The programme is, as always, dynamic, you will see and experience a great deal, but there is also plenty of space for rest, reflection, and personal development as an entrepreneur, executive, professional, and as a person.
            </p>
          </FadeSection>

          {/* Community image mid-article */}
          <FadeSection delay={100}>
            <img
              src={IMG_COMMUNITY}
              alt="Community gathering at the roundhouse, Ubuntu Leadership Trip"
              className="w-full object-cover my-10"
              style={{ height: "320px", objectPosition: "center 40%" }}
            />
          </FadeSection>

          <FadeSection delay={80}>
            <h2 className="ulp-section-title mb-4">Your participation makes it possible</h2>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              With your participation, you make the <strong>ULP Business School</strong> possible: our business school in Tanzania that turns school leavers into skilled professionals and entrepreneurs through a one-year leadership and craftsmanship training.
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <strong>Half of your contribution is a donation</strong> to this programme. Your investment is tax-deductible, either as management training or as a charitable gift. The amount includes a flight ticket.
            </p>
          </FadeSection>

          <FadeSection delay={80}>
            {/* Key facts strip */}
            <div className="grid sm:grid-cols-3 gap-4 my-10">
              {[
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  ), label: "When", value: "First week of November 2026" },
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ), label: "Where", value: "Tanzania, Usambara Mountains" },
                { icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ), label: "Includes", value: "Flight ticket + tax-deductible donation" },
              ].map((item) => (
                <div key={item.label} className="p-5" style={{ backgroundColor: "#FDFAF4", borderTop: "3px solid #D4521A" }}>
                  <div className="mb-2" style={{ color: "#D4521A" }}>{item.icon}</div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#9A8A72", letterSpacing: "0.12em" }}>{item.label}</p>
                  <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection delay={80}>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              I hope to travel with you to the most beautiful places in Tanzania, for an unforgettable journey. Especially in these uncertain times, it is important to make space for this and to keep building a better world together.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://lnkd.in/e6_Pf3Sk"
                target="_blank"
                rel="noopener noreferrer"
                className="ulp-btn"
              >
                Register your interest ↗
              </a>
              <Link href="/407-2/" className="ulp-btn ulp-btn-outline">About the Leadership Trip</Link>
            </div>
          </FadeSection>

          {/* Author byline */}
          <FadeSection delay={60}>
            <div className="mt-14 pt-8 flex items-center gap-4" style={{ borderTop: "1px solid #D9CDB8" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: "#D4521A", fontFamily: "'Barlow Condensed', sans-serif" }}>J</div>
              <div>
                <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>Janne</p>
                <p className="text-xs text-[#9A8A72]">Ubuntu Leadership Program</p>
              </div>
            </div>
          </FadeSection>

          {/* Back link */}
          <FadeSection delay={40}>
            <div className="mt-10">
              <Link href="/news-stories/" className="text-sm hover:text-[#D4521A] transition-colors" style={{ color: "#6B5B45", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
                ← Back to News &amp; Stories
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
