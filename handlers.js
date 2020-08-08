let valuesArray = [];
let itemsArray = [];
let maxVal = [];
let createTitle = function(){
  let title = document.getElementById("titleButtonInput").value;

  if (document.contains(document.getElementById("chartTitle"))){
    document.getElementById("chartTitle").innerHTML = title;
  }
  else if (document.getElementById("chartTitle") == null){
    let titleTag = document.createElement("h2");
    titleTag = document.querySelector("main").appendChild(titleTag);
    titleTag.innerHTML = title;
    titleTag.setAttribute("id", "chartTitle");
    document.getElementById("titleButton").setAttribute("value", "Change Title")
  }
  document.getElementById("titleButtonInput").value = "";
}


let createSeriesTitle = function(){
  let seriesTitle = document.getElementById("seriesTitleInput").value;

  if (document.contains(document.getElementById("seriesTitle"))){
    document.getElementById("seriesTitle").innerHTML = seriesTitle;
  }

  else if (document.getElementById("seriesTitle") == null){
    let table = document.createElement("table");
    table.setAttribute("value", 0);
    table = document.querySelector("Main").appendChild(table);
    let headingRow = document.createElement("th");
    headingRow = table.appendChild(headingRow);
    headingRow.innerHTML = seriesTitle;
    headingRow.setAttribute("id", "seriesTitle");
    headingRow.setAttribute("colspan", "2");

    let row = document.createElement("tr")
    firstRow = table.appendChild(row);

    let tableDataItem = document.createElement("td");
    tableDataItem = firstRow.appendChild(tableDataItem);
    tableDataItem.innerHTML = "Data item e.g. Apples";
    tableDataItem.setAttribute("id", "tableDataItem");

    let tableDataValue = document.createElement("td");
    tableDataItem = firstRow.appendChild(tableDataValue);
    tableDataValue.innerHTML = "Value e.g. 12";
    tableDataItem.setAttribute("id", "tableDataValue");

  }
  document.getElementById("seriesTitleInput").value = "";
}
let submitData = function (){
  let table = document.getElementsByTagName("table");
  let newRow = document.createElement("tr");
  newRow = table[0].appendChild(newRow);
  newRow.ondblclick = function(){
    newRow.parentNode.removeChild(newRow);
  }
  let newItem = document.createElement("td");
  let inputText = document.getElementById("dataItemInput").value;
  newItem = newRow.appendChild(newItem);
  newItem.innerHTML = inputText;
  itemsArray.push(inputText)

  let newValue = document.createElement("td");
  let inputValue = document.getElementById("dataValueInput").value;
  newValue = newRow.appendChild(newValue);
  newValue.innerHTML = inputValue;
  valuesArray.push(inputValue);

  document.getElementById("dataItemInput").value = "";
  document.getElementById("dataValueInput").value = "";

}

let generateGraph = function(){
  let yAxis = drawYAxis();
  let xAxis = drawXAxis();
  maxVal = valuesArray[0];
  for (let i=0; i<valuesArray.length; i++){
    let newBar = addBar();
    document.getElementById("bar").setAttribute(`id`, `bar ${i}`)
    document.getElementById(`bar ${i}`).style.position = "absolute";
    document.getElementById(`bar ${i}`).style.left =  `${leftOffset}px`;
    document.getElementById(`bar ${i}`).style.bottom =  "5px";
    let scaleMax = addScale();
    if (valuesArray[i] > maxVal){
      maxVal = valuesArray[i];
    }
    let barHeightUnit = 500 / scaleMax;
    let barHeight = valuesArray[i] * barHeightUnit;
    document.getElementById(`bar ${i}`).style.height =  `${barHeight}px`;
    let barWidth = (500 / valuesArray.length) - 4;
    document.getElementById(`bar ${i}`).style.width =  `${barWidth}px`;
    leftOffset += barWidth;
    let label = addLabel(i);
    let valueLabel = addValueLabel(i);
  };
  let scaleMarkers = addScaleMarkers();
  let chartHeading = addTitle()
}
