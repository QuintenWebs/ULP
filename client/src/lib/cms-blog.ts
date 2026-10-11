/**
 * Blog posts as the Mirantic CMS editor sees them.
 *
 * On a normal visit this returns the published posts from content.json and
 * nothing else. Inside the CMS editor, the bridge (public/cms-bridge.js) also
 * hands over posts that are not published yet and unpublished edits to
 * published ones, so the site renders them exactly as they will look live.
 *
 * Every entry carries `base`, the data-cms-field path its fields live under:
 *   `${base}.title`, `${base}.blocks[2].text`, …
 */
import { useEffect, useState } from "react";

export interface CmsBlogEntry<P> {
  post: P;
  base: string;
  /** Index in content.json's posts; null for a post that isn't published yet. */
  index: number | null;
  /** Set on unpublished posts: removing one in the editor discards it. */
  draftId?: string;
}

interface CmsBlog<P> {
  drafts: { id: string; after: number | null; post: P }[];
  edits: Record<number, P>;
}

/** True inside the CMS editor's preview frame. */
export const inCms = typeof window !== "undefined" && window.parent !== window;

function current<P>(): CmsBlog<P> | null {
  return inCms ? ((window as unknown as { __CMS_BLOG__?: CmsBlog<P> }).__CMS_BLOG__ ?? null) : null;
}

/**
 * Published posts with any edits applied and unpublished posts in their place
 * (at the top, or after the post they were added after).
 */
export function useBlogPosts<P>(published: P[]): CmsBlogEntry<P>[] {
  const [blog, setBlog] = useState(() => current<P>());
  useEffect(() => {
    if (!inCms) return;
    const update = () => setBlog(current<P>());
    window.addEventListener("cms:blog", update);
    update();
    return () => window.removeEventListener("cms:blog", update);
  }, []);

  const entries: CmsBlogEntry<P>[] = published.map((post, i) => ({
    post: blog?.edits[i] ?? post,
    base: `blog.posts[${i}]`,
    index: i,
  }));
  for (const draft of blog?.drafts ?? []) {
    const entry = { post: draft.post, base: `draft:${draft.id}`, index: null, draftId: draft.id };
    const at = draft.after === null ? -1 : entries.findIndex((e) => e.index === draft.after);
    entries.splice(at + 1, 0, entry);
  }
  return entries;
}

/** Whether the editor has handed over its posts yet (a draft's page waits for them). */
export function useCmsBlogReady(): boolean {
  const [ready, setReady] = useState(() => current() !== null);
  useEffect(() => {
    if (!inCms) return;
    const update = () => setReady(current() !== null);
    window.addEventListener("cms:blog", update);
    update();
    return () => window.removeEventListener("cms:blog", update);
  }, []);
  return ready;
}
