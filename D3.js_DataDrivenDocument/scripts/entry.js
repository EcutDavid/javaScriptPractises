import d3 from 'd3';
require('../style/chart.css');

//select element, like all querySelector

//it can with select || selectAll
let body = d3.selectAll("body");
let div = body.append("div");
div.html("Hello, world!!");

let app = d3.select('#app');
let title = app.append('h1');
title.html('it works');

//change style
app.style('color', '#666')
    .style('border', 'solid')
    .style('text-align', 'center');
