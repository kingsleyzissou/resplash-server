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
/* harmony import */ var mongodb_memory_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb-memory-server */ "mongodb-memory-server");
/* harmony import */ var mongodb_memory_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb_memory_server__WEBPACK_IMPORTED_MODULE_2__);



dotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();
const test = process.NODE_ENV === 'test';
const connectionString = !test ? process.env.DB_HOST : new mongodb_memory_server__WEBPACK_IMPORTED_MODULE_2__["MongoMemoryServer"]().getConnectionString();
/* harmony default export */ __webpack_exports__["default"] = ({
  env: "development",
  port: process.env.APP_PORT || 4000,
  root: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../', '../'),
  db: {
    host: connectionString,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  jwtSecret: process.env.JWT_SECRET
});
/* WEBPACK VAR INJECTION */}.call(this, "src/config"))

/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");


const database = {
  // Connect to MongoDB
  async connect({
    host,
    options
  }) {
    // Attempt connection or else
    // catch any connection errors
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(host, options).catch(error => this.report(error)); // Handle errors after initial connection

    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', error => this.report(error));
  },

  async disconnect() {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.close();
  },

  async reset() {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.db.dropDatabase();
  },

  // Report errors
  report(error) {
    _utilities__WEBPACK_IMPORTED_MODULE_1__["logger"].error(error);
  }

};
/* harmony default export */ __webpack_exports__["default"] = (database);

/***/ }),

/***/ "./src/graphql/resolvers/index.js":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/graphql/resolvers/user.js");

/* harmony default export */ __webpack_exports__["default"] = ([_user__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/***/ }),

/***/ "./src/graphql/resolvers/user.js":
/*!***************************************!*\
  !*** ./src/graphql/resolvers/user.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models/user */ "./src/models/user/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    user: async (_, {
      _id
    }) => _models_user__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
      _id
    })
  }
});

/***/ }),

/***/ "./src/graphql/schema/aggregator.js":
/*!******************************************!*\
  !*** ./src/graphql/schema/aggregator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/graphql/schema/base.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/graphql/schema/user.js");


/* harmony default export */ __webpack_exports__["default"] = ([_base__WEBPACK_IMPORTED_MODULE_0__["default"], _user__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),

/***/ "./src/graphql/schema/base.js":
/*!************************************!*\
  !*** ./src/graphql/schema/base.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  type Query {
    hello: String
  }

`);

/***/ }),

/***/ "./src/graphql/schema/index.js":
/*!*************************************!*\
  !*** ./src/graphql/schema/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aggregator */ "./src/graphql/schema/aggregator.js");


/* harmony default export */ __webpack_exports__["default"] = (_aggregator__WEBPACK_IMPORTED_MODULE_1__["default"].map(s => s(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])));

/***/ }),

/***/ "./src/graphql/schema/user.js":
/*!************************************!*\
  !*** ./src/graphql/schema/user.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  extend type Query {
    user(_id: String): User,
  }

  type User {
    _id: String,
    name: String,
    username: String,
    email: String
  }

`);

/***/ }),

/***/ "./src/graphql/server.js":
/*!*******************************!*\
  !*** ./src/graphql/server.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/graphql/schema/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/graphql/resolvers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  introspection: true,
  typeDefs: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  formatError: error => {
    const message = error.message.replace('SequelizeValidationError: ', '').replace('Validation error: ', '');
    return _objectSpread({}, error, {
      message
    });
  }
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/server */ "./src/server.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/config */ "./src/config/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/database */ "./src/database/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");



 // Prepare the server

const app = Object(_server__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Get the server port

const {
  port,
  db
} = _config__WEBPACK_IMPORTED_MODULE_1__["default"]; // Connect to the database

_database__WEBPACK_IMPORTED_MODULE_2__["default"].connect(db); // Start the server

app.listen(port, () => {
  _utilities__WEBPACK_IMPORTED_MODULE_3__["logger"].info(`App started on http://localhost:${port}`);
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/middleware/auth/authenticated.js":
/*!**********************************************!*\
  !*** ./src/middleware/auth/authenticated.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/config */ "./src/config/index.js");
/* harmony import */ var _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utilities/tantrum */ "./src/utilities/tantrum.js");




const extractToken = header => {
  if (typeof header === 'undefined') throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](401, 'User not authorised');
  return header.split(' ')[1];
};

const authenticated = (req, res, next) => {
  const token = extractToken(req.headers.authorization);
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, _config__WEBPACK_IMPORTED_MODULE_1__["default"].jwtSecret); // req.token = decoded;

  next();
};

/* harmony default export */ __webpack_exports__["default"] = (authenticated);

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
  res.status(status).send({
    message
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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");
 // First method in the error stack
// catches the error, logs it and
// passes it down the stack

const reporter = ({
  message,
  status
}, req, res, next) => {
  // Throw tantrum to be used for error
  const error = new _utilities__WEBPACK_IMPORTED_MODULE_0__["Tantrum"](status, message); // Log error

  _utilities__WEBPACK_IMPORTED_MODULE_0__["logger"].error(error); // Pass the error on

  next(error);
};

/* harmony default export */ __webpack_exports__["default"] = (reporter);

/***/ }),

/***/ "./src/models/user/index.js":
/*!**********************************!*\
  !*** ./src/models/user/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/models/user/model.js");

/* harmony default export */ __webpack_exports__["default"] = (_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/models/user/model.js":
/*!**********************************!*\
  !*** ./src/models/user/model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./src/models/user/schema.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");



 // Perform the following function before updating
// the user in the database. Check if the password has
// been modified, if so, hash the password before
// saving.
// eslint-disable-next-line

_schema__WEBPACK_IMPORTED_MODULE_2__["default"].pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 10).catch(err => next(err));
  this.password = hash;
  return next();
}); // Validate the user password

_schema__WEBPACK_IMPORTED_MODULE_2__["default"].methods.verifyPassword = async (cipher, plain) => {
  const comparison = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(plain, cipher).catch(err => {
    throw new _utilities__WEBPACK_IMPORTED_MODULE_3__["Tantrum"](500, err);
  });
  return comparison;
};

/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', _schema__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/models/user/schema.js":
/*!***********************************!*\
  !*** ./src/models/user/schema.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
const schema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: Date,
  updated_at: Date
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services/auth */ "./src/services/auth/index.js");
/* harmony import */ var _middleware_auth_authenticated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/middleware/auth/authenticated */ "./src/middleware/auth/authenticated.js");




/* harmony default export */ __webpack_exports__["default"] = (router => {
  router.get('/', (req, res) => {
    res.status(200).send({
      message: 'Hello there'
    });
  }); // Throw tantrum to test error
  // handling

  router.get('/error', () => {
    throw new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](500, 'some error');
  });
  router.post('/login', async (req, res, next) => {
    const {
      username,
      password
    } = req.body;
    const response = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["login"])(username, password).catch(err => next(err));
    res.status(200).send(response);
  });
  router.post('/register', async (req, res, next) => {
    const response = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["register"])(req.body).catch(err => next(err));
    res.status(200).send(response);
  });
  router.get('/protected', _middleware_auth_authenticated__WEBPACK_IMPORTED_MODULE_3__["default"], async (req, res) => {
    res.status(200).send({
      message: 'Cool cool cool'
    });
  }); // Last route to catch 404 endpoints

  router.use((req, res, next) => {
    const error = new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](404, 'Not found');
    next(error);
  }); // Catch all errors and report

  router.use(_middleware_errors__WEBPACK_IMPORTED_MODULE_0__["default"].reporter); // handle error and send response
  // return router to be used in server

  return router.use(_middleware_errors__WEBPACK_IMPORTED_MODULE_0__["default"].handler);
});

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/routes */ "./src/routes/index.js");
/* harmony import */ var _graphql_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/graphql/server */ "./src/graphql/server.js");






/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
  const router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router(); // Enable cors

  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()()); // Help secure the app

  app.use(helmet__WEBPACK_IMPORTED_MODULE_1___default()());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
    extended: true
  }));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json()); // Add apollo to the stack and provide
  // grapql route
  // you can now go to localhost:{port}/graphql
  // to access the graphql playground

  _graphql_server__WEBPACK_IMPORTED_MODULE_5__["default"].applyMiddleware({
    app,
    path: '/graphql'
  }); // this statement is last
  // so error handling can be
  // applied

  return app.use(Object(_routes__WEBPACK_IMPORTED_MODULE_4__["default"])(router));
});

/***/ }),

/***/ "./src/services/auth/generateJWT.js":
/*!******************************************!*\
  !*** ./src/services/auth/generateJWT.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/config */ "./src/config/index.js");



const generateJWT = user => jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(user.toJSON(), _config__WEBPACK_IMPORTED_MODULE_1__["default"].jwtSecret);

/* harmony default export */ __webpack_exports__["default"] = (generateJWT);

/***/ }),

/***/ "./src/services/auth/index.js":
/*!************************************!*\
  !*** ./src/services/auth/index.js ***!
  \************************************/
/*! exports provided: login, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/services/auth/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _login__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./src/services/auth/register.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _register__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/services/auth/login.js":
/*!************************************!*\
  !*** ./src/services/auth/login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models/user */ "./src/models/user/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");
/* harmony import */ var _generateJWT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateJWT */ "./src/services/auth/generateJWT.js");




const login = async (username, password) => {
  const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
    username
  }).catch(err => {
    throw new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](500, err);
  });
  if (!user) throw new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](404, 'User not found');
  const verified = await user.verifyPassword(user.password, password);
  if (!verified) throw new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](403, 'Username or password incorrect');
  return {
    user,
    token: Object(_generateJWT__WEBPACK_IMPORTED_MODULE_2__["default"])(user)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ "./src/services/auth/register.js":
/*!***************************************!*\
  !*** ./src/services/auth/register.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models/user */ "./src/models/user/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");



const register = async body => {
  const {
    username,
    name,
    password,
    email
  } = body;
  const user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["default"]({
    username,
    name,
    password,
    email
  });
  user.save().catch(err => {
    throw new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](500, err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/*! exports provided: logger, Tantrum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/utilities/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tantrum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tantrum */ "./src/utilities/tantrum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tantrum", function() { return _tantrum__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/config */ "./src/config/index.js");


const {
  combine,
  colorize,
  simple,
  json
} = winston__WEBPACK_IMPORTED_MODULE_0__["format"]; // Create the logger for the app

const logger = Object(winston__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
  level: 'info',
  format: json(),
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0__["transports"].Console({
    format: combine(colorize(), simple()),
    silent: _config__WEBPACK_IMPORTED_MODULE_1__["default"].env === 'test'
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
// Custom error that extends
// the default Error object.
// Tantrum provides the ability
// to add status codes to the error message
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

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongodb-memory-server":
/*!****************************************!*\
  !*** external "mongodb-memory-server" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb-memory-server");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

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