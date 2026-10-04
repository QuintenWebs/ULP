/**
 * Formatted text from content.json, editable in the Mirantic CMS.
 *
 * Only this small format is understood, so nothing in content.json can inject
 * markup or scripts:
 *   **bold**  *italic*  __underline__  [text](url)  \* for a literal *
 *   a leading "# ", "## ", "### " or "-# " picks one of TEXT_STYLES below
 *
 * The CMS bridge (public/cms-bridge.js) renders the same format for the live
 * preview and reads TEXT_STYLES from window.__CMS_TEXT_STYLES__, so the style
 * picker in the CMS only offers looks that belong to this site.
 */
import type { CSSProperties, ReactNode } from "react";

const SERIF_HEADING = "'Playfair Display', Georgia, serif";

export const TEXT_STYLES: Record<string, { label: string; style: CSSProperties }> = {
  "#": {
    label: "Large heading",
    style: { fontFamily: SERIF_HEADING, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1 },
  },
  "##": {
    label: "Heading",
    style: { fontFamily: SERIF_HEADING, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15 },
  },
  "###": {
    label: "Subheading",
    style: { fontFamily: SERIF_HEADING, fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3 },
  },
  "-#": {
    label: "Small",
    style: { fontSize: "0.875rem" },
  },
};

if (typeof window !== "undefined") {
  (window as unknown as { __CMS_TEXT_STYLES__: typeof TEXT_STYLES }).__CMS_TEXT_STYLES__ = TEXT_STYLES;
}

const STYLE_MARKERS = ["###", "##", "#", "-#"];

type RichNode = string | { tag: "strong" | "em" | "u" | "a"; href?: string; children: RichNode[] };

function safeHref(url: string): string | null {
  return /^(https?:|mailto:|tel:|\/|#)/i.test(url) ? url : null;
}

function parseInline(src: string, start: number, closer: string | null): { nodes: RichNode[]; end: number; closed: boolean } {
  const nodes: RichNode[] = [];
  let text = "";
  let i = start;
  const flush = () => {
    if (text) nodes.push(text);
    text = "";
  };
  while (i < src.length) {
    if (closer && src.startsWith(closer, i)) {
      flush();
      return { nodes, end: i + closer.length, closed: true };
    }
    const ch = src[i];
    if (ch === "\\" && i + 1 < src.length) {
      text += src[i + 1];
      i += 2;
      continue;
    }
    const opener = src.startsWith("**", i) ? "**" : src.startsWith("__", i) ? "__" : ch === "*" ? "*" : null;
    if (opener) {
      const inner = parseInline(src, i + opener.length, opener);
      if (inner.closed && inner.nodes.length) {
        flush();
        nodes.push({ tag: opener === "**" ? "strong" : opener === "__" ? "u" : "em", children: inner.nodes });
        i = inner.end;
        continue;
      }
    }
    if (ch === "[") {
      const close = src.indexOf("](", i);
      const end = close === -1 ? -1 : src.indexOf(")", close + 2);
      const href = end === -1 ? null : safeHref(src.slice(close + 2, end));
      if (href) {
        flush();
        nodes.push({ tag: "a", href, children: parseInline(src.slice(i + 1, close), 0, null).nodes });
        i = end + 1;
        continue;
      }
    }
    text += ch;
    i++;
  }
  flush();
  return { nodes, end: i, closed: false };
}

function render(nodes: RichNode[]): ReactNode[] {
  return nodes.map((n, k) => {
    if (typeof n === "string") return n;
    const children = render(n.children);
    if (n.tag === "a") {
      const external = /^https?:/i.test(n.href!);
      return (
        <a key={k} href={n.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    }
    const Tag = n.tag;
    return <Tag key={k}>{children}</Tag>;
  });
}

/** Render a content.json string with the formatting described above. */
export function Rich({ text }: { text: unknown }) {
  let src = typeof text === "string" ? text : text == null ? "" : String(text);
  let style: string | null = null;
  for (const marker of STYLE_MARKERS) {
    if (src.startsWith(marker + " ")) {
      style = marker;
      src = src.slice(marker.length + 1);
      break;
    }
  }
  const nodes = render(parseInline(src, 0, null).nodes);
  if (style && TEXT_STYLES[style]) {
    return (
      <span data-cms-style={style} style={TEXT_STYLES[style].style}>
        {nodes}
      </span>
    );
  }
  return <>{nodes}</>;
}
