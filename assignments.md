---
title: Assignments
description: Assignment instructions for Cal Poly DATA 3302.
permalink: /assignments/
---
# Assignments

{% for assignment in site.data.assignments.assignments %}
<div class="assignment">
  <h3>
    {% if assignment.url %}<a href="{{ assignment.url | relative_url }}">{{ assignment.title }}</a>{% else %}{{ assignment.title }}{% endif %}
    {% if assignment.status %}<span class="status">{{ assignment.status }}</span>{% endif %}
  </h3>
  {% if assignment.due %}<p><strong>Due:</strong> {{ assignment.due }}</p>{% endif %}
  <p>{{ assignment.description }}</p>
</div>
{% endfor %}

## Final project

More detail about the final project will be posted soon
