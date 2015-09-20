import d3 from 'd3';
require('../style/chart.css');

//select element, like all querySelector

//it can with select || selectAll
let body = d3.selectAll("body");
let div = body.append("div");
// div.html("Hello, world!!");

let app = d3.select('#app');
let title = app.append('h1');
title.html('it works');

d3.select('#sectionB').append('div')
  .html('added from Channing style code');

//The recommended indentation pattern for method chaining is four spaces for methods that preserve
//the current selection and two spaces for methods that change the selection.

//change style
app.style('color', '#666')
    .style('border', 'solid')
    .style('text-align', 'center');


//add chart in data
let data = [43, 8, 15, 16, 23, 42];
d3.select(".chart")
  .selectAll("div")
    .data(data)//bind data to selector. seletor might not include any data-binding.
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
