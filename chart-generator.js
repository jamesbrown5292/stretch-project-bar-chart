//javascript file containing chart algorithm

let drawChart = function(data, ){};

//GLOBAL VARIABLES
let itemsArray = [];
let valuesArray = [];
let defaultWidth = 5;

// 1. Function to draw a background on the DOM
let drawBackground = function(){
  let backgroundDiv  = document.createElement("div");
  document.body.appendChild(backgroundDiv);
  backgroundDiv.className = "background";
};

// 2. Determine the max value of the yAxis
let addScale = function(){
  let maxVal  = valuesArray[0];
  for (let i=1; i<= valuesArray.length; i++){
    if (valuesArray[i] > maxVal){
      maxVal = valuesArray[i];
    }
  };
  let power = Math.floor(Math.log(maxVal)/Math.LN10)
  let order = Math.pow(10, power);
  let scaleMax = Math.ceil(maxVal/order) * order
  return scaleMax;
};

// 3. Draw the y axis on the background (define a general function first to edit axis styles)


let drawYAxis = function(){
  let scaleMax = addScale();
  let yAxis = document.createElement("div");
  document.getElementsByClassName("background")[0].appendChild(yAxis)
  yAxis.className = "line";
  yAxis.id = "yAxis";
};

// 4. Draw the x axis on the background
let drawXAxis = function(){
  let scaleMax = addScale();
  let xAxis = document.createElement("div");
  document.getElementsByClassName("background")[0].appendChild(xAxis);
  xAxis.className = "line"
  xAxis.id = "xAxis"
  let lineHeight = yAxis.style.height;
  let lineWidth = yAxis.style.width;
  lineHeight = "5px";
  lineWidth = "500px"

  xAxis.style.background = "black"
};

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
