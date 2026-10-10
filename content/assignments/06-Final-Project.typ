#import "../wdf.typ": *

#show: template.with(
  title: [
    Final Project: Systematic Revision
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

All design, ultimately, is re-design.
No design is ever finished and every visualization you made this quarter could be made better. For your final project you will revise and synthesize your previous work into a new, substantially improved design, using what you have learned since you made it, evidence that you gather from real users, and current visualization research.

In this project, you will:

- Choose previous work to revise, either your own, or your own together with a partner's.
- Run a user study of your previous design, with a research question placed at the appropriate level of Munzner's nested model.
- Engage with at least one paper published at IEEE VIS in the last five years, and integrate a component of its design or empirical findings into your revision.
- Produce a substantially revised and extended design that is meaningfully interactive, implemented in D3, and provide a rigorous rationale for every change you made.

Please read these directions completely before starting.

= Deliverable

Your deliverable on Gradescope will be a single PDF document (one per team). The document should have page breaks and headers for each part of the project.
- For the section on your previous work include your original submission(s) (or screenshots of them), and the feedback you received.
- For the user study section include every item required in the Mini User-Study lab activity (see User Study below).
- For the research section include the citation for your chosen paper(s) and your summary of how they inform your revision.
- For the revision section include your sketches and screenshots of your revised design, side by side with the corresponding parts of the original, as well as publicly accessible links to your deployed revision and to the github repository or observable notebook containing its source code.
- For the write-up section include your short write-up.
- Finally include a section of References for the data used, the papers you engaged with, as well as any design inspiration, other libraries, or resources used for any part of the project.

= Individual or Team

You may complete the final project individually, or in a team of up to three students. The scope of the project is up to you:

- *Individual:* a revision and synthesis of your own previous work. This can be a revision of a single previous assignment, or a synthesis of more than one of them (for example, combining the explanatory graphic from Assignment 2 with the interactive exploration from Assignment 4 into a single piece).
- *Team (2–3 students):* a revision and synthesis of your own and your partners' previous work #sidenote()[For the team version, all team members' original work must be included in the revision. So while some things are easier as a team, the actual task of coherently putting together more different sources is more difficult.], combined into a single new design. Every team member should be able to explain every part of it.

Whichever you choose, the revision must stay recognizably connected to the questions and data of the original work so that the two can be compared, though you may extend its scope, for example by joining additional data, supporting additional tasks, or adding narrative structure to an exploratory design. Let me know your choice of team and previous work as early as possible.

*Regardless of which previous work you start from, your final visualization must be interactive in a meaningful way.* Interaction should do real work for the reader: letting them ask questions of the data that a static view could not answer, move between overview and detail, compare alternatives, or step through an argument. A tooltip or a hover highlight added to an otherwise static graphic is not enough on its own. If you start from a static assignment, deciding what interaction your design actually needs, and why, is one of the central design problems of your project.

== Possible Extensions

The following are some quick sketches of what an extension of each assignment might look like. They are meant to be starting points in case you are having trouble deciding what to do, certainly do no take this as a complete list of options, the best projects will follow from what your own critique, study, and research turn up and end up as something I could not have predicted.

- *Assignment 1 (Visualization in the World):* Rebuild one of the visualizations you critiqued, using its original data (or the closest public equivalent), as an interactive redesign that addresses the weaknesses you identified. For example, a static news chart that only shows a national total could become a linked map and timeline that lets readers find their own region and see how it compares.
- *Assignment 2 (Explanatory Visualization):* Turn your static infographic into an interactive explanation that preserves its argument. Your annotations and callouts could become steps in an author-driven sequence (a stepper or scrollytelling), with the reader handed control at the end to explore the data behind your claim (a martini glass structure), and with details on demand for the data points your infographic could only summarize.
- *Assignment 3 (Ethical and Deceptive Visualization):* Build an interactive piece that lets readers experience the deception for themselves: toggling between your ethical and deceptive designs, or adjusting the individual choices (axis baseline, aggregation, filtering, title framing) one at a time to see how each one changes the conclusion. A user study could measure how well readers detect each choice.
- *Assignment 4 (Interactive Explorations):* Deepen the exploration rather than simply polishing it: add coordinated multiple views with linked brushing, support a new task your user study shows readers need, scale it to a larger or richer dataset, or add guidance (annotations, suggested starting views) for readers who do not know where to begin.
- *Assignment 5 (Data Storytelling):* Revise your article in response to how readers actually moved through it. Your study might reveal where readers lost the thread, skipped past a visualization, or drew a different conclusion than you intended. Your revision could restructure the narrative flow, add linked interactions across the article's graphics, or move readers more effectively up and down the ladder of abstraction.

== Possible Team Combinations

A team project should combine its members' previous work into a single design that is more than the sum of its parts, not just place the pieces side by side. A few possibilities:

- *Shared or related data:* If two members used related datasets (for example, one on housing costs and one on commute times in California), join them into a single linked exploration in which a selection in one member's view filters or highlights the other's, supporting questions that neither original could answer alone.
- *Explanation plus exploration:* Combine one member's explanatory infographic (Assignment 2) or data story (Assignment 5) with another member's interactive exploration (Assignment 4) so that the narrative makes the argument while the exploration lets the reader test their own ideas against the full data.
- *Ethics across designs:* Combine members' Assignment 3 work into a comparative piece on the ways visualizations of a topic can mislead, drawing on each member's deceptive techniques and studying which readers detect most and least often.
- *Different audiences:* Take two members' designs about related topics and rework them as one piece with views for different audiences (for example, a general-audience overview and an expert drill-down), with the user study comparing how each audience uses it.
- *Three-way synthesis:* For a team of three, each member's previous design can become one chapter or view of a larger coordinated piece, provided that the views are linked by shared data and interaction and that the whole has a single clear thesis.

#pagebreak()
= Critique

Begin by critiquing your previous work as you would a visualization in the world, now with the full vocabulary of the course. How you approach this is up to you: consider what the design does well and where it falls short, and the feedback you received on it from me and from your classmates. The goal of this critique is to identify the open questions that your user study, your research, and your revision will address.

= User Study

While your critique is based on your own judgement, the best source of feedback is to gather evidence from users. Plan and run a user study of your design #sidenote()[Your study must at least include your original design as a baseline, and then should also include your final design/variants to measure against the original.] following the Mini User-Study lab activity, and include in your submission all of the items it requires:

- Images of every variant you showed, and a one-line statement of exactly what differs between them.
- Your research question, stated as a well formed testable claim (with its construct#sidenote()[What you care about], task#sidenote()[What the user is asked to do, and how that ellicits what you care about], and measure#sidenote()[What you actually write down for your data, and why that is connected to your construct in the context of the task.]), with the nested-model level it sits at and why.
- Your research design, including independent variable(s), dependent variable(s), what you held constant, and whether it is within- or between-subjects.
- Your task protocol, including what you said, what participants saw, in what order, and how you recorded responses, and a note on your pilot.
- Your data, as a table or a link to it, plus the number of participants and trials.
- Your analysis, including at least one visualization of your results.
- Design implications of your findings: what you should do differently because of what you found, and importantly what your study _cannot_ tell you.

Choose the level of the nested model at which your most important open question sits, and a method appropriate to that level: a controlled experiment for an encoding-level question, or a qualitative method such as a think-aloud protocol for an abstraction-level question. Unlike the lab, your participants should, as far as possible, be members of the intended audience of your design rather than students in this class. Keep the study small: its purpose is to direct your revision, not to be conclusive.

= Research

Find and read at least one full paper published at #link("https://ieeevis.org/")[IEEE VIS] (published in _IEEE Transactions on Visualization and Computer Graphics_) in the last five years that is relevant to your design. The #link("https://virtual.ieeevis.org/")[IEEE VIS virtual conference archive] lists every paper with its video and abstract, and the papers we discuss in the VIS 2026 paper seminars are a good place to start.

Integrate some component of the paper into your revision. For a design paper, this could be a technique, an idiom, or a set of design guidelines; for an empirical paper, this could be a finding about how people read or use a visualization, which should change one of your design choices or the design of your user study. In your submission, summarize the paper's contribution in a paragraph, and explain specifically what you took from it, how you adapted it to your design, and where your design departs from it and why.

= Revision

Based on your critique, your user study, and your research, revise and extend your design. Sketch (with pen and paper!) alternative designs for the parts of your design you are changing before implementing them, and use `d3` to implement your interactive revision in either an observable notebook or as standalone `html/js/svg`, deployed to the web as a publicly accessible page.

Your revision should be _systematic_: every substantial change should be motivated by your critique, your study, or your research, and a reader of your write-up should be able to trace each change back to its motivation. Prefer a few substantial, well-motivated changes to many cosmetic ones.

= Write-up

Your write-up should document the story of your revision. For each substantial change, state what motivated it, the alternatives you considered, and what you chose and why. Close with a short reflection on how your approach to design has changed since you made the original work. While your write-up should be thorough, it should also be concise and no more than about 2000 words#sidenote()[Of course, if you can include everything in less space that would be great.].

= Presentation

You will present your project during the Project Colloquium in the scheduled final exam period. Every team member should present part of the talk. Your presentation should include:

- *Original:* What were the questions and designs of your previous work?
- *Evidence:* What did your user study find, and what did you take from your chosen paper?
- *Revision:* Show the original and revised designs side by side (with a live demonstration), and walk through your most important changes.
- *Summary:* Close with what you would still change, and what you learned.

= Grading

I will determine scores by judging the quality of your user study, the depth of your engagement with your chosen paper, the soundness and extent of your revision, how clearly each change is motivated, the overall presentation and quality of the write-up, and the effectiveness of your oral presentation. Here are examples of aspects that may lead to deductions:

- Having only changes that are cosmetic, or that are not motivated by your critique, study, or research.
- A user study missing any of the items required by the Mini User-Study lab activity, or whose method does not match the nested-model level of its question.
- A paper that is not from IEEE VIS in the last five years, or that is cited but not meaningfully integrated into the revision.
- A final visualization that is not meaningfully interactive, or whose interactions do not support its tasks.
- Missing comparison between the original and revised designs.
- Missing references for external data, code, or papers.

Examples of going above and beyond the project requirements include:
- A synthesis that combines previous work into something substantially more than its parts.
- A user study whose findings change the design in ways that you could not have anticipated from your critique alone.
- Outstanding visual design that attends to what we've learned about effective visual encodings, ethics, and accessibility.
