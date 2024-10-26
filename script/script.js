// Toggle navigation and icons
const hamburger = document.getElementById("hamburger");
const cancel = document.getElementById("cancel");
const navLinks = document.getElementById("nav-links");

// When hamburger is clicked, show the menu and cancel icon
hamburger.addEventListener("click", () => {
  navLinks.classList.add("nav-active");
  cancel.classList.add("cancel-active");
  hamburger.classList.add("hamburger-active");
});

// When cancel is clicked, hide the menu and bring back hamburger
cancel.addEventListener("click", () => {
  navLinks.classList.remove("nav-active");
  cancel.classList.remove("cancel-active");
  hamburger.classList.remove("hamburger-active");
});

// Get elements
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const cancelSearch = document.getElementById("cancel-search");

// Show search box when search icon is clicked
searchIcon.addEventListener("click", () => {
  searchBox.classList.add("search-box-active");
  searchIcon.style.display = "none"; // Hide search icon
});

// Hide search box when cancel icon is clicked
cancelSearch.addEventListener("click", () => {
  searchBox.classList.remove("search-box-active");
  searchIcon.style.display = "block"; // Show search icon again
});

document.addEventListener("DOMContentLoaded", function () {
  const languageButton = document.querySelector(".language-button");
  const languageDropdown = document.querySelector(".language-dropdown");

  // Toggle the dropdown on button click
  languageButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop click from bubbling to document
    languageDropdown.classList.toggle("show-dropdown");
  });

  // Close the dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (
      !languageButton.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.remove("show-dropdown");
    }
  });
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".next-slide").addEventListener("click", nextSlide);
document.querySelector(".prev-slide").addEventListener("click", prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
