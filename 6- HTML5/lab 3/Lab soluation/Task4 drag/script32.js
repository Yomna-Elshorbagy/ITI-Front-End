window.addEventListener("load", handelDragAndDrop);
function handelDragAndDrop() {
  //====> 1-get All elements needed
  let images = document.images;
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", startDrag);
    images[i].addEventListener("dragend", endDrag);
  }

  let droppedBox = document.getElementById("target");
  droppedBox.addEventListener("drop", (e) => dropped(e, droppedBox));
  droppedBox.addEventListener("dragenter", enterDrag);
  droppedBox.addEventListener("dragover", overDrag);

  let source = document.getElementById("source");
  source.addEventListener("drop", (e) => dropped(e, source));
  source.addEventListener("dragenter", enterDrag);
  source.addEventListener("dragover", overDrag);
} //end of load

//==> starting
let draggedElement = null;

function startDrag(e) {
  draggedElement = e.target;
  e.dataTransfer.setData("myImg", e.target.outerHTML);
}

function endDrag(e) {
  e.preventDefault();
  // e.target.style.display = "none";

  if (draggedElement) {
    let count = Number(draggedElement.dataset.count);
    if (count <= 0) draggedElement.remove();
  }
}

function dropped(e, box) {
  e.preventDefault();
  let draggedImg = e.dataTransfer.getData("myImg");

  let isSource = box.id === "source";
  if (!draggedElement) return;

  if (isSource) {
    box.appendChild(draggedElement);
    draggedElement.setAttribute("draggable", true);
    draggedElement.style.pointerEvents = "auto";
  } else {
    // restore count or keep as is
    let count = Number(draggedElement.dataset.count);
    if (count > 0) {
      //=> 1- taking deep copy with all style and attributes ==> work with actual element not string copy
      let clone = draggedElement.cloneNode(true);
      box.appendChild(clone);
      //=> 2- update count in html
      count--;
      draggedElement.dataset.count = count;
      console.log(draggedElement); // ele
      console.log(draggedImg); // string ele
      // box.innerHTML += draggedImg;

      if (count === 0) {
        draggedElement.setAttribute("draggable", false);
        draggedElement.style.pointerEvents = "none";
      }
    }
  }
}

function overDrag(e) {
  e.preventDefault();
}
function enterDrag(e) {
  e.preventDefault();
}
function leaveDrag(e) {
  e.preventDefault();
}
