"use strict";
(self["webpackChunkcapstone_movies_api"] = self["webpackChunkcapstone_movies_api"] || []).push([["index"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n  column-gap: 100px;\r\n}\r\n\r\nheader img {\r\n  width: 300px;\r\n  height: 100px;\r\n  animation-name: showlogo;\r\n  animation-duration: 4s;\r\n}\r\n\r\n@keyframes showlogo {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 300px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n#categories {\r\n  display: flex;\r\n  column-gap: 50px;\r\n  padding-left: 0;\r\n}\r\n\r\n#categories li {\r\n  list-style: none;\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10%;\r\n  border: 1px solid black;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.poster {\r\n  width: 100%;\r\n  height: 100%;\r\n  animation-name: showitems;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes showitems {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.like {\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.like:active {\r\n  filter:\r\n    invert(16%) sepia(99%) saturate(7404%) hue-rotate(4deg)\r\n    brightness(95%) contrast(118%);\r\n}\r\n\r\n.like-text {\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n}\r\n\r\n.reservations {\r\n  border: solid black 1px;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n}\r\n\r\n/* comments pop-up section starts here */\r\n\r\n.moviediv {\r\n  display: grid;\r\n  grid-template-columns: 33% 33% 33%;\r\n  grid-template-rows: auto auto auto auto;\r\n  gap: 10px;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.comments {\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.cont-pop-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  width: 96%;\r\n  margin: auto;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgb(206, 209, 202);\r\n  width: 75%;\r\n  height: 100%;\r\n  bottom: 0;\r\n  margin-left: 41px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.modal.active {\r\n  display: block;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n  width: 90%;\r\n}\r\n\r\n.close-button {\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: -0.5rem 1rem -0.5rem auto;\r\n}\r\n\r\n.modal img {\r\n  width: 64%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.movie-title {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 8px;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 0;\r\n  gap: 25px;\r\n}\r\n\r\n.comment-list {\r\n  width: 80%;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  min-height: 50px;\r\n  max-height: 80px;\r\n  overflow-y: auto;\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comments-li {\r\n  list-style: none;\r\n}\r\n\r\n.addcom {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.username {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.insight {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  height: 50px;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.addnew-btn {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  background-color: rgba(216, 210, 210, 0.822);\r\n  border: 1px solid;\r\n  width: 65px;\r\n  margin-top: 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.addnew-btn:hover {\r\n  background-color: rgb(86, 192, 206);\r\n}\r\n\r\n.message {\r\n  display: none;\r\n  color: red;\r\n}\r\n\r\n.message.active {\r\n  display: block;\r\n}\r\n\r\n/* Comments-popup section finish */\r\nfooter {\r\n  border: solid black 2px;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  background-color: rgb(203, 203, 203);\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    column-gap: 10px;\r\n  }\r\n\r\n  header img {\r\n    width: 150px;\r\n    height: 60px;\r\n    animation-name: showlogo;\r\n    animation-duration: 4s;\r\n  }\r\n\r\n  @keyframes showlogo {\r\n    from {\r\n      width: 1px;\r\n      height: 1px;\r\n    }\r\n\r\n    to {\r\n      width: 150px;\r\n      height: 60px;\r\n    }\r\n  }\r\n\r\n  #categories {\r\n    column-gap: 10px;\r\n  }\r\n\r\n  #categories li {\r\n    list-style: none;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .title {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .like {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .like-text {\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n  }\r\n\r\n  .comments {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .reservations {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .moviediv {\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    grid-template-rows: auto;\r\n    gap: 10px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    background-color: rgb(206, 209, 202);\r\n    width: 100%;\r\n    height: 100%;\r\n    bottom: 0;\r\n    left: -160px;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .comment-form {\r\n    margin-bottom: 100px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n  column-gap: 100px;\r\n}\r\n\r\nheader img {\r\n  width: 300px;\r\n  height: 100px;\r\n  animation-name: showlogo;\r\n  animation-duration: 4s;\r\n}\r\n\r\n@keyframes showlogo {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 300px;\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n#categories {\r\n  display: flex;\r\n  column-gap: 50px;\r\n  padding-left: 0;\r\n}\r\n\r\n#categories li {\r\n  list-style: none;\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10%;\r\n  border: 1px solid black;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.poster {\r\n  width: 100%;\r\n  height: 100%;\r\n  animation-name: showitems;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes showitems {\r\n  from {\r\n    width: 1px;\r\n    height: 1px;\r\n  }\r\n\r\n  to {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.like {\r\n  width: 30px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.like:active {\r\n  filter:\r\n    invert(16%) sepia(99%) saturate(7404%) hue-rotate(4deg)\r\n    brightness(95%) contrast(118%);\r\n}\r\n\r\n.like-text {\r\n  font-size: 16px;\r\n  font-weight: 200;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-top: 20px;\r\n}\r\n\r\n.reservations {\r\n  border: solid black 1px;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n}\r\n\r\n/* comments pop-up section starts here */\r\n\r\n.moviediv {\r\n  display: grid;\r\n  grid-template-columns: 33% 33% 33%;\r\n  grid-template-rows: auto auto auto auto;\r\n  gap: 10px;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.comments {\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.cont-pop-up {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  width: 96%;\r\n  margin: auto;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: rgb(206, 209, 202);\r\n  width: 75%;\r\n  height: 100%;\r\n  bottom: 0;\r\n  margin-left: 41px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.modal.active {\r\n  display: block;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n  width: 90%;\r\n}\r\n\r\n.close-button {\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: -0.5rem 1rem -0.5rem auto;\r\n}\r\n\r\n.modal img {\r\n  width: 64%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.movie-title {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 8px;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin-top: 0;\r\n  gap: 25px;\r\n}\r\n\r\n.comment-list {\r\n  width: 80%;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  min-height: 50px;\r\n  max-height: 80px;\r\n  overflow-y: auto;\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comments-li {\r\n  list-style: none;\r\n}\r\n\r\n.addcom {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.username {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.insight {\r\n  width: 250px;\r\n  border: 1px solid;\r\n  height: 50px;\r\n  padding: 2%;\r\n  margin: 4% 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.addnew-btn {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  background-color: rgba(216, 210, 210, 0.822);\r\n  border: 1px solid;\r\n  width: 65px;\r\n  margin-top: 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.addnew-btn:hover {\r\n  background-color: rgb(86, 192, 206);\r\n}\r\n\r\n.message {\r\n  display: none;\r\n  color: red;\r\n}\r\n\r\n.message.active {\r\n  display: block;\r\n}\r\n\r\n/* Comments-popup section finish */\r\nfooter {\r\n  border: solid black 2px;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  background-color: rgb(203, 203, 203);\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n    column-gap: 10px;\r\n  }\r\n\r\n  header img {\r\n    width: 150px;\r\n    height: 60px;\r\n    animation-name: showlogo;\r\n    animation-duration: 4s;\r\n  }\r\n\r\n  @keyframes showlogo {\r\n    from {\r\n      width: 1px;\r\n      height: 1px;\r\n    }\r\n\r\n    to {\r\n      width: 150px;\r\n      height: 60px;\r\n    }\r\n  }\r\n\r\n  #categories {\r\n    column-gap: 10px;\r\n  }\r\n\r\n  #categories li {\r\n    list-style: none;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .title {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .like {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .like-text {\r\n    font-size: 12px;\r\n    font-weight: 200;\r\n  }\r\n\r\n  .comments {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .reservations {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .moviediv {\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    grid-template-rows: auto;\r\n    gap: 10px;\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    background-color: rgb(206, 209, 202);\r\n    width: 100%;\r\n    height: 100%;\r\n    bottom: 0;\r\n    left: -160px;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .comment-form {\r\n    margin-bottom: 100px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/home_page/display.js":
/*!**********************************!*\
  !*** ./src/home_page/display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getdata": () => (/* binding */ getdata),
/* harmony export */   "getimg": () => (/* binding */ getimg),
/* harmony export */   "getlikes": () => (/* binding */ getlikes),
/* harmony export */   "likes": () => (/* binding */ likes),
/* harmony export */   "postlike": () => (/* binding */ postlike),
/* harmony export */   "totalitems": () => (/* binding */ totalitems)
/* harmony export */ });
const getdata = async (apiurl) => {
  let response = await fetch(apiurl);
  response = await response.json();
  response = response.map((a) => a.show);
  return response;
};

const getimg = (imgurl) => {
  imgurl = imgurl.map((a) => a.image.original);
  return imgurl;
};

const getlikes = async (likesurl) => {
  let response = await fetch(likesurl);
  response = await response.json();
  return response;
};

const likes = (likesum) => {
  likesum = likesum.map((a) => a.likes);
  return likesum;
};

const postlike = async (newlikeurl, index) => {
  await fetch(newlikeurl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${index + 1}`,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
};

const totalitems = (result) => result.length;



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_page/display.js */ "./src/home_page/display.js");
/* harmony import */ var _like_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like_img.png */ "./src/like_img.png");
/* harmony import */ var _movies_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies_img.png */ "./src/movies_img.png");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");






// Create variables for storing data
const section = document.querySelector('.moviediv');
const logo = document.querySelector('header img');
const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';
const popup = document.querySelector('.modal');
const movies = document.querySelector('#movietotal');
const likesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';
console.log(likesurl);
const commenturl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments/';
const comments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments?item_id=';

let likesnum;
let imgurl;
let likescounter;
let itemscounter;
let commentCounter;
logo.src = _movies_img_png__WEBPACK_IMPORTED_MODULE_3__;

const hide = (msg) => {
  msg.classList.remove('active');
};

// Getting data from Api if promise status resolve
const myPromise = new Promise((resolve) => {
  resolve(_home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.getdata(apiurl));
});

const mypromiseb = new Promise((resolve) => {
  resolve(_home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.getlikes(likesurl));
});

myPromise.then((result) => {
  imgurl = _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.getimg(result);
  itemscounter = _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.totalitems(result);
  movies.textContent = `Movies(${itemscounter})`;
  imgurl.forEach((element, index) => {
    section.innerHTML += `<div class="item">
        <img class="poster" src="${element}" alt="Italian Trulli">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="${_like_img_png__WEBPACK_IMPORTED_MODULE_2__}">
        <p class="like-text"> </p>
        </div>
        </div>
       <button><p class="comments" id="commentid" >Comments</p></button>
        <p class="reservations">Reservations</p>  
        </div>`;
  });
  const commentbutton = document.querySelectorAll('.comments');
  commentbutton.forEach((element, index) => {
    element.addEventListener('click', () => {
      const mypromisec = new Promise((resolve) => {
        resolve((0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.getcomments)(comments, index));
      });
      const popupinfo = (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.getmovie)(result, popup, index);
      section.append(popupinfo);
      popupinfo.classList.add('active');
      const close = document.querySelector('.close-button');
      close.addEventListener('click', () => {
        popupinfo.remove();
      });
      const commentdiv = document.querySelector('.comment-list');
      const count = document.querySelector('.commentsp');
      mypromisec.then((commentarr) => {
        count.textContent = `Comments(${commentarr.length})`;
        commentarr.forEach((element) => {
          commentdiv.innerHTML += `<li class="comments-li">${element.creation_date}  ${element.username}:  ${element.comment}</li>`;
        });
      });
      const inputname = document.querySelector('.username');
      const inputtext = document.querySelector('.insight');
      const commenttext = document.querySelector('.addnew-btn');
      const message = document.querySelector('.message');
      commenttext.addEventListener('click', () => {
        if (inputname.value !== '' && inputtext.value !== '') {
          (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.postComments)(commenturl, index, inputname.value, inputtext.value);
          const [date] = new Date().toISOString().split('T');
          commentdiv.innerHTML += `<li class="comments-li">${date}  ${inputname.value}:  ${inputtext.value}</li>`;
          const commentdivlist = document.querySelectorAll('.comment-list li');
          const commentstotal = (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__.totalcomments)(commentdivlist);
          count.textContent = `Comments(${commentstotal})`;
          inputname.value = '';
          inputtext.value = '';
        } else {
          message.textContent = 'Inputs should not be empty';
          message.classList.add('active');
          setTimeout(() => {
            hide(message);
          }, 2000);
          const list = document.querySelectorAll('.list-item');
          const counts = document.querySelector('.comment');
          commentCounter[index] += +1;
          commenttext.forEach((comments, index) => {
            if (list[index] <= 1) {
              counts.textContent = `Comments (${list.length})`;
            } else {
              counts.textContent = 'Comments (0)';
            }
            commentCounter.classList.add('active');
          });
        }
      });
    });
  });

  const liketext = document.querySelectorAll('.like-text');
  const likebutton = document.querySelectorAll('.like');
  mypromiseb.then((result) => {
    likesnum = _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.likes(result);
    likescounter = likesnum;
    liketext.forEach((element, index) => {
      if (likesnum[index] <= 1) {
        element.textContent = `${likesnum[index]} like`;
      } else {
        element.textContent = `${likesnum[index]} likes`;
      }
    });
    likebutton.forEach((element, index) => {
      element.addEventListener('click', () => {
        _home_page_display_js__WEBPACK_IMPORTED_MODULE_1__.postlike(likesurl, index);
        likescounter[index] += +1;
        liketext.forEach((element, index) => {
          if (likesnum[index] <= 1) {
            element.textContent = `${likescounter[index]} like`;
          } else {
            element.textContent = `${likescounter[index]} likes`;
          }
        });
      });
    });
  });
});


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getcomments": () => (/* binding */ getcomments),
/* harmony export */   "getmovie": () => (/* binding */ getmovie),
/* harmony export */   "postComments": () => (/* binding */ postComments),
/* harmony export */   "totalcomments": () => (/* binding */ totalcomments)
/* harmony export */ });
const getmovie = (result, popup, index) => {
  result = result[index];
  popup.innerHTML = `<div id="modal-pop-up-${result.id}" class="modal-pop-up">
        <div class="cont-pop-up">
          <div class="modal-header">  <button data-id='${result.id}' class="close-button">&times;</button> </div>
            <img class="modal-pop-img" src="${result.image.original}">
            <h2 class="movie-title">${result.name}</h2>
            <div class="movie-info">
                <div class="movie-info1">
                    <p>Premiered: ${result.premiered}</p>
                    <p>Type: ${result.type}</p> 
                </div>
                <div class="movie-info2">
                    <p>Runtime: ${result.runtime}</p>
                    <p>Language: ${result.language}</p>
                </div>
            </div>
            <h3 class="commentsp">comments(</h3>
            <ul class="comment-list"></ul>
            <p class=message></p>
            <form class="comment-form">
                <h4 class="addcom">Add comment</h4>
                <input type="text" id="username" class="username" placeholder="Your name" required><br>
                <textarea type="text" id="insight" class="insight" placeholder="Your insight" required></textarea><br>
                <p id="addnew" class="addnew-btn">Comment</p>
            </form>
        </div>
    </div>`;
  return popup;
};

const postComments = async (commenturl, id, username, comment) => {
  await fetch(commenturl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${username}`,
      comment: `${comment}`,
    }),
  });
};

const getcomments = async (comments, index) => {
  let response = await fetch(`${comments}${index}`);
  response = await response.json();
  return response;
};

const totalcomments = (comments) => {
  comments = comments.length;
  return comments;
};



/***/ }),

/***/ "./src/like_img.png":
/*!**************************!*\
  !*** ./src/like_img.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54a2b2ce3eb18e031d59.png";

/***/ }),

/***/ "./src/movies_img.png":
/*!****************************!*\
  !*** ./src/movies_img.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10addc24131edbb84b83.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsaUNBQWlDLGlCQUFpQjtBQUNsRCxRQUFRO0FBQ1IsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFELFlBQVk7QUFDWixxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJRDtBQUNBO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQ7QUFDQSx5REFBeUQsVUFBVSw4QkFBOEI7QUFDakcsOENBQThDLHNCQUFzQjtBQUNwRSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRCwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixHQUFHO0FBQ3JCLG1CQUFtQixTQUFTO0FBQzVCLGtCQUFrQixRQUFRO0FBQzFCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxnQ0FBZ0MsU0FBUyxFQUFFLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vc3JjL2hvbWVfcGFnZS9kaXNwbGF5LmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgY29sdW1uLWdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93bG9nbztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvd2xvZ28ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcmllcyBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3N0ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hvd2l0ZW1zO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaG93aXRlbXMge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlrZSB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2U6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjpcXHJcXG4gICAgaW52ZXJ0KDE2JSkgc2VwaWEoOTklKSBzYXR1cmF0ZSg3NDA0JSkgaHVlLXJvdGF0ZSg0ZGVnKVxcclxcbiAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTE4JSk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbW1lbnRzIHBvcC11cCBzZWN0aW9uIHN0YXJ0cyBoZXJlICovXFxyXFxuXFxyXFxuLm1vdmllZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wLXVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDk2JTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDksIDIwMik7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQxcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAtMC41cmVtIDFyZW0gLTAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW1nIHtcXHJcXG4gIHdpZHRoOiA2NCU7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJuYW1lIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtYXJnaW46IDQlIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnNpZ2h0IHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtYXJnaW46IDQlIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRuZXctYnRuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjEwLCAyMTAsIDAuODIyKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgd2lkdGg6IDY1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbmV3LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE5MiwgMjA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudHMtcG9wdXAgc2VjdGlvbiBmaW5pc2ggKi9cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93bG9nbztcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgc2hvd2xvZ28ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB3aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2F0ZWdvcmllcyB7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2F0ZWdvcmllcyBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc2VydmF0aW9ucyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwOSwgMjAyKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAtMTYwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5h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QUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgY29sdW1uLWdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93bG9nbztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvd2xvZ28ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcmllcyBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3N0ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hvd2l0ZW1zO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaG93aXRlbXMge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlrZSB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2U6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjpcXHJcXG4gICAgaW52ZXJ0KDE2JSkgc2VwaWEoOTklKSBzYXR1cmF0ZSg3NDA0JSkgaHVlLXJvdGF0ZSg0ZGVnKVxcclxcbiAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTE4JSk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbW1lbnRzIHBvcC11cCBzZWN0aW9uIHN0YXJ0cyBoZXJlICovXFxyXFxuXFxyXFxuLm1vdmllZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wLXVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDk2JTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDksIDIwMik7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQxcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAtMC41cmVtIDFyZW0gLTAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW1nIHtcXHJcXG4gIHdpZHRoOiA2NCU7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJuYW1lIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtYXJnaW46IDQlIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnNpZ2h0IHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBtYXJnaW46IDQlIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRuZXctYnRuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjEwLCAyMTAsIDAuODIyKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgd2lkdGg6IDY1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbmV3LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE5MiwgMjA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudHMtcG9wdXAgc2VjdGlvbiBmaW5pc2ggKi9cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93bG9nbztcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgc2hvd2xvZ28ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB3aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2F0ZWdvcmllcyB7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2F0ZWdvcmllcyBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZS10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc2VydmF0aW9ucyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDIwOSwgMjAyKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAtMTYwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXRkYXRhID0gYXN5bmMgKGFwaXVybCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGl1cmwpO1xuICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmVzcG9uc2UgPSByZXNwb25zZS5tYXAoKGEpID0+IGEuc2hvdyk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldGltZyA9IChpbWd1cmwpID0+IHtcbiAgaW1ndXJsID0gaW1ndXJsLm1hcCgoYSkgPT4gYS5pbWFnZS5vcmlnaW5hbCk7XG4gIHJldHVybiBpbWd1cmw7XG59O1xuXG5jb25zdCBnZXRsaWtlcyA9IGFzeW5jIChsaWtlc3VybCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc3VybCk7XG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBsaWtlcyA9IChsaWtlc3VtKSA9PiB7XG4gIGxpa2VzdW0gPSBsaWtlc3VtLm1hcCgoYSkgPT4gYS5saWtlcyk7XG4gIHJldHVybiBsaWtlc3VtO1xufTtcblxuY29uc3QgcG9zdGxpa2UgPSBhc3luYyAobmV3bGlrZXVybCwgaW5kZXgpID0+IHtcbiAgYXdhaXQgZmV0Y2gobmV3bGlrZXVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGBpdGVtJHtpbmRleCArIDF9YCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xufTtcblxuY29uc3QgdG90YWxpdGVtcyA9IChyZXN1bHQpID0+IHJlc3VsdC5sZW5ndGg7XG5cbmV4cG9ydCB7XG4gIGdldGRhdGEsIGdldGltZywgZ2V0bGlrZXMsIGxpa2VzLCBwb3N0bGlrZSwgdG90YWxpdGVtcyxcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9ob21lX3BhZ2UvZGlzcGxheS5qcyc7XG5pbXBvcnQgbGlrZWltZyBmcm9tICcuL2xpa2VfaW1nLnBuZyc7XG5pbXBvcnQgbW92aWVzaW1nIGZyb20gJy4vbW92aWVzX2ltZy5wbmcnO1xuaW1wb3J0IHtcbiAgcG9zdENvbW1lbnRzLCBnZXRtb3ZpZSwgZ2V0Y29tbWVudHMsIHRvdGFsY29tbWVudHMsXG59IGZyb20gJy4vbW9kdWxlcy9wb3B1cC5qcyc7XG5cbi8vIENyZWF0ZSB2YXJpYWJsZXMgZm9yIHN0b3JpbmcgZGF0YVxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZWRpdicpO1xuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBpbWcnKTtcbmNvbnN0IGFwaXVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWNvbWVkeSc7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbW92aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmlldG90YWwnKTtcbmNvbnN0IGxpa2VzdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0tuRExtcmloN2FpWWZkMGlodjlIL2xpa2VzLyc7XG5jb25zb2xlLmxvZyhsaWtlc3VybCk7XG5jb25zdCBjb21tZW50dXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0tuRExtcmloN2FpWWZkMGlodjlIL2NvbW1lbnRzLyc7XG5jb25zdCBjb21tZW50cyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9LbkRMbXJpaDdhaVlmZDBpaHY5SC9jb21tZW50cz9pdGVtX2lkPSc7XG5cbmxldCBsaWtlc251bTtcbmxldCBpbWd1cmw7XG5sZXQgbGlrZXNjb3VudGVyO1xubGV0IGl0ZW1zY291bnRlcjtcbmxldCBjb21tZW50Q291bnRlcjtcbmxvZ28uc3JjID0gbW92aWVzaW1nO1xuXG5jb25zdCBoaWRlID0gKG1zZykgPT4ge1xuICBtc2cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuXG4vLyBHZXR0aW5nIGRhdGEgZnJvbSBBcGkgaWYgcHJvbWlzZSBzdGF0dXMgcmVzb2x2ZVxuY29uc3QgbXlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgcmVzb2x2ZShhcGkuZ2V0ZGF0YShhcGl1cmwpKTtcbn0pO1xuXG5jb25zdCBteXByb21pc2ViID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgcmVzb2x2ZShhcGkuZ2V0bGlrZXMobGlrZXN1cmwpKTtcbn0pO1xuXG5teVByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XG4gIGltZ3VybCA9IGFwaS5nZXRpbWcocmVzdWx0KTtcbiAgaXRlbXNjb3VudGVyID0gYXBpLnRvdGFsaXRlbXMocmVzdWx0KTtcbiAgbW92aWVzLnRleHRDb250ZW50ID0gYE1vdmllcygke2l0ZW1zY291bnRlcn0pYDtcbiAgaW1ndXJsLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgc2VjdGlvbi5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJwb3N0ZXJcIiBzcmM9XCIke2VsZW1lbnR9XCIgYWx0PVwiSXRhbGlhbiBUcnVsbGlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PHA+JHtyZXN1bHRbaW5kZXhdLm5hbWV9PC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIGNsYXNzPVwibGlrZVwiIHNyYz1cIiR7bGlrZWltZ31cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJsaWtlLXRleHRcIj4gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPGJ1dHRvbj48cCBjbGFzcz1cImNvbW1lbnRzXCIgaWQ9XCJjb21tZW50aWRcIiA+Q29tbWVudHM8L3A+PC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzPVwicmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9wPiAgXG4gICAgICAgIDwvZGl2PmA7XG4gIH0pO1xuICBjb25zdCBjb21tZW50YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XG4gIGNvbW1lbnRidXR0b24uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbXlwcm9taXNlYyA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZ2V0Y29tbWVudHMoY29tbWVudHMsIGluZGV4KSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHBvcHVwaW5mbyA9IGdldG1vdmllKHJlc3VsdCwgcG9wdXAsIGluZGV4KTtcbiAgICAgIHNlY3Rpb24uYXBwZW5kKHBvcHVwaW5mbyk7XG4gICAgICBwb3B1cGluZm8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3B1cGluZm8ucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbW1lbnRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50c3AnKTtcbiAgICAgIG15cHJvbWlzZWMudGhlbigoY29tbWVudGFycikgPT4ge1xuICAgICAgICBjb3VudC50ZXh0Q29udGVudCA9IGBDb21tZW50cygke2NvbW1lbnRhcnIubGVuZ3RofSlgO1xuICAgICAgICBjb21tZW50YXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb21tZW50ZGl2LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiY29tbWVudHMtbGlcIj4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gICR7ZWxlbWVudC51c2VybmFtZX06ICAke2VsZW1lbnQuY29tbWVudH08L2xpPmA7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbnB1dG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUnKTtcbiAgICAgIGNvbnN0IGlucHV0dGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnNpZ2h0Jyk7XG4gICAgICBjb25zdCBjb21tZW50dGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRuZXctYnRuJyk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbiAgICAgIGNvbW1lbnR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXRuYW1lLnZhbHVlICE9PSAnJyAmJiBpbnB1dHRleHQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgcG9zdENvbW1lbnRzKGNvbW1lbnR1cmwsIGluZGV4LCBpbnB1dG5hbWUudmFsdWUsIGlucHV0dGV4dC52YWx1ZSk7XG4gICAgICAgICAgY29uc3QgW2RhdGVdID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJyk7XG4gICAgICAgICAgY29tbWVudGRpdi5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImNvbW1lbnRzLWxpXCI+JHtkYXRlfSAgJHtpbnB1dG5hbWUudmFsdWV9OiAgJHtpbnB1dHRleHQudmFsdWV9PC9saT5gO1xuICAgICAgICAgIGNvbnN0IGNvbW1lbnRkaXZsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtbGlzdCBsaScpO1xuICAgICAgICAgIGNvbnN0IGNvbW1lbnRzdG90YWwgPSB0b3RhbGNvbW1lbnRzKGNvbW1lbnRkaXZsaXN0KTtcbiAgICAgICAgICBjb3VudC50ZXh0Q29udGVudCA9IGBDb21tZW50cygke2NvbW1lbnRzdG90YWx9KWA7XG4gICAgICAgICAgaW5wdXRuYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgaW5wdXR0ZXh0LnZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdJbnB1dHMgc2hvdWxkIG5vdCBiZSBlbXB0eSc7XG4gICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGhpZGUobWVzc2FnZSk7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0nKTtcbiAgICAgICAgICBjb25zdCBjb3VudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xuICAgICAgICAgIGNvbW1lbnRDb3VudGVyW2luZGV4XSArPSArMTtcbiAgICAgICAgICBjb21tZW50dGV4dC5mb3JFYWNoKChjb21tZW50cywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0W2luZGV4XSA8PSAxKSB7XG4gICAgICAgICAgICAgIGNvdW50cy50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtsaXN0Lmxlbmd0aH0pYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvdW50cy50ZXh0Q29udGVudCA9ICdDb21tZW50cyAoMCknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tbWVudENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBsaWtldGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLXRleHQnKTtcbiAgY29uc3QgbGlrZWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XG4gIG15cHJvbWlzZWIudGhlbigocmVzdWx0KSA9PiB7XG4gICAgbGlrZXNudW0gPSBhcGkubGlrZXMocmVzdWx0KTtcbiAgICBsaWtlc2NvdW50ZXIgPSBsaWtlc251bTtcbiAgICBsaWtldGV4dC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGxpa2VzbnVtW2luZGV4XSA8PSAxKSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc251bVtpbmRleF19IGxpa2VgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke2xpa2VzbnVtW2luZGV4XX0gbGlrZXNgO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxpa2VidXR0b24uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFwaS5wb3N0bGlrZShsaWtlc3VybCwgaW5kZXgpO1xuICAgICAgICBsaWtlc2NvdW50ZXJbaW5kZXhdICs9ICsxO1xuICAgICAgICBsaWtldGV4dC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChsaWtlc251bVtpbmRleF0gPD0gMSkge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke2xpa2VzY291bnRlcltpbmRleF19IGxpa2VgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7bGlrZXNjb3VudGVyW2luZGV4XX0gbGlrZXNgO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGdldG1vdmllID0gKHJlc3VsdCwgcG9wdXAsIGluZGV4KSA9PiB7XG4gIHJlc3VsdCA9IHJlc3VsdFtpbmRleF07XG4gIHBvcHVwLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwibW9kYWwtcG9wLXVwLSR7cmVzdWx0LmlkfVwiIGNsYXNzPVwibW9kYWwtcG9wLXVwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250LXBvcC11cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gIDxidXR0b24gZGF0YS1pZD0nJHtyZXN1bHQuaWR9JyBjbGFzcz1cImNsb3NlLWJ1dHRvblwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWwtcG9wLWltZ1wiIHNyYz1cIiR7cmVzdWx0LmltYWdlLm9yaWdpbmFsfVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibW92aWUtdGl0bGVcIj4ke3Jlc3VsdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1pbmZvMVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmVtaWVyZWQ6ICR7cmVzdWx0LnByZW1pZXJlZH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlR5cGU6ICR7cmVzdWx0LnR5cGV9PC9wPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaW5mbzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UnVudGltZTogJHtyZXN1bHQucnVudGltZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxhbmd1YWdlOiAke3Jlc3VsdC5sYW5ndWFnZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnRzcFwiPmNvbW1lbnRzKDwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50LWxpc3RcIj48L3VsPlxuICAgICAgICAgICAgPHAgY2xhc3M9bWVzc2FnZT48L3A+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImFkZGNvbVwiPkFkZCBjb21tZW50PC9oND5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgY2xhc3M9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+PGJyPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGlkPVwiaW5zaWdodFwiIGNsYXNzPVwiaW5zaWdodFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT48YnI+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJhZGRuZXdcIiBjbGFzcz1cImFkZG5ldy1idG5cIj5Db21tZW50PC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICByZXR1cm4gcG9wdXA7XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudHMgPSBhc3luYyAoY29tbWVudHVybCwgaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKGNvbW1lbnR1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7aWR9YCxcbiAgICAgIHVzZXJuYW1lOiBgJHt1c2VybmFtZX1gLFxuICAgICAgY29tbWVudDogYCR7Y29tbWVudH1gLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldGNvbW1lbnRzID0gYXN5bmMgKGNvbW1lbnRzLCBpbmRleCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c30ke2luZGV4fWApO1xuICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgdG90YWxjb21tZW50cyA9IChjb21tZW50cykgPT4ge1xuICBjb21tZW50cyA9IGNvbW1lbnRzLmxlbmd0aDtcbiAgcmV0dXJuIGNvbW1lbnRzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0bW92aWUsIHBvc3RDb21tZW50cywgZ2V0Y29tbWVudHMsIHRvdGFsY29tbWVudHMsXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==