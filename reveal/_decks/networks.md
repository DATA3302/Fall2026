---
title: Network Visualization
order: 9
description: Network analysis tasks, graph layouts, tree visualization, and alternative network representations.
course: DATA 3302 Fall 2026
---

# Network Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from Cal Poly CSC 477: Scientific and Information Visualization ("Network Visualization").

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 1. 

---

### Graphs and Trees

[big] Graphs

General structure for modeling relational data with Nodes and Edges

[big] Trees

Graphs with hierarchical structure. Nodes have Parents and Children

::: 70/30

![](/images/networks/p02-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 2. Corrected source spelling only.

---

### Applications

- Tournaments
- Organization Charts
- Genealogy
- Diagramming
- Biological Interactions
- Computer Networks
- Social Networks
- Simulation and Modeling
- Integrated Circuit Design
- …

> [!notes]
> Source: 17-Networks.pdf, page 3. 

---

### Network Analysis Tasks

Structure-based: Relationships and Connectivity

Attribute-based: Specific Node/Edge Attributes

Browsing-based: Understand/Trace paths

Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 4. Progressive task-category emphasis retained.

---

### Network Analysis Tasks

**Structure-based: Relationships and Connectivity**

- Find all of the friends of friends for Taylor.

- Find all of the people who are friends with Jordan and Alex.

- Six degrees of separation: shortest path between two individuals.

Attribute-based: Specific Node/Edge Attributes

Browsing-based: Understand/Trace paths

Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 5. Progressive task-category emphasis retained.

---

### Network Analysis Tasks

Structure-based: Relationships and Connectivity

**Attribute-based: Specific Node/Edge Attributes**

- Find all "students" attending a course.

- Find all the "friends" and "family" of Alex.

Browsing-based: Understand/Trace paths

Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 6. Progressive task-category emphasis retained. Old course code generalized.

---

### Network Analysis Tasks

Structure-based: Relationships and Connectivity

Attribute-based: Specific Node/Edge Attributes

**Browsing-based: Understand/Trace paths**

- Find Alex’s friend Taylor, and then Taylor’s friend Jordan.

Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 7. Progressive task-category emphasis retained.

---

### Network Analysis Tasks

Structure-based: Relationships and Connectivity

Attribute-based: Specific Node/Edge Attributes

Browsing-based: Understand/Trace paths

**Estimation-based: Summarization and changes**

- How does Jordan’s friend group change over the course of the year?

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 8. Progressive task-category emphasis retained.

---

## Graph Layout

[big] Tree Visualization

[big] Alternative Techniques

> [!notes]
> Source: 17-Networks.pdf, page 9. 

---

### Direct Graph Representation

Display nodes as visual elements and edges as visual elements directly

**Layout Problem:** Position is underspecified

Considerations:
- Connectivity, path-following
- Topological distance
- Clustering / grouping
- Ordering (e.g., hierarchy level)

> [!notes]
> Source: 17-Networks.pdf, page 10. 

---

### Node-Link Layout

Nodes connected by lines / curves

- Sugiyama-Style Layout - arranged by depth
- Force-Directed Layout - physical simulation
- Attribute-Driven Layout - arranged by value
- Constraint-Based Layout - optimization
- Arc Diagrams - aligned layout

> [!notes]
> Source: 17-Networks.pdf, page 11. 

---

### Sugiyama-Style Layout

For Directed Acyclic Graphs ([d3-DAG](https://erikbrinkman.github.io/d3-dag/))

Assigning each node a layer

Shuffling the layers to minimize edge crossings

Aligning nodes within a layer to produce a pleasing layout.

::: 60/40

![](/images/networks/p12-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 12. 

---

### Force-Directed Layout

[d3-force](https://d3js.org/d3-force)

Layout-by-simulation

Attractive and Repulsive Forces

::: 35/65

![](/images/networks/p13-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 13. 

---

### Attribute-driven Layout

How many herbivores have no predators?

![](/images/networks/p14-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 14. Keep the question unanswered until the next original layout is shown.

---

### Attribute-driven Layout

How many herbivores have no predators?

![](/images/networks/p15-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 15. Keep the question unanswered until the next original layout is shown.

---

### Attribute-driven Layout

How encode marks based on data attributes, then layer network properties

Attributes may be associated with nodes or edges or may be statistical properties of the graph.

> [!notes]
> Source: 17-Networks.pdf, page 16. 

---

### Attribute-driven Layout

![](/images/networks/p17-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 17. 

---

### Attribute-driven Layout

![](/images/networks/p18-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 18. 

---

### Attribute-driven Layout

![](/images/networks/p19-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 19. 

---

### PivotGraph Aggregation

![](/images/networks/p20-figure.png)

> Martin Wattenberg (2006). Visual exploration of multivariate graphs. CHI ’06, 811–819. [doi:10.1145/1124772.1124891](https://doi.org/10.1145/1124772.1124891)

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 20. 

---

### PivotGraph Aggregation

![](/images/networks/p21-figure.png)

> Martin Wattenberg (2006). Visual exploration of multivariate graphs. CHI ’06, 811–819. [doi:10.1145/1124772.1124891](https://doi.org/10.1145/1124772.1124891)

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 21. 

---

### Constraint-Based Layout

Treat layout as an optimization problem (often NP-Hard)

- Minimize edge crossings
- Minimize area
- Minimize line bends
- Minimize line slopes
- Maximize smallest angle between edges
- Maximize symmetry

::: 60/40

![](/images/networks/p22-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 22. 

---

### Arc Diagrams

![](/images/networks/p23-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 23. Original visual build retained, including repeated source pages.

---

### Arc Diagrams

![](/images/networks/p24-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 24. Original visual build retained, including repeated source pages.

---

### Arc Diagrams

![](/images/networks/p25-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 25. Original visual build retained, including repeated source pages.

---

### Arc Diagrams

![](/images/networks/p26-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 26. Original visual build retained, including repeated source pages.

---

### Arc Diagrams

![](/images/networks/p27-figure.png)

> [Martin Wattenberg, The Shape of Song](https://www.bewitched.com/song.html)

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 27. Original visual build retained, including repeated source pages.

---

### Arc Diagrams

![](/images/networks/p28-figure.png)

> [Martin Wattenberg, The Shape of Song](https://www.bewitched.com/song.html)

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 28. Original visual build retained, including repeated source pages.

---

### Chord Diagrams

![](/images/networks/p29-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 29. 

---

### Chord Diagrams

[big] Hierarchical Edge Bundling

Bundle edges with varying amounts of tension. Low-level vs. high-level information

::: 38/62

![](/images/networks/p30-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 30. 

---

### Node-Link Layout

> [!green] Discussion
> When to use which?

- Sugiyama-Style Layout - arranged by depth
- Force-Directed Layout - physical simulation
- Attribute-Driven Layout - arranged by value
- Constraint-Based Layout - optimization
- Arc Diagrams - aligned layout

> [!notes]
> Source: 17-Networks.pdf, page 31. 

---

### Node-Link Layout

Edge Crossing, Occlusion, Big Ball of Spaghetti

::: 38/62

![](/images/networks/p32-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 32. 

---

### Matrix Diagram

Visualize the Adjacency Matrix

Exposes Structure

Harder to Trace

Order Dependent

::: 42/58

![](/images/networks/p33-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 33. 

---

### Matrix Diagram

![](/images/networks/p34-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 34. 

---

### Matrix Diagram

![](/images/networks/p35-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 35. 

---

### Interaction

![](/images/networks/p36-figure.png)

> [Zoonotic Web](https://vis.csh.ac.at/zoonotic-web/)

<!-- Separate visible quotation from presenter notes. -->

> [!notes]
> Source: 17-Networks.pdf, page 36. 

---

### Tree Visualization

- Node-Link Layout
- Indentation
- Enclosure
- Layering

::: 55/45

![](/images/networks/p37-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 37. 

---

### Node-Link Layout

A tree is just a special kind of graph

::: 48/52

![](/images/networks/p38-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 38. 

---

### Node-Link Layout

[big] Reingold-Tilford Layout

- Clearly encode depth
- No edge crossings
- Draw isomorphic subtrees identically
- Preserve layout ordering and symmetry
- Compact, space-saving layout

[D3 tree layout](https://d3js.org/d3-hierarchy/tree)

::: 65/35

![](/images/networks/p39-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 39. 

---

### Cluster Dendograms

Depicts cluster trees produced by hierarchical clustering algorithms.

Leaf nodes arranged in a line, internal node depth indicates order/value at which clusters merge.

Naïve recursive layout with orthogonal two-segment edges

::: 52/48

![](/images/networks/p40-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 40. 

---

### Radial Tree Layout

Any Node-Link layout in polar coordinates

::: 45/55

![](/images/networks/p41-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 41. 

---

### Indentation

Places items along vertically spaced rows

Show Parent-Child link

Common interface component

Can get very long

::: 48/52

![](/images/networks/p42-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 42. 

---

### Enclosure

Encode structure using spatial enclosure

Sometimes called Treemaps

::: 42/58

![](/images/networks/p43-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 43. 

---

### Enclosure

Encode structure using spatial enclosure

Sometimes called Treemaps

::: 42/58

![](/images/networks/p44-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 44. 

---

### Enclosure

Encode structure using spatial enclosure

Sometimes called Treemaps

::: 42/58

![](/images/networks/p45-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 45. 

---

### Layering

Signify tree structure using adjacency and alignment

Icicle

::: 45/55

![](/images/networks/p46-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 46. 

---

### Layering

Signify tree structure using adjacency and alignment

Sunburst

::: 45/55

![](/images/networks/p47-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 47. 

---

### Composibility

Layer Dendogram for Tree Structure of cluster ordering in Matrix Representation

::: 50/50

![](/images/networks/p48-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 48. 

---

### Interaction

Expansion and Contraction

::: 35/65

![](/images/networks/p49-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 49. 

---

### Interaction

Expansion and Contraction

::: 35/65

![](/images/networks/p50-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 50. 

---

## Misc Network Examples

> [!notes]
> Source: 17-Networks.pdf, page 51. 

---

### Sankey Diagram

![](/images/networks/p52-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 52. 

---

### Tangled Tree

![](/images/networks/p53-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 53. 

---

![](/images/networks/p54-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 54. TODO: Identify the map’s original source and transcribe its small labels if a higher-resolution original becomes available. Full-page reference visual retained; no data or provenance inferred.

---

### Network vs Geographic Structure

[big] Prague

![](/images/networks/p55-figure.png)

::: 42/58

![](/images/networks/p55-figure.png)

> [!notes]
> Source: 17-Networks.pdf, page 55. Page 56 omitted: Lab contains only previous-course project/assignment feedback and “Trick or Treat”; no substantive activity remains to adapt.

---

### Live companion: d3-DAG

![figure height-800](/embed/networks/live-p12.html)

> [!notes]
> Source: 17-Networks.pdf, page 12. Optional companion, not an additional source slide. Static original is default; explicit click contacts the original external site. Embedding may be blocked by the destination; use Open original. Documentation pages are not claimed to reproduce the source simulation.

---

### Live companion: d3-force

![figure height-800](/embed/networks/live-p13.html)

> [!notes]
> Source: 17-Networks.pdf, page 13. Optional companion, not an additional source slide. Static original is default; explicit click contacts the original external site. Embedding may be blocked by the destination; use Open original. Documentation pages are not claimed to reproduce the source simulation.

---

### Live companion: The Shape of Song

![figure height-800](/embed/networks/live-p28.html)

> [!notes]
> Source: 17-Networks.pdf, page 28. Optional companion, not an additional source slide. Static original is default; explicit click contacts the original external site. Embedding may be blocked by the destination; use Open original. Documentation pages are not claimed to reproduce the source simulation.

---

### Live companion: Zoonotic Web

![figure height-800](/embed/networks/live-p36.html)

> [!notes]
> Source: 17-Networks.pdf, page 36. Optional companion, not an additional source slide. Static original is default; explicit click contacts the original external site. Embedding may be blocked by the destination; use Open original. Documentation pages are not claimed to reproduce the source simulation.

---

### Live companion: D3 tree layout

![figure height-800](/embed/networks/live-p39.html)

> [!notes]
> Source: 17-Networks.pdf, page 39. Optional companion, not an additional source slide. Static original is default; explicit click contacts the original external site. Embedding may be blocked by the destination; use Open original. Documentation pages are not claimed to reproduce the source simulation.
