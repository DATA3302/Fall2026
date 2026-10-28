# Airport and chord recreations: provenance, methods, and validation

## Embed entry points

Relative to `reveal/assets/embed/networks/`:

- `airports.html?mode=all`: all 5,366 directed route records, initially with no selection; selecting an origin emphasizes its outgoing routes.
- `airports.html?mode=selected`: only the selected airport's outgoing routes; default SFO (74 routes).
- `airports.html?mode=paths`: one shortest **directed** path between two airport selections; default ADQ → JFK (ADQ → ANC → ATL → JFK, three legs).
- `chord.html`: real 2019 bilateral merchandise exports, with selection and data-value tooltips. **Current trade data, encoding, and licensing are documented in `chord-trade-PROVENANCE.md`.** The original synthetic-matrix investigation below is retained only as development history.

Serve over HTTP; no runtime external requests are needed. These entry points are integrated into the network deck. All visual marks are generated locally with D3, not displayed screenshots. Reference and validation artifacts are kept in `Fall2026/tmp/networks-interactive-review/airports-chord/`, outside runtime assets.

## Authoritative airport sources

Retrieved 2026-10-27 from the authoritative [vega/vega-datasets](https://github.com/vega/vega-datasets) repository. The two local CSV files are unmodified, byte-for-byte matches at revision `5448e25297c8f705be78e879d5423d55d04dc6f1`:

- [airports.csv](https://github.com/vega/vega-datasets/blob/5448e25297c8f705be78e879d5423d55d04dc6f1/data/airports.csv): 3,376 airport records; identifier, name, city, state, country, latitude, longitude. Vega's metadata identifies FAA as the source while explicitly saying the exact generation source is unknown; the file is consistent with FAA National Airspace System Resource data. Do not overstate this provenance.
- [flights-airport.csv](https://github.com/vega/vega-datasets/blob/5448e25297c8f705be78e879d5423d55d04dc6f1/data/flights-airport.csv): 5,366 origin/destination/count rows, representing 7,009,728 recorded flights in 2008. Vega's metadata identifies U.S. Bureau of Transportation Statistics as the source.
- [Pinned dataset catalog](https://github.com/vega/vega-datasets/blob/5448e25297c8f705be78e879d5423d55d04dc6f1/datapackage.json).

`airports-chord-data-provenance.json` preserves the relevant upstream metadata, pinned revision, SHA-256 checksums, and byte-match results. All 305 distinct route endpoints resolve to the airport table. There are 302 directed rows without a reverse row; none are symmetrized, deleted, or replaced. No self-routes occur.

### Airport methods and interpretation

- All mode draws one SVG path for every source row, retaining origin, destination, and count attributes. Selected mode shows **outgoing**, not both incoming and outgoing, links. Counts are not converted into extra edges.
- Paths use breadth-first search on the entire directed route graph. Edges are unweighted; this minimizes legs, **not** miles, travel time, ticket price, or flight frequency. Neighbor IDs are sorted lexicographically to make equal-length ties reproducible. One shortest path is shown, not all possible paths.
- Both native airport selectors include all 3,376 airport IDs, grouped by presence in the route table. Missing outgoing links and unreachable destinations are reported explicitly; no connections are inferred. Selecting the same airport gives zero legs.
- Background clicks clear both airport selections in every mode; the menus also offer “No selection.” Clearing keeps every route visible in all mode and removes selected routes/paths in the other modes. The visual info box below the map is removed; selection and route announcements remain available to assistive technology.
- Map clicks set the origin in all/selected mode. In paths mode the explicit click-target menu controls which endpoint changes, then alternates for the next click. Native menus provide a keyboard-accessible alternative to small map nodes. Reset restores the mode's defaults.
- D3 Albers USA repositions Alaska and Hawaii. Puerto Rico/USVI use a separately labeled Mercator inset. Every route endpoint has a plotted coordinate. Of the full location table, 3,364 airport nodes fit these extents; the remaining 12 non-route airports remain selectable and produce an explicit outside-map note.
- Node size increases with departing flight count using a square-root scale with a minimum radius for visibility; it is not an exact proportional-area encoding. Airports without recorded routes are small and muted. Origin is orange; destination is purple; intermediate path nodes have blue outlines. Curved lines and endpoint arrows distinguish directions. These lines connect airport positions; they are not actual flown trajectories. Counts are historical, not current service availability.
- The existing `../geospatial/data/counties-10m.json` supplies state outlines. Existing D3, TopoJSON, `figure.css`, and `demos.css` are loaded without modification. The TopoJSON library is an ES module.

## Historical PDF p29 investigation and initial synthetic matrix (superseded)

The initial synthetic matrix described in this section has been replaced by real 2019 trade data. These paragraphs record the previous implementation, not the current data or chart. See `chord-trade-PROVENANCE.md`.

Source inspected: the project's `tmp/477-Slides/17-Networks.pdf`, physical page 29. `pdftotext -f 29 -l 29 -layout` recovered the ten country labels: France, Britain, Greece, Italy, Portugal, United States, Germany, Ireland, Japan, Spain. A 1,000-pixel page raster is preserved in `Fall2026/tmp/networks-interactive-review/airports-chord/airports-chord-original-p29.png`, solely as a reference to the existing course material.

`pdftocairo -f 29 -l 29 -svg` and bounded Python XML queries found 234 paths, 264 glyph uses, and numerous masks/clips/filters (652 groups). The extracted text and inspected vector structure did not provide a trustworthy numeric matrix or identify the meaning/units of the connections. The vector artwork preserves geometry, but converting apparent ribbon widths into original measurements would introduce unsupported precision. No original numeric values are claimed.

`data/chord.json` therefore contains a **new, illustrative, symmetric 10 × 10 matrix** with zero diagonal, 45 nonzero unordered pairs, and 1,010 example units counting each pair once. The country labels match the PDF, but the numbers and layout order are not asserted to recover its original dataset. They are **not** trade, migration, flight, or other measured statistics. This distinction is visible in the heading, footer, status text, tooltips, accessible description, and data file.

D3's chord layout maps each row total to its country's outer arc and each pair value to a ribbon width at both ends. Each symmetric pair is represented by one undirected ribbon, not two distinct flows. Country selection dims unrelated ribbons; arc/ribbon hover and keyboard focus show totals or pair values. Enter/Space pins an arc or ribbon's source country; Escape and Reset clear selection. A native country menu provides the same selection. Motion respects `prefers-reduced-motion`.

## Licensing

See `airports-chord-LICENSE.txt`. Vega's current metadata identifies airport locations as `other-open` (U.S. government works) and route counts as `other-pd` (U.S. Government Dataset). Its README explicitly warns that package-code BSD licensing does **not** automatically cover datasets and that dataset licensing metadata is a starting point, not definitive legal advice. The original airport file's generation uncertainty is retained here.

Existing dependencies retain their existing local notices: `../geospatial/lib/d3-LICENSE`, `../geospatial/lib/topojson-LICENSE`, and `../geospatial/data/us-atlas-LICENSE`. No new dependency copy or changed shared library is included. The reference PDF screenshot has no newly inferred redistribution license; it remains existing course-source material, distinct from the newly authored example matrix and implementation.

## Historical validation provenance

The chord checks below describe the superseded synthetic matrix. Current trade-data and interaction checks are in `Fall2026/tmp/networks-interactive-review/chord-trade-check.cjs`.

The validation-provenance harness and captured results are kept under `Fall2026/tmp/networks-interactive-review/airports-chord/`. The harness opens a temporary loopback server and closes the server/browser on completion. It requires an installed Playwright Chromium browser. Its original output destination must be changed to this review directory before rerunning it, to keep validation artifacts out of runtime assets. No dependency installation or shared project configuration was added.

Finite local HTTP server plus Playwright Chromium; desktop 1100 × 800 and compact 600 × 540. Results are in `airports-chord-validation.json`; actual browser screenshots are the `airports-chord-validation-*.png` files. Screenshots were visually inspected; extra vertical space was added to prevent clipping the United States chord label. A sandboxed Chromium attempt timed out before its first screenshot; completed browser checks ran outside the sandbox. Initial module/markup issues found during development were corrected before the passing run.

Passing checks:

- All mode has exactly 5,366 SVG route paths. SFO selected mode has exactly 74, all with SFO as origin.
- Both airport selections, click-to-set endpoints and alternation, reset, isolated/no-route states, and same-airport zero-leg state.
- Independent reference distances for all **93,025** ordered pairs among the 305 route airports: every returned BFS path has the minimum leg count and every consecutive pair exists as an exact directed source row. This includes 86,444 multi-leg results and 910 unreachable ordered pairs. A tiny one-way A → B graph also verifies no reverse link is invented.
- The multileg example ADQ → ANC → ATL → JFK is drawn with exactly the recorded directed edges.
- Airport tooltip includes ID/name; chord arc focus and ribbon focus show country totals or example pair values.
- Ten chord groups / 45 ribbons; all 45 DOM ribbon values match the JSON matrix. Selecting France retains its 9 ribbons and dims the other 36.
- Chord keyboard Enter selection, Escape clearing, reset, and country-menu changes.
- Both compact figures retain visible main/controls/status/footer regions; desktop and compact browser screenshots captured.
- Zero browser JavaScript errors, failed HTTP responses, or failed requests in the final run.

**Automation limitation:** native airport selectors are ordinary labeled HTML `select` controls and receive focus, but this macOS headless environment did not change the open native menu's value in response to automated arrow keys. Selector change events were verified through Playwright `selectOption`; manual OS-native menu navigation remains a follow-up check. Chord SVG keyboard activation was directly tested successfully.
