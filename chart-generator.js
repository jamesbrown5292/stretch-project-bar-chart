//javascript file containing chart algorithm

//GLOBAL VARIABLES
let itemsArray = [];
let valuesArray = [];
let defaultWidth = 5;
let leftOffset = 5;
let createDiv = function(){return document.createElement("div")};

//1. Draw a line representing the y-axis
let drawYAxis = function(){
  let newDiv = createDiv();
  newDiv.setAttribute("id","yAxis");
  document.getElementsByTagName("main")[0].appendChild(newDiv);
}

//2. Draw and append a line representing the x-axis
let drawXAxis = function(){
  let newDiv = createDiv();
  newDiv.setAttribute("id","xAxis");
  document.getElementsByTagName("main")[0].appendChild(newDiv);
}

// 2. Determine the max value of the yAxis, divide the y axis up into units
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

// 3. add a data bar to the chart
let addBar = function (){
  let newDiv = createDiv();
  newDiv.setAttribute("class", "bar");
  document.getElementById("xAxis").appendChild(newDiv);
  newDiv.setAttribute(`id`, `bar`);

}
