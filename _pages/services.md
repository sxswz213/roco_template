---
title: "Activities"
layout: gridlay
sitemap: false
permalink: /services/
---

## Kingdom Activities

<div class="jumbotron">
<p>
  Outside the main research quests, Little Roco helps review young trainers' ideas, organizes small strategy workshops, and collects field notes from magical corners of the kingdom.
</p>
{% for group in site.data.academic_services %}
<h4>{{ group.section }}</h4>
<ul>
  {% for item in group.items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
{% endfor %}
</div>
