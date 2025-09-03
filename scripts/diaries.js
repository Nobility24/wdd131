const stories = [
            {
                title: "Day 1: A Midnight Dash for Love",
                content: `<p>Today’s story is a sweet one. On New Year’s Eve, at about 11:38, I pick up this jovial woman, who comes and sits with me in the front. I can tell she’s had a few drinks, but she isn’t    really drunk. We immediately start a conversation. I wanted to know why she was leaving the venue just a few minutes before 0000 hours. <p>I listen as she explains, “For the past 8 years, no matter what the circumstances, my husband and I have always spent New Year’s Eve together. But not until today. Somehow, he developed a stomach bug, and he decided to sleep at home, yet he insisted that I (alone) must attend this long-organized party with our friends. It’s been fun all along until I started recognizing the clock ticking close to the beginning of a new year, and I realized something is amiss. So I decided to leave and join my husband. I haven’t called him yet; he has no idea that I am coming back. So if you could hurry a bit and safely get to my place and arrive there before midnight, I will forever be grateful.”</p> After listening to such a beautiful story, I speedily navigated carefully from Protea Valley to Uitzicht with a smile and a joyful heart, making an effort to make this lovely couple maintain their New Year's celebration tradition.</p>
            <p>Sometimes the greatest surprises happen just before midnight.</p>   `
            },
            {
                title: "Day 2: The Last Ride - A lifetime of sacrifice",
                content: `<p>I picked up this old lady in Langa township. She was so excited to go to work for the very last time today. She has raised three daughters on her own, providing them with a decent life and proper education. One of them is married, but all of them are working and doing well for themselves. She said she has no worries about being misinterpreted because her two grandchildren are already in their teens. 
                And I must say she has a very modest and beautiful house as well. <p/>
                <p>Happy Retirement Ma Thandeka!.</p>`
            },
            {
                title: "Day 3: Six trips, six worlds — who needs a passport when you are an Uber driver?",
                content: `<p>I had done only six trips today. I didn't do much due to an impromptu change in my daily schedule. However, it was interesting. Here are some interesting conversations I had; <p/> <p>I met two couples; both were on their way to Newlands Cricket Stadium for the test match against the SA Proteas. They were all hopeful that England would do much better. <p/> <p>I took a Finnish family to Table Mountain, and they were proud of their education system, which is rated among the best in the world, and of course, Nokia, which many people mistakenly identify as a Japanese company. <p/> <p>The last guy was super impressive. From the Airport to Sunset Beach. A very big Swiss guy. He was so proud of his country's stability and non-involvement in the world war, as well as its banking system, Swiss chocolate, and Swiss watches. I argued that African politicians often used them to stash stolen money while the masses suffered. I’m all these conversations, believe me, in all of them we came levelled as I gave my own presentation of the beauty, nature, and resourcefulness of Mama Africa. <p/><p>I suppose we're all different in some ways, but we share the same world.</p>`
            },
            {
                title: "Day 4: ",
                content: `<p></p>`
            }
        ];

        document.addEventListener('DOMContentLoaded', function() {
            const storyContainer = document.getElementById('storyContainer');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const currentStoryEl = document.getElementById('currentStory');
            const totalStoriesEl = document.getElementById('totalStories');
            const progressBar = document.getElementById('progressBar');
            
            let currentIndex = 0;
            totalStoriesEl.textContent = stories.length;
            
            // Function to display a story
            function displayStory(index) {
                const story = stories[index];
                storyContainer.innerHTML = `
                    <h2 class="story-title">${story.title}</h2>
                    <div class="story-content">${story.content}</div>
                `;
                
                // Update counter
                currentStoryEl.textContent = index + 1;
                
                // Update buttons
                prevBtn.disabled = index === 0;
                nextBtn.disabled = index === stories.length - 1;
                
                // Update progress
                const progress = ((index + 1) / stories.length) * 100;
                progressBar.style.width = `${progress}%`;
            }
            
            // Next button click handler
            nextBtn.addEventListener('click', function() {
                if (currentIndex < stories.length - 1) {
                    currentIndex++;
                    displayStory(currentIndex);
                }
            });
            
            // Previous button click handler
            prevBtn.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    displayStory(currentIndex);
                }
            });
            
            // Initialize with the first story
            displayStory(currentIndex);
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