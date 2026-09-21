# Reveal.js interactive slides

This directory holds everything specific to the course's interactive
[Reveal.js](https://revealjs.com/) decks, kept separate from the rest of the
Jekyll site (root-level pages, `_layouts`, `_includes`, `_data`) and from the
existing static PDF course content in `content/`. It was ported from a
standalone deck-authoring repo and uses only Jekyll features supported by
GitHub Pages (the site already builds with the `github-pages` gem; nothing
here adds a plugin).

Decks render as their own collection (`collections_dir: reveal` in the site's
`_config.yml` points the `decks` collection at `reveal/_decks/`) and are
linked from the course's [Resources](/resources/) page alongside the PDF
slide decks.

## Structure

- `_decks/*.md` — presentation configuration and all slides, one file per deck.
- `assets/js/deck-builder.js` — converts rendered Markdown into slide structure.
- `assets/css/deck.css` — the deck theme: header, content grid, footer layout, and all element styling.
- `assets/fonts/`, `assets/images/`, `assets/embed/` — fonts and per-deck media referenced from `_decks/*.md`.
- `lib/reveal.js/` — vendored Reveal.js distribution and plugins (`reveald3`, `notes`, `highlight`). The bundled Reveal.js presentation themes are unused; `assets/css/deck.css` is the only theme.

The site's shared `_layouts/deck.html` is the Reveal/Reveald3 shell every deck in this collection uses.

## Authoring syntax

Create `reveal/_decks/my-talk.md` with front matter followed by all of its slides:

```markdown
---
title: My talk
description: A short description.
course: DATA 3302 · Human Factors
---

### First slide header

The first heading becomes the standard slide header. Everything else is content.

- Regular Markdown works here
- No `<section>` wrapper is needed

::: 1/1

This starts a second, equally sized column.

> A final blockquote becomes the standard slide footer.

---

### Second slide

A horizontal rule starts the next slide.
```

The compiler applies these conventions:

| Markdown | Generated slide feature |
| --- | --- |
| `# Title` | Sparse title slide |
| `## Section` | Section-divider slide |
| `### Heading` | Standard content-slide header |
| Final blockquote | Center footer note |
| `---` | Slide boundary |
| `:::` | Equal-width column boundary |
| `::: 45/55` | Weighted grid columns |
| `![figure](/embed/chart/chart.html)` | Reveald3 figure |
| `![figure preload](/embed/chart/chart.html)` | Preloaded figure |
| `![figure height-400](/page.html)` | Figure with a 400px height |
| `![background](/embed/chart/chart.html)` | Visualization background |
| `![background contained](...)` | Background contained to the slide |
| `![figure scrollable](https://…)` | Scrollable embedded page |
| `![background no-scroll](https://…)` | Non-scrolling background page |
| `[Button](action:buttonId)` | Button with the specified DOM ID |
| `[lead]`, `[muted]`, `[accent]`, `[small]`, `[center]`, `[big]` | Paragraph text treatments |
| `> [!green-box]`, `> [!gold-box]`, `> [!note]` | Tufte-style colorboxes |
| Standard `![Caption](/images/my-talk/figure.png "Source")` | Static figure with caption (inlined and auto-animated if it's an `.svg`) |
| A fenced `diagram` block | Node/edge diagram, rendered to SVG |
| A fenced code block, e.g. ` ```js ` | Syntax-highlighted code (via `highlight.js`) |
| `> [!auto-animate]` | Auto-Animate this slide into the next matching one |
| `> [!notes]` | Hidden presenter notes |

A local image or embed reference only needs to name its path under this
directory's `assets/` (e.g. `/images/my-talk/diagram.svg` for
`reveal/assets/images/my-talk/diagram.svg`, or `/embed/my-talk/chart.html` for
`reveal/assets/embed/my-talk/chart.html`) — any markdown-rendered `<img src="/…">`
gets `{{ site.baseurl }}/reveal/assets` prepended automatically by
`_layouts/deck.html` at build time, so a deck never has to spell out either
one and stays correct on the deployed GitHub Pages project site. An absolute
(`http(s)://`) reference is left untouched.

For Auto-Animate details and deck front-matter options (`course`, `design`,
`reveal`), see the source repo this was ported from. The diagram language and
the colorbox names are documented below, since both have been extended here.

## Colorboxes

A blockquote whose first line is `[!<name>]` becomes a callout. Callouts are
named by the color they render in, not by a semantic type:

| Name | Renders |
|---|---|
| `[!green]` | green rule and tint |
| `[!gold]` | gold |
| `[!blue]` | blue |
| `[!orange]` | orange |
| `[!magenta]` | magenta |
| `[!ink]` | neutral: near-black rule, pale grey tint |
| `[!muted]` | neutral: softer grey rule and tint |
| `[!margin]` | the one non-color name: narrow, right-aligned, transparent |

Anything after the marker on the same line becomes the box's title; with no
title it falls back to the capitalized name, which is rarely what you want.
Text inside a colorbox is always left-aligned.

`[!notes]` (presenter notes) and `[!auto-animate]` are separate directives, not
colorboxes.

## Diagram nodes

    node <id> (x,y) [enclose (x2,y2)] ["label"] [options]

Coordinates are grid units: one column is 240px, one row is 170px. `enclose`
makes the node an area whose two coordinates are opposite corners, drawn behind
everything else — that is how the nested plates in `user-research.md` are built.

| Option | Effect |
|---|---|
| `color=<c>` | label color, and the tint the node is filled with |
| `stroke=<c>` | border color (default: muted gray) |
| `nostroke` | no border |
| `fill=<c>` | explicit interior. `fill=none` is transparent — use it with `nostroke` for floating text, or alone for a plain outline |
| `shape=rect\|circle\|triangle` | overrides the default, which is a rounded rect, or a bare dot for a node with no label and no size |
| `w=<n>` `h=<n>` | size in columns / rows. A circle takes `h` from `w` if `h` is omitted |
| `label-pos=c\|n\|ne\|e\|se\|s\|sw\|w\|nw` | where the label sits. Defaults to `n` for an enclosure, `c` otherwise |

`<c>` is a palette name — `green`, `gold`, `blue`, `magenta`, `orange`,
`muted`, `ink` — or any raw CSS color.

A label placed at an edge or corner is inset from the border by 22px and the
font is 40px, so **an edge label needs about 62px of clear space** inside the
node, or roughly 0.37 of a row. Enclosures whose plates are stacked tighter
than that will draw their own border through the label text.

## Diagram edges

    edge <from> <to> [via (x,y)]... [label="..."] [color=<c>] [arrow=<a>] [noarrow]

`arrow=` takes `->`, `<->`, `o`, `.`, `..`, `..>`, or `=>`.

## Run locally

```sh
bundle exec jekyll serve
```

Open the deck at `http://localhost:4000/Fall2026/slides/human-factors/` (or
whatever `baseurl` the site is currently configured with).
