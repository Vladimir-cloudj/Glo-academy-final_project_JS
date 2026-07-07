"use strict";

export const slider = () => {
  const sliderBlock = document.querySelector(".top-slider");

  if (!sliderBlock) {
    return;
  }

  const slides = sliderBlock.querySelectorAll(".item");

  if (slides.length === 0) {
    return;
  }

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "slick-dots";
  sliderBlock.appendChild(dotsContainer);

  slides.forEach((_, index) => {
    const dot = document.createElement("li");
    if (index === 0) {
      dot.classList.add("slick-active");
    }
    dotsContainer.appendChild(dot);
  });

  const prevArrow = document.createElement("div");
  prevArrow.className = "slick-prev";
  sliderBlock.appendChild(prevArrow);

  const nextArrow = document.createElement("div");
  nextArrow.className = "slick-next";
  sliderBlock.appendChild(nextArrow);

  const dots = dotsContainer.querySelectorAll("li");
  const timeInterval = 5000;
  let currentSlide = 0;
  let interval;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("slick-active");
      } else {
        dot.classList.remove("slick-active");
      }
    });
  };

  const autoSlide = () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  };

  const startSlide = (timer = timeInterval) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target === prevArrow || e.target.closest(".slick-prev")) {
      stopSlide();
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
      startSlide();
    } else if (e.target === nextArrow || e.target.closest(".slick-next")) {
      stopSlide();
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
      startSlide();
    } else if (
      e.target.tagName === "LI" &&
      e.target.parentElement === dotsContainer
    ) {
      stopSlide();
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
      showSlide(currentSlide);
      startSlide();
    }
  });

  sliderBlock.addEventListener("mouseenter", stopSlide);
  sliderBlock.addEventListener("mouseleave", startSlide);

  showSlide(0);
  startSlide();
};

export default slider;
