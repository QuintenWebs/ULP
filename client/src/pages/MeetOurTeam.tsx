/*
 * Meet our team page, /meet-our-team/
 * Sections: header, intro, Tanzania team, Netherlands team
 *
 * All copy and team photos come from content.json so they can be edited in the
 * Mirantic CMS, and team members can be added and removed there. Layout stays
 * in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

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

// A new member added in the Mirantic CMS starts as this, then gets edited in
// place. LinkedIn and photo framing live on each member so they stay with the
// right person when the list changes.
const NEW_MEMBER = {
  name: "New team member",
  title: "Role",
  image: "/assets/team-placeholder.svg",
  imageAlt: "",
  linkedin: "",
  photoPosition: "center 20%",
};

type Team = "tanzania" | "netherlands";

/** One team's grid. Marked as a CMS list so members can be added and removed. */
function TeamGrid({ team, className }: { team: Team; className: string }) {
  const list = `meetOurTeam.${team}.members`;
  return (
    <div
      className={className}
      data-cms-list={list}
      data-cms-list-label="team member"
      data-cms-list-new={JSON.stringify(NEW_MEMBER)}
    >
      {c[team].members.map((member, i) => (
        <FadeSection key={i} delay={i * 70}>
          <div className="group" data-cms-item={i}>
            <div className="overflow-hidden mb-3">
              <img src={member.image} alt={member.imageAlt || member.name} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: member.photoPosition }} data-cms-field={`${list}[${i}].image`} />
            </div>
            <p className="font-semibold text-[#2C2416] text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }} data-cms-field={`${list}[${i}].name`} data-cms-rich><Rich text={member.name} /></p>
            <p className="text-xs mt-0.5" style={{ color: "#9A8A72", fontFamily: "'Barlow Condensed', sans-serif" }} data-cms-field={`${list}[${i}].title`} data-cms-rich><Rich text={member.title} /></p>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs mt-1 block" style={{ color: "#D4521A" }} data-cms-field="meetOurTeam.linkedinCta" data-cms-rich><Rich text={c.linkedinCta} /></a>
            )}
          </div>
        </FadeSection>
      ))}
    </div>
  );
}

export default function MeetOurTeam() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="meetOurTeam.header.eyebrow" data-cms-rich><Rich text={c.header.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="meetOurTeam.header.title" data-cms-rich><Rich text={c.header.title} /></h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-12 max-w-2xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="meetOurTeam.intro" data-cms-rich>
              <Rich text={c.intro} />
            </p>
          </FadeSection>
          {/* Tanzania team — shown first */}
          <FadeSection delay={60}>
            <span className="ulp-label ulp-label-outline mb-8 inline-block" data-cms-field="meetOurTeam.tanzania.label" data-cms-rich><Rich text={c.tanzania.label} /></span>
          </FadeSection>
          <TeamGrid team="tanzania" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" />

          {/* Netherlands team */}
          <FadeSection delay={60}>
            <span className="ulp-label ulp-label-outline mb-8 inline-block" data-cms-field="meetOurTeam.netherlands.label" data-cms-rich><Rich text={c.netherlands.label} /></span>
          </FadeSection>
          <TeamGrid team="netherlands" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" />
        </div>
      </section>
    </Layout>
  );
}
