const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const navIcon = document.querySelectorAll(".navIcon");


hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
  // navIcon.forEach((icon) => {
  //   icon.classList.toggle("hidden");
  // });
});

document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    navItems.classList.remove("open");
    
  })
);
