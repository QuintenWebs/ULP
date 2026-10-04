/*
 * Our partners page, /our-partners/
 * Sections: header, intro, partner logo grid
 *
 * All copy and logos come from content.json so they can be edited in the
 * Mirantic CMS. Anything structural (partner website links, layout) stays in code.
 */

import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.ourPartners;

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

// Partner websites belong to the code, merged with the editable copy by position.
const PARTNER_DESIGN = [
  { url: "https://ukarimuacademy.org/" },
  { url: "https://mabughai.ac.tz/" },
  { url: "https://lawnshotel.com/" },
  { url: "https://shambaaecotours.co.tz/" },
  { url: "https://www.mamboviewpoint.org/" },
  { url: "https://www.usambaraecotours.com/" },
  { url: "https://youthpeacemakers.or.tz/" },
  { url: "https://www.pum.nl/" },
];

const partners = c.items.map((item, i) => ({ ...PARTNER_DESIGN[i], ...item }));

export default function OurPartners() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="ourPartners.header.eyebrow" data-cms-rich><Rich text={c.header.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="ourPartners.header.title" data-cms-rich><Rich text={c.header.title} /></h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-12 max-w-2xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="ourPartners.intro" data-cms-rich>
              <Rich text={c.intro} />
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <FadeSection key={p.name} delay={i * 60}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}
                >
                  <div
                    className="w-full flex items-center justify-center mb-5"
                    style={{ height: "96px" }}
                  >
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      style={{ maxHeight: "80px", maxWidth: "100%", objectFit: "contain" }}
                      data-cms-field={`ourPartners.items[${i}].logo`}
                    />
                  </div>
                  <p
                    className="font-semibold text-[#2C2416] text-sm mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}
                    data-cms-field={`ourPartners.items[${i}].name`}
                    data-cms-rich
                  >
                    <Rich text={p.name} />
                  </p>
                  <p className="text-xs text-[#6B5B45] leading-relaxed mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`ourPartners.items[${i}].description`} data-cms-rich>
                    <Rich text={p.description} />
                  </p>
                  <span className="text-xs mt-auto" style={{ color: "#D4521A", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }} data-cms-field="ourPartners.visitCta" data-cms-rich>
                    <Rich text={c.visitCta} />
                  </span>
                </a>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
