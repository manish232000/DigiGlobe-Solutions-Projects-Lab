// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for "Scroll Down" Link
const scrollDownLink = document.querySelector('.scroll-down a');

scrollDownLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(scrollDownLink.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
});