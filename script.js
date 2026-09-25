const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (
    !document.querySelector("#hamburger-menu").contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
