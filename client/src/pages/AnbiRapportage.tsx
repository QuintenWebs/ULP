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

const PDF_ANBI = "/assets/ANBI_publicatie_ULP.pdf";
const ANBI_BADGE = "/assets/bld_logo.svg";
const ANBI_GOV_URL = "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/bijzondere_regelingen/goede_doelen/algemeen_nut_beogende_instellingen/";

export default function AnbiRapportage() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">Transparency &amp; Accountability</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>
            ANBI Report
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          <FadeSection>
            <h2 className="ulp-section-title mb-4">What is ANBI?</h2>
            <hr className="ulp-rule mb-6" />
            <p className="text-[#2C2416] text-lg leading-relaxed mb-5" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <strong>ANBI</strong> stands for <em>Algemeen Nut Beogende Instelling</em>, a Dutch designation for organisations that serve the general public interest. The Ubuntu Leadership Program has been officially recognised as an ANBI by the <a href={ANBI_GOV_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#D4521A", textDecoration: "underline" }}>Dutch Tax Authority (Belastingdienst)</a>.
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-5" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              This status is relevant primarily for <strong>donors based in the Netherlands</strong>. It means that donations made to ULP are fully tax-deductible under Dutch income tax law. In other words, if you donate to ULP, you can deduct the full amount from your taxable income, making your support go even further.
            </p>
            <p className="text-[#2C2416] leading-relaxed mb-10" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              As an ANBI organisation, we are required to publish certain information about our finances, governance, and activities. Our annual ANBI report is available below for full transparency.
            </p>

            {/* Key facts */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Tax-deductible donations", desc: "Dutch residents can deduct 100% of their donation from taxable income." },
                { label: "Public interest mission", desc: "ULP is officially recognised as serving the general public interest." },
                { label: "Full transparency", desc: "We publish our financials, governance, and activities annually." },
              ].map((item) => (
                <div key={item.label} className="p-5 border-t-4" style={{ borderTopColor: "#D4521A", backgroundColor: "#FDFAF4" }}>
                  <h3 className="font-bold mb-2 text-[#2C2416]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem" }}>{item.label}</h3>
                  <p className="text-sm text-[#6B5B45] leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-[#2C2416] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem" }}>
              Download our ANBI Report
            </h3>
            <p className="text-[#6B5B45] mb-6" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              The document below contains our official ANBI publication, including organisational details, financial overview, and a summary of our activities and goals.
            </p>
            <a href={PDF_ANBI} target="_blank" rel="noopener noreferrer" className="ulp-btn inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download ANBI Report (PDF)
            </a>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
