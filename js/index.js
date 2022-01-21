const navToggler = document.getElementById("nav-toggler");
const mainNav = document.getElementById("main-nav");

/* Windows Events */
window.onload = function () {
  navToggler.addEventListener("click", (e) => {
    mainNav.classList.toggle("expanded");
    navToggler.classList.toggle("expanded");
  });
};
