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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQsUUFBUTtBQUNSLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsMkRBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRCxZQUFZO0FBQ1oscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUQ7QUFDQTtBQUNBLDZDQUE2QyxVQUFVO0FBQ3ZEO0FBQ0EseURBQXlELFVBQVUsOEJBQThCO0FBQ2pHLDhDQUE4QyxzQkFBc0I7QUFDcEUsc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBLG9DQUFvQyxpQkFBaUI7QUFDckQsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pELG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsR0FBRztBQUNyQixtQkFBbUIsU0FBUztBQUM1QixrQkFBa0IsUUFBUTtBQUMxQixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0EsZ0NBQWdDLFNBQVMsRUFBRSxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtbW92aWVzLWFwaS8uL3NyYy9ob21lX3BhZ2UvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1tb3ZpZXMtYXBpLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NhcHN0b25lLW1vdmllcy1hcGkvLi9zcmMvbW9kdWxlcy9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hvd2xvZ287XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3dsb2dvIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dpdGVtcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvd2l0ZW1zIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlOmFjdGl2ZSB7XFxyXFxuICBmaWx0ZXI6XFxyXFxuICAgIGludmVydCgxNiUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoNzQwNCUpIGh1ZS1yb3RhdGUoNGRlZylcXHJcXG4gICAgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDExOCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnMge1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50cyBwb3AtdXAgc2VjdGlvbiBzdGFydHMgaGVyZSAqL1xcclxcblxcclxcbi5tb3ZpZWRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcC11cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA5NiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA5LCAyMDIpO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MXB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogLTAuNXJlbSAxcmVtIC0wLjVyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGltZyB7XFxyXFxuICB3aWR0aDogNjQlO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA4MHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VybmFtZSB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgbWFyZ2luOiA0JSAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zaWdodCB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgbWFyZ2luOiA0JSAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbmV3LWJ0biB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxMCwgMjEwLCAwLjgyMik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIHdpZHRoOiA2NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZG5ldy1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxOTIsIDIwNik7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZS5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnRzLXBvcHVwIHNlY3Rpb24gZmluaXNoICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd2xvZ287XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIHNob3dsb2dvIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgI2NhdGVnb3JpZXMge1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NhdGVnb3JpZXMgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2Uge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2UtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXNlcnZhdGlvbnMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVkaXYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDksIDIwMik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogLTE2MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1mb3JtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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YTtJQUNiLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hvd2xvZ287XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3dsb2dvIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dpdGVtcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvd2l0ZW1zIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlOmFjdGl2ZSB7XFxyXFxuICBmaWx0ZXI6XFxyXFxuICAgIGludmVydCgxNiUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoNzQwNCUpIGh1ZS1yb3RhdGUoNGRlZylcXHJcXG4gICAgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDExOCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnMge1xcclxcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50cyBwb3AtdXAgc2VjdGlvbiBzdGFydHMgaGVyZSAqL1xcclxcblxcclxcbi5tb3ZpZWRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcC11cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA5NiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA5LCAyMDIpO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MXB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogLTAuNXJlbSAxcmVtIC0wLjVyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGltZyB7XFxyXFxuICB3aWR0aDogNjQlO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA4MHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VybmFtZSB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgbWFyZ2luOiA0JSAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zaWdodCB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgbWFyZ2luOiA0JSAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbmV3LWJ0biB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxMCwgMjEwLCAwLjgyMik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIHdpZHRoOiA2NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZG5ldy1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxOTIsIDIwNik7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZS5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnRzLXBvcHVwIHNlY3Rpb24gZmluaXNoICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd2xvZ287XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIHNob3dsb2dvIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgI2NhdGVnb3JpZXMge1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NhdGVnb3JpZXMgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2Uge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2UtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXNlcnZhdGlvbnMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVkaXYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyMDksIDIwMik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogLTE2MHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1mb3JtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2V0ZGF0YSA9IGFzeW5jIChhcGl1cmwpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGl1cmwpO1xyXG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJlc3BvbnNlID0gcmVzcG9uc2UubWFwKChhKSA9PiBhLnNob3cpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IGdldGltZyA9IChpbWd1cmwpID0+IHtcclxuICBpbWd1cmwgPSBpbWd1cmwubWFwKChhKSA9PiBhLmltYWdlLm9yaWdpbmFsKTtcclxuICByZXR1cm4gaW1ndXJsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0bGlrZXMgPSBhc3luYyAobGlrZXN1cmwpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc3VybCk7XHJcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuY29uc3QgbGlrZXMgPSAobGlrZXN1bSkgPT4ge1xyXG4gIGxpa2VzdW0gPSBsaWtlc3VtLm1hcCgoYSkgPT4gYS5saWtlcyk7XHJcbiAgcmV0dXJuIGxpa2VzdW07XHJcbn07XHJcblxyXG5jb25zdCBwb3N0bGlrZSA9IGFzeW5jIChuZXdsaWtldXJsLCBpbmRleCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKG5ld2xpa2V1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBgaXRlbSR7aW5kZXggKyAxfWAsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB0b3RhbGl0ZW1zID0gKHJlc3VsdCkgPT4gcmVzdWx0Lmxlbmd0aDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0ZGF0YSwgZ2V0aW1nLCBnZXRsaWtlcywgbGlrZXMsIHBvc3RsaWtlLCB0b3RhbGl0ZW1zLFxyXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vaG9tZV9wYWdlL2Rpc3BsYXkuanMnO1xuaW1wb3J0IGxpa2VpbWcgZnJvbSAnLi9saWtlX2ltZy5wbmcnO1xuaW1wb3J0IG1vdmllc2ltZyBmcm9tICcuL21vdmllc19pbWcucG5nJztcbmltcG9ydCB7XG4gIHBvc3RDb21tZW50cywgZ2V0bW92aWUsIGdldGNvbW1lbnRzLCB0b3RhbGNvbW1lbnRzLFxufSBmcm9tICcuL21vZHVsZXMvcG9wdXAuanMnO1xuXG4vLyBDcmVhdGUgdmFyaWFibGVzIGZvciBzdG9yaW5nIGRhdGFcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVkaXYnKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaW1nJyk7XG5jb25zdCBhcGl1cmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1jb21lZHknO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IG1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZXRvdGFsJyk7XG5jb25zdCBsaWtlc3VybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9LbkRMbXJpaDdhaVlmZDBpaHY5SC9saWtlcy8nO1xuY29uc3QgY29tbWVudHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9LbkRMbXJpaDdhaVlmZDBpaHY5SC9jb21tZW50cy8nO1xuY29uc3QgY29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvS25ETG1yaWg3YWlZZmQwaWh2OUgvY29tbWVudHM/aXRlbV9pZD0nO1xuXG5sZXQgbGlrZXNudW07XG5sZXQgaW1ndXJsO1xubGV0IGxpa2VzY291bnRlcjtcbmxldCBpdGVtc2NvdW50ZXI7XG5sZXQgY29tbWVudENvdW50ZXI7XG5sb2dvLnNyYyA9IG1vdmllc2ltZztcblxuY29uc3QgaGlkZSA9IChtc2cpID0+IHtcbiAgbXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcblxuLy8gR2V0dGluZyBkYXRhIGZyb20gQXBpIGlmIHByb21pc2Ugc3RhdHVzIHJlc29sdmVcbmNvbnN0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIHJlc29sdmUoYXBpLmdldGRhdGEoYXBpdXJsKSk7XG59KTtcblxuY29uc3QgbXlwcm9taXNlYiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIHJlc29sdmUoYXBpLmdldGxpa2VzKGxpa2VzdXJsKSk7XG59KTtcblxubXlQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBpbWd1cmwgPSBhcGkuZ2V0aW1nKHJlc3VsdCk7XG4gIGl0ZW1zY291bnRlciA9IGFwaS50b3RhbGl0ZW1zKHJlc3VsdCk7XG4gIG1vdmllcy50ZXh0Q29udGVudCA9IGBNb3ZpZXMoJHtpdGVtc2NvdW50ZXJ9KWA7XG4gIGltZ3VybC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICA8aW1nIGNsYXNzPVwicG9zdGVyXCIgc3JjPVwiJHtlbGVtZW50fVwiIGFsdD1cIkl0YWxpYW4gVHJ1bGxpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPjxwPiR7cmVzdWx0W2luZGV4XS5uYW1lfTwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBjbGFzcz1cImxpa2VcIiBzcmM9XCIke2xpa2VpbWd9XCI+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZS10ZXh0XCI+IDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDxidXR0b24+PHAgY2xhc3M9XCJjb21tZW50c1wiIGlkPVwiY29tbWVudGlkXCIgPkNvbW1lbnRzPC9wPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cInJlc2VydmF0aW9uc1wiPlJlc2VydmF0aW9uczwvcD4gIFxuICAgICAgICA8L2Rpdj5gO1xuICB9KTtcbiAgY29uc3QgY29tbWVudGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpO1xuICBjb21tZW50YnV0dG9uLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG15cHJvbWlzZWMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICByZXNvbHZlKGdldGNvbW1lbnRzKGNvbW1lbnRzLCBpbmRleCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwb3B1cGluZm8gPSBnZXRtb3ZpZShyZXN1bHQsIHBvcHVwLCBpbmRleCk7XG4gICAgICBzZWN0aW9uLmFwcGVuZChwb3B1cGluZm8pO1xuICAgICAgcG9wdXBpbmZvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wdXBpbmZvLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21tZW50ZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHNwJyk7XG4gICAgICBteXByb21pc2VjLnRoZW4oKGNvbW1lbnRhcnIpID0+IHtcbiAgICAgICAgY291bnQudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHtjb21tZW50YXJyLmxlbmd0aH0pYDtcbiAgICAgICAgY29tbWVudGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29tbWVudGRpdi5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImNvbW1lbnRzLWxpXCI+JHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICAke2VsZW1lbnQudXNlcm5hbWV9OiAgJHtlbGVtZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaW5wdXRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lJyk7XG4gICAgICBjb25zdCBpbnB1dHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zaWdodCcpO1xuICAgICAgY29uc3QgY29tbWVudHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkbmV3LWJ0bicpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gICAgICBjb21tZW50dGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0bmFtZS52YWx1ZSAhPT0gJycgJiYgaW5wdXR0ZXh0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHBvc3RDb21tZW50cyhjb21tZW50dXJsLCBpbmRleCwgaW5wdXRuYW1lLnZhbHVlLCBpbnB1dHRleHQudmFsdWUpO1xuICAgICAgICAgIGNvbnN0IFtkYXRlXSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpO1xuICAgICAgICAgIGNvbW1lbnRkaXYuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJjb21tZW50cy1saVwiPiR7ZGF0ZX0gICR7aW5wdXRuYW1lLnZhbHVlfTogICR7aW5wdXR0ZXh0LnZhbHVlfTwvbGk+YDtcbiAgICAgICAgICBjb25zdCBjb21tZW50ZGl2bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWxpc3QgbGknKTtcbiAgICAgICAgICBjb25zdCBjb21tZW50c3RvdGFsID0gdG90YWxjb21tZW50cyhjb21tZW50ZGl2bGlzdCk7XG4gICAgICAgICAgY291bnQudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHtjb21tZW50c3RvdGFsfSlgO1xuICAgICAgICAgIGlucHV0bmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgIGlucHV0dGV4dC52YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnSW5wdXRzIHNob3VsZCBub3QgYmUgZW1wdHknO1xuICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBoaWRlKG1lc3NhZ2UpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyk7XG4gICAgICAgICAgY29uc3QgY291bnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcbiAgICAgICAgICBjb21tZW50Q291bnRlcltpbmRleF0gKz0gKzE7XG4gICAgICAgICAgY29tbWVudHRleHQuZm9yRWFjaCgoY29tbWVudHMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdFtpbmRleF0gPD0gMSkge1xuICAgICAgICAgICAgICBjb3VudHMudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7bGlzdC5sZW5ndGh9KWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb3VudHMudGV4dENvbnRlbnQgPSAnQ29tbWVudHMgKDApJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1lbnRDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgbGlrZXRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS10ZXh0Jyk7XG4gIGNvbnN0IGxpa2VidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICBteXByb21pc2ViLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGxpa2VzbnVtID0gYXBpLmxpa2VzKHJlc3VsdCk7XG4gICAgbGlrZXNjb3VudGVyID0gbGlrZXNudW07XG4gICAgbGlrZXRleHQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChsaWtlc251bVtpbmRleF0gPD0gMSkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7bGlrZXNudW1baW5kZXhdfSBsaWtlYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc251bVtpbmRleF19IGxpa2VzYDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsaWtlYnV0dG9uLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhcGkucG9zdGxpa2UobGlrZXN1cmwsIGluZGV4KTtcbiAgICAgICAgbGlrZXNjb3VudGVyW2luZGV4XSArPSArMTtcbiAgICAgICAgbGlrZXRleHQuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAobGlrZXNudW1baW5kZXhdIDw9IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlc2NvdW50ZXJbaW5kZXhdfSBsaWtlYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke2xpa2VzY291bnRlcltpbmRleF19IGxpa2VzYDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBnZXRtb3ZpZSA9IChyZXN1bHQsIHBvcHVwLCBpbmRleCkgPT4ge1xuICByZXN1bHQgPSByZXN1bHRbaW5kZXhdO1xuICBwb3B1cC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm1vZGFsLXBvcC11cC0ke3Jlc3VsdC5pZH1cIiBjbGFzcz1cIm1vZGFsLXBvcC11cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udC1wb3AtdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+ICA8YnV0dG9uIGRhdGEtaWQ9JyR7cmVzdWx0LmlkfScgY2xhc3M9XCJjbG9zZS1idXR0b25cIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vZGFsLXBvcC1pbWdcIiBzcmM9XCIke3Jlc3VsdC5pbWFnZS5vcmlnaW5hbH1cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+JHtyZXN1bHQubmFtZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaW5mbzFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJlbWllcmVkOiAke3Jlc3VsdC5wcmVtaWVyZWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5UeXBlOiAke3Jlc3VsdC50eXBlfTwvcD4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlJ1bnRpbWU6ICR7cmVzdWx0LnJ1bnRpbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5MYW5ndWFnZTogJHtyZXN1bHQubGFuZ3VhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjb21tZW50c3BcIj5jb21tZW50cyg8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudC1saXN0XCI+PC91bD5cbiAgICAgICAgICAgIDxwIGNsYXNzPW1lc3NhZ2U+PC9wPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJhZGRjb21cIj5BZGQgY29tbWVudDwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPjxicj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD1cImluc2lnaHRcIiBjbGFzcz1cImluc2lnaHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+PGJyPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiYWRkbmV3XCIgY2xhc3M9XCJhZGRuZXctYnRuXCI+Q29tbWVudDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgcmV0dXJuIHBvcHVwO1xufTtcblxuY29uc3QgcG9zdENvbW1lbnRzID0gYXN5bmMgKGNvbW1lbnR1cmwsIGlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICBhd2FpdCBmZXRjaChjb21tZW50dXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGAke2lkfWAsXG4gICAgICB1c2VybmFtZTogYCR7dXNlcm5hbWV9YCxcbiAgICAgIGNvbW1lbnQ6IGAke2NvbW1lbnR9YCxcbiAgICB9KSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRjb21tZW50cyA9IGFzeW5jIChjb21tZW50cywgaW5kZXgpID0+IHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudHN9JHtpbmRleH1gKTtcbiAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHRvdGFsY29tbWVudHMgPSAoY29tbWVudHMpID0+IHtcbiAgY29tbWVudHMgPSBjb21tZW50cy5sZW5ndGg7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmV4cG9ydCB7XG4gIGdldG1vdmllLCBwb3N0Q29tbWVudHMsIGdldGNvbW1lbnRzLCB0b3RhbGNvbW1lbnRzLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=