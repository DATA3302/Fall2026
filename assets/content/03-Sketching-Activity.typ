#import "@preview/touying:0.7.4": *
#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node, shapes
#import "wdf-slides.typ": *

#let ex = "03-Sketching-Activity-Assests"


#show: wdf-theme.with(
  config-info(
    title: [Sketching Activity],
    short-title: [DATA 3302 · Sketching Activity],
    subtitle: [DATA 3302: Data Visualization],
    author: [Professor Austin P. Wright],
    institution: [Cal Poly San Luis Obispo · Fall 2026],
  ),
)

#title-slide()


#focus-slide()[
  How many ways can you visualize these two numbers:

  #columns(2)[
    #big-number(75,none)
    #colbreak()
    #big-number(37,none)

  ]
  #v(1fr)

]


#focus-slide()[
  Sketching is a quick, inexpensive, disposable way of generating, evaluating, and sharing ideas.
  #small()[Buxton, Sketching User Experiences, 2007]
]

#focus-slide()[
  Consult examples early, repeated exposure to examples improves creativity.

  #small()[Kulkarni, 2012]
]


#focus-slide()[
  After you know the norms and the rules you must learn _how to break them_
]


#focus-slide()[
  How many *more* ways can you visualize these two numbers:

  #columns(2)[
    #big-number(75,none)
    #colbreak()
    #big-number(37,none)

  ]

  #small()[If you’re stuck, introduce a
  constraint: one line, only
  black/white, only round
  objects, etc.]
  #v(1fr)

]


#focus-slide()[
  Some examples


  #small()[https://blog.visual.ly/45-ways-to-communicate-two-quantities/]

]

== 45 Ways to Communicate Two Quantities

#slide()[
  #image-plate(ex + "/m01-writing-number-notation.png", height: 8cm, caption: [Number notation])
]

#slide()[
  #image-plate(ex + "/m02-squares.png", height: 8cm, caption: [Squares])
]

#slide()[
  #image-plate(ex + "/m03-repeated-icon.png", height: 8cm, caption: [Repeated icon])
]

#slide()[
  #image-plate(ex + "/m04-positional-squares.png", height: 8cm, caption: [Positional squares])
]

#slide()[
  #image-plate(ex + "/m05-bars.png", height: 8cm, caption: [Bars])
]

#slide()[
  #image-plate(ex + "/m06-line-graph.png", height: 8cm, caption: [Line graph])
]

#slide()[
  #image-plate(ex + "/m07-percentage-bars.png", height: 8cm, caption: [Percentage bars])
]

#slide()[
  #image-plate(ex + "/m08-spliced-bar.png", height: 8cm, caption: [Spliced bar])
]

#slide()[
  #image-plate(ex + "/m09-proportion.png", height: 8cm, caption: [Proportion])
]

#slide()[
  #image-plate(ex + "/m11-squares-merged.png", height: 8cm, caption: [Squares merged])
]

#slide()[
  #image-plate(ex + "/m12-percentages-in-squares.png", height: 8cm, caption: [Percentages in squares])
]

#slide()[
  #image-plate(ex + "/m13-pie-charts.png", height: 8cm, caption: [Pie charts])
]

#slide()[
  #image-plate(ex + "/m16-semi-circle-areas.png", height: 8cm, caption: [Semi-circle areas])
]

#slide()[
  #image-plate(ex + "/m17-circle-external-ring.png", height: 8cm, caption: [Circle and external ring])
]

#slide()[
  #image-plate(ex + "/m18-co-centered-circles.png", height: 8cm, caption: [Co-centered circles])
]

#slide()[
  #image-plate(ex + "/m19-square-divided.png", height: 8cm, caption: [Square divided])
]

#slide()[
  #image-plate(ex + "/m21-square-surfaces.png", height: 8cm, caption: [Square surfaces])
]

#slide()[
  #image-plate(ex + "/m22-shape-surfaces.png", height: 8cm, caption: [Shape surfaces])
]

#slide()[
  #image-plate(ex + "/m23-different-shape-surfaces.png", height: 8cm, caption: [Different shape surfaces])
]

#slide()[
  #image-plate(ex + "/m24-icon-surfaces.png", height: 8cm, caption: [Icon surfaces])
]

#slide()[
  #image-plate(ex + "/m25-icon-height.png", height: 8cm, caption: [Icon height])
]

#slide()[
  #image-plate(ex + "/m26-volumes.png", height: 8cm, caption: [Volumes])
]

#slide()[
  #image-plate(ex + "/m27-special-metaphors.png", height: 8cm, caption: [Special metaphors])
]

#slide()[
  #image-plate(ex + "/m28-gray-tones.png", height: 8cm, caption: [Gray tones])
]

#slide()[
  #image-plate(ex + "/m29-color-scale.png", height: 8cm, caption: [Color scale])
]

#slide()[
  #image-plate(ex + "/m30-geometric-proportions.png", height: 8cm, caption: [Geometric proportions])
]

#slide()[
  #image-plate(ex + "/m31-horizontal-vertical-proportions.png", height: 8cm, caption: [Horizontal/vertical proportions])
]

#slide()[
  #image-plate(ex + "/m32-coordinates.png", height: 8cm, caption: [Coordinates])
]

#slide()[
  #image-plate(ex + "/m34-geographic-coordinates.png", height: 8cm, caption: [Geographic coordinates])
]

#slide()[
  #image-plate(ex + "/m35-values-associated-countries.png", height: 8cm, caption: [Values associated to countries])
]

#slide()[
  #image-plate(ex + "/m36-density.png", height: 8cm, caption: [Density])
]

#slide()[
  #image-plate(ex + "/m37-percentages-density.png", height: 8cm, caption: [Percentages / density])
]

#slide()[
  #image-plate(ex + "/m38-dashed.png", height: 8cm, caption: [Dashed])
]

#slide()[
  #image-plate(ex + "/m39-nodes-connections.png", height: 8cm, caption: [Nodes and connections])
]

#slide()[
  #image-plate(ex + "/m40-parameters-function.png", height: 8cm, caption: [Parameters of a function])
]

#slide()[
  #image-plate(ex + "/m41-harmonic-frequencies.png", height: 8cm, caption: [Harmonic frequencies])
]

#slide()[
  #image-plate(ex + "/m45-fat-fonts.png", height: 8cm, caption: [Fat fonts])
]
