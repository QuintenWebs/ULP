/**
 * Short Courses page, /short-courses/
 * Design: Warm Savanna Editorial
 * Practical, demand-driven short courses for entrepreneurs and professionals in the ULP network
 *
 * All copy comes from content.json so it can be edited in the Mirantic CMS.
 * Anything structural — links, icons, colours, layout — stays in code.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { BookOpen, TrendingUp, Users, UtensilsCrossed, ChefHat, Sparkles, Home } from "lucide-react";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.shortCourses;

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

// Icons for the course cards. Merged with the editable course copy by position.
const COURSE_ICONS = [TrendingUp, BookOpen, Users, UtensilsCrossed, ChefHat, Sparkles, Home];

const courses = c.offering.courses.map((course, i) => ({ icon: COURSE_ICONS[i], ...course }));

export default function ShortCourses() {
  return (
    <Layout>
      {/* Hero header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="shortCourses.hero.eyebrow" data-cms-rich><Rich text={c.hero.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>
            <span data-cms-field="shortCourses.hero.titleLine1" data-cms-rich><Rich text={c.hero.titleLine1} /></span><br /><span data-cms-field="shortCourses.hero.titleLine2" data-cms-rich><Rich text={c.hero.titleLine2} /></span>
          </h1>
          <p className="mt-5 max-w-2xl" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.7 }} data-cms-field="shortCourses.hero.intro" data-cms-rich>
            <Rich text={c.hero.intro} />
          </p>
        </div>
      </section>

      {/* Course offerings grid */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-3 inline-block" data-cms-field="shortCourses.offering.eyebrow" data-cms-rich><Rich text={c.offering.eyebrow} /></span>
            <h2 className="mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#2C2416", lineHeight: 1.2 }} data-cms-field="shortCourses.offering.title" data-cms-rich>
              <Rich text={c.offering.title} />
            </h2>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {courses.map((course, i) => (
              <FadeSection key={course.title} delay={i * 60}>
                <div
                  className="p-6 h-full flex flex-col gap-3"
                  style={{ backgroundColor: "#EDE4D0", borderLeft: "3px solid #C4921A" }}
                >
                  <course.icon size={22} style={{ color: "#C4921A" }} />
                  <p className="font-bold text-[#2C2416]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.04em", textTransform: "uppercase" }} data-cms-field={`shortCourses.offering.courses[${i}].title`} data-cms-rich>
                    <Rich text={course.title} />
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4A35", fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`shortCourses.offering.courses[${i}].desc`} data-cms-rich>
                    <Rich text={course.desc} />
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Format & approach */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#2C2416" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeSection>
              <span className="ulp-label mb-5 inline-block" data-cms-field="shortCourses.approach.eyebrow" data-cms-rich><Rich text={c.approach.eyebrow} /></span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#F5EFE0", lineHeight: 1.2 }} data-cms-field="shortCourses.approach.title" data-cms-rich>
                <Rich text={c.approach.title} />
              </h2>
              {c.approach.paragraphs.map((text, i) => (
                <p key={i} className={i === 0 ? "mt-5 leading-relaxed" : "mt-4 leading-relaxed"} style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem" }} data-cms-field={`shortCourses.approach.paragraphs[${i}]`} data-cms-rich>
                  <Rich text={text} />
                </p>
              ))}
            </FadeSection>
            <FadeSection delay={120}>
              <span className="ulp-label mb-5 inline-block" data-cms-field="shortCourses.whoWeServe.eyebrow" data-cms-rich><Rich text={c.whoWeServe.eyebrow} /></span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#F5EFE0", lineHeight: 1.2 }} data-cms-field="shortCourses.whoWeServe.title" data-cms-rich>
                <Rich text={c.whoWeServe.title} />
              </h2>
              {c.whoWeServe.paragraphs.map((text, i) => (
                <p key={i} className={i === 0 ? "mt-5 leading-relaxed" : "mt-4 leading-relaxed"} style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem" }} data-cms-field={`shortCourses.whoWeServe.paragraphs[${i}]`} data-cms-rich>
                  <Rich text={text} />
                </p>
              ))}
            </FadeSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <div className="max-w-xl">
              <span className="ulp-label ulp-label-outline mb-4 inline-block" data-cms-field="shortCourses.cta.eyebrow" data-cms-rich><Rich text={c.cta.eyebrow} /></span>
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2C2416" }} data-cms-field="shortCourses.cta.title" data-cms-rich>
                <Rich text={c.cta.title} />
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#5A4A35", fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="shortCourses.cta.body" data-cms-rich>
                <Rich text={c.cta.body} />
              </p>
              <Link href="/contact-us/" className="ulp-btn-primary inline-block" data-cms-field="shortCourses.cta.button" data-cms-rich><Rich text={c.cta.button} /></Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
