#import "../wdf.typ": *

#show: template.with(
  title: [
    Course Syllabus
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

= Course Information and Contacts

#colorbox()[
  *Professor*: _Dr. Austin P. Wright_\
  *Email*: `awrigh20@calpoly.edu`\
  *Office Hours (In person at 14-222:)*:
  - Mondays 11-12, and Mondays, Tuesdays, and Wednesdays from 1pm-2pm.
  - By appointment at #link("https://calendly.com/awrigh20-calpoly/30min")[https://calendly.com/awrigh20-calpoly/30min].
]

#colorbox()[
  *Course Homepage*:https://data3302.github.io/Fall2026\
  *Gradescope*: https://www.gradescope.com/courses/1355368  |  *Entry Code*: B5V484 \
  *Edstem*: https://edstem.org/us/join/r9sw4p\
]


= Learning Objectives

The primary learning objectives for this course, as outlined in the course catalog, are that you will be able to:
+ Create basic and advanced charts that communicate insights from data.
+ Select appropriate visualization techniques for different types of data.
+ Work in a team to visualize real-world data to persuasively tell a story.
+	Communicate insights from data using multiple displays and dashboards.
+ Critically evaluate visualizations and suggest improvements and refinements.
+ Use principles of human perception and cognition in visualization design.


= Assessment and Grading


Your grade for this course will be based on three kinds of assessment: Participation, Exams, Assignments, and your Final Project. All of these assessments are designed to provide as much flexibility as possible to take into account the various things that come up throughout a semester and to allow you to improve and learn without fear of failing the first time hurting your overall grade. The policies to support this will vary by assessment type and are outlined in the corresponding subsections.


== Grading Scale
Every assessment will ultimately be graded on a coarse grain scale of 0-3, where each value corresponds to the letter grade representing the degree of mastery over the material demonstrated through the assessment#sidenote(dy:-10em)[Even when an assessment internally uses some kind of points tabulation, the actual grade will be based on a holistic evaluation of the overall assessment, and so any thresholds used to determine specific assessment grades will vary.].

#colorbox(title: "Grading Scale")[

  *3* : This corresponds to $A$ level work#sidenote()[Keep in mind that genuine mastery is the _exception_ and hard to come by. You should not expect to be able to achieve this level on a first attempt for most of the assignments.]\ _Mastery of the material and full achievement of the learning objectives._

  *2*: This corresponds to $B$ level work \ _Good, if incomplete, understanding of the material and achievement of learning objectives._

  *1*: This corresponds to $C$ level work\ _Minimum  working understanding of the material and achievement of learning objectives._

  *0* : This corresponds to failing work\ _Insufficient demonstration of understanding of the material or achievement of learning objectives._
]

== Participation

Both in lecture and lab sessions there will be many opportunities for interaction, participation, and in class exercises. Your participation in these activities is what makes the class work, not just for you, but also for everyone else in the class. Participation is expected and so a portion of your final grade is dependent on your engagement. Your participation grade does not depend at all on whether you get questions correct or how good your in class activity submissions are, it only depends on how regularly you are able to show up and engage with the material and the rest of the class. While perfect attendance is not required to score a $3$ on this assessment#sidenote()[Nor would it be a guarantee as just showing up is not the same thing as participating!], since nobody is immune to the slings and arrows of outrageous fortune, I expect your best effort to make the class work.

== Exams

The course will include two non-cumulative written midterm exams taking place in the weeks indicated on the course schedule covering the material up to that point in the course. On the listed exam weeks, the Monday lab section will be dedicated to exam practice and review, the Wednesday lab section will be dedicated to taking the exam, and the Friday lab section will be dedicated to going over the exam. For each exam you will be able to bring in one hand written, double sided, study sheet.

I understand that sometimes life happens, maybe you got sick and were not be able to study very well for an exam, or a topic may be difficult and require more time to get a handle on. There are all sorts of reasons why any given exam on any given day may not be representative of what you can do, but I am not really interested in judging the validity of different situations and would prefer everyone get a baseline level of consideration that should cover all but the most exceptional circumstances. *Therefore, at the end of the course you will have an opportunity to re-take either of the two exams for full credit.* Make-up exams will cover the same material but with different questions and give you a second opportunity to show mastery over the material with no penalty#sidenote(dy:-5em)[Of course, this does not mean you can skip everything. Only one of the two exams can be retaken, and so you cannot just blow everything off until the very end of the quarter. You should still try your best on your first attempts when you can. Additionally, the re-take exams are likely to be somewhat _more_ difficult than the corresponding initial exams to account for the additional time to prepare.]. If you have an exceptional circumstance preventing you from making-up a missed exam or you are forced to miss both exams, please talk to me as soon as possible to figure out what can be done.

== Assignments

Throughout the course there will be five out of class individual assignments complementing the in-class activities and preparing you for the final project. The ability to respond to feedback is a core design competency this course is designed to build, and so all of the assignments may be revised and resubmitted as many times as required up until the final week of classes#sidenote()[However be warned, this should not be used to blow off everything until the very end. The first round of submission without revisions is very unlikely to result in a high score. Additionally make sure to take into account the time required to set up and conduct the assignment crit.]. All work on assignments must be your own, independent, original work. A substantial part of how many of the assignments will be assessed is through one-on-one crits where you will have to explain design choices and answer questions about your implementation as well as respond to critiques. Time will be put aside during lab sections for these crits, as well as time being available during office hours.


== Final Project

The most interesting single thing you will do in this course will be your final project. In this project you will have substantial freedom to choose what you work on, and more details will be forthcoming later in the quarter. You will complete the final project in teams of 2-4 students, and so I highly recommend you get to know the other students in the class, find anyone with similar interests, and get started as early as possible. Throughout the course there will be many check-in meetings scheduled during lab sessions to help get feedback and keep on pace, as well as intermediate deliverables.

== Final Grade

The goal of this course is to ensure that you are able to achieve a certain standard in all of the learning objectives of the course. What this means is that proficiency in one area does not "make up for" deficiencies in another. Therefore, in order to receive an particular grade in the course, you are expected to _meet a certain standard across all of the assessments in the course_.#sidenote(dy: -5em)[While in this system you must, by the end of the course, achieve the requisite level across all of your assessments, you have ample opportunity for retakes and drops in order to take any given bad day into account. Additionally your final project can always make a meaningful impact to help your grade, regardless of what you have on the other assessments.] This is done through three mechanisms:

1. You must score at least within one coarse point of your final grade on every included assessment#sidenote()[So in order to earn an $A$ in the course, you must earn at least a $B$ on every assessment. To earn a $B$ you must earn at least a $C$ across the board, etc...]
2. Within that limit, your final letter grade will be determined by the median of your assessments
3. Your final project will determine $+$ and $-$ grades

In more slightly more formal terms, the grading policy of this course can be given by letting the set of assessment grades $G$ be:
$
  G = {P, "MT"_1, "MT"_2, A_1, A_2, A_3, A_4, A_5 }
$
Where $P$ is your participation score, $"MT"_i$ are your midterm scores and $A_i$ are your assignment scores. We can then calculate your final letter grade $F$ as given by
$
  F = min(min(G) + 1, text("median")(G))
$
Finally, your final project will determine any plus and minus modifiers as well as determining rounding in cases of a median in-between grades.

#pagebreak()

#wideblock()[
  = Schedule
  Below is a tentative schedule of the topics we will cover in the course. As the semester progresses things may change, so pay attention to announcements/notifications/emails.


  #figure()[
    #table(
      columns: 4,
      align: left,
      table.header(
        [*Week*], [*Dates*], [*Lecture*], [*Lab*]
      ),
      [1],  [August 24, 26, 28],  [Course Introduction,  History of Visualization],  [Course Onboarding],
      [2],  [August 31,  September 2, 4],  [Data and Design Processes],  [Sketching, SVG, and Observable],
      [3],  [September 9, 11],  [Grammar of Graphics],  [Observable Plot],
      [4],  [September 14, 16, 18],  [Human Factors],  [Mini User-Studies],
      [5],  [September 21, 23, 25],  [Evaluation and Critique],  [Design Crits],
      [6],  [September 28, 30,  October 2],  [Composition],  [Midterm 1],
      [7],  [October 5, 7, 9],  [Interaction],  [Introduction to D3],
      [8],  [October 12, 14, 16],  [Uncertainty],  [D3 Continued],
      [9],  [October 19, 21, 23],  [Ethics and Deception],  [Clarification and Obfuscation],
      [10],  [October 26, 28, 30],  [Spatiotemporal Visualization],  [Maps and Animations],
      [11],  [November 2, 4, 6 ],  [Advanced Visualizations],  [Midterm 2],
      [12],  [November 9, 13],  [VIS 2026],  [Paper Seminars],
      [13],  [November 16, 18, 20],  [Storytelling and Narrative],  [Scrollytelling],
      [Fall Break],  [November 23, 25, 27],  [],  [],
      [14],  [November 30,  December 2, 4],  [Accessibility],  [Project Studio],
      [15],  [December 7, 9, 11],  [Special Topics],  [ Project Studio, Makeup Exams],
      [Finals],  [December  14 1:00PM-3:30PM],  [Project Colloquium],  [],
    )
  ]
]
#pagebreak()


= Policies

== Classroom Conduct

Our classroom and lab are to be places of learning and inclusion. Students of all ages, abilities, background, race, sexual orientations, beliefs, religious affiliations, gender identities, and origins are to be treated with dignity and respect as contributors to our scholarly environment. Recognizing the following points is a non-negotiable prerequisite to participate in this course:

- _*We recognize that every single student in the class belongs here*_. We all have different backgrounds and experiences and we are not snobs about which backgrounds do or don't count.
- After our work is complete, we prioritize the education of others and actively offer to help, explain, debug, etc. in order to support one another’s learning. We do not share our working solution, but explain the logic/thinking behind our solution and help others recognize errors in their implementation when invited to do so.
- We consistently make the effort to recognize and validate multiple types of contributions to a positive classroom environment.



== Attendance
While attendance is not explicitly tracked every day, I strongly recommend that you attend every lecture. Anything I say in class is fair game for exams (within reason and unless specified otherwise). If you’re unable to attend class for some reason, drop me a note to let me know. This way if there’s an activity that class period, I can give you an opportunity to make it up with regards to your participation grade.

My goal is for lectures to be interactive which only works when people show up. There will be frequent small group discussions, and I am also likely to call on individual students. If I call on you, it’s totally okay to get an answer wrong or to not know the answer#sidenote()[Indeed, this is probably a sign that I have moved too quickly or been unclear about something. But I can only learn that and make adjustments if people are in class and able to speak up.]. However, if being called on is likely to be uncomfortable or disruptive for you, let me know.

I don’t allow the use of laptops during lecture sessions without special dispensation. There is plenty of evidence that suggests that laptops and other devices are distracting not only to the student using them, but also to those around them. Additionally, taking handwritten notes tends to lead to better learning outcomes#sidenote()[https://journals.sagepub.com/doi/abs/10.1177/0956797614524581]. If you need a laptop to take notes in class, please talk to me. You will have the opportunity to use your computer during lab sections.

== Course Notes
My goal is to make my course/lecture notes and/or slides available to you as a study resource. They will be able to be uploaded after class and available on the course website. However, it is essential that you realize that these are not complete or sufficient to replace taking your own notes, but rather they may help you structure your notes and studying.

The primary purpose of the course notes and slides is to help _me_ structure and keep on track in lecture, but of course _I already know the material_ and so what I need to have written in order to lecture is very different than what you need to write to internalize the material for the first time. You are still responsible for the content actually covered in lecture.


== GenAI/LLM Use

The goals for this course are for _you_ to master the material, which can only be done if _you_ are the one doing the work. Therefore I must emphasize that for this class *_you cannot use Generative AI or Large Language Models for any aspects of writing, design, or critique_*. I want to see how you explore design space, make choices, and explain and defend those choices, and so a substantial portion of the grade for every assignment is based on your ability to articulate and discuss those choices.

That being said, this course does not have a learning objective of teaching you how to code#sidenote()[This is assumed as a prerequisite for the course]. Therefore use of AI development tools for writing code and implementation is allowed. However, be very careful, as you will still be completely responsible for everything you submit and it is a very slippery slope to vibe-design, which would result in failing scores. We learn best by struggling and surmounting challenges. Uncritical reliance on GenAI tools will short-circuit this process. Sure, you will get an answer quickly, but the answer is not our objective; our objective is the process that gets us there. (Just like the goal of lifting weights in the gym is not just to have the weights in the air.)

If you do use AI assistants to help you study, you’re encouraged to put them in “study mode” first. Different companies have different names for this:

- “Study mode” in ChatGPT
- “Learning mode” in Claude
- “Guided learning” in Google Gemini

These “modes” nominally do not jump straight to an answer, but try to lead you to an answer while helping you build your understanding. Even still, be very wary of these tools even in a guard-railed state. Think very hard about how, if you do not develop the fundamental skills and you need such tools in order to succeed, what your ultimate value is after graduation.
