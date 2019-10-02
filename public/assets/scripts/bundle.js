/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/TerminalText.js":
/*!*************************************!*\
  !*** ./src/scripts/TerminalText.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n\t***************** TerminalTyping Animation ***************** \n\t* This animation is done by specific css properties!\n\t* The css classes are terminal-text, .terminal-text__typing \n\t*  and .terminal-text__typing > span\n\t* We then set the width as time goes with setInterval,\n\t* which mimics the typing effect.\n\t* The blinking cursor is done via CSS animation.\n\t*/\nvar TerminalText =\n/*#__PURE__*/\nfunction () {\n  function TerminalText(words, textDOM) {\n    var _this = this;\n\n    _classCallCheck(this, TerminalText);\n\n    this.words = words;\n    this.textDOM = textDOM;\n    this.counter = 0;\n    this.indexArray = 0;\n    this.textDOM.innerText = this.words[this.indexArray];\n    this.options = {\n      breakBetween: 1500,\n      deleteSpeed: 1000,\n      initialStart: 1000,\n      typingSpeed: 2000,\n      random: false\n    };\n\n    this.typeAnimation = function () {\n      _this.textDOM.style.width = '0%';\n      var _TerminalTextLength = _this.words[_this.indexArray].length;\n\n      var _typeSpeed = _this.options.typingSpeed / _TerminalTextLength;\n\n      var animation = setInterval(function () {\n        _this.textDOM.style.width = 100 / _TerminalTextLength * _this.counter + '%';\n        var num = 100 / _TerminalTextLength * _this.counter; // this.textDOM.style.width = '100%';\n\n        _this.counter += 1;\n\n        if (_this.counter > _TerminalTextLength) {\n          clearInterval(animation);\n          setTimeout(function () {\n            _this.counter = 0;\n\n            _this.deleteAnimation();\n          }, _this.options.breakBetween);\n        }\n      }, _typeSpeed);\n    };\n  }\n\n  _createClass(TerminalText, [{\n    key: \"deleteAnimation\",\n    value: function deleteAnimation() {\n      var _this2 = this;\n\n      var _TerminalText = this.textDOM.innerText.trim();\n\n      var _TerminalTextLength = _TerminalText.length;\n\n      var _typeSpeed = this.options.typingSpeed / _TerminalTextLength;\n\n      var animation = setInterval(function () {\n        _this2.textDOM.style.width = 100 - 100 / _TerminalTextLength * _this2.counter + '%';\n        _this2.counter++;\n\n        if (_this2.counter > _TerminalTextLength) {\n          clearInterval(animation);\n          setTimeout(function () {\n            _this2.indexArray++;\n            var wordsLength = _this2.words.length;\n            var newIndex = _this2.options.random ? Math.floor(Math.random() * _this2.words.length) % wordsLength : _this2.indexArray % wordsLength;\n            _this2.indexArray = newIndex;\n            _this2.textDOM.innerText = _this2.words[newIndex];\n            _this2.counter = 0;\n\n            _this2.typeAnimation();\n          }, _this2.options.breakBetween);\n        }\n      }, _typeSpeed);\n    }\n  }]);\n\n  return TerminalText;\n}();\n/******* End of TerminalTypingText *******/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TerminalText);\n\n//# sourceURL=webpack:///./src/scripts/TerminalText.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TerminalText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TerminalText */ \"./src/scripts/TerminalText.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/scripts/nav.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\n\n // Run this after DOM content loaded.\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  // constant variables being used.\n  var texts = [\"Web Apps\", \"Game Dev\", \"App Dev\", \"Automation\", \"Servers\", \"ReactJS\", \"NodeJS\", \"AI/ML/DL\", \"Tensor Flow\", \"Javascript\", \"CSS\"]; // html document references.\n\n  var scrollButton = document.getElementById('arrow');\n  var terminalText = document.getElementById(\"terminal-text\").children[0]; // new terminal object.\n\n  var textText1 = new _TerminalText__WEBPACK_IMPORTED_MODULE_0__[\"default\"](texts, terminalText); // Running init.\n\n  Object(_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // variable instance of listener so we can reference to remove later.\n\n  var aboutMeEvent = {\n    sectionId: 'about-me',\n    blocksClass: 'about-me-hidden'\n  };\n  aboutMeEvent.func = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"checkProjectScroll\"])(aboutMeEvent);\n  aboutMeEvent.cb = textText1.typeAnimation;\n  var projectScrollEvent = {\n    sectionId: 'projects',\n    blocksClass: 'projects-hidden'\n  };\n  projectScrollEvent.func = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"checkProjectScroll\"])(projectScrollEvent);\n  var blogsScrollEvent = {\n    sectionId: 'blogs',\n    blocksClass: 'blogs-hidden'\n  };\n  blogsScrollEvent.func = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"checkProjectScroll\"])(blogsScrollEvent); // Initial check.\n\n  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"checkProjectScroll\"])(aboutMeEvent)();\n  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"checkProjectScroll\"])(projectScrollEvent)();\n  Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"checkProjectScroll\"])(blogsScrollEvent)(); // setting our scroll listeners\n\n  window.addEventListener('scroll', projectScrollEvent.func);\n  window.addEventListener('scroll', blogsScrollEvent.func);\n  window.addEventListener('scroll', aboutMeEvent.func); // Setting our click listeners.\n\n  scrollButton.addEventListener('click', Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"smoothScroll\"])(document.getElementById('about-me')));\n});\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/nav.js":
/*!****************************!*\
  !*** ./src/scripts/nav.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\nvar navbar = document.getElementById('nav');\nvar navBarBlock = document.getElementById('mobile-nav-block');\nvar header = document.getElementById('home');\nvar headerHeight = header.clientHeight;\nvar aboutMe = document.getElementById('about-me');\nvar aboutMeLi = document.getElementById('about-me-li');\nvar projects = document.getElementById('projects');\nvar projectsLi = document.getElementById('projects-li');\nvar blogs = document.getElementById('blogs');\nvar blogsLi = document.getElementById('blogs-li');\nvar contact = document.getElementById('contact');\nvar contactLi = document.getElementById('contact-li');\nvar hamburger = document.getElementById('hamburger');\nvar checkPoints = [[header, null], [aboutMe, aboutMeLi], [projects, projectsLi], [blogs, blogsLi], [contact, contactLi]];\nvar currentNav = \"\";\n\nvar deactivateAll = function deactivateAll() {\n  return checkPoints.forEach(function (ele) {\n    return ele[1] ? ele[1].classList.remove('active') : null;\n  });\n};\n\nvar changeNavSection = function changeNavSection(checkPoints) {\n  return function () {\n    checkPoints.forEach(function (ele) {\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"IsInViewport\"])(ele[0]) && currentNav !== ele[0].id) {\n        currentNav = ele[0].id;\n        deactivateAll();\n\n        if (ele[1]) {\n          ele[1].classList.add('active');\n        }\n      }\n    });\n  };\n};\n\nvar AddStickyNav = function AddStickyNav(nav, headerHeight) {\n  return function () {\n    if (window.pageYOffset > headerHeight * 0.8 && window.innerWidth > 1024) {\n      nav.classList.add('sticky');\n    } else {\n      nav.classList.remove('sticky');\n    }\n  };\n};\n\nvar animationEvent = function animationEvent() {\n  navBarBlock.classList.remove('nav-block');\n  navBarBlock.classList.remove('nav-block-remove');\n  navbar.classList.remove('nav-mobile');\n  navbar.classList.remove('nav-mobile-remove');\n  document.body.style.overflow = '';\n  navBarBlock.removeEventListener('animationend', animationEvent);\n};\n\nvar hideMobileNav = function hideMobileNav() {\n  if (window.innerWidth < 1024) {\n    navbar.classList.add('nav-mobile-remove');\n    navBarBlock.classList.add('nav-block-remove');\n    navBarBlock.addEventListener('animationend', animationEvent);\n  }\n};\n\nvar toggleMobileMenu = function toggleMobileMenu() {\n  var isTrueSet = hamburger.getAttribute('data-open') == 'true';\n\n  if (isTrueSet) {} else {\n    document.body.style.overflow = \"hidden\";\n    navbar.classList.add('nav-mobile');\n    navBarBlock.classList.add('nav-block');\n  }\n};\n\nvar init = function init() {\n  window.addEventListener('scroll', changeNavSection(checkPoints));\n  window.addEventListener('scroll', AddStickyNav(navbar, headerHeight));\n  hamburger.addEventListener('click', toggleMobileMenu);\n  navBarBlock.addEventListener('click', hideMobileNav); // looping though our nav items. \n\n  for (var i = 0; i < navbar.children[0].children.length; i++) {\n    var li = navbar.children[0].children[i];\n    var attribute = li.getAttribute('data-ref');\n    li.addEventListener('click', Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"smoothScroll\"])(document.getElementById(attribute)));\n    li.addEventListener('click', hideMobileNav);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/scripts/nav.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! exports provided: IsInViewport, smoothScroll, checkProjectScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IsInViewport\", function() { return IsInViewport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smoothScroll\", function() { return smoothScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkProjectScroll\", function() { return checkProjectScroll; });\nvar IsInViewportBottom = function IsInViewportBottom(domElement) {\n  var bounding = domElement.getBoundingClientRect(); // Only using bottom (my dom elements are too big.)\n  // uncomment to have full viewport.\n\n  return (// bounding.top >= 0 &&\n    // bounding.left >= 0 &&\n    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)\n\n  );\n};\n\nvar IsInViewport = function IsInViewport(domElement) {\n  var bounding = domElement.getBoundingClientRect();\n  return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);\n}; // Uses scrollIntoView to scroll element into view.\n// Takes in the element as a param. \n// Returns a function for closure purposes (to add as event listener).\n\nvar smoothScroll = function smoothScroll(element) {\n  return function () {\n    return element.scrollIntoView({\n      behavior: 'smooth',\n      block: 'center'\n    });\n  };\n};\n/**\n * Checks to see if div is within viewing distance\n * and initials animations.\n * @listens scroll:checkProjectScroll\n * @param {DOM} parentDiv Reference to parent div to check if within viewport.\n * @param {string} elementClassName Class name for element searching / appending.\n * @return {function} Returning a function for closure purposes.\n */\n\n/**\n * Required HTML structure\n * <section id=\"[parentDiv]\">\n * \t<h2 class=\"[elementClassName]\" data-animation={}</h2>\n * \t<div class=\"[elementClassName]\">\n * \t\t<div class=\"[elementClassName]-div\">\n*/\n\nvar checkProjectScroll = function checkProjectScroll(selfObj) {\n  return (// returning function for closure.\n    function () {\n      // get reference to parentDiv\n      var parentDiv = document.getElementById(selfObj.sectionId); // checks if div is within viewport.\n\n      if (IsInViewportBottom(parentDiv)) {\n        // grab all instances of class\n        var elements = document.querySelectorAll('.' + selfObj.blocksClass); // looping through all elements.\n\n        var _loop = function _loop(i) {\n          var element = elements[i];\n          var animation = void 0; // if element has an animation play it, \n          // else probably blocks of projects/blogs\n\n          if (element.getAttribute('data-animation')) {\n            // standard animation bit.\n            animation = JSON.parse(element.getAttribute('data-animation'));\n            console.log(animation);\n\n            if (animation.delayInit === false) {\n              setTimeout(function () {\n                element.classList.remove(selfObj.blocksClass);\n                element.classList.add(animation.animation);\n              }, animation.delayTime);\n            }\n\n            animation.delayInit = true;\n            element.setAttribute('data-animation', JSON.stringify(animation));\n          } else {\n            var _loop2 = function _loop2(j) {\n              // binding j\n              var animation = JSON.parse(element.children[j].getAttribute('data-animation'));\n\n              if (animation.delayInit === false) {\n                setTimeout(function (num, animationVal) {\n                  // removing opacity.\n                  element.children[num].classList.remove(selfObj.blocksClass + '-div');\n\n                  if (animation.terminalTextInit) {\n                    selfObj.cb();\n                  } // adding animation.\n\n\n                  element.children[num].classList.add(animationVal.animation);\n                }, 500 + animation.delayBetween * j, j, animation); // increments time delay by 500ms\n              }\n\n              animation.delayInit = true;\n              element.children[j].setAttribute('data-animation', JSON.stringify(animation));\n            };\n\n            // looping through all project/blog items\n            for (var j = 0; j < element.children.length; j++) {\n              _loop2(j);\n            }\n\n            element.classList.remove(selfObj.blocksClass);\n          } // once loops reaches max, remove listener.\n\n\n          if (i === elements.length - 1) {\n            window.removeEventListener('scroll', selfObj.func);\n          }\n        };\n\n        for (var i = 0; i < elements.length; i++) {\n          _loop(i);\n        }\n      }\n    }\n  );\n};\n\n//# sourceURL=webpack:///./src/scripts/utils.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });