# T14 — Independent audit

Read-only pass. Nothing in this repo was changed to produce this report except this file.
Every number below was measured, not estimated: contrast is sampled from actual rendered
pixels via a headless Chromium + in-page canvas (not CSS token lookups), links are resolved
against the real filesystem, and section/eyebrow counts are grepped from the shipped HTML.

**Scope:** all 16 pages — `index.html`, `tood.html`, `tootmine.html`, `toetused.html`,
`kontakt.html`, `projekt-kruiisilaeva-sisustus.html`, `components.html`, `shop/index.html`,
`shop/toode-KKK60UM.html`, and the six `en/` mirrors. Responsive/breakpoint findings are
out of scope (T13 owns those).

**Tools used:** `/impeccable audit`'s bundled detector (`detect.mjs`, full-strength, all four
dependencies present, no DEGRADED state), read of `/impeccable critique`'s scoring
framework, and an independent Playwright script written for this pass (dense-grid pixel
sampling with glyph-pixel rejection and median-by-luminance background estimation,
validated against `DESIGN.md`'s own published contrast figures — see Methodology note at
the end). `/impeccable critique`'s full dual-sub-agent interactive flow was not run: it
requires `AskUserQuestion` at the end to steer a follow-up plan, which does not fit a
read-only background audit with a fixed report target. Its heuristic framework informed the
manual review below instead.

Total: **8 confirmed findings** — 3 P1, 4 P2, 1 P3 — plus 2 detector findings reviewed and
dismissed as false positives for this design system (documented at the end, not counted
above).

---

## P1 — findings that would embarrass this pitch if clicked or inspected

### P1-1. `.line-card` text fails contrast against its own demo photo — `components.html`

Measured by sampling the actual rendered pixels behind the text (not CSS), in **both**
colour schemes (the surface is photo-derived and fixed-tone, so the numbers are identical
light vs dark):

| Element | Text | Ratio measured | Required | 
|---|---|---|---|
| `.entity` (line 169) | "Halver Mööbel OÜ" | **1.95:1** | 4.5:1 |
| `h3` (line 170) | "Eritellimusmööbel" | **2.24:1** | 3:1 (32px/800) |
| body `p` (line 171) | "Kontorite, kaupluste, kodude, laevade ja hotellide sisustus." | **2.87:1** | 4.5:1 |

Location: `components.html:166-173`, `.line-card` over `assets/images/work/foto-2.jpg`.
Confirmed by visual crop, not just the pixel sampler — the white type sits directly on the
light wood/cabinet tones of the photo with the gradient scrim barely darkening it at this
card's 340px kitchen-sink width.

This is the exact risk `DESIGN.md` names and warns against by name: *"The `.line-card`
gradient does not [guarantee contrast]... its legibility is a property of the image, not of
the design"* (DESIGN.md, Opaque Floor Rule), and `components.html`'s own caption text next
to this demo (line 162) says the same thing in different words — that `.line-card` only
discharges its opacity obligation when the scrim's worst case has actually been computed for
the photo behind it. It wasn't, for this photo, at this width.

**Why it isn't only a components.html problem:** the identical markup, class, and photo
(`foto-2.jpg`) are reused for real on `index.html:92-99` and `en/index.html:93-99` — those
pass (0 fails measured) only because the wider two-column grid crops a different, safer
region of the same photo via `object-fit: cover`. The component's safety is therefore
**contingent on container width**, not guaranteed by the design system. Any future page that
drops this component into a narrower slot (a sidebar, a 3-up grid, a mobile stack before
T13's breakpoint math kicks in) reproduces this exact failure. Recommended: compute the
scrim's worst case against `foto-2.jpg` specifically (per the Opaque Floor Rule's own
instruction), or swap the demo photo for one where the bottom third is dark, or deepen
`.line-card::before`'s gradient stop.

### P1-2. Heading hierarchy skips a level — `shop/toode-KKK60UM.html`

`<h1>` at line 77 ("Kõrge kapp") is followed directly by `<h3 class="finish-picker__title">`
at line 129 ("Esikülje viimistlus") with no `<h2>` anywhere between them; the first `<h2>`
("Tehniline spetsifikatsioon.") doesn't appear until line 182. Confirmed by the impeccable
detector (`skipped-heading`) and by direct read of the file. Screen-reader users navigating
by heading level lose the document outline at exactly the point they'd want it — the finish
picker, the page's primary interactive decision. `shop/index.html`, the other new shop
page, does not have this problem (`h1 → h2 → h2 → h2 → h3...`, correctly nested) — this is
isolated to the product page.

### P1-3. Dangling `#konto` anchor — both shop pages, 6 occurrences

`href="#konto"` appears three times each in `shop/index.html` (lines 35, 52, 251) and
`shop/toode-KKK60UM.html` (lines 30, 47, 286) — header account link, mobile drawer, and
footer "E-pood" column, all labelled "Minu konto" (My account). **No element with
`id="konto"` exists in either file.** Every one of these six links is dead: clicking it
scrolls nowhere and changes nothing. Given the trade-portal account system is explicitly
out of scope for this artifact (PRODUCT.md: "shop browse and catalogue screens are out of
scope"), the fix is either to point this at the external `shop.halver.ee` (the pattern
already used for the two other e-pood links on the marketing pages) or to remove the link
until an account surface exists.

---

## P2 — real but lower-impact

### P2-1. `capability` and `work` sections repeat the same grid family back-to-back — `index.html`, `en/index.html`

`DESIGN.md`/`BUILD-PLAN.md` call for no two adjacent sections sharing a layout pattern. On
`index.html` (and identically on `en/index.html`, confirmed structurally identical), the
section order is `trust`(flex strip) → `lines`(2-col card grid) → **`capability`** → **`work`**
→ `contact`(2-col grid). The two adjacent middle sections are both
`grid-template-columns: repeat(4, 1fr)` grids with one cell spanning 2×2
(`styles/10-page-home.css:131-133` capability's `.spec-grid` with `grid-auto-flow: dense`;
`styles/10-page-home.css:195-207` work's `.work-grid` with an explicit
`.work-item:first-child { grid-column: span 2; grid-row: span 2; }`). Structurally this is
the same family measured twice in a row. The full-bleed dark data panel vs. light photo
gallery tonal contrast is a real, deliberate differentiator (`capability` is explicitly
named the system's "signature element" in DESIGN.md) and likely reads fine to a visitor —
but the underlying grid mechanics are a genuine, measurable repeat, not a false alarm.
Every other page template (`tood`, `tootmine`, `toetused`, `kontakt`,
`projekt-kruiisilaeva-sisustus`, both shop pages) was checked section-by-section against its
own CSS grid definitions and has no such repeat.

### P2-2. Kitchen-sink placeholder links resolve to nothing — `components.html`

Four `href="#"` buttons (lines 92, 98, 104, 105) don't go anywhere. Acceptable for a
non-navigational component gallery (self-documented in the file's own comment as "chrome
only, not part of the design system"), but technically dangling per a literal link-integrity
pass. No action needed unless this page is ever shown as if it were a real screen.

### P2-3. English translations push uppercase mono labels past a length the detector flags — `en/kontakt.html`, `en/projekt-kruiisilaeva-sisustus.html`, `projekt-kruiisilaeva-sisustus.html`

The impeccable detector's `all-caps-body` rule fired on 31-33 character uppercase spans.
Root cause, confirmed by diffing the two languages' team-role labels: Estonian
`"Müük · eritellimusmööbel"` (24 chars) becomes English `"Sales · made-to-order furniture"`
(32 chars) in the same fixed 12px/uppercase/0.06em `.role` treatment
(`styles/12-page-contact.css:289`). This is not a code bug — the CSS and the ET copy are both
fine — it's a real content-length edge case that PRODUCT.md itself anticipates ("layout must
survive the length variance between them") but this specific component wasn't stress-tested
against it. Long uppercase runs are measurably harder to read (word-shape recognition is
disabled by case), so this is worth a look before it recurs in Finnish.

### P2-4. `.filter-chip.is-active` dark-mode fill is self-documented as broken, and it's still reproducible

`DESIGN.md` already discloses this ("Known gap: the active filter chip in dark mode fills
with `--white` (`#101112`) on a `#17181a` page, which separates at 1.06:1... Do not copy this
pattern into a new toggle"). Confirmed still present and visually reproducible in
`components.html`'s kitchen-sink demo (`components.html:252`, the "Kõik" chip rendered
`.is-active`). Not a new finding — cited here only because check #6 asked to verify
cross-page consistency, and this component is currently used on **no live page** in the
16-page set (`grep -rl filter-chip` matches only `components.html`), so there is zero
production impact today. It will resurface the moment a real filter UI (e.g. the
out-of-scope shop browse page) reuses this exact chip.

---

## P3 — polish / documentation hygiene

### P3-1. Stale code comment claims a cross-page inconsistency that no longer exists — `kontakt.html:257-259`

The comment above the `.units` contact-grid reads: *"index.html and components.html still
have the two reversed, which is why the mono label crowds the heading there. Integrator's to
align."* Checked directly: `index.html:95-96`, `components.html:169-170`, and
`components.html:267-268` all already use `.entity` paragraph *then* `<h3>` — the exact same
order as `kontakt.html`, and the order `DESIGN.md` specifies. The inconsistency this comment
warns about was fixed at some point after the comment was written, and the comment was never
removed. Low severity (the actual markup is correct everywhere), but a future editor trusting
this comment over the real files would go looking for a bug that isn't there. Delete the
comment or update it to say the alignment is done.

---

## Detector findings reviewed and not confirmed as defects

`/impeccable audit`'s bundled detector ran clean (all dependencies present, not degraded)
and returned 15 raw findings. Two categories, 12 of the 15 findings, were checked against
this specific design system's own documented rules and dismissed:

- **`kicker-above-heading` (10 instances: `components.html`, `index.html`, `kontakt.html`,
  `en/index.html`, `en/kontakt.html`, 2 each).** The detector flags any small tracked label
  sitting above a heading as a generic "AI kicker" anti-pattern. In every instance here the
  element is `.entity` (mono, 0.10em tracking, uppercase legal-entity name), not `.eyebrow`
  — `DESIGN.md`'s own typography ladder names this exact pattern as the "structural label...
  who or what this block belongs to" tier, explicitly distinct from the banned decorative
  kicker. Not a violation of this project's rules; the detector doesn't know the local
  contract.
- **`repeating-stripes-gradient` (1 instance: `shop/toode-KKK60UM.html`, advisory
  severity).** `.finish-swatch--spoon` / `.finish-swatch--taispuit`
  (`styles/22-shop-product.css:157-161`) use a repeating gradient to represent real veneer
  and solid-wood grain on material-finish swatches — functional material representation, not
  decorative filler. The detector already marks this advisory-only (it does not fail the
  scan), and manual review confirms it's purposeful.

The remaining finding, `skipped-heading` on `shop/toode-KKK60UM.html`, is real — see P1-2.

---

## Checks that came back clean (measured, not assumed)

**1. Contrast — 15 of 16 pages, zero failures.** ~2,300 unique text-bearing elements
sampled across 16 pages × 2 colour schemes (32 full page renders), background estimated from
actual screenshot pixels behind each element (dense grid sampling, glyph-colour pixels
explicitly filtered out, median-by-luminance of what remains — see Methodology). Every page
except `components.html` (P1-1 above) returned 0 contrast failures in both light and dark.
Spot-measurements matched `DESIGN.md`'s own published figures almost exactly, which both
validates the design system's stated numbers and this script's methodology: steel-on-paper
measured 5.86:1 (DESIGN.md: 5.86:1), `--accent-text`-on-paper 5.74:1 (DESIGN.md: 5.74:1),
`--fixed-light`-on-`--fixed-dark` 17.01:1 (DESIGN.md: 17.01:1), stat labels 7.94:1
(DESIGN.md: 7.94:1 for the equivalent token). All photo captions, chips, and hero tags
sampled — the exact "text over photographs" case the task asked to verify by pixel, not
CSS — passed at 8.35:1 to 16.85:1.

**2. Eyebrows — every page at or under `ceil(sections/3)`.**

| Page | `<section>` count | Ceiling | `.eyebrow` count | Status |
|---|---|---|---|---|
| index.html / en/index.html | 5 | 2 | 0 | OK |
| tood.html / en/tood.html | 2 | 1 | 0 | OK |
| tootmine.html / en/tootmine.html | 5 | 2 | 1 | OK |
| toetused.html / en/toetused.html | 1 | 1 | 1 | OK (at ceiling) |
| kontakt.html / en/kontakt.html | 3 | 1 | 0 | OK |
| projekt-kruiisilaeva-sisustus.html / en/… | 6 | 2 | 1 | OK |
| components.html | 12 | 4 | 0 | OK |
| shop/index.html | 2 | 1 | 1 | OK (at ceiling) |
| shop/toode-KKK60UM.html | 2 | 1 | 1 | OK (at ceiling) |

All 5 real `.eyebrow` usages sit inside `.page-header`, exactly once per page, matching
`DESIGN.md`'s "at most once per page" rule word for word.

**3. Em-dashes — zero, everywhere.** Grepped all 16 files for U+2014 with HTML comments
stripped first (and separately confirmed zero even *inside* the stripped comments — the
character does not appear in any of the 16 files at all, in any context).

**4. One accent, one radius — confirmed globally.** `--radius: 2px` is declared exactly
once (`styles/00-tokens.css:93`); every `border-radius` in the 11-file `styles/` tree uses
`var(--radius)` except one literal `border-radius: 0` (`styles/15-page-grants.css:38`,
`.grant`), which is the DESIGN.md-sanctioned hairline-grid-cell exception, not a stray value.
Zero hex colors anywhere outside `00-tokens.css` (checked every CSS file and all 16 HTML
files, including SVGs and inline `<style>`/`style=` attributes — there are none). The accent
hue resolves to exactly one hue family (`--orange`/`--orange-dark`/`--orange-darker`) in
each theme; `--veneer`, `--ink-soft`, and `--steel-soft` are declared and confirmed unused
everywhere, matching DESIGN.md's own claim. Zero `box-shadow`/`text-shadow`/`drop-shadow`
and zero `@keyframes`/`animation:` anywhere in the stylesheet tree. Only two `.btn` variants
exist (`btn-primary`, `btn-outline`); `.icon-btn` is a separate, self-documented
"not a third `.btn` variant" bare icon control.

**5. Section-layout family — clean except index.html/en/index.html (P2-1).** Every other
template's section sequence was read against its CSS grid definitions:
`tood`(strip → 2-col card grid → CTA banner), `tootmine`(4-cell plain stat strip → dense
dark bento → 2-col split list → flex chip strip → CTA banner — the facts/cap-panel pair
looked like a candidate repeat since both are nominally `repeat(4,1fr)`, but `.facts-grid`
is a flat 4-equal-cell strip with no spans while `.cap-grid` is `grid-auto-flow: dense` with
mixed stat/photo spans on a full-bleed dark surface — different enough in composition, not
counted), `kontakt`(asymmetric form split → 2-col card grid → auto-fill team grid),
`projekt-kruiisilaeva-sisustus`(3-col metadata → 4-col brief cards → 2-col split →
label/value table → flex strip → CTA banner), both shop pages (asymmetric split → ledger/spec
list). No other back-to-back repeats found.

**6. Cross-page consistency.** All six `en/` pages have byte-for-byte identical top-level
`<header>/<section>/<footer>` class sequences to their ET originals (diffed programmatically)
— no structural drift. All 16 pages, including both shop pages, load the exact same
`styles/00-tokens.css` / `01-base.css` / `02-components.css`, so the accent/radius/shadow/
motion rules in check 4 apply uniformly by construction, not by discipline — there is no
per-page CSS to drift. The two real findings specific to the shop pages (P1-2, P1-3) are
genuine drift introduced in that page specifically, exactly the kind of thing this check was
meant to catch; everything else about the shop pages matches the marketing pages' rules.
Zero inline `style="..."` attributes remain anywhere (`DESIGN.md` recorded 7 as historical
debt in `tood.html`/`kontakt.html`; that debt is now paid off).

**7. Link integrity — 459 `<a href>` checked, 2 problems (both covered above as P1-3/P2-2).**
Every internal relative path was resolved against the real filesystem with **case-sensitive**
matching (macOS's default case-insensitive filesystem would silently hide a casing bug that
breaks on a case-sensitive host; explicitly checked for and found none). All `mailto:`/`tel:`
links are well-formed. The single external domain in use, `https://shop.halver.ee`, is
referenced consistently. Directory-style links (`../en/`) resolve to a real `index.html`.

---

## Methodology note (contrast sampler)

Text foreground colour is read from `getComputedStyle(...).color` (parsed for both
`rgb()`/`rgba()` and the `color(srgb r g b / a)` syntax Chromium emits for `color-mix()`
results — the first version of this script defaulted unparsed colours to black, producing
false failures on every `color-mix()`-based token in the system; this was caught by sanity-
checking against DESIGN.md's published figures before trusting any result, and fixed before
the numbers above were produced). Background is estimated by taking a full-page screenshot,
decoding it back into an in-page `<canvas>`, sampling a dense grid of points inside each
text element's box (roughly one sample per 4px), discarding any sample within Euclidean
distance 26 of the known foreground colour (glyph ink and its antialiased fringe), and taking
the median-by-luminance of whatever remains as the background estimate. An earlier, sparser
version of this sampler (3 points for short text) produced 42 false-positive failures on
plain nav links, caught by cropping and visually inspecting the flagged region before
reporting — none of those made it into this report. The dense/median approach was re-verified
against the same crop and against DESIGN.md's own numbers before being trusted.
