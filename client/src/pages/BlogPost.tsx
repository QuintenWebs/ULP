/*
 * /blog/:slug — renders a post written in the Mirantic CMS.
 *
 * The four original posts have hand-built pages of their own and are linked by
 * `href`; anything added through the CMS lands here instead, so a new post is
 * publishable without touching the code. Laid out like the Leadership Trip
 * 2026 post: dark header with title and caption, a full-width cover image,
 * then the body as a list of blocks (paragraphs, images and link buttons).
 *
 * In the CMS editor the same page shows posts that aren't published yet, and
 * empty image slots as placeholders that can be clicked to add an image.
 *
 * Every text element is keyed by its value: the CMS edits text right on the
 * page, so when a value changes React replaces the element instead of
 * reconciling children the editor has already rewritten.
 */

import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import content from "@/content.json";
import NotFound from "./NotFound";
import { Rich } from "@/lib/rich";
import { useBlogPosts, useCmsBlogReady, inCms } from "@/lib/cms-blog";

export type PostBlock =
  | { type: "text"; text: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "link"; label: string; url: string };

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  href?: string;
  cover: string;
  blocks?: PostBlock[];
  /** Plain paragraphs separated by blank lines; posts from before blocks. */
  body?: string;
}

const SERIF = "'Source Serif 4', Georgia, serif";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const entries = useBlogPosts(content.blog.posts as Post[]);
  const cmsReady = useCmsBlogReady();
  const entry = entries.find((e) => !e.post.href && e.post.slug === params?.slug);
  // In the editor an unpublished post only exists once the CMS has sent it.
  if (!entry) return inCms && !cmsReady ? <Layout>{null}</Layout> : <NotFound />;

  const { post, base } = entry;
  const blocks: PostBlock[] =
    post.blocks ??
    (post.body || "").split(/\n{2,}/).filter(Boolean).map((text) => ({ type: "text", text }));

  return (
    <Layout>
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A1A14" }}>
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span key={post.date} className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D4521A" }} data-cms-field={`${base}.date`} data-cms-rich><Rich text={post.date} /></span>
            <span className="text-xs" style={{ color: "#9A8A72" }}>by <span key={post.author} data-cms-field={`${base}.author`} data-cms-rich><Rich text={post.author} /></span></span>
          </div>
          <h1 key={post.title} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, color: "#F5EFE0", lineHeight: 1.1 }} data-cms-field={`${base}.title`} data-cms-rich><Rich text={post.title} /></h1>
          {(post.excerpt || inCms) && (
            <p key={post.excerpt} className="mt-4 text-lg" style={{ color: "#9A8A72", fontFamily: SERIF }} data-cms-field={`${base}.excerpt`} data-cms-rich><Rich text={post.excerpt} /></p>
          )}
        </div>
      </section>

      {post.cover ? (
        <div className="w-full" style={{ maxHeight: "480px", overflow: "hidden" }}>
          <img src={post.cover} alt="" className="w-full object-cover" style={{ height: "480px", objectPosition: "center 50%" }} data-cms-field={`${base}.cover`} />
        </div>
      ) : (
        inCms && (
          <div className="container max-w-3xl pt-10">
            <div data-cms-placeholder data-cms-image data-cms-field={`${base}.cover`} style={{ minHeight: "260px" }}>
              <span style={{ fontSize: "28px", fontWeight: 300, lineHeight: 1 }}>+</span>
              Add a cover image
            </div>
          </div>
        )
      )}

      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5EFE0" }}>
        <div className="container max-w-2xl">
          <div
            data-cms-list={`${base}.blocks`}
            data-cms-list-label="paragraph"
            data-cms-list-new={JSON.stringify({ type: "text", text: "Write your paragraph here." })}
            data-cms-list-compact
          >
            {blocks.map((block, i) => (
              <div key={`${i}-${block.type}`} data-cms-item={i} data-cms-item-label={block.type === "text" ? "paragraph" : block.type} className="mb-6">
                <Block block={block} path={`${base}.blocks[${i}]`} />
              </div>
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

function Block({ block, path }: { block: PostBlock; path: string }) {
  if (block.type === "image") {
    if (block.src) {
      return <img src={block.src} alt={block.alt ?? ""} className="w-full object-cover my-4" style={{ maxHeight: "420px" }} data-cms-field={`${path}.src`} />;
    }
    return inCms ? (
      <div data-cms-placeholder data-cms-image data-cms-field={`${path}.src`}>
        <span style={{ fontSize: "28px", fontWeight: 300, lineHeight: 1 }}>+</span>
        Add an image
      </div>
    ) : null;
  }
  if (block.type === "link") {
    const external = /^https?:/i.test(block.url);
    return (
      <a
        key={block.label}
        href={block.url}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="ulp-btn inline-block"
        data-cms-field={`${path}.label`}
        data-cms-rich
      >
        <Rich text={block.label} />
      </a>
    );
  }
  return (
    <p key={block.text} className="text-[#2C2416] leading-relaxed" style={{ fontFamily: SERIF, lineHeight: 1.7 }} data-cms-field={`${path}.text`} data-cms-rich>
      <Rich text={block.text} />
    </p>
  );
}
