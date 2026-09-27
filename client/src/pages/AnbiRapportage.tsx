/*
 * ANBI report page, /450-2/
 * Sections: header, what is ANBI, key facts, report download
 *
 * All copy comes from content.json so it can be edited in the Mirantic CMS.
 * Anything structural (PDF and Belastingdienst links, colours, layout) stays in code.
 */

import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import content from "@/content.json";

const c = content.anbiRapportage;

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

const PDF_ANBI = "/assets/ANBI_publicatie_ULP.pdf";
const ANBI_BADGE = "/assets/bld_logo.svg";
const ANBI_GOV_URL = "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/bijzondere_regelingen/goede_doelen/algemeen_nut_beogende_instellingen/";

export default function AnbiRapportage() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="anbiRapportage.header.eyebrow">{c.header.eyebrow}</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="anbiRapportage.header.title">
            {c.header.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          <FadeSection>
            <h2 className="ulp-section-title mb-4" data-cms-field="anbiRapportage.whatIs.title">{c.whatIs.title}</h2>
            <hr className="ulp-rule mb-6" />
            <p className="text-[#2C2416] text-lg leading-relaxed mb-5" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <strong data-cms-field="anbiRapportage.whatIs.lead.term">{c.whatIs.lead.term}</strong>{" "}
              <span data-cms-field="anbiRapportage.whatIs.lead.textAfterTerm">{c.whatIs.lead.textAfterTerm}</span>{" "}
              <em data-cms-field="anbiRapportage.whatIs.lead.termFull">{c.whatIs.lead.termFull}</em>
              <span data-cms-field="anbiRapportage.whatIs.lead.textBeforeLink">{c.whatIs.lead.textBeforeLink}</span>{" "}
              <a href={ANBI_GOV_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#D4521A", textDecoration: "underline" }} data-cms-field="anbiRapportage.whatIs.lead.linkText">{c.whatIs.lead.linkText}</a>
              <span data-cms-field="anbiRapportage.whatIs.lead.textAfterLink">{c.whatIs.lead.textAfterLink}</span>
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-5" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <span data-cms-field="anbiRapportage.whatIs.donors.textBefore">{c.whatIs.donors.textBefore}</span>{" "}
              <strong data-cms-field="anbiRapportage.whatIs.donors.highlight">{c.whatIs.donors.highlight}</strong>
              <span data-cms-field="anbiRapportage.whatIs.donors.textAfter">{c.whatIs.donors.textAfter}</span>
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="anbiRapportage.whatIs.publication">
              {c.whatIs.publication}
            </p>

            {/* Key facts */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {c.keyFacts.items.map((item, i) => (
                <div key={item.label} className="p-5 border-t-4" style={{ borderTopColor: "#D4521A", backgroundColor: "#FDFAF4" }}>
                  <h3 className="font-bold mb-2 text-[#2C2416]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem" }} data-cms-field={`anbiRapportage.keyFacts.items[${i}].label`}>{item.label}</h3>
                  <p className="text-sm text-[#6B5B45] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`anbiRapportage.keyFacts.items[${i}].desc`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-[#2C2416] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem" }} data-cms-field="anbiRapportage.download.title">
              {c.download.title}
            </h3>
            <p className="text-[#6B5B45] mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="anbiRapportage.download.body">
              {c.download.body}
            </p>
            <a href={PDF_ANBI} target="_blank" rel="noopener noreferrer" className="ulp-btn inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <span data-cms-field="anbiRapportage.download.cta">{c.download.cta}</span>
            </a>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
