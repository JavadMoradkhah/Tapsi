// DOM Elements
const navToggler = document.getElementById("nav-toggler");
const mainNav = document.getElementById("main-nav");
const serviceTabs = document.querySelectorAll(".service-tab");
const services = document.querySelectorAll(".service");

/* Windows Events */
window.onload = function () {
  if (navToggler !== null) {
    navToggler.addEventListener("click", (e) => {
      mainNav.classList.toggle("expanded");
      navToggler.classList.toggle("expanded");
    });
  }

  if (serviceTabs !== null && services !== null) {
    let activeTab = serviceTabs[0];
    let activeService = services[0];
    serviceTabs.forEach((tab) => {
      const service = tab.getAttribute("data-service");
      tab.addEventListener("click", (e) => {
        activeTab.classList.remove("active");
        tab.classList.add("active");
        activeTab = tab;
        activeService.classList.remove("active");
        activeService = document.querySelector(service);
        activeService.classList.add("active");
      });
    });
  }
};
