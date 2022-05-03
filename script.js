const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const navIcon = document.querySelectorAll(".navIcon");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

