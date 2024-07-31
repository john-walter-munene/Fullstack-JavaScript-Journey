let slideIndex = 1;
let slideInterval; // Variable to store the interval ID

showSlides(slideIndex);

// Function to start auto-slide
function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1); // Change slide every 5 seconds
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Function to reset the auto-slide interval
function resetAutoSlide() {
  clearInterval(slideInterval); // Clear the existing interval
  startAutoSlide(); // Restart the auto-slide
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide(); // Reset auto-slide when manually changing slide
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlide(); // Reset auto-slide when manually changing slide
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Wrap around to the first slide if the index exceeds the number of slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Wrap around to the last slide if the index is less than 1
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

// Start the auto-slide
startAutoSlide();