createTitle = function(){
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
}


createSeriesTitle = function(){
  let seriesTitle = document.getElementById("seriesTitleInput").value;

  if (document.contains(document.getElementById("seriesTitle"))){
    document.getElementById("seriesTitle").innerHTML = seriesTitle;
  }

  else if (document.getElementById("seriesTitle") == null){
    let table = document.createElement("table");
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

    let tableDataValue = document.createElement("td");
    tableDataItem = firstRow.appendChild(tableDataValue);
    tableDataValue.innerHTML = "Value e.g. 12";

  }

}
