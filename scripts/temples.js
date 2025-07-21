// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-updated").textContent = "Last Updated: " + document.lastModified;

// Hamburger toggle functionality
const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu").querySelector("ul");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuButton.textContent = navMenu.classList.contains("show") ? "❌" : "☰";
});

