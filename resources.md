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

## Course notes

{% if resources.readings.size > 0 %}
<ol class="resource-list course-notes">
  {% for reading in resources.readings %}
    <li>
      <strong>{{ reading.title }}</strong>
      {% if reading.topic %}<span class="resource-meta">{{ reading.topic }}</span>{% endif %}
      <span class="resource-links">
        {% for material in reading.materials %}
          <a href="{{ material.url | relative_url }}">{{ material.label }}</a>{% unless forloop.last %}<span aria-hidden="true"> · </span>{% endunless %}
        {% endfor %}
      </span>
    </li>
  {% endfor %}
</ol>
{% else %}

Course notes and/or slides will appear here as they are published.

{% endif %}
