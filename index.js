// script.js - SiteCraftr Agency
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  }
});
