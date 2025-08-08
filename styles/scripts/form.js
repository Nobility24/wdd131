 // Product data array
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
]
// Populate product dropdown
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    // Initialize review counter
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = 0;
    }
    document.getElementById('counter').textContent = reviewCount;
})
// Form submission handler
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    // Get the current count
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    // Increment and save the count
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Update the counter display
    document.getElementById('counter').textContent = reviewCount;
    
    // Proceed with form submission
    return true;
});
       
const year = document.querySelector("#year");
const full = document.querySelector("#last-updated");

const today = new Date();

year.innerHTML = today.getFullYear();

full.innerHTML = `Last updated: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;