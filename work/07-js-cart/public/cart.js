/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");

function render(state, rootEl) {
  if (state.page === _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.PRODUCTS) {
    renderProducts(state, rootEl);
  }
  if (state.page === _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART) {
    renderCart(state, rootEl);
  }
}
function renderProducts(state, rootEl) {
  var html = state.products.map(function (product, index) {
    return "\n      <li class='product' data-index=\"".concat(index, "\">\n        <img src=\"").concat(product.imgUrl, "\" name=\"").concat(product.name, "\"/>\n        <span>").concat(product.name, ": $").concat(product.price, "</span>\n        <button class=\"add-to-cart\" data-index=\"").concat(index, "\">Add to Cart</button>\n      </li>\n    ");
  }).join('');
  rootEl.innerHTML = "\n    <div class=\"center-container\">\n      <p>Cat List</p> \n    </div> \n    <ul class=\"products\">".concat(html, "</ul>\n    <button class=\"view-cart\">View Cart").concat(state.totalNum ? '(' + state.totalNum + ')' : '', "</button>\n  ");
}
;
function renderCart(state, rootEl) {
  var html = state.products.map(function (product, index) {
    return "\n      <li class='product' data-index=\"".concat(index, "\">\n        <img src=\"").concat(product.imgUrl, "\" name=\"").concat(product.name, "\"/>\n        <span>").concat(product.name, ": $").concat(product.price, "</span>\n        <button class=\"add-to-cart\" data-index=\"").concat(index, "\">Add to Cart</button>\n      </li>\n    ");
  }).join('');
  var cart_html = state.cartItems.map(function (item, index) {
    var totalPrice = (item.price * item.quantity).toFixed(2);
    return "\n    <li class='cart-item'>\n      <div class='left'>\n        <img src=\"".concat(item.imgUrl, "\"/>\n        <span>").concat(item.name, "</span>    \n      </div>\n      <div class='right'>\n        <button data-index=\"").concat(index, "\" class=\"decrease\"> - </button>        \n        <span>").concat(item.quantity, "</span> \n        <button data-index=\"").concat(index, "\" class=\"increase\"> + </button>                \n        <span class=\"total-price\">$").concat(totalPrice, "</span> \n      </div>         \n    </li>\n    ");
  }).join('');
  var totalCost = state.totalPrice;
  rootEl.innerHTML = "\n    <div class=\"center-container\">\n      <p>Cat List</p> \n    </div>\n    <ul class=\"products\">".concat(html, "</ul>  \n    <div class=\"center-container-2\">\n      <p>Shopping Cart</p>  \n    </div>\n    <div class=\"button-container\">\n      <button class=\"checkout\">Checkout</button>\n      <button class=\"hide-cart\">Hide Cart</button>\n    </div> \n    <span>").concat(totalCost ? 'Total Cost: $' + totalCost.toFixed(2) : 'Nothing in the cart', "</span>\n    <ul class=\"carts\">").concat(cart_html, "</ul>\n  ");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGES: () => (/* binding */ PAGES),
/* harmony export */   addProduct: () => (/* binding */ addProduct),
/* harmony export */   clearCart: () => (/* binding */ clearCart),
/* harmony export */   decreaseQuantity: () => (/* binding */ decreaseQuantity),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   increaseQuantity: () => (/* binding */ increaseQuantity)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var PAGES = {
  PRODUCTS: 'products',
  CART: 'cart'
};
var state = {
  products: [{
    name: "kitty1",
    price: 0.99,
    imgUrl: 'http://placekitten.com/100/100?image=1'
  }, {
    name: "kitty2",
    price: 3.14,
    imgUrl: 'http://placekitten.com/100/100?image=2'
  }, {
    name: "kitty3",
    price: 2.73,
    imgUrl: 'http://placekitten.com/100/100?image=3'
  }],
  cartItems: [],
  page: PAGES.PRODUCTS,
  totalPrice: 0,
  totalNum: 0
};
function addProduct(index) {
  var product = state.products[index];
  var isExist = false;

  // 是of 不是in！不然失效
  var _iterator = _createForOfIteratorHelper(state.cartItems),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (item.name === product.name) {
        isExist = true;
        item.quantity++;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!isExist) {
    state.cartItems.push({
      name: product.name,
      quantity: 1,
      price: product.price,
      imgUrl: product.imgUrl
    });
  }
  state.totalPrice += product.price;
  state.totalNum += 1;
}

// TypeError: "quantity" is read-only
// 不能用const
function decreaseQuantity(index) {
  var item = state.cartItems[index];
  item.quantity--;
  state.totalPrice -= item.price;
  state.totalNum -= 1;
  if (item.quantity === 0) {
    state.cartItems.splice(index, 1);
  }

  // 不能这么写！
  // let quantity = state.cartItems[index].quantity;
  // quantity--;
}

function increaseQuantity(index) {
  var item = state.cartItems[index];
  item.quantity++;
  state.totalPrice += item.price;
  state.totalNum += 1;
}
function clearCart() {
  state.cartItems = [];
  state.totalPrice = 0;
  state.totalNum = 0;
  state.page = PAGES.PRODUCTS;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");


var rootEl = document.querySelector('#root');

// add product to cart
function addToCart(rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
      var index = e.target.dataset.index;
      (0,_state__WEBPACK_IMPORTED_MODULE_0__.addProduct)(index);
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
  });
}

// add or reduce the quantity of products
function changeQuantity(rootEl) {
  rootEl.addEventListener('click', function (e) {
    var index = e.target.dataset.index;
    if (e.target.classList.contains('decrease')) {
      (0,_state__WEBPACK_IMPORTED_MODULE_0__.decreaseQuantity)(index);
    }
    if (e.target.classList.contains('increase')) {
      (0,_state__WEBPACK_IMPORTED_MODULE_0__.increaseQuantity)(index);
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
  });
}

// change the page via buttons
// 不能传state进去
function changePage(rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('view-cart')) {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART;
    }
    if (e.target.classList.contains('hide-cart')) {
      _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.PRODUCTS;
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
  });
}
function checkout(rootEl) {
  rootEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('checkout')) (0,_state__WEBPACK_IMPORTED_MODULE_0__.clearCart)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
  });
}
(0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], rootEl);
addToCart(rootEl);
changeQuantity(rootEl);
changePage(rootEl);
checkout(rootEl);
})();

/******/ })()
;
//# sourceMappingURL=cart.js.map