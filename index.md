---
layout: homepage
data: patakarauranga
title:  Page display title goes here
subtitle: Page display subtitle goes here
isHome: true
---

[//]: # "the homepage layout is made up of a set of components. Choose components from the include file. These are added into the default layout, which has a heading and main section which pull the title info in the YAML config above in."

{% include text-section.html %}
{% include 2-col-section.html %}
{% include cards-section.html %}
{% include grid-topic-cards.html %}