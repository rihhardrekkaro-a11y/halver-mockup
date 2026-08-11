# Task prompts

Companion to `BUILD-PLAN.md`. Dependency graph is in `BUILD-PLAN.md` section 5b.

---

## Status as of handoff

**Done and pushed to `origin/main`:**

| Task | What landed | Commit |
| --- | --- | --- |
| T0 | `PRODUCT.md`, `DESIGN.md` design contract | `1beba39` |
| T2 | README, `package.json`, `scripts/dev-server.mjs`, `scripts/shots.mjs`, Pages workflow | `5b5e513` |
| T1 | `styles/` partial split, `02-components.css`, `components.html`, scroll-reveal fix | `ffc21c9` |

T1 was verified independently: pixel-diffed against a `git archive` of the pre-refactor
tree, **0 pixels differing**, page height identical at 5589px. Stylesheets are linked as
separate `<link>` tags in dependency order, not `@import`. The old `styles.css` is gone.

| Prep | Playwright installed, `shots.mjs` page filter, `cramped-padding` suppressed | `01fee61` |

**In flight: Wave 1, seven tasks in parallel** (T3 to T9). Then Wave 2 (T11 alone), Wave 3
(T12, T13, T14), Wave 4 (T15).

## Resolved decisions

1. **Finnish is out of scope.** ET + EN only. This is a pitch mockup, and one mirrored
   locale already proves the system works; a third triples the drift surface for no extra
   pitch value. FI is named as the obvious next step in `vordlus.html`, not built.
2. **Shop is T9 shell plus T11 product page. T10 browse is cut.** The shell carries the
   strongest pitch fact, that the shop does not read as the same company, plus the 2.23:1
   breadcrumb fix. T11's spec table is where the mono-dimension signature pays off. Wave 2
   is now T11 alone. Cut with it: the 2.43:1 category-label finding and the SKU filter
   rail, so T15 must not cite those as before/after anchors unless it re-sources them.
3. **`cramped-padding` is suppressed project-wide**, not file-scoped. 24 of 27 findings
   were verified false, with 28px to 112px of real padding measured live; the detector
   cannot resolve padding across the partials split in T1. File-scoping to
   `components.html` as originally drafted would have left Wave 1's seven new pages
   tripping the same rule. The detector is **not** running degraded: `htmlparser2`,
   `css-select`, `css-tree` and `domutils` are all present in `~/.claude/node_modules`.
   T14 measures computed padding in a live browser independently of the detector.

## Wave 1 asset constraints, verified before launch

- `assets/images/work/` holds **five** photographs, not twelve. T4's card count follows
  the photo count; padding the grid with duplicates or placeholders is forbidden.
- `assets/images/production/` holds six files but **five distinct machines**: two are
  Holzma, and there is **no Drillteq D-500 photograph** despite the machine being named
  in T6's brief. T6 must not label another machine as the Drillteq.

---

## Shared preamble

Prepend this to every task prompt below.

> You are working in `/Users/rihhard/Claude/Projects/halver.ee` (GitHub:
> `rihhardrekkaro-a11y/halver-mockup`), a Nordic-industrial redesign mockup for Halver
> Mööbel OÜ / Halver Arendus OÜ, an Estonian furniture manufacturer since 1992. It is a
> pitch mockup built to win a redesign engagement, not a deployable site.
>
> Read `BUILD-PLAN.md`, `DESIGN.md` and `PRODUCT.md` before writing anything. `DESIGN.md`
> names four rules: Three-Orange, Fixed-Tone, Opaque Floor, Muted Floor. Follow the
> `frontend-design`, `emil-design-eng` and `taste-skill:taste-skill` skills.
>
> Look at `components.html` before you build anything. Every shared primitive already
> exists there with its class name beside it. Do not invent a fifth button style.
>
> **Files:** edit only the files your task owns. Never edit `styles/00-tokens.css`, it is
> frozen. Never edit `styles/02-components.css`; if you need a component change, put it in
> your report and the integrator applies it.
>
> **Do not run any git command.** Not `add`, not `commit`, not `push`. Six other agents
> are working in this repo at the same time and git's index is a single shared lock. Leave
> your changes in the working tree and report what you changed; the integrator commits.
>
> **Content:** real Halver content only. No lorem, no invented clients, no invented
> numbers. Mark anything you had to invent in an HTML comment. Zero em-dashes in visible
> copy. Radius stays `var(--radius)` (2px).
>
> **Screenshots:** `npm install` and Chromium are now installed, so screenshots work. Run
> `node scripts/shots.mjs <your-page>` with only your own pages as arguments; it starts a
> dev server on 8899 if one is not up, reuses it if it is, and writes
> `screenshots/<slug>-<width>-<scheme>.png` at 1440, 768 and 375 in both colour schemes.
> Never run a bare `npm run shots` while other agents are working; it walks the whole repo.
> The script already scrolls the full page height in steps and returns to top before
> capturing. Blank bands below the fold in an unscrolled capture are the scroll-reveal
> working correctly, not a defect; do not "fix" them. Fix what the screenshots show before
> reporting.
>
> **impeccable:** `cramped-padding` is suppressed project-wide. Do not chase it, do not
> re-enable it.
>
> **Contrast:** every text and background pair meets 4.5:1, or 3:1 for text 24px and above.
> Verify by sampling rendered pixels, including text over photographs, not by eye.
>
> **Report:** files changed, screenshots taken, which `DESIGN.md` named rules you applied,
> any `02-components.css` change you need, and anything a later agent must know.

---

# Wave 1, seven in parallel

## T3 - Home repair
Owns `index.html`, `styles/10-page-home.css`.

Fix the measured defects in `BUILD-PLAN.md` section 4.

1. The "Kaks ettevõtet, üks tootmine" tiles. White text over the light kitchen photo
   measures **3.26:1** and its body line **3.08:1**; the dark tile beside it measures
   8.01:1 and 10.13:1. Legibility is currently a property of the photograph, not the
   design. `DESIGN.md` already solved this: apply the **Opaque Floor Rule**. Move overlay
   text onto an opaque-floor chip, or compute the worst case of a new scrim against a pure
   white image. Do not re-derive the rule.
2. The work grid has an empty grey placeholder cell bottom right. A grid has exactly as
   many cells as it has content. Reshape it.
3. The capability bento has uneven stat-cell heights between its columns.
4. The materials row is a thin band of chips between two large empty gaps. Give the
   section real weight or fold it into the capability panel.

Do not redesign the hero or the trust strip. Both work.

## T4 - Selected work
Owns `tood.html`, `styles/11-page-work.css`.

Rebuild into a real portfolio. The live site's version is 12 unlabelled 150px thumbnails
with two words of body copy, the worst page in the audit. Each project card carries
title-block metadata in mono: sector, location, year, scope, materials. Photos are in
`assets/images/work/`. Cards link to `projekt-<slug>.html` (T5 builds that page; agree to
the filename convention and do not change it).

Use the sectors Halver actually names: kruiisilaevade sisustus, hotellide sisustamine,
köögid, kontorid, kauplused. No square crops of interiors. Clean up the four pre-existing
inline `style="..."` attributes in this file while you are here.

## T5 - Project detail
Owns `projekt-*.html`, `styles/13-page-project.css`.

Build one exemplar case study, `projekt-kruiisilaeva-sisustus.html`. This page type does
not exist on the live site and has no precedent in this repo, so you are composing it.
Suggested spine: a mono title block (sector, year, location, scope, materials, lead time),
a large lead image, what the problem was and what Halver actually manufactured, a
specification block, a next-project link.

This is the page that proves Halver can do the work. It should be the most convincing
screen in the mockup. Keep to `MOTION_INTENSITY 3`.

## T6 - Capabilities
Owns `tootmine.html`, `styles/14-page-capabilities.css`.

Merge what the live site scatters across "Ettevõttest", "Võimekus" and an unlabelled
machine carousel. Real figures: 45 000 m² of board sawn per month, 300 000 lm edge-banded,
10 000+ shaped parts, 6 million+ holes drilled, 80+ specialists, 8000 m² across Kose and
Haljala. The Estonian source says "u." (approximately) for the first two. Do not write
"over"; the live English site made exactly that error.

Machines in `assets/images/production/` are Holzma panel saws, Homag Weeke BHX500,
Drillteq D-500, Homaq, Skipper 130, Omal 2. Name them. On the live site they are
unlabelled and their identity survives only in the filename. Materials: melamiin,
laminaat, spoon, täispuit, tehiskivi, värv, lakk, õli. Every figure in mono.

## T7 - Contact and enquiry
Owns `kontakt.html`, `styles/12-page-contact.css`.

The live site has **zero forms and zero buttons across all four pages**, so the enquiry
form is the highest-value element in this mockup. `.field` already exists in
`02-components.css` with a comment block explaining its sizing and colour rationale; read
it before extending. Checkbox and radio styling was not built.

Labels above inputs, never placeholder-as-label, helper text present in markup, error text
below, visible focus rings, all passing AA against the section background. Fields suited to
a trade enquiry: project type, sector, volume, timeline, drawings upload, contact.

Then fix the two-entity presentation. Halver Mööbel (Kose) and Halver Arendus (Haljala)
must be visually parallel. The live site left-aligns one on white and centres the other on
grey with four different card heights. One card template, one alignment. Format every
phone number identically. Clean up the three pre-existing inline `style="..."` attributes.

## T8 - Grant page
Owns `toetused.html`, `styles/15-page-grants.css`.

On the live site this occupies a primary nav slot with the longest label in the menu while
the company has no services or quote page. Here it lives in the footer only.

Content: Ressursitõhususe investeeringud, 255 775 €, Ühtekuuluvuspoliitika fond, plus the
Tööstuse digitaliseerimise toetus. Keep body measure at 45 to 75 characters; the live
version runs 110. Fix the source typo: the original reads `Projekt " Halver Mööbel OÜ...`
with a closing curly quote and a stray space. Funding logos need real alt text.

## T9 - Shop shell
Owns `shop/index.html` and shell partials, `styles/20-shop-shell.css`.

Design the trade portal shell. The brief is brand continuity: today shop.halver.ee uses a
different typeface (Inter vs Roboto), a different logo lockup, a different language
switcher with different codes and order, and no footer. It does not read as the same
company. This shell must be unmistakably the same system as the marketing site while being
denser and more utilitarian.

Build: header with search and account, a breadcrumb that is **not** a 74px full-bleed
orange band (the live one is white on orange at **2.23:1**), an order-drawer pattern
replacing the floating pill that currently overlaps product images at every scroll
position, and the footer. Mobile chrome must not consume 21% of the viewport as it does
now. Deliver `shop/index.html` as a shell demo plus the partial.

---

# Wave 2, T11 alone, after T9

> T10 shop browse was cut. See resolved decision 2. Do not build `shop/tooted.html` or
> `shop/kataloogid.html`.

## T11 - Shop product
Owns `shop/toode-*.html`, `styles/22-shop-product.css`.

Build a product detail page for one cabinet, e.g. `KK60UM H=1922`. This is where the
mono-dimension signature pays off: the spec table is the hero. Include the elevation
drawing with its millimetre callouts, a spec block (dimensions, depth, carcass material,
finish options, hardware), finish swatches, quantity, add to order.

Avoid `border-t` plus `border-b` on every row; group specs into two or three clusters with
sparse rules. Product images are white carcasses and need a background treatment so their
edges do not vanish, which is what happens on the live site.

---

# Wave 3, three in parallel

## T12 - English locale
Owns `en/`. No CSS. **ET + EN only, no Finnish.** See resolved decision 1.

Mirror the marketing pages. Fix the drift found in the audit, do not copy it. The live
English says "over 45 000 sq meters" where Estonian says "u." (approximately). It drops
"furniture components" from Halver Arendus's services. It deletes the 1992 founding date
from the About body. It reads "main field of activities are" and "capable to drill". It
translates "Ost" (purchasing) as "Buyer", which reads as the customer. It drops the
terminal period on the Chamber of Commerce line while Estonian and Finnish keep it.

Pick one unit convention and hold it across all languages. Keep language-switcher URLs
real (`/en/`), not JS-only with empty hrefs as the live shop does.

## T13 - Responsive sweep
Owns responsive blocks in page partials.

Every page at 1440, 1024, 768 and 375, both colour schemes. The live site fails all of the
following, so check each explicitly: no two-column layout survives into 375px (the live
contact page forces 178px columns and breaks email addresses mid-address);
`document.documentElement.scrollWidth === window.innerWidth` at 375 on every page (the live
site overflows by 2px on a long email link); no tap target under 44px; no fixed chrome
above roughly 12% of viewport height; the language switcher stays inside its header at
every width.

Report a table of page by breakpoint by pass/fail with fixes applied.

## T14 - Audit
Read-only except its own report.

Run `/impeccable audit` and `/impeccable critique`, then verify independently with
Playwright: compute contrast for every text and background pair including text over
photographs by sampling rendered pixels; count eyebrows against the ceil(sections/3)
ceiling; check for em-dashes in visible copy; confirm one accent and one radius across all
pages and both themes; confirm no section-layout family repeats.

**Skip responsive and breakpoint findings entirely.** T13 owns those and runs concurrently.

Write findings to `AUDIT.md` ranked by severity with the measured number beside each. Fix
nothing. The value of this pass is being independent of whoever built the pages. If the
detector reports DEGRADED, run `npm install htmlparser2 css-select css-tree domutils` in
`~/.claude/`.

Note: `cramped-padding` has a known high false-positive rate on this repo since the CSS
split. Verify each instance by measuring computed padding in a live browser before
reporting it.

---

# Wave 4, serial

## T15 - Presentation and deploy

Build `vordlus.html`, a side-by-side before and after page for the client meeting, using
the live-site screenshots in `/Users/rihhard/Claude/.playwright-mcp/halver/` against the new
mockup. Anchor each pairing to a measured fact, not an adjective:

- primary nav at 2.43:1 against the new ratio. **Verify this anchor before using it.**
  2.43:1 is recorded nowhere in `BUILD-PLAN.md` or `DESIGN.md`; it appears only here and
  in the cut T10 brief, where it described the shop's category labels (`#A6A6A6` on
  white). If those were the same measurement, this anchor died with T10, because there is
  no rebuilt browse page to compare against. Re-measure the live marketing nav from the
  screenshots in `/Users/rihhard/Claude/.playwright-mcp/halver/` and either restate the
  real figure or drop the pairing. Do not print a ratio you have not sampled.
- zero forms and zero buttons across four pages against the enquiry form
- portfolio page at 47x47px thumbnails and 50% map on mobile against the new work grid
- no footer on either property against the new footer

Then apply everything still open in `AUDIT.md`, run `npm run shots` for a final pass, and
deploy.

**Hosting is unresolved.** GitHub Pages requires Pro for a private repo. Options are
Cloudflare Pages or Netlify (free, connects to private repos), Netlify Drop, making the
repo public (not recommended before the pitch), or GitHub Pro. Confirm with the user before
doing anything here.
