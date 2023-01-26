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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDZjtBQUNqQztBQUNBLCtEQUFnQjtBQUNoQiwrQ0FBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL2NvbnRhY3RvLmpzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS8uL3NyYy9lc3F1ZWxldG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RvLXBhZ2luYS1yZXN0YXVyYW50ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdG8tcGFnaW5hLXJlc3RhdXJhbnRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0by1wYWdpbmEtcmVzdGF1cmFudGUvLi9zcmMvcHJpbmNpcGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnRlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9XaWxsaWFtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSAgeyBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJ3aWxsaWFtJzsgXFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJpbnRlcic7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODV2aCA1dmg7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQTMwNztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHZoIDEwdmggMTB2aDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXI+YnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ4QzA2O1xcclxcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcclxcbn1cXHJcXG4ubWFpbmhvbWV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4KDUwdmgsNTAlKW1heCg1MHZoLDUwJSk7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuLm1haW5tZW51e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubWFpbm1lbnU+ZGl2PmgzLHB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRpdjF7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAyMDBweCAxMDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG4gICAgLmRpdjE+aDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDdlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGl2MT5we1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgfVxcclxcbi5kaXYye1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbmgxLGgze1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYndpbGxpYW0nOyBcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcXHJcXG59XFxyXFxuICAgIC5mb290ZXI+cHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyPnA+YT5pbWd7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4uaW1hZ2VuaG9tZXtcXHJcXG4gICAgaGVpZ2h0OiA1NzdweDtcXHJcXG59XFxyXFxuLmRpc2h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzljOWMyYjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZGlzaD5pbWd7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxufVxcclxcbi5kaXNoZXN7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTAlO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZBTkNZIENTUyAqL1xcclxcbi5idXR0b24tMzAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZEO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCxyZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICMzNjM5NUE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSmV0QnJhaW5zIE1vbm9cXFwiLG1vbm9zcGFjZTtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzLHRyYW5zZm9ybSAuMTVzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csdHJhbnNmb3JtO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAwIDAgMS41cHggaW5zZXQsIHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI0Q2RDZFNyAwIC0zcHggMCBpbnNldDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDphY3RpdmUge1xcclxcbiAgYm94LXNoYWRvdzogI0Q2RDZFNyAwIDNweCA3cHggaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBb0M7QUFDeEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBc0M7QUFDMUM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsU0FBUztJQUNULHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUEsY0FBYztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3R0FBd0c7RUFDeEcsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFJQUFxSTtBQUN2STs7QUFFQTtFQUNFLDBHQUEwRztFQUMxRywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYmludGVyJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0ludGVyLnR0ZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlICB7IFxcclxcbiAgICBmb250LWZhbWlseTogJ0ZhYndpbGxpYW0nOyBcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1dpbGxpYW0udHRmJyk7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRmFiaW50ZXInO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg1dmggNXZoO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUEzMDc7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTB2aCAxMHZoIDEwdmg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyPmJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0OEMwNjtcXHJcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXHJcXG59XFxyXFxuLm1haW5ob21le1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heCg1MHZoLDUwJSltYXgoNTB2aCw1MCUpO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbi5tYWlubWVudXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1haW5tZW51PmRpdj5oMyxwe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kaXYxe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHggMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuICAgIC5kaXYxPmgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiA3ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmRpdjE+cHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG4uZGl2MntcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5oMSxoM3tcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGYWJ3aWxsaWFtJzsgXFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XFxyXFxufVxcclxcbiAgICAuZm9vdGVyPnB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3Rlcj5wPmE+aW1ne1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuLmltYWdlbmhvbWV7XFxyXFxuICAgIGhlaWdodDogNTc3cHg7XFxyXFxufVxcclxcbi5kaXNoe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM5YzljMmI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRpc2g+aW1ne1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG4uZGlzaGVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwJTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGQU5DWSBDU1MgKi9cXHJcXG4uYnV0dG9uLTMwIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGRDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgscmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjMzYzOTVBO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIixtb25vc3BhY2U7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyx0cmFuc2Zvcm0gLjE1cztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93LHRyYW5zZm9ybTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0zMDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiAjRDZENkU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjRDZENkU3IDAgLTNweCAwIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLTMwOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDRweCA4cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNENkQ2RTcgMCAtM3B4IDAgaW5zZXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tMzA6YWN0aXZlIHtcXHJcXG4gIGJveC1zaGFkb3c6ICNENkQ2RTcgMCAzcHggN3B4IGluc2V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyAkbWFpbmRpdiB9IGZyb20gXCIuL2VzcXVlbGV0b1wiXHJcblxyXG5mdW5jdGlvbiBjb250YWN0bygpe1xyXG4gICAgJG1haW5kaXYuY2xhc3NOYW1lID0gJ21haW5jb250YWN0bydcclxuICAgICRtYWluZGl2LmlubmVySFRNTCA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCB7Y29udGFjdG99IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBnaXRpY29uIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9naXRodWIucG5nJ1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IGNvbnRhY3RvIH0gZnJvbSAnLi9jb250YWN0byc7XHJcblxyXG5jb25zdCAkYmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5jb25zdCAkaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuJGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxyXG5jb25zdCAkbWFpbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0ICRmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4kZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXHJcblxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhcmVzcXVlbGV0bygpe1xyXG4gICAgY29uc3QgaG9tZWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgaG9tZWhlYWRlci5pbm5lclRleHQgPSAnSG9tZSdcclxuICAgICAgICBob21laGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGhvbWUoKVxyXG4gICAgICAgIH0pXHJcbiAgICBjb25zdCBtZW51aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBtZW51aGVhZGVyLmlubmVyVGV4dCA9ICdNZW51J1xyXG4gICAgICAgIG1lbnVoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgbWVudSgpXHJcbiAgICAgICAgfSlcclxuICAgIGNvbnN0IGNvbnRhY3RvaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjb250YWN0b2hlYWRlci5pbm5lclRleHQgPSAnQ29udGFjdG8nXHJcbiAgICAgICAgY29udGFjdG9oZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgY29udGFjdG8oKVxyXG4gICAgICAgIH0pXHJcbiAgICAkaGVhZGVyLmFwcGVuZChob21laGVhZGVyKVxyXG4gICAgJGhlYWRlci5hcHBlbmQobWVudWhlYWRlcilcclxuICAgICRoZWFkZXIuYXBwZW5kKGNvbnRhY3RvaGVhZGVyKVxyXG4gICAgJGJhc2UuYXBwZW5kKCRoZWFkZXIpXHJcbiAgICAkYmFzZS5hcHBlbmQoJG1haW5kaXYpXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcC5pbm5lckhUTUwgPSBcIkhlY2hvIGNvbiBhbW9yIHBvciBKdWFuY2hvMjcwNiA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vSnVhbmNobzI3MDYnPjxpbWcgc3JjPVwiK2dpdGljb24rXCI+PC9hPlwiXHJcbiAgICAkZm9vdGVyLmFwcGVuZChwKVxyXG4gICAgJGJhc2UuYXBwZW5kKCRmb290ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2VuZXJhcmVzcXVlbGV0bywkYmFzZSwkZm9vdGVyLCRtYWluZGl2LCRoZWFkZXJ9IiwiaW1wb3J0IHsgJGhlYWRlciwkbWFpbmRpdiB9IGZyb20gXCIuL2VzcXVlbGV0b1wiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgaW1hZ2ViYXNlIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTEuanBnJ1xyXG5cclxuZnVuY3Rpb24gaG9tZSgpe1xyXG4gICAgJG1haW5kaXYuY2xhc3NOYW1lID0gJ21haW5ob21lJ1xyXG4gICAgJG1haW5kaXYuaW5uZXJIVE1MID0gJydcclxuICAgIC8vZGl2IDFcclxuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnZGl2MScpXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBoMS5pbm5lclRleHQgPSAnRmFiU3VzaGknXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcC5pbm5lckhUTUwgPSAnTnVlc3Ryb3MgcHJvZHVjdG9zIHNvbiAxMDAlPGJyPnZlZ2Fub3MsIHZlZ2V0YXJpYW5vcyB5IGZhYnVsb3Nvcyw8YnI+dG9kYSBudWVzdHJhIGNhcnRhIGFwcm9iYWRhIHBvcjxicj5OaWNreSBNaW5haiBlbiBwZXJzb25hLidcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdWZXIgTWVudSdcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTMwJylcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIG1lbnUoKVxyXG4gICAgfSlcclxuICAgIGRpdjEuYXBwZW5kKGgxKVxyXG4gICAgZGl2MS5hcHBlbmQocClcclxuICAgIGRpdjEuYXBwZW5kKGJ1dHRvbilcclxuICAgICRtYWluZGl2LmFwcGVuZChkaXYxKVxyXG5cclxuICAgIC8vZGl2IDJcclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnZGl2MicpXHJcbiAgICBjb25zdCBpbWFnZW5ob21lID0gbmV3IEltYWdlKClcclxuICAgIGltYWdlbmhvbWUuc3JjID0gaW1hZ2ViYXNlXHJcbiAgICBpbWFnZW5ob21lLmNsYXNzTGlzdC5hZGQoJ2ltYWdlbmhvbWUnKVxyXG4gICAgZGl2Mi5hcHBlbmQoaW1hZ2VuaG9tZSlcclxuICAgICRtYWluZGl2LmFwcGVuZChkaXYyKVxyXG59XHJcblxyXG5leHBvcnQge2hvbWV9IiwiaW1wb3J0IHsgJG1haW5kaXYgfSBmcm9tIFwiLi9lc3F1ZWxldG9cIlxyXG5pbXBvcnQgc3VzaGkyIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTIuanBnJ1xyXG5pbXBvcnQgc3VzaGkzIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTMuanBnJ1xyXG5pbXBvcnQgc3VzaGk0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdXNoaTQuanBnJ1xyXG5cclxuY29uc3QgaW1hZ2VuZXNtZW51ID0ge1xyXG4gICAgJzAnOiBzdXNoaTIsXHJcbiAgICAnMSc6IHN1c2hpMyxcclxuICAgICcyJzogc3VzaGk0XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb2xvY2FyaW5mbyhkaXNoLGx1Z2FyLHN0cmluZzEsc3RyaW5nMixzdHJpbmczKXtcclxuICAgIGRpc2guY2xhc3NOYW1lID0gJ2Rpc2gnXHJcbiAgICBjb25zdCBpbWFnZW5kaXNoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZW5kaXNoMS5zcmMgPSBpbWFnZW5lc21lbnVbbHVnYXJdXHJcbmNvbnN0IHBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYS5pbm5lclRleHQgPSBzdHJpbmcxXHJcbmNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYi5pbm5lckhUTUwgPSBzdHJpbmcyXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gc3RyaW5nM1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0zMCcpXHJcbiAgICBkaXNoLmFwcGVuZChpbWFnZW5kaXNoMSlcclxuICAgIGRpc2guYXBwZW5kKHBhKVxyXG4gICAgZGlzaC5hcHBlbmQocGIpXHJcbiAgICBkaXNoLmFwcGVuZChidXR0b24pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51KCl7XHJcbiAgICAkbWFpbmRpdi5jbGFzc05hbWUgPSAnbWFpbm1lbnUnXHJcbiAgICAkbWFpbmRpdi5pbm5lckhUTUwgPSAnJ1xyXG4gICAgLy9kaXYxXHJcbiAgICBjb25zdCB0aXR1bG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgdGl0dWxvLmlubmVyVGV4dCA9ICdGYWJTdXNoaSdcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwLmlubmVyVGV4dCA9ICdBcHJvYmFkbyBwb3IgT2JhbWEnXHJcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdjEuYXBwZW5kKHRpdHVsbylcclxuICAgIGRpdjEuYXBwZW5kKHApXHJcbiAgICAkbWFpbmRpdi5hcHBlbmQoZGl2MSlcclxuICAgIC8vZGl2MlxyXG4gICAgY29uc3QgZGlzaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxldCBzdHJpbmcxID0gJ1RlbXB1cmEgS2FyZGFzaGlhbidcclxuICAgICAgICBsZXQgc3RyaW5nMiA9ICdDb24gcGVzY2FkbyBhbGltZW50YWRvIGRlPGJyPnB1cmFzIGhpZXJkYXMgZGVsIG9saW1wby4nXHJcbiAgICAgICAgbGV0IHN0cmluZzMgPSAnMjAwJCdcclxuICAgICAgICBjb2xvY2FyaW5mbyhkaXNoMSwwLHN0cmluZzEsc3RyaW5nMixzdHJpbmczKVxyXG4gICAgY29uc3QgZGlzaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHN0cmluZzEgPSAnU3VzaGkgU2lmcmlubydcclxuICAgICAgICBzdHJpbmcyID0gJ0hlY2hvIGV4Y2x1c2l2YW1lbnRlIGVuPGJyPlZhbGVuY2lhLCBwYXJhIHNpZnJpbm9zLidcclxuICAgICAgICBzdHJpbmczID0gJzMwMCQnXHJcbiAgICAgICAgY29sb2NhcmluZm8oZGlzaDIsMSxzdHJpbmcxLHN0cmluZzIsc3RyaW5nMylcclxuICAgIGNvbnN0IGRpc2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdHJpbmcxID0gJ1JvbGwgNTBLJ1xyXG4gICAgICAgIHN0cmluZzIgPSAnQ2FkYSBtb2xlY3VsYSBkZSBlc3RlIHJvbGwgZXM8YnI+aGVjaG8gY29uIG9ybyByZWFsLidcclxuICAgICAgICBzdHJpbmczID0gJzY2NiQnXHJcbiAgICAgICAgY29sb2NhcmluZm8oZGlzaDMsMixzdHJpbmcxLHN0cmluZzIsc3RyaW5nMylcclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdjIuY2xhc3NOYW1lID0gJ2Rpc2hlcydcclxuICAgIGRpdjIuYXBwZW5kKGRpc2gxKVxyXG4gICAgZGl2Mi5hcHBlbmQoZGlzaDIpXHJcbiAgICBkaXYyLmFwcGVuZChkaXNoMylcclxuICAgICRtYWluZGl2LmFwcGVuZChkaXYyKVxyXG59XHJcblxyXG5leHBvcnQge21lbnV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcmluY2lwYWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtnZW5lcmFyZXNxdWVsZXRvfSBmcm9tICcuL2VzcXVlbGV0by5qcyc7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xyXG5cclxuZ2VuZXJhcmVzcXVlbGV0bygpXHJcbmhvbWUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==