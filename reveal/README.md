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
| `![figure preload](/embed/chart/chart.html)` | Preloaded figure (now the default for every figure within `viewDistance`, so Auto-Animate never catches one mid-load; the token is kept for compatibility) |
| `![figure height-400](/page.html)` | Figure with a 400px height |
| `![background](/embed/chart/chart.html)` | Visualization background |
| `![background contained](...)` | Background contained to the slide |
| `![figure scrollable](https://…)` | Scrollable embedded page |
| `![background no-scroll](https://…)` | Non-scrolling background page |
| `[Button](action:buttonId)` | Button with the specified DOM ID |
| `[lead]`, `[muted]`, `[accent]`, `[small]`, `[medium]`, `[big]` | Paragraph text treatments. `[big]` paragraphs and colorboxes are vertically centered in their column by default; `[medium]` is not |
| `[left]`, `[right]`, `[hcenter]` | Horizontal alignment override for a paragraph (`[center]` is the older spelling of `[hcenter]`). `[medium]` and `[big]` default to centered and text in a colorbox to left; these override either |
| `[vcenter]` | Vertically center a column holding other content (implied by `[big]` and colorboxes) |
| `> [!green-box]`, `> [!gold-box]`, `> [!note]` | Tufte-style colorboxes |
| Standard `![Caption](/images/my-talk/figure.png "Source")` | Static figure with caption (inlined and auto-animated if it's an `.svg`) |
| A fenced `diagram` block | Node/edge/path diagram, rendered to SVG |
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

Auto-Animate only runs when a persistent (matched) element moves or resizes between two slides; if everything that carries over stays put at the same size, the slides cut instantly. The slide background is plain white (`--slide-background`).

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
Text inside a colorbox defaults to left alignment; paragraph alignment markers override it.

`[!notes]` (presenter notes) and `[!auto-animate]` are separate directives, not
colorboxes.

## Medium display text

`[medium]` uses the same italic, horizontally centered display typography as
`[big]`, but at `1.35em` rather than `2em` (ordinary paragraphs are `0.9em`).
At the theme's 32px base these are 43.2px, 64px, and 28.8px respectively,
before Reveal scales the slide. Like `[big]`, it accepts `[left]`, `[right]`,
`[hcenter]`, and the older `[center]` alias, including inside colorboxes.
Unlike `[big]`, **it does not vertically center its container**. Add
`[vcenter]` intentionally when needed; a sibling `[big]` or colorbox still
triggers the existing container-centering behavior.

```markdown
[medium left] A larger explanation, still in normal top-to-bottom flow.

[medium hcenter vcenter] An intentionally centered display line.
```

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
| `shape=rect\|circle\|ellipse\|triangle` | overrides the default, which is a rounded rect, or a bare dot for a node with no label and no size. Ellipses use independent `w` and `h` dimensions and clip connected edges to their curved boundary |
| `w=<n>` `h=<n>` | size in columns / rows. A circle takes `h` from `w` if `h` is omitted |
| `label-pos=c\|n\|ne\|e\|se\|s\|sw\|w\|nw` | where the label sits. Defaults to `n` for an enclosure, `c` otherwise |
| `font-size=<n>` | label size in SVG units (default: 40), independent of paragraph text treatments. Does not resize an explicitly sized node |
| `dash="8 5"` | border dash/gap lengths in SVG units; comma-separated values also work. `dash=none` is solid |

`<c>` is a palette name — `green`, `gold`, `blue`, `magenta`, `orange`,
`muted`, `ink` — or any raw CSS color.

A label placed at an edge or corner is inset from the border by 22px and the
font is 40px, so **an edge label needs about 62px of clear space** inside the
node, or roughly 0.37 of a row. Enclosures whose plates are stacked tighter
than that will draw their own border through the label text.

## Diagram edges

    edge <from> <to> [via (x,y)]... [smooth] [label="..."] [color=<c>] [arrow=<a>] [noarrow] [font-size=<n>] [dash="8 5"]

`arrow=` takes `none`, `->`, `<->`, `o`, `.`, `..`, `..>`, or `=>`.
`noarrow` is shorthand for `arrow=none`. `smooth` makes a Catmull-Rom curve
through the endpoints and all `via` points; otherwise corners are rounded.
Edges still clip to their endpoint nodes, with a small gap for arrowheads.
`font-size=` overrides the edge label's default 24.8 SVG units.
`dash=` overrides the line pattern independently of the arrow style, including
`dash=none` to make a dotted-arrow token solid. Invalid sizes/dashes fall back
to their defaults, preserving existing diagrams.

## Standalone diagram paths

    path <id> (x,y) (x,y)... [smooth] [closed] [color=<c>] [fill=<c>] [dash="8 5"]

A small geometry primitive for globe graticules, hidden arcs, surface outlines,
and other lines that should not need invisible endpoint nodes:

- At least two points, in the same 240px-column / 170px-row grid as nodes.
  Positive y points down. Equal x/y grid lengths are **not** equal physical lengths.
- Straight segments by default; `smooth` reuses the edge curve builder and passes
  through every supplied point. These are schematic curves, not exact circular arcs.
- `closed` adds a straight closing segment back to the first point. It does not
  make a smooth periodic join; use `shape=ellipse` for an exact full oval.
- `color=` is the stroke (default: muted), `fill=` the interior (default: none).
  `dash=` has the same meaning as on nodes and edges. Stroke width stays 2.5 SVG units.
- No clipping, arrowheads, endpoint gaps, or automatic parallel-edge offsets.
  Paths paint in source order, after enclosures but before edges and normal nodes.
  Use transparent nodes (`fill=none`) where geometry must show through.
- Path geometry, including curve control-point bounds, contributes to the SVG
  viewBox; a path-only diagram works. Node labels still need adequate `w`/`h`
  and surrounding space, especially with large custom fonts.
- Give each path a unique id within its diagram. Stable ids participate in
  Auto-Animate; for curve morphing keep point count and `smooth`/`closed` flags
  consistent across slides. Ellipse centers/radii also animate.

Existing node/edge syntax, default sizes, dotted arrows, and layout are unchanged.
No arbitrary SVG or new dependency is needed.

### Coordinate globe example

Paste this entire fence into a deck. The dashed equator half is behind the
sphere; the full blue oval is a schematic latitude parallel. `P(λ, φ)` names a
longitude/latitude pair, not a computed geographic location.

```diagram
diagram coordinate-globe
node globe (0,0) shape=circle w=2 fill=none stroke=ink
node latitude (0,-0.55) shape=ellipse w=1.84 h=0.6 fill=none stroke=blue dash="6 5"
path equator-back (-1,0) (-0.7,-0.24) (0,-0.34) (0.7,-0.24) (1,0) smooth dash="8 6"
path equator-front (-1,0) (-0.7,0.24) (0,0.34) (0.7,0.24) (1,0) smooth color=ink
path prime-back (0,-1.412) (-0.28,-1) (-0.4,0) (-0.28,1) (0,1.412) smooth dash="8 6"
path prime-front (0,-1.412) (0.28,-1) (0.4,0) (0.28,1) (0,1.412) smooth color=green
path axis (0,-1.65) (0,1.65) dash="4 6"
path radius (0,0) (0.8,-0.4) color=magenta
node point (0.8,-0.4) shape=circle w=0.045 fill=magenta nostroke
node north (0.18,-1.56) "N" w=0.3 h=0.3 fill=none nostroke font-size=28
node south (0.18,1.56) "S" w=0.3 h=0.3 fill=none nostroke font-size=28
node origin (-0.12,0.1) "O" w=0.3 h=0.3 fill=none nostroke font-size=26
node point-label (1.12,-0.47) "P(λ, φ)" w=0.85 h=0.35 fill=none nostroke color=magenta font-size=28
node equator-label (1.4,0.2) "Equator" w=0.9 h=0.35 fill=none nostroke font-size=28
node prime-label (0.85,-1.25) "Prime meridian" w=1.5 h=0.35 fill=none nostroke color=green font-size=26
node latitude-label (-1.4,-0.55) "Latitude φ" w=1.1 h=0.35 fill=none nostroke color=blue font-size=26
```

### Cylinder, cone, and plane example

Three schematic projection surfaces beside one another (not calculated map
projections). The cylinder uses an exact ellipse for its top rim and split
solid/dashed curves for the lower rim; the cone uses an open outline rather
than a triangle with an unwanted straight base; the plane is a closed polyline.

```diagram
diagram projection-surfaces
# Cylinder
node cylinder-globe (0,0) shape=circle w=1.2 fill=none stroke=ink
node cylinder-top (0,-1.1) shape=ellipse w=1.2 h=0.5 fill=none stroke=blue
path cylinder-left (-0.6,-1.1) (-0.6,1.1) color=blue
path cylinder-right (0.6,-1.1) (0.6,1.1) color=blue
path cylinder-back (-0.6,1.1) (-0.42,0.92) (0,0.85) (0.42,0.92) (0.6,1.1) smooth color=blue dash="8 6"
path cylinder-front (-0.6,1.1) (-0.42,1.28) (0,1.35) (0.42,1.28) (0.6,1.1) smooth color=blue
node cylinder-label (0,1.75) "Cylinder" w=1.4 h=0.4 fill=none nostroke font-size=32
# Cone
node cone-globe (3,0) shape=circle w=1.2 fill=none stroke=ink
path cone-sides (2,1.1) (3,-2.1) (4,1.1) color=green
path cone-back (2,1.1) (2.3,0.85) (3,0.75) (3.7,0.85) (4,1.1) smooth color=green dash="8 6"
path cone-front (2,1.1) (2.3,1.35) (3,1.45) (3.7,1.35) (4,1.1) smooth color=green
node cone-label (3,1.75) "Cone" w=1.4 h=0.4 fill=none nostroke font-size=32
# Plane, in perspective; the sphere masks the overlapping portion
path plane (4.95,-0.847) (5.5,-1.3) (7.05,-0.847) (6.5,-0.394) closed color=orange
node plane-globe (6,0) shape=circle w=1.2 fill="var(--slide-background)" stroke=ink
node plane-label (6,1.75) "Plane" w=1.4 h=0.4 fill=none nostroke font-size=32
```

## Run locally

```sh
bundle exec jekyll serve
```

Open the deck at `http://localhost:4000/Fall2026/slides/human-factors/` (or
whatever `baseurl` the site is currently configured with).
