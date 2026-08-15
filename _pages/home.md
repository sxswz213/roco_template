---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<br/>
<style>
.home-intro {
  color: #444;
}

.home-intro a {
  color: #3f9f86;
}

.home-intro h3 {
  color: #000;
}
</style>

<div class="home-intro" markdown="1">

### Hello, I'm Your Name!

I am a [position] in [department/lab] at [institution]. My research focuses on **research area 1**, **research area 2**, and **research area 3**.

I am interested in building reliable, useful, and reproducible research systems for [brief application area]. Before joining [institution], I completed my [degree] in [field] at [previous institution].

Feel free to get in touch if you would like to discuss research ideas, collaborations, or opportunities.

</div>

<div class="container">
<div class="row">
<center>
<img src="{{ site.url }}{{ site.baseurl }}/images/banner-placeholder.svg" width="100%" style="opacity: 0.9;"/><br/>
  <br/>
</center>
</div>
</div>
<br/>

---

### [Publications](/publications/)

{% bibliography --query @*[keywords ^= main] %}

#### Other Works

{% bibliography --query @*[keywords != main] --max 1 %}

[See all publications ->](/publications/)
{: .publication-more-link}

---

### [Academic Services & Activities](/services/)

<div class="home-services">
{% for group in site.data.academic_services %}
<h4>{{ group.section }}</h4>
<ul>
  {% for item in group.items %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
{% endfor %}
</div>
