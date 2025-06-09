window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const header = document.getElementById("header");

// Ouvre/ferme le menu sur mobile
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Ferme le menu après clic sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Ajoute ou retire la classe "scrolled" si scroll > 100px
window.addEventListener("scroll", () => {
  if (window.scrollY > 100 && window.innerWidth > 768) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => {
  const title = document.querySelector(".section-title");
  title.classList.add("animate");
});
