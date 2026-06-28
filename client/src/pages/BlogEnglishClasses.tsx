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

export default function BlogEnglishClasses() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}>April 1, 2025</span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by Kees Huibers</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>How English Classes Transform Our Trainees</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <div className="prose max-w-none" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#2C2416", lineHeight: 1.8 }}>
              <p>In Tanzania's growing tourism and hospitality industry, strong English skills are essential. From welcoming guests at lodges to providing top-notch service in restaurants, effective communication makes all the difference.</p>
              <p>Recognising that English proficiency is a challenge in the Usambara region, the Ubuntu Leadership Program introduced daily English classes for our trainees. Led by Nasra, a native from Lushoto with hospitality experience, these lessons have been a game-changer.</p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#D4521A" }}>Boosting Confidence &amp; Career Opportunities</h3>
              <p>Since English knowledge is a key selection criterion, we knew structured training was necessary. The impact has been clear: our trainees are improving their language skills and gaining the confidence to interact with international guests professionally.</p>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#D4521A" }}>Looking Ahead: Strengthening Our Training</h3>
              <p>As this is our pilot year, we're already planning improvements for the next traineeship. In the coming year, we aim to:</p>
              <ul>
                <li>Organise an intensive English course before training-on-the-job begins.</li>
                <li>Continue daily one-hour English sessions to ensure ongoing progress.</li>
              </ul>
              <p>By investing in English training for hospitality and tourism, we are preparing young professionals for a brighter future in the industry.</p>
              <p>Want to support this initiative? <Link href="/contact-us/" style={{ color: "#D4521A" }}>Contact us!</Link></p>
            </div>
            <div className="mt-10">
              <Link href="/news-stories/" className="ulp-btn ulp-btn-outline">← Back to News &amp; Stories</Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
