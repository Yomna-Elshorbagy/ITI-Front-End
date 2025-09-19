function Person(ID, Name, City, Salary, PersonalImage) {
  this.ID = ID;
  this.Name = Name;
  this.City = City;
  this.Salary = Salary;
  this.PersonalImage = PersonalImage;
}

let people = JSON.parse(localStorage.getItem("people")) || [];

function saveToLocalStorage() {
  localStorage.setItem("people", JSON.stringify(people));
}

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

function deletePerson(index) {
  people.splice(index, 1);
  saveToLocalStorage();
  getTableData();
}

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("image").value = "";
});

function sortBy(order) {
  people.sort((a, b) => {
    if (order === "asc") return a.Name.localeCompare(b.Name);
    else return b.Name.localeCompare(a.Name);
  });
  saveToLocalStorage();
  getTableData();
}

// ==================================== update Data ==================================//
function resetForm() {
  document.getElementById("personForm").reset();
  document.getElementById("editIndex").value = "";
  document.getElementById("saveBtn").style.display = "none";
  document.getElementById("cancelBtn").style.display = "none";
  document.getElementById("addData").style.display = "inline-block";
  document.getElementById("clearBtn").style.display = "inline-block";
}

function editPerson(index) {
  let personData = people[index];
  document.getElementById("editIndex").value = index;
  document.getElementById("id").value = personData.ID;
  document.getElementById("name").value = personData.Name;
  document.getElementById("city").value = personData.City;
  document.getElementById("salary").value = personData.Salary;
  document.getElementById("image").value = personData.PersonalImage;

  document.getElementById("saveBtn").style.display = "inline-block";
  document.getElementById("cancelBtn").style.display = "inline-block";
  document.getElementById("addData").style.display = "none";
  document.getElementById("clearBtn").style.display = "none";
}

document.getElementById("saveBtn").addEventListener("click", function () {
  let editIndex = document.getElementById("editIndex").value;
  if (editIndex !== "") {
    people[editIndex] = new Person(
      document.getElementById("id").value,
      document.getElementById("name").value,
      document.getElementById("city").value,
      document.getElementById("salary").value,
      document.getElementById("image").value
    );
    saveToLocalStorage();
    getTableData();
    resetForm();
  }
});

document.getElementById("cancelBtn").addEventListener("click", function () {
  resetForm();
});
document.getElementById("personForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let editIndex = document.getElementById("editIndex").value;

  if (editIndex === "") {
    people.push(
      new Person(
        document.getElementById("id").value,
        document.getElementById("name").value,
        document.getElementById("city").value,
        document.getElementById("salary").value,
        document.getElementById("image").value
      )
    );

    saveToLocalStorage();
    getTableData();
    this.reset();
  }
});

getTableData();
