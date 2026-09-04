
#import "../wdf-slides.typ": *



#show: wdf-theme.with(
  config-info(
    title: [The Data Design Processes],
    short-title: [DATA 3302 · Processes],
    subtitle: [DATA 3302: Data Visualization],
    author: [Professor Austin P. Wright],
    institution: [Cal Poly San Luis Obispo · Fall 2026],
  ),
)

#title-slide(attribution: [Slides based on Munzner, Visualization Analysis and Design, 2014])

== Why?
#focus-slide[Why involve *direct representations*?]

#slide()[
  #v(1fr)
  #display-title()[*Anscombe's Quartet*]
    #table(
      columns: 5,
      align: (left, right, right, right, right),
      stroke: none,
      inset: (x: 10pt, y: 10pt),
      table.header([], [*I*], [*II*], [*III*], [*IV*]),
      table.hline(stroke: accent-green),
      [Mean of $x$], [9.00], [9.00], [9.00], [9.00],
      [Mean of $y$], [7.50], [7.50], [7.50], [7.50],
      [Variance of $x$], [11.00], [11.00], [11.00], [11.00],
      [Variance of $y$], [4.13], [4.13], [4.12], [4.12],
      [Correlation], [0.82], [0.82], [0.82], [0.82],[Regression Fit], [$y = 3 + 0.5 x$], [$y = 3 + 0.5 x$], [$y = 3 + 0.5 x$], [$y = 3 + 0.5 x$],
    )
    #v(2fr)

  ]



#focus-slide()[
  #small[Take 60 seconds:]

  All four datasets above share the same summary statistics. Sketch what you expect their scatterplots to look like.
]


#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/anscombe-quartet.svg",
    height: 85%,
    source: [Anscombe, "Graphs in Statistical Analysis," 1973],
  )
]

#focus-slide[Why is this *difficult*?]


#let cycle-diagram() = align(center + horizon)[
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
#slide[
  #cycle-diagram()
]

#focus-slide()[
  #small[Discuss]

Can you think of an example of a chart or statistic that led someone to an erroneous interpretation of the world?
#v(1fr)

  Where in this loop did the gap open up?
  #v(1fr)
]



== Data Abstraction
#focus-slide[Data Abstraction]

#focus-slide[Conceptual Model vs Data Model]


#slide()[
  #v(1fr)
  #note-block(title: [Data Types])[
    + Items / Hard Index
    + Attributes / Variables
    + Links / Relations
    + Positions / Soft Index
    + Grids / Topologies
  ]
  #v(2fr)
  ][
    #pause
    #v(1fr)
    #note-block(title: [Dataset Types])[
      + Tables
      + Networks
      + Fields
      + Geometry
      + Sets
    ]
    #v(2fr)
    ]

    #slide()[
      #v(1fr)
      #note-block(title: [Dataset Availability])[
        + Static / Offline
        + Dynamic / Online
      ]
      #v(2fr)
      ][
        #v(1fr)
        #note-block(title: [Dataset Mutability])[
          + Fixed / Immutable
          + Reactive / Mutable
        ]
        #v(2fr)
        ]

#slide()[
  #display-title()[A City Bike-Share System]
  #v(0.5em)
  #body-copy[Riders check out *bikes* from *stations* scattered across downtown. Every *trip* links a start station to an end station. Each station reports its *GPS coordinates*.

  Your task is to build a continuously updated citywide *demand heatmap*. You start by identifying the data abstractions.]
  #v(0.6em)
  #note-block(title: [Identify the Types])[
    + Dataset Type?
    + Data Types?
    + Dataset Availability/Mutability?
  ]
]

#focus-slide[Attribute Types]
#slide()[
  #v(1fr)
  #note-block(title: [Attribute Types])[
    + Categorical / Nominal
    + Ordinal
    + Quantitative (Interval)
    + Quantitative (Ratio)
  ]
  #v(2fr)
  ][ #pause
    #v(1fr)
    #note-block(title: [Order Directions])[
      + Sequential
      + Diverging
      + Cyclic
    ]
    #v(2fr)
    ]

  #slide()[
    #image-plate(
      "slides/03-Proccess-Assets/munzner-spreadsheet.png",
      width: 100%,
      caption: [Example Dataset of Orders with Attribute Types],
    )
  ]

#focus-slide()[Data Semantics]
#slide()[
  #v(1fr)
  #note-block(title: [Abstract Semantics])[
    + Key / Index
    + Value / Measure
  ]
  #v(2fr)
  ][
    #pause
    #v(1fr)
    #note-block(title: [Structural Semantics])[
      + Spatial
      + Temporal
      + Field
      + Vector
    ]
    #v(2fr)
    ]

    #slide()[
      #image-plate(
        "slides/03-Proccess-Assets/munzner-data-abstraction-overview.png",
        height: 95%,
        source: [Munzner 2014, Figure 2.1],
      )
    ]

#focus-slide()[
  #small[Determine the *Semantics* of each variable below as either a *Key* or *Value*, then add any relevant structural semantics (Spatial / Temporal / Field / Vector) if one applies:]
  #v(1fr)
  #text(size:0.5em)[#note-block(title: [Variables])[
    + Student ID
    + Exam Score
    + Timestamp of Submission
    + Zip Code
  ]]
  #v(2fr)

]


#focus-slide[
  Data Transformations and Tidy Data
]

#focus-slide()[Data is rarely ready to visualize right away, you'll often need to *transform*, *merge*, or *tidy* it first.]

#slide()[
  #display-title()[The Relational Model]
  #note-block(title: [Relational Data])[
    + *Table*: Dataset
    + *Row*: Record
    + *Column*: variable (name + type)
    + *Schema*: Table's column names & types
    + *Database*: Set of tables
  ]
][
  #v(1fr)
  #align(center)[
    #table(
      columns: 3,
      align: (left, right, right),
      stroke: none,
      inset: (x: 12pt, y: 8pt),
      table.header([*Team*], [*Wins*], [*Losses*]),
      table.hline(stroke: accent-green),
      [Warriors], [10], [4],
      [Kings], [7], [7],
      [Lakers], [3], [11],
    )
  ]
  #v(0.5em)
  #small[Each *row* is a record, each *column* is a variable, each *cell* is a value.]
  #v(1fr)
]

#slide()[
  #display-title()[Relational Algebra]
  #v(0.1em)
  #small[Table(s) in, table out.]
  #v(0.4em)
  #note-block(title: [Core Operations])[
    + *select* — choose a set of columns
    + *filter* — remove unwanted rows
    + *order by* — sort records by column values
    + *group by* + aggregate (`sum`, `mean`, …) — partition, then summarize
    + *join* / *union* — combine multiple tables
  ]
  #v(0.2em)
  #small[Implemented by SQL, pandas, polars, _arquero_, and similar table libraries.]
]


#slide()[
  #display-title()[Select & Filter]
  #v(0.3em)
  #align(center)[
    #table(
      columns: 3, stroke: none, inset: (x: 10pt, y: 6pt), align: center,
      table.header([*A*], [*B*], [*C*]), table.hline(stroke: rule),
      [x], [1], [4],
      [y], [2], [5],
      [z], [3], [6],
    )
  ]
  #v(0.5em)
  #grid(
    columns: (1fr, 1fr), column-gutter: 2em,
    align(center)[
      #code(size: 0.85em)[select "A", "B"]
      #v(0.3em)
      #table(
        columns: 2, stroke: none, inset: (x: 10pt, y: 6pt), align: center,
        table.header([*A*], [*B*]), table.hline(stroke: accent-green),
        [x], [1], [y], [2], [z], [3],
      )
    ],
    align(center)[
      #code(size: 0.85em)[filter "B" % 2 = 1]
      #v(0.3em)
      #table(
        columns: 3, stroke: none, inset: (x: 10pt, y: 6pt), align: center,
        table.header([*A*], [*B*], [*C*]), table.hline(stroke: accent-green),
        [x], [1], [4], [z], [3], [6],
      )
    ],
  )
]

#slide()[
  #display-title()[Group By + Aggregate]
  #v(0.3em)
  #align(center)[#code(size: 0.85em)[group by "A"; aggregate mean]]
  #v(0.5em)
  #grid(
    columns: (auto, auto, auto), column-gutter: 1.6em, align: center,
    align(center)[
      #small[Original]
      #table(
        columns: 3, stroke: none, inset: (x: 8pt, y: 5pt), align: center,
        table.header([*A*], [*B*], [*C*]), table.hline(stroke: rule),
        [x], [1], [4], [y], [2], [5], [z], [3], [6],
        [x], [7], [9], [x], [8], [10], [y], [11], [12],
      )
    ],
    text(size: 1.5em)[→],
    align(center)[
      #small[Aggregated]
      #table(
        columns: 3, stroke: none, inset: (x: 8pt, y: 5pt), align: center,
        table.header([*A*], [*B*], [*C*]), table.hline(stroke: accent-green),
        [x], [5.33], [7.67], [y], [6.5], [8.5], [z], [3], [6],
      )
    ],
  )
]

#slide()[
  #display-title()[Combining Tables: Join]
  #v(0.3em)
  #align(center)[#code(size: 0.85em)[inner join $T_1$, $T_2$ on "A"]]
  #v(0.5em)
  #grid(
    columns: (auto, auto, auto, auto), column-gutter: 1.2em, align: center,
    align(center)[
      #small[$T_1$]
      #table(
        columns: 3, stroke: none, inset: (x: 6pt, y: 5pt), align: center,
        table.header([*A*], [*B*], [*C*]), table.hline(stroke: rule),
        [x], [1], [4], [y], [2], [5], [z], [3], [6],
      )
    ],
    align(center)[
      #small[$T_2$]
      #table(
        columns: 3, stroke: none, inset: (x: 6pt, y: 5pt), align: center,
        table.header([*A*], [*D*], [*E*]), table.hline(stroke: rule),
        [x], [7], [10], [why], [8], [11], [z], [9], [12],
      )
    ],
    text(size: 1.5em)[→],
    align(center)[
      #small[Result]
      #table(
        columns: 5, stroke: none, inset: (x: 6pt, y: 5pt), align: center,
        table.header([*A*], [*B*], [*C*], [*D*], [*E*]), table.hline(stroke: accent-green),
        [x], [1], [4], [7], [10], [z], [3], [6], [9], [12],
      )
    ],
  )
  #v(0.6em)
  #small[An *inner join* keeps only matching keys. An *outer join* keeps every key filling in missing values.

  Based on this, what would a *left join* keep?]
]

#focus-slide[Tidy Data]

#slide()[
  #display-title()[Tidy Data]
  #v(1fr)
  #note-block(title: [Rules of Tidy Data])[
    + Each *observation* is a row
    + Each *variable* is a column
    + Each *value* is a cell
  ]
  #v(2fr)

][
  #v(1fr)
  #align(center)[
    #table(
      columns: 4, stroke: none, inset: (x: 10pt, y: 6pt), align: center,
      table.header([*month*], [*temp*], [*precip*], [*wind*]),
      table.hline(stroke: accent-green),
      [January], [56.55], [0.06], [5.32],
      [February], [56.10], [0.12], [5.46],
      [March], [56.36], [0.11], [6.52],
    )
  ]
  #v(0.5em)
  #small[Tidy data relies on *both* a conceptual model (what's counts as an observation?) and a data model.]
  #v(1fr)
]

#slide()[
  #display-title()[Wide vs Narrow Tables]

  #subtitle()[Better for _data entry_ vs _data analysis_]
  #v(0.4em)
  #grid(
    columns: (1fr, 1fr), column-gutter: 2em,
    align(center)[
      #small[*Tidy*]
      #table(
        columns: 4, stroke: none, inset: (x: 8pt, y: 5pt), align: center,
        table.header([*month*], [*temp*], [*precip*], [*wind*]),
        table.hline(stroke: accent-green),
        [January], [56.55], [0.06], [5.32],
        [February], [56.10], [0.12], [5.46],
      )
    ],
    align(center)[
      #small[*Untidy*]
      #table(
        columns: 3, stroke: none, inset: (x: 8pt, y: 5pt), align: center,
        table.header([*month*], [*element*], [*value*]),
        table.hline(stroke: accent-red),
        [January], [temp], [56.55],
        [January], [precip], [0.06],
        [January], [wind], [5.32],
        [February], [temp], [56.10],
        [February], [precip], [0.12],
        [February], [wind], [5.46],
      )
    ],
  )
  #v(0.6em)
  #small[In the untidy table, a single observation is spread across several rows, and the *value* column mixes different variables. Reshaping between these forms is called *pivoting* and *unpivoting*.]
]



#focus-slide()[
  #small()[Discussion]
  #v(0.2em)
  #small[Is this table tidy? What are its variables and its observations?]
  #v(0.5em)
#text(size:25pt)[
  #align(center)[
    #table(
      columns: 6, stroke: none, inset: (x: 8pt, y: 6pt), align: center,
      table.header([*artist*], [*track*], [*date_entered*], [*wk1*], [*wk2*], [*wk3*]),
      table.hline(stroke: rule),
      [2 Pac], [Baby Don't Cry], [2000-02-26], [87], [82], [72],
      [3 Doors Down], [Kryptonite], [2000-04-08], [81], [70], [68],
      [98°], [Give Me Just One Night], [2000-08-19], [51], [39], [34],
    )
  ]
]
  #v(0.4em)
  #align(center)[#small(size: 12pt)[Weekly Billboard ranks, 2000 · _R for Data Science_, Hadley Wickham]]
  #v(1fr)
]

#focus-slide()[One person's _tidy_ is another person's *mess*]

#slide()[
  #v(1fr)
  #quote[This means that most real analyses will require at least a little tidying. You'll begin by figuring out what the underlying *variables* and *observations* are. Sometimes this is easy; other times you'll need to consult with the people who originally generated the data.]
  #v(1.2em)
  #align(right)[
    #label(size: 1em)[— Hadley Wickham]
    #linebreak() #cite(size: 0.62em)[_R for Data Science_, "Data Tidying"]
  ]
  #v(1fr)
]

#focus-slide()[Visualization (In)Dependent Transformations]


#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/imdb.png",
    width: 95%,
  )
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/imdb-raw.png",
    width: 95%,
  )
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/imdb-smoothed.png",
    width: 95%,
  )
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/imdb-smoothed-2.png",
    width: 95%,
  )
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/imdb-growth.png",
    width: 95%,
  )
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/imdb-profits.png",
    width: 95%,
  )
]


== Task Abstraction
#focus-slide[Task Abstraction]

#focus-slide[What does the _user actually do_ with the visualization?]



#slide()[
  #display-title()[*User Actions*]
  #note-block(title: [Analyze])[
    + Consume
      + Discover
      + Present
      + Enjoy #pause
    + Produce
      + Annotate
      + Record
      + Derive
  ]
][#pause
  #v(2.25em)
  #note-block(title: [Search])[
    + Target Known
      + Lookup
      + Locate
    + Target Unknown
      + Browse
      + Explore
  ]
][#pause
  #v(2.25em)
  #note-block(title: [Query])[
    + Identify
    + Compare
    + Summarize
  ]
]

// ── PROPOSED: Classify real scenarios as User Actions ───────────────────
// Learning objective: transfer the Analyze/Search/Query taxonomy to
// scenarios drawn from tools students already use, checking whether they
// can classify *novel* cases rather than just recite the list back.
// Est. time: 5 min

#focus-slide()[
  #v(-0.5em)
  #small(size:25pt)[Discussion]
  #v(1fr)
  #small(size:25pt)[For each scenario, name the action (and sub-type) being performed:]
  #v(1fr)
  #text(size:20pt)[#note-block(title: [Scenarios])[
    + Browsing the web for examples for Assignment 1
    + A doctor looking for signs of cancer in an MRI scan
    + Checking whether wildfire acreage this year exceeds last year's
    + Checking if the error bars on a bar chart in a publication match the claims in the paper
    + Screenshotting a chart from social media to put in a slide deck]
  #v(2fr)
  ]
]

#focus-slide()[
  User _Actions_ (verbs) vs User _Targets_ (nouns)
]

#slide()[
  #display-title()[*User Targets*]
  #note-block(title: [Full Dataset])[
    + Trends
    + Features
    + Outliers / Anomalies
  ]
][#pause
  #v(2.25em)
  #note-block(title: [Attributes])[
    + Single Attribute
      + Distribution
      + Paradigms
      + Extremes
    + Multiple Attributes
      + Dependency
      + Correlation
      + Similarity
  ]
]


#focus-slide()[
  #v(-0.5em)
  #small[Discussion]

  #small(size:22pt)[Imagine you are looking at a scatterplot of height vs. weight for your class. Which *user target* does each question create?]

  #text(size:26pt)[
  #note-block(title: [Questions])[
    + "Is there a relationship between height and weight?"
    + "Who is the tallest person in the room?"
    + "Are heights roughly bell-shaped, or skewed?"
    + "Are there any distinct clusters?"
  ]]
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/munzner-task-abstraction-overview.png",
    height: 95%,
    source: [Munzner 2014, Figure 3.1],
  )
]

#focus-slide()[
  How do designs support _user tasks_?
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/munzner-idioms.png",
    width: 100%,
    source: [Munzner 2014, Figure 3.7],
  )
]



#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/munzner-chained-tasks.png",
    width: 95%,
    source: [Munzner 2014, Figure 3.11],
  )
]

#slide()[
  #image-plate(
    "slides/03-Proccess-Assets/munzner-chained-tasks-2.png",
    width: 90%,
    source: [Munzner 2014, Figure 3.13],
  )
]



#let quote-attribution(name, source: none) = align(right)[
  #label(size: 1em)[— #name]
  #if source != none [#linebreak() #cite(size: 0.62em)[#source]]
]

#let sol-dot(color) = circle(radius: 5pt, fill: color, stroke: none)
#let sol-tri(color) = polygon(fill: color, stroke: none, (0pt, -6pt), (5.5pt, 5pt), (-5.5pt, 5pt))
#let sol-sq(color) = box(width: 9pt, height: 9pt, fill: color)
#let sol-x(color) = box(width: 11pt, height: 11pt)[
  #place(rotate(45deg, rect(width: 11pt, height: 2.4pt, fill: color, stroke: none)))
  #place(rotate(-45deg, rect(width: 11pt, height: 2.4pt, fill: color, stroke: none)))
]
#let sol-star(color) = text(fill: color, size: 25pt)[★]

#let sol-pts = (
  (0.3, 0.4), (1.2, 1.3), (2.0, 0.3), (0.6, 2.2),
  (1.6, 2.9), (2.9, 1.1), (3.6, 2.2), (0.2, 3.6),
  (4.4, 0.6), (4.9, 2.6), (1.0, 4.4), (3.3, 3.9),
  (5.4, 1.6), (2.4, 4.6), (4.0, 4.4),
  (2.5, 2.3), (4.1, 1.6), (0.9, 1.5), (3.0, 4.7),
  (1.9, 1.8), (3.5, 3.0),
  (2.7, 3.2),
)
#let sol-kind(i) = {
  if i < 15 { "bad" }
  else if i < 19 { "ok" }
  else { "good" }
}

#let sol-tried(i) = {
  if calc.rem(i,2) != 0 { "untried" }
  else { sol-kind(i) }
}

#let sol-mark(kind) = {
  if kind == "bad" { sol-sq(accent-red) }
  else if kind == "ok" { sol-dot(accent-ochre) }
  else if kind == "good" { sol-x(accent-green) }
  else { sol-tri(muted-ink) }
}
#let sol-known-idx = (0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 13, 15, 16, 17, 18, 19, 20, 21)
#let sol-consider-idx = (3, 4, 5, 6, 15, 16, 17, 19, 20, 21)

#let solution-space(classify: false,partial-classify:false, narrow: false) = align(center)[
  #fletcher.diagram(
    spacing: if narrow { (34pt, 34pt) } else { (44pt, 44pt) },
    node-stroke: none,
    ..if narrow {
      (
        node(enclose: sol-known-idx.map(i => "p" + str(i)), fill: none, stroke: rule, corner-radius: 100pt, inset: 20pt, name: <known>),
        node(enclose: sol-consider-idx.map(i => "p" + str(i)), fill: none, stroke: muted-ink, corner-radius: 100pt, inset: 14pt, name: <consider>),
        node(enclose: ("p21",), fill: none, stroke: (paint: accent-red, thickness: 1.2pt), corner-radius: 100pt, inset: 9pt, name: <selected>),
      )
    } else { () },
    ..sol-pts.enumerate().map(((i, p)) => node(
      (p.at(0), p.at(1)),
      sol-mark(if classify { sol-kind(i) } else if partial-classify {sol-tried(i)} else { "plain" }),
      stroke: none, inset: 0pt, name: "p" + str(i),
    )),
  )
]

#let sol-legend = align(center)[
  #stack(dir: ltr, spacing: 2.2em,
    stack(dir: ltr, spacing: 0.5em, sol-sq(muted-ink), small[Poor]),
    stack(dir: ltr, spacing: 0.5em, sol-dot(accent-ochre), small[Ok]),
    stack(dir: ltr, spacing: 0.5em, sol-x(accent-green), small[Good])
  )
]

#let tree-dot(color: ink, r: 3.5pt) = circle(radius: r, fill: color, stroke: none)

#let it-nodes = (
  (n: "i1", p: (2.6cm, -0.8cm)),
  (n: "i2", p: (2.6cm, -3.6cm)),
  (n: "i3", p: (2.6cm, -6.4cm)),
  (n: "i4", p: (2.6cm, -9cm)),
  (n: "i5", p: (2.6cm, -11.6cm)),
  (n: "i1a", p: (5.0cm, -0.3cm), stage: 2),
  (n: "i1b", p: (5.0cm, -1.5cm), stage: 2, muted: true),
  (n: "i2a", p: (5.0cm, -3cm), stage: 2, muted: true),
  (n: "i2b", p: (5.0cm, -3.6cm), stage: 2, muted: true),
  (n: "i2c", p: (5.0cm, -4.2cm), stage: 2, muted: true),
  (n: "i3a", p: (5.0cm, -5.9cm), stage: 2),
  (n: "i3b", p: (5.0cm, -6.9cm), stage: 2, muted: true),
  (n: "i4a", p: (5.0cm, -9cm), stage: 2, muted: true),
  (n: "i5a", p: (5.0cm, -11cm), stage: 2),
  (n: "i5b", p: (5.0cm, -12.2cm), stage: 2, muted: true),
  (n: "i1a1", p: (7.2cm, -0.1cm), stage: 2),
  (n: "i3a1", p: (7.2cm, -5.7cm), stage: 2),
  (n: "i5a1", p: (7.2cm, -10.8cm), stage: 2),
  (n: "i1a1x", p: (9.4cm, 0cm), stage: 4),
  (n: "i3a1x", p: (9.4cm, -5.55cm), stage: 4, muted: true),
  (n: "i3a1y", p: (9.4cm, -5.9cm), stage: 4),
  (n: "i5a1x", p: (9.4cm, -10.7cm), stage: 4),
  // fill-in growth on the branches that don't reach the edge, so depths 2-3
  // stay dense rather than leaving open gaps around idea 2 and idea 4
  (n: "i1b1", p: (7.2cm, -1.2cm), stage: 2, muted: true),
  (n: "i1b2", p: (7.2cm, -1.8cm), stage: 2, muted: true),
  (n: "i2a1", p: (7.2cm, -2.9cm), stage: 2, muted: true),
  (n: "i2b1", p: (7.2cm, -3.6cm), stage: 2, muted: true),
  (n: "i2c1", p: (7.2cm, -4.0cm), stage: 2, muted: true),
  (n: "i2c2", p: (7.2cm, -4.4cm), stage: 2, muted: true),
  (n: "i3b1", p: (7.2cm, -6.9cm), stage: 2, muted: true),
  (n: "i4a1", p: (7.2cm, -8.8cm), stage: 2, muted: true),
  (n: "i4a2", p: (7.2cm, -9.2cm), stage: 2, muted: true),
  (n: "i5b1", p: (7.2cm, -12.0cm), stage: 2, muted: true),
  (n: "i5b2", p: (7.2cm, -12.4cm), stage: 2, muted: true),
  (n: "e1", p: (11.6cm, 0cm), stage: 4),
  (n: "m1", p: (11.6cm, -10.7cm), stage: 4),
  (n: "m2", p: (13.8cm, -10.6cm), stage: 4),
  (n: "L1", p: (11.6cm, -5.9cm), stage: 4),
  (n: "L2", p: (13.8cm, -5.8cm), stage: 4),
  (n: "L3", p: (16.0cm, -5.8cm), stage: 4),
  (n: "L4a", p: (18.2cm, -5.5cm), stage: 4),
  (n: "L4b", p: (18.2cm, -6.2cm), stage: 4, muted: false),
  // small branch points added past the cutoff line so the narrowing
  // expansion still shows a little exploration, not pure straight lines
  (n: "e1a", p: (12.8cm, 0.25cm), stage: 4, muted: true),
  (n: "e1b", p: (12.8cm, -0.25cm), stage: 4, muted: true),
  (n: "m1x", p: (12.8cm, -11.1cm), stage: 4, muted: true),
  (n: "L2x", p: (15.0cm, -6.2cm), stage: 4, muted: true),
)

#let it-edges = (
  (a: "root-dot", b: "i1", stage: 1, bend: -10deg),
  (a: "root-dot", b: "i2", stage: 1, bend: -4deg),
  (a: "root-dot", b: "i3", stage: 1, bend: 0deg),
  (a: "root-dot", b: "i4", stage: 1, bend: 5deg),
  (a: "root-dot", b: "i5", stage: 1, bend: 10deg),
  (a: "i1", b: "i1a", stage: 2, bend: -6deg),
  (a: "i1", b: "i1b", stage: 2, bend: 6deg, muted: true),
  (a: "i2", b: "i2a", stage: 2, bend: -6deg, muted: true),
  (a: "i2", b: "i2b", stage: 2, bend: 0deg, muted: true),
  (a: "i2", b: "i2c", stage: 2, bend: 6deg, muted: true),
  (a: "i3", b: "i3a", stage: 2, bend: -6deg),
  (a: "i3", b: "i3b", stage: 2, bend: 6deg, muted: true),
  (a: "i4", b: "i4a", stage: 2, bend: 0deg, muted: true),
  (a: "i5", b: "i5a", stage: 2, bend: -6deg),
  (a: "i5", b: "i5b", stage: 2, bend: 6deg, muted: true),
  (a: "i1a", b: "i1a1", stage: 2, bend: -4deg),
  (a: "i3a", b: "i3a1", stage: 2, bend: -4deg),
  (a: "i5a", b: "i5a1", stage: 2, bend: -4deg),
  (a: "i1a1", b: "i1a1x", stage: 4, bend: 0deg),
  (a: "i3a1", b: "i3a1x", stage: 4, bend: -5deg, muted: true),
  (a: "i3a1", b: "i3a1y", stage: 4, bend: 5deg),
  (a: "i5a1", b: "i5a1x", stage: 4, bend: 0deg),
  (a: "i1b", b: "i1b1", stage: 2, bend: -5deg, muted: true),
  (a: "i1b", b: "i1b2", stage: 2, bend: 5deg, muted: true),
  (a: "i2a", b: "i2a1", stage: 2, bend: 0deg, muted: true),
  (a: "i2b", b: "i2b1", stage: 2, bend: 0deg, muted: true),
  (a: "i2c", b: "i2c1", stage: 2, bend: -4deg, muted: true),
  (a: "i2c", b: "i2c2", stage: 2, bend: 4deg, muted: true),
  (a: "i3b", b: "i3b1", stage: 2, bend: 0deg, muted: true),
  (a: "i4a", b: "i4a1", stage: 2, bend: -4deg, muted: true),
  (a: "i4a", b: "i4a2", stage: 2, bend: 4deg, muted: true),
  (a: "i5b", b: "i5b1", stage: 2, bend: -4deg, muted: true),
  (a: "i5b", b: "i5b2", stage: 2, bend: 4deg, muted: true),
  (a: "i1a1x", b: "e1", stage: 4, bend: 0deg),
  (a: "i5a1x", b: "m1", stage: 4, bend: 0deg),
  (a: "m1", b: "m2", stage: 4, bend: 0deg),
  (a: "i3a1y", b: "L1", stage: 4, bend: 0deg),
  (a: "L1", b: "L2", stage: 4, bend: 0deg),
  (a: "L2", b: "L3", stage: 4, bend: 0deg),
  (a: "L3", b: "L4a", stage: 4, bend: -5deg),
  (a: "L3", b: "L4b", stage: 4, bend: 5deg, muted: true),
  (a: "e1", b: "e1a", stage: 4, bend: -6deg, muted: true),
  (a: "e1", b: "e1b", stage: 4, bend: 6deg, muted: true),
  (a: "m1", b: "m1x", stage: 4, bend: -6deg, muted: true),
  (a: "L2", b: "L2x", stage: 4, bend: 6deg, muted: true),
)

#let it-labels = (i1: [Idea 1], i2: [Idea 2], i3: [Idea 3], i4: [Idea 4], i5: [Idea 5])

#let it-scale = 0.78
#let it-p(p) = (p.at(0) * it-scale, p.at(1) * it-scale)

#let ideation-tree(stage: 1) = align(center)[
  #fletcher.diagram(
    node-stroke: none,
    node(it-p((-3.1cm, -6.3cm)), [Some Problem], stroke: none, fill: none, name: "root"),
    node(it-p((0.6cm, -6.3cm)), tree-dot(), name: "root-dot"),
    ..it-nodes.filter(nd => nd.at("stage", default: 1) <= stage).map(nd => {
      let is-star = stage >= 5 and nd.n == "L4a"
      let content = if is-star {
        sol-star(accent-red)
      } else {
        tree-dot(color: if nd.at("muted", default: false) { muted-ink.lighten(35%) } else { ink })
      }
      node(it-p(nd.p), content, stroke: none, fill: none, inset: 0pt, name: nd.n)
    }),
    ..if stage == 1 {
      it-nodes.filter(nd => it-labels.keys().contains(nd.n)).map(nd => node(
        it-p((nd.p.at(0) + 2.0cm, nd.p.at(1))),
        it-labels.at(nd.n),
        stroke: none, fill: none, name: nd.n + "-label",
      ))
    } else { () },
    ..if stage >= 3 {
      (
        node(it-p((7.2cm, 1cm)), [], stroke: none, fill: none, name: "cutoff-top"),
        node(it-p((7.2cm, -13cm)), [], stroke: none, fill: none, name: "cutoff-bot"),
        edge(std.label("cutoff-top"), std.label("cutoff-bot"), "-", stroke: (paint: accent-red, thickness: 1pt, dash: "dashed")),
      )
    } else { () },
    ..it-edges.filter(ed => ed.at("stage", default: 1) <= stage).map(ed => {
      let is-winner = stage >= 5 and ed.a == "L3" and ed.b == "L4a"
      let col = if is-winner { accent-red } else if ed.at("muted", default: false) { muted-ink.lighten(40%) } else { ink.lighten(15%) }
      let thick = if is-winner { 3pt } else { 0.95pt }
      edge(std.label(ed.a), std.label(ed.b), "-", bend: ed.bend, stroke: thick + col)
    }),
  )
]

#let diamond-phase(caption, w: 210pt, h: 130pt) = box(width: w, height: h)[
  #let half = w / 2
  #place(top + left, dy: h / 2,
    polygon(
      fill: accent-ochre.lighten(85%),
      stroke: (paint: accent-ochre, thickness: 1.4pt),
      (0pt, 0pt), (half, -h / 2), (half, h / 2),
    )
  )
  #place(top + left, dy: h / 2,
    polygon(
      fill: accent-green.lighten(88%),
      stroke: (paint: accent-green, thickness: 1.4pt),
      (half, -h / 2), (w, 0pt), (half, h / 2),
    )
  )
  #place(bottom, dx:25pt,dy: 40pt, align(center)[#small(size: 0.75em)[#caption]])
]

#let double-diamond-chain() = align(center)[
  #stack(dir: ltr, spacing: -1pt,
    diamond-phase[Research & Analysis],
    diamond-phase[Sketching & Prototyping],
    diamond-phase[Implementing & Testing],
  )
]

#let sketch-loop() = align(center)[
  #text(size: 1.3em)[
    #fletcher.diagram(
      node-stroke: 1.3pt,
      node-inset: 25pt,
      spacing: (40pt, 90pt),
      node((0, 0), [Sketch \ _Representation_], fill: accent-green.lighten(88%), stroke: accent-green, shape: shapes.pill, name: <sketch>),
      node((0, 1), [Mind \ _Knowledge_], fill: accent-ochre.lighten(85%), stroke: accent-ochre, shape: shapes.pill, name: <mind>),
      edge(<mind>, <sketch>, "->", bend: 70deg, stroke: 1.7pt + ink, label-side: left, text(size: 0.7em, fill: ink)[Create #linebreak() _(seeing that)_]),
      edge(<sketch>, <mind>, "->", bend: 70deg, stroke: 1.7pt + ink, label-side: left, text(size: 0.7em, fill: ink)[Read #linebreak() _(seeing as)_]),
    )
  ]
]


== Sketching
#focus-slide[How do we _actually make_ good designs?]

#focus-slide[
  Sketching and the Design Process

  #small()[Based on slides from Tal Wolman]
]


#slide()[
  #v(1fr)
  #quote[The design space of possible visualizations is huge, and includes considerations of both *how to create* and *how to interact* with visual representations. Vis design is full of trade-offs, and most possibilities in the design space *are ineffective* for a particular task — designers must weigh the resource limitations of computers, of humans, and of displays.]
  #v(1.2em)
  #quote-attribution([Tamara Munzner], source: [Visualization Analysis & Design, 2014])
  #v(1fr)
]

#focus-slide()[Every task has countless possible designs, most of them are bad, and _you can't tell which from a distance_.]

#slide()[
  #display-title()[Space of Possible Solutions]
  #v(1fr)
  #solution-space()
  #v(1fr)
  #sol-legend
  #v(1fr)
]

// ── PROPOSED: Predict-your-count (solution space) ───────────────────────
// Learning objective: make "you can't tell which is good from a
// distance" (stated two slides earlier) experiential rather than
// asserted — students commit to a number before the classification is
// revealed, then compare against reality, which is a cheap and effective
// calibration exercise.
// Est. time: 2 min
/*
#focus-slide()[
  #small[Predict]

  Of the 22 marks on the previous slide, how many would you guess are
  *good* solutions? #linebreak()
  Write your number down before the next slide.
]
*/
// ─────────────────────────────────────────────────────────────────────

#slide()[
  #display-title()[Space of Possible Solutions]
  #v(1fr)
  #solution-space(partial-classify: true)
  #v(1fr)
  #sol-legend
  #v(1fr)
]

#slide()[
  #display-title()[Space of Possible Solutions]
  #v(1fr)
  #solution-space(classify: true)
  #v(1fr)
  #sol-legend
  #v(1fr)
]

#slide()[
  #v(1fr)
  #quote[The problem of a small consideration space is the higher probability of settling for an OK solution and missing a good one. A fundamental principle of design is to *consider multiple alternatives* and then choose the best, rather than fixating on the first idea. One way to guarantee this: *explicitly generate multiple ideas* in parallel.]
  #v(1.2em)
  #quote-attribution([Tamara Munzner], source: [Visualization Analysis & Design, 2014])
  #v(1fr)
]

#slide()[
  #display-title()[Ideation as a Tree]
  #v(0.4em)
  #ideation-tree(stage: 1)
]

#slide()[
  #display-title()[Ideation as a Tree]
  #v(0.4em)
  #ideation-tree(stage: 2)
]

#slide()[
  #display-title()[Ideation as a Tree]
  #v(0.4em)
  #ideation-tree(stage: 3)
]

// ── PROPOSED: Decide which branch to keep (ideation tree pivot) ────────
// Learning objective: force an explicit prioritization judgment at the
// broaden→narrow pivot line — mirroring the real design skill of
// choosing which ideas to keep developing — before the deck reveals
// which branch it actually chose in stage 4/5.
// Est. time: 3-4 min
/*
#focus-slide()[
  #small[Decide]

  The line marks the pivot from *broadening* to *narrowing*. #linebreak()
  If you could only keep developing *one* branch, which would you pick —
  and why?
]
*/
// ─────────────────────────────────────────────────────────────────────

#slide()[
  #display-title()[Ideation as a Tree]
  #v(0.4em)
  #ideation-tree(stage: 4)
]

#slide()[
  #display-title()[Ideation as a Tree]
  #v(0.4em)
  #ideation-tree(stage: 5)
]

#slide()[
  #v(1fr)
  #quote[The best way to have a good idea is to *have lots of ideas*.]
  #v(1.2em)
  #quote-attribution([Linus Pauling], source: [Professor of Chemistry, Caltech · UC San Diego · Stanford — only person awarded two unshared Nobel Prizes])
  #v(1fr)
]

#slide()[
  #display-title()[Elaborate and Reduce]
  #v(1em)
  #double-diamond-chain()
  #v(1fr)
]

#slide()[
  #v(1fr)
  #quote[Sketching is *fundamental to ideation and design*. Traditional disciplines — industrial design, graphic design, architecture — make extensive use of sketches to develop, explore, communicate, and evaluate ideas.]
  #v(1.2em)
  #quote-attribution([Tohidi, Buxton, Baecker & Sellen], source: [_User Sketches: A Quick, Inexpensive, and Effective Way to Elicit More Reflective User Feedback_, NordiCHI 2006])
  #v(1fr)
]

#slide()[
  #v(1fr)
  #quote[Sketching has long been a *best practice* for designers. Through sketches, designers follow a generative process of *developing*, *honing*, and *choosing ideas*. Designers also use sketches to discuss, exchange, and critique ideas with others.]
  #v(0.8em)
  #quote-attribution([Greenberg, Carpendale, Marquardt & Buxton], source: [_Sketching User Experiences: The Workbook_, 2012])
  #v(1fr)

]

#slide()[
  #v(1fr)
  #quote[Sketches allow for a *dialog between the sketch and the viewer* — even when the viewer is the sketcher themself — that *facilitates better understanding* of the problem, and in turn, generation of new ideas.]
  #v(1.2em)
  #quote-attribution([Tohidi, Buxton, Baecker & Sellen], source: [NordiCHI 2006])
  #v(1fr)
]

#focus-slide()[
  Sketching is *not about drawing!*

  #small[Often the best sketches are just rough line drawings.]
]

#slide()[
  #align(center)[#display-title()[Sketching is a *Conversation with the Self*]]

  #sketch-loop()
]

// ── PROPOSED: Timed paired sketching activity (deck capstone) ──────────
// Learning objective: directly practice "sketching is a conversation
// with the self" via a hands-on, kinesthetic exercise instead of ending
// the deck on a diagram — the clearest opportunity for a genuinely
// active close, and a natural bridge into the next lecture's sketching
// techniques.
// Est. time: 8-10 min (2×3 min sketching + 2-4 min pair share-out)
/*
#focus-slide()[
  #small[Activity — 8 minutes]

  On paper, sketch *two* different chart types for a dataset of your
  choice (3 min each). #linebreak()
  Then trade with a neighbor: what did *their* sketch make you notice
  that yours didn't?
]
*/
// ─────────────────────────────────────────────────────────────────────



== Evaluation

#focus-slide()[
  Did we build the visualization right?
]

#focus-slide()[
  Did we build the visualization right? #linebreak()
  Did we build the _right visualization_?
]


#slide()[
  #align(center + horizon)[#display-title()[The Nested Model]]][
#align(center + horizon)[
  #text(size: 1.25em,fill:paper,style:"italic")[
    #diagram(
      node-stroke: 3pt+paper,
      edge-stroke: 3pt+paper,
      node-inset: 15pt,
      node-corner-radius:5pt,
      edge-corner-radius:25pt,
      label-sep: 0.55em,
      spacing: (20pt, 20pt),

      node((0, 0),[Domain Characterization],stroke:none, name: <domain-label>),
      node(enclose: (<domain-label>,<abstraction-plate>),name: <domain-plate>,fill:accent-ochre),

      node((0, 1.0),[Abstraction Design], stroke:none, name: <abstraction-label>),
      node(enclose: (<abstraction-label>,<encoding-plate>), name: <abstraction-plate>, fill: accent-green),

      node((0, 2.0),[Encoding Design], stroke:none, name: <encoding-label>),
      node(enclose: (<encoding-label>,<algo-plate>),  name: <encoding-plate>,fill:accent-blue),

      node((0,3.0),[Algorithm Design], stroke:none, name: <algo-label>),
      node(enclose: (<algo-label>,(0,4.0)), name: <algo-plate>,fill:accent-purple),
    )
  ]
]
]




#let nm-body(body) = text(fill: paper, style: "italic", size: 0.8em, body)

#let nested-model(
  domain-body: none,
  abstraction-body: none,
  encoding-body: none,
  encoding-after: none,
  abstraction-after: none,
  domain-after: none,
  algorithm-body: none,
  algorithm-after: none,
  implementation: false,
  algorithm-collapsed: false,
  encoding-collapsed: false,
  cascade: none, // none | "down" | "up"
  red-arrow: none, // none | "encoding" | "abstraction"
  compact: false,
) = {
  let vgap = if compact { 14pt } else { 16pt }
  let pad = if compact { 9pt } else { 11pt }
  // Running vertical slot index, top to bottom.
  let yi = 0
  let y-domain = yi; yi += 1
  let y-domain-b = yi; if domain-body != none { yi += 1 }
  let y-abs = yi; yi += 1
  let y-abs-b = yi; if abstraction-body != none { yi += 1 }
  let y-enc = yi; if not encoding-collapsed { yi += 1 }
  let y-enc-b = yi; if (not encoding-collapsed) and (encoding-body != none) { yi += 1 }
  let y-algo = yi; yi += 1
  let y-algo-b = yi; if (not algorithm-collapsed) and (algorithm-body != none) { yi += 1 }
  let y-impl = yi; if (not algorithm-collapsed) and implementation { yi += 1 }
  let y-algo-a = yi; if (not algorithm-collapsed) and (algorithm-after != none) { yi += 1 }
  let y-enc-a = yi; if encoding-after != none { yi += 1 }
  let y-abs-a = yi; if abstraction-after != none { yi += 1 }
  let y-dom-a = yi; if domain-after != none { yi += 1 }

  let E = ()

  // Domain plate (outermost).
  E.push(node((0, y-domain), [Domain Characterization], stroke: none, width: 17em, name: <l-domain>))
  let dom-inner = (<l-domain>, <p-abs>)
  if domain-body != none {
    E.push(node((0, y-domain-b), nm-body(domain-body), stroke: none, name: <b-domain>))
    dom-inner.push(<b-domain>)
  }
  if domain-after != none { dom-inner.push(<b-dom-a>) }
  E.push(node(enclose: dom-inner, fill: accent-ochre, stroke: 3pt + paper, corner-radius: 5pt, inset: 12pt, name: <p-domain>))

  // Abstraction plate.
  E.push(node((0, y-abs), [Abstraction Design], stroke: none, width: 17em, name: <l-abs>))
  let abs-inner = (<l-abs>, <p-enc>)
  if abstraction-body != none {
    E.push(node((0, y-abs-b), nm-body(abstraction-body), stroke: none, name: <b-abs>))
    abs-inner.push(<b-abs>)
  }
  if abstraction-after != none { abs-inner.push(<b-abs-a>) }
  E.push(node(enclose: abs-inner, fill: accent-green, stroke: 3pt + paper, corner-radius: 5pt, inset: 12pt, name: <p-abs>))

  // Encoding plate.
  if encoding-collapsed {
    E.push(node(enclose: (<p-algo>,), fill: accent-blue, stroke: 3pt + paper, corner-radius: 5pt, inset: 14pt, name: <p-enc>))
  } else {
    E.push(node((0, y-enc), [Encoding Design], stroke: none, width: 17em, name: <l-enc>))
    let enc-inner = (<l-enc>, <p-algo>)
    if encoding-body != none {
      E.push(node((0, y-enc-b), nm-body(encoding-body), stroke: none, name: <b-enc>))
      enc-inner.push(<b-enc>)
    }
    if encoding-after != none { enc-inner.push(<b-enc-a>) }
    E.push(node(enclose: enc-inner, fill: accent-blue, stroke: 3pt + paper, corner-radius: 5pt, inset: 12pt, name: <p-enc>))
  }

  // Algorithm plate (innermost).
  if algorithm-collapsed {
    E.push(node(
      (0, y-algo),
      if algorithm-body != none { nm-body(algorithm-body) } else { none },
      fill: accent-purple, stroke: 3pt + paper, corner-radius: 5pt, width: 17em, inset: 9pt, name: <p-algo>,
    ))
  } else {
    E.push(node((0, y-algo), [Algorithm Design], stroke: none, width: 17em, name: <l-algo>))
    let algo-inner = (<l-algo>,)
    if algorithm-body != none {
      E.push(node((0, y-algo-b), nm-body(algorithm-body), stroke: none, name: <b-algo>))
      algo-inner.push(<b-algo>)
    }
    if implementation {
      E.push(node((0, y-impl), text(fill: paper, style: "normal")[Implementation], fill: muted-ink, stroke: 3pt + paper, corner-radius: 5pt, width: 15em, inset: 8pt, name: <l-impl>))
      algo-inner.push(<l-impl>)
    }
    if algorithm-after != none {
      E.push(node((0, y-algo-a), nm-body(algorithm-after), stroke: none, name: <b-algo-a>))
      algo-inner.push(<b-algo-a>)
    }
    E.push(node(enclose: algo-inner, fill: accent-purple, stroke: 3pt + paper, corner-radius: 5pt, inset: 10pt, name: <p-algo>))
  }

  // Trailing copy that lives inside an outer plate, below the nested plates.
  if encoding-after != none { E.push(node((0, y-enc-a), nm-body(encoding-after), stroke: none, name: <b-enc-a>)) }
  if abstraction-after != none { E.push(node((0, y-abs-a), nm-body(abstraction-after), stroke: none, name: <b-abs-a>)) }
  if domain-after != none { E.push(node((0, y-dom-a), nm-body(domain-after), stroke: none, name: <b-dom-a>)) }

  // Cascade / validation arrows, stepped down the right-hand edge.
  if cascade == "down" {
    E.push(edge((5.2, y-domain + 0.15), (5.2, y-abs + 0.15), "->", stroke: 2.5pt + ink, layer: 1))
    E.push(edge((5.7, y-abs + 0.15), (5.7, y-enc + 0.15), "->", stroke: 2.5pt + ink, layer: 1))
    E.push(edge((6.2, y-enc + 0.15), (6.2, y-algo + 0.15), "->", stroke: 2.5pt + ink, layer: 1))
  }
  if cascade == "up" {
    E.push(edge((5.2, y-algo), (5.2, y-enc + 0.15), "->", stroke: 2.5pt + ink, layer: 1))
    E.push(edge((5.7, y-enc), (5.7, y-abs + 0.15), "->", stroke: 2.5pt + ink, layer: 1))
    E.push(edge((6.2, y-abs), (6.2, y-domain + 0.15), "->", stroke: 2.5pt + ink, layer: 1))
  }
  if red-arrow == "encoding" {
    E.push(edge((5.2, y-algo), (5.2, y-enc - 0.35), "->", stroke: 4pt + accent-red, layer: 1))
  }
  if red-arrow == "abstraction" {
    E.push(edge((5.2, y-algo), (5.2, y-abs - 0.35), "->", stroke: 4pt + accent-red, layer: 1))
  }

  align(center + horizon)[
    #text(size: 1.15em, fill: paper, style: "italic")[
      #diagram(
        node-stroke: 3pt + paper,
        edge-stroke: 3pt + paper,
        node-inset: pad,
        node-corner-radius: 5pt,
        edge-corner-radius: 18pt,
        label-sep: 0.55em,
        spacing: (18pt, vgap),
        ..E,
      )
    ]
  ]
}


#slide()[
  #nested-model(domain-body: [
    Who are the target users? #linebreak()
    What are their needs? #linebreak()
    Observe and interview
  ])
]

#slide()[
  #nested-model(abstraction-body: [
    Data abstraction: what is being shown? #linebreak()
    Task abstraction: why are they looking at it?
  ])
]

#slide()[
  #nested-model(encoding-body: [
    Idioms: how is it shown? #linebreak()
    How is it displayed? #linebreak()
    How is it manipulated and interacted with?
  ])
]

#slide()[
  #nested-model(algorithm-body: [
    How is it computed efficiently? #linebreak()
    How is it computed accurately?
  ])
]

#slide()[
  #nested-model(
    algorithm-body: [
      How is it computed efficiently? #linebreak()
      How is it computed accurately?
    ],
    implementation: true,
    compact: true,
  )
]

#slide()[
  #align(center + top)[#display-title(size: 1.5em)[Different Ways to Get it Wrong]]
  #nested-model()
]

#slide()[
  #align(center + top)[#display-title(size: 1.5em)[Different Ways to Get it Wrong]]
  #nested-model(domain-body: [Solving the wrong problem])
]

#slide()[
  #align(center + top)[#display-title(size: 1.5em)[Different Ways to Get it Wrong]]
  #nested-model(abstraction-body: [Abstractions don't address the problem])
]

#slide()[
  #align(center + top)[#display-title(size: 1.5em)[Different Ways to Get it Wrong]]
  #nested-model(encoding-body: [Ineffective communication])
]

#slide()[
  #align(center + top)[#display-title(size: 1.5em)[Different Ways to Get it Wrong]]
  #nested-model(algorithm-body: [Slow or erroneous computation])
]


#slide()[
  #grid(
    columns: (3.4fr, 1fr),
    align: horizon,
    column-gutter: 0.5em,
    nested-model(
      compact: true,
      algorithm-body: [Analyze computational complexity],
      implementation: true,
      algorithm-after: [Measure system performance],
    ),
    align(left)[#display-title(size: 1.1em)[CS]],
  )
]

#slide()[
  #grid(
    columns: (3.4fr, 1fr),
    align: horizon,
    column-gutter: 0.5em,
    nested-model(
      compact: true,
      encoding-body: [Justify design choices],
      algorithm-collapsed: true,
      encoding-after: [
        Analyze results qualitatively #linebreak()
        Measure human responses in lab #linebreak()
        General usability tests
      ],
    ),
    align(left)[#stack(
        dir: ttb,
        spacing: 0.5em,
        display-title(size: 1.1em)[Design],
        display-title(size: 1.1em, fill: muted-ink)[CS],
        display-title(size: 1.1em)[Psych],
        display-title(size: 1.1em)[HCI],
      )],
  )
]

#slide()[
  #grid(
    columns: (3.4fr, 1fr),
    align: horizon,
    column-gutter: 0.5em,
    nested-model(
      compact: true,
      domain-body: [Observe target users with existing tools],
      encoding-collapsed: true,
      algorithm-collapsed: true,
      abstraction-after: [
        Observe use of tool in context #linebreak()
        Target users' usability tests
      ],
      domain-after: [Measure adoption and impact],
    ),
    align(left)[#stack(
        dir: ttb,
        spacing: 0.5em,
        display-title(size: 1.1em)[Social Sciences],
        display-title(size: 1.1em, fill: muted-ink)[Design],
        display-title(size: 1.1em, fill: muted-ink)[CS],
        display-title(size: 1.1em, fill: muted-ink)[Psych],
        display-title(size: 1.1em, fill: muted-ink)[HCI],
        display-title(size: 1.1em)[Social Sciences],
      )],
  )
]


// ── Prototyping gets early feedback across levels ────────────────────────────

#slide()[
  #grid(
    columns: (1fr, 2.4fr),
    align: horizon,
    column-gutter: 1.5em,
    display-title(size: 1.5em)[Abstract the design tasks],
    nested-model(
      algorithm-collapsed: true,
      algorithm-body: [#v(1em)#text(weight:"medium",style:"normal",size:30pt)[Paper prototype]#v(1em)],
      encoding-after: [Early feedback on encoding],
      abstraction-after: [Early feedback on abstraction],
    ),
  )
]

#slide()[
#cycle-diagram()
]





#slide()[
#align(center + horizon)[
  #text(size: 1.25em,fill:ink,style:"italic")[
    #diagram(
      node-stroke: 1.3pt,
      edge-stroke: 2pt,
      node-inset: 11pt,
      edge-corner-radius:25pt,
      label-sep: 0.55em,
      spacing: (30pt, 160pt),



      node((0, 0), [Conceptual Model], corner-radius: 10pt, name: <concept>),

      pause,

      node((0, 0.5), [Data Model], corner-radius: 10pt, name: <data>),
      edge(<concept>,<data>,"=>"),
      pause,
      node((0, 1), [User Actions and Tasks], corner-radius: 10pt, name: <users>),
      edge(<data>,<users>,"=>"),
      // edge(<concept>,(<users>),"=>",shift:-0.45),

      pause,
      node((-1, 0.5), [Domain], corner-radius: 10pt, name: <domain>),
      edge(<domain>,<data>,"-->"),
      edge(<domain>,(-1,1),<users>,"-->"),
      edge(<domain>,(-1,0),<concept>,"-->"),

      pause,



      node((1, 0.5), [Design], corner-radius: 10pt, name: <design>),
      edge(<data>,<design>,"=>"),
      edge(<users>,(1,1),<design>,"-->"),
      edge(<design.north-east>,<design.north-west>,"=>",bend:-115deg),

      pause,
      node((4, 0.5), [Evalutation], corner-radius: 10pt, name: <eval>),
      edge(<design>,<eval>,"=>"),


      pause,
      edge(<eval>,(4,1.4),(0,1.4),<users>,"-->",stroke: accent-red),
      edge(<eval>,(4,-0.4),(0,-0.4),<concept>,"-->",stroke: accent-red),
      edge(<eval>,(4,-0.4),(1.5,-0.4),<data.north-east>,"-->",stroke: accent-red),
      edge(<eval>,(4,1),(2,1),<design.south-east>,"-->",stroke: accent-red),
      edge(<eval>,(4,-0.5),(-1.6,-0.5),<domain.north-west>,"-->",stroke: accent-red),


    )
  ]
]
]
