import d3 from 'd3';

d3.select("#someDiv").style("border", "5px darkgray dashed").style("width", "50px").style("height", "50px");
d3.select("#someDiv").attr("id", "newID");
d3.select("#someCheckbox").property("checked", true);

//how about vanilla querySelector? Nop we can not write func like this.
// document.querySelector("#someDiv").style("border", "5px darkgray dashed").style("width", "50px").style("height", "50px");
