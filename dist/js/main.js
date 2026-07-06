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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./modules/smoothScroll.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.initModal)();\r\n  (0,_modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_1__.smoothScroll)();\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModal: () => (/* binding */ initModal)\n/* harmony export */ });\nconst initModal = () => {\r\n  const modalTriggers = document.querySelectorAll(\".callback-btn\");\r\n  const modal = document.querySelector(\".modal-callback\");\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n  const modalClose = modal?.querySelector(\".modal-close\");\r\n\r\n  const openModal = (event) => {\r\n    event.preventDefault();\r\n\r\n    if (modal && overlay) {\r\n      modal.style.display = \"block\";\r\n      overlay.style.display = \"block\";\r\n      document.body.style.overflow = \"hidden\";\r\n    }\r\n  };\r\n\r\n  const closeModal = () => {\r\n    if (modal && overlay) {\r\n      modal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n      document.body.style.overflow = \"\";\r\n    }\r\n  };\r\n\r\n  modalTriggers.forEach((trigger) => {\r\n    trigger.addEventListener(\"click\", openModal);\r\n  });\r\n\r\n  if (modalClose) {\r\n    modalClose.addEventListener(\"click\", closeModal);\r\n  }\r\n\r\n  if (overlay) {\r\n    overlay.addEventListener(\"click\", closeModal);\r\n  }\r\n\r\n  document.addEventListener(\"keydown\", (event) => {\r\n    if (event.key === \"Escape\" && modal?.style.display === \"block\") {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/smoothScroll.js"
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const anchorLinks = document.querySelectorAll('a[href^=\"#\"]');\r\n\r\n  const headerHeight = 101; \r\n\r\n  anchorLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", function (event) {\r\n      event.preventDefault();\r\n\r\n      const href = this.getAttribute(\"href\");\r\n\r\n      if (!href || href === \"#\") return;\r\n\r\n      const targetId = href.substring(1);\r\n      const targetElement = document.getElementById(targetId);\r\n\r\n      if (!targetElement) return;\r\n\r\n\r\n      const elementPosition = targetElement.getBoundingClientRect().top;\r\n      const offsetPosition =\r\n        elementPosition + window.pageYOffset - headerHeight;\r\n\r\n      window.scrollTo({\r\n        top: offsetPosition,\r\n        behavior: \"smooth\",\r\n      });\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?\n}");

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
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;