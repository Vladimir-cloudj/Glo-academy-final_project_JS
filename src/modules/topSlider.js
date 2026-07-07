/**
 * Модуль слайдера для блока .top-slider
 * Реализует автопрокрутку слайдов каждые 3 секунды
 * с точками переключения (dots)
 */

export const topSlider = () => {
  const slider = document.querySelector(".top-slider");

  if (!slider) {
    console.warn("Блок .top-slider не найден");
    return;
  }

  const slides = slider.querySelectorAll(".item");

  if (slides.length === 0) {
    console.warn("Слайды не найдены");
    return;
  }

  let currentSlide = 0;
  let autoPlayInterval = null;
  const autoPlayDelay = 3000; // 3 секунды

  // Создаём контейнер для дотсов
  const dotsContainer = document.createElement("ul");
  dotsContainer.className = "slick-dots";
  slider.appendChild(dotsContainer);

  // Создаём дотсы для каждого слайда
  slides.forEach((_, index) => {
    const dot = document.createElement("li");
    dot.dataset.slide = index;

    const button = document.createElement("button");
    button.type = "button";
    dot.appendChild(button);

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("li");

  // Функция показа слайда
  const showSlide = (index) => {
    // Скрываем все слайды
    slides.forEach((slide) => {
      slide.classList.remove("active");
      slide.style.display = "none";
    });

    // Убираем активный класс у всех дотсов
    dots.forEach((dot) => {
      dot.classList.remove("slick-active");
    });

    // Показываем нужный слайд
    slides[index].style.display = "block";

    // Небольшая задержка для анимации
    setTimeout(() => {
      slides[index].classList.add("active");
    }, 10);

    // Активируем нужный дотс
    dots[index].classList.add("slick-active");

    currentSlide = index;
  };

  // Функция перехода к следующему слайду
  const nextSlide = () => {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    showSlide(nextIndex);
  };

  // Функция запуска автопрокрутки
  const startAutoPlay = () => {
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
  };

  // Функция остановки автопрокрутки
  const stopAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  };

  // Обработчики клика на дотсы
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      stopAutoPlay();
      showSlide(index);
      startAutoPlay(); // Перезапускаем автопрокрутку
    });
  });

  // Показываем первый слайд при загрузке
  showSlide(0);

  // Запускаем автопрокрутку
  startAutoPlay();

  // Останавливаем автопрокрутку при наведении на слайдер
  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);
};
