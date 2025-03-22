// Search Bar Toggle
const searchButton = document.getElementById('search-button');
const searchBar = document.querySelector('.search-bar');
const navLinks = document.getElementById('nav-links');

searchButton.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
    navLinks.style.opacity = '0'; // Hide nav links
    navLinks.style.pointerEvents = 'none'; // Disable clicks
  } else {
    navLinks.style.opacity = '1'; // Show nav links
    navLinks.style.pointerEvents = 'auto'; // Enable clicks
  }
});

// Image Slider
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function slideNext() {
  currentIndex = (currentIndex + 1) % images.length;
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Start the slider
setInterval(slideNext, 3000); // Change image every 3 seconds
