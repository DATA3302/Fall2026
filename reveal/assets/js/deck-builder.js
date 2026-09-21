window.DeckBuilder = (() => {
  const isBlank = (node) => node.nodeType === Node.TEXT_NODE && !node.textContent.trim();
  const isHeading = (node) => node.nodeType === Node.ELEMENT_NODE && /^H[1-6]$/.test(node.tagName);
  // Callouts are named by the color they render in, not by a semantic type: the box's whole job
  // is to be visually distinct, and a "note"/"warning"/"danger" vocabulary implied a meaning the
  // deck never actually assigned. `margin` is the one non-color name — it is a layout variant
  // (narrow, right-aligned, transparent) rather than a color.
  const calloutPattern = /^\[!(green|gold|blue|orange|magenta|ink|muted|margin)\](?:\s+(.*))?$/i;
  const presenterNotesPattern = /^\[!notes\]\s*/i;
  const autoAnimatePattern = /^\[!auto-animate\]\s*$/i;
  const textKeyword = "lead|muted|accent|small|center|big|vcenter";
  const textPattern = new RegExp(`^\\[((?:${textKeyword})(?:\\s+(?:${textKeyword}))*)\\]\\s*`, "i");
  const themeVariables = {
    background: "--slide-background",
    ink: "--slide-ink",
    muted: "--slide-muted",
    accent: "--slide-accent",
    green: "--slide-green",
    gold: "--slide-gold",
    blue: "--slide-blue",
    magenta: "--slide-magenta",
    orange: "--slide-orange"
  };
  const defaultDesign = {
      background: "#fbfaf3",
      ink: "#282722",
      muted: "#817d72",
      accent: "#176b52",
      green: "#2c9b43",
      gold: "#c7a900",
      blue: "#345a94",
      magenta: "#823363",
      orange: "#c47c16",
  }

  function splitSlides(fragment) {
    const slides = [[]];
    Array.from(fragment.childNodes).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "HR") slides.at(-1).length && slides.push([]);
      else slides.at(-1).push(node);
    });
    return slides.map((nodes) => nodes.filter((node) => !isBlank(node))).filter((nodes) => nodes.length);
  }

  function calloutMatch(node) {
    if (node?.nodeType !== Node.ELEMENT_NODE || node.tagName !== "BLOCKQUOTE") return null;
    return node.firstElementChild?.textContent.trim().match(calloutPattern) || null;
  }

  function extractPresenterNotes(nodes) {
    const notes = document.createElement("aside");
    notes.className = "notes";
    nodes.forEach((node, index) => {
      if (node?.nodeType !== Node.ELEMENT_NODE || node.tagName !== "BLOCKQUOTE") return;
      const first = node.firstElementChild;
      if (!first?.textContent.trim().match(presenterNotesPattern)) return;
      first.innerHTML = first.innerHTML.replace(presenterNotesPattern, "");
      if (!first.textContent.trim() && !first.children.length) first.remove();
      notes.append(...node.childNodes);
      nodes[index] = null;
    });
    for (let index = nodes.length - 1; index >= 0; index--) {
      if (nodes[index] === null) nodes.splice(index, 1);
    }
    return notes.childNodes.length ? notes : null;
  }

  function extractAutoAnimate(nodes) {
    const index = nodes.findIndex((node) => node.nodeType === Node.ELEMENT_NODE && node.tagName === "BLOCKQUOTE"
      && node.firstElementChild?.textContent.trim().match(autoAnimatePattern));
    if (index < 0) return false;
    nodes.splice(index, 1);
    return true;
  }

  function extractFooter(nodes) {
    const index = nodes.findLastIndex((node) => !isBlank(node));
    const quote = nodes[index];
    if (index < 0 || quote?.nodeType !== Node.ELEMENT_NODE || quote.tagName !== "BLOCKQUOTE" || calloutMatch(quote)) return null;

    nodes.splice(index, 1);
    const note = document.createElement("div");
    note.className = "slide-footer-note";
    note.append(...quote.childNodes);
    return note;
  }

  function extractHeader(nodes) {
    const index = nodes.findIndex((node) => !isBlank(node));
    if (index < 0 || !isHeading(nodes[index])) return null;

    const heading = nodes.splice(index, 1)[0];
    const text = heading.textContent.trim();
    if (text) {
      // Reveal's [data-id] auto-animate matcher keys on `nodeName + data-id`, so an <h2>
      // and <h3> with the same data-id never match. Put the id on a <span> instead: its
      // nodeName stays constant across heading levels, so the same title still animates.
      const span = document.createElement("span");
      span.setAttribute("data-id", text);
      span.append(...heading.childNodes);
      heading.append(span);
    }
    const header = document.createElement("header");
    header.className = "slide-header";
    header.append(heading);
    return header;
  }

  function makeContent(nodes) {
    const marker = /^:::(?:\s+([\d.]+(?:\s*\/\s*[\d.]+)*))?$/;
    const columns = [[]];
    let weights = null;

    nodes.forEach((node) => {
      const match = node.nodeType === Node.ELEMENT_NODE && node.tagName === "P"
        ? node.textContent.trim().match(marker)
        : null;
      if (match) {
        if (match[1] && !weights) weights = match[1].split("/").map(Number);
        columns.push([]);
      } else columns.at(-1).push(node);
    });

    const content = document.createElement("div");
    content.className = columns.length > 1 ? "slide-content slide-grid" : "slide-content";
    if (columns.length === 1) {
      content.append(...columns[0]);
      return content;
    }

    const validWeights = weights && weights.length === columns.length && weights.every((weight) => weight > 0);
    content.style.setProperty("--slide-columns", (validWeights ? weights : columns.map(() => 1))
      .map((weight) => `minmax(0, ${weight}fr)`).join(" "));

    columns.forEach((columnNodes, index) => {
      const column = document.createElement("div");
      column.dataset.column = String(index + 1);
      column.className = "slide-column";
      column.append(...columnNodes);
      content.append(column);
    });
    return content;
  }

  function replaceActions(section) {
    section.querySelectorAll('a[href^="action:"]').forEach((link) => {
      const button = document.createElement("button");
      button.id = decodeURIComponent(link.getAttribute("href").slice("action:".length));
      button.className = "tufte-button";
      button.innerHTML = link.innerHTML;
      link.replaceWith(button);
    });
  }

  function replaceEmbeds(section) {
    section.querySelectorAll("img").forEach((image) => {
      const tokens = image.alt.trim().toLowerCase().split(/\s+/);
      const kind = tokens[0];
      if (kind !== "figure" && kind !== "background") return;

      // Read from data-src, not src — deck.html already resolved this to its final URL (baseurl
      // + reveal/assets prepended for a root-relative reference, left alone if it was already
      // absolute) and renamed it to data-src, precisely so this raw <img> never carries a real
      // src for a browser to eagerly fetch before that resolution happened.
      const source = image.dataset.src;
      const wrapper = image.parentElement;
      const replaceTarget = wrapper?.tagName === "P" && !wrapper.textContent.trim() && wrapper.children.length === 1 ? wrapper : image;

      if (kind === "background") {
        section.classList.add("fig-container", "has-visualization-background");
        section.dataset.file = source;
        if (tokens.includes("contained")) section.setAttribute("data-no-background", "");
        if (tokens.includes("preload")) section.setAttribute("data-preload", "");
        if (tokens.includes("no-scroll")) section.dataset.scroll = "no";
        if (!tokens.includes("clip")) section.dataset.overflowShown = "true";
        replaceTarget.remove();
        return;
      }

      const figure = document.createElement("figure");
      figure.className = "media-figure interactive-figure";
      const visualization = document.createElement("div");
      visualization.className = "fig-container embedded-figure";
      visualization.dataset.file = source;
      visualization.dataset.overflowShown = tokens.includes("clip") ? "false" : "true";
      if (tokens.includes("preload")) visualization.setAttribute("data-preload", "");
      if (tokens.includes("scrollable")) visualization.dataset.scrollable = "yes";
      if (tokens.includes("no-scroll")) visualization.dataset.scroll = "no";
      const height = tokens.find((token) => /^height-\d+$/.test(token));
      if (height) figure.style.height = `${height.split("-")[1]}px`;
      figure.append(visualization);
      if (image.title) {
        const caption = document.createElement("figcaption");
        caption.textContent = image.title;
        figure.append(caption);
      }
      replaceTarget.replaceWith(figure);
    });
  }

  function replaceStaticFigures(section) {
    section.querySelectorAll("img").forEach((image) => {
      image.src = image.dataset.src;
      const wrapper = image.parentElement;
      const replaceTarget = wrapper?.tagName === "P" && wrapper.children.length === 1 ? wrapper : image;
      const figure = document.createElement("figure");
      figure.className = "media-figure static-figure";
      figure.append(image);
      if (image.alt || image.title) {
        const caption = document.createElement("figcaption");
        caption.textContent = [image.alt, image.title].filter(Boolean).join(" — ");
        figure.append(caption);
      }
      replaceTarget.replaceWith(figure);
    });
  }

  // A static image that's itself an SVG file gets its markup inlined into the page in place of
  // its <img> — an <img src="....svg"> has no DOM for auto-animate to reach into, so none of
  // its internal shapes could ever be individually matched/animated across a transition the way
  // our own generated diagrams already are (see buildDiagramSvg). Inlining gives
  // autoAnimateMatcher real elements to match, by id where the file already has one (mirrored
  // onto data-id so the existing "[data-id]" pass picks it up for free) or by tag + geometry
  // otherwise (see the svg.static-figure-svg selector in autoAnimateMatcher) — while keeping
  // the exact same figure/caption layout `.static-figure img` already had (see the CSS rule for
  // svg.static-figure-svg, the equivalent of that img rule's object-fit: contain).
  //
  // This runs after buildSlide has already returned (fetch is inherently async, and nothing
  // here needs to block first render) — a transition that happens to fire before a given fetch
  // resolves just gets the plain <img> box-level FLIP it would have gotten anyway, same as any
  // ordinary image; every transition after that benefits from the richer, per-element match.
  function inlineStaticSvgs(section) {
    section.querySelectorAll(".static-figure img").forEach((img) => {
      const src = img.currentSrc || img.src;
      if (!/\.svg(?:[?#]|$)/i.test(src)) return;
      fetch(src)
        .then((response) => (response.ok ? response.text() : null))
        .then((text) => {
          if (!text || !img.isConnected) return;
          const svg = new DOMParser().parseFromString(text, "image/svg+xml").documentElement;
          if (!svg || svg.nodeName.toLowerCase() !== "svg" || svg.querySelector("parsererror")) return;
          svg.classList.add("static-figure-svg");
          if (!svg.getAttribute("viewBox")) {
            const w = parseFloat(svg.getAttribute("width"));
            const h = parseFloat(svg.getAttribute("height"));
            if (w > 0 && h > 0) svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
          }
          svg.removeAttribute("width");
          svg.removeAttribute("height");
          if (!svg.getAttribute("preserveAspectRatio")) svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          if (img.alt) svg.setAttribute("aria-label", img.alt);
          svg.dataset.id = `static-svg:${src}`;
          svg.querySelectorAll("[id]").forEach((el) => { el.dataset.id = el.id; });
          img.replaceWith(svg);
        })
        .catch(() => {}); // leave the <img> in place on any failure — still renders, just opaque to matching
    });
  }

  function replaceCallouts(section) {
    section.querySelectorAll("blockquote").forEach((quote) => {
      const match = calloutMatch(quote);
      if (!match) return;
      const className = match[1].toLowerCase();
      const defaultLabel = className[0].toUpperCase() + className.slice(1);
      const first = quote.firstElementChild;
      const label = document.createElement("p");
      label.className = "colorbox-label";
      label.textContent = match[2] || defaultLabel;
      first.innerHTML = first.innerHTML.replace(/^\s*\[![^\]]+\](?:\s+[^<]*)?\s*/i, "");
      if (!first.textContent.trim() && !first.children.length) first.remove();
      quote.className = `colorbox colorbox-${className}`;
      quote.setAttribute("role", "note");
      const title = label.textContent.trim();
      if (title) quote.setAttribute("data-id", title);
      quote.prepend(label);
    });
  }

  function replaceTextTreatments(section) {
    section.querySelectorAll("p").forEach((paragraph) => {
      const match = paragraph.textContent.trim().match(textPattern);
      if (!match) return;
      match[1].toLowerCase().split(/\s+/).forEach((keyword) => paragraph.classList.add(`text-${keyword}`));
      paragraph.innerHTML = paragraph.innerHTML.replace(textPattern, "");
    });
  }

  // A small Fletcher-inspired diagram language: `node` places labeled boxes on a coordinate
  // grid, `edge` connects two nodes by id with an optional routed path and arrowhead. See
  // README.md for the authoring syntax; this renders straight to SVG rather than HTML/CSS so
  // paths, corners, and arrowheads can be drawn precisely instead of approximated with flexbox.
  const diagramPalette = ["green", "gold", "blue", "magenta", "orange", "muted", "ink"];
  const DIAGRAM_COL = 240;
  const DIAGRAM_ROW = 170;
  const DIAGRAM_NODE_HEIGHT = 100;
  const DIAGRAM_NODE_PAD_X = 25;
  const DIAGRAM_NODE_CHAR_WIDTH = 25;
  const DIAGRAM_NODE_MIN_WIDTH = 100;
  // Tuned toward Typst's Fletcher package as an aesthetic reference: thinner, crisper strokes
  // and tighter corners than a soft/heavy diagram style, so lines read as precise and drafted
  // rather than sketched.
  const DIAGRAM_NODE_RADIUS = 9;
  const DIAGRAM_EDGE_CORNER_RADIUS = 15;
  const DIAGRAM_EDGE_STROKE = 2.5;
  const DIAGRAM_ARROW_GAP = 10;
  const DIAGRAM_FONT_SIZE = 40;
  const DIAGRAM_MARGIN = 70;
  // Inward padding applied when a label sits at a node's edge or corner (label-pos other
  // than "c") rather than dead-center, so the text clears the border instead of touching it.
  const DIAGRAM_LABEL_PAD = 22;
  const DIAGRAM_LABEL_POSITIONS = new Set(["c", "n", "ne", "e", "se", "s", "sw", "w", "nw"]);
  const DIAGRAM_SHAPES = new Set(["rect", "circle", "triangle"]);
  // Two parallel edges between the same node pair land this far apart. Has to comfortably
  // clear an arrowhead's own rendered width (see diagramArrowMarker) — at the source end a
  // bare offset line is visibly separated at almost any spacing, but at the target end two
  // arrowhead *glyphs* (not just the line endpoints they sit on, which really are offset
  // correctly) need enough room between their centers or they overlap into what reads as one
  // merged arrowhead even though the underlying paths never touch.
  const DIAGRAM_EDGE_OFFSET_SPACING = 32;
  // A "pipe" (=>) edge reads as a conduit feeding into its arrowhead: two parallel lines at
  // the normal edge stroke width, this far apart, rather than one line at double width.
  const DIAGRAM_PIPE_GAP = 7;
  const DIAGRAM_DASH_PATTERN = `1.5 ${DIAGRAM_EDGE_STROKE * 2.6}`;
  // `dominant-baseline: middle` alone doesn't land on the true visual center of the glyphs —
  // a well-known cross-renderer/font-metric quirk. Measured directly in a real browser against
  // the deck's actual EB Garamond webfont (comparing each label's Range-based ink bounding box
  // to its node's true center): with no correction the text sits ~0.14em high; dy: 0.15em
  // brings the residual error to ~0.001em, effectively exact. Font-metric-dependent, so this
  // is specific to EB Garamond — recheck it the same way if the diagram font ever changes.
  const DIAGRAM_TEXT_DY = "0.15em";

  // Every diagram's <svg> (including its <defs>) lives permanently in the DOM — Reveal only
  // toggles slides' visibility, it doesn't remove them — so marker ids that are only unique
  // *within* one diagram's own build (e.g. always starting over at "diagram-arrow-0") collide
  // with every other diagram on the page that also uses the default arrow color. `url(#id)`
  // resolution always picks the first matching element in the whole document, so once that
  // first diagram's slide falls outside Reveal's viewDistance and gets `display: none`, every
  // later diagram sharing its id silently loses its arrowhead — its own, correctly-defined
  // marker sits right there but is unreachable because the id is already taken. Counting
  // diagram instances across the whole deck keeps every diagram's ids globally unique.
  let diagramInstanceCount = 0;

  function svgEl(tag, attrs = {}) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  }

  function diagramColorValue(name) {
    if (!name) return null;
    return diagramPalette.includes(name.toLowerCase()) ? `var(--slide-${name.toLowerCase()})` : name;
  }

  // Resolves any CSS color value — a `var(--slide-*)` reference or an arbitrary raw color —
  // to a perceived-lightness fraction (0 = black, 1 = white), by actually letting the browser
  // resolve it rather than trying to parse/guess it ourselves: a throwaway, unrendered element
  // picks up the real cascaded value (custom properties and all) via getComputedStyle, which
  // display:none doesn't prevent for a plain inherited property like `color`. Memoized since a
  // diagram's few colors each tend to be reused across several nodes.
  const colorLightnessCache = new Map();
  function isColorDark(colorValue) {
    if (!colorLightnessCache.has(colorValue)) {
      const probe = document.createElement("span");
      probe.style.color = colorValue;
      probe.style.display = "none";
      document.documentElement.append(probe);
      const channels = getComputedStyle(probe).color.match(/[\d.]+/g)?.map(Number) || [255, 255, 255];
      probe.remove();
      const [r, g, b] = channels;
      colorLightnessCache.set(colorValue, (0.299 * r + 0.587 * g + 0.114 * b) / 255);
    }
    return colorLightnessCache.get(colorValue) < 0.5;
  }

  function parseInlineOptions(text) {
    const options = {};
    const pattern = /([\w-]+)=("(?:[^"\\]|\\.)*"|\S+)/g;
    let match;
    while ((match = pattern.exec(text))) {
      let value = match[2];
      if (value.startsWith('"')) value = value.slice(1, -1).replace(/\\"/g, '"');
      options[match[1]] = value;
    }
    return options;
  }

  // Each `arrow=` token maps to: which marker style (if any) sits at the start and/or end of
  // the line, whether the stroke is dashed (the two dotted variants), and whether it's drawn as
  // a "pipe" (a plain thicker stroke — the simplest reading of a bold, conduit-like connector,
  // rather than a literal double-ruled line). `start`/`end` reuse the exact same marker shapes
  // ("->", "o", ".") a single-ended arrow already supports; a marker built with
  // `orient="auto-start-reverse"` (see diagramArrowMarker) automatically points the right way
  // whether it's referenced by `marker-start` or `marker-end`, so `<->` just reuses one "->"
  // marker at both ends rather than needing its own mirrored shape.
  const diagramArrowTokens = {
    none: { start: null, end: null },
    "->": { start: null, end: "->" },
    o: { start: null, end: "o" },
    ".": { start: null, end: "." },
    "<->": { start: "->", end: "->" },
    "..": { start: null, end: null, dashed: true },
    "..>": { start: null, end: "->", dashed: true },
    "=>": { start: null, end: "->", pipe: true }
  };

  function parseEdgeTail(text) {
    const via = [];
    const viaPattern = /via\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/gi;
    let match;
    while ((match = viaPattern.exec(text))) via.push({ x: Number(match[1]), y: Number(match[2]) });
    const remainder = text.replace(viaPattern, " ");
    const options = parseInlineOptions(remainder);
    // `noarrow` is kept as a shorthand for `arrow=none`; an explicit `arrow=` always wins.
    const requested = options.arrow || (/\bnoarrow\b/i.test(remainder) ? "none" : "->");
    const style = diagramArrowTokens[requested] || diagramArrowTokens["->"];
    return {
      via,
      smooth: /\bsmooth\b/i.test(remainder),
      ...options,
      arrowStart: style.start,
      arrowEnd: style.end,
      dashed: !!style.dashed,
      pipe: !!style.pipe
    };
  }

  // Falls back to a shared default id when a diagram doesn't name itself; that's enough for
  // the common case of one diagram per auto-animate slide pair. A slide with more than one
  // diagram that needs to auto-animate should give each its own `diagram <name>` line so they
  // don't pair up with the wrong counterpart on the next slide.
  const DIAGRAM_DEFAULT_ID = "diagram";

  // Groups edges that connect the same two nodes via the exact same route (from, to, and via
  // points all identical) and spreads them into parallel lines automatically (see
  // diagramEdgePoints) — an offset relative to the group's own size/position — rather than
  // requiring the author to manually route each one with its own via points just to keep them
  // from drawing directly on top of each other. Also gives every edge a stable, unique key for
  // data-diagram-edge: the plain "a->b" form the auto-animate FLIP matcher already expects
  // stays unchanged for the (overwhelmingly common) single-edge case, and only gets a "#n"
  // suffix once two or more edges actually share the same from/to pair — without this, two such
  // edges would collide on the same key and one would silently stop being tracked for matching
  // across an auto-animate slide pair.
  function finalizeDiagramEdges(edges) {
    const pairGroups = new Map();
    edges.forEach((edge) => {
      const pairKey = `${edge.from}->${edge.to}`;
      (pairGroups.get(pairKey) || pairGroups.set(pairKey, []).get(pairKey)).push(edge);
    });
    pairGroups.forEach((group, pairKey) => {
      group.forEach((edge, i) => { edge.key = group.length > 1 ? `${pairKey}#${i}` : pairKey; });
    });

    const routeGroups = new Map();
    edges.forEach((edge) => {
      const routeKey = `${edge.from}|${edge.to}|${edge.via.map((p) => `${p.x},${p.y}`).join(";")}`;
      (routeGroups.get(routeKey) || routeGroups.set(routeKey, []).get(routeKey)).push(edge);
    });
    routeGroups.forEach((group) => {
      const count = group.length;
      group.forEach((edge, i) => { edge.offset = count > 1 ? i - (count - 1) / 2 : 0; });
    });
  }

  function parseDiagramSource(source) {
    const nodes = new Map();
    const edges = [];
    let id = DIAGRAM_DEFAULT_ID;
    source.split(/\r?\n/).forEach((rawLine) => {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) return;

      const diagramMatch = line.match(/^diagram\s+(\S+)\s*$/i);
      if (diagramMatch) {
        id = diagramMatch[1];
        return;
      }

      // The point, an optional `enclose (x2,y2)` second corner, and an optional quoted label
      // are all independently optional after the node id, so this is parsed in stages rather
      // than as one fixed-shape regex — each stage consumes its own piece of the line and
      // hands the rest on, rather than every combination needing its own alternative pattern.
      const nodeMatch = line.match(/^node\s+(\S+)\s+\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*(.*)$/i);
      if (nodeMatch) {
        const [, id, x, y, afterPoint] = nodeMatch;
        let rest = afterPoint;
        let enclose = null;
        const encloseMatch = rest.match(/^enclose\s*\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\s*(.*)$/i);
        if (encloseMatch) {
          enclose = { x2: Number(encloseMatch[1]), y2: Number(encloseMatch[2]) };
          rest = encloseMatch[3];
        }
        let label = "";
        const labelMatch = rest.match(/^"((?:[^"\\]|\\.)*)"\s*(.*)$/);
        if (labelMatch) {
          label = labelMatch[1].replace(/\\"/g, '"');
          rest = labelMatch[2];
        }
        const options = parseInlineOptions(rest);
        const requestedLabelPos = options["label-pos"]?.toLowerCase();
        nodes.set(id, {
          id,
          x: Number(x),
          y: Number(y),
          enclose,
          label,
          color: diagramColorValue(options.color),
          stroke: diagramColorValue(options.stroke),
          // `fill=none` leaves a node's interior transparent, for floating text (an axis label,
          // a caption inside a diagram) or a plain outline. Any other value paints that color and
          // is resolved like `color=`: a palette name, or a raw CSS color passed through.
          fill: options.fill
            ? (options.fill.toLowerCase() === "none" ? "none" : diagramColorValue(options.fill))
            : null,
          // `shape=rect|circle|triangle`. Left null, the shape is inferred as before: a node with
          // no label and no explicit size is a bare dot (circle), anything else is a rounded rect.
          shape: DIAGRAM_SHAPES.has((options.shape || "").toLowerCase())
            ? options.shape.toLowerCase()
            : null,
          noStroke: /\bnostroke\b/i.test(rest),
          width: options.w ? Number(options.w) * DIAGRAM_COL : null,
          height: options.h ? Number(options.h) * DIAGRAM_ROW : null,
          // Defaults to "n" (top-center) for an enclosure, which is naming a region other
          // nodes may sit inside rather than labeling a single box, and "c" (dead-center)
          // for every other node; an explicit label-pos always overrides either default.
          labelPos: DIAGRAM_LABEL_POSITIONS.has(requestedLabelPos) ? requestedLabelPos : null
        });
        return;
      }

      const edgeMatch = line.match(/^edge\s+(\S+)\s+(\S+)\s*(.*)$/i);
      if (edgeMatch) {
        const [, from, to, tail] = edgeMatch;
        const options = parseEdgeTail(tail);
        edges.push({
          from,
          to,
          via: options.via,
          smooth: options.smooth,
          arrowStart: options.arrowStart,
          arrowEnd: options.arrowEnd,
          dashed: options.dashed,
          pipe: options.pipe,
          color: diagramColorValue(options.color) || "var(--slide-muted)",
          label: options.label || null
        });
      }
    });
    finalizeDiagramEdges(edges);
    return { nodes, edges, id };
  }

  function layoutDiagramNodes(nodes) {
    nodes.forEach((node) => {
      // `enclose (x2,y2)` makes this node an area rather than a point: its two grid coordinates
      // are opposite corners (in either order), so the box is built from their min/max rather
      // than assuming the first is top-left.
      if (node.enclose) {
        const x1 = Math.min(node.x, node.enclose.x2);
        const x2 = Math.max(node.x, node.enclose.x2);
        const y1 = Math.min(node.y, node.enclose.y2);
        const y2 = Math.max(node.y, node.enclose.y2);
        node.cx = ((x1 + x2) / 2) * DIAGRAM_COL;
        node.cy = ((y1 + y2) / 2) * DIAGRAM_ROW;
        node.w = node.width || (x2 - x1) * DIAGRAM_COL;
        node.h = node.height || (y2 - y1) * DIAGRAM_ROW;
        return;
      }
      node.cx = node.x * DIAGRAM_COL;
      node.cy = node.y * DIAGRAM_ROW;
      // A node authored with no label and no explicit size renders as a plain circle — a
      // junction/anchor point rather than a labeled box — sized to match a standard node's
      // height so it reads as part of the same family rather than a stray dot.
      // An explicit `shape=` wins; otherwise fall back to the original inference.
      const bareDot = !node.label && !node.width && !node.height && !node.shape;
      node.isCircle = node.shape ? node.shape === "circle" : bareDot;
      node.isTriangle = node.shape === "triangle";
      if (node.isCircle) {
        node.w = node.width || DIAGRAM_NODE_HEIGHT;
        node.h = node.height || node.w;
        // A "no content" node reads as a plain dot, not a labeled box, so it defaults to a
        // solid ink-filled circle with no border instead of the pale-tinted, gray-bordered
        // look a box gets — cleaner and more legible as a bare point (see the Gestalt
        // proximity/connectedness-style diagrams this is for). An explicit color=, stroke=,
        // or nostroke on the node always wins over this default.
        if (bareDot && !node.color && !node.stroke && !node.noStroke) {
          node.color = "var(--slide-ink)";
          node.noStroke = true;
        }
      } else {
        node.w = node.width || Math.max(DIAGRAM_NODE_MIN_WIDTH, node.label.length * DIAGRAM_NODE_CHAR_WIDTH + DIAGRAM_NODE_PAD_X * 2);
        node.h = node.height || DIAGRAM_NODE_HEIGHT;
      }
    });
  }

  // Where a ray from a rectangle's center toward (targetX, targetY) crosses its border —
  // used to stop edges at a node's edge instead of drawing into/through its label.
  function clipToRect(cx, cy, halfW, halfH, targetX, targetY) {
    const dx = targetX - cx;
    const dy = targetY - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    const scale = Math.min(dx ? Math.abs(halfW / dx) : Infinity, dy ? Math.abs(halfH / dy) : Infinity);
    return { x: cx + dx * scale, y: cy + dy * scale };
  }

  // Same idea as clipToRect, for a circular node — where a ray from the center toward
  // (targetX, targetY) crosses the circle's edge.
  function clipToCircle(cx, cy, r, targetX, targetY) {
    const dx = targetX - cx;
    const dy = targetY - cy;
    const dist = Math.hypot(dx, dy) || 1;
    return { x: cx + (dx / dist) * r, y: cy + (dy / dist) * r };
  }

  function clipToNode(node, targetX, targetY) {
    return node.isCircle
      ? clipToCircle(node.cx, node.cy, node.w / 2, targetX, targetY)
      : clipToRect(node.cx, node.cy, node.w / 2, node.h / 2, targetX, targetY);
  }

  // Pulls `to` back toward `from` by `gap` along their connecting line — used to stop an edge
  // short of an arrowhead's node so the marker doesn't visually touch/overlap the border.
  function pullBack(from, to, gap) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.hypot(dx, dy) || 1;
    return { x: to.x - (dx / length) * gap, y: to.y - (dy / length) * gap };
  }

  function diagramEdgePoints(edge, nodes) {
    const from = nodes.get(edge.from);
    const to = nodes.get(edge.to);
    if (!from || !to) return null;
    const via = edge.via.map((point) => ({ x: point.x * DIAGRAM_COL, y: point.y * DIAGRAM_ROW }));
    const firstTarget = via[0] || { x: to.cx, y: to.cy };
    const lastSource = via.at(-1) || { x: from.cx, y: from.cy };
    const start = clipToNode(from, firstTarget.x, firstTarget.y);
    const end = clipToNode(to, lastSource.x, lastSource.y);

    let points = [start, ...via, end];

    // Multiple edges that connect the exact same two nodes via the exact same route (see
    // finalizeDiagramEdges) get spread into parallel lines automatically: shift every point of
    // this edge's own route perpendicular to the overall from->to direction, by an amount that
    // depends only on this edge's position within that group — so two such edges land evenly on
    // either side of the shared route, three land left/center/right, and so on.
    if (edge.offset) {
      const dx = to.cx - from.cx;
      const dy = to.cy - from.cy;
      const length = Math.hypot(dx, dy) || 1;
      const px = -dy / length;
      const py = dx / length;
      const shift = edge.offset * DIAGRAM_EDGE_OFFSET_SPACING;
      points = points.map((p) => ({ x: p.x + px * shift, y: p.y + py * shift }));
    }

    // Only the ends that actually have a marker get pulled back — an edge with no arrowhead at
    // one end should still run flush to that node's border.
    if (edge.arrowEnd) points[points.length - 1] = pullBack(points.at(-2), points.at(-1), DIAGRAM_ARROW_GAP);
    if (edge.arrowStart) points[0] = pullBack(points[1], points[0], DIAGRAM_ARROW_GAP);
    return points;
  }

  // One of a pipe edge's two parallel lines: every point shifted `half` to one side of the
  // overall from->to direction (the same single, route-wide perpendicular this reuses from the
  // multi-edge auto-offset above — exact for a straight route, a good approximation for a
  // gently-routed one), except at whichever end(s) already carry an arrowhead. Those ends are
  // left at the route's own unshifted point instead, so this line and its mirror (half negated)
  // don't draw two separate marker-width gaps side by side — they taper back together over
  // their last segment and meet exactly at the single shared arrowhead.
  // How far an arrowhead reaches back from its tip, in user units: the marker's wings trail to
  // x=7.4 in a 0..12 viewBox whose refX (the tip) is 11, and markerUnits defaults to strokeWidth,
  // so the viewBox scales by markerWidth/12 * stroke-width. Pipe rails stop here rather than
  // running on to the tip, so the arrowhead caps them instead of being speared by them.
  const DIAGRAM_ARROW_DEPTH = (11 - 7.4) * (15.6 / 12) * DIAGRAM_EDGE_STROKE;

  // One rail of a `=>` pipe: the whole route pushed `half` to one side. Offsetting every vertex
  // — including the ends — is what keeps the two rails parallel for their entire length, the way
  // Fletcher's double-ruled edges are. Interior vertices are offset along the *miter* (the
  // bisector of the two adjoining normals, lengthened by 1/cos of the half-angle) rather than
  // along either segment's own normal, so the perpendicular gap between the rails stays exactly
  // DIAGRAM_PIPE_GAP around a corner instead of pinching on the inside of the turn.
  function pipeLinePoints(points, half, edge) {
    const unit = (a, b) => {
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      return { x: dx / len, y: dy / len };
    };
    const normalOf = (d) => ({ x: -d.y, y: d.x });

    const dirs = points.slice(0, -1).map((p, i) => unit(p, points[i + 1]));

    const offset = points.map((p, i) => {
      const dIn = dirs[i - 1];
      const dOut = dirs[i];
      if (!dIn || !dOut) {
        const n = normalOf(dIn || dOut);
        return { x: p.x + n.x * half, y: p.y + n.y * half };
      }
      const nIn = normalOf(dIn);
      const nOut = normalOf(dOut);
      let mx = nIn.x + nOut.x;
      let my = nIn.y + nOut.y;
      const mLen = Math.hypot(mx, my);
      // A perfect reversal (the two segments doubling back) has no usable bisector.
      if (mLen < 1e-6) return { x: p.x + nIn.x * half, y: p.y + nIn.y * half };
      mx /= mLen;
      my /= mLen;
      // 1/cos(theta/2), capped so a very sharp corner does not fling the rail far outward.
      const scale = Math.min(1 / Math.max(mx * nIn.x + my * nIn.y, 1e-3), 4);
      return { x: p.x + mx * half * scale, y: p.y + my * half * scale };
    });

    // Pull each end back to the arrowhead's base so the rails meet the wings rather than the tip.
    const trim = (endIndex, neighbourIndex) => {
      const end = offset[endIndex];
      const d = unit(offset[neighbourIndex], end);
      const span = Math.hypot(end.x - offset[neighbourIndex].x, end.y - offset[neighbourIndex].y);
      const back = Math.min(DIAGRAM_ARROW_DEPTH, span * 0.9);
      offset[endIndex] = { x: end.x - d.x * back, y: end.y - d.y * back };
    };
    if (edge.arrowEnd && offset.length >= 2) trim(offset.length - 1, offset.length - 2);
    if (edge.arrowStart && offset.length >= 2) trim(0, 1);

    return offset;
  }


  // A straight polyline through `points`, with interior corners rounded to `radius` by
  // trimming each corner and bridging the gap with a quadratic curve — a common technique
  // for orthogonal ("elbow") connectors that keeps the routing exact but the joints soft.
  function roundedPolylinePath(points, radius) {
    if (points.length <= 2) return `M ${points[0].x},${points[0].y} L ${points.at(-1).x},${points.at(-1).y}`;
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length - 1; i++) {
      const prev = points[i - 1];
      const corner = points[i];
      const next = points[i + 1];
      const inLength = Math.hypot(corner.x - prev.x, corner.y - prev.y);
      const outLength = Math.hypot(next.x - corner.x, next.y - corner.y);
      const r = Math.min(radius, inLength / 2, outLength / 2);
      const before = {
        x: corner.x + (prev.x - corner.x) * (r / (inLength || 1)),
        y: corner.y + (prev.y - corner.y) * (r / (inLength || 1))
      };
      const after = {
        x: corner.x + (next.x - corner.x) * (r / (outLength || 1)),
        y: corner.y + (next.y - corner.y) * (r / (outLength || 1))
      };
      d += ` L ${before.x},${before.y} Q ${corner.x},${corner.y} ${after.x},${after.y}`;
    }
    const last = points.at(-1);
    d += ` L ${last.x},${last.y}`;
    return d;
  }

  // A smooth curve through every point (source, any via points, target) using the standard
  // Catmull-Rom-to-cubic-Bezier conversion, for diagrams that want a flowing line rather than
  // a right-angle connector.
  function smoothPath(points) {
    if (points.length <= 2) return `M ${points[0].x},${points[0].y} L ${points.at(-1).x},${points.at(-1).y}`;
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
      const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
      d += ` C ${c1.x},${c1.y} ${c2.x},${c2.y} ${p2.x},${p2.y}`;
    }
    return d;
  }

  function diagramLabelPosition(points) {
    const mid = (points.length - 1) / 2;
    const a = points[Math.floor(mid)];
    const b = points[Math.ceil(mid)];
    const x = (a.x + b.x) / 2;
    const y = (a.y + b.y) / 2;
    const length = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const offset = 22;
    return { x: x - ((b.y - a.y) / length) * offset, y: y - ((a.x - b.x) / length) * offset };
  }

  // Where a node's label sits, for each of the nine label-pos values: "c" (the default for
  // a plain node) is dead-center; the eight compass points sit inset from that edge/corner of
  // the node's own box by DIAGRAM_LABEL_PAD, with text-anchor and dominant-baseline chosen so
  // the text grows back in *toward* the node's center rather than out past its border (e.g.
  // "e" sits at the right inset with text-anchor "end", so the string's last character lands
  // at that inset point and the rest extends leftward, into the box).
  // dy nudges each baseline the same way DIAGRAM_TEXT_DY already does for a bare middle-anchored
  // label — see that constant's comment for why "middle" needs a correction the others don't.
  function diagramLabelAnchor(node) {
    const pos = node.labelPos || (node.enclose ? "n" : "c");
    const hw = node.w / 2;
    const hh = node.h / 2;
    const west = pos.includes("w");
    const east = pos.includes("e");
    const north = pos.startsWith("n");
    const south = pos.startsWith("s");
    const x = west ? node.cx - hw + DIAGRAM_LABEL_PAD : east ? node.cx + hw - DIAGRAM_LABEL_PAD : node.cx;
    const y = north ? node.cy - hh + DIAGRAM_LABEL_PAD : south ? node.cy + hh - DIAGRAM_LABEL_PAD : node.cy;
    const textAnchor = west ? "start" : east ? "end" : "middle";
    const dominantBaseline = north ? "hanging" : south ? "auto" : "middle";
    const dy = dominantBaseline === "middle" ? DIAGRAM_TEXT_DY : "0";
    return { x, y, textAnchor, dominantBaseline, dy };
  }

  // Builds a <marker> for one of the four supported arrowhead styles: no marker is ever
  // requested for "none" (the caller skips it entirely), so this only needs to draw the
  // other three onto a shared 0-12 viewBox with the tip/center anchored at (11,6).
  //
  // markerWidth/markerHeight are in strokeWidth units (SVG's default markerUnits), i.e. the
  // marker's actual rendered size is this times the referencing edge's own stroke-width — so
  // halving DIAGRAM_EDGE_STROKE would, on its own, also halve every arrowhead, which is the
  // opposite of "make them 20% bigger". 15.6 is chosen to cancel that out and then apply the
  // intended increase on top: 6.5 (the old size, back when DIAGRAM_EDGE_STROKE was 3.5) × 2
  // (to offset the stroke now being half as wide) × 1.2 (the actual size increase) = 15.6.
  function diagramArrowMarker(id, style, color) {
    const marker = svgEl("marker", {
      id, viewBox: "0 0 12 12", refX: 11, refY: 6, markerWidth: 15.6, markerHeight: 15.6, orient: "auto-start-reverse"
    });
    if (style === "o") {
      marker.append(svgEl("circle", { cx: 11, cy: 6, r: 2.8, fill: "none", stroke: color, "stroke-width": 1.4 }));
    } else if (style === ".") {
      marker.append(svgEl("circle", { cx: 11, cy: 6, r: 2.8, fill: color }));
    } else {
      // The default "->", matched against Typst Fletcher's own arrowhead geometry (see
      // reference/fletcher.svg: two cubic-Bezier wings from a shared tip, each bowing outward
      // — away from the shaft's centerline — before sweeping back to its trailing corner,
      // rather than a straight chevron or a curve that scoops inward). Fletcher draws each
      // wing as its own path (so its round line-cap sits right at the tip); this keeps the
      // identical curve geometry but traces both wings as one path through the tip instead,
      // so the direction change there gets a miter join — the same crisp point Fletcher's
      // thin, low-DPI-friendly strokes get away with with a round cap, but reliable at this
      // stroke weight. stroke-miterlimit 4 is Fletcher's own value for this join.
      marker.append(svgEl("path", {
        d: "M 7.4,1.48 C 7.82,3.47 9.15,5.15 11,6 C 9.15,6.85 7.82,8.53 7.4,10.52",
        fill: "none",
        stroke: color,
        "stroke-width": 1.0,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 4
      }));
    }
    return marker;
  }

  function buildDiagramSvg(source) {
    const { nodes, edges, id } = parseDiagramSource(source);
    layoutDiagramNodes(nodes);

    const instanceId = diagramInstanceCount++;
    const markerIds = new Map();
    const defs = svgEl("defs");
    // An enclosure is typically drawn around other nodes, so its own (filled) box has to paint
    // behind everything else — edges included — or it covers any edge routed between nodes it
    // contains. Regular nodes stay in front of edges as before (their fill only ever needs to
    // cover an edge's clipped-short endpoint, never a whole edge crossing through it).
    const enclosureGroup = svgEl("g", { class: "diagram-enclosures" });
    const edgeGroup = svgEl("g", { class: "diagram-edges" });
    const nodeGroup = svgEl("g", { class: "diagram-nodes" });

    // Building a marker on first use and reusing it by (style, color) — same as before — now
    // just needs to be callable for either end of an edge, since a bidirectional edge (<->)
    // wants the same style at both ends. A marker built with orient="auto-start-reverse" (see
    // diagramArrowMarker) automatically points the right way whether it's referenced by
    // marker-start or marker-end, so one marker element serves both.
    function markerFor(style, color) {
      const markerKey = `${style}:${color}`;
      if (!markerIds.has(markerKey)) {
        const markerId = `diagram-${instanceId}-arrow-${markerIds.size}`;
        markerIds.set(markerKey, markerId);
        defs.append(diagramArrowMarker(markerId, style, color));
      }
      return markerIds.get(markerKey);
    }

    // Builds one rendered edge line: a plain <path> through `linePoints`, with the "key"
    // suffix keeping a pipe edge's two lines independently trackable for auto-animate FLIP
    // matching (see matchDiagramElements) instead of colliding on one data-diagram-edge value.
    // The raw route also rides along as data-diagram-edge-route: a `d` string only animates
    // smoothly across an auto-animate pair when both sides parse to the same sequence of path
    // commands (same point count — see animateDiagramTransition), which breaks the moment a via
    // point is added/removed/routed differently; the raw points let that case fall back to a
    // manual point-by-point tween instead of the CSS `d` transition silently no-op'ing.
    function buildEdgeLine(edge, linePoints, keySuffix, withMarkers) {
      const d = edge.smooth ? smoothPath(linePoints) : roundedPolylinePath(linePoints, DIAGRAM_EDGE_CORNER_RADIUS);
      const path = svgEl("path", {
        d,
        fill: "none",
        stroke: edge.color,
        "stroke-width": DIAGRAM_EDGE_STROKE,
        "stroke-linecap": "round",
        "data-diagram-edge": edge.key + keySuffix,
        "data-diagram-edge-route": linePoints.map((p) => `${p.x},${p.y}`).join(" ")
      });
      if (edge.dashed) path.setAttribute("stroke-dasharray", DIAGRAM_DASH_PATTERN);
      if (withMarkers) {
        if (edge.arrowEnd) path.setAttribute("marker-end", `url(#${markerFor(edge.arrowEnd, edge.color)})`);
        if (edge.arrowStart) path.setAttribute("marker-start", `url(#${markerFor(edge.arrowStart, edge.color)})`);
      }
      return path;
    }

    // The arrowhead of a `=>` pipe rides a hairline stub on the route's own centerline, so it
    // sits centered between the two rails instead of on one of them. The stub is one unit long
    // purely so the marker has a direction to orient to; it is never painted.
    function pipeMarkerStub(points, edge) {
      const a = points.at(-2), b = points.at(-1);
      const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      const sx = b.x - (b.x - a.x) / len, sy = b.y - (b.y - a.y) / len;
      const path = svgEl("path", {
        d: `M ${sx},${sy} L ${b.x},${b.y}`,
        fill: "none",
        stroke: "none",
        // markerUnits defaults to strokeWidth, so the marker is scaled by this even though the
        // stub itself is never painted. Without it the width falls back to 1 and the arrowhead
        // renders at well under half size.
        "stroke-width": DIAGRAM_EDGE_STROKE,
        "data-diagram-edge": edge.key + "~m"
      });
      if (edge.arrowEnd) path.setAttribute("marker-end", `url(#${markerFor(edge.arrowEnd, edge.color)})`);
      if (edge.arrowStart) path.setAttribute("marker-start", `url(#${markerFor(edge.arrowStart, edge.color)})`);
      return path;
    }

    const edgePointSets = [];
    edges.forEach((edge) => {
      const points = diagramEdgePoints(edge, nodes);
      if (!points) return;
      edgePointSets.push(points);
      if (edge.pipe) {
        // Two rails, parallel for their whole length (see pipeLinePoints), with the single
        // arrowhead carried on a centerline stub so it stays centered between them.
        const half = DIAGRAM_PIPE_GAP / 2;
        edgeGroup.append(buildEdgeLine(edge, pipeLinePoints(points, half, edge), "~a", false));
        edgeGroup.append(buildEdgeLine(edge, pipeLinePoints(points, -half, edge), "~b", false));
        if (edge.arrowEnd || edge.arrowStart) edgeGroup.append(pipeMarkerStub(points, edge));
      } else {
        edgeGroup.append(buildEdgeLine(edge, points, "", true));
      }
      if (edge.label) {
        const { x, y } = diagramLabelPosition(points);
        const text = svgEl("text", {
          x, y, dy: DIAGRAM_TEXT_DY, fill: edge.color, "font-style": "italic", "font-size": DIAGRAM_FONT_SIZE * 0.62,
          "text-anchor": "middle", "dominant-baseline": "middle",
          "data-diagram-edge-label": edge.key
        });
        text.textContent = edge.label;
        edgeGroup.append(text);
      }
    });

    nodes.forEach((node) => {
      const group = svgEl("g", { class: "diagram-node", "data-diagram-node": node.id });
      if (node.color) group.style.setProperty("--box-color", node.color);
      // A no-border node has no stroke to carry its color, so the usual light 8% tint — meant
      // to read as a soft highlight next to a solid stroke — would leave it nearly invisible.
      // Paint it with the color at full strength instead (what a stroke would normally use)
      // whenever there's no border to do that job.
      // An explicit `fill=` always wins. Otherwise: a no-border node has no stroke to carry its
      // color, so the usual light 8% tint — meant to read as a soft highlight next to a solid
      // stroke — would leave it nearly invisible; paint it with the color at full strength
      // instead (what a stroke would normally use) whenever there's no border to do that job.
      const paintedFill = node.fill !== null
        ? node.fill
        : (node.color && node.noStroke ? node.color : null);
      // Label contrast only has to fight a background that something actually painted, so
      // `fill=none` is explicitly not "solid" here even though it is an explicit fill.
      const solidFill = paintedFill !== null && paintedFill !== "none";
      const fill = paintedFill !== null
        ? paintedFill
        : "var(--diagram-node-fill, color-mix(in srgb, var(--box-color, var(--slide-muted)) 8%, var(--slide-background)))";
      const stroke = node.noStroke ? "none" : (node.stroke || "var(--slide-muted)");
      if (node.isCircle) {
        group.append(svgEl("circle", {
          cx: node.cx, cy: node.cy, r: node.w / 2,
          fill, stroke, "stroke-width": DIAGRAM_EDGE_STROKE
        }));
      } else if (node.isTriangle) {
        const hw = node.w / 2, hh = node.h / 2;
        group.append(svgEl("polygon", {
          points: `${node.cx},${node.cy - hh} ${node.cx + hw},${node.cy + hh} ${node.cx - hw},${node.cy + hh}`,
          fill, stroke, "stroke-width": DIAGRAM_EDGE_STROKE
        }));
      } else {
        group.append(svgEl("rect", {
          x: node.cx - node.w / 2,
          y: node.cy - node.h / 2,
          width: node.w,
          height: node.h,
          rx: DIAGRAM_NODE_RADIUS,
          fill, stroke, "stroke-width": DIAGRAM_EDGE_STROKE
        }));
      }
      // A plain node with no label at all (see layoutDiagramNodes) renders as a bare circle
      // with no text; every other node places its label per diagramLabelAnchor (label-pos).
      if (node.label) {
        const anchor = diagramLabelAnchor(node);
        const text = svgEl("text", {
          x: anchor.x,
          y: anchor.y,
          dy: anchor.dy,
          // Colored text over a light tint (the normal case) always has plenty of contrast, so
          // it stays the node's own accent color there. Over a solid fill (see `solidFill`
          // above) that same accent color would be the text's own background too — fall back
          // to whichever of white/ink actually contrasts against it instead.
          // `color=none` is an existing idiom for an invisible shape (see perception.md's spacer
          // and border nodes); it must not become invisible *text* on a node that has a label.
          fill: solidFill
            ? (isColorDark(paintedFill) ? "#fff" : "var(--slide-ink)")
            : (node.color && node.color !== "none" ? node.color : "var(--slide-ink)"),
          "font-style": "italic",
          "font-size": DIAGRAM_FONT_SIZE,
          "text-anchor": anchor.textAnchor,
          "dominant-baseline": anchor.dominantBaseline
        });
        text.textContent = node.label;
        group.append(text);
      }
      (node.enclose ? enclosureGroup : nodeGroup).append(group);
    });

    const xs = [...nodes.values()].flatMap((n) => [n.cx - n.w / 2, n.cx + n.w / 2]);
    const ys = [...nodes.values()].flatMap((n) => [n.cy - n.h / 2, n.cy + n.h / 2]);
    edgePointSets.forEach((points) => points.forEach((p) => { xs.push(p.x); ys.push(p.y); }));
    const minX = Math.min(...xs) - DIAGRAM_MARGIN;
    const minY = Math.min(...ys) - DIAGRAM_MARGIN;
    const width = Math.max(...xs) - minX + DIAGRAM_MARGIN;
    const height = Math.max(...ys) - minY + DIAGRAM_MARGIN;

    const svg = svgEl("svg", {
      class: "simple-diagram",
      "data-id": id,
      viewBox: `${minX} ${minY} ${width} ${height}`,
      preserveAspectRatio: "xMidYMid meet"
    });
    svg.append(defs, enclosureGroup, edgeGroup, nodeGroup);
    return svg;
  }

  function replaceDiagrams(section) {
    section.querySelectorAll("code.language-diagram").forEach((code) => {
      const svg = buildDiagramSvg(code.textContent);
      const pre = code.closest("pre");
      // "diagram" isn't a Rouge lexer, so Kramdown never wraps it in a .highlighter-rouge div —
      // an IAL right under the fence (`{: data-id="..." }`) lands directly on this <pre>, same
      // as it would on a real Rouge wrapper for a code block (see replaceCodeBlocks). Without
      // this, that data-id was silently discarded along with the rest of the <pre> being
      // replaced, so it could never override the default/`diagram <name>` id.
      if (pre?.dataset.id) svg.setAttribute("data-id", pre.dataset.id);
      const highlighter = pre?.parentElement?.classList.contains("highlighter-rouge") ? pre.parentElement : pre;
      highlighter.replaceWith(svg);
    });
  }

  function replaceCodeBlocks(section) {
    section.querySelectorAll("pre code").forEach((code) => {
      if (code.classList.contains("language-diagram")) return;
      const pre = code.closest("pre");
      const wrapper = pre.closest(".highlighter-rouge");
      const match = (wrapper?.className || code.className).match(/language-(\S+)/);
      code.textContent = code.textContent; // drop Kramdown/Rouge's inline highlight spans; RevealHighlight re-tokenizes the plain text
      code.className = match ? `language-${match[1]}` : "";
      // The highlight plugin reads data-trim/data-line-numbers off the <code> element itself
      // (it walks "pre code"), not the <pre> — setting them on <pre> is silently ignored.
      code.setAttribute("data-trim", "");
      code.setAttribute("data-line-numbers", "");
      pre.removeAttribute("class");
      // Reveal's default `pre` auto-animate match requires identical text, so a code block
      // that gains or loses a line won't match its previous slide on its own. A `data-id`
      // (e.g. via Kramdown's `{: data-id="..." }` right after the fence, which lands on this
      // Rouge wrapper) opts it back in and unlocks per-line diffing between the two versions.
      if (wrapper?.dataset.id) pre.setAttribute("data-id", wrapper.dataset.id);
      if (wrapper) wrapper.replaceWith(pre);
    });
  }

  function makeFooter(note, course, page, total) {
    const footer = document.createElement("footer");
    footer.className = "slide-footer";
    const courseLabel = document.createElement("span");
    courseLabel.className = "slide-course";
    courseLabel.textContent = course || "";
    footer.append(courseLabel);
    if (note) footer.append(note);
    const folio = document.createElement("span");
    folio.className = "slide-folio";
    folio.textContent = `${page} / ${total}`;
    footer.append(folio);
    return footer;
  }

  function buildSlide(nodes, options) {
    const section = document.createElement("section");
    const frame = document.createElement("div");
    frame.className = "slide-frame";
    const presenterNotes = extractPresenterNotes(nodes);
    extractAutoAnimate(nodes); // no longer gates the attribute below; kept so a stray `[!auto-animate]` still gets stripped rather than showing up as visible text
    const note = extractFooter(nodes);
    const header = extractHeader(nodes);
    // Every slide participates in Auto-Animate by default now — see installDiagramAutoAnimate
    // for how an unrelated slide pair (nothing matched) still ends up an instant cut rather
    // than a fade, and how genuinely new content still fades in instead of just popping in.
    section.setAttribute("data-auto-animate", "");
    if (header) {
      const level = header.firstElementChild.tagName;
      if (level === "H1") section.classList.add("is-title-slide");
      if (level === "H2") section.classList.add("is-section-slide");
      frame.append(header);
    }
    frame.append(makeContent(nodes));
    frame.append(makeFooter(note, options.course, options.page, options.total));
    section.append(frame);
    if (presenterNotes) section.append(presenterNotes);

    replaceActions(section);
    replaceEmbeds(section);
    replaceStaticFigures(section);
    inlineStaticSvgs(section);
    replaceCallouts(section);
    replaceTextTreatments(section);
    replaceDiagrams(section);
    replaceCodeBlocks(section);
    section.querySelectorAll('a[href^="http"]').forEach((link) => {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
    return section;
  }

  function applyTheme(design = defaultDesign) {
    Object.entries(themeVariables).forEach(([key, variable]) => {
      if (design[key]) document.documentElement.style.setProperty(variable, design[key]);
    });
  }

  function installFigureBackgroundSync(baseUrl) {
    if (document.documentElement.dataset.figureBackgroundSync) return;
    document.documentElement.dataset.figureBackgroundSync = "true";
    document.addEventListener("load", (event) => {
      const iframe = event.target;
      if (iframe?.tagName !== "IFRAME" || !iframe.closest(".embedded-figure")) return;

      const rootStyle = getComputedStyle(document.documentElement);
      const paper = rootStyle.getPropertyValue("--slide-background").trim();
      iframe.style.backgroundColor = paper;
      try {
        const frameWindow = iframe.contentWindow;
        const frameDocument = iframe.contentDocument;
        const transparent = (color) => color === "transparent" || color === "rgba(0, 0, 0, 0)";
        const htmlBackground = frameWindow.getComputedStyle(frameDocument.documentElement).backgroundColor;
        const bodyBackground = frameDocument.body
          ? frameWindow.getComputedStyle(frameDocument.body).backgroundColor
          : "transparent";
        // deck.css is the single source of truth for how things like `.fig-controls` should
        // look — rather than maintaining a second, parallel stylesheet, a figure page just uses
        // that class and gets deck.css itself injected here, the same way the theme variables
        // and svg default below are. deck.css's own rules are scoped under `.reveal`/`.slide-*`
        // (or are bare `:root` custom-property defaults), so this is inert for anything in the
        // figure that doesn't opt in with one of those classes.
        if (!frameDocument.head?.querySelector("link[data-deck-figure-defaults]")) {
          const link = frameDocument.createElement("link");
          link.rel = "stylesheet";
          link.dataset.deckFigureDefaults = "true";
          link.href = `${baseUrl}/reveal/assets/css/deck.css`;
          frameDocument.head?.append(link);
        }
        // Every deck theme variable, not just background — a figure page that styles its own
        // `.fig-controls` with `var(--slide-ink, ...)` etc. should still pick up a deck's custom
        // `design:` palette from front matter, the same way the deck's own chrome does, rather
        // than only ever matching the defaults deck.css's `:root` rule falls back to.
        Object.values(themeVariables).forEach((variable) => {
          const value = rootStyle.getPropertyValue(variable).trim();
          if (value) frameDocument.documentElement.style.setProperty(variable, value);
        });
        if (transparent(htmlBackground) && transparent(bodyBackground)) {
          frameDocument.documentElement.style.backgroundColor = paper;
        }
        if (iframe.closest(".embedded-figure").dataset.overflowShown !== "false") {
          const style = frameDocument.createElement("style");
          style.dataset.deckFigureDefaults = "true";
          style.textContent = "svg { overflow: visible !important; }";
          frameDocument.head?.append(style);
        }
      } catch (_) {
        // Cross-origin documents cannot be restyled; the iframe canvas still matches.
      }
    }, true);
  }

  // Reveal's default auto-animate matcher gives real <h1>-<h6>/<p>/<li> elements `scale: false`,
  // so their text resizes via a `font-size` transition instead of a CSS `transform: scale(...)`.
  // Our heading titles carry their auto-animate `data-id` on an inner <span> rather than the
  // heading tag itself (see extractHeader — needed so the id can match across heading levels),
  // so Reveal's own check for that special case never matches them: it looks at the matched
  // element's own tag, and a <span> is never "h1, h2, ... li". Left alone, a heading whose level
  // changes gets BOTH a font-size transition AND a transform: scale() computed from the same
  // size difference, compounding into a text size that briefly overshoots past either end size.
  // This reimplements Reveal's default matcher (verbatim from reveal.js/dist/reveal.js's
  // AutoAnimate.getAutoAnimatePairs/findAutoAnimateMatches) and extends that one special case to
  // cover our heading-title span too, leaving every other match (colorboxes, code blocks, images,
  // manually data-id'd elements) behaved exactly as Reveal's built-in matcher would.
  const autoAnimateHeadingSelector = "h1, h2, h3, h4, h5, h6, p, li";

  function findAutoAnimateMatches(pairs, fromRoot, toRoot, selector, keyOf, options) {
    const fromByKey = {};
    const toByKey = {};
    Array.from(fromRoot.querySelectorAll(selector)).forEach((el) => {
      const key = keyOf(el);
      if (typeof key === "string" && key.length) (fromByKey[key] ||= []).push(el);
    });
    Array.from(toRoot.querySelectorAll(selector)).forEach((el) => {
      const key = keyOf(el);
      (toByKey[key] ||= []).push(el);
      const matches = fromByKey[key];
      if (!matches) return;
      const toIndex = toByKey[key].length - 1;
      const fromIndex = matches.length - 1;
      let from;
      if (matches[toIndex]) { from = matches[toIndex]; matches[toIndex] = null; }
      else if (matches[fromIndex]) { from = matches[fromIndex]; matches[fromIndex] = null; }
      if (from) pairs.push({ from, to: el, options });
    });
  }

  function isHeadingTitleSpan(el) {
    return el.tagName === "SPAN" && el.hasAttribute("data-id") && !!el.parentElement && isHeading(el.parentElement);
  }

  // Best-effort identity for a shape inside an inlined external SVG (see inlineStaticSvgs) that
  // wasn't already given a data-id there — i.e. the original file named it. We don't control
  // that file's structure, so this can't rely on anything as stable as our own diagrams' node
  // ids: text content for a label, otherwise whichever geometry attributes the tag actually
  // has (a <path>'s `d`, a <circle>'s cx/cy/r, and so on) concatenated into one signature. Two
  // shapes only match if both their tag and this signature are identical, so a shape that
  // moves or resizes between two slides — the whole point of matching it — still won't match
  // itself; only an unrelated later shape happening to share the same tag and geometry could
  // (accepted as a rare, low-stakes false positive, same tradeoff the heading/pre matchers
  // below already make by keying on exact text alone).
  function svgShapeSignature(el) {
    const text = (el.tagName === "text" || el.tagName === "tspan") && el.textContent.trim();
    if (text) return text;
    const geometryAttrs = ["d", "points", "cx", "cy", "r", "rx", "ry", "x", "y", "x1", "y1", "x2", "y2", "width", "height"];
    return geometryAttrs.map((name) => el.getAttribute(name)).filter(Boolean).join("|");
  }

  function getLocalBoundingBox(el) {
    const scale = Reveal.getScale();
    return {
      x: Math.round(el.offsetLeft * scale * 100) / 100,
      y: Math.round(el.offsetTop * scale * 100) / 100,
      width: Math.round(el.offsetWidth * scale * 100) / 100,
      height: Math.round(el.offsetHeight * scale * 100) / 100
    };
  }

  function autoAnimateMatcher(from, to) {
    const pairs = [];
    findAutoAnimateMatches(pairs, from, to, "[data-id]", (el) => `${el.nodeName}:::${el.getAttribute("data-id")}`);
    findAutoAnimateMatches(pairs, from, to, autoAnimateHeadingSelector, (el) => `${el.nodeName}:::${el.innerText}`);
    findAutoAnimateMatches(pairs, from, to, "img, video, iframe", (el) => `${el.nodeName}:::${el.getAttribute("src") || el.getAttribute("data-src")}`);
    findAutoAnimateMatches(pairs, from, to, "pre", (el) => `${el.nodeName}:::${el.innerText}`);
    // Falls back to tag + geometry/text for shapes inside an inlined external SVG that have no
    // id of their own to have already matched via the "[data-id]" pass above (:not([data-id])
    // keeps this from ever double-matching the ones that did).
    findAutoAnimateMatches(
      pairs, from, to,
      "svg.static-figure-svg :is(path, circle, ellipse, rect, line, polygon, polyline, text, tspan):not([data-id])",
      (el) => `${el.nodeName}:::${svgShapeSignature(el)}`
    );

    pairs.forEach((pair) => {
      if (pair.from.matches(autoAnimateHeadingSelector) || isHeadingTitleSpan(pair.from)) {
        pair.options = { scale: false };
      } else if (pair.from.matches("pre")) {
        pair.options = { scale: false, styles: ["width", "height"] };
        findAutoAnimateMatches(pairs, pair.from, pair.to, ".hljs .hljs-ln-code", (el) => el.textContent,
          { scale: false, styles: [], measure: getLocalBoundingBox });
        findAutoAnimateMatches(pairs, pair.from, pair.to, ".hljs .hljs-ln-line[data-line-number]", (el) => el.getAttribute("data-line-number"),
          { scale: false, styles: ["width"], measure: getLocalBoundingBox });
      } else if (pair.from.matches(".static-figure img")) {
        // Reveal's own FLIP transform is computed purely from the matched element's own box
        // (offsetWidth/offsetHeight) — it has no way to know that `object-fit: contain` paints
        // the actual picture smaller than that box whenever the box's aspect ratio doesn't match
        // the source's. A figure box's height is usually identical across a column-count change
        // (it's set by the row track, not the column width), which makes Reveal's own scaleY
        // always ~1 even though the *picture* — letterboxed differently at each width — genuinely
        // needs to resize on both axes. animateImageTransition (below) replaces Reveal's
        // box-based FLIP with one measured against the picture's own visible bounds instead.
        pair.options = { scale: false, translate: false };
      } else if (pair.from.matches(".simple-diagram")) {
        // Same box-vs-content mismatch as static-figure img, just via SVG's own equivalent of
        // object-fit: contain (`preserveAspectRatio="xMidYMid meet"`, set in buildDiagramSvg)
        // instead of CSS — animateDiagramTransition replaces Reveal's box-based FLIP here too.
        pair.options = { scale: false, translate: false };
      } else if (pair.from.matches("svg.static-figure-svg") || pair.from.closest("svg.static-figure-svg")) {
        // Same box-vs-content mismatch as .simple-diagram, for an inlined external SVG's own
        // viewBox + preserveAspectRatio (see inlineStaticSvgs) — animateExternalSvgTransition
        // replaces Reveal's box-based FLIP here too, for both the root <svg> itself and every
        // shape matched inside it. Leaving Reveal's own attempt enabled wouldn't just be
        // redundant with that: since offsetLeft/offsetWidth are undefined on any SVG-namespaced
        // element, Reveal's own transform computation comes out degenerate, and it still writes
        // that inline style.transition — which, being inline, overrides the CSS class our own
        // transition depends on regardless of which one "meant" to apply — onto the element,
        // silently overwriting our transition-property list and leaving nothing to animate.
        pair.options = { scale: false, translate: false };
      }
    });

    const seen = [];
    const filtered = pairs.filter((pair) => {
      // The footer (page number, course label, footer note) always changes at least its page
      // number from slide to slide — matching it here would let Reveal FLIP it, and leaving it
      // unmatched would hand it to our own delayed fade-in (see fadeInNewContent) instead of
      // the plain instant update it should always get. handleAutoAnimate keeps it out of that
      // fade-in path too, but it can only skip a *transition*, not un-match something Reveal
      // already flipped, so it has to be excluded here at the source.
      if (pair.to.closest(".slide-footer")) return false;
      if (seen.includes(pair.to)) return false;
      seen.push(pair.to);
      return true;
    });

    // Reveal treats a slide pair with zero returned pairs as having nothing in common and cuts
    // instantly instead of animating — see the "unrelated slide pair" comment on the
    // data-auto-animate line in buildSlide. A running `### Section` heading repeated verbatim
    // is the single most common source of a match here, since autoAnimateHeadingSelector keys
    // h1-h6 (along with p/li) on tag + exact text: two otherwise-unrelated slides that happen
    // to share a section heading would still match on *just* that heading and lose the instant
    // cut they should get. So a heading can't be the pair(s) that saves this transition from
    // being treated as unrelated — only count it once something else has also matched, and in
    // that case keep it in the result so it still FLIPs normally alongside that other content.
    // A heading also produces a *second*, separate pair here: Reveal's own auto-animate
    // preprocessing pre-assigns a data-id to the span it wraps a heading's text run in, so the
    // "[data-id]" matcher above (run before autoAnimateHeadingSelector) matches that inner span
    // too — isHeadingTitleSpan is what the animation-options branch above already uses to
    // recognize that span as "part of a heading match" rather than unrelated content, and needs
    // the same treatment here.
    const hasNonHeadingMatch = filtered.some((pair) => !isHeading(pair.to) && !isHeadingTitleSpan(pair.to));
    return hasNonHeadingMatch ? filtered : [];
  }

  // Reveal's own Auto-Animate can't reach inside our diagrams: it measures matched elements
  // with offsetLeft/offsetWidth (an HTML box-model concept SVG children don't have) and only
  // transitions a fixed list of CSS properties that doesn't include path data. So diagram
  // nodes/edges get their own hand-rolled FLIP animation, keyed off the stable ids
  // deck-builder.js already stamps on them (data-diagram-node="<id>", data-diagram-edge /
  // data-diagram-edge-label="<from>-><to>"), run in response to the same "autoanimate" event
  // Reveal fires when a `[!auto-animate]` slide pair transitions.
  function matchDiagramElements(fromRoot, toRoot, selector) {
    const attr = selector.slice(1, -1);
    const fromByKey = new Map();
    fromRoot.querySelectorAll(selector).forEach((el) => fromByKey.set(el.getAttribute(attr), el));
    const pairs = [];
    toRoot.querySelectorAll(selector).forEach((el) => {
      const from = fromByKey.get(el.getAttribute(attr));
      if (from) pairs.push({ from, to: el });
    });
    return pairs;
  }

  // Snap `el`'s attributes to `fromEl`'s values immediately, and return a callback that puts
  // el's own original values back — call the callback only once transitions are enabled, and
  // the browser animates the change instead of jumping straight to it.
  function flipDiagramAttributes(el, attrNames, fromEl) {
    const end = {};
    attrNames.forEach((name) => { end[name] = el.getAttribute(name); });
    attrNames.forEach((name) => {
      const value = fromEl.getAttribute(name);
      if (value != null) el.setAttribute(name, value);
    });
    return () => attrNames.forEach((name) => { if (end[name] != null) el.setAttribute(name, end[name]); });
  }

  // A <text> element's `x`/`y` are plain SVG positioning attributes — unlike a <rect>'s (or
  // <circle>'s) x/y/width/height/cx/cy/r, they were never promoted to real CSS geometry
  // properties, so `transition: x, y` silently does nothing for text: flipDiagramAttributes
  // would set the attribute correctly but nothing would ever visibly move between the two
  // values (confirmed via getAnimations() reporting zero running animations on a flipped
  // text node despite `transition-property` correctly listing x/y in computed style). `fill`
  // has no such issue — it's an ordinary animatable paint property — so this only reroutes the
  // position through a `transform: translate()`, which *is* animatable on every element,
  // leaving fill to flipDiagramAttributes as before.
  function flipDiagramTextPosition(el, fromEl) {
    const dx = Number(fromEl.getAttribute("x")) - Number(el.getAttribute("x"));
    const dy = Number(fromEl.getAttribute("y")) - Number(el.getAttribute("y"));
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    return () => { el.style.transform = ""; };
  }

  // Same idea as flipDiagramAttributes, but for an inline CSS custom property (like
  // --box-color) instead of an HTML/SVG attribute — el.getAttribute("--box-color") wouldn't see
  // it. --box-color itself doesn't need to be in any `transition:` list to animate smoothly:
  // it never had a CSS type registered, so it can't interpolate on its own, but the rect's
  // `fill: color-mix(..., var(--box-color) ...)` — which *is* transitioned — recomputes from
  // whatever --box-color equals at each moment, so stepping --box-color while that transition
  // is already running is enough to carry it along.
  // `fallback` matters because a node with no explicit color never sets --box-color inline at
  // all (it relies on color-mix()'s own `var(--box-color, var(--slide-muted))` default) — with
  // nothing to read there, a change from default color to an explicit one would otherwise
  // start from an empty value instead of the muted default it's actually rendering as.
  function flipDiagramStyleProperty(el, propName, fromEl, fallback) {
    const end = el.style.getPropertyValue(propName);
    const start = fromEl.style.getPropertyValue(propName) || fallback;
    el.style.setProperty(propName, start);
    return () => { if (end) el.style.setProperty(propName, end); else el.style.removeProperty(propName); };
  }

  // Named CSS easings' standard cubic-bezier control points (P0=(0,0) and P3=(1,1) are
  // implicit), so a keyword from config.autoAnimateEasing resolves the same curve `transition:
  // ... ease` etc. would use. Falls back to plain "ease" for anything unrecognized.
  const CSS_EASING_PRESETS = {
    linear: [0, 0, 1, 1],
    ease: [0.25, 0.1, 0.25, 1],
    "ease-in": [0.42, 0, 1, 1],
    "ease-out": [0, 0, 0.58, 1],
    "ease-in-out": [0.42, 0, 0.58, 1]
  };

  // Turns a CSS easing keyword or `cubic-bezier(x1,y1,x2,y2)` string into a JS function
  // (0-1 time fraction -> 0-1 progress), evaluated the same way the CSS engine does: solving
  // the bezier for the parametric point whose X equals the elapsed time fraction (Newton-
  // Raphson, a couple of iterations converges to well under a pixel of error here), then
  // returning that point's Y. Needed anywhere a hand-rolled requestAnimationFrame loop (see
  // animateViewBox) has to move in lockstep with a real `transition: ... var(--...-easing)` —
  // a mismatched curve (e.g. this loop's own easing formula vs. the CSS one) makes elements
  // driven by each look like they're moving at different rates relative to one another, even
  // though they start and end at the same time.
  function diagramEasingFunction(name) {
    const trimmed = (name || "ease").trim();
    const cubicMatch = trimmed.match(/^cubic-bezier\(\s*([\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*([\d.]+)\s*,\s*(-?[\d.]+)\s*\)$/);
    const [x1, y1, x2, y2] = cubicMatch ? cubicMatch.slice(1).map(Number) : (CSS_EASING_PRESETS[trimmed] || CSS_EASING_PRESETS.ease);
    const bezier = (t, a1, a2) => {
      const a = 1 - 3 * a2 + 3 * a1;
      const b = 3 * a2 - 6 * a1;
      const c = 3 * a1;
      return ((a * t + b) * t + c) * t;
    };
    const bezierSlope = (t, a1, a2) => {
      const a = 1 - 3 * a2 + 3 * a1;
      const b = 3 * a2 - 6 * a1;
      const c = 3 * a1;
      return 3 * a * t * t + 2 * b * t + c;
    };
    return (x) => {
      let t = x;
      for (let i = 0; i < 8; i++) {
        const slope = bezierSlope(t, x1, x2);
        if (Math.abs(slope) < 1e-6) break;
        t -= (bezier(t, x1, x2) - x) / slope;
      }
      return bezier(t, y1, y2);
    };
  }

  // requestAnimationFrame-driven, because `viewBox` is a plain SVG attribute, not a CSS
  // property — it can't ride a normal CSS `transition` the way the rect/text/path attributes
  // above do. Uses `easing` (the same string driving every element's CSS transition, per
  // diagramEasingFunction) rather than an easing formula of its own, so the "camera" pan/zoom
  // this drives and the individually-FLIPping nodes/edges move in lockstep — otherwise a node
  // that isn't moving in its own coordinates (nothing to FLIP) but *is* moving on screen purely
  // because the viewBox is panning under it visibly drifts off the curve everything else is
  // moving on, reading as the whole diagram warping rather than a single rigid camera move.
  function animateViewBox(svg, fromViewBox, toViewBox, duration, easing) {
    const from = fromViewBox.split(/\s+/).map(Number);
    const to = toViewBox.split(/\s+/).map(Number);
    if (from.length !== 4 || to.length !== 4) return;
    const start = performance.now();
    const ease = diagramEasingFunction(easing);
    (function tick(now) {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = ease(t);
      svg.setAttribute("viewBox", from.map((value, i) => value + (to[i] - value) * eased).join(" "));
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  }

  // Parses the "x,y x,y ..." data-diagram-edge-route attribute (see buildEdgeLine) back into
  // points.
  function routePointsFromString(str) {
    if (!str) return null;
    return str.trim().split(/\s+/).map((pair) => {
      const [x, y] = pair.split(",").map(Number);
      return { x, y };
    });
  }

  // Resamples `points` (an arbitrary polyline/route) to exactly `count` points, evenly spaced
  // by arc length rather than by original vertex — the standard trick for putting two routes
  // with a different number of vertices (e.g. one with a via point, one without) into 1:1
  // correspondence so they can be blended index-by-index.
  function resamplePoints(points, count) {
    const segLengths = [];
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const length = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
      segLengths.push(length);
      total += length;
    }
    if (!total) return Array.from({ length: count }, () => ({ ...points[0] }));
    const result = [];
    for (let i = 0; i < count; i++) {
      const target = (i / (count - 1)) * total;
      let acc = 0;
      let seg = 0;
      while (seg < segLengths.length && acc + segLengths[seg] < target) { acc += segLengths[seg]; seg++; }
      const segLength = segLengths[seg] || 1;
      const segT = seg < segLengths.length ? (target - acc) / segLength : 1;
      const p0 = points[seg];
      const p1 = points[seg + 1] || points[seg];
      result.push({ x: p0.x + (p1.x - p0.x) * segT, y: p0.y + (p1.y - p0.y) * segT });
    }
    return result;
  }

  function polylinePathD(points) {
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");
  }

  // Falls back to this whenever an edge's route grows/loses a via point between two
  // auto-animate slides (see the [data-diagram-edge] loop below): the two `d` strings then
  // have a different number of path commands (e.g. "M L" vs. "M L Q L" for the rounded corner
  // a via point adds), and a CSS `d` transition only interpolates between path data that's
  // already command-for-command compatible — given a structural mismatch like this it doesn't
  // error or warn, it just never animates at all, snapping straight to the end state. This
  // resamples both routes to the same point count (resamplePoints) and manually tweens between
  // them frame by frame instead, snapping to the *exact* final `d` (the one true to however the
  // edge really renders, corner-rounding included) only once the tween completes.
  function animateEdgeMorph(el, fromPoints, toPoints, duration, easingName) {
    const sampleCount = Math.max(16, fromPoints.length, toPoints.length);
    const fromSample = resamplePoints(fromPoints, sampleCount);
    const toSample = resamplePoints(toPoints, sampleCount);
    const finalD = el.getAttribute("d");
    el.setAttribute("d", polylinePathD(fromSample));
    const ease = diagramEasingFunction(easingName);
    return () => {
      const start = performance.now();
      (function tick(now) {
        const t = Math.min(1, (now - start) / (duration * 1000));
        if (t >= 1) { el.setAttribute("d", finalD); return; }
        const eased = ease(t);
        const framePoints = fromSample.map((p, i) => ({
          x: p.x + (toSample[i].x - p.x) * eased,
          y: p.y + (toSample[i].y - p.y) * eased
        }));
        el.setAttribute("d", polylinePathD(framePoints));
        requestAnimationFrame(tick);
      })(start);
    };
  }

  function animateDiagramTransition({ fromSlide, toSlide }) {
    const fromSvg = fromSlide?.querySelector(".simple-diagram");
    const toSvg = toSlide?.querySelector(".simple-diagram");
    if (!fromSvg || !toSvg) return;

    const config = Reveal.getConfig();
    const duration = config.autoAnimateDuration || 1;
    const easing = config.autoAnimateEasing || "ease";

    // The two SVGs are already matched as whole containers (both carry the same `data-id`;
    // see buildDiagramSvg), which stops Reveal from fading the entire canvas out and back in.
    // But a diagram that grows to fit a newly added node gets a wider auto-computed viewBox,
    // and that can't ride Reveal's transform/style diffing like the container's position or
    // size could — without this, every node would still individually FLIP correctly, but the
    // whole canvas would silently snap to the new framing around them instead of smoothly
    // zooming/panning into it.
    const fromViewBox = fromSvg.getAttribute("viewBox");
    const toViewBox = toSvg.getAttribute("viewBox");
    if (fromViewBox && toViewBox && fromViewBox !== toViewBox) animateViewBox(toSvg, fromViewBox, toViewBox, duration, easing);

    // Fixes the same box-vs-content mismatch flipContainFit fixes for images, here for the
    // svg's own box vs. what preserveAspectRatio paints inside it — independent of the viewBox
    // morph above, which only covers the diagram's own content changing extent, not its slot on
    // the page changing shape (e.g. a column-count change) while the content extent stays put.
    const fromViewBoxSize = fromViewBox?.split(/\s+/).map(Number);
    const toViewBoxSize = toViewBox?.split(/\s+/).map(Number);
    if (fromViewBoxSize?.length === 4 && toViewBoxSize?.length === 4) {
      flipContainFit(
        toSvg,
        fromSvg.getBoundingClientRect(), { width: fromViewBoxSize[2], height: fromViewBoxSize[3] },
        toSvg.getBoundingClientRect(), { width: toViewBoxSize[2], height: toViewBoxSize[3] },
        duration, easing,
      );
    }

    const applyEndState = [];
    matchDiagramElements(fromSvg, toSvg, "[data-diagram-node]").forEach(({ from, to }) => {
      // The node's own box color lives on this <g>, as the --box-color custom property the
      // rect's fill reads via color-mix() — not an attribute on the rect itself — so it needs
      // its own flip or a node that changes color would just snap instead of fading.
      applyEndState.push(flipDiagramStyleProperty(to, "--box-color", from, "var(--slide-muted)"));
      // A node's shape is a <rect> or, for a circle node (see layoutDiagramNodes), a <circle> —
      // each needs its own attribute list flipped, and the two only match up (mixing one node
      // gaining/losing its label between two auto-animate slides would change its shape) when
      // both sides render as the same tag; otherwise it just cuts instead of morphing.
      const fromShape = from.querySelector("rect, circle");
      const toShape = to.querySelector("rect, circle");
      if (fromShape && toShape && fromShape.tagName === toShape.tagName) {
        const shapeAttrs = fromShape.tagName === "circle"
          ? ["cx", "cy", "r", "fill", "stroke"]
          : ["x", "y", "width", "height", "fill", "stroke"];
        applyEndState.push(flipDiagramAttributes(toShape, shapeAttrs, fromShape));
      }
      const fromText = from.querySelector("text");
      const toText = to.querySelector("text");
      if (fromText && toText) {
        applyEndState.push(flipDiagramTextPosition(toText, fromText));
        applyEndState.push(flipDiagramAttributes(toText, ["fill"], fromText));
      }
    });
    matchDiagramElements(fromSvg, toSvg, "[data-diagram-edge]").forEach(({ from, to }) => {
      applyEndState.push(flipDiagramAttributes(to, ["stroke"], from));
      // A `d` transition only animates when both sides are command-for-command compatible
      // (see animateEdgeMorph) — that holds for the overwhelming majority of edges, which
      // only ever reposition, so it's worth checking route point-count first rather than
      // always paying for the manual tween.
      const fromRoute = routePointsFromString(from.getAttribute("data-diagram-edge-route"));
      const toRoute = routePointsFromString(to.getAttribute("data-diagram-edge-route"));
      if (fromRoute && toRoute && fromRoute.length !== toRoute.length) {
        applyEndState.push(animateEdgeMorph(to, fromRoute, toRoute, duration, easing));
      } else {
        applyEndState.push(flipDiagramAttributes(to, ["d"], from));
      }
    });
    matchDiagramElements(fromSvg, toSvg, "[data-diagram-edge-label]").forEach(({ from, to }) => {
      applyEndState.push(flipDiagramTextPosition(to, from));
      applyEndState.push(flipDiagramAttributes(to, ["fill"], from));
    });
    if (!applyEndState.length) return;

    toSvg.style.setProperty("--diagram-flip-duration", `${duration}s`);
    toSvg.style.setProperty("--diagram-flip-easing", config.autoAnimateEasing || "ease");
    toSvg.classList.remove("is-flipping");
    void toSvg.getBoundingClientRect(); // flush the instant "from" state before transitioning
    requestAnimationFrame(() => {
      toSvg.classList.add("is-flipping");
      applyEndState.forEach((apply) => apply());
      setTimeout(() => toSvg.classList.remove("is-flipping"), duration * 1000 + 50);
    });
  }

  // Where `object-fit: contain` actually paints a picture within its box: `naturalRatio` wider
  // than the box means the box's own width is the binding constraint (letterboxed top/bottom),
  // otherwise its height is (letterboxed left/right) — the same rule the browser itself uses.
  function containRect(boxWidth, boxHeight, naturalWidth, naturalHeight) {
    const boxRatio = boxWidth / boxHeight;
    const naturalRatio = naturalWidth / naturalHeight;
    const width = naturalRatio > boxRatio ? boxWidth : boxHeight * naturalRatio;
    const height = naturalRatio > boxRatio ? boxWidth / naturalRatio : boxHeight;
    return { width, height, x: (boxWidth - width) / 2, y: (boxHeight - height) / 2 };
  }

  // Reveal's own FLIP transform is computed purely from the matched element's own box
  // (offsetWidth/offsetHeight) — that's the whole flex slot a `static-figure img` sits in, or
  // the whole `simple-diagram` svg's slot, not the picture `object-fit: contain` (images) or
  // `preserveAspectRatio="xMidYMid meet"` (our diagram SVGs, set in buildDiagramSvg — SVG's own
  // equivalent of object-fit: contain) actually paints inside it, which is usually smaller on
  // one axis (letterboxed). A figure or diagram box's height in particular barely changes across
  // a column-count change — it's set by the row track, not the column width — so Reveal's own
  // scaleY ends up ~1 even though the *content*, letterboxed differently at each width, needs to
  // resize on both axes to really track what's on screen. autoAnimateMatcher disables Reveal's
  // transform for both kinds of match (`scale: false, translate: false`) so this can replace it
  // with one measured against the content's own visible bounds (via containRect, the same math
  // `object-fit: contain`/`preserveAspectRatio` themselves use) instead of the box — scaling
  // between two contain-fits of the same source is always a uniform zoom (both axes share the
  // source's fixed aspect ratio), never a stretch, so this reads as one continuous zoom/pan
  // rather than a size change that doesn't match what's actually on screen.
  function flipContainFit(toEl, fromBox, fromNatural, toBox, toNatural, duration, easing) {
    if (!fromBox.width || !fromBox.height || !toBox.width || !toBox.height) return;
    if (!fromNatural.width || !fromNatural.height || !toNatural.width || !toNatural.height) return;
    const scale = Reveal.getScale();
    const fromContent = containRect(fromBox.width, fromBox.height, fromNatural.width, fromNatural.height);
    const toContent = containRect(toBox.width, toBox.height, toNatural.width, toNatural.height);
    const scaleX = fromContent.width / toContent.width;
    const scaleY = fromContent.height / toContent.height;
    const dx = (fromBox.left + fromContent.x - toBox.left - scaleX * toContent.x) / scale;
    const dy = (fromBox.top + fromContent.y - toBox.top - scaleY * toContent.y) / scale;
    if (Math.round((scaleX - 1) * 1000) === 0 && Math.round((scaleY - 1) * 1000) === 0
      && Math.round(dx) === 0 && Math.round(dy) === 0) return;

    // Every layout ancestor between toEl and its slide — .media-figure, .slide-column,
    // .slide-grid, .slide-content, .slide-frame — clips to its own (already-final-size) box via
    // `overflow: hidden`. Since only toEl itself gets this transform, not any of them, a "from"
    // appearance larger than the final layout gets cropped down to the smallest of those boxes
    // instead of showing in full while it shrinks into place. Lifting the clip on all of them
    // for the duration of the transform fixes that; it's safe to do unconditionally because the
    // fade-in of any new content sharing that space is deliberately staggered to start only
    // after this transform finishes (see fadeInNewContent), so there's nothing yet visible for
    // the temporarily unclipped content to spill over. Stops at the slide's own <section>, not
    // past it — escaping the slide entirely would spill into neighboring UI (footer, other
    // slides) rather than just the room the auto-animate transition already has to work with.
    for (let ancestor = toEl.parentElement; ancestor && ancestor.tagName !== "SECTION"; ancestor = ancestor.parentElement) {
      const previousOverflow = ancestor.style.overflow;
      ancestor.style.overflow = "visible";
      setTimeout(() => { ancestor.style.overflow = previousOverflow; }, duration * 1000 + 50);
    }

    toEl.style.transition = "none";
    toEl.style.transformOrigin = "top left";
    toEl.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
    void toEl.getBoundingClientRect(); // flush the instant "from" state before transitioning
    requestAnimationFrame(() => {
      toEl.style.transition = `transform ${duration}s ${easing}`;
      toEl.style.transform = "none";
      setTimeout(() => {
        toEl.style.transition = "";
        toEl.style.transform = "";
        toEl.style.transformOrigin = "";
      }, duration * 1000 + 50);
    });
  }

  function animateImageTransition({ fromSlide, toSlide }) {
    if (!fromSlide || !toSlide) return;
    const fromImages = new Map();
    fromSlide.querySelectorAll(".static-figure img").forEach((img) => {
      const src = img.getAttribute("src");
      if (src && !fromImages.has(src)) fromImages.set(src, img);
    });
    if (!fromImages.size) return;

    const config = Reveal.getConfig();
    const duration = config.autoAnimateDuration || 1;
    const easing = config.autoAnimateEasing || "ease";

    toSlide.querySelectorAll(".static-figure img").forEach((toImg) => {
      const src = toImg.getAttribute("src");
      const fromImg = src && fromImages.get(src);
      if (!fromImg || !fromImg.naturalWidth || !toImg.naturalWidth) return;
      flipContainFit(
        toImg,
        fromImg.getBoundingClientRect(), { width: fromImg.naturalWidth, height: fromImg.naturalHeight },
        toImg.getBoundingClientRect(), { width: toImg.naturalWidth, height: toImg.naturalHeight },
        duration, easing,
      );
    });
  }

  // Which attributes carry a shape's own geometry, by tag — the same list buildDiagramSvg's
  // own node/edge shapes would use if they were rect/circle, extended to the handful of extra
  // primitives an externally-authored SVG can use that our own diagram DSL never produces.
  // polygon/polyline are deliberately absent: their geometry lives in a single `points` string,
  // which (like a mismatched `d` — see animateEdgeMorph) was never promoted to a real
  // animatable CSS property, so there's no attribute-transition equivalent to flip it by; those
  // tags still get matched and still FLIP their fill/stroke/opacity, just not their shape.
  const SVG_SHAPE_FLIP_ATTRS = {
    circle: ["cx", "cy", "r"],
    ellipse: ["cx", "cy", "rx", "ry"],
    rect: ["x", "y", "width", "height", "rx", "ry"],
    line: ["x1", "y1", "x2", "y2"],
    path: ["d"]
  };
  const SVG_STYLE_FLIP_ATTRS = ["fill", "stroke", "stroke-width", "opacity", "fill-opacity", "stroke-opacity"];
  const SVG_MATCHABLE_SELECTOR = "svg.static-figure-svg [data-id], svg.static-figure-svg :is(circle, ellipse, rect, line, path, polygon, polyline, text, tspan)";

  // The externally-authored-SVG equivalent of animateDiagramTransition, for the same
  // fundamental reason animateImageTransition/flipContainFit exist at all: Reveal's own
  // built-in FLIP measures a matched element with offsetLeft/offsetWidth, an HTML box-model
  // concept that's simply undefined on any SVG-namespaced element (the root <svg> included) —
  // so even though autoAnimateMatcher correctly matches shapes inside an inlined SVG (see
  // inlineStaticSvgs), Reveal's own attempt to FLIP them silently computes nothing and they
  // just cut. This redoes that matching by hand (id where the file provides one, else tag +
  // geometry/text — identical keys to autoAnimateMatcher's, so "the same match" here means
  // exactly what it meant there) and drives it with the same attribute-transition technique
  // animateDiagramTransition already proved out, plus flipContainFit for the root <svg> itself
  // (keyed by src, i.e. literally the same file on both slides) so its box resizes smoothly
  // too rather than snapping like Reveal's own FLIP would try and fail to do.
  function animateExternalSvgTransition({ fromSlide, toSlide }) {
    if (!fromSlide || !toSlide) return;
    const config = Reveal.getConfig();
    const duration = config.autoAnimateDuration || 1;
    const easing = config.autoAnimateEasing || "ease";

    const fromRootsById = new Map();
    fromSlide.querySelectorAll("svg.static-figure-svg").forEach((svg) => {
      if (svg.dataset.id && !fromRootsById.has(svg.dataset.id)) fromRootsById.set(svg.dataset.id, svg);
    });
    toSlide.querySelectorAll("svg.static-figure-svg").forEach((toSvg) => {
      const fromSvg = fromRootsById.get(toSvg.dataset.id);
      const fromViewBox = fromSvg?.viewBox.baseVal;
      const toViewBox = toSvg.viewBox.baseVal;
      if (!fromViewBox?.width || !toViewBox?.width) return;
      flipContainFit(
        toSvg,
        fromSvg.getBoundingClientRect(), { width: fromViewBox.width, height: fromViewBox.height },
        toSvg.getBoundingClientRect(), { width: toViewBox.width, height: toViewBox.height },
        duration, easing,
      );
    });

    // Keyed globally across every external SVG on the outgoing slide, not scoped per matched
    // root pair above — a shape keeps animating even when it moved to a *different* file's
    // figure, since an id (or, failing that, its own geometry) is what makes two shapes count
    // as "the same" here, not which document happened to contain them.
    const fromByKey = new Map();
    fromSlide.querySelectorAll(SVG_MATCHABLE_SELECTOR).forEach((el) => {
      const key = `${el.nodeName}:::${el.dataset.id || svgShapeSignature(el)}`;
      if (!fromByKey.has(key)) fromByKey.set(key, el);
    });

    const applyEndState = [];
    toSlide.querySelectorAll(SVG_MATCHABLE_SELECTOR).forEach((to) => {
      const key = `${to.nodeName}:::${to.dataset.id || svgShapeSignature(to)}`;
      const from = fromByKey.get(key);
      if (!from || from === to) return;
      if (to.tagName === "text" || to.tagName === "tspan") {
        applyEndState.push(flipDiagramTextPosition(to, from));
        applyEndState.push(flipDiagramAttributes(to, ["fill"], from));
      } else {
        const shapeAttrs = SVG_SHAPE_FLIP_ATTRS[to.tagName] || [];
        applyEndState.push(flipDiagramAttributes(to, [...shapeAttrs, ...SVG_STYLE_FLIP_ATTRS], from));
      }
    });
    if (!applyEndState.length) return;

    const toRoots = toSlide.querySelectorAll("svg.static-figure-svg");
    toRoots.forEach((svg) => {
      svg.style.setProperty("--diagram-flip-duration", `${duration}s`);
      svg.style.setProperty("--diagram-flip-easing", easing);
      svg.classList.remove("is-flipping");
    });
    void toSlide.getBoundingClientRect(); // flush the instant "from" state before transitioning
    requestAnimationFrame(() => {
      toRoots.forEach((svg) => svg.classList.add("is-flipping"));
      applyEndState.forEach((apply) => apply());
      setTimeout(() => toRoots.forEach((svg) => svg.classList.remove("is-flipping")), duration * 1000 + 50);
    });
  }

  // Faithful port of Reveal's own internal getUnmatchedAutoAnimateElements: an element only
  // counts as "unmatched" if neither it nor any of its descendants matched — an ancestor of a
  // matched element is left alone and recursed into instead, so its own fade-in doesn't
  // double up with the matched descendant's separate FLIP animation. The footer is skipped
  // outright rather than treated as unmatched content: it should always just update instantly
  // (see handleAutoAnimate and the matching footer exclusion in autoAnimateMatcher above).
  function getUnmatchedAutoAnimateElements(container) {
    return Array.from(container.children).reduce((unmatched, child) => {
      if (child.classList.contains("slide-footer")) return unmatched;
      const hasMatchedDescendant = child.querySelector("[data-auto-animate-target]");
      if (!child.hasAttribute("data-auto-animate-target") && !hasMatchedDescendant) unmatched.push(child);
      else if (hasMatchedDescendant) unmatched.push(...getUnmatchedAutoAnimateElements(child));
      return unmatched;
    }, []);
  }

  // Reveal's built-in autoAnimateUnmatched fades new content in during the same transition as
  // the matched elements, but does so even between two slides that share nothing at all — this
  // reuses handleAutoAnimate's own "nothing matched, just cut" check to skip that fade instead
  // (see below). New content also waits for the matched-element transition to fully finish
  // before starting its own fade, rather than layering the two simultaneously: a matched figure
  // mid-FLIP and new content fading in at the same time can visually overlap while both are
  // still changing, and reliably keeping one above the other during that overlap turned out to
  // need more than a plain z-index could guarantee. Staggering them instead sidesteps the
  // problem structurally — by the time new content is visible at all, nothing else is still in
  // motion, so there's nothing for it to obstruct.
  const NEW_CONTENT_FADE_DURATION = 0.25;

  function fadeInNewContent(toSlide, matchedDuration, easing) {
    const unmatched = getUnmatchedAutoAnimateElements(toSlide);
    if (!unmatched.length) return;
    unmatched.forEach((el) => {
      el.style.transition = "none";
      el.style.opacity = "0";
    });
    void toSlide.getBoundingClientRect(); // flush the instant "hidden" state before transitioning
    requestAnimationFrame(() => {
      unmatched.forEach((el) => {
        el.style.transition = `opacity ${NEW_CONTENT_FADE_DURATION}s ${easing} ${matchedDuration}s`;
        el.style.opacity = "";
      });
      setTimeout(() => {
        unmatched.forEach((el) => {
          el.style.transition = "";
          el.style.opacity = "";
        });
      }, (matchedDuration + NEW_CONTENT_FADE_DURATION) * 1000 + 50);
    });
  }

  function handleAutoAnimate({ fromSlide, toSlide }) {
    animateDiagramTransition({ fromSlide, toSlide });
    animateImageTransition({ fromSlide, toSlide });
    animateExternalSvgTransition({ fromSlide, toSlide });
    if (!toSlide) return;
    // Reveal already tags every matched "to" element with data-auto-animate-target before
    // dispatching this event — if the new slide has none at all, nothing in common was found,
    // so this is two unrelated slides rather than a real Auto-Animate pair. Do nothing and let
    // it cut instantly instead of fading anything in.
    if (!toSlide.querySelector("[data-auto-animate-target]")) return;
    const config = Reveal.getConfig();
    fadeInNewContent(toSlide, config.autoAnimateDuration || 1, config.autoAnimateEasing || "ease");
  }

  function installDiagramAutoAnimate() {
    Reveal.on("autoanimate", handleAutoAnimate);
  }

  function build({ source, target, baseUrl = "", course = "", design = defaultDesign }) {
    if (!source || !target) throw new Error("DeckBuilder requires source and target elements.");
    applyTheme(design);
    installFigureBackgroundSync(baseUrl);
    const slides = splitSlides(source.content);
    slides.forEach((nodes, index) => target.append(buildSlide(nodes, {
      baseUrl,
      course,
      page: index + 1,
      total: slides.length
    })));
  }

  return { build, autoAnimateMatcher, installDiagramAutoAnimate };
})();
