
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        });
        
        // Reveal animations for portfolio items
        function revealPortfolioItems() {
            const items = document.querySelectorAll('.portfolio-item');
            items.forEach(item => {
                // Reset animation to allow it to play again when scrolled back into view
                item.style.animation = 'none';
                item.offsetHeight; // Trigger reflow
                item.style.animation = null;
            });
        }
        
        // Run once on page load
        window.addEventListener('load', revealPortfolioItems);
        
        // Add more animations or interactions here
        
        // Typing effect for the hero title

        document.addEventListener("DOMContentLoaded", function () {
            const heroText = "Hello, I'm Paul Trood";
            let i = 0;
            const heroTitle = document.getElementById("hero-title");
            const fadeInText = document.getElementById("fade-in-text");
        
            // Ensure text is fully hidden before applying transition
            fadeInText.style.opacity = "0";
            fadeInText.style.visibility = "hidden"; // Fully hide it
        
            function typeWriter() {
                if (i < heroText.length) {
                    heroTitle.textContent += heroText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 90);
                } else {
                    // Once typing is done, show and fade in the text
                    setTimeout(() => {
                        fadeInText.style.visibility = "visible";
                        fadeInText.style.opacity = "1";
                    }, 100); // Adjust delay if needed
                }
            }
        
            typeWriter(); // Start the typewriter effect
        });
        

        // Replace with your actual resume file path

        document.getElementById("download-resume").addEventListener("click", function() {
            window.location.href = "resume.pdf";  
        });

        // Open each link in a new tab
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll("a[href^='http']").forEach(link => {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer"); // Security best practice
            });
        });

  // "Site under construction"
        document.addEventListener("DOMContentLoaded", function() {
            const underConstruction = document.createElement("div");
            underConstruction.textContent = "⚠️ This website is still under construction. Check back for updates!";
            underConstruction.style.position = "fixed";
            underConstruction.style.bottom = "10px";
            underConstruction.style.right = "10px";
            underConstruction.style.backgroundColor = "rgba(255, 255, 0, 0.9)";
            underConstruction.style.padding = "10px";
            underConstruction.style.borderRadius = "5px";
            underConstruction.style.fontWeight = "bold";
            underConstruction.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
            document.body.appendChild(underConstruction);
        });

        