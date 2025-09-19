let images = document.querySelectorAll(".gallery img");
let container = document.querySelector(".container");

images.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.classList.contains("clicked")) {
      img.classList.remove("clicked");
      container.classList.remove("shrink");
    } else {
      images.forEach((i) => i.classList.remove("clicked"));
      img.classList.add("clicked");
      container.classList.add("shrink");
    }
  });
});

container.addEventListener("dblclick", () => {
  if (container.classList.contains("active")) {
    container.classList.remove("active");
  } else {
    container.classList.add("active");
  }
});
