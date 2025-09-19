document
  .getElementsByTagName("input")[0]
  .addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products", true);
    xhr.send("");

    let createdTable = document.createElement("table");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let targetDiv = document.getElementById("targetDiv");

        let result = JSON.parse(xhr.responseText);

        localStorage.setItem("productsData", JSON.stringify(result));

        let createdRowheader = document.createElement("tr");
        let headers = Object.keys(result[0]);
        for (let x = 0; x < headers.length; x++) {
          let headerTh = document.createElement("th");
          headerTh.innerText = headers[x];
          createdRowheader.appendChild(headerTh);
        }
        createdTable.appendChild(createdRowheader);

        for (let i = 0; i < result.length; i++) {
          let createdRow = document.createElement("tr");
          for (let key in result[i]) {
            let createdTd = document.createElement("td");

            if (typeof result[i][key] === "object") {
              createdTd.innerText = JSON.stringify(result[i][key]);
            } else {
              createdTd.innerText = result[i][key];
            }
            createdRow.appendChild(createdTd);
          }
          createdTable.appendChild(createdRow);
        }

        targetDiv.innerHTML = "";
        targetDiv.appendChild(createdTable);
      }
    };
  });
