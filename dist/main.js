/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./src/assets/styles/styles.css ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (20:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| } */\\n| \\n> .logo .brand {\\n|   color: #222222;\\n|   font-size: 27px;\");\n\n//# sourceURL=webpack://project/./src/assets/styles/styles.css?");

/***/ }),

/***/ "./src/components/js/basket.js":
/*!*************************************!*\
  !*** ./src/components/js/basket.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nvar basket = {\r\n    items: [],\r\n    container: null,\r\n    basket: basket,\r\n\r\n    init() {\r\n        this.container = document.querySelector(\"#basket\");\r\n        this._render();\r\n        this._handleActions();\r\n    },\r\n    _handleActions() {\r\n        this.container.addEventListener('click', evt => {\r\n            if (evt.target.name == 'remove') {\r\n                this.remove(evt.target.dataset.id);\r\n            }\r\n        });\r\n\r\n    },\r\n    _render() {\r\n        let str = \"\";\r\n        this.items.forEach(item => {\r\n            str += `\r\n            <div class=\"d-flex\">\r\n                <a href=\"#\" class=\"d-flex headerCartWrapIn\">\r\n                    <img src=\"${item.img}\" alt=\"\">\r\n                    <div>\r\n                        <div>${item.name}</div>\r\n                        <span>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star-half-alt\"></i>\r\n                        </span>\r\n                        <div class=\"headerCartWrapPrice\">${item.amount} \r\n                            <span>x</span> $${item.price}\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <button name=\"remove\" data-id=\"${item.id}\">x</button>\r\n            </div>\r\n            `\r\n        })\r\n        this.container.innerHTML = str;\r\n\r\n    },\r\n    add(item) {\r\n        let find = this.items.find(el => el.id == item.id);\r\n\r\n        if (!find) {\r\n            this.items.push(item);\r\n        } else {\r\n            find.amount++;\r\n        }\r\n        this._render();\r\n        this.renderTotalSum();\r\n    },\r\n    renderTotalSum() {\r\n        document.querySelector('.total').textContent = '$' + this.getTotalSum();\r\n        if (this.getTotalSum() == undefined) {\r\n            return document.querySelector('.total').textContent = '$ 0'\r\n        }\r\n    },\r\n    getTotalSum() {\r\n        let sum = 0;\r\n        for (let key in this.items) {\r\n            sum += this.items[key].price * this.items[key].amount;\r\n            return sum;\r\n        }\r\n        this._render();\r\n\r\n    },\r\n    remove(itemId) {\r\n\r\n        let find = this.items.find(el => el.id == itemId);\r\n\r\n        if (find.amount > 1) {\r\n            find.amount--;\r\n        } else {\r\n            this.items.splice(this.items.indexOf(find), 1);\r\n        }\r\n        this._render();\r\n        this.renderTotalSum();\r\n    }\r\n}\r\n\r\nbasket.init();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basket);\n\n//# sourceURL=webpack://project/./src/components/js/basket.js?");

/***/ }),

/***/ "./src/components/js/product.js":
/*!**************************************!*\
  !*** ./src/components/js/product.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket */ \"./src/components/js/basket.js\");\n\r\n\r\nfunction createItem(id, name, price, img) {\r\n    return { id, name, price, img };\r\n};\r\n\r\nfunction initCatalog() {\r\n    let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];\r\n    let names = [\"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\",\r\n        \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\"];\r\n\r\n    let prices = [\"52.00\", \"62.00\", \"72.00\", \"82.00\", \"52.00\", \"62.00\", \"72.00\", \"82.00\", \"72.00\"];\r\n\r\n    let imgs = [\r\n        \"../src/assets/imgs/Product1.jpg\",\r\n        \"../src/assets/imgs/Product2.jpg\",\r\n        \"../src/assets/imgs/Product3.jpg\",\r\n        \"../src/assets/imgs/Product4.jpg\",\r\n        \"../src/assets/imgs/Product5.jpg\",\r\n        \"../src/assets/imgs/Product1.jpg\",\r\n        \"../src/assets/imgs/Product2.jpg\",\r\n        \"../src/assets/imgs/Product3.jpg\",\r\n        \"../src/assets/imgs/Product4.jpg\"\r\n    ];\r\n\r\n    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));\r\n};\r\n\r\nconst catalog = {\r\n    items: [],\r\n    container: null,\r\n    basket: basket,\r\n\r\n    init() {\r\n        this.items = initCatalog();\r\n        this.container = document.querySelector(\"#catalog\");\r\n        this._render();\r\n        this._handleActions();\r\n    },\r\n    _handleActions() {\r\n        this.container.addEventListener('click', evt => {\r\n            if (evt.target.name == 'add') {\r\n\r\n                let item = {\r\n                    name: evt.target.dataset.name,\r\n                    price: +evt.target.dataset.price,\r\n                    img: evt.target.dataset.img,\r\n                    amount: 1,\r\n                    id: evt.target.dataset.id\r\n                }\r\n                this.basket.add(item);\r\n\r\n            }\r\n        })\r\n    },\r\n    _render() {\r\n        let str = \"\";\r\n        this.items.forEach(item => {\r\n            str += `\r\n            <div class=\"col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems\" >\r\n                <div class=\"feturedItem\">\r\n                    <div class=\"feturedImgWrap\">\r\n                        <div class=\"feturedBuy\">\r\n                            <button \r\n                                class=\"d-flex justify-content-center align-items-center\" \r\n                                name=\"add\"\r\n                                data-name=\"${item.name}\"\r\n                                data-img=\"${item.img}\"\r\n                                data-price=\"${item.price}\"\r\n                                data-id=\"${item.id}\"\r\n                            >\r\n                                <i class=\"fas fa-shopping-cart\"></i> Add to Cart\r\n                            </button>\r\n                        </div>\r\n                        <img class=\"feturedProduct\" src=\"${item.img}\" alt=\"product1\">\r\n                    </div>\r\n                    <div class=\"feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start\">\r\n                        <div class=\"feturedItemName\">${item.name}</div>\r\n                        <div class=\"feturedItemPrice\">$${item.price}</div>\r\n                            <button \r\n                                class=\"d-flex justify-content-center align-items-center\" \r\n                                name=\"add\"\r\n                                data-name=\"${item.name}\"\r\n                                data-img=\"${item.img}\"\r\n                                data-price=\"${item.price}\"\r\n                                data-id=\"${item.id}\"\r\n                            >\r\n                                <i class=\"fas fa-shopping-cart\"></i> Add to Cart\r\n                            </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            `\r\n        })\r\n        this.container.innerHTML = str;\r\n    }\r\n}\r\n\r\ncatalog.init();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://project/./src/components/js/product.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.css */ \"./src/assets/styles/styles.css\");\n/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_js_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/js/product */ \"./src/components/js/product.js\");\n\n\n\n_components_js_product__WEBPACK_IMPORTED_MODULE_1__.default.basket.init();\n_components_js_product__WEBPACK_IMPORTED_MODULE_1__.default.catalog.init();\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;