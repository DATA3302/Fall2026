---
title: Text Visualization
description: Text as mark and data, word frequency, TF-IDF, embeddings, and semantic queries.
order: 10
course: DATA 3302 Fall 2026
---

# Text Visualization

_Cal Poly DATA 3302: Data Visualization._

_Professor: Austin P. Wright._

---

[medium left vcenter] Traditional Dichotomy

::: 35/65

![](/images/text/native/page-02-native.svg)


---

[medium left vcenter] Traditional Dichotomy

::: 35/65

![](/images/text/native/page-03-native.svg)


---

[medium left vcenter] Text as Mark

[medium left] Text as Data


---

[medium left vcenter] Text as Mark

[medium left] <span class="text-muted">Text as Data</span>


---

![](/images/text/native/page-06-xobject-34.png)


---

![](/images/text/native/page-07-native.svg)

---

```diagram
diagram text-marks-8
node t0-0-0 (2.733,2.039) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t1-0-0 (2.733,3.134) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t2-0-0 (2.733,4.310) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node bar1 (4.731,2.041) shape=rect w=2.839 h=0.588 fill=ink nostroke
node bar2 (4.125,3.136) shape=rect w=1.627 h=0.588 fill=ink nostroke
node bar3 (3.865,4.312) shape=rect w=1.107 h=0.588 fill=ink nostroke
```

---

```diagram
diagram text-marks-9
node t0-0-0 (2.733,2.039) "Text" w=0.775 h=.65 fill=none nostroke color=#0076ba font-size=85
node t1-0-0 (2.733,3.134) "Text" w=0.775 h=.65 fill=none nostroke color=#f27200 font-size=85
node t2-0-0 (2.733,4.310) "Text" w=0.775 h=.65 fill=none nostroke color=#1db100 font-size=85
node bar1 (4.731,2.041) shape=rect w=2.839 h=0.588 fill=blue nostroke
node bar2 (4.125,3.136) shape=rect w=1.627 h=0.588 fill=orange nostroke
node bar3 (3.865,4.312) shape=rect w=1.107 h=0.588 fill=green nostroke
```

---

![](/images/text/native/page-10-native.svg)

---

![](/images/text/native/page-11-native.svg)

---

![](/images/text/native/page-12-native.svg)

---

![](/images/text/native/page-13-native.svg)

---

![](/images/text/native/page-14-native.svg)

---

![](/images/text/native/page-15-native.svg)

---

![](/images/text/native/page-16-native.svg)

---

![](/images/text/native/page-17-native.svg)

---

```diagram
diagram text-marks-18
node t0-0-0 (5.936,1.360) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t1-0-0 (5.840,2.773) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t2-0-0 (4.649,1.878) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t2-1-0 (2.314,2.392) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t3-0-0 (2.734,3.129) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t4-0-0 (5.936,4.750) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t4-1-0 (3.495,4.750) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t5-0-0 (4.928,3.827) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t6-0-0 (3.231,2.701) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node origin (0.99,5.71) w=.01 h=.01 fill=none nostroke
node x (7.08,5.71) w=.01 h=.01 fill=none nostroke
node y (0.99,.53) w=.01 h=.01 fill=none nostroke
edge origin x color=ink
edge origin y color=ink
```

---

![](/images/text/native/page-19-native.svg)

---

```diagram
diagram text-marks-20
node t0-0-0 (5.936,1.360) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t1-0-0 (5.840,2.773) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t2-0-0 (4.649,1.878) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t2-1-0 (1.709,1.878) "Text" w=0.774 h=.65 fill=none nostroke color=ink font-size=85
node t3-0-0 (2.353,3.393) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t4-0-0 (5.936,4.750) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t4-1-0 (3.495,4.750) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
node t5-0-0 (4.928,3.827) "text" w=0.722 h=.65 fill=none nostroke color=ink font-size=85
node t6-0-0 (3.318,2.640) "Text" w=0.775 h=.65 fill=none nostroke color=ink font-size=85
path link1 (2.216,3.076) (1.843,2.199) color=muted
path link2 (2.974,2.480) (2.050,2.042) color=muted
path link3 (3.343,2.961) (3.466,4.433) color=muted
path link4 (3.659,2.446) (4.331,2.061) color=muted
path link5 (4.881,3.510) (4.693,2.199) color=muted
path link6 (4.964,1.753) (5.592,1.500) color=muted
path link7 (5.860,2.456) (5.913,1.682) color=muted
path link8 (5.523,2.538) (4.964,2.118) color=muted
path link9 (5.243,4.119) (5.618,4.462) color=muted
path link10 (5.854,3.095) (5.919,4.433) color=muted
path link11 (3.836,4.752) (5.618,4.752) color=muted
```

---

![](/images/text/native/page-21-native.svg)

---

![](/images/text/native/page-22-native.svg)

---

[medium left vcenter] For emaxlpe, it deson’t mttaer in waht oredr the ltteers in a wrod aepapr, the olny iprmoatnt tihng is taht the frist and lsat ltteer are in the rghit pcale. The rset can be a toatl mses and you can sitll raed it wouthit pobelrm.

[medium left] S1M1L4RLY, Y0UR M1ND 15 R34D1NG 7H15 4U70M471C4LLY W17H0U7 3V3N 7H1NK1NG 4B0U7 17.


---

![](/images/text/native/page-24-xobject-119.png)


---

![](/images/text/native/page-25-native.svg)

---

### Cool Video on ASCII Shader

![figure clip](/embed/text/ascii.html)


> [ASCII shader video](https://www.youtube.com/watch?v=gg40RWiaHRY) 

---

![](/images/text/native/page-27-native.svg)


---

![](/images/text/native/page-28-native.svg)


---

[medium left vcenter] <span class="text-muted">Text as Mark</span>

[medium left] Text as Data


---

[medium left vcenter] <span class="text-muted">Text as Mark</span>

[medium left] Text as Data

---

## Natural-Language Processing (NLP)

---

[medium left vcenter] Document Similarity

[medium left] Content Visualization

[medium left] Sentiment Analysis

[medium left] Document Exploration

::: 55/45

![](/images/text/native/page-31-xobject-165.png)


---

```diagram
diagram text-to-number
node text (0,0) "Text" w=1.4 h=0.65 fill=none nostroke font-size=44
node number (3,0) "Number" w=1.4 h=0.65 fill=none nostroke font-size=44
edge text number color=ink
```

---

[medium left vcenter] Text

::: 40/60

[medium left vcenter] Corpus

[medium left] Documents

[medium left] Sentences

[medium left] Words


---

## Word Frequency

---

[medium left vcenter] Word Frequency

::: 38/62

```diagram
diagram word-frequency
node numerator (0,-0.4) "Count of word" w=3.7 h=0.65 fill=none nostroke font-size=46
path fraction (-2,0) (2,0) color=ink
node denominator (0,0.48) "Total number of words" w=4.4 h=0.65 fill=none nostroke font-size=46
```

---

[medium left vcenter] Word Frequency

::: 35/65

![](/images/text/native/page-35-xobject-184.png)

---

[medium left vcenter] Word Frequency

[medium left] Zipfs Law

::: 40/60

![](/images/text/native/page-36-xobject-189.png)

---

[medium left vcenter] Word Frequency

::: 32/68

![](/images/text/native/page-37-xobject-194.png)

> Bowen, D.A., O’Donnell, J. & Sumner, S.A. Increases in Online Posts About Synthetic Opioids Preceding Increases in Synthetic Opioid Death Rates: a Retrospective Observational Study. J GEN INTERN MED 34, 2702–2704 (2019). [doi:10.1007/s11606-019-05255-5](https://doi.org/10.1007/s11606-019-05255-5)


---

## TF-IDF

---

### TF-IDF


[medium left vcenter] Term Frequency – Inverse Document Frequency

::: 40/60

![](/images/text/native/page-38-native.svg)

![](/images/text/native/tfidf-product.svg)

---
### TF-IDF


<table style="font-size:1em">
<thead><tr><th>Book</th><th>Word</th><th>n</th><th>tf</th><th>idf</th><th>tf_idf</th></tr></thead>
<tbody>
<tr><td>Sense Sensibility</td><td>elinor</td><td>623</td><td>0.00519</td><td>1.79</td><td>0.00931</td></tr>
<tr><td>Sense Sensibility</td><td>marianne</td><td>492</td><td>0.00410</td><td>1.79</td><td>0.00735</td></tr>
<tr><td>Mansfield Park</td><td>crawford</td><td>493</td><td>0.00307</td><td>1.79</td><td>0.00551</td></tr>
<tr><td>Pride and Prejudice</td><td>darcy</td><td>373</td><td>0.00305</td><td>1.79</td><td>0.00547</td></tr>
<tr><td>Persuasion</td><td>elliot</td><td>254</td><td>0.00304</td><td>1.79</td><td>0.00544</td></tr>
<tr><td>Emma</td><td>emma</td><td>786</td><td>0.00488</td><td>1.79</td><td>0.00536</td></tr>
<tr><td>Northanger Abbey</td><td>tilney</td><td>196</td><td>0.00252</td><td>1.79</td><td>0.00452</td></tr>
<tr><td>Emma</td><td>weston</td><td>389</td><td>0.00242</td><td>1.79</td><td>0.00433</td></tr>
<tr><td>Pride and Prejudice</td><td>bennet</td><td>294</td><td>0.00241</td><td>1.79</td><td>0.00431</td></tr>
<tr><td>Persuasion</td><td>wentworth</td><td>191</td><td>0.00228</td><td>1.79</td><td>0.00409</td></tr>
</tbody>
</table>


---
### TF-IDF

![Original faceted TF-IDF bars for six Austen books](/images/text/native/page-40-native.svg)

---

### TF-IDF

![Original faceted TF-IDF plots](/images/text/native/page-41-xobject-220.png)

---

### TF-IDF

[medium left vcenter] Term Frequency – Inverse Document Frequency

[medium left] Produces Very High Dimensional Data

[medium left] Sensible Selection or Interactivity

[medium left] Dimensionality Reduction


---

## Linguistics

---

### Syntactic Structures

![](/images/text/native/page-43-native.svg)


---

### Semantic Structures

![](/images/text/native/page-44-native.svg)


---

## Word Embeddings

---

[medium left vcenter] <span style="color:var(--slide-orange)">word</span>


---

[big left vcenter] <span style="color:var(--slide-orange)">word</span>

::: 15/85

[medium left vcenter] <span style="color:var(--slide-orange)">Word</span> to your mother

[medium left] Bird is the <span style="color:var(--slide-orange)">word</span>

[medium left] In the beginning was the <span style="color:var(--slide-orange)">word</span>

[medium left] Of all sad <span style="color:var(--slide-orange)">word</span>s of tongue or pen, the saddest are these, 'It might have been'.

[medium left] I know nothing in the world that has as much power as a <span style="color:var(--slide-orange)">word</span>.


---

### Continuous Bag of Words

[medium left vcenter] <span style="color:var(--slide-orange)">Word</span> to your mother

[medium left] Bird is the <span style="color:var(--slide-orange)">word</span>

[medium left] In the beginning was the <span style="color:var(--slide-orange)">word</span>

[medium left] Of all sad <span style="color:var(--slide-orange)">word</span>s of tongue or pen, the saddest are these, 'It might have been'.

[medium left] I know nothing in the world that has as much power as a <span style="color:var(--slide-orange)">word</span>.

::: 52/48

```diagram
diagram cbow
node context0 (0,-1.8) "all" w=1 h=0.62 fill=ink stroke=ink font-size=38
node context1 (0,-0.9) "sad" w=1 h=0.62 fill=ink stroke=ink font-size=38
node context2 (0,0) "" w=1 h=0.62 fill=orange stroke=orange font-size=38
node context3 (0,0.9) "of" w=1 h=0.62 fill=ink stroke=ink font-size=38
node context4 (0,1.8) "tounge" w=1 h=0.62 fill=ink stroke=ink font-size=38
node word (2.4,0) "word" w=1 h=0.62 fill=orange stroke=orange font-size=40
edge context0 word via (1.2,-1.44) smooth label="θ₁" color=ink font-size=34
edge context1 word via (1.2,-0.72) smooth label="θ₂" color=ink font-size=34
edge context3 word via (1.2,0.72) smooth label="θ₃" color=ink font-size=34
edge context4 word via (1.2,1.44) smooth label="θ₄" color=ink font-size=34
```

---

### Skip Gram

[medium left vcenter] <span style="color:var(--slide-orange)">Word</span> to your mother

[medium left] Bird is the <span style="color:var(--slide-orange)">word</span>

[medium left] In the beginning was the <span style="color:var(--slide-orange)">word</span>

[medium left] Of all sad <span style="color:var(--slide-orange)">word</span>s of tongue or pen, the saddest are these, 'It might have been.

[medium left] I know nothing in the world that has as much power as a <span style="color:var(--slide-orange)">word</span>.

::: 52/48

```diagram
diagram skip-gram
node context0 (2.4,-1.8) "all" w=1 h=0.62 fill=ink stroke=ink font-size=38
node context1 (2.4,-0.9) "sad" w=1 h=0.62 fill=ink stroke=ink font-size=38
node context2 (2.4,0) "" w=1 h=0.62 fill=orange stroke=orange font-size=38
node context3 (2.4,0.9) "of" w=1 h=0.62 fill=ink stroke=ink font-size=38
node context4 (2.4,1.8) "tounge" w=1 h=0.62 fill=ink stroke=ink font-size=38
node word (0,0) "word" w=1 h=0.62 fill=orange stroke=orange font-size=40
edge word context0 via (1.2,-1.44) smooth label="θ₁" color=ink font-size=34
edge word context1 via (1.2,-0.72) smooth label="θ₂" color=ink font-size=34
edge word context3 via (1.2,0.72) smooth label="θ₃" color=ink font-size=34
edge word context4 via (1.2,1.44) smooth label="θ₄" color=ink font-size=34
```

---

### Word Embedding

```diagram
diagram word-embedding
node word (0,0) "word" w=1.6 h=1 fill=orange stroke=orange font-size=64
node equals (1.8,0) "=" w=0.8 h=0.65 fill=none nostroke font-size=64
node vector (3,0) "θ" w=1 h=0.65 fill=none nostroke color=orange font-size=76
path vector-arrow (2.85,-0.4) (3.15,-0.4) (3.08,-0.48) (3.15,-0.4) (3.08,-0.32) color=orange
```

---

### Semantic Embedding

```diagram
diagram semantic-embedding
node eq0 (-0.5,-2.1) "king" w=0.9 h=.65 fill=none nostroke font-size=45
path vec0 (-0.725,-2.48) (-0.275,-2.48) (-0.34,-2.55) (-0.275,-2.48) (-0.34,-2.41) color=ink
node eq1 (0.15,-2.1) "−" w=0.3 h=.65 fill=none nostroke font-size=45
node eq2 (0.75,-2.1) "man" w=0.9 h=.65 fill=none nostroke font-size=45
path vec2 (0.525,-2.48) (0.975,-2.48) (0.905,-2.55) (0.975,-2.48) (0.905,-2.41) color=ink
node eq3 (1.35,-2.1) "+" w=0.3 h=.65 fill=none nostroke font-size=45
node eq4 (2.1,-2.1) "woman" w=1.2 h=.65 fill=none nostroke font-size=45
path vec4 (1.8,-2.48) (2.4,-2.48) (2.33,-2.55) (2.4,-2.48) (2.33,-2.41) color=ink
node eq5 (2.9,-2.1) "=" w=0.3 h=.65 fill=none nostroke font-size=45
node eq6 (3.7,-2.1) "queen" w=1.1 h=.65 fill=none nostroke font-size=45
path vec6 (3.42,-2.48) (3.975,-2.48) (3.90,-2.55) (3.975,-2.48) (3.90,-2.41) color=ink
node origin (-0.4,1.65) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node x (4,1.65) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node y (-0.4,-1.35) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge origin x color=muted
edge origin y color=muted
node woman (0.4,0.2) "woman" w=1 h=0.55 fill=orange stroke=orange font-size=32
node man (1.45,1.3) "man" w=0.9 h=0.55 fill=orange stroke=orange font-size=32
node queen (1.7,-1.1) "queen" w=1 h=0.55 fill=orange stroke=orange font-size=32
node king (2.75,0) "king" w=0.9 h=0.55 fill=orange stroke=orange font-size=32
edge woman man noarrow dash="4 8" color=muted
edge queen king noarrow dash="4 8" color=muted
```

---

### Embedding Projector

![figure clip](/embed/text/projector.html)


> [TensorFlow Embedding Projector](https://projector.tensorflow.org/) 

---

## Diachronic Word Embeddings


---

### Diachronic Word Embeddings

![](/images/text/native/page-54-xobject-288.png)


---

### Diachronic Word Embeddings

```diagram
diagram diachronic-context
node panel0 (-1.65,-2.1) enclose (1.65,1.8) fill=none stroke=muted
node o0 (-0.8,1.1) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node x0 (0.8,1.1) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node y0 (-0.8,-0.3) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge o0 x0 color=muted
edge o0 y0 color=muted
node date0 (0.0,-1.65) "March 2013" w=3 h=0.65 fill=none nostroke font-size=48
node quote0 (0.0,-1) "“My doctor just prescribed me fentanyl.”" w=3 h=0.9 fill=none nostroke font-size=44
node v0 (0.55,0.35) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge o0 v0 color=orange
node panel1 (1.95,-2.1) enclose (5.25,1.8) fill=none stroke=muted
node o1 (2.8,1.1) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node x1 (4.4,1.1) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node y1 (2.8,-0.3) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge o1 x1 color=muted
edge o1 y1 color=muted
node date1 (3.6,-1.65) "April 2013" w=3 h=0.65 fill=none nostroke font-size=48
node quote1 (3.6,-1) "“My friend just overdosed on fentanyl.”" w=3 h=0.9 fill=none nostroke font-size=44
node v1 (4.15,-0.2) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge o1 v1 color=magenta
node panel2 (5.55,-2.1) enclose (8.85,1.8) fill=none stroke=muted
node o2 (6.4,1.1) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node x2 (8.0,1.1) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node y2 (6.4,-0.3) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge o2 x2 color=muted
edge o2 y2 color=muted
node change (7.2,-1.25) "Changes in drug use affect linguistic context" w=3 h=0.8 fill=none nostroke font-size=44
node vectors (7.2,-0.65) "which affects vector representations" w=3 h=0.7 fill=none nostroke font-size=44
node old (7.75,0.35) "" w=0.01 h=0.01 fill=none nostroke font-size=44
node new (7.75,-0.2) "" w=0.01 h=0.01 fill=none nostroke font-size=44
edge o2 old color=orange
edge o2 new color=magenta
edge old new color=muted
```

---

### Diachronic Word Embeddings

![](/images/text/native/page-56-xobject-307.png)


---

## Text Classification


---

### Text Classification

```diagram
diagram classification
node text (0,0) "Text" w=1.5 h=0.65 fill=none nostroke font-size=54
node class (3,0) "Class" w=2.4 h=0.65 fill=none nostroke font-size=54
node visual (6.5,0) "Visual" w=1.5 h=0.65 fill=none nostroke font-size=54
edge text class label="Model" color=ink font-size=34
edge class visual label="Categorical Encoding" color=ink font-size=34
```

---

### Sentiment Analysis

```diagram
diagram sentiment
node text (0,0) "Text" w=1.5 h=0.65 fill=none nostroke font-size=54
node class (3,0) "Sentiment" w=2.4 h=0.65 fill=none nostroke font-size=54
node visual (6.5,0) "Visual" w=1.5 h=0.65 fill=none nostroke font-size=54
edge text class label="Model" color=ink font-size=34
edge class visual label="Visual Encoding" color=ink font-size=34
```

---

## Semantic Queries


---

### Semantic Queries

[medium left vcenter] The RSR takes a given set of n reference words R, a set of m target words T, and for every word w for which we wish to calculate the RSR we take:

![](/images/text/native/page-61-native.svg)


---

### Semantic Queries

![](/images/text/native/page-62-xobject-338.png)


---
