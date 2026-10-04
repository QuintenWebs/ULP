/**
 * Blog post: Ubuntu Leadership Trip 2026, by Janne
 * Route: /uncategorized/ubuntu-leadership-trip-2026/
 * Design: Warm Savanna Editorial
 *
 * All copy and imagery come from content.json so they can be edited in the
 * Mirantic CMS. Links, icons and design stay in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.blogLeadershipTrip2026;

// Icons belong to the design; merged with the editable key facts by position.
const FACT_ICONS = [
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

const facts = c.facts.items.map((item, i) => ({ icon: FACT_ICONS[i], ...item }));

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
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field="blogLeadershipTrip2026.header.date" data-cms-rich><Rich text={c.header.date} /></span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by <span data-cms-field="blogLeadershipTrip2026.header.author" data-cms-rich><Rich text={c.header.author} /></span></span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="blogLeadershipTrip2026.header.title" data-cms-rich>
            <Rich text={c.header.title} />
          </h1>
          <p className="mt-4 text-lg" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="blogLeadershipTrip2026.header.subtitle" data-cms-rich>
            <Rich text={c.header.subtitle} />
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="w-full" style={{ maxHeight: "480px", overflow: "hidden" }}>
        <img
          src={c.heroImage}
          alt={c.heroImageAlt}
          className="w-full object-cover"
          style={{ height: "480px", objectPosition: "center 50%" }}
          data-cms-field="blogLeadershipTrip2026.heroImage"
        />
      </div>

      {/* Article body */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <span data-cms-field="blogLeadershipTrip2026.body.leadStart" data-cms-rich><Rich text={c.body.leadStart} /></span>{" "}
              <strong data-cms-field="blogLeadershipTrip2026.body.leadStrong" data-cms-rich><Rich text={c.body.leadStrong} /></strong>{" "}
              <span data-cms-field="blogLeadershipTrip2026.body.leadEnd" data-cms-rich><Rich text={c.body.leadEnd} /></span>
            </p>
          </FadeSection>

          <FadeSection delay={60}>
            {/* Pull quote */}
            <blockquote className="border-l-4 pl-6 my-10" style={{ borderColor: "#D4521A" }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.35rem", color: "#2C2416", fontWeight: 600, lineHeight: 1.45 }} data-cms-field="blogLeadershipTrip2026.body.quote" data-cms-rich>
                <Rich text={c.body.quote} />
              </p>
            </blockquote>
          </FadeSection>

          <FadeSection delay={80}>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <span data-cms-field="blogLeadershipTrip2026.body.themeStart" data-cms-rich><Rich text={c.body.themeStart} /></span>{" "}
              <em data-cms-field="blogLeadershipTrip2026.body.themeEm" data-cms-rich><Rich text={c.body.themeEm} /></em>{" "}
              <span data-cms-field="blogLeadershipTrip2026.body.themeMiddle" data-cms-rich><Rich text={c.body.themeMiddle} /></span>{" "}
              <strong data-cms-field="blogLeadershipTrip2026.body.themeStrong" data-cms-rich><Rich text={c.body.themeStrong} /></strong>
              <span data-cms-field="blogLeadershipTrip2026.body.themeEnd" data-cms-rich><Rich text={c.body.themeEnd} /></span>
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="blogLeadershipTrip2026.body.programme" data-cms-rich>
              <Rich text={c.body.programme} />
            </p>
          </FadeSection>

          {/* Community image mid-article */}
          <FadeSection delay={100}>
            <img
              src={c.body.communityImage}
              alt={c.body.communityImageAlt}
              className="w-full object-cover my-10"
              style={{ height: "320px", objectPosition: "center 40%" }}
              data-cms-field="blogLeadershipTrip2026.body.communityImage"
            />
          </FadeSection>

          <FadeSection delay={80}>
            <h2 className="ulp-section-title mb-4" data-cms-field="blogLeadershipTrip2026.participation.title" data-cms-rich><Rich text={c.participation.title} /></h2>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <span data-cms-field="blogLeadershipTrip2026.participation.schoolStart" data-cms-rich><Rich text={c.participation.schoolStart} /></span>{" "}
              <strong data-cms-field="blogLeadershipTrip2026.participation.schoolStrong" data-cms-rich><Rich text={c.participation.schoolStrong} /></strong>{" "}
              <span data-cms-field="blogLeadershipTrip2026.participation.schoolEnd" data-cms-rich><Rich text={c.participation.schoolEnd} /></span>
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <strong data-cms-field="blogLeadershipTrip2026.participation.donationStrong" data-cms-rich><Rich text={c.participation.donationStrong} /></strong>{" "}
              <span data-cms-field="blogLeadershipTrip2026.participation.donationEnd" data-cms-rich><Rich text={c.participation.donationEnd} /></span>
            </p>
          </FadeSection>

          <FadeSection delay={80}>
            {/* Key facts strip */}
            <div className="grid sm:grid-cols-3 gap-4 my-10">
              {facts.map((item, i) => (
                <div key={i} className="p-5" style={{ backgroundColor: "#FDFAF4", borderTop: "3px solid #D4521A" }}>
                  <div className="mb-2" style={{ color: "#D4521A" }}>{item.icon}</div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#9A8A72", letterSpacing: "0.12em" }} data-cms-field={`blogLeadershipTrip2026.facts.items[${i}].label`} data-cms-rich><Rich text={item.label} /></p>
                  <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`blogLeadershipTrip2026.facts.items[${i}].value`} data-cms-rich><Rich text={item.value} /></p>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection delay={80}>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="blogLeadershipTrip2026.closing.body" data-cms-rich>
              <Rich text={c.closing.body} />
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://lnkd.in/e6_Pf3Sk"
                target="_blank"
                rel="noopener noreferrer"
                className="ulp-btn"
                data-cms-field="blogLeadershipTrip2026.closing.registerCta"
                data-cms-rich
              >
                <Rich text={c.closing.registerCta} />
              </a>
              <Link href="/407-2/" className="ulp-btn ulp-btn-outline" data-cms-field="blogLeadershipTrip2026.closing.aboutCta" data-cms-rich><Rich text={c.closing.aboutCta} /></Link>
            </div>
          </FadeSection>

          {/* Author byline */}
          <FadeSection delay={60}>
            <div className="mt-14 pt-8 flex items-center gap-4" style={{ borderTop: "1px solid #D9CDB8" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ backgroundColor: "#D4521A", fontFamily: "'Barlow Condensed', sans-serif" }}>{c.byline.name.charAt(0)}</div>
              <div>
                <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }} data-cms-field="blogLeadershipTrip2026.byline.name" data-cms-rich><Rich text={c.byline.name} /></p>
                <p className="text-xs text-[#9A8A72]" data-cms-field="blogLeadershipTrip2026.byline.organisation" data-cms-rich><Rich text={c.byline.organisation} /></p>
              </div>
            </div>
          </FadeSection>

          {/* Back link */}
          <FadeSection delay={40}>
            <div className="mt-10">
              <Link href="/news-stories/" className="text-sm hover:text-[#D4521A] transition-colors" style={{ color: "#6B5B45", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }} data-cms-field="blogLeadershipTrip2026.backLink" data-cms-rich>
                <Rich text={c.backLink} />
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
