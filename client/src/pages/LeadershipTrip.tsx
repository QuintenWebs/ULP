/**
 * Leadership Trip page, /407-2/
 * Design: Warm Savanna Editorial
 * Generic page about the annual Ubuntu Leadership Trip experience
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Mountain, Users, Lightbulb, UtensilsCrossed, Globe, Binoculars } from "lucide-react";

const IMG_ROUNDHOUSE   = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/otRQertyCyDMIFlW.jpg";
const IMG_HIKE         = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/zKtquokvHeheXEJW.jpg";
const IMG_SUNSET_DIN   = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/AxtNXLhuOXQJZjzf.jpg";
const IMG_COMMUNITY    = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/HsyVZZYGLRTktoIY.jpg";
const IMG_PORTRAIT_MOB = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/gftowTNglxLxEjQw.jpg";

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

const highlights = [
  { icon: Mountain, title: "Immersive nature", desc: "Guided hikes through the Usambara cloud forests, with breathtaking views above the clouds." },
  { icon: Users, title: "Community connection", desc: "Meet local entrepreneurs, visit the ULP Business School, and see the program's impact first-hand." },
  { icon: Lightbulb, title: "Reflection & coaching", desc: "Structured sessions for personal leadership reflection, facilitated by experienced coaches." },
  { icon: UtensilsCrossed, title: "Culture & cuisine", desc: "Shared meals, campfire evenings, and authentic Tanzanian hospitality at every turn." },
  { icon: Globe, title: "Meaningful contribution", desc: "Your participation directly funds the ULP Business School and the ULP Investment Fund." },
  { icon: Binoculars, title: "Optional safari extension", desc: "Extend your trip with a Serengeti or Kilimanjaro experience, we can help arrange it." },
];

export default function LeadershipTrip() {
  return (
    <Layout>
      {/* Hero header */}
      <section
        className="relative py-24 lg:py-36 flex items-end"
        style={{
          backgroundImage: `url(${IMG_ROUNDHOUSE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          minHeight: "420px",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,20,0.88) 0%, rgba(26,26,20,0.4) 60%, rgba(26,26,20,0.1) 100%)" }} />
        <div className="container relative z-10">
          <span className="ulp-label mb-5 inline-block">Get involved</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>
            The Ubuntu Leadership Trip
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: "#C8B89A", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.1rem" }}>
            An annual immersive journey to the Usambara Mountains, for leaders who want to give back while growing.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <span className="ulp-label ulp-label-outline mb-6 inline-block">About the trip</span>
              <h2 className="ulp-section-title mb-6">A week that changes perspective</h2>
              <hr className="ulp-rule mb-6" />
              <p className="text-[#2C2416] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                The <strong>Ubuntu Leadership Trip</strong> is an annual week-long experience in Tanzania's Usambara Mountains, designed for European professionals and leaders who want to combine personal growth with meaningful impact.
              </p>
              <p className="text-[#2C2416] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                You will hike through misty cloud forests, share meals with local community members, visit the ULP Business School, and take part in guided leadership reflection sessions, all while your participation directly funds the program.
              </p>
              <p className="text-[#2C2416] leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                It is not a typical holiday. It is a journey of connection, to a place, to a community, and to yourself.
              </p>
              <Link href="/contact-us/" className="ulp-btn">Register your interest</Link>
            </FadeSection>

            {/* Images */}
            <FadeSection delay={100}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <img
                    src={IMG_HIKE}
                    alt="Misty mountain hike through the Usambara cloud forest"
                    className="w-full h-56 object-cover hidden sm:block"
                    style={{ objectPosition: "center 40%" }}
                  />
                  <img
                    src={IMG_PORTRAIT_MOB}
                    alt="Rain over the Usambara valley viewpoint"
                    className="w-full h-56 object-cover sm:hidden"
                  />
                </div>
                <img
                  src={IMG_SUNSET_DIN}
                  alt="Sunset dinner with mountain views over the Usambara"
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center 50%" }}
                />
                <img
                  src={IMG_COMMUNITY}
                  alt="Community women waving on the Usambara hillside"
                  className="w-full h-44 object-cover"
                  style={{ objectPosition: "center 40%" }}
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <FadeSection>
            <span className="ulp-label mb-5 inline-block">What to expect</span>
            <h2 className="ulp-section-title mb-3" style={{ color: "#F5EFE0" }}>Six days of purpose</h2>
            <p className="text-[#9A8A72] mb-12 max-w-xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Every trip is different, but these are the experiences that define the Ubuntu Leadership journey.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeSection key={h.title} delay={i * 60}>
                <div className="p-6 h-full" style={{ backgroundColor: "#2C2C22", borderTop: "3px solid #D4521A" }}>
                  <div className="mb-3" style={{ color: "#D4521A" }}><h.icon size={28} strokeWidth={1.5} /></div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F5EFE0" }}>{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9A8A72", fontFamily: "'Source Serif 4', Georgia, serif" }}>{h.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Register */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <span className="ulp-label ulp-label-outline mb-6 inline-block">Next trip</span>
            <h2 className="ulp-section-title mb-4">Interested in joining?</h2>
            <hr className="ulp-rule mb-6" />
            <p className="text-[#2C2416] leading-relaxed mb-8" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The Ubuntu Leadership Trip runs annually, typically in the autumn. Places are limited to keep the experience intimate and meaningful. If you are interested in joining the next trip, get in touch and we will send you full details on dates, pricing, and what to expect.
            </p>
            <div className="p-5 mb-8" style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}>
              <p className="text-sm font-semibold text-[#2C2416] mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}>MORE INFORMATION</p>
              <p className="text-[#6B5B45]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                Hans Valkenburg<br />
                <a href="tel:+31622475658" className="hover:text-[#D4521A] transition-colors">+31 6 22 47 56 58</a><br />
                <a href="mailto:info@ubuntuleadershipprogram.nl" className="hover:text-[#D4521A] transition-colors">info@ubuntuleadershipprogram.nl</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us/" className="ulp-btn">Get in touch</Link>
              <Link href="/donate/" className="ulp-btn ulp-btn-outline">Support the program</Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
