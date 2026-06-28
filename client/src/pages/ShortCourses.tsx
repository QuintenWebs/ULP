/**
 * Short Courses page, /short-courses/
 * Design: Warm Savanna Editorial
 * Practical, demand-driven short courses for entrepreneurs and professionals in the ULP network
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { BookOpen, TrendingUp, Users, UtensilsCrossed, ChefHat, Sparkles, Home } from "lucide-react";

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

const courses = [
  { icon: TrendingUp, title: "Finance", desc: "Practical financial management skills for entrepreneurs and small business owners." },
  { icon: BookOpen, title: "Entrepreneurship", desc: "Foundations of starting and growing a sustainable business in the local economy." },
  { icon: Users, title: "Management & Leadership", desc: "Tools and frameworks for leading teams and organisations with confidence." },
  { icon: UtensilsCrossed, title: "Hospitality", desc: "Industry-specific skills for hotels, lodges, and service businesses in the region." },
  { icon: ChefHat, title: "Cooking Clinics", desc: "Hands-on culinary training led by experienced chefs, tailored to local and international standards." },
  { icon: Sparkles, title: "Personal Hygiene", desc: "Professional standards in personal presentation and hygiene for hospitality and service roles." },
  { icon: Home, title: "Interior Architecture", desc: "Practical interior design and space planning for hospitality and commercial environments." },
];

export default function ShortCourses() {
  return (
    <Layout>
      {/* Hero header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">ULP Short Courses</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>
            Practical Knowledge for<br />Entrepreneurs & Professionals
          </h1>
          <p className="mt-5 max-w-2xl" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.7 }}>
            ULP develops and delivers short courses tailored to the current needs of entrepreneurs and organisations within our network. Our programmes are practice-oriented, immediately applicable, and led by experienced professionals.
          </p>
        </div>
      </section>

      {/* Course offerings grid */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-3 inline-block">The offering</span>
            <h2 className="mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#2C2416", lineHeight: 1.2 }}>
              Seven areas of expertise
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
                  <p className="font-bold text-[#2C2416]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {course.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4A35", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    {course.desc}
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
              <span className="ulp-label mb-5 inline-block">Our approach</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#F5EFE0", lineHeight: 1.2 }}>
                Demand-driven &amp; directly applicable
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem" }}>
                Each short course is developed demand-driven and contributes to the professional development of employees and entrepreneurs, the strengthening of organisations, and the sustainable growth of the local economy.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem" }}>
                A short course typically takes the form of an intensive clinic spanning several days, during which participants gain directly applicable knowledge and skills.
              </p>
            </FadeSection>
            <FadeSection delay={120}>
              <span className="ulp-label mb-5 inline-block">Who we serve</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#F5EFE0", lineHeight: 1.2 }}>
                Hospitality &amp; beyond
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem" }}>
                Our expertise lies in the hospitality sector. Leveraging ULP Business School's extensive network, we develop and deliver hands-on short courses for hotels, hotel chains, and other organisations.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem" }}>
                We offer comparable short courses to the entrepreneurs connected to ULP Invest, ensuring that our knowledge reaches the full breadth of the ULP network.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <div className="max-w-xl">
              <span className="ulp-label ulp-label-outline mb-4 inline-block">Get in touch</span>
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#2C2416" }}>
                Interested in a short course for your team?
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "#5A4A35", fontFamily: "'Source Serif 4', Georgia, serif" }}>
                We work with organisations and entrepreneurs to develop tailored programmes. Reach out to discuss what would work best for your context.
              </p>
              <Link href="/contact-us/" className="ulp-btn-primary inline-block">Contact Us</Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
