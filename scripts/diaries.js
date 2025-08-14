const stories = [
            {
                title: "The Enchanted Forest",
                content: `<p>Deep in the heart of the Whispering Woods lay a secret known only to the ancient trees. Elara, a young botanist with a passion for the unknown, found herself drawn to these woods by tales of glowing flora that bloomed only under the light of the full moon.</p>
                <p>As dusk settled, the forest transformed. Trees shimmered with bioluminescent fungi, and flowers pulsed with soft blue light. Elara followed a trail of glowing mushrooms to a clearing where a magnificent tree stood, its bark etched with symbols that seemed to shift and change before her eyes.</p>
                <p>When she touched the trunk, visions flooded her mind - ancient rituals, forest guardians, and a warning about an approaching darkness. The tree had chosen her as its protector, entrusting her with the knowledge to save the enchanted forest from the shadows creeping at its borders.</p>`
            },
            {
                title: "The Clockwork City",
                content: `<p>In the mechanical metropolis of Cogsworth, time was currency. Citizens wound their heart-springs with golden minutes mined from the Time Quarry. Leo, a street-smart tinkerer, survived by repairing broken chronometers and selling salvaged seconds on the black market.</p>
                <p>One foggy evening, Leo discovered a peculiar pocket watch that didn't measure minutes, but possibilities. With each tick, it revealed fleeting glimpses of alternate futures. He saw himself as a wealthy magnate, a revolutionary leader, and even as a prisoner in the Hourglass Dungeon.</p>
                <p>The watch came with a warning: "Every choice unwinds your spring." Leo realized he could manipulate outcomes, but each adjustment shortened his lifespan. As the city faced imminent collapse, he had to decide how many of his remaining hours he would sacrifice to save Cogsworth.</p>`
            },
            {
                title: "Beneath the Aurora",
                content: `<p>Astrid had studied the Northern Lights all her life, but nothing prepared her for what happened that winter solstice. As the emerald ribbons danced across the Arctic sky, they began forming intricate patterns - a celestial language written in light.</p>
                <p>Guided by ancient Sami legends and her grandmother's journal, Astrid deciphered the message: a plea for help from star travelers stranded in Earth's orbit. The aurora wasn't just charged particles, but a communication beam from an alien vessel trapped in our magnetic field.</p>
                <p>With only three nights until the solstice ended, Astrid raced to build a transmitter using traditional Sami drums and modern satellite technology. Her success would mean first contact with an interstellar civilization. Failure would condemn the travelers to drift forever among the stars.</p>`
            },
            {
                title: "The Memory Painter",
                content: `<p>Gabriel didn't create art - he extracted it. Using a neural interface and quantum pigments, he painted memories directly from his clients' minds. Wealthy patrons paid fortunes to see their happiest moments immortalized on canvas.</p>
                <p>Everything changed when a mysterious woman commissioned a painting of a memory she'd lost. As Gabriel navigated her fragmented consciousness, he uncovered a memory not hers - a vision of a future catastrophe that would devastate their city.</p>
                <p>The painting revealed itself stroke by stroke: collapsing buildings, panicked crowds, and a countdown. Gabriel realized the woman was a time traveler, and the memory was a warning. With each brushstroke, he absorbed more of the impending disaster, but at the cost of his own memories.</p>`
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
