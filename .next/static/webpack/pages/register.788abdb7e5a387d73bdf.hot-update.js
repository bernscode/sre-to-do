webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/bernscode/Desktop/code/bernscode/create/webdev/sre/sre-to-do/pages/register.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// use state hook to create a state\n\n // function Home() {\n//   return <div>SRE To-do List</div>;\n// }\n// refactor above function with arrow function\n//replace <div> with <Layout>\n\nvar Register = function Register() {\n  _s();\n\n  // create a state\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: '',\n    email: '',\n    password: '',\n    error: '',\n    success: '',\n    buttonText: 'Register'\n  }),\n      state = _useState[0],\n      setState = _useState[1]; // destruct the items from the state to avoid using ex. state.buttonText\n\n\n  var name = state.name,\n      email = state.email,\n      password = state.password,\n      error = state.error,\n      success = state.success,\n      buttonText = state.buttonText;\n\n  var handleChange = function handleChange(name) {\n    return function (e) {\n      var _objectSpread2;\n\n      setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"error\", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"success\", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, \"buttonText\", 'Register'), _objectSpread2)));\n    };\n  };\n\n  var handleSubmit = function handleSubmit(e) {//\n  };\n\n  var registerForm = function registerForm() {\n    return __jsx(\"form\", {\n      onSubmit: handleSubmit,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }\n    }, __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      onChange: handleChange('name'),\n      type: \"text\",\n      className: \"form-control\",\n      placeholder: \"Type your name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    })), __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      onChange: handleChange('email'),\n      type: \"email\",\n      className: \"form-control\",\n      placeholder: \"Type your email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }\n    })), __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      onChange: handleChange('password'),\n      type: \"password\",\n      className: \"form-control\",\n      placeholder: \"Type your password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }\n    })), __jsx(\"div\", {\n      className: \"form-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-outline-dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }\n    }, buttonText)));\n  };\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: \"col-md-6 offset-md-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, \"Register\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }), registerForm()));\n};\n\n_s(Register, \"VsXAvUOBZWqR2d9lTL2zY3IE7p4=\");\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/MGVjYiJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidXR0b25UZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVyQjtBQUZxQixrQkFHS0Msc0RBQVEsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFlBQVEsRUFBRSxFQUh1QjtBQUlqQ0MsU0FBSyxFQUFFLEVBSjBCO0FBS2pDQyxXQUFPLEVBQUUsRUFMd0I7QUFNakNDLGNBQVUsRUFBRTtBQU5xQixHQUFELENBSGI7QUFBQSxNQUdkQyxLQUhjO0FBQUEsTUFHUEMsUUFITyxpQkFZckI7OztBQVpxQixNQWFiUCxJQWJhLEdBYXlDTSxLQWJ6QyxDQWFiTixJQWJhO0FBQUEsTUFhUEMsS0FiTyxHQWF5Q0ssS0FiekMsQ0FhUEwsS0FiTztBQUFBLE1BYUFDLFFBYkEsR0FheUNJLEtBYnpDLENBYUFKLFFBYkE7QUFBQSxNQWFVQyxLQWJWLEdBYXlDRyxLQWJ6QyxDQWFVSCxLQWJWO0FBQUEsTUFhaUJDLE9BYmpCLEdBYXlDRSxLQWJ6QyxDQWFpQkYsT0FiakI7QUFBQSxNQWEwQkMsVUFiMUIsR0FheUNDLEtBYnpDLENBYTBCRCxVQWIxQjs7QUFnQnJCLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNSLElBQUQ7QUFBQSxXQUFVLFVBQUNTLENBQUQsRUFBTztBQUFBOztBQUNwQ0YsY0FBUSxpQ0FBS0QsS0FBTCx1SUFBYU4sSUFBYixFQUFvQlMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTdCLHNIQUEyQyxFQUEzQyx3SEFBd0QsRUFBeEQsMkhBQXVFLFVBQXZFLG9CQUFSO0FBQ0QsS0FGb0I7QUFBQSxHQUFyQjs7QUFLQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSCxDQUFELEVBQU8sQ0FDMUI7QUFDRCxHQUZEOztBQUtBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FDbkI7QUFBTSxjQUFRLEVBQUVELFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGNBQVEsRUFBRUosWUFBWSxDQUFDLE1BQUQsQ0FBN0I7QUFBdUMsVUFBSSxFQUFDLE1BQTVDO0FBQW1ELGVBQVMsRUFBQyxjQUE3RDtBQUE0RSxpQkFBVyxFQUFDLGdCQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sY0FBUSxFQUFFQSxZQUFZLENBQUMsT0FBRCxDQUE3QjtBQUF3QyxVQUFJLEVBQUMsT0FBN0M7QUFBcUQsZUFBUyxFQUFDLGNBQS9EO0FBQThFLGlCQUFXLEVBQUMsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLEVBT0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxjQUFRLEVBQUVBLFlBQVksQ0FBQyxVQUFELENBQTdCO0FBQTJDLFVBQUksRUFBQyxVQUFoRDtBQUEyRCxlQUFTLEVBQUMsY0FBckU7QUFBb0YsaUJBQVcsRUFBQyxvQkFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUEYsRUFVRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFRLGVBQVMsRUFBQyxzQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxVQURILENBREYsQ0FWRixDQURtQjtBQUFBLEdBQXJCOztBQW9CQSxTQUFPLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dRLFlBQVksRUFIZixDQURLLENBQVA7QUFPRCxDQXJERDs7R0FBTWYsUTs7S0FBQUEsUTtBQXdEU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVzZSBzdGF0ZSBob29rIHRvIGNyZWF0ZSBhIHN0YXRlXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5cbi8vIGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgIHJldHVybiA8ZGl2PlNSRSBUby1kbyBMaXN0PC9kaXY+O1xuLy8gfVxuXG4vLyByZWZhY3RvciBhYm92ZSBmdW5jdGlvbiB3aXRoIGFycm93IGZ1bmN0aW9uXG4vL3JlcGxhY2UgPGRpdj4gd2l0aCA8TGF5b3V0PlxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG5cbiAgLy8gY3JlYXRlIGEgc3RhdGVcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBlcnJvcjogJycsXG4gICAgc3VjY2VzczogJycsXG4gICAgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyJ1xuICB9KVxuXG4gIC8vIGRlc3RydWN0IHRoZSBpdGVtcyBmcm9tIHRoZSBzdGF0ZSB0byBhdm9pZCB1c2luZyBleC4gc3RhdGUuYnV0dG9uVGV4dFxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MsIGJ1dHRvblRleHQgfSA9IHN0YXRlO1xuXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XG4gICAgc2V0U3RhdGUoey4uLnN0YXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogJycsIHN1Y2Nlc3M6ICcnLCBidXR0b25UZXh0OidSZWdpc3Rlcid9KVxuICB9XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIC8vXG4gIH1cblxuXG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCI+XG4gICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Zvcm0+XG4gIClcblxuICByZXR1cm4gPExheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgPGJyIC8+XG4gICAgICB7cmVnaXN0ZXJGb3JtKCl9XG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0Pjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

})