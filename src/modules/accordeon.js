export const accordeon = () => {
  const accordeonContainer = document.querySelector(".accordeon");
  if (!accordeonContainer) return;

  const elements = accordeonContainer.querySelectorAll(".element");

  elements.forEach((element) => {
    const title = element.querySelector(".title");
    if (!title) return;

    title.addEventListener("click", () => {
      const isActive = element.classList.contains("active");

      // Закрываем все вкладки
      elements.forEach((el) => {
        el.classList.remove("active");
        const content = el.querySelector(".element-content");
        if (content) {
          content.style.display = "none";
        }
      });

      // Если кликнутая вкладка не была активна — открываем её
      if (!isActive) {
        element.classList.add("active");
        const content = element.querySelector(".element-content");
        if (content) {
          content.style.display = "block";
        }
      }
    });
  });
};
