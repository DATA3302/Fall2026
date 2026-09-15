#import "../wdf.typ": *

#show: template.with(
  title: [
    Assignment 2: Explanatory Visualization in the World
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

An expository visualization requires the author to investigate an idea, evaluate evidence, expound on the idea, and set forth an argument concerning that idea in a clear, concise, and engaging manner.

In this assignment, you will:

- Design (with pen and paper) expository visualizations to clearly communicate an idea based on a provided data set,
- Implement visualizations using D3 + SVG.
- Refine a thoughtfully designed info-graphic based on your visualizations.
- Provide a rigorous rationale for your design choices. You should, in theory, be ready to explain the contribution of every pixel in the display towards your expository goals.

Please read these directions completely before starting.

= Deliverable

Your deliverable on Gradescope will be a single PDF document. The document should have page breaks and headers for each part of the assignment.
- For the section on sketching include photos of each of your sketches
- For the section on implementation include screenshots/exports of your implementations as well as publicly accessible links to github or observable for the source code for data processing and visualization implementation.
- For the section on refinement include the final infographic
- For the reflection section include your short write-up
- Finally include a section of References for the data used, as well as any design inspiration, other libraries,  or resources used for any part of the assignment,

== Dataset Selection

The first step in any data visualization project is, of course, the data itself. For this assignment you will have the opportunity to choose your own dataset of interest. Additionally you are not limited to using a single dataset, the best visualizations will use information from multiple sources and join or comibine them in interesting ways. A few resources to use when looking for a dataset:

- The #link("https://corgis-edu.github.io/corgis/")[CORGIS Repository] includes a ton of nicely processed interesting datasets
- #link("https://data.ca.gov/")[California Open Data] has many sources of data of relevance to us here in California
- #link("https://www.gapminder.org/data/")[Gapminder] has many global human development data, e.g., population, life expectancy, income, C02 emissions.
- Historically #link("https://www.data.gov/")[data.gov] and the #link("https://www.census.gov/data.html")[US Census Bureau] also have a wide range of interesting data sources
- Of course, even better than this is if you have access to your own unique or interesting datasets from your life outside this class!

Once you have selected your datasets, make sure to cite the source in the references section.


== Sketching

In this part, you will sketch (with pen and paper!) three visualization design and provide brief reflections of your designs. You should explicitly not analyze or visualize the assignment dataset with any tool or toolkit, other than checking to see what the data model is so you know what attributes and data types you have access to.

Sketching is a critical part of the human-centered design process. Sketching allows us to rapidly explore initial ideas cheaply and quickly. And, as we sketch, we generate new ideas. In this way, sketching is generative—sketches “talk back” us and sketching engenders new or more concrete ways of thinking as we manifest ideas on the page. Sketches are also easy to share and solicit feedback without heavy investment into any one idea. And research has shown that exploring several ideas in parallel can lead to better designs.

Sketching may not always be appropriate for every data visualization. Indeed, in some cases, it’s advantageous to immediately use a visualization tool or dive directly into coding. However any tool, whether it’s pen and paper, d3, or Excel, brings both opportunity and constraints and will influence your thinking, insights, and, ultimately, your final solution. Be aware of how tool choice informs your thoughts and design ideas.

In the context of our course, there are educational benefits as well: sketching strips away superfluous adornments and feature richness and forces you to think deeply about visual form, data representation, and graphical encoding. Concepts that we will continue discussing throughout the course.

As with any new skill development, sketching can be intimidating, especially if you’re used to purely digital tools. To help you approach these sketching exercises, I suggest reading these excerpts from #link("https://www.dropbox.com/s/e0ytm04p4zr5xmm/Greenberg_SketchingUserExperiences_TheWorkbook2012_SelectedPagesOnSketching.pdf?dl=0")[Greenberg et al., 2012] and #link("https://www.dropbox.com/s/m15s4xe55d94zg4/Buxton_SketchingUserExperiences2006_Pages104-125.pdf?dl=0")[Buxton et al., 2007].

Start by choosing a question you’d like your visualization to answer. You’re encouraged to base your question on a combination of the provided dataset and some externally obtained data. I advise to start with a relatively small-scope question—this assignment is fairly open-ended and I want you to spend more time on the visualization than on scouring the Web for additional data sources. Then, design your visualization to answer that question. When iterating designs, think carefully about the user tasks that are required to engage the overall question, and the user targets that your visualization provides to support those tasks.

Your sketches do not need to include every datapoint, or even precisely represent the data. The goal at this point is to think about data representation, communicating through visualization and sketching different visualization designs. I encourage you to use sharpies, colour pencils, or pens to control line thicknesses and colours.

After producing your three different initial sketches, perform one more round of ideation and produce variants/combinations/refinements on those three ideas to produce a second set of three sketches. Sketching is iterative, and ideas require not only revision but also the presence of more different ideas in context to help come up with new better variants.

== Implementation

Once you have finished ideating with three distinct concepts, _roughly implement_ your two best ideas. Use `d3` to implement the ideas in either an observable notebook or as standalone `html/js/svg` #sidenote()[If you are having particular trouble implementing your design in d3, the #link("https://observablehq.com/@d3/gallery")[d3 gallery] is a great resource to help you have some template code that you can adapt.]. You will likely iterate further on your designs in this stage. That’s fine. There’s no requirement that your final design look exactly like your sketch. Remember that the goal for this assignment is a static visualization (potentially made up of multiple layered or concatenated views).

Once you can see your designs in a true implementation context you will be able to not only see what the design _actually is_ rather than what you _thought it would be_, but also you will start developing your design sense on what is easy/difficult to implement and what does and does not translate well from sketch form.

== Refinement

Once you have created two visualization implementation, export them as SVG's and import them into a new design in a visual editor like Figma, Adobe Illustrator, Canva, Inkscape, or a different design software of your choice. From here you can refine your visualization, compose multiple visualizations together, create callouts, and form a coherent standalone infographic that tells a story about the dataset (and any additional data you integrated).


Think carefully about every pixel and design choice, remembering you are not limited by the way in which your implementation places and renders elements like axes, legends and so on. You can include a single more complex visualization, or compose multiple and point out connections between them. Like the sketching phase, you have close to unlimited design flexibility so be sure to explore that space. Make sure that your final infographic is self contained, and effectively communicates the core ideas without needing to reference anything outside of the graphic itself.

== Write-up

After going through this iterative design process you will have noticed the influences of the different tools used, and how different visualizations can emphasize different aspects of a data set. For this final write-up you should document your process, explaining what aspects of the data you are attempting to most effectively communicate and why each design choice was made at each point in the process. In short, what story are you trying to tell? And what is the story of how you came to tell it the way you did? Just as important as the choices you did make, also note which aspects of the data might be obscured due to your visualization design, and alternatives you may have considered.

Your write-up should provide a rigorous rationale for your design decisions. Document the visual encodings you used and why they are appropriate for the data and your specific question. These decisions include the choice of visualization type, size, colour, scale, and other visual elements, as well as the use of sorting or other data transformations. How do these decisions facilitate effective communication?

While your write-up should be thorough, it should also be concise and no more than about 1000 words.

== Presentation

After you have submitted your assignment PDF, you will be able to actually present your design to the rest of the class during scheduled lab time, or during office hours. You will not be considered to have submitted the assignment until you have given your presentation to show your ability to verbally explain and engage with your design and answer questions.


== Grading

I will determine scores by judging both the soundness of your design, the overall presentation and quality of the write-up, and the effectiveness of your oral presentation. I will also look for consideration of audience, message, and intended task. Here are examples of aspects that may lead to deductions:

- Use of misleading, unnecessary, or unmotivated graphic elements.
- Missing chart title, axis labels, or data transformation description.
- Ineffective encodings for your stated goal (e.g., distracting colours, improper data transformation).
- Missing or incomplete design rationale in write-up.
- Missing references for external data.
- Lack of clarity and/or engagement with the design process in the write-up.

Examples of going above and beyond the assignment requirements include:
- Entries with outstanding visual design
- Meaningful incorporation of external data and context to reveal and explain important trends
- Entries that demonstrate exceptional creativity, or effective annotations and other narrative devices.

= Acknowledgement

This assignment is based on assignments by #link("https://docs.google.com/document/d/1k4WHViGAGRN02-kNpxR2J2aTWZg1LhDf6MgbgYMqM88/edit?tab=t.0#heading=h.5q6g0flf43al")[Jon Froehlich] and #link("https://ayaankazerouni.org/courses/csc477/spring2025/assignments/a3-expository-visualization/")[Ayaan Kazernouni].
