//===> 1- Create Constructor Function
function Employee(name, position, office, age, startDate) {
  this.Name = name;
  this.Position = position;
  this.Office = office;
  this.Age = age;
  this.StartDate = startDate;
}

//===> 2- create function to fetch data
function FetchEmployeeData() {
  let jsonEmployeeData = [
    ["yomna", "Accountant", "Egypt", 33, "2023/11/28"],
    ["yomna", "Chief Executive Officer (CEO)", "egypt", 25, "2027/10/09"],
    ["yomna", "Junior ", "Egypt", 23, "2019/01/12"],
    ["yomna", "Software Engineer", "egypt", 33, "2025/10/13"],
    ["yomna", "Software Engineer", "Egypt", 28, "2011/06/07"],
    ["yomna", "Junior ", "egypt", 24, "2023/12/02"],
    ["yomna", "Junior ", "egypt", 21, "2022/05/03"],
    ["yomna", "Junior ", "egypt", 21, "20264/12/12"],
    ["yomna", "Junior ", "egypt", 27, "2022/12/06"],
    ["yomna", "Senior javascript developer", "egypt", 22, "2021/03/29"],
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      let employeeObjects = [];
      for (let i = 0; i < jsonEmployeeData.length; i++) {
        let emp = new Employee(...jsonEmployeeData[i]);
        employeeObjects.push(emp);
      }
      resolve(employeeObjects);
    }, 500);
  });
}

//==> 3- save Data in local storage ==> then get data
let saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

let getLocalStorageData = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

//==> 4-append data in the table
let getTableData = (data) => {
  let tbody = document.querySelector("#employeeTable tbody");
  tbody.innerHTML = "";

  data.forEach((item) => {
    let row = document.createElement("tr");

    row.innerHTML = `
          <td>${item.Name}</td>
          <td>${item.Position}</td>
          <td>${item.Office}</td>
          <td>${item.Age}</td>
          <td>${item.StartDate}</td>
        `;

    tbody.appendChild(row);
  });
};

let displayData = async () => {
  let key = "employeeData";

  let data = getLocalStorageData(key);

  if (data.length === 0) {
    let fetchedData = await FetchEmployeeData();
    saveToLocalStorage(key, fetchedData);
    data = fetchedData;
  }

  getTableData(data);
};
displayData();
