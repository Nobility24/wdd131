const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', function() {
    // Populate product dropdown if exists
    const productSelect = document.getElementById('product');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Initialize review counter
    updateCounterDisplay();
    
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
    
    // Form submission handler
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            // Increment counter
            let reviewCount = localStorage.getItem('reviewCount');
            reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
            localStorage.setItem('reviewCount', reviewCount);
        });
    }
});

// Update counter display on both pages
function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        counterElement.textContent = reviewCount;
    }
}