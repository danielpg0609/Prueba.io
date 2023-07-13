window.addEventListener("DOMContentLoaded", function() {
  const slideshowImages = document.querySelectorAll(".slideshow img");
  let currentImageIndex = 0;

  setInterval(function() {
    slideshowImages[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    slideshowImages[currentImageIndex].classList.add("active");
  }, 3000);
});

