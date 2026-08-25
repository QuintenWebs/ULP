/*
 * /blog/:slug — renders a post written in the Mirantic CMS.
 *
 * The four original posts have hand-built pages of their own and are linked by
 * `href`; anything added through the CMS lands here instead, so a new post is
 * publishable without touching the code.
 */

import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import NotFound from "./NotFound";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = content.blog.posts.find((p) => p.slug && p.slug === params?.slug);
  if (!post) return <NotFound />;

  const index = content.blog.posts.indexOf(post);
  // Markdown is not rendered here; paragraphs are enough for CMS-written posts
  // and avoid pulling a parser into a site that otherwise has none.
  const paragraphs = (post.body || post.excerpt || "").split(/\n{2,}/).filter(Boolean);

  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field={`blog.posts[${index}].date`}>{post.date}</span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by <span data-cms-field={`blog.posts[${index}].author`}>{post.author}</span></span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field={`blog.posts[${index}].title`}>{post.title}</h1>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          {post.cover && (
            <img src={post.cover} alt="" className="mb-8 w-full object-cover" data-cms-field={`blog.posts[${index}].cover`} />
          )}
          <div data-cms-field={`blog.posts[${index}].body`}>
            {paragraphs.map((text, i) => (
              <p key={i} className="text-[#2C2416] mb-4" style={{ fontFamily: "'Source Serif 4', Georgia, serif", lineHeight: 1.7 }}>
                {text}
              </p>
            ))}
          </div>
          <Link href="/news-stories/" className="ulp-btn ulp-btn-outline mt-8 inline-block">
            Back to News &amp; Stories
          </Link>
        </div>
      </section>
    </Layout>
  );
}
