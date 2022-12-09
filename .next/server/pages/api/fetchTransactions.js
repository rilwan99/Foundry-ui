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
exports.id = "pages/api/fetchTransactions";
exports.ids = ["pages/api/fetchTransactions"];
exports.modules = {

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "(api)/./pages/api/fetchTransactions.ts":
/*!****************************************!*\
  !*** ./pages/api/fetchTransactions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            const body = JSON.parse(req.body);\n            let blockNumber = body.blockNumber;\n            let rpcUrl = body.rpcUrl;\n            // address = \"0x6B175474E89094C44Da98b954EedeAC495271d0F\"\n            // blockNumber = \"1000\"\n            rpcUrl = \"https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf\";\n            const command = `cd.. & cast block ${blockNumber} --rpc-url ${rpcUrl}`;\n            console.log(command);\n            (0,child_process__WEBPACK_IMPORTED_MODULE_0__.exec)(command, (error, stdout, stderr)=>{\n                if (error) {\n                    console.log(\"Error in executing command: \", error);\n                    return error;\n                }\n                const transactionArrayIndex = stdout.indexOf(\"transactions\");\n                const txnArray = stdout.slice(transactionArrayIndex);\n                return res.json({\n                    txnArray\n                });\n            });\n        }\n    } catch (err) {\n        console.log(\"Error in handing API request\", err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hUcmFuc2FjdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FDO0FBRXRCLFNBQVNDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDdkUsSUFBSTtRQUNBLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3ZCLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0wsSUFBSUcsSUFBSTtZQUNoQyxJQUFJRyxjQUFjSCxLQUFLRyxXQUFXO1lBQ2xDLElBQUlDLFNBQVNKLEtBQUtJLE1BQU07WUFFeEIseURBQXlEO1lBQ3pELHVCQUF1QjtZQUN2QkEsU0FBUztZQUVULE1BQU1DLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRUYsWUFBWSxXQUFXLEVBQUVDLE9BQU8sQ0FBQztZQUN0RUUsUUFBUUMsR0FBRyxDQUFDRjtZQUNaVixtREFBSUEsQ0FBQ1UsU0FBUyxDQUFDRyxPQUFPQyxRQUFRQyxTQUFXO2dCQUNyQyxJQUFJRixPQUFPO29CQUNQRixRQUFRQyxHQUFHLENBQUMsZ0NBQWdDQztvQkFDNUMsT0FBT0E7Z0JBQ1gsQ0FBQztnQkFDRCxNQUFNRyx3QkFBd0JGLE9BQU9HLE9BQU8sQ0FBQztnQkFDN0MsTUFBTUMsV0FBV0osT0FBT0ssS0FBSyxDQUFDSDtnQkFDOUIsT0FBT2IsSUFBSWlCLElBQUksQ0FBQztvQkFBRUY7Z0JBQVM7WUFDL0I7UUFDSixDQUFDO0lBQ0wsRUFDQSxPQUFPRyxLQUFLO1FBQ1JWLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NTO0lBQ2hEO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvdW5kcnktdWkvLi9wYWdlcy9hcGkvZmV0Y2hUcmFuc2FjdGlvbnMudHM/YjMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZXhlYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGxldCBibG9ja051bWJlciA9IGJvZHkuYmxvY2tOdW1iZXJcclxuICAgICAgICAgICAgbGV0IHJwY1VybCA9IGJvZHkucnBjVXJsXHJcblxyXG4gICAgICAgICAgICAvLyBhZGRyZXNzID0gXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIlxyXG4gICAgICAgICAgICAvLyBibG9ja051bWJlciA9IFwiMTAwMFwiXHJcbiAgICAgICAgICAgIHJwY1VybCA9IFwiaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyL0xjN29JR1llTF9RdkluekkwV2l1X3BPWlpERUtCcmRmXCJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBgY2QuLiAmIGNhc3QgYmxvY2sgJHtibG9ja051bWJlcn0gLS1ycGMtdXJsICR7cnBjVXJsfWBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWFuZClcclxuICAgICAgICAgICAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIGV4ZWN1dGluZyBjb21tYW5kOiBcIiwgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkFycmF5SW5kZXggPSBzdGRvdXQuaW5kZXhPZihcInRyYW5zYWN0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHhuQXJyYXkgPSBzdGRvdXQuc2xpY2UodHJhbnNhY3Rpb25BcnJheUluZGV4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgdHhuQXJyYXkgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIGhhbmRpbmcgQVBJIHJlcXVlc3RcIiwgZXJyKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4ZWMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImJsb2NrTnVtYmVyIiwicnBjVXJsIiwiY29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0ZG91dCIsInN0ZGVyciIsInRyYW5zYWN0aW9uQXJyYXlJbmRleCIsImluZGV4T2YiLCJ0eG5BcnJheSIsInNsaWNlIiwianNvbiIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchTransactions.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchTransactions.ts"));
module.exports = __webpack_exports__;

})();