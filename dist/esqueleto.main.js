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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Fabinter';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face  { \r\n    font-family: 'Fabwilliam'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\nbody{\r\n    font-family: 'Fabinter';\r\n    margin: 0;\r\n    border: 0;\r\n    background-color: black;\r\n    display: grid;\r\n    color: white;\r\n    grid-template-rows: 10vh 85vh 5vh;\r\n}\r\n.header{\r\n    color: black;\r\n    display: grid;\r\n    background-color: #FAA307;\r\n    grid-template-columns: 10vh 10vh 10vh;\r\n    justify-items: center;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n}\r\n.header>button{\r\n    background-color: #F48C06;\r\n    border: transparent;\r\n    place-self: stretch;\r\n}\r\n.mainhome{\r\n    display: grid;\r\n    grid-template-columns: max(50vh,50%)max(50vh,50%);\r\n    overflow-x: hidden;\r\n}\r\n.mainmenu{\r\n    display: grid;\r\n    overflow-x: hidden;\r\n    grid-template-rows: 1fr 5fr;\r\n    justify-items: center;\r\n}\r\n.mainmenu>div>h3,p{\r\n    text-align: center;\r\n}\r\n.div1{\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    grid-template-rows: 200px 200px 100px;\r\n    padding-top: 100px;\r\n}\r\n    .div1>h1{\r\n        font-size: 7em;\r\n    }\r\n    .div1>p{\r\n        font-size: 1.5em;\r\n    }\r\n.div2{\r\n    align-self: center;\r\n}\r\nh1,h3{\r\n    font-family: 'Fabwilliam'; \r\n}\r\n.footer{\r\n    background-color: #101010;\r\n}\r\n    .footer>p{\r\n        text-align: center;\r\n        margin-top: 5px;\r\n    }\r\n    .footer>p>a>img{\r\n        height: 20px;\r\n    }\r\n.imagenhome{\r\n    height: 577px;\r\n}\r\n.dish{\r\n    display: grid;\r\n    background-color: #9c9c9c2b;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.dish>img{\r\n    height: 250px;\r\n}\r\n.dishes{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 90%;\r\n    gap: 20px;\r\n}\r\n\r\n/* FANCY CSS */\r\n.button-30 {\r\n  align-items: center;\r\n  appearance: none;\r\n  background-color: #FCFCFD;\r\n  border-radius: 4px;\r\n  border-width: 0;\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #36395A;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-family: \"JetBrains Mono\",monospace;\r\n  height: 48px;\r\n  justify-content: center;\r\n  line-height: 1;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  position: relative;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  transition: box-shadow .15s,transform .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  will-change: box-shadow,transform;\r\n  font-size: 18px;\r\n}\r\n\r\n.button-30:focus {\r\n  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n}\r\n\r\n.button-30:hover {\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.button-30:active {\r\n  box-shadow: #D6D6E7 0 3px 7px inset;\r\n  transform: translateY(2px);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAAoC;AACxC;AACA;IACI,yBAAyB;IACzB,4CAAsC;AAC1C;AACA;IACI,uBAAuB;IACvB,SAAS;IACT,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,qCAAqC;IACrC,qBAAqB;IACrB,oBAAoB;IACpB,uBAAuB;AAC3B;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,iDAAiD;IACjD,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,qBAAqB;AACzB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,qCAAqC;IACrC,kBAAkB;AACtB;IACI;QACI,cAAc;IAClB;IACA;QACI,gBAAgB;IACpB;AACJ;IACI,kBAAkB;AACtB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;IACI;QACI,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,YAAY;IAChB;AACJ;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,uBAAuB;IACvB,SAAS;AACb;;AAEA,cAAc;AACd;EACE,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,wGAAwG;EACxG,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,uCAAuC;EACvC,YAAY;EACZ,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,0CAA0C;EAC1C,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,qIAAqI;AACvI;;AAEA;EACE,0GAA0G;EAC1G,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;AAC5B","sourcesContent":["@font-face {\r\n    font-family: 'Fabinter';\r\n    src: url('./assets/fonts/Inter.ttf');\r\n}\r\n@font-face  { \r\n    font-family: 'Fabwilliam'; \r\n    src: url('./assets/fonts/William.ttf');\r\n}\r\nbody{\r\n    font-family: 'Fabinter';\r\n    margin: 0;\r\n    border: 0;\r\n    background-color: black;\r\n    display: grid;\r\n    color: white;\r\n    grid-template-rows: 10vh 85vh 5vh;\r\n}\r\n.header{\r\n    color: black;\r\n    display: grid;\r\n    background-color: #FAA307;\r\n    grid-template-columns: 10vh 10vh 10vh;\r\n    justify-items: center;\r\n    align-items: stretch;\r\n    justify-content: center;\r\n}\r\n.header>button{\r\n    background-color: #F48C06;\r\n    border: transparent;\r\n    place-self: stretch;\r\n}\r\n.mainhome{\r\n    display: grid;\r\n    grid-template-columns: max(50vh,50%)max(50vh,50%);\r\n    overflow-x: hidden;\r\n}\r\n.mainmenu{\r\n    display: grid;\r\n    overflow-x: hidden;\r\n    grid-template-rows: 1fr 5fr;\r\n    justify-items: center;\r\n}\r\n.mainmenu>div>h3,p{\r\n    text-align: center;\r\n}\r\n.div1{\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    grid-template-rows: 200px 200px 100px;\r\n    padding-top: 100px;\r\n}\r\n    .div1>h1{\r\n        font-size: 7em;\r\n    }\r\n    .div1>p{\r\n        font-size: 1.5em;\r\n    }\r\n.div2{\r\n    align-self: center;\r\n}\r\nh1,h3{\r\n    font-family: 'Fabwilliam'; \r\n}\r\n.footer{\r\n    background-color: #101010;\r\n}\r\n    .footer>p{\r\n        text-align: center;\r\n        margin-top: 5px;\r\n    }\r\n    .footer>p>a>img{\r\n        height: 20px;\r\n    }\r\n.imagenhome{\r\n    height: 577px;\r\n}\r\n.dish{\r\n    display: grid;\r\n    background-color: #9c9c9c2b;\r\n    padding: 10px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.dish>img{\r\n    height: 250px;\r\n}\r\n.dishes{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 90%;\r\n    gap: 20px;\r\n}\r\n\r\n/* FANCY CSS */\r\n.button-30 {\r\n  align-items: center;\r\n  appearance: none;\r\n  background-color: #FCFCFD;\r\n  border-radius: 4px;\r\n  border-width: 0;\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #36395A;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-family: \"JetBrains Mono\",monospace;\r\n  height: 48px;\r\n  justify-content: center;\r\n  line-height: 1;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  position: relative;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  transition: box-shadow .15s,transform .15s;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  will-change: box-shadow,transform;\r\n  font-size: 18px;\r\n}\r\n\r\n.button-30:focus {\r\n  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n}\r\n\r\n.button-30:hover {\r\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.button-30:active {\r\n  box-shadow: #D6D6E7 0 3px 7px inset;\r\n  transform: translateY(2px);\r\n}"],"sourceRoot":""}]);
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


function contacto(){
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.className = 'maincontacto'
    _esqueleto__WEBPACK_IMPORTED_MODULE_0__.$maindiv.innerHTML = ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvY29udGFjdG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL2VzcXVlbGV0by5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvSW50ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvV2lsbGlhbS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFiaW50ZXInO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2UgIHsgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFid2lsbGlhbSc7IFxcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFiaW50ZXInO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg1dmggNXZoO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUEzMDc7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTB2aCAxMHZoIDEwdmg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyPmJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0OEMwNjtcXHJcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXHJcXG59XFxyXFxuLm1haW5ob21le1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heCg1MHZoLDUwJSltYXgoNTB2aCw1MCUpO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbi5tYWlubWVudXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1haW5tZW51PmRpdj5oMyxwe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXYxe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHggMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuICAgIC5kaXYxPmgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiA3ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmRpdjE+cHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG4uZGl2MntcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5oMSxoM3tcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJ3aWxsaWFtJzsgXFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XFxyXFxufVxcclxcbiAgICAuZm9vdGVyPnB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3Rlcj5wPmE+aW1ne1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuLmltYWdlbmhvbWV7XFxyXFxuICAgIGhlaWdodDogNTc3cHg7XFxyXFxufVxcclxcbi5kaXNoe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM5YzljMmI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRpc2g+aW1ne1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG4uZGlzaGVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwJTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGQU5DWSBDU1MgKi9cXHJcXG4uYnV0dG9uLTMwIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgscmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjMzYzOTVBO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIixtb25vc3BhY2U7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyx0cmFuc2Zvcm0gLjE1cztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93LHRyYW5zZm9ybTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiAjRDZENkU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDRweCA4cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6YWN0aXZlIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAzcHggN3B4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsNENBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNENBQXNDO0FBQzFDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixpREFBaUQ7SUFDakQsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0QjtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBLGNBQWM7QUFDZDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0dBQXdHO0VBQ3hHLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxSUFBcUk7QUFDdkk7O0FBRUE7RUFDRSwwR0FBMEc7RUFDMUcsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9JbnRlci50dGYnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSAgeyBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJ3aWxsaWFtJzsgXFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9XaWxsaWFtLnR0ZicpO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYmludGVyJztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4NXZoIDV2aDtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFBMzA3O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdmggMTB2aCAxMHZoO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlcj5idXR0b257XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDhDMDY7XFxyXFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XFxyXFxufVxcclxcbi5tYWluaG9tZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgoNTB2aCw1MCUpbWF4KDUwdmgsNTAlKTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG4ubWFpbm1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tYWlubWVudT5kaXY+aDMscHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGl2MXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcbiAgICAuZGl2MT5oMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xcclxcbiAgICB9XFxyXFxuICAgIC5kaXYxPnB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxuLmRpdjJ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuaDEsaDN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFid2lsbGlhbSc7IFxcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xcclxcbn1cXHJcXG4gICAgLmZvb3Rlcj5we1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXI+cD5hPmltZ3tcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbi5pbWFnZW5ob21le1xcclxcbiAgICBoZWlnaHQ6IDU3N3B4O1xcclxcbn1cXHJcXG4uZGlzaHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljOWM5YzJiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXNoPmltZ3tcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuLmRpc2hlc3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MCU7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRkFOQ1kgQ1NTICovXFxyXFxuLmJ1dHRvbi0zMCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsI0Q2RDZFNyAwIC0zcHggMCBpbnNldDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogIzM2Mzk1QTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJKZXRCcmFpbnMgTW9ub1xcXCIsbW9ub3NwYWNlO1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4xNXMsdHJhbnNmb3JtIC4xNXM7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdyx0cmFuc2Zvcm07XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogI0Q2RDZFNyAwIDAgMCAxLjVweCBpbnNldCwgcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI0Q2RDZFNyAwIC0zcHggMCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCA0cHggOHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiAjRDZENkU3IDAgM3B4IDdweCBpbnNldDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgJG1haW5kaXYgfSBmcm9tIFwiLi9lc3F1ZWxldG9cIlxyXG5cclxuZnVuY3Rpb24gY29udGFjdG8oKXtcclxuICAgICRtYWluZGl2LmNsYXNzTmFtZSA9ICdtYWluY29udGFjdG8nXHJcbiAgICAkbWFpbmRpdi5pbm5lckhUTUwgPSAnJ1xyXG59XHJcblxyXG5leHBvcnQge2NvbnRhY3RvfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2l0aWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnBuZydcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgeyBjb250YWN0byB9IGZyb20gJy4vY29udGFjdG8nO1xyXG5cclxuY29uc3QgJGJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuY29uc3QgJGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuY29uc3QgJG1haW5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCAkZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuJGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXJlc3F1ZWxldG8oKXtcclxuICAgIGNvbnN0IGhvbWVoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGhvbWVoZWFkZXIuaW5uZXJUZXh0ID0gJ0hvbWUnXHJcbiAgICAgICAgaG9tZWhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgICAgICBob21lKClcclxuICAgICAgICB9KVxyXG4gICAgY29uc3QgbWVudWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgbWVudWhlYWRlci5pbm5lclRleHQgPSAnTWVudSdcclxuICAgICAgICBtZW51aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIG1lbnUoKVxyXG4gICAgICAgIH0pXHJcbiAgICBjb25zdCBjb250YWN0b2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY29udGFjdG9oZWFkZXIuaW5uZXJUZXh0ID0gJ0NvbnRhY3RvJ1xyXG4gICAgICAgIGNvbnRhY3RvaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnRhY3RvKClcclxuICAgICAgICB9KVxyXG4gICAgJGhlYWRlci5hcHBlbmQoaG9tZWhlYWRlcilcclxuICAgICRoZWFkZXIuYXBwZW5kKG1lbnVoZWFkZXIpXHJcbiAgICAkaGVhZGVyLmFwcGVuZChjb250YWN0b2hlYWRlcilcclxuICAgICRiYXNlLmFwcGVuZCgkaGVhZGVyKVxyXG4gICAgJGJhc2UuYXBwZW5kKCRtYWluZGl2KVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCJIZWNobyBjb24gYW1vciBwb3IgSnVhbmNobzI3MDYgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0p1YW5jaG8yNzA2Jz48aW1nIHNyYz1cIitnaXRpY29uK1wiPjwvYT5cIlxyXG4gICAgJGZvb3Rlci5hcHBlbmQocClcclxuICAgICRiYXNlLmFwcGVuZCgkZm9vdGVyKVxyXG59XHJcblxyXG5leHBvcnQge2dlbmVyYXJlc3F1ZWxldG8sJGJhc2UsJGZvb3RlciwkbWFpbmRpdiwkaGVhZGVyfSIsImltcG9ydCB7ICRoZWFkZXIsJG1haW5kaXYgfSBmcm9tIFwiLi9lc3F1ZWxldG9cIjtcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGltYWdlYmFzZSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGkxLmpwZydcclxuXHJcbmZ1bmN0aW9uIGhvbWUoKXtcclxuICAgICRtYWluZGl2LmNsYXNzTmFtZSA9ICdtYWluaG9tZSdcclxuICAgICRtYWluZGl2LmlubmVySFRNTCA9ICcnXHJcbiAgICAvL2RpdiAxXHJcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2RpdjEnKVxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICAgICAgaDEuaW5uZXJUZXh0ID0gJ0ZhYlN1c2hpJ1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gJ051ZXN0cm9zIHByb2R1Y3RvcyBzb24gMTAwJTxicj52ZWdhbm9zLCB2ZWdldGFyaWFub3MgeSBmYWJ1bG9zb3MsPGJyPnRvZGEgbnVlc3RyYSBjYXJ0YSBhcHJvYmFkYSBwb3I8YnI+Tmlja3kgTWluYWogZW4gcGVyc29uYS4nXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnVmVyIE1lbnUnXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0zMCcpXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBtZW51KClcclxuICAgIH0pXHJcbiAgICBkaXYxLmFwcGVuZChoMSlcclxuICAgIGRpdjEuYXBwZW5kKHApXHJcbiAgICBkaXYxLmFwcGVuZChidXR0b24pXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MSlcclxuXHJcbiAgICAvL2RpdiAyXHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2RpdjInKVxyXG4gICAgY29uc3QgaW1hZ2VuaG9tZSA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWFnZW5ob21lLnNyYyA9IGltYWdlYmFzZVxyXG4gICAgaW1hZ2VuaG9tZS5jbGFzc0xpc3QuYWRkKCdpbWFnZW5ob21lJylcclxuICAgIGRpdjIuYXBwZW5kKGltYWdlbmhvbWUpXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MilcclxufVxyXG5cclxuZXhwb3J0IHtob21lfSIsImltcG9ydCB7ICRtYWluZGl2IH0gZnJvbSBcIi4vZXNxdWVsZXRvXCJcclxuaW1wb3J0IHN1c2hpMiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGkyLmpwZydcclxuaW1wb3J0IHN1c2hpMyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGkzLmpwZydcclxuaW1wb3J0IHN1c2hpNCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3VzaGk0LmpwZydcclxuXHJcbmNvbnN0IGltYWdlbmVzbWVudSA9IHtcclxuICAgICcwJzogc3VzaGkyLFxyXG4gICAgJzEnOiBzdXNoaTMsXHJcbiAgICAnMic6IHN1c2hpNFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29sb2NhcmluZm8oZGlzaCxsdWdhcixzdHJpbmcxLHN0cmluZzIsc3RyaW5nMyl7XHJcbiAgICBkaXNoLmNsYXNzTmFtZSA9ICdkaXNoJ1xyXG4gICAgY29uc3QgaW1hZ2VuZGlzaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgaW1hZ2VuZGlzaDEuc3JjID0gaW1hZ2VuZXNtZW51W2x1Z2FyXVxyXG5jb25zdCBwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGEuaW5uZXJUZXh0ID0gc3RyaW5nMVxyXG5jb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGIuaW5uZXJIVE1MID0gc3RyaW5nMlxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHN0cmluZzNcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tMzAnKVxyXG4gICAgZGlzaC5hcHBlbmQoaW1hZ2VuZGlzaDEpXHJcbiAgICBkaXNoLmFwcGVuZChwYSlcclxuICAgIGRpc2guYXBwZW5kKHBiKVxyXG4gICAgZGlzaC5hcHBlbmQoYnV0dG9uKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgJG1haW5kaXYuY2xhc3NOYW1lID0gJ21haW5tZW51J1xyXG4gICAgJG1haW5kaXYuaW5uZXJIVE1MID0gJydcclxuICAgIC8vZGl2MVxyXG4gICAgY29uc3QgdGl0dWxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHRpdHVsby5pbm5lclRleHQgPSAnRmFiU3VzaGknXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcC5pbm5lclRleHQgPSAnQXByb2JhZG8gcG9yIE9iYW1hJ1xyXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYxLmFwcGVuZCh0aXR1bG8pXHJcbiAgICBkaXYxLmFwcGVuZChwKVxyXG4gICAgJG1haW5kaXYuYXBwZW5kKGRpdjEpXHJcbiAgICAvL2RpdjJcclxuICAgIGNvbnN0IGRpc2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsZXQgc3RyaW5nMSA9ICdUZW1wdXJhIEthcmRhc2hpYW4nXHJcbiAgICAgICAgbGV0IHN0cmluZzIgPSAnQ29uIHBlc2NhZG8gYWxpbWVudGFkbyBkZTxicj5wdXJhcyBoaWVyZGFzIGRlbCBvbGltcG8uJ1xyXG4gICAgICAgIGxldCBzdHJpbmczID0gJzIwMCQnXHJcbiAgICAgICAgY29sb2NhcmluZm8oZGlzaDEsMCxzdHJpbmcxLHN0cmluZzIsc3RyaW5nMylcclxuICAgIGNvbnN0IGRpc2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdHJpbmcxID0gJ1N1c2hpIFNpZnJpbm8nXHJcbiAgICAgICAgc3RyaW5nMiA9ICdIZWNobyBleGNsdXNpdmFtZW50ZSBlbjxicj5WYWxlbmNpYSwgcGFyYSBzaWZyaW5vcy4nXHJcbiAgICAgICAgc3RyaW5nMyA9ICczMDAkJ1xyXG4gICAgICAgIGNvbG9jYXJpbmZvKGRpc2gyLDEsc3RyaW5nMSxzdHJpbmcyLHN0cmluZzMpXHJcbiAgICBjb25zdCBkaXNoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgc3RyaW5nMSA9ICdSb2xsIDUwSydcclxuICAgICAgICBzdHJpbmcyID0gJ0NhZGEgbW9sZWN1bGEgZGUgZXN0ZSByb2xsIGVzPGJyPmhlY2hvIGNvbiBvcm8gcmVhbC4nXHJcbiAgICAgICAgc3RyaW5nMyA9ICc2NjYkJ1xyXG4gICAgICAgIGNvbG9jYXJpbmZvKGRpc2gzLDIsc3RyaW5nMSxzdHJpbmcyLHN0cmluZzMpXHJcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkaXYyLmNsYXNzTmFtZSA9ICdkaXNoZXMnXHJcbiAgICBkaXYyLmFwcGVuZChkaXNoMSlcclxuICAgIGRpdjIuYXBwZW5kKGRpc2gyKVxyXG4gICAgZGl2Mi5hcHBlbmQoZGlzaDMpXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MilcclxufVxyXG5cclxuZXhwb3J0IHttZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZXNxdWVsZXRvXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2VzcXVlbGV0by5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==