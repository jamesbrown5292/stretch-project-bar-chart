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

let addScale = function(values){
  let maxVal  =0;
  for (let i=0; i<=values.length; i++){
    if (values[i] > maxVal){
      maxVal = values[i];
    }
  }
  console.log(maxVal)
  let power = Math.floor(Math.log(maxVal)/Math.LN10)
  let order = Math.pow(10, power);
  let scaleMax = Math.ceil(maxVal/order) * order;
  console.log(scaleMax);
}

let itemsArray = [];
let valuesArray = [];

let addBars = function(items, values){
  for (let i=0; i<items.length; i++){
    let value = values[i];
    let label = items[i]
    function drawBar (value, label){
      let xAxis = document.getElementById(xAxis);
      let newDiv = document.createElement("div");
      newDiv = xAxis.appendChild(newDiv);
      newDiv.setAttribute("id", `bar${i}`);
      newDiv.setAttribute("class", "bar");
    };
  }
}
