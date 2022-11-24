/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --important: linear-gradient(180deg,rgb(231, 231, 97),rgb(255, 255, 165));\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header,\r\n#navbar,\r\n.form,\r\n.card {\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav,\r\n#create-project,\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    width: min(50%,750px);\r\n    height: 175px;\r\n    border: var(--border);\r\n    border-radius: 10px;\r\n    background: linear-gradient(var(--navbar),var(--page));\r\n}\r\n\r\n.card div, .card div div {\r\n    position: relative;\r\n    right: 5rem;\r\n    display: flex;\r\n    align-items: flex-start;\r\n}\r\n\r\n.card div div {\r\n    gap: 50rem;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div > div {\r\n    display:flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1,\r\n#todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *,\r\n#todo p,\r\n#todo label {\r\n    font-size: 20px;\r\n}\r\n\r\n.project > p {\r\n    pointer-events: none;\r\n}\r\n\r\n.card h2 {\r\n    font-size: 40px;\r\n}\r\n\r\n.bold {\r\n    position: absolute;\r\n    bottom: -25px;\r\n    left: 15rem;\r\n    font-weight: bold;\r\n    font-size: 100px;\r\n}\r\n\r\n.important {\r\n    background: var(--important);\r\n}\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label,\r\n.form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button,\r\n.project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover,\r\n#nav > button:focus,\r\n.add:enabled:hover,\r\n.project.button:hover,\r\n.project > button:hover,\r\n#popup button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within,\r\n.selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n\r\n\r\n/*projects*/\r\n.add,\r\n.nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add:hover,\r\n.nav-project button:hover {\r\n    animation: spin 3s infinite alternate;\r\n    transition: ease;\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n#todo input[type=\"date\"]{\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n#todo input[type=\"checkbox\"] {\r\n    transform: scale(1.5);\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}\r\n\r\n@keyframes spin {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --important: linear-gradient(180deg,rgb(231, 231, 97),rgb(255, 255, 165));\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header,\r\n#navbar,\r\n.form,\r\n.card {\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav,\r\n#create-project,\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    width: min(50%,750px);\r\n    height: 175px;\r\n    border: var(--border);\r\n    border-radius: 10px;\r\n    background: linear-gradient(var(--navbar),var(--page));\r\n}\r\n\r\n.card div, .card div div {\r\n    position: relative;\r\n    right: 5rem;\r\n    display: flex;\r\n    align-items: flex-start;\r\n}\r\n\r\n.card div div {\r\n    gap: 50rem;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div > div {\r\n    display:flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1,\r\n#todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *,\r\n#todo p,\r\n#todo label {\r\n    font-size: 20px;\r\n}\r\n\r\n.project > p {\r\n    pointer-events: none;\r\n}\r\n\r\n.card h2 {\r\n    font-size: 40px;\r\n}\r\n\r\n.bold {\r\n    position: absolute;\r\n    bottom: -25px;\r\n    left: 15rem;\r\n    font-weight: bold;\r\n    font-size: 100px;\r\n}\r\n\r\n.important {\r\n    background: var(--important);\r\n}\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label,\r\n.form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button,\r\n.project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover,\r\n#nav > button:focus,\r\n.add:enabled:hover,\r\n.project.button:hover,\r\n.project > button:hover,\r\n#popup button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within,\r\n.selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n\r\n\r\n/*projects*/\r\n.add,\r\n.nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add:hover,\r\n.nav-project button:hover {\r\n    animation: spin 3s infinite alternate;\r\n    transition: ease;\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n#todo input[type=\"date\"]{\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n#todo input[type=\"checkbox\"] {\r\n    transform: scale(1.5);\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}\r\n\r\n@keyframes spin {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addForm.js":
/*!************************!*\
  !*** ./src/addForm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeForm */ "./src/removeForm.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");





const addForm = (() => {
    const createElement = element => {
        const _element = document.createElement(element);
        return _element;
    }

    const setAttribute = (element,type,attribute) => {
        const _element = createElement(element);
        _element.setAttribute(type,attribute);
        return _element;
    }

    const appendDiv = () => {
        const _element = setAttribute('div','class','form');
        _element.classList.add('hide');
        popup.appendChild(_element)
        return _element
    } 

    const formContainer = appendDiv();

    const appendHeader = name => {
        const _element = setAttribute('h1','class','header');
        _element.textContent = name;
        formContainer.appendChild(_element);
    }

    const appendLabel = name => {
        const _element = setAttribute('label','for','title');
        _element.textContent = name;
        formContainer.appendChild(_element);
    }

    const appendInput = () => {
        const _element = setAttribute('input','id','title');
        _element.setAttribute('value','New Project');
        formContainer.appendChild(_element);
    }

    const appendButtonContainer = () => {
        const _element = setAttribute('div','class','formButtons')
        formContainer.appendChild(_element);
        return _element;
    }

    const buttonContainer = appendButtonContainer();

    const appendCancelButton = name => {
        const _element = setAttribute('button','id','cancel');
        _element.textContent = name;
        _element.addEventListener('click', _removeForm__WEBPACK_IMPORTED_MODULE_0__["default"].remove);
        buttonContainer.appendChild(_element);
    }

    appendCancelButton('Cancel');

    const appendCreateButton = name => {
        const _element = setAttribute('button','id','create');
        _element.textContent = name;
        _element.addEventListener('click', _project__WEBPACK_IMPORTED_MODULE_1__["default"].getTitleInput);
        buttonContainer.appendChild(_element);
    }

    appendCreateButton('Create');

    const fadeContainer = () => {
        const _element = document.querySelector('#container');
        _element.classList.add('fade');

        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
            button.setAttribute('disabled','true');
        });

        const projects = document.querySelectorAll('.project')
        projects.forEach(button => {
            button.setAttribute('class','project button');
        });
    }
    
    const showForm = () => {
        appendInput();
        appendLabel('Title');
        appendHeader('Add Project');
        appendButtonContainer();
        fadeContainer();
        formContainer.classList.remove('hide');
        _projectDOM__WEBPACK_IMPORTED_MODULE_2__["default"].hideProject();
        _tabs__WEBPACK_IMPORTED_MODULE_3__["default"].tab = '';
    }

    return {
        showForm,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addForm);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _addForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addForm */ "./src/addForm.js");
/* harmony import */ var _removeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeForm */ "./src/removeForm.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");







const eventAdder = (() => {
    const button = document.querySelector('#add-button');
    
    const addEvent = () => {
        button.addEventListener('click', _addForm__WEBPACK_IMPORTED_MODULE_2__["default"].showForm);
    }

    const addE = () => {
        const buttons = document.querySelectorAll('.button')
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                buttons.forEach(button => {
                    button.classList.remove('selected');
                })
                e.target.classList.add('selected');
            })
        });
    }

    return {
        addEvent,
        addE,
    }
})();

const defaultProject = () => {
    const _element = _project__WEBPACK_IMPORTED_MODULE_1__["default"].create('ToDo List','','','');
    _projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"].pushToNav(_element);
}

const loadUp = () => {
    defaultProject();
    eventAdder.addEvent();
    eventAdder.addE();
    _tabs__WEBPACK_IMPORTED_MODULE_5__["default"].setButtons();
    _projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"].displayProject(_project__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0]);
    console.log(_tabs__WEBPACK_IMPORTED_MODULE_5__["default"].tab);
}

loadUp();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventAdder);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _removeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeForm */ "./src/removeForm.js");





const project = (title,description,dueDate,priority) => {

    return { title, description, dueDate, priority }
}

const task = (project, task, dueDate, priority) => {

    return { project, task, dueDate, priority };
}

const createProject = (() => {

    let projects = [];
    let tasks = [];

    const getTitleInput = () => {
        const _value = document.querySelector('#title').value;
        if (projects.filter(project => project.title === _value) != '') return;
        const _element = create(_value,'','','');
        _projectDOM__WEBPACK_IMPORTED_MODULE_0__["default"].pushToNav(_element);
        _index__WEBPACK_IMPORTED_MODULE_2__["default"].addE();
        _removeForm__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
    }

    const create = (title,description,dueDate,priority) => {

        const _project = project(title,description,dueDate,priority);
        projects.push(_project);
        console.log(projects);
        return _project; 
    }

    const getTaskInput = () => {
        //creates a task and
        //gets title from input
    }

    const createTask = (project, task, dueDate, priority) => {
        const _task = task(project, task, dueDate, priority);
        tasks.push(_task);

        return _task;
    }

    const returnIndex = project => {
        for(let i = 0; i < projects.length; i++){
            if(project === projects[i].title) return i;
        }
    }

    return {
        create,
        getTitleInput,
        returnIndex,
        projects,
        tasks,
    }
})();

const removeProject = (() => {
    
    const _removeProject = project => { 
        for(let i = 0; i < createProject.projects.length; i++){
            console.log({project},createProject.projects[i]);
            if(project === createProject.projects[i].title) createProject.projects.splice(i,1);
        }
    }
    
    return {
        _removeProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");





const showProject = (() => {

    //navbar DOM
    const pushToNav = child => {
        const _list = document.querySelector('.nav-project')

        //div
        const _container = document.createElement('div')
        _container.setAttribute('class','project button');
        _container.setAttribute('tabindex','0');
        _container.setAttribute('id',child.title);
        _container.addEventListener('click', e => displayProject(child));
        _list.appendChild(_container);

        //project title
        const _elementTitle = document.createElement('p');
        _elementTitle.setAttribute('class','unselect');
        _elementTitle.textContent = child.title;
        _container.appendChild(_elementTitle);

        //button
        _container.appendChild(deleteButton(child.title));
    }

    const deleteButton = title => {
        const _button = document.createElement('button');
        _button.setAttribute('id',title);
        _button.textContent = 'X';
        _button.addEventListener('click', e => {
            for(let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__["default"].projects.length; i++){
                if (_project__WEBPACK_IMPORTED_MODULE_0__["default"].projects[i].title === _button.id){ 
                    document.querySelector(`[id="${_button.id}"]`).remove()
                    _project__WEBPACK_IMPORTED_MODULE_0__.removeProject._removeProject(_button.id);
                }
            };
        });
        return _button;
    }

    //page display
    const displayProject = project => {
        hideProject();
        _tabs__WEBPACK_IMPORTED_MODULE_1__["default"].tab = project.title;
        console.log(_tabs__WEBPACK_IMPORTED_MODULE_1__["default"].tab);
        const _page = document.querySelector('#todo');
        _page.innerHTML +=  `<div>
                                <h1>${project.title}</h1>
                                <button id="add-task" class="add">+</button>    
                            </div>
                            <div>
                                <div>
                                    <label for="date">Due Date</label>
                                    <input id="date" type="date" value="${project.dueDate}"/>
                                </div>
                                <div>
                                    <label for="priority">Important</label>
                                    <input id="priority" type="checkbox"/>
                                </div>
                            </div>`; 
        document.querySelector('#add-task').addEventListener('click',displayTask);
        document.querySelector('[type=checkbox]').addEventListener('click', e => setImportant(project.title));
        document.querySelector('[type="date"]').addEventListener('change', e => setDate(project.title));
        setChecked(project);
    }
    //change date
    const setDate = id => {
        const date = document.querySelector('[type="date"]');
        const index = _project__WEBPACK_IMPORTED_MODULE_0__["default"].returnIndex(id);
        _project__WEBPACK_IMPORTED_MODULE_0__["default"].projects[index].dueDate = date.value;
    }

    //change priority
    const setImportant = id => {
        const check = document.querySelector(`[type='checkbox']`);
        const index = _project__WEBPACK_IMPORTED_MODULE_0__["default"].returnIndex(id);
        console.log(index,id);
        check.checked 
            ? _project__WEBPACK_IMPORTED_MODULE_0__["default"].projects[index].priority = 'important'
            : _project__WEBPACK_IMPORTED_MODULE_0__["default"].projects[index].priority = '';
    }

    const setChecked = id => {
        const check = document.querySelector('[type="checkbox"]')
        id.priority === 'important'
            ? check.checked = true
            : check.checked = false;
    }

    //tasks
    const displayTask = () => {
        const _task = document.querySelector('#tasks');
        _task.innerHTML = '<h1>Hello world</h1>'
    }

    //remove from main page
    const hideProject = () => {
        const _page = document.querySelector('#todo');
        _page.innerHTML = '';
    }

    return {
        pushToNav,
        displayProject,
        hideProject,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProject);

/***/ }),

/***/ "./src/removeForm.js":
/*!***************************!*\
  !*** ./src/removeForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeForm = (() => {

    const unfadeContainer = () => {
        const _container = document.querySelector('#container');
        _container.classList.remove('fade');
    }

    const activateButtons = () => {
        const buttons = document.querySelectorAll('.button');
        console.log(buttons);
        buttons.forEach(button => {
            button.disabled = false;
        })

        const projects = document.querySelectorAll('.project')
        projects.forEach(project =>{
            project.classList.add('button');
        })
    }

    const remove = () => {
        const form = document.querySelector('.form');
        form.classList.add('hide');
        for(let i = 4; i > 0; i--){
            form.removeChild(form.lastChild);
        }
        unfadeContainer();
        activateButtons();
    }

    return {
        remove
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeForm);

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const changeTab = (() => {
    
    let tab = '';

    const getButtons = button => {
        return document.querySelector(button)
    }

    const setButtons = () => {
        const _all = getButtons('#all');
        const _today = getButtons('#today');
        const _thisWeek = getButtons('#this-week');
        const _important = getButtons('#important');
        const _history = getButtons('#history');

        

        _all.addEventListener('click', changeAll);
    }

    const mapProject = () => {
        return _project__WEBPACK_IMPORTED_MODULE_0__["default"].projects.map(project => {
            return `<div class="card ${project.priority}">
                        <h2>${project.title}</h2>
                        <div>
                            <p>Due: ${project.dueDate}</p>
                            <p>${project.priority}</p>
                        </div>
                    </div>`;
        });
    }

    const changeAll = (e) => {
        tab = 'all';
        console.log(tab);

        const _page = document.querySelector('#todo');
        _page.innerHTML = 
        `<div>
            <h1>All</h1>
        </div>`;
        _page.innerHTML += mapProject();
    }

    return {
        tab,
        setButtons,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTab);

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
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sVUFBVSxRQUFRLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLFVBQVUsVUFBVSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFX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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0RE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9yZW1vdmVGb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXI6ICM0NDQwM2M7XFxyXFxuICAgIC0tbmF2YmFyOiAjZTdlNWU0O1xcclxcbiAgICAtLXBhZ2U6ICNmYWZhZjk7XFxyXFxuICAgIC0tbWFpbi1mb250OiAjMmMyYzJjO1xcclxcbiAgICAtLXNlY29uZGFyeS1mb250OiAjZmFmYWY5O1xcclxcbiAgICAtLWJ1dHRvbi1jOiAjNDQ0MDNjO1xcclxcblxcclxcbiAgICAtLWltcG9ydGFudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2IoMjMxLCAyMzEsIDk3KSxyZ2IoMjU1LCAyNTUsIDE2NSkpO1xcclxcblxcclxcbiAgICAtLWJvcmRlcjogMnB4IHNvbGlkICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udCk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKmNvbnRhaW5lcnMqL1xcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgJ2hlYWRlciBoZWFkZXInXFxyXFxuICAgICAgICAnbmF2IHBhZ2UnO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKkhlYWRlciovXFxyXFxuI2hlYWRlcixcXHJcXG4jbmF2YmFyLFxcclxcbi5mb3JtLFxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCB2YXIoLS1idXR0b24tYyk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLypuYXZiYXIqL1xcclxcbiNuYXZiYXIge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdixcXHJcXG4jY3JlYXRlLXByb2plY3QsXFxyXFxuLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMi41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgbWFyZ2luOiAwIDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogIGxlZnQ7XFxyXFxuICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmxpbmUtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiBtaW4oNTAlLDc1MHB4KTtcXHJcXG4gICAgaGVpZ2h0OiAxNzVweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbmF2YmFyKSx2YXIoLS1wYWdlKSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGRpdiwgLmNhcmQgZGl2IGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IDVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBkaXYgZGl2IHtcXHJcXG4gICAgZ2FwOiA1MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuLmhpZGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzUlO1xcclxcbiAgICBsZWZ0OiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogY2FsYygyNTBweCArIDEwdncpO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi8qdG9kby1wYWdlLWNvbnRlbnRzKi9cXHJcXG4jdG9kbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcGFnZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXYgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qdGV4dCovXFxyXFxuI2hlYWRlciA+IGgxLFxcclxcbiN0b2RvIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyID4gaDEge1xcclxcbiAgICBwYWRkaW5nOiAwLjFlbSA1cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogcnViaWsgbWFya2VyIGhhdGNoO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAyLjVweCB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QgKixcXHJcXG4jdG9kbyBwLFxcclxcbiN0b2RvIGxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IHAge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC0yNXB4O1xcclxcbiAgICBsZWZ0OiAxNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbXBvcnRhbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbXBvcnRhbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBoMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGxhYmVsLFxcclxcbi5mb3JtIGlucHV0e1xcclxcbiAgICBtYXJnaW46IDAgMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKmNvbXBvbmVudHMqL1xcclxcbi8qbmF2YmFyKi9cXHJcXG4jbmF2ID4gYnV0dG9uLFxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmVuYWJsZWQ6aG92ZXIsXFxyXFxuI25hdiA+IGJ1dHRvbjpmb2N1cyxcXHJcXG4uYWRkOmVuYWJsZWQ6aG92ZXIsXFxyXFxuLnByb2plY3QuYnV0dG9uOmhvdmVyLFxcclxcbi5wcm9qZWN0ID4gYnV0dG9uOmhvdmVyLFxcclxcbiNwb3B1cCBidXR0b246aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmZvY3VzLXdpdGhpbixcXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKnByb2plY3RzKi9cXHJcXG4uYWRkLFxcclxcbi5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQ6aG92ZXIsXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvRG8gbGlzdCBQYWdlKi9cXHJcXG4jdG9kbyA+IGRpdjpmaXJzdC1jaGlsZCA+IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJde1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuI3BvcHVwIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gZGl2IHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsdmFyKC0tcGFnZSksdmFyKC0tbmF2YmFyKSk7IFxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLWhlYWRlciksdmFyKC0tbWFpbi1mb250KSk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsbUJBQW1COztJQUVuQix5RUFBeUU7O0lBRXpFLDJCQUEyQjs7SUFFM0IsZ0RBQWdEO0lBQ2hELHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7SUFDSSxZQUFZO0lBQ1o7O2tCQUVjO0lBQ2QsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQSxTQUFTO0FBQ1Q7Ozs7SUFJSSw0Q0FBNEM7SUFDNUMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7R0FDRyxrQkFBa0I7QUFDckI7O0FBRUE7R0FDRyxnQkFBZ0I7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsUUFBUTtBQUNSO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxPQUFPO0FBQ1A7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHdDQUF3QztBQUM1Qzs7QUFFQTs7O0lBR0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTs7Ozs7O0lBTUksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBOztJQUVJLHVDQUF1QztJQUN2Qyw0Q0FBNEM7QUFDaEQ7Ozs7QUFJQSxXQUFXO0FBQ1g7O0lBRUksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBLFFBQVE7QUFDUjtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXI6ICM0NDQwM2M7XFxyXFxuICAgIC0tbmF2YmFyOiAjZTdlNWU0O1xcclxcbiAgICAtLXBhZ2U6ICNmYWZhZjk7XFxyXFxuICAgIC0tbWFpbi1mb250OiAjMmMyYzJjO1xcclxcbiAgICAtLXNlY29uZGFyeS1mb250OiAjZmFmYWY5O1xcclxcbiAgICAtLWJ1dHRvbi1jOiAjNDQ0MDNjO1xcclxcblxcclxcbiAgICAtLWltcG9ydGFudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2IoMjMxLCAyMzEsIDk3KSxyZ2IoMjU1LCAyNTUsIDE2NSkpO1xcclxcblxcclxcbiAgICAtLWJvcmRlcjogMnB4IHNvbGlkICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udCk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKmNvbnRhaW5lcnMqL1xcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgJ2hlYWRlciBoZWFkZXInXFxyXFxuICAgICAgICAnbmF2IHBhZ2UnO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKkhlYWRlciovXFxyXFxuI2hlYWRlcixcXHJcXG4jbmF2YmFyLFxcclxcbi5mb3JtLFxcclxcbi5jYXJkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCB2YXIoLS1idXR0b24tYyk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLypuYXZiYXIqL1xcclxcbiNuYXZiYXIge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdixcXHJcXG4jY3JlYXRlLXByb2plY3QsXFxyXFxuLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMi41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgbWFyZ2luOiAwIDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogIGxlZnQ7XFxyXFxuICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmxpbmUtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiBtaW4oNTAlLDc1MHB4KTtcXHJcXG4gICAgaGVpZ2h0OiAxNzVweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbmF2YmFyKSx2YXIoLS1wYWdlKSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGRpdiwgLmNhcmQgZGl2IGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IDVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBkaXYgZGl2IHtcXHJcXG4gICAgZ2FwOiA1MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuLmhpZGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzUlO1xcclxcbiAgICBsZWZ0OiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogY2FsYygyNTBweCArIDEwdncpO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi8qdG9kby1wYWdlLWNvbnRlbnRzKi9cXHJcXG4jdG9kbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcGFnZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXYgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qdGV4dCovXFxyXFxuI2hlYWRlciA+IGgxLFxcclxcbiN0b2RvIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyID4gaDEge1xcclxcbiAgICBwYWRkaW5nOiAwLjFlbSA1cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogcnViaWsgbWFya2VyIGhhdGNoO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAyLjVweCB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QgKixcXHJcXG4jdG9kbyBwLFxcclxcbiN0b2RvIGxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IHAge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC0yNXB4O1xcclxcbiAgICBsZWZ0OiAxNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbXBvcnRhbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbXBvcnRhbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBoMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGxhYmVsLFxcclxcbi5mb3JtIGlucHV0e1xcclxcbiAgICBtYXJnaW46IDAgMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKmNvbXBvbmVudHMqL1xcclxcbi8qbmF2YmFyKi9cXHJcXG4jbmF2ID4gYnV0dG9uLFxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmVuYWJsZWQ6aG92ZXIsXFxyXFxuI25hdiA+IGJ1dHRvbjpmb2N1cyxcXHJcXG4uYWRkOmVuYWJsZWQ6aG92ZXIsXFxyXFxuLnByb2plY3QuYnV0dG9uOmhvdmVyLFxcclxcbi5wcm9qZWN0ID4gYnV0dG9uOmhvdmVyLFxcclxcbiNwb3B1cCBidXR0b246aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmZvY3VzLXdpdGhpbixcXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKnByb2plY3RzKi9cXHJcXG4uYWRkLFxcclxcbi5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQ6aG92ZXIsXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogc3BpbiAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvRG8gbGlzdCBQYWdlKi9cXHJcXG4jdG9kbyA+IGRpdjpmaXJzdC1jaGlsZCA+IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJde1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuI3BvcHVwIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gZGl2IHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsdmFyKC0tcGFnZSksdmFyKC0tbmF2YmFyKSk7IFxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLWhlYWRlciksdmFyKC0tbWFpbi1mb250KSk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZW1vdmVGb3JtIGZyb20gJy4vcmVtb3ZlRm9ybSc7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCBzaG93UHJvamVjdCBmcm9tICcuL3Byb2plY3RET00nO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcblxyXG5jb25zdCBhZGRGb3JtID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIF9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZSA9IChlbGVtZW50LHR5cGUsYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIF9lbGVtZW50LnNldEF0dHJpYnV0ZSh0eXBlLGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgcmV0dXJuIF9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZERpdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnZGl2JywnY2xhc3MnLCdmb3JtJyk7XHJcbiAgICAgICAgX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKF9lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBfZWxlbWVudFxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gYXBwZW5kRGl2KCk7XHJcblxyXG4gICAgY29uc3QgYXBwZW5kSGVhZGVyID0gbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2gxJywnY2xhc3MnLCdoZWFkZXInKTtcclxuICAgICAgICBfZWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kTGFiZWwgPSBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnbGFiZWwnLCdmb3InLCd0aXRsZScpO1xyXG4gICAgICAgIF9lbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnaW5wdXQnLCdpZCcsJ3RpdGxlJyk7XHJcbiAgICAgICAgX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05ldyBQcm9qZWN0Jyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kQnV0dG9uQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdkaXYnLCdjbGFzcycsJ2Zvcm1CdXR0b25zJylcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gYXBwZW5kQnV0dG9uQ29udGFpbmVyKCk7XHJcblxyXG4gICAgY29uc3QgYXBwZW5kQ2FuY2VsQnV0dG9uID0gbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2J1dHRvbicsJ2lkJywnY2FuY2VsJyk7XHJcbiAgICAgICAgX2VsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIF9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRm9ybS5yZW1vdmUpO1xyXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2FuY2VsQnV0dG9uKCdDYW5jZWwnKTtcclxuXHJcbiAgICBjb25zdCBhcHBlbmRDcmVhdGVCdXR0b24gPSBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnYnV0dG9uJywnaWQnLCdjcmVhdGUnKTtcclxuICAgICAgICBfZWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0LmdldFRpdGxlSW5wdXQpO1xyXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ3JlYXRlQnV0dG9uKCdDcmVhdGUnKTtcclxuXHJcbiAgICBjb25zdCBmYWRlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xyXG4gICAgICAgIF9lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJ3RydWUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Byb2plY3QgYnV0dG9uJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGFwcGVuZElucHV0KCk7XHJcbiAgICAgICAgYXBwZW5kTGFiZWwoJ1RpdGxlJyk7XHJcbiAgICAgICAgYXBwZW5kSGVhZGVyKCdBZGQgUHJvamVjdCcpO1xyXG4gICAgICAgIGFwcGVuZEJ1dHRvbkNvbnRhaW5lcigpO1xyXG4gICAgICAgIGZhZGVDb250YWluZXIoKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBzaG93UHJvamVjdC5oaWRlUHJvamVjdCgpO1xyXG4gICAgICAgIGNoYW5nZVRhYi50YWIgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dGb3JtLFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEZvcm0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCBhZGRGb3JtIGZyb20gJy4vYWRkRm9ybSc7XHJcbmltcG9ydCByZW1vdmVGb3JtIGZyb20gJy4vcmVtb3ZlRm9ybSc7XHJcbmltcG9ydCBzaG93UHJvamVjdCBmcm9tICcuL3Byb2plY3RET00nO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcblxyXG5jb25zdCBldmVudEFkZGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtYnV0dG9uJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEZvcm0uc2hvd0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRFdmVudCxcclxuICAgICAgICBhZGRFLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBfZWxlbWVudCA9IGNyZWF0ZVByb2plY3QuY3JlYXRlKCdUb0RvIExpc3QnLCcnLCcnLCcnKTtcclxuICAgIHNob3dQcm9qZWN0LnB1c2hUb05hdihfZWxlbWVudCk7XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRVcCA9ICgpID0+IHtcclxuICAgIGRlZmF1bHRQcm9qZWN0KCk7XHJcbiAgICBldmVudEFkZGVyLmFkZEV2ZW50KCk7XHJcbiAgICBldmVudEFkZGVyLmFkZEUoKTtcclxuICAgIGNoYW5nZVRhYi5zZXRCdXR0b25zKCk7XHJcbiAgICBzaG93UHJvamVjdC5kaXNwbGF5UHJvamVjdChjcmVhdGVQcm9qZWN0LnByb2plY3RzWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKGNoYW5nZVRhYi50YWIpO1xyXG59XHJcblxyXG5sb2FkVXAoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50QWRkZXIiLCJpbXBvcnQgc2hvd1Byb2plY3QgZnJvbSAnLi9wcm9qZWN0RE9NJztcclxuaW1wb3J0IGNoYW5nZVRhYiBmcm9tICcuL3RhYnMnO1xyXG5pbXBvcnQgZXZlbnRBZGRlciBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHJlbW92ZUZvcm0gZnJvbSAnLi9yZW1vdmVGb3JtJztcclxuXHJcbmNvbnN0IHByb2plY3QgPSAodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSkgPT4ge1xyXG5cclxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxyXG59XHJcblxyXG5jb25zdCB0YXNrID0gKHByb2plY3QsIHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvamVjdCwgdGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XHJcblxyXG4gICAgbGV0IHByb2plY3RzID0gW107XHJcbiAgICBsZXQgdGFza3MgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZUlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF92YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xyXG4gICAgICAgIGlmIChwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSBfdmFsdWUpICE9ICcnKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBjcmVhdGUoX3ZhbHVlLCcnLCcnLCcnKTtcclxuICAgICAgICBzaG93UHJvamVjdC5wdXNoVG9OYXYoX2VsZW1lbnQpO1xyXG4gICAgICAgIGV2ZW50QWRkZXIuYWRkRSgpO1xyXG4gICAgICAgIHJlbW92ZUZvcm0ucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgX3Byb2plY3QgPSBwcm9qZWN0KHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2goX3Byb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgICByZXR1cm4gX3Byb2plY3Q7IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRhc2tJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAvL2NyZWF0ZXMgYSB0YXNrIGFuZFxyXG4gICAgICAgIC8vZ2V0cyB0aXRsZSBmcm9tIGlucHV0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF90YXNrID0gdGFzayhwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgdGFza3MucHVzaChfdGFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiBfdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5JbmRleCA9IHByb2plY3QgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3QgPT09IHByb2plY3RzW2ldLnRpdGxlKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgZ2V0VGl0bGVJbnB1dCxcclxuICAgICAgICByZXR1cm5JbmRleCxcclxuICAgICAgICBwcm9qZWN0cyxcclxuICAgICAgICB0YXNrcyxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBfcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4geyBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0fSxjcmVhdGVQcm9qZWN0LnByb2plY3RzW2ldKTtcclxuICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSkgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX3JlbW92ZVByb2plY3RcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XHJcbmV4cG9ydCB7cmVtb3ZlUHJvamVjdH07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHtyZW1vdmVQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcbmltcG9ydCBldmVudEFkZGVyIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3Qgc2hvd1Byb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vbmF2YmFyIERPTVxyXG4gICAgY29uc3QgcHVzaFRvTmF2ID0gY2hpbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1wcm9qZWN0JylcclxuXHJcbiAgICAgICAgLy9kaXZcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0IGJ1dHRvbicpO1xyXG4gICAgICAgIF9jb250YWluZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcclxuICAgICAgICBfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGNoaWxkLnRpdGxlKTtcclxuICAgICAgICBfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBkaXNwbGF5UHJvamVjdChjaGlsZCkpO1xyXG4gICAgICAgIF9saXN0LmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xyXG5cclxuICAgICAgICAvL3Byb2plY3QgdGl0bGVcclxuICAgICAgICBjb25zdCBfZWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIF9lbGVtZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Vuc2VsZWN0Jyk7XHJcbiAgICAgICAgX2VsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGNoaWxkLnRpdGxlO1xyXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgIC8vYnV0dG9uXHJcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24oY2hpbGQudGl0bGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aXRsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIF9idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsdGl0bGUpO1xyXG4gICAgICAgIF9idXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSA9PT0gX2J1dHRvbi5pZCl7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7X2J1dHRvbi5pZH1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QuX3JlbW92ZVByb2plY3QoX2J1dHRvbi5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9idXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgLy9wYWdlIGRpc3BsYXlcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gcHJvamVjdCA9PiB7XHJcbiAgICAgICAgaGlkZVByb2plY3QoKTtcclxuICAgICAgICBjaGFuZ2VUYWIudGFiID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VUYWIudGFiKTtcclxuICAgICAgICBjb25zdCBfcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XHJcbiAgICAgICAgX3BhZ2UuaW5uZXJIVE1MICs9ICBgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHtwcm9qZWN0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC10YXNrXCIgY2xhc3M9XCJhZGRcIj4rPC9idXR0b24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7cHJvamVjdC5kdWVEYXRlfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5JbXBvcnRhbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcmlvcml0eVwiIHR5cGU9XCJjaGVja2JveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7IFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5VGFzayk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9Y2hlY2tib3hdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHNldEltcG9ydGFudChwcm9qZWN0LnRpdGxlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJkYXRlXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBzZXREYXRlKHByb2plY3QudGl0bGUpKTtcclxuICAgICAgICBzZXRDaGVja2VkKHByb2plY3QpO1xyXG4gICAgfVxyXG4gICAgLy9jaGFuZ2UgZGF0ZVxyXG4gICAgY29uc3Qgc2V0RGF0ZSA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJkYXRlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVQcm9qZWN0LnJldHVybkluZGV4KGlkKTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5kdWVEYXRlID0gZGF0ZS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoYW5nZSBwcmlvcml0eVxyXG4gICAgY29uc3Qgc2V0SW1wb3J0YW50ID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3R5cGU9J2NoZWNrYm94J11gKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGNyZWF0ZVByb2plY3QucmV0dXJuSW5kZXgoaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4LGlkKTtcclxuICAgICAgICBjaGVjay5jaGVja2VkIFxyXG4gICAgICAgICAgICA/IGNyZWF0ZVByb2plY3QucHJvamVjdHNbaW5kZXhdLnByaW9yaXR5ID0gJ2ltcG9ydGFudCdcclxuICAgICAgICAgICAgOiBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5wcmlvcml0eSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrZWQgPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgICAgICBpZC5wcmlvcml0eSA9PT0gJ2ltcG9ydGFudCdcclxuICAgICAgICAgICAgPyBjaGVjay5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICA6IGNoZWNrLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rhc2tzXHJcbiAgICBjb25zdCBkaXNwbGF5VGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICAgIF90YXNrLmlubmVySFRNTCA9ICc8aDE+SGVsbG8gd29ybGQ8L2gxPidcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbW92ZSBmcm9tIG1haW4gcGFnZVxyXG4gICAgY29uc3QgaGlkZVByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgICAgIF9wYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHVzaFRvTmF2LFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0LFxyXG4gICAgICAgIGhpZGVQcm9qZWN0LFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2plY3Q7IiwiY29uc3QgcmVtb3ZlRm9ybSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdW5mYWRlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhdGVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9ucyk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PntcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSA0OyBpID4gMDsgaS0tKXtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuZmFkZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIGFjdGl2YXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRm9ybTsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG5jb25zdCBjaGFuZ2VUYWIgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgdGFiID0gJyc7XHJcblxyXG4gICAgY29uc3QgZ2V0QnV0dG9ucyA9IGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2FsbCA9IGdldEJ1dHRvbnMoJyNhbGwnKTtcclxuICAgICAgICBjb25zdCBfdG9kYXkgPSBnZXRCdXR0b25zKCcjdG9kYXknKTtcclxuICAgICAgICBjb25zdCBfdGhpc1dlZWsgPSBnZXRCdXR0b25zKCcjdGhpcy13ZWVrJyk7XHJcbiAgICAgICAgY29uc3QgX2ltcG9ydGFudCA9IGdldEJ1dHRvbnMoJyNpbXBvcnRhbnQnKTtcclxuICAgICAgICBjb25zdCBfaGlzdG9yeSA9IGdldEJ1dHRvbnMoJyNoaXN0b3J5Jyk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBfYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXBQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQcm9qZWN0LnByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY2FyZCAke3Byb2plY3QucHJpb3JpdHl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4ke3Byb2plY3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1ZTogJHtwcm9qZWN0LmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0LnByaW9yaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VBbGwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRhYiA9ICdhbGwnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhYik7XHJcblxyXG4gICAgICAgIGNvbnN0IF9wYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICAgICAgICBfcGFnZS5pbm5lckhUTUwgPSBcclxuICAgICAgICBgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkFsbDwvaDE+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICBfcGFnZS5pbm5lckhUTUwgKz0gbWFwUHJvamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGFiLFxyXG4gICAgICAgIHNldEJ1dHRvbnMsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VUYWI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=