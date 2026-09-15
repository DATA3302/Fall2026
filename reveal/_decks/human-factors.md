---
title: Human Visual Perception
description: Introduction to biomechanics and cognitive aspects of visual perception
order: 1
course: DATA 3302 Fall 2026
---


# Human Visual Perception

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from a previous offering of this course and from Christopher Healey's *Perception in Visualization* (csc2.ncsu.edu/faculty/healey/PP).

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
node human (4,0) "Human"   color="gold"
node data (1,1) "Data"    
node design (3,1) "Design" color="gold"

edge world data via (0,1) 
edge data design 
edge design human via (4,1) color="gold" 
edge human world  

```

---

## Perception

---

[big vcenter] How many senses do you have?

---

[big muted] How many senses do you have?

[big vcenter] How accurate are they?

---

| Sense    | Bandwidth (bits/second)
|----------|-----|
| Sight    | 10,000,000  
| Touch    | 1,000,000
| Hearing  | 100,000  
| Smell    | 100,000  
| Taste    | 1,000

> Source: [Britannica](http://www.britannica.com/EBchecked/topic/287907/information-theory/214958/Physiology)

---

```diagram
node graphic (0,0) "Graphic"  
node light (1.5,0) "Light"  
node eye (3,0) "Eye"   
node brain (4.5,0) "Brain"    
edge graphic light 
edge light eye
edge eye brain
```

---

[big vcenter] Light is a spectrum

![](/images/human-factors/cone-response.svg)

---
[big vcenter] RGB is an interface for the eye

```diagram
node graphic (0,0) "Light"  color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain"   
edge graphic eye 
edge eye brain
```

---



![](/images/human-factors/colorblind-test.png)

---

[big vcenter] ~10% of population has colorblindness

![](/images/human-factors/colorblind-test.png)

---


[big vcenter] ~10% of population has colorblindness

[big] Check by Simulation!

![](/images/human-factors/colorblind-test.png)

---
### Chroma JS Palette Helper

![figure scrollable](https://gka.github.io/palettes/)

---
[big vcenter] RGB is an interface for the eye

```diagram
node graphic (0,0) "Light"  color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain"   
edge graphic eye 
edge eye brain
```

---

[big vcenter muted] RGB is an interface for the eye

[big vcenter] But the brain does not see in RGB

```diagram
node graphic (0,0) "Light"  color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain" color="purple"
edge graphic eye 
edge eye brain
```

---


![](/images/human-factors/hsl-cone.png)

---


![](/images/human-factors/hsl-cone.png)

:::

![](/images/human-factors/hsv-cylinder.png)

---

![](/images/human-factors/colormaps.png)

> [Ware et. al. 2017, Evaluating the Perceptual Uniformity of Color Sequences for
Feature Discrimination.](https://diglib.eg.org/server/api/core/bitstreams/b94b61e1-86f1-4b2a-b07c-94f3ab886963/content)

---

![](/images/human-factors/colormaps-discriminate.png)

:::

![](/images/human-factors/colormaps.png)

> [Colorcet](https://colorcet.com/)

---

![](/images/human-factors/vendor-map.png)

:::

![](/images/human-factors/cet-l20-map.png)

> [Ware et. al. 2017, Evaluating the Perceptual Uniformity of Color Sequences for
Feature Discrimination.](https://diglib.eg.org/server/api/core/bitstreams/b94b61e1-86f1-4b2a-b07c-94f3ab886963/content)

---

![figure](/embed/contour/contour.html)


---

![figure scrollable](https://maryamsheta.github.io/InteractiveOpticalIllusions/
)

---

```diagram
node graphic (0,0) "Visual" color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain" color="purple"
edge graphic eye 
edge eye brain 


```

---

```diagram
node graphic (0,0) "Visual" color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain" color="purple"
edge graphic eye 
edge eye brain label="System 1" color="purple"

```

---

## System 1: Pre-attentive

---


### System 1: Pre-attentive

[big vcenter] Measure Task Accuracy and Response Time

---

### System 1: Pre-attentive

[big] Measure Task Accuracy and Response Time

> [!gold-box] Target Detection
>
> Users rapidly and accurately detect the presence or absence of a "target" element with a unique visual feature within a field of distractor elements.

> [!gold-box] Boundary Detection
>
> Users rapidly and accurately detect a texture boundary
between two groups of elements, where all of the elements in each group have a
common visual property.

> [!gold-box] Region Tracking
>
> Users track one or more elements with a unique visual feature as
they move in time and space.

> [!gold-box] Counting and Estimation
>
> Users count or estimate the number of elements with a
unique visual feature.

> [Healy, Perception in Visualization](https://www.csc2.ncsu.edu/faculty/healey/PP/)


---

### System 1: Pre-attentive

![Orientation](/embed/article/tg_orient_mZ_9.gif)

![Length](/embed/article/tg_len_mZ_9.gif)

![Closure](/embed/article/tg_closure_mZ_9.gif)

![Size](/embed/article/tg_size_mZ_9.gif)

:::

![Curvature](/embed/article/tg_curve_mZ_9.gif)

![Density](/embed/article/tg_den_mZ_9.gif)

![Number Estimation](/embed/article/tg_num_mZ_9.gif)

![Hue](/embed/article/tg_hue_mZ_9.gif)

:::

![Luminosity](/embed/article/tg_lum_mZ_9.gif)

![Intersection](/embed/article/tg_isect_mZ_9.gif)

![Terminators](/embed/article/tg_term_mZ_9.gif)


![3D Depth Cues](/embed/article/tg_3d_depth_mZ_9.gif)

:::

![Flicker](/embed/article/tg_flick_mZ_9.gif)

![Direction of Motion](/embed/article/tg_dir_mZ_9.gif)

![Velocity of Motion](/embed/article/tg_vel_mZ_9.gif)

![Lighting Direction](/embed/article/tg_3d_light_mZ_9.gif)


> [Healy, Perception in Visualization](https://www.csc2.ncsu.edu/faculty/healey/PP/)

---

### System 1: Pre-attentive

[big vcenter] Feature Integration Theory

![](/images/human-factors/FiT.svg)

> Treisman and Gelade

---

### System 1: Pre-attentive

[big vcenter] Similarity Theory

![](/images/human-factors/Similarity.svg)

> Quinlan and Humphreys

---

### System 1: Pre-attentive

[big vcenter] Guided Search Theory

![](/images/human-factors/GuidedSearch.svg)


> Jeremy Wolfe

---

### System 1: Pre-attentive

[big vcenter muted] Boolean Map Theory

![](/images/human-factors/boolean-map-fig9.svg)

> Huang & Pashler

---

### System 1: Pre-attentive

[big vcenter] Find the swapped pair in each grid.

---

### System 1: Pre-attentive

![](/images/human-factors/boolean_map_ABCD_left.png)

::: 

![](/images/human-factors/boolean_map_ABCD_right.png)


---

### System 1: Pre-attentive

![](/images/human-factors/boolean_map_ABBA_left.png)

::: 

![](/images/human-factors/boolean_map_ABBA_right.png)


 ---

### System 1: Pre-attentive

 
![](/images/human-factors/boolean_map_ABBA_left.png)

<br/>

![](/images/human-factors/boolean_map_ABBA_right.png)

:::

![](/images/human-factors/boolean_map_ABCD_left.png)

<br/>

![](/images/human-factors/boolean_map_ABCD_right.png)

---

### System 1: Pre-attentive

![figure](/embed/bird-scatter/bird-scatter.html)

[small muted] Shape alone forces a slow, one-point-at-a-time search for each species; color lets the three clusters pop out pre-attentively.

> Information Visualization: Perception for Design. (Ch. 5) Colin Ware.

---

## Gestalt Psychology

---

### Gestalt Psychology

[vcenter]
> [!gold-box] [big]Gestalt Laws of Grouping
>
> [big] Proximity
>
> [big] Similarity
>
> [big] Continuity
>
> [big] Closure
>
> [big] Common Fate
>
> [big] Connectedness

> Information Visualization: Perception for Design. (Ch. 6) Colin Ware.

---

### Gestalt Psychology: Proximity

```diagram
node border (-1,-1) enclose (9,9) nostroke color=none

node a0 (0,0)
node a1 (2,0)
node a2 (4,0)
node a3 (6,0)
node a4 (8,0)

node b0 (0,2)
node b1 (2,2)
node b2 (4,2)
node b3 (6,2)
node b4 (8,2)

node c0 (0,4)
node c1 (2,4)
node c2 (4,4)
node c3 (6,4)
node c4 (8,4)

node d0 (0,6)
node d1 (2,6)
node d2 (4,6)
node d3 (6,6)
node d4 (8,6)

node e0 (0,8)
node e1 (2,8)
node e2 (4,8)
node e3 (6,8)
node e4 (8,8)

```
---
### Gestalt Psychology: Proximity

```diagram
node border (-1,-1) enclose (9,9) nostroke color=none

node a0 (0,0)
node a1 (1,0)
node a2 (2,0)
node a3 (3,0)
node a4 (4,0)

node b0 (0,2)
node b1 (1,2)
node b2 (2,2)
node b3 (3,2)
node b4 (4,2)

node c0 (0,4)
node c1 (1,4)
node c2 (2,4)
node c3 (3,4)
node c4 (4,4)

node d0 (0,6)
node d1 (1,6)
node d2 (2,6)
node d3 (3,6)
node d4 (4,6)

node e0 (0,8)
node e1 (1,8)
node e2 (2,8)
node e3 (3,8)
node e4 (4,8)

```
---
### Gestalt Psychology: Proximity

```diagram
node border (-1,-1) enclose (9,9) nostroke color=none

node a0 (0,0)
node a1 (2,0)
node a2 (4,0)
node a3 (6,0)
node a4 (8,0)

node b0 (0,1)
node b1 (2,1)
node b2 (4,1)
node b3 (6,1)
node b4 (8,1)

node c0 (0,2)
node c1 (2,2)
node c2 (4,2)
node c3 (6,2)
node c4 (8,2)

node d0 (0,3)
node d1 (2,3)
node d2 (4,3)
node d3 (6,3)
node d4 (8,3)

node e0 (0,4)
node e1 (2,4)
node e2 (4,4)
node e3 (6,4)
node e4 (8,4)

```
---

### Gestalt Psychology: Proximity

```diagram
node border (-1,-1) enclose (9,9) nostroke color=none

node a0 (0,0)
node a1 (1,0)
node b0 (0,1)
node b1 (1,1)
node c0 (0,2)
node c1 (1,2)
node d0 (0,3)
node d1 (1,3)
node e0 (0,4)
node e1 (1,4)

node a2 (6,4)
node a3 (7,4)
node a4 (8,4)
node b2 (6,5)
node b3 (7,5)
node b4 (8,5)
node c2 (6,6)
node c3 (7,6)
node c4 (8,6)
node d2 (6,7)
node d3 (7,7)
node d4 (8,7)
node e2 (6,8)
node e3 (7,8)
node e4 (8,8)

```

---

### Gestalt Psychology: Similarity

```diagram
node border (-1,-1) enclose (9,9) nostroke color=none

node a0 (0,0) 
node a1 (2,0)
node a2 (4,0)
node a3 (6,0)
node a4 (8,0)

node b0 (0,2)
node b1 (2,2)
node b2 (4,2)
node b3 (6,2)
node b4 (8,2)

node c0 (0,4)
node c1 (2,4)
node c2 (4,4)
node c3 (6,4)
node c4 (8,4)

node d0 (0,6)
node d1 (2,6)
node d2 (4,6)
node d3 (6,6)
node d4 (8,6)

node e0 (0,8)
node e1 (2,8)
node e2 (4,8)
node e3 (6,8)
node e4 (8,8)

```
---

### Gestalt Psychology: Similarity

```diagram
node border (-1,-1) enclose (9,9) nostroke color=none

node a0 (0,0) color=green nostroke
node a1 (2,0) color=green nostroke
node a2 (4,0) color=green nostroke
node a3 (6,0) color=green nostroke
node a4 (8,0) color=green nostroke

node b0 (0,2) color=green nostroke
node b1 (2,2) color=purple nostroke
node b2 (4,2) color=purple nostroke
node b3 (6,2) color=purple nostroke
node b4 (8,2) color=green nostroke

node c0 (0,4) color=green nostroke
node c1 (2,4) color=purple nostroke
node c2 (4,4) color=purple nostroke
node c3 (6,4) color=purple nostroke
node c4 (8,4) color=green nostroke

node d0 (0,6) color=green nostroke
node d1 (2,6) color=purple nostroke
node d2 (4,6) color=purple nostroke
node d3 (6,6) color=purple nostroke
node d4 (8,6) color=green nostroke

node e0 (0,8) color=green nostroke
node e1 (2,8) color=green nostroke
node e2 (4,8) color=green nostroke
node e3 (6,8) color=green nostroke
node e4 (8,8) color=green nostroke

```
---

### Gestalt Psychology : Closure

![](/images/human-factors/gestalt-closure.png)

---

### Gestalt Psychology: Common Fate

![figure](/embed/common-fate/common-fate.html)

---
### Gestalt Psychology: Connectedness

```diagram
node c0 (0,0)
node c1 (0.8,0.9)
node c2 (2.4,0)
node c3 (3.2,0.9)

```

---
### Gestalt Psychology: Connectedness

```diagram
node c0 (0,0)
node c1 (0.8,0.9)
node c2 (2.4,0)
node c3 (3.2,0.9)

node connector (0,-0.1) enclose (2.5,0.1) nostroke color=ink
```

---
### Gestalt Psychology: Continuity

![](/images/human-factors/continuity-mixed.svg)

---

### Gestalt Psychology: Continuity

![](/images/human-factors/continuity-suprise.svg)

---
### Gestalt Psychology: Continuity

![](/images/human-factors/continuity-mixed.svg)

---
### Gestalt Psychology: Continuity

![](/images/human-factors/continuity-natural.svg)

---

```diagram
node graphic (0,0) "Visual" color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain" color="purple"
edge graphic eye 
edge eye brain label="System 1" color="purple"

```

---

```diagram
node graphic (0,0) "Visual" color="green"
node eye (1.5,0) "Eye"  color="green"
node brain (3,0) "Brain" color="purple"


edge graphic eye 
edge eye brain label="System 1" color="purple"
edge brain eye via (3,0.75) via (1.5,0.75) arrow="->" color=purple label="System 2"
```

---


```diagram
node graphic (0,0) "Visual" color="green"
node eye (1,0) "Eye"  color="green"
node brain (2.5,0) "Brain" color="purple" w=1.5 h=1.5 label-pos=sw

node stm (2.5,0) "Short Term Memory" color="purple" nostroke w=1.35

edge graphic eye 
edge eye brain color="purple"
edge brain eye via (2.5,1.0) via (1,1.0) arrow="->" color=purple 
```

---


```diagram
node graphic (0,0) "Visual" color="green"
node eye (1,0) "Eye"  color="green"
node brain (2.5,0) "Brain" color="purple" w=1.5 h=1.5 label-pos=sw

node stm (2.5,0) "Short Term Memory" color="purple" nostroke w=1.35

node ltm (2.5,-1.5) "Long Term Memory" color="purple" nostroke w=1.35

edge graphic eye 
edge eye brain color="purple"
edge brain eye via (2.5,1.0) via (1,1.0) arrow="->" color=purple 
edge brain ltm arrow="<->" color=purple


```

---

## System 2: Post-attentive

---

### System 2: Post-attentive

[big vcenter] Does System 2 affect System 1?

---

### System 2: Post-attentive

[big vcenter muted] Does System 2 affect System 1?


![](/images/human-factors/postattentive_A.gif)


![](/images/human-factors/postattentive_P.gif)

---

### System 2: Post-attentive

[big vcenter] Change Blindness

---

### System 2: Post-attentive : Change Blindness

![](/images/human-factors/change-blindness-1.jpg)

---

### System 2: Post-attentive : Change Blindness

---

### System 2: Post-attentive : Change Blindness

![](/images/human-factors/change-blindness-2.jpg)

---

### System 2: Post-attentive : Change Blindness

![](/images/human-factors/change-blindness-1.jpg)

---

### System 2: Post-attentive

[vcenter]
>[!green-box] Discussion
>
> [big] What design idiom(s) most effectively address the problems associated with change blindness?

<br/><br/><br/>

---

![](/images/human-factors/harvest.jpg)

---

![figure scrollable](https://data3302.github.io/Fall2026)


---
