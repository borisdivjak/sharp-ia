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


### Analysis of impact of SHARP treatment on subsequent hospital admissions using resampling

<hr />











{% capture column1 %}

### Average number of bed days

<div class="chart chart-bed-days chart-type-bar" data='
{
  "bindto": ".chart-bed-days",
  "padding": {
	  "top": 60,
	  "bottom": 10
  },
  "data": {  
    "columns": [
		["before", 84401, 66295],
		["after", 25505, 35070]
    ],
    "type": "bar",
    "labels": true,
	"names": {
		"before": "6 months BEFORE first episode",
		"after": "6 months AFTER first episode"
	}
  },
  "data_12": {  
    "columns": [
		["before", 119806, 88402],
		["after", 99376, 105690]
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

### Average number of in patient episodes 

<div class="chart chart-episodes chart-type-bar" data='
{
  "bindto": ".chart-episodes",
  "padding": {
	  "top": 60,
	  "bottom": 10
  },
  "data": {  
    "columns": [
		["before", 370, 331],
		["after", 180, 275]
    ],
    "type": "bar",
    "labels": true,
	"names": {
		"before": "6 months BEFORE first episode",
		"after": "6 months AFTER first episode"
	}
  },
  "data_12": {  
    "columns": [
		["before", 461, 396],
		["after", 319, 366]
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
	<a class="btn btn-data-toggler" data-chart="chart-episodes" data-set="data" href="#">6 months period</a> 
	<a class="btn btn-data-toggler" data-chart="chart-episodes" data-set="data_12" href="#">12 months period</a> 
</div>

{% endcapture %}


{% include section-two-columns.html %}






<hr />












{% capture column1 %}

### Estimated cost saving in bed days over 10 years

<div class="chart chart-cost-saving chart-type-bar" data='
{
  "bindto": ".chart-cost-saving",
  "padding": {
	  "top": 60,
	  "bottom": 10
  },
  "data": {  
    "columns": [
		["after", 24795216, 13145670]
    ],
    "type": "bar",
    "labels": true,
	"names": {
		"after": "based on reduced bed days 6 months after first episode"
	}
  },
  "data_12": {  
    "columns": [
		["after", 8601030, -7278555]
    ],
    "type" : "bar",
    "labels": true,
	"names": {
		"after": "based on reduced bed days 12 months after first episode"
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
		"pattern": ["#ffffff","#155b8b",  "#e1007f", "#6ba025", "#d62728",  "#ffcd34", "#a2d4f7", "#ff9896", "#9467bd"]
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
	<a class="btn btn-data-toggler" data-chart="chart-cost-saving" data-set="data" href="#">6 months period</a> 
	<a class="btn btn-data-toggler" data-chart="chart-cost-saving" data-set="data_12" href="#">12 months period</a> 
</div>

{% endcapture %}










{% capture column2 %}

{% endcapture %}


{% include section-two-columns.html %}





<p class="source">Source: McDonald & Josefsberg, unpublished</p>

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





