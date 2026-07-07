import { initModal } from "./modules/modal.js";
import { smoothScroll } from "./modules/smoothScroll.js";
// import { slider } from './modules/services-carousel.js';
import {servicesSwiper} from "./modules/services-swiper.js";
import { accordeon } from "./modules/accordeon.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  smoothScroll();
  // slider()
  servicesSwiper();
  accordeon();
});

