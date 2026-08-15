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

.home-intro h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
}
</style>

<div class="home-intro" markdown="1">

## Hi, I’m Little Roco! ✨

I am currently pursuing a degree in **Spirit Studies** at the **Roco Kingdom Academy of Magic**. My research focuses on cooperative strategies for multi-spirit battle teams, including role assignment, real-time coordination, and adaptive decision-making in unpredictable encounters.

I believe a great team is not simply a collection of the strongest spirits. It is built through trust, complementary abilities, and a little bit of magical chemistry. My goal is to help every spirit find its perfect role and make the whole team shine brighter together.

When I am not studying battle formations or collecting research notes, you can usually find me exploring hidden corners of the kingdom, meeting new spirit companions, or testing slightly questionable spells. Feel free to knock on my door if you would like to exchange ideas, share an adventure, or team up for the next challenge! 🌿

</div>

<div class="container">
<div class="row">
<center>
<img src="{{ "/images/banner.jpg" | relative_url }}" width="100%" style="opacity: 0.9;"/><br/>
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

### [Kingdom Activities](/services/)

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
