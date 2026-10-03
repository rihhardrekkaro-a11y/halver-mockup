# Halver mockup

A pitch mockup proposing a Nordic-industrial redesign of [halver.ee](https://halver.ee), the site for **Halver Mööbel OÜ** and **Halver Arendus OÜ**, an Estonian furniture manufacturer operating since 1992.

**This is not the deployed site.** It is a static HTML/CSS artifact built to win a redesign engagement, not a production build. There is no backend, no CMS, no form processor, and no build step: no framework, no bundler, no package manager dependency beyond Playwright for screenshots.

## Who this is for

Halver's own decision makers, evaluating whether to commission the real redesign. The audience the *mockup itself* is written for is procurement buyers: interior contractors, shipyard and marine outfitters, hotel and office developers, kitchen retailers, and component buyers sourcing from Halver Arendus. See `PRODUCT.md` for the full user and positioning breakdown.

## Running it locally

```bash
npm run dev
```

Serves the repo root at `http://localhost:8899` with a small dependency-free Node server (`scripts/dev-server.mjs`). Open `index.html` from there, or any other page listed below.

## Screenshots

```bash
npm run shots
```

Runs `scripts/shots.mjs` with Playwright. It starts the dev server if one is not already running on port 8899, discovers every `.html` file in the repo by walking the directory tree (not from a hardcoded list, since pages are added in parallel), and screenshots each one at 1440, 768 and 375px, full page, in both light and dark colour schemes. Before each capture it scrolls the full page height so scroll-triggered content reveals, then returns to the top. Output goes to `screenshots/<page>-<width>-<scheme>.png`, which is gitignored, plus a summary table printed to the terminal.

Requires `playwright` installed (`npm install` is not run automatically by this repo's tooling; install it yourself before running `npm run shots`).

## Page map

| Page | File | Notes |
| --- | --- | --- |
| Home | `index.html` | |
| Selected work ("Tööd") | `tood.html` | |
| Contact ("Kontakt") | `kontakt.html` | |

`BUILD-PLAN.md` section 6 lists the full intended screen set (project detail, capabilities, EU grant page) as pages get built out. The trade ordering portal at `shop.halver.ee` is out of scope for this mockup and stays an external link.

## Where the contract lives

- `PRODUCT.md`: audience, positioning, scope, what is real evidence versus what must never be fabricated.
- `DESIGN.md`: the design system, colour tokens, type roles, spacing, component specs, in both colour schemes.
- `BUILD-PLAN.md`: the task plan for every agent working on this mockup, including the dependency graph between tasks in section 5b and the CSS partial split (section 5) that lets multiple agents work on the stylesheet at once.

Read `BUILD-PLAN.md` and `DESIGN.md` before changing anything.

## GitHub Pages

`.github/workflows/pages.yml` deploys only the website files (the HTML pages except `components.html`, `nav.js`, `assets/`, `styles/`, `en/`, `shop/`) to GitHub Pages on every push to `main`. **GitHub Pages is not yet enabled on this repository.** Before the workflow can succeed, go to Settings → Pages on GitHub and set the source to "GitHub Actions".
