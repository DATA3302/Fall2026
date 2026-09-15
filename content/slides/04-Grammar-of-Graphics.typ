#import "../wdf-slides.typ": *



#show: wdf-theme.with(
  config-info(
    title: [The Grammar of Graphics],
    short-title: [DATA 3302 · Grammar of Graphics],
    subtitle: [DATA 3302: Data Visualization],
    author: [Professor Austin P. Wright],
    institution: [Cal Poly San Luis Obispo · Fall 2026],
  ),
)

#title-slide(attribution: [
  #v(-2em)
  Slides based on:\
  Munzner, Visualization Analysis and Design, 2014\
  Bertin, Semiology of Graphics, 1967\
  Cleveland & McGill, 1984\
  Polo Chau, Data and Visual Analytics Course Slides.
])


// ────────────────────────────────────────────────────────────────────────────
== Encodings
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[What is a *visualization*?]

#focus-slide()[
  #small(size: 0.7em)[Recall]

  The study of mapping *data elements* to *visual elements* to clearly communicate *true* and *interesting* properties of data.
]


#slide[
  #align(center + horizon)[
    #text(size: 1.75em,fill:ink,style:"italic")[
      #diagram(
        node-stroke: 3pt+muted-ink,
        node-inset: 20pt,
        node-corner-radius: 15pt,
        edge-corner-radius: 25pt,
        edge-stroke: 3pt+muted-ink,
        label-sep: 0.55em,
        spacing: (30pt, 160pt),

        node((0, 0), [*World*], name: <world>),

        node((0.75, 0.75), [_Data_], name: <data>),

        node((2.5, 0.75), [_Design_],  name: <design>),

        node((3.5, 0), [*Human*], name: <human>),


        edge(<world>,(0,0.75), <data>, "->"),
        edge(<data>,<design>, "->",),
        edge(<design>,(3.5,0.75), <human>, "->"),
        pause,
        node((0.02, -0.03), [#text(style:"italic",fill:accent-red)[World]], name: <interp>,stroke:accent-red),
        edge(<human>, <world>, "->",stroke:accent-red,label-side: left,label:[#text(fill:accent-red)[Interpretation]]),
        node((0.02, -0.3), [#text(weight:"semibold",style:"italic",fill:accent-red)[Mind the Gap!]],stroke:none),
        pause,
        edge(<data>, <design>, "->",stroke:accent-ochre,label-side: left,label:[#text(fill:accent-ochre)[Encoding]],label-sep:30pt),
        // edge(<data>,(1.75,0), <viz>, "->",[#small[Measure]]),
        // edge(<viz>, (1.75,1), <human>, "->",[#small[Measure]]),
        // edge(<human>,(-0.9,1), (-0.9,0.5), "->",           [#small[Measure]]),

        // edge(
        //   <world>, (-0.9,0.5), "-",
        //   stroke: (paint: accent-red, thickness: 5pt),
        //   label-side: right,
        //   text(size:0.85em,fill: accent-red, weight: "medium",style:"italic", [Mind the Gap!]),
        // ),
      )
    ]
  ]

]


#focus-slide[A _visual encoding_ is a mapping\ from data to visuals.]

#let encoding-boxes() = align(center + horizon)[
  #text(size: 1.5em, fill: ink)[
    #diagram(
      node-stroke: 2.6pt + ink,
      node-inset: 22pt,
      node-corner-radius: 12pt,
      edge-stroke: 2.6pt + ink,
      label-sep: 0.55em,
      spacing: (120pt, 40pt),
      node((0, 0), [Data], name: <d>),
      node((1, 0), [Visual], name: <v>),
      edge(<d>, <v>, "->", label: [_Encoding_]),
    )
  ]
]


#let enc-side(title, ..rows) = box(width: 12.5em)[
  #align(center)[#label(size: 1.15em)[#title]]
  #v(0.55em)
  #set align(left)
  #stack(spacing: 0.7em, ..rows.pos().map(r => small(size: 0.86em, r)))
]

#let encoding-detail() = align(center + horizon)[
  #diagram(
    node-stroke: 2.6pt + ink,
    node-inset: 15pt,
    node-corner-radius: 12pt,
    edge-stroke: 2.6pt + ink,
    label-sep: 0.5em,
    spacing: (128pt, 30pt),

    node((0, 0), enc-side(
      [Data],
      [*Quantitative* : value / amount],
      [*Categorical* : kind of thing],
      [*Processing* : transform, aggregate],
    ), name: <d>, shape: "rect"),

    pause,

    node((1, 0), enc-side(
      [Visual],
      [*Graphical marks* : points, lines, areas],
      [*Channels* : position, size, color …],
      [*Glyphs* : composite marks],
    ), name: <v>, shape: "rect"),

    edge(<d>, <v>, "->", label: [_Encoding_], label-side: center,stroke:accent-ochre),
  )
]

#slide[
  #encoding-detail()
]

#focus-slide[
  The *Grammar of Graphics*
  #v(0.45em)
  #small(size: 0.7em)[A graphic is built by binding data attributes to the visual properties of geometric marks.]
]

#slide[
  #display-title[A Grammar for Graphics]
  #v(0.5em)
  #body-copy[Instead of memorizing named chart types,compose a few primitives:]
  #v(0.5em)
  #note-block()[
    + Pick a *mark*, some visual item
    + Bind each data attribute to a *channel*, a visual property of the mark
    + *Compose* marks into layers, facets, and coordinate systems
  ]
  #v(0.5em)
  #small[Wilkinson's Grammar of Graphics (2005) forms the structure behind libraries such as ggplot2, and Vega-Lite.]
]


// ────────────────────────────────────────────────────────────────────────────
== Marks
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[*Marks*\ The geometric primitives of a graphic.]

#let mark-points() = box(width: 180pt, height: 120pt)[
  #for p in ((12, 74), (46, 34), (74, 58), (104, 24), (136, 52), (166, 70)) {
    place(left + top, dx: p.at(0) * 1pt, dy: p.at(1) * 1pt, circle(radius: 8pt, fill: ink, stroke: none))
  }
]

#let mark-lines() = box(width: 180pt, height: 120pt)[
  #place(left + top, dx: 8pt, dy: 100pt, line(end: (48pt, -44pt), stroke: 2.4pt + ink))
  #place(left + top, dx: 68pt, dy: 44pt, line(end: (52pt, 40pt), stroke: 2.4pt + ink))
  #place(left + top, dx: 128pt, dy: 96pt, line(end: (48pt, -58pt), stroke: 2.4pt + ink))
]

#let mark-areas() = box(width: 180pt, height: 120pt)[
  #place(left + top, dx: 4pt, dy: 20pt, polygon(
    fill: muted-ink, stroke: none,
    (36pt, 0pt), (72pt, 28pt), (58pt, 72pt), (14pt, 72pt), (0pt, 28pt),
  ))
  #place(left + top, dx: 100pt, dy: 14pt, rect(width: 76pt, height: 42pt, fill: muted-ink, stroke: 2pt + paper))
  #place(left + top, dx: 100pt, dy: 58pt, rect(width: 36pt, height: 38pt, fill: muted-ink, stroke: 2pt + paper))
  #place(left + top, dx: 138pt, dy: 58pt, rect(width: 38pt, height: 22pt, fill: muted-ink, stroke: 2pt + paper))
  #place(left + top, dx: 138pt, dy: 82pt, rect(width: 38pt, height: 14pt, fill: muted-ink, stroke: 2pt + paper))
]

#slide[
  #display-title[Marks: Geometric Primitives]
  #v(1fr)
  #grid(
    columns: (1fr, 1fr, 1fr),
    align: center + horizon,
    row-gutter: 0.8em,
    mark-points(), mark-lines(), mark-areas(),
    label[Points], label[Lines], label[Areas],
  )
  #v(1fr)
  #small[Marks have dimensionality: points (0D), lines (1D), areas (2D), and volumes (3D).]
  #v(1fr)
]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/diamonds-chartjunk.png",
    height: 86%,
    caption: [Chartjunk: Extra stuff that does not correspond to an encoding, lowering the data-to-ink ratio],
    source: [Nigel Holmes, TIME --- "Diamonds Were a Girl's Best Friend."],
  )
]


// ────────────────────────────────────────────────────────────────────────────
== Channels
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[*Channels*

  The *visual properties* that can vary for a mark

  #pause

  Mapped to by *properties of corresponding data*
]

#slide[
  #v(1fr)
  #note-block(title: [Primitive Channels])[
    + Position
    + Size
    + Value / luminance
    + Texture
    + Color
    + Orientation / tilt
    + Shape
  ]
  #v(2fr)
][
  #pause
  #v(1fr)
  #small[Bertin classified each channel by what the eye can read from it: _order_, _grouping_, or _exact quantity_.]
  #v(2fr)
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/bertin-retinal-variables.png",
    height: 80%,
    caption: [The "retinal variables," each varied across point, line, and area marks.],
    source: [Jacques Bertin, Semiology of Graphics, 1967.],
  )
]

#let complex-channels() = box(width: 340pt, height: 212pt)[
  #place(left + top, dx: 0pt, dy: 6pt, line(end: (0pt, 196pt), stroke: 2pt + ink))
  #place(left + top, dx: 0pt, dy: 202pt, line(end: (320pt, 0pt), stroke: 2pt + ink))
  #place(left + top, dx: 108pt, dy: 28pt, circle(radius: 42pt, fill: accent-ochre, stroke: none))
  #place(left + top, dx: 224pt, dy: 104pt, circle(radius: 28pt, fill: accent-blue, stroke: none))
  #place(left + top, dx: 56pt, dy: 144pt, circle(radius: 13pt, fill: muted-ink, stroke: none))
]

#slide[
  #display-title[How many / which channels are being used?]
  #v(0.4em)
  #v(1fr)
  #align(center, complex-channels())
  #v(1fr)
]

// TODO RECREATE SLIDE ON SYMBOLIC CHANNELS

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/music-notation.png",
    width: 92%,
    caption: [Symbolic channels: learned systems where stem, flag, and note-head each carry meaning.],
    source: [Standard music notation.],
  )
]

#focus-slide[
  Channels express one of two things:
  #v(0.4em)
  #small(size: 0.72em)[_How much?_ (magnitude or order)\   _Which one?_ (identity or category)]
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/channels-ranked.png",
    height: 82%,
    caption: [Magnitude channels carry ordered attributes; identity channels carry categorical ones.],
    source: [Munzner, Visualization Analysis and Design, 2014, Fig. 5.1.],
  )
]


// TODO RECREATE SLIDES ON ANNOTATING CHANNELS BASED ON MINARD

// ────────────────────────────────────────────────────────────────────────────
== Choosing Channels
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[Two tests for a channel: \ Is it *expressive*?\  Is it *effective*?]

#focus-slide[
  Don't just mind the gap ... *measure* it!]



#slide[
  #image-plate(
  "slides/04-Grammar-of-Graphics-Assets/stevens-power-law.png",
  height: 85%,
  caption: [Perception is different than objective encoding],
  source: [Stevens' psychophysical power law.],
)
]

#let bars() = align(center)[
  #grid(
    columns: (auto, auto, auto, auto, auto),
    column-gutter: 22pt,
    align: bottom + center,
    row-gutter: 0.5em,
    rect(width: 30pt, height: 82pt, stroke: 1.4pt + ink),
    rect(width: 30pt, height: 168pt, stroke: 1.4pt + ink),
    rect(width: 30pt, height: 30pt, stroke: 1.4pt + ink),
    rect(width: 30pt, height: 20pt, stroke: 1.4pt + ink),
    rect(width: 30pt, height: 11pt, stroke: 1.4pt + ink),
    [ ], label(size: 1em)[*A*], label(size: 1em)[*B*], [ ], [ ],
  )
]

#slide[
  #display-title[Length: how much taller is bar *A* than bar *B*?]
  #v(1fr)
  #bars()
  #v(1fr)
  #pause
  #align(center)[#label(size: 1.15em)[*A* is about *5.6×* taller.]]
  #v(1fr)
]

#let area-circles() = box(width: 300pt, height: 184pt)[
  #place(left + top, dx: 18pt, dy: 6pt, circle(radius: 46pt, stroke: 1.4pt + ink))
  #place(left + top, dx: 118pt, dy: 40pt, circle(radius: 38pt, stroke: 1.4pt + ink))
  #place(left + top, dx: 214pt, dy: 58pt, circle(radius: 27pt, stroke: 1.4pt + ink))
  #place(left + top, dx: 236pt, dy: 76pt, label[*A*])
  #place(left + top, dx: 120pt, dy: 128pt, circle(radius: 18pt, stroke: 1.4pt + ink))
  #place(left + top, dx: 134pt, dy: 138pt, label[*B*])
]

#slide[
  #display-title[Area: how much bigger is circle *A* than circle *B*?]
  #v(1fr)
  #align(center, area-circles())
  #v(1fr)
  #pause
  #align(center)[#label(size: 1.15em)[*A* has about *2.25×* the area]]
  #v(1fr)
]

#let lum-grid() = {
  let vals = (55%, 96%, 85%, 88%, 16%, 60%, 20%, 44%, 78%)
  let letters = (none, none, [A], none, none, none, [B], none, none)
  grid(
    columns: (48pt, 48pt, 48pt),
    rows: (48pt, 48pt, 48pt),
    gutter: 3pt,
    ..vals.zip(letters).map(((v, l)) => box(fill: luma(v), width: 100%, height: 100%)[
      #if l != none [
        #place(center + horizon, text(fill: if v > 50% { black } else { white }, weight: "bold")[#l])
      ]
    ]),
  )
}

#slide[
  #display-title[How much brighter is square *A* than square *B*?]
  #v(1fr)
  #align(center)[#box(fill: black, inset: 10pt, lum-grid())]
  #v(0.25em)
  #pause
  #align(center)[ #rect(width: 200pt, height: 20pt,fill: gradient.linear(luma(0%),luma(100%), angle: 0deg),stroke: 3pt+ink)]
  #pause

  #align(center)[#label(size: 1.15em)[*A* is about *4.25×* the luminance of *B*.]]
  #v(1fr)
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/crowdsourced-ranking.png",
    height: 90%,
    source: [Cleveland & McGill, 1984; Heer & Bostock, 2010.],
  )
]

#slide[
  #v(1fr)
  #note-block(title: [Position channels work when…], accent: accent-green)[
    + One spatial dimension
    + Aligned to a common scale
    + Marks kept in proximity
    + Linear scale
  ]
  #v(2fr)
][
  #pause
  #v(1fr)
  #note-block(title: […and fail when], accent: accent-red)[
    + Two plus dimensions at once
    + Baselines misaligned
    + Marks scattered apart
    + Scale non-linear
  ]
  #v(2fr)
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/mackinlay-ranking.png",
    height: 88%,
    caption: [Channels ranked by judgment accuracy for quantitative data.],
    source: [After Cleveland & McGill, 1984; Mackinlay, 1986.],
  )
]


// ────────────────────────────────────────────────────────────────────────────
== Channel Interactions
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[Channels are not read in isolation]

#let field-pts = (
  (0.35, 0.45), (1.50, 0.30), (2.65, 0.70), (3.70, 0.35), (4.80, 0.60), (5.55, 0.25),
  (0.70, 1.50), (1.95, 1.70), (3.05, 1.40), (4.15, 1.80), (5.25, 1.50),
  (0.30, 2.60), (1.45, 2.95), (2.70, 2.50), (3.95, 2.90), (5.05, 2.60), (5.70, 2.35),
  (1.05, 3.75), (2.30, 3.55), (3.45, 3.90), (4.60, 3.70), (2.95, 2.15),
)


#let pop-field(target-idx: 9, mode: "color", target: true, unit: 55pt) = box(
  width: 6.3 * unit,
  height: 4.4 * unit,
  fill: luma(85%),
)[
  #for (i, p) in field-pts.enumerate() {
    let is-t = target and i == target-idx
    let blue-circ = circle(radius: 0.34 * unit, fill: accent-blue, stroke: none)
    let red-circ = circle(radius: 0.34 * unit, fill: accent-red, stroke: none)
    let red-sq = rect(width: 0.62 * unit, height: 0.62 * unit, fill: accent-red, stroke: none)
    let m = if mode == "color" {
      if is-t { red-circ } else { blue-circ }
    } else if mode == "shape" {
      if is-t { red-circ } else { red-sq }
    } else {
      if is-t { red-circ } else if calc.even(i) { blue-circ } else { red-sq }
    }
    place(left + top, dx: p.at(0) * unit, dy: p.at(1) * unit, m)
  }
]

#focus-slide[Raise your hand when you see the #text(fill: accent-red)[red dot].]

#slide[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1.5em,
    align: center + horizon,
    [#pop-field(mode: "color", target: true, target-idx: 9) #v(0.5em) #label[Left]],
    [#pop-field(mode: "color", target: false) #v(0.5em) #label[Right]],
  )
]

#focus-slide[Which side was it on? \ Was it easy/fast to tell?]

#focus-slide[Raise your hand when you see the #text(fill: accent-red)[red dot].]

#slide[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1.5em,
    align: center + horizon,
    [#pop-field(mode: "shape", target: false) #v(0.5em) #label[Left]],
    [#pop-field(mode: "shape", target: true, target-idx: 7) #v(0.5em) #label[Right]],
  )
]

#focus-slide[Which side was it on? \ Was it easy/fast to tell?]

#focus-slide[Raise your hand when you see the #text(fill: accent-red)[red dot].]

#slide[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1.5em,
    align: center + horizon,
    [#pop-field(mode: "conj", target: true, target-idx: 14) #v(0.5em) #label[Left]],
    [#pop-field(mode: "conj", target: false) #v(0.5em) #label[Right]],
  )
]
#focus-slide[Which side was it on? \ Was it easy/fast to tell?]

#focus-slide[
  A _conjunction_ of two channels forces a serial search.
]

#focus-slide[
  An encoding is *marks* + *channels*.
  #v(0.5em)
  #small(size: 0.7em)[A good design utilized marks and channels the eye can actually read.]
]



// ────────────────────────────────────────────────────────────────────────────
== Scales
// ────────────────────────────────────────────────────────────────────────────
#focus-slide[
  How do we actually _convert_ data attributes to visual channels?
]

#focus-slide[
   *Scales*
]

#slide[
  #v(1fr)
  #note-block(title: [Scale])[
    A *scale* is a mapping from a _domain_ (values in the data) to a _range_ (values in the display).
  ]
  #v(0.8em)
  #small[Every channel you bind in an encoding gets a scale.]
  #v(2fr)
]

#let scale-pipeline() = align(center + horizon)[
  #text(size: 1.6em, fill: ink)[
    #diagram(
      node-stroke: 2.4pt + ink,
      node-inset: 16pt,
      node-corner-radius: 10pt,
      edge-stroke: 2.4pt + ink,
      label-sep: 0.5em,
      spacing: (78pt, 40pt),

      node((0, 0), [_Data_], name: <d>),
      node((1, 1), [*Axis*], shape: "rect", corner-radius: 22pt, name: <a>),
      edge(<d>, <a>, "->", label: [_scale_], label-side: center),
      pause,
      node((2, 2), [_Visual_], name: <v>),
      edge(<a>, <v>, "->", label: [_channel_], label-side: center),
      pause,
      node((1, -1), subtitle(size: 1.1em)[Encoding], stroke: none),
    )
  ]
]

#slide[
  #v(1fr)
  #scale-pipeline()
  #v(2fr)

]

#slide[
  #display-title[Scales Are Functions]
  #v(1fr)
  #align(center)[
    #grid(
      columns: (1fr, auto, 1fr),
      column-gutter: 1.6em,
      row-gutter: 1.1em,
      align: (right, center, left),
      label(size: 1.5em)[Domain], text(size: 1.3em)[$arrow.r$], label(size: 1.5em)[Range],
      [_abstract dimension_], text(size: 1.3em)[$arrow.r$], [_channel input_],
      [size of army in people], text(size: 1.3em)[$arrow.r$], [width of bar in px],
    )
  ]
  #v(2fr)
]

// TODO Scale function map from notebook

#focus-slide()[
  What properties are important for scale functions?
]

#focus-slide[
  *Linear scales*:  $v_"axis" = v_"data" dot "scale" + "bias"$
  #v(0.4em)
  #small(size: 0.7em)[
    - Equal data steps map to equal visual steps
    - Preserve proportionality
    - Sensible default
    - Issues in certain distributions]
]

#focus-slide[
  *Log scales*: $v_"axis" = log_"base" (v_"data") + "bias"$
  #v(0.4em)
  #small(size: 0.7em)[
    - Equal visual steps map to multiplication by base
    - Long tail distributions
    - Mixing very big and/or very small numbers
  ]
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/scale-linear-scatter.png",
    height: 80%,
    caption: [Exoplanets on _linear_ scale: everything piles into one corner.],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/scale-log-scatter.png",
    height: 80%,
    caption: [The same data on _log_ scale: note the grouped minor ticks.],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/scale-log-families.png",
    height: 72%,
    caption: [$y = x$ and $y = 2x$ under linear and log axes: a log scale hides a constant factor.],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/scale-log-power.png",
    height: 72%,
    caption: [On a log $y$-axis exponentials become straight lines and their base becomes a slope.],
  )
]

#focus-slide[
  $v_"axis" = log_"base" (v_"data") + "bias"$

  What about $v_"data" = 0$?
  #v(0.4em)
  #pause
  #text(fill: accent-red)[$v_"axis" = log_"base" (v_"data"+epsilon) + "bias"$]
]

#slide[
  #align(center + top)[#display-title(size: 1.4em, fill: accent-red)[Scale Breaks: Handle With Care]]
  #v(0.4em)
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    align: horizon,
    image-plate("slides/04-Grammar-of-Graphics-Assets/scale-break-1.png", height: 68%, border: false, shadow: false),
    image-plate("slides/04-Grammar-of-Graphics-Assets/scale-break-2.png", height: 68%, border: false, shadow: false),
  )
  #v(0.3em)
  #small[A break in the axis breaks the encoding. Prefer a log scale, or split into panels if you must.]
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/scale-polar.png",
    width: 92%,
    caption: [Scale and axis need not be straight lines. For instance polar coordinates are frequently more informative for certain kinds of data.],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/scale-interpolation.png",
    height: 78%,
    caption: [Interpolation choices provide different perceptions of continuity],
  )
]


// ────────────────────────────────────────────────────────────────────────────
== Color Scales
// ────────────────────────────────────────────────────────────────────────────

#let color-order() = box(width: 470pt, height: 210pt)[
  #let items = (
    (24pt, 66pt, rgb("#7a2fb0")),
    (256pt, 24pt, rgb("#1a9a3a")),
    (176pt, 118pt, rgb("#e8720c")),
    (92pt, 162pt, rgb("#f2d500")),
    (368pt, 150pt, rgb("#e01b1b")),
  )
  #for it in items {
    place(left + top, dx: it.at(0), dy: it.at(1), rect(width: 94pt, height: 46pt, fill: it.at(2), stroke: 1pt + ink))
  }
]

#slide[
  #display-title[Put these five in order from low to high.]
  #v(1fr)
  #align(center, color-order())
  #v(2fr)

]

#let swatch-row(colors, w: 62pt) = stack(
  dir: ltr, spacing: 4pt,
  ..colors.map(c => rect(width: w, height: 22pt, fill: c, stroke: 0.5pt + muted-ink)),
)


#slide[
  #display-title[Kinds of Color Scales]
  #v(1fr)
  #columns(2)[

    #align(right)[
      #text(size:45pt)[Quantitative]
      #v(10pt)
      #text(size:45pt)[Ordinal]
      #v(10pt)

      #text(size:45pt)[Diverging]
      #v(10pt)

      #text(size:45pt)[Categorical]
      #v(10pt)

    ]

    #colbreak()
    #v(10pt)
    #rect(width: 325pt, height: 22pt, fill: gradient.linear(rgb("#eff3ff"), rgb("#08519c")), stroke: 0.5pt + muted-ink)


    #v(30pt)
    #swatch-row((rgb("#eff3ff"), rgb("#bdd7e7"), rgb("#6baed6"), rgb("#3182bd"), rgb("#08519c")))

    #v(40pt)
    #swatch-row((rgb("#ca0020"), rgb("#f4a582"), rgb("#f7f7f7"), rgb("#92c5de"), rgb("#0571b0")))

    #v(40pt)
    #swatch-row((accent-blue,accent-ochre, accent-red, accent-green,accent-purple))
  ]

  #v(1fr)
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/color-families.png",
    height: 80%,
    source: [Munzner, Visualization Analysis and Design, 2014.],
  )
]

#import "@preview/lilaq:0.6.0" as lq
#let xs = range(4)

#let ys1 = (2.25, 3, 2.1, 4)
#let ys2 = (2.05, 3.3, 1.9, 4.2)

#let yerr1 = (0.2, 0.3, 0.15, 0.4)
#let yerr2 = (0.3, 0.3, 0.14, 0.7)



#slide[
  #display-title[Remind you of anything?]

  #lq.diagram(
    width: 100%,
    height:200pt,
    legend: (position: left + top),

    lq.bar(xs, ys1, offset: -0.2, width: 0.4,fill:accent-red, label: [Left]),
    lq.bar(xs, ys2, offset: 0.2, width: 0.4,fill:accent-green.lighten(15%), label: [Right]),

    lq.plot(
      xs.map(x => x - 0.2), ys1,
      yerr: yerr1,
      color: black,
      stroke: none
    ),
    lq.plot(
      xs.map(x => x + 0.2), ys2,
      yerr: yerr2,
      color: black,
      stroke: none
    )
  )]

#slide[
  #display-title()[Channels require different scales]
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/channels-ranked.png",
    height: 82%,
    source: [Munzner, Visualization Analysis and Design, 2014, Fig. 5.1.],
  )
]


// ────────────────────────────────────────────────────────────────────────────
== Axes
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[
  A *scale* is a function.\
  An *axis* is its _visual representation_.
]

#slide[
  #columns(2)[
    #v(1fr)
    #image-plate("slides/04-Grammar-of-Graphics-Assets/log-example.svg",width: 100%)
    #v(2fr)

    #colbreak()
    #v(1fr)
    - Ticks can show scale distortions
    - Gridlines are extensions of the axis
    - Axis labels fix _data units_ at the corresponding _visual units_
    #v(2fr)
  ]

]

#focus-slide[Include zero?]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/axis-zero-payrolls.png",
    height: 80%,
    source: [Huff, How to Lie with Statistics, 1954.],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/axis-zero-co2.png",
    width: 92%,
    caption: [Yearly CO#sub[2]: a zero baseline hides the trend.]
  )
]



#slide[
  #display-title[Size axes should almost always starts at zero.]
  #figure({
    show: lq.layout // special layout rule

    grid(
      columns: 2,
      row-gutter: 1em,
      column-gutter: 1em,

      lq.diagram(
        width: 100%,
        height:300pt,
        legend: none,

        lq.bar(xs, ys1, offset: -0.2, width: 0.4,fill:accent-green, label: [Left]),
        lq.bar(xs, ys2, offset: 0.2, width: 0.4,fill:accent-ochre.lighten(25%), label: [Right]),


      ),

      lq.diagram(
        width: 100%,
        height:300pt,
        legend: none,
        ylim:(1.85,4.25),
        lq.bar(xs, ys1, offset: -0.2, width: 0.4,fill:accent-green, label: [Left]),
        lq.bar(xs, ys2, offset: 0.2, width: 0.4,fill:accent-ochre.lighten(25%), label: [Right]),


      )
    )
  })

]

// ────────────────────────────────────────────────────────────────────────────
== From Grammar to Language
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[
  Once you learn the _grammar_ of graphics.
  #v(0.5em)
  You still need to develop the skills to _speak the language fluently_.
]

// ────────────────────────────────────────────────────────────────────────────
== Distributions
// ────────────────────────────────────────────────────────────────────────────

#focus-slide[
  Showing *aggregates* and *distributions*.
  #v(0.4em)
  #small(size: 0.7em)[Frequently we need a single mark to represent multiple data items.]
]

#slide[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1.2em,
    align: horizon,
    image-plate("slides/04-Grammar-of-Graphics-Assets/dist-error-bars.png", height: 72%, caption: [Bar + error bar]),
    image-plate("slides/04-Grammar-of-Graphics-Assets/dist-ci-band.png", height: 72%, caption: [Line + confidence band]),
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/dist-boxplot.png",
    height: 80%,
    caption: [The Tukey box plot: median, quartiles, and whiskers at 1.5 $times$ IQR.],
  )
]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/dist-violin.png",
    height: 78%,
    caption: [Violin plot: the full density, at the cost of precision.],
  )
]

#slide[
  #columns(2)[
    #image-plate(
      "slides/04-Grammar-of-Graphics-Assets/dist-histogram.png",
      height: 80%,
      caption: [Histogram density],
    )
    #colbreak()
    #image-plate(
      "slides/04-Grammar-of-Graphics-Assets/hexbin.png",
      height: 80%,
      caption: [Hex Bin Histogram],
    )
  ]
]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/mixed-historgram.png",
    height: 85%,
    caption: [Mixed marks density visualization],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/cat-histogram.png",
    height: 85%,
    caption: [Categorical histogram with hierarchical clusters],
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/dist-opacity.png",
    height: 78%,
    caption: [_Visual Aggregation_: Overplotting transparent, jittered points let density show through a crowded strip.],
  )
]


#slide[
  #display-title()[Think about categorical ordering]


  #let ys3 = (3,2.5,2.0,3.75)
  #let ys4 = (2.5,2.23,2.5,4.35)


  #lq.diagram(
    width: 100%,
    height:300pt,
    legend: none,
    xaxis: (format-ticks: none),
    lq.bar(xs, ys1, offset: -0.24, width: 0.15,fill:luma(66%)),
    lq.bar(xs, ys2, offset: +0.24, width: 0.15,fill:luma(33%)),
    lq.bar(xs, ys3, offset: +0.08, width: 0.15,fill:luma(85%)),
    lq.bar(xs, ys4, offset: -0.08, width: 0.15,fill:luma(0%)),
  )
]

#slide[
  #display-title()[Think about categorical ordering]


  #let ys3 = (3,2.5,2.0,3.75)
  #let ys4 = (2.5,2.23,2.5,4.35)


  #lq.diagram(
    width: 100%,
    height:300pt,
    legend: none,
    xaxis: (format-ticks: none),
    lq.bar(xs, ys1, offset: +0.08, width: 0.15,fill:luma(66%)),
    lq.bar(xs, ys2, offset: -0.08, width: 0.15,fill:luma(33%)),
    lq.bar(xs, ys3, offset: +0.24, width: 0.15,fill:luma(85%)),
    lq.bar(xs, ys4, offset: -0.24, width: 0.15,fill:luma(0%)),
  )
]

#slide()[
  #display-title()[Think about categorical ordering]

  #image-plate("slides/04-Grammar-of-Graphics-Assets/ordering.png",height: 85%)
]


#slide[
  #columns(4)[
    #lq.diagram(
      width: 100%,
      height:300pt,
      legend: none,
      xaxis: (
        ticks: range(0, 4).zip(([April], [May], [June], [July],))
      ),
      lq.bar(xs, ys1, offset: -0.16, width: 0.3,fill:accent-ochre.lighten(25%)),
      lq.bar(xs, ys2, offset: +0.16, width: 0.3,fill:accent-green),
    )
    #colbreak()
    #pause
    #lq.diagram(
      width: 100%,
      height:300pt,
      legend: none,
      xaxis: (
        ticks: range(0, 4).zip(([April], [May], [June], [July],).map(rotate.with(-90deg, reflow: true)))
      ),
      lq.bar(xs, ys1, offset: -0.16, width: 0.3,fill:accent-ochre.lighten(25%)),
      lq.bar(xs, ys2, offset: +0.16, width: 0.3,fill:accent-green),
    )
    #colbreak()
    #pause
    #lq.diagram(
      width: 100%,
      height:300pt,
      legend: none,
      xaxis: (
        ticks: range(0, 4).zip(([April], [May], [June], [July],).map(rotate.with(-45deg, reflow: true)))
      ),
      lq.bar(xs, ys1, offset: -0.16, width: 0.3,fill:accent-ochre.lighten(25%)),
      lq.bar(xs, ys2, offset: +0.16, width: 0.3,fill:accent-green),
    )
    #colbreak()
    #pause
    #lq.diagram(
      width: 100%,
      height:300pt,
      legend: none,
      yaxis: (
        ticks: range(0, 4).zip(([April], [May], [June], [July],))
      ),
      xaxis: (ticks: range(0, 5)),
      lq.hbar(ys1,xs, offset: -0.16, width: 0.3,fill:accent-ochre.lighten(25%)),
      lq.hbar(ys2,xs, offset: +0.16, width: 0.3,fill:accent-green),
    )

  ]

]

#slide()[
  #let weierstrass(x, k: 8) = {
    range(k).map(k => calc.pow(0.5, k) * calc.cos(calc.pow(5, k) * x)).sum()
  }

  #let xs = lq.linspace(-0.5, .5, num: 1000)
  #let xs-fine = lq.linspace(-0.05, 0, num: 1000)

  #show: lq.set-grid(stroke: none)

  #lq.diagram(
    width: 100%,
    height: 300pt,
    ylim: (0, 2),
    margin: (x: 2%),

    lq.plot(xs, weierstrass, mark: none),
  )
]

#slide()[
  #let weierstrass(x, k: 8) = {
    range(k).map(k => calc.pow(0.5, k) * calc.cos(calc.pow(5, k) * x)).sum()
  }

  #let xs = lq.linspace(-0.5, .5, num: 1000)
  #let xs-fine = lq.linspace(-0.05, 0, num: 1000)

  #show: lq.set-grid(
    stroke: 0.5pt + ink,
    stroke-sub: 0.25pt + muted-ink
  )

  #lq.diagram(
    width: 100%,
    height: 300pt,
    ylim: (0, 2),
    margin: (x: 2%),
    lq.plot(xs, weierstrass, mark: none),
  )

]

#slide()[
  #let weierstrass(x, k: 8) = {
    range(k).map(k => calc.pow(0.5, k) * calc.cos(calc.pow(5, k) * x)).sum()
  }

  #let xs = lq.linspace(-0.5, .5, num: 1000)
  #let xs-fine = lq.linspace(-0.05, 0, num: 1000)

  #show: lq.set-grid(
    stroke: 0.5pt + ink,
    stroke-sub: none,
  )
  #lq.diagram(
    width: 100%,
    height: 300pt,
    ylim: (0, 2),
    margin: (x: 2%),
    xaxis: (ticks: (-0.5,-0.25,0,0.25,0.5)),
    yaxis: (ticks: (0,0.5,1.0,1.5,2.0)),
    lq.plot(xs, weierstrass, mark: none),
  )

]

#slide()[
  #let weierstrass(x, k: 8) = {
    range(k).map(k => calc.pow(0.5, k) * calc.cos(calc.pow(5, k) * x)).sum()
  }

  #let xs = lq.linspace(-0.5, .5, num: 1000)
  #let xs-fine = lq.linspace(-0.05, 0, num: 1000)

  #show: lq.set-grid(
    stroke: 1pt + muted-ink.transparentize(50%),
    stroke-sub: (paint: muted-ink.transparentize(75%), thickness: 0.5pt, dash: "dashed"),
  )
  #lq.diagram(
    width: 100%,
    height: 300pt,
    ylim: (0, 2),
    margin: (x: 2%),
    xaxis: (ticks: none),
    yaxis: (ticks: (0,0.5,1.0,1.5,2.0)),
    lq.plot(xs, weierstrass, mark: none),
  )

]

#slide()[
  #let x = range(0,10)
  #let y1 = (3, 6, 2, 6, 5, 9, 7, 11, 9, 10)
  #let y2 = (4, 5.5, 1.2, 4.3, 6.7, 10.2, 9.5, 10.5, 11.6, 12)
  #let y3 = (2, 3.5, 2.5, 3.4, 7.8, 9.4, 8.5, 11.4, 11.2, 11.8)

  #lq.diagram(
    width:100%,
    height:300pt,
    lq.plot(x, y1, mark-size:15pt),
    lq.plot(x, y2, mark-size:15pt),
    lq.plot(x, y3, mark-size:15pt),

  )
]

#slide()[
  #let x = range(0,10)
  #let y1 = (3, 6, 2, 6, 5, 9, 7, 11, 9, 10)
  #let y2 = (4, 5.5, 1.2, 4.3, 6.7, 10.2, 9.5, 10.5, 11.6, 12)
  #let y3 = (2, 3.5, 2.5, 3.4, 7.8, 9.4, 8.5, 11.4, 11.2, 11.8)

  #lq.diagram(
    width:100%,
    height:300pt,
    lq.plot(x, y1, mark-size:0pt,stroke:3pt),
    lq.plot(x, y2, mark-size:0pt,stroke:3pt),
    lq.plot(x, y3, mark-size:0pt,stroke:3pt),

  )
]

#slide()[
  #let x = range(0,10)
  #let y1 = (3, 6, 2, 6, 5, 9, 7, 11, 9, 10)
  #let y2 = (4, 5.5, 1.2, 4.3, 6.7, 10.2, 9.5, 10.5, 11.6, 12)
  #let y3 = (2, 3.5, 2.5, 3.4, 7.8, 9.4, 8.5, 11.4, 11.2, 11.8)

  #lq.diagram(
    width:100%,
    height:300pt,
    lq.plot(x, y1, mark-size:0pt,stroke:1.5pt),
    lq.plot(x, y2, mark-size:0pt,stroke:3pt),
    lq.plot(x, y3, mark-size:0pt,stroke:4.5pt),

  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/dist-spaghetti.png",
    width: 88%,
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/dist-small-multiples.png",
    height: 85%,
  )
]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/paths.png",
    width: 88%,
  )
]

#slide[
  #grid(
    columns: (1.15fr, 1fr),
    column-gutter: 1.4em,
    align: horizon,
    image-plate("slides/04-Grammar-of-Graphics-Assets/dist-ridgeline.png", height: 62%),
    image-plate("slides/04-Grammar-of-Graphics-Assets/dist-joydivision.png", height: 78%),
  )
]



#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-callouts.png",
    height: 80%,
    caption: [Annotate the point that matters: reference lines and a callout beat a caption.],
  )
]

#slide[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 1em,
    align: horizon,
    image-plate("slides/04-Grammar-of-Graphics-Assets/polish-table-default.png", width: 100%),
    image-plate("slides/04-Grammar-of-Graphics-Assets/polish-table-tufte.png", width: 100%),
  )
  #v(0.3em)
  #note-block(title: [ A table is a visualization])[
    - Right-align numbers
    - round to what matters
    - drop the heavy rules
    - group the rows.]
]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-ft-chart.png",
    height: 90%,
    source: [John Burn-Murdoch / Financial Times; annotated by Evan Peck.],
  )
]

#import "@preview/pinit:0.2.2": *


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-ft-chart.png",
    height: 90%,
    source: [John Burn-Murdoch / Financial Times; annotated by Evan Peck.],
  )
  #place(
    top + left,
    dx: 75pt,
    dy: 0pt,
    rect(width: 575pt, height: 85pt, stroke: 5pt + accent-green),
  )

]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-ft-chart.png",
    height: 90%,
    source: [John Burn-Murdoch / Financial Times; annotated by Evan Peck.],
  )
  #place(
    top + left,
    dx: 75pt,
    dy: 85pt,
    rect(width: 40pt, height: 225pt, stroke: 5pt + accent-green),
  )
  #place(
    top + left,
    dx: 120pt,
    dy: 275pt,
    rect(width: 475pt, height: 40pt, stroke: 5pt + accent-green),
  )

]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-ft-chart.png",
    height: 90%,
    source: [John Burn-Murdoch / Financial Times; annotated by Evan Peck.],
  )
  #place(
    top + left,
     line(start: (150pt,100pt),
            end: (150pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(
    top + left,
     line(start: (200pt,100pt),
       end: (200pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(
    top + left,
     line(start: (250pt,100pt),
       end: (250pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(
    top + left,
    line(start: (300pt,100pt),
            end: (300pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(
    top + left,
     line(start: (350pt,100pt),
            end: (350pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (400pt,100pt),
    end:   (400pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (450pt,100pt),
    end:   (450pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (500pt,100pt),
    end:   (500pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (550pt,100pt),
    end:   (550pt,287pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )

  #place(top + left,
  line(
    start: (110pt,100pt),
    end:   (550pt,100pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )

  #place(top + left,
  line(
    start: (110pt,125pt),
    end:   (550pt,125pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (110pt,150pt),
    end:   (550pt,150pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (110pt,175pt),
    end:   (550pt,175pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (110pt,200pt),
    end:   (550pt,200pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (110pt,225pt),
    end:   (550pt,225pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (110pt,250pt),
    end:   (550pt,250pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )
  #place(top + left,
  line(
    start: (110pt,275pt),
    end:   (550pt,275pt), stroke: 3pt + muted-ink.transparentize(50%)),
  )

]


#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-ft-chart.png",
    height: 90%,
    source: [John Burn-Murdoch / Financial Times; annotated by Evan Peck.],
  )

  #place(
    top + left,
    dx: 120pt,
    dy: 150pt,
    text(fill:accent-red, style:"italic",weight:"medium")[Legend?]
  )

]

#slide[
  #image-plate(
    "slides/04-Grammar-of-Graphics-Assets/polish-ft-chart.png",
    height: 90%,
    source: [John Burn-Murdoch / Financial Times; annotated by Evan Peck.],
  )

  #place(
    top + left,
    curve(
      stroke: (paint: accent-green, thickness: 4pt, cap: "round"),
      curve.move((250pt, 100pt)),
      curve.line((500pt, 125pt)),
      curve.line((565pt, 165pt)),
      curve.line((575pt, 225pt)),
      curve.line((580pt, 210pt)),
    )
  )

]


#focus-slide[
#columns(2)[
  Start simple:
  - No color
  - Get layout and content right
  #colbreak()
  #pause
  Then add detail:
  - Color
  - Animation
  - Callouts
  - etc...
]

]

#slide[
  #text(size: 100pt,style:"italic")[MAKE THE FONT BIGGER]

  #pause
  #text(size: 60pt)[
    #text(font:"Papyrus")[And not too silly]
    #pause
    #text(font:"Comic Sans MS")[or mixed]]
]


#focus-slide[
  Regarding Fonts
  #v(1fr)
  #small()[
  Sans-serif may be easier to read on screen\ modern, clean, minimalist, "techy"
  #v(1em)
  Serif better in print: traditional, authoritative]
  #v(1fr)

]

#focus-slide[
  #text(size:50pt,weight:"medium")[Make the big idea clear at a glance.]
  #pause
  #v(-1em)
  #small(size: 0.5em)[
    Detail on inspection #pause #h(5.5em) (remember context and audience)
  ]
]
