# ULP Website Design Brainstorm

## Context
Rebuild of ubuntuleadershipprogram.nl — a Dutch foundation running a business school, investment fund, leadership trips, and short courses in Tanzania's Usambara Mountains. Must preserve all existing URL paths for SEO. Visual reference: the 2026 PowerPoint presentation deck.

---

<response>
<probability>0.07</probability>
<text>

## Idea A — "Warm Savanna Editorial"

**Design Movement:** Contemporary African editorial — think Kinfolk meets National Geographic Africa edition.

**Core Principles:**
1. Warm, earthy palette drawn directly from the Usambara landscape (terracotta, sand, forest green, charcoal).
2. Large-format photography as the primary storytelling device — images bleed to edges and are never boxed.
3. Typographic hierarchy that feels printed: oversized display numerals, tight-tracked uppercase labels, generous leading in body text.
4. Asymmetric split layouts: text always offset against photography, never centered over it.

**Color Philosophy:** The palette is taken from the PowerPoint — warm sand (#F5EFE0) as the base, burnt orange (#D4521A) as the primary accent (matching the slide label chips), near-black (#1A1A14) for high-contrast sections, and a secondary forest green (#2D5016) for the fourth pillar. The emotional intent is warmth, groundedness, and optimism.

**Layout Paradigm:** Alternating full-bleed dark and light sections. Navigation is a slim top bar with the tree logo left-aligned. Page sections use a 60/40 split — large image panel on one side, text block on the other — rather than a centered column. The homepage hero is a full-bleed sunset photograph from the Usambara with the headline overlaid in large white type.

**Signature Elements:**
1. Rectangular label chips in burnt orange with wide letter-spacing (e.g., "THE PROGRAM", "OUR MISSION") — directly from the PowerPoint.
2. Large oversized pillar numbers (01, 02, 03, 04) in a light weight, used as decorative anchors.
3. A thin horizontal rule in orange used as a section divider.

**Interaction Philosophy:** Hover states reveal a subtle warm overlay on images. Navigation dropdowns slide down with a 200ms ease-out. CTA buttons use a fill-from-left animation on hover.

**Animation:** Entrance animations are scroll-triggered fade-up (opacity 0→1, translateY 20px→0, 400ms ease-out). Stagger 60ms between sibling elements. No looping animations.

**Typography System:**
- Display / headings: Playfair Display (serif) for H1 and section titles — adds editorial gravitas.
- Labels / navigation: Barlow Condensed, uppercase, tracked — matches the PowerPoint label chips.
- Body: Source Serif 4 at 17px/1.7 — warm and readable.

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## Idea B — "Brutalist Field Notes"

**Design Movement:** Brutalist editorial — raw, honest, documentary. Inspired by field journals and development-sector annual reports.

**Core Principles:**
1. Stark contrast between raw black and warm off-white — no gradients, no decorative flourishes.
2. Text is the hero: large, unapologetic headlines that take up space.
3. Photography is documentary in style — candid, unpolished, human.
4. Grid is deliberately broken — elements intentionally overlap or extend beyond their containers.

**Color Philosophy:** Near-black (#111108) and warm cream (#F7F2E8) as the base pair. A single accent — the burnt orange from the PowerPoint (#D4521A) — used sparingly for maximum impact. No other colors.

**Layout Paradigm:** Full-width newspaper-style layout. Headlines span the full viewport. Images are placed as raw rectangles with no border-radius. Navigation is a fixed black bar with white text.

**Signature Elements:**
1. Thick black borders used as structural dividers.
2. Oversized pull-quotes that break the text column.
3. Monospaced captions beneath every image.

**Interaction Philosophy:** Minimal interaction. Hover states are instant (no transition). Buttons are flat rectangles with a 2px black border.

**Animation:** None — the design philosophy is static and honest.

**Typography System:**
- All text: IBM Plex Mono (monospaced) for a raw, documentary feel.
- Headlines: 80–120px, tight line-height.

</text>
</response>

<response>
<probability>0.08</probability>
<text>

## Idea C — "Organic Modernism"

**Design Movement:** Organic modernism — the warmth of natural materials expressed through clean, contemporary web design.

**Core Principles:**
1. Soft, textured backgrounds that evoke natural materials (linen, clay, bark) without being literal.
2. Rounded but not bubbly — moderate border-radius (8–12px) on cards and images.
3. A clear typographic rhythm: one serif display font, one humanist sans for body.
4. Generous whitespace with a clear 8-point grid.

**Color Philosophy:** Warm sand base (#EDE8DF), soft terracotta accent (#C8603A), deep forest for secondary (#1E3A2F), and warm charcoal for text (#2C2416). The intent is approachable warmth — a foundation that feels trustworthy and human.

**Layout Paradigm:** Centered content column (max 1200px) with full-bleed colored sections. The hero uses a large background image with a semi-transparent warm overlay and centered headline. Cards use a consistent 3-column grid on desktop.

**Signature Elements:**
1. Subtle grain texture overlay on background sections.
2. Leaf/tree motif used as a decorative separator.
3. Pill-shaped tags in terracotta.

**Interaction Philosophy:** Smooth, gentle transitions (250ms). Cards lift slightly on hover (translateY -4px, shadow increase).

**Animation:** Fade-in on scroll for all major sections. No complex motion.

**Typography System:**
- Display: Cormorant Garamond — elegant, warm serif.
- Body: Nunito Sans — friendly, readable humanist sans.

</text>
</response>

---

## Selected Approach: **Idea A — Warm Savanna Editorial**

This approach most faithfully translates the PowerPoint presentation's visual language to the web. The burnt orange label chips, oversized pillar numbers, split layouts, and alternating dark/light sections are all directly present in the slides and will create a cohesive brand experience. The editorial serif/condensed-sans pairing gives the site gravitas without feeling corporate.
