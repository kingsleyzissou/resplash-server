require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/routes */ "./src/routes/index.js");




/* harmony default export */ __webpack_exports__["default"] = (express => {
  const app = express();
  const router = express.Router();
  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()());
  app.use(helmet__WEBPACK_IMPORTED_MODULE_1___default()());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
    extended: true
  }));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json()); // this statement is last
  // so error handling can be
  // applied

  return app.use(Object(_routes__WEBPACK_IMPORTED_MODULE_3__["default"])(router));
});

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);


dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();
/* harmony default export */ __webpack_exports__["default"] = ({
  port: process.env.APP_PORT || 4000,
  root: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../', '../'),
  db: process.env.DB_HOST,
  jwtSecret: process.env.JWT_SECRET
});
/* WEBPACK VAR INJECTION */}.call(this, "src/config"))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app */ "./src/app.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/config */ "./src/config/index.js");
/* harmony import */ var _utilities_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utilities/logger */ "./src/utilities/logger.js");



 // Prepare the server

const server = Object(_app__WEBPACK_IMPORTED_MODULE_1__["default"])(express__WEBPACK_IMPORTED_MODULE_0___default.a); // Get the server port

const {
  port
} = _config__WEBPACK_IMPORTED_MODULE_2__["default"]; // Start the server

server.listen(port, () => {
  _utilities_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(`App started on http://localhost:${port}`);
});

/***/ }),

/***/ "./src/middleware/errors/handler.js":
/*!******************************************!*\
  !*** ./src/middleware/errors/handler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// last method in the stack to catch
// all errors and send the status cod
// and error message
// eslint-disable-next-line
const handler = ({
  message,
  status
}, req, res, next) => {
  res.send({
    message,
    status
  });
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./src/middleware/errors/index.js":
/*!****************************************!*\
  !*** ./src/middleware/errors/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/middleware/errors/handler.js");
/* harmony import */ var _reporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporter */ "./src/middleware/errors/reporter.js");

 // export the two functions in
// a single object

/* harmony default export */ __webpack_exports__["default"] = ({
  reporter: _reporter__WEBPACK_IMPORTED_MODULE_1__["default"],
  handler: _handler__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/middleware/errors/reporter.js":
/*!*******************************************!*\
  !*** ./src/middleware/errors/reporter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities/logger */ "./src/utilities/logger.js");
/* harmony import */ var _utilities_tantrum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities/tantrum */ "./src/utilities/tantrum.js");

 // First method in the error stack
// catches the error, logs it and
// passes it down the stack

const reporter = ({
  message,
  status
}, req, res, next) => {
  // Throw tantrum to be used for error
  const error = new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_1__["default"](status, message); // Log error

  _utilities_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error(error); // Pass the error on

  next(error);
};

/* harmony default export */ __webpack_exports__["default"] = (reporter);

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/middleware/errors */ "./src/middleware/errors/index.js");
/* harmony import */ var _utilities_tantrum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities/tantrum */ "./src/utilities/tantrum.js");


/* harmony default export */ __webpack_exports__["default"] = (router => {
  router.get('/', (req, res) => {
    res.status(200).send({
      message: 'Hello there'
    });
  }); // Throw tantrum to test error
  // handling

  router.get('/error', () => {
    throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_1__["default"](500, 'some error');
  }); // Last route to catch 404 endpoints

  router.use((req, res, next) => {
    const error = new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_1__["default"](404, 'Not found');
    next(error);
  }); // Catch all errors and report

  router.use(_middleware_errors__WEBPACK_IMPORTED_MODULE_0__["default"].reporter); // handle error and send response
  // return router to be used in server

  return router.use(_middleware_errors__WEBPACK_IMPORTED_MODULE_0__["default"].handler);
});

/***/ }),

/***/ "./src/utilities/logger.js":
/*!*********************************!*\
  !*** ./src/utilities/logger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);

const {
  combine,
  colorize,
  simple,
  json
} = winston__WEBPACK_IMPORTED_MODULE_0__["format"];
const logger = Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
  level: 'info',
  format: json(),
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({
    format: combine(colorize(), simple())
  })]
});
/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./src/utilities/tantrum.js":
/*!**********************************!*\
  !*** ./src/utilities/tantrum.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Tantrum extends Error {
  constructor(code, message) {
    super(message);
    this.status = code;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tantrum);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zissou/Sites/react/resplash-server/src/index.js */"./src/index.js");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=main.map