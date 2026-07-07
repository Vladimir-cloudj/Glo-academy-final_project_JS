import { initModal } from "./modules/modal.js";
import { smoothScroll } from "./modules/smoothScroll.js";
// import { slider } from './modules/services-carousel.js';
import {servicesSwiper} from "./modules/services-swiper.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  smoothScroll();
  // slider()
  servicesSwiper();
});

