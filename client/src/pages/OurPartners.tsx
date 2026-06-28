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

const partners = [
  { name: "Ukarimu Academy", url: "https://ukarimuacademy.org/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/zgKfaMgAlGEEnPdK.png", description: "Leadership and hospitality academy in the Usambara region." },
  { name: "Mabughai Technical College", url: "https://mabughai.ac.tz/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/ldWJsADtRdmwtsJq.png", description: "Community development technical training institute since 2007." },
  { name: "Lawns Hotel", url: "https://lawnshotel.com/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/orvxznDHXSLBUOeT.png", description: "Boutique hotel in Lushoto providing on-the-job training placements." },
  { name: "Shambaa Ecotours", url: "https://shambaaecotours.co.tz/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/QpyYMoYpJfXOfXKe.png", description: "Cultural and eco-tourism operator in the Usambara Mountains." },
  { name: "Mambo ViewPoint", url: "https://www.mamboviewpoint.org/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/EnhHkNGCgfRUPaML.png", description: "Eco lodge and community hub in the Usambara highlands." },
  { name: "Usambara Ecotours", url: "https://www.usambaraecotours.com/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/DSJLUFgkjUpIoasB.png", description: "Cultural tourism connecting visitors with local Usambara communities." },
  { name: "Youth Peacemakers Tanzania", url: "https://youthpeacemakers.or.tz/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/hcXjOiXnOYjMxFiv.png", description: "Youth-led organisation promoting peace and development in Lushoto." },
  { name: "PUM Netherlands", url: "https://www.pum.nl/", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663668553315/UVSHUIjDcDYoQFEM.png", description: "Dutch organisation connecting senior experts with entrepreneurs in developing countries." },
];

export default function OurPartners() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">Partners</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Our Partners</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container">
          <FadeSection>
            <p className="text-[#2C2416] text-lg leading-relaxed mb-12 max-w-2xl" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The Ubuntu Leadership Program is a proud partner of the following organisations, each contributing their expertise to empower youth in the Usambara region.
            </p>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <FadeSection key={p.name} delay={i * 60}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "#FDFAF4", border: "1px solid #D9CDB8" }}
                >
                  <div
                    className="w-full flex items-center justify-center mb-5"
                    style={{ height: "96px" }}
                  >
                    <img
                      src={p.logo}
                      alt={p.name + " logo"}
                      style={{ maxHeight: "80px", maxWidth: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <p
                    className="font-semibold text-[#2C2416] text-sm mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {p.name}
                  </p>
                  <p className="text-xs text-[#6B5B45] leading-relaxed mb-3" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                    {p.description}
                  </p>
                  <span className="text-xs mt-auto" style={{ color: "#D4521A", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}>
                    Visit website →
                  </span>
                </a>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
