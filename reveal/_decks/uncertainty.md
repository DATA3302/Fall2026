---
title: Visualizing Uncertainty
description: Aggregation, sample, and experience-based approaches to communicating uncertainty.
order: 6
course: DATA 3302 Fall 2026
---

# Visualizing Uncertainty<span class="text-accent">?</span>

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from Cal Poly CSC 477: Scientific and Information Visualization ("Visualizing Uncertainty").

---

## What can uncertainty mean?

---


[big] What can uncertainty mean?

::: 40/60

[big] Measurement Uncertainty

[big] Decision Uncertainty

[big] Model Uncertainty

[big] Data Incompleteness

[big] Data Imprecision

[big] Data Credibility

---


[big] Galton Heights

[lead] <span class="text-accent">Uncertainty</span>: The possibility that a quantity could take multiple values

[lead] <span class="text-accent">Uncertainty Visualization</span>: Representation of possible values

::: 55/45

![](/images/uncertainty/galton.png)

---


[big] Uncertainty is a Process

::: 38/62

![figure](/embed/uncertainty/plinko.html)

---

[big] <span class="text-accent">Uncertainty Visualization</span>: Representation of possible values

::: 

[big] Individual Measurements? (Heights)

[big] Aggregate/Derived Values? (Avg Height)

[big] Uncertainty vs Uncertainty about uncertainty vs …


---


## Aggregation Approach

---

### Aggregation Approach

![figure](/embed/uncertainty/distributions.html?view=overview)

---

### Aggregation Approach

[big] Confidence Interval

![figure](/embed/uncertainty/aggregation.html?view=ci)

---

### Aggregation Approach

[big] Confidence Interval

[big] What does a 95% confidence interval indicate?

---

### Aggregation Approach

[big] Confidence Interval

[big] What does a 95% confidence interval indicate?

::: 40/60

[big] A 95% chance that the population mean is within the interval?

---

### Aggregation Approach

[big] Confidence Interval

[big] What does a 95% confidence interval indicate?

::: 40/60

[big] A 95% chance that the population mean is within the interval?

[big] <span style="color: var(--slide-magenta); font-weight: 700;">WRONG</span>

---

### Aggregation Approach

[big] Confidence Interval

[big] What does a 95% confidence interval indicate?

::: 40/60

[big] Given an infinite number of independent experiments, 95% of the confidence intervals generated will contain the true mean.

---

### Aggregation Approach

[big] Confidence Interval

[big vcenter] “Confidence” concerns the procedure, not the data.

---


### Aggregation Approach

[big] Box Plot

![figure](/embed/uncertainty/aggregation.html?view=box)

---

### Aggregation Approach

[big] Summary Marks

[big] *Within the bar bias*

[big] *Ignorability*

::: 30/70

![figure](/embed/uncertainty/aggregation.html?view=marks)

---

### Aggregation Approach

[big] Visual Distribution

![figure](/embed/uncertainty/distributions.html?view=trio)

---

### Aggregation Approach

[big] Visual Distribution

[big] Good channels for uncertainty?

![figure](/embed/uncertainty/distributions.html?view=trio)

---

### Aggregation Approach

[big] Visual Distribution - Smoothing with KDE

![figure](/embed/uncertainty/kde.html?step=0)

---

### Aggregation Approach

[big] Visual Distribution - Smoothing with KDE

![figure](/embed/uncertainty/kde.html?step=1)

---

### Aggregation Approach

[big] Visual Distribution - Smoothing with KDE

![figure](/embed/uncertainty/kde.html?step=2)

---

### Aggregation Approach

[big] Visual Distribution - Smoothing with KDE

![figure](/embed/uncertainty/kde.html?step=3)

---

[big vcenter] Aggregation Approach <span class="text-accent">Relies on Abstractions</span>

---

![figure](/embed/uncertainty/anscombe.html?step=0)

---

![figure](/embed/uncertainty/anscombe.html?step=1)

---

[big vcenter] Are the differences reliable?

::: 40/60

![figure](/embed/uncertainty/reliable.html?step=0)

---

[big vcenter] Are the differences reliable?

::: 40/60

![figure](/embed/uncertainty/reliable.html?step=1)

---

![figure](/embed/uncertainty/reliable.html?step=2)

---

![figure](/embed/uncertainty/reliable.html?step=3)

---

[big vcenter] People judge with <span class="text-accent">heuristics</span> which <span class="text-accent">reduce complexity</span> and lead to more <span class="text-accent">confidence</span>

---

[big] “When called upon to judge probability, people actually judge something else and believe they have judged probability”

[big] Daniel Kahneman

---

[big] Uncertainty is only as good as your modeling!

::: 40/60

![figure](/embed/uncertainty/penguins.html?step=0)

---


[big] Uncertainty is only as good as your modeling!

::: 25/75

![figure](/embed/uncertainty/penguins.html?step=1)

---

[big vcenter] Uncertainty as a *modifier* of existing channels

---

[big center] Data Map

![figure](/embed/uncertainty/map.html?view=data)

---

[big center] Data Map

![figure](/embed/uncertainty/map.html?view=data)

::: 50/50

[big center] Uncertainty (Error) Map

![figure](/embed/uncertainty/map.html?view=error)

---

[big center] Bivariate Colormap

![figure](/embed/uncertainty/map.html?view=bivariate)

---

### Value Supressing Uncertainty Palettes

![](/images/uncertainty/vsup-palette.png "Value-Suppressing Uncertainty Palettes. Correll, Moritz, Heer.")

---

### Value Supressing Uncertainty Palettes

![](/images/uncertainty/vsup-arc.png "Value-Suppressing Uncertainty Palettes. Correll, Moritz, Heer.")

---


[big] Semiotics of Uncertainty

::: 25/75

![](/images/uncertainty/semiotics-photos.jpg "Visual Semiotics & Uncertainty Visualization: An Empirical Study. MacEachran et al.")

---

[big center] Fuziness

![figure](/embed/uncertainty/fuzzy.html?channel=fuzziness)

::: 50/50

[big center] Size

![figure](/embed/uncertainty/fuzzy.html?channel=size)

> Visual Semiotics & Uncertainty Visualization: An Empirical Study. MacEachran et al.

---

![](/images/uncertainty/semiotics-glyphs.jpg "Visual Semiotics & Uncertainty Visualization: An Empirical Study. MacEachran et al.")

---

![](/images/uncertainty/semiotics-results.jpg "Visual Semiotics & Uncertainty Visualization: An Empirical Study. MacEachran et al.")

---

![](/images/uncertainty/semiotics-results-2.jpg "Visual Semiotics & Uncertainty Visualization: An Empirical Study. MacEachran et al.")

---

![](/images/uncertainty/semiotics-results-3.jpg "Visual Semiotics & Uncertainty Visualization: An Empirical Study. MacEachran et al.")

---

## Sample Approach

---


### Sample Approach

![figure](/embed/uncertainty/jitter.html)

![](/images/uncertainty/sample-approach-photos.jpg)

---

[big center] Aggregation

![](/images/uncertainty/aggregation-cone.jpg)

::: 50/50

[big center] Sample

![](/images/uncertainty/sample-cone.jpg)

---

[big vcenter] If uncertainty is intuitive then how can we directly 
<br>
communicate intuition

---

[big vcenter] Experience of Uncertainty as Counterfactuals

::: 30/70

![](/images/uncertainty/counterfactuals.jpg)

---

[big vcenter] Experience of Uncertainty from Past Experience

::: 45/55

[![](/images/uncertainty/past-experience.jpg "The New York Times, The Upshot, “Senate Forecasts” (2014)")](https://www.nytimes.com/newsgraphics/2014/senate-model/index.html)

---


![figure](/embed/uncertainty/lifeflow.html)

> Recreated after Nathan Yau, FlowingData, “Years You Have Left to Live, Probably” (2015). Data: U.S. Social Security Administration, 2011 period life table.

---


![figure](/embed/ethical/photo-overlay.html?scene=abstraction)

---


[big] How to experience uncertainty

::: 25/75

[big left] 1. Generate <span class="text-accent">representative</span> hypothetical examples

[big left] 2. Encode examples allowing comparison

[big left] 3. Present (Layer, Small Multiples, Animation, Interactive, Combination…)

---


[big] A word of warning

::: 40/60

[big] Experiencable uncertainty allows people to intuit using existing perceptions of chance

[big] …

[big] But on average, people are still bad at understanding probability <span style="color: var(--slide-magenta); font-style: italic;">especially very low or very high probability</span>

---

[big] Uncertainty is indispensable when honestly communicating <span class="text-accent">information</span> from <span class="text-accent">data</span>

---

[big] Uncertainty is indispensable when honestly communicating <span class="text-accent">information</span> from <span class="text-accent">data</span>

[big] Understanding uncertainty is really really hard and there are lots of ways to mess it up

---

[big] Uncertainty is indispensable when honestly communicating <span class="text-accent">information</span> from <span class="text-accent">data</span>

[big] Understanding uncertainty is really really hard and there are lots of ways to mess it up

[big] But you have to do it, or else your audience will do it for you <span class="text-accent">but worse</span>

---

> [!green] [big] Lab Activity:
>
> [big]Take Assignment Sketch, Prototype, or Draft
> 
> [big] Consider different sources of uncertainty in the data
> 
> [big] Pick one and sketch/propose one aggregated and one sample based approach to communicating the uncertainty
>
> [big] Consider how other layers of uncertainty can or can’t be encoded
