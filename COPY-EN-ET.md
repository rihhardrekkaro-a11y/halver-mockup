# Halver site copy — Estonian (final) / English (reference translation)

Companion to `PRODUCT.md`, `DESIGN.md`, `BUILD-PLAN.md` and `PROMPTS.md`.

**What this is:** the Estonian copy in `index.html`, `tood.html` and
`kontakt.html`, after a copy-editing pass (see *Estonian changes* below), plus
an English reference translation of the same copy.

**Status update:** this deck was originally written while T12 ("English
locale") was still open, as a translation reference for whoever built it. T12
has since shipped — `en/index.html`, `en/tood.html`, `en/kontakt.html`,
`en/tootmine.html` and `en/toetused.html` all exist, with a working ET/EN
language switcher in the nav. That changes what this file is for:

- **`index.html` / `en/index.html`: reconciled.** `en/index.html` had been
  built from the Estonian copy as it stood *before* the two edits below, so it
  had inherited the same vague opener and the same duplicated sector list.
  Both are now fixed in `en/index.html` to match. The tables below reflect the
  reconciled, live copy on both pages.
- **`tood.html` / `en/tood.html`, `kontakt.html` / `en/kontakt.html`:
  re-reviewed against their current, expanded shape.** Both grew far beyond
  copy drift while this deck existed — `tood.html` went from a 12-photo
  gallery to a full portfolio with a sector rail, per-sector rows and spec
  blocks; `kontakt.html` gained a full enquiry form and grew similarly. The
  full copy on both pages was re-read start to finish (not just diffed
  against the old snapshot below, which is now out of date and not repeated
  here). Findings:
  - `kontakt.html` / `en/kontakt.html` needed **no copy changes** — specific,
    consistent, no em dashes, no vague adjectives, the ET/EN pair already
    matched (including the "Ost" → "Purchasing" fix).
  - `tood.html`'s Offices sector row used two em dashes, violating the
    site-wide zero-em-dash rule; `en/tood.html`'s mirror had the same two plus
    a third in the Hotels row that wasn't even in the Estonian source. All
    three fixed (colon/period instead of the dash pairs; meaning unchanged).
  - Cross-page find, fixed in `index.html`/`en/index.html`: the two capability
    stats (45,000 m² sawn, 300,000 running metres edged) were stated as exact
    figures there, while the same two figures carry "u."/"approx." on
    `tood.html`, `tootmine.html` and both their English mirrors. `index.html`
    was the outlier; it now carries the qualifier too.

  `tootmine.html` and `toetused.html` weren't part of this pass and aren't
  covered below.
- Established English terminology from the shipped `en/` pages —
  **"made-to-order furniture,"** not "custom furniture" — has been adopted
  below for consistency, superseding this deck's earlier word choice.

**Scope:** visible marketing copy only — headings, body copy, CTAs, nav labels,
image alt text, team role titles. No numbers, facts, contact details or company
names were changed or invented; every figure below is the same figure already on
the page, traceable to the evidence list in `PRODUCT.md`.

---

## Estonian changes made in this pass

Two edits, both in `index.html`, both copy-only (no HTML structure, CSS or facts
touched):

1. **Capability section subhead** — cut the vague opener "Kaasaegne tehnoloogia
   ja" ("Modern technology and"). `PRODUCT.md`'s own voice rule is "numbers must
   be sourceable... adjectives do not [do that work]" — and the section already
   names the machines (Weeke CNC, Homag) two tiles later, so the adjective was
   doing no work the facts weren't already doing better.
   - Before: *Kaasaegne tehnoloogia ja üle 80 oma ala spetsialisti, enam kui 8000 m² tootmispinnal Kosel ja Haljalas.*
   - After: *Üle 80 oma ala spetsialisti ja enam kui 8000 m² tootmispinda Kosel ja Haljalas.*

2. **"Two companies" line-card body (Halver Mööbel)** — this sentence repeated
   the hero lede's five-sector list almost verbatim, eight lines down the same
   page. Reworded to state the actual intake promise (drawings *and*
   dimensions, matching `PRODUCT.md`'s Operating Context) instead of restating
   the sector list, and compressed the sector range instead of re-listing it.
   - Before: *Kontorite, kaupluste, kodude, laevade ja hotellide sisustus vastavalt kliendi joonistele ja soovidele.*
   - After: *Eritellimusmööbel kliendi joonistele ja mõõtudele, kontoritest laevade ja hotellideni.*

Everything else on all three pages was already disciplined, specific copy that
matched the brief — I did not rewrite copy that wasn't broken. Notably strong
as-is: the hero H1 (specific date, no adjectives), the `tood.html` CTA card
("Räägime, mida on vaja ehitada" / "Saada oma joonised... ja saad pakkumise"),
and the `kontakt.html` header, which both state the ask and the benefit in one
sentence. These are left untouched below except for translation.

---

## Translation rules applied

Documented so nobody re-introduces the exact drift `PROMPTS.md` T12 already
found on the live English site:

| Rule | Why |
| --- | --- |
| Never write "over" or "more than" on a figure the Estonian states as a plain number (45 000 m², 300 000 jm) | Live English site inflates these; Estonian doesn't hedge them either way, so English shouldn't add "over" |
| Keep "80+" and "8 000+ m²" as "80+" / "8,000+ m²" | Estonian already uses "+" here — that's a real qualifier, not an invented one |
| "Halver Arendus" services always include "furniture components," never dropped | Live English drops it |
| Founding year **1992** appears everywhere the Estonian has it | Live English deletes it from the About body |
| "Ost" → **"Purchasing"**, never "Buyer" | "Buyer" reads as the customer, not the role |
| Trust-mark line keeps its terminal period in English too | Live English drops it |
| Metric units throughout, no imperial conversion | One unit convention across all languages, per T12 |
| Zero em dashes | Site-wide rule in `PROMPTS.md`, applies to every language |

---

## Global — every page

### Nav
| ET | EN |
| --- | --- |
| Ettevõttest | Company |
| Tootmine | Production |
| Tööd | Work |
| Kontakt | Contact |
| E-pood | Shop |
| Ava e-pood | Open shop |
| Ava menüü *(aria-label)* | Open menu |
| Halver, avaleht *(aria-label)* | Halver, home |

### Footer
| ET | EN |
| --- | --- |
| Eritellimusmööbel ja mööblikomponendid. Tootmises Kosel ja Haljalas alates 1992. aastast. | Custom furniture and furniture components. In production in Kose and Haljala since 1992. |
| Sisukord | Contents |
| Ostjatele | For buyers |
| Küsi pakkumist | Request a quote |
| Halver Mööbel OÜ · Halver Arendus OÜ | Halver Mööbel OÜ · Halver Arendus OÜ |
| Eesti Kaubandus- ja Tööstuskoja liige | Member of the Estonian Chamber of Commerce and Industry. |

---

## Home — `index.html`

### Meta
| ET | EN |
| --- | --- |
| Title: Halver · eritellimusmööbel ja mööblikomponendid aastast 1992 | Halver · made-to-order furniture and furniture components since 1992 |
| Description: Halver toodab eritellimusmööblit kontoritele, kauplustele, kodudele, laevadele ja hotellidele ning pehmemööbli karkasse, köögimööblit ja komponente. Tootmises Kosel ja Haljalas alates 1992. aastast. | Halver manufactures made-to-order furniture for offices, shops, homes, ships and hotels, plus upholstery frames, kitchen furniture and components. In production in Kose and Haljala since 1992. |

### Hero
| ET | EN |
| --- | --- |
| H1: Eritellimusmööbel tootmises aastast 1992. | Made-to-order furniture, in production since 1992. |
| Lede: Kontorite, kaupluste, kodude, laevade ja hotellide sisustus, valmistatud oma tootmises Harjumaal ja Lääne-Virumaal. | Fit-out for offices, shops, homes, ships and hotels, made in our own production in Harjumaa and Lääne-Virumaa. |
| Küsi pakkumist | Request a quote |
| Ava e-pood | Open shop |
| Alt: Holzma paneelisaag lõikab plaatmaterjali Halveri Kose tootmises | Holzma panel saw cutting board material at Halver's Kose production site |
| Tag: Holzma paneelisaag, Kose tootmine | Holzma panel saw, Kose production |

### Trust strip
| ET | EN |
| --- | --- |
| Eesti Kaubandus- ja Tööstuskoja liige | Member of the Estonian Chamber of Commerce and Industry. |
| Alt: Halver Mööbel, asutatud 1992 | Halver Mööbel, founded 1992 |
| Alt: Creditinfo usaldusväärsuse märgis | Creditinfo trustworthiness mark |
| Alt: TOP ettevõte 2021 märgis | TOP Ettevõte 2021 award mark |
| Alt: EAS ja Majandus- ja Kommunikatsiooniministeeriumi ressursitõhususe investeeringu toetus | EAS and Ministry of Economic Affairs and Communications resource-efficiency investment grant mark |

### Two companies, one production
| ET | EN |
| --- | --- |
| H2: Kaks ettevõtet, üks tootmine. | Two companies, one production. |
| Lede: Halver Mööbel valmistab eritellimusmööblit. Halver Arendus toodab pehmemööbli karkasse, köögimööblit ja mööblikomponente. | Halver Mööbel makes made-to-order furniture. Halver Arendus produces upholstery frames, kitchen furniture and furniture components. |
| Entity: Halver Mööbel OÜ | Halver Mööbel OÜ |
| Card title: Eritellimusmööbel | Made-to-Order Furniture |
| Card body: Eritellimusmööbel kliendi joonistele ja mõõtudele, kontoritest laevade ja hotellideni. | Made-to-order furniture built to the client's drawings and dimensions, from offices to ships and hotels. |
| Entity: Halver Arendus OÜ | Halver Arendus OÜ |
| Card title: Mööblikomponendid | Furniture Components |
| Card body: Pehmemööbli karkassid, köögimööbel ja mööblikomponendid tellimuse järgi. | Upholstery frames, kitchen furniture and furniture components, made to order. |

### Capability
| ET | EN |
| --- | --- |
| H2: Tootmisvõimekus kuus. | Production capability, per month. |
| Lede: Üle 80 oma ala spetsialisti ja enam kui 8000 m² tootmispinda Kosel ja Haljalas. | 80+ trade specialists and more than 8,000 m² of production floor in Kose and Haljala. |
| Cap: Weeke CNC töötluskeskus | Weeke CNC machining centre |
| Stat: u. 45 000 m² / plaatmaterjali saetakse kuus | approx. 45,000 m² / of panel material sawn per month |
| Stat: u. 300 000 jm / servatakse kuus | approx. 300,000 lin. m / edged per month |
| Stat: 10 000+ / erikujulist detaili servatakse kuus | 10,000+ / specially shaped parts edged per month |
| Stat: 6 000 000+ / ava puuritakse kuus | 6,000,000+ / holes drilled per month |
| Cap: Homag servamisliin | Homag edge-banding line |
| Stat: 80+ / oma ala spetsialisti meeskonnas | 80+ / specialists on the team |
| Stat: 8 000+ m² / tootmispinda Kosel ja Haljalas | 8,000+ m² / of production floor in Kose and Haljala |

### Materials
| ET | EN |
| --- | --- |
| Materjalid | Materials |
| Melamiin | Melamine |
| Laminaat | Laminate |
| Spoon | Veneer |
| Täispuit | Solid wood |
| Tehiskivi | Engineered stone |
| Värv | Paint |
| Lakk | Lacquer |
| Õli | Oil |

### Work
| ET | EN |
| --- | --- |
| H2: Valminud tööd. | Completed work. |
| Lede: Väljavõte hiljutistest kodude sisustuslahendustest ja pilk Halveri tootmisse. | A selection of recent home fit-outs and a look inside Halver's production. |
| Cat: Kodu | Home |
| Cat: Köök | Kitchen |
| Cat: Tootmine | Production |
| Vaata kõiki töid | See all work |

### Contact preview
| ET | EN |
| --- | --- |
| H2: Kaks tootmisüksust. | Two production units. |
| Lede: Külasta meid kohapeal või küsi pakkumist e-posti teel. | Visit us in person or request a quote by email. |
| Kose tootmine | Kose production |
| Haljala tootmine | Haljala production |

---

## Work — `tood.html`

| ET | EN |
| --- | --- |
| Title: Tööd · Halver | Work · Halver |
| Description: Väljavõte Halveri valmistatud sisustuslahendustest ja tootmisest Kosel ning Haljalas. | A selection of interiors built by Halver, and production in Kose and Haljala. |
| H1: Valminud tööd. | Completed work. |
| Lede: Väljavõte Halveri valmistatud sisustuslahendustest ja tootmisest Kosel ning Haljalas. | A selection of interiors built by Halver, and production in Kose and Haljala. |
| Filter: Kõik | All |
| Filter: Kodu | Home |
| Filter: Tootmine | Production |
| Filter group aria-label: Filtreeri kategooria järgi | Filter by category |
| Figcaption: Kodu | Home |
| Figcaption: Tootmine | Production |
| H2: Räägime, mida on vaja ehitada. | Let's talk about what needs to be built. |
| Body: Saada oma joonised või kirjeldus ja saad pakkumise Halveri tootmiselt. | Send your drawings or a description and get a quote from Halver's production. |
| Küsi pakkumist | Request a quote |

---

## Contact — `kontakt.html`

### Header
| ET | EN |
| --- | --- |
| Title: Kontakt · Halver | Contact · Halver |
| Description: Halver Mööbel OÜ ja Halver Arendus OÜ kontaktid, tootmisüksuste aadressid ja meeskond. | Contacts for Halver Mööbel OÜ and Halver Arendus OÜ, production site addresses, and the team. |
| H1: Räägime su projektist. | Let's talk about your project. |
| Lede: Saada joonised, mõõdud või kirjeldus ning saad pakkumise Halveri tootmiselt. Kaks tootmisüksust: Kose ja Haljala. | Send drawings, dimensions or a description and get a quote from Halver's production. Two production sites: Kose and Haljala. |

### Production units
| ET | EN |
| --- | --- |
| H2: Tootmisüksused. | Production sites. |
| Kose tootmine | Kose production |
| Haljala tootmine | Haljala production |

*(Entity names, addresses, phone numbers and emails are legal/contact facts — not translated.)*

### Team
| ET | EN |
| --- | --- |
| H2: Meeskond. | Team. |
| Lede: Võta otse ühendust õige valdkonna inimesega. | Contact the right person for your area directly. |
| Tegevjuht | Managing Director |
| Müük · eritellimusmööbel | Sales · Custom furniture |
| Müük · komponendid | Sales · Components |
| Müük · Soome | Sales · Finland |
| Ost | Purchasing |
| Tootmisjuht | Production Manager |
| Tehnoloog | Technologist |
| Raamatupidaja | Accountant |
| Arved | Invoices |
| Raamatupidamine | Accounting |

*(Names, phone numbers and emails are contact facts — not translated.)*
