export const topSlider = () => {
   const SLIDE_INTERVAL_MS = 3000;
  const slider = document.querySelector(".top-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".item");
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoPlayInterval;

  let dotsContainer = slider.querySelector(".slider-dots");
  if (!dotsContainer) {
    dotsContainer = document.createElement("ul");
    dotsContainer.className = "slider-dots";
    slider.appendChild(dotsContainer);

    slides.forEach((_, index) => {
      const dot = document.createElement("li");
      if (index === 0) dot.classList.add("slick-active");

      dot.addEventListener("click", () => {
        stopAutoPlay();
        showSlide(index);
        startAutoPlay();
      });

      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer.querySelectorAll("li");

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      const isActive = i === index;

      slide.classList.toggle("active", isActive);
      const table = slide.querySelector(".table");
      if (table) {
        table.classList.toggle("active", isActive);
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("slick-active", i === index);
    });

    currentSlide = index;
  };

  const nextSlide = () => {
    showSlide((currentSlide + 1) % totalSlides);
  };

  const startAutoPlay = () => {
    autoPlayInterval = setInterval(nextSlide, SLIDE_INTERVAL_MS);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };

  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);

  showSlide(0);
  startAutoPlay();
};
