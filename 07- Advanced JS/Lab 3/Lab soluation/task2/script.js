document.getElementById("loadXml").addEventListener("click", () => {
  loadXML();
});

document.getElementById("searchBox").addEventListener("input", function () {
  filterTable(this.value.trim().toLowerCase());
});

function loadXML() {
  let xhr = new XMLHttpRequest();
  //===> 1- open connection with server to this file
  xhr.open("GET", "bookstore.xml", true);
  //===> 2- send empty string
  xhr.send("");
  //===> 3- fire on ready state event
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      renderTable(xhr);
    } else {
      document.getElementById("targetDiv").innerHTML =
        "<p style='color:red; text-align:center;'>Failed to load XML file.</p>";
    }
  };
}

function renderTable(xhr) {
  //==> root here: all XML elements so can treated as an array
  let targetDiv = document.getElementById("targetDiv");
  let createdTable = document.createElement("table");
  let headerRow = document.createElement("tr");
  // ==> headers of the table

  ["Title", "Publisher", "ISBN", "Price"].forEach(function (text) {
    let th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  createdTable.appendChild(headerRow);
  let root = xhr.responseXML.children[0];
  console.log(root);
  for (let i = 0; i < root.children.length; i++) {
    console.log(root.children.length);
    let createdTr = document.createElement("tr");
    let priceValue = Number(root.children[i].children[3].textContent);

    if (priceValue > 100) {
      createdTr.classList.add("greater");
    } else if (priceValue === 100) {
      createdTr.classList.add("equal");
    } else {
      createdTr.classList.add("less");
    }
    //==> looping on tds cells in the table inside looping of
    for (let x = 0; x < root.children[i].children.length; x++) {
      let createdTd = document.createElement("td");
      createdTd.innerText = root.children[i].children[x].textContent;
      createdTr.appendChild(createdTd);
    }
    createdTable.appendChild(createdTr);
  }
  targetDiv.innerHTML = "";
  targetDiv.appendChild(createdTable);
}

function filterTable(searchValue) {
  let rows = document.querySelectorAll("table tr:not(:first-child)");
  rows.forEach((row) => {
    //==> convert cells to array ==> then make looping to return true boolean for target search
    //==> .some() returns true if at least one cell matches the search.
    let match = Array.from(row.cells).some((td) => {
      td.textContent.toLowerCase().includes(searchValue);
    });
    row.classList.toggle("hide", !match);
  });
}
