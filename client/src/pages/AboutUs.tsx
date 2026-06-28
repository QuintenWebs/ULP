import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

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

export default function AboutUs() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">About us</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Mission, Vision and Policy Plan</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-5 inline-block">Our mission</span>
            <h2 className="ulp-section-title mb-4">Our Mission</h2>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              ULP addresses the need for stronger, more resilient businesses in the Usambara region by investing directly in local entrepreneurs. The core challenges being tackled are limited access to capital, business skills, and professional networks for promising entrepreneurs in this remote area. By combining financial investment with targeted coaching and short practical training, ULP helps affiliated entrepreneurs develop and qualify their businesses, contributing to a more dynamic and sustainable local economy.
            </p>
          </FadeSection>
          <FadeSection delay={80}>
            <span className="ulp-label mb-5 inline-block">Our vision</span>
            <h2 className="ulp-section-title mb-4">Our Vision</h2>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Through investing in and empowering local entrepreneurs with capital, targeted training, and hands-on coaching, the Ubuntu Leadership Program envisions a future where thriving businesses anchor the Usambara economy. By building a growing network of supported entrepreneurs the program aims to strengthen local enterprise, create employment, and generate sustainable prosperity for the broader community.
            </p>
          </FadeSection>
          <FadeSection delay={120}>
            <span className="ulp-label ulp-label-outline mb-5 inline-block">Policy plan</span>
            <h2 className="ulp-section-title mb-4">Policy Plan</h2>
            <p className="text-[#2C2416] leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The policy plan of ULP outlines the mission, vision, key activities, and governance of the foundation. It details how resources are managed with all funds supporting the mission of empowering young people in the Usambara region.
            </p>
            <div className="space-y-4">
              {[
                { label: "Policy Plan ULP Foundation", sub: "Download the full policy plan (PDF)", href: PDF_POLICY },
              ].map((doc) => (
                <div key={doc.label} className="flex items-center gap-5 p-5" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D4521A" }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#2C2416] text-sm mb-0.5" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}>{doc.label}</p>
                    <p className="text-xs text-[#6B5B45]">{doc.sub}</p>
                  </div>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer" className="ulp-btn flex-shrink-0 text-sm">Download</a>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
