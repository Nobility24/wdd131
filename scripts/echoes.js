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

// Set active link
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove("active"));
        
        // Add active class to clicked link
        this.classList.add("active");
        
        // Close mobile menu after click
        if (window.innerWidth <= 767) {
            navMenu.classList.remove("show");
            menuButton.textContent = "☰";
            menuButton.classList.remove("active");
        }
    });
});

// Last update
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-updated').textContent = `Last Updated: ${document.lastModified}`;