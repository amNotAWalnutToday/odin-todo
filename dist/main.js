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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header, #navbar, .form{\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav, #create-project, .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1, #todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *, #todo p {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label, .form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button, .project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover, #nav > button:focus, .add:enabled:hover, .project.button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within, .project:focus-within, button.selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n/*projects*/\r\n.add, .nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,yBAAyB;IACzB,mBAAmB;;IAEnB,2BAA2B;;IAE3B,gDAAgD;IAChD,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA,aAAa;AACb;IACI,YAAY;IACZ;;kBAEc;IACd,gCAAgC;IAChC,4BAA4B;IAC5B,aAAa;IACb,YAAY;AAChB;;AAEA,SAAS;AACT;IACI,4CAA4C;IAC5C,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA,SAAS;AACT;IACI,cAAc;IACd,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;GACG,kBAAkB;AACrB;;AAEA;GACG,gBAAgB;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,8BAA8B;AAClC;;AAEA,QAAQ;AACR;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;IACb,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,OAAO;AACP;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,+BAA+B;IAC/B,4BAA4B;IAC5B,wCAAwC;AAC5C;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;AACpB;;AAEA,aAAa;AACb,SAAS;AACT;IACI,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uCAAuC;IACvC,4CAA4C;AAChD;;AAEA,WAAW;AACX;IACI,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;IACI,YAAY;AAChB;;AAEA,QAAQ;AACR;IACI,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,4BAA4B;IAC5B,iEAAiE;AACrE","sourcesContent":[":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header, #navbar, .form{\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav, #create-project, .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1, #todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *, #todo p {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label, .form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button, .project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover, #nav > button:focus, .add:enabled:hover, .project.button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within, .project:focus-within, button.selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n/*projects*/\r\n.add, .nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}"],"sourceRoot":""}]);
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
            button.setAttribute('class','project');
        });
    }
    
    const showForm = () => {
        appendInput();
        appendLabel('Title');
        appendHeader('Add Project');
        appendButtonContainer();
        fadeContainer();
        formContainer.classList.remove('hide')
    }

    return {
        showForm,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addForm);

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
                                    <label>Due Date</label>
                                    <input type="date" value="${project.dueDate}"/>
                                </div>
                                <div>
                                    <label>Important</label>
                                    <input type="checkbox"/>
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
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

    return {
        addEvent,
    }
})();

const defaultProject = () => {
    const _element = _project__WEBPACK_IMPORTED_MODULE_1__["default"].create('ToDo List','','','');
    _projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"].pushToNav(_element);
}

defaultProject();
eventAdder.addEvent();
_projectDOM__WEBPACK_IMPORTED_MODULE_4__["default"].displayProject(_project__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2dCO0FBQ047QUFDTTtBQUNDO0FBQ1I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLHVEQUFvQjtBQUN6QyxJQUFJLDZEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUEwQixDQUFDLDREQUF5QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2FkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbW92ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlcjogIzQ0NDAzYztcXHJcXG4gICAgLS1uYXZiYXI6ICNlN2U1ZTQ7XFxyXFxuICAgIC0tcGFnZTogI2ZhZmFmOTtcXHJcXG4gICAgLS1tYWluLWZvbnQ6ICMyYzJjMmM7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWZvbnQ6ICNmYWZhZjk7XFxyXFxuICAgIC0tYnV0dG9uLWM6ICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIC0tYm9yZGVyOiAycHggc29saWQgIzQ0NDAzYztcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLypjb250YWluZXJzKi9cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgICdoZWFkZXIgaGVhZGVyJ1xcclxcbiAgICAgICAgJ25hdiBwYWdlJztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLypIZWFkZXIqL1xcclxcbiNoZWFkZXIsICNuYXZiYXIsIC5mb3Jte1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciovXFxyXFxuI25hdmJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LCAjY3JlYXRlLXByb2plY3QsIC5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDIuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICBhbGlnbi1pdGVtczpjZW50ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3Qge1xcclxcbiAgIG1hcmdpbjogMCAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246ICBsZWZ0O1xcclxcbiAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuLmhpZGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzUlO1xcclxcbiAgICBsZWZ0OiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogY2FsYygyNTBweCArIDEwdncpO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi8qdG9kby1wYWdlLWNvbnRlbnRzKi9cXHJcXG4jdG9kbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcGFnZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qdGV4dCovXFxyXFxuI2hlYWRlciA+IGgxLCAjdG9kbyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciA+IGgxIHtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHJ1YmlrIG1hcmtlciBoYXRjaDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMi41cHggdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0ICosICN0b2RvIHAge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb3JtIGgxIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gbGFiZWwsIC5mb3JtIGlucHV0e1xcclxcbiAgICBtYXJnaW46IDAgMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKmNvbXBvbmVudHMqL1xcclxcbi8qbmF2YmFyKi9cXHJcXG4jbmF2ID4gYnV0dG9uLCAucHJvamVjdCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgcGFkZGluZzogMC41ZW0gMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjplbmFibGVkOmhvdmVyLCAjbmF2ID4gYnV0dG9uOmZvY3VzLCAuYWRkOmVuYWJsZWQ6aG92ZXIsIC5wcm9qZWN0LmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246Zm9jdXMtd2l0aGluLCAucHJvamVjdDpmb2N1cy13aXRoaW4sIGJ1dHRvbi5zZWxlY3RlZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCkgIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qcHJvamVjdHMqL1xcclxcbi5hZGQsIC5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvRG8gbGlzdCBQYWdlKi9cXHJcXG4jdG9kbyA+IGRpdjpmaXJzdC1jaGlsZCA+IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuI3BvcHVwIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gZGl2IHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsdmFyKC0tcGFnZSksdmFyKC0tbmF2YmFyKSk7IFxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLWhlYWRlciksdmFyKC0tbWFpbi1mb250KSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixtQkFBbUI7O0lBRW5CLDJCQUEyQjs7SUFFM0IsZ0RBQWdEO0lBQ2hELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksWUFBWTtJQUNaOztrQkFFYztJQUNkLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksNENBQTRDO0lBQzVDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7O0FBRUEsU0FBUztBQUNUO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtHQUNHLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLGdCQUFnQjtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQSxRQUFRO0FBQ1I7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxPQUFPO0FBQ1A7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsYUFBYTtBQUNiLFNBQVM7QUFDVDtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2Qyw0Q0FBNEM7QUFDaEQ7O0FBRUEsV0FBVztBQUNYO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxRQUFRO0FBQ1I7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULFlBQVk7SUFDWix5QkFBeUI7SUFDekIsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlFQUFpRTtBQUNyRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0taGVhZGVyOiAjNDQ0MDNjO1xcclxcbiAgICAtLW5hdmJhcjogI2U3ZTVlNDtcXHJcXG4gICAgLS1wYWdlOiAjZmFmYWY5O1xcclxcbiAgICAtLW1haW4tZm9udDogIzJjMmMyYztcXHJcXG4gICAgLS1zZWNvbmRhcnktZm9udDogI2ZhZmFmOTtcXHJcXG4gICAgLS1idXR0b24tYzogIzQ0NDAzYztcXHJcXG5cXHJcXG4gICAgLS1ib3JkZXI6IDJweCBzb2xpZCAjNDQ0MDNjO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKmNvbnRhaW5lcnMqL1xcclxcbiNjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgJ2hlYWRlciBoZWFkZXInXFxyXFxuICAgICAgICAnbmF2IHBhZ2UnO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKkhlYWRlciovXFxyXFxuI2hlYWRlciwgI25hdmJhciwgLmZvcm17XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggdmFyKC0tYnV0dG9uLWMpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxyXFxufVxcclxcblxcclxcbi8qbmF2YmFyKi9cXHJcXG4jbmF2YmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhcik7XFxyXFxufVxcclxcblxcclxcbiNuYXYsICNjcmVhdGUtcHJvamVjdCwgLmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMi41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgbWFyZ2luOiAwIDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogIGxlZnQ7XFxyXFxuICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmxpbmUtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKnBvcHVwKi9cXHJcXG4uaGlkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAzNSU7XFxyXFxuICAgIGxlZnQ6IDQ1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDI1MHB4ICsgMTB2dyk7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLyp0b2RvLXBhZ2UtY29udGVudHMqL1xcclxcbiN0b2RvIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwYWdlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMi41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyp0ZXh0Ki9cXHJcXG4jaGVhZGVyID4gaDEsICN0b2RvIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyID4gaDEge1xcclxcbiAgICBwYWRkaW5nOiAwLjFlbSA1cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogcnViaWsgbWFya2VyIGhhdGNoO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAyLjVweCB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3QgKiwgI3RvZG8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0gaDEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBsYWJlbCwgLmZvcm0gaW5wdXR7XFxyXFxuICAgIG1hcmdpbjogMCAzLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qY29tcG9uZW50cyovXFxyXFxuLypuYXZiYXIqL1xcclxcbiNuYXYgPiBidXR0b24sIC5wcm9qZWN0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmVuYWJsZWQ6aG92ZXIsICNuYXYgPiBidXR0b246Zm9jdXMsIC5hZGQ6ZW5hYmxlZDpob3ZlciwgLnByb2plY3QuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tYm9yZGVyKTtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjpmb2N1cy13aXRoaW4sIC5wcm9qZWN0OmZvY3VzLXdpdGhpbiwgYnV0dG9uLnNlbGVjdGVkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KSAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLypwcm9qZWN0cyovXFxyXFxuLmFkZCwgLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcblxcclxcbi8qVG9EbyBsaXN0IFBhZ2UqL1xcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkID4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnBvcHVwKi9cXHJcXG4jcG9wdXAgaW5wdXQge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBkaXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwb3B1cCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZyx2YXIoLS1wYWdlKSx2YXIoLS1uYXZiYXIpKTsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0taGVhZGVyKSx2YXIoLS1tYWluLWZvbnQpKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcmVtb3ZlRm9ybSBmcm9tICcuL3JlbW92ZUZvcm0nO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xyXG5cclxuY29uc3QgYWRkRm9ybSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBfZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRBdHRyaWJ1dGUgPSAoZWxlbWVudCx0eXBlLGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBfZWxlbWVudC5zZXRBdHRyaWJ1dGUodHlwZSxhdHRyaWJ1dGUpO1xyXG4gICAgICAgIHJldHVybiBfZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmREaXYgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2RpdicsJ2NsYXNzJywnZm9ybScpO1xyXG4gICAgICAgIF9lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChfZWxlbWVudClcclxuICAgICAgICByZXR1cm4gX2VsZW1lbnRcclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGFwcGVuZERpdigpO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZEhlYWRlciA9IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdoMScsJ2NsYXNzJywnaGVhZGVyJyk7XHJcbiAgICAgICAgX2VsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZExhYmVsID0gbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2xhYmVsJywnZm9yJywndGl0bGUnKTtcclxuICAgICAgICBfZWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kSW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2lucHV0JywnaWQnLCd0aXRsZScpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZEJ1dHRvbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnZGl2JywnY2xhc3MnLCdmb3JtQnV0dG9ucycpXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChfZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIF9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGFwcGVuZEJ1dHRvbkNvbnRhaW5lcigpO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZENhbmNlbEJ1dHRvbiA9IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdidXR0b24nLCdpZCcsJ2NhbmNlbCcpO1xyXG4gICAgICAgIF9lbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBfZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZvcm0ucmVtb3ZlKTtcclxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENhbmNlbEJ1dHRvbignQ2FuY2VsJyk7XHJcblxyXG4gICAgY29uc3QgYXBwZW5kQ3JlYXRlQnV0dG9uID0gbmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2J1dHRvbicsJ2lkJywnY3JlYXRlJyk7XHJcbiAgICAgICAgX2VsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIF9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlUHJvamVjdC5nZXRUaXRsZUlucHV0KTtcclxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENyZWF0ZUJ1dHRvbignQ3JlYXRlJyk7XHJcblxyXG4gICAgY29uc3QgZmFkZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcclxuICAgICAgICBfZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJylcclxuICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCd0cnVlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGFwcGVuZElucHV0KCk7XHJcbiAgICAgICAgYXBwZW5kTGFiZWwoJ1RpdGxlJyk7XHJcbiAgICAgICAgYXBwZW5kSGVhZGVyKCdBZGQgUHJvamVjdCcpO1xyXG4gICAgICAgIGFwcGVuZEJ1dHRvbkNvbnRhaW5lcigpO1xyXG4gICAgICAgIGZhZGVDb250YWluZXIoKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0Zvcm0sXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRm9ybSIsImltcG9ydCBzaG93UHJvamVjdCBmcm9tICcuL3Byb2plY3RET00nO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcblxyXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cclxufVxyXG5cclxuY29uc3QgdGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG5cclxuICAgIHJldHVybiB7IHByb2plY3QsIHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5IH07XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGVJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGNyZWF0ZShfdmFsdWUsJycsJycsJycpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0LnB1c2hUb05hdihfZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgX3Byb2plY3QgPSBwcm9qZWN0KHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2goX3Byb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgICByZXR1cm4gX3Byb2plY3Q7IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRhc2tJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAvL2NyZWF0ZXMgYSB0YXNrIGFuZFxyXG4gICAgICAgIC8vZ2V0cyB0aXRsZSBmcm9tIGlucHV0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF90YXNrID0gdGFzayhwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgdGFza3MucHVzaChfdGFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiBfdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5JbmRleCA9IHByb2plY3QgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3QgPT09IHByb2plY3RzW2ldLnRpdGxlKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgZ2V0VGl0bGVJbnB1dCxcclxuICAgICAgICByZXR1cm5JbmRleCxcclxuICAgICAgICBwcm9qZWN0cyxcclxuICAgICAgICB0YXNrcyxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBfcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4geyBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0fSxjcmVhdGVQcm9qZWN0LnByb2plY3RzW2ldKTtcclxuICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSkgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX3JlbW92ZVByb2plY3RcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XHJcbmV4cG9ydCB7cmVtb3ZlUHJvamVjdH07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHtyZW1vdmVQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcblxyXG5jb25zdCBzaG93UHJvamVjdCA9ICgoKSA9PiB7XHJcblxyXG4gICAgLy9uYXZiYXIgRE9NXHJcbiAgICBjb25zdCBwdXNoVG9OYXYgPSBjaGlsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXByb2plY3QnKVxyXG5cclxuICAgICAgICAvL2RpdlxyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Byb2plY3QgYnV0dG9uJyk7XHJcbiAgICAgICAgX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnMCcpO1xyXG4gICAgICAgIF9jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsY2hpbGQudGl0bGUpO1xyXG4gICAgICAgIF9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGRpc3BsYXlQcm9qZWN0KGNoaWxkKSk7XHJcbiAgICAgICAgX2xpc3QuYXBwZW5kQ2hpbGQoX2NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vcHJvamVjdCB0aXRsZVxyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgX2VsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGNoaWxkLnRpdGxlO1xyXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgIC8vYnV0dG9uXHJcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24oY2hpbGQudGl0bGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aXRsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIF9idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsdGl0bGUpO1xyXG4gICAgICAgIF9idXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSA9PT0gX2J1dHRvbi5pZCl7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7X2J1dHRvbi5pZH1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QuX3JlbW92ZVByb2plY3QoX2J1dHRvbi5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9idXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgLy9wYWdlIGRpc3BsYXlcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gcHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbmdlVGFiLnRhYiA9PT0gcHJvamVjdC50aXRsZSkgcmV0dXJuO1xyXG4gICAgICAgIGhpZGVQcm9qZWN0KCk7XHJcbiAgICAgICAgY2hhbmdlVGFiLnRhYiA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlVGFiLnRhYik7XHJcbiAgICAgICAgY29uc3QgX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgICAgIF9wYWdlLmlubmVySFRNTCArPSAgYDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7cHJvamVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFza1wiIGNsYXNzPVwiYWRkXCI+KzwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7cHJvamVjdC5kdWVEYXRlfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW1wb3J0YW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7IFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5VGFzayk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9Y2hlY2tib3hdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHNldEltcG9ydGFudChwcm9qZWN0LnRpdGxlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJkYXRlXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBzZXREYXRlKHByb2plY3QudGl0bGUpKTtcclxuICAgICAgICBzZXRDaGVja2VkKHByb2plY3QpO1xyXG4gICAgfVxyXG4gICAgLy9jaGFuZ2UgZGF0ZVxyXG4gICAgY29uc3Qgc2V0RGF0ZSA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJkYXRlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVQcm9qZWN0LnJldHVybkluZGV4KGlkKTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5kdWVEYXRlID0gZGF0ZS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoYW5nZSBwcmlvcml0eVxyXG4gICAgY29uc3Qgc2V0SW1wb3J0YW50ID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3R5cGU9J2NoZWNrYm94J11gKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGNyZWF0ZVByb2plY3QucmV0dXJuSW5kZXgoaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4LGlkKTtcclxuICAgICAgICBjaGVjay5jaGVja2VkIFxyXG4gICAgICAgICAgICA/IGNyZWF0ZVByb2plY3QucHJvamVjdHNbaW5kZXhdLnByaW9yaXR5ID0gJ2ltcG9ydGFudCdcclxuICAgICAgICAgICAgOiBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5wcmlvcml0eSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrZWQgPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgICAgICBpZC5wcmlvcml0eSA9PT0gJ2ltcG9ydGFudCdcclxuICAgICAgICAgICAgPyBjaGVjay5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICA6IGNoZWNrLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rhc2tzXHJcbiAgICBjb25zdCBkaXNwbGF5VGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICAgIF90YXNrLmlubmVySFRNTCA9ICc8aDE+SGVsbG8gd29ybGQ8L2gxPidcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbW92ZSBmcm9tIG1haW4gcGFnZVxyXG4gICAgY29uc3QgaGlkZVByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgICAgIF9wYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHVzaFRvTmF2LFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0LFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2plY3Q7IiwiY29uc3QgcmVtb3ZlRm9ybSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdW5mYWRlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhdGVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9ucyk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PntcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSA0OyBpID4gMDsgaS0tKXtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuZmFkZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIGFjdGl2YXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRm9ybTsiLCJjb25zdCBjaGFuZ2VUYWIgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgdGFiID0gJyc7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGFiLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlVGFiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IGFkZEZvcm0gZnJvbSAnLi9hZGRGb3JtJztcclxuaW1wb3J0IHJlbW92ZUZvcm0gZnJvbSAnLi9yZW1vdmVGb3JtJztcclxuaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuXHJcbmNvbnN0IGV2ZW50QWRkZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1idXR0b24nKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRm9ybS5zaG93Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRFdmVudCxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgX2VsZW1lbnQgPSBjcmVhdGVQcm9qZWN0LmNyZWF0ZSgnVG9EbyBMaXN0JywnJywnJywnJyk7XHJcbiAgICBzaG93UHJvamVjdC5wdXNoVG9OYXYoX2VsZW1lbnQpO1xyXG59XHJcblxyXG5kZWZhdWx0UHJvamVjdCgpO1xyXG5ldmVudEFkZGVyLmFkZEV2ZW50KCk7XHJcbnNob3dQcm9qZWN0LmRpc3BsYXlQcm9qZWN0KGNyZWF0ZVByb2plY3QucHJvamVjdHNbMF0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==