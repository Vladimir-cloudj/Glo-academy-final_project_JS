/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_topSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider.js */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_services_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/services-swiper.js */ \"./src/modules/services-swiper.js\");\n/* harmony import */ var _modules_accordeon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon.js */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_scrollTop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrollTop.js */ \"./src/modules/scrollTop.js\");\n/* harmony import */ var _modules_formCallback_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formCallback.js */ \"./src/modules/formCallback.js\");\n\r\n\r\n// import { slider } from './modules/services-carousel.js';\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.initModal)();\r\n  (0,_modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__.smoothScroll)();\r\n  // slider()\r\n  (0,_modules_topSlider_js__WEBPACK_IMPORTED_MODULE_2__.topSlider)();\r\n  (0,_modules_services_swiper_js__WEBPACK_IMPORTED_MODULE_3__.servicesSwiper)();\r\n  (0,_modules_accordeon_js__WEBPACK_IMPORTED_MODULE_4__.accordeon)();\r\n  (0,_modules_scrollTop_js__WEBPACK_IMPORTED_MODULE_5__.scrollTop)();\r\n  (0,_modules_formCallback_js__WEBPACK_IMPORTED_MODULE_6__.formCallback)();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/accordeon.js"
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordeon: () => (/* binding */ accordeon)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const accordeonContainer = document.querySelector(\".accordeon\");\r\n  if (!accordeonContainer) return;\r\n\r\n  const elements = accordeonContainer.querySelectorAll(\".element\");\r\n\r\n  elements.forEach((element) => {\r\n    const title = element.querySelector(\".title\");\r\n    if (!title) return;\r\n\r\n    title.addEventListener(\"click\", () => {\r\n      const isActive = element.classList.contains(\"active\");\r\n\r\n      elements.forEach((el) => {\r\n        el.classList.remove(\"active\");\r\n        const content = el.querySelector(\".element-content\");\r\n        if (content) {\r\n          content.style.display = \"none\";\r\n        }\r\n      });\r\n\r\n      if (!isActive) {\r\n        element.classList.add(\"active\");\r\n        const content = element.querySelector(\".element-content\");\r\n        if (content) {\r\n          content.style.display = \"block\";\r\n        }\r\n      }\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/accordeon.js?\n}");

/***/ },

/***/ "./src/modules/formCallback.js"
/*!*************************************!*\
  !*** ./src/modules/formCallback.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formCallback: () => (/* binding */ formCallback)\n/* harmony export */ });\nconst formCallback = () => {\r\n  const form = document.querySelector('form[name=\"form-callback\"]');\r\n\r\n  const nameInput = form.querySelector('[name=\"fio\"]');\r\n  const phoneInput = form.querySelector('[name=\"tel\"]');\r\n  const submitBtn = form.querySelector(\".feedback\");\r\n\r\n  const statusBlock = document.createElement(\"div\");\r\n  statusBlock.className = \"form-status\";\r\n  statusBlock.style.cssText = `\r\n    margin-top: 15px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    display: none;\r\n    border-radius: 4px;\r\n  `;\r\n  form.appendChild(statusBlock);\r\n\r\n    nameInput.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z\\s]/g, \"\");\r\n    });\r\n\r\n  phoneInput.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^0-9+]/g, \"\");\r\n  });\r\n\r\n  const showStatus = (message, type) => {\r\n    statusBlock.textContent = message;\r\n    statusBlock.style.display = \"block\";\r\n\r\n    switch (type) {\r\n      case \"loading\":\r\n        statusBlock.style.background = \"#fff3cd\";\r\n        statusBlock.style.color = \"#856404\";\r\n        if (submitBtn) submitBtn.disabled = true;\r\n        break;\r\n      case \"success\":\r\n        statusBlock.style.background = \"#d4edda\";\r\n        statusBlock.style.color = \"#155724\";\r\n        if (submitBtn) submitBtn.disabled = false;\r\n        break;\r\n      case \"error\":\r\n        statusBlock.style.background = \"#f8d7da\";\r\n        statusBlock.style.color = \"#721c24\";\r\n        if (submitBtn) submitBtn.disabled = false;\r\n        break;\r\n    }\r\n  };\r\n\r\n  form.addEventListener(\"submit\", async (e) => {\r\n    e.preventDefault();\r\n\r\n    const name = nameInput.value.trim();\r\n    const phone = phoneInput.value.trim();\r\n\r\n    console.log(\"Данные:\", { name, phone });\r\n\r\n    if (!name || !phone) {\r\n      showStatus(\"Пожалуйста, заполните все поля\", \"error\");\r\n      return;\r\n    }\r\n\r\n    showStatus(\"Идет отправка...\", \"loading\");\r\n\r\n    try {\r\n      const response = await fetch(\"https://httpbin.org/post\", {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: JSON.stringify({ name, phone }),\r\n      });\r\n\r\n      if (!response.ok) throw new Error(\"Ошибка сети\");\r\n\r\n      showStatus(\"Заявка успешно отправлена!\", \"success\");\r\n      form.reset();\r\n\r\n      setTimeout(() => {\r\n        statusBlock.style.display = \"none\";\r\n      }, 3000);\r\n    } catch (error) {\r\n      console.error(\"Ошибка:\", error);\r\n      showStatus(\"Ошибка при отправке\", \"error\");\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/formCallback.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModal: () => (/* binding */ initModal)\n/* harmony export */ });\nconst initModal = () => {\r\n  const modalTriggers = document.querySelectorAll(\r\n    \".modal-trigger, .callback-btn, .button-services\",\r\n  );\r\n  const modal = document.querySelector(\".modal-callback\");\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n  const modalClose = modal?.querySelector(\".modal-close\");\r\n\r\n  if (!modal || !overlay) return;\r\n\r\n  const openModal = (e) => {\r\n    if (e) e.preventDefault();\r\n\r\n    const scrollY = window.scrollY;\r\n    const scrollbarWidth =\r\n      window.innerWidth - document.documentElement.clientWidth;\r\n\r\n    document.body.style.overflow = \"hidden\";\r\n    document.body.style.paddingRight = `${scrollbarWidth}px`;\r\n    document.body.style.position = \"fixed\";\r\n    document.body.style.top = `-${scrollY}px`;\r\n    document.body.style.left = \"0\";\r\n    document.body.style.right = \"0\";\r\n\r\n    modal.style.display = \"block\";\r\n    overlay.style.display = \"block\";\r\n  };\r\n\r\n  const closeModal = () => {\r\n    modal.style.display = \"none\";\r\n    overlay.style.display = \"none\";\r\n\r\n    const scrollY = document.body.style.top;\r\n    document.body.style.overflow = \"\";\r\n    document.body.style.paddingRight = \"\";\r\n    document.body.style.position = \"\";\r\n    document.body.style.top = \"\";\r\n    document.body.style.left = \"\";\r\n    document.body.style.right = \"\";\r\n    window.scrollTo(0, parseInt(scrollY || \"0\") * -1);\r\n  };\r\n\r\n  modalTriggers.forEach((trigger) => {\r\n    trigger.addEventListener(\"click\", openModal);\r\n  });\r\n\r\n  const serviceLinks = document.querySelectorAll(\r\n    \".services-elements .fancyboxModal\",\r\n  );\r\n  serviceLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      openModal();\r\n    });\r\n  });\r\n\r\n  if (modalClose) {\r\n    modalClose.addEventListener(\"click\", closeModal);\r\n  }\r\n\r\n  overlay.addEventListener(\"click\", closeModal);\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.key === \"Escape\" && modal.style.display === \"block\") {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/scrollTop.js"
/*!**********************************!*\
  !*** ./src/modules/scrollTop.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollTop: () => (/* binding */ scrollTop)\n/* harmony export */ });\nconst scrollTop = () => {\r\n  const upButton =\r\n    document.querySelector(\".up\") || document.getElementById(\"up\");\r\n  const servicesSection = document.querySelector(\".services-section\");\r\n\r\n  if (!upButton || !servicesSection) return;\r\n\r\n  upButton.style.display = \"none\";\r\n\r\n  let ticking = false;\r\n\r\n  const onScroll = () => {\r\n    const scrollY = window.scrollY || window.pageYOffset;\r\n    const sectionTop = servicesSection.getBoundingClientRect().top + scrollY;\r\n\r\n    if (scrollY >= sectionTop) {\r\n      upButton.style.display = \"block\";\r\n    } else {\r\n      upButton.style.display = \"none\";\r\n    }\r\n\r\n    ticking = false;\r\n  };\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    if (!ticking) {\r\n      requestAnimationFrame(onScroll);\r\n      ticking = true;\r\n    }\r\n  });\r\n\r\n  upButton.addEventListener(\"click\", () => {\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/scrollTop.js?\n}");

/***/ },

/***/ "./src/modules/services-swiper.js"
/*!****************************************!*\
  !*** ./src/modules/services-swiper.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   servicesSwiper: () => (/* binding */ servicesSwiper)\n/* harmony export */ });\nconst servicesSwiper = () => {\r\n  const container = document.querySelector(\".services-elements\");\r\n  if (!container) return;\r\n\r\n  const row = container.querySelector(\".row\");\r\n  const slides = Array.from(row.querySelectorAll(\".col-md-4\"));\r\n  const arrowLeft = document.querySelector(\".services-arrow .arrow-left\");\r\n  const arrowRight = document.querySelector(\".services-arrow .arrow-right\");\r\n\r\n  if (slides.length === 0 || !arrowLeft || !arrowRight) return;\r\n\r\n  let currentIndex = 0;\r\n\r\n  const getVisibleCount = () => {\r\n    if (window.innerWidth < 768) return 1;\r\n    if (window.innerWidth < 992) return 2;\r\n    return 3;\r\n  };\r\n\r\n  const setSlidesWidth = () => {\r\n    const visibleCount = getVisibleCount();\r\n    const slideWidth = 100 / visibleCount;\r\n    slides.forEach((slide) => {\r\n      slide.style.width = `${slideWidth}%`;\r\n      slide.style.flexShrink = \"0\";\r\n    });\r\n  };\r\n\r\n  const updateCarousel = () => {\r\n    const visibleCount = getVisibleCount();\r\n    const slideWidthPercent = 100 / visibleCount;\r\n    const offset = -(currentIndex * slideWidthPercent);\r\n    row.style.transform = `translateX(${offset}%)`;\r\n    row.style.transition = \"transform 0.3s ease\";\r\n  };\r\n\r\n  arrowLeft.addEventListener(\"click\", () => {\r\n    const visibleCount = getVisibleCount();\r\n    const maxIndex = slides.length - visibleCount;\r\n\r\n    if (currentIndex > 0) {\r\n      currentIndex--;\r\n    } else {\r\n      currentIndex = maxIndex;\r\n    }\r\n    updateCarousel();\r\n  });\r\n\r\n  arrowRight.addEventListener(\"click\", () => {\r\n    const visibleCount = getVisibleCount();\r\n    const maxIndex = slides.length - visibleCount;\r\n\r\n    if (currentIndex < maxIndex) {\r\n      currentIndex++;\r\n    } else {\r\n      currentIndex = 0;\r\n    }\r\n    updateCarousel();\r\n  });\r\n\r\n  window.addEventListener(\"resize\", () => {\r\n    currentIndex = 0;\r\n    setSlidesWidth();\r\n    updateCarousel();\r\n  });\r\n\r\n  setSlidesWidth();\r\n  updateCarousel();\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/services-swiper.js?\n}");

/***/ },

/***/ "./src/modules/smoothScroll.js"
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const anchorLinks = document.querySelectorAll('a[href^=\"#\"]');\r\n\r\n  const headerHeight = 101; \r\n\r\n  anchorLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", function (event) {\r\n      event.preventDefault();\r\n\r\n      const href = this.getAttribute(\"href\");\r\n\r\n      if (!href || href === \"#\") return;\r\n\r\n      const targetId = href.substring(1);\r\n      const targetElement = document.getElementById(targetId);\r\n\r\n      if (!targetElement) return;\r\n\r\n\r\n      const elementPosition = targetElement.getBoundingClientRect().top;\r\n      const offsetPosition =\r\n        elementPosition + window.pageYOffset - headerHeight;\r\n\r\n      window.scrollTo({\r\n        top: offsetPosition,\r\n        behavior: \"smooth\",\r\n      });\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/smoothScroll.js?\n}");

/***/ },

/***/ "./src/modules/topSlider.js"
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topSlider: () => (/* binding */ topSlider)\n/* harmony export */ });\nconst topSlider = () => {\r\n   const SLIDE_INTERVAL_MS = 3000;\r\n  const slider = document.querySelector(\".top-slider\");\r\n  if (!slider) return;\r\n\r\n  const slides = slider.querySelectorAll(\".item\");\r\n  if (slides.length === 0) return;\r\n\r\n  let currentSlide = 0;\r\n  const totalSlides = slides.length;\r\n  let autoPlayInterval;\r\n\r\n  let dotsContainer = slider.querySelector(\".slider-dots\");\r\n  if (!dotsContainer) {\r\n    dotsContainer = document.createElement(\"ul\");\r\n    dotsContainer.className = \"slider-dots\";\r\n    slider.appendChild(dotsContainer);\r\n\r\n    slides.forEach((_, index) => {\r\n      const dot = document.createElement(\"li\");\r\n      if (index === 0) dot.classList.add(\"slick-active\");\r\n\r\n      dot.addEventListener(\"click\", () => {\r\n        stopAutoPlay();\r\n        showSlide(index);\r\n        startAutoPlay();\r\n      });\r\n\r\n      dotsContainer.appendChild(dot);\r\n    });\r\n  }\r\n\r\n  const dots = dotsContainer.querySelectorAll(\"li\");\r\n\r\n  const showSlide = (index) => {\r\n    slides.forEach((slide, i) => {\r\n      const isActive = i === index;\r\n\r\n      slide.classList.toggle(\"active\", isActive);\r\n      const table = slide.querySelector(\".table\");\r\n      if (table) {\r\n        table.classList.toggle(\"active\", isActive);\r\n      }\r\n    });\r\n\r\n    dots.forEach((dot, i) => {\r\n      dot.classList.toggle(\"slick-active\", i === index);\r\n    });\r\n\r\n    currentSlide = index;\r\n  };\r\n\r\n  const nextSlide = () => {\r\n    showSlide((currentSlide + 1) % totalSlides);\r\n  };\r\n\r\n  const startAutoPlay = () => {\r\n    autoPlayInterval = setInterval(nextSlide, SLIDE_INTERVAL_MS);\r\n  };\r\n\r\n  const stopAutoPlay = () => {\r\n    clearInterval(autoPlayInterval);\r\n  };\r\n\r\n  slider.addEventListener(\"mouseenter\", stopAutoPlay);\r\n  slider.addEventListener(\"mouseleave\", startAutoPlay);\r\n\r\n  showSlide(0);\r\n  startAutoPlay();\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/topSlider.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;