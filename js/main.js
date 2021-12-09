let buttonMenu = document.querySelector(".fa-bars");
let delMenu = document.querySelector(".fa-times");
let hamMenu = document.querySelector(".hamburger-menu");

buttonMenu.addEventListener("click", function () {
  hamMenu.classList.add("active");
});

delMenu.addEventListener("click", function () {
  hamMenu.classList.remove("active");
});
