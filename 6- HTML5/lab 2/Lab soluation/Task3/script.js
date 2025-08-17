let redCheckbox = document.getElementById("highlightRed");
let greenCheckbox = document.getElementById("highlightGreen");
let mainBranch = document.querySelector(".main-branch");
let allBranches = document.querySelectorAll(".branch");

redCheckbox.addEventListener("change", () => {
  if (redCheckbox.checked) {
    greenCheckbox.checked = false;
    mainBranch.style.borderLeftColor = "darkred";
    mainBranch.style.color = "darkred";
  } else {
    mainBranch.style.borderLeftColor = "steelblue";
    mainBranch.style.color = "#333";
  }
});

greenCheckbox.addEventListener("change", () => {
  if (greenCheckbox.checked) {
    redCheckbox.checked = false;

    allBranches.forEach((branch) => {
      branch.style.borderLeftColor = "green";
      branch.style.color = "green";
      mainBranch.style.borderLeftColor = "steelblue";
      mainBranch.style.color = "#333";
    });
  } else {
    allBranches.forEach((branch) => {
      branch.style.borderLeftColor = "steelblue";
      branch.style.color = "#333";
    });
  }
});
