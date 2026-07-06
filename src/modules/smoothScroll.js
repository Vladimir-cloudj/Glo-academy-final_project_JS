export const smoothScroll = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  const headerHeight = 101; 

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const href = this.getAttribute("href");

      if (!href || href === "#") return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;


      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
};
