function random(n, m) {
  var rScale = d3.scale.linear()
    .domain([0, 1])
    .rangeRound([n, m]);
  return rScale(Math.random());
}
