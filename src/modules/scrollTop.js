export const scrollTop = () => {
  const upButton =
    document.querySelector(".up") || document.getElementById("up");
  const servicesSection = document.querySelector(".services-section");

  if (!upButton || !servicesSection) return;

  upButton.style.display = "none";

  let ticking = false;

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const sectionTop = servicesSection.getBoundingClientRect().top + scrollY;

    if (scrollY >= sectionTop) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });

  upButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
