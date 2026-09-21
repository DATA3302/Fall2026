#import "../wdf.typ": *

#show: template.with(
  title: [
    Lab Activity: Mini User Study
  ],
  title-short: none,
  authors: "DATA 3302: Data Visualization, Fall 2026",
  authors-short: none,
  title-extra: [Professor Austin P. Wright],
  date: none,
  toc: false,
  full: false,
  header-content: none,
  abstract: none,
  bib: none,
  serif: true,
  exam: false,
)


#sidenote(dy: 1.15em, numbered: false)[#outline(depth: 2)]

= Activity Overview

Over the next two weeks in lab you will run a real user study to answer a questions about the design of a visualization. You will choose a visualization, make a version of it that differs in exactly one way, ask a question about what that difference does to a reader, and then find out by measuring your classmates.

The point is not to discover something publishable. It is to gain first-hand experience and "learn by doing" for conducting user research. In particular, before you have to do research for important#sidenote()[Or at least graded which I suppose is not quite the same thing.] topics, it is valuable to learn how much of a study's worth is decided before any data is collected: in how narrowly you pose the question, how clearly you operationalize it, and how carefully you control everything you did not mean to vary. Most study designs fail long before analysis.

In this activity you will:

- Choose a visualization you can modify, and produce at least two variants of it.
- Pose a question about how people read or interact with it, and place that question at a level of Munzner's nested model.
- Choose a methodology that can actually answer the question in the time available, and write a protocol precise enough that someone else could run it.
- Collect data from your classmates, acting as both experimenter and participant.
- Analyze, visualize, and present what you found, including what it implies for the design.

Please read these directions completely before starting.

== Schedule

This exercise will take up the next six lab sessions (alloting extra time for assignment revisions and so on). However, especially for the labs in the second week, this only works if everyone shows up and is prepared. Thus participation in this activity will be _particularly_ weighted in your overall participation grade.

The next six lab sessions are scheduled for the following sequence:
+ Choose your visualization and general research question and prepare variants
+ Formulate specific research question and assign it to appropriate nested model. Sketch study protocol
+ Finalize study protocol and perform pilot#sidenote()[Doing a pilot study on someone else is an essential part of research design. Nearly every protocol you will try to make breaks the first time a stranger reads it, usually because a task instruction that was obvious to you but ambiguous to everyone else.] with one other student.
+ Run the actual user study (with the rest of the class as participants)
+ Prepare findings
+ Present findings

= Deliverable

Submit a single PDF to Gradescope, with a section for each of the following.

- Images of every variant you showed, and a one-line statement of exactly what differs between them.
- Your research question, stated as a well formed testable claim, with the nested-model level it sits at and why.
- Your research design including: independent variable(s), dependent variable(s), what you held constant, within- or between-subjects, etc..
- Your task protocol including what you said, what participants saw, in what order, and how you recorded responses.
- Your data, as a table or a link to it, plus the number of participants and trials.
- Your analysis, including at least one visualization of your results.
- Design implications of your findings. What a designer should do differently because of what you found, and importantly what your study _cannot_ tell them.
- References for the visualization, the data behind it, and any instrument you borrowed.

= Choose a visualization

You can choose either a visualization from assignment 1, a draft from assignment 2, or something
else. Importantly you will need to be able to modify it in some way to produce variants that you
can study. If you pick something from the web, pick something you can rebuild or at least meaningfully alter.

#colorbox(color: green)[
  Think carefully about the visualization you have chosen, what analytic tasks it affords, and what encoding choices could be made differently.

  Before deciding on a variant to study, sketch a fe options on paper. For each of the variants, actually write out what you would expect to be different in how people interact with or read the visualization.
]

= Pose a question

"Is the visualization good?" is not a question a study can answer. Instead we need to be able to more formally conceptualize what it is we care about and how we are trying to measure it. We can do this in three stages:

+ Determine the _construct_, which is just the thing we actually care about. This can be something like: _Readability_, _Trust_, or _How quickly someone spots the outlier_.
+ Determine a task, which is the _context_ under which the construct is relevant. That is the specific thing the user is doing. Amar, Eagan and Stasko's ten low-level tasks are a good place to start: retrieve value, filter, compute derived value, find extremum, sort, determine range, characterize distribution, find anomalies, cluster, correlate.
+ Finally, we need to determine the _measure_, which is the actual number you would write down. This could be response time in seconds, error of user estimates in the units of the data, a count of correct answers, or a subjective rating on a Likert scale.

Ensure that your question is *falsifiable*, perhaps the most valuable single aspect of scientific hypothesizing. A theory or question is only every truly scientific if, when testing it against the world and with actual people, the results might _disagree_ with what you thought. That is both positive and negative results need to be reasonably possible outcomes, if they are not then there was never a point to doing research in the first place!

#colorbox(color: green)[
  *Too vague:* "Does sorting make the bar chart better?"

  *Testable:* "With bars sorted by value, readers identify the third-largest category faster and
  with fewer errors than with bars in alphabetical order."
]

== Determine Nested Model Level

Munzner's nested model #sidenote()[
  #diagram(
    node-stroke: 1pt + white,
    edge-stroke: 1pt + white,
    node-inset: 5pt,
    node-corner-radius: 5pt,
    edge-corner-radius: 25pt,
    label-sep: 0.55em,
    spacing: (0pt, 20pt),

    node(
      (0, 0),
      [#text(
        fill: white,
        size: 16pt,
        style: "italic",
      )[Domain Characterization]],
      stroke: none,
      name: <domain-label>,
    ),
    node(
      enclose: (<domain-label>, <abstraction-plate>),
      name: <domain-plate>,
      fill: accent-ochre,
    ),

    node(
      (0, 1.0),
      [#text(fill: white, size: 16pt, style: "italic")[Abstraction Design]],
      stroke: none,
      name: <abstraction-label>,
    ),
    node(
      enclose: (<abstraction-label>, <encoding-plate>),
      name: <abstraction-plate>,
      fill: accent-green,
    ),

    node(
      (0, 2.0),
      [#text(fill: white, size: 16pt, style: "italic")[Encoding Design]],
      stroke: none,
      name: <encoding-label>,
    ),
    node(
      enclose: (<encoding-label>, <algo-plate>),
      name: <encoding-plate>,
      fill: accent-blue,
    ),

    node(
      (0, 3.0),
      [#text(fill: white, size: 16pt, style: "italic")[Algorithm Design]],
      stroke: none,
      name: <algo-label>,
    ),
    node(
      enclose: (<algo-label>, (0, 4.0)),
      name: <algo-plate>,
      fill: accent-purple,
    ),
  )
] says a visualization can fail in four different places, and that each
level needs a different kind of evidence. Before choosing a method, decide which level your
question actually lives at, because that decision determines what could possibly count as an
answer.



Most of the questions that can be assessed in a one-hour lab session are at the *encoding-level*, and
that is the level this activity is built for. You are comparing two ways of showing the same data to the same people doing the same task.

However, it is possible to pose an *abstraction-level* question, and some of you should. That is a question
about whether the task itself is the right one, and in order to study it effectively we need to use more qualitative methods such as a think-aloud prototcol.
This is harder to do well in an hour, but it produces richer findings. If you go this way, let me know so we can plan the sessions accordingly. #sidenote()[A domain-level question, such as whether this visualization is worth building at all, cannot be answered in lab. Your classmates are not the true target users of your visualization, and no amount of measurement inside this room can say anything about overall adoption or impact. Additionally, while technical algorithm evaluation is important, generally it does not involve any actual user research and so should not be used in this activity.]

== Determine Methodology

Once the level is fixed, the method follows. For an encoding-level question, you are running a
controlled experiment, and you need to name four kinds of variable. #sidenote()[Anything that varies and is none of these four is a *confound*, and it will be the first thing anyone asks you about when critiquing a study.]

#table(
  columns: (auto, 1fr),
  align: (left, left),
  stroke: (x, y) => if y == 0 { (bottom: 0.5pt) } else { none },
  inset: (x: 0.4em, y: 0.5em),
  [*Independent*],
  [What you deliberately vary. For most of you this is "which variant," with two levels.],

  [*Dependent*], [What you measure.],

  [*Control*],
  [All the things you can hold fixed that would otherwise have an effect.],

  [*Random*],
  [What you leave to chance on purpose such as which variant a participant sees first.],
)



=== Within- or between-subjects

With a small participant pool, you will almost certainly want a *within-subjects* design: every
participant sees every variant. It needs far fewer people, and it cancels out the enormous
differences between individuals, which would otherwise swamp any effect you are looking for.

However this increased efficiency comes at the cost of *order effects*. Whoever sees variant A first gets practice at the task before they
see variant B, so B looks better than it is. If there are many variants however, fatigue can bias results the other way.

In order to address this we use _counterbalancing_: half your participants see A then B, the other half see B then A.
While this is trivial for two conditions, with more than two conditions, we must use a balanced Latin square. #sidenote()[#link("https://damienmasson.com/tools/latin_square/")[damienmasson.com/tools/latin_square] will generate one for any number of conditions. Note how fast the number of participants you are committed to running grows.]


=== The protocol

Finally, one of the most essential aspects of research integrity is reproducibility. For experiments like this, that means we need to be able to write down in _excruciating detail_ exactly what the participant protocol is so that a stranger could read the report and replicate the same experiment. This includes:

- The task instruction, word for word. Every participant hears the same words.
- How you record each response, and where.
- What you say at the end, especially if asking follow-up or post task survey questions.

= Perform a study amongst the class

This activity stays inside the course #sidenote()[However if you want to invite your friends over to participate and increase sample sizes that would be cool!], so it does not require review by Cal Poly's Human Subjects
Committee. You will nonetheless follow the same norms, because learning the norms is the point.

#colorbox(title: "Consent script", color: luma(25%))[
  #linebreak()
  Adapt and read this, or something like it, to every participant before they begin.

  #v(0.5em)
  _"I'm studying how people read different data visualizations. I'll show you a series of visualizations and ask you some
  questions about each one. It should take about five minutes. I'll be recording how long you take
  and what you answer, nothing else, and nothing that identifies you. You can stop at any point
  for any reason and it won't be held against you. Do you have any questions before we start?"_
]


== Things to remember while you run

- Read the task instruction from the page every time. Do not paraphrase it because you are bored of it.
- Do not react to answers. "Hmm" is a reaction your participant will unconscionably try to optimize against.
- Record what went wrong as it happens: interruptions, a misread instruction, someone who clearly misunderstood. You cannot reconstruct this later.

= Visualize and Explain the results

Start by plotting the raw data, this should be easy with only a few samples. You are looking for the shape of the distribution, obvious outliers, and whether
anything looks nothing like what you expected.

You have spent a few weeks so far learning to build visualizations. Build one of your own results. A bar
of two means with nothing else is the weakest thing you could show. Consider how design can make more clear the differences and effects the study is meant to look for.

Then report the comparison. Importantly you should report descriptive results (even for qualitative methods) rather than judgments, i.e. "Sorted bars were 1.4 seconds faster on average, and every participant but two was faster with them".


== Design implications

Finally, interpret the results in terms relevant to a designer for the provided visualization (or relevantly similar visualizations). Given what you found, what should change about the visualization? Be specific and be bounded:

- What you would change, and on what evidence.
- What you would *not* change, because your study says nothing about it.
- What you would test next?


= Grading

This lab activity is not part of any standalone graded assessment. However, lack of participation and engagement here will affect your overall participation grade.
