/*
 * Meet our team page, /meet-our-team/
 * Sections: header, intro, Tanzania team, Netherlands team
 *
 * All copy and team photos come from content.json so they can be edited in the
 * Mirantic CMS. Anything structural (LinkedIn links, photo framing, layout)
 * stays in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";

const c = content.meetOurTeam;

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

// Structure that belongs to the design rather than the content. Merged with the
// editable member copy by position. Photo framing is tuned per portrait.
const TEAM_NL_DESIGN = [
  { linkedin: "https://www.linkedin.com/in/hansvalkenburg/", objectPosition: "center 20%" },
  { linkedin: "https://www.linkedin.com/in/janne-reedeker-6a55b9236/", objectPosition: "center 35%" },
];

const TEAM_TZ_DESIGN = [
  { linkedin: "https://www.linkedin.com/in/shakira-nasser-ba7918133/", objectPosition: "center 20%" },
  { linkedin: "", objectPosition: "center 15%" },
  { linkedin: "", objectPosition: "center 20%" },
];

const teamNL = c.netherlands.members.map((member, i) => ({ ...TEAM_NL_DESIGN[i], ...member }));
const teamTZ = c.tanzania.members.map((member, i) => ({ ...TEAM_TZ_DESIGN[i], ...member }));

export default function MeetOurTeam() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="meetOurTeam.header.eyebrow">{c.header.eyebrow}</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="meetOurTeam.header.title">{c.header.title}</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-12 max-w-2xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="meetOurTeam.intro">
              {c.intro}
            </p>
          </FadeSection>
          {/* Tanzania team — shown first */}
          <FadeSection delay={60}>
            <span className="ulp-label ulp-label-outline mb-8 inline-block" data-cms-field="meetOurTeam.tanzania.label">{c.tanzania.label}</span>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {teamTZ.map((member, i) => {
              const imgStyle: React.CSSProperties = { objectPosition: member.objectPosition };
              return (
                <FadeSection key={member.name} delay={i * 70}>
                  <div className="group">
                    <div className="overflow-hidden mb-3">
                      <img src={member.image} alt={member.imageAlt} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" style={imgStyle} data-cms-field={`meetOurTeam.tanzania.members[${i}].image`} />
                    </div>
                    <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }} data-cms-field={`meetOurTeam.tanzania.members[${i}].name`}>{member.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#9A8A72", fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field={`meetOurTeam.tanzania.members[${i}].title`}>{member.title}</p>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs mt-1 block" style={{ color: "#D4521A" }} data-cms-field="meetOurTeam.linkedinCta">{c.linkedinCta}</a>
                    )}
                  </div>
                </FadeSection>
              );
            })}
          </div>

          {/* Netherlands team */}
          <FadeSection delay={60}>
            <span className="ulp-label ulp-label-outline mb-8 inline-block" data-cms-field="meetOurTeam.netherlands.label">{c.netherlands.label}</span>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamNL.map((member, i) => {
              const imgStyle: React.CSSProperties = { objectPosition: member.objectPosition };
              return (
                <FadeSection key={member.name} delay={i * 70}>
                  <div className="group">
                    <div className="overflow-hidden mb-3">
                      <img src={member.image} alt={member.imageAlt} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" style={imgStyle} data-cms-field={`meetOurTeam.netherlands.members[${i}].image`} />
                    </div>
                    <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }} data-cms-field={`meetOurTeam.netherlands.members[${i}].name`}>{member.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#9A8A72", fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field={`meetOurTeam.netherlands.members[${i}].title`}>{member.title}</p>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs mt-1 block" style={{ color: "#D4521A" }} data-cms-field="meetOurTeam.linkedinCta">{c.linkedinCta}</a>
                    )}
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
