/**
 * Leadership Trip page, /407-2/
 * Design: Warm Savanna Editorial
 * Generic page about the annual Ubuntu Leadership Trip experience
 *
 * All copy and imagery come from content.json so they can be edited in the
 * Mirantic CMS. Links, contact details, icons and design stay in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Mountain, Users, Lightbulb, UtensilsCrossed, Globe, Binoculars } from "lucide-react";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.leadershipTrip;

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

// Icons belong to the design; merged with the editable highlight copy by position.
const HIGHLIGHT_ICONS = [Mountain, Users, Lightbulb, UtensilsCrossed, Globe, Binoculars];

const highlights = c.highlights.items.map((item, i) => ({ icon: HIGHLIGHT_ICONS[i], ...item }));

export default function LeadershipTrip() {
  return (
    <Layout>
      {/* Hero header */}
      <section
        className="relative py-24 lg:py-36 flex items-end"
        data-cms-field="leadershipTrip.hero.backgroundImage"
        data-cms-image
        style={{
          backgroundImage: `url(${c.hero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          minHeight: "420px",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,20,0.88) 0%, rgba(26,26,20,0.4) 60%, rgba(26,26,20,0.1) 100%)" }} />
        <div className="container relative z-10">
          <span className="ulp-label mb-5 inline-block" data-cms-field="leadershipTrip.hero.eyebrow" data-cms-rich><Rich text={c.hero.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="leadershipTrip.hero.title" data-cms-rich>
            <Rich text={c.hero.title} />
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.1rem" }} data-cms-field="leadershipTrip.hero.subtitle" data-cms-rich>
            <Rich text={c.hero.subtitle} />
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <span className="ulp-label ulp-label-outline mb-6 inline-block" data-cms-field="leadershipTrip.intro.eyebrow" data-cms-rich><Rich text={c.intro.eyebrow} /></span>
              <h2 className="ulp-section-title mb-6" data-cms-field="leadershipTrip.intro.title" data-cms-rich><Rich text={c.intro.title} /></h2>
              <hr className="ulp-rule mb-6" />
              <p className="text-[#2C2416] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                <span data-cms-field="leadershipTrip.intro.leadStart" data-cms-rich><Rich text={c.intro.leadStart} /></span>{" "}
                <strong data-cms-field="leadershipTrip.intro.leadStrong" data-cms-rich><Rich text={c.intro.leadStrong} /></strong>{" "}
                <span data-cms-field="leadershipTrip.intro.leadEnd" data-cms-rich><Rich text={c.intro.leadEnd} /></span>
              </p>
              {c.intro.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={i === c.intro.paragraphs.length - 1 ? "text-[#2C2416] leading-relaxed mb-8" : "text-[#2C2416] leading-relaxed mb-4"}
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                  data-cms-field={`leadershipTrip.intro.paragraphs[${i}]`}
                  data-cms-rich
                >
                  <Rich text={text} />
                </p>
              ))}
              <Link href="/contact-us/" className="ulp-btn" data-cms-field="leadershipTrip.intro.cta" data-cms-rich><Rich text={c.intro.cta} /></Link>
            </FadeSection>

            {/* Images */}
            <FadeSection delay={100}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <img
                    src={c.intro.imageHike}
                    alt={c.intro.imageHikeAlt}
                    className="w-full h-56 object-cover hidden sm:block"
                    style={{ objectPosition: "center 40%" }}
                    data-cms-field="leadershipTrip.intro.imageHike"
                  />
                  <img
                    src={c.intro.imageHikeMobile}
                    alt={c.intro.imageHikeMobileAlt}
                    className="w-full h-56 object-cover sm:hidden"
                    data-cms-field="leadershipTrip.intro.imageHikeMobile"
                  />
                </div>
                <img
                  src={c.intro.imageSunsetDinner}
                  alt={c.intro.imageSunsetDinnerAlt}
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center 50%" }}
                  data-cms-field="leadershipTrip.intro.imageSunsetDinner"
                />
                <img
                  src={c.intro.imageCommunity}
                  alt={c.intro.imageCommunityAlt}
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center 40%" }}
                  data-cms-field="leadershipTrip.intro.imageCommunity"
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label mb-5 inline-block" data-cms-field="leadershipTrip.highlights.eyebrow" data-cms-rich><Rich text={c.highlights.eyebrow} /></span>
            <h2 className="ulp-section-title mb-3" style={{ color: "#F5EFE0" }} data-cms-field="leadershipTrip.highlights.title" data-cms-rich><Rich text={c.highlights.title} /></h2>
            <p className="text-[#9A8A72] mb-12 max-w-xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="leadershipTrip.highlights.intro" data-cms-rich>
              <Rich text={c.highlights.intro} />
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeSection key={i} delay={i * 60}>
                <div className="p-6 h-full" style={{ backgroundColor: "#2C2C22", borderTop: "3px solid #D4521A" }}>
                  <div className="mb-3" style={{ color: "#D4521A" }}><h.icon size={28} strokeWidth={1.5} /></div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F5EFE0" }} data-cms-field={`leadershipTrip.highlights.items[${i}].title`} data-cms-rich><Rich text={h.title} /></h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`leadershipTrip.highlights.items[${i}].desc`} data-cms-rich><Rich text={h.desc} /></p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Register */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-6 inline-block" data-cms-field="leadershipTrip.register.eyebrow" data-cms-rich><Rich text={c.register.eyebrow} /></span>
            <h2 className="ulp-section-title mb-4" data-cms-field="leadershipTrip.register.title" data-cms-rich><Rich text={c.register.title} /></h2>
            <hr className="ulp-rule mb-6" />
            <p className="text-[#2C2416] leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="leadershipTrip.register.body" data-cms-rich>
              <Rich text={c.register.body} />
            </p>
            <div className="p-5 mb-8" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
              <p className="text-sm font-semibold text-[#2C2416] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }} data-cms-field="leadershipTrip.register.contactLabel" data-cms-rich><Rich text={c.register.contactLabel} /></p>
              <p className="text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                <span data-cms-field="leadershipTrip.register.contactName" data-cms-rich><Rich text={c.register.contactName} /></span><br />
                <a href={`tel:${c.register.contactPhone.replace(/[^\d+]/g, "")}`} className="hover:text-[#D4521A] transition-colors" data-cms-field="leadershipTrip.register.contactPhone" data-cms-rich><Rich text={c.register.contactPhone} /></a><br />
                <a href={`mailto:${c.register.contactEmail}`} className="hover:text-[#D4521A] transition-colors" data-cms-field="leadershipTrip.register.contactEmail" data-cms-rich><Rich text={c.register.contactEmail} /></a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us/" className="ulp-btn" data-cms-field="leadershipTrip.register.primaryCta" data-cms-rich><Rich text={c.register.primaryCta} /></Link>
              <Link href="/donate/" className="ulp-btn ulp-btn-outline" data-cms-field="leadershipTrip.register.secondaryCta" data-cms-rich><Rich text={c.register.secondaryCta} /></Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
