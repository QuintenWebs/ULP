/**
 * Blog post, Ubuntu Leadership Trip
 * Design: Warm Savanna Editorial
 *
 * All copy and imagery come from content.json so they can be edited in the
 * Mirantic CMS. Links, contact details and design stay in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.blogLeadershipTrip;

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

export default function BlogLeadershipTrip() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field="blogLeadershipTrip.header.date" data-cms-rich><Rich text={c.header.date} /></span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by <span data-cms-field="blogLeadershipTrip.header.author" data-cms-rich><Rich text={c.header.author} /></span></span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="blogLeadershipTrip.header.title" data-cms-rich>
            <Rich text={c.header.title} />
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            {/* Hero image */}
            <img
              src={c.heroImage}
              alt={c.heroImageAlt}
              className="w-full h-64 object-cover mb-8"
              style={{ objectPosition: "center 40%" }}
              data-cms-field="blogLeadershipTrip.heroImage"
            />

            <div className="prose max-w-none" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#2C2416", lineHeight: 1.8 }}>
              <p>
                <strong data-cms-field="blogLeadershipTrip.body.leadStrong" data-cms-rich><Rich text={c.body.leadStrong} /></strong>{" "}
                <span data-cms-field="blogLeadershipTrip.body.leadEnd" data-cms-rich><Rich text={c.body.leadEnd} /></span>
              </p>
              {c.body.paragraphs.map((text, i) => (
                <p key={i} data-cms-field={`blogLeadershipTrip.body.paragraphs[${i}]`} data-cms-rich>
                  <Rich text={text} />
                </p>
              ))}
            </div>

            {/* Contact box */}
            <div className="p-5 my-8" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
              <p className="text-sm font-semibold text-[#2C2416] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }} data-cms-field="blogLeadershipTrip.contact.label" data-cms-rich><Rich text={c.contact.label} /></p>
              <p className="text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                <span data-cms-field="blogLeadershipTrip.contact.name" data-cms-rich><Rich text={c.contact.name} /></span><br />
                <a href={`tel:${c.contact.phone.replace(/[^\d+]/g, "")}`} className="hover:text-[#D4521A] transition-colors" data-cms-field="blogLeadershipTrip.contact.phone" data-cms-rich><Rich text={c.contact.phone} /></a><br />
                <a href={`mailto:${c.contact.email}`} className="hover:text-[#D4521A] transition-colors" data-cms-field="blogLeadershipTrip.contact.email" data-cms-rich><Rich text={c.contact.email} /></a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/407-2/" className="ulp-btn" data-cms-field="blogLeadershipTrip.learnMoreCta" data-cms-rich><Rich text={c.learnMoreCta} /></Link>
              <Link href="/news-stories/" className="ulp-btn ulp-btn-outline" data-cms-field="blogLeadershipTrip.backCta" data-cms-rich><Rich text={c.backCta} /></Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
