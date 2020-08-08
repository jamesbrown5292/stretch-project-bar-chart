
//GLOBAL VARIABLES
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

// Determine the max value of the yAxis, divide the y axis up into units
let addScale = function(){ //problem - this does not work if data values jump between orders of magnitude
  maxVal  = valuesArray[0];
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

let addScaleMarkers = function(){
  let markHeight = 0;
  let scaleMarkerContainer = createDiv();
  scaleMarkerContainer = document.getElementById("yAxis").appendChild(scaleMarkerContainer).setAttribute("class", "scaleMarkerContainer");
  document.getElementsByClassName("scaleMarkerContainer")[0].setAttribute("id", "scaleMarkerContainer")

  for (let i=0; i < 5; i++){ //do this 5 times:
    let scaleMarker = createDiv();
    scaleMarker = document.getElementById("scaleMarkerContainer").appendChild(scaleMarker).setAttribute(`id`, `scaleMarker ${i}`);;
    scaleMarker = document.getElementById(`scaleMarker ${i}`)
    scaleMarker.setAttribute("class", "scaleMarker");
    scaleMarker.style.position = "absolute";
    scaleMarker.style.top = `${markHeight}px`;
    scaleMarker.style.left = `-15px`;

    let scaleMax = addScale()
    let barHeightUnit = 500 / scaleMax
    markHeight += 20 * barHeightUnit;
  }
}

//Get max value
let getMaxVal = function(){
  let maxVal  = valuesArray[0];
  for (let i=1; i<= valuesArray.length; i++){
    if (valuesArray[i] > maxVal){
      maxVal = valuesArray[i];
    }
  }
};

// 3. add a data bar to the chart


let addBar = function (){
  let newDiv = createDiv();
  newDiv.setAttribute("class", "bar");
  document.getElementById("xAxis").appendChild(newDiv);
  newDiv.setAttribute(`id`, `bar`);

}

// 4. add label to each bar
let addLabel = function(i){
  let newDiv = createDiv();
  newDiv.setAttribute(`id`, `dataLabel ${i}`);
  newDiv.setAttribute("class", "dataLabel");
  document.getElementById(`bar ${i}`).appendChild(newDiv);
  document.getElementById(`dataLabel ${i}`).innerHTML = itemsArray[i];
}

//5. Add value label to each bar

let addValueLabel = function(i){
  let newDiv = createDiv();
  newDiv.setAttribute(`id`, `dataValueLabel ${i}`);
  newDiv.setAttribute("class", "dataValueLabel");
  document.getElementById(`bar ${i}`).appendChild(newDiv);
  document.getElementById(`dataValueLabel ${i}`).innerHTML = valuesArray[i];
  document.getElementById(`dataValueLabel ${i}`).style.position = "absolute";
  document.getElementById(`dataValueLabel ${i}`).style.top = "-16px";
  let labelOffset = (500 / valuesArray.length) / 2;
  document.getElementById(`dataValueLabel ${i}`).style.left = `${labelOffset}px`;
  document.getElementById(`dataValueLabel ${i}`).style.bottom = "2px";

}

//Add the graph title
let addTitle = () => {
  let chartTitle = document.querySelector("#chartTitle");
  let chartHeading = chartTitle;
  chartHeading = document.querySelector("#yAxis").appendChild(chartHeading);
  chartHeading.setAttribute("id", "chartHeading")
};
