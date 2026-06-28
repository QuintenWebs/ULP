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

export default function Partnership() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">Get involved</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Partnership</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Are you an organisation or business interested in partnering with us? Together, we can create lasting change and make a meaningful impact in the Usambara region. Whether through expertise, resources, or collaborative initiatives, your partnership can help drive the success of the Ubuntu Leadership Program and empower future leaders.
            </p>
            <Link href="/contact-us/" className="ulp-btn">Contact us</Link>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
