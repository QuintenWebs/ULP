/*
 * About us page, /about-us/
 * Sections: header, mission, vision, policy plan with document download
 *
 * All copy comes from content.json so it can be edited in the Mirantic CMS.
 * Anything structural (PDF links, colours, layout) stays in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.aboutUs;

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

const PDF_POLICY = "/assets/Policy-Plan-ULP.pdf";
const PDF_ANBI = "/assets/ANBI_publicatie_ULP.pdf";

// Document links belong to the code, merged with the editable copy by position.
const DOC_DESIGN = [{ href: PDF_POLICY }];

const documents = c.policy.documents.map((doc, i) => ({ ...DOC_DESIGN[i], ...doc }));

export default function AboutUs() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="aboutUs.header.eyebrow" data-cms-rich><Rich text={c.header.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="aboutUs.header.title" data-cms-rich><Rich text={c.header.title} /></h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-5 inline-block" data-cms-field="aboutUs.mission.eyebrow" data-cms-rich><Rich text={c.mission.eyebrow} /></span>
            <h2 className="ulp-section-title mb-4" data-cms-field="aboutUs.mission.title" data-cms-rich><Rich text={c.mission.title} /></h2>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="aboutUs.mission.body" data-cms-rich>
              <Rich text={c.mission.body} />
            </p>
          </FadeSection>
          <FadeSection delay={80}>
            <span className="ulp-label mb-5 inline-block" data-cms-field="aboutUs.vision.eyebrow" data-cms-rich><Rich text={c.vision.eyebrow} /></span>
            <h2 className="ulp-section-title mb-4" data-cms-field="aboutUs.vision.title" data-cms-rich><Rich text={c.vision.title} /></h2>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="aboutUs.vision.body" data-cms-rich>
              <Rich text={c.vision.body} />
            </p>
          </FadeSection>
          <FadeSection delay={120}>
            <span className="ulp-label ulp-label-outline mb-5 inline-block" data-cms-field="aboutUs.policy.eyebrow" data-cms-rich><Rich text={c.policy.eyebrow} /></span>
            <h2 className="ulp-section-title mb-4" data-cms-field="aboutUs.policy.title" data-cms-rich><Rich text={c.policy.title} /></h2>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="aboutUs.policy.body" data-cms-rich>
              <Rich text={c.policy.body} />
            </p>
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <div key={doc.label} className="flex items-center gap-5 p-5" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D4521A" }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#2C2416] text-sm mb-0.5" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }} data-cms-field={`aboutUs.policy.documents[${i}].label`} data-cms-rich><Rich text={doc.label} /></p>
                    <p className="text-xs text-[#6B5B45]" data-cms-field={`aboutUs.policy.documents[${i}].sub`} data-cms-rich><Rich text={doc.sub} /></p>
                  </div>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer" className="ulp-btn flex-shrink-0 text-sm" data-cms-field={`aboutUs.policy.documents[${i}].cta`} data-cms-rich><Rich text={doc.cta} /></a>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
