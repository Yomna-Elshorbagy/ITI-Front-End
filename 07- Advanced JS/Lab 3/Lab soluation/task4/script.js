//==>1- constructor Function
function Person(_ID, _name, _city, _salary, _PersonalImage) {
  this.ID = _ID;
  this.Name = _name;
  this.City = _city;
  this.Salary = _salary;
  this.personalImage = _PersonalImage;
}

//===>2- saving data in localstorage
let people = JSON.parse(localStorage.getItem("people")) || [];
function saveToLocalStorage() {
  localStorage.setItem("people", JSON.stringify(people));
}

//===>3- display data in table
function getTableData() {
  let tbody = document.querySelector("#personTable tbody");
  tbody.innerHTML = "";
  people.forEach((person, index) => {
    let row = `
      <tr>
        <td>${person.ID}</td>
        <td>${person.Name}</td>
        <td>${person.City}</td>
        <td>${person.Salary}</td>
        <td><img src="${person.PersonalImage}" alt="Image"></td>
        <td>
          <button onclick="editPerson(${index})">Update</button>
          <button onclick="deletePerson(${index})">Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

//===>4- delete data from table
function deletePerson(index) {
  people.splice(index, 1);
  saveToLocalStorage();
  getTableData();
}
