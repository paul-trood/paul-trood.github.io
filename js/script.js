
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
        
        // Typing effect for the hero title (uncomment to use)

        const heroText = "Hello, I'm Paul Trood";
        let i = 0;

        function typeWriter() {
            if (i < heroText.length) {
                document.getElementById("hero-title").textContent += heroText.charAt(i);
                i++;
                setTimeout(typeWriter, 90);
            }
        }

        document.addEventListener("DOMContentLoaded", typeWriter);

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
        