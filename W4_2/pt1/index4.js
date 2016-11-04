var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"]
var xScale = d3.scale.ordinal()
  .domain(index)
  .range(color);
