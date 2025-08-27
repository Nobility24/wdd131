// Hamburger menu toggle
const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

// Mobile menu toggle
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuButton.textContent = navMenu.classList.contains("show") ? "❌" : "☰";
    menuButton.classList.toggle("active", navMenu.classList.contains("show"));
});


document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-updated').textContent = `Last Updated: ${document.lastModified}`;


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Special handling for home page (href="#")
        if (linkPage === '#' && (currentPage === 'index.html' || currentPage === '')) {
            link.classList.add('active');
        }
        // For all other pages
        else if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});