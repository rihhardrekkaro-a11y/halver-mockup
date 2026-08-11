---
name: Halver
description: Cold graphite and steel on cool paper, one trade orange, and shop-floor data set in mono.
colors:
  ink: "#17191c"
  steel: "#565c63"
  paper: "#eeefed"
  paper-raised: "#f6f6f4"
  line: "#d3d5d2"
  line-soft: "#e2e3e0"
  orange: "#e2591f"
  orange-dark: "#b8440f"
  orange-darker: "#9f3e15"
  white: "#fbfbfa"
  fixed-dark: "#17191c"
  fixed-light: "#fbfbfa"
  ink-on-dark: "#f2f1ee"
  steel-on-dark: "#a9aeb3"
  paper-on-dark: "#17181a"
  paper-raised-on-dark: "#1e2022"
  line-on-dark: "#35383b"
  line-soft-on-dark: "#292b2e"
  orange-on-dark: "#ff7a3d"
  orange-dark-on-dark: "#ff9760"
  white-on-dark: "#101112"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(24px, 5.4vw, 68px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, SF Mono, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
  scale:
    label: "12px"
    annotate: "13px"
    interface: "14.5px"
    read: "16px"
    lede-max: "19px"
    card-title: "24px"
    drawer-link: "28px"
    data-lg-min: "30px"
    card-title-max: "32px"
    page-title-min: "34px"
    hero-title-min: "38px"
    data-xl-max: "44px"
    section-title-max: "46px"
    page-title-max: "56px"
    hero-title-max: "68px"
rounded:
  sharp: "2px"
spacing:
  hairline: "2px"
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "20px"
  xl: "24px"
  xxl: "32px"
  xxxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.orange-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "14px 24px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.orange-darker}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "14px 24px"
    typography: "{typography.body}"
  spec-tile:
    backgroundColor: "{colors.fixed-dark}"
    textColor: "{colors.fixed-light}"
    rounded: "0"
    padding: "22px"
    height: "minmax(160px, auto)"
  contact-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "clamp(22px, 3vw, 32px)"
  material-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "10px 16px"
    typography: "{typography.mono}"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.sharp}"
    padding: "9px 16px"
    typography: "{typography.mono}"
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
  photo-caption:
    backgroundColor: "{colors.fixed-dark}"
    textColor: "{colors.fixed-light}"
    rounded: "{rounded.sharp}"
    padding: "6px 10px"
    typography: "{typography.mono}"
---

# Design System: Halver

> **This file is a contract, not a description.** It was derived by reading the shipped
> artifact (`styles.css`, `index.html`, `tood.html`, `kontakt.html`, `nav.js`), not from
> the intentions in `BUILD-PLAN.md`. Where the two disagree, this file records what the
> code does and says so explicitly. Every contrast figure below is computed from the
> shipped hex values, not estimated. Parallel agents: if a rule here does not answer your
> question, ask the integrator. Do not invent the answer.
>
> **Known detector noise.** `/impeccable audit` reports 12 `cramped-padding` findings on
> this project that are **not** defects. The detector resolves neither `clamp()` padding
> nor logical `padding-block` / `padding-inline`, both of which this system uses
> everywhere, and it cannot tell a hairline grid (`padding: 0` by design, each cell
> carrying its own inset) from an unpadded bordered box. Verified against a fixture:
> `padding: 32px` passes; `padding: clamp(22px, 3vw, 32px)` and `padding-block: 32px`
> both false-positive; `padding: 0` correctly fails. Do **not** "fix" these by adding
> padding to a section or a grid. The rule still catches real unpadded bordered boxes, so
> read each finding before dismissing it: if a container uses a literal `padding` value
> and is still flagged, that one is real.

## Overview

**Creative North Star: "The Cutting List"**

A cutting list is the document a panel saw runs from: a plain sheet of dimensions, part codes and quantities, with no persuasion on it at all. It is the most trustworthy object in a furniture factory precisely because it makes no argument. This system takes that document as its model. The page is cool, flat, unornamented paper; the structural work is done by hairlines and tonal steps rather than shadow or decoration; and the one place the design raises its voice is the data itself, set in monospace, because in this business a number is a claim you can be held to.

The palette is cold on purpose. Graphite and steel on a slightly green-grey paper (`#eeefed`), so the veneers and stone in the photography stay the only warm objects on screen. A single trade orange, inherited from the incumbent brand, appears rarely enough that it still reads as a signal. Density is deliberately higher than a marketing site: this audience reads spec sheets for a living and is not served by air where information should be.

Composition is asymmetric but not restless. Two-column layouts run at `1.05fr / 0.95fr` and `1.15fr / 0.85fr` rather than an even split, so the page looks composed rather than centred, and every grid is separated by a 2px rule that reads as a machined seam. Nothing bounces, nothing parallaxes, nothing fades in twice.

**Key Characteristics:**
- Flat by construction: zero `box-shadow` declarations in the entire stylesheet.
- A 2px corner radius on everything that has a corner. One value, no exceptions.
- Three typefaces with three genuinely different structures, each with one job.
- Monospace reserved for data that came off the shop floor.
- One accent hue, expressed as three distinct values because contrast demands it.
- A motion budget of three durations and two curves, and no keyframe animation at all.

## Colors

Cold neutrals carrying the entire structure, with one warm accent used as a signal rather than a decoration.

The system swaps token *values* under `prefers-color-scheme: dark` while keeping token *names* stable. The frontmatter carries the dark values under `-on-dark` suffixes for portability, but in the stylesheet they are the same custom properties redefined inside the dark block. **Write `var(--fg)`, never a hex.**

### Primary

- **Trade Orange** (`#e2591f`): the inherited brand accent, darkened from the incumbent `#FF914C` until it earned a job. In the shipped light theme it has exactly **one** live use: the focus ring. It measures **3.2:1** against paper, which passes the 3:1 requirement for a non-text indicator and fails the 4.5:1 requirement for small text. That single number is why this hue exists in three values instead of one.
- **Orange Dark** (`#b8440f`): the primary button fill. Carries `--white` text at **5.24:1**, rising to **6.39:1** on hover.
- **Orange Darker** (`#9f3e15`): the text-safe accent (`--accent-text`). Small accent text, entity labels, link hover. **5.74:1** on paper, **6.11:1** on raised paper.

In dark mode the pressure reverses and the hue lightens to `#ff7a3d`, which passes as text (**6.86:1**), as a focus ring (**6.86:1**) and as a button fill under `#17181a` text (**6.86:1**). Dark mode therefore needs only one orange, and hover *brightens* to `#ff9760` (**8.33:1**) rather than darkening.

### Neutral

- **Graphite** (`#17191c` light / `#f2f1ee` dark): all primary text. **15.27:1** on paper, **15.73:1** in dark. Also the light theme's active-filter fill.
- **Steel** (`#565c63` light / `#a9aeb3` dark): secondary text, ledes, labels, inactive navigation. **5.86:1** on paper, **7.95:1** in dark. This is the floor for muted text; nothing may be quieter.
- **Cool Paper** (`#eeefed` light / `#17181a` dark): the page. Slightly green-grey, never white.
- **Raised Paper** (`#f6f6f4` light / `#1e2022` dark): the one tonal step up, used for the contact band and empty media wells. The step is small on purpose; it separates without becoming a card.
- **Line** (`#d3d5d2` light / `#35383b` dark) and **Line Soft** (`#e2e3e0` light / `#292b2e` dark): the rule system. Both are deliberately below the 3:1 non-text threshold (**1.28:1** and **1.12:1** in light; **1.51:1** and **1.25:1** in dark). They are decorative separators, and the system depends on that: they must never become the only means of identifying a control.

### Tertiary

- **Fixed Dark** (`#17191c`) and **Fixed Light** (`#fbfbfa`): declared outside the dark-mode block and therefore identical in both themes. They exist because `--ink` and `--white` invert meaning, which would make a photo scrim or the always-dark capability panel illegible in one theme. The capability panel runs at **17.01:1** in both themes because of this.
- **Veneer** (`#9c7a4e` light / `#c39a68` dark): declared and **never used**. Reserved as a narrow accent for future work. It is not a background.

### Named Rules

**The Three-Orange Rule.** One hue, three values, assigned by contrast maths and never by eye. `--accent` (`#e2591f`) is the focus ring only. `--btn-primary-bg` (`#b8440f`) is the button fill only. `--accent-text` (`#9f3e15`) is every piece of small accent text. Setting `color: var(--accent)` on text below 24px ships a 3.2:1 failure. In dark mode all three collapse to `#ff7a3d`; the token names still apply.

**The Fixed-Tone Rule.** Any surface whose legibility must not depend on the page theme uses `--fixed-dark` and `--fixed-light`: the capability panel, every photo scrim, every image caption chip. Never redefine these inside the dark-mode block, and never substitute `--ink` or `--white` on such a surface.

**The Opaque Floor Rule.** A scrim guarantees contrast only when it composites to an opaque floor over any possible photograph. The chip scrims do: `--fixed-dark` at 78% holds **8.37:1** and at 70% holds **6.28:1** even against a pure-white image. The `.line-card` gradient does not: at the same pixel it measures **19.37:1** over a black photograph and **1.94:1** over a white one, so its legibility is a property of the image, not of the design. New overlay text goes on an opaque-floor chip, or on a scrim whose worst case has been computed. Never on a bare gradient.

**The Muted Floor Rule.** `--fg-muted` is the quietest text permitted. There is no third text tone. `--ink-soft` and `--steel-soft` are declared but unused; treat them as absent.

## Typography

**Display Font:** Big Shoulders Display 800 (fallback Arial Narrow)
**Body Font:** Archivo variable 400–700 (fallback system sans)
**Label/Mono Font:** IBM Plex Mono 500/600

**Character:** A condensed industrial signage face, a neutral workhorse grotesque, and a monospace. The three are chosen to be structurally unmistakable for one another at a glance, so the role of any piece of text is legible before it is read. All five faces are self-hosted `woff2` with `font-display: swap`; there is no runtime font request.

An Archivo italic variable face is loaded and currently used nowhere (`address` explicitly resets to `font-style: normal`). It is available if a genuine editorial need appears. It is not a decoration, and there is no italic in the display or mono roles.

### Hierarchy

- **Display / page title** (Big Shoulders 800, `clamp(38px, 5.4vw, 68px)` on the home hero, `clamp(34px, 5vw, 56px)` on secondary pages, line-height 0.98, letter-spacing −0.01em): one per page.
- **Display / section head** (Big Shoulders 800, `clamp(30px, 3.6vw, 46px)`): `h2` only.
- **Display / card head** (Big Shoulders 800, `clamp(24px, 2.6vw, 32px)` over photography, `24px` in contact cards): `h3` only.
- **Display / drawer link** (Big Shoulders **700**, `28px`): the mobile menu. The only place the display face is not weight 800.
- **Body / lede** (Archivo 400, `clamp(16px, 1.6vw, 19px)`, max 46ch): the single paragraph under a page title.
- **Body / read** (Archivo 400, `16px`/1.5, section prose capped at 52ch, section heads at 62ch): all readable prose, including card body copy over photography and person names at weight 600.
- **Body / interface** (`14.5px`): anything the reader scans or clicks rather than reads. Buttons and contact links at weight 600, navigation at 600, footer links and the trust and materials labels at 400.
- **Body / annotate** (`13px`): data attached to something else. Stat labels, contact meta, footer legal, and the mono chips.
- **Mono / data** (Plex Mono 600, `clamp(30px, 3vw, 44px)` and `clamp(24px, 2.2vw, 30px)`, line-height 1): the capability figures. The largest mono on the site and the loudest thing in the system.
- **Mono / label** (Plex Mono 500–600, `12px`, uppercase): entity names, roles, categories, column headings. One size. Tracking, not size, separates the kinds; see the ladder below.
- **Mono / chip** (Plex Mono 500, `13px`, no tracking, sentence case): filter and material chips. The only mono at the annotate step, because a chip is a control rather than a label.
- **Mono / caption** (Plex Mono 500, `12px`, letter-spacing 0.02em–0.03em, sentence case): photo captions naming a machine or a location.

The frontmatter carries three named **roles** (the three faces) plus a `scale` block enumerating all twenty size steps the artifact actually ships, including every `clamp()` endpoint. The roles are the contract; the scale is the closed list of permitted values.

**The small-text band is closed at three steps.** It previously carried seven inside 4.5px (`13`, `13.5`, `14`, `14.5`, `15`, `15.5`, `16`), which is ramp slop rather than hierarchy: nobody perceives a 0.5px difference, so those steps carried no meaning and only created decisions. Consolidated 2026-08-11 by role, not by rounding:

| Step | Tier | What belongs here |
| --- | --- | --- |
| `16px` | **read** | Prose the visitor actually reads: section and page-header paragraphs, card body copy, person names. |
| `14.5px` | **interface** | Things scanned or clicked: buttons, navigation, footer and contact links, trust and materials labels. |
| `13px` | **annotate** | Data attached to something else: stat labels, contact meta, footer legal, mono chips. |

Pick the tier by what the text *is for*, never by what looks closest. There is no fourth step in this band, and a component that seems to need one is mislabelled: decide whether it is read, operated, or annotated.

**The mono label band is closed at one step.** It previously split `11.5px` and `12px` on no perceptible difference; collapsed to `12px` on 2026-08-11. Because size no longer separates the label kinds, **tracking is now load-bearing** and is the ladder to pick from:

| Tracking | Case | What it marks | Where |
| --- | --- | --- | --- |
| `0.14em` | upper | The page eyebrow: the loudest label in the system | `.eyebrow`, at most once per page |
| `0.10em` | upper | Structural labels: who or what this block belongs to | Legal entity names, footer column headings |
| `0.06em` | upper | Micro-labels: a category or role attached to an object | Image categories, gallery captions, team roles |
| `0.03em` | sentence | Captions naming a real machine or place | Capability panel photo captions |
| `0.02em` | sentence | The hero photo tag | `.hero-visual .tag` |

Uppercase mono needs tracking to stay legible; sentence case does not, which is why the two bottom rows are near zero. Pick the row by what the label *marks*, and do not invent a sixth value.

**One non-distinction remains:** `0.02em` and `0.03em` are not perceptibly different, and both mark a sentence-case photo caption. Collapsing them to `0.03em` is a two-declaration change, left undone because it was outside the requested scope. Do not add a third value between them.

### Named Rules

**The Mono-Means-Measured Rule.** IBM Plex Mono is reserved for information that came off the shop floor: capacities, dimensions, counts, part and category codes, machine names, legal entity names, and captions identifying a real place or machine. It is the signature of this system and it is worth nothing if it decorates. Prose never goes in mono. A number that cannot be traced to `PRODUCT.md`'s evidence list does not get mono, and does not get onto the page.

**The Condensed-Is-Headline-Only Rule.** Big Shoulders appears in `h1`, `h2`, `h3` and the mobile drawer links. Nowhere else. Not in buttons, not in ledes, not in statistics: the capability figures are mono, and that contrast between condensed headline and monospace number is the point.

**The One-Lede Rule.** A page title gets exactly one lede paragraph, capped at 46ch. Section heads get one supporting line at 52ch. Anything more belongs in body copy under it.

## Layout

**Container:** `--max: 1360px`, centred, with `--gutter: clamp(20px, 4vw, 64px)` of inline padding. Everything on every page sits inside a single `.wrap`.

**There is no 12-column grid.** Earlier planning called for one; the artifact does not have one and does not need one. Each section declares explicit tracks. Do not introduce a column system.

**Track inventory as shipped:**

| Region | Desktop tracks | Collapse |
| --- | --- | --- |
| Hero | `1.05fr 0.95fr` | `1fr` at ≤860px, visual moves above copy |
| Business lines | `1.15fr 0.85fr` | `1fr` at ≤760px |
| Capability bento | `repeat(4, 1fr)`, rows `minmax(160px, auto)`, `dense` flow; stat spans 2 columns, photo spans 2×2 | `repeat(2, 1fr)` at ≤960px; photo drops to 2×1 |
| Work preview | `repeat(4, 1fr)`, first item spans 2×2 | `repeat(2, 1fr)` at ≤760px |
| Gallery | `repeat(3, 1fr)` | `repeat(2, 1fr)` at ≤760px |
| Contact | `repeat(2, 1fr)` | `1fr` at ≤760px |
| Team | `auto-fill, minmax(220px, 1fr)` | intrinsic |

**Breakpoints:** three, all `max-width`. **960px** (capability bento only), **860px** (navigation collapses to the drawer, hero stacks), **760px** (every other multi-column grid collapses). These are the only three permitted. A new section picks the one that matches its content, and does not add a fourth.

**Vertical rhythm:** sections run `padding-block: clamp(56px, 9vw, 112px)`. Section heads clear `clamp(32px, 5vw, 56px)` before their content. The hero is deliberately tighter than a section (`clamp(28px, 5vw, 72px)` top, `clamp(40px, 6vw, 88px)` bottom) so the page opens without a void above the headline. Anchored sections carry `scroll-margin-top: var(--nav-h)`.

**Spacing scale:** the artifact has no named scale; the frontmatter derives one from what is actually reused, and it is now normative. Static steps are `2, 6, 10, 14, 20, 24, 32, 48`, with `4, 8, 12, 16, 18, 22, 26, 36` present as secondary values. Every box-spacing value in the stylesheet is even except one: `.filter-pill` uses `padding: 9px 16px`. That is an artifact, not a scale step; do not propagate it. (`1px` borders and the `3px` focus offset are not spacing steps.)

**Responsive pairs are a closed set of fifteen.** Reuse the one whose job matches yours. A genuinely new rhythm is an integrator decision, not a per-task judgement call:

```
container
  --gutter               clamp(20px, 4vw, 64px)

section rhythm
  section padding-block  clamp(56px, 9vw, 112px)
  section-head margin    clamp(32px, 5vw, 56px)
  filters margin-bottom  clamp(24px, 4vw, 40px)

page openers
  hero padding-top       clamp(28px, 5vw, 72px)
  hero padding-bottom    clamp(40px, 6vw, 88px)
  hero column gap        clamp(28px, 5vw, 64px)
  page-header pad-top    clamp(32px, 5vw, 64px)
  page-header pad-bottom clamp(28px, 4vw, 48px)

card padding
  over photography       clamp(24px, 3vw, 36px)
  on paper               clamp(22px, 3vw, 32px)

gaps between blocks
  large grid gap         clamp(24px, 4vw, 48px)
  trust strip gap        clamp(24px, 5vw, 56px)
  inline strip gap       clamp(20px, 4vw, 40px)
  footer column gap      clamp(32px, 6vw, 80px)
```

Note the two `3vw` card-padding pairs differ only in their bounds: photography gets more padding because text sits on it. Pick by surface, not by which you saw last.

**Density:** higher than a marketing site by intent. Ledes cap at 46ch, prose at 52ch, section heads at 62ch, overlay copy at 42ch, and stat labels at 24ch. These caps are how the layout stays composed at 1360px; do not remove them in favour of full-width text.

### Named Rules

**The Hairline-Is-A-Gap Rule.** Rules between grid cells are produced by `gap: 2px` over a `background: var(--border-soft)` on the grid, with each cell painting its own opaque background. They are not borders on the cells. Adding a border to a cell inside such a grid doubles the line. The team grid uses `gap: 1px` instead of 2px; that is an inconsistency in the artifact, and new grids use 2px.

**The One-Wrap Rule.** Every section's content sits in exactly one `.wrap`. Full-bleed effects come from the section painting its own background while `.wrap` holds the content, never from breaking out of the container.

## Elevation & Depth

**This system has no shadows.** Zero `box-shadow` declarations across 736 lines, and that is a decision, not an omission. Depth is built from four sources instead:

1. **Tonal layering** in three steps: `--bg` → `--bg-raised` → `--fixed-dark`. The always-dark capability panel is the deepest surface on the site and the only inversion.
2. **Hairlines**: 1px `--border-soft` between sections, 1px `--border` around cards, 2px gutter rules inside grids.
3. **A single material effect**: the sticky navigation, at `backdrop-filter: blur(10px) saturate(140%)` over `color-mix(in srgb, var(--bg) 88%, transparent)`. This is the only blur in the system.
4. **Photographic scrims**: gradients and opaque chips over imagery, governed by The Opaque Floor Rule.

### Named Rules

**The No-Shadow Rule.** Do not add `box-shadow`, `filter: drop-shadow`, glows or `text-shadow` anywhere, in any state, including hover and focus. A surface that needs to separate gets a tonal step or a hairline. If neither works, the layout is wrong.

## Shapes

Near-sharp and machined. The form language is rectangular, with a 2px corner that reads as a milled edge rather than a soft card.

**`--radius: 2px` applies to every element with a corner**: buttons, cards, chips, media wells, map frames, image caption chips, the hero tag. There is **one radius value in this system** and no second one exists.

The single structural qualifier is that **cells inside a hairline grid have no corner at all** (radius `0`, not 2px): `.line-card`, `.spec-tile`, `.work-item`, `.gallery figure`, `.team-card`. They butt against a 2px grid rule, and a corner radius would break the seam. This is consistent across all five in the shipped code and is not an oversight: a cell in a hairline grid has no corner of its own. This is not an exception to the lock, it is what the lock means where two cells meet.

**Integrator decision, 2026-08-11: the pills are dead.** The shipped stylesheet gave `.material-pill` and `.filter-pill` `border-radius: 999px`, the one place the artifact disagreed with `BUILD-PLAN.md`'s "no pills, no mixed radii" line. That conflict is resolved in favour of the lock: both classes are now `var(--radius)`, and `styles.css` has been changed to match this file. The class names are now misnomers; renaming them to `.material-chip` and `.filter-chip` is queued for the integrator during the `02-components.css` split. **The frontmatter already uses the chip names.** Do not read the old class names as licence for a rounded form.

Borders are 1px and only ever `--border` or `--border-soft`. Images are clipped by `overflow: hidden` on the container, never by their own radius. Nothing in the system is circular.

### Named Rules

**The 2px Lock.** Every corner in this system is `var(--radius)`. Not `4px`, not `8px`, not `999px`, not `0` unless the element sits inside a hairline grid. Do not introduce a `--radius-lg`, `--radius-sm`, `--radius-pill` or any second radius token; the system holds exactly one, and a design that needs a second one is not this design. Mixed radii are the single fastest way to make this system look generic, and a rounded chip in a machined interface reads as a component borrowed from somewhere else.

## Components

Components are quiet, rectangular and state-driven. Nothing is decorated at rest; everything responds on hover, press and focus.

### Motion Budget

The whole system runs at **MOTION_INTENSITY 3**, which for a B2B procurement audience means: state feedback, one image response, one scroll reveal, nothing else. The complete inventory is closed:

| Duration | Curve | Applies to |
| --- | --- | --- |
| **160ms** | `--ease-out` | `.btn` (transform, background, border-color, color), nav link colour, filter pill colour/border/background |
| **600ms** | `--ease-out` | `[data-reveal]` opacity 0→1 and `translateY(18px)`→0 |
| **700ms** | `--ease-in-out` | image `scale()` on hover: `.line-card img` 1.04, `.work-item img` and `.gallery figure img` 1.05 |

`--ease-out` is `cubic-bezier(0.16, 1, 0.3, 1)`. `--ease-in-out` is `cubic-bezier(0.77, 0, 0.175, 1)`. Press feedback is `transform: scale(0.97)` on `.btn:active`, riding the 160ms transform transition.

There are **zero** `@keyframes` and zero `animation` properties in the system. No parallax, no scroll-linked transforms, no counters, no marquees, no staggered sequences, no entrance animation on load.

**The Three-Duration Rule.** 160ms for state, 600ms for reveal, 700ms for images. A fourth duration or a third curve requires the integrator, not a judgement call.

**The Reveal-Never-Hides Rule.** Content is visible in CSS by default. `nav.js` adds `.reveal-pending` immediately before observing an element, so a JavaScript failure skips the animation instead of hiding the content. Any new reveal follows this inversion exactly. Never ship `opacity: 0` as an element's authored default.

**Known gap:** only the reveal is wrapped in `@media (prefers-reduced-motion: no-preference)`. The 160ms state transitions and the 700ms image scales are not gated. New motion must be gated; fixing the existing two cases is an integrator change to the shared component layer.

### Buttons

- **Shape:** 2px (`var(--radius)`), 1px transparent border so outline and filled variants share a box.
- **Primary:** `--btn-primary-bg` fill with `--accent-contrast` text, `14px 24px`, Archivo 600 at the interface step (14.5px). Hover darkens to `--btn-primary-bg-hover` in light and *brightens* in dark.
- **Outline:** transparent with a `--border` edge and `--fg` text. Hover moves the border to `--fg`. No fill change.
- **Press:** `scale(0.97)`, both variants.
- **Focus:** the global ring, never a variant-specific treatment.
- There is no third button variant. Do not invent a ghost or text button; a quiet action is an outline button or a link.

### Chips

- **Material chip** (`.material-pill`, to be renamed `.material-chip`): 2px, 1px `--border`, mono 13px, `--fg` text, `10px 16px`. Static; not interactive. Lives in a horizontally scrolling track with snap and hidden scrollbars.
- **Filter chip** (`.filter-pill`, to be renamed `.filter-chip`): 2px, mono 13px, `--fg-muted` on transparent at rest, `9px 16px`. Hover moves text and border to `--fg`. Active inverts to a `--ink` fill with `--white` text.
- **Known gap:** the active filter chip in dark mode fills with `--white` (`#101112`) on a `#17181a` page, which separates at **1.06:1**. The active state is carried almost entirely by the text brightening; the chip surface is effectively invisible. Light mode separates at 15.27:1. Do not copy this pattern into a new toggle.
- **Caption chip** (`.work-item .cat`, `.gallery figcaption`, `.hero-visual .tag`): 2px, `--fixed-dark` at 70–78% over the image, `--fixed-light` mono text. This is the opaque-floor pattern; reuse it rather than reinventing an overlay.

### Cards / Containers

- **Contact card:** 1px `--border`, 2px corner, `--bg` fill on the raised section band, `clamp(22px, 3vw, 32px)` padding. Mono entity label, display `h3`, `address` reset to normal style with 1.7 line-height, then a stacked link list at the interface step (14.5px) in weight 600.
- **Photo card** (`.line-card`): 460px minimum (360px below 760px), content bottom-aligned, image absolutely positioned and cover-fitted, gradient scrim, `clamp(24px, 3vw, 36px)` body padding, all text in `--fixed-light`. Governed by The Opaque Floor Rule.
- **Team card:** flat `--bg` cell inside a hairline grid, 20px padding, mono role in `--accent-text`, name at the read step (16px) in weight 600, contact meta at the annotate step (13px) in `--fg-muted`.
- **Media well:** `overflow: hidden` plus a fixed `aspect-ratio` that holds the layout before the image loads: 4/5 gallery, 3/4 work item, 4/5 hero visual (4/3 below 860px), 16/9 map frame. Gallery and work wells sit on `--bg-raised`; the hero visual sits on `--fixed-dark`, so an unloaded image reads as a dark plate rather than a light hole in the page.

### Navigation

Sticky, 72px (`--nav-h`), translucent `--bg` at 88% with the system's only backdrop blur, closed by a 1px `--border-soft` rule. Links are Archivo 600 at 14.5px in `--fg-muted`, moving to `--fg` on hover and for `aria-current="page"`. The wordmark is 26px tall and inverted with a CSS filter in dark mode.

Below 860px the link list and the outline button are hidden and a hamburger toggle appears, opening a full-height fixed drawer inset below the navigation. Drawer links are display face at 28px/700, stacked with 1px `--border-soft` separators, and the primary button goes full width at the bottom. The toggle carries `aria-expanded` and `aria-controls`, and the drawer closes on any link activation.

### Focus (all interactive elements)

`outline: 2px solid var(--accent)` at `outline-offset: 3px`, applied globally through `:focus-visible`. This is the one place the display orange is used in the light theme, and it works because a 2px indicator needs 3:1, which it makes at **3.2:1**. Never remove it, never replace it per component, and never rely on a `--border` colour change to signal focus: hairlines are 1.28:1 and cannot carry that meaning.

### Signature Component: the capability panel

The one place the system spends its boldness. A full-bleed `--fixed-dark` section, identical in both themes at **17.01:1**, holding a four-column bento of `minmax(160px, auto)` rows with `dense` flow. Statistic tiles span two columns; photograph tiles span two columns and two rows. Tiles are square-cornered, butted against a 2px rule drawn by the grid gap over a 12% `--fixed-light` background, with a matching 1px border around the whole panel.

Each statistic tile is a mono figure at `clamp(30px, 3vw, 44px)` (or `clamp(24px, 2.2vw, 30px)` for the secondary tier) in `--fixed-light`, pushed apart by `justify-content: space-between` from a 24ch label at the annotate step (13px) in 66% `--fixed-light` (**7.94:1**). Photograph tiles are padding-free, cover-fitted, lightly graded (`grayscale(0.15) contrast(1.05)`), and carry a bottom-anchored mono caption at 82% `--fixed-light` (**11.68:1**) naming the actual machine.

This panel is the argument the site makes. Its figures are real production data and its captions name real machines. Both must stay true.

## Do's and Don'ts

### Do:

- **Do** write `var(--fg)`, `var(--bg)`, `var(--border)` and the other semantic tokens. Never a raw hex, and never a raw palette token like `var(--ink)` where a semantic one exists.
- **Do** use `--accent-text` for any accent-coloured text below 24px. `--accent` on small text is a measured 3.2:1 failure.
- **Do** use `--fixed-dark` and `--fixed-light` on any surface that must read identically in both themes.
- **Do** put every corner at `var(--radius)` (2px).
- **Do** build grid rules with `gap: 2px` over a `--border-soft` grid background, and let each cell paint its own opaque background.
- **Do** reserve IBM Plex Mono for real shop-floor data, and source every figure from `PRODUCT.md`'s evidence list.
- **Do** keep motion inside the three durations and two curves, and gate any new motion behind `prefers-reduced-motion`.
- **Do** author reveals as visible-by-default, adding the hidden state from JavaScript immediately before observing.
- **Do** verify every text/background pair at 4.5:1, or 3:1 at 24px and above, in **both** colour schemes before reporting a task complete.
- **Do** screenshot at 1440, 768 and 375 in both schemes and fix what the screenshots show before reporting.
- **Do** keep the copy-width caps: 46ch lede, 52ch prose, 62ch section head, 42ch overlay, 24ch stat label.

### Don't:

**Banned outright. These are not preferences; a task that ships one of them is not done.**

- **Don't** introduce a cream, brass or terracotta palette. This system is cold graphite and steel on cool paper. Warmth on this site comes from photographed veneer and stone, never from a surface, a border or a token.
- **Don't** set a serif anywhere, and specifically never as a display face. The display role is Big Shoulders Display 800 and nothing else. No Cormorant, no Playfair, no editorial serif pairing.
- **Don't** mix radii. 2px everywhere, and `0` only for a cell inside a hairline grid. No `4px`, no `8px`, no `16px` cards, no `999px` anything, no second radius token. There are no pills in this system.
- **Don't** put a decorative eyebrow above every section. `.eyebrow` is styled in the stylesheet and used **zero times** in the shipped pages; it is permitted at most once per page, inside `.page-header`, to name the section of the site the reader is in. A mono kicker over every heading is the exact templated reflex this system exists to avoid.
- **Don't** add scroll cues. No "scroll" label, no bouncing chevron, no animated mouse glyph, no progress rail. The hero is deliberately short enough that the next section is already visible.
- **Don't** use em-dashes in visible copy, including `<title>`. All three shipped pages currently violate this in their title tags (`index.html:6`, `tood.html:6`, `kontakt.html:6`); fix yours, and do not copy the pattern.

**Also prohibited:**

- **Don't** add `box-shadow`, `drop-shadow`, `text-shadow` or a glow, in any state.
- **Don't** author a new `clamp()`. Use one of the fifteen responsive pairs inventoried in Layout, or a static step.
- **Don't** add a fourth breakpoint. 960, 860, 760.
- **Don't** put text on a bare gradient over a photograph. Use an opaque-floor chip, or compute the worst case first.
- **Don't** use `--ink-soft`, `--steel-soft` or `--veneer`. They are declared and unused; treat them as absent unless the integrator assigns them a job.
- **Don't** write `@keyframes` or an `animation` property. The system has none.
- **Don't** invent a third button variant, a second focus treatment, or a fifth chip.
- **Don't** use inline `style="..."` attributes. Seven exist across `tood.html` and `kontakt.html`; they are debt, not a pattern, and parallel agents copying them will fragment the system.
- **Don't** invent client names, testimonials, pricing, lead times or certifications. `PRODUCT.md` lists what is real and what is absent.
- **Don't** edit `styles/00-tokens.css` or the shared component layer from a parallel task. Request the change in your task report and let the integrator apply it.
