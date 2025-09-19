//handel load event
window.addEventListener("load", doItFirst);
function doItFirst() {
  //1- canvus
  //1.1 - Get context
  myCanvas = document.getElementById("myCanvas");
  myContext = myCanvas.getContext("2d");
  //1.2 - fill full body
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;
  //1.3 - register canvas events => mouse down
  isDrawable = 0;
  myCanvas.addEventListener("mousemove", drawCircle);
  myCanvas.addEventListener("mousedown", enableDrawing); //true
  myCanvas.addEventListener("mouseup", disableDrawing); //false

  console.log(myCanvas);
  console.log(myContext);

  //==> 2- radius
  radius = 10;
  incr = document.getElementById("increment");
  decre = document.getElementById("decrement");
  radiusValue = document.getElementById("radiusValue");
  incr.addEventListener("click", increaseRadius);
  decre.addEventListener("click", decreaseRadius);

  //==> 3- colors
  //   allColors = document.querySelectorAll(".colors");
  //   for (let i = 0; i < allColors.length; i++) {
  //     allColors[i].addEventListener("click", changeColor);
  //     if (
  //       allColors[i].style.backgroundColor ==
  //       localStorage.getItem("selectedColor")
  //     ) {
  //       allColors[i].className += " active ";
  //       myContext.fillStyle = allColors[i].style.backgroundColor;
  //     }
  //   }
  colorsBar = document.getElementById("colorBar");
  allColors = [
    "red",
    "green",
    "blue",
    "lightgreen",
    "lightsalmon",
    "lightseagreen",
    "lightyellow",
    "gray",
  ];
  for (let i = 0; i < allColors.length; i++) {
    createdDiv = document.createElement("div");
    createdDiv.style.backgroundColor = allColors[i];
    createdDiv.addEventListener("click", changeColor);
    createdDiv.className = "colors";
    if (allColors[i] === localStorage.getItem("selectedColor")) {
      createdDiv.className += " active ";
      myContext.style = allColors[i];
    }
    colorsBar.appendChild(createdDiv);
  }
}

//=========> 3- draw circle
function drawCircle(e) {
  if (isDrawable) {
    myContext.beginPath();
    myContext.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2); // here circle is solid
    //                         default value , start angle
    myContext.fill(); // each click consider it as a path and closed the shape
    // soluation: start each circle with new path ==> then end path
    myContext.closePath();
  }
}

function enableDrawing() {
  isDrawable = true;
}
function disableDrawing() {
  isDrawable = false;
}

//=========> 4- Change size
function increaseRadius() {
  radius++;
  checkRadius(radius);
}
function decreaseRadius() {
  radius--;
  checkRadius(radius);
}
function checkRadius(newRadius) {
  if (newRadius > 50) newRadius = 50;
  if (newRadius < 10) newRadius = 10;
  radius = newRadius;
  radiusValue.innerText = radius;
}

//=========> 5- Change color
function changeColor(e) {
  oldSelectedColor = document.getElementsByClassName("active")[0];
  if (oldSelectedColor != null) oldSelectedColor.className = " colors ";
  newClickOne = e.target;
  newClickOne.className += " active ";
  myContext.fillStyle = newClickOne.style.backgroundColor;
  localStorage.setItem("selectedColor", newClickOne.style.backgroundColor);
}
