---
title: "Academic Services & Activities"
layout: gridlay
sitemap: false
permalink: /services/
---

## Academic Services & Activities

<div class="jumbotron">
{% for group in site.data.academic_services %}
<h4>{{ group.section }}</h4>
<ul>
  {% for item in group.items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
{% endfor %}
</div>
