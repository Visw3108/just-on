'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//------------------ WELCOME-----------------------------------------

 // Fade-in up transition effect when scrolling to the section
 document.addEventListener("DOMContentLoaded", function() {
  const welcomeContent = document.querySelector(".welcome-content");
  window.addEventListener("scroll", function() {
      const section = document.getElementById("welcome-section");
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (sectionPosition < screenPosition) {
          welcomeContent.classList.add("fade-in-up");
      }
  });
});

/* ---------------------------------SERVICE FILTER------------------------- */


document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
      // Remove 'active' class from all buttons and add to the clicked button
      document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Get the selected filter category
      const filterValue = button.getAttribute('data-filter');
      
      // Loop through each product card
      document.querySelectorAll('.product-card').forEach(card => {
          // Check if the product card matches the selected filter
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
              card.classList.remove('hidden'); // Remove hidden class to show
              card.style.display = 'block';

              // Trigger opacity and scale in transition
              setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'scale(1)';
              }, 10); // Slight delay to apply transition
          } else {
              // Set opacity and transform transition
              card.style.opacity = '0';
              card.style.transform = 'scale(0.8)';

              // Add hidden class after the transition ends
              setTimeout(() => {
                  card.style.display = 'none';
                  card.classList.add('hidden'); // Add hidden class to fully hide
              }, 300); // Match this delay to the CSS transition duration
          }
      });
  });
});

/*---------------------------------- PRIVECY---------------------------------- */

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
});

document.addEventListener('cut', function(e) {
  e.preventDefault();
});

document.addEventListener('paste', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
    e.preventDefault();
  }
});