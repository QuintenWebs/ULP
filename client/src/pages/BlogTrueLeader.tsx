/*
 * Blog post "A true Ubuntu leader", /uncategorized/475/
 *
 * All copy comes from content.json so it can be edited in the Mirantic CMS.
 * Anything structural — links, colours, layout — stays in code: the CMS edits
 * content, not navigation or design.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";

const c = content.blogTrueLeader;

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
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field="blogTrueLeader.header.date" data-cms-rich><Rich text={c.header.date} /></span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by <span data-cms-field="blogTrueLeader.header.author" data-cms-rich><Rich text={c.header.author} /></span></span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="blogTrueLeader.header.title" data-cms-rich><Rich text={c.header.title} /></h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <FadeSection>
            <div className="prose max-w-none" style={{ fontFamily: "'Source Serif 4', Georgia, serif", color: "#2C2416", lineHeight: 1.8 }}>
              {c.body.paragraphs.map((text, i) => (
                <p key={i} data-cms-field={`blogTrueLeader.body.paragraphs[${i}]`} data-cms-rich><Rich text={text} /></p>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/news-stories/" className="ulp-btn ulp-btn-outline" data-cms-field="blogTrueLeader.body.backCta" data-cms-rich><Rich text={c.body.backCta} /></Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </Layout>
  );
}
