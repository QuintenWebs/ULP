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

const posts = [
  { title: "Join the Ubuntu Leadership Trip 2026", date: "June 11, 2026", author: "Janne", href: "/uncategorized/ubuntu-leadership-trip-2026/", excerpt: "After three highly successful retreats, the Ubuntu Leadership Trip 2026 returns in the first week of November. This year's theme: Ubuntu Leadership, leading in relationship with the other. Guided by leadership coach Margreet Oostenbrink, this trip combines adventure, reflection, and personal development, while making the ULP Business School possible." },
  { title: "A true Ubuntu leader", date: "April 8, 2026", author: "Kees Huibers", href: "/uncategorized/475/", excerpt: "Meet Anna. From an underprivileged background to becoming an entrepreneur. Her journey is truly inspiring. After completing a one-year program at ULP Business School, followed by an investment from ULP Invest, she successfully launched her own restaurant and catering service in Lushoto, Tanzania." },
  { title: "Join the Ubuntu Leadership Trip 2025", date: "April 7, 2025", author: "Kees Huibers", href: "/uncategorized/427/", excerpt: "Join the Ubuntu Leadership Trip 2025 from November 1st to 8th. A journey full of reflection, coaching, connection, nature, and enjoyment. By joining, you also support the ULP Business School!" },
  { title: "How English Classes Transform Our Trainees", date: "April 1, 2025", author: "Kees Huibers", href: "/uncategorized/how-english-classes-transform-our-trainees/", excerpt: "In Tanzania's growing tourism and hospitality industry, strong English skills are essential. From welcoming guests at lodges to providing top-notch service in restaurants, effective communication makes all the difference." },
];

export default function NewsStories() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block">News &amp; Stories</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }}>Blog</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          <div className="space-y-10">
            {posts.map((post, i) => (
              <FadeSection key={post.href} delay={i * 80}>
                <article className="border-b pb-10" style={{ borderColor: "#D9CDB8" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }}>{post.date}</span>
                    <span className="text-xs text-[#9A8A72]">by {post.author}</span>
                  </div>
                  <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#2C2416" }}>
                    <Link href={post.href} className="hover:text-[#D4521A] transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-[#6B5B45] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>{post.excerpt}</p>
                  <Link href={post.href} className="ulp-btn ulp-btn-outline">Read more</Link>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
