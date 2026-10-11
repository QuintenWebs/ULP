/*
 * News & Stories, /news-stories/
 *
 * The post list is driven by blog.posts[] in content.json so posts can be
 * written and published from the Mirantic CMS. Posts written there get a page at
 * /blog/:slug; the four original posts keep their bespoke pages via `href`.
 * In the CMS editor the list also shows unpublished posts, and hovering a post
 * offers to start a new one.
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import { Rich } from "@/lib/rich";
import { useBlogPosts } from "@/lib/cms-blog";
import type { Post } from "./BlogPost";

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
  const entries = useBlogPosts(c.posts as Post[]);
  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container">
          <span className="ulp-label mb-5 inline-block" data-cms-field="blog.eyebrow" data-cms-rich><Rich text={c.eyebrow} /></span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field="blog.title" data-cms-rich><Rich text={c.title} /></h1>
        </div>
      </section>
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-3xl">
          {/* The CMS adds a post where you hover ("Add post here"), and can remove one. */}
          <div className="space-y-10" data-cms-list="blog.posts" data-cms-list-label="post">
            {entries.map(({ post, base, index, draftId }, i) => (
              <div key={draftId ?? post.slug ?? i} data-cms-temp-id={draftId}>
                <FadeSection delay={i * 80}>
                  <article className="border-b pb-10" style={{ borderColor: "#D9CDB8" }} data-cms-item={index ?? -1}>
                    <div className="flex items-center gap-3 mb-3">
                      <span key={post.date} className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field={`${base}.date`} data-cms-rich><Rich text={post.date} /></span>
                      <span className="text-xs text-[#9A8A72]">by <span key={post.author} data-cms-field={`${base}.author`} data-cms-rich><Rich text={post.author} /></span></span>
                    </div>
                    <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#2C2416" }}>
                      <Link key={post.title} href={postHref(post)} className="hover:text-[#D4521A] transition-colors" data-cms-field={`${base}.title`} data-cms-rich><Rich text={post.title} /></Link>
                    </h2>
                    <p key={post.excerpt} className="text-[#6B5B45] leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }} data-cms-field={`${base}.excerpt`} data-cms-rich><Rich text={post.excerpt} /></p>
                    <Link href={postHref(post)} className="ulp-btn ulp-btn-outline">Read more</Link>
                  </article>
                </FadeSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
