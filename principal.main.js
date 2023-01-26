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
/******/ 			"principal": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esqueleto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esqueleto.js */ "./src/esqueleto.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



(0,_esqueleto_js__WEBPACK_IMPORTED_MODULE_0__.generaresqueleto)()
;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNmO0FBQ2pDO0FBQ0EsK0RBQWdCO0FBQ2hCLCtDQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvY29udGFjdG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL2VzcXVlbGV0by5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9wcmluY2lwYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0ludGVyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL1dpbGxpYW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYmludGVyJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlICB7IFxcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYndpbGxpYW0nOyBcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYmludGVyJztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NXZoIDV2aDtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFBMzA3O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdmggMTB2aCAxMHZoO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlcj5idXR0b257XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDhDMDY7XFxyXFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XFxyXFxufVxcclxcbi5tYWluaG9tZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgoNTB2aCw1MCUpbWF4KDUwdmgsNTAlKTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG4ubWFpbm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tYWlubWVudT5kaXY+aDMscHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGl2MXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcbiAgICAuZGl2MT5oMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xcclxcbiAgICB9XFxyXFxuICAgIC5kaXYxPnB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxuLmRpdjJ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuaDEsaDN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFid2lsbGlhbSc7IFxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xcclxcbn1cXHJcXG4gICAgLmZvb3Rlcj5we1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXI+cD5hPmltZ3tcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbi5pbWFnZW5ob21le1xcclxcbiAgICBoZWlnaHQ6IDU3N3B4O1xcclxcbn1cXHJcXG4uZGlzaHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljOWM5YzJiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXNoPmltZ3tcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuLmRpc2hlc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MCU7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLm1haW5jb250YWN0b3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG59XFxyXFxuLnVuaW9uZGl2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogNTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnVuaW9uZGl2PmRpdj5pbWd7XFxyXFxuICAgIGhlaWdodDogNDcwcHg7XFxyXFxufVxcclxcbi51bmlvbmRpdj5kaXY+cHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJle1xcclxcbiAgICBoZWlnaHQ6IDI3MHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi8qIEZBTkNZIENTUyAqL1xcclxcbi5idXR0b24tMzAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZEO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCxyZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICMzNjM5NUE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSmV0QnJhaW5zIE1vbm9cXFwiLG1vbm9zcGFjZTtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzLHRyYW5zZm9ybSAuMTVzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csdHJhbnNmb3JtO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAwIDAgMS41cHggaW5zZXQsIHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI0Q2RDZFNyAwIC0zcHggMCBpbnNldDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDphY3RpdmUge1xcclxcbiAgYm94LXNoYWRvdzogI0Q2RDZFNyAwIDNweCA3cHggaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBb0M7QUFDeEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBc0M7QUFDMUM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsU0FBUztJQUNULHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBLGNBQWM7QUFDZDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0dBQXdHO0VBQ3hHLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxSUFBcUk7QUFDdkk7O0FBRUE7RUFDRSwwR0FBMEc7RUFDMUcsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9JbnRlci50dGYnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSAgeyBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJ3aWxsaWFtJzsgXFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9XaWxsaWFtLnR0ZicpO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYmludGVyJztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NXZoIDV2aDtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFBMzA3O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdmggMTB2aCAxMHZoO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlcj5idXR0b257XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDhDMDY7XFxyXFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XFxyXFxufVxcclxcbi5tYWluaG9tZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgoNTB2aCw1MCUpbWF4KDUwdmgsNTAlKTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG4ubWFpbm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tYWlubWVudT5kaXY+aDMscHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGl2MXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcbiAgICAuZGl2MT5oMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xcclxcbiAgICB9XFxyXFxuICAgIC5kaXYxPnB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxuLmRpdjJ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuaDEsaDN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFid2lsbGlhbSc7IFxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xcclxcbn1cXHJcXG4gICAgLmZvb3Rlcj5we1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXI+cD5hPmltZ3tcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbi5pbWFnZW5ob21le1xcclxcbiAgICBoZWlnaHQ6IDU3N3B4O1xcclxcbn1cXHJcXG4uZGlzaHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljOWM5YzJiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXNoPmltZ3tcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuLmRpc2hlc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MCU7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLm1haW5jb250YWN0b3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG59XFxyXFxuLnVuaW9uZGl2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogNTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnVuaW9uZGl2PmRpdj5pbWd7XFxyXFxuICAgIGhlaWdodDogNDcwcHg7XFxyXFxufVxcclxcbi51bmlvbmRpdj5kaXY+cHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJle1xcclxcbiAgICBoZWlnaHQ6IDI3MHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi8qIEZBTkNZIENTUyAqL1xcclxcbi5idXR0b24tMzAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZEO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCxyZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICMzNjM5NUE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSmV0QnJhaW5zIE1vbm9cXFwiLG1vbm9zcGFjZTtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzLHRyYW5zZm9ybSAuMTVzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csdHJhbnNmb3JtO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAwIDAgMS41cHggaW5zZXQsIHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI0Q2RDZFNyAwIC0zcHggMCBpbnNldDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDphY3RpdmUge1xcclxcbiAgYm94LXNoYWRvdzogI0Q2RDZFNyAwIDNweCA3cHggaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7ICRtYWluZGl2IH0gZnJvbSBcIi4vZXNxdWVsZXRvXCJcclxuaW1wb3J0IG1hcGEgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBhLnBuZ1wiXHJcbmltcG9ydCBpZ2ljb24gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9pZ2ljb24ucG5nXCJcclxuaW1wb3J0IHdoYXRzaWNvbiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3doYXRzaWNvbi5wbmdcIlxyXG5pbXBvcnQgZmlybWEgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9zaWduYXR1cmUucG5nXCJcclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RvKCl7XHJcbiAgICAkbWFpbmRpdi5jbGFzc05hbWUgPSAnbWFpbmNvbnRhY3RvJ1xyXG4gICAgJG1haW5kaXYuaW5uZXJIVE1MID0gJydcclxuICAgICAvL2RpdjFcclxuICAgIGNvbnN0IHRpdHVsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgIHRpdHVsby5pbm5lclRleHQgPSAnRmFiU3VzaGknXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwLmlubmVyVGV4dCA9ICdBcHJvYmFkbyBwb3IgT2JhbWEnXHJcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdjEuYXBwZW5kKHRpdHVsbylcclxuICAgIGRpdjEuYXBwZW5kKHApXHJcbiAgICBkaXYxLmNsYXNzTmFtZSA9ICdkaXZ0aXR1bG8nXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MSlcclxuICAgIC8vZGl2MmFcclxuICAgIGNvbnN0IGltZ21hcGEgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1nbWFwYS5zcmMgPSBtYXBhXHJcbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcDEuaW5uZXJIVE1MID0gJzxpbWcgc3JjPScgKyBpZ2ljb24gKyAnPiBAbGFzY2FyYWppdGFzc3VzaGknXHJcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcDIuaW5uZXJIVE1MID0gJzxpbWcgc3JjPScgKyB3aGF0c2ljb24gKyAnPiArNTggMjQxIDg2NzU4NjknXHJcbiAgICBjb25zdCBkaXYyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYyYS5hcHBlbmQoaW1nbWFwYSlcclxuICAgIGRpdjJhLmFwcGVuZChwMSlcclxuICAgIGRpdjJhLmFwcGVuZChwMilcclxuICAgIC8vZGl2MmJcclxuICAgIGNvbnN0IHBhcnJhZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcnJhZm8uaW5uZXJIVE1MID0gJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeXMgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLidcclxuICAgIGNvbnN0IGZpcm1haW1nID0gbmV3IEltYWdlKClcclxuICAgIGZpcm1haW1nLnNyYyA9IGZpcm1hXHJcbiAgICBmaXJtYWltZy5jbGFzc05hbWUgPSAnc2lnbmF0dXJlJ1xyXG4gICAgY29uc3QgZGl2MmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2MmIuYXBwZW5kKHBhcnJhZm8pXHJcbiAgICBkaXYyYi5hcHBlbmQoZmlybWFpbWcpXHJcbiAgICAvL3VuaW9uXHJcbiAgICBjb25zdCB1bmlvbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB1bmlvbmRpdi5hcHBlbmQoZGl2MmEpXHJcbiAgICB1bmlvbmRpdi5hcHBlbmQoZGl2MmIpXHJcbiAgICB1bmlvbmRpdi5jbGFzc05hbWUgPSAndW5pb25kaXYnXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQodW5pb25kaXYpXHJcbn1cclxuXHJcbmV4cG9ydCB7Y29udGFjdG99IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBnaXRpY29uIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9naXRodWIucG5nJ1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IGNvbnRhY3RvIH0gZnJvbSAnLi9jb250YWN0byc7XHJcblxyXG5jb25zdCAkYmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5jb25zdCAkaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuJGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxyXG5jb25zdCAkbWFpbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0ICRmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4kZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcblxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhcmVzcXVlbGV0bygpe1xyXG4gICAgY29uc3QgaG9tZWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgaG9tZWhlYWRlci5pbm5lclRleHQgPSAnSG9tZSdcclxuICAgICAgICBob21laGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGhvbWUoKVxyXG4gICAgICAgIH0pXHJcbiAgICBjb25zdCBtZW51aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBtZW51aGVhZGVyLmlubmVyVGV4dCA9ICdNZW51J1xyXG4gICAgICAgIG1lbnVoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgbWVudSgpXHJcbiAgICAgICAgfSlcclxuICAgIGNvbnN0IGNvbnRhY3RvaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjb250YWN0b2hlYWRlci5pbm5lclRleHQgPSAnQ29udGFjdG8nXHJcbiAgICAgICAgY29udGFjdG9oZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgY29udGFjdG8oKVxyXG4gICAgICAgIH0pXHJcbiAgICAkaGVhZGVyLmFwcGVuZChob21laGVhZGVyKVxyXG4gICAgJGhlYWRlci5hcHBlbmQobWVudWhlYWRlcilcclxuICAgICRoZWFkZXIuYXBwZW5kKGNvbnRhY3RvaGVhZGVyKVxyXG4gICAgJGJhc2UuYXBwZW5kKCRoZWFkZXIpXHJcbiAgICAkYmFzZS5hcHBlbmQoJG1haW5kaXYpXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcC5pbm5lckhUTUwgPSBcIkhlY2hvIGNvbiBhbW9yIHBvciBKdWFuY2hvMjcwNiA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vSnVhbmNobzI3MDYnPjxpbWcgc3JjPVwiK2dpdGljb24rXCI+PC9hPlwiXHJcbiAgICAkZm9vdGVyLmFwcGVuZChwKVxyXG4gICAgJGJhc2UuYXBwZW5kKCRmb290ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2VuZXJhcmVzcXVlbGV0bywkYmFzZSwkZm9vdGVyLCRtYWluZGl2LCRoZWFkZXJ9IiwiaW1wb3J0IHsgJGhlYWRlciwkbWFpbmRpdiB9IGZyb20gXCIuL2VzcXVlbGV0b1wiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgaW1hZ2ViYXNlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTEuanBnJ1xyXG5cclxuZnVuY3Rpb24gaG9tZSgpe1xyXG4gICAgJG1haW5kaXYuY2xhc3NOYW1lID0gJ21haW5ob21lJ1xyXG4gICAgJG1haW5kaXYuaW5uZXJIVE1MID0gJydcclxuICAgIC8vZGl2IDFcclxuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnZGl2MScpXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBoMS5pbm5lclRleHQgPSAnRmFiU3VzaGknXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcC5pbm5lckhUTUwgPSAnTnVlc3Ryb3MgcHJvZHVjdG9zIHNvbiAxMDAlPGJyPnZlZ2Fub3MsIHZlZ2V0YXJpYW5vcyB5IGZhYnVsb3Nvcyw8YnI+dG9kYSBudWVzdHJhIGNhcnRhIGFwcm9iYWRhIHBvcjxicj5OaWNreSBNaW5haiBlbiBwZXJzb25hLidcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdWZXIgTWVudSdcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTMwJylcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuICAgIGRpdjEuYXBwZW5kKGgxKVxyXG4gICAgZGl2MS5hcHBlbmQocClcclxuICAgIGRpdjEuYXBwZW5kKGJ1dHRvbilcclxuICAgICRtYWluZGl2LmFwcGVuZChkaXYxKVxyXG5cclxuICAgIC8vZGl2IDJcclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnZGl2MicpXHJcbiAgICBjb25zdCBpbWFnZW5ob21lID0gbmV3IEltYWdlKClcclxuICAgIGltYWdlbmhvbWUuc3JjID0gaW1hZ2ViYXNlXHJcbiAgICBpbWFnZW5ob21lLmNsYXNzTGlzdC5hZGQoJ2ltYWdlbmhvbWUnKVxyXG4gICAgZGl2Mi5hcHBlbmQoaW1hZ2VuaG9tZSlcclxuICAgICRtYWluZGl2LmFwcGVuZChkaXYyKVxyXG59XHJcblxyXG5leHBvcnQge2hvbWV9IiwiaW1wb3J0IHsgJG1haW5kaXYgfSBmcm9tIFwiLi9lc3F1ZWxldG9cIlxyXG5pbXBvcnQgc3VzaGkyIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTIuanBnJ1xyXG5pbXBvcnQgc3VzaGkzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTMuanBnJ1xyXG5pbXBvcnQgc3VzaGk0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTQuanBnJ1xyXG5cclxuY29uc3QgaW1hZ2VuZXNtZW51ID0ge1xyXG4gICAgJzAnOiBzdXNoaTIsXHJcbiAgICAnMSc6IHN1c2hpMyxcclxuICAgICcyJzogc3VzaGk0XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb2xvY2FyaW5mbyhkaXNoLGx1Z2FyLHN0cmluZzEsc3RyaW5nMixzdHJpbmczKXtcclxuICAgIGRpc2guY2xhc3NOYW1lID0gJ2Rpc2gnXHJcbiAgICBjb25zdCBpbWFnZW5kaXNoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZW5kaXNoMS5zcmMgPSBpbWFnZW5lc21lbnVbbHVnYXJdXHJcbmNvbnN0IHBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYS5pbm5lclRleHQgPSBzdHJpbmcxXHJcbmNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYi5pbm5lckhUTUwgPSBzdHJpbmcyXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gc3RyaW5nM1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0zMCcpXHJcbiAgICBkaXNoLmFwcGVuZChpbWFnZW5kaXNoMSlcclxuICAgIGRpc2guYXBwZW5kKHBhKVxyXG4gICAgZGlzaC5hcHBlbmQocGIpXHJcbiAgICBkaXNoLmFwcGVuZChidXR0b24pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51KCl7XHJcbiAgICAkbWFpbmRpdi5jbGFzc05hbWUgPSAnbWFpbm1lbnUnXHJcbiAgICAkbWFpbmRpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgLy9kaXYxXHJcbiAgICBjb25zdCB0aXR1bG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgdGl0dWxvLmlubmVyVGV4dCA9ICdGYWJTdXNoaSdcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwLmlubmVyVGV4dCA9ICdBcHJvYmFkbyBwb3IgT2JhbWEnXHJcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdjEuYXBwZW5kKHRpdHVsbylcclxuICAgIGRpdjEuYXBwZW5kKHApXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MSlcclxuICAgIC8vZGl2MlxyXG4gICAgY29uc3QgZGlzaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxldCBzdHJpbmcxID0gJ1RlbXB1cmEgS2FyZGFzaGlhbidcclxuICAgICAgICBsZXQgc3RyaW5nMiA9ICdDb24gcGVzY2FkbyBhbGltZW50YWRvIGRlPGJyPnB1cmFzIGhpZXJkYXMgZGVsIG9saW1wby4nXHJcbiAgICAgICAgbGV0IHN0cmluZzMgPSAnMjAwJCdcclxuICAgICAgICBjb2xvY2FyaW5mbyhkaXNoMSwwLHN0cmluZzEsc3RyaW5nMixzdHJpbmczKVxyXG4gICAgY29uc3QgZGlzaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHN0cmluZzEgPSAnU3VzaGkgU2lmcmlubydcclxuICAgICAgICBzdHJpbmcyID0gJ0hlY2hvIGV4Y2x1c2l2YW1lbnRlIGVuPGJyPlZhbGVuY2lhLCBwYXJhIHNpZnJpbm9zLidcclxuICAgICAgICBzdHJpbmczID0gJzMwMCQnXHJcbiAgICAgICAgY29sb2NhcmluZm8oZGlzaDIsMSxzdHJpbmcxLHN0cmluZzIsc3RyaW5nMylcclxuICAgIGNvbnN0IGRpc2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdHJpbmcxID0gJ1JvbGwgNTBLJ1xyXG4gICAgICAgIHN0cmluZzIgPSAnQ2FkYSBtb2xlY3VsYSBkZSBlc3RlIHJvbGwgZXM8YnI+aGVjaG8gY29uIG9ybyByZWFsLidcclxuICAgICAgICBzdHJpbmczID0gJzY2NiQnXHJcbiAgICAgICAgY29sb2NhcmluZm8oZGlzaDMsMixzdHJpbmcxLHN0cmluZzIsc3RyaW5nMylcclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdjIuY2xhc3NOYW1lID0gJ2Rpc2hlcydcclxuICAgIGRpdjIuYXBwZW5kKGRpc2gxKVxyXG4gICAgZGl2Mi5hcHBlbmQoZGlzaDIpXHJcbiAgICBkaXYyLmFwcGVuZChkaXNoMylcclxuICAgICRtYWluZGl2LmFwcGVuZChkaXYyKVxyXG59XHJcblxyXG5leHBvcnQge21lbnV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcmluY2lwYWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtnZW5lcmFyZXNxdWVsZXRvfSBmcm9tICcuL2VzcXVlbGV0by5qcyc7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xyXG5cclxuZ2VuZXJhcmVzcXVlbGV0bygpXHJcbmhvbWUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==