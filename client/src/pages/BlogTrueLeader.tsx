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

export default function BlogTrueLeader() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}>April 8, 2026</span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by Kees Huibers</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>A true Ubuntu leader</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <div className="prose max-w-none" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#2C2416", lineHeight: 1.8 }}>
              <p>Meet Anna. From an underprivileged background to becoming an entrepreneur. Her journey is truly inspiring. After completing a one-year program at the ULP Business School, followed by an investment from ULP Invest, she successfully launched her own restaurant and catering service in Lushoto, Tanzania. Built entirely from the ground up. Her story is a powerful testament to resilience, determination, and the transformative power of opportunity. But above all, it is a story of strong female Ubuntu leadership.</p>
              <p>Now, meet Immanuel Kant. In the 18th century this influential philosopher wrote that "enlightenment is man's emergence from his self-imposed immaturity." In today's Trump-era, we seem to be drifting back into a self-imposed immaturity. One shaped by fear and division. Numbed by social media and overwhelmed by a constant stream of negative news, many of us Europeans feel paralyzed. As though our ability to think and act independently has been eroded.</p>
              <p>Yet Anna shows us that another path is possible: one grounded in trust, in faith in one another, and in the willingness to work together. The Ubuntu Leadership Program (ULP) chose that path and wants to build a better world together.</p>
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
