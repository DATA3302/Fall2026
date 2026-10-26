---
title: Text Visualization
description: Text as mark and data, word frequency, TF-IDF, embeddings, and semantic queries.
order: 10
course: DATA 3302 Fall 2026
---

# Text Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

> Adapted from Cal Poly CSC 477: Scientific and Information Visualization ("Text Visualization").

<!-- Separate visible footer from presenter notes. -->

> [!notes]
> Reference: `18-Text.pdf`, page 1. Current-course subtitle replaces original. Page 63 (assignment deadline) omitted; pages 64–65 adapted as discussion prompts.

---

[big] Traditional

[big] Dichotomy

::: 35/65

![](/images/text/figure-02.png)

> [!notes]
> Reference: `18-Text.pdf`, page 2. Original composite; page 3 preserves the progressive color overlay.

---

[big] Traditional

[big] Dichotomy

::: 35/65

![](/images/text/figure-03.png)

> [!notes]
> Reference: `18-Text.pdf`, page 3. Original composite; page 3 preserves the progressive color overlay.

---

[big] Text as Mark

[big] Text as Data

> [!notes]
> Reference: `18-Text.pdf`, page 4. 

---

[big] Text as Mark

[big] <span style="color:#aaa">Text as Data</span>

> [!notes]
> Reference: `18-Text.pdf`, page 5. 

---

![](/images/text/figure-06.png)

> [!notes]
> Reference: `18-Text.pdf`, page 6. Original text-encoding pipeline diagram.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:29.306%;top:29.259%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:54.688%;top:51.605%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:38.472%;top:61.296%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">Text</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 7. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

![](/images/text/figure-08.png)

> [!notes]
> Reference: `18-Text.pdf`, page 8. Original typographic graphic preserves bars, kerning guides, axes, paths, and spatial relationships.

---

![](/images/text/figure-09.png)

> [!notes]
> Reference: `18-Text.pdf`, page 9. Original typographic graphic preserves bars, kerning guides, axes, paths, and spatial relationships.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:40.451%;top:25.864%;font-size:104.17px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:45.938%;top:48.951%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:48.056%;top:62.037%;font-size:20.83px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">Text</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 10. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:45.069%;top:26.667%;font-size:52.08px;font-family:Arial, sans-serif;font-weight:700;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:45.208%;top:43.951%;font-size:52.08px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:45.938%;top:62.469%;font-size:52.08px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">Text</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 11. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:45.069%;top:26.667%;font-size:52.08px;font-family:Arial, sans-serif;font-weight:400;font-style:italic;color:#0076ba;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:45.208%;top:43.951%;font-size:52.08px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:45.938%;top:62.469%;font-size:52.08px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">Text</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 12. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:40.451%;top:9.568%;font-size:104.17px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">Text</span>
<span style="position:absolute;left:41.215%;top:29.136%;font-size:104.17px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">text</span>
<span style="position:absolute;left:37.569%;top:48.765%;font-size:104.17px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">TEXT</span>
<span style="position:absolute;left:39.479%;top:68.333%;font-size:104.17px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15">tExT</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 13. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

![](/images/text/figure-14.png)

> [!notes]
> Reference: `18-Text.pdf`, page 14. Original typographic graphic retained to preserve font families, small caps, and letter spacing that the PDF text extractor merged or lost.

---

![](/images/text/figure-15.png)

> [!notes]
> Reference: `18-Text.pdf`, page 15. Original typographic graphic retained to preserve font families, small caps, and letter spacing that the PDF text extractor merged or lost.

---

![](/images/text/figure-16.png)

> [!notes]
> Reference: `18-Text.pdf`, page 16. Original typographic graphic preserves bars, kerning guides, axes, paths, and spatial relationships.

---

![](/images/text/figure-17.png)

> [!notes]
> Reference: `18-Text.pdf`, page 17. Original typographic graphic retained to preserve font families, small caps, and letter spacing that the PDF text extractor merged or lost.

---

![](/images/text/figure-18.png)

> [!notes]
> Reference: `18-Text.pdf`, page 18. Original typographic graphic preserves bars, kerning guides, axes, paths, and spatial relationships.

---

![](/images/text/figure-19.png)

> [!notes]
> Reference: `18-Text.pdf`, page 19. Original typographic graphic preserves bars, kerning guides, axes, paths, and spatial relationships.

---

![](/images/text/figure-20.png)

> [!notes]
> Reference: `18-Text.pdf`, page 20. Original typographic graphic preserves bars, kerning guides, axes, paths, and spatial relationships.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:17.118%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:23.507%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:25.764%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:36.875%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:39.097%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:47.535%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:49.757%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:56.146%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:58.368%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:72.118%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:74.375%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:82.778%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:23.507%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:25.208%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:38.958%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:40.660%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:49.062%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:50.764%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:61.875%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:63.576%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:74.688%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:76.389%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:82.778%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:25.556%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:27.222%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:33.611%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:35.278%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:46.424%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:48.090%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">yellow</span>
<span style="position:absolute;left:60.521%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:62.222%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#970e53;white-space:pre;line-height:1.15">purple</span>
<span style="position:absolute;left:74.722%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:76.389%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:82.778%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:29.132%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:32.604%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue </span>
<span style="position:absolute;left:45.139%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:51.944%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:55.417%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:64.479%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:67.951%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">orange </span>
<span style="position:absolute;left:17.118%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#970e53;white-space:pre;line-height:1.15">purple</span>
<span style="position:absolute;left:29.653%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:30.799%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">yellow</span>
<span style="position:absolute;left:43.229%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:44.340%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:58.090%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:59.236%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:65.625%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:66.771%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:75.174%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:76.319%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 21. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

<div style="position:relative;width:1000px;max-width:100%;height:562px" aria-label="Original typography demonstration">
<span style="position:absolute;left:17.118%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:23.507%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:25.764%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:36.875%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:39.097%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:47.535%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:49.757%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:56.146%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:58.368%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#970e53;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:72.118%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:74.375%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:82.778%;top:28.086%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:23.507%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:25.208%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:38.958%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:40.660%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:49.062%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:50.764%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#970e53;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:61.875%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:63.576%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:74.688%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:76.389%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:82.778%;top:36.667%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:25.556%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:27.222%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:33.611%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:35.278%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:46.424%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:48.090%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">yellow</span>
<span style="position:absolute;left:60.521%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:62.222%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">purple</span>
<span style="position:absolute;left:74.722%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:76.389%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:82.778%;top:45.247%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#970e53;white-space:pre;line-height:1.15">green</span>
<span style="position:absolute;left:29.132%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:32.604%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:41.667%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:45.139%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#ee220c;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:51.944%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:55.417%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#970e53;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:64.479%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:67.951%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:82.778%;top:53.889%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:17.118%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">purple</span>
<span style="position:absolute;left:29.653%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:30.799%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#1db100;white-space:pre;line-height:1.15">yellow</span>
<span style="position:absolute;left:43.229%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:44.340%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#f27200;white-space:pre;line-height:1.15">orange</span>
<span style="position:absolute;left:58.090%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:59.236%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#feae00;white-space:pre;line-height:1.15">red</span>
<span style="position:absolute;left:65.625%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:66.771%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">blue</span>
<span style="position:absolute;left:75.174%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#000000;white-space:pre;line-height:1.15"> </span>
<span style="position:absolute;left:76.319%;top:62.469%;font-size:44.44px;font-family:Arial, sans-serif;font-weight:400;font-style:normal;color:#0076ba;white-space:pre;line-height:1.15">red</span>
</div>

> [!notes]
> Reference: `18-Text.pdf`, page 22. Selectable native text positioned from PDF coordinates. Original wording, color, size, and emphasis retained; browser font substitution may alter spacing.

---

[big left] For emaxlpe, it deson’t mttaer in waht oredr the ltteers in a wrod aepapr, the olny iprmoatnt tihng is taht the frist and lsat ltteer are in the rghit pcale. The rset can be a toatl mses and you can sitll raed it wouthit pobelrm.

[big left] S1M1L4RLY, Y0UR M1ND 15 R34D1NG 7H15 4U70M471C4LLY W17H0U7 3V3N 7H1NK1NG 4B0U7 17.

> [!notes]
> Reference: `18-Text.pdf`, page 23. Intentional source misspellings retained. A source perception demonstration, not a new general reading claim.

---

![](/images/text/figure-24.png)

> [!notes]
> Reference: `18-Text.pdf`, page 24. Original word cloud; no new word counts generated.

---

![](/images/text/page-25.png)

> [!notes]
> Reference: `18-Text.pdf`, page 25. TODO: Reconstruct the dense ASCII portrait and emoticon as accessible native text without changing the visual demonstration. Full-page reference visual retained as fidelity fallback.

---

### Cool Video on ASCII Shader

![figure height-540](/embed/text/ascii.html)

> [!notes]
> Reference: `18-Text.pdf`, page 26. The sole PDF URI annotation is https://www.youtube.com/watch?v=gg40RWiaHRY. Original still is the default. Click to load the original video; network and third-party requests begin only after activation.

---

![](/images/text/figure-27.png)

> [!notes]
> Reference: `18-Text.pdf`, page 27. Original code-editor screenshots.

---

![](/images/text/figure-28.png)

> [!notes]
> Reference: `18-Text.pdf`, page 28. Original Visualizing with Text cover and example graphics. No live URL supplied in the PDF.

---

[big] <span style="color:#aaa">Text as Mark</span>

[big] Text as Data

> [!notes]
> Reference: `18-Text.pdf`, page 29. 

---

[big] <span style="color:#aaa">Text as Mark</span>

[big] Text as Data

[lead] Natural Language Processing (NLP)

> [!notes]
> Reference: `18-Text.pdf`, page 30. Previous course cross-reference removed on page 30.

---

[big left] Document Similarity

[big left] Content Visualization

[big left] Sentiment Analysis

[big left] Document Exploration

::: 55/45

![](/images/text/figure-31.png)

> [!notes]
> Reference: `18-Text.pdf`, page 31. Original Introduction to Text Visualization cover.

---

[big] Text ⟶ Number

> [!notes]
> Reference: `18-Text.pdf`, page 32. 

---

[big] Text

::: 40/60

[big left] Corpus

[big left] Documents

[big left] Sentences

[big left] Words

> [!notes]
> Reference: `18-Text.pdf`, page 33. 

---

[big] Word Frequency

::: 40/60

<div style="text-align:center;font-size:44px"><span style="display:inline-block;border-bottom:2px solid;padding:12px">Count of word</span><br>Total number of words</div>

> [!notes]
> Reference: `18-Text.pdf`, page 34. 

---

### Word Frequency

![](/images/text/figure-35.png)

> [!notes]
> Reference: `18-Text.pdf`, page 35. Original faceted distributions; numerical data unchanged.

---

[big] Word Frequency

[big] Zipfs Law

::: 40/60

![](/images/text/figure-36.png)

> [!notes]
> Reference: `18-Text.pdf`, page 36. 

---

### Word Frequency

![](/images/text/figure-37.png)

> Bowen, D.A., O’Donnell, J. & Sumner, S.A. Increases in Online Posts About Synthetic Opioids Preceding Increases in Synthetic Opioid Death Rates: a Retrospective Observational Study. J GEN INTERN MED 34, 2702–2704 (2019). [doi:10.1007/s11606-019-05255-5](https://doi.org/10.1007/s11606-019-05255-5)

<!-- Separate visible footer from presenter notes. -->

> [!notes]
> Reference: `18-Text.pdf`, page 37. Original study plot and citation.

---

### TF-IDF

[lead] Term Frequency – Inverse Document Frequency

![](/images/text/figure-38.png)

![](/images/text/tfidf-product.png)

> [!notes]
> Reference: `18-Text.pdf`, page 38. Original equations cropped separately to preserve exact mathematical notation without a new renderer.

---

### TF-IDF Jane Austen

| Book | Word | n | tf | idf | tf_idf |
|---|---|---:|---:|---:|---:|
| Sense Sensibility | elinor | 623 | 0.00519 | 1.79 | 0.00931 |
| Sense Sensibility | marianne | 492 | 0.00410 | 1.79 | 0.00735 |
| Mansfield Park | crawford | 493 | 0.00307 | 1.79 | 0.00551 |
| Pride and Prejudice | darcy | 373 | 0.00305 | 1.79 | 0.00547 |
| Persuasion | elliot | 254 | 0.00304 | 1.79 | 0.00544 |
| Emma | emma | 786 | 0.00488 | 1.79 | 0.00536 |
| Northanger Abbey | tilney | 196 | 0.00252 | 1.79 | 0.00452 |
| Emma | weston | 389 | 0.00242 | 1.79 | 0.00433 |
| Pride and Prejudice | bennet | 294 | 0.00241 | 1.79 | 0.00431 |
| Persuasion | wentworth | 191 | 0.00228 | 1.79 | 0.00409 |

> [!notes]
> Reference: `18-Text.pdf`, page 39. Transcribed original values, including Emma’s reported tf_idf of 0.00536; not recalculated.

---

![](/images/text/figure-40.png)

> [!notes]
> Reference: `18-Text.pdf`, page 40. Original faceted TF-IDF plots, preserving labels, bars, and colors.

---

![](/images/text/figure-41.png)

> [!notes]
> Reference: `18-Text.pdf`, page 41. Original faceted TF-IDF plots, preserving labels, bars, and colors.

---

### TF-IDF

[lead] Term Frequency – Inverse Document Frequency

[big left] Produces Very High Dimensional Data

[big left] Sensible Selection or Interactivity

[big left] Coming Soon to a Lecture Near You: Dimensionality Reduction

> [!notes]
> Reference: `18-Text.pdf`, page 42. 

---

### Syntactic Structures

![](/images/text/figure-43.png)

> [!notes]
> Reference: `18-Text.pdf`, page 43. Original illustrative graphics.

---

### Semantic Structures

![](/images/text/figure-44.png)

> [!notes]
> Reference: `18-Text.pdf`, page 44. Original illustrative graphics.

---

### Word Embeddings

[big left] word2vec

> [!notes]
> Reference: `18-Text.pdf`, page 45. 

---

[big] <span style="color:#ff8000">word</span>

> [!notes]
> Reference: `18-Text.pdf`, page 46. 

---

[big] <span style="color:#ff8000">word</span>

::: 35/65

[lead] <span style="color:#ff8000">Word</span> to your mother

[lead] Bird is the <span style="color:#ff8000">word</span>

[lead] In the beginning was the <span style="color:#ff8000">word</span>

[lead] Of all sad <span style="color:#ff8000">word</span>s of tongue or pen, the saddest are these, 'It might have been.

[lead] I know nothing in the world that has as much power as a <span style="color:#ff8000">word</span>.

> [!notes]
> Reference: `18-Text.pdf`, page 47. Original example sentences with word highlights; unmatched opening quotation retained from source.

---

### Continuous Bag of Words

[lead] <span style="color:#ff8000">Word</span> to your mother

[lead] Bird is the <span style="color:#ff8000">word</span>

[lead] In the beginning was the <span style="color:#ff8000">word</span>

[lead] Of all sad <span style="color:#ff8000">word</span>s of tongue or pen, the saddest are these, 'It might have been.

[lead] I know nothing in the world that has as much power as a <span style="color:#ff8000">word</span>.

::: 55/45

![](/images/text/figure-48.png)

> [!notes]
> Reference: `18-Text.pdf`, page 48. Original network preserves arrows, parameters, and source spelling “tounge”.

---

### Skip Gram

[lead] <span style="color:#ff8000">Word</span> to your mother

[lead] Bird is the <span style="color:#ff8000">word</span>

[lead] In the beginning was the <span style="color:#ff8000">word</span>

[lead] Of all sad <span style="color:#ff8000">word</span>s of tongue or pen, the saddest are these, 'It might have been.

[lead] I know nothing in the world that has as much power as a <span style="color:#ff8000">word</span>.

::: 55/45

![](/images/text/figure-49.png)

> [!notes]
> Reference: `18-Text.pdf`, page 49. Original network preserves arrows, parameters, and source spelling “tounge”.

---

### Word Embedding

![](/images/text/figure-50.png)

> [!notes]
> Reference: `18-Text.pdf`, page 50. Original vector notation and illustrative geometry.

---

### Semantic Embedding

![](/images/text/figure-51.png)

> [!notes]
> Reference: `18-Text.pdf`, page 51. Original vector notation and illustrative geometry.

---

### Embedding Projector

![figure height-540](/embed/text/projector.html)

> [!notes]
> Reference: `18-Text.pdf`, page 52. Source shows https://projector.tensorflow.org/. Default is original screenshot; click to load original app. Live data/interface may differ. If framing is refused, use Open original in new tab.

---

## Diachronic Word Embeddings

> [!notes]
> Reference: `18-Text.pdf`, page 53. 

---

### Diachronic Word Embeddings

![](/images/text/figure-54.png)

> [!notes]
> Reference: `18-Text.pdf`, page 54. Original diagram with historical dates and example text unchanged.

---

### Diachronic Word Embeddings

![](/images/text/figure-55.png)

> [!notes]
> Reference: `18-Text.pdf`, page 55. Original diagram with historical dates and example text unchanged.

---

### Diachronic Word Embeddings

![](/images/text/figure-56.png)

> [!notes]
> Reference: `18-Text.pdf`, page 56. Original diagram with historical dates and example text unchanged.

---

## Text Classification

> [!notes]
> Reference: `18-Text.pdf`, page 57. 

---

### Text Classification

[big] Text ⟶ Class ⟶ Visual

[lead] Model

[lead] Categorical Encoding

> [!notes]
> Reference: `18-Text.pdf`, page 58. Original flow stages: model from text to class; categorical encoding from class to visual.

---

### Sentiment Analysis

[big] Text ⟶ Sentiment ⟶ Visual

[lead] Model

[lead] Visual Encoding

> [!notes]
> Reference: `18-Text.pdf`, page 59. Original flow stages: model from text to sentiment; visual encoding from sentiment to visual.

---

## Semantic Queries

> [!notes]
> Reference: `18-Text.pdf`, page 60. 

---

### Semantic Queries

[lead] The RSR takes a given set of n reference words R, a set of m target words T, and for every word w for which we wish to calculate the RSR we take:

![](/images/text/figure-61.png)

> [!notes]
> Reference: `18-Text.pdf`, page 61. Original relative similarity ratio equation preserves nested sums, inner products, and norm notation.

---

### Semantic Queries

![](/images/text/figure-62.png)

> [!notes]
> Reference: `18-Text.pdf`, page 62. Original longitudinal plot, confidence bands, annotations, and labels; no observations invented from pixels.

---

> [!green] Discussion
>
> Lab Activity

<!-- Separate discussion callout from presenter notes. -->

> [!notes]
> Reference: `18-Text.pdf`, page 64. Discussion transition retained. Preceding page 63 assignment deadline intentionally omitted.

---

> [!green] Discussion
>
> Take sketches.
>
> Do another round of iteration of paper sketches.
>
> Note changes.
>
> Add sketch of interactivity.

<!-- Separate discussion callout from presenter notes. -->

> [!notes]
> Reference: `18-Text.pdf`, page 65. Removed proposal dependency and Canvas upload instruction; retained iteration, noting changes, and sketching interactivity.
