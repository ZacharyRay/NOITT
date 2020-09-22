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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\njQuery(document).ready(function ($) {\n  // so me footer-standard\n  $(document).ready(function () {\n    $('#some-footer-standard').hide();\n  });\n  $(window).scroll(function () {\n    if ($(this).scrollTop() > 100) {\n      $('#some-footer-standard').fadeIn();\n    } else {\n      $('#some-footer-standard').fadeOut();\n    }\n  }); // about arrow fade in and out on scroll\n\n  $(window).scroll(function () {\n    if ($(this).scrollTop() > 100) {\n      $('#arrow-wrapper, #arrow').fadeOut();\n    } else {\n      $('#arrow-wrapper, #arrow').fadeIn();\n    }\n  }); // about hover events\n\n  $(document).ready(function () {\n    // people selector\n    // person one\n    document.getElementById(\"hover-overlay-one\").onmouseover = function () {\n      mouseOverOne();\n    };\n\n    document.getElementById(\"hover-overlay-one\").onmouseout = function () {\n      mouseOutOne();\n    }; //person two\n\n\n    document.getElementById(\"hover-overlay-two\").onmouseover = function () {\n      mouseOverTwo();\n    };\n\n    document.getElementById(\"hover-overlay-two\").onmouseout = function () {\n      mouseOutTwo();\n    }; //person three\n\n\n    document.getElementById(\"hover-overlay-three\").onmouseover = function () {\n      mouseOverThree();\n    };\n\n    document.getElementById(\"hover-overlay-three\").onmouseout = function () {\n      mouseOutThree();\n    }; // people actions\n    // person one\n\n\n    function mouseOverOne() {\n      document.getElementById(\"person-two\").style.opacity = \"0\"; //document.getElementById(\"person-two\").style.transition = \"all 1.5s\";\n\n      document.getElementById(\"person-three\").style.opacity = \"0\"; //document.getElementById(\"person-three\").style.transition = \"all 1.5s\";\n    }\n\n    function mouseOutOne() {\n      document.getElementById(\"person-two\").style.opacity = \"1\"; //document.getElementById(\"person-two\").style.transition = \"all 1.5s\";\n\n      document.getElementById(\"person-three\").style.opacity = \"1\"; //document.getElementById(\"person-three\").style.transition = \"all 1.5s\";\n    } // person two\n\n\n    function mouseOverTwo() {\n      document.getElementById(\"person-one\").style.opacity = \"0\"; //document.getElementById(\"person-one\").style.transition = \"all 1.5s\";\n\n      document.getElementById(\"person-three\").style.opacity = \"0\"; //document.getElementById(\"person-three\").style.transition = \"all 1.5s\";\n    }\n\n    function mouseOutTwo() {\n      document.getElementById(\"person-one\").style.opacity = \"1\"; //document.getElementById(\"person-one\").style.transition = \"all 1.5s\";\n\n      document.getElementById(\"person-three\").style.opacity = \"1\"; ////document.getElementById(\"person-three\").style.transition = \"all 1.5s\";\n    } // person three\n\n\n    function mouseOverThree() {\n      document.getElementById(\"person-one\").style.opacity = \"0\"; //document.getElementById(\"person-one\").style.transition = \"all 1.5s\";\n\n      document.getElementById(\"person-two\").style.opacity = \"0\"; //document.getElementById(\"person-two\").style.transition = \"all 1.5s\";\n    }\n\n    function mouseOutThree() {\n      document.getElementById(\"person-one\").style.opacity = \"1\"; //document.getElementById(\"person-one\").style.transition = \"all 1.5s\";\n\n      document.getElementById(\"person-two\").style.opacity = \"1\"; //document.getElementById(\"person-two\").style.transition = \"all 1.5s\";\n    }\n  }); // modal frontpage\n\n  $(document).ready(function () {\n    // desktop\n    document.getElementById(\"hover-overlay-one\").onclick = function () {\n      showModal();\n      showPersonOne();\n    };\n\n    document.getElementById(\"hover-overlay-two\").onclick = function () {\n      showModal();\n      showPersonTwo();\n    };\n\n    document.getElementById(\"hover-overlay-three\").onclick = function () {\n      showModal();\n      showPersonThree();\n    };\n\n    document.getElementById(\"modal-bg\").onclick = function () {\n      removeModal();\n    };\n\n    document.getElementById(\"exit-icon\").onclick = function () {\n      removeModal();\n    };\n\n    var modal = document.getElementById('modal-wrap'); // mobile\n\n    document.getElementById(\"hover-overlay-one-m\").onclick = function () {\n      showModal();\n      showPersonOne();\n    };\n\n    document.getElementById(\"hover-overlay-two-m\").onclick = function () {\n      showModal();\n      showPersonTwo();\n    };\n\n    document.getElementById(\"hover-overlay-three-m\").onclick = function () {\n      showModal();\n      showPersonThree();\n    }; // menu mobile fix for when menu is clicked while modal is active\n\n\n    document.getElementById(\"burger\").onclick = function () {\n      removeModal();\n    }; // show modal function\n\n\n    function showModal() {\n      modal.style.display = \"block\";\n      document.getElementById('body').style.overflow = \"hidden\";\n    }\n\n    ; // remove modal function\n\n    function removeModal() {\n      modal.style.display = \"none\";\n      document.getElementById('body').style.overflow = \"visible\";\n    }\n\n    function showPersonOne() {\n      $('#modal-text-one').css(\"display\", \"block\");\n      $('#modal-text-two').css(\"display\", \"none\");\n      $('#modal-text-three').css(\"display\", \"none\");\n    }\n\n    ;\n\n    function showPersonTwo() {\n      $('#modal-text-one').css(\"display\", \"none\");\n      $('#modal-text-two').css(\"display\", \"block\");\n      $('#modal-text-three').css(\"display\", \"none\");\n    }\n\n    ;\n\n    function showPersonThree() {\n      $('#modal-text-one').css(\"display\", \"none\");\n      $('#modal-text-two').css(\"display\", \"none\");\n      $('#modal-text-three').css(\"display\", \"block\");\n    }\n  }); // curser\n\n  $(document).ready(function () {\n    (function () {\n      var follower, init, mouseX, mouseY, positionElement, printout, timer;\n      follower = document.getElementById('follower');\n      printout = document.getElementById('printout');\n\n      mouseX = function mouseX(event) {\n        return event.clientX;\n      };\n\n      mouseY = function mouseY(event) {\n        return event.clientY;\n      };\n\n      positionElement = function positionElement(event) {\n        var mouse;\n        mouse = {\n          x: mouseX(event),\n          y: mouseY(event)\n        };\n        follower.style.top = mouse.y + 'px';\n        return follower.style.left = mouse.x + 'px';\n      };\n\n      timer = false;\n\n      window.onmousemove = init = function init(event) {\n        var _event;\n\n        _event = event;\n        return timer = setTimeout(function () {\n          return positionElement(_event);\n        }, 1);\n      };\n    }).call(this); // cursor on scroll\n\n    $(window).scroll(function () {\n      if ($(this).scrollTop() > 400) {\n        $('#hover-overlay-wrapper').css(\"cursor\", \"default\");\n        $('#follower').css(\"display\", \"none\");\n      } else {\n        $('#hover-overlay-wrapper').css(\"cursor\", \"none\");\n        $('#follower').css(\"display\", \"block\");\n      }\n    });\n  }); // cursor on mouseover menu\n\n  $(\"#menu-d\").mouseover(function () {\n    $('#follower').css(\"display\", \"none\");\n  });\n  $(\"#menu-d\").mouseout(function () {\n    $('#follower').css(\"display\", \"block\");\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/scss/main.scss?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/main.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/app.js */\"./assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! ./assets/scss/main.scss */\"./assets/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/app.js_./assets/scss/main.scss?");

/***/ })

/******/ });