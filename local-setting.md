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


<!-- <iframe data-iframe-type="gmaps" src="https://www.google.com/maps/d/embed?mid=1dVOHdZ2XeRato2gTccLiX4MtAeU&hl=en" width="100%" height="500px"></iframe> -->
<iframe data-iframe-type="gmaps" src="https://snazzymaps.com/embed/16056" width="100%" height="500px"></iframe> 


<hr />


{% capture column1 %}

### Lambeth’s BME community

SHARP has shown its ability to engage and work with people in Lambeth who access its secondary-care 
mental health services for psychosis. 

Of those who are seen and assessed by SHARP over the last decade 70% have gone on to engage 
in therapy. 

A high proportion of those we have managed to engage and work with have come 
from and are representative of Lambeth’s BME community.

> "Even on a bad day, it’s easy to get to you know? That helps get me out."
> - Person accessing SHARP services 

{% endcapture %}


{% capture column2 %}

<h4 class="chart-toggle-text" data-chart="#chart-bme" data-set="data">Ethnicity of people attending SHARP out of total caseload (SHARP database)</h4>
<h4 class="chart-toggle-text" data-chart="#chart-bme" data-set="data_lambeth">Ethnicity of people accessing secondary mental health services for psychosis in Lambeth (ePJS, 2017)</h4>

<div id="chart-bme" class="chart" data='
{
  "bindto": "#chart-bme",
  "data": {  
    "columns": [
			["White", 39.1],
			["Black", 45.7],
			["Asian", 5.7],
			["Mixed", 3.8],
			["Other", 5.7]
    ],
    "type" : "pie",
    "order": null
  },
  "data_lambeth": {  
    "columns": [
			["White", 29.4],
			["Black", 57.2],
			["Asian", 3.8],
			["Mixed", 4.4],
			["Other", 5.2]
    ],
    "type" : "pie",
    "order": null    
  },
  "color": {
		"pattern": ["#a2d4f7", "#155b8b", "#f99a00", "#e1007f", "#95c705",  "#98df8a", "#d62728", "#ff9896", "#9467bd"]
	},
	"transition": {
		"duration": 1500
	},
	"size": {
    "height": 400
	}
}
'></div>


<div class="button-group">
	<a class="btn btn-data-toggler" data-chart="#chart-bme" data-set="data" href="#">SHARP</a> 
	<a class="btn btn-data-toggler" data-chart="#chart-bme" data-set="data_lambeth" href="#">Lambeth average</a> 
</div>


{% endcapture %}


{% include section-two-columns.html %}
