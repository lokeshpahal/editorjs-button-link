(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AnyButton"] = factory();
	else
		root["AnyButton"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".hide{\\n    display: none !important;\\n}\\n\\n.anyButtonContainer{\\n    position: relative;\\n}\\n\\n.anyButtonContainer__registerButton{\\n    display: block;\\n    margin: auto;\\n}\\n\\n.anyButtonContainer__inputHolder{}\\n\\n.anyButtonContainer__inputHolder > * {\\n    margin-bottom: 10px;\\n}\\n\\n.anyButtonContainer__input {\\n    padding-left: 38px;\\n    background-repeat: no-repeat;\\n    background-position: 10px;\\n    white-space: nowrap;\\n    text-overflow: ellipsis;\\n    overflow: hidden;\\n}\\n\\n.anyButtonContainer__input--link{\\n    background-image: url('data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" version=\\\"1.1\\\" id=\\\"Layer_1\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 277.279 277.279\\\" height=\\\"20\\\" width=\\\"20\\\" style=\\\"enable-background:new 0 0 277.279 277.279;\\\" xml:space=\\\"preserve\\\"> <g id=\\\"XMLID_105_\\\"> <path id=\\\"XMLID_106_\\\" d=\\\"M149.245,191.671l-42.425,42.426c0,0,0,0.001-0.001,0.001c0,0,0,0.001-0.001,0.001   c-17.544,17.545-46.092,17.546-63.638,0c-8.5-8.5-13.18-19.801-13.18-31.82c0-12.018,4.68-23.317,13.177-31.817   c0.001-0.001,0.002-0.002,0.003-0.003l42.425-42.426c5.857-5.858,5.857-15.356-0.001-21.213c-5.857-5.857-15.355-5.857-21.213,0   l-42.425,42.426c-0.003,0.003-0.006,0.007-0.009,0.01C7.798,163.42,0,182.251,0,202.279c0,20.033,7.801,38.867,21.967,53.033   C36.589,269.933,55.794,277.244,75,277.244c19.206,0,38.412-7.311,53.032-21.932c0,0,0-0.001,0-0.001   c0.001,0,0.001-0.001,0.001-0.001l42.425-42.426c5.857-5.857,5.857-15.355-0.001-21.213   C164.601,185.814,155.104,185.814,149.245,191.671z\\\"/> <path id=\\\"XMLID_107_\\\" d=\\\"M277.279,75c0-20.033-7.802-38.867-21.968-53.033c-29.243-29.242-76.824-29.241-106.065,0   c-0.001,0.002-0.003,0.003-0.004,0.005l-42.424,42.423c-5.858,5.857-5.858,15.356,0,21.213c2.93,2.93,6.768,4.394,10.607,4.394   c3.838,0,7.678-1.465,10.606-4.394l42.424-42.423c0.001-0.002,0.003-0.003,0.005-0.005c17.544-17.544,46.092-17.545,63.638,0   c8.499,8.5,13.181,19.801,13.181,31.82c0,12.018-4.68,23.317-13.178,31.817c-0.001,0.001-0.002,0.002-0.003,0.003l-42.425,42.426   c-5.857,5.857-5.857,15.355,0.001,21.213c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l42.425-42.426   c0.003-0.003,0.006-0.007,0.009-0.01C269.48,113.859,277.279,95.028,277.279,75z\\\"/> <path id=\\\"XMLID_108_\\\" d=\\\"M85.607,191.671c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394l84.852-84.852   c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0l-84.852,84.851   C79.749,176.316,79.749,185.814,85.607,191.671z\\\"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>');\\n}\\n.anyButtonContainer__input--text{\\n    background-image: url('data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"Capa_1\\\" enable-background=\\\"new 0 0 512 512\\\" height=\\\"20\\\" viewBox=\\\"0 0 512 512\\\" width=\\\"20\\\"><g><path d=\\\"m15 114.235c8.284 0 15-6.716 15-15v-69.235h69.235c8.284 0 15-6.716 15-15s-6.716-15-15-15h-84.235c-8.284 0-15 6.716-15 15v84.235c0 8.285 6.716 15 15 15z\\\"/><path d=\\\"m497 0h-84.235c-8.284 0-15 6.716-15 15s6.716 15 15 15h69.235v69.235c0 8.284 6.716 15 15 15s15-6.716 15-15v-84.235c0-8.284-6.716-15-15-15z\\\"/><path d=\\\"m497 397.765c-8.284 0-15 6.716-15 15v69.235h-69.235c-8.284 0-15 6.716-15 15s6.716 15 15 15h84.235c8.284 0 15-6.716 15-15v-84.235c0-8.285-6.716-15-15-15z\\\"/><path d=\\\"m99.235 482h-69.235v-69.235c0-8.284-6.716-15-15-15s-15 6.716-15 15v84.235c0 8.284 6.716 15 15 15h84.235c8.284 0 15-6.716 15-15s-6.715-15-15-15z\\\"/><path d=\\\"m419.66 191.38v-94.73c0-4.7-3.81-8.51-8.52-8.51h-155.14-155.14c-4.71 0-8.52 3.81-8.52 8.51v94.73c0 4.71 3.81 8.52 8.52 8.52h45.24c4.7 0 8.51-3.81 8.51-8.52v-32.45c0-4.71 3.82-8.52 8.52-8.52h53.21c4.71 0 8.52 3.81 8.52 8.52v234.14c0 4.71-3.81 8.52-8.52 8.52h-23.27c-4.71 0-8.52 3.81-8.52 8.52v45.24c0 4.7 3.81 8.51 8.52 8.51h62.93 62.93c4.71 0 8.52-3.81 8.52-8.51v-45.24c0-4.71-3.81-8.52-8.52-8.52h-23.27c-4.71 0-8.52-3.81-8.52-8.52v-234.14c0-4.71 3.81-8.52 8.52-8.52h53.21c4.7 0 8.52 3.81 8.52 8.52v32.45c0 4.71 3.81 8.52 8.51 8.52h45.24c4.71 0 8.52-3.81 8.52-8.52z\\\"/></g></svg>');\\n}\\n.anyButtonContainer__input[contentEditable=true][data-placeholder]::before {\\n     position: absolute;\\n     content: attr(data-placeholder);\\n     color: #707684;\\n     font-weight: normal;\\n     opacity: 0;\\n}\\n\\n.anyButtonContainer__input[contentEditable=true][data-placeholder]:empty::before {\\n     opacity: 1;\\n}\\n\\n.anyButtonContainer__input[contentEditable=true][data-placeholder]:empty:focus::before {\\n     opacity: 0;\\n}\\n\\n\\n.cdx-button{\\n    white-space: nowrap;\\n}\\n\\n.anyButtonContainer__anyButtonHolder{\\n    text-align: center;\\n}\\n\\n\\n\\n.btn{\\n    display: inline-block;\\n    font-weight: 400;\\n    line-height: 1.5;\\n    color: #212529;\\n    text-align: center;\\n    text-decoration: none !important;\\n    vertical-align: middle;\\n    cursor: pointer;\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n    background-color: transparent;\\n    border: 1px solid transparent;\\n    padding: .375rem .75rem;\\n    font-size: 1rem;\\n    border-radius: .25rem;\\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\\n}\\n\\n.btn--default{\\n    color: #fff;\\n    background-color: #0d6efd;\\n    border-color: #0d6efd;\\n}\\n\\n.btn--gray{\\n    color: #fff;\\n    background-color: #7c7c7c;\\n    border-color: #7c7c7c;\\n}\\n\\n\\n.toggle-input {\\n    position: absolute;\\n    z-index: 5;\\n    opacity: 0;\\n    cursor: pointer;\\n    width: 40px;\\n    height: 20px;\\n    margin: 0;\\n}\\n\\n.toggle-label {\\n    width: 40px;\\n    height: 20px;\\n    background: #ccc;\\n    position: relative;\\n    display: inline-block;\\n    border-radius: 46px;\\n    transition: 0.4s;\\n    box-sizing: border-box;\\n}\\n.toggle-label:after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    width: 20px;\\n    height: 20px;\\n    border-radius: 100%;\\n    left: 0;\\n    top: 0;\\n    z-index: 2;\\n    background: #fff;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\\n    transition: 0.4s;\\n}\\n\\n.toggle-input:checked + .toggle-label {\\n    background-color: #4BD865;\\n}\\n.toggle-input:checked + .toggle-label:after {\\n    left: 20px;\\n}\\n\\n.toggle-switch {\\n    width: 40px;\\n    margin-left: auto;\\n    padding: 10px 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://AnyButton/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://AnyButton/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://AnyButton/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://AnyButton/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnyButton; });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AnyButton = /*#__PURE__*/function () {\n  _createClass(AnyButton, [{\n    key: \"validate\",\n\n    /**\n     * セーブ時のバリデーション\n     * @param savedData\n     * @returns {boolean}\n     */\n    value: function validate(savedData) {\n      if (this._data.link === \"\" || this._data.text === \"\") {\n        return false;\n      }\n\n      return true;\n    }\n    /**\n     *\n     * @param block\n     * @returns {{caption: string, text: string, alignment: string}}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save(block) {\n      return this._data;\n    }\n    /**\n     * タグを全部削除する\n     * @returns {{link: boolean, text: boolean}}\n     */\n\n  }, {\n    key: \"data\",\n\n    /**\n     *\n     * @param data\n     */\n    set: function set(data) {\n      this._data = Object.assign({}, {\n        link: this.api.sanitizer.clean(data.link || \"\", AnyButton.sanitize),\n        text: this.api.sanitizer.clean(data.text || \"\", AnyButton.sanitize)\n      });\n    }\n    /**\n     *\n     * @returns {{text: string, link: string}}\n     */\n    ,\n    get: function get() {\n      return this._data;\n    }\n  }], [{\n    key: \"toolbox\",\n\n    /**\n     *\n     * @returns {{icon: string, title: string}}\n     */\n    get: function get() {\n      return {\n        title: \"Button\",\n        icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" height=\"20\" viewBox=\"0 0 512 512\" width=\"20\"><path d=\"m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z\"/></svg>'\n      };\n    }\n    /**\n     * Returns true to notify the core that read-only mode is supported\n     *\n     * @return {boolean}\n     */\n\n  }, {\n    key: \"isReadOnlySupported\",\n    get: function get() {\n      return true;\n    }\n    /**\n     *\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"enableLineBreaks\",\n    get: function get() {\n      return false;\n    }\n    /**\n     *\n     * @returns {{EDIT: number, VIEW: number}}\n     * @constructor\n     */\n\n  }, {\n    key: \"STATE\",\n    get: function get() {\n      return {\n        EDIT: 0,\n        VIEW: 1\n      };\n    }\n  }, {\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        text: false,\n        link: false\n      };\n    }\n    /**\n     *\n     * @param data\n     * @param config\n     * @param api\n     * @param readOnly\n     */\n\n  }]);\n\n  function AnyButton(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api,\n        readOnly = _ref.readOnly;\n\n    _classCallCheck(this, AnyButton);\n\n    this.api = api;\n    this.readOnly = readOnly;\n    this.nodes = {\n      wrapper: null,\n      container: null,\n      inputHolder: null,\n      toggleHolder: null,\n      anyButtonHolder: null,\n      textInput: null,\n      linkInput: null,\n      registButton: null,\n      anyButton: null\n    }; //css overwrite\n\n    var _CSS = {\n      baseClass: this.api.styles.block,\n      hide: \"hide\",\n      btn: \"btn\",\n      container: \"anyButtonContainer\",\n      input: \"anyButtonContainer__input\",\n      inputHolder: \"anyButtonContainer__inputHolder\",\n      inputText: \"anyButtonContainer__input--text\",\n      inputLink: \"anyButtonContainer__input--link\",\n      registButton: \"anyButtonContainer__registerButton\",\n      anyButtonHolder: \"anyButtonContainer__anyButtonHolder\",\n      btnColor: \"btn--default\",\n      toggleSwitch: \"toggle-switch\",\n      toggleInput: \"toggle-input\",\n      toggleLabel: \"toggle-label\"\n    };\n    this.CSS = Object.assign(_CSS, config.css);\n    this.data = {\n      link: \"\",\n      text: \"\"\n    };\n    this.data = data;\n  }\n\n  _createClass(AnyButton, [{\n    key: \"render\",\n    value: function render() {\n      this.nodes.wrapper = this.make('div', this.CSS.baseClass);\n      this.nodes.container = this.make('div', this.CSS.container); //twitter-embed-tool\n      //入力用\n\n      this.nodes.inputHolder = this.makeInputHolder(); //toggle\n\n      this.nodes.toggleHolder = this.makeToggle(); //display button\n\n      this.nodes.anyButtonHolder = this.makeAnyButtonHolder();\n      this.nodes.container.appendChild(this.nodes.toggleHolder);\n      this.nodes.container.appendChild(this.nodes.inputHolder);\n      this.nodes.container.appendChild(this.nodes.anyButtonHolder);\n\n      if (this._data.link !== \"\") {\n        this.init();\n        this.show(AnyButton.STATE.VIEW);\n      }\n\n      this.nodes.wrapper.appendChild(this.nodes.container);\n      return this.nodes.wrapper;\n    }\n  }, {\n    key: \"makeInputHolder\",\n    value: function makeInputHolder() {\n      var _this = this;\n\n      var inputHolder = this.make('div', [this.CSS.inputHolder]);\n      this.nodes.textInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputText], {\n        contentEditable: !this.readOnly\n      });\n      this.nodes.textInput.dataset.placeholder = this.api.i18n.t('Button Text');\n      this.nodes.linkInput = this.make('div', [this.api.styles.input, this.CSS.input, this.CSS.inputLink], {\n        contentEditable: !this.readOnly\n      });\n      this.nodes.linkInput.dataset.placeholder = this.api.i18n.t('Link Url');\n      this.nodes.registButton = this.make('button', [this.api.styles.button, this.CSS.registButton]);\n      this.nodes.registButton.type = 'button';\n      this.nodes.registButton.textContent = this.api.i18n.t('Set');\n      this.nodes.registButton.addEventListener('click', function (event) {\n        _this.data = {\n          \"link\": _this.nodes.linkInput.textContent,\n          \"text\": _this.nodes.textInput.textContent\n        };\n\n        _this.show(AnyButton.STATE.VIEW);\n      });\n      inputHolder.appendChild(this.nodes.textInput);\n      inputHolder.appendChild(this.nodes.linkInput);\n      inputHolder.appendChild(this.nodes.registButton);\n      return inputHolder;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.nodes.textInput.textContent = this._data.text;\n      this.nodes.linkInput.textContent = this._data.link;\n    }\n  }, {\n    key: \"show\",\n    value: function show(state) {\n      this.nodes.anyButton.textContent = this._data.text;\n      this.nodes.anyButton.setAttribute(\"href\", this._data.link);\n      this.changeState(state);\n    }\n  }, {\n    key: \"makeAnyButtonHolder\",\n    value: function makeAnyButtonHolder() {\n      var anyButtonHolder = this.make('div', [this.CSS.hide, this.CSS.anyButtonHolder]);\n      this.nodes.anyButton = this.make('a', [this.CSS.btn, this.CSS.btnColor], {\n        target: '_blank',\n        rel: 'nofollow noindex noreferrer'\n      });\n      this.nodes.anyButton.textContent = this.api.i18n.t(\"Default Button\");\n      anyButtonHolder.appendChild(this.nodes.anyButton);\n      return anyButtonHolder;\n    }\n  }, {\n    key: \"changeState\",\n    value: function changeState(state) {\n      switch (state) {\n        case AnyButton.STATE.EDIT:\n          this.nodes.inputHolder.classList.remove(this.CSS.hide);\n          this.nodes.anyButtonHolder.classList.add(this.CSS.hide);\n          this.nodes.toggleInput.checked = 0;\n          break;\n\n        case AnyButton.STATE.VIEW:\n          this.nodes.inputHolder.classList.add(this.CSS.hide);\n          this.nodes.anyButtonHolder.classList.remove(this.CSS.hide);\n          this.nodes.toggleInput.checked = 1;\n          break;\n      }\n    }\n  }, {\n    key: \"makeToggle\",\n    value: function makeToggle() {\n      var _this2 = this;\n\n      /**\n       * <div class=\"toggle-switch\">\n       <input id=\"toggle\" class=\"toggle-input\" type='checkbox' />\n       <label for=\"toggle\" class=\"toggle-label\"/>\n       </div>\n       */\n      var toggleHolder = this.make('div', [this.CSS.toggleSwitch]);\n      this.nodes.toggleInput = this.make('input', [this.CSS.toggleInput], {\n        \"type\": \"checkbox\",\n        \"id\": \"toggle\"\n      });\n      var label = this.make('label', [this.CSS.toggleLabel], {\n        \"for\": \"toggle\"\n      });\n      this.nodes.toggleInput.addEventListener(\"change\", function (event) {\n        _this2.data = {\n          \"link\": _this2.nodes.linkInput.textContent,\n          \"text\": _this2.nodes.textInput.textContent\n        };\n\n        _this2.show(Number(_this2.nodes.toggleInput.checked));\n      });\n      toggleHolder.appendChild(this.nodes.toggleInput);\n      toggleHolder.appendChild(label);\n      return toggleHolder;\n    }\n    /**\n     * node 作成用\n     * @param tagName\n     * @param classNames\n     * @param attributes\n     * @returns {*}\n     */\n\n  }, {\n    key: \"make\",\n    value: function make(tagName) {\n      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var el = document.createElement(tagName);\n\n      if (Array.isArray(classNames)) {\n        var _el$classList;\n\n        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n      } else if (classNames) {\n        el.classList.add(classNames);\n      }\n\n      for (var attrName in attributes) {\n        el[attrName] = attributes[attrName];\n      }\n\n      return el;\n    }\n  }]);\n\n  return AnyButton;\n}();\n\n\n\n//# sourceURL=webpack://AnyButton/./src/index.js?");

/***/ })

/******/ })["default"];
});