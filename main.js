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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header,\r\n#navbar,\r\n.form{\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav,\r\n#create-project,\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div > div {\r\n    display:flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1,\r\n#todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *,\r\n#todo p,\r\n#todo label {\r\n    font-size: 20px;\r\n}\r\n\r\n.project > p {\r\n    pointer-events: none;\r\n}\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label,\r\n.form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button,\r\n.project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover,\r\n#nav > button:focus,\r\n.add:enabled:hover,\r\n.project.button:hover,\r\n.project > button:hover,\r\n#popup button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within,\r\n.selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n\r\n\r\n/*projects*/\r\n.add,\r\n.nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add:hover,\r\n.nav-project button:hover {\r\n    animation: spin 3s infinite alternate;\r\n    transition: ease;\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n#todo input[type=\"date\"]{\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n#todo input[type=\"checkbox\"] {\r\n    transform: scale(1.5);\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}\r\n\r\n@keyframes spin {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header,\r\n#navbar,\r\n.form{\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav,\r\n#create-project,\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div > div {\r\n    display:flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1,\r\n#todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *,\r\n#todo p,\r\n#todo label {\r\n    font-size: 20px;\r\n}\r\n\r\n.project > p {\r\n    pointer-events: none;\r\n}\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label,\r\n.form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button,\r\n.project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover,\r\n#nav > button:focus,\r\n.add:enabled:hover,\r\n.project.button:hover,\r\n.project > button:hover,\r\n#popup button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within,\r\n.selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n\r\n\r\n/*projects*/\r\n.add,\r\n.nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add:hover,\r\n.nav-project button:hover {\r\n    animation: spin 3s infinite alternate;\r\n    transition: ease;\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n#todo input[type=\"date\"]{\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n}\r\n\r\n#todo input[type=\"checkbox\"] {\r\n    transform: scale(1.5);\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}\r\n\r\n@keyframes spin {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}"],"sourceRoot":""}]);
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

defaultProject();
eventAdder.addEvent();
eventAdder.addE();
_projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"].displayProject(_project__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0]);

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
        const _element = create(_value,'','','');
        _projectDOM__WEBPACK_IMPORTED_MODULE_0__["default"].pushToNav(_element);
        _index__WEBPACK_IMPORTED_MODULE_2__["default"].addE();
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
        if(_tabs__WEBPACK_IMPORTED_MODULE_1__["default"].tab === project.title) return;
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
const changeTab = (() => {
    
    let tab = '';

    return {
        tab,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0RE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9yZW1vdmVGb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXI6ICM0NDQwM2M7XFxyXFxuICAgIC0tbmF2YmFyOiAjZTdlNWU0O1xcclxcbiAgICAtLXBhZ2U6ICNmYWZhZjk7XFxyXFxuICAgIC0tbWFpbi1mb250OiAjMmMyYzJjO1xcclxcbiAgICAtLXNlY29uZGFyeS1mb250OiAjZmFmYWY5O1xcclxcbiAgICAtLWJ1dHRvbi1jOiAjNDQ0MDNjO1xcclxcblxcclxcbiAgICAtLWJvcmRlcjogMnB4IHNvbGlkICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udCk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKmNvbnRhaW5lcnMqL1xcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgJ2hlYWRlciBoZWFkZXInXFxyXFxuICAgICAgICAnbmF2IHBhZ2UnO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKkhlYWRlciovXFxyXFxuI2hlYWRlcixcXHJcXG4jbmF2YmFyLFxcclxcbi5mb3Jte1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciovXFxyXFxuI25hdmJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LFxcclxcbiNjcmVhdGUtcHJvamVjdCxcXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAyLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICBtYXJnaW46IDAgMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiAgbGVmdDtcXHJcXG4gICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qcG9wdXAqL1xcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDM1JTtcXHJcXG4gICAgbGVmdDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMjUwcHggKyAxMHZ3KTtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxyXFxufVxcclxcblxcclxcbi5mYWRlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4vKnRvZG8tcGFnZS1jb250ZW50cyovXFxyXFxuI3RvZG8ge1xcclxcbiAgICBncmlkLWFyZWE6IHBhZ2U7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMTByZW07XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKnRleHQqL1xcclxcbiNoZWFkZXIgPiBoMSxcXHJcXG4jdG9kbyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciA+IGgxIHtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHJ1YmlrIG1hcmtlciBoYXRjaDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMi41cHggdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0ICosXFxyXFxuI3RvZG8gcCxcXHJcXG4jdG9kbyBsYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgPiBwIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgxIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gbGFiZWwsXFxyXFxuLmZvcm0gaW5wdXR7XFxyXFxuICAgIG1hcmdpbjogMCAzLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qY29tcG9uZW50cyovXFxyXFxuLypuYXZiYXIqL1xcclxcbiNuYXYgPiBidXR0b24sXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtIDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246ZW5hYmxlZDpob3ZlcixcXHJcXG4jbmF2ID4gYnV0dG9uOmZvY3VzLFxcclxcbi5hZGQ6ZW5hYmxlZDpob3ZlcixcXHJcXG4ucHJvamVjdC5idXR0b246aG92ZXIsXFxyXFxuLnByb2plY3QgPiBidXR0b246aG92ZXIsXFxyXFxuI3BvcHVwIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246Zm9jdXMtd2l0aGluLFxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCkgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qcHJvamVjdHMqL1xcclxcbi5hZGQsXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZDpob3ZlcixcXHJcXG4ubmF2LXByb2plY3QgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzcGluIDNzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcblxcclxcbi8qVG9EbyBsaXN0IFBhZ2UqL1xcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkID4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKnBvcHVwKi9cXHJcXG4jcG9wdXAgaW5wdXQge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBkaXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwb3B1cCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZyx2YXIoLS1wYWdlKSx2YXIoLS1uYXZiYXIpKTsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0taGVhZGVyKSx2YXIoLS1tYWluLWZvbnQpKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixl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QUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXI6ICM0NDQwM2M7XFxyXFxuICAgIC0tbmF2YmFyOiAjZTdlNWU0O1xcclxcbiAgICAtLXBhZ2U6ICNmYWZhZjk7XFxyXFxuICAgIC0tbWFpbi1mb250OiAjMmMyYzJjO1xcclxcbiAgICAtLXNlY29uZGFyeS1mb250OiAjZmFmYWY5O1xcclxcbiAgICAtLWJ1dHRvbi1jOiAjNDQ0MDNjO1xcclxcblxcclxcbiAgICAtLWJvcmRlcjogMnB4IHNvbGlkICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udCk7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKmNvbnRhaW5lcnMqL1xcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgJ2hlYWRlciBoZWFkZXInXFxyXFxuICAgICAgICAnbmF2IHBhZ2UnO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKkhlYWRlciovXFxyXFxuI2hlYWRlcixcXHJcXG4jbmF2YmFyLFxcclxcbi5mb3Jte1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciovXFxyXFxuI25hdmJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LFxcclxcbiNjcmVhdGUtcHJvamVjdCxcXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAyLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICBtYXJnaW46IDAgMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiAgbGVmdDtcXHJcXG4gICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qcG9wdXAqL1xcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDM1JTtcXHJcXG4gICAgbGVmdDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMjUwcHggKyAxMHZ3KTtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxyXFxufVxcclxcblxcclxcbi5mYWRlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4vKnRvZG8tcGFnZS1jb250ZW50cyovXFxyXFxuI3RvZG8ge1xcclxcbiAgICBncmlkLWFyZWE6IHBhZ2U7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMTByZW07XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKnRleHQqL1xcclxcbiNoZWFkZXIgPiBoMSxcXHJcXG4jdG9kbyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciA+IGgxIHtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHJ1YmlrIG1hcmtlciBoYXRjaDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMi41cHggdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0ICosXFxyXFxuI3RvZG8gcCxcXHJcXG4jdG9kbyBsYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgPiBwIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgxIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gbGFiZWwsXFxyXFxuLmZvcm0gaW5wdXR7XFxyXFxuICAgIG1hcmdpbjogMCAzLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qY29tcG9uZW50cyovXFxyXFxuLypuYXZiYXIqL1xcclxcbiNuYXYgPiBidXR0b24sXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtIDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246ZW5hYmxlZDpob3ZlcixcXHJcXG4jbmF2ID4gYnV0dG9uOmZvY3VzLFxcclxcbi5hZGQ6ZW5hYmxlZDpob3ZlcixcXHJcXG4ucHJvamVjdC5idXR0b246aG92ZXIsXFxyXFxuLnByb2plY3QgPiBidXR0b246aG92ZXIsXFxyXFxuI3BvcHVwIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246Zm9jdXMtd2l0aGluLFxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCkgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qcHJvamVjdHMqL1xcclxcbi5hZGQsXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZDpob3ZlcixcXHJcXG4ubmF2LXByb2plY3QgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzcGluIDNzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcblxcclxcbi8qVG9EbyBsaXN0IFBhZ2UqL1xcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkID4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKnBvcHVwKi9cXHJcXG4jcG9wdXAgaW5wdXQge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBkaXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwb3B1cCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZyx2YXIoLS1wYWdlKSx2YXIoLS1uYXZiYXIpKTsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0taGVhZGVyKSx2YXIoLS1tYWluLWZvbnQpKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJlbW92ZUZvcm0gZnJvbSAnLi9yZW1vdmVGb3JtJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuXHJcbmNvbnN0IGFkZEZvcm0gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gKGVsZW1lbnQsdHlwZSxhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgX2VsZW1lbnQuc2V0QXR0cmlidXRlKHR5cGUsYXR0cmlidXRlKTtcclxuICAgICAgICByZXR1cm4gX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kRGl2ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdkaXYnLCdjbGFzcycsJ2Zvcm0nKTtcclxuICAgICAgICBfZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIF9lbGVtZW50XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBhcHBlbmREaXYoKTtcclxuXHJcbiAgICBjb25zdCBhcHBlbmRIZWFkZXIgPSBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnaDEnLCdjbGFzcycsJ2hlYWRlcicpO1xyXG4gICAgICAgIF9lbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRMYWJlbCA9IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdsYWJlbCcsJ2ZvcicsJ3RpdGxlJyk7XHJcbiAgICAgICAgX2VsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdpbnB1dCcsJ2lkJywndGl0bGUnKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRCdXR0b25Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2RpdicsJ2NsYXNzJywnZm9ybUJ1dHRvbnMnKVxyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBfZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBhcHBlbmRCdXR0b25Db250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCBhcHBlbmRDYW5jZWxCdXR0b24gPSBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnYnV0dG9uJywnaWQnLCdjYW5jZWwnKTtcclxuICAgICAgICBfZWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGb3JtLnJlbW92ZSk7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDYW5jZWxCdXR0b24oJ0NhbmNlbCcpO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZENyZWF0ZUJ1dHRvbiA9IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdidXR0b24nLCdpZCcsJ2NyZWF0ZScpO1xyXG4gICAgICAgIF9lbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBfZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QuZ2V0VGl0bGVJbnB1dCk7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDcmVhdGVCdXR0b24oJ0NyZWF0ZScpO1xyXG5cclxuICAgIGNvbnN0IGZhZGVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywndHJ1ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdCBidXR0b24nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgYXBwZW5kSW5wdXQoKTtcclxuICAgICAgICBhcHBlbmRMYWJlbCgnVGl0bGUnKTtcclxuICAgICAgICBhcHBlbmRIZWFkZXIoJ0FkZCBQcm9qZWN0Jyk7XHJcbiAgICAgICAgYXBwZW5kQnV0dG9uQ29udGFpbmVyKCk7XHJcbiAgICAgICAgZmFkZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0LmhpZGVQcm9qZWN0KCk7XHJcbiAgICAgICAgY2hhbmdlVGFiLnRhYiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0Zvcm0sXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRm9ybSIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IGFkZEZvcm0gZnJvbSAnLi9hZGRGb3JtJztcclxuaW1wb3J0IHJlbW92ZUZvcm0gZnJvbSAnLi9yZW1vdmVGb3JtJztcclxuaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuXHJcbmNvbnN0IGV2ZW50QWRkZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1idXR0b24nKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRm9ybS5zaG93Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkRSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZEV2ZW50LFxyXG4gICAgICAgIGFkZEUsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IF9lbGVtZW50ID0gY3JlYXRlUHJvamVjdC5jcmVhdGUoJ1RvRG8gTGlzdCcsJycsJycsJycpO1xyXG4gICAgc2hvd1Byb2plY3QucHVzaFRvTmF2KF9lbGVtZW50KTtcclxufVxyXG5cclxuZGVmYXVsdFByb2plY3QoKTtcclxuZXZlbnRBZGRlci5hZGRFdmVudCgpO1xyXG5ldmVudEFkZGVyLmFkZEUoKTtcclxuc2hvd1Byb2plY3QuZGlzcGxheVByb2plY3QoY3JlYXRlUHJvamVjdC5wcm9qZWN0c1swXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudEFkZGVyIiwiaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuaW1wb3J0IGV2ZW50QWRkZXIgZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cclxufVxyXG5cclxuY29uc3QgdGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG5cclxuICAgIHJldHVybiB7IHByb2plY3QsIHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5IH07XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGVJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGNyZWF0ZShfdmFsdWUsJycsJycsJycpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0LnB1c2hUb05hdihfZWxlbWVudCk7XHJcbiAgICAgICAgZXZlbnRBZGRlci5hZGRFKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgX3Byb2plY3QgPSBwcm9qZWN0KHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2goX3Byb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgICByZXR1cm4gX3Byb2plY3Q7IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRhc2tJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAvL2NyZWF0ZXMgYSB0YXNrIGFuZFxyXG4gICAgICAgIC8vZ2V0cyB0aXRsZSBmcm9tIGlucHV0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF90YXNrID0gdGFzayhwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgdGFza3MucHVzaChfdGFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiBfdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5JbmRleCA9IHByb2plY3QgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3QgPT09IHByb2plY3RzW2ldLnRpdGxlKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgZ2V0VGl0bGVJbnB1dCxcclxuICAgICAgICByZXR1cm5JbmRleCxcclxuICAgICAgICBwcm9qZWN0cyxcclxuICAgICAgICB0YXNrcyxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBfcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4geyBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0fSxjcmVhdGVQcm9qZWN0LnByb2plY3RzW2ldKTtcclxuICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSkgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX3JlbW92ZVByb2plY3RcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XHJcbmV4cG9ydCB7cmVtb3ZlUHJvamVjdH07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHtyZW1vdmVQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcbmltcG9ydCBldmVudEFkZGVyIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3Qgc2hvd1Byb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vbmF2YmFyIERPTVxyXG4gICAgY29uc3QgcHVzaFRvTmF2ID0gY2hpbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1wcm9qZWN0JylcclxuXHJcbiAgICAgICAgLy9kaXZcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0IGJ1dHRvbicpO1xyXG4gICAgICAgIF9jb250YWluZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcclxuICAgICAgICBfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGNoaWxkLnRpdGxlKTtcclxuICAgICAgICBfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBkaXNwbGF5UHJvamVjdChjaGlsZCkpO1xyXG4gICAgICAgIF9saXN0LmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xyXG5cclxuICAgICAgICAvL3Byb2plY3QgdGl0bGVcclxuICAgICAgICBjb25zdCBfZWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIF9lbGVtZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Vuc2VsZWN0Jyk7XHJcbiAgICAgICAgX2VsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGNoaWxkLnRpdGxlO1xyXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgIC8vYnV0dG9uXHJcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24oY2hpbGQudGl0bGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aXRsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIF9idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsdGl0bGUpO1xyXG4gICAgICAgIF9idXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSA9PT0gX2J1dHRvbi5pZCl7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7X2J1dHRvbi5pZH1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QuX3JlbW92ZVByb2plY3QoX2J1dHRvbi5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9idXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgLy9wYWdlIGRpc3BsYXlcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gcHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbmdlVGFiLnRhYiA9PT0gcHJvamVjdC50aXRsZSkgcmV0dXJuO1xyXG4gICAgICAgIGhpZGVQcm9qZWN0KCk7XHJcbiAgICAgICAgY2hhbmdlVGFiLnRhYiA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlVGFiLnRhYik7XHJcbiAgICAgICAgY29uc3QgX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgICAgIF9wYWdlLmlubmVySFRNTCArPSAgYDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7cHJvamVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFza1wiIGNsYXNzPVwiYWRkXCI+KzwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke3Byb2plY3QuZHVlRGF0ZX1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+SW1wb3J0YW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJpb3JpdHlcIiB0eXBlPVwiY2hlY2tib3hcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gOyBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheVRhc2spO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPWNoZWNrYm94XScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBzZXRJbXBvcnRhbnQocHJvamVjdC50aXRsZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiZGF0ZVwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gc2V0RGF0ZShwcm9qZWN0LnRpdGxlKSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChwcm9qZWN0KTtcclxuICAgIH1cclxuICAgIC8vY2hhbmdlIGRhdGVcclxuICAgIGNvbnN0IHNldERhdGUgPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiZGF0ZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY3JlYXRlUHJvamVjdC5yZXR1cm5JbmRleChpZCk7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpbmRleF0uZHVlRGF0ZSA9IGRhdGUudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2UgcHJpb3JpdHlcclxuICAgIGNvbnN0IHNldEltcG9ydGFudCA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFt0eXBlPSdjaGVja2JveCddYCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVQcm9qZWN0LnJldHVybkluZGV4KGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCxpZCk7XHJcbiAgICAgICAgY2hlY2suY2hlY2tlZCBcclxuICAgICAgICAgICAgPyBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5wcmlvcml0eSA9ICdpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgIDogY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpbmRleF0ucHJpb3JpdHkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDaGVja2VkID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJjaGVja2JveFwiXScpXHJcbiAgICAgICAgaWQucHJpb3JpdHkgPT09ICdpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgID8gY2hlY2suY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgOiBjaGVjay5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy90YXNrc1xyXG4gICAgY29uc3QgZGlzcGxheVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcclxuICAgICAgICBfdGFzay5pbm5lckhUTUwgPSAnPGgxPkhlbGxvIHdvcmxkPC9oMT4nXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZW1vdmUgZnJvbSBtYWluIHBhZ2VcclxuICAgIGNvbnN0IGhpZGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9wYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcclxuICAgICAgICBfcGFnZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHB1c2hUb05hdixcclxuICAgICAgICBkaXNwbGF5UHJvamVjdCxcclxuICAgICAgICBoaWRlUHJvamVjdCxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dQcm9qZWN0OyIsImNvbnN0IHJlbW92ZUZvcm0gPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVuZmFkZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xyXG4gICAgICAgIF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGl2YXRlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbnMpO1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT57XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gNDsgaSA+IDA7IGktLSl7XHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlQ2hpbGQoZm9ybS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bmZhZGVDb250YWluZXIoKTtcclxuICAgICAgICBhY3RpdmF0ZUJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbW92ZVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUZvcm07IiwiY29uc3QgY2hhbmdlVGFiID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IHRhYiA9ICcnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGFiLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlVGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9