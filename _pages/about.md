---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About Little Roco

{% for member in site.data.pi %}

<div class="jumbotron">
<div class="row">
<div class="col-sm-3">
  <img src="{{ "/images/" | append: member.photo | relative_url }}" width="100%" style="max-width:250px"/>
</div>
<div class="col-sm-9 col-xs-12" style="top: 10px">
  
  <h3>{{ member.name }}</h3>
  
  <h5><i>{{ member.info }}</i></h5>
  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-3x"></i></a> {% endif %}
  {% if member.cv %} <a href="{{ member.cv | relative_url }}" target="_blank"><i class="ai ai-cv-square ai-3x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-3x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-3x"></i></a> {% endif %}
  {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-3x"></i></a> {% endif %}

  <p>
    Little Roco studies how spirit companions form reliable teams in a kingdom full of surprises. The work blends magical field observation, cooperative battle strategy, and a healthy respect for spells that may or may not behave as expected.
  </p>

  <p>
    The long-term goal is simple: help every spirit discover its best role, support its teammates, and shine brighter as part of a thoughtful, well-coordinated team.
  </p>

  <ul style="overflow: hidden">
    {% for education in member.education %}
      <li>{{ education | replace: "-","&#8211;" }}</li>
    {% endfor %}
  </ul>

</div>
</div>
</div>
{% endfor %}

<div class="jumbotron">
  <h3>Research Interests</h3>
  <ul>
    <li>Multi-spirit team coordination and role assignment.</li>
    <li>Adaptive decision-making during unpredictable magical encounters.</li>
    <li>Trust, complementary abilities, and magical chemistry in collaborative teams.</li>
    <li>Readable field notes and reproducible spell experiments.</li>
  </ul>
</div>

{% if site.data.awards %}

<div class="jumbotron">
  <h3>Awards & Badges</h3>
  <ul>
    {% for award in site.data.awards %}
      <li>{{ award.name | replace: "-","&#8211;" }}</li>
    {% endfor %}
  </ul>
</div>
{% endif %}
