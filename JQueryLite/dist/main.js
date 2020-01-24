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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor (array) {\n    this.array = array;\n  }\n\n  html (arg) {\n    if (typeof arg === \"string\") {\n      this.array.forEach(element => {\n        element.innerHTML = arg;\n      });\n    } else {\n      return this.array[0].innerHTML;\n    }\n  }\n\n  empty () {\n    this.html(\"\");\n  }\n\n  // append(arg) {\n  //   let outer;\n  //   if (typeof arg === \"function\") {\n  //     outer = arg().outerHTMl;\n  //   } else if (arg instanceof String || arg instanceof HTMLElement){\n  //     outer = arg;\n  //   } else { // instance of JQuery lite wrapped collection\n  //     outer = arg.array;\n  //   }\n\n  //   this.array.forEach(el => {\n  //     debugger\n  //     if (outer instanceof Array) {\n\n  //       for (let i = 0; i < outer.length; i++) {\n  //         const ele = outer[i];\n  //         el.appendChild(ele);\n  //       }\n\n  //     } else {\n  //       el.appendChild(outer);\n  //     }\n  //   });\n  // }\n\n  append(arg) {\n    // three things we're taking in\n    // jQuery lite collection\n    // string\n    //HTMLElement\n    // we want take the outerHTML of each element within the arg\n    // add it to the end of each element of the DOM Node Collection (this).\n\n    // let's start by determining what we are taking in.\n    let outer;\n    if (arg instanceof DOMNodeCollection) {\n      outer = arg.array.slice();\n      arg.array.forEach(element => {\n        // debugger\n        document.body.removeChild(element);\n      });\n      this.array.forEach (el => {\n        \n        outer.forEach(child => {\n          //make clone, place clone, loop\n          debugger\n          let clone = child.cloneNode(true);\n          el.appendChild(clone);\n        });\n      });\n    \n    } else if ( typeof arg ===  \"string\") {\n      outer = arg;\n\n      this.array.forEach(el => {\n        el.innerHTML += outer;\n      });\n    } else {\n      outer = arg;\n\n      this.array.forEach(el => {\n        el.appendChild(outer);\n      });\n    }\n  }\n\n  attr(key, val) {\n    // if no value we want to get & return\n    // if value is present we want to set the key to the val\n      if (val) {\n        el.setAttribute(key, val);\n      } else {\n        return el.getAttribute(key);\n      }\n  }\n\n  addClass(classNames) {\n    let classArr = classNames.split(\" \");\n    this.array.forEach(element => {\n      classArr.forEach( className => {\n        element.classList.add(className);\n      });\n    });\n  }\n\n  removeClass(classNames) {\n    let classArr = classNames.split(\" \");\n    this.array.forEach(element => {\n      classArr.forEach (className => {\n        element.classList.remove(className);\n      });\n    });\n  }\n\n  children () {\n    let childArr = [];\n    debugger\n    this.array.forEach(node => {\n      let child = Array.from(node.children);\n      childArr = childArr.concat(child);\n    });\n\n    return new DOMNodeCollection(childArr);\n  }\n\n  parent () {\n    let parentArr = [];\n    this.array.forEach(node => {\n      let parent = node.parentNode;\n      parentArr.push(parent);\n    });\n\n    return new DOMNodeCollection(parentArr);\n  }\n\n}\n\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$lite = function (arg) {\n  if (arg instanceof HTMLElement){\n    const arr = [];\n    arr.push(`${arg}`);\n    return new DOMNodeCollection(arr);\n  }\n  const selectors = document.querySelectorAll(arg);\n  const array = Array.from(selectors);\n  return new DOMNodeCollection(array);\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });