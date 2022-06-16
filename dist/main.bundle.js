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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nh1 {\\n  font-size: 16px;\\n  padding-left: 10px;\\n  font-weight: 500;\\n  align-self: flex-start;\\n  padding-bottom: 10px;\\n}\\n\\nheader,\\nfooter {\\n  position: fixed;\\n  height: 36px;\\n  padding: 10px 20px;\\n  background-color: #d3d3d3;\\n  width: 100vw;\\n}\\n\\nheader { top: 0; }\\n\\nfooter { bottom: 0; }\\n\\nmain {\\n  width: 100vw;\\n  height: calc(100vh - 72px);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.tasks {\\n  list-style: none;\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n  height: 48px;\\n  border-bottom: 1px solid #d3d3d3;\\n  padding-left: 10px;\\n}\\n\\n.container {\\n  width: 50%;\\n  min-width: 290px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  border: 1px solid #d3d3d3;\\n  box-shadow: 2px 2px 5px rgb(0 0 0 / 90%);\\n  padding: 15px 0;\\n}\\n\\n.btn-clear {\\n  border: none;\\n  background-color: transparent;\\n  margin-top: 15px;\\n}\\n\\n.btn-clear:hover {\\n  cursor: pointer;\\n  color: crimson;\\n}\\n\\n#new-task-ph,\\nul,\\nli { width: 100%; }\\n\\n#new-task-ph {\\n  /* list-style: none; */\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n  justify-content: space-between;\\n  height: 56px;\\n  border-left: none;\\n  border-right: none;\\n  border-top: 1px solid #d3d3d3;\\n  border-bottom: 1px solid #d3d3d3;\\n  padding: 5px 10px;\\n}\\n\\n.task-desc,\\n#new-task {\\n  border: none;\\n  outline: none;\\n  height: 100%;\\n  font-size: 16px;\\n}\\n\\n.completed {\\n  color: red;\\n  text-decoration-line: line-through;\\n}\\n\\n#new-task { width: calc(100% - 44px); }\\n\\n.task-desc { width: fit-content; }\\n\\n.item-btns {\\n  margin-left: auto;\\n  margin-right: 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-organiser/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_newTask_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/newTask_handler.js */ \"./src/modules/newTask_handler.js\");\n/* harmony import */ var _modules_render_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render_functions.js */ \"./src/modules/render_functions.js\");\n/* harmony import */ var _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearAll.js */ \"./src/modules/clearAll.js\");\n\n\n\n\n\n(0,_modules_render_functions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_newTask_handler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ndocument.getElementById('btn-clear').addEventListener('click', _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n//# sourceURL=webpack://task-organiser/./src/index.js?");

/***/ }),

/***/ "./src/modules/checked.js":
/*!********************************!*\
  !*** ./src/modules/checked.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_DatabaseMS.js */ \"./src/modules/task_DatabaseMS.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/modules/reset_functions.js\");\n\n\n\nconst checkToggle = (event) => {\n  // evenhandling\n  const checkID = event.target.id;\n  const checkValue = document.getElementById(checkID).checked;\n  _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[checkID - 1].completed = checkValue;\n  (0,_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();\n  const icon = document.getElementById(`icon-${checkID}`);\n  const textDesc = document.getElementById(`desc-${checkID}`);\n  textDesc.classList.toggle('completed');\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetIcon)();\n  icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');\n  if (checkValue) {\n    icon.classList.add('bi-trash3');\n  } else {\n    icon.classList.add('bi-three-dots-vertical');\n  }\n};\n\nconst checkChanged = (eID) => {\n  const chk = document.getElementById(`${eID}`);\n  chk.addEventListener('change', checkToggle);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkChanged);\n\n//# sourceURL=webpack://task-organiser/./src/modules/checked.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_DatabaseMS.js */ \"./src/modules/task_DatabaseMS.js\");\n/* harmony import */ var _task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_UI_Manager.js */ \"./src/modules/task_UI_Manager.js\");\n\n\n\nconst delCompleted = () => {\n  (0,_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.clearCompleted)();\n  (0,_task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_1__.populateTaskList)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delCompleted);\n\n//# sourceURL=webpack://task-organiser/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/event_handlers.js":
/*!***************************************!*\
  !*** ./src/modules/event_handlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addIconEvent\": () => (/* binding */ addIconEvent),\n/* harmony export */   \"addInputDescEvent\": () => (/* binding */ addInputDescEvent)\n/* harmony export */ });\n/* harmony import */ var _task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_UI_Manager.js */ \"./src/modules/task_UI_Manager.js\");\n/* harmony import */ var _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_DatabaseMS.js */ \"./src/modules/task_DatabaseMS.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/modules/reset_functions.js\");\n/* || ============== Event Handlers ============= || */\n\n                                                                                                                                               // eslint-disable-line\n\n\n\nconst addInputDescEvent = (eID) => {\n  const inputDesc = document.getElementById(`desc-${eID}`);\n  const icon = document.getElementById(`icon-${eID}`);\n  inputDesc.addEventListener('focus', (e) => {\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_2__.resetIcon)();\n    icon.classList.remove('bi-three-dots-vertical');\n    icon.classList.add('bi-trash3');\n    e.stopPropagation();\n  });\n\n  inputDesc.addEventListener('change', (e) => {\n    if (inputDesc.value.trim() === '') {\n      alert('Task Cannot be Empty \\n task not change!');\n      inputDesc.value = _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.arrTasks[eID - 1].description;\n    } else {\n      _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.arrTasks[eID - 1].description = inputDesc.value.trim();\n      (0,_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.saveLocal)();\n    }\n    icon.classList.remove('bi-trash3');\n    icon.classList.add('bi-three-dots-vertical');\n    inputDesc.blur();\n    e.stopImmediatePropagation();\n  });\n};\n\nconst addIconEvent = (eID) => {\n  const icon = document.getElementById(`icon-${eID}`);\n  icon.addEventListener('click', (e) => {\n    if (icon.classList.contains('bi-three-dots-vertical')) {\n      document.getElementById(`desc-${eID}`).focus();\n    } else {\n      (0,_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.delTask)(eID - 1);\n      (0,_task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_0__.populateTaskList)();\n    }\n    e.stopPropagation();\n  });\n};\n\n\n/* || ============== Event Handlers  Ends============= || */\n\n//# sourceURL=webpack://task-organiser/./src/modules/event_handlers.js?");

/***/ }),

/***/ "./src/modules/newTask_handler.js":
/*!****************************************!*\
  !*** ./src/modules/newTask_handler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_UI_Manager.js */ \"./src/modules/task_UI_Manager.js\");\n/* harmony import */ var _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_DatabaseMS.js */ \"./src/modules/task_DatabaseMS.js\");\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event_handlers.js */ \"./src/modules/event_handlers.js\");\n/* harmony import */ var _checked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checked.js */ \"./src/modules/checked.js\");\n\n\n\n\n\nconst newTaskListener = () => {\n  const textInput = document.getElementById('new-task');\n  textInput.addEventListener('change', (event) => {\n    event.preventDefault();\n    if (textInput.value.trim() === '') {\n      alert('Sorry! Task Cannot be Empty \\n Tasks Not added');\n    } else {\n      (0,_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.addTask)((0,_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.Task)(textInput.value.trim()));\n      const ulTasks = document.getElementById('ul-tasks');\n      const newTaskAdded = _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.arrTasks[_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_1__.arrTasks.length - 1];\n      ulTasks.appendChild((0,_task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_0__.compileTaskItem)(newTaskAdded));\n      (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_2__.addIconEvent)(newTaskAdded.index);\n      (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_2__.addInputDescEvent)(newTaskAdded.index);\n      (0,_checked_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newTaskAdded.index);\n    }\n    textInput.value = '';\n    textInput.blur();\n    event.stopPropagation();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskListener);\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/newTask_handler.js?");

/***/ }),

/***/ "./src/modules/render_functions.js":
/*!*****************************************!*\
  !*** ./src/modules/render_functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_DatabaseMS.js */ \"./src/modules/task_DatabaseMS.js\");\n/* harmony import */ var _task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task_UI_Manager.js */ \"./src/modules/task_UI_Manager.js\");\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event_handlers.js */ \"./src/modules/event_handlers.js\");\n/* harmony import */ var _checked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checked.js */ \"./src/modules/checked.js\");\n\n\n\n\n\nconst renderUI = () => {\n  (0,_task_UI_Manager_js__WEBPACK_IMPORTED_MODULE_1__.populateTaskList)();\n  if (_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks.length === 0) {\n    for (let i = 0; i < _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks.length; i += 1) {\n      (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_2__.addIconEvent)(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i].index);\n      (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_2__.addInputDescEvent)(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i].index);\n      (0,_checked_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i].index);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUI);\n\n//# sourceURL=webpack://task-organiser/./src/modules/render_functions.js?");

/***/ }),

/***/ "./src/modules/reset_functions.js":
/*!****************************************!*\
  !*** ./src/modules/reset_functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetIcon\": () => (/* binding */ resetIcon),\n/* harmony export */   \"resetTasks\": () => (/* binding */ resetTasks)\n/* harmony export */ });\n/* || ============== Reset Functions  ============= || */\n\nconst resetTasks = () => {\n  const ulTasks = document.getElementById('ul-tasks');\n  ulTasks.innerHTML = '';\n};\n\nconst resetIcon = () => {\n  const icons = Array.from(document.getElementsByClassName('item-btns'));\n\n  icons.forEach((icon) => {\n    icon.classList.remove('bi-trash3', 'bi-three-dots-vertical');\n    const chBox = document.getElementById(icon.id.replace(/\\D/gi, '')).checked;\n    if (chBox) {\n      icon.classList.add('bi-trash3');\n    } else {\n      icon.classList.add('bi-three-dots-vertical');\n    }\n  });\n};\n\n\n/* || ============== Reset Functions Ends ============= || */\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/reset_functions.js?");

/***/ }),

/***/ "./src/modules/task_DatabaseMS.js":
/*!****************************************!*\
  !*** ./src/modules/task_DatabaseMS.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"arrTasks\": () => (/* binding */ arrTasks),\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"delTask\": () => (/* binding */ delTask),\n/* harmony export */   \"saveLocal\": () => (/* binding */ saveLocal),\n/* harmony export */   \"updateIndex\": () => (/* binding */ updateIndex)\n/* harmony export */ });\n// || =============== Tasks Manager ================== ||\nconst arrTaskss = JSON.parse(localStorage.getItem('arrTaskLocal')) || [];\n\nlet arrTasks = arrTaskss;                                                                                                                                                                                                                                                                                              // eslint-disable-line         \n\nconst saveLocal = () => {\n  localStorage.setItem('arrTaskLocal', JSON.stringify(arrTasks));\n};\n\nconst Task = (description) => ({ index: arrTasks.length + 1 || 1, description, completed: false });\nconst addTask = (task) => {\n  arrTasks.push(task);\n  saveLocal();\n};\n\nconst updateIndex = () => {\n  for (let i = 0; i < arrTasks.length; i += 1) {\n    arrTasks[i].index = i + 1;\n  }\n  saveLocal();\n};\n\nconst delTask = (arrIndex) => {\n  arrTasks.splice(arrIndex, 1);\n  updateIndex();\n};\n\nconst clearCompleted = () => {\n  arrTasks = arrTasks.filter((t) => t.completed === false);\n  updateIndex();\n};\n\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/task_DatabaseMS.js?");

/***/ }),

/***/ "./src/modules/task_UI_Manager.js":
/*!****************************************!*\
  !*** ./src/modules/task_UI_Manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compileTaskItem\": () => (/* binding */ compileTaskItem),\n/* harmony export */   \"populateTaskList\": () => (/* binding */ populateTaskList)\n/* harmony export */ });\n/* harmony import */ var _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_DatabaseMS.js */ \"./src/modules/task_DatabaseMS.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/modules/reset_functions.js\");\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event_handlers.js */ \"./src/modules/event_handlers.js\");\n/* harmony import */ var _checked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checked.js */ \"./src/modules/checked.js\");\n\n\n                                                                           // eslint-disable-line\n\n\nconst compileTaskItem = (task) => {\n  // Compiling Task Card\n  const liTask = document.createElement('li');\n  liTask.id = `task-${task.index}`;\n  liTask.className = 'tasks';\n\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.checked = task.completed;\n  checkbox.id = task.index;\n\n  const inputDesc = document.createElement('input');\n  inputDesc.id = `desc-${task.index}`;\n  inputDesc.type = 'text';\n  inputDesc.value = task.description;\n  inputDesc.className = 'task-desc';\n\n  const iCon = document.createElement('i');\n  if (checkbox.checked) {\n    iCon.classList.add('item-btns', 'bi', 'bi-trash3');\n    inputDesc.classList.add('completed');\n  } else {\n    iCon.classList.add('item-btns', 'bi', 'bi-three-dots-vertical');\n  }\n  iCon.id = `icon-${task.index}`;\n  liTask.append(checkbox, inputDesc, iCon);\n  return liTask;\n};\n\nconst populateTaskList = () => {\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetTasks)();\n  const ulTasks = document.getElementById('ul-tasks');\n  for (let i = 0; i < _task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks.length; i += 1) {\n    ulTasks.appendChild(compileTaskItem(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i]));\n    (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_2__.addIconEvent)(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i].index);\n    (0,_event_handlers_js__WEBPACK_IMPORTED_MODULE_2__.addInputDescEvent)(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i].index);\n    (0,_checked_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_task_DatabaseMS_js__WEBPACK_IMPORTED_MODULE_0__.arrTasks[i].index);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://task-organiser/./src/modules/task_UI_Manager.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);