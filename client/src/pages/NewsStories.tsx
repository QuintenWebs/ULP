/*
 * News & Stories, /news-stories/
 *
 * The post list is driven by blog.posts[] in content.json so posts can be
 * written and published from the Mirantic CMS. Posts written here get a page at
 * /blog/:slug; the four original posts keep their bespoke pages via `href`.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";

const c = content.blog;

/** Where a post lives: a hand-built page if it has one, otherwise its own slug. */
export function postHref(post: { href?: string; slug?: string }): string {
  return post.href || `/blog/${post.slug ?? ""}`;
}

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

export default function NewsStories() {
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="blog.eyebrow">{c.eyebrow}</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="blog.title">{c.title}</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          {/* data-cms-posts marks where the CMS previews a brand-new post. */}
          <div className="space-y-10" data-cms-posts>
            {c.posts.map((post, i) => (
              <FadeSection key={post.slug || i} delay={i * 80}>
                <article className="border-b pb-10" style={{ borderColor: "#D9CDB8" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field={`blog.posts[${i}].date`}>{post.date}</span>
                    <span className="text-xs text-[#9A8A72]">by <span data-cms-field={`blog.posts[${i}].author`}>{post.author}</span></span>
                  </div>
                  <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#2C2416" }}>
                    <Link href={postHref(post)} className="hover:text-[#D4521A] transition-colors" data-cms-field={`blog.posts[${i}].title`}>{post.title}</Link>
                  </h2>
                  <p className="text-[#6B5B45] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`blog.posts[${i}].excerpt`}>{post.excerpt}</p>
                  <Link href={postHref(post)} className="ulp-btn ulp-btn-outline">Read more</Link>
                </article>
              </FadeSection>
            ))}
          </div>

          {/* Hidden template the CMS clones to preview a post before publishing.
              Field keys are relative, per the cms-bridge contract. */}
          <article data-cms-template="blog-post" hidden className="border-b pb-10" style={{ borderColor: "#D9CDB8" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field="date" />
              <span className="text-xs text-[#9A8A72]">by <span data-cms-field="author" /></span>
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#2C2416" }} data-cms-field="title" />
            <p className="text-[#6B5B45] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field="excerpt" />
          </article>
        </div>
      </section>
    </Layout>
  );
}
