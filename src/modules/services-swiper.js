export const servicesSwiper = () => {
  const container = document.querySelector(".services-elements");
  if (!container) return;

  const row = container.querySelector(".row");
  const slides = Array.from(row.querySelectorAll(".col-md-4"));
  const arrowLeft = document.querySelector(".services-arrow .arrow-left");
  const arrowRight = document.querySelector(".services-arrow .arrow-right");

  if (slides.length === 0 || !arrowLeft || !arrowRight) return;

  let currentIndex = 0;

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  };

  const setSlidesWidth = () => {
    const visibleCount = getVisibleCount();
    const slideWidth = 100 / visibleCount;
    slides.forEach((slide) => {
      slide.style.width = `${slideWidth}%`;
      slide.style.flexShrink = "0";
    });
  };

  const updateCarousel = () => {
    const visibleCount = getVisibleCount();
    const slideWidthPercent = 100 / visibleCount;
    const offset = -(currentIndex * slideWidthPercent);
    row.style.transform = `translateX(${offset}%)`;
    row.style.transition = "transform 0.3s ease";
  };

  arrowLeft.addEventListener("click", () => {
    const visibleCount = getVisibleCount();
    const maxIndex = slides.length - visibleCount;

    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex;
    }
    updateCarousel();
  });

  arrowRight.addEventListener("click", () => {
    const visibleCount = getVisibleCount();
    const maxIndex = slides.length - visibleCount;

    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  window.addEventListener("resize", () => {
    currentIndex = 0;
    setSlidesWidth();
    updateCarousel();
  });

  setSlidesWidth();
  updateCarousel();
};
