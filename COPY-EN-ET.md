# Halver site copy — Estonian (final) / English (reference translation)

Companion to `PRODUCT.md`, `DESIGN.md`, `BUILD-PLAN.md` and `PROMPTS.md`.

**What this is:** the Estonian copy currently shipped in `index.html`, `tood.html`
and `kontakt.html`, after a copy-editing pass (see *Estonian changes* below), plus
an English reference translation of the same copy. It is a copy deck, not a
build — it does not create `en/` pages, a language switcher, or URL routing.
That is `PROMPTS.md` task **T12**, which is still open. This deck exists so T12
can be executed against a translation that already avoids the drift T12 itself
documents in the live site's current English (see *Translation rules applied*).

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
| Title: Halver · eritellimusmööbel ja mööblikomponendid aastast 1992 | Halver · custom furniture and furniture components since 1992 |
| Description: Halver toodab eritellimusmööblit kontoritele, kauplustele, kodudele, laevadele ja hotellidele ning pehmemööbli karkasse, köögimööblit ja komponente. Tootmises Kosel ja Haljalas alates 1992. aastast. | Halver makes custom furniture for offices, shops, homes, ships and hotels, and upholstery frames, kitchen furniture and components. In production in Kose and Haljala since 1992. |

### Hero
| ET | EN |
| --- | --- |
| H1: Eritellimusmööbel tootmises aastast 1992. | Custom furniture, in production since 1992. |
| Lede: Kontorite, kaupluste, kodude, laevade ja hotellide sisustus, valmistatud oma tootmises Harjumaal ja Lääne-Virumaal. | Fit-out furniture for offices, shops, homes, ships and hotels, made in our own production in Harjumaa and Lääne-Virumaa. |
| Küsi pakkumist | Request a quote |
| Ava e-pood | Open shop |
| Alt: Holzma paneelisaag lõikab plaatmaterjali Halveri Kose tootmises | Holzma panel saw cutting board material at Halver's Kose production site |
| Tag: Holzma paneelisaag, Kose tootmine | Holzma panel saw, Kose production |

### Trust strip
| ET | EN |
| --- | --- |
| Eesti Kaubandus- ja Tööstuskoja liige | Member of the Estonian Chamber of Commerce and Industry. |
| Alt: Mööblitootmise kogemus aastast 1992 | Furniture manufacturing experience since 1992 |
| Alt: Creditinfo usaldusväärsuse märgis | Creditinfo trust rating |
| Alt: TOP ettevõte 2021 märgis | TOP Enterprise 2021 award |
| Alt: EAS ja Majandus- ja Kommunikatsiooniministeeriumi ressursitõhususe investeeringu toetus | EAS and Ministry of Economic Affairs and Communications resource-efficiency investment support |

### Two companies, one production
| ET | EN |
| --- | --- |
| H2: Kaks ettevõtet, üks tootmine. | Two companies, one production. |
| Lede: Halver Mööbel valmistab eritellimusmööblit. Halver Arendus toodab pehmemööbli karkasse, köögimööblit ja mööblikomponente. | Halver Mööbel makes custom furniture. Halver Arendus makes upholstery frames, kitchen furniture and furniture components. |
| Entity: Halver Mööbel OÜ | Halver Mööbel OÜ |
| Card title: Eritellimusmööbel | Custom furniture |
| Card body: Eritellimusmööbel kliendi joonistele ja mõõtudele, kontoritest laevade ja hotellideni. | Custom furniture built to the client's drawings and dimensions, from offices to ships and hotels. |
| Entity: Halver Arendus OÜ | Halver Arendus OÜ |
| Card title: Mööblikomponendid | Furniture components |
| Card body: Pehmemööbli karkassid, köögimööbel ja mööblikomponendid tellimuse järgi. | Upholstery frames, kitchen furniture and furniture components, made to order. |

### Capability
| ET | EN |
| --- | --- |
| H2: Tootmisvõimekus kuus. | Production capacity, per month. |
| Lede: Üle 80 oma ala spetsialisti ja enam kui 8000 m² tootmispinda Kosel ja Haljalas. | 80+ specialists and more than 8,000 m² of production floor across Kose and Haljala. |
| Cap: Weeke CNC töötluskeskus | Weeke CNC machining centre |
| Stat: 45 000 m² / plaatmaterjali saetakse kuus | 45,000 m² / of board sawn per month |
| Stat: 300 000 jm / servatakse kuus | 300,000 running metres / edge-banded per month |
| Stat: 10 000+ / erikujulist detaili servatakse kuus | 10,000+ / shaped parts edge-banded per month |
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
| Lede: Väljavõte hiljutistest kodude sisustuslahendustest ja pilk Halveri tootmisse. | A selection of recent home interior projects, and a look inside Halver's production. |
| Cat: Kodu | Home |
| Cat: Köök | Kitchen |
| Cat: Tootmine | Production |
| Vaata kõiki töid | See all work |

### Contact preview
| ET | EN |
| --- | --- |
| H2: Kaks tootmisüksust. | Two production sites. |
| Lede: Külasta meid kohapeal või küsi pakkumist e-posti teel. | Visit us on site, or request a quote by email. |
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
