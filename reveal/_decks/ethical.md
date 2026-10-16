---
title: Ethical and Deceptive Visualizations
description: Ethics, deceptive visualization, and how people actually lie with charts.
order: 5
course: DATA 3302 Fall 2026
---

# Ethical and Deceptive Visualizations

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from Cal Poly CSC 477: Scientific and Information Visualization ("Ethical and Deceptive Visualizations").

---

[big vcenter] Data Visualization in Practice

:::

![](/images/ethical/flyer.png)

---

![](/images/ethical/cumulative-share-photo.jpg)

---


![](/images/ethical/owid-share.svg)

---


![](/images/ethical/owid-share.svg)

:::

![](/images/ethical/owid-cumulative.svg)

---


![](/images/ethical/owid-share.svg)

![](/images/ethical/owid-annual-share.svg)

:::

![](/images/ethical/owid-cumulative.svg)

![](/images/ethical/owid-annual.svg)

---


![](/images/ethical/owid-per-capita.svg)

---


![](/images/ethical/owid-trade.svg)

---


![](/images/ethical/owid-consumption.svg)

---

![](/images/ethical/vehicle-photo.jpg)

---

![](/images/ethical/vehicle-photo-chart.jpg)

---

![](/images/ethical/sandbag-photos.jpg)

---

[big] “One piece of evidence is enough”

---
[big] “One piece of evidence is enough”

[big] If it is available at the <span class="text-accent">right time</span> and to the <span class="text-accent">right people</span>

---
[big vcenter] Ethics

::: 30/70

![](/images/ethical/trolley.png)

---

[big vcenter] Ethics

::: 30/70

![](/images/ethical/dont-be-evil.png)

---

[big vcenter] Ethics

::: 30/70

![](/images/ethical/google-headlines.jpg "TechSpot; The Intercept.")

---


![figure](/embed/ethical/photo-overlay.html?scene=portraits)

---


[big] Deceptive Visualization

[big] A graphical depiction of information, designed <span class="text-accent">with or without an intent to deceive</span>, that may create a belief about the world, the data, or its components, which differs from the <span class="text-accent">truth</span>

> How Deceptive are Deceptive Visualizations? An Empirical Analysis of Common Distortion Techniques. Pandey et al.

---


[big] You have a responsibility to both

::: 40/60

> [!gold] Audience
>
> People interacting with and interpreting your analysis/visualization

> [!gold] Subjects
>
> Subjects of the data. People impacted by both data collection and resultant analysis

---

![figure](/embed/ethical/annotated.html?scene=unemployment&step=0)

---

![figure](/embed/ethical/annotated.html?scene=unemployment&step=1)

---

![](/images/ethical/scientific-fraud.jpg)

---

![](/images/ethical/image-fraud.jpg)

---


![](/images/ethical/truncated-axis.svg)

---


![](/images/ethical/temperature-anomaly.png)

---


![](/images/ethical/temperature-anomaly-zoom.png)

---

[vcenter]
> [big left] <span class="text-accent">Visualization relies on convention</span>.<br> We expect a pie chart to convey part/whole relationships, and thus for its components to add up to 100%. We expect that the heights of bars in a bar chart are proportional to their value; truncated y-axes defy this expectation. By defying these implicit conventions, an attacker can create a visualization that is <span class="text-accent">technically correct but that misleads</span>.

> Black Hat Visualization. Michael Correll and Jeffrey Heer.

---


![](/images/ethical/bush-tax-cuts.jpg)

---


![](/images/ethical/marginal-rate.png)

---

[big vcenter] Find the deception

:::

![figure](/embed/ethical/epa.html?step=0)

---

[big vcenter] Find the deception

:::

![figure](/embed/ethical/epa.html?step=1)

---

![figure](/embed/ethical/epa.html?step=2)

---


![](/images/ethical/co2-concentration.jpg)

---

[big vcenter] Bayesian Epistemology

<div class="formula"><span>P(H | E) = <span class="frac"><span>P(E | H) P(H)</span><span>P(E)</span></span></span></div>

---

[big] Social context and expectation affect effectiveness of communication

<div class="formula"><span>P(H | E) = <span class="frac"><span>P(E | H) P(H)</span><span>P(E)</span></span></span></div>

---

[big] Axes, metaphors, and other design choices imply a universe of possible counterfactual data.

<div class="formula"><span>P(H | E) = <span class="frac"><span>P(E | H) P(H)</span><span>P(E)</span></span></span></div>

---

[lead] This was shared in a tweet by the National Review with the caption: “The only #climatechange chart you need to see”

![](/images/ethical/fahrenheit.png)

::: 70/30

[big vcenter] What does all that space actually represent?

> Truncating the Y-Axis: Threat or Menace? Tableau Blog. Michael Correll.

---

[lead] This was shared in a tweet by the National Review with the caption: “The only #climatechange chart you need to see”

![](/images/ethical/fahrenheit-rescaled.png)

::: 70/30

[big vcenter] What does all that space actually represent?

> Truncating the Y-Axis: Threat or Menace? Tableau Blog. Michael Correll.

---

[lead] This was shared in a tweet by the National Review with the caption: “The only #climatechange chart you need to see”

![](/images/ethical/fahrenheit-plain.png)

::: 62/38

[lead vcenter] “The designer must actively take <span class="text-accent">responsibility</span> for choosing the visual size of the effect in the chart. Truncate your axis or don’t, but <span class="text-accent">don’t fall back on defaults unthinkingly.</span>”

> Truncating the Y-Axis: Threat or Menace? Tableau Blog. Michael Correll.

---

[big vcenter] Find the deception

:::

![](/images/ethical/ithaca-times-0.svg)

---

[big vcenter] Find the deception

[big] “Lower” Rankings are actually better!

:::

![](/images/ethical/ithaca-times-1.svg)

---

[big vcenter] Find the deception

[big] “Lower” Rankings are actually better!

[big] Dual Axes

:::

![](/images/ethical/ithaca-times-2.svg)

---

[big] Bullshit and Bad Faith

![figure](/embed/ethical/annotated.html?scene=books&step=0)

::: 40/60

[big] Simple Lie

[lead] “No, officer, I wasn’t speeding”

[lead] You know the truth, but intentionally say something you know is untrue

[big] Bullshit

[lead] “The party was lame anyways, it’s good I wasn’t invited”

[lead] You don’t know or don’t care about the truth, but intentionally say something you hope is persuasive

---

[big] Bullshit and Bad Faith

![figure](/embed/ethical/annotated.html?scene=books&step=1)

::: 40/60

[big] Simple Lie

[lead] “No, officer, I wasn’t speeding”

[lead] You know the truth, but intentionally say something you know is untrue

[big accent] Bullshit

[lead] <span class="text-accent">“The party was lame anyways, it’s good I wasn’t invited”</span>

[lead] You don’t know or don’t care about the truth, but intentionally say something you hope is persuasive

---


[big] Bullshit uses the mere *Aesthetic* of Data

::: 35/65

![](/images/ethical/decline-of-art.jpg)

---


[big] Intentional Obfuscation and Weaponized Incompetence

[lead] US House Republicans’ depiction of what would become the Affordable Care Act.

::: 35/65

![](/images/ethical/obamacare-chart.jpg)

---

![](/images/ethical/year-in-news.jpg "Echelon Insights, “The Year in News.”")

---

![](/images/ethical/bubble-chart.jpg)

---

[big vcenter] “It is a tale told by an idiot, full of sound and fury, signifying nothing”

::: 35/65

![](/images/ethical/collage.jpg)

---

## Deceptive Visualization in Practice

---

![](/images/ethical/misleading-pipeline.jpg)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Deceptiveness: Interpretation from caption does not align with data/figure

::: 40/60

![](/images/ethical/rhode-island.png)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

```diagram
node a (0,0) "Construction Errors" fill=none nostroke
```

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

```diagram
node a (0,0) "Construction Errors" fill=none nostroke
node b (0,1) "Reasoning Errors" fill=none nostroke
edge a b
```

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big] Cherry Picking

[big] Arbitrary Thresholds

[big] Causal Inference

[big] Data Validity

[big] Statistical Nuance

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Cherry Picking

::: 28/72

![](/images/ethical/cherry-picking.png)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

![](/images/ethical/cherry-picking-bands.png)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Arbitrary Threshold

::: 28/72

![](/images/ethical/arbitrary-threshold.jpg)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Causal Inference

::: 28/72

![](/images/ethical/causal-inference.png)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big] Data Validity

[big] Canada: COVID cases per province.

[big] USA: COVID cases per county.

::: 28/72

![](/images/ethical/canada-map.jpg)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Statistical Nuance (Base Rate Fallacy)

::: 28/72

![](/images/ethical/base-rate.png)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] “Design violations are not more prevalent in online misinformation”

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Screenshots from Interactive Dashboards Enable Selection Bias and Post Text and Annotations Reframe Interpretations

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---


[big] Chart-Hacking

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big] Chart-Hacking


```diagram
node a (0,0) "More interactive selection options" fill=none nostroke
```

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---
[big] Chart-Hacking


```diagram
node a (0,0) "More interactive selection options" fill=none nostroke
node b (0,1) "More possibility for selection bias" fill=none nostroke
edge a b 
```

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---


[big] Misinformation as Weak Inductive Reasoning

::: 30/70

![figure](/embed/ethical/weak-induction.html)

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big vcenter] Hidden Premises Make Visualizations <span class="text-accent">Vulnerable to Deception</span>

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big] Add a very salient feature to the chart that would render the misinformation argument not logical.

> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---

[big] Make information about data caveats and accuracy more salient and dynamic.

[big muted] Add a very salient feature to the chart that would render the misinformation argument not logical.



> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---


[big] Communicate the uncertainty of data estimates

[big muted] Make information about data caveats and accuracy more salient and dynamic.

[big muted] Add a very salient feature to the chart that would render the misinformation argument not logical.


> Lisnic, Polychronis, Lex & Kogan. 2023. Misleading Beyond Visual Tricks: How People Actually Lie with Charts. CHI ’23, Article 817. https://doi.org/10.1145/3544548.3580910

---


>[!green] [big] Lab Exercise (Practice for A3)
>
> [big] Take a sketch from A2 and sketch a deceptive alternative
> 
> [big] Take one or more of your examples from A1 and screenshot and label a deceptive reframing




[big] Can you <span class="text-accent">trick</span> your classmates?

[big] Can you <span class="text-accent">be tricked</span> by your classmates?
