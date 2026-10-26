---
title: Geospatial Visualization
description: Thematic maps, spatial encodings, geographic coordinates, and map projections.
order: 7
course: DATA 3302 Fall 2026
---

# Geospatial Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

---

![](/images/geospatial/figure-02.png)

---

![](/images/geospatial/clean/page-03-snow-native-layout.svg)

::: 68/32

[medium left vcenter] English physician John Snow <span class="text-accent">plotted data in context</span> to identify that a pump on Broad Street was the cause of a cholera outbreak in London.

> Edward R. Tufte, *Visual and Statistical Thinking: Displays of Evidence for Making Decisions*.

---

![](/images/geospatial/clean/page-04-minard-napoleon-gallica.png)

> Charles Joseph Minard. Napoleon's Russian campaign. Bibliothèque nationale de France / Gallica.

---

![](/images/geospatial/figure-05.png)

---

![](/images/geospatial/figure-06.png)

---

![](/images/geospatial/native/page-07-xobject-54.png)

::: 50/50

![](/images/geospatial/native/page-07-xobject-55.png)

---

![](/images/geospatial/figure-08.png)

---

![](/images/geospatial/figure-09.png)

---

[big left vcenter] Think carefully about <span class="text-accent">normalization</span>

::: 44/56

![](/images/geospatial/figure-09.png)

---

[big left vcenter] Geospatial Objects

[medium left] <span class="text-accent">Privileged Spatial Encoding</span>

::: 48/52

[big left vcenter] Locations

[big left] Regions

[big left] Fields

---

[big left vcenter] Region as <span class="text-accent">Geometry</span>

::: 50/50

[big left vcenter] Region as <span class="text-accent">Key</span>

---

[big left vcenter] General Idiom:<br> <span class="text-accent">Thematic Map</span>

::: 44/56

[big left vcenter] Showing the spatial variability of some attribute

---

## Maps

---

### Choropleth

![](/images/geospatial/figure-14.png)

::: 62/38

[medium left] Geographical regions are shaded to show values

> [!gold] Pros
>
> Easy to read/understand

<!-- separate callouts -->

> [!magenta] Cons
>
> Region size dependence
>
> Color (hard to perceive) doing a lot of analytic work

---

### Contiguous Cartogram

![](/images/geospatial/figure-15.png)

::: 55/45

[medium left vcenter] Works with strong and relevant distortion

[medium left] Need to understand undistorted context

[medium left] Too much distortion can make uninterpretable

[medium left] Imprecise Encoding

---

### Abstract Cartogram

![](/images/geospatial/figure-16.png)

::: 65/35

[medium left vcenter] More flexible, can enable multiple encoding

[medium left] Less connected to map source

> [Presidential Election Results (2024). The New York Times.](https://www.nytimes.com/interactive/2024/11/05/us/elections/results-president.html)

---

### Symbol Map

![](/images/geospatial/figure-17.png)

::: 65/35

[medium left vcenter] Size of mark layered on the map conveys quantitative information.

[medium left] Use more accurate channels, doesn’t have space bias

[medium left] Occlusion

> [Presidential Election Results (2024). The New York Times.](https://www.nytimes.com/interactive/2024/11/05/us/elections/results-president.html)

---

### Symbol Map

![](/images/geospatial/figure-18.png)

::: 65/35

[medium left vcenter] Size of mark layered on the map conveys quantitative information.

[medium left] Use more accurate channels, doesn’t have space bias

[medium left] Occlusion

> [Presidential Election Results (2024). The New York Times.](https://www.nytimes.com/interactive/2024/11/05/us/elections/results-president.html)

---

### Symbol Map Composition

![](/images/geospatial/figure-19.png)

> [USDA Economic Research Service](https://www.ers.usda.gov/data-products/chart-gallery/chart-detail?chartId=110673)

---

### Dot Map

[medium left] One to one correspondence of points

![](/images/geospatial/native/page-20-xobject-132.png)

::: 76/24

![](/images/geospatial/figure-20-0.png)

> [Census Dots · San Luis Obispo](https://www.censusdots.com/?map=14,35.2816,-120.6420)

---

### Dot Map

![figure clip](/embed/geospatial/live-20.html)

> [Census Dots](https://www.censusdots.com/?map=14,35.2816,-120.6420) · Pan and zoom.

---

### Datashader

![figure clip](/embed/geospatial/live-21.html)

> [datashader.org](https://datashader.org/)

---

### Dot Density/Distribution Map

[medium left] Many to one correspondence of points

![](/images/geospatial/figure-22.png)

::: 52/48

[medium left vcenter] There isn’t a real person here!

[medium left] Simulated aggregation to display distributions

> [Dot density maps with D3 · Florian Ledermann](https://observablehq.com/@floledermann/dot-density-maps-with-d3)

---

### Flow Maps

![](/images/geospatial/clean/page-23-minard-wine-map.png)

> Charles Joseph Minard. French wine exports, 1864.

---

### Flow Maps

![figure clip](/embed/geospatial/live-24.html)

> [Shipmap](https://www.shipmap.org/) · Explore shipping routes.

---

### Topographic Maps

[medium left vcenter] Derived Isocontour

[medium left] Avoid 3D Issues

[medium left] Maintain availability of color channel

::: 38/62

![figure clip](/embed/geospatial/contours.html)

> Local D3 contours · Mount Eden elevation grid. Change interval or enable elevation color.

---

### Topographic Maps

[medium left vcenter] Derived Isocontour

[medium left] Avoid 3D Issues

[medium left] Maintain availability of color channel

::: 38/62

![](/images/geospatial/native/page-26-xobject-167.png)

---

### Tile Maps

[medium left vcenter] Zoom dependent render

[medium left] [d3-tile](https://github.com/d3/d3-tile)

::: 30/70

![figure clip](/embed/interactivity/observable.html?nb=@d3/seamless-zoomable-map-tiles&cells=viewof%20showlayers,map)

> [Seamless zoomable map tiles · D3](https://observablehq.com/@d3/seamless-zoomable-map-tiles?collection=@d3/d3-tile)

---

## The Earth is a Sphere

---

### Unfolding the Earth

![figure clip](/embed/geospatial/live-28.html)

> [Unfolding the Earth — Myriahedral projections · Jack van Wijk](https://www.youtube.com/watch?v=b1xXTi1nFCo)

---

### Geographic Coordinates

```diagram
diagram geographic-coordinates
node globe (0,0) shape=circle w=2 fill=none stroke=ink
path equator-back (-1,0) (-0.7,-0.24) (0,-0.34) (0.7,-0.24) (1,0) smooth dash="8 6"
path equator-front (-1,0) (-0.7,0.24) (0,0.34) (0.7,0.24) (1,0) smooth color=ink
path prime-back (0,-1.412) (-0.28,-1) (-0.4,0) (-0.28,1) (0,1.412) smooth dash="8 6"
path prime-front (0,-1.412) (0.28,-1) (0.4,0) (0.28,1) (0,1.412) smooth color=green
node parallel (0,-0.55) shape=ellipse w=1.84 h=0.6 fill=none stroke=blue
path axis (0,-1.62) (0,1.62) dash="4 6"
node north (0.18,-1.53) "N" w=0.3 h=0.3 fill=none nostroke font-size=28
node south (0.18,1.53) "S" w=0.3 h=0.3 fill=none nostroke font-size=28
node parallel-label (-1.48,-0.55) "Parallel" w=0.85 h=0.35 fill=none nostroke color=blue font-size=28
node equator-label (1.38,0.25) "Equator" w=0.85 h=0.35 fill=none nostroke font-size=28
node meridian-label (0.86,-1.25) "Prime meridian" w=1.5 h=0.35 fill=none nostroke color=green font-size=26
```

::: 50/50

[medium left vcenter] <span class="text-accent">Latitude (φ)</span>: Angle north/south from the equator.

[medium left] <span class="text-accent">Longitude (λ)</span>: Angle east/west from the Prime Meridian.

[medium left] <span class="text-accent">Graticule</span>: grid formed by lines of latitude (parallels) and lines of longitude (meridians).

---

### Geographic Coordinates

```diagram
diagram latitude-angle
node earth (0,0) shape=circle w=2 fill=none stroke=ink
path equator (-1.05,0) (1.05,0) color=muted
path axis (0,-1.48) (0,1.48) dash="6 6"
path radius (0,0) (0.819,-0.810) color=green
path angle (0.33,0) (0.325,-0.081) (0.310,-0.159) (0.270,-0.267) smooth color=orange
node point (0.819,-0.810) shape=circle w=0.045 fill=green nostroke
node origin (-0.13,0.15) "O" w=0.3 h=0.3 fill=none nostroke font-size=32
node phi (0.45,-0.20) "φ" w=0.3 h=0.3 fill=none nostroke color=orange font-size=44
node north (0,-1.65) "N" w=0.4 h=0.3 fill=none nostroke font-size=32
node equator-label (0.59,0.22) "Equator" w=1 h=0.4 fill=none nostroke font-size=32
node section (0,1.85) "Meridian section" w=3 h=0.5 fill=none nostroke font-size=40
```

[medium left] Latitude (φ): angle north/south from the equator.

::: 50/50

```diagram
diagram longitude-angle
node top-spacer (0,-1.65) w=0.4 h=0.3 fill=none nostroke
node earth (0,0) shape=circle w=2 fill=none stroke=ink
path prime (0,0) (0,-1.412) color=green
path radius (0,0) (0.707,-0.998) color=blue
path angle (0,-0.537) (0.098,-0.518) (0.190,-0.465) (0.269,-0.380) smooth color=orange
node point (0.707,-0.998) shape=circle w=0.045 fill=blue nostroke
node pole (0,0) shape=circle w=0.035 fill=ink nostroke
node pole-label (0,0.22) "North Pole" w=1.7 h=0.4 fill=none nostroke font-size=32
node lambda (0.24,-0.69) "λ" w=0.3 h=0.3 fill=none nostroke color=orange font-size=44
node prime-label (-0.45,-0.62) "Prime meridian" w=1 h=0.6 fill=none nostroke color=green font-size=30
node section (0,1.85) "Equatorial section" w=3 h=0.5 fill=none nostroke font-size=40
```

[medium left] Longitude (λ): angle east/west from the Prime Meridian.

---

[medium left vcenter] The longest sailable straight-line path.

[medium left] Why does the path on the right not look like a straight line?

![](/images/geospatial/clean/page-30-paper-globes-native-layout.svg)

::: 40/60

![](/images/geospatial/native/page-30-xobject-201.png)

> [Chabukswar and Mukherjee · Longest Straight Line Paths on Water or Land on Earth](https://arxiv.org/abs/1804.07389)

---

### Map projections

[big left vcenter] Projections are like <span class="text-accent">scales</span>.

[medium left] A transformation between angular coordinates (lon, lat) to planar coordinates (x, y).

[medium left] They map from a data domain (spatial position) to a visual range (pixel position).

[medium left] Projections are irreducibly 2-dimensional; they transform the entire sphere into a plane.

---

### Default projections can be misleading

![](/images/geospatial/native/page-41-xobject-281.png)

::: 48/52

![](/images/geospatial/native/page-41-xobject-280.png)

> [The True Size of Africa · Kai Krause](https://www.economist.com/graphic-detail/2010/11/10/the-true-true-size-of-africa) · [The world map that reboots your brain · Per Axbom](https://axbom.com/world-map/)

---

### All projections distort

![figure clip](/embed/geospatial/live-42.html)

> [Mercator: Extreme](https://mrgris.com/projects/merc-extreme/) 

---

### Many different projections

![figure clip](/embed/geospatial/projections.html?view=transitions)

> [Projection transitions · D3](https://observablehq.com/@d3/projection-transitions) · Local recreation; choose a projection or drag to rotate.

---

[big left vcenter] Every projection may preserve some properties but will <span class="text-accent">distort others</span>

::: 45/55

[medium left vcenter] **Equal Area:** Relative size is preserved

[medium left] **Equidistant:** Relative distance is preserved

[medium left] **Conformal:** Preserve local angle / shape

[medium left] **Contiguous:** Preserve continuity

[medium left] <span class="text-accent">You can’t have it all!</span>

---

### Projection surfaces

```diagram
diagram cylinder-surface
node globe (0,0) shape=circle w=1.2 fill=none stroke=ink
node equator (0,0) shape=ellipse w=1.2 h=0.38 fill=none stroke=muted
node meridian (0,0) shape=ellipse w=0.45 h=1.694 fill=none stroke=muted
node top (0,-1.1) shape=ellipse w=1.2 h=0.5 fill=none stroke=green
path left (-0.6,-1.1) (-0.6,1.1) color=green
path right (0.6,-1.1) (0.6,1.1) color=green
path back (-0.6,1.1) (-0.42,0.92) (0,0.85) (0.42,0.92) (0.6,1.1) smooth color=green dash="8 6"
path front (-0.6,1.1) (-0.42,1.28) (0,1.35) (0.42,1.28) (0.6,1.1) smooth color=green
node label (0,1.8) "Cylinder" w=1.6 h=0.5 fill=none nostroke color=green font-size=36
```

::: 32/68

![figure clip](/embed/geospatial/projections.html?view=cylindrical&controls=off)

> [GISGeography · Cylindrical projection](https://gisgeography.com/cylindrical-projection/) · Schematic surface; local D3 equirectangular map.

---

### Projection surfaces

```diagram
diagram conic-surface
node globe (0,0) shape=circle w=1.2 fill=none stroke=ink
node equator (0,0) shape=ellipse w=1.2 h=0.38 fill=none stroke=muted
node meridian (0,0) shape=ellipse w=0.45 h=1.694 fill=none stroke=muted
path sides (-1,1.1) (0,-2.1) (1,1.1) color=green
path back (-1,1.1) (-0.7,0.85) (0,0.75) (0.7,0.85) (1,1.1) smooth color=green dash="8 6"
path front (-1,1.1) (-0.7,1.35) (0,1.45) (0.7,1.35) (1,1.1) smooth color=green
node label (0,1.85) "Cone" w=1.6 h=0.5 fill=none nostroke color=green font-size=36
```

::: 32/68

![figure clip](/embed/geospatial/projections.html?view=conic&controls=off)

> [GISGeography · Conic projection](https://gisgeography.com/conic-projection-lambert-albers-polyconic/) · Schematic surface; local D3 conic equal-area map.

---

### Projection surfaces

```diagram
diagram planar-surface
path plane (-1.05,-0.847) (-0.5,-1.3) (1.05,-0.847) (0.5,-0.394) closed color=green
node globe (0,0) shape=circle w=1.2 fill="var(--slide-background)" stroke=ink
node equator (0,0) shape=ellipse w=1.2 h=0.38 fill=none stroke=muted
node meridian (0,0) shape=ellipse w=0.45 h=1.694 fill=none stroke=muted
node contact (0,-0.847) shape=circle w=0.035 fill=green nostroke
node label (0,1.15) "Plane" w=1.6 h=0.5 fill=none nostroke color=green font-size=36
```

::: 32/68

![figure clip](/embed/geospatial/projections.html?view=plane&lat=90&controls=off)

> [GISGeography · Azimuthal projection](https://gisgeography.com/azimuthal-projection-orthographic-stereographic-gnomonic/) · Schematic surface; local D3 orthographic map.

---

### Azimuthal Equidistant

![figure clip](/embed/geospatial/projections.html?view=azimuthal)

::: 65/35

[medium left] Preserves:

[medium left] Distance and direction from a <span class="text-accent">center point</span>

![](/images/geospatial/external/un-emblem-blue.svg)

> [D3 Azimuthal Equidistant](https://observablehq.com/@d3/azimuthal-equidistant) · Drag to change the center.

---

### Conic Equal Area

![figure clip](/embed/geospatial/projections.html?view=conic)

::: 66/34

[medium left vcenter] Preserves proportional size of regions

[medium left] Land surveys, choropleth maps

> [D3 Conic Equal Area](https://observablehq.com/@d3/conic-equal-area) · Adjust standard parallels.

---

### Conformal

[medium left vcenter] <span class="text-accent">Spherical Mercator</span>

[medium left] Preserves compass bearing on a straight line.

[medium left] Preserves "shape/local angles", distorst "size"

[medium left] Historically used for Navigation

::: 36/64

![figure clip](/embed/geospatial/projections.html?view=mercator)

> Orange: illustrative constant-bearing route (rhumb line).

---

### Albers USA

![figure clip](/embed/geospatial/projections.html?view=usa)

::: 65/35

[medium vcenter left] A US-centric configuration of conical equal area projections.

[medium left] Preserves proportional size of regions (for the lower 48 states and Hawaii)

[medium left] Alaska is scaled down to 0.35x.

> [D3 Albers USA](https://observablehq.com/@d3/u-s-map) · Select a state.

---

### Play around

![](/images/geospatial/clean/page-43-panel-294-trimmed.png)

![](/images/geospatial/clean/page-43-panel-295-trimmed.png)

::: 30/35/35

![](/images/geospatial/clean/page-43-panel-296-trimmed.png)

![](/images/geospatial/clean/page-43-panel-297-trimmed.png)

:::

![](/images/geospatial/clean/page-43-panel-299-trimmed.png)

![](/images/geospatial/clean/page-43-panel-298-trimmed.png)

> [Jason Davies · Maps](https://www.jasondavies.com/maps/) · [d3-geo-projection](https://observablehq.com/collection/@d3/d3-geo-projection)

---

> [!green] Play around
>
> [jasondavies.com/maps](https://www.jasondavies.com/maps/)
>
> [d3-geo-projection](https://observablehq.com/collection/@d3/d3-geo-projection)

::: 30/70

![figure clip](/embed/geospatial/live-43.html)

---
