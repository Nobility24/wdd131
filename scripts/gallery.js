 const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && e.target !== menuToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
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