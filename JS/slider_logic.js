 // Slider Logic
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        // Function to show specific slide
        function showSlide(index) {
            // Remove active class from all
            slides.forEach(slide => slide.classList.remove('active'));

            // Handle looping
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            // Add active class to current
            slides[currentSlide].classList.add('active');
        }

        // Next/Prev buttons
        function moveSlide(direction) {
            showSlide(currentSlide + direction);
        }

        // Auto play slider (every 5 seconds)
        setInterval(() => {
            moveSlide(1);
        }, 5000);

        // Initial setup not strictly needed as HTML has active class on first slide, 
        // but good for safety.
        showSlide(0);