//javascript file containing chart algorithm

let drawChart = function(data, ){};

let drawAxes = function(){
  let body = document.querySelector("body")
  let background  = document.createElement("div");
  body.appendChild(background);
  background.className = "background";
  let yAxis = document.createElement("div");
  yAxis.className = "line";
  yAxis.id = "yAxis";
  let xAxis = document.createElement("div");
  xAxis.className = "line";
  xAxis.id = "xAxis";
  background.appendChild(yAxis);
  background.appendChild(xAxis);
}

let itemsArray = [];
let valuesArray = [];
