# Halver mockup - build plan

Repo: https://github.com/rihhardrekkaro-a11y/halver-mockup
Local: `/Users/rihhard/Claude/Projects/halver.ee`

This file is the single source of truth for every agent working on this mockup.
Read it, and `DESIGN.md`, before touching any file.

---

## 1. Design read

> **B2B manufacturer marketing site plus a trade ordering portal, for procurement
> buyers (interior contractors, shipyards, hotel developers, kitchen retailers),
> with a Nordic-industrial language, leaning toward a hand-owned token system on
> static HTML/CSS with self-hosted type.**

Dials (from `taste-skill`, redesign-overhaul mode against a `2 / 2 / 4` original):

| Dial | Value | Reason |
| --- | --- | --- |
| `DESIGN_VARIANCE` | 7 | Considered asymmetry. Nordic is not symmetric-boring, it is composed. |
| `MOTION_INTENSITY` | 3 | B2B procurement audience. Hover, press, one scroll reveal. Nothing else. |
| `VISUAL_DENSITY` | 5 | Technical data is the content. Denser than a marketing site, mono numerals. |

## 2. Direction (already established, do not re-litigate)

**Palette** is cold graphite and steel on cool off-white paper, with one locked
accent: a trade orange derived from the existing brand `#FF914C`, darkened until
it passes contrast. Veneer is a photographic presence and a narrow accent token,
never a page background. Cream, brass, and terracotta are banned.

**Type** is three roles with three genuinely different structures:

| Role | Face | Job |
| --- | --- | --- |
| Display | Big Shoulders Display 800 | Condensed industrial signage. Headlines only. |
| Body / UI | Archivo (variable) | Everything readable. |
| Data | IBM Plex Mono 500/600 | Dimensions, capacities, codes, captions. The signature. |

**Signature element:** technical data set in mono. Halver's own shop already
annotates kitchen elevations with millimetre callouts (`1980`, `103`, `2203`).
On the live site those numbers are the *only* content and read as a bug. Here
they become the brand voice: capacities, dimensions, cabinet codes and photo
captions all set in Plex Mono, keyed to real Halver data. Spend the boldness
here and keep everything else quiet.

**Shape lock:** `--radius: 2px` everywhere. Near-sharp, machined. No pills, no
16px cards, no mixed radii.

**Accent lock:** one orange, whole site, both themes. `--accent-text` exists
because the display orange fails 4.5:1 as small text on paper. Use it.

## 3. What already exists

Two commits. `index.html`, `tood.html`, `kontakt.html`, `styles.css` (736 lines),
`nav.js`. Self-hosted Archivo, Big Shoulders, IBM Plex Mono. Real assets under
`assets/images/`: Halver logo, six production machine photos, five completed-work
photos, and four genuine trust badges (Chamber of Commerce, Creditinfo,
TOP Ettevõte 2021, EAS/MKM). Light and dark tokens with documented contrast
reasoning. A real footer, which the live site does not have at all.

## 4. Known defects in the current mockup

Measured, not guessed:

1. **`index.html`, "Kaks ettevõtet, üks tootmine" tiles.** White heading over the
   light kitchen photo measures **3.26:1**, the body line under it **3.08:1**.
   Both fail AA. The dark second tile measures 8.01:1 and 10.13:1. Legibility is
   accidental, decided by which photo landed in the slot. This is the exact
   defect flagged as finding 35 in the live-site audit, reproduced.
2. **`index.html`, work grid.** The bottom-right cell is an empty grey
   placeholder (`rgb(226,227,224)`). A grid has exactly as many cells as it has
   content.
3. **`index.html`, capability panel.** Stat cell heights are uneven between the
   left and right columns of the bento.
4. **`index.html`, materials.** A single row of pills with large empty bands
   above and below. The section does not carry its own weight.
5. **Scroll-reveal.** Content is invisible until scrolled into view, so any
   capture or fast scroll shows blank bands. Same failure the live site has.

## 5. Enabling decision for parallel work

`styles.css` is one 736-line file. Parallel agents editing it will collide.

**Task T0.2 splits it into partials before any parallel wave starts:**

```
styles/
  00-tokens.css        colour, type, spacing, easing. Owned by T0.2 only.
  01-base.css          reset, typography defaults, focus states.
  02-components.css    buttons, tiles, cards, spec rows, tags, captions, forms.
  10-page-home.css
  11-page-work.css
  12-page-contact.css
  13-page-project.css
  14-page-capabilities.css
  20-shop-shell.css
  21-shop-browse.css
  22-shop-product.css
```

**Ownership rule: an agent edits only its own page partial plus its own HTML.**
Anything a task needs from `02-components.css` gets requested in that task's
report and applied by the integrator, never edited in place by a parallel agent.
`00-tokens.css` is frozen after T0.2.

Also built in T0.2: `components.html`, a kitchen-sink page rendering every
primitive in both themes, so parallel agents can see what exists instead of
inventing a fifth button style.

## 6. Element inventory

### Foundations
Colour tokens (light + dark), type scale, spacing scale, 12-column grid and
container, border/rule system, focus ring, easing curves, motion budget,
reduced-motion fallback.

### Components
Header with working language switcher. Mobile drawer. Footer. Button system
(primary / secondary / quiet). Hero module. Capability figure. Service tile with
a real scrim. Project card with title-block metadata. Project detail header.
Contact-person card. Enquiry form with label/helper/error states. Trust strip.
Material swatch. Breadcrumb. Spec table. Product card. Order line and order
drawer. Filter rail. Image with mono caption. Section head.

### Screens
Home, Selected work, Project detail, Capabilities, Contact, EU grant page, Shop
landing, Shop browse, Shop product, Shop catalogues. Each at 1440 / 768 / 375.

## 7. Definition of done, every task

- Reads `BUILD-PLAN.md` and `DESIGN.md` first.
- Touches only its owned files.
- Screenshots at 1440, 768 and 375 with Playwright, in both colour schemes, and
  fixes what the screenshots show before reporting.
- No em-dash anywhere in visible copy.
- Every text/background pair meets 4.5:1, or 3:1 for text 24px and above.
- Real Halver content. No lorem, no invented numbers, no invented clients.
- Reports back: files changed, screenshots taken, any `02-components.css` change
  it needs from the integrator.
