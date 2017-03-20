// Attempt at creating a map of Boston using D3

var width = 600;
var height = 480;

var svg = d3.select(".racism").append("svg")
    .attr("width", "600")
    .attr("height", "480");

var g = svg.append("g");

var albersProjection = d3.geo.albers()
    .scale(160000) // Adjust size of the map, here
    .rotate([71.057,0])
    .center([0, 42.313])
    .translate([width/2,height/2]);

var geoPath = d3.geo.path()
    .projection(albersProjection);

var radius,
		zoom;

g.selectAll( "path" )
    .data(neighborhoods_json.features)
    .enter()
    .append("path")
    .attr("fill", "#CCCCCC")
    .attr( "stroke", "#E5E5E5")
    .attr("d", geoPath);

zoom = d3.behavior.zoom()
.scaleExtent([1, 16])
.on("zoom", function() {
         g.attr("transform","translate("+
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
         radius.range([2/d3.event.scale, 30/d3.event.scale]);
         facilities
             .attr('d', path.pointRadius(function(d) {
                return radius(d.properties.total_emissions);
         }))
            .attr("stroke-width", (1/d3.event.scale)*2+"px");
    });

svg.call(zoom);
