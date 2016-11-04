var arr = [40, 10, 98]
var xScale = d3.scale.linear()
  .domain([d3.min(arr), d3.max(arr)])
  .range([0, 255]);
