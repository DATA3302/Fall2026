# DATA 3302: Data Visualization

Course website and documents for DATA 3302 at Cal Poly San Luis Obispo, Fall 2026.

Built with [Jekyll](https://jekyllrb.com/) and deployed on GitHub Pages (no custom plugins — only the `github-pages` gem's whitelisted ones run at deploy time).

## Local development

```
bundle install
bundle exec jekyll serve
```

The site is served at the configured `baseurl` (`/Fall2026`), so visit `http://127.0.0.1:4000/Fall2026/`.

## Structure

- `_config.yml`, `_data/`, `_includes/`, `_layouts/` — standard Jekyll site config, data files (schedule, assignments, resources), shared includes, and page layouts (`default.html` for ordinary pages, `deck.html` for interactive slide decks).
- `*.md` at the repo root (`index.md`, `assignments.md`, `resources.md`, …) — the site's pages.
- `assets/` — static assets for the site itself: `css/`, `images/` (including the course logo used as the favicon), and `site.js`. This is *not* where course content lives.
- `content/` — the course's static content, mostly Typst-authored (`.typ`) and exported to PDF: `syllabus/`, `slides/`, `assignments/`, `lab-activities/`. Each PDF's slide/figure assets live alongside it in a matching `*-Assests` folder. `content/tmp/` is a gitignored scratch folder for in-progress exports and isn't published.
- `reveal/` — the interactive Reveal.js deck system, kept fully separate from the rest of the site (its own assets, vendored library, and Jekyll collection). See [`reveal/README.md`](reveal/README.md) for how to author a deck.
- `_site/` — Jekyll's generated build output. Gitignored; never edit directly.

### Why two "assets" directories?

`assets/` (site chrome: CSS, images, JS) and `reveal/assets/` (fonts, images, embeds used only by interactive decks) are kept separate on purpose, matching the rest of the reveal/ system's isolation from the main site — see `reveal/README.md` for the full rationale. `content/` used to live at `assets/content/`, which made "assets" ambiguous between site chrome and course material; it's now a top-level directory so each of the three top-level content areas (`assets/`, `content/`, `reveal/`) has one clear purpose.

## Adding course content

- Static PDF content (slides, assignments, syllabus, lab activities): add the file under `content/<category>/`, then link it from the relevant `_data/*.yml` file (`resources.yml`, `assignments.yml`, `course.yml`) or page.
- Interactive slide decks: see [`reveal/README.md`](reveal/README.md).
