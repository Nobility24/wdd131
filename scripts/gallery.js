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