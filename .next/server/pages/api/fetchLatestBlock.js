"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/fetchLatestBlock";
exports.ids = ["pages/api/fetchLatestBlock"];
exports.modules = {

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "(api)/./pages/api/fetchLatestBlock.ts":
/*!***************************************!*\
  !*** ./pages/api/fetchLatestBlock.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            const body = JSON.parse(req.body);\n            let rpcUrl = body.rpcUrl;\n            // address = \"0x6B175474E89094C44Da98b954EedeAC495271d0F\"\n            // blockNumber = \"1000\"\n            rpcUrl = \"https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf\";\n            const command = `cd.. & cast block-number --rpc-url ${rpcUrl}`;\n            (0,child_process__WEBPACK_IMPORTED_MODULE_0__.exec)(command, (error, stdout, stderr)=>{\n                if (error) {\n                    console.log(\"Error in executing command: \", error);\n                    return error;\n                }\n                return res.json({\n                    stdout\n                });\n            });\n        }\n    } catch (err) {\n        console.log(\"Error in handing API request\", err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hMYXRlc3RCbG9jay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDcUM7QUFFdEIsU0FBU0MsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN2RSxJQUFJO1FBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7WUFDdkIsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxJQUFJRyxJQUFJO1lBQ2hDLElBQUlHLFNBQVNILEtBQUtHLE1BQU07WUFFeEIseURBQXlEO1lBQ3pELHVCQUF1QjtZQUN2QkEsU0FBUztZQUVULE1BQU1DLFVBQVUsQ0FBQyxtQ0FBbUMsRUFBRUQsT0FBTyxDQUFDO1lBQzlEUixtREFBSUEsQ0FBQ1MsU0FBUyxDQUFDQyxPQUFPQyxRQUFRQyxTQUFXO2dCQUNyQyxJQUFJRixPQUFPO29CQUNQRyxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDSjtvQkFDNUMsT0FBT0E7Z0JBQ1gsQ0FBQztnQkFDRCxPQUFPUCxJQUFJWSxJQUFJLENBQUM7b0JBQUVKO2dCQUFPO1lBQzdCO1FBQ0osQ0FBQztJQUNMLEVBQ0EsT0FBT0ssS0FBSztRQUNSSCxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDRTtJQUNoRDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3VuZHJ5LXVpLy4vcGFnZXMvYXBpL2ZldGNoTGF0ZXN0QmxvY2sudHM/YmNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZXhlYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGxldCBycGNVcmwgPSBib2R5LnJwY1VybFxyXG5cclxuICAgICAgICAgICAgLy8gYWRkcmVzcyA9IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCJcclxuICAgICAgICAgICAgLy8gYmxvY2tOdW1iZXIgPSBcIjEwMDBcIlxyXG4gICAgICAgICAgICBycGNVcmwgPSBcImh0dHBzOi8vZXRoLW1haW5uZXQuYWxjaGVteWFwaS5pby92Mi9MYzdvSUdZZUxfUXZJbnpJMFdpdV9wT1paREVLQnJkZlwiXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gYGNkLi4gJiBjYXN0IGJsb2NrLW51bWJlciAtLXJwYy11cmwgJHtycGNVcmx9YFxyXG4gICAgICAgICAgICBleGVjKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gZXhlY3V0aW5nIGNvbW1hbmQ6IFwiLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN0ZG91dCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gaGFuZGluZyBBUEkgcmVxdWVzdFwiLCBlcnIpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZXhlYyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwicnBjVXJsIiwiY29tbWFuZCIsImVycm9yIiwic3Rkb3V0Iiwic3RkZXJyIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchLatestBlock.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchLatestBlock.ts"));
module.exports = __webpack_exports__;

})();