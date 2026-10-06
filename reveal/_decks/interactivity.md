---
title: Interactive Visualization
description: Interaction as re-encoding, interaction idioms and their costs, and implementing interaction and animation with D3.
order: 4
course: DATA 3302 Fall 2026
---

# Interactive Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from Cal Poly CSC 477: Scientific and Information Visualization ("Interactive Visualization," "Introduction D3," "D3 Continued"). Figures rebuilt in D3 or embedded live from their original sources.

---

[vcenter]
>[!gold] [big] Tasks (Abstraction Layer)
>
>[big] Discover connections
>
>[big] Identify extremes
>
>[big] Lookup specific points
>
>[big] Summarize groups and distributions

---


[vcenter]
>[!blue] [big] Design (Encoding Layer)
>
> [big] Encodings are based on specific, _fixed_, tasks
>
> [big] Limited by what can be seen in single view (or composition)

[vcenter]
>[!gold] [big] Tasks (Abstraction Layer)
>
> Discover connections
>
> Identify extremes
>
> Lookup specific points
>
> Summarize groups and distributions


---

[vcenter]
> [big] A graphic is not ‘drawn’ once and for all; it is ‘constructed’ and reconstructed until it reveals all the relationships constituted by the interplay of the data. The best graphic operations are those carried out by the decision-maker themself.
>
> Jacques Bertin

> 

---

```diagram
node world (0,0) "World"
node human (4,0) "Human"
node data (1,1) "Data"
node visual (3,1) "Visual"

edge world data via (0,1)
edge data visual label="Encoding"
edge visual human via (4,1)
edge human world label="Interpretation" color=orange
```

---

```diagram
node world (0,0) "World"
node human (4,0) "Human"
node data (1,1) "Data"
node visual (3,1) "Visual"

edge world data via (0,1)
edge data visual label="Encoding"
edge visual human via (4,1)
edge human world label="Interpretation" color=orange
edge human data via (3.6,0.45) via (1.4,0.45) label="Interactivity" color=green
edge human visual via (3.6,0.45) via (3,0.45) color=green
```

---

```diagram
node world (0,0) "World"
node human (4,0) "Human"
node data (1,1) "Data" color=green
node visual (3,1) "Visual" color=green

edge world data via (0,1)
edge data visual label="Encoding" color=green
edge visual human via (4,1) color=green
edge human world label="Interpretation" color=orange
edge human data via (3.6,0.45) via (1.4,0.45) label="Interactivity" color=green
edge human visual via (3.6,0.45) via (3,0.45) color=green
```

---

```diagram
node cdata (1,0) "Change data transformations" nostroke fill=none w=2
node cvis (3,0) "Change visual encoding" nostroke fill=none w=1.8
node data (1,1) "Data" color=green
node visual (3,1) "Visual" color=green

edge cdata data color=green
edge cvis visual color=green 
edge data visual label="Encoding"
```


> [!notes]
>
> Interaction changes either the data transformation or the visual encoding; the next slides show an example of each.

---

### Re-encode Data, Marks, and Parameters

![figure](https://ourworldindata.org/grapher/co-emissions-per-capita?tab=chart&country=USA~European+Union+%2827%29~OWID_WRL~GBR)

> Our World in Data, "CO₂ emissions per capita." Global Carbon Budget (2025). CC BY.

---

[vcenter]
>[!gold] [big] Interactions
>
>[big] Filter
>
>[big] Select
>
>[big] Sort

:::

[vcenter]
>[!gold] [big] Tasks
>
>[big] Query
>
>[big] Search
>
>[big] Find Extrema/trends

---

![figure scrollable](https://carlmanaster.github.io/datastripes/)

> https://carlmanaster.github.io/datastripes/

---

![figure scrollable](https://fredhohman.com/brad-myers-advisee-tree/)

> Brad Myers Advisee Tree, Fred Hohman.

---

[vcenter]
>[!gold] [big] Affordances
>
>[big] Interactions that a system-user relation support

>[!gold] [big] Signifiers
>
>[big] Elements that communicate what affordances are present


:::

[vcenter]
>[!gold] [big] System Model
>
>[big] Designer expectation of what should occur when interacting 

[vcenter]
>[!gold] [big] User Model
>
>[big] User expectation of what will occur when interacting 



> Don Norman, Design of Everyday Things

---

[big accent vcenter] Interaction Considerations

::: 

[big] Audience

[big] Flexibility

[big] Robustness

[big] Latency

[big] Ergonomics

[big] Accessibility

[big] Input device

---

[vcenter]
> [!green] [big] Desktop Interactions?
> 
> [big] Hover
> 
> [big] Click
> 
> [big] Right Click?

:::

[vcenter]
> [!green] [big] Touchscreen Interactions?
> 
> [big] Taps
>
> [big] Swipes
> 
> [big] Alternative Inputs?

---

## Interaction Idioms

---


[big vcenter] Interaction Idioms

::: 35/65

[vcenter]
> [!gold] [big] Pan and Zoom

> [!gold] [big] Selection Brushing and Linking

> [!gold] [big] Overview and Detail

> [!gold] [big]Details on Demand

---

### Interaction Idioms: Pan and Zoom

![figure](/embed/interactivity/observable.html?nb=@d3/zoomable-scatterplot&cells=chart)

> Mike Bostock, "Zoomable Scatterplot," Observable (@d3/zoomable-scatterplot). Scroll to zoom, drag to pan.

---

### Interaction Idioms: Pan and Zoom

![figure](/embed/interactivity/zoom-semantic.html)


---

### Interaction Idioms: Pan and Zoom

[big center] Unconstrained

![figure](/embed/interactivity/us-zoom.html?mode=free)

:::

[big center] Constrained

![figure](/embed/interactivity/us-zoom.html?mode=constrained)

---


### Interaction Idioms: Selection Brushing and Linking

![figure](/embed/interactivity/observable.html?nb=@d3/brushable-scatterplot-matrix&cells=chart)

> Mike Bostock, "Brushable Scatterplot Matrix," Observable (@d3/brushable-scatterplot-matrix). Drag a brush in any panel.


---
### Interaction Idioms: Selection Brushing and Linking

[big vcenter] Selection

::: 35/65

[big vcenter] How?

[big] Add to set vs Replace with new set?

[big] Select null? Background unselect all?

[big] Relevant set of possibility?

[big] Selectable objects connected?

[big] Formal vs adhoc?

---
### Interaction Idioms: Selection Brushing and Linking

[vcenter]
>[!gold] [big] Selection
>
>[big] Interaction
> 
>[big] Affordance

::: 35/65

[vcenter]
>[!gold] [big] Highlight
>
> [big] Signifier and Encoding of selection
>
> [big] Interference with existing encodings?

---

### Interaction Idioms: Overview and Detail

![figure](/embed/interactivity/observable.html?nb=@d3/focus-context&cells=chart,viewof%20focus,!update)

> Mike Bostock, "Focus + Context," Observable (@d3/focus-context). Drag the gray region to pan, or brush to zoom.


---

### Interaction Idioms: Details on Demand

![figure](/embed/interactivity/observable.html?nb=@d3/line-chart-with-tooltip&cells=chart)

> Mike Bostock, "Line Chart with Tooltip," Observable (@d3/line-chart-with-tooltip). Hover to read a value.

---

### Interaction Idioms: Scrollytelling

![figure scrollable](https://www.joshworth.com/dev/pixelspace/pixelspace_solarsystem.html)

> http://letsfreecongress.org/

---

### Interactive Elements

[big] Sliders

[big] Buttons

[big] Checkboxes

[big] Radio Buttons

[big] Dropdowns

[big] Scrolling


:::

>[!green] Pros:
>
> [big] Clear affordances
>
> [big] Self Documenting (with labels)

>[!magenta] Cons:
>
> [big] Screen Space
> 
> [big] Visual Overload



>

---


> [!green] Discussion
>
> A _descriptive_ model supplies the coding scheme for an observational study. Below is a log from a think-aloud session with a planner using a bike-share dashboard. Use Heer and Shneiderman's categories: _data and view specification_ (visualize, filter, sort, derive); _view manipulation_ (select, navigate, coordinate, organize); _process and provenance_ (record, annotate, share, guide).
>
> 1. User opens the dashboard and a bar chart of all 90 stations appears.
> 2. Types "Downtown" into the station-name filter box.
> 3. Clicks "Sort by empty docks."
> 4. Clicks the top bar, the same station is highlighted on the city map.
> 5. Zooms the map in on the intersection of Higeura and Chorro.
> 6. Says "Now I need the hourly counts for this one," and opens a separate spreadsheet exported from the dock sensors.
> 7. Takes a screenshot of the bar chart and adds a note "check dock sensor" on the station's bar and emails it to the maintenance lead.

:::

> [!green] Your task
>
> 1. Code the steps with corresponding operations (_Note that a step may involve more than one operation_).
>
> 2. Map the session onto Shneiderman's mantra (overview first, zoom and filter, details on demand). Which stage does the dashboard fail to support, what is your evidence in the log?
>
> 3. Propose added interaction(s) that would provide full coverage of the user tasks present in the log? Would a static design be able to support all of the required tasks? 

---
```diagram
node data (1,0) "Data"
node visual (3,0) "Visual"

edge data visual label="Encoding"

```

---

```diagram
node data (1,0) "Data"
node visual (3,0) "Visual"
node data2 (1,1.4) "Data"
node visual2 (3,1.4) "Visual"
node tlabel (0.25,0.7) "Transformation" nostroke fill=none w=1.2

edge data visual label="Encoding"
edge data data2
edge data2 visual2 label="Re-encoding"
```

---

```diagram
node data (1,0) "Data"
node visual (3,0) "Visual"
node data2 (1,1.4) "Data"
node visual2 (3,1.4) "Visual"
node tlabel (0.25,0.7) "Transformation" nostroke fill=none w=1.2
node alabel (4.9,0.7) "Animation to communicate changes" nostroke fill=none color=orange w=2.2 label-pos=w

edge data visual label="Encoding"
edge data data2
edge data2 visual2 label="Re-encoding"
edge visual visual2 color=orange
```

---

![figure](/embed/interactivity/stacked-grouped.html)

> After Mike Bostock, "Stacked-to-Grouped Bars," Observable.


> [!notes]
>
> Use the Stacked / Grouped buttons, or the right arrow, to switch the layout.

---

[big] Commands attention

[big] Powerful but should be used sparingly

![figure](/embed/interactivity/animated-line.html)

> Data: AAPL closing price, from Mike Bostock's "Line Chart" example.


---

[big vcenter] Animation can allow tracking of continuity

[big] Staging may reduce cognitive load

---

[big muted vcenter] Animation can allow tracking of continuity

[big muted] Staging may reduce cognitive load

[big] What about instant responsiveness?

---

[big accent vcenter] Congruence

- Maintain valid data graphics during transitions
- Use consistent syntactic/semantic mappings
- Respect semantic correspondence
- Avoid ambiguity
- Different operators should have distinct animations

:::

[big accent vcenter] Apprehension

- Group similar transitions
- Minimize occlusion
- Maximize predictability
- Use simple transitions
- Use staging for complex transitions
- Make transitions as long as needed, but no longer

> Heer & Robertson, "Animated Transitions in Statistical Data Graphics," IEEE InfoVis 2007.

---

![figure](/embed/interactivity/design-space.html)

---

> [!auto-animate]

[big vcenter] Interaction is the single most powerful design capability you have

---

> [!auto-animate]

[big muted vcenter] Interaction is the single most powerful design capability you have

[big] But it has a cost

---

## D3 for Interactive Visualizations

---

![figure scrollable](https://d3js.org/)

> https://d3js.org/

---

![figure scrollable](https://poloclub.github.io/cnn-explainer/)

> https://poloclub.github.io/cnn-explainer/

---

![figure scrollable](https://distill.pub/2020/communicating-with-interactive-articles/)

> Hohman, Conlen, Heer & Chau, "Communicating with Interactive Articles," Distill, 2020.

---

![figure scrollable](https://pudding.cool/2018/08/pockets/)

:::

![figure scrollable](https://pudding.cool/2017/05/song-repetition/)

> Diehm & Thomas, "Women's Pockets Are Inferior" (2018); Morris, "Are Pop Lyrics Getting More Repetitive?" (2017). The Pudding.

---

> [!auto-animate]

[big vcenter] D3

[big] Data Driven Documents

---

> [!auto-animate]

[big] D3

[big] Data Driven Documents

```diagram
node doc (0.6,1) "Document Elements" shape=circle w=1.5 color=orange
node data (3.4,1) "Data Elements" shape=circle w=1.5 color=green
```

---

> [!auto-animate]

[big] D3

[big] Data Driven Documents

```diagram
node doc (0.6,1) "Document Elements" shape=circle w=1.5 color=orange
node data (3.4,1) "Data Elements" shape=circle w=1.5 color=green
edge doc data arrow=<-> label="D3 manages the mapping"
```

---

[big vcenter] Into the Browserverse

[big accent] _Javascript_

[big accent] _HTML_

[big accent] _CSS_

[big accent] _The DOM_

:::

![](/images/interactivity/firefox.png)

---

[big vcenter] SVG

[big] Scalable Vector Graphics

:::

![Raster (GIF, JPEG, PNG) vs. Vector (SVG)](/images/interactivity/bitmap-vs-svg.svg "Wikimedia Commons, “Bitmap VS SVG,” CC BY-SA")

---

[big vcenter] SVG Canvas

:::

![figure](/embed/interactivity/svg-canvas.html?step=0)


> [!notes]
>
> Note that y increases downward: the origin is the top-left corner.

---

[big vcenter] Circle at

[big] `(width,0)`

:::

![figure](/embed/interactivity/svg-canvas.html?step=1)

---

[big vcenter] Margins!

[big] `(width - margin,`

[big] `0 + margin)`

:::

![figure](/embed/interactivity/svg-canvas.html?step=2)

---

### Tags with Attributes

```html
<circle r=5 fill="green"></circle>
```

![figure](/embed/interactivity/svg-elements.html?el=tag)

---

### The `<svg>` Element

[big vcenter] Defines your canvas

[big] Top level group containing the visual elements

:::

![figure](/embed/interactivity/svg-elements.html?el=svg)

---

### The `<circle>` Element

[big vcenter] `Radius : r = 5`

[big] `Center : cx = 5`

[big] `cy = 4`

:::

![figure](/embed/interactivity/svg-elements.html?el=circle)

---

### The `<rect>` Element

[big vcenter] `x`

[big] `y`

[big] `width`

[big] `height`

:::

![figure](/embed/interactivity/svg-elements.html?el=rect)

---

### The `<rect>` Element

[big vcenter] `x`

[big] `y`

[big] `width`

[big] `height`

[big] `rx`

[big] `ry`

:::

![figure](/embed/interactivity/svg-elements.html?el=rectr)

---

### The `<path>` Element

![figure scrollable](https://yqnn.github.io/svg-path-editor/)

> SVG Path Editor, https://yqnn.github.io/svg-path-editor/

---

### The `<g>` Element

[big vcenter]  Group things together

[big] Keep DOM hierarchy tidy

:::

![](/images/interactivity/g-element-devtools.jpg)

---

### CSS Selectors

[big vcenter] CSS for styling

[big] D3 can use classes for managing groups

:::

![](/images/interactivity/css-selectors-cheat-sheet.jpg "Web Dev Simplified, “CSS {selectors: cheat-sheet}”")

---

## D3 as The Functional Grammar of Graphics

---

### Visualization Grammar

| | |
|---|---|
| **Data** | List of objects with information we want to visualize |
| **Marks** | Data representative visual elements |
| **Scales** | Mathematical mapping from data space to channel space |
| **Guides** | Visual elements representing scales |
| **Transforms** | Data/visual composition operations (group, join, sort, layout, etc..) |

---

### Specification-Based Visualization Grammar

[big accent vcenter] Data

[big accent] Marks

[big accent] Scales

[big accent] Guides

[big accent] Transforms

::: 30/70

![figure](/embed/composition/iris-scatter.html)

---

### Specification-Based Visualization Grammar

[big accent vcenter] Data : Dataframe

[big accent] Marks : “circle”

[big accent] Scales : “linear”

[big accent] Guides : Default

[big accent] Transforms : “concat”

::: 

![figure](/embed/composition/iris-scatter.html)

---

### Computation-Based Visualization Grammar

[big accent vcenter] Data : λ

[big accent] Marks : λ

[big accent] Scales : λ

[big accent] Guides : λ

[big accent] Transforms : λ

:::

![figure](/embed/composition/iris-scatter.html)



---

| Mark | λ |
|---|---|
| data | λ |
| fill | λ |
| x | λ |
| y | λ |
| width | λ |
| height | λ |

---

| Rect | λ |
|---|---|
| data | `[1,1.2,1.7,1.5,0.7]` |
| fill | Blue |
| x | `(_,i)⇒i*11.5` |
| y | `0` |
| width | `10` |
| height | `(d,_)⇒d*40` |

:::

![figure](/embed/interactivity/bars-lambda.html?mode=y0)

---

| Rect | λ |
|---|---|
| data | `[1,1.2,1.7,1.5,0.7]` |
| fill | Blue |
| x | `(_,i)⇒i*11.5` |
| y | `(d,_)⇒h-d*40` |
| width | `10` |
| height | `(d,_)⇒d*40` |

:::

![figure](/embed/interactivity/bars-lambda.html?mode=yh)

---

| Rect | λ |
|---|---|
| data | `[1,1.2,1.7,1.5,0.7]` |
| fill | Blue |
| x | `(_,2)⇒2*11.5=23` |
| y | `(1.7,_)⇒70-1.7*40=2` |
| width | `10` |
| height | `(1.7,_)⇒1.7*40=68` |

:::

![figure](/embed/interactivity/bars-lambda.html?mode=hl)

---


| Rect | λ |
|---|---|
| data | `[1,1.2,1.7,1.5,0.7]` |
| fill | Blue |
| x | `(_,i)⇒i*11.5` |
| y | `(d,_)⇒h-d*40` |
| width | `10` |
| height | `(d,_)⇒d*40` |

:::

```js
const w = 70;
const h = 70;

const svg = d3
  .create("svg")
  .attr("width", w)
  .attr("height", h)
  .style("border", "1px solid white");

const bar_data = [1, 1.2, 1.7, 1.5, 0.7];

const bar_chart = svg
  .selectAll("rect")
  .data(bar_data)
  .join("rect")
  .style("fill", "steelblue")
  .attr("x", (_, i) => i * 11.5)
  .attr("y", (d) => h - d * 40)
  .attr("width", 10)
  .attr("height", (d) => d * 40);

display(svg.node());
```
{: data-id="bars-code" }


> [!notes]
>
> `display()` is Observable notebook output. In a plain web page use `document.body.append(svg.node())`; setup code (scales, data) is omitted from the slides.

---

| Rect | λ |
|---|---|
| data | `[1,1.2,1.7,1.5,0.7]` |
| fill | Blue |
| x | `(_,i)⇒i*11.5` |
| y | `(d,_)⇒h-d*40` |
| width | `10` |
| height | `(d,_)⇒d*40` |

:::

```js
const w = 70;
const h = 70;

const svg = d3
  .create("svg")
  .attr("width", w)
  .attr("height", h)
  .style("border", "1px solid white");

const bar_data = [1, 1.2, 1.7, 1.5, 0.7];

const bar_chart = svg
  .selectAll("rect")
  .data(bar_data)
  .join("rect")
  .style("fill", "steelblue")
  .attr("x", (_, i) => i * 11.5)
  .attr("y", (d) => h - d * 40)
  .attr("width", 10)
  .attr("height", (d) => d * 40);

display(svg.node());
```
{: data-id="bars-code" data-line-numbers="16-20" }

---
[vcenter]
> [!gold] [big] D3 Pattern
>
> [big] 1. _Select_ “group” of “elements”
> 
> [big] 2. Assign _data_ to the group
> 
> [big] 3. _Join_ data to selection
> 
>  [big] 4. _Compute_ visual attributes from data
> 

---

### `.select`

[big] Primary D3 DOM side abstraction

[big] Determine set of visual elements

![figure height-260](/embed/interactivity/dom-view.html)

:::

```js
const w = 70;
const h = 70;

const svg = d3
  .create("svg")
  .attr("width", w)
  .attr("height", h)
  .style("border", "1px solid white");

const bar_data = [1, 1.2, 1.7, 1.5, 0.7];

const bar_chart = svg
  .selectAll("rect")
  .data(bar_data)
  .join("rect")
  .style("fill", "steelblue")
  .attr("x", (_, i) => i * 11.5)
  .attr("y", (d) => h - d * 40)
  .attr("width", 10)
  .attr("height", (d) => d * 40);

display(svg.node());
```
{: data-id="bars-code" data-line-numbers="4-8,12-13" }

---

> [!auto-animate]

### `.data`

[big] Bind data to selection

![figure height-300](/embed/interactivity/dom-view.html?arrows=1)

:::

```js
const w = 70;
const h = 70;

const svg = d3
  .create("svg")
  .attr("width", w)
  .attr("height", h)
  .style("border", "1px solid white");

const bar_data = [1, 1.2, 1.7, 1.5, 0.7];

const bar_chart = svg
  .selectAll("rect")
  .data(bar_data)
  .join("rect")
  .style("fill", "steelblue")
  .attr("x", (_, i) => i * 11.5)
  .attr("y", (d) => h - d * 40)
  .attr("width", 10)
  .attr("height", (d) => d * 40);

display(svg.node());
```
{: data-id="bars-code" data-line-numbers="10,14" }

---

> [!auto-animate]

### `.join`

[big vcenter] **Enter:** Make new selection elements mapped to data if they do not exist

[big] **Update:** apply to existing elements that map

[big] **Exit:** remove existing elements that don’t map

:::

```js
const w = 70;
const h = 70;

const svg = d3
  .create("svg")
  .attr("width", w)
  .attr("height", h)
  .style("border", "1px solid white");

const bar_data = [1, 1.2, 1.7, 1.5, 0.7];

const bar_chart = svg
  .selectAll("rect")
  .data(bar_data)
  .join("rect")
  .style("fill", "steelblue")
  .attr("x", (_, i) => i * 11.5)
  .attr("y", (d) => h - d * 40)
  .attr("width", 10)
  .attr("height", (d) => d * 40);

display(svg.node());
```
{: data-id="bars-code" data-line-numbers="10,15" }

---

### `.join`

![figure](/embed/interactivity/join-letters.html?transition=1)

:::

[vcenter]
```js
text = text
  .data(letters, (d) => d)
  .join(
    (enter) =>
      enter
        .append("text")
        .attr("y", 17)
        .attr("dy", "0.35em")
        .text((d) => d),
    (update) => update,
    (exit) => exit.remove()
  )
  .attr("x", (d, i) => i * 17);
```

> After Mike Bostock, "General Update Pattern," Observable.

---

> [!green] Quick check (5 min)
>
> Suppose `letters` was `["A", "B", "C", "D"]` when the code on the previous slide last ran. The next call uses `["B", "C", "E"]`.
>
> 1. Which letters are in the _enter_, _update_, and _exit_ selections?
>
> 2. Now delete the key function, so the data is joined by index: `.data(letters)`. Elements are matched to data by index when there is no key. Which elements enter, update, and exit, and what letters does the screen show afterward? 

---

[big accent vcenter] D3 selections specify **transformation** rather than **representation**.

[muted] Instead of expressing the desired state of the graphic (the DOM), you specify the changes (insertions, updates, and deletions) needed to _transform the current state into the desired state_.

[muted] This is sometimes tedious but allows you to animate transitions and to minimize changes to the DOM, improving performance.


---



## D3 Modules

---

### D3 Modules

[big] Don’t want to do everything from scratch

Data Parsing / Formatting

Shape Helpers

Scale Transforms

Color Spaces

Animated Transitions

Geographic Mapping

Layout Algorithms

Interactive Behaviors

…

:::

```js
const w = 70;
const h = 70;

const svg = d3
  .create("svg")
  .attr("width", w)
  .attr("height", h)
  .style("border", "1px solid white");

const bar_data = [1, 1.2, 1.7, 1.5, 0.7];

const bar_chart = svg
  .selectAll("rect")
  .data(bar_data)
  .join("rect")
  .style("fill", "steelblue")
  .attr("x", (_, i) => i * 11.5)
  .attr("y", (d) => h - d * 40)
  .attr("width", 10)
  .attr("height", (d) => d * 40);

display(svg.node());
```

---

### Scales

[big] Function from _Data Space_ to _Channel Space_

[big] Write from scratch

[big] `(d,_)⇒d*40`

:::

![figure scrollable](https://d3js.org/d3-scale)

---

### Scales

[big] d3-Scale: Function generators

[big] Scale type

[big] Domain

[big] Range

[big] Extras

:::

```js
const x_scale = d3
  .scaleLinear()
  .domain([0, d3.max(fruits, (d) => d.count)])
  .range([0, canvas_width])
  .interpolate(d3.interpolateRound);

const y_scale = d3
  .scaleBand()
  .domain(fruits.map((d) => d.name))
  .range([0, canvas_height])
  .padding(0.1)
  .round(true);

const color = d3
  .scaleOrdinal()
  .domain(fruits.map((d) => d.name))
  .range(d3.schemeTableau10);
```

---

> [!green] Consider
>
> The D3 code below draws a chart of bike-share stations. `data` has one object per station with fields `name`, `zone`, and `bikes`, in alphabetical order by name.

```js
const x = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.bikes)])
    .range([0, 500]);

svg.selectAll("rect")
  .data(data)
  .join("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * 22)
    .attr("height", 18)
    .attr("width", (d) => x(d.bikes))
    .attr("fill", (d) =>
      d.zone === "Downtown"
        ? "black" : "lightgray");
```

::: 60/40

> [!green] Discussion
>
> 1. Sketch what you think the visualization this code generates would look like?
>
> 2. Identify all of the grammar of graphics encodings and in the design, and the corresponding visual locations of the encodings and the locations in the code that specify the encodings.

---

[big vcenter] SVG `<path>`

[big] `Mx,y` - move to the specified point [_x_, _y_]

[big] `Lx,y` - draw a line to the specified point [_x_, _y_]

[big] `hx` - draw a horizontal line of length _x_

[big] `vy` - draw a vertical line of length _y_

[big] `z` - close the current subpath

---

[big vcenter] SVG `<path>`

[big]  How do we draw this line?

[big] Start at origin

[big] `Mx,y` _to start_

[big]  `Lx,y` _segment_

:::

![figure](/embed/interactivity/path-steps.html)

---

[big] d3.line

```js
const line = d3
  .line()
  .x((d, i) => x_scale(i))
  .y((d) => y_scale(d));

const linechart = svg
  .append("path")
  .datum(data)
  .attr("d", line)
  .style("stroke", "orange")
  .style("stroke-width", 1.5)
  .style("fill", "none");
```
{: data-id="shape-code" }

:::

![figure](/embed/interactivity/shapes.html?mode=line)

---


[big] d3.line

```js
const line = d3
  .line()
  .x((d, i) => x_scale(i))
  .y((d) => y_scale(d));

const linechart = svg
  .append("path")
  .datum(data)
  .attr("d", line)
  .style("stroke", "orange")
  .style("stroke-width", 1.5)
  .style("fill", "orange");
```
{: data-id="shape-code" }

:::

![figure](/embed/interactivity/shapes.html?mode=linefill)

---


[big] d3.area

```js
const area = d3
  .area()
  .x((d, i) => x_scale(i))
  .y0(y_scale(d3.min(data)))
  .y1((d) => y_scale(d));

const areachart = svg
  .append("path")
  .datum(data)
  .attr("d", area)
  .style("stroke", "orange")
  .style("stroke-width", 1.5)
  .style("fill", "orange");
```
{: data-id="shape-code" }

:::

![figure](/embed/interactivity/shapes.html?mode=area)

---

[big] d3.area

```js
const area = d3
  .area()
  .x((d) => x_scale(d.time))
  .y0((d) => y_scale(d.lower))
  .y1((d) => y_scale(d.upper));

const areachart = svg
  .append("path")
  .datum(data)
  .attr("d", area)
  .style("stroke", "orange")
  .style("stroke-width", 1.5)
  .style("fill", "orange");
```
{: data-id="shape-code" }

:::

![figure](/embed/interactivity/shapes.html?mode=band)

---

[big] d3 shape

![figure scrollable](https://d3js.org/d3-shape)

:::

[big] d3 path

![figure scrollable](https://d3js.org/d3-path)

---

![figure scrollable](https://d3js.org/api)


---

## Animation

---

### Animation

[big] Single Graphic ⟶ Sequence of Graphics

![figure](/embed/interactivity/animation-frames.html?states=0,1)

---

### Animation

[big] Single Graphic ⟶ Sequence of Graphics

![figure](/embed/interactivity/animation-frames.html?states=2,3)

---

> [!auto-animate]

### `.transition()`

```js
const circle = svg
  .append("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", r)
  .attr("cy", height * 0.5)
  .transition()
  .duration(1000)
  .attr("cx", width - r)
  .transition()
  .duration(1000)
  .attr("cx", r);
```
{: data-id="transition-code" }

:::

![figure](/embed/interactivity/transitions.html?mode=chain)

---

> [!auto-animate]

### `.transition()`

```js
const circle = svg
  .selectAll("circle")
  .data(data)
  .join("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", (_, i) => x(i))
  .attr("cy", height * 0.5)
  .transition()
  .duration(3000)
  .delay((d) => d * 500)
  .attr("cx", width - r);
```
{: data-id="transition-code" }

:::

![figure](/embed/interactivity/transitions.html?mode=delay)

---

> [!auto-animate]

### `.transition()`

```js
const circle = svg
  .selectAll("circle")
  .data(data)
  .join("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", (_, i) => x(i))
  .attr("cy", height * 0.5)
  .transition()
  .duration(3000)
  .delay((d) => d * 500)
  .ease(d3.easeElastic)
  .attr("cx", width - r);
```
{: data-id="transition-code" data-line-numbers="12" }

:::

![figure](/embed/interactivity/transitions.html?mode=elastic)

---

### `.transition()`

```js
scatter_svg
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale_sepal_length(d.sepalLength))
  .attr("cy", (d) => y_scale_sepal_width(d.sepalWidth))
  .attr("fill", (d) => color(d.species))
  .transition()
  .duration(5000)
  .attr("cx", (d) => x_scale_petal_length(d.petalLength))
  .attr("cy", (d) => y_scale_petal_width(d.petalWidth));
```

::: 62/38

![figure](/embed/interactivity/iris-transition.html)

---

## Interactivity in D3

---

[vcenter big] The first step in designing interaction is by accessing user inputs.


---

## HTML Inputs

---

### HTML Inputs

```js
const input = fig
  .append("input")
  .attr("min", 1)
  .attr("max", 15)
  .attr("step", 1)
  .attr("type", "range");

let n = +input.property("value");
const output = fig.append("div").text(n);

input.on("input", (event) => {
  n = +event.target.value;
  output.text(n);
});
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=html-range)

---

### HTML Inputs

```js
const values = ["B", "A", "Z", "Z", "⚠️F", "D", "G", "G", "G", "⚠️Q"];
const disabled = ["⚠️F", "⚠️Q"];

const options = d3.sort(new Set(values));

let checkout = ["B"]; 

const form = fig.append("form");
form.append("div").text("Choose categories:");
const output = fig.append("pre").text(JSON.stringify(checkout));

const choice = form
  .selectAll("label")
  .data(options)
  .join("label")
  .style("display", "block");

choice
  .append("input")
  .attr("type", "checkbox")
  .property("disabled", (d) => disabled.includes(d))
  .property("checked", (d) => checkout.includes(d))
  .on("change", () => {
    checkout = choice
      .selectAll("input")
      .filter(function () {
        return this.checked;
      })
      .data();
    output.text(JSON.stringify(checkout));
  });

choice.append("span").text((d) => ` ${d}`);
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=checkbox)

> [!notes]
> The reference uses the Observable `Inputs.checkbox` call with the options `disabled`, `sort`, `unique`, `value`, and `label`. This is the same widget built from plain HTML with D3 so that every option is visible: the repeated Z and G appear once, the options are sorted, the two warning entries are disabled, and B starts checked.


---
### HTML Inputs

[vcenter]
> [!gold] [big] Window state
>
> [big] Additionally, the state of the overall window, such as the width of the view and the current time, can be used in the same way as other inputs to build reactive visualizations or layouts.


---

### HTML Inputs

```js
const info = fig.append("div");

function update() {
  info.html(
    `Window width: ${window.innerWidth}<br>Current time (epoch): ${Date.now()}`
  );
}

d3.select(window).on("resize", update); 
d3.interval(update, 1000);
update();
```
{: data-scroll="true" }

::: 

![figure](/embed/interactivity/interaction.html?ex=window-now)


---

## Using Inputs in Visualization

---

[vcenter]
> [!gold] [big] Using Inputs in Visualization
>
> [big] Once we have access to user inputs, the next step is to have our visualizations change in response to input. This can be done by running code in response to input changes.


---

### Using Inputs in Visualization

```js
const height = 100;
const r = 50;

const button = fig
  .append("button")
  .text("Replay Animation")
  .style("margin-bottom", "15px")
  .on("click", replay);

const svg = fig.append("svg").attr("width", width).attr("height", height);

function replay() {
  svg.selectAll("circle").remove();

  const circle = svg
    .append("circle")
    .style("fill", "orange")
    .attr("r", r)
    .attr("cx", r)
    .attr("cy", height * 0.5)
    .transition()
    .duration(1000)
    .attr("cx", width - r)
    .transition()
    .duration(1000)
    .attr("cx", r);
}

replay(); 

```
{: data-scroll="true" }

::: 

![figure](/embed/interactivity/interaction.html?ex=replay-button&autoplay=1)

---

[vcenter]
> [!gold] [big] Using Inputs in Visualization
>
> [big] Additionally this can be done by redrawing the chart from the current value of an input.


---

### Using Inputs in Visualization

```js
const fruits = [
  { name: "🍊", count: 21 },
  { name: "🍇", count: 13 },
  { name: "🍏", count: 8 },
  { name: "🍌", count: 5 },
  { name: "🍐", count: 3 },
  { name: "🍋", count: 2 },
  { name: "🍎", count: 1 },
  { name: "🍉", count: 1 },
];

const min = d3.min(fruits, (d) => d.count) - 1;
const max = d3.max(fruits, (d) => d.count) + 1;

const label = fig.append("label").text("Threshold ");
const threshold_input = label
  .append("input")
  .attr("type", "range")
  .attr("min", min)
  .attr("max", max)
  .attr("step", 1)
  .attr("value", min);
const threshold_value = label.append("span").text(` ${min}`);

const chart = fig.append("div");

// Redraw the whole chart for the current threshold
function render(threshold) {
  chart.selectAll("*").remove();

  const height = 250;
  const margin = 30;
  const x_scale = d3
    .scaleLinear()
    .domain([0, d3.max(fruits, (d) => d.count)])
    .range([0, width - 2 * margin])
    .interpolate(d3.interpolateRound);

  const y_scale = d3
    .scaleBand()
    .domain(fruits.map((d) => d.name))
    .range([0, height - 2 * margin])
    .padding(0.1)
    .round(true);

  const svg = chart.append("svg").attr("width", width).attr("height", height);

  const g = svg.append("g").attr("transform", `translate(${margin},${margin})`);
  const left_axis = g.append("g").call(d3.axisLeft(y_scale));
  const top_axis = g.append("g").call(d3.axisTop(x_scale));

  const color = (d) => (d.count <= threshold ? "steelblue" : "red");

  const fruit_bars = g
    .selectAll("rect")
    .data(fruits)
    .join("rect")
    .style("fill", (d) => color(d))
    .attr("x", 0)
    .attr("y", (d) => y_scale(d.name))
    .attr("width", (d) => x_scale(d.count))
    .attr("height", 15);
}

threshold_input.on("input", (event) => {
  const threshold = +event.target.value;
  threshold_value.text(` ${threshold}`);
  render(threshold);
});

render(min);
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=fruits-threshold)


---

[vcenter]
> [!gold] [big] Using Inputs in Visualization
>
> [big] To avoid redrawing the whole thing from scratch with every update of the interaction parameters, we construct our initial state once, and separately write an update function which responds to user input.


---

### Using Inputs in Visualization

```js
const iris_data = await d3.csv("data/iris.csv", d3.autoType);

// Inputs: one selector per axis
const columns = ["sepalLength", "sepalWidth", "petalLength", "petalWidth"];
const controls = fig.append("div").style("margin-bottom", "15px");

function selector(label, value) {
  const select = controls
    .append("label")
    .style("margin-right", "15px")
    .text(`${label} `)
    .append("select");
  select
    .selectAll("option")
    .data(d3.sort(columns))
    .join("option")
    .text((d) => d)
    .property("selected", (d) => d === value);
  return select;
}

const x_axis_selector = selector("X Axis", "sepalLength");
const y_axis_selector = selector("Y Axis", "sepalWidth");

// Construct the initial state once
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(iris_data, (d) => d.species).keys(),
  d3.schemeCategory10
);
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(iris_data, (d) => d.sepalLength))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(iris_data, (d) => d.sepalWidth))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the SVG container.
const scatter_svg = fig
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

// Append the axes.
const x_axis = scatter_svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80));

const y_axis = scatter_svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale));

// Add the scatterplot symbols.
const scatter_points = scatter_svg
  .append("g")
  .selectAll("circle")
  .data(iris_data, (d) => d)
  .join("circle")
  .attr("r", 5)
  .attr("fill", (d) => color(d.species))
  .attr("cx", (d) => x_scale(d.sepalLength))
  .attr("cy", (d) => y_scale(d.sepalWidth));

// Update: respond to the input without redrawing everything
function update() {
  const x_axis_variable = x_axis_selector.property("value");
  const y_axis_variable = y_axis_selector.property("value");

  const x_scale = d3
    .scaleLinear()
    .domain(d3.extent(iris_data, (d) => d[x_axis_variable]))
    .nice()
    .range([margin.left, width - margin.right]);

  const y_scale = d3
    .scaleLinear()
    .domain(d3.extent(iris_data, (d) => d[y_axis_variable]))
    .nice()
    .range([height - margin.bottom, margin.top]);

  x_axis
    .transition()
    .duration(3000)
    .call(d3.axisBottom(x_scale).ticks(width / 80));

  y_axis.transition().duration(3000).call(d3.axisLeft(y_scale));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cx", (d) => x_scale(d[x_axis_variable]))
    .attr("cy", (d) => y_scale(d[y_axis_variable]));
}

x_axis_selector.on("change", update);
y_axis_selector.on("change", update);
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=iris-selectors)


---

## Making the Visualization the Input

---

[vcenter]
> [!gold] [big] Making the Visualization the Input
>
> [big] Interaction is also not limited to HTML controls but can be made more powerful by directly interacting with data-bound elements. When using this method make sure you are familiar with d3 [Event Listening.](https://d3js.org/d3-selection/events)


---

### Making the Visualization the Input

```js
// Load Data
const data = await d3.csv("data/iris.csv", d3.autoType);

// Specify the chart’s dimensions.
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

let x_axis_variable = "sepalLength";
let y_axis_variable = "sepalWidth";

const chart = fig.append("div");

const x_selector = chart
  .append("select")
  .on("change", update_x_axis)
  .style("margin-bottom", "15px");
x_selector
  .selectAll("option")
  .data(["sepalLength", "sepalWidth", "petalLength", "petalWidth"])
  .join("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .attr("selected", (d) => {
    if (d == x_axis_variable) {
      return "selected";
    }
  });

const y_selector = chart
  .append("select")
  .on("change", update_y_axis)
  .style("margin-bottom", "15px")
  .style("margin-left", "15px");
y_selector
  .selectAll("option")
  .data(["sepalLength", "sepalWidth", "petalLength", "petalWidth"])
  .join("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .attr("selected", (d) => {
    if (d == y_axis_variable) {
      return "selected";
    }
  });

// Create the positional scales.
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[x_axis_variable]))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[y_axis_variable]))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(data, (d) => d.species).keys(),
  d3.schemeCategory10
);

// Create the SVG container.
const svg = chart
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

const background = svg
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "#00000000");

// Add the scatterplot symbols.
const scatter_points = svg
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale(d[x_axis_variable]))
  .attr("cy", (d) => y_scale(d[y_axis_variable]))
  .attr("fill", (d) => color(d.species))
  .attr("class", (d) => d.species);

function remove_highlight_handlers() {
  background.on("click", null);
  scatter_points.on("mouseover", null).on("mouseout", null).on("click", null);
}
function add_highlight_handlers() {
  background.on("click", (event) => {
    svg
      .selectAll("circle")
      .transition()
      .duration(100)
      .attr("fill", (d) => color(d.species));
  });
  scatter_points
    .on("mouseover", function (e, d) {
      d3.select(this).transition().duration(100).attr("r", 15);
    })
    .on("mouseout", function (e, d) {
      d3.select(this).transition().duration(100).attr("r", 5);
    })
    .on("click", function (e, d) {
      svg
        .selectAll("circle")
        .transition()
        .duration(100)
        .attr("fill", "#CCCCCC22");

      svg
        .selectAll(`.${d.species}`)
        .transition()
        .duration(100)
        .attr("fill", (d) => color(d.species));
    });
}
add_highlight_handlers();

// Append the axes.
const x_axis = svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80))
  .call((g) =>
    g
      .append("text")
      .attr("class", "x_axis_label")
      .attr("x", width)
      .attr("y", margin.bottom - 4)
      .attr("fill", "currentColor")
      .attr("text-anchor", "end")
      .text(`${x_axis_variable} (cm) →`)
  );

const y_axis = svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale))
  .call((g) =>
    g
      .append("text")
      .attr("class", "y_axis_label")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(`↑ ${y_axis_variable} (cm)`)
  );

function update_x_axis(event) {
  remove_highlight_handlers();

  const new_axis = event.target.value;
  const x_scale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[new_axis]))
    .nice()
    .range([margin.left, width - margin.right]);

  x_axis
    .transition()
    .duration(3000)
    .call(d3.axisBottom(x_scale).ticks(width / 80))
    .call((g) => g.select(".x_axis_label").text(`${new_axis} (cm) →`));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cx", (d) => x_scale(d[new_axis]))
    .on("end", add_highlight_handlers);
}

function update_y_axis(event) {
  remove_highlight_handlers();

  const new_axis = event.target.value;
  const y_scale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[new_axis]))
    .nice()
    .range([height - margin.bottom, margin.top]);

  y_axis
    .transition()
    .duration(3000)
    .call(d3.axisLeft(y_scale))
    .call((g) => g.select(".y_axis_label").text(`↑ ${new_axis} (cm)`));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cy", (d) => y_scale(d[new_axis]))
    .on("end", add_highlight_handlers);
}
```
{: data-scroll="true" data-id="viz-input-code" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=viz-input)

> [!notes]
> Hover a point to enlarge it; click a point to highlight its species; click the background to reset; change an axis with the selectors. The handlers are removed while the points are in transition and added back when the transition ends.


---

### Making the Visualization the Input

```js
// Load Data
const data = await d3.csv("data/iris.csv", d3.autoType);

// Specify the chart’s dimensions.
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

let x_axis_variable = "sepalLength";
let y_axis_variable = "sepalWidth";

const chart = fig.append("div");

const x_selector = chart
  .append("select")
  .on("change", update_x_axis)
  .style("margin-bottom", "15px");
x_selector
  .selectAll("option")
  .data(["sepalLength", "sepalWidth", "petalLength", "petalWidth"])
  .join("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .attr("selected", (d) => {
    if (d == x_axis_variable) {
      return "selected";
    }
  });

const y_selector = chart
  .append("select")
  .on("change", update_y_axis)
  .style("margin-bottom", "15px")
  .style("margin-left", "15px");
y_selector
  .selectAll("option")
  .data(["sepalLength", "sepalWidth", "petalLength", "petalWidth"])
  .join("option")
  .text((d) => d)
  .attr("value", (d) => d)
  .attr("selected", (d) => {
    if (d == y_axis_variable) {
      return "selected";
    }
  });

// Create the positional scales.
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[x_axis_variable]))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[y_axis_variable]))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(data, (d) => d.species).keys(),
  d3.schemeCategory10
);

// Create the SVG container.
const svg = chart
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

const background = svg
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "#00000000");

// Add the scatterplot symbols.
const scatter_points = svg
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale(d[x_axis_variable]))
  .attr("cy", (d) => y_scale(d[y_axis_variable]))
  .attr("fill", (d) => color(d.species))
  .attr("class", (d) => d.species);

function remove_highlight_handlers() {
  background.on("click", null);
  scatter_points.on("mouseover", null).on("mouseout", null).on("click", null);
}
function add_highlight_handlers() {
  background.on("click", (event) => {
    svg
      .selectAll("circle")
      .transition()
      .duration(100)
      .attr("fill", (d) => color(d.species));
  });
  scatter_points
    .on("mouseover", function (e, d) {
      d3.select(this).transition().duration(100).attr("r", 15);
    })
    .on("mouseout", function (e, d) {
      d3.select(this).transition().duration(100).attr("r", 5);
    })
    .on("click", function (e, d) {
      svg
        .selectAll("circle")
        .transition()
        .duration(100)
        .attr("fill", "#CCCCCC22");

      svg
        .selectAll(`.${d.species}`)
        .transition()
        .duration(100)
        .attr("fill", (d) => color(d.species));
    });
}
add_highlight_handlers();

// Append the axes.
const x_axis = svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80))
  .call((g) =>
    g
      .append("text")
      .attr("class", "x_axis_label")
      .attr("x", width)
      .attr("y", margin.bottom - 4)
      .attr("fill", "currentColor")
      .attr("text-anchor", "end")
      .text(`${x_axis_variable} (cm) →`)
  );

const y_axis = svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale))
  .call((g) =>
    g
      .append("text")
      .attr("class", "y_axis_label")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(`↑ ${y_axis_variable} (cm)`)
  );

function update_x_axis(event) {
  remove_highlight_handlers();

  const new_axis = event.target.value;
  const x_scale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[new_axis]))
    .nice()
    .range([margin.left, width - margin.right]);

  x_axis
    .transition()
    .duration(3000)
    .call(d3.axisBottom(x_scale).ticks(width / 80))
    .call((g) => g.select(".x_axis_label").text(`${new_axis} (cm) →`));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cx", (d) => x_scale(d[new_axis]))
    .on("end", add_highlight_handlers);
}

function update_y_axis(event) {
  remove_highlight_handlers();

  const new_axis = event.target.value;
  const y_scale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d[new_axis]))
    .nice()
    .range([height - margin.bottom, margin.top]);

  y_axis
    .transition()
    .duration(3000)
    .call(d3.axisLeft(y_scale))
    .call((g) => g.select(".y_axis_label").text(`↑ ${new_axis} (cm)`));

  scatter_points
    .transition()
    .duration(3000)
    .attr("cy", (d) => y_scale(d[new_axis]))
    .on("end", add_highlight_handlers);
}
```
{: data-scroll="true" data-line-numbers="102-130" data-id="viz-input-code" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=viz-input)

> [!notes]
> The handlers that make the marks the input.


---

## Brushing

---

[vcenter]
> [!gold] [big] Brushing
>
> [big] While general kinds of interaction are extremely powerful and will be essential to creating compelling bespoke visualizations, there are many kinds of interaction styles that will be common across many different designs, and so D3 has additional features to make these interactions easy to include.


---

[vcenter]
> [!gold] [big] Brushing
>
> [big] Brushing is the interactive specification of a one- or two-dimensional selected region using a pointing gesture, such as by clicking and dragging the mouse. Brushing is often used to select discrete elements, such as dots in a scatterplot or files on a desktop. It can also be used to zoom in to a region of interest, or to select continuous regions for cross-filtering data or live histograms.


---

### Brushing

![figure](/embed/interactivity/observable.html?nb=@d3/mona-lisa-histogram&cells=chart)

> Mike Bostock, "Mona Lisa Histogram," Observable (@d3/mona-lisa-histogram). Drag a brush over the image.

---

[vcenter]
> [!gold] [big] Brushing
>
> [big] The [d3-brush module](https://d3js.org/d3-brush) implements brushing for mouse and touch events using SVG. Click and drag on the brush selection to translate the selection.


---

### Brushing

```js
// Load Data
const data = await d3.csv("data/iris.csv", d3.autoType);

// Specify the chart’s dimensions.
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

let x_axis_variable = "sepalLength";
let y_axis_variable = "sepalWidth";

const chart = fig.append("div");

// Create the positional scales.
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[x_axis_variable]))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[y_axis_variable]))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(data, (d) => d.species).keys(),
  d3.schemeCategory10
);

// Create the SVG container.
const svg = chart
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

// Add the scatterplot symbols.
const scatter_points = svg
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale(d[x_axis_variable]))
  .attr("cy", (d) => y_scale(d[y_axis_variable]))
  .attr("fill", (d) => color(d.species))
  .attr("class", (d) => d.species);

// Append the axes.
const x_axis = svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80))
  .call((g) =>
    g
      .append("text")
      .attr("class", "x_axis_label")
      .attr("x", width)
      .attr("y", margin.bottom - 4)
      .attr("fill", "currentColor")
      .attr("text-anchor", "end")
      .text(`${x_axis_variable} (cm) →`)
  );

const y_axis = svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale))
  .call((g) =>
    g
      .append("text")
      .attr("class", "y_axis_label")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(`↑ ${y_axis_variable} (cm)`)
  );

// Add brushing
svg.call(
  d3
    .brush() // Add the brush feature using the d3.brush function
    .on("start brush end", ({ selection }) => {
      if (selection) {
        const [[x0, y0], [x1, y1]] = selection;

        scatter_points.attr("fill", (d) => {
          const isBrushed =
            x0 <= x_scale(d[x_axis_variable]) &&
            x1 >= x_scale(d[x_axis_variable]) &&
            y0 <= y_scale(d[y_axis_variable]) &&
            y1 >= y_scale(d[y_axis_variable]);

          return isBrushed ? color(d.species) : "#CCCCCC22";
        });
      } else {
        scatter_points.attr("fill", (d) => color(d.species));
      }
    })
);
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=brush)

> [!notes]
> Drag out a rectangle: points inside keep their color and the rest turn gray. Click outside the rectangle to clear it.


---

## Panning and Zooming

---

[vcenter]
> [!gold] [big] Panning and Zooming
>
> [big] Another very common mode of interaction is panning and zooming, which can be more easily implemented using [d3-zoom](https://d3js.org/d3-zoom). These interactions let the user focus on a region of interest by restricting the view. It uses direct manipulation: click-and-drag to pan (translate), spin the wheel to zoom (scale), or pinch with touch. Panning and zooming are widely used in web-based mapping, but can also be used in visualization such as dense time series and scatterplots.


---

### Panning and Zooming

```js
// Load Data
const data = await d3.csv("data/iris.csv", d3.autoType);

// Specify the chart’s dimensions.
const height = 500;
const margin = {
  top: 25,
  bottom: 35,
  right: 20,
  left: 40,
};

let x_axis_variable = "sepalLength";
let y_axis_variable = "sepalWidth";

const chart = fig.append("div");

// Create the positional scales.
const x_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[x_axis_variable]))
  .nice()
  .range([margin.left, width - margin.right]);

const y_scale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d[y_axis_variable]))
  .nice()
  .range([height - margin.bottom, margin.top]);

// Create the color scale.
const color = d3.scaleOrdinal(
  d3.group(data, (d) => d.species).keys(),
  d3.schemeCategory10
);

// Create the SVG container.
const svg = chart
  .append("svg")
  .attr("viewBox", [0, 0, width, height])
  .attr("width", width)
  .attr("height", height)
  .attr("style", "max-width: 100%; height: auto;");

// Add a clipPath: everything out of this area won't be drawn.
const clip = svg
  .append("defs")
  .append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("width", width - margin.right - margin.left)
  .attr("height", height - margin.bottom - margin.top)
  .attr("x", margin.left)
  .attr("y", margin.top);

// Add the scatterplot symbols.
const scatter_points = svg
  .append("g")
  .attr("clip-path", "url(#clip)")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => x_scale(d[x_axis_variable]))
  .attr("cy", (d) => y_scale(d[y_axis_variable]))
  .attr("fill", (d) => color(d.species))
  .attr("class", (d) => d.species);

// Append the axes.
const x_axis = svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x_scale).ticks(width / 80))
  .call((g) =>
    g
      .append("text")
      .attr("class", "x_axis_label")
      .attr("x", width)
      .attr("y", margin.bottom - 4)
      .attr("fill", "currentColor")
      .attr("text-anchor", "end")
      .text(`${x_axis_variable} (cm) →`)
  );

const y_axis = svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y_scale))
  .call((g) =>
    g
      .append("text")
      .attr("class", "y_axis_label")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(`↑ ${y_axis_variable} (cm)`)
  );

const zoom = d3.zoom().scaleExtent([0.5, 2]).on("zoom", zoomed);

svg.call(zoom).call(zoom.transform, d3.zoomIdentity);

function zoomed({ transform }) {
  const zoomed_x_scale = transform
    .rescaleX(x_scale)
    .interpolate(d3.interpolateRound);

  const zoomed_y_scale = transform
    .rescaleY(y_scale)
    .interpolate(d3.interpolateRound);

  scatter_points.attr("transform", transform);

  x_axis.call(d3.axisBottom(zoomed_x_scale).ticks(width / 80));
  y_axis.call(d3.axisLeft(zoomed_y_scale));
}
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=zoom)

> [!notes]
> Scroll to zoom and drag to pan. The clip path keeps the points inside the axes.


---

[vcenter]
> [!gold] [big] Panning and Zooming
>
> [big] In addition to freeform zooming, d3-zoom provides capabilities for more "on the rails" zooming for structured navigation or storytelling.


---

### Panning and Zooming

![figure](/embed/interactivity/observable.html?nb=@d3/smooth-zooming&cells=chart)

> Mike Bostock, "Smooth Zooming," Observable (@d3/smooth-zooming).

---

## Dragging

---

[vcenter]
> [!gold] [big] Dragging
>
> [big] [Dragging](https://d3js.org/d3-drag) is a very cool interaction technique when dealing with spatial elements, in particular graphs or cases where you may want to have user definable groupings and hierarchies. Additionally dragging is the interaction to use if you want to have custom shaped lasso selection, or user drawn line inputs.


---

### Dragging

```js
const height = 500;

const graph = {
  nodes: Array.from({ length: 13 }, () => ({})),
  links: [
    { source: 0, target: 1 },
    { source: 1, target: 2 },
    { source: 2, target: 0 },
    { source: 1, target: 3 },
    { source: 3, target: 2 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 5, target: 7 },
    { source: 6, target: 7 },
    { source: 6, target: 8 },
    { source: 7, target: 8 },
    { source: 9, target: 4 },
    { source: 9, target: 11 },
    { source: 9, target: 10 },
    { source: 10, target: 11 },
    { source: 11, target: 12 },
    { source: 12, target: 10 },
  ],
};
const svg = fig.append("svg").attr("viewBox", [0, 0, width, height]),
  link = svg
    .selectAll(".link")
    .data(graph.links)
    .join("line")
    .classed("link", true),
  node = svg
    .selectAll(".node")
    .data(graph.nodes)
    .join("circle")
    .attr("r", 12)
    .classed("node", true)
    .classed("fixed", (d) => d.fx !== undefined);

const simulation = d3
  .forceSimulation()
  .nodes(graph.nodes)
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("link", d3.forceLink(graph.links))
  .on("tick", tick);

const drag = d3.drag().on("start", dragstart).on("drag", dragged);

node.call(drag).on("click", click);

function tick() {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);
  node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
}

function click(event, d) {
  delete d.fx;
  delete d.fy;
  d3.select(this).classed("fixed", false);
  simulation.alpha(1).restart();
}

function dragstart() {
  d3.select(this).classed("fixed", true);
}

function dragged(event, d) {
  d.fx = clamp(event.x, 0, width);
  d.fy = clamp(event.y, 0, height);
  simulation.alpha(1).restart();
}

function clamp(x, lo, hi) {
  return x < lo ? lo : x > hi ? hi : x;
}
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=drag&css=1)

> [!notes]
> This example uses multiple interactions including dragging as well as a force simulation. Drag a node to fix it (it turns red); click a fixed node to release it.


---

### Dragging

```css
.link {
  stroke: #d0d0d0ff;
  stroke-width: 2px;
}

.node {
  cursor: move;
  fill: #eaeaeaff;
  stroke: #000;
  stroke-width: 1.5px;
}

.node.fixed {
  fill: rgba(200, 30, 30, 1);
}
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=drag&css=1)


---

> [!green] Exercise
>
> The code on the next slide draws the animated ball on the right (refresh to replay the animation). How would you change it to allow the user to drag the ball around, and when clicked go between red and blue states? When pressing replay the ball will animate to go back and forth between the two positions defined by the last position in the red and blue states, until you try to drag it again. What about adding a widget to determine the speed of the bouncing? The easiest way to experiment would be using an observable notebook.

::: 50/50

![figure](/embed/interactivity/interaction.html?ex=exercise-template&autoplay=1)


---

### Exercise

```js
// Template for your solution

// Construct initial state
const width = 500;
const height = 200;
const r = 50;

const svg = fig.append("svg").attr("width", width).attr("height", height);

const circle = svg
  .append("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", r)
  .attr("cy", height * 0.5)
  .transition() //These transitions should only be applied in the interaction handlers
  .duration(1000)
  .attr("cx", width - r)
  .transition()
  .duration(1000)
  .attr("cx", r);

//TODO add in components for dragging in the initial state

// Handle events and updates

//TODO add in event handlers and animated transtions to state properties
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=exercise-template&autoplay=1)


---

### Solution

```js
const width = 500;
const height = 100;
const r = 50;

// Construct initial state
const animation = fig.append("div");

const drag = d3.drag().on("drag", dragged);

const button = animation
  .append("button")
  .text("Bounce!")
  .style("margin-bottom", "15px")
  .on("click", replay);

const svg = animation
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("overflow", "visible");

const circle = svg
  .append("circle")
  .style("fill", "orange")
  .attr("r", r)
  .attr("cx", r)
  .attr("cy", height * 0.5)
  .on("click", toggle_color)
  .call(drag);

// Handle events and updates

let current_color = "red";
let blue_x = r;
let red_x = width - r;

function toggle_color() {
  d3.select(this).interrupt();
  if (current_color == "red") {
    current_color = "blue";
  } else {
    current_color = "red";
  }
  circle.style("fill", current_color);
}

function replay() {
  circle
    .style("fill", "orange")
    .transition()
    .duration(2000)
    .ease(d3.easeElastic)
    .attr("cx", red_x)
    .transition()
    .duration(2000)
    .ease(d3.easeElastic)
    .attr("cx", blue_x)
    .on("end", replay);
}

function dragged(event, d) {
  d3.select(this).interrupt();
  circle.attr("cx", event.x).style("fill", current_color);
  if (current_color == "blue") {
    blue_x = event.x;
  } else {
    red_x = event.x;
  }
}
```
{: data-scroll="true" }

::: 58/42

![figure](/embed/interactivity/interaction.html?ex=exercise-solution)

> [!notes]
> Drag the ball to set the position of the current color state; click the ball to switch between red and blue; press Bounce to animate between the two stored positions.


<!-- interaction-slides:end -->
