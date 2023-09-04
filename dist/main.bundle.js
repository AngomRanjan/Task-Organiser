"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktask_organiser"] = self["webpackChunktask_organiser"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 16px;\\r\\n  padding-left: 10px;\\r\\n  font-weight: 500;\\r\\n  align-self: flex-start;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  height: 36px;\\r\\n  padding: 10px 20px;\\r\\n  background-color: #d3d3d3;\\r\\n  width: 100vw;\\r\\n}\\r\\n\\r\\nheader { top: 0; }\\r\\n\\r\\nfooter { bottom: 0; }\\r\\n\\r\\nmain {\\r\\n  width: 100vw;\\r\\n  height: calc(100vh - 72px);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  align-items: center;\\r\\n  height: 48px;\\r\\n  border-bottom: 1px solid #d3d3d3;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 50%;\\r\\n  min-width: 290px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border: 1px solid #d3d3d3;\\r\\n  box-shadow: 2px 2px 5px rgb(0 0 0 / 90%);\\r\\n  padding: 15px 0;\\r\\n}\\r\\n\\r\\n.btn-clear {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n\\r\\n.btn-clear:hover {\\r\\n  cursor: pointer;\\r\\n  color: crimson;\\r\\n}\\r\\n\\r\\n#new-task-ph,\\r\\nul,\\r\\nli { width: 100%; }\\r\\n\\r\\n#new-task-ph {\\r\\n  /* list-style: none; */\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  height: 56px;\\r\\n  border-left: none;\\r\\n  border-right: none;\\r\\n  border-top: 1px solid #d3d3d3;\\r\\n  border-bottom: 1px solid #d3d3d3;\\r\\n  padding: 5px 10px;\\r\\n}\\r\\n\\r\\n.task-desc,\\r\\n#new-task {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  height: 100%;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n[type='checkbox']:checked + input {\\r\\n  color: red;\\r\\n  text-decoration-line: line-through;\\r\\n}\\r\\n\\r\\n[type='text']:focus + i {\\r\\n  color: grey;\\r\\n}\\r\\n\\r\\n.bi-trash3 {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n#new-task { width: calc(100% - 44px); }\\r\\n\\r\\n.task-desc { width: fit-content; }\\r\\n\\r\\n.item-btns {\\r\\n  margin-left: auto;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-organiser/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://task-organiser/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task-organiser/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task-organiser/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task-organiser/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task-organiser/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task-organiser/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task-organiser/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task-organiser/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task-organiser/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_renderUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderUI.js */ \"./src/modules/renderUI.js\");\n\r\n\r\n\r\n(0,_modules_renderUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://task-organiser/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTaskItem.js":
/*!************************************!*\
  !*** ./src/modules/addTaskItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _to_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_class.js */ \"./src/modules/to_class.js\");\n/* harmony import */ var _appendTaskUL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendTaskUL.js */ \"./src/modules/appendTaskUL.js\");\n/* harmony import */ var _saveLocal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveLocal.js */ \"./src/modules/saveLocal.js\");\n\r\n\r\n\r\n\r\nconst addTaskItem = (description) => {  \r\n  if (_to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isExist(description))\r\n    return alert('Add Task Failed!\\nTask Already Exists.');\r\n  _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(description);\r\n  (0,_saveLocal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_appendTaskUL_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lastItem);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskItem);\n\n//# sourceURL=webpack://task-organiser/./src/modules/addTaskItem.js?");

/***/ }),

/***/ "./src/modules/appendTaskUL.js":
/*!*************************************!*\
  !*** ./src/modules/appendTaskUL.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _compileTaskCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compileTaskCard.js */ \"./src/modules/compileTaskCard.js\");\n/* harmony import */ var _to_addEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to_addEvents.js */ \"./src/modules/to_addEvents.js\");\n\r\n\r\n\r\nconst appendTaskUL = (task) => {\r\n  const ulTasks = document.getElementById('ul-tasks');\r\n  ulTasks.appendChild((0,_compileTaskCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task));\r\n  (0,_to_addEvents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ulTasks.lastElementChild);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTaskUL);\n\n//# sourceURL=webpack://task-organiser/./src/modules/appendTaskUL.js?");

/***/ }),

/***/ "./src/modules/compileTaskCard.js":
/*!****************************************!*\
  !*** ./src/modules/compileTaskCard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst compileTaskCard = ({ index, description, completed }) => {\r\n  // Compiling Task Card\r\n  const liTask = document.createElement('li');\r\n  liTask.id = `task-${index}`;\r\n  liTask.className = 'tasks';\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.type = 'checkbox';\r\n  checkbox.checked = completed;\r\n  checkbox.id = index;\r\n\r\n  const inputDesc = document.createElement('input');\r\n  inputDesc.id = `desc-${index}`;\r\n  inputDesc.type = 'text';\r\n  inputDesc.value = description;\r\n  inputDesc.className = completed ? 'task-desc completed' : 'task-desc';\r\n\r\n  const iCon = document.createElement('i');\r\n  iCon.className = completed ? 'item-btns bi bi-trash3' : 'item-btns bi bi-three-dots-vertical';\r\n  iCon.id = `icon-${index}`;\r\n  liTask.append(checkbox, inputDesc, iCon);\r\n  return liTask;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compileTaskCard);\r\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/compileTaskCard.js?");

/***/ }),

/***/ "./src/modules/removeTaskItem.js":
/*!***************************************!*\
  !*** ./src/modules/removeTaskItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _to_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_class.js */ \"./src/modules/to_class.js\");\n/* harmony import */ var _saveLocal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveLocal.js */ \"./src/modules/saveLocal.js\");\n\r\n\r\n\r\nconst updateElementId = (firstItem, lastItem) => {\r\n  for (let i = firstItem; i <= lastItem; i += 1) {\r\n    const li = document.getElementById(`task-${i}`);\r\n    const inputText = document.getElementById(`desc-${i}`);\r\n    const chkBox = document.getElementById(`${i}`);\r\n    const icon = document.getElementById(`icon-${i}`);\r\n    li.id = `task-${i - 1}`;\r\n    inputText.id = `desc-${i - 1}`;\r\n    chkBox.id = `${i - 1}`;\r\n    icon.id = `icon-${i - 1}`;\r\n  }\r\n};\r\n\r\nconst removeTaskItem = (taskLi) => {\r\n  const eID = taskLi.id.split('-')[1];\r\n  _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(eID - 1);\r\n  (0,_saveLocal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  taskLi.parentNode.removeChild(taskLi);\r\n  updateElementId(Number(eID) + 1, _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.length + 1);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskItem);\r\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/removeTaskItem.js?");

/***/ }),

/***/ "./src/modules/renderUI.js":
/*!*********************************!*\
  !*** ./src/modules/renderUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _to_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_class.js */ \"./src/modules/to_class.js\");\n/* harmony import */ var _addTaskItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskItem.js */ \"./src/modules/addTaskItem.js\");\n/* harmony import */ var _appendTaskUL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appendTaskUL.js */ \"./src/modules/appendTaskUL.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/modules/reset_functions.js\");\n/* harmony import */ var _saveLocal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveLocal.js */ \"./src/modules/saveLocal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst addForm = document.getElementById('new-task-ph');\r\nconst btnClear = document.getElementById('btn-clear');\r\n\r\nconst populateList = () => {\r\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_3__.resetTasks)();\r\n  _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.forEach((task) => (0,_appendTaskUL_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task));\r\n};\r\n\r\nconst delCompleted = () => {\r\n  _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearCompleted();\r\n  (0,_saveLocal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  populateList();\r\n};\r\n\r\nconst handleAddForm = (e) => {\r\n  e.preventDefault();\r\n  const taskDesc = e.target.elements['new-task'].value.trim();\r\n  (0,_addTaskItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskDesc);\r\n  e.target.reset();\r\n};\r\n\r\nconst renderUI = () => {\r\n  populateList();\r\n  addForm.addEventListener('submit', handleAddForm);\r\n  btnClear.addEventListener('click', delCompleted);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUI);\r\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/renderUI.js?");

/***/ }),

/***/ "./src/modules/reset_functions.js":
/*!****************************************!*\
  !*** ./src/modules/reset_functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetIcon\": () => (/* binding */ resetIcon),\n/* harmony export */   \"resetTasks\": () => (/* binding */ resetTasks)\n/* harmony export */ });\n/* || ============== Reset Functions  ============= || */\r\n\r\nconst resetTasks = () => {\r\n  const ulTasks = document.getElementById('ul-tasks');\r\n  ulTasks.innerHTML = '';\r\n};\r\n\r\nconst resetIcon = () => {\r\n  const icons = Array.from(document.getElementsByClassName('item-btns'));\r\n\r\n  icons.forEach((icon) => {\r\n    const checkBox = icon.parentNode.firstElementChild;\r\n    icon.className = checkBox.checked ? 'item-btns bi bi-trash3'\r\n                                      : 'item-btns bi bi-three-dots-vertical';\r\n  });\r\n};\r\n\r\n\r\n/* || ============== Reset Functions Ends ============= || */\r\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/reset_functions.js?");

/***/ }),

/***/ "./src/modules/saveLocal.js":
/*!**********************************!*\
  !*** ./src/modules/saveLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _to_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_class.js */ \"./src/modules/to_class.js\");\n\r\n\r\nconst saveLocal = () => {\r\n  localStorage.setItem('arrTaskLocal', JSON.stringify(_to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveLocal);\n\n//# sourceURL=webpack://task-organiser/./src/modules/saveLocal.js?");

/***/ }),

/***/ "./src/modules/to_addEvents.js":
/*!*************************************!*\
  !*** ./src/modules/to_addEvents.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _to_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_class.js */ \"./src/modules/to_class.js\");\n/* harmony import */ var _removeTaskItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTaskItem.js */ \"./src/modules/removeTaskItem.js\");\n/* harmony import */ var _saveLocal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveLocal.js */ \"./src/modules/saveLocal.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/modules/reset_functions.js\");\n\r\n\r\n\r\n\r\n\r\nconst taskDescFocus = (e) => {\r\n  const icon = e.target.nextElementSibling;\r\n  icon.className = 'item-btns bi bi-trash3';\r\n  e.stopPropagation();\r\n};\r\n\r\nconst taskDescBlur = () => {\r\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_3__.resetIcon)();\r\n};\r\n\r\nconst taskDescChanged = (e) => {\r\n  const inputDesc = e.target;\r\n  const arrIndex = (inputDesc.id).split('-')[1] - 1;\r\n  const newDesc = inputDesc.value.trim();\r\n  if (newDesc === '' || _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isExist(newDesc)) {\r\n    const msg = (newDesc === '') ? 'Cannot Be Empty' : 'Already Exists';\r\n    alert(`Task Change Failed!\\nTask ${msg}.`);\r\n    inputDesc.value = _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[arrIndex].description;\r\n  } else {\r\n    _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editTask(arrIndex, newDesc);\r\n    (0,_saveLocal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  }\r\n  // inputDesc.blur();\r\n  inputDesc.previousElementSibling.focus();\r\n};\r\n\r\nconst chkBoxClicked = (e) => {\r\n  const checkBox = e.target;\r\n  _to_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[checkBox.id - 1].completed = checkBox.checked;\r\n  (0,_saveLocal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const icon = checkBox.nextElementSibling.nextElementSibling;\r\n  icon.className = checkBox.checked ? 'item-btns bi bi-trash3'\r\n                                      : 'item-btns bi bi-three-dots-vertical';\r\n};\r\n\r\nconst iconDelEditClicked = (e) => {\r\n  const icon = e.target;\r\n  const targetInput = icon.previousElementSibling;\r\n  if (icon.classList.contains('bi-three-dots-vertical'))\r\n    targetInput.focus();\r\n  else\r\n    (0,_removeTaskItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(icon.parentNode);\r\n  e.stopPropagation();\r\n};\r\n\r\nconst addEvents = (eID) => {\r\n  const chkBox = eID.children[0];\r\n  const taskDesc = eID.children[1];\r\n  const iconDelEdit = eID.children[2];\r\n  taskDesc.addEventListener('focus', taskDescFocus);\r\n  taskDesc.addEventListener('change', taskDescChanged);\r\n  taskDesc.addEventListener('blur', taskDescBlur);\r\n  iconDelEdit.addEventListener('click', iconDelEditClicked);\r\n  chkBox.addEventListener('click', chkBoxClicked);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEvents);\n\n//# sourceURL=webpack://task-organiser/./src/modules/to_addEvents.js?");

/***/ }),

/***/ "./src/modules/to_class.js":
/*!*********************************!*\
  !*** ./src/modules/to_class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// || =============== Tasks Class ================== ||\r\nclass ArrTasks {\r\n  #tasks;\r\n  constructor(list) {\r\n    this.#tasks = list || [];\r\n  }\r\n\r\n  get tasks() {\r\n    return this.#tasks;\r\n  }\r\n\r\n  get length() {\r\n    return this.#tasks.length;\r\n  }\r\n\r\n  get lastItem() {\r\n    return this.#tasks[this.length-1];\r\n  }\r\n\r\n  isExist(desc) {\r\n    return this.#tasks.find(item => item.description === desc);\r\n  };\r\n\r\n  newTask(description) {\r\n    return {\r\n      index: this.length + 1,\r\n      description: description.trim(),\r\n      completed: false,\r\n    };\r\n  }\r\n\r\n  updateIndex() {\r\n    // this.#tasks = this.#tasks.map((task, i) => { task.index = i + 1; return task; });\r\n  this.#tasks.map((task, i) => task.index = i + 1, { ...task })\r\n  }\r\n  \r\n  addTask(description) {\r\n    this.#tasks.push(this.newTask(description));\r\n  }\r\n\r\n  deleteTask(index) {\r\n    this.#tasks.splice(index, 1);\r\n    this.updateIndex();\r\n  }\r\n\r\n  editTask(index, newVal) {\r\n    this.#tasks[index].description = newVal;\r\n  }\r\n\r\n  clearCompleted() {\r\n    this.#tasks = this.#tasks.filter((t) => t.completed === false);\r\n    this.updateIndex();\r\n  }\r\n};\r\n\r\nconst arrTasks =new ArrTasks(JSON.parse(localStorage.getItem('arrTaskLocal')));\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrTasks);\r\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/to_class.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);