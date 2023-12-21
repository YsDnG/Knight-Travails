/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Pacifico-Regular.ttf */ "./src/font/Pacifico-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../icon/knight-icon-border.png */ "./src/icon/knight-icon-border.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,*::before,*::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0; 

}

/**** CSS variables *****/
:root{
    --main-color-1:#F7F5F3;
    --main-color-2: #EEE0CB;
    --main-color-3: #839788;
    --main-color-4: #000000;

}

@font-face {
  font-family: 'maPolice'; 
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 100;
}

#app {
    font-family: 'maPolice';
    height: 100vh;
    width: 100vw;
    color: var(--main-color-2);
    background-color: var(--main-color-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
}

.title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
}

.board
{
    display: grid;
    grid-template-rows: repeat(8,minmax(2em,4em));
    grid-template-columns: repeat(8,minmax(2em,4em));
    border: 0.75em solid #7c6a06;
    border-radius: 10px;
    
    
}
.white
{
    background-color:var(--main-color-1) ;
    padding: 1em;
    color: #000000; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.black
{
    background-color: var(--main-color-4);
    padding: 1em;
    color: #F7F5F3;
    display: flex;
    justify-content: center;
    align-items: center;
}
.start
{
    background-color: var(--main-color-3);
}
.gestion
{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    gap: 1em;
}
.btn
{
    width: auto;
    height: auto;
    padding: 0.3em;
    line-height: none;
    background-color: var(--main-color-2);
    border-radius: 5px;
    font-family: "maPolice";
    font-size: 1em;
}


.knight-icon
{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size:cover;
    padding: 0.3em;
    border: solid 3px #7c6a06;
    border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;;AAEb;;AAEA,yBAAyB;AACzB;IACI,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,uBAAuB;;AAE3B;;AAEA;EACE,uBAAuB;EACvB,4CAAwC;EACxC,gBAAgB;AAClB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,0BAA0B;IAC1B,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,6CAA6C;IAC7C,gDAAgD;IAChD,4BAA4B;IAC5B,mBAAmB;;;AAGvB;AACA;;IAEI,qCAAqC;IACrC,YAAY;IACZ,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,qCAAqC;IACrC,YAAY;IACZ,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;IAEI,qCAAqC;AACzC;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,QAAQ;AACZ;AACA;;IAEI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,qCAAqC;IACrC,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;AAClB;;;AAGA;;IAEI,yDAAuD;IACvD,4BAA4B;IAC5B,qBAAqB;IACrB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB","sourcesContent":["*,*::before,*::after{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0; \n\n}\n\n/**** CSS variables *****/\n:root{\n    --main-color-1:#F7F5F3;\n    --main-color-2: #EEE0CB;\n    --main-color-3: #839788;\n    --main-color-4: #000000;\n\n}\n\n@font-face {\n  font-family: 'maPolice'; \n  src: url('../font/Pacifico-Regular.ttf');\n  font-weight: 100;\n}\n\n#app {\n    font-family: 'maPolice';\n    height: 100vh;\n    width: 100vw;\n    color: var(--main-color-2);\n    background-color: var(--main-color-3);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2em;\n}\n\n.title{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5em;\n}\n\n.board\n{\n    display: grid;\n    grid-template-rows: repeat(8,minmax(2em,4em));\n    grid-template-columns: repeat(8,minmax(2em,4em));\n    border: 0.75em solid #7c6a06;\n    border-radius: 10px;\n    \n    \n}\n.white\n{\n    background-color:var(--main-color-1) ;\n    padding: 1em;\n    color: #000000; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.black\n{\n    background-color: var(--main-color-4);\n    padding: 1em;\n    color: #F7F5F3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.start\n{\n    background-color: var(--main-color-3);\n}\n.gestion\n{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: black;\n    gap: 1em;\n}\n.btn\n{\n    width: auto;\n    height: auto;\n    padding: 0.3em;\n    line-height: none;\n    background-color: var(--main-color-2);\n    border-radius: 5px;\n    font-family: \"maPolice\";\n    font-size: 1em;\n}\n\n\n.knight-icon\n{\n    background-image: url('../icon/knight-icon-border.png');\n    background-repeat: no-repeat;\n    background-size:cover;\n    padding: 0.3em;\n    border: solid 3px #7c6a06;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/Class/Graph.js":
/*!****************************!*\
  !*** ./src/Class/Graph.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Class/Node.js");


class Graph {
    constructor() {
      this.nodes = {}; // Stocke les nœuds sous forme de dictionnaire pour un accès rapide
    }
  
    addNode(position) {
      this.nodes[position] = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](position);
    }
  
    addEdge(position1, position2) {
      // Assurez-vous que les deux positions sont valides
      if (this.nodes[position1] && this.nodes[position2]) {
        this.nodes[position1].edges.push(this.nodes[position2]);
      }
    }
  
    getNode(position) {
      return this.nodes[position];
    }
  }
  

/***/ }),

/***/ "./src/Class/Knight.js":
/*!*****************************!*\
  !*** ./src/Class/Knight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knight)
/* harmony export */ });

class Knight {
  constructor(position) {
    this._position = position;
    
  }

  getPosition() {
    return this._position;
  }

  knightMove(finalPosition) {
    if (this.isMovementValid(finalPosition)) 
          this._position = finalPosition;
  }

 

  shortedWayToPosition(startPosition,finalPosition,graph) {
    
      let queue = [];
      let visited = [];  // Utilisez un tableau pour les positions visitées
      let predecessor = {};
  
      queue.push(startPosition);
      visited.push(startPosition);
  
      while (queue.length > 0) {
          let currentPosition = queue.shift();
  
          if (areArraysEqual(currentPosition, finalPosition)) {
              return reconstructPath(predecessor, finalPosition);
          }
  
          for (let edge of graph.getNode(currentPosition).edges) {
              let nextPosition = edge.position;
  
              if (!isVisited(visited, nextPosition)) {
                  queue.push(nextPosition);
                  visited.push(nextPosition);
                  predecessor[arrayToString(nextPosition)] = currentPosition;
              }
          }
      }
  
      return [];  // Aucun chemin trouvé
    
  
  
      function reconstructPath(predecessor, finalPosition) {
        let path = [finalPosition];
        let currentPosition = finalPosition;
    
        while (arrayToString(currentPosition) in predecessor) {
            currentPosition = predecessor[arrayToString(currentPosition)];
            path.unshift(currentPosition);  // Ajouter au début du chemin
        }
    
        // La position de départ sera la dernière ajoutée. Si elle est votre position initiale, retirez-la.
        if (areArraysEqual(path[0], startPosition)) {
            path.shift(); // Retirer la position de départ si elle est incluse
        }
    
        return path;
    }
    
  
  function areArraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
      }
      return true;
  }
  
  function isVisited(visited, position) {
      return visited.some(visitedPosition => areArraysEqual(visitedPosition, position));
  }
  
  function arrayToString(array) {
      return array.join(',');
  }
        
}

/***/


  isMovementValid(finalPosition) {
    const dx = Math.abs(finalPosition[1] - this._position[1]);
    const dy = Math.abs(finalPosition[0] - this._position[0]);

    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  }
}

/***/ }),

/***/ "./src/Class/Node.js":
/*!***************************!*\
  !*** ./src/Class/Node.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node 
{

    constructor(position) {
      this.position = position;
      this.edges = []; 
    }
  }
  

/***/ }),

/***/ "./src/component/cp-container.js":
/*!***************************************!*\
  !*** ./src/component/cp-container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*Create a new div with the class of className and it to his parent */
const createContainer=(className,parent)=>{
    
    const element = document.createElement('div');
    element.classList.add(className);
   
    if(parent)
    {
         parent.appendChild(element);
         return element
        
    }
    else
    {
         document.getElementById('app').appendChild(element);
         return element
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContainer);

/***/ }),

/***/ "./src/component/cp-createBoard.js":
/*!*****************************************!*\
  !*** ./src/component/cp-createBoard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp-createElementWithText */ "./src/component/cp-createElementWithText.js");





function createBoard(){


    const boardDiv = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("board")
    let board = [];
    let numRows = 8;
    let numCols = 8;
   
    
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numCols; j++) {
           
            board[i][j] = 0;
        }
    }
    
    let element; 
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            
            if((i+j)%2===0){
                element= (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',``,boardDiv,"white")
                element.classList.add(`${i}/${j}`)
                
            }
            else{
                element = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',``,boardDiv,"black")
                element.classList.add(`${i}/${j}`)
            }
            
                   
        }
    }



        return boardDiv;
            

}

/***/ }),

/***/ "./src/component/cp-createElementWithText.js":
/*!***************************************************!*\
  !*** ./src/component/cp-createElementWithText.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithText)
/* harmony export */ });


function createElementWithText(balise,text,container,className)
{
   const element= document.createElement(balise)
   element.innerText= text

    if(className)
        element.classList.add(className)

    if(container)
        container.appendChild(element)
    else
        document.getElementById('app').appendChild(element)

    return element;

}



/***/ }),

/***/ "./src/component/cp-init-page.js":
/*!***************************************!*\
  !*** ./src/component/cp-init-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp-createElementWithText */ "./src/component/cp-createElementWithText.js");
/* harmony import */ var _cp_createBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cp-createBoard */ "./src/component/cp-createBoard.js");




function initPage()
{
    (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('h1',"Knight Travails",(0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("title"),"title")
    const divGestion = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("gestion");
    const btnReset = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('button',"Reset Board",divGestion,"btn");
    (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('h3',"Click on the board to place Knight",divGestion,"info-display");

    const boardDiv = (0,_cp_createBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    
}

/***/ }),

/***/ "./src/component/prettyPrint.js":
/*!**************************************!*\
  !*** ./src/component/prettyPrint.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prettyPrintGraph)
/* harmony export */ });

function prettyPrintGraph(node, visited = new Set(), prefix = "") {
  if (visited.has(node)) {
      return; // Si le nœud a déjà été visité, arrêter pour éviter les cycles infinis
  }
  visited.add(node); // Marquer le nœud comme visité

  console.log(prefix + node.value); // Afficher la valeur du nœud

  node.edges.forEach(childNode => {
      prettyPrintGraph(childNode, visited, prefix + "   ");
  });
}


/***/ }),

/***/ "./src/logic/logic.js":
/*!****************************!*\
  !*** ./src/logic/logic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllMovePossible: () => (/* binding */ getAllMovePossible),
/* harmony export */   getPositionWanted: () => (/* binding */ getPositionWanted),
/* harmony export */   initGraph: () => (/* binding */ initGraph)
/* harmony export */ });
/* harmony import */ var _Class_Knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Class/Knight */ "./src/Class/Knight.js");
/* harmony import */ var _Class_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Class/Node */ "./src/Class/Node.js");
/* harmony import */ var _Class_Graph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Class/Graph.js */ "./src/Class/Graph.js");
/* harmony import */ var _component_prettyPrint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/prettyPrint */ "./src/component/prettyPrint.js");





function getPositionWanted() {
    return new Promise((resolve) => {
    const cases = document.querySelector('.board').querySelectorAll('*');
      
  
      function clickHandler(e) {
        e.preventDefault();
        const element = e.currentTarget;
        

        const position = element.classList[1].split('/').map((string) => parseFloat(string));
        resolve(position);

        cases.forEach((caseElement) => {
        caseElement.removeEventListener('click', clickHandler);

        });
        return position;
      }  
      cases.forEach((element) => {
        element.addEventListener('click', clickHandler);
      });
    });
}

function getAllMovePossible(knight)
{
    const allNextMovePossible = [];
    const cases = document.querySelector('.board').querySelectorAll('*');
    cases.forEach(element => {
        let position = element.classList[1].split('/').map((string)=>parseFloat(string))
        if(knight.isMovementValid(position))
        {
            allNextMovePossible.push(position)     
        }
    })

    return allNextMovePossible;
}

function initGraph()
{
    const knightMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

    const chessGraph = new _Class_Graph_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

    // Ajouter des nœuds pour chaque position sur l'échiquier
    for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        chessGraph.addNode([x, y]);
    }
    }

    // Ajouter des arêtes pour les mouvements valides du cavalier
    for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        knightMoves.forEach(move => {
        const newX = x + move[0];
        const newY = y + move[1];

        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            chessGraph.addEdge([x, y], [newX, newY]);
        }
        });
    }
    }
    return chessGraph;
}

/***/






/***/ }),

/***/ "./src/font/Pacifico-Regular.ttf":
/*!***************************************!*\
  !*** ./src/font/Pacifico-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0d735fc04154e03a691.ttf";

/***/ }),

/***/ "./src/icon/knight-icon-border.png":
/*!*****************************************!*\
  !*** ./src/icon/knight-icon-border.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eaebfbc08f771e13bd3.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/*!********************************!*\
  !*** ./src/knight-travails.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ "./src/css/style.css");
/* harmony import */ var _Class_Knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Class/Knight */ "./src/Class/Knight.js");
/* harmony import */ var _component_cp_init_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/cp-init-page */ "./src/component/cp-init-page.js");
/* harmony import */ var _logic_logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/logic.js */ "./src/logic/logic.js");







(0,_component_cp_init_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
let chessGraph = (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_3__.initGraph)();
let knight = null
const cases= document.querySelector('.board').querySelectorAll('*')

makeMove();

function makeMove()
{
    (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_3__.getPositionWanted)()
        .then((position)=>{
            knight = new _Class_Knight__WEBPACK_IMPORTED_MODULE_1__["default"](position)
            cases.forEach(element => {
                document.querySelector('.info-display').innerText="Now click on the destination you want to reach !  "
                let position = element.classList[1].split('/').map((string)=>parseFloat(string))
                    if(knight._position[0] === position[0]&& knight._position[1]=== position[1])
                    {
                        element.classList.toggle('knight-icon')
                        element.innerText ="Start"
                        element.classList.add('start')
                    }   
            })
        }).
            then(()=>{
                (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_3__.getPositionWanted)()
                .then((position) => {

                    cases.forEach(element => {
                        let p = element.classList[1].split('/').map((string)=>parseFloat(string))
                            if(p[0] === position[0]&& p[1]=== position[1])   
                            {
                                element.innerText = "X"
                                    
                            }        
                        
                    });
                    const movement = knight.shortedWayToPosition(knight._position,position,chessGraph);
                    
                    simulateKnightMoveOnBoard(movement)
                    
                });
        })
}


function moveKnightOnBoard(kPosition)
{
    cases.forEach(element => {
        element.classList.remove('knight-icon');
    });
  
    cases.forEach(element => {
        let position = element.classList[1].split('/').map((string)=>parseFloat(string))
            if(kPosition[0] === position[0]&& kPosition[1]=== position[1])   
            {
                element.classList.toggle('knight-icon')
                element.innerText="Visited"
                    
            }        
        
    });
}

function simulateKnightMoveOnBoard(movement)
{
    let currentIndex = 0
    let moveInterval = setInterval(() => {
        if (currentIndex < movement.length) {
            moveKnightOnBoard(movement[currentIndex]);
            currentIndex++;
        } else {
            
            clearInterval(moveInterval); 
            document.querySelector('.knight-icon').innerText = " "
            document.querySelector('.btn').addEventListener('click',reset);

        }
    }, 750);
    
}



function reset() {
    document.querySelector('.btn').removeEventListener('click',reset);

  // Supprimez la classe 'knight-icon' et réinitialisez le contenu des éléments
  cases.forEach(element => {
    element.classList.remove('knight-icon', 'start');
    element.innerText = "";
  });

  // Réinitialisez le texte de la zone d'information
  document.querySelector('.info-display').innerText = "Click on the starting position to begin.";

  // Réinitialisez la classe CSS du bouton
  document.querySelector('.btn').classList.remove('disabled');

  // Réinitialisez le graphique, le chevalier, et tout autre état nécessaire
  chessGraph = (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_3__.initGraph)();
  knight = null;

  makeMove();
}




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map