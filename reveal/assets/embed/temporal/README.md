# Temporal embeds

`gapminder.html` and `timeviz.html` follow the geospatial external-figure
convention, using `../geospatial/lib/figure.css` and `external.js` unchanged.
They show local source-PDF references by default and make no external request
until Live is selected. Re-selecting Live preserves its iframe and interaction
state; network loss does not revert the mode, and there is no fallback timer.
Static explicitly unloads the live page. Printing always shows the reference.
The new-tab links are available if the provider blocks embedding. Selecting Live
shares a normal browser request with that third-party site, whose current
content may differ from the source PDF.

`annotation.html` is a local D3 companion, not a live original. Static is the
original annotated vector figure. Local D3 keeps the source's vector axes and
tick glyphs, replaces the 43 marks with D3 circles at recovered PDF coordinates,
and toggles the two historical annotations using geometry and wording from PDF
page 34. `data/annotation-marks.json` contains those mark centers, **not original
numeric measurements**. No series values or additional observations are inferred.
The chart loads only when selected, retains its checkbox state on mode changes,
works without remote requests, and prints the original static reference.

D3 is loaded from `../geospatial/lib/d3.min.js`; its adjacent `d3-LICENSE` applies.
No shared runtime or vendored license was copied, edited, or deleted.
