#import "../wdf.typ": *

#show: template.with(
  title: [
    Assignment 3: Ethical and Deceptive Visualization
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

In this assignment, you will design and implement two static visualizations using the same dataset. One visualization will be an ethical representation of the data, while the other will be deceptive. With the deceptive visualization, your goal is to trick the viewer into believing that the visualization is legitimate and to draw inaccurate conclusions from it.

We will examine each other's work in the Clarification and Obfuscation lab: see if you can deceive your classmates.

In this assignment, you will:

- Choose a question that can be answered with a dataset of your choosing.
- Design and implement, using D3 + SVG, one visualization that answers the question as clearly and transparently as possible, and one that answers it deceptively.
- Provide a rigorous rationale for your design choices, explaining how each choice was intended to inform or mislead the viewer.

Please read these directions completely before starting.

= Deliverable

Your deliverable on Gradescope will be a single PDF document. The document should have page breaks and headers for each part of the assignment.
- The first page should include only your question as a title, and your two visualizations side by side, labeled only _A_ and _B_. It should not be immediately clear in your submission which visualization is ethical and which is deceptive.
- For the section on implementation include publicly accessible links to github or observable for the source code for data processing and visualization implementation.
- For the write-up section, beginning on a new page, include your short write-up.
- Finally include a section of References for the data used, as well as any design inspiration, other libraries, or resources used for any part of the assignment.

== Dataset Selection

Begin by selecting a dataset. You must use the same dataset for both visualizations. It's recommended that you choose from one of the following sources:

- #link("https://health.google.com/covid-19/open-data/raw-data")[COVID Open Data]: large aggregations of COVID-19 data, with information uploaded daily from hundreds of sources.
- #link("https://www.fec.gov/data/")[Federal Elections Commission]: campaign finance and expenditures (US).
- #link("https://www.gapminder.org/data/")[Gapminder] has many global human development data, e.g., population, life expectancy, income, CO2 emissions.
- #link("https://www.washingtonpost.com/national/2019/07/18/how-download-use-dea-pain-pills-database/")[DEA Pain Pills database]: you may need to enter an email to access this data.

You may also consider any of the data sources listed in Assignment 2. If you want to use a different dataset, please check it with me as early as possible. As always, whichever dataset you choose, make sure to cite the source in the references section.

== Task

Choose a question that you want your visualizations to answer. The question must appear as the title of your first page. Design your visualizations to answer the question correctly (for the ethical visualization) and incorrectly (for the deceptive visualization).

We will consider an ethical visualization to be one where:

- The visualization is clear and interpretable by the general population.
- The visual encodings are appropriate and effective for the intended task.
- Data transformations are clearly and transparently communicated.
- The underlying data source (and any potential bias) is clearly communicated.

On the other hand, a deceptive visualization may exhibit the following properties:

- The visual representation is intentionally inappropriate or misleading.
- Titles are skewed to intentionally influence the viewer's perception.
- The data has been transformed or filtered in an intentionally misleading way.
- The existence or source of bias in the underlying data is unclear.

For the ethical visualization, your goal is to be as clear and transparent as possible to help viewers answer your intended question. For the deceptive visualization, aim to use subtle ineffective choices in the design that require close reading to be identified. Misleading strategies are fine, but outright lying is not. For example, do not use fake data or lie about the data source. Similarly, deliberate lies in axis titles or labels are not allowed. Technically true but otherwise misleading statements are allowed.

== Implementation

Use `d3` to implement both visualizations in either an observable notebook or as standalone `html/js/svg`. Remember that your deliverable should be two static visualizations. Our goal here is to explore the subtle choices we can make in the design of data visualizations, and their effects on the viewer's understanding of the data. It is okay to keep it simple.

If your code has lots of data-cleaning code or code for experimental visualizations that you later discarded, please move those to a separate section at the bottom of your notebook or to a separate file. The main part of your implementation should focus on the two visualizations.

== Write-up

In addition to the visualizations, you should include a write-up that describes the following:

- The dataset you chose.
- The question you are trying to answer.
- For each visualization, a description of your design rationale, and how your choices were intended to inform or mislead the viewer. This should also make clear which visualization is ethical and which is deceptive.

While your write-up should be thorough, it should also be concise and no more than about 1000 words.

== Presentation

After you have submitted your assignment PDF, you will be able to actually present your design to the rest of the class during scheduled lab time, or during office hours. During the Clarification and Obfuscation lab, your classmates will first try to identify which of your visualizations is deceptive, and what conclusions each leads them to, before you reveal your design rationale. You will not be considered to have submitted the assignment until you have given your presentation to show your ability to verbally explain and engage with your design and answer questions.

== Grading

I will determine scores by judging the clarity and interpretability of your ethical visualization, the duplicity of your deceptive visualization, the clarity and completeness of your write-up, and the effectiveness of your oral presentation. Here are examples of aspects that may lead to deductions:

- Obvious identification of the ethical and deceptive visualizations.
- Missing titles containing the question for each visualization.
- Missing elements in the write-up.
- Outright lies in the deceptive visualization or write-up.
- Untidy or unprofessional presentation of the submission, including missing references.

Examples of going above and beyond the assignment requirements include:
- A deceptive visualization that withstands close reading by your classmates, while using only technically true statements.
- An ethical visualization that makes the same data substantially clearer than common published presentations of it.
- A write-up that connects your deceptive choices to the deceptive techniques discussed in lecture, and to how each could be detected.

= Acknowledgement

This assignment is based on assignments by #link("https://courses.cs.washington.edu/courses/cse442/24au/a2.html")[Jeff Heer], #link("https://docs.google.com/document/d/1-ZntqdIcfQBX6LOBv8akDiapqoaD-NPmYSf-Y3voXFU/edit?tab=t.0")[Jon Froehlich], and #link("https://ayaankazerouni.org/courses/csc477/spring2026/assignments/a4-ethical-and-deceptive-visualization/")[Ayaan Kazerouni].
