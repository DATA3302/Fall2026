#import "@preview/touying:0.7.4": *
#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node, shapes
#import "wdf-slides.typ": *


#show: wdf-theme.with(
  config-info(
    title: [Welcome!],
    short-title: [DATA 3302 · Introduction],
    subtitle: [DATA 3302: Data Visualization],
    author: [Professor Austin P. Wright],
    institution: [Cal Poly San Luis Obispo · Fall 2026],
  ),
)

#title-slide(
  attribution: [Slides adapted from Ayaan Kazerouni, Jon Froehlich, and Polo Chau.],
)



#slide(composer: (1.1fr, 0.9fr))[
  #display-title[Nice to meet you!]
  #v(0.5em)

  #subtitle[My name is *Austin Wright*.]

  I am from *San Luis Obispo*.

  I completed my PhD at *Georgia Tech*.

  I am excited to be teaching at *Cal Poly*.
][
  #image-plate("01-Intro-Assests/austin_grad.jpg")
]

#slide(composer: (0.85fr, 1.15fr))[
  #v(1fr)

  My research builds tools that help scientists *see* their data.

  I helped build *PIXLISE*, an open-source tool for analyzing chemical and mineral data beamed back from NASA's Perseverance rover on Mars.
    #v(1fr)
][
    #v(2fr)
  #image-plate(
    "01-Intro-Assests/nasa_data.png",
    width: 100%,
    caption: [PIXLISE's analysis interface.],
  )
    #v(2fr)
]

#focus-slide[Data and visualizations are everywhere.]

#slide()[
#v(1fr)
  We produce a seemingly *exponentially increasing* amount of data each year.
  #v(2fr)
][
  #image-plate(
    "01-Intro-Assests/global_data.png",
    caption: [Global data generated annually, in zettabytes.],
  )
]

#focus-slide[
  How do we help humans make sense of all that data?

  #v(0.65em)
  #small(size: 0.7em)[While information and computing capacity increases, human cognitive capacity remains relatively constant.]
]

#slide[
  #align(center)[#display-title(size: 1.3em)[Education]]
  #v(0.6em)
  #grid(
    columns: (1fr, 1fr),
    gutter: 1.2em,
    align: horizon,
    image-plate(
      "01-Intro-Assests/education_data.png",
      height: 68%,
      source: [Cal Poly course-equity dashboards.],
    ),
    image-plate(
      "01-Intro-Assests/grade_data.png",
      height: 68%,
      source: [Cal Poly course-equity dashboards.],
    ),
  )
]


#slide[
  #align(center)[#display-title(size: 1.3em)[Health and medicine]]
  #v(0.6em)
  #grid(
    columns: (1fr, 1fr),
    gutter: 1.2em,
    align: horizon,
    image-plate(
      "01-Intro-Assests/apple_watch.png",
      height: 64%,
    ),
    image-plate("01-Intro-Assests/health_data.png", height: 64%),
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/climate_bands.png",
    height: 78%,
    border: false,
    shadow: false,
    caption: [Each stripe is one year's average global temperature, 1850–present.],
    source: [Warming Stripes, Ed Hawkins and Ellie Highwood.],
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/covid.png",
    source: [Source plate: COVID Tracking Project and the BBC.],
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/flatten_the_curve.jpg",
    caption: [Our discourse is driven by the visual],
    source: [Adapted from the CDC.],
  )
]

#focus-slide()[
#small(size: 0.7em)[What is visualization?]


  The study of mapping *data elements* to *visual elements* to clearly communicate *true* and *interesting* properties of data.
]


#focus-slide[Why does it matter?]

#focus-slide(accent: accent-red)[
  Failure of communication can lead to failure of action.
]

#slide[
  #image-plate(
    "01-Intro-Assests/challenger.png",
    caption: [Space Shuttle Challenger, January 28, 1986.],
  )
]

#slide[
  #v(0.6em)

  January 28, 1986

  Morning temperature: 31°F

  A rubber O-ring failed.
][
  #image-plate(
    "01-Intro-Assests/o_ring.png",
    source: [Source plate: Edward R. Tufte, Visual Explanations.],
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/feynman.png",
    height: 75%,
    caption: [Physicist Richard Feynman demonstrated the O-ring's brittleness in ice water during the Rogers Commission hearings.],
  )
]

#slide[
  #v(1fr)
  #image-plate(
    "01-Intro-Assests/concern.png",
    height: 55%,
    caption: [Engineers recommended not launching the night before!],
  )
  #v(1fr)

]

#slide[
  #image-plate(
    "01-Intro-Assests/bad_vis_legend.png",
    caption: [The original field-joint display used to brief NASA managers.],
    source: [Source plate: Morton Thiokol, Inc.],
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/bad_vis.png",
    caption: [The fuller flight history—24 missions of O-ring damage, buried in the noise.],
    source: [Source plate: Morton Thiokol, Inc.],
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/challenger_tufte-9937.png",
    caption: [A redesign makes the relationship between launch temperature and O-ring damage directly visible.],
    source: [Source plate: Edward R. Tufte, Visual and Statistical Thinking.],
  )
]

#focus-slide[Why not just look at the numbers?]

#slide[
  #align(center)[
    #display-title[Count the number of *sevens*.]
  ]
]

#slide[
  #align(center)[
    #display-title[Count the number of *sevens*.]
    #v(1fr)
    #body-copy(size: 1.5em, fill: muted-ink)[
      697042593474919\
      358728294954642\
      424439685400872\
      235689798144721
    ]
    #v(1fr)
  ]
]

#focus-slide()[
   How many sevens were there?
]


#slide[
  #align(center)[
    #display-title[Count the number of *sevens*.]
    #v(1fr)
    #body-copy(size: 1.5em, fill: muted-ink)[
      69#text(weight: "black",fill: accent-red)[7]0425934#text(weight: "black",fill: accent-red)[7]4919\
      358#text(weight: "black",fill: accent-red)[7]28294954642\
      4244396854008#text(weight: "black",fill: accent-red)[7]2\
      235689#text(weight: "black",fill: accent-red)[7]98144#text(weight: "black",fill: accent-red)[7]21
    ]
    #v(1fr)
  ]

]


#slide[
  #image-plate(
    "01-Intro-Assests/spreadsheet.png",
    height: 78%,
    caption: [Numbers alone can be precise while remaining difficult to inspect.],
  )
]

#slide[
  #image-plate("01-Intro-Assests/minard.png", source: [Source plate: Charles Minard, 1861.])
]

#slide[
  #image-plate(
    "01-Intro-Assests/dubois.png",
    height: 78%,
    source: [Source plate: W. E. B. Du Bois's Data Portraits, 2018.],
  )
]

#slide[
  #image-plate(
    "01-Intro-Assests/cholera_data.png",
    caption: [Using geographic context to identify the Broad Street pump in the 1855 London cholera outbreak.],
    source: [Edward R. Tufte, Visual and Statistical Thinking.],
  )
]

#slide[
  #image-plate("01-Intro-Assests/nba_data.png", source: [Kirk Goldsberry.])
]

#slide[
  #image-plate("01-Intro-Assests/data_beads.png", source: [Data Beads, Eszter Katona and Mihály Minkó, 2024.])
]

#slide()[
  #image-plate(
    "01-Intro-Assests/tufte.png",
    source: [Cover: Tufte, The Visual Display of Quantitative Information, 2nd ed.],
  )
]

#focus-slide[
  This is a *design* class.

  So get creative.
]

== Logistics
#focus-slide()[
  Read the dang syllabus!

  #text(font:code-font)[data3302.github.io/Fall2026]
]



== Contact and office hours

#note-block(title: [Professor Austin P. Wright])[
  #small[
    *Email:* `awrigh20@calpoly.edu`\
    *Office:* 14-222\
    *Office hours:* Monday 11–12; Monday, Tuesday, and Wednesday 1–2\
    *Appointments:* Calendly link in the syllabus\
  ]
]

== Your grade

#cols[
  #note-block(title: [Eight course assessments], accent: accent-green)[
    #small(size: 0.78em)[Participation, two midterms, and Assignments 1–5.]
  ]
][
  #note-block(title: [Final project], accent: accent-ochre)[
    #small(size: 0.78em)[Team project for 2–4 students, supported by check-ins and intermediate deliverables.]
  ]
]
#v(1fr)
#grid(
  columns: (1fr, 1fr, 1fr, 1fr),
  gutter: 0.8em,
  big-number([3], [Mastery], accent: accent-green),
  big-number([2], [Good but incomplete], accent: accent-ochre),
  big-number([1], [Minimum sufficient], accent: rgb("#7d6d55")),
  big-number([0], [Insufficient], accent: accent-red),
)
#v(1fr)
#small(size: 0.85em)[
  #set list(spacing: 0.34em)
  - Assignments may be revised and resubmitted through the final week of classes.
  - One of the two midterms may be retaken for full credit at the end of the course.
  - Assignments have associated in-person crits.
  - Final grade based on consistent achievement across all assessments.
]
#v(1fr)



== Generative AI policy

#cols[
  #note-block(title: [Allowed], accent: accent-green)[
    #small(size: 0.8em)[
      AI development tools may assist with code and implementation.
    ]
  ]
][
  #note-block(title: [Not allowed], accent: accent-red)[
    #small(size: 0.8em)[Generative AI may not make your writing, design, or critique decisions.]
  ]
]

#v(1fr)
#align(center)[
  #subtitle(size: 1.5em, fill:accent-red)[You are responsible for everything with your name on it.]
]
#v(2fr)

#focus-slide[
  Nothing is set in stone ... yet.

  #v(0.6em)
  #small(size: 0.7em)[The schedule is tentative. Watch course announcements and email.]
]
