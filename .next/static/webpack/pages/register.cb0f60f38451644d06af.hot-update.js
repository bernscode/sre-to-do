webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bernscode/Desktop/code/bernscode/create/webdev/sre/sre-to-do/pages/register.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// use state hook to create a state\n\n // function Home() {\n//   return <div>SRE To-do List</div>;\n// }\n// refactor above function with arrow function\n//replace <div> with <Layout>\n\nvar Register = function Register() {\n  _s();\n\n  // create a state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    email: '',\n    password: '',\n    error: '',\n    bottomText: 'Register'\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var registerForm = function registerForm() {\n    return __jsx(\"form\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }\n    }, __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      className: \"form-control\",\n      placeholder: \"Type your name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    })), __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"email\",\n      className: \"form-control\",\n      placeholder: \"Type your email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    })), __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"password\",\n      className: \"form-control\",\n      placeholder: \"Type your password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    })), __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-outline-dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, \"Register\")));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: \"col-md-6 offset-md-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"Register\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), registerForm()));\n};\n\n_s(Register, \"qcBv/5N7fqdZJ61s4VrcUvbLNkA=\");\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/MGVjYiJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImJvdHRvbVRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVnaXN0ZXJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVyQjtBQUZxQixrQkFHS0Msc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFlBQVEsRUFBRSxFQUh1QjtBQUlqQ0MsU0FBSyxFQUFFLEVBSjBCO0FBS2pDQyxjQUFVLEVBQUU7QUFMcUIsR0FBRCxDQUhiO0FBQUEsTUFHZEMsS0FIYztBQUFBLE1BR1BDLFFBSE87O0FBYXJCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBUyxFQUFDLGNBQTdCO0FBQTRDLGlCQUFXLEVBQUMsZ0JBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxVQUFJLEVBQUMsT0FBWjtBQUFvQixlQUFTLEVBQUMsY0FBOUI7QUFBNkMsaUJBQVcsRUFBQyxpQkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSkYsRUFPRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLGVBQVMsRUFBQyxjQUFqQztBQUFnRCxpQkFBVyxFQUFDLG9CQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FQRixFQVVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsZUFBUyxFQUFDLHNCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBVkYsQ0FEbUI7QUFBQSxHQUFyQjs7QUFvQkEsU0FBTyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdHQSxZQUFZLEVBSGYsQ0FESyxDQUFQO0FBT0QsQ0F4Q0Q7O0dBQU1ULFE7O0tBQUFBLFE7QUEyQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2Ugc3RhdGUgaG9vayB0byBjcmVhdGUgYSBzdGF0ZVxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuXG4vLyBmdW5jdGlvbiBIb21lKCkge1xuLy8gICByZXR1cm4gPGRpdj5TUkUgVG8tZG8gTGlzdDwvZGl2Pjtcbi8vIH1cblxuLy8gcmVmYWN0b3IgYWJvdmUgZnVuY3Rpb24gd2l0aCBhcnJvdyBmdW5jdGlvblxuLy9yZXBsYWNlIDxkaXY+IHdpdGggPExheW91dD5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuXG4gIC8vIGNyZWF0ZSBhIHN0YXRlXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgZXJyb3I6ICcnLFxuICAgIGJvdHRvbVRleHQ6ICdSZWdpc3RlcidcbiAgfSlcblxuXG5cbiAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxuICAgIDxmb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCI+XG4gICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZm9ybT5cbiAgKVxuXG4gIHJldHVybiA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICA8YnIgLz5cbiAgICAgIHtyZWdpc3RlckZvcm0oKX1cbiAgICA8L2Rpdj5cbiAgPC9MYXlvdXQ+O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

})