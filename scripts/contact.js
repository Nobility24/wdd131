// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    this.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
});

const shareStoryBtn = document.getElementById('shareStoryBtn');
const contactForm = document.getElementById('contact-form');
const storyForm = document.getElementById('storyForm');
const thankYouPage = document.getElementById('thank-you-page');
const backToStoriesBtn = document.getElementById('backToStories');
        
    // Show form when "Share Your Story" is clicked
    if (shareStoryBtn) {
        shareStoryBtn.addEventListener('click', function() {
            contactForm.style.display = 'block';
            this.style.display = 'none';
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Form submission
    if (storyForm) {
        storyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get word count
            const text = storyTextarea.value.trim();
            const wordCount = text === '' ? 0 : text.split(/\s+/).length;
            
            if (wordCount > 1000) {
                alert('Please limit your story to 1000 words or less.');
                return;
            }
            
            // Hide form and show thank you page
            contactForm.style.display = 'none';
            thankYouPage.style.display = 'block';
            thankYouPage.scrollIntoView({ behavior: 'smooth' });
        });
}
    
// Set current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Set last updated date
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const today = new Date();
        lastUpdatedElement.innerHTML = `Last updated: <span class="highlight">${new Intl.DateTimeFormat(
            "en-US",
            { dateStyle: "full" }
        ).format(today)}</span>`;
}
    

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
            