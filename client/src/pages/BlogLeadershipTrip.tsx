/**
 * Blog post, Ubuntu Leadership Trip
 * Design: Warm Savanna Editorial
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const IMG_ROUNDHOUSE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/otRQertyCyDMIFlW.jpg";

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

export default function BlogLeadershipTrip() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}>April 7, 2025</span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by Kees Huibers</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>
            Join the Ubuntu Leadership Trip 2025
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            {/* Hero image */}
            <img
              src={IMG_ROUNDHOUSE}
              alt="Community gathering at the roundhouse in the Usambara Mountains"
              className="w-full h-64 object-cover mb-8"
              style={{ objectPosition: "center 40%" }}
            />

            <div className="prose max-w-none" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#2C2416", lineHeight: 1.8 }}>
              <p>
                <strong>Join the Ubuntu Leadership Trip 2025</strong> from November 1st to 8th, a week-long journey through Tanzania's Usambara Mountains, combining personal leadership reflection with a genuine connection to the local community.
              </p>
              <p>
                The trip takes you deep into the cloud forests of the Usambara, where you will hike, share meals with local families, visit the ULP Business School, and take part in guided coaching sessions. It is an experience that challenges your perspective and leaves a lasting impression.
              </p>
              <p>
                By joining, you also directly support the ULP Business School and the ULP Investment Fund, your participation fee funds the program that gives young people in the Usambara region the skills and coaching to build a future at home.
              </p>
              <p>
                Places are limited. If you are interested in joining or would like more information, please get in touch:
              </p>
            </div>

            {/* Contact box */}
            <div className="p-5 my-8" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
              <p className="text-sm font-semibold text-[#2C2416] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}>MORE INFORMATION</p>
              <p className="text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Hans Valkenburg<br />
                <a href="tel:+31622475658" className="hover:text-[#D4521A] transition-colors">+31 6 22 47 56 58</a><br />
                <a href="mailto:info@ubuntuleadershipprogram.nl" className="hover:text-[#D4521A] transition-colors">info@ubuntuleadershipprogram.nl</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/407-2/" className="ulp-btn">Learn more about the trip</Link>
              <Link href="/news-stories/" className="ulp-btn ulp-btn-outline">← Back to News &amp; Stories</Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
