//====> get all variables needed
let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let addResult = document.getElementById("addResult");

let mul1 = document.getElementById("mul1");
let mul2 = document.getElementById("mul2");
let mulResult = document.getElementById("mulResult");

let calculateAddition = () => {
  let sum = Number(add1.value) + Number(add2.value);
  addResult.innerText = sum;
};

let multiplication = () => {
  let multiProd = Number(mul1.value) * Number(mul2.value);
  mulResult.innerText = multiProd;
};

[add1, add2].forEach((input) =>
  input.addEventListener("input", calculateAddition)
);
[mul1, mul2].forEach((input) =>
  input.addEventListener("input", multiplication)
);

const validateInput = (input) => {
  input.addEventListener("input", () => {
    const value = Number(input.value);
    if (value < 0) {
      input.setCustomValidity(
        `Please enter a number between ${min} and ${max} `
      );
    } else {
      input.setCustomValidity("");
    }
    input.reportValidity();
  });
};
validateInput(add1, 0, 100);
validateInput(add2, 0, 100);
validateInput(mul1, 1, 50);
validateInput(mul2, 1, 50);

calculateAddition();
multiplication();

// =======> another solution
// document.querySelectorAll(".box").forEach((box) => {
//   let inputs = box.querySelectorAll("input[type='number']");
//   let resultSpan = box.querySelector(".result");
//   let operator = box.classList.contains("addition") ? "add" : "multiply";

//   let calculate = () => {
//     let val1 = Number(inputs[0].value);
//     let val2 = Number(inputs[1].value);
//     let result = operator === "add" ? val1 + val2 : val1 * val2;
//     resultSpan.textContent = result;
//   };

//   inputs.forEach((input) => input.addEventListener("input", calculate));

//   calculate();
// });
