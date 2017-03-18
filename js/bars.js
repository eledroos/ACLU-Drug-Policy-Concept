// Simple Bar Chart to show cost of incarceration vs methadone treatment

// Create data array of values to visualize
var dataArray = ["$53,000", "$5,000"]; // Original values for display.
var displayArray = [250, 23.5849]; // Divided 212 to scale for display,
                                   // there has to be a better way to do this...
var titleArray = ["Incarceration", "Methadone Treatment"];
var subtitleArray = ["1 year, MA Corrections", "1 year, Drug Rehab Council"];
var colors = ["#FE3824","#D8D8D8"];

// Create variable for the SVG
var svg = d3.select(".expensive").append("svg")
          .attr("height","350")
          .attr("width","600");

// Select, append to SVG, and add attributes to rectangles for bar chart
svg.selectAll("rect")
    .data(displayArray)
    .enter().append("rect")
          .attr("class", "bar")
          .attr("height", function(d, i) {return (d)})
          .attr("width","280")
          .attr("x", function(d, i) {return (i * 300)})
          .attr("y", function(d, i) {return 300 - (d)})
          .style('fill', function(d, i){return d>100?'#FE3824':'#D8D8D8';}); // Sets to red if d returns above 100, otherwise gray.


// Select, append to SVG, and add attributes to text
svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d})
          .attr("class", "bar-text")
          .attr("x", function(d, i) {return (i * 300) + 10})
          .attr("y", 293); // Arbitrary value,
                           // not set dynamically so that it's baseline
                           // with the graph.

// Title
svg.selectAll("title-text")
    .data(titleArray)
    .enter().append("text")
    .text(function(d) {return d})
          .attr("class", "title-text")
          .attr("x", function(d, i) {return (i * 300)})
          .attr("y", 330)
          .style('fill', 'white');

// Subtitle
svg.selectAll("subtitle-text")
    .data(subtitleArray)
    .enter().append("text")
    .text(function(d) {return d})
          .attr("class", "subtitle-text")
          .attr("x", function(d, i) {return (i * 300)})
          .attr("y", 348)
          .style('fill', '#EC432D');
