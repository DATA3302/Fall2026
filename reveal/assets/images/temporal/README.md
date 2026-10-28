# Temporal figures

Source: `Fall2026/tmp/477-Slides/16-Temporal.pdf`, Cal Poly CSC 477,
*Scientific and Information Visualization: Temporal Visualization*.
See `sources.json` for PDF page numbers, image resource IDs, dimensions, and
vector export details. These are source illustrations, not newly collected data.

- `being-and-event.jpg`: Alain Badiou, *Being and Event*, Continuum edition,
  ISBN 9780826458315. Cover downloaded from
  https://covers.openlibrary.org/b/isbn/9780826458315-L.jpg?default=false
  (323 × 500 pixels), for the “More Philosophy” slide. Cover artwork remains
  the property of its respective rights holders.
- `native/`: original embedded image resources extracted with PyMuPDF, at their
  original pixel dimensions. No page screenshots or upscaled replacements.
- `page-09-collage.svg`: original page composition, preserving image transforms
  and masks. Embedded PNGs are losslessly encoded as WebP at original dimensions.
- `page-33-annotation.svg`, `page-34-annotation.svg`: native PDF vectors, with the
  slide heading removed and a chart-only viewBox. Axes, marks, and source labels
  are preserved. SVG IDs are namespaced to avoid collisions when inlined.
- `page-42-waveform-spectrogram.svg`: source layout with original labels and
  source-resolution embedded waveform/spectrogram images.
- `page-43-design-space.svg`: native vector source schematic, not a screenshot
  of today's TimeViz website. Source slide heading and URL are omitted.

The twelve representation slides (PDF pages 15–26) are rebuilt directly in
`reveal/_decks/temporal.md` using the existing diagram DSL. They preserve the
source sequence, labels (including “Heterogenous”), relationships, interval
width differences, and filled-state versus open-event marks. Curves and blurred
indeterminate blocks are schematic reconstructions, not literal vector exports;
the blur uses opacity bands within the existing DSL. Source pages 17 and 18 are
near-duplicate builds and both remain in sequence.

The A/B-theory descriptions on PDF page 12 appear reversed relative to
conventional usage. The deck visibly flags this while retaining the source
wording and column associations. The prior-course curriculum/calendar graphic
on page 31 and administrative announcement on page 44 are omitted. Pages 45–46
remain as Discussion activities, without assignment or deadline framing.

Original figure ownership and attribution remain with their respective authors.
Extraction does not establish a new license or imply permission to redistribute.
No original license files were present in the temporal directories; none were
removed. Shared D3 and embed resources, and their licenses, remain untouched in
`reveal/assets/embed/geospatial/lib/`.
