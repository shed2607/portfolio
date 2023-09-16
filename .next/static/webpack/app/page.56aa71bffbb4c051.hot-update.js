"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_screenutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/screenutils */ \"(app-pages-browser)/./app/functions/screenutils.js\");\n/* harmony import */ var _small__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./small */ \"(app-pages-browser)/./app/small.jsx\");\n/* harmony import */ var _big__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./big */ \"(app-pages-browser)/./app/big.jsx\");\n/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ \"(app-pages-browser)/./app/medium.jsx\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading */ \"(app-pages-browser)/./app/loading.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [screenSize, setScreenSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Initialize with null\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Initialize with true\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initialSize = (0,_functions_screenutils__WEBPACK_IMPORTED_MODULE_2__.getScreenSize)();\n        setScreenSize(initialSize); // Set the initial screen size\n        const handleResize = ()=>{\n            const newSize = (0,_functions_screenutils__WEBPACK_IMPORTED_MODULE_2__.getScreenSize)();\n            setScreenSize(newSize);\n        };\n        // Add a delay of 3 seconds before turning off the loading screen\n        const loadingTimeout = setTimeout(()=>{\n            setIsLoading(false);\n        }, 2000); // 3 seconds delay\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n            clearTimeout(loadingTimeout); // Clear the loading timeout when unmounting\n        };\n    }, []);\n    // Conditionally render based on screen size and loading state\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/oluwaseun26/Desktop/PROJECTS/portfolio2/app/page.jsx\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, this);\n    }\n    if (screenSize === \"large\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_big__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/oluwaseun26/Desktop/PROJECTS/portfolio2/app/page.jsx\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    } else if (screenSize === \"small\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_small__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/oluwaseun26/Desktop/PROJECTS/portfolio2/app/page.jsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_medium__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/oluwaseun26/Desktop/PROJECTS/portfolio2/app/page.jsx\",\n            lineNumber: 45,\n            columnNumber: 12\n        }, this);\n    }\n}\n_s(Home, \"/DvLhEGNP/j6mrWUZIQH13yXIkY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNLO0FBQzVCO0FBQ0Y7QUFDSTtBQUNFO0FBRWpCLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUMsT0FBTyx1QkFBdUI7SUFDM0UsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLE9BQU8sdUJBQXVCO0lBRXpFQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGNBQWNWLHFFQUFhQTtRQUNqQ08sY0FBY0csY0FBYyw4QkFBOEI7UUFFMUQsTUFBTUMsZUFBZTtZQUNuQixNQUFNQyxVQUFVWixxRUFBYUE7WUFDN0JPLGNBQWNLO1FBQ2hCO1FBRUEsaUVBQWlFO1FBQ2pFLE1BQU1DLGlCQUFpQkMsV0FBVztZQUNoQ0wsYUFBYTtRQUNmLEdBQUcsT0FBTyxrQkFBa0I7UUFFNUJNLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVMO1FBRWxDLE9BQU87WUFDTEksT0FBT0UsbUJBQW1CLENBQUMsVUFBVU47WUFDckNPLGFBQWFMLGlCQUFpQiw0Q0FBNEM7UUFDNUU7SUFDRixHQUFHLEVBQUU7SUFFTCw4REFBOEQ7SUFDOUQsSUFBSUwsV0FBVztRQUNiLHFCQUFPLDhEQUFDSixnREFBT0E7Ozs7O0lBQ2pCO0lBRUEsSUFBSUUsZUFBZSxTQUFTO1FBQzFCLHFCQUFPLDhEQUFDSiw0Q0FBS0E7Ozs7O0lBQ2YsT0FBTyxJQUFJSSxlQUFlLFNBQVM7UUFDakMscUJBQU8sOERBQUNMLDhDQUFLQTs7Ozs7SUFDZixPQUFPO1FBQ0wscUJBQU8sOERBQUNFLCtDQUFNQTs7Ozs7SUFDaEI7QUFDRjtHQXRDd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFNjcmVlblNpemUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc2NyZWVudXRpbHNcIjtcbmltcG9ydCBTbWFsbCBmcm9tIFwiLi9zbWFsbFwiO1xuaW1wb3J0IExhcmdlIGZyb20gXCIuL2JpZ1wiO1xuaW1wb3J0IE1lZGl1bSBmcm9tIFwiLi9tZWRpdW1cIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL2xvYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NjcmVlblNpemUsIHNldFNjcmVlblNpemVdID0gdXNlU3RhdGUobnVsbCk7IC8vIEluaXRpYWxpemUgd2l0aCBudWxsXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gSW5pdGlhbGl6ZSB3aXRoIHRydWVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTaXplID0gZ2V0U2NyZWVuU2l6ZSgpO1xuICAgIHNldFNjcmVlblNpemUoaW5pdGlhbFNpemUpOyAvLyBTZXQgdGhlIGluaXRpYWwgc2NyZWVuIHNpemVcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1NpemUgPSBnZXRTY3JlZW5TaXplKCk7XG4gICAgICBzZXRTY3JlZW5TaXplKG5ld1NpemUpO1xuICAgIH07XG5cbiAgICAvLyBBZGQgYSBkZWxheSBvZiAzIHNlY29uZHMgYmVmb3JlIHR1cm5pbmcgb2ZmIHRoZSBsb2FkaW5nIHNjcmVlblxuICAgIGNvbnN0IGxvYWRpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDIwMDApOyAvLyAzIHNlY29uZHMgZGVsYXlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgIGNsZWFyVGltZW91dChsb2FkaW5nVGltZW91dCk7IC8vIENsZWFyIHRoZSBsb2FkaW5nIHRpbWVvdXQgd2hlbiB1bm1vdW50aW5nXG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vIENvbmRpdGlvbmFsbHkgcmVuZGVyIGJhc2VkIG9uIHNjcmVlbiBzaXplIGFuZCBsb2FkaW5nIHN0YXRlXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoc2NyZWVuU2l6ZSA9PT0gXCJsYXJnZVwiKSB7XG4gICAgcmV0dXJuIDxMYXJnZSAvPjtcbiAgfSBlbHNlIGlmIChzY3JlZW5TaXplID09PSBcInNtYWxsXCIpIHtcbiAgICByZXR1cm4gPFNtYWxsIC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TWVkaXVtIC8+O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFNjcmVlblNpemUiLCJTbWFsbCIsIkxhcmdlIiwiTWVkaXVtIiwiTG9hZGluZyIsIkhvbWUiLCJzY3JlZW5TaXplIiwic2V0U2NyZWVuU2l6ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImluaXRpYWxTaXplIiwiaGFuZGxlUmVzaXplIiwibmV3U2l6ZSIsImxvYWRpbmdUaW1lb3V0Iiwic2V0VGltZW91dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});