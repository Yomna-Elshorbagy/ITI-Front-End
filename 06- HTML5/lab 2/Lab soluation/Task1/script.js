// ===> navbar responsive
let toggle = document.getElementById("menu-toggle");
let navList = document.getElementById("nav-list");
let activeItem = document.getElementsByClassName("activeItem")[0];
document.addEventListener("click", () => {
  console.log(activeItem);
  activeItem.classList.remove("activeItem");
  navList.classList.toggle("active");
});
