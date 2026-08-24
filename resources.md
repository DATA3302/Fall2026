---
title: Resources
description: Syllabus and course notes for Cal Poly DATA 3302.
permalink: /resources/
---
# Resources

{% assign resources = site.data.resources %}

## Syllabus

<ul class="resource-list">
  {% for document in resources.syllabus %}
    <li>
      {% if document.file %}<a href="{{ document.file | relative_url }}">{{ document.title }}</a>{% else %}{{ document.title }}{% endif %}
      {% if document.status %}<span class="status">{{ document.status }}</span>{% endif %}
    </li>
  {% endfor %}
</ul>

## Slides

<ul class="resource-list">
  {% for document in resources.slides %}
    <li>
      {% if document.file %}<a href="{{ document.file | relative_url }}">{{ document.title }}</a>{% else %}{{ document.title }}{% endif %}
      {% if document.status %}<span class="status">{{ document.status }}</span>{% endif %}
    </li>
  {% endfor %}
</ul>
