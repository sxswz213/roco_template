---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Publications

{% bibliography --query @*[keywords ^= main] %}

### Other Works

{% bibliography --query @*[keywords != main] %}
