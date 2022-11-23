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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header, #navbar, .form{\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav, #create-project, .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1, #todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *, #todo p {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label, .form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button, .project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover, #nav > button:focus, .add:enabled:hover, .project.button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within, .selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n.project > p {\r\n    pointer-events: none;\r\n}\r\n\r\n/*projects*/\r\n.add, .nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,yBAAyB;IACzB,mBAAmB;;IAEnB,2BAA2B;;IAE3B,gDAAgD;IAChD,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA,aAAa;AACb;IACI,YAAY;IACZ;;kBAEc;IACd,gCAAgC;IAChC,4BAA4B;IAC5B,aAAa;IACb,YAAY;AAChB;;AAEA,SAAS;AACT;IACI,4CAA4C;IAC5C,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA,SAAS;AACT;IACI,cAAc;IACd,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;AACpB;;AAEA;GACG,kBAAkB;AACrB;;AAEA;GACG,gBAAgB;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,8BAA8B;AAClC;;AAEA,QAAQ;AACR;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;IACb,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,OAAO;AACP;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,+BAA+B;IAC/B,4BAA4B;IAC5B,wCAAwC;AAC5C;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;AACpB;;AAEA,aAAa;AACb,SAAS;AACT;IACI,UAAU;IACV,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uCAAuC;IACvC,4CAA4C;AAChD;;AAEA;IACI,oBAAoB;AACxB;;AAEA,WAAW;AACX;IACI,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;IACI,YAAY;AAChB;;AAEA,QAAQ;AACR;IACI,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,6DAA6D;AACjE;;AAEA;IACI,4BAA4B;IAC5B,iEAAiE;AACrE","sourcesContent":[":root {\r\n    --header: #44403c;\r\n    --navbar: #e7e5e4;\r\n    --page: #fafaf9;\r\n    --main-font: #2c2c2c;\r\n    --secondary-font: #fafaf9;\r\n    --button-c: #44403c;\r\n\r\n    --border: 2px solid #44403c;\r\n\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    color: var(--main-font);\r\n}\r\n\r\n*, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/*containers*/\r\n#container {\r\n    display:grid;\r\n    grid-template-areas: \r\n        'header header'\r\n        'nav page';\r\n    grid-template-columns: 250px 1fr;\r\n    grid-template-rows: 5rem 1fr;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n/*Header*/\r\n#header, #navbar, .form{\r\n    box-shadow: 0px 0px 10px 2px var(--button-c);\r\n    z-index: 1;\r\n}\r\n\r\n#header {\r\n    grid-area: header;\r\n    background-color: var(--header);\r\n}\r\n\r\n/*navbar*/\r\n#navbar {\r\n    grid-area: nav;\r\n    background-color: var(--navbar);\r\n}\r\n\r\n#nav, #create-project, .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    margin: 2.5rem 0;\r\n}\r\n\r\n#nav {\r\n   align-items:center; \r\n}\r\n\r\n#create-project {\r\n   margin: 0 2.5rem;\r\n}\r\n\r\n.nav-project {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align:  left;\r\n    width: unset !important;\r\n    height: unset !important;\r\n}\r\n\r\n.inline-project {\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*popup*/\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hidden {\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.form {\r\n    flex-direction: column-reverse;\r\n    justify-content: flex-end;\r\n    width: calc(250px + 10vw);\r\n    height: 250px;\r\n    border: var(--border);\r\n    background-color: var(--page);\r\n}\r\n\r\n.header {\r\n    background-color: var(--header);\r\n}\r\n\r\n.fade {\r\n    opacity: 0.5;\r\n}\r\n\r\n/*todo-page-contents*/\r\n#todo {\r\n    grid-area: page;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    background-color: var(--page);\r\n}\r\n\r\n#todo > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2.5rem;\r\n    padding: 0 10rem;\r\n}\r\n\r\n#todo > div:first-child {\r\n    margin-top: 2.5rem;\r\n}\r\n\r\n/*text*/\r\n#header > h1, #todo h1 {\r\n    font-size: 60px;\r\n}\r\n\r\n#header > h1 {\r\n    padding: 0.1em 5rem;\r\n    font-family: rubik marker hatch;\r\n    color: var(--secondary-font);\r\n    -webkit-text-stroke: 2.5px var(--navbar);\r\n}\r\n\r\n#create-project *, #todo p {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.form h1 {\r\n    width: 100%;\r\n    color: var(--secondary-font);\r\n    text-align: center;\r\n    transform: translateY(-16px);\r\n}\r\n\r\n.form label, .form input{\r\n    margin: 0 3.5rem;\r\n}\r\n\r\n/*components*/\r\n/*navbar*/\r\n#nav > button, .project {\r\n    width: 50%;\r\n    height: 25px;\r\n    padding: 0.5em 1rem;\r\n    text-align: center;\r\n    list-style-type: none;\r\n    font-size: 18px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    box-sizing: content-box;\r\n    background-color: var(--page);\r\n}\r\n\r\n#nav > button:enabled:hover, #nav > button:focus, .add:enabled:hover, .project.button:hover {\r\n    outline: var(--border);\r\n    filter: brightness(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav > button:focus-within, .selected {\r\n    color: var(--secondary-font) !important;\r\n    background-color: var(--button-c) !important;\r\n}\r\n\r\n.project > p {\r\n    pointer-events: none;\r\n}\r\n\r\n/*projects*/\r\n.add, .nav-project button {\r\n    padding: 0 6px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: var(--secondary-font);\r\n}\r\n\r\n.add {\r\n    background-color: var(--button-c);\r\n}\r\n\r\n.nav-project button {\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: crimson;\r\n}\r\n\r\n/*ToDo list Page*/\r\n#todo > div:first-child > button {\r\n    height: 20px;\r\n}\r\n\r\n/*popup*/\r\n#popup input {\r\n    width: 75%;\r\n}\r\n\r\n.form div {\r\n    position:relative;\r\n    top: 50px;\r\n    display:flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    margin: 0 1rem;\r\n}\r\n\r\n#popup button {\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n#cancel {\r\n    background: linear-gradient(270deg,var(--page),var(--navbar)); \r\n}\r\n\r\n#create {\r\n    color: var(--secondary-font);\r\n    background: linear-gradient(90deg,var(--header),var(--main-font));\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ2pIMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ25DekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7VUNUeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYWRkRm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbW92ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlcjogIzQ0NDAzYztcXHJcXG4gICAgLS1uYXZiYXI6ICNlN2U1ZTQ7XFxyXFxuICAgIC0tcGFnZTogI2ZhZmFmOTtcXHJcXG4gICAgLS1tYWluLWZvbnQ6ICMyYzJjMmM7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWZvbnQ6ICNmYWZhZjk7XFxyXFxuICAgIC0tYnV0dG9uLWM6ICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIC0tYm9yZGVyOiAycHggc29saWQgIzQ0NDAzYztcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLypjb250YWluZXJzKi9cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgICdoZWFkZXIgaGVhZGVyJ1xcclxcbiAgICAgICAgJ25hdiBwYWdlJztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLypIZWFkZXIqL1xcclxcbiNoZWFkZXIsICNuYXZiYXIsIC5mb3Jte1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm5hdmJhciovXFxyXFxuI25hdmJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2LCAjY3JlYXRlLXByb2plY3QsIC5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDIuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gICBhbGlnbi1pdGVtczpjZW50ZXI7IFxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlLXByb2plY3Qge1xcclxcbiAgIG1hcmdpbjogMCAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246ICBsZWZ0O1xcclxcbiAgICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuLmhpZGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzUlO1xcclxcbiAgICBsZWZ0OiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogY2FsYygyNTBweCArIDEwdncpO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi8qdG9kby1wYWdlLWNvbnRlbnRzKi9cXHJcXG4jdG9kbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcGFnZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8gPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qdGV4dCovXFxyXFxuI2hlYWRlciA+IGgxLCAjdG9kbyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciA+IGgxIHtcXHJcXG4gICAgcGFkZGluZzogMC4xZW0gNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHJ1YmlrIG1hcmtlciBoYXRjaDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMi41cHggdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0ICosICN0b2RvIHAge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb3JtIGgxIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gbGFiZWwsIC5mb3JtIGlucHV0e1xcclxcbiAgICBtYXJnaW46IDAgMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKmNvbXBvbmVudHMqL1xcclxcbi8qbmF2YmFyKi9cXHJcXG4jbmF2ID4gYnV0dG9uLCAucHJvamVjdCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgcGFkZGluZzogMC41ZW0gMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiA+IGJ1dHRvbjplbmFibGVkOmhvdmVyLCAjbmF2ID4gYnV0dG9uOmZvY3VzLCAuYWRkOmVuYWJsZWQ6aG92ZXIsIC5wcm9qZWN0LmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWJvcmRlcik7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246Zm9jdXMtd2l0aGluLCAuc2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IHAge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypwcm9qZWN0cyovXFxyXFxuLmFkZCwgLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1wcm9qZWN0IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxufVxcclxcblxcclxcbi8qVG9EbyBsaXN0IFBhZ2UqL1xcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkID4gYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnBvcHVwKi9cXHJcXG4jcG9wdXAgaW5wdXQge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBkaXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwb3B1cCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZyx2YXIoLS1wYWdlKSx2YXIoLS1uYXZiYXIpKTsgXFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsdmFyKC0taGVhZGVyKSx2YXIoLS1tYWluLWZvbnQpKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG1CQUFtQjs7SUFFbkIsMkJBQTJCOztJQUUzQixnREFBZ0Q7SUFDaEQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7SUFDSSxZQUFZO0lBQ1o7O2tCQUVjO0lBQ2QsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSw0Q0FBNEM7SUFDNUMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0dBQ0csa0JBQWtCO0FBQ3JCOztBQUVBO0dBQ0csZ0JBQWdCO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBLFFBQVE7QUFDUjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLE9BQU87QUFDUDtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLFFBQVE7QUFDUjtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUVBQWlFO0FBQ3JFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXI6ICM0NDQwM2M7XFxyXFxuICAgIC0tbmF2YmFyOiAjZTdlNWU0O1xcclxcbiAgICAtLXBhZ2U6ICNmYWZhZjk7XFxyXFxuICAgIC0tbWFpbi1mb250OiAjMmMyYzJjO1xcclxcbiAgICAtLXNlY29uZGFyeS1mb250OiAjZmFmYWY5O1xcclxcbiAgICAtLWJ1dHRvbi1jOiAjNDQ0MDNjO1xcclxcblxcclxcbiAgICAtLWJvcmRlcjogMnB4IHNvbGlkICM0NDQwM2M7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udCk7XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi8qY29udGFpbmVycyovXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICAnaGVhZGVyIGhlYWRlcidcXHJcXG4gICAgICAgICduYXYgcGFnZSc7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi8qSGVhZGVyKi9cXHJcXG4jaGVhZGVyLCAjbmF2YmFyLCAuZm9ybXtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCB2YXIoLS1idXR0b24tYyk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLypuYXZiYXIqL1xcclxcbiNuYXZiYXIge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiwgI2NyZWF0ZS1wcm9qZWN0LCAuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAyLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICBtYXJnaW46IDAgMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiAgbGVmdDtcXHJcXG4gICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qcG9wdXAqL1xcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDM1JTtcXHJcXG4gICAgbGVmdDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMjUwcHggKyAxMHZ3KTtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxyXFxufVxcclxcblxcclxcbi5mYWRlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4vKnRvZG8tcGFnZS1jb250ZW50cyovXFxyXFxuI3RvZG8ge1xcclxcbiAgICBncmlkLWFyZWE6IHBhZ2U7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMTByZW07XFxyXFxufVxcclxcblxcclxcbiN0b2RvID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKnRleHQqL1xcclxcbiNoZWFkZXIgPiBoMSwgI3RvZG8gaDEge1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgPiBoMSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMWVtIDVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBydWJpayBtYXJrZXIgaGF0Y2g7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDIuNXB4IHZhcigtLW5hdmJhcik7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtcHJvamVjdCAqLCAjdG9kbyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZm9ybSBoMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGxhYmVsLCAuZm9ybSBpbnB1dHtcXHJcXG4gICAgbWFyZ2luOiAwIDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypjb21wb25lbnRzKi9cXHJcXG4vKm5hdmJhciovXFxyXFxuI25hdiA+IGJ1dHRvbiwgLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtIDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZSk7XFxyXFxufVxcclxcblxcclxcbiNuYXYgPiBidXR0b246ZW5hYmxlZDpob3ZlciwgI25hdiA+IGJ1dHRvbjpmb2N1cywgLmFkZDplbmFibGVkOmhvdmVyLCAucHJvamVjdC5idXR0b246aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2ID4gYnV0dG9uOmZvY3VzLXdpdGhpbiwgLnNlbGVjdGVkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KSAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgPiBwIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qcHJvamVjdHMqL1xcclxcbi5hZGQsIC5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwIDZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtcHJvamVjdCBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvRG8gbGlzdCBQYWdlKi9cXHJcXG4jdG9kbyA+IGRpdjpmaXJzdC1jaGlsZCA+IGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypwb3B1cCovXFxyXFxuI3BvcHVwIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gZGl2IHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdXAgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsdmFyKC0tcGFnZSksdmFyKC0tbmF2YmFyKSk7IFxcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250KTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLWhlYWRlciksdmFyKC0tbWFpbi1mb250KSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJlbW92ZUZvcm0gZnJvbSAnLi9yZW1vdmVGb3JtJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuXHJcbmNvbnN0IGFkZEZvcm0gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gKGVsZW1lbnQsdHlwZSxhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgX2VsZW1lbnQuc2V0QXR0cmlidXRlKHR5cGUsYXR0cmlidXRlKTtcclxuICAgICAgICByZXR1cm4gX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kRGl2ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdkaXYnLCdjbGFzcycsJ2Zvcm0nKTtcclxuICAgICAgICBfZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIF9lbGVtZW50XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBhcHBlbmREaXYoKTtcclxuXHJcbiAgICBjb25zdCBhcHBlbmRIZWFkZXIgPSBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnaDEnLCdjbGFzcycsJ2hlYWRlcicpO1xyXG4gICAgICAgIF9lbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRMYWJlbCA9IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdsYWJlbCcsJ2ZvcicsJ3RpdGxlJyk7XHJcbiAgICAgICAgX2VsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdpbnB1dCcsJ2lkJywndGl0bGUnKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRCdXR0b25Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBzZXRBdHRyaWJ1dGUoJ2RpdicsJ2NsYXNzJywnZm9ybUJ1dHRvbnMnKVxyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBfZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBhcHBlbmRCdXR0b25Db250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCBhcHBlbmRDYW5jZWxCdXR0b24gPSBuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IHNldEF0dHJpYnV0ZSgnYnV0dG9uJywnaWQnLCdjYW5jZWwnKTtcclxuICAgICAgICBfZWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGb3JtLnJlbW92ZSk7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDYW5jZWxCdXR0b24oJ0NhbmNlbCcpO1xyXG5cclxuICAgIGNvbnN0IGFwcGVuZENyZWF0ZUJ1dHRvbiA9IG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9lbGVtZW50ID0gc2V0QXR0cmlidXRlKCdidXR0b24nLCdpZCcsJ2NyZWF0ZScpO1xyXG4gICAgICAgIF9lbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgICBfZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QuZ2V0VGl0bGVJbnB1dCk7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKF9lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDcmVhdGVCdXR0b24oJ0NyZWF0ZScpO1xyXG5cclxuICAgIGNvbnN0IGZhZGVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywndHJ1ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdCBidXR0b24nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgYXBwZW5kSW5wdXQoKTtcclxuICAgICAgICBhcHBlbmRMYWJlbCgnVGl0bGUnKTtcclxuICAgICAgICBhcHBlbmRIZWFkZXIoJ0FkZCBQcm9qZWN0Jyk7XHJcbiAgICAgICAgYXBwZW5kQnV0dG9uQ29udGFpbmVyKCk7XHJcbiAgICAgICAgZmFkZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0LmhpZGVQcm9qZWN0KCk7XHJcbiAgICAgICAgY2hhbmdlVGFiLnRhYiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0Zvcm0sXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRm9ybSIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IGFkZEZvcm0gZnJvbSAnLi9hZGRGb3JtJztcclxuaW1wb3J0IHJlbW92ZUZvcm0gZnJvbSAnLi9yZW1vdmVGb3JtJztcclxuaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuXHJcbmNvbnN0IGV2ZW50QWRkZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1idXR0b24nKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRm9ybS5zaG93Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkRSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZEV2ZW50LFxyXG4gICAgICAgIGFkZEUsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IF9lbGVtZW50ID0gY3JlYXRlUHJvamVjdC5jcmVhdGUoJ1RvRG8gTGlzdCcsJycsJycsJycpO1xyXG4gICAgc2hvd1Byb2plY3QucHVzaFRvTmF2KF9lbGVtZW50KTtcclxufVxyXG5cclxuZGVmYXVsdFByb2plY3QoKTtcclxuZXZlbnRBZGRlci5hZGRFdmVudCgpO1xyXG5ldmVudEFkZGVyLmFkZEUoKTtcclxuc2hvd1Byb2plY3QuZGlzcGxheVByb2plY3QoY3JlYXRlUHJvamVjdC5wcm9qZWN0c1swXSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudEFkZGVyIiwiaW1wb3J0IHNob3dQcm9qZWN0IGZyb20gJy4vcHJvamVjdERPTSc7XHJcbmltcG9ydCBjaGFuZ2VUYWIgZnJvbSAnLi90YWJzJztcclxuaW1wb3J0IGV2ZW50QWRkZXIgZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cclxufVxyXG5cclxuY29uc3QgdGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG5cclxuICAgIHJldHVybiB7IHByb2plY3QsIHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5IH07XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGVJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBfZWxlbWVudCA9IGNyZWF0ZShfdmFsdWUsJycsJycsJycpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0LnB1c2hUb05hdihfZWxlbWVudCk7XHJcbiAgICAgICAgZXZlbnRBZGRlci5hZGRFKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgX3Byb2plY3QgPSBwcm9qZWN0KHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2goX3Byb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgICAgICByZXR1cm4gX3Byb2plY3Q7IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRhc2tJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAvL2NyZWF0ZXMgYSB0YXNrIGFuZFxyXG4gICAgICAgIC8vZ2V0cyB0aXRsZSBmcm9tIGlucHV0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF90YXNrID0gdGFzayhwcm9qZWN0LCB0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgdGFza3MucHVzaChfdGFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiBfdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5JbmRleCA9IHByb2plY3QgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3QgPT09IHByb2plY3RzW2ldLnRpdGxlKSByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgZ2V0VGl0bGVJbnB1dCxcclxuICAgICAgICByZXR1cm5JbmRleCxcclxuICAgICAgICBwcm9qZWN0cyxcclxuICAgICAgICB0YXNrcyxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBfcmVtb3ZlUHJvamVjdCA9IHByb2plY3QgPT4geyBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtwcm9qZWN0fSxjcmVhdGVQcm9qZWN0LnByb2plY3RzW2ldKTtcclxuICAgICAgICAgICAgaWYocHJvamVjdCA9PT0gY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSkgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgX3JlbW92ZVByb2plY3RcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XHJcbmV4cG9ydCB7cmVtb3ZlUHJvamVjdH07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHtyZW1vdmVQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgY2hhbmdlVGFiIGZyb20gJy4vdGFicyc7XHJcbmltcG9ydCBldmVudEFkZGVyIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3Qgc2hvd1Byb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vbmF2YmFyIERPTVxyXG4gICAgY29uc3QgcHVzaFRvTmF2ID0gY2hpbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1wcm9qZWN0JylcclxuXHJcbiAgICAgICAgLy9kaXZcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0IGJ1dHRvbicpO1xyXG4gICAgICAgIF9jb250YWluZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcclxuICAgICAgICBfY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLGNoaWxkLnRpdGxlKTtcclxuICAgICAgICBfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBkaXNwbGF5UHJvamVjdChjaGlsZCkpO1xyXG4gICAgICAgIF9saXN0LmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xyXG5cclxuICAgICAgICAvL3Byb2plY3QgdGl0bGVcclxuICAgICAgICBjb25zdCBfZWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIF9lbGVtZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Vuc2VsZWN0Jyk7XHJcbiAgICAgICAgX2VsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGNoaWxkLnRpdGxlO1xyXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoX2VsZW1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgIC8vYnV0dG9uXHJcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24oY2hpbGQudGl0bGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aXRsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIF9idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsdGl0bGUpO1xyXG4gICAgICAgIF9idXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3JlYXRlUHJvamVjdC5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlUHJvamVjdC5wcm9qZWN0c1tpXS50aXRsZSA9PT0gX2J1dHRvbi5pZCl7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7X2J1dHRvbi5pZH1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QuX3JlbW92ZVByb2plY3QoX2J1dHRvbi5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9idXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgLy9wYWdlIGRpc3BsYXlcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gcHJvamVjdCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbmdlVGFiLnRhYiA9PT0gcHJvamVjdC50aXRsZSkgcmV0dXJuO1xyXG4gICAgICAgIGhpZGVQcm9qZWN0KCk7XHJcbiAgICAgICAgY2hhbmdlVGFiLnRhYiA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlVGFiLnRhYik7XHJcbiAgICAgICAgY29uc3QgX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgICAgIF9wYWdlLmlubmVySFRNTCArPSAgYDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7cHJvamVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFza1wiIGNsYXNzPVwiYWRkXCI+KzwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7cHJvamVjdC5kdWVEYXRlfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW1wb3J0YW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7IFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5VGFzayk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9Y2hlY2tib3hdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHNldEltcG9ydGFudChwcm9qZWN0LnRpdGxlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJkYXRlXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBzZXREYXRlKHByb2plY3QudGl0bGUpKTtcclxuICAgICAgICBzZXRDaGVja2VkKHByb2plY3QpO1xyXG4gICAgfVxyXG4gICAgLy9jaGFuZ2UgZGF0ZVxyXG4gICAgY29uc3Qgc2V0RGF0ZSA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJkYXRlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjcmVhdGVQcm9qZWN0LnJldHVybkluZGV4KGlkKTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5kdWVEYXRlID0gZGF0ZS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoYW5nZSBwcmlvcml0eVxyXG4gICAgY29uc3Qgc2V0SW1wb3J0YW50ID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3R5cGU9J2NoZWNrYm94J11gKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGNyZWF0ZVByb2plY3QucmV0dXJuSW5kZXgoaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4LGlkKTtcclxuICAgICAgICBjaGVjay5jaGVja2VkIFxyXG4gICAgICAgICAgICA/IGNyZWF0ZVByb2plY3QucHJvamVjdHNbaW5kZXhdLnByaW9yaXR5ID0gJ2ltcG9ydGFudCdcclxuICAgICAgICAgICAgOiBjcmVhdGVQcm9qZWN0LnByb2plY3RzW2luZGV4XS5wcmlvcml0eSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrZWQgPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJylcclxuICAgICAgICBpZC5wcmlvcml0eSA9PT0gJ2ltcG9ydGFudCdcclxuICAgICAgICAgICAgPyBjaGVjay5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICA6IGNoZWNrLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Rhc2tzXHJcbiAgICBjb25zdCBkaXNwbGF5VGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICAgIF90YXNrLmlubmVySFRNTCA9ICc8aDE+SGVsbG8gd29ybGQ8L2gxPidcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbW92ZSBmcm9tIG1haW4gcGFnZVxyXG4gICAgY29uc3QgaGlkZVByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xyXG4gICAgICAgIF9wYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHVzaFRvTmF2LFxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0LFxyXG4gICAgICAgIGhpZGVQcm9qZWN0LFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd1Byb2plY3Q7IiwiY29uc3QgcmVtb3ZlRm9ybSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdW5mYWRlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcbiAgICAgICAgX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZhdGVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9ucyk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PntcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSA0OyBpID4gMDsgaS0tKXtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuZmFkZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIGFjdGl2YXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRm9ybTsiLCJjb25zdCBjaGFuZ2VUYWIgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgdGFiID0gJyc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0YWIsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VUYWI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=