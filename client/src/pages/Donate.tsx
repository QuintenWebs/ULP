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

export default function Donate() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">Get involved</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Donate</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Your generous donation helps us provide vital training and opportunities to the youth in the Usambara Mountains. With your support, we can continue to create skilled professionals, foster local entrepreneurship, and contribute to the sustainable development of the region. Every contribution, big or small, makes a lasting impact.
            </p>
            <div className="p-5 mb-8" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
              <p className="text-sm font-semibold text-[#2C2416] mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}>BANK ACCOUNT</p>
              <p className="text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>NL56 RABO 0323 7422 70<br />Ubuntu Leadership Program Foundation</p>
            </div>
            <Link href="/contact-us/" className="ulp-btn">Contact us</Link>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
