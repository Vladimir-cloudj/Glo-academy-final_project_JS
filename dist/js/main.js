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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_services_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services-swiper.js */ \"./src/modules/services-swiper.js\");\n\r\n\r\n// import { slider } from './modules/services-carousel.js';\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.initModal)();\r\n  (0,_modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__.smoothScroll)();\r\n  // slider()\r\n  (0,_modules_services_swiper_js__WEBPACK_IMPORTED_MODULE_2__.servicesSwiper)();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModal: () => (/* binding */ initModal)\n/* harmony export */ });\nconst initModal = () => {\r\n  const modalTriggers = document.querySelectorAll(\r\n    \".modal-trigger, .callback-btn\",\r\n  );\r\n  const modal = document.querySelector(\".modal-callback\");\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n  const modalClose = modal?.querySelector(\".modal-close\");\r\n\r\n  if (!modal || !overlay) return;\r\n\r\n  const openModal = (e) => {\r\n    if (e) e.preventDefault();\r\n    modal.style.display = \"block\";\r\n    overlay.style.display = \"block\";\r\n    document.body.style.overflow = \"hidden\";\r\n  };\r\n\r\n  const closeModal = () => {\r\n    modal.style.display = \"none\";\r\n    overlay.style.display = \"none\";\r\n    document.body.style.overflow = \"\";\r\n  };\r\n\r\n  modalTriggers.forEach((trigger) => {\r\n    trigger.addEventListener(\"click\", openModal);\r\n  });\r\n\r\n  const serviceLinks = document.querySelectorAll(\r\n    \".services-elements .fancyboxModal\",\r\n  );\r\n  serviceLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      openModal();\r\n    });\r\n  });\r\n\r\n  if (modalClose) {\r\n    modalClose.addEventListener(\"click\", closeModal);\r\n  }\r\n\r\n  overlay.addEventListener(\"click\", closeModal);\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.key === \"Escape\" && modal.style.display === \"block\") {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

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