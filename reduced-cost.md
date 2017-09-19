---
icon: assets/images/icon-reduced-cost.png
body-class: subpage-green
---

# Reduced cost to services

{% capture content %}
SHARP has shown a reduction in costs to the trust over the last decade. Engagement in SHARP 
interventions by those experiencing psychosis has lead to reduction in bed usage . Evidence 
gathered demonstrates that SHARP has a positive impact on wellbeing of its users while creating 
cost savings for the trust over the last decade (McDonald & Josefsberg, unpublished).  
{% endcapture %}

{% include section-lead-text.html %}





{% capture column1 %}

### 61% reduction in team episodes after first SHARP episode

<div class="chart chart-bed-days chart-type-bar" data='
{
  "bindto": ".chart-bed-days",
  "padding": {
	  "top": 60
  },
  "data": {  
    "columns": [
		["before", 2722771, 897558],
		["after", 1079684, 611087]
    ],
    "type" : "bar",
    "labels": true,
	"names": {
		"before": "6 months BEFORE first episode",
		"after": "6 months AFTER first episode"
	}
  },
  "data_12": {  
    "columns": [
		["before", 5722771, 1097558],
		["after", 2079684, 1211087]
    ],
    "type" : "bar",
    "labels": true,
	"names": {
		"before": "12 months BEFORE first episode",
		"after": "12 months AFTER first episode"
	}
  },
  "axis": {
	  "x": {
	    "type": "category",
	    "categories": ["SHARP", "Control"]
	  },
	  "y": {
	    "show": false
	  }
  },
  "color": {
		"pattern": ["#ffffff","#155b8b", "#ffffff","#155b8b",  "#e1007f", "#6ba025", "#d62728",  "#ffcd34", "#a2d4f7", "#ff9896", "#9467bd"]
	},
	"transition": {
		"duration": 1500
	},
	"size": {
    "height": 400
	},
	"legend": {
	  "position": "inset",
		"inset": {
	    "anchor": "top-left",
	    "x": -5,
	    "y": -60,
	    "step": 3
		}
  },
  "tooltip": {
	  "show": false
  },
  "interaction": {
	  "enabled": false
  },
	"grid": {
    "y": {
	    "show": true
    }
	}
}
'></div>

<div class="button-group">
	<a class="btn btn-data-toggler" data-chart="chart-bed-days" data-set="data" href="#">6 months period</a> 
	<a class="btn btn-data-toggler" data-chart="chart-bed-days" data-set="data_12" href="#">12 months period</a> 
</div>

{% endcapture %}










{% capture column2 %}

### 61% reduction in team episodes after first SHARP episode

<div class="chart chart-bed-days2 chart-type-bar" data='
{
  "bindto": ".chart-bed-days2",
  "padding": {
	  "bottom": 20,
	  "top": 60
  },
  "data": {  
    "columns": [
			["6 months BEFORE first episode", 2722771, 897558],
			["6 months AFTER first episode", 1079684, 611087]
    ],
    "type" : "bar",
    "labels": true
  },
  "axis": {
	  "x": {
	    "type": "category",
	    "categories": ["SHARP", "Control"]
	  },
	  "y": {
	    "show": false
	  }
  },
  "color": {
		"pattern": ["#ffffff","#155b8b",  "#e1007f","ffffff", "#d62728",  "#6ba025", "#ffcd34", "#a2d4f7", "#ff9896", "#9467bd"]
	},
	"transition": {
		"duration": 2000
	},
	"size": {
    "height": 400
	},
	"legend": {
	  "position": "inset",
		"inset": {
	    "anchor": "top-left",
	    "x": -5,
	    "y": -60,
	    "step": 3
		}
  },
  "tooltip": {
	  "show": false
  },
  "interaction": {
	  "enabled": false
  },
	"grid": {
    "y": {
	    "show": true
    }
	}
}
'></div>


{% endcapture %}


{% include section-two-columns.html %}

<p class="source">Source: Some study conducted by SLaM or Something Else (2014)</p>

<hr />


{% capture column1 %}

### Some financial statistics stuff

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis mollis massa. Fusce dictum nunc felis, 
quis aliquam metus interdum semper. Quisque vitae gravida metus. Donec vel turpis urna. Etiam scelerisque 
nec enim sed pellentesque. Etiam fringilla ac enim eu ornare. Donec mauris leo, pretium quis ultrices in, 
venenatis sit amet nunc.

{% endcapture %}


{% capture column2 %}

{% capture main-stat %}£2.5M{% endcapture %}
{% capture description %}Estimated yearly saving to the trust{% endcapture %}
{% include stat-circle.html %}

{% endcapture %}


{% include section-two-columns.html %}





