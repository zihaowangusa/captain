import { g as getDefaultExportFromCjs, R as React, e as ReactDOM, r as reactExports, f as React$1, d as ReactDOM$1 } from "./index-CZkbI01Q.js";
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r in t2) ({}).hasOwnProperty.call(t2, r) && (n2[r] = t2[r]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
  if ("object" === typeof a && null !== a) {
    var r = a.$$typeof;
    switch (r) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r;
            }
        }
      case c:
        return r;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return v(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return v(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return v(a) === l;
};
reactIs_production_min.isFragment = function(a) {
  return v(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return v(a) === q;
};
reactIs_production_min.isMemo = function(a) {
  return v(a) === p;
};
reactIs_production_min.isPortal = function(a) {
  return v(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return v(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return v(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return v(a) === m;
};
reactIs_production_min.isSuspenseList = function(a) {
  return v(a) === n;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = [];
  React.Children.forEach(children, function(child) {
    if ((child === void 0 || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (reactIsExports.isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
var warned = {};
var preMessage = function preMessage2(fn) {
};
function warning$1(valid, message) {
}
function note(valid, message) {
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$1, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t2, r) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e2, r, t2) {
  return (r = toPropertyKey(r)) in e2 ? Object.defineProperty(e2, r, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r] = t2, e2;
}
function ownKeys(e2, r) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e2, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e2;
}
function isDOM(node2) {
  return node2 instanceof HTMLElement || node2 instanceof SVGElement;
}
function getDOM(node2) {
  if (node2 && _typeof(node2) === "object" && isDOM(node2.nativeElement)) {
    return node2.nativeElement;
  }
  if (isDOM(node2)) {
    return node2;
  }
  return null;
}
function findDOMNode(node2) {
  var domNode = getDOM(node2);
  if (domNode) {
    return domNode;
  }
  if (node2 instanceof React.Component) {
    var _ReactDOM$findDOMNode;
    return (_ReactDOM$findDOMNode = ReactDOM.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(ReactDOM, node2);
  }
  return null;
}
function useMemo(getValue2, condition, shouldUpdate) {
  var cacheRef = reactExports.useRef({});
  if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue2();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}
var fillRef = function fillRef2(ref, node2) {
  if (typeof ref === "function") {
    ref(node2);
  } else if (_typeof(ref) === "object" && ref && "current" in ref) {
    ref.current = node2;
  }
};
var composeRef = function composeRef2() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return function(node2) {
    refs.forEach(function(ref) {
      fillRef(ref, node2);
    });
  };
};
var useComposeRef = function useComposeRef2() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function() {
    return composeRef.apply(void 0, refs);
  }, refs, function(prev2, next2) {
    return prev2.length !== next2.length || prev2.every(function(ref, i) {
      return ref !== next2[i];
    });
  });
};
var supportRef = function supportRef2(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== reactIsExports.ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports.ForwardRef) {
    return false;
  }
  return true;
};
function isReactElement(node2) {
  return /* @__PURE__ */ reactExports.isValidElement(node2) && !reactIsExports.isFragment(node2);
}
var supportNodeRef = function supportNodeRef2(node2) {
  return isReactElement(node2) && supportRef(node2);
};
Number(reactExports.version.split(".")[0]) >= 19 ? (
  // >= React 19
  function(node2) {
    if (isReactElement(node2)) {
      return node2.props.ref;
    }
    return null;
  }
) : (
  // < React 19
  function(node2) {
    if (isReactElement(node2)) {
      return node2.ref;
    }
    return null;
  }
);
function _classCallCheck(a, n2) {
  if (!(a instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, r) {
  for (var t2 = 0; t2 < r.length; t2++) {
    var o = r[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, toPropertyKey(o.key), o);
  }
}
function _createClass(e2, r, t2) {
  return r && _defineProperties(e2.prototype, r), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inherits(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: t2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t2, "prototype", {
    writable: false
  }), e2 && _setPrototypeOf(t2, e2);
}
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _assertThisInitialized(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _possibleConstructorReturn(t2, e2) {
  if (e2 && ("object" == _typeof(e2) || "function" == typeof e2)) return e2;
  if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t2);
}
function _createSuper(t2) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e2, o = _getPrototypeOf(t2);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e2 = Reflect.construct(o, arguments, s);
    } else e2 = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e2);
  };
}
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r[e2];
  return n2;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
var raf = function raf2(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf2(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e2, n2, i, u2, a = [], f2 = true, o = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true) ;
    } catch (r2) {
      o = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
      } finally {
        if (o) throw n2;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e2) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e2) || _unsupportedIterableToArray(r, e2) || _nonIterableRest();
}
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function contains(root, n2) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n2);
  }
  var node2 = n2;
  while (node2) {
    if (node2 === root) {
      return true;
    }
    node2 = node2.parentNode;
  }
  return false;
}
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
    return node2.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
        if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return (option.styles || findStyles(container)).find(function(node2) {
    return node2.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(originOption);
  var styles = findStyles(container);
  var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
    styles
  });
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
function _objectWithoutPropertiesLoose(r, e2) {
  if (null == r) return {};
  var t2 = {};
  for (var n2 in r) if ({}.hasOwnProperty.call(r, n2)) {
    if (e2.includes(n2)) continue;
    t2[n2] = r[n2];
  }
  return t2;
}
function _objectWithoutProperties(e2, t2) {
  if (null == e2) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e2);
    for (r = 0; r < s.length; r++) o = s[r], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
  }
  return i;
}
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var refSet = /* @__PURE__ */ new Set();
  function deepEqual(a, b2) {
    var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    var circular = refSet.has(a);
    warningOnce(!circular, "Warning: There may be circular references");
    if (circular) {
      return false;
    }
    if (a === b2) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b2) || a.length !== b2.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b2[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b2 && _typeof(a) === "object" && _typeof(b2) === "object") {
      var keys2 = Object.keys(a);
      if (keys2.length !== Object.keys(b2).length) {
        return false;
      }
      return keys2.every(function(key) {
        return deepEqual(a[key], b2[key], newLevel);
      });
    }
    return false;
  }
  return deepEqual(obj1, obj2);
}
var SPLIT = "%";
function pathKey(keys2) {
  return keys2.join(SPLIT);
}
var Entity = /* @__PURE__ */ function() {
  function Entity2(instanceId) {
    _classCallCheck(this, Entity2);
    _defineProperty(this, "instanceId", void 0);
    _defineProperty(this, "cache", /* @__PURE__ */ new Map());
    this.instanceId = instanceId;
  }
  _createClass(Entity2, [{
    key: "get",
    value: function get2(keys2) {
      return this.opGet(pathKey(keys2));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function opGet(keyPathStr) {
      return this.cache.get(keyPathStr) || null;
    }
  }, {
    key: "update",
    value: function update(keys2, valueFn) {
      return this.opUpdate(pathKey(keys2), valueFn);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function opUpdate(keyPathStr, valueFn) {
      var prevValue = this.cache.get(keyPathStr);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(keyPathStr);
      } else {
        this.cache.set(keyPathStr, nextValue);
      }
    }
  }]);
  return Entity2;
}();
var ATTR_TOKEN = "data-token-hash";
var ATTR_MARK = "data-css-hash";
var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function(style2) {
      style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style2, firstChild);
      }
    });
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
      var hash = style2.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Entity(cssinjsInstanceId);
}
var StyleContext = /* @__PURE__ */ reactExports.createContext({
  hashPriority: "low",
  cache: createCache(),
  defaultCache: true
});
const StyleContext$1 = StyleContext;
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = /* @__PURE__ */ function() {
  function ThemeCache2() {
    _classCallCheck(this, ThemeCache2);
    _defineProperty(this, "cache", void 0);
    _defineProperty(this, "keys", void 0);
    _defineProperty(this, "cacheCallTimes", void 0);
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  _createClass(ThemeCache2, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;
      var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function(derivative2) {
        if (!cache) {
          cache = void 0;
        } else {
          var _cache;
          cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
        }
      });
      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }
      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get2(derivativeOption) {
      var _this$internalGet;
      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set2(derivativeOption, value) {
      var _this = this;
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function(result, key) {
            var _result = _slicedToArray(result, 2), callTimes = _result[1];
            if (_this.internalGet(key)[1] < callTimes) {
              return [key, _this.internalGet(key)[1]];
            }
            return result;
          }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
          this.delete(targetKey);
        }
        this.keys.push(derivativeOption);
      }
      var cache = this.cache;
      derivativeOption.forEach(function(derivative2, index) {
        if (index === derivativeOption.length - 1) {
          cache.set(derivative2, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative2);
          if (!cacheValue) {
            cache.set(derivative2, {
              map: /* @__PURE__ */ new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = /* @__PURE__ */ new Map();
          }
          cache = cache.get(derivative2).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);
      if (derivatives.length === 1) {
        var _cache$value;
        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }
        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }
      var result = this.deleteByPath(cache.map, derivatives.slice(1));
      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }
      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function(item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }
      return void 0;
    }
  }]);
  return ThemeCache2;
}();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
_defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
var uuid = 0;
var Theme = /* @__PURE__ */ function() {
  function Theme2(derivatives) {
    _classCallCheck(this, Theme2);
    _defineProperty(this, "derivatives", void 0);
    _defineProperty(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning$1(derivatives.length > 0);
    }
    uuid += 1;
  }
  _createClass(Theme2, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token2) {
      return this.derivatives.reduce(function(result, derivative2) {
        return derivative2(token2, result);
      }, void 0);
    }
  }]);
  return Theme2;
}();
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
var resultCache = /* @__PURE__ */ new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
  var current = resultCache;
  for (var i = 0; i < deps.length; i += 1) {
    var dep = deps[i];
    if (!current.has(dep)) {
      current.set(dep, /* @__PURE__ */ new WeakMap());
    }
    current = current.get(dep);
  }
  if (!current.has(RESULT_VALUE)) {
    current.set(RESULT_VALUE, callback());
  }
  return current.get(RESULT_VALUE);
}
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  var hashed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach(function(key) {
      var value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && _typeof(value) === "object") {
        str += flattenToken(value, hashed);
      } else {
        str += value;
      }
    });
    if (hashed) {
      str = murmur2(str);
    }
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return murmur2("".concat(salt, "_").concat(flattenToken(token2, true)));
}
var isClientSide = canUseDom();
function unit$1(num) {
  if (typeof num === "number") {
    return "".concat(num, "px");
  }
  return num;
}
function toStyleStr(style2, tokenKey, styleId) {
  var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  if (plain) {
    return style2;
  }
  var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, _defineProperty(_defineProperty({}, ATTR_TOKEN, tokenKey), ATTR_MARK, styleId));
  var attrStr = Object.keys(attrs).map(function(attr) {
    var val = attrs[attr];
    return val ? "".concat(attr, '="').concat(val, '"') : null;
  }).filter(function(v2) {
    return v2;
  }).join(" ");
  return "<style ".concat(attrStr, ">").concat(style2, "</style>");
}
var token2CSSVar = function token2CSSVar2(token2) {
  var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(prefix ? "".concat(prefix, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
};
var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
  if (!Object.keys(cssVars).length) {
    return "";
  }
  return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
    return "".concat(key, ":").concat(value, ";");
  }).join(""), "}");
};
var transformToken = function transformToken2(token2, themeKey, config) {
  var cssVars = {};
  var result = {};
  Object.entries(token2).forEach(function(_ref3) {
    var _config$preserve, _config$ignore;
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
    if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
      result[key] = value;
    } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
      var _config$unitless;
      var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
      cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
      result[key] = "var(".concat(cssVar, ")");
    }
  });
  return [result, serializeCSSVar(cssVars, themeKey, {
    scope: config === null || config === void 0 ? void 0 : config.scope
  })];
};
var useInternalLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
var useLayoutEffect = function useLayoutEffect2(callback, deps) {
  var firstMountRef = reactExports.useRef(true);
  useInternalLayoutEffect(function() {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(function() {
    firstMountRef.current = false;
    return function() {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
  useLayoutEffect(function(firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var fullClone$3 = _objectSpread2({}, React$1);
var useInsertionEffect$1 = fullClone$3.useInsertionEffect;
var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
  reactExports.useMemo(renderEffect, deps);
  useLayoutEffect(function() {
    return effect(true);
  }, deps);
};
var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
  return useInsertionEffect$1(function() {
    renderEffect();
    return effect();
  }, deps);
} : useInsertionEffectPolyfill;
const useCompatibleInsertionEffect$1 = useCompatibleInsertionEffect;
var fullClone$2 = _objectSpread2({}, React$1);
var useInsertionEffect = fullClone$2.useInsertionEffect;
var useCleanupRegister = function useCleanupRegister2(deps) {
  var effectCleanups = [];
  var cleanupFlag = false;
  function register(fn) {
    if (cleanupFlag) {
      return;
    }
    effectCleanups.push(fn);
  }
  reactExports.useEffect(function() {
    cleanupFlag = false;
    return function() {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach(function(fn) {
          return fn();
        });
      }
    };
  }, deps);
  return register;
};
var useRun = function useRun2() {
  return function(fn) {
    fn();
  };
};
var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
const useEffectCleanupRegister$1 = useEffectCleanupRegister;
function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
  var _React$useContext = reactExports.useContext(StyleContext$1), globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat(_toConsumableArray(keyPath));
  var fullPathStr = pathKey(fullPath);
  var register = useEffectCleanupRegister$1([fullPathStr]);
  var buildCache = function buildCache2(updater) {
    globalCache.opUpdate(fullPathStr, function(prevCache) {
      var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
      var tmpCache = cache;
      var mergedCache = tmpCache || cacheFn();
      var data = [times, mergedCache];
      return updater ? updater(data) : data;
    });
  };
  reactExports.useMemo(
    function() {
      buildCache();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [fullPathStr]
    /* eslint-enable */
  );
  var cacheEntity = globalCache.opGet(fullPathStr);
  var cacheContent = cacheEntity[1];
  useCompatibleInsertionEffect$1(function() {
    onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
  }, function(polyfill) {
    buildCache(function(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
      if (polyfill && times === 0) {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
      }
      return [times + 1, cache];
    });
    return function() {
      globalCache.opUpdate(fullPathStr, function(prevCache) {
        var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          register(function() {
            if (polyfill || !globalCache.opGet(fullPathStr)) {
              onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
            }
          });
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, [fullPathStr]);
  return cacheContent;
}
var EMPTY_OVERRIDE = {};
var hashPrefix = "css";
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
    styles.forEach(function(style2) {
      if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function(key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(function(key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme, format) {
  var derivativeToken = theme.getDerivativeToken(originToken);
  var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
var TOKEN_PREFIX = "token";
function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _useContext = reactExports.useContext(StyleContext$1), instanceId = _useContext.cache.instanceId, container = _useContext.container;
  var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
  var mergedToken = memoResult(function() {
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
  }, tokens);
  var tokenStr = flattenToken(mergedToken);
  var overrideTokenStr = flattenToken(override);
  var cssVarStr = cssVar ? flattenToken(cssVar) : "";
  var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
    var _cssVar$key;
    var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken2);
    var actualToken = _objectSpread2({}, mergedDerivativeToken);
    var cssVarsStr = "";
    if (!!cssVar) {
      var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
        prefix: cssVar.prefix,
        ignore: cssVar.ignore,
        unitless: cssVar.unitless,
        preserve: cssVar.preserve
      });
      var _transformToken2 = _slicedToArray(_transformToken, 2);
      mergedDerivativeToken = _transformToken2[0];
      cssVarsStr = _transformToken2[1];
    }
    var tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    actualToken._tokenKey = token2key(actualToken, salt);
    var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
    mergedDerivativeToken._themeKey = themeKey;
    recordCleanToken(themeKey);
    var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
  }, function(cache) {
    cleanTokenStyle(cache[0]._themeKey, instanceId);
  }, function(_ref) {
    var _ref2 = _slicedToArray(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
    if (cssVar && cssVarsStr) {
      var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, token2._themeKey);
    }
  });
  return cachedToken;
}
var extract$2 = function extract2(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
  var _ref3 = options || {}, plain = _ref3.plain;
  if (!styleStr) {
    return null;
  }
  var styleId = realToken._tokenKey;
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k2++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
var CSS_FILE_STYLE = "_FILE_STYLE__";
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      var div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      var content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach(function(item) {
        var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
        cachePathMap[path] = hash;
      });
      var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
      if (inlineMapStyle) {
        var _inlineMapStyle$paren;
        fromCSSFile = false;
        (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  var hash = cachePathMap[path];
  var styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path], '"]'));
      if (_style) {
        styleStr = _style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}
var SKIP_CHECK = "_skip_check_";
var MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
  var keys2 = key.split(",").map(function(k2) {
    var _firstPath$match;
    var fullPath = k2.trim().split(/\s+/);
    var firstPath = fullPath[0] || "";
    var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
  });
  return keys2.join(",");
}
var parseStyle = function parseStyle2(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId, layer = config.layer;
  config.path;
  var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
  config.linters;
  var styleStr = "";
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle2(keyframes.style, config, {
        root: false,
        parentSelectors
      }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach(function(item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function(originStyle) {
    var style2 = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style2 === "string") {
      styleStr += "".concat(style2, "\n");
    } else if (style2._keyframe) {
      parseKeyframes(style2);
    } else {
      var mergedStyle = transformers.reduce(function(prev2, trans) {
        var _trans$visit;
        return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
      }, style2);
      Object.keys(mergedStyle).forEach(function(key) {
        var value = mergedStyle[key];
        if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false;
          var mergedKey = key.trim();
          var nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle2(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
          }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
          effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          let appendStyle = function(cssKey, cssValue) {
            var styleName = cssKey.replace(/[A-Z]/g, function(match) {
              return "-".concat(match.toLowerCase());
            });
            var formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = "".concat(formatValue, "px");
            }
            if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          };
          var _value;
          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
          if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach(function(item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer) {
    styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
    if (layer.dependencies) {
      effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
        return "@layer ".concat(deps, ", ").concat(layer.name, ";");
      }).join("\n");
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2("".concat(path.join("%")).concat(styleStr));
}
function Empty() {
  return null;
}
var STYLE_PREFIX = "style";
function useStyleRegister(info, styleFn) {
  var token2 = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
  var _React$useContext = reactExports.useContext(StyleContext$1), autoClear = _React$useContext.autoClear;
  _React$useContext.mock;
  var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
  var tokenKey = token2._tokenKey;
  var fullPath = [tokenKey];
  if (enableLayer) {
    fullPath.push("layer");
  }
  fullPath.push.apply(fullPath, _toConsumableArray(path));
  var isMergedClientSide = isClientSide;
  var _useGlobalCache = useGlobalCache(
    STYLE_PREFIX,
    fullPath,
    // Create cache if needed
    function() {
      var cachePath = fullPath.join("|");
      if (existPath(cachePath)) {
        var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
        }
      }
      var styleObj = styleFn();
      var _parseStyle5 = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer: enableLayer ? layer : void 0,
        path: path.join("-"),
        transformers,
        linters
      }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
      var styleStr = normalizeStyle(parsedStyle);
      var styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    function(_ref2, fromHMR) {
      var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
      if ((fromHMR || autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    },
    // Effect: Inject style here
    function(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0];
      _ref5[1];
      var styleId = _ref5[2], effectStyle = _ref5[3];
      if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
        var mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: enableLayer ? false : "queue",
          attachTo: container,
          priority: order
        };
        var nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        var effectLayerKeys = [];
        var effectRestKeys = [];
        Object.keys(effectStyle).forEach(function(key) {
          if (key.startsWith("@layer")) {
            effectLayerKeys.push(key);
          } else {
            effectRestKeys.push(key);
          }
        });
        effectLayerKeys.forEach(function(effectKey) {
          updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
            prepend: true
          }));
        });
        var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
        style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style2.setAttribute(ATTR_TOKEN, tokenKey);
        effectRestKeys.forEach(function(effectKey) {
          updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
        });
      }
    }
  ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
  return function(node2) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /* @__PURE__ */ reactExports.createElement(Empty, null);
    } else {
      styleNode = /* @__PURE__ */ reactExports.createElement("style", _extends({}, _defineProperty(_defineProperty({}, ATTR_TOKEN, cachedTokenKey), ATTR_MARK, cachedStyleId), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, styleNode, node2);
  };
}
var extract$1 = function extract22(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
  var _ref7 = options || {}, plain = _ref7.plain;
  if (clientOnly) {
    return null;
  }
  var keyStyleText = styleStr;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
  if (effectStyle) {
    Object.keys(effectStyle).forEach(function(effectKey) {
      if (!effectStyles[effectKey]) {
        effectStyles[effectKey] = true;
        var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
        var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
        if (effectKey.startsWith("@layer")) {
          keyStyleText = effectStyleHTML + keyStyleText;
        } else {
          keyStyleText += effectStyleHTML;
        }
      }
    });
  }
  return [order, styleId, keyStyleText];
};
var CSS_VAR_PREFIX = "cssVar";
var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
  var key = config.key, prefix = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
  var _useContext = reactExports.useContext(StyleContext$1), instanceId = _useContext.cache.instanceId, container = _useContext.container;
  var tokenKey = token2._tokenKey;
  var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
  var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
    var originToken = fn();
    var _transformToken = transformToken(originToken, key, {
      prefix,
      unitless: unitless2,
      ignore: ignore2,
      scope
    }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
    var styleId = uniqueHash(stylePath, cssVarsStr);
    return [mergedToken, cssVarsStr, styleId, key];
  }, function(_ref) {
    var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
    if (isClientSide) {
      removeCSS(styleId, {
        mark: ATTR_MARK
      });
    }
  }, function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
    if (!cssVarsStr) {
      return;
    }
    var style2 = updateCSS(cssVarsStr, styleId, {
      mark: ATTR_MARK,
      prepend: "queue",
      attachTo: container,
      priority: -999
    });
    style2[CSS_IN_JS_INSTANCE] = instanceId;
    style2.setAttribute(ATTR_TOKEN, key);
  });
  return cache;
};
var extract = function extract3(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
  var _ref5 = options || {}, plain = _ref5.plain;
  if (!styleStr) {
    return null;
  }
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
_defineProperty(_defineProperty(_defineProperty({}, STYLE_PREFIX, extract$1), TOKEN_PREFIX, extract$2), CSS_VAR_PREFIX, extract);
function noSplit(list) {
  list.notSplit = true;
  return list;
}
({
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: noSplit(["borderTop", "borderBottom"]),
  borderBlockStart: noSplit(["borderTop"]),
  borderBlockEnd: noSplit(["borderBottom"]),
  borderInline: noSplit(["borderLeft", "borderRight"]),
  borderInlineStart: noSplit(["borderLeft"]),
  borderInlineEnd: noSplit(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
});
var IconContext = /* @__PURE__ */ reactExports.createContext({});
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread2({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
function merge$1() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function(src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = get(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = get(clone, path);
          if (isArr) {
            clone = set(clone, path, []);
          } else if (!originValue || _typeof(originValue) !== "object") {
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function(key) {
            internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}
function noop$1() {
}
const WarningContext = /* @__PURE__ */ reactExports.createContext({});
const devUseWarning = () => {
  const noopWarning = () => {
  };
  noopWarning.deprecated = noop$1;
  return noopWarning;
};
const ValidateMessagesContext = /* @__PURE__ */ reactExports.createContext(void 0);
var locale$3 = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var commonLocale = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: true
};
var locale$2 = _objectSpread2(_objectSpread2({}, commonLocale), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const locale = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, locale$2),
  timePickerLocale: Object.assign({}, locale$1)
};
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: locale$3,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
let runtimeLocale = Object.assign({}, localeValues.Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), localeValues.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, localeValues.Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}
const LocaleContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ANT_MARK = "internalMark";
const LocaleProvider = (props) => {
  const {
    locale: locale2 = {},
    children,
    _ANT_MARK__
  } = props;
  reactExports.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale2 === null || locale2 === void 0 ? void 0 : locale2.Modal);
    return clearLocale;
  }, [locale2]);
  const getMemoizedContextValue = reactExports.useMemo(() => Object.assign(Object.assign({}, locale2), {
    exist: true
  }), [locale2]);
  return /* @__PURE__ */ reactExports.createElement(LocaleContext.Provider, {
    value: getMemoizedContextValue
  }, children);
};
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r, g2, b2) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r, g2, b2) {
  r = bound01(r, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r, g2, b2);
  var min = Math.min(r, g2, b2);
  var h2 = 0;
  var s = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l: l2 };
}
function hue2rgb(p2, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h2, s, l2) {
  var r;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g2 = l2;
    b2 = l2;
    r = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p2 = 2 * l2 - q2;
    r = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r, g2, b2) {
  r = bound01(r, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r, g2, b2);
  var min = Math.min(r, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v: v2 };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f2 = h2 - i;
  var p2 = v2 * (1 - s);
  var q2 = v2 * (1 - f2 * s);
  var t2 = v2 * (1 - (1 - f2) * s);
  var mod = i % 6;
  var r = [v2, q2, p2, p2, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p2, p2][mod];
  var b2 = [p2, p2, t2, v2, v2, q2][mod];
  return { r: r * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g2, b2, a, allow4Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = (
  /** @class */
  function() {
    function TinyColor2(color, opts) {
      if (color === void 0) {
        color = "";
      }
      if (opts === void 0) {
        opts = {};
      }
      var _a;
      if (color instanceof TinyColor2) {
        return color;
      }
      if (typeof color === "number") {
        color = numberInputToObject(color);
      }
      this.originalInput = color;
      var rgb = inputToRGB(color);
      this.originalInput = color;
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;
      this.a = rgb.a;
      this.roundA = Math.round(100 * this.a) / 100;
      this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
      this.gradientType = opts.gradientType;
      if (this.r < 1) {
        this.r = Math.round(this.r);
      }
      if (this.g < 1) {
        this.g = Math.round(this.g);
      }
      if (this.b < 1) {
        this.b = Math.round(this.b);
      }
      this.isValid = rgb.ok;
    }
    TinyColor2.prototype.isDark = function() {
      return this.getBrightness() < 128;
    };
    TinyColor2.prototype.isLight = function() {
      return !this.isDark();
    };
    TinyColor2.prototype.getBrightness = function() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    };
    TinyColor2.prototype.getLuminance = function() {
      var rgb = this.toRgb();
      var R;
      var G;
      var B;
      var RsRGB = rgb.r / 255;
      var GsRGB = rgb.g / 255;
      var BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }
      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }
      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    TinyColor2.prototype.getAlpha = function() {
      return this.a;
    };
    TinyColor2.prototype.setAlpha = function(alpha) {
      this.a = boundAlpha(alpha);
      this.roundA = Math.round(100 * this.a) / 100;
      return this;
    };
    TinyColor2.prototype.isMonochrome = function() {
      var s = this.toHsl().s;
      return s === 0;
    };
    TinyColor2.prototype.toHsv = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor2.prototype.toHsvString = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      var h2 = Math.round(hsv.h * 360);
      var s = Math.round(hsv.s * 100);
      var v2 = Math.round(hsv.v * 100);
      return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHsl = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor2.prototype.toHslString = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      var h2 = Math.round(hsl.h * 360);
      var s = Math.round(hsl.s * 100);
      var l2 = Math.round(hsl.l * 100);
      return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHex = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    TinyColor2.prototype.toHexString = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return "#" + this.toHex(allow3Char);
    };
    TinyColor2.prototype.toHex8 = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor2.prototype.toHex8String = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return "#" + this.toHex8(allow4Char);
    };
    TinyColor2.prototype.toHexShortString = function(allowShortChar) {
      if (allowShortChar === void 0) {
        allowShortChar = false;
      }
      return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    TinyColor2.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toRgbString = function() {
      var r = Math.round(this.r);
      var g2 = Math.round(this.g);
      var b2 = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toPercentageRgb = function() {
      var fmt = function(x) {
        return "".concat(Math.round(bound01(x, 255) * 100), "%");
      };
      return {
        r: fmt(this.r),
        g: fmt(this.g),
        b: fmt(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toPercentageRgbString = function() {
      var rnd = function(x) {
        return Math.round(bound01(x, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toName = function() {
      if (this.a === 0) {
        return "transparent";
      }
      if (this.a < 1) {
        return false;
      }
      var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
      for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (hex === value) {
          return key;
        }
      }
      return false;
    };
    TinyColor2.prototype.toString = function(format) {
      var formatSet = Boolean(format);
      format = format !== null && format !== void 0 ? format : this.format;
      var formattedString = false;
      var hasAlpha = this.a < 1 && this.a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
      if (needsAlphaFormat) {
        if (format === "name" && this.a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    };
    TinyColor2.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor2.prototype.clone = function() {
      return new TinyColor2(this.toString());
    };
    TinyColor2.prototype.lighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.brighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var rgb = this.toRgb();
      rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
      rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
      rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
      return new TinyColor2(rgb);
    };
    TinyColor2.prototype.darken = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.tint = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("white", amount);
    };
    TinyColor2.prototype.shade = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("black", amount);
    };
    TinyColor2.prototype.desaturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.saturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.greyscale = function() {
      return this.desaturate(100);
    };
    TinyColor2.prototype.spin = function(amount) {
      var hsl = this.toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.mix = function(color, amount) {
      if (amount === void 0) {
        amount = 50;
      }
      var rgb1 = this.toRgb();
      var rgb2 = new TinyColor2(color).toRgb();
      var p2 = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
        a: (rgb2.a - rgb1.a) * p2 + rgb1.a
      };
      return new TinyColor2(rgba);
    };
    TinyColor2.prototype.analogous = function(results, slices) {
      if (results === void 0) {
        results = 6;
      }
      if (slices === void 0) {
        slices = 30;
      }
      var hsl = this.toHsl();
      var part = 360 / slices;
      var ret = [this];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(new TinyColor2(hsl));
      }
      return ret;
    };
    TinyColor2.prototype.complement = function() {
      var hsl = this.toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.monochromatic = function(results) {
      if (results === void 0) {
        results = 6;
      }
      var hsv = this.toHsv();
      var h2 = hsv.h;
      var s = hsv.s;
      var v2 = hsv.v;
      var res = [];
      var modification = 1 / results;
      while (results--) {
        res.push(new TinyColor2({ h: h2, s, v: v2 }));
        v2 = (v2 + modification) % 1;
      }
      return res;
    };
    TinyColor2.prototype.splitcomplement = function() {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      return [
        this,
        new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
        new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
      ];
    };
    TinyColor2.prototype.onBackground = function(background) {
      var fg = this.toRgb();
      var bg = new TinyColor2(background).toRgb();
      var alpha = fg.a + bg.a * (1 - fg.a);
      return new TinyColor2({
        r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
        g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
        b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
        a: alpha
      });
    };
    TinyColor2.prototype.triad = function() {
      return this.polyad(3);
    };
    TinyColor2.prototype.tetrad = function() {
      return this.polyad(4);
    };
    TinyColor2.prototype.polyad = function(n2) {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      var result = [this];
      var increment = 360 / n2;
      for (var i = 1; i < n2; i++) {
        result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
      }
      return result;
    };
    TinyColor2.prototype.equals = function(color) {
      return this.toRgbString() === new TinyColor2(color).toRgbString();
    };
    return TinyColor2;
  }()
);
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r, g2, b2, false));
}
function mix(rgb1, rgb2, amount) {
  var p2 = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  "red": "#F5222D",
  "volcano": "#FA541C",
  "orange": "#FA8C16",
  "gold": "#FAAD14",
  "yellow": "#FADB14",
  "lime": "#A0D911",
  "green": "#52C41A",
  "cyan": "#13C2C2",
  "blue": "#1677FF",
  "geekblue": "#2F54EB",
  "purple": "#722ED1",
  "magenta": "#EB2F96",
  "grey": "#666666"
};
var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
red.primary = red[5];
var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
volcano.primary = volcano[5];
var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
orange.primary = orange[5];
var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
gold.primary = gold[5];
var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
yellow.primary = yellow[5];
var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
lime.primary = lime[5];
var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
green.primary = green[5];
var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
cyan.primary = cyan[5];
var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
blue.primary = blue[5];
var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
geekblue.primary = geekblue[5];
var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
purple.primary = purple[5];
var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
magenta.primary = magenta[5];
var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
grey.primary = grey[5];
var presetPalettes = {
  red,
  volcano,
  orange,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey
};
const defaultPresetColors = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
});
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes2(colorLink);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBgActive: errorColors[3],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
function genCommonMapToken(token2) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token2;
  return Object.assign({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius(borderRadius));
}
const genControlHeight = (token2) => {
  const {
    controlHeight
  } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
function getLineHeight(fontSize) {
  return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(Math.E, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => ({
    size,
    lineHeight: getLineHeight(size)
  }));
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
function genSizeMapToken(token2) {
  const {
    sizeUnit,
    sizeStep
  } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate$1(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBgBlur: "transparent",
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function derivative(token2) {
  presetPrimaryColors.pink = presetPrimaryColors.magenta;
  presetPalettes.pink = presetPalettes.magenta;
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = token2[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate$1(token2[colorKey]);
    return new Array(10).fill(1).reduce((prev2, _, i) => {
      prev2[`${colorKey}-${i + 1}`] = colors[i];
      prev2[`${colorKey}${i + 1}`] = colors[i];
      return prev2;
    }, {});
  }).reduce((prev2, cur) => {
    prev2 = Object.assign(Object.assign({}, prev2), cur);
    return prev2;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken(token2.fontSize)), genSizeMapToken(token2)), genControlHeight(token2)), genCommonMapToken(token2));
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: seedToken,
  override: {
    override: seedToken
  },
  hashed: true
};
const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
const defaultPrefixCls = "ant";
const defaultIconPrefixCls = "anticon";
const Variants = ["outlined", "borderless", "filled"];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
const ConfigContext = /* @__PURE__ */ reactExports.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls2, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate$1(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate$1(primaryColor.toRgbString());
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls2, theme) {
  const style2 = getStyle(globalPrefixCls2, theme);
  if (canUseDom()) {
    updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
  }
}
const DisabledContext = /* @__PURE__ */ reactExports.createContext(false);
const DisabledContextProvider = (_ref) => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = reactExports.useContext(DisabledContext);
  return /* @__PURE__ */ reactExports.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
const SizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const SizeContextProvider = (_ref) => {
  let {
    children,
    size
  } = _ref;
  const originSize = reactExports.useContext(SizeContext);
  return /* @__PURE__ */ reactExports.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
function useConfig() {
  const componentDisabled = reactExports.useContext(DisabledContext);
  const componentSize = reactExports.useContext(SizeContext);
  return {
    componentDisabled,
    componentSize
  };
}
var AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
  _classCallCheck(this, AbstractCalculator2);
});
var CALC_UNIT = "CALC_UNIT";
var regexp = new RegExp(CALC_UNIT, "g");
function unit(value) {
  if (typeof value === "number") {
    return "".concat(value).concat(CALC_UNIT);
  }
  return value;
}
var CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
  _inherits(CSSCalculator2, _AbstractCalculator);
  var _super = _createSuper(CSSCalculator2);
  function CSSCalculator2(num, unitlessCssVar) {
    var _this;
    _classCallCheck(this, CSSCalculator2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", "");
    _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
    _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
    var numType = _typeof(num);
    _this.unitlessCssVar = unitlessCssVar;
    if (num instanceof CSSCalculator2) {
      _this.result = "(".concat(num.result, ")");
    } else if (numType === "number") {
      _this.result = unit(num);
    } else if (numType === "string") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(CSSCalculator2, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator2) {
        this.result = "".concat(this.result, " + ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " + ").concat(unit(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator2) {
        this.result = "".concat(this.result, " - ").concat(num.getResult());
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " - ").concat(unit(num));
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator2) {
        this.result = "".concat(this.result, " * ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " * ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = "(".concat(this.result, ")");
      }
      if (num instanceof CSSCalculator2) {
        this.result = "".concat(this.result, " / ").concat(num.getResult(true));
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = "".concat(this.result, " / ").concat(num);
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      var _this2 = this;
      var _ref = options || {}, cssUnit = _ref.unit;
      var mergedUnit = true;
      if (typeof cssUnit === "boolean") {
        mergedUnit = cssUnit;
      } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
        return _this2.result.includes(cssVar);
      })) {
        mergedUnit = false;
      }
      this.result = this.result.replace(regexp, mergedUnit ? "px" : "");
      if (typeof this.lowPriority !== "undefined") {
        return "calc(".concat(this.result, ")");
      }
      return this.result;
    }
  }]);
  return CSSCalculator2;
}(AbstractCalculator);
var NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
  _inherits(NumCalculator2, _AbstractCalculator);
  var _super = _createSuper(NumCalculator2);
  function NumCalculator2(num) {
    var _this;
    _classCallCheck(this, NumCalculator2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "result", 0);
    if (num instanceof NumCalculator2) {
      _this.result = num.result;
    } else if (typeof num === "number") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(NumCalculator2, [{
    key: "add",
    value: function add(num) {
      if (num instanceof NumCalculator2) {
        this.result += num.result;
      } else if (typeof num === "number") {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator2) {
        this.result -= num.result;
      } else if (typeof num === "number") {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator2) {
        this.result *= num.result;
      } else if (typeof num === "number") {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator2) {
        this.result /= num.result;
      } else if (typeof num === "number") {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator2;
}(AbstractCalculator);
var genCalc = function genCalc2(type, unitlessCssVar) {
  var Calculator = type === "css" ? CSSCalculator : NumCalculator;
  return function(num) {
    return new Calculator(num, unitlessCssVar);
  };
};
var getCompVarPrefix = function getCompVarPrefix2(component, prefix) {
  return "".concat([prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function useEvent(callback) {
  var fnRef = reactExports.useRef();
  fnRef.current = callback;
  var memoFn = reactExports.useCallback(function() {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}
function useSafeState(defaultValue) {
  var destroyRef = reactExports.useRef(false);
  var _React$useState = reactExports.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
  reactExports.useEffect(function() {
    destroyRef.current = false;
    return function() {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}
function getComponentToken(component, token2, defaultToken, options) {
  var customToken = _objectSpread2({}, token2[component]);
  if (options !== null && options !== void 0 && options.deprecatedTokens) {
    var deprecatedTokens = options.deprecatedTokens;
    deprecatedTokens.forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
      if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
        var _customToken$newToken;
        (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  var mergedToken = _objectSpread2(_objectSpread2({}, defaultToken), customToken);
  Object.keys(mergedToken).forEach(function(key) {
    if (mergedToken[key] === token2[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
}
var enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
var recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  var ret = {};
  objs.forEach(function(obj) {
    if (_typeof(obj) !== "object") return;
    var keys2 = Object.keys(obj);
    keys2.forEach(function(key) {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: function get2() {
          return obj[key];
        }
      });
    });
  });
  recording = true;
  return ret;
}
var statistic = {};
function noop() {
}
var statisticToken = function statisticToken2(token2) {
  var tokenKeys2;
  var proxy = token2;
  var flush = noop;
  if (enableStatistic && typeof Proxy !== "undefined") {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get: function get2(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = function flush2(componentName, componentToken) {
      var _statistic$componentN;
      statistic[componentName] = {
        global: Array.from(tokenKeys2),
        component: _objectSpread2(_objectSpread2({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
};
function getDefaultComponentToken(component, token2, getDefaultToken) {
  if (typeof getDefaultToken === "function") {
    var _token$component;
    return getDefaultToken(merge(token2, (_token$component = token2[component]) !== null && _token$component !== void 0 ? _token$component : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
}
function genMaxMin(type) {
  if (type === "js") {
    return {
      max: Math.max,
      min: Math.min
    };
  }
  return {
    max: function max() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return "max(".concat(args.map(function(value) {
        return unit$1(value);
      }).join(","), ")");
    },
    min: function min() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return "min(".concat(args.map(function(value) {
        return unit$1(value);
      }).join(","), ")");
    }
  };
}
var BEAT_LIMIT = 1e3 * 60 * 10;
var ArrayKeyMap = /* @__PURE__ */ function() {
  function ArrayKeyMap2() {
    _classCallCheck(this, ArrayKeyMap2);
    _defineProperty(this, "map", /* @__PURE__ */ new Map());
    _defineProperty(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
    _defineProperty(this, "nextID", 0);
    _defineProperty(this, "lastAccessBeat", /* @__PURE__ */ new Map());
    _defineProperty(this, "accessBeat", 0);
  }
  _createClass(ArrayKeyMap2, [{
    key: "set",
    value: function set2(keys2, value) {
      this.clear();
      var compositeKey = this.getCompositeKey(keys2);
      this.map.set(compositeKey, value);
      this.lastAccessBeat.set(compositeKey, Date.now());
    }
  }, {
    key: "get",
    value: function get2(keys2) {
      var compositeKey = this.getCompositeKey(keys2);
      var cache = this.map.get(compositeKey);
      this.lastAccessBeat.set(compositeKey, Date.now());
      this.accessBeat += 1;
      return cache;
    }
  }, {
    key: "getCompositeKey",
    value: function getCompositeKey(keys2) {
      var _this = this;
      var ids = keys2.map(function(key) {
        if (key && _typeof(key) === "object") {
          return "obj_".concat(_this.getObjectID(key));
        }
        return "".concat(_typeof(key), "_").concat(key);
      });
      return ids.join("|");
    }
  }, {
    key: "getObjectID",
    value: function getObjectID(obj) {
      if (this.objectIDMap.has(obj)) {
        return this.objectIDMap.get(obj);
      }
      var id = this.nextID;
      this.objectIDMap.set(obj, id);
      this.nextID += 1;
      return id;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;
      if (this.accessBeat > 1e4) {
        var now = Date.now();
        this.lastAccessBeat.forEach(function(beat, key) {
          if (now - beat > BEAT_LIMIT) {
            _this2.map.delete(key);
            _this2.lastAccessBeat.delete(key);
          }
        });
        this.accessBeat = 0;
      }
    }
  }]);
  return ArrayKeyMap2;
}();
var uniqueMap = new ArrayKeyMap();
function useUniqueMemo(memoFn, deps) {
  return React.useMemo(function() {
    var cachedValue = uniqueMap.get(deps);
    if (cachedValue) {
      return cachedValue;
    }
    var newValue = memoFn();
    uniqueMap.set(deps, newValue);
    return newValue;
  }, deps);
}
var useDefaultCSP = function useDefaultCSP2() {
  return {};
};
function genStyleUtils(config) {
  var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? useDefaultCSP : _config$useCSP, useToken2 = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
  function genStyleHooks2(component, styleFn, getDefaultToken, options) {
    var componentName = Array.isArray(component) ? component[0] : component;
    function prefixToken(key) {
      return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
    }
    var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
    var originCompUnitless = typeof getCompUnitless === "function" ? getCompUnitless(component) : {};
    var compUnitless = _objectSpread2(_objectSpread2({}, originCompUnitless), {}, _defineProperty({}, prefixToken("zIndexPopup"), true));
    Object.keys(originUnitless).forEach(function(key) {
      compUnitless[prefixToken(key)] = originUnitless[key];
    });
    var mergedOptions = _objectSpread2(_objectSpread2({}, options), {}, {
      unitless: compUnitless,
      prefixToken
    });
    var useStyle2 = genComponentStyleHook2(component, styleFn, getDefaultToken, mergedOptions);
    var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
    return function(prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      var _useStyle = useStyle2(prefixCls, rootCls), _useStyle2 = _slicedToArray(_useStyle, 2), hashId = _useStyle2[1];
      var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = _slicedToArray(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
      return [wrapCSSVar, hashId, cssVarCls];
    };
  }
  function genCSSVarRegister(component, getDefaultToken, options) {
    var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = _options$injectStyle === void 0 ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore2 = options.ignore;
    var CSSVarRegister = function CSSVarRegister2(_ref) {
      var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = _ref$cssVar === void 0 ? {} : _ref$cssVar;
      var _useToken = useToken2(), realToken = _useToken.realToken;
      useCSSVarRegister({
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless: compUnitless,
        ignore: ignore2,
        token: realToken,
        scope: rootCls
      }, function() {
        var defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        var componentToken = getComponentToken(component, realToken, defaultToken, {
          deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
        });
        Object.keys(defaultToken).forEach(function(key) {
          componentToken[prefixToken(key)] = componentToken[key];
          delete componentToken[key];
        });
        return componentToken;
      });
      return null;
    };
    var useCSSVar = function useCSSVar2(rootCls) {
      var _useToken2 = useToken2(), cssVar = _useToken2.cssVar;
      return [function(node2) {
        return injectStyle && cssVar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSVarRegister, {
          rootCls,
          cssVar,
          component
        }), node2) : node2;
      }, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
    };
    return useCSSVar;
  }
  function genComponentStyleHook2(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
    var _cells = _slicedToArray(cells, 1), component = _cells[0];
    var concatComponent = cells.join("-");
    return function(prefixCls) {
      var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      var _useToken3 = useToken2(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token2 = _useToken3.token, cssVar = _useToken3.cssVar;
      var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
      var csp = useCSP();
      var type = cssVar ? "css" : "js";
      var calc = useUniqueMemo(function() {
        var unitlessCssVar = /* @__PURE__ */ new Set();
        if (cssVar) {
          Object.keys(options.unitless || {}).forEach(function(key) {
            unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
            unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)));
          });
        }
        return genCalc(type, unitlessCssVar);
      }, [type, component, cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix]);
      var _genMaxMin = genMaxMin(type), max = _genMaxMin.max, min = _genMaxMin.min;
      var sharedConfig = {
        theme,
        token: token2,
        hashId,
        nonce: function nonce() {
          return csp.nonce;
        },
        clientOnly: options.clientOnly,
        layer: {
          name: "antd"
        },
        // antd is always at top of styles
        order: options.order || -999
      };
      useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
        clientOnly: false,
        path: ["Shared", rootPrefixCls]
      }), function() {
        return typeof getResetStyles === "function" ? getResetStyles(token2) : [];
      });
      var wrapSSR = useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
        path: [concatComponent, prefixCls, iconPrefixCls]
      }), function() {
        if (options.injectStyle === false) {
          return [];
        }
        var _statisticToken = statisticToken(token2), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
        var defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        var componentCls = ".".concat(prefixCls);
        var componentToken = getComponentToken(component, realToken, defaultComponentToken, {
          deprecatedTokens: options.deprecatedTokens
        });
        if (cssVar && _typeof(defaultComponentToken) === "object") {
          Object.keys(defaultComponentToken).forEach(function(key) {
            defaultComponentToken[key] = "var(".concat(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)), ")");
          });
        }
        var mergedToken = merge(proxyToken, {
          componentCls,
          prefixCls,
          iconCls: ".".concat(iconPrefixCls),
          antCls: ".".concat(rootPrefixCls),
          calc,
          // @ts-ignore
          max,
          // @ts-ignore
          min
        }, cssVar ? defaultComponentToken : componentToken);
        var styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls
        });
        flush(component, componentToken);
        var commonStyle = typeof getCommonStyle === "function" ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
        return [options.resetStyle === false ? null : commonStyle, styleInterpolation];
      });
      return [wrapSSR, hashId];
    };
  }
  function genSubStyleComponent2(componentName, styleFn, getDefaultToken) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var useStyle2 = genComponentStyleHook2(componentName, styleFn, getDefaultToken, _objectSpread2({
      resetStyle: false,
      // Sub Style should default after root one
      order: -998
    }, options));
    var StyledComponent = function StyledComponent2(_ref2) {
      var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
      useStyle2(prefixCls, rootCls);
      return null;
    };
    return StyledComponent;
  }
  return {
    genStyleHooks: genStyleHooks2,
    genSubStyleComponent: genSubStyleComponent2,
    genComponentStyleHook: genComponentStyleHook2
  };
}
const version$1 = "5.20.1";
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g2 = Math.round((fG - bG * (1 - fA)) / fA);
    const b2 = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g2) && isStableColor(b2)) {
      return new TinyColor({
        r,
        g: g2,
        b: b2,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$5 = function(s, e2) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
  }
  return t2;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$5(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(seedToken).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
var __rest$4 = function(s, e2) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
  }
  return t2;
};
const unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  opacityImage: true
};
const ignore = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true
};
const preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
    override
  } = overrideToken, components = __rest$4(overrideToken, ["override"]);
  let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
    override
  });
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach((_ref) => {
      let [key, value] = _ref;
      const {
        theme: componentTheme
      } = value, componentTokens = __rest$4(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar
  } = React.useContext(DesignTokenContext);
  const salt = `${version$1}-${hashed || ""}`;
  const mergedTheme = theme || defaultTheme;
  const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
    salt,
    override,
    getComputedToken,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken,
    cssVar: cssVar && {
      prefix: cssVar.prefix,
      key: cssVar.key,
      unitless,
      ignore,
      preserve
    }
  });
  return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
}
const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = function(token2) {
  let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: token2.colorText,
    fontSize: token2.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token2.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
  };
};
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token2.colorLinkHover
    },
    "&:active": {
      color: token2.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: token2.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
  const resetStyle = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let resetFontStyle = {};
  if (resetFont !== false) {
    resetFontStyle = {
      fontFamily: token2.fontFamily,
      fontSize: token2.fontSize
    };
  }
  return {
    [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
      [prefixSelector]: resetStyle
    })
  };
};
const genFocusOutline = (token2) => ({
  outline: `${unit$1(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token2) => ({
  "&:focus-visible": Object.assign({}, genFocusOutline(token2))
});
const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token2] = useToken();
  return useStyleRegister({
    theme,
    token: token2,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: "block"
      }
    })
  }]);
};
const {
  genStyleHooks,
  genComponentStyleHook,
  genSubStyleComponent
} = genStyleUtils({
  usePrefix: () => {
    const {
      getPrefixCls,
      iconPrefixCls
    } = reactExports.useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    return {
      rootPrefixCls,
      iconPrefixCls
    };
  },
  useToken: () => {
    const [theme, realToken, hashId, token2, cssVar] = useToken();
    return {
      theme,
      realToken,
      hashId,
      token: token2,
      cssVar
    };
  },
  useCSP: () => {
    const {
      csp,
      iconPrefixCls
    } = reactExports.useContext(ConfigContext);
    useResetIconStyle(iconPrefixCls, csp);
    return csp !== null && csp !== void 0 ? csp : {};
  },
  getResetStyles: (token2) => [{
    "&": genLinkStyle(token2)
  }],
  getCommonStyle: genCommonStyle,
  getCompUnitless: () => unitless
});
const fullClone$1 = Object.assign({}, React$1);
const {
  useId
} = fullClone$1;
const useEmptyId = () => "";
const useThemeKey = typeof useId === "undefined" ? useEmptyId : useId;
function useTheme(theme, parentTheme, config) {
  var _a;
  devUseWarning();
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
    hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : defaultConfig.hashed,
    cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
  }) : parentTheme;
  const themeKey = useThemeKey();
  return useMemo(() => {
    var _a2, _b2;
    if (!theme) {
      return parentTheme;
    }
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
    const mergedCssVar = ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0 ? _a2 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: config === null || config === void 0 ? void 0 : config.prefixCls
    }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
    });
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index) => {
    const nextTheme = next2[index];
    return !isEqual(prevTheme, nextTheme, true);
  }));
}
var _excluded$3 = ["children"];
var Context = /* @__PURE__ */ reactExports.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded$3);
  return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
    value: props
  }, children);
}
var DomWrapper = /* @__PURE__ */ function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [{
    key: "render",
    value: function render2() {
      return this.props.children;
    }
  }]);
  return DomWrapper2;
}(reactExports.Component);
function useSyncState(defaultValue) {
  var _React$useReducer = reactExports.useReducer(function(x) {
    return x + 1;
  }, 0), _React$useReducer2 = _slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
  var currentValueRef = reactExports.useRef(defaultValue);
  var getValue2 = useEvent(function() {
    return currentValueRef.current;
  });
  var setValue = useEvent(function(updater) {
    currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
    forceUpdate();
  });
  return [getValue2, setValue];
}
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";
var STEP_PREPARED = "prepared";
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  };
  if (domSupport) {
    if (!("AnimationEvent" in win)) {
      delete prefixes.animationend.animation;
    }
    if (!("TransitionEvent" in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
var style = {};
if (canUseDom()) {
  var _document$createEleme = document.createElement("div");
  style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (_typeof(transitionName) === "object") {
    var type = transitionType.replace(/-\w/g, function(match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}
const useDomMotionEvents = function(onInternalMotionEnd) {
  var cacheElementRef = reactExports.useRef();
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  reactExports.useEffect(function() {
    return function() {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};
var useIsomorphicLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
const useNextFrame = function() {
  var nextFrameRef = reactExports.useRef(null);
  function cancelNextFrame() {
    wrapperRaf.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf(function() {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  reactExports.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};
var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
const useStepQueue = function(status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
  var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect(function() {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);
      if (result === SkipStep) {
        setStep(nextStep, true);
      } else if (nextStep) {
        nextFrame(function(info) {
          function doNext() {
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  reactExports.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
  var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
  var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
  var _useState3 = useSafeState(null), _useState4 = _slicedToArray(_useState3, 2), style2 = _useState4[0], setStyle = _useState4[1];
  var currentStatus = getStatus();
  var mountedRef = reactExports.useRef(false);
  var deadlineRef = reactExports.useRef(null);
  function getDomElement() {
    return getElement();
  }
  var activeRef = reactExports.useRef(false);
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE);
    setStyle(null, true);
  }
  var onInternalMotionEnd = useEvent(function(event) {
    var status = getStatus();
    if (status === STATUS_NONE) {
      return;
    }
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }
    if (currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  });
  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
  var getEventHandlers = function getEventHandlers2(targetStatus) {
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
      case STATUS_ENTER:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
      case STATUS_LEAVE:
        return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
      default:
        return {};
    }
  };
  var eventHandlers = reactExports.useMemo(function() {
    return getEventHandlers(currentStatus);
  }, [currentStatus]);
  var _useStepQueue = useStepQueue(currentStatus, !supportMotion, function(newStep) {
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];
      if (!onPrepare) {
        return SkipStep;
      }
      return onPrepare(getDomElement());
    }
    if (step in eventHandlers) {
      var _eventHandlers$step;
      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }
    if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
      patchMotionEvents(getDomElement());
      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function() {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }
    if (step === STEP_PREPARED) {
      updateMotionEndStatus();
    }
    return DoStep;
  }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;
  useIsomorphicLayoutEffect(function() {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;
    var nextStatus;
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      setStatus(STATUS_NONE);
    }
  }, [visible]);
  reactExports.useEffect(function() {
    if (
      // Cancel appear
      currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
      currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
      currentStatus === STATUS_LEAVE && !motionLeave
    ) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  reactExports.useEffect(function() {
    return function() {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);
  var firstMountChangeRef = reactExports.useRef(false);
  reactExports.useEffect(function() {
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, currentStatus]);
  var mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: "none"
    }, mergedStyle);
  }
  return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof(config) === "object") {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
    var _React$useContext = reactExports.useContext(Context), contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);
    var nodeRef = reactExports.useRef();
    var wrapperNodeRef = reactExports.useRef();
    function getDomElement() {
      try {
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e2) {
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
    var renderedRef = reactExports.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    var setNodeRef = reactExports.useCallback(function(node2) {
      nodeRef.current = node2;
      fillRef(ref, node2);
    }, [ref]);
    var motionChildren;
    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible
    });
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: "none"
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = "prepare";
      } else if (isActive(statusStep)) {
        statusSuffix = "active";
      } else if (statusStep === STEP_START) {
        statusSuffix = "start";
      }
      var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: classNames(getTransitionName(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
        style: statusStyle
      }), setNodeRef);
    }
    if (/* @__PURE__ */ reactExports.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var _ref = motionChildren, originNodeRef = _ref.ref;
      if (!originNodeRef) {
        motionChildren = /* @__PURE__ */ reactExports.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /* @__PURE__ */ reactExports.createElement(DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion2.displayName = "CSSMotion";
  return CSSMotion2;
}
const CSSMotion = genCSSMotion(supportTransition);
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof(key) === "object" && "key" in key) {
    keyObj = key;
  } else {
    keyObj = {
      key
    };
  }
  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return keys2.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach(function(keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  var keys2 = {};
  list.forEach(function(_ref) {
    var key = _ref.key;
    keys2[key] = (keys2[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys2).filter(function(key) {
    return keys2[key] > 1;
  });
  duplicatedKeys.forEach(function(matchKey) {
    list = list.filter(function(_ref2) {
      var key = _ref2.key, status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });
    list.forEach(function(node2) {
      if (node2.key === matchKey) {
        node2.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
var _excluded$2 = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2 = ["status"];
var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function genCSSMotionList(transitionSupport) {
  var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
  var CSSMotionList2 = /* @__PURE__ */ function(_React$Component) {
    _inherits(CSSMotionList3, _React$Component);
    var _super = _createSuper(CSSMotionList3);
    function CSSMotionList3() {
      var _this;
      _classCallCheck(this, CSSMotionList3);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });
      _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function(entity) {
          if (entity.key !== removeKey) return entity;
          return _objectSpread2(_objectSpread2({}, entity), {}, {
            status: STATUS_REMOVED
          });
        });
        _this.setState({
          keyEntities: nextKeyEntities
        });
        return nextKeyEntities.filter(function(_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      });
      return _this;
    }
    _createClass(CSSMotionList3, [{
      key: "render",
      value: function render2() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded$2);
        var Component = component || reactExports.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function(prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /* @__PURE__ */ reactExports.createElement(Component, restProps, keyEntities.map(function(_ref2, index) {
          var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded2);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /* @__PURE__ */ reactExports.createElement(CSSMotion$1, _extends({}, motionProps, {
            key: eventProps.key,
            visible,
            eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);
                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), function(props, ref) {
            return children(_objectSpread2(_objectSpread2({}, props), {}, {
              index
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys2 = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys2);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function(entity) {
            var prevEntity = keyEntities.find(function(_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList3;
  }(reactExports.Component);
  _defineProperty(CSSMotionList2, "defaultProps", {
    component: "div"
  });
  return CSSMotionList2;
}
const CSSMotionList = genCSSMotionList(supportTransition);
function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token2] = useToken();
  const {
    motion
  } = token2;
  const needWrapMotionProviderRef = reactExports.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /* @__PURE__ */ reactExports.createElement(MotionProvider, {
      motion
    }, children);
  }
  return children;
}
const PropWarning = () => null;
var __rest$3 = function(s, e2) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
  }
  return t2;
};
const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some((key) => key.endsWith("Color"));
}
const setGlobalConfig = (props) => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== void 0) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ("holderRender" in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
const ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale: locale2,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    textArea,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  } = props;
  const getPrefixCls = reactExports.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  useResetIconStyle(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls("")
  });
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale2 || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    textArea,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== "undefined") {
    config.button = Object.assign({
      autoInsertSpace: autoInsertSpaceInButton
    }, config.button);
  }
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = reactExports.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(PropWarning, {
    dropdownMatchSelectWidth
  }), children);
  const validateMessages = reactExports.useMemo(() => {
    var _a, _b, _c, _d;
    return merge$1(((_a = localeValues.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /* @__PURE__ */ reactExports.createElement(ValidateMessagesContext.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale2) {
    childNode = /* @__PURE__ */ reactExports.createElement(LocaleProvider, {
      locale: locale2,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /* @__PURE__ */ reactExports.createElement(IconContext.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /* @__PURE__ */ reactExports.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  childNode = /* @__PURE__ */ reactExports.createElement(MotionWrapper, null, childNode);
  const memoTheme = reactExports.useMemo(() => {
    const _a = mergedTheme || {}, {
      algorithm,
      token: token2,
      components,
      cssVar
    } = _a, rest = __rest$3(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach((_ref) => {
      let [componentName, componentToken] = _ref;
      const parsedToken = Object.assign({}, componentToken);
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, seedToken), token2);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /* @__PURE__ */ reactExports.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  if (memoedConfig.warning) {
    childNode = /* @__PURE__ */ reactExports.createElement(WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  if (componentDisabled !== void 0) {
    childNode = /* @__PURE__ */ reactExports.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /* @__PURE__ */ reactExports.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = (props) => {
  const context = reactExports.useContext(ConfigContext);
  const antLocale = reactExports.useContext(LocaleContext);
  return /* @__PURE__ */ reactExports.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    return SizeContext;
  }
});
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}
function camelCase(input) {
  return input.replace(/-(.)/g, function(match, g2) {
    return g2.toUpperCase();
  });
}
function warning(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node2, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index) {
      return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
    }));
  }
  return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index) {
    return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = reactExports.useContext(IconContext), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  reactExports.useEffect(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};
var _excluded$1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$1);
  var svgRef = reactExports.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style: style2,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded);
  var _React$useContext = reactExports.useContext(IconContext), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = classNames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ reactExports.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ reactExports.createElement(IconBase, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
var CloseCircleFilled = function CloseCircleFilled2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: CloseCircleFilled$1
  }));
};
var RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(CloseCircleFilled);
function isFragment(child) {
  return child && /* @__PURE__ */ React.isValidElement(child) && child.type === React.Fragment;
}
const replaceElement = (element, replacement, props) => {
  if (!/* @__PURE__ */ React.isValidElement(element)) {
    return replacement;
  }
  return /* @__PURE__ */ React.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}
var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlined = function LoadingOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: LoadingOutlined$1
  }));
};
var RefIcon = /* @__PURE__ */ reactExports.forwardRef(LoadingOutlined);
function _regeneratorRuntime() {
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e2;
  };
  var t2, e2 = {}, r = Object.prototype, n2 = r.hasOwnProperty, o = Object.defineProperty || function(t3, e3, r2) {
    t3[e3] = r2.value;
  }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u2 = i.toStringTag || "@@toStringTag";
  function define(t3, e3, r2) {
    return Object.defineProperty(t3, e3, {
      value: r2,
      enumerable: true,
      configurable: true,
      writable: true
    }), t3[e3];
  }
  try {
    define({}, "");
  } catch (t3) {
    define = function define2(t4, e3, r2) {
      return t4[e3] = r2;
    };
  }
  function wrap(t3, e3, r2, n3) {
    var i2 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a2 = Object.create(i2.prototype), c3 = new Context2(n3 || []);
    return o(a2, "_invoke", {
      value: makeInvokeMethod(t3, r2, c3)
    }), a2;
  }
  function tryCatch(t3, e3, r2) {
    try {
      return {
        type: "normal",
        arg: t3.call(e3, r2)
      };
    } catch (t4) {
      return {
        type: "throw",
        arg: t4
      };
    }
  }
  e2.wrap = wrap;
  var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s = "completed", y = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var p2 = {};
  define(p2, a, function() {
    return this;
  });
  var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
  v2 && v2 !== r && n2.call(v2, a) && (p2 = v2);
  var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
  function defineIteratorMethods(t3) {
    ["next", "throw", "return"].forEach(function(e3) {
      define(t3, e3, function(t4) {
        return this._invoke(e3, t4);
      });
    });
  }
  function AsyncIterator(t3, e3) {
    function invoke(r3, o2, i2, a2) {
      var c3 = tryCatch(t3[r3], t3, o2);
      if ("throw" !== c3.type) {
        var u3 = c3.arg, h3 = u3.value;
        return h3 && "object" == _typeof(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
          invoke("next", t4, i2, a2);
        }, function(t4) {
          invoke("throw", t4, i2, a2);
        }) : e3.resolve(h3).then(function(t4) {
          u3.value = t4, i2(u3);
        }, function(t4) {
          return invoke("throw", t4, i2, a2);
        });
      }
      a2(c3.arg);
    }
    var r2;
    o(this, "_invoke", {
      value: function value(t4, n3) {
        function callInvokeWithMethodAndArg() {
          return new e3(function(e4, r3) {
            invoke(t4, n3, e4, r3);
          });
        }
        return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e3, r2, n3) {
    var o2 = h2;
    return function(i2, a2) {
      if (o2 === f2) throw Error("Generator is already running");
      if (o2 === s) {
        if ("throw" === i2) throw a2;
        return {
          value: t2,
          done: true
        };
      }
      for (n3.method = i2, n3.arg = a2; ; ) {
        var c3 = n3.delegate;
        if (c3) {
          var u3 = maybeInvokeDelegate(c3, n3);
          if (u3) {
            if (u3 === y) continue;
            return u3;
          }
        }
        if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
        else if ("throw" === n3.method) {
          if (o2 === h2) throw o2 = s, n3.arg;
          n3.dispatchException(n3.arg);
        } else "return" === n3.method && n3.abrupt("return", n3.arg);
        o2 = f2;
        var p3 = tryCatch(e3, r2, n3);
        if ("normal" === p3.type) {
          if (o2 = n3.done ? s : l2, p3.arg === y) continue;
          return {
            value: p3.arg,
            done: n3.done
          };
        }
        "throw" === p3.type && (o2 = s, n3.method = "throw", n3.arg = p3.arg);
      }
    };
  }
  function maybeInvokeDelegate(e3, r2) {
    var n3 = r2.method, o2 = e3.iterator[n3];
    if (o2 === t2) return r2.delegate = null, "throw" === n3 && e3.iterator["return"] && (r2.method = "return", r2.arg = t2, maybeInvokeDelegate(e3, r2), "throw" === r2.method) || "return" !== n3 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y;
    var i2 = tryCatch(o2, e3.iterator, r2.arg);
    if ("throw" === i2.type) return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
    var a2 = i2.arg;
    return a2 ? a2.done ? (r2[e3.resultName] = a2.value, r2.next = e3.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t2), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
  }
  function pushTryEntry(t3) {
    var e3 = {
      tryLoc: t3[0]
    };
    1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
  }
  function resetTryEntry(t3) {
    var e3 = t3.completion || {};
    e3.type = "normal", delete e3.arg, t3.completion = e3;
  }
  function Context2(t3) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t3.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e3) {
    if (e3 || "" === e3) {
      var r2 = e3[a];
      if (r2) return r2.call(e3);
      if ("function" == typeof e3.next) return e3;
      if (!isNaN(e3.length)) {
        var o2 = -1, i2 = function next2() {
          for (; ++o2 < e3.length; ) if (n2.call(e3, o2)) return next2.value = e3[o2], next2.done = false, next2;
          return next2.value = t2, next2.done = true, next2;
        };
        return i2.next = i2;
      }
    }
    throw new TypeError(_typeof(e3) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g2, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
    var e3 = "function" == typeof t3 && t3.constructor;
    return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
  }, e2.mark = function(t3) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
  }, e2.awrap = function(t3) {
    return {
      __await: t3
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
    return this;
  }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r2, n3, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new AsyncIterator(wrap(t3, r2, n3, o2), i2);
    return e2.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t4) {
      return t4.done ? t4.value : a2.next();
    });
  }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a, function() {
    return this;
  }), define(g2, "toString", function() {
    return "[object Generator]";
  }), e2.keys = function(t3) {
    var e3 = Object(t3), r2 = [];
    for (var n3 in e3) r2.push(n3);
    return r2.reverse(), function next2() {
      for (; r2.length; ) {
        var t4 = r2.pop();
        if (t4 in e3) return next2.value = t4, next2.done = false, next2;
      }
      return next2.done = true, next2;
    };
  }, e2.values = values, Context2.prototype = {
    constructor: Context2,
    reset: function reset(e3) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3) for (var r2 in this) "t" === r2.charAt(0) && n2.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t2);
    },
    stop: function stop() {
      this.done = true;
      var t3 = this.tryEntries[0].completion;
      if ("throw" === t3.type) throw t3.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e3) {
      if (this.done) throw e3;
      var r2 = this;
      function handle(n3, o3) {
        return a2.type = "throw", a2.arg = e3, r2.next = n3, o3 && (r2.method = "next", r2.arg = t2), !!o3;
      }
      for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
        var i2 = this.tryEntries[o2], a2 = i2.completion;
        if ("root" === i2.tryLoc) return handle("end");
        if (i2.tryLoc <= this.prev) {
          var c3 = n2.call(i2, "catchLoc"), u3 = n2.call(i2, "finallyLoc");
          if (c3 && u3) {
            if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
            if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
          } else if (c3) {
            if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
          } else {
            if (!u3) throw Error("try statement without catch or finally");
            if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t3, e3) {
      for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
        var o2 = this.tryEntries[r2];
        if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
          var i2 = o2;
          break;
        }
      }
      i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
      var a2 = i2 ? i2.completion : {};
      return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
    },
    complete: function complete(t3, e3) {
      if ("throw" === t3.type) throw t3.arg;
      return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y;
    },
    finish: function finish(t3) {
      for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
        var r2 = this.tryEntries[e3];
        if (r2.finallyLoc === t3) return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
      }
    },
    "catch": function _catch(t3) {
      for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
        var r2 = this.tryEntries[e3];
        if (r2.tryLoc === t3) {
          var n3 = r2.completion;
          if ("throw" === n3.type) {
            var o2 = n3.arg;
            resetTryEntry(r2);
          }
          return o2;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e3, r2, n3) {
      return this.delegate = {
        iterator: values(e3),
        resultName: r2,
        nextLoc: n3
      }, "next" === this.method && (this.arg = t2), y;
    }
  }, e2;
}
function asyncGeneratorStep(n2, t2, e2, r, o, a, c2) {
  try {
    var i = n2[a](c2), u2 = i.value;
  } catch (n3) {
    return void e2(n3);
  }
  i.done ? t2(u2) : Promise.resolve(u2).then(r, o);
}
function _asyncToGenerator(n2) {
  return function() {
    var t2 = this, e2 = arguments;
    return new Promise(function(r, o) {
      var a = n2.apply(t2, e2);
      function _next(n3) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n3);
      }
      function _throw(n3) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n3);
      }
      _next(void 0);
    });
  };
}
var fullClone = _objectSpread2({}, ReactDOM$1);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || "").split(".")[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e2) {
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = "__rc_react_root__";
function modernRender(node2, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node2);
  container[MARK] = root;
}
function legacyRender(node2, container) {
  reactRender(node2, container);
}
function render(node2, container) {
  if (createRoot) {
    modernRender(node2, container);
    return;
  }
  legacyRender(node2, container);
}
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function() {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(createRoot !== void 0)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 2:
          legacyUnmount(container);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}
const isVisible = function(element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
};
const genWaveStyle = (token2) => {
  const {
    componentCls,
    colorPrimary
  } = token2;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${token2.motionDurationSlow} ${token2.motionEaseInOut}`, `opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`].join(",")
        }
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
const TARGET_CLS = `${defaultPrefixCls}-wave-target`;
function isNotGrey(color) {
  const match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
  color !== "transparent";
}
function getTargetWaveColor(node2) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node2);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props) => {
  const {
    className,
    target,
    component
  } = props;
  const divRef = reactExports.useRef(null);
  const [color, setWaveColor] = reactExports.useState(null);
  const [borderRadius, setBorderRadius] = reactExports.useState([]);
  const [left, setLeft] = reactExports.useState(0);
  const [top, setTop] = reactExports.useState(0);
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const [enabled, setEnabled] = reactExports.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
  };
  if (color) {
    waveStyle["--wave-color"] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === "static";
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
  }
  reactExports.useEffect(() => {
    if (target) {
      const id = wrapperRaf(() => {
        syncPos();
        setEnabled(true);
      });
      let resizeObserver;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        wrapperRaf.cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === "Checkbox" || component === "Radio") && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (_, event) => {
      var _a;
      if (event.deadline || event.propertyName === "opacity") {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        unmount(holder).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, (_ref, ref) => {
    let {
      className: motionClassName
    } = _ref;
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref: composeRef(divRef, ref),
      className: classNames(className, motionClassName, {
        "wave-quick": isSmallComponent
      }),
      style: waveStyle
    });
  });
};
const showWaveEffect = (target, info) => {
  var _a;
  const {
    component
  } = info;
  if (component === "Checkbox" && !((_a = target.querySelector("input")) === null || _a === void 0 ? void 0 : _a.checked)) {
    return;
  }
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = "0px";
  holder.style.top = "0px";
  target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
  render(/* @__PURE__ */ reactExports.createElement(WaveEffect, Object.assign({}, info, {
    target
  })), holder);
};
const useWave = (nodeRef, className, component) => {
  const {
    wave
  } = reactExports.useContext(ConfigContext);
  const [, token2, hashId] = useToken();
  const showWave = useEvent((event) => {
    const node2 = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
      return;
    }
    const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
    const {
      showEffect
    } = wave || {};
    (showEffect || showWaveEffect)(targetNode, {
      className,
      token: token2,
      component,
      event,
      hashId
    });
  });
  const rafId = reactExports.useRef();
  const showDebounceWave = (event) => {
    wrapperRaf.cancel(rafId.current);
    rafId.current = wrapperRaf(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
};
const Wave = (props) => {
  const {
    children,
    disabled,
    component
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const containerRef = reactExports.useRef(null);
  const prefixCls = getPrefixCls("wave");
  const [, hashId] = useStyle$2(prefixCls);
  const showWave = useWave(containerRef, classNames(prefixCls, hashId), component);
  React.useEffect(() => {
    const node2 = containerRef.current;
    if (!node2 || node2.nodeType !== 1 || disabled) {
      return;
    }
    const onClick = (e2) => {
      if (!isVisible(e2.target) || // No need wave
      !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
        return;
      }
      showWave(e2);
    };
    node2.addEventListener("click", onClick, true);
    return () => {
      node2.removeEventListener("click", onClick, true);
    };
  }, [disabled]);
  if (!/* @__PURE__ */ React.isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = supportRef(children) ? composeRef(children.ref, containerRef) : containerRef;
  return cloneElement(children, {
    ref
  });
};
const useSize = (customSize) => {
  const size = React.useContext(SizeContext);
  const mergedSize = React.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
const genSpaceCompactStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
};
const genSpaceGapStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      "&-gap-row-small": {
        rowGap: token2.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: token2.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: token2.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: token2.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: token2.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: token2.spaceGapLargeSize
      }
    }
  };
};
const useStyle$1 = genStyleHooks("Space", (token2) => {
  const spaceToken = merge(token2, {
    spaceGapSmallSize: token2.paddingXS,
    spaceGapMiddleSize: token2.padding,
    spaceGapLargeSize: token2.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), genSpaceCompactStyle(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});
var __rest$2 = function(s, e2) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
  }
  return t2;
};
const SpaceCompactItemContext = /* @__PURE__ */ reactExports.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = reactExports.useContext(SpaceCompactItemContext);
  const compactItemClassnames = reactExports.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = (_ref) => {
  let {
    children
  } = _ref;
  return /* @__PURE__ */ reactExports.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
const CompactItem = (_a) => {
  var {
    children
  } = _a, otherProps = __rest$2(_a, ["children"]);
  return /* @__PURE__ */ reactExports.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
const Compact = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = reactExports.useContext(ConfigContext);
  const {
    size,
    direction,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children
  } = props, restProps = __rest$2(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = useSize((ctx) => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [wrapCSSVar, hashId] = useStyle$1(prefixCls);
  const clx = classNames(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === "vertical"
  }, className, rootClassName);
  const compactItemContext = reactExports.useContext(SpaceCompactItemContext);
  const childNodes = toArray(children);
  const nodes = reactExports.useMemo(() => childNodes.map((child, i) => {
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${prefixCls}-item-${i}`;
    return /* @__PURE__ */ reactExports.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
var __rest$1 = function(s, e2) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
  }
  return t2;
};
const GroupSizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ButtonGroup = (props) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    size,
    className
  } = props, others = __rest$1(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
  const [, , hashId] = useToken();
  let sizeCls = "";
  switch (size) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
  }
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, hashId);
  return /* @__PURE__ */ reactExports.createElement(GroupSizeContext.Provider, {
    value: size
  }, /* @__PURE__ */ reactExports.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
  if (type === "danger") {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
function isString(str) {
  return typeof str === "string";
}
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === void 0) {
    return;
  }
  const SPACE = needInserted ? " " : "";
  if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split("").join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? /* @__PURE__ */ React.createElement("span", null, child.split("").join(SPACE)) : /* @__PURE__ */ React.createElement("span", null, child);
  }
  if (isFragment(child)) {
    return /* @__PURE__ */ React.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  React.Children.forEach(children, (child) => {
    const type = typeof child;
    const isCurrentChildPure = type === "string" || type === "number";
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted));
}
const IconWrapper = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    className,
    style: style2,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = classNames(`${prefixCls}-icon`, className);
  return /* @__PURE__ */ React.createElement("span", {
    ref,
    className: iconWrapperCls,
    style: style2
  }, children);
});
const InnerLoadingIcon = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls,
    className,
    style: style2,
    iconClassName
  } = props;
  const mergedIconCls = classNames(`${prefixCls}-loading-icon`, className);
  return /* @__PURE__ */ React.createElement(IconWrapper, {
    prefixCls,
    className: mergedIconCls,
    style: style2,
    ref
  }, /* @__PURE__ */ React.createElement(RefIcon, {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
});
const getRealWidth = (node2) => ({
  width: node2.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
});
const LoadingIcon = (props) => {
  const {
    prefixCls,
    loading,
    existIcon,
    className,
    style: style2
  } = props;
  const visible = !!loading;
  if (existIcon) {
    return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style: style2
    });
  }
  return /* @__PURE__ */ React.createElement(CSSMotion, {
    visible,
    // We do not really use this motionName
    motionName: `${prefixCls}-loading-icon-motion`,
    motionLeave: visible,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, (_ref, ref) => {
    let {
      className: motionCls,
      style: motionStyle
    } = _ref;
    return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style: Object.assign(Object.assign({}, style2), motionStyle),
      ref,
      iconClassName: motionCls
    });
  });
};
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = (token2) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token2;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
const prepareToken = (token2) => {
  const {
    paddingInline,
    onlyIconSize,
    paddingBlock
  } = token2;
  const buttonToken = merge(token2, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: paddingBlock,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
const prepareComponentToken = (token2) => {
  var _a, _b, _c, _d, _e, _f;
  const contentFontSize = (_a = token2.contentFontSize) !== null && _a !== void 0 ? _a : token2.fontSize;
  const contentFontSizeSM = (_b = token2.contentFontSizeSM) !== null && _b !== void 0 ? _b : token2.fontSize;
  const contentFontSizeLG = (_c = token2.contentFontSizeLG) !== null && _c !== void 0 ? _c : token2.fontSizeLG;
  const contentLineHeight = (_d = token2.contentLineHeight) !== null && _d !== void 0 ? _d : getLineHeight(contentFontSize);
  const contentLineHeightSM = (_e = token2.contentLineHeightSM) !== null && _e !== void 0 ? _e : getLineHeight(contentFontSizeSM);
  const contentLineHeightLG = (_f = token2.contentLineHeightLG) !== null && _f !== void 0 ? _f : getLineHeight(contentFontSizeLG);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
    primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
    dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
    primaryColor: token2.colorTextLightSolid,
    dangerColor: token2.colorTextLightSolid,
    borderColorDisabled: token2.colorBorder,
    defaultGhostColor: token2.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: token2.colorBgContainer,
    paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineSM: 8 - token2.lineWidth,
    onlyIconSize: token2.fontSizeLG,
    onlyIconSizeSM: token2.fontSizeLG - 2,
    onlyIconSizeLG: token2.fontSizeLG + 2,
    groupBorderColor: token2.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: token2.colorBgTextHover,
    defaultColor: token2.colorText,
    defaultBg: token2.colorBgContainer,
    defaultBorderColor: token2.colorBorder,
    defaultBorderColorDisabled: token2.colorBorder,
    defaultHoverBg: token2.colorBgContainer,
    defaultHoverColor: token2.colorPrimaryHover,
    defaultHoverBorderColor: token2.colorPrimaryHover,
    defaultActiveBg: token2.colorBgContainer,
    defaultActiveColor: token2.colorPrimaryActive,
    defaultActiveBorderColor: token2.colorPrimaryActive,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max((token2.controlHeight - contentFontSize * contentLineHeight) / 2 - token2.lineWidth, 0),
    paddingBlockSM: Math.max((token2.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token2.lineWidth, 0),
    paddingBlockLG: Math.max((token2.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token2.lineWidth, 0)
  };
};
const genSharedButtonStyle = (token2) => {
  const {
    componentCls,
    iconCls,
    fontWeight
  } = token2;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: token2.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: token2.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${componentCls}-icon`]: {
        lineHeight: 1
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, genFocusStyle(token2)),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token2) => ({
  minWidth: token2.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token2) => ({
  borderRadius: token2.controlHeight,
  paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
  paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal()
});
const genDisabledStyle = (token2) => ({
  cursor: "not-allowed",
  borderColor: token2.borderColorDisabled,
  color: token2.colorTextDisabled,
  background: token2.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || void 0,
    background,
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    background
  }, hoverStyle), Object.assign({
    background
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
const genSolidDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token2))
});
const genSolidButtonStyle = (token2) => Object.assign({}, genSolidDisabledButtonStyle(token2));
const genPureDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: token2.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
  background: token2.defaultBg,
  borderColor: token2.defaultBorderColor,
  color: token2.defaultColor,
  boxShadow: token2.defaultShadow
}), genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.defaultHoverColor,
  borderColor: token2.defaultHoverBorderColor,
  background: token2.defaultHoverBg
}, {
  color: token2.defaultActiveColor,
  borderColor: token2.defaultActiveBorderColor,
  background: token2.defaultActiveBg
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.defaultGhostColor, token2.defaultGhostBorderColor, token2.colorTextDisabled, token2.colorBorder)), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: token2.colorError,
    borderColor: token2.colorError
  }, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorBorderHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder)), genSolidDisabledButtonStyle(token2))
});
const genPrimaryButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
  color: token2.primaryColor,
  background: token2.colorPrimary,
  boxShadow: token2.primaryShadow
}), genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorTextLightSolid,
  background: token2.colorPrimaryHover
}, {
  color: token2.colorTextLightSolid,
  background: token2.colorPrimaryActive
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
  color: token2.colorPrimaryHover,
  borderColor: token2.colorPrimaryHover
}, {
  color: token2.colorPrimaryActive,
  borderColor: token2.colorPrimaryActive
})), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: token2.colorError,
    boxShadow: token2.dangerShadow,
    color: token2.dangerColor
  }, genHoverActiveButtonStyle(token2.componentCls, {
    background: token2.colorErrorHover
  }, {
    background: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genSolidDisabledButtonStyle(token2))
});
const genDashedButtonStyle = (token2) => Object.assign(Object.assign({}, genDefaultButtonStyle(token2)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({
  color: token2.colorLink
}, genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorLinkHover,
  background: token2.linkHoverBg
}, {
  color: token2.colorLinkActive
})), genPureDisabledButtonStyle(token2)), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token2.colorError
  }, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive
  })), genPureDisabledButtonStyle(token2))
});
const genTextButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorText,
  background: token2.textHoverBg
}, {
  color: token2.colorText,
  background: token2.colorBgTextActive
})), genPureDisabledButtonStyle(token2)), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token2.colorError
  }, genPureDisabledButtonStyle(token2)), genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorErrorHover,
    background: token2.colorErrorBg
  }, {
    color: token2.colorErrorHover,
    background: token2.colorErrorBgActive
  }))
});
const genTypeButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token2),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
    [`${componentCls}-link`]: genLinkButtonStyle(token2),
    [`${componentCls}-text`]: genTextButtonStyle(token2),
    [`${componentCls}-ghost`]: genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorBgContainer, token2.colorBgContainer, token2.colorTextDisabled, token2.colorBorder)
  };
};
const genButtonStyle = function(token2) {
  let prefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    controlHeight,
    fontSize,
    lineHeight,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical
  } = token2;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    {
      [prefixCls]: {
        fontSize,
        lineHeight,
        height: controlHeight,
        padding: `${unit$1(buttonPaddingVertical)} ${unit$1(buttonPaddingHorizontal)}`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${componentCls}-compact-item`]: {
            flex: "none"
          },
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          [iconCls]: {
            fontSize: token2.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token2.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token2)
    },
    {
      [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token2)
    }
  ];
};
const genSizeBaseButtonStyle = (token2) => {
  const baseToken = merge(token2, {
    fontSize: token2.contentFontSize,
    lineHeight: token2.contentLineHeight
  });
  return genButtonStyle(baseToken, token2.componentCls);
};
const genSizeSmallButtonStyle = (token2) => {
  const smallToken = merge(token2, {
    controlHeight: token2.controlHeightSM,
    fontSize: token2.contentFontSizeSM,
    lineHeight: token2.contentLineHeightSM,
    padding: token2.paddingXS,
    buttonPaddingHorizontal: token2.paddingInlineSM,
    buttonPaddingVertical: token2.paddingBlockSM,
    borderRadius: token2.borderRadiusSM,
    buttonIconOnlyFontSize: token2.onlyIconSizeSM
  });
  return genButtonStyle(smallToken, `${token2.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token2) => {
  const largeToken = merge(token2, {
    controlHeight: token2.controlHeightLG,
    fontSize: token2.contentFontSizeLG,
    lineHeight: token2.contentLineHeightLG,
    buttonPaddingHorizontal: token2.paddingInlineLG,
    buttonPaddingVertical: token2.paddingBlockLG,
    borderRadius: token2.borderRadiusLG,
    buttonIconOnlyFontSize: token2.onlyIconSizeLG
  });
  return genButtonStyle(largeToken, `${token2.componentCls}-lg`);
};
const genBlockButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle = genStyleHooks("Button", (token2) => {
  const buttonToken = prepareToken(token2);
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeBaseButtonStyle(buttonToken),
    genSizeSmallButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle(buttonToken)
  ];
}, prepareComponentToken, {
  unitless: {
    fontWeight: true,
    contentLineHeight: true,
    contentLineHeightSM: true,
    contentLineHeightLG: true
  }
});
function compactItemBorder(token2, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token2) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token2;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
function compactItemVerticalBorder(token2, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token2.calc(token2.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token2) {
  const compactCls = `${token2.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
  };
}
const genButtonCompactStyle = (token2) => {
  const {
    componentCls,
    calc
  } = token2;
  return {
    [componentCls]: {
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: calc(token2.lineWidth).mul(-1).equal(),
            insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: token2.lineWidth,
            height: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
            backgroundColor: token2.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: calc(token2.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
              height: token2.lineWidth,
              backgroundColor: token2.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const CompactCmp = genSubStyleComponent(["Button", "compact"], (token2) => {
  const buttonToken = prepareToken(token2);
  return [
    // Space Compact
    genCompactItemStyle(buttonToken),
    genCompactItemVerticalStyle(buttonToken),
    genButtonCompactStyle(buttonToken)
  ];
}, prepareComponentToken);
var __rest = function(s, e2) {
  var t2 = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
    if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
  }
  return t2;
};
function getLoadingConfig(loading) {
  if (typeof loading === "object" && loading) {
    let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
const InternalCompoundedButton = /* @__PURE__ */ React.forwardRef((props, ref) => {
  var _a, _b, _c;
  const {
    loading = false,
    prefixCls: customizePrefixCls,
    type,
    danger = false,
    shape = "default",
    size: customizeSize,
    styles,
    disabled: customDisabled,
    className,
    rootClassName,
    children,
    icon,
    iconPosition = "start",
    ghost = false,
    block = false,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = "button",
    classNames: customClassNames,
    style: customStyle = {},
    autoInsertSpace
  } = props, rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]);
  const mergedType = type || "default";
  const {
    getPrefixCls,
    direction,
    button
  } = reactExports.useContext(ConfigContext);
  const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : button === null || button === void 0 ? void 0 : button.autoInsertSpace) !== null && _a !== void 0 ? _a : true;
  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = reactExports.useContext(GroupSizeContext);
  const loadingOrDelay = reactExports.useMemo(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = reactExports.useState(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = reactExports.useState(false);
  const internalRef = /* @__PURE__ */ reactExports.createRef();
  const buttonRef = composeRef(ref, internalRef);
  const needInserted = reactExports.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(mergedType);
  reactExports.useEffect(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  reactExports.useEffect(() => {
    if (!buttonRef || !buttonRef.current || !mergedInsertSpace) {
      return;
    }
    const buttonText = buttonRef.current.textContent;
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }, [buttonRef]);
  const handleClick = (e2) => {
    const {
      onClick
    } = props;
    if (innerLoading || mergedDisabled) {
      e2.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e2);
  };
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const sizeClassNameMap = {
    large: "lg",
    small: "sm",
    middle: void 0
  };
  const sizeFullName = useSize((ctxSize) => {
    var _a2, _b2;
    return (_b2 = (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : groupSize) !== null && _b2 !== void 0 ? _b2 : ctxSize;
  });
  const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || "" : "";
  const iconType = innerLoading ? "loading" : icon;
  const linkButtonRestProps = omit(rest, ["navigate"]);
  const classes = classNames(prefixCls, hashId, cssVarCls, {
    [`${prefixCls}-${shape}`]: shape !== "default" && shape,
    [`${prefixCls}-${mergedType}`]: mergedType,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(mergedType),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-dangerous`]: danger,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-icon-end`]: iconPosition === "end"
  }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
  const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
  const iconClasses = classNames(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_b = button === null || button === void 0 ? void 0 : button.classNames) === null || _b === void 0 ? void 0 : _b.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_c = button === null || button === void 0 ? void 0 : button.styles) === null || _c === void 0 ? void 0 : _c.icon) || {});
  const iconNode = icon && !innerLoading ? /* @__PURE__ */ React.createElement(IconWrapper, {
    prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon) : /* @__PURE__ */ React.createElement(LoadingIcon, {
    existIcon: !!icon,
    prefixCls,
    loading: innerLoading
  });
  const kids = children || children === 0 ? spaceChildren(children, needInserted && mergedInsertSpace) : null;
  if (linkButtonRestProps.href !== void 0) {
    return wrapCSSVar(/* @__PURE__ */ React.createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classNames(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? void 0 : linkButtonRestProps.href,
      style: fullStyle,
      onClick: handleClick,
      ref: buttonRef,
      tabIndex: mergedDisabled ? -1 : 0
    }), iconNode, kids));
  }
  let buttonNode = /* @__PURE__ */ React.createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids, !!compactItemClassnames && /* @__PURE__ */ React.createElement(CompactCmp, {
    key: "compact",
    prefixCls
  }));
  if (!isUnBorderedButtonType(mergedType)) {
    buttonNode = /* @__PURE__ */ React.createElement(Wave, {
      component: "Button",
      disabled: innerLoading
    }, buttonNode);
  }
  return wrapCSSVar(buttonNode);
});
const Button = InternalCompoundedButton;
Button.Group = ButtonGroup;
Button.__ANT_BUTTON = true;
export {
  TinyColor as $,
  RefIcon as A,
  Button as B,
  ConfigContext as C,
  devUseWarning as D,
  useSafeState as E,
  convertLegacyProps as F,
  canUseDom as G,
  getConfirmLocale as H,
  Icon as I,
  DisabledContextProvider as J,
  genSubStyleComponent as K,
  clearFix as L,
  ConfigProvider as M,
  useToken as N,
  globalConfig as O,
  unmount as P,
  render as Q,
  RefIcon$1 as R,
  localeValues as S,
  genFocusStyle as T,
  toArray as U,
  noteOnce as V,
  warningOnce as W,
  useLayoutUpdateEffect as X,
  useLayoutEffect as Y,
  isVisible as Z,
  _typeof as _,
  _toConsumableArray as a,
  isFragment as a$,
  genCompactItemStyle as a0,
  locale as a1,
  genComponentStyleHook as a2,
  useCompactItemContext as a3,
  useSize as a4,
  DisabledContext as a5,
  resetIcon as a6,
  _createSuper as a7,
  isEqual as a8,
  useComposeRef as a9,
  contains as aA,
  getDOM as aB,
  ValidateMessagesContext as aC,
  SizeContext as aD,
  supportRef as aE,
  Wave as aF,
  warning$1 as aG,
  _toArray as aH,
  findDOMNode as aI,
  TARGET_CLS as aJ,
  Compact as aK,
  useStyle$1 as aL,
  locale$3 as aM,
  get as aN,
  fillRef as aO,
  supportNodeRef as aP,
  LocaleContext as aQ,
  defaultPrefixCls as aR,
  updateCSS as aS,
  removeCSS as aT,
  _setPrototypeOf as aU,
  merge$1 as aV,
  set as aW,
  NoCompactStyle as aX,
  isDOM as aY,
  getShadowRoot as aZ,
  Variants as a_,
  presetPrimaryColors as aa,
  _unsupportedIterableToArray as ab,
  warning as ac,
  useInsertStyles as ad,
  IconContext as ae,
  svgBaseProps as af,
  getTwoToneColor as ag,
  setTwoToneColor as ah,
  genFocusOutline as ai,
  createTheme as aj,
  derivative as ak,
  seedToken as al,
  getComputedToken$1 as am,
  formatToken as an,
  genFontMapToken as ao,
  genControlHeight as ap,
  generate$1 as aq,
  defaultPresetColors as ar,
  genColorMapToken as as,
  defaultConfig as at,
  useMemo as au,
  _assertThisInitialized as av,
  _asyncToGenerator as aw,
  _regeneratorRuntime as ax,
  blue as ay,
  version$1 as az,
  classNames as b,
  gold as b0,
  cloneElement as c,
  _extends as d,
  CSSMotion as e,
  composeRef as f,
  genStyleHooks as g,
  replaceElement as h,
  _getPrototypeOf as i,
  _possibleConstructorReturn as j,
  _isNativeReflectConstruct as k,
  _inherits as l,
  _createClass as m,
  _classCallCheck as n,
  omit as o,
  merge as p,
  useEvent as q,
  resetComponent as r,
  _slicedToArray as s,
  textEllipsis as t,
  unit$1 as u,
  _defineProperty as v,
  wrapperRaf as w,
  CSSMotionList as x,
  _objectWithoutProperties as y,
  _objectSpread2 as z
};
