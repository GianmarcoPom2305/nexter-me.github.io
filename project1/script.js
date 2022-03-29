"use strict";
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".hidden");
const linkclicked = document.querySelectorAll(".link-clicked");
const navbarAperta = function () {
  document.querySelector(".hidden").style.top = "0%";
};
const navbarChiusa = function () {
  document.querySelector(".hidden").style.top = "-100%";
};
hamburger.addEventListener("click", function () {
  if (navbar.style.top === "0%") {
    navbarChiusa();
  } else {
    navbarAperta();
  }
});
for (let i = 0; i < linkclicked.length; i++) {
  linkclicked[i].addEventListener("click", function () {
    navbarChiusa();
  });
}
