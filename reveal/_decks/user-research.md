---
title: Visualization User Research
description: Human subjects research and evaluation for visualization design
order: 2
course: DATA 3302 Fall 2026
---


# Visualization User Research

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Structured around Munzner's nested model. Adapted from CSC 486 (HCI) and the visualization-evaluation literature cited throughout.

---

[big vcenter] Did we build the visualization right?

---


[big muted] Did we build the visualization right?

[big vcenter] Did we build the right visualization?

---



```diagram
node world (0,0) "World"   
node human (4,0) "Human"   
node data (1,1) "Data"    
node design (3,1) "Design"

edge world data via (0,1) 
edge data design label="Encoding"
edge design human via (4,1)
edge human world  label="Interpretation"

```
---

```diagram
node world (0,0) "World"   
node human (4,0) "Human"   
node data (1,1) "Data"    
node design (3,1) "Design"

edge world data via (0,1) 
edge data design label="Encoding"
edge design human via (4,1)
edge human world  label="Interpretation" color=gold

```

---

## The Nested Model

---

```diagram
node domain (0,0) enclose (3.8,2.1) "Domain Characterization" color=gold
node abstract (0.14,0.40) enclose (3.66,2.0) "Abstraction Design" color=green
node encode (0.28,0.80) enclose (3.52,1.9) "Encoding Design" color=blue
node algo (0.42,1.20) enclose (3.38,1.8) "Algorithm Design" color=magenta
```

> Munzner, T. (2009). *A Nested Model for Visualization Design and Validation.* IEEE TVCG, 15(6).

---

```diagram
node domain (0,0) enclose (4.4,2.1) "Domain: solving the wrong problem" color=gold
node abstract (0.16,0.40) enclose (4.16,2.0) "Abstraction: doesn't address the problem" color=green
node encode (0.32,0.80) enclose (3.92,1.9) "Encoding: ineffective communication" color=blue
node algo (0.48,1.20) enclose (3.68,1.8) "Algorithm: slow or erroneous computation" color=magenta

node errors (2.2,-0.5) "Different ways to get it wrong" nostroke fill=none
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.92) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,1.38) enclose (3.24,2.54) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.84) enclose (3.06,2.40) "Algorithm Design" color=magenta label-pos=nw

node eval (1.80,0.69) "observe users with existing tools" nostroke fill=none color=gold w=2.6 h=0.34
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,1.38) enclose (3.24,2.54) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.84) enclose (3.06,2.40) "Algorithm Design" color=magenta label-pos=nw

node eval (1.80,1.15) "justify the task translation" nostroke fill=none color=green w=2.6 h=0.34
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (3.24,2.54) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.84) enclose (3.06,2.40) "Algorithm Design" color=magenta label-pos=nw

node eval (1.80,1.61) "justify design choices" nostroke fill=none color=blue w=2.6 h=0.34
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (3.24,2.54) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (3.06,2.40) "Algorithm Design" color=magenta label-pos=nw

node eval (1.80,1.85) "analyze complexity" nostroke fill=none color=magenta w=2.6 h=0.34
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (3.24,2.54) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (3.06,2.40) "Algorithm Design" color=magenta label-pos=nw
node impl (0.72,1.9) enclose (2.75,2.0)  color=ink label-pos=nw


node eval (1.80,2.17) "measure system performance" nostroke fill=none color=magenta w=2.6 h=0.34
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (3.24,2.54) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (3.06,1.94) "Algorithm Design" color=magenta label-pos=nw
node impl (0.72,1.9) enclose (2.75,2.0)  color=ink label-pos=nw

node eval (1.80,2.31) "measure human responses in a lab" nostroke fill=none color=blue w=2.6 h=0.34
```

---



```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.68) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (3.24,2.08) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (3.06,1.94) "Algorithm Design" color=magenta label-pos=nw
node impl (0.72,1.9) enclose (2.75,2.0)  color=ink label-pos=nw

node eval (1.80,2.45) "observe use in context" nostroke fill=none color=green w=2.6 h=0.34
```

---


```diagram
node domain (0.0,0.00) enclose (3.6,2.82) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (3.42,2.22) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (3.24,2.08) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (3.06,1.94) "Algorithm Design" color=magenta label-pos=nw
node impl (0.72,1.9) enclose (2.75,2.0)  color=ink label-pos=nw
node eval (1.80,2.59) "measure adoption and impact" nostroke fill=none color=gold w=2.6 h=0.34
```
---

```diagram
node domain (0.0,0.00) enclose (2.6,2.42) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (2.42,2.22) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (2.24,2.08) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (2.06,1.94) "Algorithm Design" color=magenta label-pos=nw

```
---

```diagram
node domain (0.0,0.00) enclose (2.6,2.42) "Domain Characterization" color=gold label-pos=nw
node abstract (0.18,0.46) enclose (2.42,2.22) "Abstraction Design" color=green label-pos=nw
node encode (0.36,0.92) enclose (2.24,2.08) "Encoding Design" color=blue label-pos=nw
node algo (0.54,1.38) enclose (2.06,1.94) "Algorithm Design" color=magenta label-pos=nw


node cs (3.5,1.75) "CS" nostroke color=magenta h=0.35
node psych (3.5,1.25) "Psych" nostroke color=blue h=0.35
node design (3.5,0.75) "Design" nostroke color=green h=0.35
node ethno (3.5,0.25) "Ethnography" nostroke color=gold h=0.35

node methods (3.5,-0.25) "Methods" nostroke fill=none h=0.35


```


---

[vcenter]
>[!magenta] Consider
>
> A university library builds a tool that shows checkout patterns across the whole collection as a zoomable treemap, colored by circulation count, with hover tooltips. Designers put special care to ensure that the heatmap color scheme was highly perceptually accurate and colorblind safe.
>
> Three months later, it turns out that almost nobody returns after one visit. In interviews students make statements such as:
>
> >"I don't care which books get checked out most! I want to know if a _specific_ book that I need is available right now." 

<br/>  <br/> <br/>


::: 

[vcenter]
>[!green] In groups answer:
> 1. Which of the four levels failed?
> 2. Which level did the design team focus on? And why did that not work?
> 3. Which validation method would have caught the issue before a line of code was written or sketching even started?

<br/>  <br/> <br/>

---

## Go to the user


---


```diagram
node background (-0.5,-0.5) enclose (2,2) nostroke color=none

node h0 (0,0) "Human"
node v0 (2,0) "Visualization"



node top (-0.5,-0.5) "" nostroke color=none
node bottom (-0.5,2.5) "" nostroke color=none


edge v0 h0 label="percieve"

```
---

```diagram
node background (-0.5,-0.5) enclose (2,2) nostroke color=none

node h0 (0,0) "Human"
node v0 (2,0) "Visualization"


node top (-0.5,-0.5) "" nostroke color=none
node bottom (-0.5,2.5) "" nostroke color=none


edge v0 h0 label="percieve"
edge h0 v0 via (0,0.5) via (2,0.5) label="interact"

```
---

```diagram
node background (-0.5,-0.5) enclose (2,2) nostroke color=none

node h0 (0,0) "Human"
node v0 (2,0) "Visualization"

node v1 (2,1) "Visualization"
node h1 (0,1) "Human"
node h2 (0,2) "Human"

node v2 (2,2) "Visualization"


node top (-0.5,-0.5) "" nostroke color=none
node bottom (-0.5,2.5) "" nostroke color=none


edge v0 h0 label="percieve"
edge h0 v1 via (0,0.5) via (2,0.5) label="interact"
edge h1 v2 via (0,1.5) via (2,1.5) 
edge v2 h2
edge v1 h1
edge top bottom


```
---

## Models of Interaction


---

### Models of Interaction

[vcenter]
> [!blue] Predictive Model
>
> Gives you an equation.
>
> e.g.: MT = a + b·log₂(D/W + 1)
>
> Supplies the **dependent variable** for a controlled experiment.

:::

[vcenter]
> [!blue] Descriptive Model
>
> Gives you categories.
>
> e.g.: "Select, Explore, Filter, Connect"
>
> Supplies the **coding scheme** for an observational study.


---

### Predictive Models

[big vcenter] Fitt's Law

[big vcenter] MT = a + b·log₂(D/W + 1)

[big vcenter muted] Movement time grows with distance, shrinks with target width.


> Fitts, P. M. (1954). *The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement.* Journal of Experimental Psychology, 47(6).


---
### Predictive Models

[big vcenter] Hick's Law

[big vcenter] RT = a + b·log₂(n + 1)

[big vcenter muted] Decision time grows with the logarithm of the number of options.

> Hick, W. E. (1952). *On the Rate of Gain of Information.* Quarterly Journal of Experimental Psychology, 4(1). Hyman, R. (1953). *Stimulus Information as a Determinant of Reaction Time.* JEP, 45(3).

---

### Descriptive Models 

[big vcenter] Slip / Gulf of Execution 

[big muted] Understanding what to do but doing it incorrectly

:::

[big vcenter] Mistake / Gulf of Evaluation 

[big muted] Not understanding what to do, or mismatch in mental model

> Hutchins, E. L., Hollan, J. D. & Norman, D. A. (1986). *Direct Manipulation Interfaces.* In *User Centered System Design.* Erlbaum.

---

### Descriptive Models  


[vcenter]
> [!gold] Low level analytic tasks
>
> [big] Retrieve Value
>
> [big] Filter
>
> [big] Compute Derived Value
>
> [big] Find Extremum
>
> [big] Sort

:::

[vcenter]
> [!gold] Amar, Eagan & Stasko
>
> [big] Determine Range
>
> [big] Characterize Distribution
>
> [big] Find Anomalies
>
> [big] Cluster
>
> [big] Correlate

> Amar, R., Eagan, J. & Stasko, J. (2005). *Low-Level Components of Analytic Activity in Information Visualization.* IEEE InfoVis.

---

### Descriptive Models 

[big] Interactive dynamics for visual analysis

>[!gold] Data & View Specification:
> 
> [big] Visualize, Filter, Sort, Derive

>[!gold]  View Manipulation:
> 
> [big] Select, Navigate, Coordinate, Organize

>[!gold]  Process & Provenance: 
>
> [big] Record, Annotate, Share, Guide

> Heer, J. & Shneiderman, B. (2012). *Interactive Dynamics for Visual Analysis.* Communications of the ACM, 55(4).

---

> [!green] Modeling an interaction
> 
> The Keystroke Level Model defines the following action primitives: 
>
> `K` for a keystroke, `P` for pointing, `H` for homing, `D` for moving the cursor along a line segment, and `M` for
mental preparation before deciding on a next action. 
>
> Each is modeled as having a fixed amount of time, and composite actions are modeled as sums over the primitive operations involved. `D` is modeled using Fitt's law.
>
> Consider how the model would predict the time taken to perform the task of:  Finding the current local maximum, editing the equation, and going back to check the new local maximum. 
> Additionally consider how we can use a model like this to make design choices?
>

:::

![figure scrollable](https://www.desmos.com/calculator/408vezd96b)

---


[big vcenter] I dont care about memorizing specific models.

---

[big muted] I dont care about memorizing specific models.

[big vcenter] I do care about being able to apply a given model.

---

[big muted] I dont care about memorizing specific models.

[big muted] I do care about being able to apply a given model.

[big vcenter] How do we use models?

--- 

[big muted] I dont care about memorizing specific models.

[big muted] I do care about being able to apply a given model.

[big muted] How do we use models?

[big vcenter] How do we falsify models?

--- 

## Experimental Design

---
[big vcenter] Science is method.

[big] Everything else is commentary.

---

[big vcenter] Four modes of user research

::: 

> [!blue] Experimental
>
> Controlled experiments with assigned conditions and concrete measures

> [!ink] Correlational
>
> Concrete measures aggregated over data that is uncontrolled

[vcenter]
> [!green] Observational
>
> Seeing how people work in context without engagement, judgment, or preconception

> [!gold] Participatory
>
> The people for which a design is for or about actively contribute to the process 

---


```diagram
node o (-0.35,4.15) "" w=0.02 h=0.02 nostroke fill=none
node ytop (-0.35,-0.35) "" w=0.02 h=0.02 nostroke fill=none
node xend (6.1,4.15) "" w=0.02 h=0.02 nostroke fill=none

edge o ytop arrow="->"
edge o xend arrow="->"

node exp (0.75,0.25) "Experimental" color=blue
node corr (2.75,1.6) "Correlational"
node obs (4.75,2.95) "Observational" color=green
node part (5.4,3.6) "Participatory" color=gold

node ylab (-0.8,-0.55) "More generalizable" nostroke fill=none w=1.9
node xlab (2.5,4.5) "More relevant" nostroke fill=none w=2.4
```

---

>[!gold] [big] Independent Variables
>
>[big] Things you have "control" over 
><br><br>
>
>[big] Things that can affect outcome
><br><br>
>
>[big] Both natural and design attributes
>

:::

>[!gold] [big]Dependent Variables
>
> [big]Outcomes you measure but don't control
><br><br>
>
> [big]Schematization of human behavior and interaction
><br><br>
>
> [big] "Depends" on what the participant does
>

---



```diagram
node background (0,0) enclose (1,2) fill=none nostroke
node a1 (0.00,0.50) "" shape=circle fill=muted nostroke w=0.42
node trial (0.42,0.14) "Trial A" nostroke fill=none color=ink w=0.80
```

---



```diagram
node background (0,0) enclose (1,2) fill=none nostroke

node a1 (0.00,0.50) "" shape=circle fill=muted nostroke w=0.42
node trial (0.42,0.14) "Trial A" nostroke fill=none color=ink w=0.80
node m1 (0.72,0.62) "13 mustangs" nostroke fill=none color=gold w=1.00
```

---



```diagram
node background (0,0) enclose (1,2) fill=none nostroke

node a1 (0.00,0.20) "" shape=circle fill=muted nostroke w=0.42
node m1 (0.72,0.32) "13 mustangs" nostroke fill=none color=gold w=1.00
node a2 (0.00,1.10) "" shape=circle fill=muted nostroke w=0.42
node m2 (0.72,1.22) "12 mustangs" nostroke fill=none color=gold w=1.00
```

---



```diagram
node background (0,0) enclose (1,2) fill=none nostroke

node a1 (0.00,0.20) "" shape=circle fill=muted nostroke w=0.42
node a2 (0.00,0.92) "" shape=circle fill=muted nostroke w=0.42
node b1 (0.82,0.20) "" shape=circle fill=green nostroke w=0.42
node b2 (0.82,0.92) "" shape=circle fill=green nostroke w=0.42
node brush (0.82,-0.55) "treatment applied" nostroke fill=none color=green w=1.40
edge brush b1 color=green
```

---



```diagram
node background (0,0) enclose (1,2) fill=none nostroke

node a1 (0.00,0.20) "" shape=circle fill=muted nostroke w=0.42
node a2 (0.00,0.92) "" shape=circle fill=muted nostroke w=0.42
node b1 (0.82,0.20) "" shape=circle fill=green nostroke w=0.42
node b2 (0.82,0.92) "" shape=circle fill=green nostroke w=0.42
node iv (0.41,-0.55) "Independent Variable" nostroke fill=none color=gold w=1.70
```

---



```diagram
node ivbox (-0.42,-0.82) enclose (1.24,1.28) "Independent Variable" color=gold stroke=gold fill=none
node a1 (0.00,0.20) "" shape=circle fill=muted nostroke w=0.42
node a2 (0.00,0.92) "" shape=circle fill=muted nostroke w=0.42
node b1 (0.82,0.20) "" shape=circle fill=green nostroke w=0.42
node b2 (0.82,0.92) "" shape=circle fill=green nostroke w=0.42
node p0 (-0.95,2.35) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p1 (-0.33,2.35) "" shape=circle fill=green nostroke w=0.42
node p2 (0.29,2.35) "" shape=circle fill=muted nostroke w=0.42
node p3 (0.91,2.35) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p4 (1.53,2.35) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p5 (2.15,2.35) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p6 (2.77,2.35) "" shape=circle fill=muted nostroke w=0.42
node p7 (3.39,2.35) "" shape=circle fill=green nostroke w=0.42
```

---



```diagram
node ivbox (-0.42,-0.82) enclose (1.24,1.28) "Independent Variable" color=gold stroke=gold fill=none
node a1 (0.00,0.20) "" shape=circle fill=muted nostroke w=0.42
node a2 (0.00,0.92) "" shape=circle fill=muted nostroke w=0.42
node b1 (0.82,0.20) "" shape=circle fill=green nostroke w=0.42
node b2 (0.82,0.92) "" shape=circle fill=green nostroke w=0.42
node p0 (-0.95,2.35) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p1 (-0.33,2.35) "" shape=circle fill=green nostroke w=0.42
node p2 (0.29,2.35) "" shape=circle fill=muted nostroke w=0.42
node p3 (0.91,2.35) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p4 (1.53,2.35) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p5 (2.15,2.35) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p6 (2.77,2.35) "" shape=circle fill=muted nostroke w=0.42
node p7 (3.39,2.35) "" shape=circle fill=green nostroke w=0.42
node cv (0.41,-1.22) "Control Variable" nostroke fill=none color=gold w=1.50
```

---



```diagram
node ivbox (-0.42,-0.82) enclose (1.24,1.28) "Independent Variable" color=gold stroke=gold fill=none
node a1 (0.00,0.20) "" shape=circle fill=muted nostroke w=0.55
node a2 (0.00,0.92) "" shape=circle fill=muted nostroke w=0.32
node b1 (0.82,0.20) "" shape=circle fill=green nostroke w=0.32
node b2 (0.82,0.92) "" shape=circle fill=green nostroke w=0.57
node p0 (-0.95,2.35) "" shape=triangle fill=muted nostroke w=0.58 h=0.74
node p1 (-0.33,2.35) "" shape=circle fill=green nostroke w=0.27
node p2 (0.29,2.35) "" shape=circle fill=muted nostroke w=0.57
node p3 (0.91,2.35) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p4 (1.53,2.35) "" shape=triangle fill=muted nostroke w=0.37 h=0.47
node p5 (2.15,2.35) "" shape=triangle fill=green nostroke w=0.53 h=0.68
node p6 (2.77,2.35) "" shape=circle fill=muted nostroke w=0.40
node p7 (3.39,2.35) "" shape=circle fill=green nostroke w=0.38
node cv (0.41,-1.22) "Control Variable" nostroke fill=none color=gold w=1.50
node rv (2.35,0.55) "Random Variable" nostroke fill=none color=gold w=1.50
```

---



```diagram
node ivbox (-0.42,-0.82) enclose (1.24,1.28) "Independent Variable" color=gold stroke=gold fill=none
node a1 (0.00,0.20) ""  shape=circle fill=muted nostroke w=0.42
node a2 (0.00,0.92) ""  shape=circle fill=muted nostroke w=0.42
node b1 (0.82,0.20) ""  shape=circle fill=green nostroke w=0.42
node b2 (0.82,0.92) ""  shape=circle fill=green nostroke w=0.42
node p0 (-0.95,2.35) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p1 (-0.33,2.35) "" shape=circle fill=green nostroke w=0.42
node p2 (0.29,2.35) ""  shape=circle fill=muted nostroke w=0.42
node p3 (0.91,2.35) ""  shape=triangle fill=green nostroke w=0.46 h=0.59
node p4 (1.53,2.35) ""  shape=triangle fill=muted nostroke w=0.46 h=0.59
node p5 (2.15,2.35) ""  shape=triangle fill=green nostroke w=0.46 h=0.59
node p6 (2.77,2.35) ""  shape=circle fill=muted nostroke w=0.42
node p7 (3.39,2.35) ""  shape=circle fill=green nostroke w=0.42
node cv (0.41,-1.22) "Control Variable" nostroke fill=none color=gold w=1.50
```

---



```diagram
node colA (-0.45,-0.45) enclose (0.45,4.05) "" stroke=gold fill=none
node colB (0.80,-0.45) enclose (1.64,4.05) "" stroke=gold fill=none
node a1 (1.22,0.00) "" shape=circle fill=muted nostroke w=0.42
node a2 (1.22,0.72) "" shape=circle fill=muted nostroke w=0.42
node b1 (0.00,0.00) "" shape=circle fill=green nostroke w=0.46 h=0.59
node b2 (0.00,0.72) "" shape=circle fill=green nostroke w=0.42
node p0 (1.22,2.16) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p1 (0.00,1.44) "" shape=circle fill=green nostroke w=0.42
node p2 (1.22,2.88) "" shape=circle fill=muted nostroke w=0.42
node p3 (0.00,2.16) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p4 (1.22,1.44) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p5 (0.00,2.88) "" shape=triangle fill=green nostroke w=0.
node p6 (1.22,3.60) "" shape=circle fill=muted nostroke w=0.42
node p7 (0.00,3.60) "" shape=circle fill=green nostroke w=0.42
node iv (-1.75,0.35) "Independent Variable" nostroke fill=none color=gold w=1.70
```

---


```diagram
node colA (-0.45,-0.45) enclose (0.45,2.62) "" stroke=gold fill=none
node colB (0.77,-0.45) enclose (2.27,2.62) "" stroke=gold fill=none
node a1 (1.22,0.00) "" shape=circle fill=muted nostroke w=0.42
node a2 (1.22,0.72) "" shape=circle fill=muted nostroke w=0.42
node b1 (1.22,1.44) "" shape=circle fill=green nostroke w=0.46 h=0.59
node b2 (1.82,0.00) "" shape=circle fill=green nostroke w=0.42
node p0 (0.00,0.00) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p1 (1.22,2.16) "" shape=circle fill=green nostroke w=0.42
node p2 (1.82,0.72) "" shape=circle fill=muted nostroke w=0.42
node p3 (0.00,0.72) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node p4 (0.00,1.44) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node p5 (0.00,2.16) "" shape=triangle fill=green nostroke w=0.
node p6 (1.82,1.44) "" shape=circle fill=muted nostroke w=0.42
node p7 (1.82,2.16) "" shape=circle fill=green nostroke w=0.42
node iv (-1.75,0.15) "Independent Variable" nostroke fill=none color=gold w=1.70
node pe (-1.75,0.75) "Primary Effect" nostroke fill=none color=gold w=1.40
```

---



```diagram
node q1 (-0.45,-0.45) enclose (0.45,1.17) "" stroke=gold fill=none
node q2 (0.77,-0.45) enclose (2.27,1.17) "" stroke=gold fill=none
node q3 (-0.45,1.40) enclose (0.45,3.04) "" stroke=gold fill=none
node q4 (0.77,1.40) enclose (2.27,3.04) "" stroke=gold fill=none
node l0 (0.00,0.00) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node l1 (0.00,0.72) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node l2 (0.00,1.86) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node l3 (0.00,2.58) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node r0 (1.22,0.00) "" shape=circle fill=muted nostroke w=0.42
node r1 (1.82,0.00) "" shape=circle fill=muted nostroke w=0.42
node r2 (1.22,0.72) "" shape=circle fill=muted nostroke w=0.42
node r3 (1.82,0.72) "" shape=circle fill=muted nostroke w=0.42
node r4 (1.22,1.86) "" shape=circle fill=green nostroke w=0.42
node r5 (1.82,1.86) "" shape=circle fill=green nostroke w=0.42
node r6 (1.22,2.58) "" shape=circle fill=green nostroke w=0.42
node r7 (1.82,2.58) "" shape=circle fill=green nostroke w=0.42
node iv (-1.85,0.00) "Independent Variable" nostroke fill=none color=gold w=1.70
node ivk (-1.85,0.50) "k" nostroke fill=none color=ink w=0.50
node ie (-1.85,1.86) "Interaction Effect" nostroke fill=none color=gold w=1.50
node iek (-1.85,2.36) "nᵏ" nostroke fill=none color=ink w=0.90
```

---



```diagram
node q1 (-0.45,-0.45) enclose (1.69,1.17) "" stroke=gold fill=none
node q3 (-0.45,1.40) enclose (1.69,3.04) "" stroke=gold fill=none
node c0 (0.00,0.00) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node c1 (0.62,0.00) "" shape=circle fill=muted nostroke w=0.42
node c2 (1.24,0.00) "" shape=circle fill=muted nostroke w=0.42
node c3 (0.00,0.72) "" shape=triangle fill=muted nostroke w=0.46 h=0.59
node c4 (0.62,0.72) "" shape=circle fill=muted nostroke w=0.42
node c5 (1.24,0.72) "" shape=circle fill=muted nostroke w=0.42
node c6 (0.00,1.86) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node c7 (0.62,1.86) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node c8 (1.24,1.86) "" shape=circle fill=green nostroke w=0.42
node c9 (0.00,2.58) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node c10 (0.62,2.58) "" shape=triangle fill=green nostroke w=0.46 h=0.59
node c11 (1.24,2.58) "" shape=circle fill=green nostroke w=0.42
node conf (-2.10,1.29) "Confounding Variable" nostroke fill=none color=gold w=1.80
```

---

[big] Within-subjects and Between-subjects

| | Within | Between |
|---|---|---|
| Each participant sees | every condition | one condition |
| Participants needed | fewer | many more |
| Individual differences | controlled | noise |
| Main threat | order effects | group imbalance |
| Fix | counterbalancing | randomized assignment |


---

![figure scrollable](https://damienmasson.com/tools/latin_square/)

> Balanced Latin Square generator, Damien Masson: implementing Bradley, J. V. (1958). *Complete Counterbalancing of Immediate Sequential Effects.* JASA, 53(282).

---

### Threats to validity

> [!gold] Internal
>
> [big] Did the IV actually cause the change in the DV?

> [!gold] External
>
> [big] Does it hold outside this lab, this task, this sample?

::: 

> [!gold] Construct
>
> [big] Did the measure capture the thing you care about?

> [!gold] Conclusion
>
> [big] Do the statistics support the claim you made?

> Shadish, W. R., Cook, T. D. & Campbell, D. T. (2002). *Experimental and Quasi-Experimental Designs for Generalized Causal Inference.*

---

[big vcenter] Correlation ≠ Causation

[big vcenter muted] Search a large enough space and noise will always oblige.

---

![figure scrollable](https://tylervigen.com/spurious-correlations)

---

![Correlation](https://imgs.xkcd.com/comics/correlation.png "xkcd 552, Randall Munroe, CC BY-NC 2.5")

---

![Heatmap](https://imgs.xkcd.com/comics/heatmap.png "xkcd 1138, Randall Munroe, CC BY-NC 2.5")

---

[big] Simpson's Paradox

[vcenter]

| Batter | 1995 | 1996 | Combined |
|---|---|---|---|
| Derek Jeter | .250 (12/48) | .314 (183/582) | **.310** |
| David Justice | **.253** (104/411) | **.321** (45/140) | .270 |


> Ross, K. (2004). *A Mathematician at the Ballpark.* Pi Press.

---
[big vcenter] Survivorship bias

:::

![](/images/user-research/survivorship-bias.svg)

> Wald, A. (1943). *A Method of Estimating Plane Vulnerability Based on Damage of Survivors.* Statistical Research Group, Columbia University.

---
> [!gold] [big] A good task ...
>
> [big] Is representative of a real question someone actually asks
> 
> [big] Is discriminating, conditions can differ on it
> 
> [big] Forces a tradeoff, there is no free correct answer
> 
> [big] Is short enough to repeat many times
> 

---


```diagram
node center (0,1.55) "What you can record" color=gold w=2.4

node time (3.3,0) "Time: trial time, dwell, time to first fixation" w=3.4
node acc (3.3,1.05) "Accuracy: error rate, signed and absolute error" w=3.4
node beh (3.3,2.1) "Behavior: clicks, undo count, revisits" w=3.4
node subj (3.3,3.15) "Subjective: confidence, preference, NASA-TLX" w=3.4

edge center time via (0,0)
edge center acc
edge center beh
edge center subj via (0,3.15)
```
> Hart, S. G. & Staveland, L. E. (1988). *Development of NASA-TLX.* In *Human Mental Workload.* North-Holland.

---

> [!magenta] Questionnaire pitfalls
> 
> [big] Ambiguity: "often"
> 
> [big] Double-barreled: "helpful and easy to use"
> 
> [big] Jargon: "the compared to a perceptually uniform colorscale"
> 
> [big] Leading: "wasn't it helpful?"
> 
> [big] Overlapping intervals: "0–5, 5–10"

---

[big vcenter] Beware W.E.I.R.D. samples.

[big vcenter muted] Western,  Educated,  Industrialized,  Rich,  Democratic. <br> And, in our field, usually undergraduates.

> Henrich, J., Heine, S. J. & Norenzayan, A. (2010). *The Weirdest People in the World?* Behavioral and Brain Sciences, 33(2–3).

---

[big vcenter] Always run a small pilot first.

---

## Working with Human Subjects

---

![figure scrollable](https://content-calpoly-edu.s3.amazonaws.com/research/1/documents/Research%20Decision%20Chart%20Nov18rev.pdf)

---


[big vcenter] Controlled experiments validate one level.

```diagram
node domain (0,0) enclose (3.8,2.1) "Domain Characterization"
node abstract (0.14,0.40) enclose (3.66,2.0) "Abstraction Design"
node encode (0.28,0.80) enclose (3.52,1.9) "Encoding Design" color=blue
node algo (0.42,1.20) enclose (3.38,1.8) "Algorithm Design"
```

---

[big vcenter] The experiment cannot tell you the task was worth doing.

---

[big vcenter muted] The experiment cannot tell you the task was worth doing.

[big vcenter] For that, we have to leave the lab.

---

## Observational & Contextual Studies

---

[big vcenter] The lab controls everything except relevance.

---


```diagram
node domain (0,0) enclose (2.8,2.1) "Domain Characterization" color=gold
node abstract (0.12,0.40) enclose (2.68,2.0) "Abstraction Design" color=green
node encode (0.24,0.80) enclose (2.56,1.9) "Encoding Design"
node algo (0.36,1.20) enclose (2.44,1.8) "Algorithm Design"
```

:::

[vcenter]
> [!gold] An experiment cannot answer
>
> Is this the task they actually have?
>
> Did the thing we built change what they do?

---

[vcenter]
>[!magenta] [big] Visible in the field but not in the lab
>
> [big] The spreadsheet they keep on the side 
>
> [big] The screenshot pasted into Slack 
>
> [big] Pressure from management for a specific result 
>
> [big] Who they ask when they're stuck           
> 


---

[vcenter]
>[!gold] Field work mantras
>
>[big] Go where the work is
>
>[big vcenter] Watch before you ask
>
>[big] Record what happened, not what it meant

---

[big vcenter] Contextual Inquiry

[small muted] Validates the **domain** level. Ninety minutes to half a day per participant, three to six participants.

::: 

> [!gold] Context
>
> In their workplace, during real work.

> [!gold] Partnership
>
> Equal power dynamics, apprenticeship with the user.

[vcenter]
> [!gold]  Interpretation
>
> Say your reading back to them. Let them correct it.

> [!gold] Focus
>
> Steer toward your question without scripting the session.


> Beyer, H. & Holtzblatt, K. (1998). *Contextual Design: Defining Customer-Centered Systems.*.

---

[big vcenter] Think-aloud protocol

[small muted] Validates the **abstraction** level. One session per participant, thirty to ninety minutes.

:::
 
> [!gold] [big] Concurrent
>
> Narrate while working

[vcenter]
> [!gold] [big] Retrospective
> 
> Narrate while re-watching the recording


> Ericsson, K. A. & Simon, H. A. (1984). *Protocol Analysis: Verbal Reports as Data.* MIT Press.

---

> [!gold] Ask them...
>
> [big] "Tell me more."
>
>  [big] "What are you looking at right now?"
>
>  [big] "What did you expect that to do?"
> 
>  [big muted] Ask about the last time, not about usually.

:::

> [!magenta] Never ask them
> 
> [big] "Do you like this?"
>
> [big] "What features do you want?"
>
> [big]"Would you use this a feature here?"
>
> [big muted] People are bad judges of what they would do


---

[big vcenter] There are many more user research methods

:::

[big muted] Diary studies

[big muted vcenter] Log analysis

[big muted] Case studies

[big muted] ...


--- 

[big vcenter] In qualitative research <br> YOU are the instrument

::: 

[big muted] Your background shapes what you notice

[big muted vcenter] Say so in the write-up


---

```diagram
node domain (0,0) enclose (3.8,2.1) "Domain: observe, deploy, measure adoption" color=gold
node abstract (0.14,0.40) enclose (3.66,2.0) "Abstraction: case study, contextual inquiry" color=green
node encode (0.28,0.80) enclose (3.52,1.9) "Encoding: controlled experiment, usability test" color=blue
node algo (0.42,1.20) enclose (3.38,1.8) "Algorithm: benchmark" color=magenta
```

---

[big vcenter] No single study validates a design.

---

[big vcenter] If two studies disagree, trust the "outer" one.

[big vcenter muted] Each level is built on assumptions from earlier levels. A better encoding of the wrong quantity is still the wrong quantity.

---

## Thinking back to the design process

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
node data (1.9,1) "Data Model" w=1.15

edge concept data arrow="=>"
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
node data (1.9,1) "Data Model" w=1.15
node users (1.9,2) "User Actions and Tasks" w=1.95

edge concept data arrow="=>"
edge data users arrow="=>"
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
node data (1.9,1) "Data Model" w=1.15
node users (1.9,2) "User Actions and Tasks" w=1.95
node domain (0,1) "Domain" w=0.85

edge concept data arrow="=>"
edge data users arrow="=>"
edge domain data arrow="..>"
edge domain concept via (0,0) arrow="..>"
edge domain users via (0,2) arrow="..>"
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
node data (1.9,1) "Data Model" w=1.15
node users (1.9,2) "User Actions and Tasks" w=1.95
node domain (0,1) "Domain" w=0.85
node design (3.6,1) "Design" w=0.9

edge concept data arrow="=>"
edge data users arrow="=>"
edge domain data arrow="..>"
edge domain concept via (0,0) arrow="..>"
edge domain users via (0,2) arrow="..>"
edge data design arrow="=>"
edge users design via (3.6,2) arrow="..>"
edge design design via (3.92,0.32) via (3.28,0.32) arrow="=>"
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
node data (1.9,1) "Data Model" w=1.15
node users (1.9,2) "User Actions and Tasks" w=1.95
node domain (0,1) "Domain" w=0.85
node design (3.6,1) "Design" w=0.9
node eval (5.2,1) "Evaluation" w=1.2

edge concept data arrow="=>"
edge data users arrow="=>"
edge domain data arrow="..>"
edge domain concept via (0,0) arrow="..>"
edge domain users via (0,2) arrow="..>"
edge data design arrow="=>"
edge users design via (3.6,2) arrow="..>"
edge design design via (3.92,0.32) via (3.28,0.32) arrow="=>"
edge design eval arrow="=>"
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5
node data (1.9,1) "Data Model" w=1.15
node users (1.9,2) "User Actions and Tasks" w=1.95
node domain (0,1) "Domain" w=0.85
node design (3.6,1) "Design" w=0.9
node eval (5.2,1) "Evaluation" w=1.2

edge concept data arrow="=>"
edge data users arrow="=>"
edge domain data arrow="..>"
edge domain concept via (0,0) arrow="..>"
edge domain users via (0,2) arrow="..>"
edge data design arrow="=>"
edge users design via (3.6,2) arrow="..>"
edge design design via (3.92,0.32) via (3.28,0.32) arrow="=>"
edge design eval arrow="=>"
edge eval domain via (5.2,-0.95) via (0,-0.95) arrow="..>" color="#b52b20"
edge eval concept via (5.2,-0.5) via (1.9,-0.5) arrow="..>" color="#b52b20"
edge eval data via (5.2,-0.5) via (2.75,-0.5) arrow="..>" color="#b52b20"
edge eval design via (5.2,1.75) via (3.75,1.75) arrow="..>" color="#b52b20"
edge eval users via (5.2,2.9) via (1.9,2.9) arrow="..>" color="#b52b20"
```

---

> [!auto-animate]

```diagram
node concept (1.9,0) "Conceptual Model" w=1.5 color=green
node data (1.9,1) "Data Model" w=1.15 color=green
node users (1.9,2) "User Actions and Tasks" w=1.95 color=green
node domain (0,1) "Domain" w=0.85 color=gold
node design (3.6,1) "Design" w=0.9 color=blue
node eval (5.2,1) "Evaluation" w=1.2

edge concept data arrow="=>"
edge data users arrow="=>"
edge domain data arrow="..>"
edge domain concept via (0,0) arrow="..>"
edge domain users via (0,2) arrow="..>"
edge data design arrow="=>"
edge users design via (3.6,2) arrow="..>"
edge design design via (3.92,0.32) via (3.28,0.32) arrow="=>"
edge design eval arrow="=>"
edge eval domain via (5.2,-0.95) via (0,-0.95) arrow="..>" color="#b52b20"
edge eval concept via (5.2,-0.5) via (1.9,-0.5) arrow="..>" color="#b52b20"
edge eval data via (5.2,-0.5) via (2.75,-0.5) arrow="..>" color="#b52b20"
edge eval design via (5.2,1.75) via (3.75,1.75) arrow="..>" color="#b52b20"
edge eval users via (5.2,2.9) via (1.9,2.9) arrow="..>" color="#b52b20"
```

---

![figure scrollable](https://data3302.github.io/Fall2026)

---
