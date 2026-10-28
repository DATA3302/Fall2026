# Networks figures and local demos

These wrappers follow the geospatial `lib/external.js` / `figure.css` convention without modifying geospatial or the shared deck runtime.

| Wrapper | Static reference | Live view |
| --- | --- | --- |
| `live-p13.html` | PDF page 13 | `force.html`: local D3 force recreation |
| `live-p28.html` | PDF pages 27–28 | External Shape of Song project |
| `live-p36.html` | PDF page 36 | External Zoonotic Web project |
| `live-p39.html` | PDF page 39 | `tree.html`: local D3 tidy/cluster/radial layouts |
| `live-p50.html` | PDF page 50 | Same local hierarchy, initially collapsed |

Static is the default. External sites are contacted only after choosing Live (or following a new-tab link). Sites can refuse framing; the wrappers cannot reliably detect a cross-origin refusal, and do not claim successful remote rendering. Live remains selected, without a timeout or reload on repeated selection, until the user chooses Static. Connection-loss events do not discard the iframe. Printing uses the original static reference.

Reveal normally unloads distant `iframe[data-lazy-loaded]` elements. While Live is selected, this networks-local wrapper removes that marker from its own host iframe, restoring it on manual Static. This preserves the selected Live view across slide navigation without altering shared code or eagerly loading every slide. The wrapper depends on the bundled Reveal lazy-loading convention; the browser test verifies navigation 22 slides away and back. Already-selected local simulations can continue running while offscreen.

The older force and tree layout demonstrations use **synthetic data**, not the source figures' data:

- Force: 28 nodes in four groups; four seven-node rings, two internal chords per group, and three group bridges (39 edges). Drag nodes; adjust repulsion; pause/resume or reset. The topology and initial random source are deterministic.
- Tree: 15 nodes in an explicitly authored hierarchy with two isomorphic subtrees. Change tidy/cluster/radial layout; select a branch by click, Enter, or Space to expand/collapse; expand all or reset. The cluster layout is a layout demonstration, not measured clustering/distance data.

D3 is reused via `../geospatial/lib/d3.min.js`, relative to each demo HTML file. Its existing license remains at `../geospatial/lib/d3-LICENSE`. No duplicate library, CDN requests, or additional dependencies are introduced. Local Live can be selected offline. Wrapper controls occupy a separate strip so they do not cover the demo controls.

Reference provenance: `../../images/networks/SOURCES.md`. Only the remaining Static/Live wrappers offer a static reference; the interactive replacements below embed directly.

## Direct interactive replacements

- `force.html`: runs directly on the force-layout slide. The Reingold–Tilford slide uses its original static image instead of `live-p39.html`.
- `food-web.html`: 16 original nodes and 28 directed links extracted from PDF p.14; Sort animates to the p.15 positions. One source edge changes between the two pages, so the demo deliberately preserves p.14 topology. Highlight identifies the one herbivore without predators. Both source link lists are retained in `data/food-web.json`.
- `airports.html?mode=all`, `?mode=selected`, `?mode=paths`: authoritative Vega airport locations and historical directed routes. See `airports-chord-PROVENANCE.md` and `airports-chord-LICENSE.txt` for pinned sources, methods, and licensing.
- `pivotgraph.html`: original p.20 vector geometry, 10 nodes and 12 links. Three Reveald3 navigation steps move nodes to color × shape categories, grow category areas by membership, then increase aggregate edge widths by original edge counts. Ordinary forward/backward presentation navigation plays or reverses these stages; there are no in-figure buttons, explanatory captions, or edge-weight labels. All original edges are accounted for, including a self-loop omitted in the p.21 illustration. Extraction metadata is in `data/pivotgraph.json`.
- `chord.html`: real 2019 directed merchandise exports for the ten countries, from UN Comtrade via CEPII Gravity v202211. Unequal ribbon ends preserve each direction's value. See `chord-trade-PROVENANCE.md` for the source, transformation, units, repository search, and license. Tooltips contain only actual country/year/value data; no visible explanatory text or info box.
- `partition.html`: one Flare hierarchy, continuously animated from an icicle into a sunburst with stable identities, values, colors, and order.
- `sunburst.html`: branch expansion and parent contraction on the same Flare hierarchy. Select a branch or use the branch menu; the center and Up control return to the parent. `data/hierarchy.json` includes source and license metadata. Flare totals match the PDF, but the exact historical revision/order is unconfirmed.
- `family-tree.html`: the original external Brad Myers academic advisee tree at https://fredhohman.com/brad-myers-advisee-tree/. It loads immediately when its slide loads; requires network access and can change independently of the deck.
- `subway.html`: local Prague Metro schematic → geographic adaptation, with 58 real stations and 58 connections shared by both layouts. Starts schematic; one Reveald3 step animates to geography, and backward navigation reverses it. The embed has no visible text, station labels, buttons, or blend slider; station names remain available to assistive technology. Station coordinates and per-station Wikipedia sources are recorded in `data/subway.json`; schematic positions are authored and straight connections are not track geometry. The original animation URL was not recoverable.

Runtime dependencies remain local except for the explicitly external family-tree website. Review screenshots and browser scripts live under `Fall2026/tmp/networks-interactive-review/`, not in these runtime assets.
