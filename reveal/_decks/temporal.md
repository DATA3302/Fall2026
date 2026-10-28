---
title: Temporal Visualization
description: Temporal representations, perception, encodings, interaction, and time-series analysis.
order: 8
course: DATA 3302 Fall 2026
---

# Temporal Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

---

### Temporal Visualization

![Visualization of Time-Oriented Data](/images/temporal/native/page-02-xobject-13.png)

---

### Traditional Focus

![](/images/temporal/native/page-03-xobject-23.png)

::: 45/55

![](/images/temporal/native/page-03-xobject-24.png)

---

### Geographic Interactions

![](/images/temporal/native/page-04-xobject-29.png)

---

### Data as a Process

![](/images/temporal/native/page-05-xobject-34.png)

---

### Causality

![](/images/temporal/native/page-06-xobject-39.png)

---

### Storytelling

![](/images/temporal/native/page-07-xobject-44.png)

::: 55/45

![](/images/temporal/native/page-07-xobject-45.png)

---

![](/images/temporal/native/page-08-xobject-50.png)

---

![](/images/temporal/page-09-collage.svg)

---

![](/images/temporal/native/page-10-xobject-92.png)

---

### Physics Concepts

[medium left vcenter] **Relativity**

[medium left] Time is frame dependent

[medium left] Changes based on gravitational forces

[medium left] Fundamental unity with space

::: 55/45

[medium left vcenter] **Entropy**

[medium left] Time as definitionally determined by increase of entropy

---

### Philosophical Concepts

[vcenter]
> [!gold] A Theory
>
> [medium] Events structured as past/present/future

> [!gold]  B Theory
>
> [medium] Events ordered by before and after


::: 50/50

[vcenter]
> [!gold] Presentism
>
> [medium] Only “present” has ontological status

> [!gold]  Eternalism
>
> [medium] Time as variation on temporal manifold with equal ontological status


---

### More Philosophy

[medium left vcenter] Being-in-the-world

[medium left] Being-towards-death

[medium left] Throwness

[medium left] Intentionality

[medium left] Event


::: 40/20/20/20

![](/images/temporal/native/page-13-xobject-109.png)

:::

![](/images/temporal/native/page-13-xobject-107.png)

:::

![Alain Badiou, Being and Event](/images/temporal/being-and-event.jpg)

---

### Temporal Representations

[medium left vcenter] Linear vs Cyclic Time

[medium left] Instant vs Interval Time

[medium left] Ordered vs Branching Time

[medium left] Bounded vs Unbounded Time

---

### Temporal Representations

```diagram
diagram temporal-representations
node ordinal (-0.1,0) w=7.6 h=1.8 fill=none stroke=orange
node ordinallabel (-2.5,0) "Ordinal" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node a (-0.1,-0.3) "A" w=.52 h=.55 color=orange stroke=orange
node b (1.05,0.4) "B" w=.52 h=.55 color=orange stroke=orange
node c (2.65,0) "C" w=.52 h=.55 color=orange stroke=orange
edge a b via (0.1,0.3) smooth label="before" color=orange font-size=27
edge b c label="before" color=orange font-size=27
edge a c label="before" color=orange font-size=27
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node ordinal (-0.1,0) w=7.6 h=1.8 fill=none stroke=muted
node ordinallabel (-2.5,0) "Ordinal" w=2.3 h=0.5 fill=none nostroke color=muted font-size=52
node a (-0.1,-0.3) "A" w=.52 h=.55 color=muted stroke=muted
node b (1.05,0.4) "B" w=.52 h=.55 color=muted stroke=muted
node c (2.65,0) "C" w=.52 h=.55 color=muted stroke=muted
edge a b via (0.1,0.3) smooth label="before" color=muted font-size=27
edge b c label="before" color=muted font-size=27
edge a c label="before" color=muted font-size=27
node discrete (-0.1,1.8) w=7.6 h=1.25 fill=none stroke=orange
node discretelabel (-2.5,1.8) "Discrete" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node da (-0.6,1.8) shape=circle w=0.001 fill=none nostroke
node dz (3.05,1.8) shape=circle w=0.001 fill=none nostroke
edge da dz color=orange
node d0 (0.1,1.8) "A" w=.52 h=.55 color=orange stroke=orange
node d1 (1.25,1.8) "B" w=.52 h=.55 color=orange stroke=orange
node d2 (2.55,1.8) "C" w=.52 h=.55 color=orange stroke=orange
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node ordinal (-0.1,0) w=7.6 h=1.8 fill=none stroke=muted
node ordinallabel (-2.5,0) "Ordinal" w=2.3 h=0.5 fill=none nostroke color=muted font-size=52
node a (-0.1,-0.3) "A" w=.52 h=.55 color=muted stroke=muted
node b (1.05,0.4) "B" w=.52 h=.55 color=muted stroke=muted
node c (2.65,0) "C" w=.52 h=.55 color=muted stroke=muted
edge a b via (0.1,0.3) smooth label="before" color=muted font-size=27
edge b c label="before" color=muted font-size=27
edge a c label="before" color=muted font-size=27
node discrete (-0.1,1.8) w=7.6 h=1.25 fill=none stroke=muted
node discretelabel (-2.5,1.8) "Discrete" w=2.3 h=0.5 fill=none nostroke color=muted font-size=52
node da (-0.6,1.8) shape=circle w=0.001 fill=none nostroke
node dz (3.05,1.8) shape=circle w=0.001 fill=none nostroke
edge da dz color=muted
node d0 (0.1,1.8) "A" w=.52 h=.55 color=muted stroke=muted
node d1 (1.25,1.8) "B" w=.52 h=.55 color=muted stroke=muted
node d2 (2.55,1.8) "C" w=.52 h=.55 color=muted stroke=muted
node continuous (-0.1,3.35) w=7.6 h=1.25 fill=none stroke=orange
node continuouslabel (-2.5,3.35) "Continuous" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node continuuma (-0.6,3.35) shape=circle w=0.001 fill=none nostroke
node continuumb (3.05,3.35) shape=circle w=0.001 fill=none nostroke
edge continuuma continuumb color=orange
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node ordinal (-0.1,0) w=7.6 h=1.8 fill=none stroke=muted
node ordinallabel (-2.5,0) "Ordinal" w=2.3 h=0.5 fill=none nostroke color=muted font-size=52
node a (-0.1,-0.3) "A" w=.52 h=.55 color=muted stroke=muted
node b (1.05,0.4) "B" w=.52 h=.55 color=muted stroke=muted
node c (2.65,0) "C" w=.52 h=.55 color=muted stroke=muted
edge a b via (0.1,0.3) smooth label="before" color=muted font-size=27
edge b c label="before" color=muted font-size=27
edge a c label="before" color=muted font-size=27
node discrete (-0.1,1.8) w=7.6 h=1.25 fill=none stroke=muted
node discretelabel (-2.5,1.8) "Discrete" w=2.3 h=0.5 fill=none nostroke color=muted font-size=52
node da (-0.6,1.8) shape=circle w=0.001 fill=none nostroke
node dz (3.05,1.8) shape=circle w=0.001 fill=none nostroke
edge da dz color=muted
node d0 (0.1,1.8) "A" w=.52 h=.55 color=muted stroke=muted
node d1 (1.25,1.8) "B" w=.52 h=.55 color=muted stroke=muted
node d2 (2.55,1.8) "C" w=.52 h=.55 color=muted stroke=muted
node continuous (-0.1,3.35) w=7.6 h=1.25 fill=none stroke=orange
node continuouslabel (-2.5,3.35) "Continuous" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node continuuma (-0.6,3.35) shape=circle w=0.001 fill=none nostroke
node continuumb (3.05,3.35) shape=circle w=0.001 fill=none nostroke
edge continuuma continuumb color=orange
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node instants (-0.1,0) w=7.6 h=1.25 fill=none stroke=orange
node instantslabel (-2.5,0) "Instants" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node instant-timea (-0.6,0) shape=circle w=0.001 fill=none nostroke
node instant-timeb (3.05,0) shape=circle w=0.001 fill=none nostroke
edge instant-timea instant-timeb color=orange
path tick0 (0,-0.53) (0,0.53) color=orange
node instant0 (0,0) "A" shape=circle w=.52 color=orange stroke=orange
path tick1 (1.25,-0.53) (1.25,0.53) color=orange
node instant1 (1.25,0) "B" shape=circle w=.52 color=orange stroke=orange
path tick2 (2.5,-0.53) (2.5,0.53) color=orange
node instant2 (2.5,0) "C" shape=circle w=.52 color=orange stroke=orange
node intervals (-0.1,1.65) w=7.6 h=1.25 fill=none stroke=orange
node intervalslabel (-2.5,1.65) "Intervals" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node interval-timea (-0.6,1.65) shape=circle w=0.001 fill=none nostroke
node interval-timeb (3.05,1.65) shape=circle w=0.001 fill=none nostroke
edge interval-timea interval-timeb color=orange
node interval0 (-0.05,1.65) "A" shape=rect w=0.8 h=.85 color=orange stroke=orange
node interval1 (1.35,1.65) "B" shape=rect w=1.25 h=.85 color=orange stroke=orange
node interval2 (2.6,1.65) "C" shape=rect w=0.55 h=.85 color=orange stroke=orange
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node linear (-0.1,0) w=7.6 h=1.25 fill=none stroke=orange
node linearlabel (-2.5,0) "Linear" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node linear-timea (-0.6,0) shape=circle w=0.001 fill=none nostroke
node linear-timeb (3.05,0) shape=circle w=0.001 fill=none nostroke
edge linear-timea linear-timeb color=orange
node cyclic (-0.1,2) w=7.6 h=2.1 fill=none stroke=orange
node cycliclabel (-2.5,2) "Cyclic" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node cycle-start (1.99474,2.38475) shape=circle w=0.08 fill=orange nostroke
node cycle-end (2.03829,1.82002) shape=circle w=0.001 fill=none nostroke
edge cycle-start cycle-end color=orange via (1.7282,2.8314) via (1.2598,2.9798) via (0.8338,2.6674) via (0.6506,2.0411) via (0.7963,1.3955) via (1.2024,1.0342) via (1.6780,1.1271) smooth
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node unbounded (-0.1,0) w=7.6 h=1.25 fill=none stroke=orange
node unboundedlabel (-2.5,0) "Unbounded" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node unbounded-timea (-0.6,0) shape=circle w=0.001 fill=none nostroke
node unbounded-timeb (3.05,0) shape=circle w=0.001 fill=none nostroke
edge unbounded-timea unbounded-timeb color=orange arrow=<->
node bounded (-0.1,1.65) w=7.6 h=1.25 fill=none stroke=orange
node boundedlabel (-2.5,1.65) "Bounded" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
path bounded-time (-0.6,1.65) (3.05,1.65) color=orange
path start1 (-0.6,1.53) (-0.6,1.77) color=orange
path end (3.05,1.53) (3.05,1.77) color=orange
node partial (-0.1,3.3) w=7.6 h=1.25 fill=none stroke=orange
node partiallabel (-2.5,3.3) "Partial" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node partial-timea (-0.6,3.3) shape=circle w=0.001 fill=none nostroke
node partial-timeb (3.05,3.3) shape=circle w=0.001 fill=none nostroke
edge partial-timea partial-timeb color=orange
path start2 (-0.6,3.18) (-0.6,3.42) color=orange
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node consistent (-0.1,0) w=7.6 h=1.25 fill=none stroke=orange
node consistentlabel (-2.5,0) "Consistent" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node consistent-timea (-0.6,0) shape=circle w=0.001 fill=none nostroke
node consistent-timeb (3.05,0) shape=circle w=0.001 fill=none nostroke
edge consistent-timea consistent-timeb color=orange
node branching (-0.1,1.65) w=7.6 h=1.25 fill=none stroke=orange
node branchinglabel (-2.5,1.65) "Branching" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node branch-timea (-0.6,1.65) shape=circle w=0.001 fill=none nostroke
node branch-timeb (3.05,1.65) shape=circle w=0.001 fill=none nostroke
edge branch-timea branch-timeb color=orange
node bs0 (0.2,1.65) shape=circle w=0.001 fill=none nostroke
node be0 (2.05,1.22) shape=circle w=0.001 fill=none nostroke
edge bs0 be0 color=orange via (0.7,1.22) smooth
node bs1 (0.65,1.65) shape=circle w=0.001 fill=none nostroke
node be1 (2.65,2.08) shape=circle w=0.001 fill=none nostroke
edge bs1 be1 color=orange via (1.15,2.08) smooth
node bs2 (1.15,1.65) shape=circle w=0.001 fill=none nostroke
node be2 (2.85,1.43) shape=circle w=0.001 fill=none nostroke
edge bs2 be2 color=orange via (1.65,1.43) smooth
node heterogeneous (-0.1,3.3) w=7.6 h=1.5 fill=none stroke=orange
node heterogeneouslabel (-2.5,3.3) "Heterogenous" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node hetero0a (-0.4,3.3) shape=circle w=0.001 fill=none nostroke
node hetero0b (2.5,3.3) shape=circle w=0.001 fill=none nostroke
edge hetero0a hetero0b color=orange
node hetero1a (-0.1,3.02) shape=circle w=0.001 fill=none nostroke
node hetero1b (1.2,3.02) shape=circle w=0.001 fill=none nostroke
edge hetero1a hetero1b color=orange dash="10 8"
node hetero2a (0.9,2.77) shape=circle w=0.001 fill=none nostroke
node hetero2b (3,2.77) shape=circle w=0.001 fill=none nostroke
edge hetero2a hetero2b color=orange dash="2 8"
node hetero3a (0.15,3.65) shape=circle w=0.001 fill=none nostroke
node hetero3b (2.2,3.65) shape=circle w=0.001 fill=none nostroke
edge hetero3a hetero3b color=orange dash="2 10"
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node eternal (-0.1,0) w=7.6 h=1.25 fill=none stroke=orange
node eternallabel (-2.5,0) "Eternal" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node eternal-timea (-0.6,0) shape=circle w=0.001 fill=none nostroke
node eternal-timeb (3.05,0) shape=circle w=0.001 fill=none nostroke
edge eternal-timea eternal-timeb color=orange
node perspectival (-0.1,1.65) w=7.6 h=1.25 fill=none stroke=orange
node perspectivallabel (-2.5,1.65) "Perspectival" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node perspective-timea (-0.6,1.65) shape=circle w=0.001 fill=none nostroke
node perspective-timeb (3.05,1.65) shape=circle w=0.001 fill=none nostroke
edge perspective-timea perspective-timeb color=orange
node you (1.15,1.65) "You" w=.82 h=.55 color=orange stroke=orange
node tense0 (-0.05,1.12) "past" w=0.9 h=0.5 fill=none nostroke color=muted font-size=27
node tense1 (1.15,1.12) "present" w=0.9 h=0.5 fill=none nostroke color=muted font-size=27
node tense2 (2.4,1.12) "future" w=0.9 h=0.5 fill=none nostroke color=muted font-size=27
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node eternal (-0.1,0) w=7.6 h=1.25 fill=none stroke=orange
node eternallabel (-2.5,0) "Eternal" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node eternal-timea (-0.6,0) shape=circle w=0.001 fill=none nostroke
node eternal-timeb (3.05,0) shape=circle w=0.001 fill=none nostroke
edge eternal-timea eternal-timeb color=orange
node perspectival (-0.1,1.65) w=7.6 h=1.25 fill=none stroke=orange
node perspectivallabel (-2.5,1.65) "Perspectival" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node perspective-timea (-0.6,1.65) shape=circle w=0.001 fill=none nostroke
node perspective-timeb (3.05,1.65) shape=circle w=0.001 fill=none nostroke
edge perspective-timea perspective-timeb color=orange
node you (1.15,1.65) "You" w=.82 h=.55 color=orange stroke=orange
node tense0 (-0.05,1.12) "past" w=0.9 h=0.5 fill=none nostroke color=muted font-size=27
node tense1 (1.15,1.12) "present" w=0.9 h=0.5 fill=none nostroke color=muted font-size=27
node tense2 (2.4,1.12) "future" w=0.9 h=0.5 fill=none nostroke color=muted font-size=27
node who (1.15,2.9) "Who?" w=1.2 h=0.5 fill=none nostroke color=orange font-size=52
node who-start (1.15,2.6) shape=circle w=0.001 fill=none nostroke
node who-end (1.15,1.98) shape=circle w=0.001 fill=none nostroke
edge who-start who-end color=orange
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node structures (-0.1,0) w=7.6 h=2.4 fill=none stroke=orange
node structureslabel (-2.5,0) "Structures" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node structure-timea (-0.6,0.75) shape=circle w=0.001 fill=none nostroke
node structure-timeb (3.05,0.75) shape=circle w=0.001 fill=none nostroke
edge structure-timea structure-timeb color=orange
path structure-0-0 (-0.6,-0.8) (0.5,-0.8) (0.5,-0.46) (-0.6,-0.46) closed color=none fill=orange
path structure-0-1 (0.58,-0.8) (1.67,-0.8) (1.67,-0.46) (0.58,-0.46) closed color=none fill=orange
path structure-0-2 (1.75,-0.8) (2.85,-0.8) (2.85,-0.46) (1.75,-0.46) closed color=none fill=orange
path structure-1-0 (-0.6,-0.38) (1.1,-0.38) (1.1,-0.04) (-0.6,-0.04) closed color=none fill=orange
path structure-1-1 (1.18,-0.38) (2.85,-0.38) (2.85,-0.04) (1.18,-0.04) closed color=none fill=orange
path structure-2-0 (-0.6,0.04) (0.14,0.04) (0.14,0.38) (-0.6,0.38) closed color=none fill=orange
path structure-2-1 (0.22,0.04) (1.05,0.04) (1.05,0.38) (0.22,0.38) closed color=none fill=orange
path structure-2-2 (1.13,0.04) (1.94,0.04) (1.94,0.38) (1.13,0.38) closed color=none fill=orange
path structure-2-3 (2.02,0.04) (2.85,0.04) (2.85,0.38) (2.02,0.38) closed color=none fill=orange
node indeterminacy (-0.1,2.25) w=7.6 h=1.5 fill=none stroke=orange
node indeterminacylabel (-2.5,2.25) "Indeterminacy" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node indeterminate-timea (0.05,2.55) shape=circle w=0.001 fill=none nostroke
node indeterminate-timeb (3.25,2.55) shape=circle w=0.001 fill=none nostroke
edge indeterminate-timea indeterminate-timeb color=orange
path blur-0-0 (0.05,2.03) (0.074,2.03) (0.074,2.39) (0.05,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-0-1 (0.071,2.03) (0.095,2.03) (0.095,2.39) (0.071,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-0-2 (0.092,2.03) (0.116,2.03) (0.116,2.39) (0.092,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-0-3 (0.113,2.03) (0.137,2.03) (0.137,2.39) (0.113,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-0-4 (0.134,2.03) (0.158,2.03) (0.158,2.39) (0.134,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-0-5 (0.155,2.03) (0.179,2.03) (0.179,2.39) (0.155,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-0-6 (0.176,2.03) (0.2,2.03) (0.2,2.39) (0.176,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-0-7 (0.197,2.03) (0.221,2.03) (0.221,2.39) (0.197,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-0-8 (0.218,2.03) (0.242,2.03) (0.242,2.39) (0.218,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-0-9 (0.239,2.03) (0.263,2.03) (0.263,2.39) (0.239,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-0-10 (0.26,2.03) (0.284,2.03) (0.284,2.39) (0.26,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-0-11 (0.281,2.03) (0.305,2.03) (0.305,2.39) (0.281,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-0-12 (0.302,2.03) (0.326,2.03) (0.326,2.39) (0.302,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-0-13 (0.323,2.03) (0.347,2.03) (0.347,2.39) (0.323,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-0-14 (0.344,2.03) (0.368,2.03) (0.368,2.39) (0.344,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-0-15 (0.365,2.03) (0.389,2.03) (0.389,2.39) (0.365,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-0-16 (0.386,2.03) (0.41,2.03) (0.41,2.39) (0.386,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-0-17 (0.407,2.03) (0.431,2.03) (0.431,2.39) (0.407,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-0-18 (0.428,2.03) (0.452,2.03) (0.452,2.39) (0.428,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-0-19 (0.449,2.03) (0.473,2.03) (0.473,2.39) (0.449,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-0-20 (0.47,2.03) (0.494,2.03) (0.494,2.39) (0.47,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-0-21 (0.491,2.03) (0.515,2.03) (0.515,2.39) (0.491,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-0-22 (0.512,2.03) (0.536,2.03) (0.536,2.39) (0.512,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-0-23 (0.533,2.03) (0.557,2.03) (0.557,2.39) (0.533,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-0-24 (0.554,2.03) (0.578,2.03) (0.578,2.39) (0.554,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-0-25 (0.575,2.03) (0.599,2.03) (0.599,2.39) (0.575,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-0-26 (0.596,2.03) (0.62,2.03) (0.62,2.39) (0.596,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-0-27 (0.617,2.03) (0.641,2.03) (0.641,2.39) (0.617,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-0-28 (0.638,2.03) (0.662,2.03) (0.662,2.39) (0.638,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-0-29 (0.659,2.03) (0.683,2.03) (0.683,2.39) (0.659,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-0-30 (0.68,2.03) (0.704,2.03) (0.704,2.39) (0.68,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-0-31 (0.701,2.03) (0.725,2.03) (0.725,2.39) (0.701,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-1-0 (0.8,2.03) (0.824,2.03) (0.824,2.39) (0.8,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-1-1 (0.821,2.03) (0.845,2.03) (0.845,2.39) (0.821,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-1-2 (0.842,2.03) (0.866,2.03) (0.866,2.39) (0.842,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-1-3 (0.863,2.03) (0.887,2.03) (0.887,2.39) (0.863,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-1-4 (0.884,2.03) (0.908,2.03) (0.908,2.39) (0.884,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-1-5 (0.905,2.03) (0.929,2.03) (0.929,2.39) (0.905,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-1-6 (0.926,2.03) (0.95,2.03) (0.95,2.39) (0.926,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-1-7 (0.947,2.03) (0.971,2.03) (0.971,2.39) (0.947,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-1-8 (0.968,2.03) (0.992,2.03) (0.992,2.39) (0.968,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-1-9 (0.989,2.03) (1.013,2.03) (1.013,2.39) (0.989,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-1-10 (1.01,2.03) (1.034,2.03) (1.034,2.39) (1.01,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-1-11 (1.031,2.03) (1.055,2.03) (1.055,2.39) (1.031,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-1-12 (1.052,2.03) (1.076,2.03) (1.076,2.39) (1.052,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-1-13 (1.073,2.03) (1.097,2.03) (1.097,2.39) (1.073,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-1-14 (1.094,2.03) (1.118,2.03) (1.118,2.39) (1.094,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-1-15 (1.115,2.03) (1.139,2.03) (1.139,2.39) (1.115,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-1-16 (1.136,2.03) (1.16,2.03) (1.16,2.39) (1.136,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-1-17 (1.157,2.03) (1.181,2.03) (1.181,2.39) (1.157,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-1-18 (1.178,2.03) (1.202,2.03) (1.202,2.39) (1.178,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-1-19 (1.199,2.03) (1.223,2.03) (1.223,2.39) (1.199,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-1-20 (1.22,2.03) (1.244,2.03) (1.244,2.39) (1.22,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-1-21 (1.241,2.03) (1.265,2.03) (1.265,2.39) (1.241,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-1-22 (1.262,2.03) (1.286,2.03) (1.286,2.39) (1.262,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-1-23 (1.283,2.03) (1.307,2.03) (1.307,2.39) (1.283,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-1-24 (1.304,2.03) (1.328,2.03) (1.328,2.39) (1.304,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-1-25 (1.325,2.03) (1.349,2.03) (1.349,2.39) (1.325,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-1-26 (1.346,2.03) (1.37,2.03) (1.37,2.39) (1.346,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-1-27 (1.367,2.03) (1.391,2.03) (1.391,2.39) (1.367,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-1-28 (1.388,2.03) (1.412,2.03) (1.412,2.39) (1.388,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-1-29 (1.409,2.03) (1.433,2.03) (1.433,2.39) (1.409,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-1-30 (1.43,2.03) (1.454,2.03) (1.454,2.39) (1.43,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-1-31 (1.451,2.03) (1.475,2.03) (1.475,2.39) (1.451,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-2-0 (1.55,2.03) (1.574,2.03) (1.574,2.39) (1.55,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-2-1 (1.571,2.03) (1.595,2.03) (1.595,2.39) (1.571,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-2-2 (1.592,2.03) (1.616,2.03) (1.616,2.39) (1.592,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-2-3 (1.613,2.03) (1.637,2.03) (1.637,2.39) (1.613,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-2-4 (1.634,2.03) (1.658,2.03) (1.658,2.39) (1.634,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-2-5 (1.655,2.03) (1.679,2.03) (1.679,2.39) (1.655,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-2-6 (1.676,2.03) (1.7,2.03) (1.7,2.39) (1.676,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-2-7 (1.697,2.03) (1.721,2.03) (1.721,2.39) (1.697,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-2-8 (1.718,2.03) (1.742,2.03) (1.742,2.39) (1.718,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-2-9 (1.739,2.03) (1.763,2.03) (1.763,2.39) (1.739,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-2-10 (1.76,2.03) (1.784,2.03) (1.784,2.39) (1.76,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-2-11 (1.781,2.03) (1.805,2.03) (1.805,2.39) (1.781,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-2-12 (1.802,2.03) (1.826,2.03) (1.826,2.39) (1.802,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-2-13 (1.823,2.03) (1.847,2.03) (1.847,2.39) (1.823,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-2-14 (1.844,2.03) (1.868,2.03) (1.868,2.39) (1.844,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-2-15 (1.865,2.03) (1.889,2.03) (1.889,2.39) (1.865,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-2-16 (1.886,2.03) (1.91,2.03) (1.91,2.39) (1.886,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-2-17 (1.907,2.03) (1.931,2.03) (1.931,2.39) (1.907,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-2-18 (1.928,2.03) (1.952,2.03) (1.952,2.39) (1.928,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-2-19 (1.949,2.03) (1.973,2.03) (1.973,2.39) (1.949,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-2-20 (1.97,2.03) (1.994,2.03) (1.994,2.39) (1.97,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-2-21 (1.991,2.03) (2.015,2.03) (2.015,2.39) (1.991,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-2-22 (2.012,2.03) (2.036,2.03) (2.036,2.39) (2.012,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-2-23 (2.033,2.03) (2.057,2.03) (2.057,2.39) (2.033,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-2-24 (2.054,2.03) (2.078,2.03) (2.078,2.39) (2.054,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-2-25 (2.075,2.03) (2.099,2.03) (2.099,2.39) (2.075,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-2-26 (2.096,2.03) (2.12,2.03) (2.12,2.39) (2.096,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-2-27 (2.117,2.03) (2.141,2.03) (2.141,2.39) (2.117,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-2-28 (2.138,2.03) (2.162,2.03) (2.162,2.39) (2.138,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-2-29 (2.159,2.03) (2.183,2.03) (2.183,2.39) (2.159,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-2-30 (2.18,2.03) (2.204,2.03) (2.204,2.39) (2.18,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-2-31 (2.201,2.03) (2.225,2.03) (2.225,2.39) (2.201,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-3-0 (2.3,2.03) (2.324,2.03) (2.324,2.39) (2.3,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
path blur-3-1 (2.321,2.03) (2.345,2.03) (2.345,2.39) (2.321,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-3-2 (2.342,2.03) (2.366,2.03) (2.366,2.39) (2.342,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-3-3 (2.363,2.03) (2.387,2.03) (2.387,2.39) (2.363,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-3-4 (2.384,2.03) (2.408,2.03) (2.408,2.39) (2.384,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-3-5 (2.405,2.03) (2.429,2.03) (2.429,2.39) (2.405,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-3-6 (2.426,2.03) (2.45,2.03) (2.45,2.39) (2.426,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-3-7 (2.447,2.03) (2.471,2.03) (2.471,2.39) (2.447,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-3-8 (2.468,2.03) (2.492,2.03) (2.492,2.39) (2.468,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-3-9 (2.489,2.03) (2.513,2.03) (2.513,2.39) (2.489,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-3-10 (2.51,2.03) (2.534,2.03) (2.534,2.39) (2.51,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-3-11 (2.531,2.03) (2.555,2.03) (2.555,2.39) (2.531,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-3-12 (2.552,2.03) (2.576,2.03) (2.576,2.39) (2.552,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-3-13 (2.573,2.03) (2.597,2.03) (2.597,2.39) (2.573,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-3-14 (2.594,2.03) (2.618,2.03) (2.618,2.39) (2.594,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-3-15 (2.615,2.03) (2.639,2.03) (2.639,2.39) (2.615,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-3-16 (2.636,2.03) (2.66,2.03) (2.66,2.39) (2.636,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 94.63%, transparent)"
path blur-3-17 (2.657,2.03) (2.681,2.03) (2.681,2.39) (2.657,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 91.72%, transparent)"
path blur-3-18 (2.678,2.03) (2.702,2.03) (2.702,2.39) (2.678,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 86.16%, transparent)"
path blur-3-19 (2.699,2.03) (2.723,2.03) (2.723,2.39) (2.699,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 78.45%, transparent)"
path blur-3-20 (2.72,2.03) (2.744,2.03) (2.744,2.39) (2.72,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 69.23%, transparent)"
path blur-3-21 (2.741,2.03) (2.765,2.03) (2.765,2.39) (2.741,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 59.22%, transparent)"
path blur-3-22 (2.762,2.03) (2.786,2.03) (2.786,2.39) (2.762,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 49.09%, transparent)"
path blur-3-23 (2.783,2.03) (2.807,2.03) (2.807,2.39) (2.783,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 39.45%, transparent)"
path blur-3-24 (2.804,2.03) (2.828,2.03) (2.828,2.39) (2.804,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 30.72%, transparent)"
path blur-3-25 (2.825,2.03) (2.849,2.03) (2.849,2.39) (2.825,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 23.19%, transparent)"
path blur-3-26 (2.846,2.03) (2.87,2.03) (2.87,2.39) (2.846,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 16.97%, transparent)"
path blur-3-27 (2.867,2.03) (2.891,2.03) (2.891,2.39) (2.867,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 12.03%, transparent)"
path blur-3-28 (2.888,2.03) (2.912,2.03) (2.912,2.39) (2.888,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 8.27%, transparent)"
path blur-3-29 (2.909,2.03) (2.933,2.03) (2.933,2.39) (2.909,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 5.51%, transparent)"
path blur-3-30 (2.93,2.03) (2.954,2.03) (2.954,2.39) (2.93,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 3.56%, transparent)"
path blur-3-31 (2.951,2.03) (2.975,2.03) (2.975,2.39) (2.951,2.39) closed color=none fill="color-mix(in srgb, var(--slide-orange) 2.23%, transparent)"
```

---

### Temporal Representations

```diagram
diagram temporal-representations
node state (-0.1,0) w=7.6 h=1.9 fill=none stroke=orange
node statelabel (-2.5,0) "State" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node Statestart (-0.61,-0.1) shape=circle w=0.001 fill=none nostroke
node Stateend (3.39,-0.65) shape=circle w=0.001 fill=none nostroke
edge Statestart Stateend color=orange via (-0.21,-0.42) via (0.19,-0.35) via (0.59,-0.07) via (0.99,0.12) via (1.39,-0.02) via (1.75,-0.6) via (2.15,-0.67) via (2.55,-0.35) via (2.926,-0.3) smooth
node Statetimea (-0.61,0.65) shape=circle w=0.001 fill=none nostroke
node Statetimeb (3.39,0.65) shape=circle w=0.001 fill=none nostroke
edge Statetimea Statetimeb color=orange
node State-mark-0 (-0.61,-0.1) shape=circle w=.13 fill=orange stroke=orange
node State-mark-1 (-0.21,-0.42) shape=circle w=.13 fill=orange stroke=orange
node State-mark-2 (0.19,-0.35) shape=circle w=.13 fill=orange stroke=orange
node State-mark-3 (0.59,-0.07) shape=circle w=.13 fill=orange stroke=orange
node State-mark-4 (0.99,0.12) shape=circle w=.13 fill=orange stroke=orange
node State-mark-5 (1.39,-0.02) shape=circle w=.13 fill=orange stroke=orange
node State-mark-6 (1.75,-0.6) shape=circle w=.13 fill=orange stroke=orange
node State-mark-7 (2.15,-0.67) shape=circle w=.13 fill=orange stroke=orange
node State-mark-8 (2.55,-0.35) shape=circle w=.13 fill=orange stroke=orange
node State-mark-9 (2.926,-0.3) shape=circle w=.13 fill=orange stroke=orange
node event (-0.1,2.2) w=7.6 h=1.9 fill=none stroke=orange
node eventlabel (-2.5,2.2) "Event" w=2.3 h=0.5 fill=none nostroke color=orange font-size=52
node Eventstart (-0.61,2.1) shape=circle w=0.001 fill=none nostroke
node Eventend (3.39,1.55) shape=circle w=0.001 fill=none nostroke
edge Eventstart Eventend color=orange via (-0.21,1.78) via (0.19,1.85) via (0.59,2.13) via (0.99,2.32) via (1.39,2.18) via (1.75,1.6) via (2.15,1.53) via (2.55,1.85) via (2.926,1.9) smooth
node Eventtimea (-0.61,2.85) shape=circle w=0.001 fill=none nostroke
node Eventtimeb (3.39,2.85) shape=circle w=0.001 fill=none nostroke
edge Eventtimea Eventtimeb color=orange
node Event-mark-0 (-0.61,2.1) shape=circle w=.13 fill=var(--slide-background) stroke=orange
node Event-mark-1 (-0.21,1.78) shape=circle w=.13 fill=var(--slide-background) stroke=orange
node Event-mark-4 (0.99,2.32) shape=circle w=.13 fill=var(--slide-background) stroke=orange
node Event-mark-7 (2.15,1.53) shape=circle w=.13 fill=var(--slide-background) stroke=orange
node Event-mark-9 (2.926,1.9) shape=circle w=.13 fill=var(--slide-background) stroke=orange
```

---

## Time is a Presence in the Process of Perception

---

### Time is a Presence in the Process of Perception

[medium left vcenter] How long does it take to read?

[medium left] Progress from left to right?

[medium left] Remember changes from the past?

[medium left] Predict changes in the future?

---

[big left vcenter] Time as <span class="text-accent">Data</span>

::: 50/50

[big left vcenter] Time as <span class="text-accent">Context</span>

---

### Privileged Encodings

[medium left vcenter] <span class="text-accent">Timeline</span>: Time → Space

[medium left] <span class="text-accent">Animation</span>: Time → Time

---

### Spatial Metaphors

[medium left vcenter] Timeline

[medium left] Calendars

[medium left] Clocks

[medium left] Branches

::: 42/58

![Historical timeline detail](/images/temporal/native/page-31-xobject-200.png)

---

### Animation

![figure clip](/embed/temporal/gapminder.html)

> [Gapminder Tools](https://www.gapminder.org/tools/)

---

### Annotation

![](/images/temporal/page-33-annotation.svg)

---

### Annotation

![](/images/temporal/page-34-annotation.svg)

---

### Presentness and Positionality

[medium left vcenter] Past Present and Future

[medium left] *For whom?*

---

### Temporal Interaction

[medium left vcenter] Control the “present” ?

[medium left] Move forward, backward, or stop time?

[medium left] Lookup specific time?

[medium left] Compare times?

[medium left] Identify and/or localize Time?

---

### Time Series Analysis

![](/images/temporal/native/page-37-xobject-243.png)


::: 60/40

[medium left vcenter] classification

[medium left] clustering

[medium left] search

[medium left] pattern discovery

[medium left] prediction



---

### Time Series Analysis

[medium left vcenter] Temporal / Modal Logic

[medium left] Control Systems

::: 42/58

![](/images/temporal/native/page-38-xobject-248.png)

![](/images/temporal/native/page-38-xobject-249.png)

---

### Data Engineering Considerations

![](/images/temporal/native/page-39-xobject-254.png)

---

![](/images/temporal/native/page-40-xobject-260.png)

[medium hcenter] Zombies

::: 1/1/1

![](/images/temporal/native/page-40-xobject-259.png)

[medium hcenter] Sourdough

:::

![](/images/temporal/native/page-40-xobject-261.png)

[medium hcenter] Full Moon

---

![](/images/temporal/native/page-41-xobject-267.png)

---

### Waveform / Spectrogram

![](/images/temporal/page-42-waveform-spectrogram.svg)

---

### Examples

[medium left vcenter] [browser.timeviz.net](https://browser.timeviz.net/)

::: 42/58

![](/images/temporal/page-43-design-space.svg)

---

### Examples

![figure scrollable](https://browser.timeviz.net/)

---
