/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter.ttf */ "./src/assets/fonts/Inter.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/William.ttf */ "./src/assets/fonts/William.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Fabinter';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face  { \r\n    font-family: 'Fabwilliam'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\nbody{\r\n    font-family: 'Fabinter';\r\n    margin: 0;\r\n    border: 0;\r\n    background-color: black;\r\n    display: grid;\r\n    color: white;\r\n    grid-template-rows: 10vh 85vh 5vh;\r\n}\r\n.header{\r\n    color: black;\r\n    display: grid;\r\n    background-color: #FAA307;\r\n    grid-template-columns: 10vh 10vh 10vh;\r\n    justify-items: center;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n}\r\n.header>button{\r\n    background-color: #F48C06;\r\n    border: transparent;\r\n    place-self: stretch;\r\n}\r\n.mainhome{\r\n    display: grid;\r\n    grid-template-columns: max(50vh,50%)max(50vh,50%);\r\n    overflow-x: hidden;\r\n}\r\n.mainmenu{\r\n    display: grid;\r\n    overflow-x: hidden;\r\n    grid-template-rows: 1fr 5fr;\r\n    justify-items: center;\r\n}\r\n.mainmenu>div>h3,p{\r\n    text-align: center;\r\n}\r\n.div1{\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    grid-template-rows: 200px 200px 100px;\r\n    padding-top: 100px;\r\n}\r\n    .div1>h1{\r\n        font-size: 7em;\r\n    }\r\n    .div1>p{\r\n        font-size: 1.5em;\r\n    }\r\n.div2{\r\n    align-self: center;\r\n}\r\nh1,h3{\r\n    font-family: 'Fabwilliam'; \r\n}\r\n.footer{\r\n    background-color: #101010;\r\n}\r\n    .footer>p{\r\n        text-align: center;\r\n        margin-top: 5px;\r\n    }\r\n    .footer>p>a>img{\r\n        height: 20px;\r\n    }\r\n.imagenhome{\r\n    height: 577px;\r\n}\r\n.dish{\r\n    display: grid;\r\n    background-color: #9c9c9c2b;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.dish>img{\r\n    height: 250px;\r\n}\r\n.dishes{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 90%;\r\n    gap: 20px;\r\n}\r\n.maincontacto{\r\n    display: grid;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n.uniondiv{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 40px;\r\n    margin-inline: 50px;\r\n    justify-items: center;\r\n    align-content: space-around;\r\n    text-align: center;\r\n}\r\n.uniondiv>div>img{\r\n    height: 470px;\r\n}\r\n.uniondiv>div>p{\r\n    font-size: 1.5em;\r\n}\r\n.divtitulo{\r\n    text-align: center;\r\n}\r\n.signature{\r\n    height: 270px !important;\r\n}\r\n/* FANCY CSS */\r\n.button-30 {\r\n  align-items: center;\r\n  appearance: none;\r\n  background-color: #FCFCFD;\r\n  border-radius: 4px;\r\n  border-width: 0;\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #36395A;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-family: \"JetBrains Mono\",monospace;\r\n  height: 48px;\r\n  justify-content: center;\r\n  line-height: 1;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  position: relative;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  transition: box-shadow .15s,transform .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  will-change: box-shadow,transform;\r\n  font-size: 18px;\r\n}\r\n\r\n.button-30:focus {\r\n  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n}\r\n\r\n.button-30:hover {\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.button-30:active {\r\n  box-shadow: #D6D6E7 0 3px 7px inset;\r\n  transform: translateY(2px);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAAoC;AACxC;AACA;IACI,yBAAyB;IACzB,4CAAsC;AAC1C;AACA;IACI,uBAAuB;IACvB,SAAS;IACT,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,qCAAqC;IACrC,qBAAqB;IACrB,oBAAoB;IACpB,uBAAuB;AAC3B;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,iDAAiD;IACjD,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,qBAAqB;AACzB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,qCAAqC;IACrC,kBAAkB;AACtB;IACI;QACI,cAAc;IAClB;IACA;QACI,gBAAgB;IACpB;AACJ;IACI,kBAAkB;AACtB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;IACI;QACI,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,YAAY;IAChB;AACJ;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,mBAAmB;IACnB,qBAAqB;IACrB,2BAA2B;IAC3B,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,wBAAwB;AAC5B;AACA,cAAc;AACd;EACE,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,wGAAwG;EACxG,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,uCAAuC;EACvC,YAAY;EACZ,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,0CAA0C;EAC1C,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,qIAAqI;AACvI;;AAEA;EACE,0GAA0G;EAC1G,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;AAC5B","sourcesContent":["@font-face {\r\n    font-family: 'Fabinter';\r\n    src: url('./assets/fonts/Inter.ttf');\r\n}\r\n@font-face  { \r\n    font-family: 'Fabwilliam'; \r\n    src: url('./assets/fonts/William.ttf');\r\n}\r\nbody{\r\n    font-family: 'Fabinter';\r\n    margin: 0;\r\n    border: 0;\r\n    background-color: black;\r\n    display: grid;\r\n    color: white;\r\n    grid-template-rows: 10vh 85vh 5vh;\r\n}\r\n.header{\r\n    color: black;\r\n    display: grid;\r\n    background-color: #FAA307;\r\n    grid-template-columns: 10vh 10vh 10vh;\r\n    justify-items: center;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n}\r\n.header>button{\r\n    background-color: #F48C06;\r\n    border: transparent;\r\n    place-self: stretch;\r\n}\r\n.mainhome{\r\n    display: grid;\r\n    grid-template-columns: max(50vh,50%)max(50vh,50%);\r\n    overflow-x: hidden;\r\n}\r\n.mainmenu{\r\n    display: grid;\r\n    overflow-x: hidden;\r\n    grid-template-rows: 1fr 5fr;\r\n    justify-items: center;\r\n}\r\n.mainmenu>div>h3,p{\r\n    text-align: center;\r\n}\r\n.div1{\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    grid-template-rows: 200px 200px 100px;\r\n    padding-top: 100px;\r\n}\r\n    .div1>h1{\r\n        font-size: 7em;\r\n    }\r\n    .div1>p{\r\n        font-size: 1.5em;\r\n    }\r\n.div2{\r\n    align-self: center;\r\n}\r\nh1,h3{\r\n    font-family: 'Fabwilliam'; \r\n}\r\n.footer{\r\n    background-color: #101010;\r\n}\r\n    .footer>p{\r\n        text-align: center;\r\n        margin-top: 5px;\r\n    }\r\n    .footer>p>a>img{\r\n        height: 20px;\r\n    }\r\n.imagenhome{\r\n    height: 577px;\r\n}\r\n.dish{\r\n    display: grid;\r\n    background-color: #9c9c9c2b;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.dish>img{\r\n    height: 250px;\r\n}\r\n.dishes{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 90%;\r\n    gap: 20px;\r\n}\r\n.maincontacto{\r\n    display: grid;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n.uniondiv{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 40px;\r\n    margin-inline: 50px;\r\n    justify-items: center;\r\n    align-content: space-around;\r\n    text-align: center;\r\n}\r\n.uniondiv>div>img{\r\n    height: 470px;\r\n}\r\n.uniondiv>div>p{\r\n    font-size: 1.5em;\r\n}\r\n.divtitulo{\r\n    text-align: center;\r\n}\r\n.signature{\r\n    height: 270px !important;\r\n}\r\n/* FANCY CSS */\r\n.button-30 {\r\n  align-items: center;\r\n  appearance: none;\r\n  background-color: #FCFCFD;\r\n  border-radius: 4px;\r\n  border-width: 0;\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #36395A;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-family: \"JetBrains Mono\",monospace;\r\n  height: 48px;\r\n  justify-content: center;\r\n  line-height: 1;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  position: relative;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  transition: box-shadow .15s,transform .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  will-change: box-shadow,transform;\r\n  font-size: 18px;\r\n}\r\n\r\n.button-30:focus {\r\n  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n}\r\n\r\n.button-30:hover {\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.button-30:active {\r\n  box-shadow: #D6D6E7 0 3px 7px inset;\r\n  transform: translateY(2px);\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contacto.js":
/*!*************************!*\
  !*** ./src/contacto.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacto": () => (/* binding */ contacto)
/* harmony export */ });
/* harmony import */ var _esqueleto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esqueleto */ "./src/esqueleto.js");
/* harmony import */ var _assets_images_mapa_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/mapa.png */ "./src/assets/images/mapa.png");
/* harmony import */ var _assets_images_igicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/igicon.png */ "./src/assets/images/igicon.png");
/* harmony import */ var _assets_images_whatsicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/whatsicon.png */ "./src/assets/images/whatsicon.png");
/* harmony import */ var _assets_images_signature_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/signature.png */ "./src/assets/images/signature.png");






function contacto(){
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.className = 'maincontacto'
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.innerHTML = ''
     //div1
    const titulo = document.createElement('h3')
    titulo.innerText = 'FabSushi'
    const p = document.createElement('p')
    p.innerText = 'Aprobado por Obama'
    const div1 = document.createElement('div')
    div1.append(titulo)
    div1.append(p)
    div1.className = 'divtitulo'
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.append(div1)
    //div2a
    const imgmapa = new Image()
    imgmapa.src = _assets_images_mapa_png__WEBPACK_IMPORTED_MODULE_1__
    const p1 = document.createElement('p')
    p1.innerHTML = '<img src=' + _assets_images_igicon_png__WEBPACK_IMPORTED_MODULE_2__ + '> @lascarajitassushi'
    const p2 = document.createElement('p')
    p2.innerHTML = '<img src=' + _assets_images_whatsicon_png__WEBPACK_IMPORTED_MODULE_3__ + '> +58 241 8675869'
    const div2a = document.createElement('div')
    div2a.append(imgmapa)
    div2a.append(p1)
    div2a.append(p2)
    //div2b
    const parrafo = document.createElement('p')
    parrafo.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    const firmaimg = new Image()
    firmaimg.src = _assets_images_signature_png__WEBPACK_IMPORTED_MODULE_4__
    firmaimg.className = 'signature'
    const div2b = document.createElement('div')
    div2b.append(parrafo)
    div2b.append(firmaimg)
    //union
    const uniondiv = document.createElement('div')
    uniondiv.append(div2a)
    uniondiv.append(div2b)
    uniondiv.className = 'uniondiv'
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.append(uniondiv)
}



/***/ }),

/***/ "./src/esqueleto.js":
/*!**************************!*\
  !*** ./src/esqueleto.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$base": () => (/* binding */ $base),
/* harmony export */   "$footer": () => (/* binding */ $footer),
/* harmony export */   "$header": () => (/* binding */ $header),
/* harmony export */   "$maindiv": () => (/* binding */ $maindiv),
/* harmony export */   "generaresqueleto": () => (/* binding */ generaresqueleto)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/github.png */ "./src/assets/images/github.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacto */ "./src/contacto.js");






const $base = document.querySelector('body')
const $header = document.createElement('div')
$header.classList.add('header')
const $maindiv = document.createElement('div')
const $footer = document.createElement('div')
$footer.classList.add('footer')


function generaresqueleto(){
    const homeheader = document.createElement('button')
        homeheader.innerText = 'Home'
        homeheader.addEventListener('click', (e)=>{
            ;(0,_home__WEBPACK_IMPORTED_MODULE_2__.home)()
        })
    const menuheader = document.createElement('button')
        menuheader.innerText = 'Menu'
        menuheader.addEventListener('click', (e)=>{
            ;(0,_menu__WEBPACK_IMPORTED_MODULE_3__.menu)()
        })
    const contactoheader = document.createElement('button')
        contactoheader.innerText = 'Contacto'
        contactoheader.addEventListener('click', (e)=>{
            ;(0,_contacto__WEBPACK_IMPORTED_MODULE_4__.contacto)()
        })
    $header.append(homeheader)
    $header.append(menuheader)
    $header.append(contactoheader)
    $base.append($header)
    $base.append($maindiv)
    const p = document.createElement('p')
        p.innerHTML = "Hecho con amor por Juancho2706 <a href='https://github.com/Juancho2706'><img src="+_assets_images_github_png__WEBPACK_IMPORTED_MODULE_1__+"></a>"
    $footer.append(p)
    $base.append($footer)
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _esqueleto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esqueleto */ "./src/esqueleto.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _assets_images_sushi1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/sushi1.jpg */ "./src/assets/images/sushi1.jpg");




function home(){
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.className = 'mainhome'
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.innerHTML = ''
    //div 1
    const div1 = document.createElement('div')
        div1.classList.add('div1')
    const h1 = document.createElement('h1')
        h1.innerText = 'FabSushi'
    const p = document.createElement('p')
        p.innerHTML = 'Nuestros productos son 100%<br>veganos, vegetarianos y fabulosos,<br>toda nuestra carta aprobada por<br>Nicky Minaj en persona.'
    const button = document.createElement('button')
        button.innerText = 'Ver Menu'
        button.classList.add('button-30')
    button.addEventListener('click', (e)=>{
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)()
    })
    div1.append(h1)
    div1.append(p)
    div1.append(button)
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.append(div1)

    //div 2
    const div2 = document.createElement('div')
        div2.classList.add('div2')
    const imagenhome = new Image()
    imagenhome.src = _assets_images_sushi1_jpg__WEBPACK_IMPORTED_MODULE_2__
    imagenhome.classList.add('imagenhome')
    div2.append(imagenhome)
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.append(div2)
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _esqueleto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esqueleto */ "./src/esqueleto.js");
/* harmony import */ var _assets_images_sushi2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/sushi2.jpg */ "./src/assets/images/sushi2.jpg");
/* harmony import */ var _assets_images_sushi3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/sushi3.jpg */ "./src/assets/images/sushi3.jpg");
/* harmony import */ var _assets_images_sushi4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/sushi4.jpg */ "./src/assets/images/sushi4.jpg");





const imagenesmenu = {
    '0': _assets_images_sushi2_jpg__WEBPACK_IMPORTED_MODULE_1__,
    '1': _assets_images_sushi3_jpg__WEBPACK_IMPORTED_MODULE_2__,
    '2': _assets_images_sushi4_jpg__WEBPACK_IMPORTED_MODULE_3__
};

function colocarinfo(dish,lugar,string1,string2,string3){
    dish.className = 'dish'
    const imagendish1 = document.createElement('img')
    imagendish1.src = imagenesmenu[lugar]
const pa = document.createElement('p')
    pa.innerText = string1
const pb = document.createElement('p')
    pb.innerHTML = string2
const button = document.createElement('button')
    button.innerText = string3
    button.classList.add('button-30')
    dish.append(imagendish1)
    dish.append(pa)
    dish.append(pb)
    dish.append(button)
}


function menu(){
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.className = 'mainmenu'
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.innerHTML = ''
    //div1
    const titulo = document.createElement('h3')
        titulo.innerText = 'FabSushi'
    const p = document.createElement('p')
        p.innerText = 'Aprobado por Obama'
    const div1 = document.createElement('div')
    div1.append(titulo)
    div1.append(p)
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.append(div1)
    //div2
    const dish1 = document.createElement('div')
        let string1 = 'Tempura Kardashian'
        let string2 = 'Con pescado alimentado de<br>puras hierdas del olimpo.'
        let string3 = '200$'
        colocarinfo(dish1,0,string1,string2,string3)
    const dish2 = document.createElement('div')
        string1 = 'Sushi Sifrino'
        string2 = 'Hecho exclusivamente en<br>Valencia, para sifrinos.'
        string3 = '300$'
        colocarinfo(dish2,1,string1,string2,string3)
    const dish3 = document.createElement('div')
        string1 = 'Roll 50K'
        string2 = 'Cada molecula de este roll es<br>hecho con oro real.'
        string3 = '666$'
        colocarinfo(dish3,2,string1,string2,string3)
    const div2 = document.createElement('div')
        div2.className = 'dishes'
    div2.append(dish1)
    div2.append(dish2)
    div2.append(dish3)
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.append(div2)
}



/***/ }),

/***/ "./src/assets/fonts/Inter.ttf":
/*!************************************!*\
  !*** ./src/assets/fonts/Inter.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aadb65ac45347ff46699.ttf";

/***/ }),

/***/ "./src/assets/fonts/William.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/William.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96a7815486fcef7825de.ttf";

/***/ }),

/***/ "./src/assets/images/github.png":
/*!**************************************!*\
  !*** ./src/assets/images/github.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9e9541d53322c1a30f4.png";

/***/ }),

/***/ "./src/assets/images/igicon.png":
/*!**************************************!*\
  !*** ./src/assets/images/igicon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9a2c06e0e9f6a66075f.png";

/***/ }),

/***/ "./src/assets/images/mapa.png":
/*!************************************!*\
  !*** ./src/assets/images/mapa.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20092f5686f0eee9c089.png";

/***/ }),

/***/ "./src/assets/images/signature.png":
/*!*****************************************!*\
  !*** ./src/assets/images/signature.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2404440e541e83e0f57.png";

/***/ }),

/***/ "./src/assets/images/sushi1.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/sushi1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4384ec9e72af8bae2a9.jpg";

/***/ }),

/***/ "./src/assets/images/sushi2.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/sushi2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a91bfb456b5671411675.jpg";

/***/ }),

/***/ "./src/assets/images/sushi3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/sushi3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c925149e2546d8b87a0.jpg";

/***/ }),

/***/ "./src/assets/images/sushi4.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/sushi4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2671c333a316c9b3e184.jpg";

/***/ }),

/***/ "./src/assets/images/whatsicon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/whatsicon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a87fb738aa27c3772cad.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"esqueleto": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/esqueleto.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9jb250YWN0by5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvZXNxdWVsZXRvLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnRlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9XaWxsaWFtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSAgeyBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJ3aWxsaWFtJzsgXFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODV2aCA1dmg7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQTMwNztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHZoIDEwdmggMTB2aDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXI+YnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ4QzA2O1xcclxcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcclxcbn1cXHJcXG4ubWFpbmhvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4KDUwdmgsNTAlKW1heCg1MHZoLDUwJSk7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm1haW5tZW51e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubWFpbm1lbnU+ZGl2PmgzLHB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRpdjF7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweCAxMDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG4gICAgLmRpdjE+aDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDdlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGl2MT5we1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgfVxcclxcbi5kaXYye1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbmgxLGgze1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYndpbGxpYW0nOyBcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcXHJcXG59XFxyXFxuICAgIC5mb290ZXI+cHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyPnA+YT5pbWd7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4uaW1hZ2VuaG9tZXtcXHJcXG4gICAgaGVpZ2h0OiA1NzdweDtcXHJcXG59XFxyXFxuLmRpc2h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzljOWMyYjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZGlzaD5pbWd7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxufVxcclxcbi5kaXNoZXN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTAlO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5tYWluY29udGFjdG97XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcbi51bmlvbmRpdntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDUwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi51bmlvbmRpdj5kaXY+aW1ne1xcclxcbiAgICBoZWlnaHQ6IDQ3MHB4O1xcclxcbn1cXHJcXG4udW5pb25kaXY+ZGl2PnB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcbi5kaXZ0aXR1bG97XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZXtcXHJcXG4gICAgaGVpZ2h0OiAyNzBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4vKiBGQU5DWSBDU1MgKi9cXHJcXG4uYnV0dG9uLTMwIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgscmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjMzYzOTVBO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIixtb25vc3BhY2U7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyx0cmFuc2Zvcm0gLjE1cztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93LHRyYW5zZm9ybTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiAjRDZENkU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDRweCA4cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6YWN0aXZlIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAzcHggN3B4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsNENBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNENBQXNDO0FBQzFDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixpREFBaUQ7SUFDakQsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0QjtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQSxjQUFjO0FBQ2Q7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdHQUF3RztFQUN4RyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUlBQXFJO0FBQ3ZJOztBQUVBO0VBQ0UsMEdBQTBHO0VBQzFHLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFiaW50ZXInO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvSW50ZXIudHRmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2UgIHsgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFid2lsbGlhbSc7IFxcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvV2lsbGlhbS50dGYnKTtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODV2aCA1dmg7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQTMwNztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHZoIDEwdmggMTB2aDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXI+YnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ4QzA2O1xcclxcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcclxcbn1cXHJcXG4ubWFpbmhvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4KDUwdmgsNTAlKW1heCg1MHZoLDUwJSk7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm1haW5tZW51e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubWFpbm1lbnU+ZGl2PmgzLHB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRpdjF7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweCAxMDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG4gICAgLmRpdjE+aDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDdlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGl2MT5we1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgfVxcclxcbi5kaXYye1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbmgxLGgze1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYndpbGxpYW0nOyBcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcXHJcXG59XFxyXFxuICAgIC5mb290ZXI+cHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyPnA+YT5pbWd7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4uaW1hZ2VuaG9tZXtcXHJcXG4gICAgaGVpZ2h0OiA1NzdweDtcXHJcXG59XFxyXFxuLmRpc2h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzljOWMyYjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZGlzaD5pbWd7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxufVxcclxcbi5kaXNoZXN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTAlO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5tYWluY29udGFjdG97XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcbi51bmlvbmRpdntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDUwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi51bmlvbmRpdj5kaXY+aW1ne1xcclxcbiAgICBoZWlnaHQ6IDQ3MHB4O1xcclxcbn1cXHJcXG4udW5pb25kaXY+ZGl2PnB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcbi5kaXZ0aXR1bG97XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZXtcXHJcXG4gICAgaGVpZ2h0OiAyNzBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4vKiBGQU5DWSBDU1MgKi9cXHJcXG4uYnV0dG9uLTMwIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgscmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjMzYzOTVBO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIixtb25vc3BhY2U7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyx0cmFuc2Zvcm0gLjE1cztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93LHRyYW5zZm9ybTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiAjRDZENkU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDRweCA4cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6YWN0aXZlIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAzcHggN3B4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyAkbWFpbmRpdiB9IGZyb20gXCIuL2VzcXVlbGV0b1wiXHJcbmltcG9ydCBtYXBhIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwYS5wbmdcIlxyXG5pbXBvcnQgaWdpY29uIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvaWdpY29uLnBuZ1wiXHJcbmltcG9ydCB3aGF0c2ljb24gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy93aGF0c2ljb24ucG5nXCJcclxuaW1wb3J0IGZpcm1hIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvc2lnbmF0dXJlLnBuZ1wiXHJcblxyXG5mdW5jdGlvbiBjb250YWN0bygpe1xyXG4gICAgJG1haW5kaXYuY2xhc3NOYW1lID0gJ21haW5jb250YWN0bydcclxuICAgICRtYWluZGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAgLy9kaXYxXHJcbiAgICBjb25zdCB0aXR1bG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICB0aXR1bG8uaW5uZXJUZXh0ID0gJ0ZhYlN1c2hpJ1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcC5pbm5lclRleHQgPSAnQXByb2JhZG8gcG9yIE9iYW1hJ1xyXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYxLmFwcGVuZCh0aXR1bG8pXHJcbiAgICBkaXYxLmFwcGVuZChwKVxyXG4gICAgZGl2MS5jbGFzc05hbWUgPSAnZGl2dGl0dWxvJ1xyXG4gICAgJG1haW5kaXYuYXBwZW5kKGRpdjEpXHJcbiAgICAvL2RpdjJhXHJcbiAgICBjb25zdCBpbWdtYXBhID0gbmV3IEltYWdlKClcclxuICAgIGltZ21hcGEuc3JjID0gbWFwYVxyXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAxLmlubmVySFRNTCA9ICc8aW1nIHNyYz0nICsgaWdpY29uICsgJz4gQGxhc2NhcmFqaXRhc3N1c2hpJ1xyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAyLmlubmVySFRNTCA9ICc8aW1nIHNyYz0nICsgd2hhdHNpY29uICsgJz4gKzU4IDI0MSA4Njc1ODY5J1xyXG4gICAgY29uc3QgZGl2MmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2MmEuYXBwZW5kKGltZ21hcGEpXHJcbiAgICBkaXYyYS5hcHBlbmQocDEpXHJcbiAgICBkaXYyYS5hcHBlbmQocDIpXHJcbiAgICAvL2RpdjJiXHJcbiAgICBjb25zdCBwYXJyYWZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYXJyYWZvLmlubmVySFRNTCA9ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS4nXHJcbiAgICBjb25zdCBmaXJtYWltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICBmaXJtYWltZy5zcmMgPSBmaXJtYVxyXG4gICAgZmlybWFpbWcuY2xhc3NOYW1lID0gJ3NpZ25hdHVyZSdcclxuICAgIGNvbnN0IGRpdjJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdjJiLmFwcGVuZChwYXJyYWZvKVxyXG4gICAgZGl2MmIuYXBwZW5kKGZpcm1haW1nKVxyXG4gICAgLy91bmlvblxyXG4gICAgY29uc3QgdW5pb25kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdW5pb25kaXYuYXBwZW5kKGRpdjJhKVxyXG4gICAgdW5pb25kaXYuYXBwZW5kKGRpdjJiKVxyXG4gICAgdW5pb25kaXYuY2xhc3NOYW1lID0gJ3VuaW9uZGl2J1xyXG4gICAgJG1haW5kaXYuYXBwZW5kKHVuaW9uZGl2KVxyXG59XHJcblxyXG5leHBvcnQge2NvbnRhY3RvfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2l0aWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnBuZydcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgeyBjb250YWN0byB9IGZyb20gJy4vY29udGFjdG8nO1xyXG5cclxuY29uc3QgJGJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuY29uc3QgJGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuY29uc3QgJG1haW5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCAkZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuJGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXJlc3F1ZWxldG8oKXtcclxuICAgIGNvbnN0IGhvbWVoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGhvbWVoZWFkZXIuaW5uZXJUZXh0ID0gJ0hvbWUnXHJcbiAgICAgICAgaG9tZWhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgICAgICBob21lKClcclxuICAgICAgICB9KVxyXG4gICAgY29uc3QgbWVudWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgbWVudWhlYWRlci5pbm5lclRleHQgPSAnTWVudSdcclxuICAgICAgICBtZW51aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIG1lbnUoKVxyXG4gICAgICAgIH0pXHJcbiAgICBjb25zdCBjb250YWN0b2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY29udGFjdG9oZWFkZXIuaW5uZXJUZXh0ID0gJ0NvbnRhY3RvJ1xyXG4gICAgICAgIGNvbnRhY3RvaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnRhY3RvKClcclxuICAgICAgICB9KVxyXG4gICAgJGhlYWRlci5hcHBlbmQoaG9tZWhlYWRlcilcclxuICAgICRoZWFkZXIuYXBwZW5kKG1lbnVoZWFkZXIpXHJcbiAgICAkaGVhZGVyLmFwcGVuZChjb250YWN0b2hlYWRlcilcclxuICAgICRiYXNlLmFwcGVuZCgkaGVhZGVyKVxyXG4gICAgJGJhc2UuYXBwZW5kKCRtYWluZGl2KVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJIZWNobyBjb24gYW1vciBwb3IgSnVhbmNobzI3MDYgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0p1YW5jaG8yNzA2Jz48aW1nIHNyYz1cIitnaXRpY29uK1wiPjwvYT5cIlxyXG4gICAgJGZvb3Rlci5hcHBlbmQocClcclxuICAgICRiYXNlLmFwcGVuZCgkZm9vdGVyKVxyXG59XHJcblxyXG5leHBvcnQge2dlbmVyYXJlc3F1ZWxldG8sJGJhc2UsJGZvb3RlciwkbWFpbmRpdiwkaGVhZGVyfSIsImltcG9ydCB7ICRoZWFkZXIsJG1haW5kaXYgfSBmcm9tIFwiLi9lc3F1ZWxldG9cIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGltYWdlYmFzZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGkxLmpwZydcclxuXHJcbmZ1bmN0aW9uIGhvbWUoKXtcclxuICAgICRtYWluZGl2LmNsYXNzTmFtZSA9ICdtYWluaG9tZSdcclxuICAgICRtYWluZGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAvL2RpdiAxXHJcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2RpdjEnKVxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgaDEuaW5uZXJUZXh0ID0gJ0ZhYlN1c2hpJ1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gJ051ZXN0cm9zIHByb2R1Y3RvcyBzb24gMTAwJTxicj52ZWdhbm9zLCB2ZWdldGFyaWFub3MgeSBmYWJ1bG9zb3MsPGJyPnRvZGEgbnVlc3RyYSBjYXJ0YSBhcHJvYmFkYSBwb3I8YnI+Tmlja3kgTWluYWogZW4gcGVyc29uYS4nXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnVmVyIE1lbnUnXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0zMCcpXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBtZW51KClcclxuICAgIH0pXHJcbiAgICBkaXYxLmFwcGVuZChoMSlcclxuICAgIGRpdjEuYXBwZW5kKHApXHJcbiAgICBkaXYxLmFwcGVuZChidXR0b24pXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MSlcclxuXHJcbiAgICAvL2RpdiAyXHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2RpdjInKVxyXG4gICAgY29uc3QgaW1hZ2VuaG9tZSA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWFnZW5ob21lLnNyYyA9IGltYWdlYmFzZVxyXG4gICAgaW1hZ2VuaG9tZS5jbGFzc0xpc3QuYWRkKCdpbWFnZW5ob21lJylcclxuICAgIGRpdjIuYXBwZW5kKGltYWdlbmhvbWUpXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MilcclxufVxyXG5cclxuZXhwb3J0IHtob21lfSIsImltcG9ydCB7ICRtYWluZGl2IH0gZnJvbSBcIi4vZXNxdWVsZXRvXCJcclxuaW1wb3J0IHN1c2hpMiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGkyLmpwZydcclxuaW1wb3J0IHN1c2hpMyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGkzLmpwZydcclxuaW1wb3J0IHN1c2hpNCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGk0LmpwZydcclxuXHJcbmNvbnN0IGltYWdlbmVzbWVudSA9IHtcclxuICAgICcwJzogc3VzaGkyLFxyXG4gICAgJzEnOiBzdXNoaTMsXHJcbiAgICAnMic6IHN1c2hpNFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29sb2NhcmluZm8oZGlzaCxsdWdhcixzdHJpbmcxLHN0cmluZzIsc3RyaW5nMyl7XHJcbiAgICBkaXNoLmNsYXNzTmFtZSA9ICdkaXNoJ1xyXG4gICAgY29uc3QgaW1hZ2VuZGlzaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgaW1hZ2VuZGlzaDEuc3JjID0gaW1hZ2VuZXNtZW51W2x1Z2FyXVxyXG5jb25zdCBwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGEuaW5uZXJUZXh0ID0gc3RyaW5nMVxyXG5jb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGIuaW5uZXJIVE1MID0gc3RyaW5nMlxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHN0cmluZzNcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tMzAnKVxyXG4gICAgZGlzaC5hcHBlbmQoaW1hZ2VuZGlzaDEpXHJcbiAgICBkaXNoLmFwcGVuZChwYSlcclxuICAgIGRpc2guYXBwZW5kKHBiKVxyXG4gICAgZGlzaC5hcHBlbmQoYnV0dG9uKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgJG1haW5kaXYuY2xhc3NOYW1lID0gJ21haW5tZW51J1xyXG4gICAgJG1haW5kaXYuaW5uZXJIVE1MID0gJydcclxuICAgIC8vZGl2MVxyXG4gICAgY29uc3QgdGl0dWxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHRpdHVsby5pbm5lclRleHQgPSAnRmFiU3VzaGknXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcC5pbm5lclRleHQgPSAnQXByb2JhZG8gcG9yIE9iYW1hJ1xyXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYxLmFwcGVuZCh0aXR1bG8pXHJcbiAgICBkaXYxLmFwcGVuZChwKVxyXG4gICAgJG1haW5kaXYuYXBwZW5kKGRpdjEpXHJcbiAgICAvL2RpdjJcclxuICAgIGNvbnN0IGRpc2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZXQgc3RyaW5nMSA9ICdUZW1wdXJhIEthcmRhc2hpYW4nXHJcbiAgICAgICAgbGV0IHN0cmluZzIgPSAnQ29uIHBlc2NhZG8gYWxpbWVudGFkbyBkZTxicj5wdXJhcyBoaWVyZGFzIGRlbCBvbGltcG8uJ1xyXG4gICAgICAgIGxldCBzdHJpbmczID0gJzIwMCQnXHJcbiAgICAgICAgY29sb2NhcmluZm8oZGlzaDEsMCxzdHJpbmcxLHN0cmluZzIsc3RyaW5nMylcclxuICAgIGNvbnN0IGRpc2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdHJpbmcxID0gJ1N1c2hpIFNpZnJpbm8nXHJcbiAgICAgICAgc3RyaW5nMiA9ICdIZWNobyBleGNsdXNpdmFtZW50ZSBlbjxicj5WYWxlbmNpYSwgcGFyYSBzaWZyaW5vcy4nXHJcbiAgICAgICAgc3RyaW5nMyA9ICczMDAkJ1xyXG4gICAgICAgIGNvbG9jYXJpbmZvKGRpc2gyLDEsc3RyaW5nMSxzdHJpbmcyLHN0cmluZzMpXHJcbiAgICBjb25zdCBkaXNoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgc3RyaW5nMSA9ICdSb2xsIDUwSydcclxuICAgICAgICBzdHJpbmcyID0gJ0NhZGEgbW9sZWN1bGEgZGUgZXN0ZSByb2xsIGVzPGJyPmhlY2hvIGNvbiBvcm8gcmVhbC4nXHJcbiAgICAgICAgc3RyaW5nMyA9ICc2NjYkJ1xyXG4gICAgICAgIGNvbG9jYXJpbmZvKGRpc2gzLDIsc3RyaW5nMSxzdHJpbmcyLHN0cmluZzMpXHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYyLmNsYXNzTmFtZSA9ICdkaXNoZXMnXHJcbiAgICBkaXYyLmFwcGVuZChkaXNoMSlcclxuICAgIGRpdjIuYXBwZW5kKGRpc2gyKVxyXG4gICAgZGl2Mi5hcHBlbmQoZGlzaDMpXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MilcclxufVxyXG5cclxuZXhwb3J0IHttZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZXNxdWVsZXRvXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2VzcXVlbGV0by5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==