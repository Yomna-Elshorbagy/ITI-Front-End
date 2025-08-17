window.addEventListener("load", handelDragAndDrop);

let draggedElement = null;

function handelDragAndDrop() {
  //===> 1- attach drag events to all images
  let images = document.images;
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", startDrag);
    images[i].addEventListener("dragend", endDrag);
  }

  //==> 2- setup both drop container to drag from and to it
  setupDropZone("source");
  setupDropZone("target");
}

//===> 3- helper: fire drag/drop events function
function setupDropZone(boxId) {
  let box = document.getElementById(boxId);
  box.addEventListener("drop", (e) => dropped(e, box));
  box.addEventListener("dragenter", enterDrag);
  box.addEventListener("dragover", overDrag);
  box.addEventListener("dragleave", leaveDrag);
}

//===> 4- set all functions of firing events
function startDrag(e) {
  console.log(e);
  draggedElement = e.target;
  e.dataTransfer.setData("myImg", e.target.outerHTML);
}

function endDrag(e) {
  e.preventDefault();
  if (draggedElement) {
    let count = Number(draggedElement.dataset.count);
    if (count <= 0) draggedElement.remove();
  }
}

function dropped(e, box) {
  e.preventDefault();
  // if (!draggedElement) return;

  let isSource = box.id === "source";
  let isTarget = box.id === "target";

  if (isSource && draggedElement.parentElement.id === "target") {
    draggedElement.remove();

    let originalImages = document.querySelectorAll("#source img");
    let foundImg = false;

    // Note here ==> Drag from source to target
    for (let img of originalImages) {
      if (img.src === draggedElement.src) {
        let count = Number(img.dataset.count);
        img.dataset.count = count + 1;
        img.setAttribute("draggable", true);
        img.style.pointerEvents = "auto";
        foundImg = true;
        break;
      }
    }
    // Note here ==> done to take another copy when return image to its source when it not found
    if (!foundImg) {
      let restored = draggedElement.cloneNode(true);
      restored.dataset.count = 1;
      restored.setAttribute("draggable", true);
      restored.style.pointerEvents = "auto";
      restored.addEventListener("dragstart", startDrag);
      restored.addEventListener("dragend", endDrag);
      document.getElementById("source").appendChild(restored);
    }
  } else if (isTarget && draggedElement.parentElement.id === "source") {
    // Note here ==> Drag from source to target
    let count = Number(draggedElement.dataset.count);
    if (count > 0) {
      let clone = draggedElement.cloneNode(true);
      clone.addEventListener("dragstart", startDrag);
      clone.addEventListener("dragend", endDrag);
      box.appendChild(clone);

      count--;
      draggedElement.dataset.count = count;

      if (count === 0) {
        draggedElement.setAttribute("draggable", false);
        draggedElement.style.pointerEvents = "none";
      }
    }
  }
}

//==> 5- drag visuals
function overDrag(e) {
  e.preventDefault();
}
function enterDrag(e) {
  e.preventDefault();
}
function leaveDrag(e) {
  e.preventDefault();
}
