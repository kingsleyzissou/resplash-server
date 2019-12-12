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
const test = "development" === 'test';
const connectionString = !test ? process.env.DB_HOST : new mongodb_memory_server__WEBPACK_IMPORTED_MODULE_2__["MongoMemoryServer"]().getConnectionString().then(string => string);
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
  server: {},

  async connect({
    host,
    options,
    server
  }) {
    // Attempt connection or else
    // catch any connection errors
    this.server = server;
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(host, options).catch(error => this.report(error)); // Handle errors after initial connection

    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', error => this.report(error));
  },

  async disconnect() {
    if (this.server) await this.server.stop();
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

/***/ "./src/graphql/resolvers/collection.js":
/*!*********************************************!*\
  !*** ./src/graphql/resolvers/collection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models/collection */ "./src/models/collection/index.js");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/models/image */ "./src/models/image/index.js");
/* harmony import */ var _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/utilities/tantrum */ "./src/utilities/tantrum.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    collection: async (_, {
      _id
    }, {
      user
    }) => {
      if (!user) return null;
      return _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
        _id
      });
    },
    collections: async (_, args, {
      user
    }) => {
      if (!user) return null;
      return _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].find({
        user: {
          _id: user._id
        }
      });
    }
  },
  Mutation: {
    addCollection: async (_, {
      input
    }) => {
      const collection = new _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"](_objectSpread({}, input));
      await collection.save().catch(err => {
        throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](500, err);
      });
      return collection;
    },
    updateCollection: async (_, {
      _id,
      input
    }) => {
      await _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].updateOne({
        _id
      }, _objectSpread({}, input)).catch(err => {
        throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](500, err);
      });
      return _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
        _id
      }).catch(err => {
        throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](500, err);
      });
    },
    deleteCollection: async (_, {
      _id
    }) => {
      const collection = await _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
        _id
      }).catch(err => {
        throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](500, err);
      });
      return collection.remove();
    },
    addImage: async (_, {
      _id,
      input
    }) => {
      const image = new _models_image__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({}, input));
      const collection = await _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
        _id
      }).catch(err => {
        throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](500, err);
      });
      collection.images.push(image);
      collection.save();
      return collection;
    },
    removeImage: async (_, {
      _id,
      image
    }) => {
      const collection = await _models_collection__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
        _id
      }).catch(err => {
        throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](500, err);
      });
      collection.images.pull(image);
      collection.save();
      return collection;
    }
  }
});

/***/ }),

/***/ "./src/graphql/resolvers/comment.js":
/*!******************************************!*\
  !*** ./src/graphql/resolvers/comment.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/models/comment */ "./src/models/comment/index.js");
/* harmony import */ var _models_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/models/collection */ "./src/models/collection/index.js");



const pushToCollection = async (_id, comment) => {
  await _models_collection__WEBPACK_IMPORTED_MODULE_1__["default"].updateOne({
    _id
  }, {
    $push: {
      comments: comment._id
    }
  });
  return comment;
};

const pushToSubcomment = async (_id, comment) => {
  await _models_comment__WEBPACK_IMPORTED_MODULE_0__["default"].updateOne({
    _id
  }, {
    $push: {
      comments: comment._id
    }
  });
  return comment;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    comments: async (_, {
      typeId
    }) => {
      const collection = await _models_collection__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
        _id: typeId
      });
      return collection.comments;
    }
  },
  Mutation: {
    addComment: async (_, {
      typeId,
      type,
      input
    }, {
      user
    }) => {
      if (!user) return null;
      const comment = new _models_comment__WEBPACK_IMPORTED_MODULE_0__["default"]({
        type,
        typeId,
        user: user._id,
        message: input
      });
      await comment.save();
      return type === 'collection' ? pushToCollection(typeId, comment) : pushToSubcomment(typeId, comment);
    }
  }
});

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
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection */ "./src/graphql/resolvers/collection.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment */ "./src/graphql/resolvers/comment.js");



/* harmony default export */ __webpack_exports__["default"] = ([_user__WEBPACK_IMPORTED_MODULE_0__["default"], _collection__WEBPACK_IMPORTED_MODULE_1__["default"], _comment__WEBPACK_IMPORTED_MODULE_2__["default"]]);

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
    }, {
      user
    }) => {
      if (!user) return null;
      return _models_user__WEBPACK_IMPORTED_MODULE_0__["default"].findById({
        _id
      });
    }
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
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./src/graphql/schema/collection.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./src/graphql/schema/image.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./src/graphql/schema/comment.js");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist */ "./src/graphql/schema/artist.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar */ "./src/graphql/schema/avatar.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url */ "./src/graphql/schema/url.js");








/* harmony default export */ __webpack_exports__["default"] = ([_base__WEBPACK_IMPORTED_MODULE_0__["default"], _user__WEBPACK_IMPORTED_MODULE_1__["default"], _comment__WEBPACK_IMPORTED_MODULE_4__["default"], _collection__WEBPACK_IMPORTED_MODULE_2__["default"], _image__WEBPACK_IMPORTED_MODULE_3__["default"], _avatar__WEBPACK_IMPORTED_MODULE_6__["default"], _artist__WEBPACK_IMPORTED_MODULE_5__["default"], _url__WEBPACK_IMPORTED_MODULE_7__["default"]]);

/***/ }),

/***/ "./src/graphql/schema/artist.js":
/*!**************************************!*\
  !*** ./src/graphql/schema/artist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  type Artist {
    id: String,
    name: String,
    profile_image: Avatar,
    username: String,
  }

  input ArtistInput {
    id: String,
    name: String,
    profile_image: AvatarInput,
    username: String,
  }

`);

/***/ }),

/***/ "./src/graphql/schema/avatar.js":
/*!**************************************!*\
  !*** ./src/graphql/schema/avatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  type Avatar {
    medium: String,
  }

  input AvatarInput {
    medium: String,
  }

`);

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

  type Mutation {
    sayHello(name: String!): String!
  }

`);

/***/ }),

/***/ "./src/graphql/schema/collection.js":
/*!******************************************!*\
  !*** ./src/graphql/schema/collection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  extend type Query {
    collection(_id: String): Collection,
    collections: [Collection],
  }

  extend type Mutation {
    addCollection(input: CollectionAdd): Collection,
    deleteCollection(_id: String): Collection,
    updateCollection(_id: String, input: CollectionUpdate): Collection,
    addImage(_id: String, input: ImageInput): Collection,
    removeImage(_id: String, image: String): Collection,
  }

  type Collection {
    _id: String,
    name: String,
    subtitle: String,
    description: String,
    user: User,
    images: [Image],
    comments: [Comment],
    likes: Int,
  }

  input CollectionAdd {
    name: String,
    subtitle: String,
    description: String,
    user: String,
    images: [ImageInput],
    comments: [CommentInput],
    likes: Int,
  }

  input CollectionUpdate {
    name: String,
    subtitle: String,
    description: String,
  }

`);

/***/ }),

/***/ "./src/graphql/schema/comment.js":
/*!***************************************!*\
  !*** ./src/graphql/schema/comment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  enum CommentType {
    collection
    comment
  }

  extend type Query {
    comment(_id: String): Comment,
    comments(typeId: String): [Comment],
  }

  extend type Mutation {
    addComment(typeId: String, type: CommentType, input: String): Comment,
  }

  type Comment {
    _id: String,
    type: CommentType,
    typeId: String,
    message: String,
    comments: [Comment],
    user: User,
    likes: Int,
    created_at: String,
  }

  input CommentInput {
    type: CommentType,
    comments: [CommentInput],
    user: String,
    typeId: String,
    likes: Int,
  }

`);

/***/ }),

/***/ "./src/graphql/schema/image.js":
/*!*************************************!*\
  !*** ./src/graphql/schema/image.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  extend type Query {
    image(id: String): Image,
    images: [Image],
  }

  type Image {
    _id: String,
    description: String,
    alt_description: String,
    user: Artist,
    urls: Url,
    likes: Int,
  }

  input ImageInput {
    id: String,
    description: String,
    alt_description: String,
    user: ArtistInput,
    urls: UrlInput,
    likes: Int,
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

/***/ "./src/graphql/schema/url.js":
/*!***********************************!*\
  !*** ./src/graphql/schema/url.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (gql => gql`

  type Url {
    full: String,
    regular: String,
  }

  input UrlInput {
    full: String,
    regular: String,
  }

`);

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
    email: String,
    collections: [Collection],
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
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/middleware/auth */ "./src/middleware/auth/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./src/graphql/resolvers/index.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ "./src/graphql/schema/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  introspection: true,
  playground: true,
  typeDefs: _schema__WEBPACK_IMPORTED_MODULE_3__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],

  async context({
    req
  }) {
    const token = Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["getToken"])(req.headers);
    return {
      user: Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["authenticated"])({
        token
      }) ? Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["authenticated"])({
        token
      }) : null
    };
  },

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




const authenticated = ({
  token
}) => {
  if (!token) throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_2__["default"](401, 'User not authenticated');
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, _config__WEBPACK_IMPORTED_MODULE_1__["default"].jwtSecret);
};

/* harmony default export */ __webpack_exports__["default"] = (authenticated);

/***/ }),

/***/ "./src/middleware/auth/getToken.js":
/*!*****************************************!*\
  !*** ./src/middleware/auth/getToken.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_tantrum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities/tantrum */ "./src/utilities/tantrum.js");


const getToken = ({
  authorization
}) => {
  if (!authorization) throw new _utilities_tantrum__WEBPACK_IMPORTED_MODULE_0__["default"](403, 'User not authorised');
  return authorization.split(' ')[1];
};

/* harmony default export */ __webpack_exports__["default"] = (getToken);

/***/ }),

/***/ "./src/middleware/auth/index.js":
/*!**************************************!*\
  !*** ./src/middleware/auth/index.js ***!
  \**************************************/
/*! exports provided: authenticated, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authenticated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticated */ "./src/middleware/auth/authenticated.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticated", function() { return _authenticated__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getToken */ "./src/middleware/auth/getToken.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return _getToken__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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

  _utilities__WEBPACK_IMPORTED_MODULE_0__["logger"].error(message); // Pass the error on

  next(error);
};

/* harmony default export */ __webpack_exports__["default"] = (reporter);

/***/ }),

/***/ "./src/middleware/index.js":
/*!*********************************!*\
  !*** ./src/middleware/index.js ***!
  \*********************************/
/*! exports provided: errors, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/middleware/errors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ "./src/middleware/validate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/middleware/validate/index.js":
/*!******************************************!*\
  !*** ./src/middleware/validate/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Joi from '@hapi/joi';

/* harmony default export */ __webpack_exports__["default"] = (schema => (req, res, next) => {
  const {
    value,
    error
  } = schema.validate(_objectSpread({}, req.body), {
    abortEarly: false
  });

  if (error) {
    const messages = error.details.map(detail => detail.message);
    throw new _utilities__WEBPACK_IMPORTED_MODULE_0__["Tantrum"](401, messages);
  }

  if (!req.value) req.value = {};
  req.value.fields = value;
  next();
});

/***/ }),

/***/ "./src/models/artist/schema.js":
/*!*************************************!*\
  !*** ./src/models/artist/schema.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../avatar/schema */ "./src/models/avatar/schema.js");


const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
const schema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  profile_image: {
    type: _avatar_schema__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./src/models/avatar/schema.js":
/*!*************************************!*\
  !*** ./src/models/avatar/schema.js ***!
  \*************************************/
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
  medium: {
    type: String,
    required: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./src/models/collection/index.js":
/*!****************************************!*\
  !*** ./src/models/collection/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/models/collection/model.js");

/* harmony default export */ __webpack_exports__["default"] = (_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/models/collection/model.js":
/*!****************************************!*\
  !*** ./src/models/collection/model.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/models/collection/schema.js");

 // eslint-disable-next-line

_schema__WEBPACK_IMPORTED_MODULE_1__["default"].pre(['find', 'findOne'], function () {
  this.populate('comments');
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('collection', _schema__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/models/collection/schema.js":
/*!*****************************************!*\
  !*** ./src/models/collection/schema.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/schema */ "./src/models/image/schema.js");


const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  images: [{
    type: _image_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
    default: []
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }],
  likes: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./src/models/comment/index.js":
/*!*************************************!*\
  !*** ./src/models/comment/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/models/comment/model.js");

/* harmony default export */ __webpack_exports__["default"] = (_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/models/comment/model.js":
/*!*************************************!*\
  !*** ./src/models/comment/model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/models/comment/schema.js");

 // eslint-disable-next-line

_schema__WEBPACK_IMPORTED_MODULE_1__["default"].pre(['find', 'findOne'], function () {
  this.populate('user');
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('comment', _schema__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/models/comment/schema.js":
/*!**************************************!*\
  !*** ./src/models/comment/schema.js ***!
  \**************************************/
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
  type: {
    type: String,
    enum: ['collection', 'comment'],
    default: 'collection'
  },
  typeId: Schema.Types.ObjectId,
  message: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
    default: []
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  likes: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./src/models/image/index.js":
/*!***********************************!*\
  !*** ./src/models/image/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/models/image/model.js");

/* harmony default export */ __webpack_exports__["default"] = (_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/models/image/model.js":
/*!***********************************!*\
  !*** ./src/models/image/model.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/models/image/schema.js");


/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('image', _schema__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/models/image/schema.js":
/*!************************************!*\
  !*** ./src/models/image/schema.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _artist_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artist/schema */ "./src/models/artist/schema.js");
/* harmony import */ var _url_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../url/schema */ "./src/models/url/schema.js");



const {
  Schema
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;
const schema = new Schema({
  id: {
    type: String
  },
  alt_description: {
    type: String
  },
  description: {
    type: String
  },
  user: {
    type: _artist_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
    required: true
  },
  urls: {
    type: _url_schema__WEBPACK_IMPORTED_MODULE_2__["default"],
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./src/models/url/schema.js":
/*!**********************************!*\
  !*** ./src/models/url/schema.js ***!
  \**********************************/
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
  medium: {
    type: String
  },
  regular: {
    type: String
  },
  full: {
    type: String
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

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
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./src/models/user/schema.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");



 // Perform the following function before updating
// the user in the database. Check if the password has
// been modified, if so, hash the password before
// saving.
// eslint-disable-next-line

_schema__WEBPACK_IMPORTED_MODULE_2__["default"].pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 10).catch(err => next(err));
  this.password = hash;
  return next();
}); // Validate the user password

_schema__WEBPACK_IMPORTED_MODULE_2__["default"].methods.verifyPassword = async (cipher, plain) => {
  const comparison = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(plain, cipher).catch(err => {
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
    required: true,
    select: false
  }
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
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/utilities */ "./src/utilities/index.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/middleware */ "./src/middleware/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services/auth */ "./src/services/auth/index.js");
/* harmony import */ var _validators_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/validators/registration */ "./src/validators/registration.js");




/* harmony default export */ __webpack_exports__["default"] = (router => {
  router.get('/', (req, res) => {
    res.status(200).send({
      message: 'Hello there'
    });
  }); // Throw tantrum to test error
  // handling

  router.get('/error', () => {
    throw new _utilities__WEBPACK_IMPORTED_MODULE_0__["Tantrum"](500, 'some error');
  });
  router.post('/login', async (req, res, next) => {
    const {
      email,
      password
    } = req.body;
    const response = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["login"])(email, password).catch(err => next(err));
    res.status(200).send(response);
  });
  router.post('/register', Object(_middleware__WEBPACK_IMPORTED_MODULE_1__["validate"])(_validators_registration__WEBPACK_IMPORTED_MODULE_3__["default"]), async (req, res, next) => {
    const response = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["register"])(req.value.fields).catch(err => next(err));
    res.status(200).send(response);
  }); // router.get('/protected', authenticated, async (req, res) => {
  //   res.status(200).send({ message: 'Cool cool cool' });
  // });
  // Last route to catch 404 endpoints

  router.use((req, res, next) => {
    const error = new _utilities__WEBPACK_IMPORTED_MODULE_0__["Tantrum"](404, 'Not found');
    next(error);
  }); // Catch all errors and report

  router.use(_middleware__WEBPACK_IMPORTED_MODULE_1__["errors"].reporter); // handle error and send response
  // return router to be used in server

  return router.use(_middleware__WEBPACK_IMPORTED_MODULE_1__["errors"].handler);
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
/* harmony import */ var _graphql_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/graphql/server */ "./src/graphql/server.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/routes */ "./src/routes/index.js");






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

  _graphql_server__WEBPACK_IMPORTED_MODULE_4__["default"].applyMiddleware({
    app,
    path: '/graphql'
  }); // this statement is last
  // so error handling can be
  // applied

  return app.use(Object(_routes__WEBPACK_IMPORTED_MODULE_5__["default"])(router));
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




const login = async (email, password) => {
  const user = await _models_user__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
    email
  }).select('+password').exec().catch(err => {
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
/* harmony import */ var _generateJWT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateJWT */ "./src/services/auth/generateJWT.js");




const register = async fields => {
  const {
    username,
    name,
    password,
    email
  } = fields;
  const user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["default"]({
    username,
    name,
    password,
    email
  });
  user.save().catch(err => {
    throw new _utilities__WEBPACK_IMPORTED_MODULE_1__["Tantrum"](500, err);
  });
  return {
    user,
    token: Object(_generateJWT__WEBPACK_IMPORTED_MODULE_2__["default"])(user)
  };
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

/***/ "./src/validators/registration.js":
/*!****************************************!*\
  !*** ./src/validators/registration.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({
  name: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required().messages({
    'any.required': 'Name is required'
  }),
  username: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required().messages({
    'any.required': 'Username is required'
  }),
  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Must be a valid email address'
  }),
  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be atleast 6 characters'
  }),
  confirm: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required().valid(_hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.ref('password')).messages({
    'any.required': 'Password confirmation is required',
    'any.only': 'Passwords must match'
  })
}));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zissou/Sites/react/resplash-server/src/index.js */"./src/index.js");


/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

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