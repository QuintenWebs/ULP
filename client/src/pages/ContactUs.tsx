import { useEffect, useRef } from "react";
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

export default function ContactUs() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">Contact</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Contact Us</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-5 inline-block">Get in touch</span>
            <h2 className="ulp-section-title mb-10">We'd love to hear from you</h2>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <FadeSection delay={60}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Address</p>
                <p className="text-[#2C2416] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>Oudegracht 417<br />3511 PJ Utrecht<br />The Netherlands</p>
              </div>
            </FadeSection>
            <FadeSection delay={100}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Phone</p>
                <a href="tel:+31622475658" className="text-[#2C2416] hover:text-[#D4521A] transition-colors" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>+31 6 22 47 56 58</a>
              </div>
            </FadeSection>
            <FadeSection delay={140}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Email</p>
                <a href="mailto:info@ubuntuleadershipprogram.nl" className="text-[#2C2416] hover:text-[#D4521A] transition-colors break-all" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>info@ubuntuleadershipprogram.nl</a>
              </div>
            </FadeSection>
            <FadeSection delay={180}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Bank Account</p>
                <p className="text-[#2C2416]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>NL56 RABO 0323 7422 70</p>
              </div>
            </FadeSection>
          </div>
          <FadeSection delay={220}>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ubuntuleadershipprogram/" target="_blank" rel="noopener noreferrer" className="ulp-btn ulp-btn-outline text-sm">Instagram</a>
              <a href="https://www.linkedin.com/company/ubuntu-leadership-program/" target="_blank" rel="noopener noreferrer" className="ulp-btn ulp-btn-outline text-sm">LinkedIn</a>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
