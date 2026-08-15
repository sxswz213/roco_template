---
title: "Adventure Logs"
layout: page
sitemap: false
permalink: /blogs/
---

Short notes from the road: research thoughts, kingdom fieldwork, and tiny discoveries made between one magical detour and the next.

<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date_to_string }}: <a href="{{ post.url | relative_url }}">{{ post.title}}</a>
    </li>
  {% endfor %}
</ul>
