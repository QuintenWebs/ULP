/*
 * Contact Us page, /contact-us/
 *
 * All copy comes from content.json so it can be edited in the Mirantic CMS.
 * Anything structural — social URLs, colours, layout —
 * stays in code: the CMS edits content, not navigation or design.
 */

import { Fragment, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.contactUs;

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

export default function ContactUs() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="contactUs.hero.eyebrow" data-cms-rich><Rich text={c.hero.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="contactUs.hero.title" data-cms-rich><Rich text={c.hero.title} /></h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-5 inline-block" data-cms-field="contactUs.intro.eyebrow" data-cms-rich><Rich text={c.intro.eyebrow} /></span>
            <h2 className="ulp-section-title mb-10" data-cms-field="contactUs.intro.title" data-cms-rich><Rich text={c.intro.title} /></h2>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <FadeSection delay={60}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field="contactUs.details.addressLabel" data-cms-rich><Rich text={c.details.addressLabel} /></p>
                <p className="text-[#2C2416] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {c.details.addressLines.map((line, i) => (
                    <Fragment key={i}>
                      {i > 0 && <br />}
                      <span data-cms-field={`contactUs.details.addressLines[${i}]`} data-cms-rich><Rich text={line} /></span>
                    </Fragment>
                  ))}
                </p>
              </div>
            </FadeSection>
            <FadeSection delay={100}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field="contactUs.details.phoneLabel" data-cms-rich><Rich text={c.details.phoneLabel} /></p>
                <a href={`tel:${c.details.phone.replace(/[^\d+]/g, "")}`} className="text-[#2C2416] hover:text-[#D4521A] transition-colors" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="contactUs.details.phone" data-cms-rich><Rich text={c.details.phone} /></a>
              </div>
            </FadeSection>
            <FadeSection delay={140}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field="contactUs.details.emailLabel" data-cms-rich><Rich text={c.details.emailLabel} /></p>
                <a href={`mailto:${c.details.email}`} className="text-[#2C2416] hover:text-[#D4521A] transition-colors break-all" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="contactUs.details.email" data-cms-rich><Rich text={c.details.email} /></a>
              </div>
            </FadeSection>
            <FadeSection delay={180}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field="contactUs.details.bankLabel" data-cms-rich><Rich text={c.details.bankLabel} /></p>
                <p className="text-[#2C2416]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="contactUs.details.bankAccount" data-cms-rich><Rich text={c.details.bankAccount} /></p>
              </div>
            </FadeSection>
          </div>
          <FadeSection delay={220}>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ubuntuleadershipprogram/" target="_blank" rel="noopener noreferrer" className="ulp-btn ulp-btn-outline text-sm" data-cms-field="contactUs.social.instagram" data-cms-rich><Rich text={c.social.instagram} /></a>
              <a href="https://www.linkedin.com/company/ubuntu-leadership-program/" target="_blank" rel="noopener noreferrer" className="ulp-btn ulp-btn-outline text-sm" data-cms-field="contactUs.social.linkedin" data-cms-rich><Rich text={c.social.linkedin} /></a>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
