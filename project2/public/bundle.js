/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_MESSAGE: 'required-message'
};
var CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'Trouble connecting to the network.  Please try again. '), SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any records, please try again. '), SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username. '), "default", 'Something went wrong.  Please try again. ');

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAbilityToAddMessage: () => (/* binding */ addAbilityToAddMessage),
/* harmony export */   addAbilityToLogin: () => (/* binding */ addAbilityToLogin),
/* harmony export */   addAbilityToLogout: () => (/* binding */ addAbilityToLogout),
/* harmony export */   addAbilityToRefresh: () => (/* binding */ addAbilityToRefresh),
/* harmony export */   enableButton: () => (/* binding */ enableButton)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");




function addAbilityToLogin(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.addEventListener('submit', function (e) {
    if (!e.target.classList.contains('login__form')) {
      return;
    }
    e.preventDefault();
    var username = appEl.querySelector('.login__username').value;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnLogin)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchLogin)(username).then(function (response) {
      var allMessages = response.allMessages,
        allSessions = response.allSessions;
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.login)();
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(allMessages);
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setSessions)(allSessions);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToLogout(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  appEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('controls__logout')) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.logout)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchLogout)()["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function addAbilityToRefresh(_ref3) {
  var state = _ref3.state,
    appEl = _ref3.appEl;
  if (state.isLoggedIn === false) {
    return;
  }
  (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnMessages)();
  (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchMessages)().then(function (response) {
    var allMessages = response.allMessages,
      allSessions = response.allSessions;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(allMessages);
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.setSessions)(allSessions);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
      state: state,
      appEl: appEl
    });
  })["catch"](function (err) {
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: state,
      appEl: appEl
    });
  });
}
function addAbilityToAddMessage(_ref4) {
  var state = _ref4.state,
    appEl = _ref4.appEl;
  appEl.addEventListener('submit', function (e) {
    if (!e.target.classList.contains('add__form')) {
      return;
    }
    var message = appEl.querySelector('.add__message').value;
    (0,_services__WEBPACK_IMPORTED_MODULE_1__.fetchAddMessage)(message).then(function (response) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.addMessage)(response);
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}
function enableButton(_ref5) {
  var appEl = _ref5.appEl;
  appEl.addEventListener('input', function (e) {
    var messageInput = appEl.querySelector('.add__message');
    var submitButton = appEl.querySelector('.add__button');
    if (!e.target.classList.contains('add__message')) {
      return;
    }
    if (messageInput.value.trim() === '') {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderMessages: () => (/* binding */ renderMessages)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function render(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  var html = "\n      ".concat(generateStatusHtml(state), "\n      ").concat(generateLoginHtml(state), "\n      ").concat(generateContentHtml({
    state: state
  }), "\n  ");
  appEl.innerHTML = html;
}
function renderMessages(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  var userList = appEl.querySelector('.users');
  var messagesEl = appEl.querySelector('.messages');
  userList.innerHTML = generateUsersHtml(state);
  messagesEl.innerHTML = generateMessagesHtml(state);
}
function generateStatusHtml(state) {
  return "\n      <div class=\"status\">".concat(state.error, "</div>\n  ");
}
function generateLoginHtml(state) {
  if (state.isLoginPending) {
    return "\n      <p class=\"status\">Loading user...</p>\n    ";
  }
  if (state.isLoggedIn) {
    return "";
  }
  return "\n      <div class=\"login\">\n        <form class=\"login__form\" action=\"#/login\">\n          <label>Username: </label>\n          <input class=\"login__username\" value=\"\">\n          <button class=\"login__button\" type=\"submit\">Login</button>\n        </form>\n      </div>\n  ";
}
function generateContentHtml(_ref3) {
  var state = _ref3.state;
  if (!state.isLoggedIn) {
    return "";
  }
  if (state.isTodoPending) {
    return "\n      <div class=\"content\">\n        ".concat(generateControlsHtml(state), "\n        <p class=\"status\">Loading Messages...</p>\n      </div>\n    ");
  }
  return "\n      <div class=\"left-side\">\n        <h2>Users:</h2>\n        <ul class=\"users\">".concat(generateUsersHtml(state), "</ul>\n        ").concat(generateControlsHtml(), "\n      </div>\n      <div class=\"right-side\">\n        <h2>Messages:</h2>\n        <ul class=\"messages\">").concat(generateMessagesHtml(state), "</ul>  \n        ").concat(generateAddMessageHtml(), "\n      </div>\n  ");
}
function generateUsersHtml(state) {
  var usernames = Object.values(state.sessions).map(function (user) {
    return user.username;
  });
  var uniqueUsernames = _toConsumableArray(new Set(usernames));
  var usersHtml = uniqueUsernames.map(function (username) {
    return "\n      <li class=\"user\">\n        <p>".concat(username, "</p>\n      </li>\n      ");
  }).join('') || "";
  return usersHtml;
}
function generateMessagesHtml(state) {
  var messagesHtml = Object.values(state.messages).map(function (data) {
    var message = data.message,
      username = data.username;
    return "\n      <li class=\"message\">\n        <p class=\"username\">".concat(username, ": </p>\n        <p class=\"message__text\">").concat(message, "</p>\n      </li>\n      ");
  }).join('') || "";
  return messagesHtml;
}
function generateAddMessageHtml() {
  return "\n    <form class=\"add__form\" action=\"#/add\">\n      <input class=\"add__message\">\n      <button type=\"submit\" class=\"add__button\"  disabled>Add</button>\n    </form>\n  ";
}
function generateControlsHtml() {
  return "\n    <div class=\"controls\">\n      <button class=\"controls__logout\">Logout</button>\n    </div>\n  ";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAddMessage: () => (/* binding */ fetchAddMessage),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchMessages: () => (/* binding */ fetchMessages),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession)
/* harmony export */ });
function fetchAddMessage(message) {
  return fetch('/api/messages', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      message: message
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchMessages() {
  return fetch('/api/messages')["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchSession() {
  return fetch('/api/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogout() {
  return fetch('/api/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogin(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
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
/* harmony export */   addMessage: () => (/* binding */ addMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setMessages: () => (/* binding */ setMessages),
/* harmony export */   setSessions: () => (/* binding */ setSessions),
/* harmony export */   waitOnLogin: () => (/* binding */ waitOnLogin),
/* harmony export */   waitOnMessages: () => (/* binding */ waitOnMessages)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var state = {
  messages: {},
  sessions: {},
  isLoggedIn: false,
  isLoginPending: false,
  isMessagePending: false,
  error: ''
};
function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.messages = {};
  state.sessions = {};
  state.error = '';
}
function login() {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.error = '';
}
function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.messages = {};
  state.sessions = {};
  state.error = '';
}
function waitOnMessages() {
  state.messages = {};
  state.isMessagePending = true;
  state.error = '';
}
function setMessages(messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.error = '';
}
function setSessions(sessions) {
  state.sessions = sessions;
  state.isMessagePending = false;
  state.error = '';
}
function addMessage(message) {
  var id = message.id;
  state.messages[id] = message;
  state.error = '';
}
function setError(error) {
  if (!error) {
    state.error = '';
    return;
  }
  state.error = _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
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
/*!*********************!*\
  !*** ./src/chat.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");





var appEl = document.querySelector('#app');
(0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToLogin)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToLogout)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToAddMessage)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.enableButton)({
  appEl: appEl
});
checkForSession();
setInterval(function () {
  return (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToRefresh)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
}, 5000);

//////////

function checkForSession() {
  (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function () {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return (0,_services__WEBPACK_IMPORTED_MODULE_2__.fetchMessages)();
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants__WEBPACK_IMPORTED_MODULE_0__.SERVER.AUTH_MISSING) {
      return Promise.reject({
        error: _constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NO_SESSION
      });
    }
    return Promise.reject(err);
  }).then(function (response) {
    var allMessages = response.allMessages,
      allSessions = response.allSessions;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(allMessages);
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setSessions)(allSessions);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) == _constants__WEBPACK_IMPORTED_MODULE_0__.CLIENT.NO_SESSION) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
    (0,_render__WEBPACK_IMPORTED_MODULE_3__["default"])({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map