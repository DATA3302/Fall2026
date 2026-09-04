#import "@preview/touying:0.7.4": *
#import "@preview/touying:0.7.4": themes
#import themes.simple: simple-theme, slide as simple-slide

// Palette and typography defaults
#let paper = rgb("#fffff8")
#let ink = rgb("#242421")
#let muted-ink = rgb("#77746d")
#let rule = rgb("#d8d4c8")
#let accent-green = rgb("#176b4d")
#let accent-ochre = rgb("#bd7b16")
#let accent-red = rgb("#b52b20")
#let accent-purple = rgb("#7a2f5c")
#let accent-blue = rgb("#2a4f8c")

#let body-font = "EB Garamond"
#let code-font = "Fira Code"


#import "@preview/touying:0.7.4": *
#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node, shapes
#let diagram = touying-reducer.with(
reduce: fletcher.diagram, cover: fletcher.hide)

// Semantic type styles. These scope text settings so slide sources never need #text.
#let display-title(body, size: 1.45em, fill: ink) = {
  set text(font: body-font, size: size, weight: "medium", fill: fill)
  body
}

#let subtitle(body, size: 1.05em, fill: muted-ink) = {
  set text(font: body-font, size: size, style: "italic", fill: fill)
  body
}

#let body-copy(body, size: 1em, fill: ink) = {
  set text(font: body-font, size: size, fill: fill)
  body
}

#let quote(body, size: 1.35em, fill: ink, accent: accent-green) = block(
  width: 100%,
  inset: (left: 0.8em),
  stroke: (left: (paint: accent, thickness: 1.5pt)),
  {
    set text(font: body-font, size: size, style: "italic", fill: fill)
    body
  },
)

// `small` is for real, readable secondary content (notes, asides, list text)
// that should still be legible from the back of a room -- not fine print.
#let small(body, size: 0.8em, fill: muted-ink) = {
  set text(font: body-font, size: size, fill: fill)
  body
}

// `cite` is for true attribution/citation lines only (source credits). It is
// allowed to be smaller than other text since it is not meant to be read
// from a distance, just present for the record.
#let cite(body, size: 0.55em, fill: muted-ink) = {
  set text(font: body-font, size: size, fill: fill)
  body
}

#let label(body, size: 0.72em, fill: ink, style: "italic") = {
  set text(font: body-font,style:style, size: size, weight: "medium", fill: fill)
  body
}

#let code(body, size: 0.78em, fill: ink) = {
  set text(font: code-font, size: size, fill: fill)
  body
}

// Presentation theme. Core colors, fonts, scale, margins, and overflow are configurable.
#let wdf-theme(
  aspect-ratio: "16-9",
  footer: self => self.info.short-title,
  paper-color: paper,
  ink-color: ink,
  muted-color: muted-ink,
  primary-color: accent-green,
  secondary-color: accent-ochre,
  tertiary-color: accent-red,
  body-font-family: body-font,
  code-font-family: code-font,
  body-size: 23pt,
  page-margin: (left: 2.4em, right: 2.4em, top: 2em, bottom: 1.7em),
  breakable: false,
  detect-overflow: true,
  ..args,
  body,
) = {
  show: simple-theme.with(
    aspect-ratio: aspect-ratio,
    header: none,
    header-right: none,
    footer: footer,
    primary: primary-color,
    subslide-preamble: block(
      below: 1.15em,
      {
        set text(font: body-font-family, size: 1.38em, weight: "medium")
        utils.display-current-heading(level: 2)
      },
    ),
    config-page(
      fill: paper-color,
      margin: page-margin,
      footer-descent: 0em,
    ),
    config-common(
      breakable: breakable,
      detect-overflow: detect-overflow,
      nontight-list-enum-and-terms: true,
    ),
    config-colors(
      neutral: ink-color,
      neutral-light: muted-color,
      neutral-lighter: rule,
      neutral-lightest: paper-color,
      neutral-darkest: ink-color,
      primary: primary-color,
      secondary: secondary-color,
      tertiary: tertiary-color,
    ),
    config-methods(
      init: (self: none, body) => {
        set text(font: body-font-family, size: body-size, fill: ink-color)
        set par(leading: 0.72em, spacing: 0.9em)
        set list(indent: 1.1em, body-indent: 0.55em, spacing: 0.62em)
        set enum(indent: 1.1em, body-indent: 0.55em, spacing: 0.62em)

        // Markdown emphasis: *strong* is green medium italic; _emphasis_ is ochre italic.
        // Using `it => text(...)` (rather than `show X: set text(...)`) is required here:
        // Typst's built-in strong/emph rendering toggles style based on the *current*
        // context, so a `set` rule that turns on italic gets immediately toggled back off.
        show strong: it => text(
          font: body-font-family,
          weight: "medium",
          style: "italic",
          fill: primary-color,
          it.body,
        )
        show emph: it => text(
          font: body-font-family,
          style: "italic",
          fill: secondary-color,
          it.body,
        )
        show raw: set text(font: code-font-family, size: 0.78em)
        show link: set text(font: body-font-family, fill: primary-color)
        show footnote.entry: set text(font: body-font-family, size: 0.5em, fill: muted-color)
        body
      },
      alert: utils.method-wrapper(text.with(
        font: body-font-family,
        weight: "medium",
        fill: primary-color,
      )),
    ),
    ..args,
  )
  body
}

// Slide layouts
// Alias so title-slide's `subtitle:` parameter can shadow the style function by the same name.
#let subtitle-style = subtitle

#let title-slide(
  title: auto,
  subtitle: auto,
  author: auto,
  institution: auto,
  attribution: none,
  accent: accent-green,
) = touying-slide-wrapper(self => {
  let resolved-title = if title == auto { self.info.title } else { title }
  let resolved-subtitle = if subtitle == auto { self.info.subtitle } else { subtitle }
  let resolved-author = if author == auto { self.info.author } else { author }
  let resolved-institution = if institution == auto { self.info.institution } else { institution }

  touying-slide(
    self: self,
    config: config-common(freeze-slide-counter: true),
    align(left + horizon)[
      #display-title(size: 2.35em, resolved-title)
      #if resolved-subtitle != none [
        #v(0.35em)
        #subtitle-style(resolved-subtitle)
      ]
      #v(1.25em)
      #line(length: 26%, stroke: (paint: accent, thickness: 1.5pt))
      #v(0.8em)
      #label(size: 0.85em, resolved-author)
      #if resolved-institution != none [
        #linebreak()
        #small(size: 0.72em, resolved-institution)
      ]
      #if attribution != none [
        #v(2.1em)
        #cite(size: 0.55em, attribution)
      ]
    ],
  )
})

#let slide(composer: auto, ..bodies) = simple-slide(
  config: config-common(subslide-preamble: none),
  composer: composer,
  ..bodies,
)

#let focus-slide(body, accent: accent-green) = touying-slide-wrapper(self => {
  touying-slide(
    self: self,
    config: config-common(subslide-preamble: none),
    align(left + horizon)[
      #line(length: 11%, stroke: (paint: accent, thickness: 2pt))
      #v(0.65em)
      #subtitle(size: 1.75em, fill: ink, body)
    ],
  )
})

// Reusable components
#let source-note(body) = place(
  bottom + left,
  dy: -0.2em,
  cite(size: 0.5em, body),
)

#let note-block(body, title: none, accent: accent-green) = block(
  width: 100%,
  inset: (left: 0.9em, right: 0.9em, y: 0.68em),
  stroke: (left: (paint: accent, thickness: 2.5pt)),
  fill: accent.lighten(92%),
  [
    #if title != none [#label(size: 1.25em, fill: accent, title) #v(0.1em)]
    #body
    #v(0.5em)
  ],
)

// Pass a file path for the concise form: #image-plate("figure.png").
// Existing image content remains supported for advanced sizing or clipping.
// Sizing defaults to `height`; pass `width` instead for wide plates (e.g. two-up
// slides or panoramic screenshots) where a height-based fit would overflow the column.
#let image-plate(
  image-source,
  height: 85%,
  width: none,
  fit: "contain",
  caption: none,
  source: none,
  border: true,
  shadow: true,
  border-stroke: (paint: muted-ink, thickness: 1pt),
  shadow-offset: 4pt,
  shadow-color: ink.transparentize(85%),
) = {
  let image-content = if type(image-source) == str {
    if width != none {
      image(image-source, width: width, fit: fit)
    } else {
      image(image-source, height: height, fit: fit)
    }
  } else {
    image-source
  }
  let frame-stroke = if border { border-stroke } else { none }

  let framed-image = box[
    #if shadow {
      place(
        top + left,
        dx: shadow-offset,
        dy: shadow-offset,
        box(fill: shadow-color, hide(image-content)),
      )
    }
    #box(stroke: frame-stroke, image-content)
  ]

  align(center, framed-image)
  if caption != none {
    v(0.45em)
    align(center, subtitle(size: 0.85em, caption))
  }
  if source != none {
    v(0.22em)
    align(center, cite(size: 0.55em, source))
  }
}

#let big-number(value, description, accent: accent-green) = align(center)[
  #display-title(size: 2.5em, fill: accent, value)
  #linebreak()
  #subtitle(size: 0.85em, description)
]
