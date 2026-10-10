#import "../wdf.typ": *

#show: template.with(
  title: [
    Assignment 4: Interactive Explorations
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

= Assignment Overview

This assignment involves building an interactive visualization of a dataset of your own choosing and deploying it on the web.

One goal of this assignment is for you to gain familiarity with various interaction techniques. We have seen many other examples of interactive visualizations in class and in the readings. The goal with this assignment is not only for you to gain hands-on implementation experience, but also for you to think about the effectiveness of the specific techniques for your chosen data domain.

One challenge is to scope the assignment so that you can finish it in the allotted time. Focus on designing a limited yet compelling visualization that enables interactive exploration along a few critical dimensions. The #link("https://www.benfry.com/zipdecode/")[ZipDecode] and #link("https://namerology.com/baby-name-grapher/")[NameGrapher] applications are nice examples that use a simple but elegant interaction design to enable engaging explorations. A tightly-focused, well-implemented interactive graphic is much preferred to a sprawling design that attempts too much!

In this assignment, you will:

- Design (with pen and paper) an interactive visualization aimed at enabling understanding of a compelling question for a dataset of your own choosing.
- Implement and deploy that visualization to the web using D3 + SVG.
- Provide a rigorous rationale for your choice of visual encodings and interaction techniques.

Please read these directions completely before starting.

= Deliverable

Your deliverable on Gradescope will be a single PDF document. The document should have page breaks and headers for each part of the assignment.
- For the section on sketching include photos of each of your sketches.
- For the section on implementation include a publicly accessible link to your deployed visualization, a publicly accessible link to the github repository or observable notebook containing its source code, and screenshots of the visualization in a few different interactive states.
- For the design rationale section include your short write-up.
- Finally include a section of References for the data used, as well as any design inspiration, other libraries, or resources used for any part of the assignment.

== Dataset Selection

As in Assignment 2, you will choose your own dataset of interest, and you are not limited to using a single dataset. You may continue with a dataset from an earlier assignment, so long as the question your interactive visualization supports is new. Once you have selected your datasets, make sure to cite the source in the references section.

== Interactive Visualization

Design and implement an interactive graphic aimed at enabling understanding of a compelling question for a dataset of your own choosing. In order to determine what subset of the data and which interactive options are most promising, you may want to perform additional exploratory analysis. What aspects of the data reveal the most interesting discoveries or stories? Do not feel obligated to try to convey everything about the data: focus on a compelling subset.

Your graphic must include interactions that enable exploration. Possible techniques include panning, zooming, brushing, details-on-demand (e.g., tooltips), dynamic query filters, and selecting different measures to display. You are free to also consider highlights, annotations, or other narrative features intended to draw attention to particular items of interest and provide additional context. You are strongly encouraged to review the lecture and lab materials on Interaction and Interaction in D3 for sources of inspiration.

== Sketching

Before implementing, sketch (with pen and paper!) at least three distinct designs for your interactive visualization. Since your design is interactive, a single sketch may not be enough to show a design: use a short storyboard of two or three frames for each design to show how the view changes in response to the user's input, and annotate each frame with the interaction that produces it. As in Assignment 2, think carefully about the user tasks that are required to engage the overall question, and about how each interaction supports those tasks.

== Implementation

Implement your interactive graphic using `d3` and deploy it to the web as a publicly accessible page. You may publish a public observable notebook, or deploy standalone `html/js/svg` as a static website using a service like #link("https://docs.github.com/en/pages")[GitHub Pages]. If you use a github repository, it must be public, and your deployed page should include a link to it.

You will likely iterate further on your design in this stage. That's fine. There's no requirement that your final design look exactly like your sketch.

== Design Rationale

In addition to your deployed visualization, you will also provide a write-up with the following components:

- A rationale for your design decisions. How did you choose your particular visual encodings and interaction techniques? What alternatives did you consider and how did you arrive at your ultimate choices?
- References to external resources. This includes data sources as well as references to any existing work if your work adapts or builds from it. Missing references to these will be taken seriously.

While your write-up should be thorough, it should also be concise and no more than about 1000 words.

== Presentation

After you have submitted your assignment PDF, you will be able to actually present your design to the rest of the class during scheduled lab time, or during office hours. Come prepared to give a short live demonstration of your deployed visualization. You will not be considered to have submitted the assignment until you have given your presentation to show your ability to verbally explain and engage with your design and answer questions.

== Grading

I will determine scores by judging both the soundness of your design, the overall presentation and quality of the write-up, and the effectiveness of your oral presentation. Point deductions will be made when projects suffer from:

- Errors or broken features.
- Clearly ineffective visual encodings.
- Confusing interface design or unhelpful interactions.
- Lack of exploratory interaction techniques.
- Incomplete or insufficient write-up.
- Missing references for external data or code.

Examples of going above and beyond the assignment requirements include:
- Novel interaction techniques or visualization elements (i.e., novel to us and our class).
- Effective multi-view coordination.
- Thoughtful and elegant graphic design that attends to what we've learned about effective visual encodings.
- An insightful and engaging exploration experience.

= Acknowledgement

This assignment is based on assignments by #link("https://courses.cs.washington.edu/courses/cse442/24au/a3.html")[Jeffrey Heer] and #link("https://ayaankazerouni.org/courses/csc477/spring2026/assignments/a5-interactive-visualization/")[Ayaan Kazerouni].
