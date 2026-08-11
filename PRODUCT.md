# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: procurement-side buyers specifying custom furniture for a building or fit-out project.** Interior contractors, shipyard and marine outfitters, hotel and office developers, and kitchen retailers. They arrive with drawings, dimensions, a material list and a deadline, and they are deciding whether this manufacturer can take the job at the volume and tolerance required. They are evaluating capability, not browsing.

**Secondary: component buyers.** Furniture manufacturers sourcing upholstery frames, kitchen carcasses and cut/edged components as a supplier relationship rather than a one-off project. Served by Halver Arendus OÜ and, in Finland, by a named salesperson.

**Tertiary: the trade customer with a standing account** who orders repeat stock through the separate ordering portal at `shop.halver.ee`. Out of scope for this site, but the audience exists and the site links to them.

Both primary audiences read Estonian; export buyers read English and Finnish. None of them are consumers shopping for a kitchen.

## Product Purpose

The artifact in this repository is a **pitch mockup: a proposed replacement for halver.ee, built to win the redesign engagement.** Success is Halver saying yes to it. It is not the deployed site and does not need a backend, a CMS or a form processor to succeed.

That target sets the priorities. The mockup must make Halver's own capability legible to a procurement buyer faster and more credibly than the live site does, and it must be complete enough as a story that a decision-maker can see the whole site in it. Deployment concerns (form delivery, analytics, CMS handover, hosting) are explicitly not what this artifact is graded on, and no work should be spent on them until the engagement is won.

## Positioning

**Two legal entities, one production floor.** Halver Mööbel OÜ makes made-to-order furniture to the client's drawings; Halver Arendus OÜ makes upholstery frames, kitchen furniture and components. They share plant, machinery and a single production capability across two sites, Kose (Harjumaa) and Haljala (Lääne-Virumaa).

The claim a neighbouring workshop cannot truthfully copy is **measured industrial capacity, in-house and continuous since 1992**: over 8 000 m² of production floor, 80+ specialists, and monthly throughput on named machinery. A joinery shop can promise craft. Halver can state a number for how much it saws, edges and drills every month, and name the machine that does it.

## Operating Context

- A buyer typically arrives with **drawings, millimetre dimensions or a specification**, sends them by email, and receives a quote back from production. The site's job is to get a qualified enquiry to the right person; it is not a transactional channel.
- **Enquiries are routed by domain, not to a generic inbox.** Custom furniture, components, purchasing, Finland export, production and accounting each have a named person with a direct phone and address.
- Repeat stock ordering happens on a **separate portal at `shop.halver.ee`**, an external system this site links to and does not contain.
- The shop floor's own working documents (kitchen elevations annotated with millimetre callouts) are the native visual language of the business. Numbers are how this company talks about its work.
- Work is delivered into **fit-out projects on someone else's schedule**: ships, hotels, offices, shops and homes.

## Capabilities and Constraints

**Scope of this artifact (confirmed 2026-08-11):** the marketing site plus a two-screen trade-portal demonstration. Home, selected work, project detail, capabilities, contact and an EU grant page, plus a shop shell (`shop/index.html`) and one product detail page. The shop **browse and catalogue** screens are out of scope and must not be built. `shop.halver.ee` remains the external link from the marketing header.

**Technical:**
- Static HTML and CSS with a single vanilla JS file. No framework, no build step, no package manager, no dependencies.
- Fonts are self-hosted `woff2` under `assets/fonts/`. No CDN, no Google Fonts request at runtime.
- Currently shipped: `index.html`, `tood.html`, `kontakt.html`, `styles.css`, `nav.js`.
- No form backend exists. Any enquiry form in this mockup is a front-end artifact; it must not claim to send.
- `styles.css` is a single 736-line file, which serialises parallel work. Splitting it into partials is a prerequisite for any parallel wave.

**Language:** Estonian, English and Finnish are a durable requirement. Every string must be translatable, and layout (navigation especially) must survive the length variance between them. The pages currently ship as `lang="et"` only, with no switcher built.

**Terminology:** the two entity names are legally distinct and must never be merged into a single "Halver OÜ". Estonian place names and personal names carry diacritics and must not be transliterated.

## Brand Commitments

- The name **Halver**, and both entity names in full where a legal entity is being identified.
- The existing wordmark at `assets/images/halver-logo.png`. It is a dark-on-transparent asset and is inverted programmatically for dark backgrounds.
- The incumbent brand orange `#FF914C`, carried forward as the single accent (darkened for contrast; see DESIGN.md, which owns the values).
- Voice: plain, declarative, Estonian-first. The company states what it does and what it can produce. It does not sell adjectives.

## Evidence on Hand

**Real and verified, safe to use:**
- Production throughput, monthly: 45 000 m² of panel sawn, 300 000 running metres edged, 10 000+ shaped parts edged, 6 000 000+ holes drilled.
- Scale: 80+ specialists, 8 000+ m² of production floor across two sites, operating since 1992.
- Named machinery with photographs: Holzma panel saw, Weeke BHX500 CNC, Homag edgebander, Omal, Skipper 130 (`assets/images/production/`, 6 images).
- Completed work photography, 5 images (`assets/images/work/`), all interiors and frames.
- Four genuine third-party marks (`assets/images/badges/`): Chamber of Commerce membership, Creditinfo, TOP Ettevõte 2021, EAS/MKM resource-efficiency investment support.
- Twelve real staff contacts with roles, direct phone numbers and addresses.
- Both production addresses, with coordinates already used in embedded maps.
- Materials worked: melamine, laminate, veneer, solid wood, engineered stone, paint, lacquer, oil.

**Absent — must not be fabricated:**
- No client or project names. Not one completed-work photo is attributable to a named customer, and no case study exists.
- No testimonials, quotes or references.
- No pricing, lead times, minimum order quantities or capacity availability.
- No certifications beyond the four badges above. No ISO, FSC or fire-rating claims.
- No employee headshots. The team is contact data, not portraits.
- No revenue, export share or client-count figures.

Every number that appears on the site must trace to the verified list above. A number that cannot be sourced does not go on the page.

## Product Principles

1. **Capability is the pitch.** The buyer is deciding whether this shop can take their job. Measured throughput, named machinery and floor area do that work; adjectives do not.
2. **Numbers must be sourceable.** Every figure traces to the evidence list. An unsourceable number is a liability in front of a procurement buyer, not a flourish.
3. **Two entities, one capability.** Present a single production organisation without ever collapsing the legal distinction between Halver Mööbel OÜ and Halver Arendus OÜ.
4. **Route the enquiry to a person.** Success is a qualified buyer reaching the right named contact with their drawings, not time on page.
5. **This is a pitch, not a deployment.** Completeness of the story beats production-readiness of the plumbing until the engagement is won.

## Accessibility & Inclusion

WCAG 2.1 AA is a project requirement, not an aspiration: every text/background pair meets 4.5:1, or 3:1 at 24px and above, in both colour schemes. The site must remain usable with `prefers-reduced-motion: reduce` and must not depend on JavaScript to reveal content. Estonian and Finnish diacritics must render correctly in every font in the stack.
