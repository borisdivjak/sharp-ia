---
icon: assets/images/icon-local-setting.png
---

# Local setting

{% capture content %}
Initial feedback and results from the client questionnaires suggested that having the service 
based in central Lambeth was important for access and useability. Client interviews indicate 
that centrality and accessibility of the service are important factors in people’s ability to 
engage with therapies (SHARP Feasibility Study, 2006). 
{% endcapture %}

{% include section-lead-text.html %}




{% capture column1 %}

<iframe data-iframe-type="gmaps" src="https://snazzymaps.com/embed/16056" width="100%" height="500px"></iframe>

{% endcapture %}


{% capture column2 %}

> "The fact that I have no bad memories here is important. I like that when I come to SHARP 
> it is not about my medication and more about my hopes and the things I want to do with my life. 
> It's a happy place and a happy building which makes me want to go for my sessions."

> "Even on a bad day, it’s easy to get to you know? That helps get me out."

{% endcapture %}


{% include section-two-columns.html %}


<hr />


{% capture column1 %}

### Lambeth’s BME community

SHARP has shown its ability to engage and work with people who represent Lambeth and 
access its mental health services for psychosis. 

Of those who are seen and assessed by SHARP over the last decade 70% have gone on to engage 
in therapy. 

A high proportion of those we have managed to engage and work with have come 
from Lambeth’s BME community.

{% endcapture %}


{% capture column2 %}

<div class="chart-bme"></div>

<script>
var chart = c3.generate({
  bindto: '.chart-bme',
  data: {
    columns: [
			['White', 29.4],
			['Black', 57.2],
			['Asian', 3.8],
			['Mixed', 4.4],
			['Other', 5.2]
    ],
    type : 'pie'
  },
  color: {
		pattern: ['#a2d4f7', '#155b8b', '#f99a00', '#e1007f', '#95c705',  '#98df8a', '#d62728', '#ff9896', '#9467bd']
	},
	transition: {
		duration: 1000
	},
	size: {
      height: 400
	}
});
</script>

{% endcapture %}


{% include section-two-columns.html %}




