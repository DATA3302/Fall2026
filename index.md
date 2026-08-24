---
title: Data Visualization
description: Course website for Cal Poly DATA 3302, Data Visualization.
permalink: /
---
# Data Visualization

<p class="subtitle">DATA 3302 · Fall 2026</p>

<dl class="meta-grid">
  <div>
    <dt>Lecture Room</dt>
    <dd>186-C200</dd>
  </div>
  <div>
    <dt>Lecture Time</dt>
    <dd>MWF 2:00PM-2:50PM</dd>
  </div>
</dl>

<dl class="meta-grid">
  <div>
    <dt>Lab Room</dt>
    <dd>14-257</dd>
  </div>
  <div>
    <dt>Lab Time</dt>
    <dd>MWF 3:00PM-3:50PM</dd>
  </div>
</dl>

<dl class="meta-grid">
  <div>
    <dt>Instructor</dt>
    <dd>Dr. Austin P. Wright</dd>
  </div>
  <div>
    <dt>Office</dt>
    <dd>14-222</dd>
  </div>
  <div>
    <dt>Office hours</dt>
    <dd>Monday, Tuesday, and Wednesday, 1–2 PM</dd>
  </div>
</dl>

## Announcements

<div class="notice" data-course-start="{{ site.data.course.course_start | date: '%Y-%m-%d' }}" data-course-end="{{ site.data.course.course_end | date: '%Y-%m-%d' }}">
  <strong id="course-status">Checking the course calendar…</strong>
  <p><time id="today-date"></time></p>
</div>

## Course schedule

The schedule is tentative. Pay attention to course announcements and emails for updates.

<div class="schedule-table" role="region" aria-label="Week-by-week course schedule" tabindex="0">
  <table>
    <thead>
      <tr>
        <th scope="col">Week</th>
        <th scope="col">Dates</th>
        <th scope="col">Lecture</th>
        <th scope="col">Lab</th>
      </tr>
    </thead>
    <tbody>
      {% for item in site.data.schedule %}
      <tr class="schedule-row" data-start="{{ item.start | date: '%Y-%m-%d' }}" data-end="{{ item.end | date: '%Y-%m-%d' }}">
        <th scope="row"><span class="week-label">{{ item.label }}</span></th>
        <td>{{ item.dates }}</td>
        <td>{{ item.lecture }}</td>
        <td>{{ item.lab | default: '—' }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Quick links

- [Syllabus]({{ '/assets/content/00-Syllabus.pdf' | relative_url }})
- [Assignments]({{ '/assignments/' | relative_url }})
- [Gradescope]({{ site.data.course.links.gradescope }})
- [EdStem]({{ site.data.course.links.edstem }})
- [Book an appointment]({{ site.data.course.links.appointment }})
