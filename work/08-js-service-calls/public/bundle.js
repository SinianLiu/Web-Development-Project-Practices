/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDelete: () => (/* binding */ fetchDelete),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchNewWord: () => (/* binding */ fetchNewWord),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUserData: () => (/* binding */ fetchUserData)
/* harmony export */ });
function fetchLogin(username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchSession() {
  return fetch('/api/session')["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
}
function fetchUserData() {
  return fetch('/api/word')["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
}
function fetchNewWord(word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
}
function fetchDelete() {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var state = {
  userData: {}
};
state.updateUserData = function (userData) {
  state.userData = userData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
function render(rootEl, state) {
  var _state$userData = state.userData,
    username = _state$userData.username,
    storedWord = _state$userData.storedWord;
  if (!username && !storedWord) {
    rootEl.innerHTML = "\n      <div class=\"login\">\n        <label for=\"username\">Enter User Name:</label>\n        <input type=\"text\" class=\"username\" id=\"username\"/>\n        <button class=\"button login-button\">Login</button>\n      </div>\n    ";
  } else {
    rootEl.innerHTML = "\n      <div class=\"data-container\">\n        <div class=\"data-details\">\n          <p>Username: <span>".concat(username, "</span></p>\n          <p>Word: <span>").concat(storedWord, "</span></p>\n        </div>  \n\n        <div class=\"data-update\">\n          <label for=\"word\">Change Your Word:</label>\n          <input type=\"text\" class=\"word\" id=\"word\">\n          <button class=\"button change-button\">Change</button>\n        </div> \n\n        <div class=\"logout\">       \n          <button class=\"button logout-button\">Logout</button>     \n        </div>              \n      </div>\n    ");
  }
}

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
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");



var rootEl = document.querySelector('#root');
var errorEl = document.querySelector('.error');
getSession();
rootEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('login-button')) {
    var inputEl = document.querySelector('.username');
    var username = inputEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username)["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Please check your network connection!</p>";
        return;
      } else if (err.error == 'required-username') {
        errorEl.innerHTML = "<p>Please input a valid username!</p>";
        return;
      } else if (err.error == 'auth-insufficient') {
        errorEl.innerHTML = "<p>Please do not input 'dog' as your username!</p>";
        return;
      }
    }).then(function () {
      getUserData();
    });
  }
  if (e.target.classList.contains('change-button')) {
    var _inputEl = document.querySelector('.word');
    var newWord = _inputEl.value;
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchNewWord)(newWord)["catch"](function (err) {
      if (err.error == 'auth-missing') {
        errorEl.innerHTML = "<p>You need to login first!</p>";
        (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])(rootEl, '', '');
      } else if (err.error == 'invalid-word') {
        errorEl.innerHTML = "<p>Please input a valid word!</p>";
      } else if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Please check your network connection!</p>";
      } else if (err.error == 'required-word') {
        errorEl.innerHTML = "<p>Please input a word!</p>";
      }
    }).then(function (response) {
      _state__WEBPACK_IMPORTED_MODULE_2__["default"].updateUserData(response);
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])(rootEl, _state__WEBPACK_IMPORTED_MODULE_2__["default"]);
      errorEl.innerHTML = '';
    });
  }
  if (e.target.classList.contains('logout-button')) {
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchDelete)()["catch"](function (err) {
      if (err.error == 'network-error') {
        errorEl.innerHTML = "<p>Please check your network connection!</p>";
        return;
      }
    }).then(function () {
      _state__WEBPACK_IMPORTED_MODULE_2__["default"].userData = {};
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])(rootEl, _state__WEBPACK_IMPORTED_MODULE_2__["default"]);
      errorEl.innerHTML = '';
    });
  }
});
function getUserData() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUserData)()["catch"](function (err) {
    if (err.error == 'network-error') {
      errorEl.innerHTML = "<p>Please check your network connection!</p>";
      return;
    }
  }).then(function (response) {
    if (response.error) {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])(rootEl, _state__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return;
    }
    _state__WEBPACK_IMPORTED_MODULE_2__["default"].updateUserData(response);
    (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])(rootEl, _state__WEBPACK_IMPORTED_MODULE_2__["default"]);
    errorEl.innerHTML = '';
  });
}
function getSession() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchSession)()["catch"](function (err) {
    if (err.error == 'network-error') {
      errorEl.innerHTML = "<p>Please check your network connection!</p>";
      return;
    }
  }).then(function (response) {
    if (response.error) {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__["default"])(rootEl, _state__WEBPACK_IMPORTED_MODULE_2__["default"]);
      return;
    }
    getUserData();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map