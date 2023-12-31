'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const navbarList = document.querySelector(".navbar-list");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

function activateScript() {
  const login1st2ndSec = `
    <li class="navbar-item">
      <a href="https://eatschools.com/online/login/index.php" class="navbar-link" data-navbar-link>Login (1st & 2nd Sec)</a>
    </li>
  `;

  const login3rdSec = `
    <li class="navbar-item">
      <a href="https://eatschools.com/eat/login/index.php" class="navbar-link" data-navbar-link>Login (3rd Sec)</a>
    </li>
  `;

  if (window.innerWidth <= 549) {
    navbarList.insertAdjacentHTML("beforeend", login1st2ndSec);
    navbarList.insertAdjacentHTML("beforeend", login3rdSec);
  }
}

activateScript();





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

var tabButtons = document.querySelectorAll(".tab-container .button-container button");
var tabs = document.querySelectorAll(".tab-container .tabs");

// Show the first tab initially
tabs[0].style.display = "flex";
// Add "hover" class to the first button
tabButtons[0].classList.add("hover");

function showPanel(panelIndex) {
  // Show the selected tab and hide others
  tabs.forEach(function (node, index) {
    if (index === panelIndex) {
      node.style.display = "flex";
    } else {
      node.style.display = "none";
    }
  });

  // Update button styles
  tabButtons.forEach(function (node, index) {
    if (index === panelIndex) {
      node.classList.add("hover");
    } else {
      node.classList.remove("hover");
    }
  });
}
