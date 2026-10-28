---
title: Network Visualization
order: 9
description: Network analysis tasks, graph layouts, tree visualization, and alternative network representations.
course: DATA 3302 Fall 2026

---

# Network Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

---

### Graphs and Trees

[medium left vcenter] **Graphs**

[medium left] General structure for modeling relational data with Nodes and Edges

[medium left] **Trees**

[medium left] Graphs with hierarchical structure. Nodes have Parents and Children

::: 58/42

```diagram
diagram graphs-and-trees
node a (0,0) shape=circle w=0.22 fill=orange nostroke
node b (1.5,0.2) shape=circle w=0.22 fill=orange nostroke
node c (0.65,0.8) shape=circle w=0.22 fill=orange nostroke
node d (2.25,0.8) shape=circle w=0.22 fill=orange nostroke
node e (1.5,1.55) shape=circle w=0.22 fill=orange nostroke
edge a b via (0.6,-0.18) smooth arrow=none color=orange
edge a b via (0.65,0.48) smooth arrow=none color=orange
edge a c via (0.1,0.65) smooth arrow=none color=orange
edge b d via (2.05,0.25) smooth arrow=none color=orange
edge b e via (1.7,0.85) smooth arrow=none color=orange
edge c d via (1.4,1.0) smooth arrow=none color=orange
node root (1.1,2.7) shape=circle w=0.22 fill=orange nostroke
node left (0.65,3.2) shape=circle w=0.22 fill=orange nostroke
node right (1.55,3.2) shape=circle w=0.22 fill=orange nostroke
node l (1.15,3.9) shape=circle w=0.22 fill=orange nostroke
node r (1.95,3.9) shape=circle w=0.22 fill=orange nostroke
edge root left arrow=none color=orange
edge root right arrow=none color=orange
edge right l arrow=none color=orange
edge right r arrow=none color=orange
```

---

### Applications

[medium left vcenter] Tournaments

[medium left] Organization Charts

[medium left] Genealogy

[medium left] Diagramming

[medium left] Biological Interactions

::: 50/50

[medium left vcenter] Computer Networks

[medium left] Social Networks

[medium left] Simulation and Modeling

[medium left] Integrated Circuit Design

[medium left] …

---

### Network Analysis Tasks

[medium left vcenter] Structure-based: Relationships and Connectivity

[medium left] Attribute-based: Specific Node/Edge Attributes

[medium left] Browsing-based: Understand/Trace paths

[medium left] Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

---

### Network Analysis Tasks

[medium left vcenter] **Structure-based: Relationships and Connectivity**

- Find all of the friends of friends for Taylor.

- Find all of the people who are friends with Jordan and Alex.

- Six degrees of separation: shortest path between two individuals.

[medium left] Attribute-based: Specific Node/Edge Attributes

[medium left] Browsing-based: Understand/Trace paths

[medium left] Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

---

### Network Analysis Tasks

[medium left vcenter] Structure-based: Relationships and Connectivity

[medium left] **Attribute-based: Specific Node/Edge Attributes**

- Find all "students" attending a course.

- Find all the "friends" and "family" of Alex.

[medium left] Browsing-based: Understand/Trace paths

[medium left] Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

---

### Network Analysis Tasks

[medium left vcenter] Structure-based: Relationships and Connectivity

[medium left] Attribute-based: Specific Node/Edge Attributes

[medium left] **Browsing-based: Understand/Trace paths**

- Find Alex’s friend Taylor, and then Taylor’s friend Jordan.

[medium left] Estimation-based: Summarization and changes

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

---

### Network Analysis Tasks

[medium left vcenter] Structure-based: Relationships and Connectivity

[medium left] Attribute-based: Specific Node/Edge Attributes

[medium left] Browsing-based: Understand/Trace paths

[medium left] **Estimation-based: Summarization and changes**

- How does Jordan’s friend group change over the course of the year?

> Pretorius, Purchase & Stasko (2014), [Tasks for multivariate network analysis](https://eprints.whiterose.ac.uk/id/eprint/80919/1/chapter3-tasks-v7.0.pdf).

---

[big left vcenter] Graph Layout

[big left] Tree Visualization

[big left] Alternative Techniques

---

### Direct Graph Representation

[medium left vcenter] Display nodes as visual elements and edges as visual elements directly

[medium left] **Layout Problem:** Position is underspecified

[medium left] Considerations:
- Connectivity, path-following
- Topological distance
- Clustering / grouping
- Ordering (e.g., hierarchy level)

---

### Node-Link Layout

[medium left vcenter] Nodes connected by lines / curves

- Sugiyama-Style Layout - arranged by depth
- Force-Directed Layout - physical simulation
- Attribute-Driven Layout - arranged by value
- Constraint-Based Layout - optimization
- Arc Diagrams - aligned layout

---

### Sugiyama-Style Layout

[medium left vcenter] For Directed Acyclic Graphs ([d3-DAG](https://erikbrinkman.github.io/d3-dag/))

[medium left] Assigning each node a layer

[medium left] Shuffling the layers to minimize edge crossings

[medium left] Aligning nodes within a layer to produce a pleasing layout.

::: 55/45

![](/images/networks/native/page-12-native.svg)

---

### Force-Directed Layout

[d3-force](https://d3js.org/d3-force)

[medium left vcenter] Layout-by-simulation

[medium left] Attractive and Repulsive Forces

::: 35/65

![figure clip](/embed/networks/force.html)

---

### Attribute-driven Layout

![figure clip](/embed/networks/food-web.html)

---

### Attribute-driven Layout

[medium left vcenter] Encode marks based on data attributes, then layer network properties

[medium left] Attributes may be associated with nodes or edges or may be statistical properties of the graph.

---

### Attribute-driven Layout

![figure clip](/embed/networks/airports.html?mode=all)


---

### Attribute-driven Layout

![figure clip](/embed/networks/airports.html?mode=selected)


---

### Attribute-driven Layout

![figure clip](/embed/networks/airports.html?mode=paths)

---

### PivotGraph Aggregation

![figure clip](/embed/networks/pivotgraph.html)

---

### Constraint-Based Layout

[medium left vcenter] Treat layout as an optimization problem (often NP-Hard)

- Minimize edge crossings
- Minimize area
- Minimize line bends
- Minimize line slopes
- Maximize smallest angle between edges
- Maximize symmetry

::: 48/52

```diagram
diagram constraint-layouts
node a (0,0) shape=circle w=0.09 fill=blue nostroke
node b (1.5,0) shape=circle w=0.09 fill=blue nostroke
node c (0.75,0.65) shape=circle w=0.09 fill=blue nostroke
node d (0.75,1.75) shape=circle w=0.09 fill=blue nostroke
edge a b arrow=none color=orange
edge a c arrow=none color=orange
edge a d arrow=none color=orange
edge b c arrow=none color=orange
edge b d arrow=none color=orange
edge c d arrow=none color=orange
node label1 (0.75,2.3) "min # crossings" w=2 h=0.4 fill=none nostroke font-size=28
node e (2.7,0) shape=circle w=0.09 fill=blue nostroke
node f (4.2,0) shape=circle w=0.09 fill=blue nostroke
node g (2.7,1.75) shape=circle w=0.09 fill=blue nostroke
node h (4.2,1.75) shape=circle w=0.09 fill=blue nostroke
edge e f arrow=none color=orange
edge e g arrow=none color=orange
edge e h arrow=none color=orange
edge f g arrow=none color=orange
edge f h arrow=none color=orange
edge g h arrow=none color=orange
node label2 (3.45,2.3) "max symmetries" w=2 h=0.4 fill=none nostroke font-size=28
```

---

### Arc Diagrams

![](/images/networks/native/page-23-image-1.png)

---

### Arc Diagrams

![](/images/networks/native/page-24-image-1.png)

---

### Arc Diagrams

![](/images/networks/native/page-25-image-1.png)

---

### Arc Diagrams

![](/images/networks/native/page-26-image-1.png)

---

### Arc Diagrams

![](/images/networks/native/page-27-native.svg)

> [Martin Wattenberg, The Shape of Song](https://www.bewitched.com/song.html)

---

### Arc Diagrams

![figure clip](/embed/networks/live-p28.html)

> [Martin Wattenberg, The Shape of Song](https://www.bewitched.com/song.html)

---

### Chord Diagrams

![figure clip](/embed/networks/chord.html)

---

### Chord Diagrams

[medium left vcenter] Hierarchical Edge Bundling

[medium left] Bundle edges with varying amounts of tension. Low-level vs. high-level information

::: 38/62

![](/images/networks/native/page-30-image-1.png)

---

### Node-Link Layout

> [!green] Discussion
>
> When to use which?

::: 35/65

[medium left vcenter] Sugiyama-Style Layout - arranged by depth

[medium left] Force-Directed Layout - physical simulation

[medium left] Attribute-Driven Layout - arranged by value

[medium left] Constraint-Based Layout - optimization

[medium left] Arc Diagrams - aligned layout

---

### Node-Link Layout

[medium left vcenter] Edge Crossing, Occlusion, Big Ball of Spaghetti

::: 38/62

![](/images/networks/native/page-32-image-1.png)

---

### Matrix Diagram

[medium left vcenter] Visualize the Adjacency Matrix

[medium left] Exposes Structure

[medium left] Harder to Trace

[medium left] Order Dependent

::: 42/58

![](/images/networks/native/page-33-native.svg)

---

### Matrix Diagram

![](/images/networks/native/page-34-native.svg)

---

### Matrix Diagram

![](/images/networks/native/page-35-native.svg)

---

### Interaction

![figure clip](/embed/networks/live-p36.html)

> [Zoonotic Web](https://vis.csh.ac.at/zoonotic-web/)

---

### Tree Visualization

[medium left vcenter] Node-Link Layout

[medium left] Indentation

[medium left] Enclosure

[medium left] Layering

::: 55/45

![](/images/networks/native/page-37-image-1.png)

---

### Node-Link Layout

[medium left vcenter] A tree is just a special kind of graph

::: 48/52

![](/images/networks/native/page-38-image-1.png)

---

### Node-Link Layout

[medium left vcenter] Reingold-Tilford Layout

- Clearly encode depth
- No edge crossings
- Draw isomorphic subtrees identically
- Preserve layout ordering and symmetry
- Compact, space-saving layout

[D3 tree layout](https://d3js.org/d3-hierarchy/tree)

::: 48/52

![](/images/networks/native/page-39-image-1.png)


---

### Cluster Dendrograms

[medium left vcenter] Depicts cluster trees produced by hierarchical clustering algorithms.

[medium left] Leaf nodes arranged in a line, internal node depth indicates order/value at which clusters merge.

[medium left] Naïve recursive layout with orthogonal two-segment edges

::: 52/48

![](/images/networks/native/page-40-image-1.png)

---


### Composability

[medium left vcenter] Layer Dendrogram for Tree Structure of cluster ordering in Matrix Representation

::: 50/50

![](/images/networks/native/page-48-image-1.png)

---

### Radial Tree Layout

[medium left vcenter] Any Node-Link layout in polar coordinates

::: 45/55

![](/images/networks/native/page-41-native.svg)

---

### Indentation

[medium left vcenter] Places items along vertically spaced rows

[medium left] Show Parent-Child link

[medium left] Common interface component

[medium left] Can get very long

::: 48/52

![](/images/networks/native/page-42-native.svg)

---

### Enclosure

[medium left vcenter] Encode structure using spatial enclosure

[medium left] Sometimes called Treemaps

::: 42/58

![](/images/networks/native/page-43-image-1.png)

---

### Enclosure

[medium left vcenter] Encode structure using spatial enclosure

[medium left] Sometimes called Treemaps

::: 42/58

![](/images/networks/native/page-44-image-1.png)

---

### Enclosure

[medium left vcenter] Encode structure using spatial enclosure

[medium left] Sometimes called Treemaps

::: 42/58

![](/images/networks/native/page-45-native.svg)

---

### Layering

![figure clip](/embed/networks/partition.html)
 
---

### Interaction

![figure clip](/embed/networks/sunburst.html)

---

![figure clip](/embed/networks/family-tree.html)


---

## Misc Network Examples

---

### Sankey Diagram

![](/images/networks/native/page-52-image-1.png)

---

### Tangled Tree

![](/images/networks/native/page-53-image-1.png)

---

![](/images/networks/native/page-54-image-1.png)

---

### Network vs Geographic Structure

![figure clip](/embed/networks/subway.html)
