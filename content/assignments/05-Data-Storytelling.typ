#import "../wdf.typ": *

#show: template.with(
  title: [
    Assignment 5: Data Storytelling
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

For this assignment, you'll create and publish an interactive article that uses visualization to explain some complex subject to a reader. The visualizations you create should all embody the best practices for effective visualization that you have learned in class.

You will choose the topic, but it must have social or scientific importance#sidenote()[You can certainly make the case for a wide range of topics of personal interest within this. Ultimately my filter for what counts as "important" is very permissive. And something just being really interesting or cool is likely to easily meet that bar. I care more about you choosing something _that you care about_ than anything else. ]. Example topics include philanthropic spending, election donations, economic development, humanitarian aid, climate change, education, civil rights, legislative voting records, a computer science algorithm or mathematical concept (or music concept, or any discipline you're into), or some other important societal topic. Within this constraint, I encourage you to select something of great personal interest.

Create an interactive, engaging #link("https://worrydream.com/ExplorableExplanations/")[explorable explanation] of your topic. Your job is to educate your non-expert reader about your topic, and also highlight its importance to society. You should use interactive visualizations to do this.

As your project begins to take shape, please read #link("https://worrydream.com/LadderOfAbstraction/")[Up and Down the Ladder of Abstraction] by Bret Victor, and Segel & Heer, #link("https://idl.cs.washington.edu/files/2010-Narrative-InfoVis.pdf")["Narrative Visualization: Telling Stories with Data"].

You may be inspired by the following examples:

- #link("https://www.washingtonpost.com/graphics/2020/world/corona-simulator/")[Why outbreaks like coronavirus spread exponentially, and how to "flatten the curve"]. Harry Stevens. Washington Post.
- #link("https://parametric.press/issue-02/streaming/")[The Hidden Cost of Digital Consumption]. Halden Lin, Aishwarya Nirmal, Shobhit Hathi, and Lilian Liang.
- #link("https://projects.propublica.org/climate-migration/")[New Climate Maps Show a Transformed United States]. Al Shaw, Abrahm Lustgarten, and Jeremy Goldsmith. ProPublica.
- #link("https://archive.nytimes.com/www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html")[512 Paths to the White House]. Mike Bostock and Shan Carter. New York Times archive.
- #link("https://ciechanow.ski/bicycle/")[Bicycle]. Bartosz Ciechanowski.
- #link("https://mbtaviz.github.io/")[Visualizing MBTA Data: An interactive exploration of Boston's subway system]. Mike Barry and Brian Card.
- See other examples at #link("https://explorabl.es/")[explorabl.es] and #link("https://pudding.cool/")[The Pudding].

Please read these directions completely before starting.

= Deliverable

Your deliverable on Gradescope will be a single PDF document. The document should have page breaks and headers for each part of the assignment.
- For the proposal section include your answers to the proposal questions and photos of your sketches.
- For the narrative section include your answers to the narrative flow questions.
- For the section on implementation include a publicly accessible link to your deployed article, a publicly accessible link to the github repository or observable notebook containing its source code, and screenshots of each of its visualizations.
- For the reflection section include your short write-up.
- Finally include a section of References (see Citations below).

== Proposal

Begin by answering the following questions about your planned work:

- What is your topic?
- Why is it socially or scientifically significant?
- Who is your audience? Why are they reading your article? What are your assumptions about them?
- What dataset(s) are you using? Why are they authoritative? Please include hyperlinks when relevant.
- What are some questions you could answer with these data? Include at least two sketches made with pen and pencil or a tablet and stylus to illustrate your initial ideas.

Not including sketches, your proposal should be no longer than about one page.

Within the requirement that your topic be societally or scientifically important, you're strongly encouraged to choose a topic that aligns with your own interests. The following list of possible data sources should not dictate your topic; I provide it in the hope that something in there intersects with your chosen topic. But if not, please talk to me about finding a dataset! (Note that if your topic is an explanation of an algorithm or mathematical or musical concept, your dataset may be generated instead of downloaded.)

- #link("https://opendata.slocounty.ca.gov/")[San Luis Obispo County Open Data], #link("https://data.ca.gov/")[California Open Data], #link("https://data.gov/")[data.gov], and the #link("https://www.census.gov/data.html")[US Census Bureau].
- #link("https://www.ipums.org/")[IPUMS]: integrated census and survey data from around the world.
- #link("https://www.gapminder.org/data/")[Gapminder] and the #link("https://www.fec.gov/data/")[Federal Elections Commission].
- #link("https://www.ncei.noaa.gov/")[NOAA weather datasets].
- #link("https://github.com/fivethirtyeight/data/")[fivethirtyeight.com]: code and data behind stories on 538.
- #link("https://corgis-edu.github.io/corgis/")[The CORGIS dataset of datasets]: note that these datasets are cleaned and curated specifically for educational use and may be of limited direct utility or may be out of date. However, many link to their original sources, which may be useful.

You may also consider services like #link("https://datasetsearch.research.google.com/")[Google Dataset Search], but note that you are responsible for judging the legitimacy of the data you find.

== Narrative Flow

Next, take some time to think about how your reader will move through your explorable explanation. A few sentences per prompt is fine.

- *Thesis.* What's your explorable explanation about? Specifically what are you trying to persuade the reader of? This goes beyond the high-level description of your topic in your proposal.
- *Genres.* Which Segel & Heer genre(s) (magazine style, annotated chart, partitioned poster, flowchart, comic strip, slideshow, film/animation) best describe your planned piece? You don't have to pick exactly one; you may describe a combination if that's what fits your topic. Or, if you think your topic doesn't sit comfortably in their taxonomy, say so and explain why.
- *Narrative flow.* Where does your piece sit on the author-driven ↔ reader-driven spectrum (and does it follow one of the common structures: Martini Glass, Interactive Slideshow, or Drill-Down Story), and roughly how does the reader move through it? Name the specific tactics you plan to use (e.g., how you'll order things, where you'll hand control to the reader, how you'll guide transitions).
- *Inspiration.* Link to 1–2 specific examples of explorables or interactive articles that you are using as inspiration. For each, name a concrete tactic it uses and say whether you'll borrow it, adapt it, or deliberately do something different.

== Implementation

Finalise and publish your interactive article using `d3`, deployed to the web as a publicly accessible page: either a public observable notebook, or standalone `html/js/svg` deployed as a static website using a service like #link("https://docs.github.com/en/pages")[GitHub Pages]. D3 in particular has a #link("https://observablehq.com/@d3/gallery")[vast gallery of examples] that you are encouraged to explore and adapt as you see fit. The only requirement here is that you cite your sources whenever you use code from another example. If you want to use other tools that we haven't talked about, please talk to me first.

The final interactive article should include:

- Multiple interactive visualizations that follow best practices and engagingly explain your topic, including coordination of interactions across linked graphics.
- Well-written and concise prose interspersed through your visualizations. That said, try to avoid excessive amounts of prose in your article: the reader should primarily explore your topic through your visuals, not paragraphs of text.

== Citations

Your article should clearly cite its sources, and your References section should repeat them. This includes links and attributions for your data sources, sources of design ideas or partial implementations that you used as building blocks (e.g., from the D3 example gallery), and references in support of any claims you make in your prose.

== Reflection

Finally include a short write-up reflecting on your design process. How did your thesis and narrative flow change between your proposal and your final article? Which design decisions, in your visual encodings, interactions, and narrative structure, most affect how your reader understands your topic, and what alternatives did you consider? What are the limitations of your approach, and how would you extend the article if you had more time? Your reflection should be no more than 1000 words.

== Presentation

After you have submitted your assignment PDF, you will present your article to the rest of the class during scheduled lab time, or during office hours. Your presentation should include:

- *Goal:* What was the goal of your article? Who was your imagined audience?
- *Motivation:* Why is your topic socially or scientifically important?
- *Live demo:* Demonstrate live usage of the major interactive elements. Don't try to show everything, just the important parts and the parts you're most proud of.
- *Summary:* Close with a brief summary of your article's contribution, limitations in your approach, and how you would extend it if you had more time.

You will not be considered to have submitted the assignment until you have given your presentation to show your ability to verbally explain and engage with your design and answer questions.

== Grading

I will determine scores by judging both the soundness of your design, the overall presentation and quality of the write-up, and the effectiveness of your oral presentation. I will also look for consideration of audience, message, and narrative structure. Here are examples of aspects that may lead to deductions:

- Errors or broken features.
- Clearly ineffective visual encodings, or interactions that do not support the narrative.
- Excessive prose that does the work the visualizations should be doing.
- Missing or incomplete answers to the proposal or narrative flow questions.
- Missing references for data, code, or claims.

Examples of going above and beyond the assignment requirements include:
- Effective coordination of interactions across linked graphics.
- Narrative devices that move the reader up and down the ladder of abstraction.
- Thoughtful and elegant graphic design that attends to what we've learned about effective visual encodings.

= Acknowledgement

This assignment is based on the course project by #link("https://ayaankazerouni.org/courses/csc477/spring2026/assignments/course-project/")[Ayaan Kazerouni], which is adapted from assignments by #link("https://docs.google.com/document/d/1IkLt99Wy4FsyGyVT3oPsPH9Eg-HjiyVsOyviqQSnQYc/edit?tab=t.0")[Jon Froehlich] and #link("https://courses.cs.washington.edu/courses/cse442/24au/")[Jeffrey Heer].
