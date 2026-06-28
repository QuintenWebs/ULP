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

export default function History() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">About us</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>History</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The Ubuntu Leadership Program was founded by a group of Dutch professionals with a shared conviction: that sustainable development in the Usambara Mountains of Tanzania requires investing in local people, not importing solutions from outside.
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Starting with a small investment fund and a vision for a business school rooted in the local hospitality sector, ULP has grown into a multi-pillar program that combines education, entrepreneurship support, and international engagement.
            </p>
            <Link href="/about-us/" className="ulp-btn">Mission, Vision &amp; Policy Plan</Link>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
