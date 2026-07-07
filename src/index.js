import { initModal } from "./modules/modal.js";
import { smoothScroll } from "./modules/smoothScroll.js";
// import { slider } from './modules/services-carousel.js';
import {servicesSwiper} from "./modules/services-swiper.js";
import { accordeon } from "./modules/accordeon.js";
import { scrollTop } from "./modules/scrollTop.js";
import { formCallback } from "./modules/formCallback.js";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  smoothScroll();
  // slider()
  servicesSwiper();
  accordeon();
  scrollTop();
  formCallback();
});

