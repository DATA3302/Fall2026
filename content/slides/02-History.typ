#import "@preview/touying:0.7.4": *
#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node, shapes
#import "../wdf-slides.typ": *


#show: wdf-theme.with(
  config-info(
    title: [A History of Seeing Data],
    short-title: [DATA 3302 · History of Visualization],
    subtitle: [DATA 3302: Data Visualization],
    author: [Professor Austin P. Wright],
    institution: [Cal Poly San Luis Obispo · Fall 2026],
  ),
)

#title-slide()


== Classical Visualization
#focus-slide[Visualization is not a modern invention.]

#focus-slide[

  #small()[Discussion]

  What do you think will be the oldest kinds of data visualization?
  #v(1fr)
  What should or should not count?
  #v(1fr)


]

#slide()[
  #v(1fr)
  Numerical tablet with two types of numerical signs and the impression of two cylinder seals.

  Susa, c. 3800-3100 BC.
  #v(2fr)
  ][
    #image-plate("/slides/02-History-Assests/tablet.jpg")
  ]

#slide()[
  #v(1fr)
  Dice with modern pip layout

  Mohenjo-daro, c. 2600-1900 BCE

  #v(2fr)
  ][
    #image-plate("/slides/02-History-Assests/dice.jpg")
  ]



#slide()[
    #image-plate("/slides/02-History-Assests/pythagorean_1.png")
  ][
    #image-plate("/slides/02-History-Assests/pythagorean_2.png",caption: [Visual Proof of the Pythagorean Theorem])
  ]

  #slide()[
      #image-plate("/slides/02-History-Assests/macrobius.jpg", width: 100%, caption:[Macrobius])
    ][
      #image-plate("/slides/02-History-Assests/tree_of_life.svg", caption:[The Tree of Life])
    ][
      #image-plate("/slides/02-History-Assests/chain_of_being.jpg", caption:[The Great Chain of Being])
   ]


#slide[
  #image-plate("/slides/02-History-Assests/mappa_mundi.jpg", caption:[Mappa Mundi, c.1300])
][
  #image-plate("/slides/02-History-Assests/portolan.jpg", width: 100%, caption:[Portolan Chart with rhumb lines, c.1466])
]

#slide[
  #image-plate("/slides/02-History-Assests/galileo_moon.jpg", caption:[Galileo Survey of Lunar Surface])
][
  #image-plate("/slides/02-History-Assests/1684_france.jpg", width: 100%, caption:[Map showing improvements in surveying])
]

#focus-slide[
  #small()[Discussion]

  What makes the perfect map?

]

== The Birth of Statistical Graphics
#focus-slide[
  The Birth of Statistical Graphics
]


#slide(composer: (1fr, 1fr))[
  #image-plate(
    "/slides/02-History-Assests/playfair_chart.jpg",
    width: 100%,
    caption: [Playfair, imports and exports of England, 1700–1782],
  )
][
  #display-title[William Playfair]
  #v(0.5em)
  A Scottish engineer invents the line chart, bar chart, and later the pie chart in order to make economic trends legible at a glance.

  #v(0.5em)
  #small[Descartes' coordinate system (1637) supplied the grid he needed.]
]

#slide()[
#v(1fr)
  #quote("Information that is imperfectly acquired, is generally as imperfectly retained; and a man who has carefully investigated a printed table, finds, when done, that he has only a very faint and partial idea of what he has read; and that like a figure imprinted on sand, is soon totally erased and defaced.")
  #v(2fr)

]


#slide[
  #image-plate(
    "/slides/02-History-Assests/nightingale_mortality.jpg",
    height: 78%,
    caption: [Nightingale, Diagram of the Causes of Mortality in the Army in the East, 1858],
  )
]

#slide[
  #v(1fr)

  #display-title[John Snow]

  Plotting cholera deaths on a map of Soho pointed straight at a single water pump. This helped establish that cholera spreads through water, not "bad air."
  #v(2fr)
][
  #image-plate(
    "/slides/02-History-Assests/snow_cholera_map.jpg",
    height: 78%,
    caption: [Snow, map of cholera deaths near the Broad Street pump, 1854],
  )
]

#slide[
  #image-plate(
    "/slides/02-History-Assests/minard_1869.jpg",
    height: 78%,
    caption: [Charles Minard, Carte figurative des pertes successives de l'armée française, 1869],
  )
]

#slide()[
#v(1fr)
  #quote("As for my maps, I have heard people say that illustrative maps have been made for a long time. My maps to not just show, they also count, they calculate for the eye; that is the crucial point, the amendment I have introduced through the width of the zones in my figurative maps and through the rectangles in my graphic tableaus.")
  #v(2fr)

]


#slide[
  #display-title[W. E. B. Du Bois]
  #v(0.6em)
  #body-copy[
    For the 1900 Paris Exposition, Du Bois and his students at Atlanta University produced dozens of hand-drawn charts on income, occupation, education, and land ownership.
  ]
  #v(0.4em)
  #small[Some of the very first examples of the style of "modern graphic design".]
][
  #image-plate(
    "/slides/02-History-Assests/dubois_spiral.jpg",
    height: 85%,
    source: [W.E.B. Du Bois Data Portraits, Visualizing Black America],
  )
]

#focus-slide[
  #small()[Discussion]

  What constitutes, if anything, the difference between using visualization to _explain_ or _communicate_ data, as opposed to _discover_ or _explore_ data?

  #v(1fr)
]


== Modernist Design

#slide[
  #display-title[Otto Neurath's Isotype]
  #v(0.6em)
  A picture language meant to be understood *without needing to read*, so statistics could reach people regardless of literacy or language.

][
  #image-plate(
    "/slides/02-History-Assests/isotype_basic_1937.jpg",
    height: 85%,
    caption: [Neurath, pages from *Basic by Isotype*, 1937],
  )
]

#slide[
  #display-title[Otto Neurath's Isotype]
  #v(0.6em)
  Principles:
  + For quantities, prefer number/count to size encoding.
  + Avoid using perspective and other potential distortions of scale
  + Carefully use color, and only use different hues to communicate differences in kind.
][
  #image-plate(
    "/slides/02-History-Assests/isotype_neurath.jpg",
    height: 85%
  )
]


#slide[
  #image-plate(
    "/slides/02-History-Assests/bauhaus_dessau.jpg",
    height: 78%,
    caption: [The Bauhaus building, Dessau (Walter Gropius, 1925–1926)],
    source: [Photo: A. Savin, Wikimedia Commons, Free Art License.],
  )
]

#slide[
  #display-title[Bauhaus]

    The Bauhaus treated the *grid*, *geometric form*, and *sans-serif type* as a universal visual system. Represents the ethos of modernist design:
    + Form follows function
    + Authenticity and simplicity over decoration and convention
    + Universality of geometry and abstraction
][
  #image-plate("/slides/02-History-Assests/bauhaus.jpg")
]
#slide()[  #image-plate("/slides/02-History-Assests/1908_tube_map.jpg",caption:[1908 London Underground Map])
][  #image-plate("/slides/02-History-Assests/beck_map.jpg",caption:[Harry Beck London Underground Map])
]

#focus-slide[
  #small()[Discussion]

  Could a chart ever be neutral?
]
#focus-slide[
  #small()[Discussion]

  _Should_ a chart ever be neutral?
]


#slide[
  #v(1fr)
  #display-title()[Jacques Bertin]

  *Semiology of Graphics, 1967*: Systematization of design, first introduction of graphical grammar.

  + _Marks_: Point, Line, Area
  + _Channels_: Position, Size, Color
  + _Appropriate Mapping_: Ordered data wants value or size. Categories want shape or color.


  #v(2fr)

][
  #image-plate(
    "/slides/02-History-Assests/bertin_visual_variables.svg",
    height: 78%,
    caption: [Bertin's visual variables],
    source: [Based on Sémiologie Graphique, 1967.],
  )
]



#slide(composer: (1fr, 1fr))[
  #v(1fr)

  #display-title[John Tukey]
  #v(0.5em)
  *Exploratory Data Analysis* (1977) developed language for using visualizations to explore data, especially where you may not already know what you are looking for. Particular emphasis is placed on visualizing _uncertainty_.
  #v(0.5em)
  #small[Stem-and-leaf plots and box plots are built to be drawn quickly, by hand, while still thinking.]
  #v(2fr)

][
#v(1fr)
  #image-plate(
    "/slides/02-History-Assests/boxplot_anatomy.svg",
    width: 100%,
    caption: [Anatomy of a box plot],
  )
  #v(2fr)

]


#slide[

  #v(1fr)
#display-title[Edward Tufte]
  #v(0.6em)

    *The Visual Display of Quantitative Information* (1983) gave the field a shared design vocabulary:
    + Data-ink ratio
    + Chartjunk
    + Lie factor
    + Small multiples
    #v(2fr)

][
  #image-plate(
    "/slides/01-Intro-Assests/tufte.png",
    source: [Cover: Tufte, The Visual Display of Quantitative Information, 2nd ed.],
  )
]



== Visualization Research and Empirical Methods

#slide[
  #v(1fr)

  #display-title[Cleveland and McGill]
#v(0.6em)
#body-copy[
  In *Graphical Perception (1984)* ran controlled experiments asking people to judge quantity from different encodings and ranked the encodings by accuracy.
  #v(2fr)

]
][
  #image-plate(
    "/slides/02-History-Assests/cleveland_mcgill.png",
    height: 78%,
    caption: [Ranking of encodings by judgment accuracy],
  )
]


#focus-slide[
  #small()[Discussion]

  Why do pie charts still exist?
]


#slide[
  #display-title[Ben Shneiderman]
  #v(0.6em)
  Coined the term _"information visualization"_ at the University of Maryland's Human-Computer Interaction Lab in the early 1990s.

  #v(0.5em)
  #note-block(title: [The Visual Information-Seeking Mantra, 1996], accent: accent-ochre)[
    + Overview first.
    + Zoom and filter.
    + Details on demand.
  ]
]

#slide[
  #display-title[IEEE VIS]
  #v(0.6em)
  #body-copy[
    - *1990* — the IEEE Visualization Conference is founded, for scientific visualization.
    - *1995* — InfoVis joins as a track.
    - *2006* — VAST (visual analytics) joins.
    - *2011* — the three unify into a single conference: *IEEE VIS*.
  ]
]


#slide[
  #v(1fr)
  #display-title[Interactivity and The Web]

  Bostock, Ogievetsky, and Heer's *D3.js* has established web technologies and SVG as the predominate design medium for interactive visualization.
  #v(2fr)
][
  #image-plate("/slides/02-History-Assests/nyt.png",height: 60%,caption:[Major outlets such as the New York Times have placed substantial emphasis on interactive data visualization in journalism.])
]


== Looking to the Future

#focus-slide[
  #small()[Discussion:]

  How do you think *AI* currently affects, or may change in the future, how visualizations are made and understood?
]
