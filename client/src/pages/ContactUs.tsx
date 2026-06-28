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
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeSection>
              <span className="ulp-label ulp-label-outline mb-5 inline-block">Get in touch</span>
              <h2 className="ulp-section-title mb-6">We'd love to hear from you</h2>
              <address className="not-italic space-y-4 text-[#2C2416]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Address</p>
                  <p>Oudegracht 417<br />3511 PJ Utrecht<br />The Netherlands</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Phone</p>
                  <a href="tel:+31622475658" className="hover:text-[#D4521A] transition-colors">+31 6 22 47 56 58</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Email</p>
                  <a href="mailto:info@ubuntuleadershipprogram.nl" className="hover:text-[#D4521A] transition-colors">info@ubuntuleadershipprogram.nl</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1 text-[#D4521A]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Bank Account</p>
                  <p>NL56 RABO 0323 7422 70</p>
                </div>
              </address>
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/ubuntuleadershipprogram/" target="_blank" rel="noopener noreferrer" className="ulp-btn ulp-btn-outline text-sm">Instagram</a>
                <a href="https://www.linkedin.com/company/ubuntu-leadership-program/" target="_blank" rel="noopener noreferrer" className="ulp-btn ulp-btn-outline text-sm">LinkedIn</a>
              </div>
            </FadeSection>
            <FadeSection delay={100}>
              <div className="p-8" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
                <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", color: "#2C2416" }}>Send us a message</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will be in touch soon."); }}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest mb-1 text-[#6B5B45]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Name</label>
                      <input type="text" required className="w-full px-4 py-3 text-[#2C2416] bg-white border focus:outline-none focus:border-[#D4521A] transition-colors" style={{ border: "1px solid #D9CDB8", fontFamily: "'Source Serif 4', Georgia, serif" }} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest mb-1 text-[#6B5B45]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Email</label>
                      <input type="email" required className="w-full px-4 py-3 text-[#2C2416] bg-white border focus:outline-none focus:border-[#D4521A] transition-colors" style={{ border: "1px solid #D9CDB8", fontFamily: "'Source Serif 4', Georgia, serif" }} />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest mb-1 text-[#6B5B45]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Message</label>
                      <textarea required rows={5} className="w-full px-4 py-3 text-[#2C2416] bg-white border focus:outline-none focus:border-[#D4521A] transition-colors resize-none" style={{ border: "1px solid #D9CDB8", fontFamily: "'Source Serif 4', Georgia, serif" }} />
                    </div>
                    <button type="submit" className="ulp-btn w-full">Send message</button>
                  </div>
                </form>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
