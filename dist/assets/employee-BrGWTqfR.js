import { r as reactExports, g as getDefaultExportFromCjs, j as jsxRuntimeExports } from "./index-B-eg_Oe6.js";
import { M as Modal, P as Popconfirm, R as RefIcon$3, a as axios, A as API_PREFIX, s as staticMethods } from "./index-B3Jsx_k4.js";
import { u } from "./goober.modern-CbjcZCjf.js";
import { F as Form } from "./index-0t3T3FuF.js";
import { a as Card, b as RefIcon, I as Input, c as RefIcon$1 } from "./index-yrKC9Mq8.js";
import { B as Button } from "./button-CRpLj63U.js";
import { F as ForwardTable, S as Select, T as Tag } from "./index-Bt70kxsH.js";
import { T as Typography, F as Flex, R as RefIcon$2 } from "./index-CW6vE3_Z.js";
import "./ExclamationCircleFilled-CP3D0USy.js";
import "./index-zCWgOtpQ.js";
import "./addEventListener-DYAJs7e2.js";
var main = { exports: {} };
(function(module) {
  module.exports = /******/
  function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module2 = installedModules[moduleId] = {
        /******/
        exports: {},
        /******/
        id: moduleId,
        /******/
        loaded: false
        /******/
      };
      modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
      module2.loaded = true;
      return module2.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  }([
    /* 0 */
    /***/
    function(module2, exports, __webpack_require__) {
      module2.exports = __webpack_require__(1);
    },
    /* 1 */
    /***/
    function(module2, exports, __webpack_require__) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _Highlighter = __webpack_require__(2);
      var _Highlighter2 = _interopRequireDefault(_Highlighter);
      exports["default"] = _Highlighter2["default"];
      module2.exports = exports["default"];
    },
    /* 2 */
    /***/
    function(module2, exports, __webpack_require__) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports["default"] = Highlighter2;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }
        return target;
      }
      var _highlightWordsCore = __webpack_require__(3);
      var _propTypes = __webpack_require__(4);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _react = __webpack_require__(14);
      var _memoizeOne = __webpack_require__(15);
      var _memoizeOne2 = _interopRequireDefault(_memoizeOne);
      Highlighter2.propTypes = {
        activeClassName: _propTypes2["default"].string,
        activeIndex: _propTypes2["default"].number,
        activeStyle: _propTypes2["default"].object,
        autoEscape: _propTypes2["default"].bool,
        className: _propTypes2["default"].string,
        findChunks: _propTypes2["default"].func,
        highlightClassName: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
        highlightStyle: _propTypes2["default"].object,
        highlightTag: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func, _propTypes2["default"].string]),
        sanitize: _propTypes2["default"].func,
        searchWords: _propTypes2["default"].arrayOf(_propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].instanceOf(RegExp)])).isRequired,
        textToHighlight: _propTypes2["default"].string.isRequired,
        unhighlightTag: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func, _propTypes2["default"].string]),
        unhighlightClassName: _propTypes2["default"].string,
        unhighlightStyle: _propTypes2["default"].object
      };
      function Highlighter2(_ref) {
        var _ref$activeClassName = _ref.activeClassName;
        var activeClassName = _ref$activeClassName === void 0 ? "" : _ref$activeClassName;
        var _ref$activeIndex = _ref.activeIndex;
        var activeIndex = _ref$activeIndex === void 0 ? -1 : _ref$activeIndex;
        var activeStyle = _ref.activeStyle;
        var autoEscape = _ref.autoEscape;
        var _ref$caseSensitive = _ref.caseSensitive;
        var caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive;
        var className = _ref.className;
        var findChunks = _ref.findChunks;
        var _ref$highlightClassName = _ref.highlightClassName;
        var highlightClassName = _ref$highlightClassName === void 0 ? "" : _ref$highlightClassName;
        var _ref$highlightStyle = _ref.highlightStyle;
        var highlightStyle = _ref$highlightStyle === void 0 ? {} : _ref$highlightStyle;
        var _ref$highlightTag = _ref.highlightTag;
        var highlightTag = _ref$highlightTag === void 0 ? "mark" : _ref$highlightTag;
        var sanitize = _ref.sanitize;
        var searchWords = _ref.searchWords;
        var textToHighlight = _ref.textToHighlight;
        var _ref$unhighlightTag = _ref.unhighlightTag;
        var unhighlightTag = _ref$unhighlightTag === void 0 ? "span" : _ref$unhighlightTag;
        var _ref$unhighlightClassName = _ref.unhighlightClassName;
        var unhighlightClassName = _ref$unhighlightClassName === void 0 ? "" : _ref$unhighlightClassName;
        var unhighlightStyle = _ref.unhighlightStyle;
        var rest = _objectWithoutProperties(_ref, ["activeClassName", "activeIndex", "activeStyle", "autoEscape", "caseSensitive", "className", "findChunks", "highlightClassName", "highlightStyle", "highlightTag", "sanitize", "searchWords", "textToHighlight", "unhighlightTag", "unhighlightClassName", "unhighlightStyle"]);
        var chunks = (0, _highlightWordsCore.findAll)({
          autoEscape,
          caseSensitive,
          findChunks,
          sanitize,
          searchWords,
          textToHighlight
        });
        var HighlightTag = highlightTag;
        var highlightIndex = -1;
        var highlightClassNames = "";
        var highlightStyles = void 0;
        var lowercaseProps = function lowercaseProps2(object) {
          var mapped = {};
          for (var key in object) {
            mapped[key.toLowerCase()] = object[key];
          }
          return mapped;
        };
        var memoizedLowercaseProps = (0, _memoizeOne2["default"])(lowercaseProps);
        return (0, _react.createElement)("span", _extends({
          className
        }, rest, {
          children: chunks.map(function(chunk, index) {
            var text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
            if (chunk.highlight) {
              highlightIndex++;
              var highlightClass = void 0;
              if (typeof highlightClassName === "object") {
                if (!caseSensitive) {
                  highlightClassName = memoizedLowercaseProps(highlightClassName);
                  highlightClass = highlightClassName[text.toLowerCase()];
                } else {
                  highlightClass = highlightClassName[text];
                }
              } else {
                highlightClass = highlightClassName;
              }
              var isActive = highlightIndex === +activeIndex;
              highlightClassNames = highlightClass + " " + (isActive ? activeClassName : "");
              highlightStyles = isActive === true && activeStyle != null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
              var props = {
                children: text,
                className: highlightClassNames,
                key: index,
                style: highlightStyles
              };
              if (typeof HighlightTag !== "string") {
                props.highlightIndex = highlightIndex;
              }
              return (0, _react.createElement)(HighlightTag, props);
            } else {
              return (0, _react.createElement)(unhighlightTag, {
                children: text,
                className: unhighlightClassName,
                key: index,
                style: unhighlightStyle
              });
            }
          })
        }));
      }
      module2.exports = exports["default"];
    },
    /* 3 */
    /***/
    function(module2, exports) {
      module2.exports = /******/
      function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId])
            return installedModules[moduleId].exports;
          var module3 = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
            /******/
          };
          modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
          module3.loaded = true;
          return module3.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
      }([
        /* 0 */
        /***/
        function(module3, exports2, __webpack_require__) {
          module3.exports = __webpack_require__(1);
        },
        /* 1 */
        /***/
        function(module3, exports2, __webpack_require__) {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _utils = __webpack_require__(2);
          Object.defineProperty(exports2, "combineChunks", {
            enumerable: true,
            get: function get() {
              return _utils.combineChunks;
            }
          });
          Object.defineProperty(exports2, "fillInChunks", {
            enumerable: true,
            get: function get() {
              return _utils.fillInChunks;
            }
          });
          Object.defineProperty(exports2, "findAll", {
            enumerable: true,
            get: function get() {
              return _utils.findAll;
            }
          });
          Object.defineProperty(exports2, "findChunks", {
            enumerable: true,
            get: function get() {
              return _utils.findChunks;
            }
          });
        },
        /* 2 */
        /***/
        function(module3, exports2) {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.findAll = function findAll2(_ref) {
            var autoEscape = _ref.autoEscape, _ref$caseSensitive = _ref.caseSensitive, caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive, _ref$findChunks = _ref.findChunks, findChunks = _ref$findChunks === void 0 ? defaultFindChunks : _ref$findChunks, sanitize = _ref.sanitize, searchWords = _ref.searchWords, textToHighlight = _ref.textToHighlight;
            return fillInChunks({
              chunksToHighlight: combineChunks({
                chunks: findChunks({
                  autoEscape,
                  caseSensitive,
                  sanitize,
                  searchWords,
                  textToHighlight
                })
              }),
              totalLength: textToHighlight ? textToHighlight.length : 0
            });
          };
          var combineChunks = exports2.combineChunks = function combineChunks2(_ref2) {
            var chunks = _ref2.chunks;
            chunks = chunks.sort(function(first, second) {
              return first.start - second.start;
            }).reduce(function(processedChunks, nextChunk) {
              if (processedChunks.length === 0) {
                return [nextChunk];
              } else {
                var prevChunk = processedChunks.pop();
                if (nextChunk.start <= prevChunk.end) {
                  var endIndex = Math.max(prevChunk.end, nextChunk.end);
                  processedChunks.push({ start: prevChunk.start, end: endIndex });
                } else {
                  processedChunks.push(prevChunk, nextChunk);
                }
                return processedChunks;
              }
            }, []);
            return chunks;
          };
          var defaultFindChunks = function defaultFindChunks2(_ref3) {
            var autoEscape = _ref3.autoEscape, caseSensitive = _ref3.caseSensitive, _ref3$sanitize = _ref3.sanitize, sanitize = _ref3$sanitize === void 0 ? identity : _ref3$sanitize, searchWords = _ref3.searchWords, textToHighlight = _ref3.textToHighlight;
            textToHighlight = sanitize(textToHighlight);
            return searchWords.filter(function(searchWord) {
              return searchWord;
            }).reduce(function(chunks, searchWord) {
              searchWord = sanitize(searchWord);
              if (autoEscape) {
                searchWord = escapeRegExpFn(searchWord);
              }
              var regex = new RegExp(searchWord, caseSensitive ? "g" : "gi");
              var match = void 0;
              while (match = regex.exec(textToHighlight)) {
                var start = match.index;
                var end = regex.lastIndex;
                if (end > start) {
                  chunks.push({ start, end });
                }
                if (match.index == regex.lastIndex) {
                  regex.lastIndex++;
                }
              }
              return chunks;
            }, []);
          };
          exports2.findChunks = defaultFindChunks;
          var fillInChunks = exports2.fillInChunks = function fillInChunks2(_ref4) {
            var chunksToHighlight = _ref4.chunksToHighlight, totalLength = _ref4.totalLength;
            var allChunks = [];
            var append = function append2(start, end, highlight) {
              if (end - start > 0) {
                allChunks.push({
                  start,
                  end,
                  highlight
                });
              }
            };
            if (chunksToHighlight.length === 0) {
              append(0, totalLength, false);
            } else {
              var lastIndex = 0;
              chunksToHighlight.forEach(function(chunk) {
                append(lastIndex, chunk.start, false);
                append(chunk.start, chunk.end, true);
                lastIndex = chunk.end;
              });
              append(lastIndex, totalLength, false);
            }
            return allChunks;
          };
          function identity(value) {
            return value;
          }
          function escapeRegExpFn(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          }
        }
        /******/
      ]);
    },
    /* 4 */
    /***/
    function(module2, exports, __webpack_require__) {
      (function(process) {
        if (process.env.NODE_ENV !== "production") {
          var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
          var isValidElement = function(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          };
          var throwOnDirectAccess = true;
          module2.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
        } else {
          module2.exports = __webpack_require__(13)();
        }
      }).call(exports, __webpack_require__(5));
    },
    /* 5 */
    /***/
    function(module2, exports) {
      var process = module2.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process.title = "browser";
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = "";
      process.versions = {};
      function noop() {
      }
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function(name) {
        return [];
      };
      process.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process.cwd = function() {
        return "/";
      };
      process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process.umask = function() {
        return 0;
      };
    },
    /* 6 */
    /***/
    function(module2, exports, __webpack_require__) {
      (function(process) {
        var emptyFunction = __webpack_require__(7);
        var invariant = __webpack_require__(8);
        var warning = __webpack_require__(9);
        var assign = __webpack_require__(10);
        var ReactPropTypesSecret = __webpack_require__(11);
        var checkPropTypes = __webpack_require__(12);
        module2.exports = function(isValidElement, throwOnDirectAccess) {
          var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === "function") {
              return iteratorFn;
            }
          }
          var ANONYMOUS = "<<anonymous>>";
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker("array"),
            bool: createPrimitiveTypeChecker("boolean"),
            func: createPrimitiveTypeChecker("function"),
            number: createPrimitiveTypeChecker("number"),
            object: createPrimitiveTypeChecker("object"),
            string: createPrimitiveTypeChecker("string"),
            symbol: createPrimitiveTypeChecker("symbol"),
            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker
          };
          function is(x, y) {
            if (x === y) {
              return x !== 0 || 1 / x === 1 / y;
            } else {
              return x !== x && y !== y;
            }
          }
          function PropTypeError(message) {
            this.message = message;
            this.stack = "";
          }
          PropTypeError.prototype = Error.prototype;
          function createChainableTypeChecker(validate) {
            if (process.env.NODE_ENV !== "production") {
              var manualPropTypeCallCache = {};
              var manualPropTypeWarningCount = 0;
            }
            function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;
              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  invariant(
                    false,
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
                  var cacheKey = componentName + ":" + propName;
                  if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                  manualPropTypeWarningCount < 3) {
                    warning(
                      false,
                      "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                      propFullName,
                      componentName
                    );
                    manualPropTypeCallCache[cacheKey] = true;
                    manualPropTypeWarningCount++;
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                  }
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                }
                return null;
              } else {
                return validate(props, propName, componentName, location, propFullName);
              }
            }
            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);
            return chainedCheckType;
          }
          function createPrimitiveTypeChecker(expectedType) {
            function validate(props, propName, componentName, location, propFullName, secret) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== expectedType) {
                var preciseType = getPreciseType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunction.thatReturnsNull);
          }
          function createArrayOfTypeChecker(typeChecker) {
            function validate(props, propName, componentName, location, propFullName) {
              if (typeof typeChecker !== "function") {
                return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
              }
              var propValue = props[propName];
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createElementTypeChecker() {
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createInstanceTypeChecker(expectedClass) {
            function validate(props, propName, componentName, location, propFullName) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              process.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0;
              return emptyFunction.thatReturnsNull;
            }
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null;
                }
              }
              var valuesString = JSON.stringify(expectedValues);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
            }
            return createChainableTypeChecker(validate);
          }
          function createObjectOfTypeChecker(typeChecker) {
            function validate(props, propName, componentName, location, propFullName) {
              if (typeof typeChecker !== "function") {
                return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
              }
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== "object") {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
              }
              for (var key in propValue) {
                if (propValue.hasOwnProperty(key)) {
                  var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                  if (error instanceof Error) {
                    return error;
                  }
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              process.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
              return emptyFunction.thatReturnsNull;
            }
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (typeof checker !== "function") {
                warning(
                  false,
                  "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                  getPostfixForTypeWarning(checker),
                  i
                );
                return emptyFunction.thatReturnsNull;
              }
            }
            function validate(props, propName, componentName, location, propFullName) {
              for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                var checker2 = arrayOfTypeCheckers[i2];
                if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                  return null;
                }
              }
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
            }
            return createChainableTypeChecker(validate);
          }
          function createNodeChecker() {
            function validate(props, propName, componentName, location, propFullName) {
              if (!isNode(props[propName])) {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createShapeTypeChecker(shapeTypes) {
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== "object") {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                  continue;
                }
                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createStrictShapeTypeChecker(shapeTypes) {
            function validate(props, propName, componentName, location, propFullName) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== "object") {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
              }
              var allKeys = assign({}, props[propName], shapeTypes);
              for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                  return new PropTypeError(
                    "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                  );
                }
                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function isNode(propValue) {
            switch (typeof propValue) {
              case "number":
              case "string":
              case "undefined":
                return true;
              case "boolean":
                return !propValue;
              case "object":
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue);
                  var step;
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false;
                      }
                    }
                  } else {
                    while (!(step = iterator.next()).done) {
                      var entry = step.value;
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  return false;
                }
                return true;
              default:
                return false;
            }
          }
          function isSymbol(propType, propValue) {
            if (propType === "symbol") {
              return true;
            }
            if (propValue["@@toStringTag"] === "Symbol") {
              return true;
            }
            if (typeof Symbol === "function" && propValue instanceof Symbol) {
              return true;
            }
            return false;
          }
          function getPropType(propValue) {
            var propType = typeof propValue;
            if (Array.isArray(propValue)) {
              return "array";
            }
            if (propValue instanceof RegExp) {
              return "object";
            }
            if (isSymbol(propType, propValue)) {
              return "symbol";
            }
            return propType;
          }
          function getPreciseType(propValue) {
            if (typeof propValue === "undefined" || propValue === null) {
              return "" + propValue;
            }
            var propType = getPropType(propValue);
            if (propType === "object") {
              if (propValue instanceof Date) {
                return "date";
              } else if (propValue instanceof RegExp) {
                return "regexp";
              }
            }
            return propType;
          }
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case "array":
              case "object":
                return "an " + type;
              case "boolean":
              case "date":
              case "regexp":
                return "a " + type;
              default:
                return type;
            }
          }
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS;
            }
            return propValue.constructor.name;
          }
          ReactPropTypes.checkPropTypes = checkPropTypes;
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
      }).call(exports, __webpack_require__(5));
    },
    /* 7 */
    /***/
    function(module2, exports) {
      function makeEmptyFunction(arg) {
        return function() {
          return arg;
        };
      }
      var emptyFunction = function emptyFunction2() {
      };
      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
      emptyFunction.thatReturnsThis = function() {
        return this;
      };
      emptyFunction.thatReturnsArgument = function(arg) {
        return arg;
      };
      module2.exports = emptyFunction;
    },
    /* 8 */
    /***/
    function(module2, exports, __webpack_require__) {
      (function(process) {
        var validateFormat = function validateFormat2(format) {
        };
        if (process.env.NODE_ENV !== "production") {
          validateFormat = function validateFormat2(format) {
            if (format === void 0) {
              throw new Error("invariant requires an error message argument");
            }
          };
        }
        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format);
          if (!condition) {
            var error;
            if (format === void 0) {
              error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
              }));
              error.name = "Invariant Violation";
            }
            error.framesToPop = 1;
            throw error;
          }
        }
        module2.exports = invariant;
      }).call(exports, __webpack_require__(5));
    },
    /* 9 */
    /***/
    function(module2, exports, __webpack_require__) {
      (function(process) {
        var emptyFunction = __webpack_require__(7);
        var warning = emptyFunction;
        if (process.env.NODE_ENV !== "production") {
          var printWarning = function printWarning2(format) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            var argIndex = 0;
            var message = "Warning: " + format.replace(/%s/g, function() {
              return args[argIndex++];
            });
            if (typeof console !== "undefined") {
              console.error(message);
            }
            try {
              throw new Error(message);
            } catch (x) {
            }
          };
          warning = function warning2(condition, format) {
            if (format === void 0) {
              throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
            }
            if (format.indexOf("Failed Composite propType: ") === 0) {
              return;
            }
            if (!condition) {
              for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }
              printWarning.apply(void 0, [format].concat(args));
            }
          };
        }
        module2.exports = warning;
      }).call(exports, __webpack_require__(5));
    },
    /* 10 */
    /***/
    function(module2, exports) {
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    },
    /* 11 */
    /***/
    function(module2, exports) {
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module2.exports = ReactPropTypesSecret;
    },
    /* 12 */
    /***/
    function(module2, exports, __webpack_require__) {
      (function(process) {
        if (process.env.NODE_ENV !== "production") {
          var invariant = __webpack_require__(8);
          var warning = __webpack_require__(9);
          var ReactPropTypesSecret = __webpack_require__(11);
          var loggedTypeFailures = {};
        }
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
          if (process.env.NODE_ENV !== "production") {
            for (var typeSpecName in typeSpecs) {
              if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error;
                try {
                  invariant(typeof typeSpecs[typeSpecName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", componentName || "React class", location, typeSpecName, typeof typeSpecs[typeSpecName]);
                  error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                  error = ex;
                }
                warning(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error);
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                  loggedTypeFailures[error.message] = true;
                  var stack = getStack ? getStack() : "";
                  warning(false, "Failed %s type: %s%s", location, error.message, stack != null ? stack : "");
                }
              }
            }
          }
        }
        module2.exports = checkPropTypes;
      }).call(exports, __webpack_require__(5));
    },
    /* 13 */
    /***/
    function(module2, exports, __webpack_require__) {
      var emptyFunction = __webpack_require__(7);
      var invariant = __webpack_require__(8);
      var ReactPropTypesSecret = __webpack_require__(11);
      module2.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          invariant(
            false,
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim
        };
        ReactPropTypes.checkPropTypes = emptyFunction;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    },
    /* 14 */
    /***/
    function(module2, exports) {
      module2.exports = reactExports;
    },
    /* 15 */
    /***/
    function(module2, exports) {
      var simpleIsEqual = function simpleIsEqual2(a, b) {
        return a === b;
      };
      function index(resultFn) {
        var isEqual = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : simpleIsEqual;
        var lastThis = void 0;
        var lastArgs = [];
        var lastResult = void 0;
        var calledOnce = false;
        var isNewArgEqualToLast = function isNewArgEqualToLast2(newArg, index2) {
          return isEqual(newArg, lastArgs[index2]);
        };
        var result = function result2() {
          for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
            newArgs[_key] = arguments[_key];
          }
          if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
            return lastResult;
          }
          calledOnce = true;
          lastThis = this;
          lastArgs = newArgs;
          lastResult = resultFn.apply(this, newArgs);
          return lastResult;
        };
        return result;
      }
      module2.exports = index;
    }
    /******/
  ]);
})(main);
var mainExports = main.exports;
const Highlighter = /* @__PURE__ */ getDefaultExportFromCjs(mainExports);
const Employee = () => {
  const { Title } = Typography;
  const [detailForm] = Form.useForm();
  const searchInput = reactExports.useRef(null);
  const [mode, setMode] = reactExports.useState("Create");
  const [searchText, setSearchText] = reactExports.useState("");
  const [employeeData, setEmployeeData] = reactExports.useState([]);
  const [detailVisible, setDetailVisible] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [refresh, setRefresh] = reactExports.useState(false);
  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      onCell: () => {
        return {
          style: {
            fontWeight: 600,
            fontSize: "15px"
          }
        };
      },
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { style: { padding: 8 }, onKeyDown: (e) => e.stopPropagation(), vertical: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            ref: searchInput,
            placeholder: "Search Employee Name",
            value: selectedKeys[0],
            onChange: (e) => setSelectedKeys(e.target.value ? [e.target.value] : []),
            onPressEnter: () => {
              confirm();
              setSearchText(selectedKeys[0]);
            },
            style: { marginBottom: 8, display: "block" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justify: "flex-end", gap: "small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "primary",
              onClick: () => {
                confirm();
                setSearchText(selectedKeys[0]);
              },
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$1, {}),
              size: "small",
              style: { width: 90 },
              children: "Search"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                clearFilters == null ? void 0 : clearFilters();
                setSearchText("");
                confirm();
              },
              size: "small",
              style: { width: 90 },
              children: "Reset"
            }
          )
        ] })
      ] }),
      filterIcon: (filtered) => /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$1, { style: { color: filtered ? "#1677ff" : void 0 } }),
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            var _a;
            return (_a = searchInput.current) == null ? void 0 : _a.select();
          }, 100);
        }
      },
      render: (value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Highlighter,
        {
          highlightStyle: { backgroundColor: "#ffc069", padding: 0 },
          searchWords: [searchText],
          autoEscape: true,
          textToHighlight: value ? value.toString() : ""
        }
      )
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      filters: [
        {
          text: "Doctor",
          value: "Doctor"
        },
        {
          text: "Assistant",
          value: "Assistant"
        },
        {
          text: "Hygienist",
          value: "Hygienist"
        }
      ],
      onFilter: (value, record) => record.department === value,
      render: (value) => getDepartmentLabel(value)
    },
    {
      title: "Clinic",
      dataIndex: "clinic",
      key: "clinic",
      filters: [
        {
          text: "San Jose",
          value: "San Jose"
        },
        {
          text: "Santa Clara",
          value: "Santa Clara"
        },
        {
          text: "Redwood City",
          value: "Redwood City"
        }
      ],
      onFilter: (value, record) => record.clinic === value,
      render: (value) => getClinicLabel(value)
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
      width: 120,
      render: (_, record) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Button.Group, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$2, {}),
            onClick: () => {
              setMode("Update");
              detailForm.setFieldsValue({ ...record });
              setDetailVisible(true);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Popconfirm,
          {
            title: `Delete Employee ${record.name}`,
            onConfirm: () => deleteEmployee(record.uid),
            okText: "Delete",
            cancelText: "Cancel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$3, { style: { color: "red" } }) })
          }
        )
      ] })
    }
  ];
  const getDepartmentLabel = (value) => {
    const DepartmentLabel = u`
      font-weight: 700;
      width: 80px;
      text-align: center;
    `;
    switch (value) {
      case "Doctor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "magenta", className: DepartmentLabel, children: "Doctor" });
      case "Assistant":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "green", className: DepartmentLabel, children: "Assistant" });
      case "Hygienist":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "blue", className: DepartmentLabel, children: "Hygienist" });
      case "Support":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "cyan", className: DepartmentLabel, children: "Support" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "default", className: DepartmentLabel, children: "Unknown" });
    }
  };
  const getClinicLabel = (value) => {
    const ClinicLabel = u`
      font-weight: 700;
      width: 100px;
      text-align: center;
    `;
    switch (value) {
      case "San Jose":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "#f50", className: ClinicLabel, children: "San Jose" });
      case "Santa Clara":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "#87d068", className: ClinicLabel, children: "Santa Clara" });
      case "Redwood City":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "#2db7f5", className: ClinicLabel, children: "Redwood City" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: "default", className: ClinicLabel, children: "Unknown" });
    }
  };
  const getEmployeeList = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${API_PREFIX}/user/employee`).catch((err) => console.error(err));
      if (result.status === 200) {
        setEmployeeData(result.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  const deleteEmployee = async (uid) => {
    try {
      const result = await axios.delete(`${API_PREFIX}/user/employee`, { data: { uid } }).catch((err) => console.error(err));
      if (result.status === 200) {
        staticMethods.success(`Successfully Deleted Employee`);
        setRefresh(!refresh);
        setDetailVisible(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const updateEmployee = async () => {
    try {
      const employee = detailForm.getFieldsValue();
      if (employee.uid) {
        const result = await axios.put(`${API_PREFIX}/user/employee`, {
          employee: { ...employee, updated_time: (/* @__PURE__ */ new Date()).toISOString().split(".").shift() + "Z" }
        }).catch((err) => console.error(err));
        if (result.status === 200) {
          staticMethods.success(`Successfully Updated Employee Info`);
          setRefresh(!refresh);
          setDetailVisible(false);
        }
      } else {
        const result = await axios.post(`${API_PREFIX}/user/employee`, {
          employee: {
            ...employee,
            uid: employee.name.toLowerCase().split(" ").join("_"),
            created_time: (/* @__PURE__ */ new Date()).toISOString().split(".").shift() + "Z"
          }
        }).catch((err) => console.error(err));
        if (result.status === 200) {
          staticMethods.success(`Successfully Created New Employee`);
          setRefresh(!refresh);
          setDetailVisible(false);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  reactExports.useEffect(() => {
    getEmployeeList();
  }, [refresh]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { level: 2, style: { margin: 0 }, children: "Employee Management" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon, {}),
        onClick: () => {
          setMode("Create");
          detailForm.resetFields();
          setDetailVisible(true);
        },
        type: "primary",
        style: { marginTop: 20, marginBottom: 10, fontWeight: 500 },
        children: "New Employee"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForwardTable,
      {
        rowKey: "uid",
        columns: column,
        dataSource: employeeData || [],
        loading,
        pagination: {
          defaultPageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `${total} Employees`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal,
      {
        title: `${mode} Employee`,
        width: "60vw",
        open: detailVisible,
        destroyOnClose: true,
        onOk: updateEmployee,
        onCancel: () => setDetailVisible(false),
        okText: mode,
        cancelText: "Cancel",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { form: detailForm, labelCol: { span: 4 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "User Id", name: "uid", hidden: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { disabled: true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Name", name: "name", rules: [{ required: true, message: "Please Input Employee Name" }], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Please Input Employee Name" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Email", name: "email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Please Input Email Address" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, { label: "Phone", name: "phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Please Input Phone Number" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Form.Item,
            {
              label: "Department",
              name: "department",
              rules: [{ required: true, message: "Please Select Department" }],
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Select,
                {
                  placeholder: "Please Select Department",
                  options: [
                    { label: "Doctor", value: "Doctor" },
                    { label: "Hygienist", value: "Hygienist" },
                    { label: "Assistant", value: "Assistant" },
                    { label: "Support", value: "Support" }
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Form.Item,
            {
              label: "Primary Clinic",
              name: "clinic",
              rules: [{ required: true, message: "Please Select Main Clinic Location" }],
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Select,
                {
                  placeholder: "Please Select Main Clinic Location",
                  options: [
                    { label: "San Jose", value: "San Jose" },
                    { label: "Santa Clara", value: "Santa Clara" },
                    { label: "Redwood", value: "Redwood City" }
                  ]
                }
              )
            }
          )
        ] })
      }
    )
  ] });
};
export {
  Employee as default
};
