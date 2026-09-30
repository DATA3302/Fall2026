---
title: Multi-view Composition
description: Composing single charts into layered, faceted, repeated, and concatenated multi-view visualizations.
order: 3
course: DATA 3302 Fall 2026
---

# Multi-view Composition

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from Cal Poly CSC 477: Scientific and Information Visualization ("Multi-view Composition"). Figures rebuilt in D3 from the same public data (vega-datasets).

---

[big vcenter] Composition is the Heart of Computing

:::

```diagram
node X (0,0) "X"
node Y (2,0) "Y"
node Z (2,1.3) "Z"

edge X Y label="f"
edge Y Z label="g"
edge X Z label="g ∘ f"
```


---

[big vcenter] Data


:::

[big vcenter] Graphics


---
[muted big vcenter] Data

[big] Relational Algebra

:::

[muted big vcenter] Graphics

[big] Visual Algebra

---

[big vcenter] Operators

:::

[vcenter]
> [!gold] [big] Layer
>

> [!gold] [big] Facet 
>

> [!gold] [big] Repeat
>

> [!gold] [big] Concatenate
>



---

## Layer

---

[big vcenter] We have already seen some layering

::: 34/66

![figure](/embed/composition/iris-scatter.html)

---

![figure](/embed/composition/mean-line.html)

---

![figure](/embed/composition/mean-line.html)

:::

![figure](/embed/composition/error-band.html)

---

[big vcenter] Layer them with `+`

::: 30/70

![figure](/embed/composition/layered.html)

---

![figure](/embed/composition/layered.html)

::: 66/34

[big vcenter] Layering Preserves Encodings

[big muted] Charts with compatible scales can share axes

---

![figure](/embed/composition/setosa-sepal.html)

::: 45/10/45

[big center vcenter] +

:::

![figure](/embed/composition/setosa-petal.html)

---

[big vcenter] By default, layers should share common axes

::: 34/66

![figure](/embed/composition/shared-axis.html)

---

![figure](/embed/composition/dual-axis.html)

::: 66/34

[big vcenter] Dual axes are flexible but dangerous

---

> [!green] [big] What is wrong?

![figure](/embed/composition/dual-axis-rescaled.html)

> See [storytellingwithdata.com, "declutter a dual y-axis chart"](https://www.storytellingwithdata.com/blog/declutter-a-dual-y-axis-chart) and [PolicyViz, "Avoiding the Dual Axis Chart"](https://policyviz.com/2022/10/06/avoiding-the-dual-axis-chart/).

---

![figure](/embed/composition/dual-axis-clean.html)

::: 

[vcenter]
>[!gold] [big] Ways to help
>
> [big] Add units to legend
>
>  [big]  Match channels/colors on axis

---

[big vcenter] Not all layering has to be a full chart

[big muted] Can be used for callouts

::: 34/66

![figure](/embed/composition/threshold.html)

---

![](/images/composition/dubois-georgia-property.jpg "W. E. B. Du Bois, 1900 Paris Exposition. Library of Congress, public domain.")

:::

![](/images/composition/bbc-daily-cases.png "BBC News. Source: Gov.uk dashboard, updated to 26 Feb 09:00 GMT.")

---

## Facet

---

![figure](/embed/composition/facet-grid.html)

::: 66/34

[big vcenter] Can Facet Row and Column Independently

---

![figure](/embed/composition/facet-wrap.html)

::: 66/34

[big vcenter] Can wrap single Facet

---

[vcenter]
> [!gold]  Facet
>
> [big] Directly Specify Rows/Cols
>
> [big] Can do independent axes (probably should not though)

---


![figure](/embed/composition/facet-wrap.html)

::: 66/34

[vcenter]
> [!green]  Reminder
>
> [big] What idiom does a facet remind you of?


---

[vcenter]
> [!gold] Small Multiples
>
> [big] "Illustrations of postage-stamp size are indexed by category or a label, sequenced over time like the frames of a movie, or ordered by a quantitative variable not used in the single image itself."
>
> [muted] Edward Tufte, _Envisioning Information_

---

## Repeat

---

[vcenter]
> [!gold] Repeat
> 
> [big] Modulate on Variables rather than Values

---

![figure](/embed/composition/repeat-splom.html)

::: 66/34

[big vcenter] Note that in Repeat, axes independent by default

---

![figure](/embed/composition/repeat-rows.html)

---

## Concatenate

---

[vcenter]
> [!gold] Concatenate
>
> [big] The Duct Tape of Graphics

---

![figure](/embed/composition/concat.html)

---

![figure](/embed/composition/concat.html)

::: 66/34

[vcenter]
>[!green] Discussion
>
> Anything wrong?

---

![figure](/embed/composition/concat.html)

:::

![figure](/embed/composition/concat-aligned.html)


---

## Implementing Composition in D3

---

[big] Layer: Same space, different data

```js
const x = d3.scaleLinear().domain([4, 8]).range([left, right]);
const y = d3.scaleLinear().domain([0, 4.5]).range([bottom, top]);

svg.append("g").selectAll("path").data(groups)   // layer 1 
    .join("path").attr("d", ([, rows]) => area(rows));

svg.append("g").selectAll("path").data(groups)   // layer 2 
    .join("path").attr("d", ([, rows]) => line(rows));
```

---

[big] Facet: Same attribute, different data

```js
const panels = d3.group(data, (d) => d.weather);

svg.selectAll("g.panel").data([...panels])
    .join("g")
        .attr("class", "panel")
        .attr("transform", (d, i) => `translate(${i * (cellW + gap)},0)`)
        .each(function ([key, rows]) {
            drawPanel(d3.select(this), rows, x, y);  
        });
```

---

[big] Repeat: Same data, different attribute

```js
const rows = ["petalLength", "petalWidth"];
const cols = ["sepalLength", "sepalWidth"];

for (const [ri, yField] of rows.entries())
    for (const [ci, xField] of cols.entries())
        drawPanel(panelAt(ri, ci), data, {
            cx: (d) => scales[xField](d[xField]),
            cy: (d) => scales[yField](d[yField]),
        });
```

---

[big] Concatenate: Separate everything except the canvas

```js
const left = svg.append("g");
drawScatter(left, data, xPetalLength, yPetalWidth);

const right = svg.append("g")
    .attr("transform", `translate(${leftWidth + gap},0)`);
drawHistogram(right, data, xCount, yBins);
```

---

[big vcenter] Composition of Compositions

---

[big vcenter] Composition of Compositions

[big muted] Anything you can do I can do meta

---

![figure](/embed/composition/dashboard.html)

::: 72/28

[big vcenter] What are all the operators, and how are they composed?

---

## Multiple views can provide beats to tell a story

---

> [!auto-animate]

![](/images/composition/owid-vaccination-cases.png)

::: 45/55

[big vcenter] Iceland has higher vaccine uptake than Nigeria

[big] Yet Iceland has more COVID cases than Nigeria

> Charts from [Lisnic, Polychronis, Lex & Kogan, "Misleading Beyond Visual Tricks: How People Actually Lie with Charts," CHI 2023](https://vdl.sci.utah.edu/publications/2023_chi_misleading/). Data: Our World in Data.

---

![](/images/composition/owid-vaccination-cases.png)

::: 45/55

[big vcenter] Iceland has higher vaccine uptake than Nigeria

[big] Yet Iceland has more COVID cases than Nigeria

>[!magenta] Not shown:
>
>Iceland had roughly 200 times the testing rate of Nigeria in August 2021.

> Charts from [Lisnic, Polychronis, Lex & Kogan, "Misleading Beyond Visual Tricks: How People Actually Lie with Charts," CHI 2023](https://vdl.sci.utah.edu/publications/2023_chi_misleading/). Data: Our World in Data.

---

[big vcenter] Multiple views can provide beats to tell a story

--- 
[big muted] Multiple views can provide beats to tell a story

[big vcenter] Does not guarantee that the story is true

--- 

[big muted] Multiple views can provide beats to tell a story

[big vcenter muted] Does not guarantee that the story is true

[big accent] Interpretation lives in the gaps

--- 

## Coordinated Multiple Views

---

[big vcenter] Brush one view, and the others answer

---

![figure](/embed/composition/dashboard-linked.html)

---

## Next: Interaction

---
