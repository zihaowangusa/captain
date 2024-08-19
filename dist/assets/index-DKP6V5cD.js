import { R as React, r as reactExports, a as reactDomExports } from "./index-mAcNNorA.js";
import { w as wrapperRaf, M as ConfigProvider, C as ConfigContext, b as classNames, _ as _typeof, s as _slicedToArray, aG as warning, z as _objectSpread2, f as composeRef, v as _defineProperty, d as _extends, y as _objectWithoutProperties, W as warningOnce, aH as _toArray, a as _toConsumableArray, a9 as useComposeRef, Y as useLayoutEffect$1, m as _createClass, n as _classCallCheck, aI as findDOMNode, q as useEvent, au as useMemo, o as omit, G as canUseDom, U as toArray$2, N as useToken, $ as TinyColor, g as genStyleHooks, p as merge, r as resetComponent, t as textEllipsis, u as unit, a6 as resetIcon, a0 as genCompactItemStyle, R as RefIcon$d, A as RefIcon$f, a3 as useCompactItemContext, a4 as useSize, a5 as DisabledContext, T as genFocusStyle, c as cloneElement, D as devUseWarning, ai as genFocusOutline, aF as Wave, aJ as TARGET_CLS, aK as Compact, aL as useStyle$b, B as Button$1, I as Icon, K as genSubStyleComponent, aM as locale$1, a8 as isEqual, aE as supportRef, aN as get, aO as fillRef, Z as isVisible, l as _inherits, a7 as _createSuper, av as _assertThisInitialized, e as CSSMotion, L as clearFix, S as localeValues, h as replaceElement } from "./button-B5nM96vg.js";
import { a as RefIcon$c, p as pickAttrs, c as Keyframe, N as initMotion, k as useMergedState, K as KeyCode, l as ForwardOverflow, j as Trigger, ac as isMobile, R as RefResizeObserver, d as useLocale, x as slideUpIn, w as slideDownIn, A as slideUpOut, y as slideDownOut, D as initSlideMotion, Y as RefIcon$e, G as useVariant, b as useCSSVarCls, m as FormItemInputContext, H as getStatusClassNames, e as useZIndex, g as getTransitionName, I as getMergedStatus, a4 as getArrowStyle, a8 as initZoomMotion, a5 as getArrowOffsetToken, o as getArrowToken, a6 as getPlacements, z as zIndexContext, au as matchScreen, av as isPresetSize, aw as isValidGapNumber, $ as RefIcon$j, n as initComponentToken$1, t as initInputToken, ax as genInputSmallStyle, V as genBasicInputStyle, ay as genBaseOutlinedStyle$1, W as genDisabledStyle, a9 as responsiveArray, az as getScrollBarSize, aA as getTargetScrollBarSize, aB as isStyleSupport, u as useForceUpdate, J as genCollapseMotion, L as initCollapseMotion, M as Tooltip, aC as operationUnit, h as genPresetColor, i as isPresetColor, aD as isPresetStatusColor } from "./index-BrGmHtfE.js";
import { M as Menu, O as OverrideProvider, a as RefIcon$i, u as useBreakpoint, R as RefIcon$k, b as addEventListenerWrap, c as getOffset } from "./addEventListener-D_KkrWbe.js";
import { c as RefIcon$g, b as RefIcon$h, d as Dropdown$3, C as Col, R as Row$1, I as Input$1 } from "./index-DxQyLvE3.js";
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj === obj.window;
}
const getScroll = (target) => {
  var _a, _b;
  if (typeof window === "undefined") {
    return 0;
  }
  let result = 0;
  if (isWindow(target)) {
    result = target.pageYOffset;
  } else if (target instanceof Document) {
    result = target.documentElement.scrollTop;
  } else if (target instanceof HTMLElement) {
    result = target.scrollTop;
  } else if (target) {
    result = target["scrollTop"];
  }
  if (target && !isWindow(target) && typeof result !== "number") {
    result = (_b = ((_a = target.ownerDocument) !== null && _a !== void 0 ? _a : target).documentElement) === null || _b === void 0 ? void 0 : _b.scrollTop;
  }
  return result;
};
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
function scrollTo(y) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    getContainer = () => window,
    callback,
    duration = 450
  } = options;
  const container = getContainer();
  const scrollTop = getScroll(container);
  const startTime = Date.now();
  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
    if (isWindow(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof Document || container.constructor.name === "HTMLDocument") {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < duration) {
      wrapperRaf(frameFunc);
    } else if (typeof callback === "function") {
      callback();
    }
  };
  wrapperRaf(frameFunc);
}
function pickClosable(context) {
  if (!context) {
    return void 0;
  }
  return {
    closable: context.closable,
    closeIcon: context.closeIcon
  };
}
function useClosableConfig(closableCollection) {
  const {
    closable,
    closeIcon
  } = closableCollection || {};
  return React.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !closable && (closable === false || closeIcon === false || closeIcon === null)
    ) {
      return false;
    }
    if (closable === void 0 && closeIcon === void 0) {
      return null;
    }
    let closableConfig = {
      closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
    };
    if (closable && typeof closable === "object") {
      closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
    }
    return closableConfig;
  }, [closable, closeIcon]);
}
function assignWithoutUndefined() {
  const target = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key] !== void 0) {
          target[key] = obj[key];
        }
      });
    }
  });
  return target;
}
const EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection) {
  let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EmptyFallbackCloseCollection;
  const propCloseConfig = useClosableConfig(propCloseCollection);
  const contextCloseConfig = useClosableConfig(contextCloseCollection);
  const mergedFallbackCloseCollection = React.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ React.createElement(RefIcon$c, null)
  }, fallbackCloseCollection), [fallbackCloseCollection]);
  const mergedClosableConfig = React.useMemo(() => {
    if (propCloseConfig === false) {
      return false;
    }
    if (propCloseConfig) {
      return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
    }
    if (contextCloseConfig === false) {
      return false;
    }
    if (contextCloseConfig) {
      return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig);
    }
    return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
  }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
  return React.useMemo(() => {
    if (mergedClosableConfig === false) {
      return [false, null];
    }
    const {
      closeIconRender
    } = mergedFallbackCloseCollection;
    const {
      closeIcon
    } = mergedClosableConfig;
    let mergedCloseIcon = closeIcon;
    if (mergedCloseIcon !== null && mergedCloseIcon !== void 0) {
      if (closeIconRender) {
        mergedCloseIcon = closeIconRender(closeIcon);
      }
      const ariaProps = pickAttrs(mergedClosableConfig, true);
      if (Object.keys(ariaProps).length) {
        mergedCloseIcon = /* @__PURE__ */ React.isValidElement(mergedCloseIcon) ? /* @__PURE__ */ React.cloneElement(mergedCloseIcon, ariaProps) : /* @__PURE__ */ React.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon);
      }
    }
    return [true, mergedCloseIcon];
  }, [mergedClosableConfig, mergedFallbackCloseCollection]);
}
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
function withPureRenderTheme(Component) {
  return (props) => /* @__PURE__ */ reactExports.createElement(ConfigProvider, {
    theme: {
      token: {
        motion: false,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ reactExports.createElement(Component, Object.assign({}, props)));
}
const genPurePanel = (Component, defaultPrefixCls, getDropdownCls, postProps) => {
  const PurePanel2 = (props) => {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = reactExports.useRef(null);
    const [popupHeight, setPopupHeight] = reactExports.useState(0);
    const [popupWidth, setPopupWidth] = reactExports.useState(0);
    const [open, setOpen] = useMergedState(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = reactExports.useContext(ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls || "select", customizePrefixCls);
    reactExports.useEffect(() => {
      setOpen(true);
      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver((entries) => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    const mergedStyle = {
      paddingBottom: popupHeight,
      position: "relative",
      minWidth: popupWidth
    };
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref: holderRef,
      style: mergedStyle
    }, /* @__PURE__ */ reactExports.createElement(Component, Object.assign({}, mergedProps)));
  };
  return withPureRenderTheme(PurePanel2);
};
var TransBtn = function TransBtn2(props) {
  var className = props.className, customizeIcon = props.customizeIcon, customizeIconProps = props.customizeIconProps, children = props.children, _onMouseDown = props.onMouseDown, onClick = props.onClick;
  var icon = typeof customizeIcon === "function" ? customizeIcon(customizeIconProps) : customizeIcon;
  return /* @__PURE__ */ reactExports.createElement("span", {
    className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      _onMouseDown === null || _onMouseDown === void 0 || _onMouseDown(event);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick,
    "aria-hidden": true
  }, icon !== void 0 ? icon : /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(className.split(/\s+/).map(function(cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};
var useAllowClear = function useAllowClear2(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon) {
  var disabled = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  var mergedSearchValue = arguments.length > 6 ? arguments[6] : void 0;
  var mode = arguments.length > 7 ? arguments[7] : void 0;
  var mergedClearIcon = React.useMemo(function() {
    if (_typeof(allowClear) === "object") {
      return allowClear.clearIcon;
    }
    if (clearIcon) {
      return clearIcon;
    }
  }, [allowClear, clearIcon]);
  var mergedAllowClear = React.useMemo(function() {
    if (!disabled && !!allowClear && (displayValues.length || mergedSearchValue) && !(mode === "combobox" && mergedSearchValue === "")) {
      return true;
    }
    return false;
  }, [allowClear, disabled, displayValues.length, mergedSearchValue, mode]);
  return {
    allowClear: mergedAllowClear,
    clearIcon: /* @__PURE__ */ React.createElement(TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: mergedClearIcon
    }, "×")
  };
};
var BaseSelectContext = /* @__PURE__ */ reactExports.createContext(null);
function useBaseProps() {
  return reactExports.useContext(BaseSelectContext);
}
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), bool = _React$useState2[0], setBool = _React$useState2[1];
  var delayRef = reactExports.useRef(null);
  var cancelLatest = function cancelLatest2() {
    window.clearTimeout(delayRef.current);
  };
  reactExports.useEffect(function() {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool2(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function() {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lockRef = reactExports.useRef(null);
  var timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    return function() {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function() {
      lockRef.current = null;
    }, duration);
  }
  return [function() {
    return lockRef.current;
  }, doLock];
}
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = reactExports.useRef(null);
  propsRef.current = {
    open,
    triggerOpen,
    customizedTrigger
  };
  reactExports.useEffect(function() {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (propsRef.current.open && elements().filter(function(element) {
        return element;
      }).every(function(element) {
        return !element.contains(target) && element !== target;
      })) {
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener("mousedown", onGlobalMouseDown);
    return function() {
      return window.removeEventListener("mousedown", onGlobalMouseDown);
    };
  }, []);
}
function isValidateOpenKey(currentKeyCode) {
  return ![
    // System function button
    KeyCode.ESC,
    KeyCode.SHIFT,
    KeyCode.BACKSPACE,
    KeyCode.TAB,
    KeyCode.WIN_KEY,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    // F1-F12
    KeyCode.F1,
    KeyCode.F2,
    KeyCode.F3,
    KeyCode.F4,
    KeyCode.F5,
    KeyCode.F6,
    KeyCode.F7,
    KeyCode.F8,
    KeyCode.F9,
    KeyCode.F10,
    KeyCode.F11,
    KeyCode.F12
  ].includes(currentKeyCode);
}
var Input = function Input2(props, ref) {
  var _inputNode2;
  var prefixCls = props.prefixCls, id = props.id, inputElement = props.inputElement, disabled = props.disabled, tabIndex = props.tabIndex, autoFocus = props.autoFocus, autoComplete = props.autoComplete, editable = props.editable, activeDescendantId = props.activeDescendantId, value = props.value, maxLength = props.maxLength, _onKeyDown = props.onKeyDown, _onMouseDown = props.onMouseDown, _onChange = props.onChange, onPaste = props.onPaste, _onCompositionStart = props.onCompositionStart, _onCompositionEnd = props.onCompositionEnd, open = props.open, attrs = props.attrs;
  var inputNode = inputElement || /* @__PURE__ */ reactExports.createElement("input", null);
  var _inputNode = inputNode, originRef = _inputNode.ref, originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown, onOriginChange = originProps.onChange, onOriginMouseDown = originProps.onMouseDown, onOriginCompositionStart = originProps.onCompositionStart, onOriginCompositionEnd = originProps.onCompositionEnd, style = originProps.style;
  warning(!("maxLength" in inputNode.props));
  inputNode = /* @__PURE__ */ reactExports.cloneElement(inputNode, _objectSpread2(_objectSpread2(_objectSpread2({
    type: "search"
  }, originProps), {}, {
    // Override over origin props
    id,
    ref: composeRef(ref, originRef),
    disabled,
    tabIndex,
    autoComplete: autoComplete || "off",
    autoFocus,
    className: classNames("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 || (_inputNode2 = _inputNode2.props) === null || _inputNode2 === void 0 ? void 0 : _inputNode2.className),
    role: "combobox",
    "aria-expanded": open || false,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(id, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(id, "_list"),
    "aria-activedescendant": open ? activeDescendantId : void 0
  }, attrs), {}, {
    value: editable ? value : "",
    maxLength,
    readOnly: !editable,
    unselectable: !editable ? "on" : null,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown2(event) {
      _onKeyDown(event);
      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);
      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);
      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);
      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);
      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste
  }));
  return inputNode;
};
var RefInput = /* @__PURE__ */ reactExports.forwardRef(Input);
function toArray$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
var isClient = typeof window !== "undefined" && window.document && window.document.documentElement;
var isBrowserClient$1 = isClient;
function hasValue(value) {
  return value !== void 0 && value !== null;
}
function isComboNoValue(value) {
  return !value && value !== 0;
}
function isTitleType$1(title) {
  return ["string", "number"].includes(_typeof(title));
}
function getTitle(item) {
  var title = void 0;
  if (item) {
    if (isTitleType$1(item.title)) {
      title = item.title.toString();
    } else if (isTitleType$1(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}
function useLayoutEffect(effect, deps) {
  if (isBrowserClient$1) {
    reactExports.useLayoutEffect(effect, deps);
  } else {
    reactExports.useEffect(effect, deps);
  }
}
function itemKey$1(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector2(props) {
  var id = props.id, prefixCls = props.prefixCls, values = props.values, open = props.open, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, inputRef = props.inputRef, placeholder = props.placeholder, disabled = props.disabled, mode = props.mode, showSearch = props.showSearch, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, tabIndex = props.tabIndex, removeIcon = props.removeIcon, maxTagCount = props.maxTagCount, maxTagTextLength = props.maxTagTextLength, _props$maxTagPlacehol = props.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol, tagRender = props.tagRender, onToggleOpen = props.onToggleOpen, onRemove = props.onRemove, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = reactExports.useRef(null);
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray(_useState, 2), inputWidth = _useState2[0], setInputWidth = _useState2[1];
  var _useState3 = reactExports.useState(false), _useState4 = _slicedToArray(_useState3, 2), focused = _useState4[0], setFocused = _useState4[1];
  var selectionPrefixCls = "".concat(prefixCls, "-selection");
  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === "tags" ? searchValue : "";
  var inputEditable = mode === "tags" || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);
  useLayoutEffect(function() {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]);
  var defaultRenderSelector = function defaultRenderSelector2(item, content, itemDisabled, closable, onClose) {
    return /* @__PURE__ */ reactExports.createElement("span", {
      title: getTitle(item),
      className: classNames("".concat(selectionPrefixCls, "-item"), _defineProperty({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled))
    }, /* @__PURE__ */ reactExports.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /* @__PURE__ */ reactExports.createElement(TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "×"));
  };
  var customizeRenderSelector = function customizeRenderSelector2(value, content, itemDisabled, closable, onClose, isMaxTag) {
    var onMouseDown = function onMouseDown2(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };
    return /* @__PURE__ */ reactExports.createElement("span", {
      onMouseDown
    }, tagRender({
      label: content,
      value,
      disabled: itemDisabled,
      closable,
      onClose,
      isMaxTag: !!isMaxTag
    }));
  };
  var renderItem = function renderItem2(valueItem) {
    var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === "number") {
      if (typeof label === "string" || typeof label === "number") {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }
    var onClose = function onClose2(event) {
      if (event) {
        event.stopPropagation();
      }
      onRemove(valueItem);
    };
    return typeof tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  };
  var renderRest = function renderRest2(omittedValues) {
    var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return typeof tagRender === "function" ? customizeRenderSelector(void 0, content, false, false, void 0, true) : defaultRenderSelector({
      title: content
    }, content, false);
  };
  var inputNode = /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /* @__PURE__ */ reactExports.createElement(RefInput, {
    ref: inputRef,
    open,
    prefixCls,
    id,
    inputElement: null,
    disabled,
    autoFocus,
    autoComplete,
    editable: inputEditable,
    activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex,
    attrs: pickAttrs(props, true)
  }), /* @__PURE__ */ reactExports.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, " "));
  var selectionNode = /* @__PURE__ */ reactExports.createElement(ForwardOverflow, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem,
    renderRest,
    suffix: inputNode,
    itemKey: itemKey$1,
    maxCount: maxTagCount
  });
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, selectionNode, !values.length && !inputValue && /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};
var SingleSelector = function SingleSelector2(props) {
  var inputElement = props.inputElement, prefixCls = props.prefixCls, id = props.id, inputRef = props.inputRef, disabled = props.disabled, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, mode = props.mode, open = props.open, values = props.values, placeholder = props.placeholder, tabIndex = props.tabIndex, showSearch = props.showSearch, searchValue = props.searchValue, activeValue = props.activeValue, maxLength = props.maxLength, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd, title = props.title;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), inputChanged = _React$useState2[0], setInputChanged = _React$useState2[1];
  var combobox = mode === "combobox";
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || "";
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  reactExports.useEffect(function() {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);
  var hasTextInput = mode !== "combobox" && !open && !showSearch ? false : !!inputValue;
  var selectionTitle = title === void 0 ? getTitle(item) : title;
  var placeholderNode = reactExports.useMemo(function() {
    if (item) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hasTextInput ? {
        visibility: "hidden"
      } : void 0
    }, placeholder);
  }, [item, hasTextInput, placeholder, prefixCls]);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /* @__PURE__ */ reactExports.createElement(RefInput, {
    ref: inputRef,
    prefixCls,
    id,
    open,
    inputElement,
    disabled,
    autoFocus,
    autoComplete,
    editable: inputEditable,
    activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : void 0
  })), !combobox && item ? /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: selectionTitle,
    style: hasTextInput ? {
      visibility: "hidden"
    } : void 0
  }, item.label) : null, placeholderNode);
};
var Selector = function Selector2(props, ref) {
  var inputRef = reactExports.useRef(null);
  var compositionStatusRef = reactExports.useRef(false);
  var prefixCls = props.prefixCls, open = props.open, mode = props.mode, showSearch = props.showSearch, tokenWithEnter = props.tokenWithEnter, disabled = props.disabled, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSubmit = props.onSearchSubmit, onToggleOpen = props.onToggleOpen, onInputKeyDown = props.onInputKeyDown, domRef = props.domRef;
  reactExports.useImperativeHandle(ref, function() {
    return {
      focus: function focus(options) {
        inputRef.current.focus(options);
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });
  var _useLock = useLock(0), _useLock2 = _slicedToArray(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
    var which = event.which;
    if (which === KeyCode.UP || which === KeyCode.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === KeyCode.ENTER && mode === "tags" && !compositionStatusRef.current && !open) {
      onSearchSubmit === null || onSearchSubmit === void 0 || onSearchSubmit(event.target.value);
    }
    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };
  var onInternalInputMouseDown = function onInternalInputMouseDown2() {
    setInputMouseDown(true);
  };
  var pastedTextRef = reactExports.useRef(null);
  var triggerOnSearch = function triggerOnSearch2(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart2() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd2(e) {
    compositionStatusRef.current = false;
    if (mode !== "combobox") {
      triggerOnSearch(e.target.value);
    }
  };
  var onInputChange = function onInputChange2(event) {
    var value = event.target.value;
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste2(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData("text");
    pastedTextRef.current = value || "";
  };
  var onClick = function onClick2(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      var isIE = document.body.style.msTouchAction !== void 0;
      if (isIE) {
        setTimeout(function() {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown2(event) {
    var inputMouseDown = getInputMouseDown();
    if (event.target !== inputRef.current && !inputMouseDown && !(mode === "combobox" && disabled)) {
      event.preventDefault();
    }
    if (mode !== "combobox" && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch("", true, false);
      }
      onToggleOpen();
    }
  };
  var sharedProps = {
    inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange,
    onInputPaste,
    onInputCompositionStart,
    onInputCompositionEnd
  };
  var selectNode = mode === "multiple" || mode === "tags" ? /* @__PURE__ */ reactExports.createElement(SelectSelector, _extends({}, props, sharedProps)) : /* @__PURE__ */ reactExports.createElement(SingleSelector, _extends({}, props, sharedProps));
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick,
    onMouseDown
  }, selectNode);
};
var ForwardSelector = /* @__PURE__ */ reactExports.forwardRef(Selector);
var _excluded$g = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];
var getBuiltInPlacements$1 = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
};
var SelectTrigger = function SelectTrigger2(props, ref) {
  var prefixCls = props.prefixCls;
  props.disabled;
  var visible = props.visible, children = props.children, popupElement = props.popupElement, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, _props$direction = props.direction, direction = _props$direction === void 0 ? "ltr" : _props$direction, placement = props.placement, builtinPlacements = props.builtinPlacements, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, getPopupContainer = props.getPopupContainer, empty = props.empty, getTriggerDOMNode = props.getTriggerDOMNode, onPopupVisibleChange = props.onPopupVisibleChange, onPopupMouseEnter = props.onPopupMouseEnter, restProps = _objectWithoutProperties(props, _excluded$g);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var mergedBuiltinPlacements2 = reactExports.useMemo(function() {
    return builtinPlacements || getBuiltInPlacements$1(dropdownMatchSelectWidth);
  }, [builtinPlacements, dropdownMatchSelectWidth]);
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
  var isNumberPopupWidth = typeof dropdownMatchSelectWidth === "number";
  var stretch = reactExports.useMemo(function() {
    if (isNumberPopupWidth) {
      return null;
    }
    return dropdownMatchSelectWidth === false ? "minWidth" : "width";
  }, [dropdownMatchSelectWidth, isNumberPopupWidth]);
  var popupStyle = dropdownStyle;
  if (isNumberPopupWidth) {
    popupStyle = _objectSpread2(_objectSpread2({}, popupStyle), {}, {
      width: dropdownMatchSelectWidth
    });
  }
  var triggerPopupRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, function() {
    return {
      getPopupElement: function getPopupElement() {
        var _triggerPopupRef$curr;
        return (_triggerPopupRef$curr = triggerPopupRef.current) === null || _triggerPopupRef$curr === void 0 ? void 0 : _triggerPopupRef$curr.popupElement;
      }
    };
  });
  return /* @__PURE__ */ reactExports.createElement(Trigger, _extends({}, restProps, {
    showAction: onPopupVisibleChange ? ["click"] : [],
    hideAction: onPopupVisibleChange ? ["click"] : [],
    popupPlacement: placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: mergedBuiltinPlacements2,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /* @__PURE__ */ reactExports.createElement("div", {
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    ref: triggerPopupRef,
    stretch,
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer,
    popupClassName: classNames(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle,
    getTriggerDOMNode,
    onPopupVisibleChange
  }), children);
};
var RefSelectTrigger = /* @__PURE__ */ reactExports.forwardRef(SelectTrigger);
function getKey$1(data, index) {
  var key = data.key;
  var value;
  if ("value" in data) {
    value = data.value;
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value !== void 0) {
    return value;
  }
  return "rc-index-key-".concat(index);
}
function isValidCount(value) {
  return typeof value !== "undefined" && !Number.isNaN(value);
}
function fillFieldNames$1(fieldNames, childrenAsData) {
  var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options = _ref.options, groupLabel = _ref.groupLabel;
  var mergedLabel = label || (childrenAsData ? "children" : "label");
  return {
    label: mergedLabel,
    value: value || "value",
    options: options || "options",
    groupLabel: groupLabel || mergedLabel
  };
}
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames$1(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options, groupLabel = _fillFieldNames.groupLabel;
  function dig(list, isGroupOption) {
    if (!Array.isArray(list)) {
      return;
    }
    list.forEach(function(data) {
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];
        flattenList.push({
          key: getKey$1(data, flattenList.length),
          groupOption: isGroupOption,
          data,
          label: data[fieldLabel],
          value
        });
      } else {
        var grpLabel = data[groupLabel];
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data.label;
        }
        flattenList.push({
          key: getKey$1(data, flattenList.length),
          group: true,
          data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  var newOption = _objectSpread2({}, option);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get: function get2() {
        warningOnce(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
        return newOption;
      }
    });
  }
  return newOption;
}
var getSeparatedContent = function getSeparatedContent2(text, tokens, end) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  var separate = function separate2(str, _ref3) {
    var _ref4 = _toArray(_ref3), token = _ref4[0], restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list2 = str.split(token);
    match = match || list2.length > 1;
    return list2.reduce(function(prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate2(unitStr, restTokens)));
    }, []).filter(Boolean);
  };
  var list = separate(text, tokens);
  if (match) {
    return typeof end !== "undefined" ? list.slice(0, end) : list;
  } else {
    return null;
  }
};
var SelectContext = /* @__PURE__ */ reactExports.createContext(null);
function Polite(props) {
  var visible = props.visible, values = props.values;
  if (!visible) {
    return null;
  }
  var MAX_COUNT = 50;
  return /* @__PURE__ */ reactExports.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(values.slice(0, MAX_COUNT).map(function(_ref) {
    var label = _ref.label, value = _ref.value;
    return ["number", "string"].includes(_typeof(label)) ? label : value;
  }).join(", ")), values.length > MAX_COUNT ? ", ..." : null);
}
var _excluded$f = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];
var DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
var isMultiple = function isMultiple2(mode) {
  return mode === "tags" || mode === "multiple";
};
var BaseSelect = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _customizeRawInputEle;
  var id = props.id, prefixCls = props.prefixCls, className = props.className, showSearch = props.showSearch, tagRender = props.tagRender, direction = props.direction, omitDomProps = props.omitDomProps, displayValues = props.displayValues, onDisplayValuesChange = props.onDisplayValuesChange, emptyOptions = props.emptyOptions, _props$notFoundConten = props.notFoundContent, notFoundContent = _props$notFoundConten === void 0 ? "Not Found" : _props$notFoundConten, onClear = props.onClear, mode = props.mode, disabled = props.disabled, loading = props.loading, getInputElement = props.getInputElement, getRawInputElement = props.getRawInputElement, open = props.open, defaultOpen = props.defaultOpen, onDropdownVisibleChange = props.onDropdownVisibleChange, activeValue = props.activeValue, onActiveValueChange = props.onActiveValueChange, activeDescendantId = props.activeDescendantId, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSplit = props.onSearchSplit, tokenSeparators = props.tokenSeparators, allowClear = props.allowClear, suffixIcon = props.suffixIcon, clearIcon = props.clearIcon, OptionList3 = props.OptionList, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, placement = props.placement, builtinPlacements = props.builtinPlacements, getPopupContainer = props.getPopupContainer, _props$showAction = props.showAction, showAction = _props$showAction === void 0 ? [] : _props$showAction, onFocus = props.onFocus, onBlur = props.onBlur, onKeyUp = props.onKeyUp, onKeyDown2 = props.onKeyDown, onMouseDown = props.onMouseDown, restProps = _objectWithoutProperties(props, _excluded$f);
  var multiple = isMultiple(mode);
  var mergedShowSearch = (showSearch !== void 0 ? showSearch : multiple) || mode === "combobox";
  var domProps = _objectSpread2({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function(propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 || omitDomProps.forEach(function(propName) {
    delete domProps[propName];
  });
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
  reactExports.useEffect(function() {
    setMobile(isMobile());
  }, []);
  var containerRef = reactExports.useRef(null);
  var selectorDomRef = reactExports.useRef(null);
  var triggerRef = reactExports.useRef(null);
  var selectorRef = reactExports.useRef(null);
  var listRef = reactExports.useRef(null);
  var blurRef = reactExports.useRef(false);
  var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
  reactExports.useImperativeHandle(ref, function() {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo2(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      },
      nativeElement: containerRef.current || selectorDomRef.current
    };
  });
  var mergedSearchValue = reactExports.useMemo(function() {
    var _displayValues$;
    if (mode !== "combobox") {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === "string" || typeof val === "number" ? String(val) : "";
  }, [searchValue, mode, displayValues]);
  var customizeInputElement = mode === "combobox" && typeof getInputElement === "function" && getInputElement() || null;
  var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
  var customizeRawInputRef = useComposeRef(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 || (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);
  var _React$useState3 = reactExports.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), rendered = _React$useState4[0], setRendered = _React$useState4[1];
  useLayoutEffect$1(function() {
    setRendered(true);
  }, []);
  var _useMergedState = useMergedState(false, {
    defaultValue: defaultOpen,
    value: open
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), innerOpen = _useMergedState2[0], setInnerOpen = _useMergedState2[1];
  var mergedOpen = rendered ? innerOpen : false;
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === "combobox") {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = reactExports.useCallback(function(newOpen) {
    var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 || onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);
  var tokenWithEnter = reactExports.useMemo(function() {
    return (tokenSeparators || []).some(function(tokenSeparator) {
      return ["\n", "\r\n"].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var _ref = reactExports.useContext(SelectContext) || {}, maxCount = _ref.maxCount, rawValues = _ref.rawValues;
  var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
    if (multiple && isValidCount(maxCount) && (rawValues === null || rawValues === void 0 ? void 0 : rawValues.size) >= maxCount) {
      return;
    }
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 || onActiveValueChange(null);
    var separatedList = getSeparatedContent(searchText, tokenSeparators, isValidCount(maxCount) ? maxCount - rawValues.size : void 0);
    var patchLabels = isCompositing ? null : separatedList;
    if (mode !== "combobox" && patchLabels) {
      newSearchText = "";
      onSearchSplit === null || onSearchSplit === void 0 || onSearchSplit(patchLabels);
      onToggleOpen(false);
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? "typing" : "effect"
      });
    }
    return ret;
  };
  var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: "submit"
    });
  };
  reactExports.useEffect(function() {
    if (!mergedOpen && !multiple && mode !== "combobox") {
      onInternalSearch("", false, false);
    }
  }, [mergedOpen]);
  reactExports.useEffect(function() {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled && !blurRef.current) {
      setMockFocused(false);
    }
  }, [disabled]);
  var _useLock = useLock(), _useLock2 = _slicedToArray(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
  var keyLockRef = reactExports.useRef(false);
  var onInternalKeyDown = function onInternalKeyDown2(event) {
    var clearLock = getClearLock();
    var key = event.key;
    var isEnterKey = key === "Enter";
    if (isEnterKey) {
      if (mode !== "combobox") {
        event.preventDefault();
      }
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);
    if (key === "Backspace" && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = _toConsumableArray(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: "remove",
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && (!isEnterKey || !keyLockRef.current)) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    if (isEnterKey) {
      keyLockRef.current = true;
    }
    onKeyDown2 === null || onKeyDown2 === void 0 || onKeyDown2.apply(void 0, [event].concat(rest));
  };
  var onInternalKeyUp = function onInternalKeyUp2(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current) === null || _listRef$current3 === void 0 || _listRef$current3.onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    if (event.key === "Enter") {
      keyLockRef.current = false;
    }
    onKeyUp === null || onKeyUp === void 0 || onKeyUp.apply(void 0, [event].concat(rest));
  };
  var onSelectorRemove = function onSelectorRemove2(val) {
    var newValues = displayValues.filter(function(i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: "remove",
      values: [val]
    });
  };
  var focusRef = reactExports.useRef(false);
  var onContainerFocus = function onContainerFocus2() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }
      if (showAction.includes("focus")) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur2() {
    blurRef.current = true;
    setMockFocused(false, function() {
      focusRef.current = false;
      blurRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      if (mode === "tags") {
        onSearch(mergedSearchValue, {
          source: "submit"
        });
      } else if (mode === "multiple") {
        onSearch("", {
          source: "blur"
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };
  var activeTimeoutIds = [];
  reactExports.useEffect(function() {
    return function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown2(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function() {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 || _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 || onMouseDown.apply(void 0, [event].concat(restArgs));
  };
  var _React$useState5 = reactExports.useState({}), _React$useState6 = _slicedToArray(_React$useState5, 2), forceUpdate = _React$useState6[1];
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
      onToggleOpen(newOpen);
    };
  }
  useSelectTriggerControl(function() {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);
  var baseSelectContext = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      notFoundContent,
      open: mergedOpen,
      triggerOpen,
      id,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);
  var showSuffixIcon = !!suffixIcon || loading;
  var arrowNode;
  if (showSuffixIcon) {
    arrowNode = /* @__PURE__ */ reactExports.createElement(TransBtn, {
      className: classNames("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: suffixIcon,
      customizeIconProps: {
        loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }
  var onClearMouseDown = function onClearMouseDown2() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 || onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 || _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: "clear",
      values: displayValues
    });
    onInternalSearch("", false, false);
  };
  var _useAllowClear = useAllowClear(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon, disabled, mergedSearchValue, mode), mergedAllowClear = _useAllowClear.allowClear, clearNode = _useAllowClear.clearIcon;
  var optionList = /* @__PURE__ */ reactExports.createElement(OptionList3, {
    ref: listRef
  });
  var mergedClassName = classNames(prefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-focused"), mockFocused), "".concat(prefixCls, "-multiple"), multiple), "".concat(prefixCls, "-single"), !multiple), "".concat(prefixCls, "-allow-clear"), allowClear), "".concat(prefixCls, "-show-arrow"), showSuffixIcon), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-open"), mergedOpen), "".concat(prefixCls, "-customize-input"), customizeInputElement), "".concat(prefixCls, "-show-search"), mergedShowSearch));
  var selectorNode = /* @__PURE__ */ reactExports.createElement(RefSelectTrigger, {
    ref: triggerRef,
    disabled,
    prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    animation,
    transitionName,
    dropdownStyle,
    dropdownClassName,
    direction,
    dropdownMatchSelectWidth,
    dropdownRender,
    dropdownAlign,
    placement,
    builtinPlacements,
    getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode(node) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        selectorDomRef.current || node
      );
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter
  }, customizeRawInputElement ? /* @__PURE__ */ reactExports.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /* @__PURE__ */ reactExports.createElement(ForwardSelector, _extends({}, props, {
    domRef: selectorDomRef,
    prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id,
    showSearch: mergedShowSearch,
    autoClearSearchValue,
    mode,
    activeDescendantId,
    tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen,
    activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter
  })));
  var renderNode;
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /* @__PURE__ */ reactExports.createElement("div", _extends({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), /* @__PURE__ */ reactExports.createElement(Polite, {
      visible: mockFocused && !mergedOpen,
      values: displayValues
    }), selectorNode, arrowNode, mergedAllowClear && clearNode);
  }
  return /* @__PURE__ */ reactExports.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
});
var OptGroup = function OptGroup2() {
  return null;
};
OptGroup.isSelectOptGroup = true;
var Option = function Option2() {
  return null;
};
Option.isSelectOption = true;
var Filler = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var height = _ref.height, offsetY = _ref.offsetY, offsetX = _ref.offsetX, children = _ref.children, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize, innerProps = _ref.innerProps, rtl = _ref.rtl, extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offsetY !== void 0) {
    outerStyle = {
      height,
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      transform: "translateY(".concat(offsetY, "px)")
    }, rtl ? "marginRight" : "marginLeft", -offsetX), "position", "absolute"), "left", 0), "right", 0), "top", 0));
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    style: outerStyle
  }, /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /* @__PURE__ */ reactExports.createElement("div", _extends({
    style: innerStyle,
    className: classNames(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref
  }, innerProps), children, extra)));
});
Filler.displayName = "Filler";
function Item$2(_ref) {
  var children = _ref.children, setRef = _ref.setRef;
  var refFunc = reactExports.useCallback(function(node) {
    setRef(node);
  }, []);
  return /* @__PURE__ */ reactExports.cloneElement(children, {
    ref: refFunc
  });
}
function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      },
      offsetX
    });
    var key = getKey2(item);
    return /* @__PURE__ */ reactExports.createElement(Item$2, {
      key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
function findListDiffIndex(originList, targetList, getKey2) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== void 0) {
      return getKey2(item);
    }
    return notExistKey;
  }
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple
  };
}
function useDiffItem(data, getKey2, onDiff) {
  var _React$useState = reactExports.useState(data), _React$useState2 = _slicedToArray(_React$useState, 2), prevData = _React$useState2[0], setPrevData = _React$useState2[1];
  var _React$useState3 = reactExports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), diffItem = _React$useState4[0], setDiffItem = _React$useState4[1];
  reactExports.useEffect(function() {
    var diff = findListDiffIndex(prevData || [], data || [], getKey2);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== void 0) {
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const useOriginScroll = function(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight) {
  var lockRef = reactExports.useRef(false);
  var lockTimeoutRef = reactExports.useRef(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function() {
      lockRef.current = false;
    }, 50);
  }
  var scrollPingRef = reactExports.useRef({
    top: isScrollAtTop,
    bottom: isScrollAtBottom,
    left: isScrollAtLeft,
    right: isScrollAtRight
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  scrollPingRef.current.left = isScrollAtLeft;
  scrollPingRef.current.right = isScrollAtRight;
  return function(isHorizontal, delta) {
    var smoothOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var originScroll = isHorizontal ? (
      // Pass origin wheel when on the left
      delta < 0 && scrollPingRef.current.left || // Pass origin wheel when on the right
      delta > 0 && scrollPingRef.current.right
    ) : delta < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
    delta > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, horizontalScroll, onWheelDelta) {
  var offsetRef = reactExports.useRef(0);
  var nextFrameRef = reactExports.useRef(null);
  var wheelValueRef = reactExports.useRef(null);
  var isMouseScrollRef = reactExports.useRef(false);
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
  function onWheelY(event, deltaY) {
    wrapperRaf.cancel(nextFrameRef.current);
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    if (originScroll(false, deltaY)) return;
    if (!isFF) {
      event.preventDefault();
    }
    nextFrameRef.current = wrapperRaf(function() {
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFF) {
      event.preventDefault();
    }
  }
  var wheelDirectionRef = reactExports.useRef(null);
  var wheelDirectionCleanRef = reactExports.useRef(null);
  function onWheel(event) {
    if (!inVirtual) return;
    wrapperRaf.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = wrapperRaf(function() {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX, deltaY = event.deltaY, shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === "sx" || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = "sx";
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? "x" : "y";
    }
    if (wheelDirectionRef.current === "y") {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
function useGetSize(mergedData, getKey2, heights, itemHeight) {
  var _React$useMemo = reactExports.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [mergedData, heights.id, itemHeight]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), key2Index = _React$useMemo2[0], bottomList = _React$useMemo2[1];
  var getSize = function getSize2(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startKey;
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);
    if (startIndex === void 0 || endIndex === void 0) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey2(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== void 0 && endIndex !== void 0) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}
var CacheMap = /* @__PURE__ */ function() {
  function CacheMap2() {
    _classCallCheck(this, CacheMap2);
    _defineProperty(this, "maps", void 0);
    _defineProperty(this, "id", 0);
    this.maps = /* @__PURE__ */ Object.create(null);
  }
  _createClass(CacheMap2, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
      this.id += 1;
    }
  }, {
    key: "get",
    value: function get2(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap2;
}();
function useHeights(getKey2, onItemAdd, onItemRemove) {
  var _React$useState = reactExports.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), updatedMark = _React$useState2[0], setUpdatedMark = _React$useState2[1];
  var instanceRef = reactExports.useRef(/* @__PURE__ */ new Map());
  var heightsRef = reactExports.useRef(new CacheMap());
  var collectRafRef = reactExports.useRef();
  function cancelRaf() {
    wrapperRaf.cancel(collectRafRef.current);
  }
  function collectHeight() {
    var sync = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    cancelRaf();
    var doCollect = function doCollect2() {
      instanceRef.current.forEach(function(element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      setUpdatedMark(function(c) {
        return c + 1;
      });
    };
    if (sync) {
      doCollect();
    } else {
      collectRafRef.current = wrapperRaf(doCollect);
    }
  }
  function setInstanceRef(item, instance) {
    var key = getKey2(item);
    instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
  }
  reactExports.useEffect(function() {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = reactExports.useRef(false);
  var touchXRef = reactExports.useRef(0);
  var touchYRef = reactExports.useRef(0);
  var elementRef = reactExports.useRef(null);
  var intervalRef = reactExports.useRef(null);
  var cleanUpEvents;
  var onTouchMove = function onTouchMove2(e) {
    if (touchedRef.current) {
      var currentX = Math.ceil(e.touches[0].pageX);
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetX = touchXRef.current - currentX;
      var offsetY = touchYRef.current - currentY;
      var _isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
      if (_isHorizontal) {
        touchXRef.current = currentX;
      } else {
        touchYRef.current = currentY;
      }
      if (callback(_isHorizontal, _isHorizontal ? offsetX : offsetY)) {
        e.preventDefault();
      }
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function() {
        if (_isHorizontal) {
          offsetX *= SMOOTH_PTG;
        } else {
          offsetY *= SMOOTH_PTG;
        }
        var offset2 = Math.floor(_isHorizontal ? offsetX : offsetY);
        if (!callback(_isHorizontal, offset2, true) || Math.abs(offset2) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchXRef.current = Math.ceil(e.touches[0].pageX);
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener("touchmove", onTouchMove, {
        passive: false
      });
      elementRef.current.addEventListener("touchend", onTouchEnd, {
        passive: true
      });
    }
  };
  cleanUpEvents = function cleanUpEvents2() {
    if (elementRef.current) {
      elementRef.current.removeEventListener("touchmove", onTouchMove);
      elementRef.current.removeEventListener("touchend", onTouchEnd);
    }
  };
  useLayoutEffect$1(function() {
    if (inVirtual) {
      listRef.current.addEventListener("touchstart", onTouchStart, {
        passive: true
      });
    }
    return function() {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener("touchstart", onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = reactExports.useRef();
  var _React$useState = reactExports.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), syncState = _React$useState2[0], setSyncState = _React$useState2[1];
  useLayoutEffect$1(function() {
    if (syncState && syncState.times < MAX_TIMES) {
      if (!containerRef.current) {
        setSyncState(function(ori) {
          return _objectSpread2({}, ori);
        });
        return;
      }
      collectHeight();
      var targetAlign = syncState.targetAlign, originAlign = syncState.originAlign, index = syncState.index, offset2 = syncState.offset;
      var height = containerRef.current.clientHeight;
      var needCollectHeight = false;
      var newTargetAlign = targetAlign;
      var targetTop = null;
      if (height) {
        var mergedAlign = targetAlign || originAlign;
        var stackTop = 0;
        var itemTop = 0;
        var itemBottom = 0;
        var maxLen = Math.min(data.length - 1, index);
        for (var i = 0; i <= maxLen; i += 1) {
          var key = getKey2(data[i]);
          itemTop = stackTop;
          var cacheHeight = heights.get(key);
          itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
          stackTop = itemBottom;
        }
        var leftHeight = mergedAlign === "top" ? offset2 : height - offset2;
        for (var _i = maxLen; _i >= 0; _i -= 1) {
          var _key = getKey2(data[_i]);
          var _cacheHeight = heights.get(_key);
          if (_cacheHeight === void 0) {
            needCollectHeight = true;
            break;
          }
          leftHeight -= _cacheHeight;
          if (leftHeight <= 0) {
            break;
          }
        }
        switch (mergedAlign) {
          case "top":
            targetTop = itemTop - offset2;
            break;
          case "bottom":
            targetTop = itemBottom - height + offset2;
            break;
          default: {
            var scrollTop = containerRef.current.scrollTop;
            var scrollBottom = scrollTop + height;
            if (itemTop < scrollTop) {
              newTargetAlign = "top";
            } else if (itemBottom > scrollBottom) {
              newTargetAlign = "bottom";
            }
          }
        }
        if (targetTop !== null) {
          syncScrollTop(targetTop);
        }
        if (targetTop !== syncState.lastTop) {
          needCollectHeight = true;
        }
      }
      if (needCollectHeight) {
        setSyncState(_objectSpread2(_objectSpread2({}, syncState), {}, {
          times: syncState.times + 1,
          targetAlign: newTargetAlign,
          lastTop: targetTop
        }));
      }
    }
  }, [syncState, containerRef.current]);
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scrollRef.current);
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === "object") {
      var index;
      var align = arg.align;
      if ("index" in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset2 = _arg$offset === void 0 ? 0 : _arg$offset;
      setSyncState({
        times: 0,
        index,
        offset: offset2,
        originAlign: align
      });
    }
  };
}
function getPageXY(e, horizontal) {
  var obj = "touches" in e ? e.touches[0] : e;
  return obj[horizontal ? "pageX" : "pageY"];
}
var ScrollBar = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, rtl = props.rtl, scrollOffset = props.scrollOffset, scrollRange = props.scrollRange, onStartMove = props.onStartMove, onStopMove = props.onStopMove, onScroll = props.onScroll, horizontal = props.horizontal, spinSize = props.spinSize, containerSize = props.containerSize, style = props.style, propsThumbStyle = props.thumbStyle;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), dragging = _React$useState2[0], setDragging = _React$useState2[1];
  var _React$useState3 = reactExports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), pageXY = _React$useState4[0], setPageXY = _React$useState4[1];
  var _React$useState5 = reactExports.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), startTop = _React$useState6[0], setStartTop = _React$useState6[1];
  var isLTR = !rtl;
  var scrollbarRef = reactExports.useRef();
  var thumbRef = reactExports.useRef();
  var _React$useState7 = reactExports.useState(false), _React$useState8 = _slicedToArray(_React$useState7, 2), visible = _React$useState8[0], setVisible = _React$useState8[1];
  var visibleTimeoutRef = reactExports.useRef();
  var delayHidden = function delayHidden2() {
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function() {
      setVisible(false);
    }, 3e3);
  };
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;
  var top = reactExports.useMemo(function() {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);
  var onContainerMouseDown = function onContainerMouseDown2(e) {
    e.stopPropagation();
    e.preventDefault();
  };
  var stateRef = reactExports.useRef({
    top,
    dragging,
    pageY: pageXY,
    startTop
  });
  stateRef.current = {
    top,
    dragging,
    pageY: pageXY,
    startTop
  };
  var onThumbMouseDown = function onThumbMouseDown2(e) {
    setDragging(true);
    setPageXY(getPageXY(e, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e.stopPropagation();
    e.preventDefault();
  };
  reactExports.useEffect(function() {
    var onScrollbarTouchStart = function onScrollbarTouchStart2(e) {
      e.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener("touchstart", onScrollbarTouchStart, {
      passive: false
    });
    thumbEle.addEventListener("touchstart", onThumbMouseDown, {
      passive: false
    });
    return function() {
      scrollbarEle.removeEventListener("touchstart", onScrollbarTouchStart);
      thumbEle.removeEventListener("touchstart", onThumbMouseDown);
    };
  }, []);
  var enableScrollRangeRef = reactExports.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = reactExports.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  reactExports.useEffect(function() {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove2(e) {
        var _stateRef$current = stateRef.current, stateDragging = _stateRef$current.dragging, statePageY = _stateRef$current.pageY, stateStartTop = _stateRef$current.startTop;
        wrapperRaf.cancel(moveRafId);
        var rect = scrollbarRef.current.getBoundingClientRect();
        var scale = containerSize / (horizontal ? rect.width : rect.height);
        if (stateDragging) {
          var offset2 = (getPageXY(e, horizontal) - statePageY) * scale;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset2;
          } else {
            newTop += offset2;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = wrapperRaf(function() {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp2() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener("mousemove", onMouseMove, {
        passive: true
      });
      window.addEventListener("touchmove", onMouseMove, {
        passive: true
      });
      window.addEventListener("mouseup", onMouseUp, {
        passive: true
      });
      window.addEventListener("touchend", onMouseUp, {
        passive: true
      });
      return function() {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("touchend", onMouseUp);
        wrapperRaf.cancel(moveRafId);
      };
    }
  }, [dragging]);
  reactExports.useEffect(function() {
    delayHidden();
    return function() {
      clearTimeout(visibleTimeoutRef.current);
    };
  }, [scrollOffset]);
  reactExports.useImperativeHandle(ref, function() {
    return {
      delayHidden
    };
  });
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: "absolute",
    visibility: visible ? null : "hidden"
  };
  var thumbStyle = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  if (horizontal) {
    containerStyle.height = 8;
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;
    thumbStyle.height = "100%";
    thumbStyle.width = spinSize;
    if (isLTR) {
      thumbStyle.left = top;
    } else {
      thumbStyle.right = top;
    }
  } else {
    containerStyle.width = 8;
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    if (isLTR) {
      containerStyle.right = 0;
    } else {
      containerStyle.left = 0;
    }
    thumbStyle.width = "100%";
    thumbStyle.height = spinSize;
    thumbStyle.top = top;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: scrollbarRef,
    className: classNames(scrollbarPrefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
    style: _objectSpread2(_objectSpread2({}, containerStyle), style),
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ref: thumbRef,
    className: classNames("".concat(scrollbarPrefixCls, "-thumb"), _defineProperty({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: _objectSpread2(_objectSpread2({}, thumbStyle), propsThumbStyle),
    onMouseDown: onThumbMouseDown
  }));
});
var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * containerSize;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  return Math.floor(baseSize);
}
var _excluded$e = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"];
var EMPTY_DATA$1 = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-virtual-list" : _props$prefixCls, className = props.className, height = props.height, itemHeight = props.itemHeight, _props$fullHeight = props.fullHeight, fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight, style = props.style, data = props.data, children = props.children, itemKey2 = props.itemKey, virtual = props.virtual, direction = props.direction, scrollWidth = props.scrollWidth, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, onScroll = props.onScroll, onVirtualScroll = props.onVirtualScroll, onVisibleChange = props.onVisibleChange, innerProps = props.innerProps, extraRender = props.extraRender, styles = props.styles, restProps = _objectWithoutProperties(props, _excluded$e);
  var getKey2 = reactExports.useCallback(function(item) {
    if (typeof itemKey2 === "function") {
      return itemKey2(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey2];
  }, [itemKey2]);
  var _useHeights = useHeights(getKey2), _useHeights2 = _slicedToArray(_useHeights, 4), setInstanceRef = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], heightUpdatedMark = _useHeights2[3];
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var containerHeight = reactExports.useMemo(function() {
    return Object.values(heights.maps).reduce(function(total, curr) {
      return total + curr;
    }, 0);
  }, [heights.id, heights.maps]);
  var inVirtual = useVirtual && data && (Math.max(itemHeight * data.length, containerHeight) > height || !!scrollWidth);
  var isRTL = direction === "rtl";
  var mergedClassName = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA$1;
  var componentRef = reactExports.useRef();
  var fillerInnerRef = reactExports.useRef();
  var containerRef = reactExports.useRef();
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray(_useState, 2), offsetTop = _useState2[0], setOffsetTop = _useState2[1];
  var _useState3 = reactExports.useState(0), _useState4 = _slicedToArray(_useState3, 2), offsetLeft = _useState4[0], setOffsetLeft = _useState4[1];
  var _useState5 = reactExports.useState(false), _useState6 = _slicedToArray(_useState5, 2), scrollMoving = _useState6[0], setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove2() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove2() {
    setScrollMoving(false);
  };
  var sharedConfig = {
    getKey: getKey2
  };
  function syncScrollTop(newTop) {
    setOffsetTop(function(origin) {
      var value;
      if (typeof newTop === "function") {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  var rangeRef = reactExports.useRef({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = reactExports.useRef();
  var _useDiffItem = useDiffItem(mergedData, getKey2), _useDiffItem2 = _slicedToArray(_useDiffItem, 1), diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  var _React$useMemo = reactExports.useMemo(function() {
    if (!useVirtual) {
      return {
        scrollHeight: void 0,
        start: 0,
        end: mergedData.length - 1,
        offset: void 0
      };
    }
    if (!inVirtual) {
      var _fillerInnerRef$curre;
      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: void 0
      };
    }
    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;
    for (var i = 0; i < dataLen; i += 1) {
      var _item = mergedData[i];
      var key = getKey2(_item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
      if (currentItemBottom >= offsetTop && startIndex === void 0) {
        startIndex = i;
        startOffset = itemTop;
      }
      if (currentItemBottom > offsetTop + height && endIndex === void 0) {
        endIndex = i;
      }
      itemTop = currentItemBottom;
    }
    if (startIndex === void 0) {
      startIndex = 0;
      startOffset = 0;
      endIndex = Math.ceil(height / itemHeight);
    }
    if (endIndex === void 0) {
      endIndex = mergedData.length - 1;
    }
    endIndex = Math.min(endIndex + 1, mergedData.length - 1);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]), scrollHeight = _React$useMemo.scrollHeight, start = _React$useMemo.start, end = _React$useMemo.end, fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  var _React$useState = reactExports.useState({
    width: 0,
    height
  }), _React$useState2 = _slicedToArray(_React$useState, 2), size = _React$useState2[0], setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize2(sizeInfo) {
    setSize({
      width: sizeInfo.offsetWidth,
      height: sizeInfo.offsetHeight
    });
  };
  var verticalScrollBarRef = reactExports.useRef();
  var horizontalScrollBarRef = reactExports.useRef();
  var horizontalScrollBarSpinSize = reactExports.useMemo(function() {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = reactExports.useMemo(function() {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = reactExports.useRef(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var isScrollAtLeft = offsetLeft <= 0;
  var isScrollAtRight = offsetLeft >= scrollWidth;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
  var getVirtualScrollInfo = function getVirtualScrollInfo2() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = reactExports.useRef(getVirtualScrollInfo());
  var triggerScroll = useEvent(function(params) {
    if (onVirtualScroll) {
      var nextInfo = _objectSpread2(_objectSpread2({}, getVirtualScrollInfo()), params);
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      reactDomExports.flushSync(function() {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }
    onScroll === null || onScroll === void 0 || onScroll(e);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange2(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = !!scrollWidth ? scrollWidth - size.width : 0;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = useEvent(function(offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      reactDomExports.flushSync(function() {
        setOffsetLeft(function(left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function(top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, !!scrollWidth, onWheelDelta), _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
  useMobileTouchMove(useVirtual, componentRef, function(isHorizontal, delta, smoothOffset) {
    if (originScroll(isHorizontal, delta, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {
      },
      deltaX: isHorizontal ? delta : 0,
      deltaY: isHorizontal ? 0 : delta
    });
    return true;
  });
  useLayoutEffect$1(function() {
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener("wheel", onRawWheel, {
      passive: false
    });
    componentEle.addEventListener("DOMMouseScroll", onFireFoxScroll, {
      passive: true
    });
    componentEle.addEventListener("MozMousePixelScroll", onMozMousePixelScroll, {
      passive: false
    });
    return function() {
      componentEle.removeEventListener("wheel", onRawWheel);
      componentEle.removeEventListener("DOMMouseScroll", onFireFoxScroll);
      componentEle.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
    };
  }, [useVirtual]);
  useLayoutEffect$1(function() {
    if (scrollWidth) {
      var newOffsetLeft = keepInHorizontalRange(offsetLeft);
      setOffsetLeft(newOffsetLeft);
      triggerScroll({
        x: newOffsetLeft
      });
    }
  }, [size.width, scrollWidth]);
  var delayHideScrollBar = function delayHideScrollBar2() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey2, function() {
    return collectHeight(true);
  }, syncScrollTop, delayHideScrollBar);
  reactExports.useImperativeHandle(ref, function() {
    return {
      nativeElement: containerRef.current,
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo2(config) {
        function isPosScroll(arg) {
          return arg && _typeof(arg) === "object" && ("left" in arg || "top" in arg);
        }
        if (isPosScroll(config)) {
          if (config.left !== void 0) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });
  useLayoutEffect$1(function() {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  var getSize = useGetSize(mergedData, getKey2, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start,
    end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize
  });
  var listChildren = useChildren(mergedData, start, end, scrollWidth, offsetLeft, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(_defineProperty({}, fullHeight ? "height" : "maxHeight", height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = "hidden";
      if (scrollWidth) {
        componentStyle.overflowX = "hidden";
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = "none";
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = "rtl";
  }
  return /* @__PURE__ */ reactExports.createElement("div", _extends({
    ref: containerRef,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      position: "relative"
    }),
    className: mergedClassName
  }, containerProps, restProps), /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: onHolderResize
  }, /* @__PURE__ */ reactExports.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /* @__PURE__ */ reactExports.createElement(Filler, {
    prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /* @__PURE__ */ reactExports.createElement(ScrollBar, {
    ref: verticalScrollBarRef,
    prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height,
    style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb
  }), inVirtual && scrollWidth > size.width && /* @__PURE__ */ reactExports.createElement(ScrollBar, {
    ref: horizontalScrollBarRef,
    prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true,
    style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb
  }));
}
var List$1 = /* @__PURE__ */ reactExports.forwardRef(RawList);
List$1.displayName = "List";
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var _excluded$d = ["disabled", "title", "children", "style", "className"];
function isTitleType(content) {
  return typeof content === "string" || typeof content === "number";
}
var OptionList = function OptionList2(_, ref) {
  var _useBaseProps = useBaseProps(), prefixCls = _useBaseProps.prefixCls, id = _useBaseProps.id, open = _useBaseProps.open, multiple = _useBaseProps.multiple, mode = _useBaseProps.mode, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, notFoundContent = _useBaseProps.notFoundContent, onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = reactExports.useContext(SelectContext), maxCount = _React$useContext.maxCount, flattenOptions2 = _React$useContext.flattenOptions, onActiveValue = _React$useContext.onActiveValue, defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption, onSelect = _React$useContext.onSelect, menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon, rawValues = _React$useContext.rawValues, fieldNames = _React$useContext.fieldNames, virtual = _React$useContext.virtual, direction = _React$useContext.direction, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight, optionRender = _React$useContext.optionRender;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = useMemo(function() {
    return flattenOptions2;
  }, [open, flattenOptions2], function(prev, next) {
    return next[0] && prev[1] !== next[1];
  });
  var listRef = reactExports.useRef(null);
  var overMaxCount = reactExports.useMemo(function() {
    return multiple && isValidCount(maxCount) && (rawValues === null || rawValues === void 0 ? void 0 : rawValues.size) >= maxCount;
  }, [multiple, maxCount, rawValues === null || rawValues === void 0 ? void 0 : rawValues.size]);
  var onListMouseDown = function onListMouseDown2(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView2(args) {
    var _listRef$current;
    (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.scrollTo(typeof args === "number" ? {
      index: args
    } : args);
  };
  var getEnabledActiveIndex = function getEnabledActiveIndex2(index) {
    var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset2 + len) % len;
      var _ref = memoFlattenOptions[current] || {}, group = _ref.group, data = _ref.data;
      if (!group && !(data !== null && data !== void 0 && data.disabled) && !overMaxCount) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = reactExports.useState(function() {
    return getEnabledActiveIndex(0);
  }), _React$useState2 = _slicedToArray(_React$useState, 2), activeIndex = _React$useState2[0], setActiveIndex = _React$useState2[1];
  var setActive = function setActive2(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? "keyboard" : "mouse"
    };
    var flattenItem = memoFlattenOptions[index];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index, info);
  };
  reactExports.useEffect(function() {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]);
  var isSelected = reactExports.useCallback(function(value) {
    return rawValues.has(value) && mode !== "combobox";
  }, [mode, _toConsumableArray(rawValues).toString(), rawValues.size]);
  reactExports.useEffect(function() {
    var timeoutId = setTimeout(function() {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function(_ref2) {
          var data = _ref2.data;
          return data.value === value;
        });
        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    });
    if (open) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue]);
  var onSelectValue = function onSelectValue2(value) {
    if (value !== void 0) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }
    if (!multiple) {
      toggleOpen(false);
    }
  };
  reactExports.useImperativeHandle(ref, function() {
    return {
      onKeyDown: function onKeyDown2(event) {
        var which = event.which, ctrlKey = event.ctrlKey;
        switch (which) {
          case KeyCode.N:
          case KeyCode.P:
          case KeyCode.UP:
          case KeyCode.DOWN: {
            var offset2 = 0;
            if (which === KeyCode.UP) {
              offset2 = -1;
            } else if (which === KeyCode.DOWN) {
              offset2 = 1;
            } else if (isPlatformMac() && ctrlKey) {
              if (which === KeyCode.N) {
                offset2 = 1;
              } else if (which === KeyCode.P) {
                offset2 = -1;
              }
            }
            if (offset2 !== 0) {
              var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset2, offset2);
              scrollIntoView(nextActiveIndex);
              setActive(nextActiveIndex, true);
            }
            break;
          }
          case KeyCode.ENTER: {
            var _item$data;
            var item = memoFlattenOptions[activeIndex];
            if (item && !(item !== null && item !== void 0 && (_item$data = item.data) !== null && _item$data !== void 0 && _item$data.disabled) && !overMaxCount) {
              onSelectValue(item.value);
            } else {
              onSelectValue(void 0);
            }
            if (open) {
              event.preventDefault();
            }
            break;
          }
          case KeyCode.ESC: {
            toggleOpen(false);
            if (open) {
              event.stopPropagation();
            }
          }
        }
      },
      onKeyUp: function onKeyUp() {
      },
      scrollTo: function scrollTo2(index) {
        scrollIntoView(index);
      }
    };
  });
  if (memoFlattenOptions.length === 0) {
    return /* @__PURE__ */ reactExports.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel2(item) {
    return item.label;
  };
  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? "presentation" : "option",
      id: "".concat(id, "_list_").concat(index)
    };
  }
  var renderItem = function renderItem2(index) {
    var item = memoFlattenOptions[index];
    if (!item) {
      return null;
    }
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /* @__PURE__ */ reactExports.createElement("div", _extends({
      "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };
  var a11yProps = {
    role: "listbox",
    id: "".concat(id, "_list")
  };
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, virtual && /* @__PURE__ */ reactExports.createElement("div", _extends({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /* @__PURE__ */ reactExports.createElement(List$1, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual,
    direction,
    innerProps: virtual ? null : a11yProps
  }, function(item, itemIndex) {
    var group = item.group, groupOption = item.groupOption, data = item.data, label = item.label, value = item.value;
    var key = data.key;
    if (group) {
      var _data$title;
      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : void 0;
      return /* @__PURE__ */ reactExports.createElement("div", {
        className: classNames(itemPrefixCls, "".concat(itemPrefixCls, "-group"), data.className),
        title: groupTitle
      }, label !== void 0 ? label : key);
    }
    var disabled = data.disabled, title = data.title;
    data.children;
    var style = data.style, className = data.className, otherProps = _objectWithoutProperties(data, _excluded$d);
    var passedProps = omit(otherProps, omitFieldNameList);
    var selected = isSelected(value);
    var mergedDisabled = disabled || !selected && overMaxCount;
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classNames(itemPrefixCls, optionPrefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(optionPrefixCls, "-grouped"), groupOption), "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !mergedDisabled), "".concat(optionPrefixCls, "-disabled"), mergedDisabled), "".concat(optionPrefixCls, "-selected"), selected));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
    var content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
    var optionTitle = isTitleType(content) ? content.toString() : void 0;
    if (title !== void 0) {
      optionTitle = title;
    }
    return /* @__PURE__ */ reactExports.createElement("div", _extends({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || mergedDisabled) {
          return;
        }
        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!mergedDisabled) {
          onSelectValue(value);
        }
      },
      style
    }), /* @__PURE__ */ reactExports.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, typeof optionRender === "function" ? optionRender(item, {
      index: itemIndex
    }) : content), /* @__PURE__ */ reactExports.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /* @__PURE__ */ reactExports.createElement(TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        value,
        disabled: mergedDisabled,
        isSelected: selected
      }
    }, selected ? "✓" : null));
  }));
};
var RefOptionList = /* @__PURE__ */ reactExports.forwardRef(OptionList);
const useCache = function(labeledValues, valueOptions) {
  var cacheRef = reactExports.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  var filledLabeledValues = reactExports.useMemo(function() {
    var _cacheRef$current = cacheRef.current, prevValueCache = _cacheRef$current.values, prevOptionCache = _cacheRef$current.options;
    var patchedValues = labeledValues.map(function(item) {
      if (item.label === void 0) {
        var _prevValueCache$get;
        return _objectSpread2(_objectSpread2({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });
    var valueCache = /* @__PURE__ */ new Map();
    var optionCache = /* @__PURE__ */ new Map();
    patchedValues.forEach(function(item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = reactExports.useCallback(function(val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
};
function includes(test, search) {
  return toArray$1(test).join("").toUpperCase().includes(search);
}
const useFilterOptions = function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return reactExports.useMemo(function() {
    if (!searchValue || filterOption === false) {
      return options;
    }
    var fieldOptions = fieldNames.options, fieldLabel = fieldNames.label, fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === "function";
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function(_, option) {
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      }
      if (option[fieldOptions]) {
        return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function(opt) {
      return injectPropsWithOption(opt);
    } : function(opt) {
      return opt;
    };
    options.forEach(function(item) {
      if (item[fieldOptions]) {
        var matchGroup = filterFunc(searchValue, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          var subOptions = item[fieldOptions].filter(function(subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_objectSpread2(_objectSpread2({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
};
var uuid = 0;
var isBrowserClient = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId(id) {
  var _React$useState = reactExports.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
  reactExports.useEffect(function() {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
var _excluded$c = ["children", "value"], _excluded2$1 = ["children"];
function convertNodeToOption(node) {
  var _ref = node, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = _objectWithoutProperties(_ref$props, _excluded$c);
  return _objectSpread2({
    key,
    value: value !== void 0 ? value : key,
    children
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return toArray$2(nodes).map(function(node, index) {
    if (!/* @__PURE__ */ reactExports.isValidElement(node) || !node.type) {
      return null;
    }
    var _ref2 = node, isSelectOptGroup = _ref2.type.isSelectOptGroup, key = _ref2.key, _ref2$props = _ref2.props, children = _ref2$props.children, restProps = _objectWithoutProperties(_ref2$props, _excluded2$1);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return _objectSpread2(_objectSpread2({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function(data) {
    return data;
  });
}
var useOptions = function useOptions2(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return reactExports.useMemo(function() {
    var mergedOptions = options;
    var childrenAsData = !options;
    if (childrenAsData) {
      mergedOptions = convertChildrenToData(children);
    }
    var valueOptions = /* @__PURE__ */ new Map();
    var labelOptions = /* @__PURE__ */ new Map();
    var setLabelOptions = function setLabelOptions2(labelOptionsMap, option, key) {
      if (key && typeof key === "string") {
        labelOptionsMap.set(option[key], option);
      }
    };
    var dig = function dig2(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label);
          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig2(option[fieldNames.options], true);
        }
      }
    };
    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions,
      labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
};
function useRefFunc(callback) {
  var funcRef = reactExports.useRef();
  funcRef.current = callback;
  var cacheFn = reactExports.useCallback(function() {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
var _excluded$b = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"];
var OMIT_DOM_PROPS = ["inputValue"];
function isRawValue(value) {
  return !value || _typeof(value) !== "object";
}
var Select$1 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var id = props.id, mode = props.mode, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-select" : _props$prefixCls, backfill = props.backfill, fieldNames = props.fieldNames, inputValue = props.inputValue, searchValue = props.searchValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc, onSelect = props.onSelect, onDeselect = props.onDeselect, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS, filterOption = props.filterOption, filterSort = props.filterSort, optionFilterProp = props.optionFilterProp, optionLabelProp = props.optionLabelProp, options = props.options, optionRender = props.optionRender, children = props.children, defaultActiveFirstOption = props.defaultActiveFirstOption, menuItemSelectedIcon = props.menuItemSelectedIcon, virtual = props.virtual, direction = props.direction, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, labelRender = props.labelRender, value = props.value, defaultValue = props.defaultValue, labelInValue = props.labelInValue, onChange = props.onChange, maxCount = props.maxCount, restProps = _objectWithoutProperties(props, _excluded$b);
  var mergedId = useId(id);
  var multiple = isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = reactExports.useMemo(function() {
    if (filterOption === void 0 && mode === "combobox") {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);
  var mergedFieldNames = reactExports.useMemo(
    function() {
      return fillFieldNames$1(fieldNames, childrenAsData);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(fieldNames),
      childrenAsData
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  );
  var _useMergedState = useMergedState("", {
    value: searchValue !== void 0 ? searchValue : inputValue,
    postState: function postState(search) {
      return search || "";
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
  var convert2LabelValues = reactExports.useCallback(function(draftValues) {
    var valueList = toArray$1(draftValues);
    return valueList.map(function(val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option = valueOptions.get(rawValue);
      if (option) {
        var _option$key;
        if (rawLabel === void 0) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === void 0) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title;
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);
  var _useMergedState3 = useMergedState(defaultValue, {
    value
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
  var rawLabeledValues = reactExports.useMemo(function() {
    var _values$;
    var newInternalValue = multiple && internalValue === null ? [] : internalValue;
    var values = convert2LabelValues(newInternalValue);
    if (mode === "combobox" && isComboNoValue((_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode, multiple]);
  var _useCache = useCache(rawLabeledValues, valueOptions), _useCache2 = _slicedToArray(_useCache, 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
  var displayValues = reactExports.useMemo(function() {
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
        return [];
      }
    }
    return mergedValues.map(function(item) {
      var _ref;
      return _objectSpread2(_objectSpread2({}, item), {}, {
        label: (_ref = typeof labelRender === "function" ? labelRender(item) : item.label) !== null && _ref !== void 0 ? _ref : item.value
      });
    });
  }, [mode, mergedValues, labelRender]);
  var rawValues = reactExports.useMemo(function() {
    return new Set(mergedValues.map(function(val) {
      return val.value;
    }));
  }, [mergedValues]);
  reactExports.useEffect(function() {
    if (mode === "combobox") {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(hasValue(strValue) ? String(strValue) : "");
    }
  }, [mergedValues]);
  var createTagOption = useRefFunc(function(val, label) {
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _defineProperty(_defineProperty({}, mergedFieldNames.value, val), mergedFieldNames.label, mergedLabel);
  });
  var filledTagOptions = reactExports.useMemo(function() {
    if (mode !== "tags") {
      return mergedOptions;
    }
    var cloneOptions = _toConsumableArray(mergedOptions);
    var existOptions = function existOptions2(val) {
      return valueOptions.has(val);
    };
    _toConsumableArray(mergedValues).sort(function(a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function(item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);
  var filledSearchOptions = reactExports.useMemo(function() {
    if (mode !== "tags" || !mergedSearchValue || filteredOptions.some(function(item) {
      return item[optionFilterProp || "value"] === mergedSearchValue;
    })) {
      return filteredOptions;
    }
    if (filteredOptions.some(function(item) {
      return item[mergedFieldNames.value] === mergedSearchValue;
    })) {
      return filteredOptions;
    }
    return [createTagOption(mergedSearchValue)].concat(_toConsumableArray(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue, mergedFieldNames]);
  var orderedFilteredOptions = reactExports.useMemo(function() {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return _toConsumableArray(filledSearchOptions).sort(function(a, b) {
      return filterSort(a, b, {
        searchValue: mergedSearchValue
      });
    });
  }, [filledSearchOptions, filterSort, mergedSearchValue]);
  var displayOptions = reactExports.useMemo(function() {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);
  var triggerChange = function triggerChange2(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && // Trigger event only when value changed
    (labeledValues.length !== mergedValues.length || labeledValues.some(function(newVal, index) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function(v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function(v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange(
        // Value
        multiple ? returnValues : returnValues[0],
        // Option
        multiple ? returnOptions : returnOptions[0]
      );
    }
  };
  var _React$useState = reactExports.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), activeValue = _React$useState2[0], setActiveValue = _React$useState2[1];
  var _React$useState3 = reactExports.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), accessibilityIndex = _React$useState4[0], setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== void 0 ? defaultActiveFirstOption : mode !== "combobox";
  var onActiveValue = reactExports.useCallback(function(active, index) {
    var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$source = _ref3.source, source = _ref3$source === void 0 ? "keyboard" : _ref3$source;
    setAccessibilityIndex(index);
    if (backfill && mode === "combobox" && active !== null && source === "keyboard") {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);
  var triggerSelect = function triggerSelect2(val, selected, type) {
    var getSelectEnt = function getSelectEnt2() {
      var _option$key2;
      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(), _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2), wrappedValue = _getSelectEnt2[0], _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== "clear") {
      var _getSelectEnt3 = getSelectEnt(), _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2), _wrappedValue = _getSelectEnt4[0], _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };
  var onInternalSelect = useRefFunc(function(val, info) {
    var cloneValues;
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat(_toConsumableArray(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function(v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);
    if (mode === "combobox") {
      setActiveValue("");
    } else if (!isMultiple || autoClearSearchValue) {
      setSearchValue("");
      setActiveValue("");
    }
  });
  var onDisplayValuesChange = function onDisplayValuesChange2(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type, values = info.values;
    if (type === "remove" || type === "clear") {
      values.forEach(function(item) {
        triggerSelect(item.value, false, type);
      });
    }
  };
  var onInternalSearch = function onInternalSearch2(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);
    if (info.source === "submit") {
      var formatted = (searchText || "").trim();
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue("");
      }
      return;
    }
    if (info.source !== "blur") {
      if (mode === "combobox") {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 || onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit2(words) {
    var patchValues = words;
    if (mode !== "tags") {
      patchValues = words.map(function(word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function(val) {
        return val !== void 0;
      });
    }
    var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), _toConsumableArray(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function(newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };
  var selectContext = reactExports.useMemo(function() {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return _objectSpread2(_objectSpread2({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon,
      rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      direction,
      listHeight,
      listItemHeight,
      childrenAsData,
      maxCount,
      optionRender
    });
  }, [maxCount, parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, direction, listHeight, listItemHeight, childrenAsData, optionRender]);
  return /* @__PURE__ */ reactExports.createElement(SelectContext.Provider, {
    value: selectContext
  }, /* @__PURE__ */ reactExports.createElement(BaseSelect, _extends({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls,
    ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode,
    displayValues,
    onDisplayValuesChange,
    direction,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth,
    OptionList: RefOptionList,
    emptyOptions: !displayOptions.length,
    activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
var TypedSelect = Select$1;
TypedSelect.Option = Option;
TypedSelect.OptGroup = OptGroup;
const Empty$1 = () => {
  const [, token] = useToken();
  const bgColor = new TinyColor(token.colorBgBase);
  const themeStyle = bgColor.toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ reactExports.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ reactExports.createElement("title", null, "empty image"), /* @__PURE__ */ reactExports.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
const Simple = () => {
  const [, token] = useToken();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = reactExports.useMemo(() => ({
    borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /* @__PURE__ */ reactExports.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ reactExports.createElement("title", null, "Simple Empty"), /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ reactExports.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
const genSharedEmptyStyle = (token) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${componentCls}-description`]: {
        color: token.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token.colorTextDescription,
        [`${componentCls}-description`]: {
          color: token.colorTextDescription
        },
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token.colorTextDescription,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$a = genStyleHooks("Empty", (token) => {
  const {
    componentCls,
    controlHeightLG,
    calc
  } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest$h = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultEmptyImg = /* @__PURE__ */ reactExports.createElement(Empty$1, null);
const simpleEmptyImg = /* @__PURE__ */ reactExports.createElement(Simple, null);
const Empty = (_a) => {
  var {
    className,
    rootClassName,
    prefixCls: customizePrefixCls,
    image = defaultEmptyImg,
    description,
    children,
    imageStyle,
    style
  } = _a, restProps = __rest$h(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls,
    direction,
    empty
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("empty", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$a(prefixCls);
  const [locale2] = useLocale("Empty");
  const des = typeof description !== "undefined" ? description : locale2 === null || locale2 === void 0 ? void 0 : locale2.description;
  const alt = typeof des === "string" ? des : "empty";
  let imageNode = null;
  if (typeof image === "string") {
    imageNode = /* @__PURE__ */ reactExports.createElement("img", {
      alt,
      src: image
    });
  } else {
    imageNode = image;
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({
    className: classNames(hashId, cssVarCls, prefixCls, empty === null || empty === void 0 ? void 0 : empty.className, {
      [`${prefixCls}-normal`]: image === simpleEmptyImg,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName),
    style: Object.assign(Object.assign({}, empty === null || empty === void 0 ? void 0 : empty.style), style)
  }, restProps), /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-image`,
    style: imageStyle
  }, imageNode), des && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-description`
  }, des), children && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-footer`
  }, children)));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
const DefaultRenderEmpty = (props) => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefix = getPrefixCls("empty");
  switch (componentName) {
    case "Table":
    case "List":
      return /* @__PURE__ */ React.createElement(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ React.createElement(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    case "Table.filter":
      return null;
    default:
      return /* @__PURE__ */ React.createElement(Empty, null);
  }
};
const getBuiltInPlacements = (popupOverflow) => {
  const htmlRegion = popupOverflow === "scroll" ? "scroll" : "visible";
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion,
    dynamicInset: true
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function mergedBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || getBuiltInPlacements(popupOverflow);
}
const genItemStyle = (token) => {
  const {
    optionHeight,
    optionFontSize,
    optionLineHeight,
    optionPadding
  } = token;
  return {
    position: "relative",
    display: "block",
    minHeight: optionHeight,
    padding: optionPadding,
    color: token.colorText,
    fontWeight: "normal",
    fontSize: optionFontSize,
    lineHeight: optionLineHeight,
    boxSizing: "border-box"
  };
};
const genSingleStyle$1 = (token) => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  const slideUpEnterActive = `&${antCls}-slide-up-enter${antCls}-slide-up-enter-active`;
  const slideUpAppearActive = `&${antCls}-slide-up-appear${antCls}-slide-up-appear-active`;
  const slideUpLeaveActive = `&${antCls}-slide-up-leave${antCls}-slide-up-leave-active`;
  const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
  return [
    {
      [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, resetComponent(token)), {
        position: "absolute",
        top: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: "border-box",
        padding: token.paddingXXS,
        overflow: "hidden",
        fontSize: token.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
          animationName: slideUpIn
        },
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownIn
        },
        [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
          animationName: slideUpOut
        },
        [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownOut
        },
        "&-hidden": {
          display: "none"
        },
        [selectItemCls]: Object.assign(Object.assign({}, genItemStyle(token)), {
          cursor: "pointer",
          transition: `background ${token.motionDurationSlow} ease`,
          borderRadius: token.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, textEllipsis),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token.optionActiveBg
            },
            [`&-selected:not(${selectItemCls}-option-disabled)`]: {
              color: token.optionSelectedColor,
              fontWeight: token.optionSelectedFontWeight,
              backgroundColor: token.optionSelectedBg,
              [`${selectItemCls}-option-state`]: {
                color: token.colorPrimary
              },
              [`&:has(+ ${selectItemCls}-option-selected:not(${selectItemCls}-option-disabled))`]: {
                borderEndStartRadius: 0,
                borderEndEndRadius: 0,
                [`& + ${selectItemCls}-option-selected:not(${selectItemCls}-option-disabled)`]: {
                  borderStartStartRadius: 0,
                  borderStartEndRadius: 0
                }
              }
            },
            "&-disabled": {
              [`&${selectItemCls}-option-selected`]: {
                backgroundColor: token.colorBgContainerDisabled
              },
              color: token.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: token.calc(token.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, genItemStyle(token)), {
            color: token.colorTextDisabled
          })
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const getMultipleSelectorUnit = (token) => {
  const {
    multipleSelectItemHeight,
    paddingXXS,
    lineWidth,
    INTERNAL_FIXED_ITEM_MARGIN
  } = token;
  const basePadding = token.max(token.calc(paddingXXS).sub(lineWidth).equal(), 0);
  const containerPadding = token.max(token.calc(basePadding).sub(INTERNAL_FIXED_ITEM_MARGIN).equal(), 0);
  return {
    basePadding,
    containerPadding,
    itemHeight: unit(multipleSelectItemHeight),
    itemLineHeight: unit(token.calc(multipleSelectItemHeight).sub(token.calc(token.lineWidth).mul(2)).equal())
  };
};
const getSelectItemStyle = (token) => {
  const {
    multipleSelectItemHeight,
    selectHeight,
    lineWidth
  } = token;
  const selectItemDist = token.calc(selectHeight).sub(multipleSelectItemHeight).div(2).sub(lineWidth).equal();
  return selectItemDist;
};
const genOverflowStyle = (token) => {
  const {
    componentCls,
    iconCls,
    borderRadiusSM,
    motionDurationSlow,
    paddingXS,
    multipleItemColorDisabled,
    multipleItemBorderColorDisabled,
    colorIcon,
    colorIconHover,
    INTERNAL_FIXED_ITEM_MARGIN
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [selectOverflowPrefixCls]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        maxWidth: "100%",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${componentCls}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: INTERNAL_FIXED_ITEM_MARGIN,
        borderRadius: borderRadiusSM,
        cursor: "default",
        transition: `font-size ${motionDurationSlow}, line-height ${motionDurationSlow}, height ${motionDurationSlow}`,
        marginInlineEnd: token.calc(INTERNAL_FIXED_ITEM_MARGIN).mul(2).equal(),
        paddingInlineStart: paddingXS,
        paddingInlineEnd: token.calc(paddingXS).div(2).equal(),
        [`${componentCls}-disabled&`]: {
          color: multipleItemColorDisabled,
          borderColor: multipleItemBorderColorDisabled,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: token.calc(paddingXS).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, resetIcon()), {
          display: "inline-flex",
          alignItems: "center",
          color: colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${iconCls}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: colorIconHover
          }
        })
      }
    }
  };
};
const genSelectionStyle$1 = (token, suffix) => {
  const {
    componentCls,
    INTERNAL_FIXED_ITEM_MARGIN
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.multipleSelectItemHeight;
  const selectItemDist = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  const multipleSelectorUnit = getMultipleSelectorUnit(token);
  return {
    [`${componentCls}-multiple${suffixCls}`]: Object.assign(Object.assign({}, genOverflowStyle(token)), {
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: multipleSelectorUnit.basePadding,
        paddingBlock: multipleSelectorUnit.containerPadding,
        borderRadius: token.borderRadius,
        [`${componentCls}-disabled&`]: {
          background: token.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${unit(INTERNAL_FIXED_ITEM_MARGIN)} 0`,
          lineHeight: unit(selectItemHeight),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        height: multipleSelectorUnit.itemHeight,
        lineHeight: unit(multipleSelectorUnit.itemLineHeight)
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${selectOverflowPrefixCls}-item-suffix`]: {
        height: "100%"
      },
      [`${componentCls}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(selectItemDist).equal(),
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: unit(selectItemHeight),
          transition: `all ${token.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${token.motionDurationSlow}`
      }
    })
  };
};
function genSizeStyle$2(token, suffix) {
  const {
    componentCls
  } = token;
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  const rawStyle = {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        [`${componentCls}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.calc(token.fontSizeIcon).add(token.controlPaddingHorizontal).equal()
      }
    }
  };
  return [genSelectionStyle$1(token, suffix), rawStyle];
}
const genMultipleStyle = (token) => {
  const {
    componentCls
  } = token;
  const smallToken = merge(token, {
    selectHeight: token.controlHeightSM,
    multipleSelectItemHeight: token.multipleItemHeightSM,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const largeToken = merge(token, {
    fontSize: token.fontSizeLG,
    selectHeight: token.controlHeightLG,
    multipleSelectItemHeight: token.multipleItemHeightLG,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  });
  return [
    genSizeStyle$2(token),
    // ======================== Small ========================
    genSizeStyle$2(smallToken, "sm"),
    // Padding
    {
      [`${componentCls}-multiple${componentCls}-sm`]: {
        [`${componentCls}-selection-placeholder`]: {
          insetInline: token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    genSizeStyle$2(largeToken, "lg")
  ];
};
function genSizeStyle$1(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal();
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      height: token.controlHeight,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: Object.assign(Object.assign({}, resetComponent(token, true)), {
        display: "flex",
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: unit(selectHeightWithoutBorder),
          transition: `all ${token.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${componentCls}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${componentCls}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: token.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${unit(inputPaddingHorizontalBase)}`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          "&:after": {
            lineHeight: unit(selectHeightWithoutBorder)
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${componentCls}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${componentCls}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${unit(inputPaddingHorizontalBase)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal();
  return [
    genSizeStyle$1(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle$1(merge(token, {
      controlHeight: token.controlHeightSM,
      borderRadius: token.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${componentCls}-single${componentCls}-sm`]: {
        [`&:not(${componentCls}-customize-input)`]: {
          [`${componentCls}-selection-search`]: {
            insetInlineStart: inputPaddingHorizontalSM,
            insetInlineEnd: inputPaddingHorizontalSM
          },
          [`${componentCls}-selector`]: {
            padding: `0 ${unit(inputPaddingHorizontalSM)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
            insetInlineEnd: token.calc(inputPaddingHorizontalSM).add(token.calc(token.fontSize).mul(1.5)).equal()
          },
          [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
            paddingInlineEnd: token.calc(token.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle$1(merge(token, {
      controlHeight: token.singleItemHeightLG,
      fontSize: token.fontSizeLG,
      borderRadius: token.borderRadiusLG
    }), "lg")
  ];
}
const prepareComponentToken$9 = (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    controlHeight,
    controlHeightSM,
    controlHeightLG,
    paddingXXS,
    controlPaddingHorizontal,
    zIndexPopupBase,
    colorText,
    fontWeightStrong,
    controlItemBgActive,
    controlItemBgHover,
    colorBgContainer,
    colorFillSecondary,
    colorBgContainerDisabled,
    colorTextDisabled
  } = token;
  const dblPaddingXXS = paddingXXS * 2;
  const dblLineWidth = lineWidth * 2;
  const multipleItemHeight = Math.min(controlHeight - dblPaddingXXS, controlHeight - dblLineWidth);
  const multipleItemHeightSM = Math.min(controlHeightSM - dblPaddingXXS, controlHeightSM - dblLineWidth);
  const multipleItemHeightLG = Math.min(controlHeightLG - dblPaddingXXS, controlHeightLG - dblLineWidth);
  const INTERNAL_FIXED_ITEM_MARGIN = Math.floor(paddingXXS / 2);
  return {
    INTERNAL_FIXED_ITEM_MARGIN,
    zIndexPopup: zIndexPopupBase + 50,
    optionSelectedColor: colorText,
    optionSelectedFontWeight: fontWeightStrong,
    optionSelectedBg: controlItemBgActive,
    optionActiveBg: controlItemBgHover,
    optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    optionFontSize: fontSize,
    optionLineHeight: lineHeight,
    optionHeight: controlHeight,
    selectorBg: colorBgContainer,
    clearBg: colorBgContainer,
    singleItemHeightLG: controlHeightLG,
    multipleItemBg: colorFillSecondary,
    multipleItemBorderColor: "transparent",
    multipleItemHeight,
    multipleItemHeightSM,
    multipleItemHeightLG,
    multipleSelectorBgDisabled: colorBgContainerDisabled,
    multipleItemColorDisabled: colorTextDisabled,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(token.fontSize * 1.25)
  };
};
const genBaseOutlinedStyle = (token, options) => {
  const {
    componentCls,
    antCls,
    controlOutlineWidth
  } = token;
  return {
    [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
      border: `${unit(token.lineWidth)} ${token.lineType} ${options.borderColor}`,
      background: token.selectorBg
    },
    [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
      [`&:hover ${componentCls}-selector`]: {
        borderColor: options.hoverBorderHover
      },
      [`${componentCls}-focused& ${componentCls}-selector`]: {
        borderColor: options.activeBorderColor,
        boxShadow: `0 0 0 ${unit(controlOutlineWidth)} ${options.activeShadowColor}`,
        outline: 0
      }
    }
  };
};
const genOutlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseOutlinedStyle(token, options))
});
const genOutlinedStyle = (token) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
    borderColor: token.colorBorder,
    hoverBorderHover: token.colorPrimaryHover,
    activeBorderColor: token.colorPrimary,
    activeShadowColor: token.controlOutline
  })), genOutlinedStatusStyle(token, {
    status: "error",
    borderColor: token.colorError,
    hoverBorderHover: token.colorErrorHover,
    activeBorderColor: token.colorError,
    activeShadowColor: token.colorErrorOutline
  })), genOutlinedStatusStyle(token, {
    status: "warning",
    borderColor: token.colorWarning,
    hoverBorderHover: token.colorWarningHover,
    activeBorderColor: token.colorWarning,
    activeShadowColor: token.colorWarningOutline
  })), {
    [`&${token.componentCls}-disabled`]: {
      [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
        background: token.colorBgContainerDisabled,
        color: token.colorTextDisabled
      }
    },
    [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
      background: token.multipleItemBg,
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
    }
  })
});
const genBaseFilledStyle = (token, options) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
      background: options.bg,
      border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
      color: options.color
    },
    [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
      [`&:hover ${componentCls}-selector`]: {
        background: options.hoverBg
      },
      [`${componentCls}-focused& ${componentCls}-selector`]: {
        background: token.selectorBg,
        borderColor: options.activeBorderColor,
        outline: 0
      }
    }
  };
};
const genFilledStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseFilledStyle(token, options))
});
const genFilledStyle = (token) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
    bg: token.colorFillTertiary,
    hoverBg: token.colorFillSecondary,
    activeBorderColor: token.colorPrimary,
    color: token.colorText
  })), genFilledStatusStyle(token, {
    status: "error",
    bg: token.colorErrorBg,
    hoverBg: token.colorErrorBgHover,
    activeBorderColor: token.colorError,
    color: token.colorError
  })), genFilledStatusStyle(token, {
    status: "warning",
    bg: token.colorWarningBg,
    hoverBg: token.colorWarningBgHover,
    activeBorderColor: token.colorWarning,
    color: token.colorWarning
  })), {
    [`&${token.componentCls}-disabled`]: {
      [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
        borderColor: token.colorBorder,
        background: token.colorBgContainerDisabled,
        color: token.colorTextDisabled
      }
    },
    [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
      background: token.colorBgContainer,
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    }
  })
});
const genBorderlessStyle = (token) => ({
  "&-borderless": {
    [`${token.componentCls}-selector`]: {
      background: "transparent",
      borderColor: "transparent"
    },
    [`&${token.componentCls}-disabled`]: {
      [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
        color: token.colorTextDisabled
      }
    },
    [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
      background: token.multipleItemBg,
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
    },
    // Status
    [`&${token.componentCls}-status-error`]: {
      [`${token.componentCls}-selection-item`]: {
        color: token.colorError
      }
    },
    [`&${token.componentCls}-status-warning`]: {
      [`${token.componentCls}-selection-item`]: {
        color: token.colorWarning
      }
    }
  }
});
const genVariantsStyle = (token) => ({
  [token.componentCls]: Object.assign(Object.assign(Object.assign({}, genOutlinedStyle(token)), genFilledStyle(token)), genBorderlessStyle(token))
});
const genSelectorStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    position: "relative",
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${componentCls}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${componentCls}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
};
const getSearchInputWithoutBorderStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
};
const genBaseStyle$4 = (token) => {
  const {
    antCls,
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, textEllipsis), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${antCls}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, textEllipsis), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${token.motionDurationSlow} ease`,
        [iconCls]: {
          verticalAlign: "top",
          transition: `transform ${token.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: "inline-block",
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: token.colorTextTertiary
        }
      },
      "&:hover": {
        [`${componentCls}-clear`]: {
          opacity: 1
        },
        // Should use the following selector, but since `:has` has poor compatibility,
        // we use `:not(:last-child)` instead, which may cause some problems in some cases.
        // [`${componentCls}-arrow:has(+ ${componentCls}-clear)`]: {
        [`${componentCls}-arrow:not(:last-child)`]: {
          opacity: 0
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: token.calc(inputPaddingHorizontalBase).add(token.fontSize).add(token.paddingXS).equal()
      }
    }
  };
};
const genSelectStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    {
      [componentCls]: {
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle$4(token),
    // Single
    genSingleStyle(token),
    // Multiple
    genMultipleStyle(token),
    // Dropdown
    genSingleStyle$1(token),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${componentCls}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`
    })
  ];
};
const useSelectStyle = genStyleHooks("Select", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = merge(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: token.multipleItemHeight,
    selectHeight: token.controlHeight
  });
  return [genSelectStyle(selectToken), genVariantsStyle(selectToken)];
}, prepareComponentToken$9, {
  unitless: {
    optionLineHeight: true,
    optionSelectedFontWeight: true
  }
});
function useIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading,
    multiple,
    hasFeedback,
    prefixCls,
    showSuffixIcon,
    feedbackIcon,
    showArrow,
    componentName
  } = _ref;
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /* @__PURE__ */ reactExports.createElement(RefIcon$d, null);
  const getSuffixIconNode = (arrowIcon) => {
    if (suffixIcon === null && !hasFeedback && !showArrow) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
  };
  let mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(/* @__PURE__ */ reactExports.createElement(RefIcon$f, {
      spin: true
    }));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = (_ref2) => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode(/* @__PURE__ */ reactExports.createElement(RefIcon$g, {
          className: iconCls
        }));
      }
      return getSuffixIconNode(/* @__PURE__ */ reactExports.createElement(RefIcon$h, {
        className: iconCls
      }));
    };
  }
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /* @__PURE__ */ reactExports.createElement(RefIcon$e, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /* @__PURE__ */ reactExports.createElement(RefIcon$c, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
function useShowArrow(suffixIcon, showArrow) {
  return showArrow !== void 0 ? showArrow : suffixIcon !== null;
}
var __rest$g = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
const InternalSelect = (props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    bordered,
    className,
    rootClassName,
    getPopupContainer,
    popupClassName,
    dropdownClassName,
    listHeight = 256,
    placement,
    listItemHeight: customListItemHeight,
    size: customizeSize,
    disabled: customDisabled,
    notFoundContent,
    status: customStatus,
    builtinPlacements,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    direction: propDirection,
    style,
    allowClear,
    variant: customizeVariant,
    dropdownStyle,
    transitionName,
    tagRender,
    maxCount
  } = props, rest = __rest$g(props, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
    select
  } = reactExports.useContext(ConfigContext);
  const [, token] = useToken();
  const listItemHeight = customListItemHeight !== null && customListItemHeight !== void 0 ? customListItemHeight : token === null || token === void 0 ? void 0 : token.controlHeight;
  const prefixCls = getPrefixCls("select", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const [variant, enableVariantCls] = useVariant("select", customizeVariant, bordered);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useSelectStyle(prefixCls, rootCls);
  const mode = reactExports.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === "combobox") {
      return void 0;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return "combobox";
    }
    return m;
  }, [props.mode]);
  const isMultiple3 = mode === "multiple" || mode === "tags";
  const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);
  const mergedPopupMatchSelectWidth = (_a = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : contextPopupMatchSelectWidth;
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  let mergedNotFound;
  if (notFoundContent !== void 0) {
    mergedNotFound = notFoundContent;
  } else if (mode === "combobox") {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Select")) || /* @__PURE__ */ reactExports.createElement(DefaultRenderEmpty, {
      componentName: "Select"
    });
  }
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = useIcons(Object.assign(Object.assign({}, rest), {
    multiple: isMultiple3,
    hasFeedback,
    feedbackIcon,
    showSuffixIcon,
    prefixCls,
    componentName: "Select"
  }));
  const mergedAllowClear = allowClear === true ? {
    clearIcon
  } : allowClear;
  const selectProps = omit(rest, ["suffixIcon", "itemIcon"]);
  const mergedPopupClassName = classNames(popupClassName || dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === "rtl"
  }, rootClassName, cssVarCls, rootCls, hashId);
  const mergedSize = useSize((ctx) => {
    var _a2;
    return (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : ctx;
  });
  const disabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = classNames({
    [`${prefixCls}-lg`]: mergedSize === "large",
    [`${prefixCls}-sm`]: mergedSize === "small",
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${variant}`]: enableVariantCls,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, select === null || select === void 0 ? void 0 : select.className, className, rootClassName, cssVarCls, rootCls, hashId);
  const memoPlacement = reactExports.useMemo(() => {
    if (placement !== void 0) {
      return placement;
    }
    return direction === "rtl" ? "bottomRight" : "bottomLeft";
  }, [placement, direction]);
  const [zIndex] = useZIndex("SelectLike", dropdownStyle === null || dropdownStyle === void 0 ? void 0 : dropdownStyle.zIndex);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(TypedSelect, Object.assign({
    ref,
    virtual,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    style: Object.assign(Object.assign({}, select === null || select === void 0 ? void 0 : select.style), style),
    dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
    transitionName: getTransitionName(rootPrefixCls, "slide-up", transitionName),
    builtinPlacements: mergedBuiltinPlacements(builtinPlacements, popupOverflow),
    listHeight,
    listItemHeight,
    mode,
    prefixCls,
    placement: memoPlacement,
    direction,
    suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon,
    allowClear: mergedAllowClear,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: mergedPopupClassName,
    disabled: mergedDisabled,
    dropdownStyle: Object.assign(Object.assign({}, dropdownStyle), {
      zIndex
    }),
    maxCount: isMultiple3 ? maxCount : void 0,
    tagRender: isMultiple3 ? tagRender : void 0
  })));
};
const Select = /* @__PURE__ */ reactExports.forwardRef(InternalSelect);
const PurePanel$1 = genPurePanel(Select);
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$1;
const genStatusStyle = (token) => {
  const {
    componentCls,
    menuCls,
    colorError,
    colorTextLightSolid
  } = token;
  const itemCls = `${menuCls}-item`;
  return {
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [`${menuCls} ${itemCls}`]: {
        [`&${itemCls}-danger:not(${itemCls}-disabled)`]: {
          color: colorError,
          "&:hover": {
            color: colorTextLightSolid,
            backgroundColor: colorError
          }
        }
      }
    }
  };
};
const genBaseStyle$3 = (token) => {
  const {
    componentCls,
    menuCls,
    zIndexPopup,
    dropdownArrowDistance,
    sizePopupArrow,
    antCls,
    iconCls,
    motionDurationMid,
    paddingBlock,
    fontSize,
    dropdownEdgeChildPadding,
    colorTextDisabled,
    fontSizeIcon,
    controlPaddingHorizontal,
    colorBgElevated
  } = token;
  return [
    {
      [componentCls]: {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: true,
          value: -9999
        },
        zIndex: zIndexPopup,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: token.calc(sizePopupArrow).div(2).sub(dropdownArrowDistance).equal(),
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        [`&-trigger${antCls}-btn`]: {
          [`& > ${iconCls}-down, & > ${antCls}-btn-icon > ${iconCls}-down`]: {
            fontSize: fontSizeIcon
          }
        },
        [`${componentCls}-wrap`]: {
          position: "relative",
          [`${antCls}-btn > ${iconCls}-down`]: {
            fontSize: fontSizeIcon
          },
          [`${iconCls}-down::before`]: {
            transition: `transform ${motionDurationMid}`
          }
        },
        [`${componentCls}-wrap-open`]: {
          [`${iconCls}-down::before`]: {
            transform: `rotate(180deg)`
          }
        },
        [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: {
          display: "none"
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomRight,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomRight`]: {
          animationName: slideUpIn
        },
        [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-top,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-top,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topRight`]: {
          animationName: slideDownIn
        },
        [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomRight`]: {
          animationName: slideUpOut
        },
        [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-top,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topRight`]: {
          animationName: slideDownOut
        }
      }
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    getArrowStyle(token, colorBgElevated, {
      arrowPlacement: {
        top: true,
        bottom: true
      }
    }),
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${componentCls} ${menuCls}`]: {
        position: "relative",
        margin: 0
      },
      [`${menuCls}-submenu-popup`]: {
        position: "absolute",
        zIndex: zIndexPopup,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul, li": {
          listStyle: "none",
          margin: 0
        }
      },
      [`${componentCls}, ${componentCls}-menu-submenu`]: Object.assign(Object.assign({}, resetComponent(token)), {
        [menuCls]: Object.assign(Object.assign({
          padding: dropdownEdgeChildPadding,
          listStyleType: "none",
          backgroundColor: colorBgElevated,
          backgroundClip: "padding-box",
          borderRadius: token.borderRadiusLG,
          outline: "none",
          boxShadow: token.boxShadowSecondary
        }, genFocusStyle(token)), {
          "&:empty": {
            padding: 0,
            boxShadow: "none"
          },
          [`${menuCls}-item-group-title`]: {
            padding: `${unit(paddingBlock)} ${unit(controlPaddingHorizontal)}`,
            color: token.colorTextDescription,
            transition: `all ${motionDurationMid}`
          },
          // ======================= Item Content =======================
          [`${menuCls}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap"
          },
          [`${menuCls}-item-icon`]: {
            minWidth: fontSize,
            marginInlineEnd: token.marginXS,
            fontSize: token.fontSizeSM
          },
          [`${menuCls}-title-content`]: {
            flex: "auto",
            "> a": {
              color: "inherit",
              transition: `all ${motionDurationMid}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            }
          },
          // =========================== Item ===========================
          [`${menuCls}-item, ${menuCls}-submenu-title`]: Object.assign(Object.assign({
            clear: "both",
            margin: 0,
            padding: `${unit(paddingBlock)} ${unit(controlPaddingHorizontal)}`,
            color: token.colorText,
            fontWeight: "normal",
            fontSize,
            lineHeight: token.lineHeight,
            cursor: "pointer",
            transition: `all ${motionDurationMid}`,
            borderRadius: token.borderRadiusSM,
            "&:hover, &-active": {
              backgroundColor: token.controlItemBgHover
            }
          }, genFocusStyle(token)), {
            "&-selected": {
              color: token.colorPrimary,
              backgroundColor: token.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: token.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: colorTextDisabled,
              cursor: "not-allowed",
              "&:hover": {
                color: colorTextDisabled,
                backgroundColor: colorBgElevated,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              // By design
              margin: `${unit(token.marginXXS)} 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: token.colorSplit
            },
            [`${componentCls}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: token.paddingXS,
              [`${componentCls}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: token.colorTextDescription,
                fontSize: fontSizeIcon,
                fontStyle: "normal"
              }
            }
          }),
          [`${menuCls}-item-group-list`]: {
            margin: `0 ${unit(token.marginXS)}`,
            padding: 0,
            listStyle: "none"
          },
          [`${menuCls}-submenu-title`]: {
            paddingInlineEnd: token.calc(controlPaddingHorizontal).add(token.fontSizeSM).equal()
          },
          [`${menuCls}-submenu-vertical`]: {
            position: "relative"
          },
          [`${menuCls}-submenu${menuCls}-submenu-disabled ${componentCls}-menu-submenu-title`]: {
            [`&, ${componentCls}-menu-submenu-arrow-icon`]: {
              color: colorTextDisabled,
              backgroundColor: colorBgElevated,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${menuCls}-submenu-selected ${componentCls}-menu-submenu-title`]: {
            color: token.colorPrimary
          }
        })
      })
    },
    // Follow code may reuse in other components
    [initSlideMotion(token, "slide-up"), initSlideMotion(token, "slide-down"), initMoveMotion(token, "move-up"), initMoveMotion(token, "move-down"), initZoomMotion(token, "zoom-big")]
  ];
};
const prepareComponentToken$8 = (token) => Object.assign(Object.assign({
  zIndexPopup: token.zIndexPopupBase + 50,
  paddingBlock: (token.controlHeight - token.fontSize * token.lineHeight) / 2
}, getArrowOffsetToken({
  contentRadius: token.borderRadiusLG,
  limitVerticalRadius: true
})), getArrowToken(token));
const useStyle$9 = genStyleHooks("Dropdown", (token) => {
  const {
    marginXXS,
    sizePopupArrow,
    paddingXXS,
    componentCls
  } = token;
  const dropdownToken = merge(token, {
    menuCls: `${componentCls}-menu`,
    dropdownArrowDistance: token.calc(sizePopupArrow).div(2).add(marginXXS).equal(),
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle$3(dropdownToken), genStatusStyle(dropdownToken)];
}, prepareComponentToken$8, {
  resetStyle: false
});
const Dropdown$2 = (props) => {
  var _a;
  const {
    menu,
    arrow,
    prefixCls: customizePrefixCls,
    children,
    trigger,
    disabled,
    dropdownRender,
    getPopupContainer,
    overlayClassName,
    rootClassName,
    overlayStyle,
    open,
    onOpenChange,
    // Deprecated
    visible,
    onVisibleChange,
    mouseEnterDelay = 0.15,
    mouseLeaveDelay = 0.1,
    autoAdjustOverflow = true,
    placement = "",
    overlay,
    transitionName
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    dropdown
  } = reactExports.useContext(ConfigContext);
  devUseWarning();
  const memoTransitionName = reactExports.useMemo(() => {
    const rootPrefixCls = getPrefixCls();
    if (transitionName !== void 0) {
      return transitionName;
    }
    if (placement.includes("top")) {
      return `${rootPrefixCls}-slide-down`;
    }
    return `${rootPrefixCls}-slide-up`;
  }, [getPrefixCls, placement, transitionName]);
  const memoPlacement = reactExports.useMemo(() => {
    if (!placement) {
      return direction === "rtl" ? "bottomRight" : "bottomLeft";
    }
    if (placement.includes("Center")) {
      return placement.slice(0, placement.indexOf("Center"));
    }
    return placement;
  }, [placement, direction]);
  const prefixCls = getPrefixCls("dropdown", customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$9(prefixCls, rootCls);
  const [, token] = useToken();
  const child = reactExports.Children.only(children);
  const dropdownTrigger = cloneElement(child, {
    className: classNames(`${prefixCls}-trigger`, {
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, child.props.className),
    disabled: (_a = child.props.disabled) !== null && _a !== void 0 ? _a : disabled
  });
  const triggerActions = disabled ? [] : trigger;
  const alignPoint = !!(triggerActions === null || triggerActions === void 0 ? void 0 : triggerActions.includes("contextMenu"));
  const [mergedOpen, setOpen] = useMergedState(false, {
    value: open !== null && open !== void 0 ? open : visible
  });
  const onInnerOpenChange = useEvent((nextOpen) => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen, {
      source: "trigger"
    });
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
    setOpen(nextOpen);
  });
  const overlayClassNameCustomized = classNames(overlayClassName, rootClassName, hashId, cssVarCls, rootCls, dropdown === null || dropdown === void 0 ? void 0 : dropdown.className, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  });
  const builtinPlacements = getPlacements({
    arrowPointAtCenter: typeof arrow === "object" && arrow.pointAtCenter,
    autoAdjustOverflow,
    offset: token.marginXXS,
    arrowWidth: arrow ? token.sizePopupArrow : 0,
    borderRadius: token.borderRadius
  });
  const onMenuClick = reactExports.useCallback(() => {
    if ((menu === null || menu === void 0 ? void 0 : menu.selectable) && (menu === null || menu === void 0 ? void 0 : menu.multiple)) {
      return;
    }
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false, {
      source: "menu"
    });
    setOpen(false);
  }, [menu === null || menu === void 0 ? void 0 : menu.selectable, menu === null || menu === void 0 ? void 0 : menu.multiple]);
  const renderOverlay = () => {
    let overlayNode;
    if (menu === null || menu === void 0 ? void 0 : menu.items) {
      overlayNode = /* @__PURE__ */ reactExports.createElement(Menu, Object.assign({}, menu));
    } else if (typeof overlay === "function") {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = reactExports.Children.only(typeof overlayNode === "string" ? /* @__PURE__ */ reactExports.createElement("span", null, overlayNode) : overlayNode);
    return /* @__PURE__ */ reactExports.createElement(OverrideProvider, {
      prefixCls: `${prefixCls}-menu`,
      rootClassName: classNames(cssVarCls, rootCls),
      expandIcon: /* @__PURE__ */ reactExports.createElement("span", {
        className: `${prefixCls}-menu-submenu-arrow`
      }, /* @__PURE__ */ reactExports.createElement(RefIcon$i, {
        className: `${prefixCls}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: false,
      onClick: onMenuClick,
      validator: (_ref3) => {
      }
    }, overlayNode);
  };
  const [zIndex, contextZIndex] = useZIndex("Dropdown", overlayStyle === null || overlayStyle === void 0 ? void 0 : overlayStyle.zIndex);
  let renderNode = /* @__PURE__ */ reactExports.createElement(Dropdown$3, Object.assign({
    alignPoint
  }, omit(props, ["rootClassName"]), {
    mouseEnterDelay,
    mouseLeaveDelay,
    visible: mergedOpen,
    builtinPlacements,
    arrow: !!arrow,
    overlayClassName: overlayClassNameCustomized,
    prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: memoTransitionName,
    trigger: triggerActions,
    overlay: renderOverlay,
    placement: memoPlacement,
    onVisibleChange: onInnerOpenChange,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, dropdown === null || dropdown === void 0 ? void 0 : dropdown.style), overlayStyle), {
      zIndex
    })
  }), dropdownTrigger);
  if (zIndex) {
    renderNode = /* @__PURE__ */ reactExports.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, renderNode);
  }
  return wrapCSSVar(renderNode);
};
function postPureProps(props) {
  return Object.assign(Object.assign({}, props), {
    align: {
      overflow: {
        adjustX: false,
        adjustY: false
      }
    }
  });
}
const PurePanel = genPurePanel(Dropdown$2, "dropdown", (prefixCls) => prefixCls, postPureProps);
const WrapPurePanel = (props) => /* @__PURE__ */ reactExports.createElement(PurePanel, Object.assign({}, props), /* @__PURE__ */ reactExports.createElement("span", null));
Dropdown$2._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
const RadioGroupContext = /* @__PURE__ */ reactExports.createContext(null);
const RadioGroupContextProvider = RadioGroupContext.Provider;
const RadioOptionTypeContext = /* @__PURE__ */ reactExports.createContext(null);
const RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;
var _excluded$a = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"];
var Checkbox$2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-checkbox" : _props$prefixCls, className = props.className, style = props.style, checked = props.checked, disabled = props.disabled, _props$defaultChecked = props.defaultChecked, defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked, _props$type = props.type, type = _props$type === void 0 ? "checkbox" : _props$type, title = props.title, onChange = props.onChange, inputProps = _objectWithoutProperties(props, _excluded$a);
  var inputRef = reactExports.useRef(null);
  var holderRef = reactExports.useRef(null);
  var _useMergedState = useMergedState(defaultChecked, {
    value: checked
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), rawValue = _useMergedState2[0], setRawValue = _useMergedState2[1];
  reactExports.useImperativeHandle(ref, function() {
    return {
      focus: function focus(options) {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus(options);
      },
      blur: function blur() {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      },
      input: inputRef.current,
      nativeElement: holderRef.current
    };
  });
  var classString = classNames(prefixCls, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-checked"), rawValue), "".concat(prefixCls, "-disabled"), disabled));
  var handleChange = function handleChange2(e) {
    if (disabled) {
      return;
    }
    if (!("checked" in props)) {
      setRawValue(e.target.checked);
    }
    onChange === null || onChange === void 0 || onChange({
      target: _objectSpread2(_objectSpread2({}, props), {}, {
        type,
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent
    });
  };
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: classString,
    title,
    style,
    ref: holderRef
  }, /* @__PURE__ */ reactExports.createElement("input", _extends({}, inputProps, {
    className: "".concat(prefixCls, "-input"),
    ref: inputRef,
    onChange: handleChange,
    disabled,
    checked: !!rawValue,
    type
  })), /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }));
});
const getGroupRadioStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  return {
    [groupPrefixCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      display: "inline-block",
      fontSize: 0,
      // RTL
      [`&${groupPrefixCls}-rtl`]: {
        direction: "rtl"
      },
      [`${antCls}-badge ${antCls}-badge-count`]: {
        zIndex: 1
      },
      [`> ${antCls}-badge:not(:first-child) > ${antCls}-button-wrapper`]: {
        borderInlineStart: "none"
      }
    })
  };
};
const getRadioBasicStyle = (token) => {
  const {
    componentCls,
    wrapperMarginInlineEnd,
    colorPrimary,
    radioSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOutCirc,
    colorBgContainer,
    colorBorder,
    lineWidth,
    colorBgContainerDisabled,
    colorTextDisabled,
    paddingXS,
    dotColorDisabled,
    lineType,
    radioColor,
    radioBgColor,
    calc
  } = token;
  const radioInnerPrefixCls = `${componentCls}-inner`;
  const dotPadding = 4;
  const radioDotDisabledSize = calc(radioSize).sub(calc(dotPadding).mul(2));
  const radioSizeCalc = calc(1).mul(radioSize).equal({
    unit: true
  });
  return {
    [`${componentCls}-wrapper`]: Object.assign(Object.assign({}, resetComponent(token)), {
      display: "inline-flex",
      alignItems: "baseline",
      marginInlineStart: 0,
      marginInlineEnd: wrapperMarginInlineEnd,
      cursor: "pointer",
      // RTL
      [`&${componentCls}-wrapper-rtl`]: {
        direction: "rtl"
      },
      "&-disabled": {
        cursor: "not-allowed",
        color: token.colorTextDisabled
      },
      "&::after": {
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        content: '"\\a0"'
      },
      // hashId 在 wrapper 上，只能铺平
      [`${componentCls}-checked::after`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: "100%",
        height: "100%",
        border: `${unit(lineWidth)} ${lineType} ${colorPrimary}`,
        borderRadius: "50%",
        visibility: "hidden",
        opacity: 0,
        content: '""'
      },
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        position: "relative",
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        alignSelf: "center",
        borderRadius: "50%"
      }),
      [`${componentCls}-wrapper:hover &,
        &:hover ${radioInnerPrefixCls}`]: {
        borderColor: colorPrimary
      },
      [`${componentCls}-input:focus-visible + ${radioInnerPrefixCls}`]: Object.assign({}, genFocusOutline(token)),
      [`${componentCls}:hover::after, ${componentCls}-wrapper:hover &::after`]: {
        visibility: "visible"
      },
      [`${componentCls}-inner`]: {
        "&::after": {
          boxSizing: "border-box",
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: "50%",
          display: "block",
          width: radioSizeCalc,
          height: radioSizeCalc,
          marginBlockStart: calc(1).mul(radioSize).div(-2).equal({
            unit: true
          }),
          marginInlineStart: calc(1).mul(radioSize).div(-2).equal({
            unit: true
          }),
          backgroundColor: radioColor,
          borderBlockStart: 0,
          borderInlineStart: 0,
          borderRadius: radioSizeCalc,
          transform: "scale(0)",
          opacity: 0,
          transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`,
          content: '""'
        },
        boxSizing: "border-box",
        position: "relative",
        insetBlockStart: 0,
        insetInlineStart: 0,
        display: "block",
        width: radioSizeCalc,
        height: radioSizeCalc,
        backgroundColor: colorBgContainer,
        borderColor: colorBorder,
        borderStyle: "solid",
        borderWidth: lineWidth,
        borderRadius: "50%",
        transition: `all ${motionDurationMid}`
      },
      [`${componentCls}-input`]: {
        position: "absolute",
        inset: 0,
        zIndex: 1,
        cursor: "pointer",
        opacity: 0
      },
      // 选中状态
      [`${componentCls}-checked`]: {
        [radioInnerPrefixCls]: {
          borderColor: colorPrimary,
          backgroundColor: radioBgColor,
          "&::after": {
            transform: `scale(${token.calc(token.dotSize).div(radioSize).equal()})`,
            opacity: 1,
            transition: `all ${motionDurationSlow} ${motionEaseInOutCirc}`
          }
        }
      },
      [`${componentCls}-disabled`]: {
        cursor: "not-allowed",
        [radioInnerPrefixCls]: {
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder,
          cursor: "not-allowed",
          "&::after": {
            backgroundColor: dotColorDisabled
          }
        },
        [`${componentCls}-input`]: {
          cursor: "not-allowed"
        },
        [`${componentCls}-disabled + span`]: {
          color: colorTextDisabled,
          cursor: "not-allowed"
        },
        [`&${componentCls}-checked`]: {
          [radioInnerPrefixCls]: {
            "&::after": {
              transform: `scale(${calc(radioDotDisabledSize).div(radioSize).equal()})`
            }
          }
        }
      },
      [`span${componentCls} + *`]: {
        paddingInlineStart: paddingXS,
        paddingInlineEnd: paddingXS
      }
    })
  };
};
const getRadioButtonStyle = (token) => {
  const {
    buttonColor,
    controlHeight,
    componentCls,
    lineWidth,
    lineType,
    colorBorder,
    motionDurationSlow,
    motionDurationMid,
    buttonPaddingInline,
    fontSize,
    buttonBg,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    paddingXS,
    borderRadius,
    borderRadiusSM,
    borderRadiusLG,
    buttonCheckedBg,
    buttonSolidCheckedColor,
    colorTextDisabled,
    colorBgContainerDisabled,
    buttonCheckedBgDisabled,
    buttonCheckedColorDisabled,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    buttonSolidCheckedBg,
    buttonSolidCheckedHoverBg,
    buttonSolidCheckedActiveBg,
    calc
  } = token;
  return {
    [`${componentCls}-button-wrapper`]: {
      position: "relative",
      display: "inline-block",
      height: controlHeight,
      margin: 0,
      paddingInline: buttonPaddingInline,
      paddingBlock: 0,
      color: buttonColor,
      fontSize,
      lineHeight: unit(calc(controlHeight).sub(calc(lineWidth).mul(2)).equal()),
      background: buttonBg,
      border: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: calc(lineWidth).add(0.02).equal(),
      borderInlineStartWidth: 0,
      borderInlineEndWidth: lineWidth,
      cursor: "pointer",
      transition: [`color ${motionDurationMid}`, `background ${motionDurationMid}`, `box-shadow ${motionDurationMid}`].join(","),
      a: {
        color: buttonColor
      },
      [`> ${componentCls}-button`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: "100%",
        height: "100%"
      },
      "&:not(:first-child)": {
        "&::before": {
          position: "absolute",
          insetBlockStart: calc(lineWidth).mul(-1).equal(),
          insetInlineStart: calc(lineWidth).mul(-1).equal(),
          display: "block",
          boxSizing: "content-box",
          width: 1,
          height: "100%",
          paddingBlock: lineWidth,
          paddingInline: 0,
          backgroundColor: colorBorder,
          transition: `background-color ${motionDurationSlow}`,
          content: '""'
        }
      },
      "&:first-child": {
        borderInlineStart: `${unit(lineWidth)} ${lineType} ${colorBorder}`,
        borderStartStartRadius: borderRadius,
        borderEndStartRadius: borderRadius
      },
      "&:last-child": {
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius
      },
      "&:first-child:last-child": {
        borderRadius
      },
      [`${componentCls}-group-large &`]: {
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight: unit(calc(controlHeightLG).sub(calc(lineWidth).mul(2)).equal()),
        "&:first-child": {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        }
      },
      [`${componentCls}-group-small &`]: {
        height: controlHeightSM,
        paddingInline: calc(paddingXS).sub(lineWidth).equal(),
        paddingBlock: 0,
        lineHeight: unit(calc(controlHeightSM).sub(calc(lineWidth).mul(2)).equal()),
        "&:first-child": {
          borderStartStartRadius: borderRadiusSM,
          borderEndStartRadius: borderRadiusSM
        },
        "&:last-child": {
          borderStartEndRadius: borderRadiusSM,
          borderEndEndRadius: borderRadiusSM
        }
      },
      "&:hover": {
        position: "relative",
        color: colorPrimary
      },
      "&:has(:focus-visible)": Object.assign({}, genFocusOutline(token)),
      [`${componentCls}-inner, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none"
      },
      [`&-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: colorPrimary,
        background: buttonCheckedBg,
        borderColor: colorPrimary,
        "&::before": {
          backgroundColor: colorPrimary
        },
        "&:first-child": {
          borderColor: colorPrimary
        },
        "&:hover": {
          color: colorPrimaryHover,
          borderColor: colorPrimaryHover,
          "&::before": {
            backgroundColor: colorPrimaryHover
          }
        },
        "&:active": {
          color: colorPrimaryActive,
          borderColor: colorPrimaryActive,
          "&::before": {
            backgroundColor: colorPrimaryActive
          }
        }
      },
      [`${componentCls}-group-solid &-checked:not(${componentCls}-button-wrapper-disabled)`]: {
        color: buttonSolidCheckedColor,
        background: buttonSolidCheckedBg,
        borderColor: buttonSolidCheckedBg,
        "&:hover": {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedHoverBg,
          borderColor: buttonSolidCheckedHoverBg
        },
        "&:active": {
          color: buttonSolidCheckedColor,
          background: buttonSolidCheckedActiveBg,
          borderColor: buttonSolidCheckedActiveBg
        }
      },
      "&-disabled": {
        color: colorTextDisabled,
        backgroundColor: colorBgContainerDisabled,
        borderColor: colorBorder,
        cursor: "not-allowed",
        "&:first-child, &:hover": {
          color: colorTextDisabled,
          backgroundColor: colorBgContainerDisabled,
          borderColor: colorBorder
        }
      },
      [`&-disabled${componentCls}-button-wrapper-checked`]: {
        color: buttonCheckedColorDisabled,
        backgroundColor: buttonCheckedBgDisabled,
        borderColor: colorBorder,
        boxShadow: "none"
      }
    }
  };
};
const prepareComponentToken$7 = (token) => {
  const {
    wireframe,
    padding,
    marginXS,
    lineWidth,
    fontSizeLG,
    colorText,
    colorBgContainer,
    colorTextDisabled,
    controlItemBgActiveDisabled,
    colorTextLightSolid,
    colorPrimary,
    colorPrimaryHover,
    colorPrimaryActive,
    colorWhite
  } = token;
  const dotPadding = 4;
  const radioSize = fontSizeLG;
  const radioDotSize = wireframe ? radioSize - dotPadding * 2 : radioSize - (dotPadding + lineWidth) * 2;
  return {
    // Radio
    radioSize,
    dotSize: radioDotSize,
    dotColorDisabled: colorTextDisabled,
    // Radio buttons
    buttonSolidCheckedColor: colorTextLightSolid,
    buttonSolidCheckedBg: colorPrimary,
    buttonSolidCheckedHoverBg: colorPrimaryHover,
    buttonSolidCheckedActiveBg: colorPrimaryActive,
    buttonBg: colorBgContainer,
    buttonCheckedBg: colorBgContainer,
    buttonColor: colorText,
    buttonCheckedBgDisabled: controlItemBgActiveDisabled,
    buttonCheckedColorDisabled: colorTextDisabled,
    buttonPaddingInline: padding - lineWidth,
    wrapperMarginInlineEnd: marginXS,
    // internal
    radioColor: wireframe ? colorPrimary : colorWhite,
    radioBgColor: wireframe ? colorBgContainer : colorPrimary
  };
};
const useStyle$8 = genStyleHooks("Radio", (token) => {
  const {
    controlOutline,
    controlOutlineWidth
  } = token;
  const radioFocusShadow = `0 0 0 ${unit(controlOutlineWidth)} ${controlOutline}`;
  const radioButtonFocusShadow = radioFocusShadow;
  const radioToken = merge(token, {
    radioFocusShadow,
    radioButtonFocusShadow
  });
  return [getGroupRadioStyle(radioToken), getRadioBasicStyle(radioToken), getRadioButtonStyle(radioToken)];
}, prepareComponentToken$7, {
  unitless: {
    radioSize: true,
    dotSize: true
  }
});
var __rest$f = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalRadio = (props, ref) => {
  var _a, _b;
  const groupContext = reactExports.useContext(RadioGroupContext);
  const radioOptionTypeContext = reactExports.useContext(RadioOptionTypeContext);
  const {
    getPrefixCls,
    direction,
    radio
  } = reactExports.useContext(ConfigContext);
  const innerRef = reactExports.useRef(null);
  const mergedRef = composeRef(ref, innerRef);
  const {
    isFormItemInput
  } = reactExports.useContext(FormItemInputContext);
  const onChange = (e) => {
    var _a2, _b2;
    (_a2 = props.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, e);
    (_b2 = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b2 === void 0 ? void 0 : _b2.call(groupContext, e);
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    style,
    title
  } = props, restProps = __rest$f(props, ["prefixCls", "className", "rootClassName", "children", "style", "title"]);
  const radioPrefixCls = getPrefixCls("radio", customizePrefixCls);
  const isButtonType = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === "button";
  const prefixCls = isButtonType ? `${radioPrefixCls}-button` : radioPrefixCls;
  const rootCls = useCSSVarCls(radioPrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$8(radioPrefixCls, rootCls);
  const radioProps = Object.assign({}, restProps);
  const disabled = reactExports.useContext(DisabledContext);
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = (_a = radioProps.disabled) !== null && _a !== void 0 ? _a : groupContext.disabled;
  }
  radioProps.disabled = (_b = radioProps.disabled) !== null && _b !== void 0 ? _b : disabled;
  const wrapperClassString = classNames(`${prefixCls}-wrapper`, {
    [`${prefixCls}-wrapper-checked`]: radioProps.checked,
    [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${prefixCls}-wrapper-rtl`]: direction === "rtl",
    [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
  }, radio === null || radio === void 0 ? void 0 : radio.className, className, rootClassName, hashId, cssVarCls, rootCls);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(Wave, {
    component: "Radio",
    disabled: radioProps.disabled
  }, /* @__PURE__ */ reactExports.createElement("label", {
    className: wrapperClassString,
    style: Object.assign(Object.assign({}, radio === null || radio === void 0 ? void 0 : radio.style), style),
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    title
  }, /* @__PURE__ */ reactExports.createElement(Checkbox$2, Object.assign({}, radioProps, {
    className: classNames(radioProps.className, {
      [TARGET_CLS]: !isButtonType
    }),
    type: "radio",
    prefixCls,
    ref: mergedRef
  })), children !== void 0 ? /* @__PURE__ */ reactExports.createElement("span", null, children) : null)));
};
const Radio$2 = /* @__PURE__ */ reactExports.forwardRef(InternalRadio);
const RadioGroup = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value
  });
  const onRadioChange = (ev) => {
    const lastValue = value;
    const val = ev.target.value;
    if (!("value" in props)) {
      setValue(val);
    }
    const {
      onChange
    } = props;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    options,
    buttonStyle = "outline",
    disabled,
    children,
    size: customizeSize,
    style,
    id,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur
  } = props;
  const prefixCls = getPrefixCls("radio", customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$8(prefixCls, rootCls);
  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      if (typeof option === "string" || typeof option === "number") {
        return /* @__PURE__ */ reactExports.createElement(Radio$2, {
          key: option.toString(),
          prefixCls,
          disabled,
          value: option,
          checked: value === option
        }, option);
      }
      return /* @__PURE__ */ reactExports.createElement(Radio$2, {
        key: `radio-group-value-options-${option.value}`,
        prefixCls,
        disabled: option.disabled || disabled,
        value: option.value,
        checked: value === option.value,
        title: option.title,
        style: option.style,
        id: option.id,
        required: option.required
      }, option.label);
    });
  }
  const mergedSize = useSize(customizeSize);
  const classString = classNames(groupPrefixCls, `${groupPrefixCls}-${buttonStyle}`, {
    [`${groupPrefixCls}-${mergedSize}`]: mergedSize,
    [`${groupPrefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls, rootCls);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({}, pickAttrs(props, {
    aria: true,
    data: true
  }), {
    className: classString,
    style,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    id,
    ref
  }), /* @__PURE__ */ reactExports.createElement(RadioGroupContextProvider, {
    value: {
      onChange: onRadioChange,
      value,
      disabled: props.disabled,
      name: props.name,
      optionType: props.optionType
    }
  }, childrenToRender)));
});
const Group = /* @__PURE__ */ reactExports.memo(RadioGroup);
var __rest$e = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const RadioButton = (props, ref) => {
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls
  } = props, radioProps = __rest$e(props, ["prefixCls"]);
  const prefixCls = getPrefixCls("radio", customizePrefixCls);
  return /* @__PURE__ */ reactExports.createElement(RadioOptionTypeContextProvider, {
    value: "button"
  }, /* @__PURE__ */ reactExports.createElement(Radio$2, Object.assign({
    prefixCls
  }, radioProps, {
    type: "radio",
    ref
  })));
};
const Button = /* @__PURE__ */ reactExports.forwardRef(RadioButton);
const Radio = Radio$2;
Radio.Button = Button;
Radio.Group = Group;
Radio.__ANT_RADIO = true;
const Radio$1 = Radio;
function throttle(delay, callback, options) {
  var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? void 0 : _ref$debounceMode;
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel(options2) {
    var _ref2 = options2 || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay, callback, options) {
  var _ref = {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}
function getEntity(keyEntities, key) {
  return keyEntities[key];
}
var _excluded$9 = ["children"];
function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {}, title = _ref.title, _title = _ref._title, key = _ref.key, children = _ref.children;
  var mergedTitle = title || "title";
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || "key",
    children: children || "children"
  };
}
function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = toArray$2(node);
    return treeNodes.map(function(treeNode) {
      if (!isTreeNode(treeNode)) {
        warningOnce(!treeNode, "Tree/TreeNode can only accept TreeNode as children.");
        return null;
      }
      var key = treeNode.key;
      var _treeNode$props = treeNode.props, children = _treeNode$props.children, rest = _objectWithoutProperties(_treeNode$props, _excluded$9);
      var dataNode = _objectSpread2({
        key
      }, rest);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    }).filter(function(dataNode) {
      return dataNode;
    });
  }
  return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames), fieldTitles = _fillFieldNames._title, fieldKey = _fillFieldNames.key, fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return list.map(function(treeNode, index) {
      var pos = getPosition(parent ? parent.pos : "0", index);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== void 0) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      var flattenNode = Object.assign(omit(treeNode, [].concat(_toConsumableArray(fieldTitles), [fieldKey, fieldChildren])), {
        title: mergedTitle,
        key: mergedKey,
        parent,
        pos,
        children: null,
        data: treeNode,
        isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
function traverseDataNodes(dataNodes, callback, config) {
  var mergedConfig = {};
  if (_typeof(config) === "object") {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  var _mergedConfig = mergedConfig, childrenPropName = _mergedConfig.childrenPropName, externalGetKey = _mergedConfig.externalGetKey, fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames), fieldKey = _fillFieldNames2.key, fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === "string") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === "function") {
      syntheticGetKey = function syntheticGetKey2(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey2(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : "0";
    var connectNodes = node ? [].concat(_toConsumableArray(pathNodes), [node]) : [];
    if (node) {
      var key = syntheticGetKey(node, pos);
      var _data = {
        node,
        index,
        pos,
        key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(_data);
    }
    if (children) {
      children.forEach(function(subNode, subIndex) {
        processNode(subNode, subIndex, {
          node,
          pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, initWrapper = _ref2.initWrapper, processEntity = _ref2.processEntity, onProcessFinished = _ref2.onProcessFinished, externalGetKey = _ref2.externalGetKey, childrenPropName = _ref2.childrenPropName, fieldNames = _ref2.fieldNames;
  var legacyExternalGetKey = arguments.length > 2 ? arguments[2] : void 0;
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities,
    keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function(item) {
    var node = item.node, index = item.index, pos = item.pos, key = item.key, parentPos = item.parentPos, level = item.level, nodes = item.nodes;
    var entity = {
      node,
      nodes,
      index,
      key,
      pos,
      level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName,
    fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys, selectedKeys = _ref3.selectedKeys, loadedKeys = _ref3.loadedKeys, loadingKeys = _ref3.loadingKeys, checkedKeys = _ref3.checkedKeys, halfCheckedKeys = _ref3.halfCheckedKeys, dragOverNodeKey = _ref3.dragOverNodeKey, dropPosition = _ref3.dropPosition, keyEntities = _ref3.keyEntities;
  var entity = getEntity(keyEntities, key);
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ""),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data, expanded = props.expanded, selected = props.selected, checked = props.checked, loaded = props.loaded, loading = props.loading, halfChecked = props.halfChecked, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, pos = props.pos, active = props.active, eventKey = props.eventKey;
  var eventData = _objectSpread2(_objectSpread2({}, data), {}, {
    expanded,
    selected,
    checked,
    loaded,
    loading,
    halfChecked,
    dragOver,
    dragOverGapTop,
    dragOverGapBottom,
    pos,
    active,
    key: eventKey
  });
  if (!("props" in eventData)) {
    Object.defineProperty(eventData, "props", {
      get: function get2() {
        warningOnce(false, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.");
        return props;
      }
    });
  }
  return eventData;
}
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = /* @__PURE__ */ new Set();
  halfCheckedKeys.forEach(function(key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {}, disabled = _ref.disabled, disableCheckbox = _ref.disableCheckbox, checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = /* @__PURE__ */ new Set();
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key, node = entity.node, _entity$children = entity.children, children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || /* @__PURE__ */ new Set();
    _entities.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || /* @__PURE__ */ new Set();
    entities.forEach(function(entity) {
      var key = entity.key, node = entity.node, _entity$children2 = entity.children, children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function(childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function(childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }
  halfCheckedKeys = /* @__PURE__ */ new Set();
  var visitedKeys = /* @__PURE__ */ new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || /* @__PURE__ */ new Set();
    _entities2.forEach(function(entity) {
      var parent = entity.parent, node = entity.node;
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function(childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function(_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }
  var keys = new Set(keyList.filter(function(key) {
    var hasEntity = !!getEntity(keyEntities, key);
    if (!hasEntity) {
      warningMissKeys.push(key);
    }
    return hasEntity;
  }));
  var levelEntities = /* @__PURE__ */ new Map();
  var maxLevel = 0;
  Object.keys(keyEntities).forEach(function(key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);
    if (!levelSet) {
      levelSet = /* @__PURE__ */ new Set();
      levelEntities.set(level, levelSet);
    }
    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  warningOnce(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function(key) {
    return "'".concat(key, "'");
  }).join(", ")));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}
const genCheckboxStyle = (token) => {
  const {
    checkboxCls
  } = token;
  const wrapperCls = `${checkboxCls}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${checkboxCls}-group`]: Object.assign(Object.assign({}, resetComponent(token)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: token.marginXS,
        // Group > Grid
        [`> ${token.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [wrapperCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${wrapperCls}`]: {
          marginInlineStart: 0
        },
        [`&${wrapperCls}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            // FIXME: magic
            height: 14
            // FIXME: magic
          }
        }
      }),
      // Wrapper > Checkbox
      [checkboxCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        borderRadius: token.borderRadiusSM,
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${checkboxCls}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${checkboxCls}-inner`]: Object.assign({}, genFocusOutline(token))
        },
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: token.checkboxSize,
          height: token.checkboxSize,
          direction: "ltr",
          backgroundColor: token.colorBgContainer,
          border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderRadius: token.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${token.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "25%",
            display: "table",
            width: token.calc(token.checkboxSize).div(14).mul(5).equal(),
            height: token.calc(token.checkboxSize).div(14).mul(8).equal(),
            border: `${unit(token.lineWidthBold)} solid ${token.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: token.paddingXS,
          paddingInlineEnd: token.paddingXS
        }
      })
    },
    // ===================== Hover =====================
    {
      // Wrapper & Wrapper > Checkbox
      [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
        [`&:hover ${checkboxCls}-inner`]: {
          borderColor: token.colorPrimary
        }
      },
      [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
          borderColor: token.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${checkboxCls}-checked`]: {
        [`${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimary,
          borderColor: token.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`
          }
        }
      },
      [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
        [`&:hover ${checkboxCls}-inner`]: {
          backgroundColor: token.colorPrimaryHover,
          borderColor: "transparent"
        }
      }
    },
    // ================= Indeterminate =================
    {
      [checkboxCls]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            backgroundColor: `${token.colorBgContainer} !important`,
            borderColor: `${token.colorBorder} !important`,
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: token.calc(token.fontSizeLG).div(2).equal(),
              height: token.calc(token.fontSizeLG).div(2).equal(),
              backgroundColor: token.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/50074
          [`&:hover ${checkboxCls}-inner`]: {
            backgroundColor: `${token.colorBgContainer} !important`,
            borderColor: `${token.colorPrimary} !important`
          }
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${wrapperCls}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${checkboxCls}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${checkboxCls}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          background: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          "&:after": {
            borderColor: token.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: token.colorTextDisabled
        },
        [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
          background: token.colorTextDisabled
        }
      }
    }
  ];
};
function getStyle(prefixCls, token) {
  const checkboxToken = merge(token, {
    checkboxCls: `.${prefixCls}`,
    checkboxSize: token.controlInteractiveSize
  });
  return [genCheckboxStyle(checkboxToken)];
}
const useStyle$7 = genStyleHooks("Checkbox", (token, _ref) => {
  let {
    prefixCls
  } = _ref;
  return [getStyle(prefixCls, token)];
});
const GroupContext = /* @__PURE__ */ React.createContext(null);
var __rest$d = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalCheckbox = (props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    indeterminate = false,
    style,
    onMouseEnter,
    onMouseLeave,
    skipGroup = false,
    disabled
  } = props, restProps = __rest$d(props, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
  const {
    getPrefixCls,
    direction,
    checkbox
  } = reactExports.useContext(ConfigContext);
  const checkboxGroup = reactExports.useContext(GroupContext);
  const {
    isFormItemInput
  } = reactExports.useContext(FormItemInputContext);
  const contextDisabled = reactExports.useContext(DisabledContext);
  const mergedDisabled = (_a = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _a !== void 0 ? _a : contextDisabled;
  const prevValue = reactExports.useRef(restProps.value);
  reactExports.useEffect(() => {
    checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
  }, []);
  reactExports.useEffect(() => {
    if (skipGroup) {
      return;
    }
    if (restProps.value !== prevValue.current) {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
      prevValue.current = restProps.value;
    }
    return () => checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
  }, [restProps.value]);
  const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls, rootCls);
  const checkboxProps = Object.assign({}, restProps);
  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = function() {
      if (restProps.onChange) {
        restProps.onChange.apply(restProps, arguments);
      }
      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({
          label: children,
          value: restProps.value
        });
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
  }
  const classString = classNames(`${prefixCls}-wrapper`, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
    [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
    [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
  }, checkbox === null || checkbox === void 0 ? void 0 : checkbox.className, className, rootClassName, cssVarCls, rootCls, hashId);
  const checkboxClass = classNames({
    [`${prefixCls}-indeterminate`]: indeterminate
  }, TARGET_CLS, hashId);
  const ariaChecked = indeterminate ? "mixed" : void 0;
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(Wave, {
    component: "Checkbox",
    disabled: mergedDisabled
  }, /* @__PURE__ */ reactExports.createElement("label", {
    className: classString,
    style: Object.assign(Object.assign({}, checkbox === null || checkbox === void 0 ? void 0 : checkbox.style), style),
    onMouseEnter,
    onMouseLeave
  }, /* @__PURE__ */ reactExports.createElement(Checkbox$2, Object.assign({
    "aria-checked": ariaChecked
  }, checkboxProps, {
    prefixCls,
    className: checkboxClass,
    disabled: mergedDisabled,
    ref
  })), children !== void 0 && /* @__PURE__ */ reactExports.createElement("span", null, children))));
};
const Checkbox$1 = /* @__PURE__ */ reactExports.forwardRef(InternalCheckbox);
var __rest$c = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const CheckboxGroup = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    defaultValue,
    children,
    options = [],
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    onChange
  } = props, restProps = __rest$c(props, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const [value, setValue] = reactExports.useState(restProps.value || defaultValue || []);
  const [registeredValues, setRegisteredValues] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if ("value" in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);
  const memoOptions = reactExports.useMemo(() => options.map((option) => {
    if (typeof option === "string" || typeof option === "number") {
      return {
        label: option,
        value: option
      };
    }
    return option;
  }), [options]);
  const cancelValue = (val) => {
    setRegisteredValues((prevValues) => prevValues.filter((v) => v !== val));
  };
  const registerValue = (val) => {
    setRegisteredValues((prevValues) => [].concat(_toConsumableArray(prevValues), [val]));
  };
  const toggleOption = (option) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = _toConsumableArray(value);
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!("value" in restProps)) {
      setValue(newValue);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter((val) => registeredValues.includes(val)).sort((a, b) => {
      const indexA = memoOptions.findIndex((opt) => opt.value === a);
      const indexB = memoOptions.findIndex((opt) => opt.value === b);
      return indexA - indexB;
    }));
  };
  const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls, rootCls);
  const domProps = omit(restProps, ["value", "disabled"]);
  const childrenNode = options.length ? memoOptions.map((option) => /* @__PURE__ */ reactExports.createElement(Checkbox$1, {
    prefixCls,
    key: option.value.toString(),
    disabled: "disabled" in option ? option.disabled : restProps.disabled,
    value: option.value,
    checked: value.includes(option.value),
    onChange: option.onChange,
    className: `${groupPrefixCls}-item`,
    style: option.style,
    title: option.title,
    id: option.id,
    required: option.required
  }, option.label)) : children;
  const context = {
    toggleOption,
    value,
    disabled: restProps.disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue,
    cancelValue
  };
  const classString = classNames(groupPrefixCls, {
    [`${groupPrefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, cssVarCls, rootCls, hashId);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({
    className: classString,
    style
  }, domProps, {
    ref
  }), /* @__PURE__ */ reactExports.createElement(GroupContext.Provider, {
    value: context
  }, childrenNode)));
});
const Checkbox = Checkbox$1;
Checkbox.Group = CheckboxGroup;
Checkbox.__ANT_CHECKBOX = true;
const DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
const DescriptionsContext = /* @__PURE__ */ React.createContext({});
var __rest$b = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const transChildren2Items = (childNodes) => toArray$2(childNodes).map((node) => Object.assign(Object.assign({}, node === null || node === void 0 ? void 0 : node.props), {
  key: node.key
}));
function useItems(screens, items, children) {
  const mergedItems = reactExports.useMemo(() => (
    // Take `items` first or convert `children` into items
    items || transChildren2Items(children)
  ), [items, children]);
  const responsiveItems = reactExports.useMemo(() => mergedItems.map((_a) => {
    var {
      span
    } = _a, restItem = __rest$b(_a, ["span"]);
    return Object.assign(Object.assign({}, restItem), {
      span: typeof span === "number" ? span : matchScreen(screens, span)
    });
  }), [mergedItems, screens]);
  return responsiveItems;
}
function getFilledItem(rowItem, rowRestCol, span) {
  let clone = rowItem;
  let exceed = false;
  if (span === void 0 || span > rowRestCol) {
    clone = Object.assign(Object.assign({}, rowItem), {
      span: rowRestCol
    });
    exceed = span !== void 0;
  }
  return [clone, exceed];
}
function getCalcRows(rowItems, mergedColumn) {
  const rows = [];
  let tmpRow = [];
  let rowRestCol = mergedColumn;
  let exceed = false;
  rowItems.filter((n) => n).forEach((rowItem, index) => {
    const span = rowItem === null || rowItem === void 0 ? void 0 : rowItem.span;
    const mergedSpan = span || 1;
    if (index === rowItems.length - 1) {
      const [item, itemExceed] = getFilledItem(rowItem, rowRestCol, span);
      exceed = exceed || itemExceed;
      tmpRow.push(item);
      rows.push(tmpRow);
      return;
    }
    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(rowItem);
    } else {
      const [item, itemExceed] = getFilledItem(rowItem, rowRestCol, mergedSpan);
      exceed = exceed || itemExceed;
      tmpRow.push(item);
      rows.push(tmpRow);
      rowRestCol = mergedColumn;
      tmpRow = [];
    }
  });
  return [rows, exceed];
}
const useRow = (mergedColumn, items) => {
  const [rows, exceed] = reactExports.useMemo(() => getCalcRows(items, mergedColumn), [items, mergedColumn]);
  return rows;
};
const DescriptionsItem = (_ref) => {
  let {
    children
  } = _ref;
  return children;
};
function notEmpty(val) {
  return val !== void 0 && val !== null;
}
const Cell$2 = (props) => {
  const {
    itemPrefixCls,
    component,
    span,
    className,
    style,
    labelStyle,
    contentStyle,
    bordered,
    label,
    content,
    colon,
    type
  } = props;
  const Component = component;
  if (bordered) {
    return /* @__PURE__ */ reactExports.createElement(Component, {
      className: classNames({
        [`${itemPrefixCls}-item-label`]: type === "label",
        [`${itemPrefixCls}-item-content`]: type === "content"
      }, className),
      style,
      colSpan: span
    }, notEmpty(label) && /* @__PURE__ */ reactExports.createElement("span", {
      style: labelStyle
    }, label), notEmpty(content) && /* @__PURE__ */ reactExports.createElement("span", {
      style: contentStyle
    }, content));
  }
  return /* @__PURE__ */ reactExports.createElement(Component, {
    className: classNames(`${itemPrefixCls}-item`, className),
    style,
    colSpan: span
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: `${itemPrefixCls}-item-container`
  }, (label || label === 0) && /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(`${itemPrefixCls}-item-label`, {
      [`${itemPrefixCls}-item-no-colon`]: !colon
    }),
    style: labelStyle
  }, label), (content || content === 0) && /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(`${itemPrefixCls}-item-content`),
    style: contentStyle
  }, content)));
};
function renderCells(items, _ref, _ref2) {
  let {
    colon,
    prefixCls,
    bordered
  } = _ref;
  let {
    component,
    type,
    showLabel,
    showContent,
    labelStyle: rootLabelStyle,
    contentStyle: rootContentStyle
  } = _ref2;
  return items.map((_ref3, index) => {
    let {
      label,
      children,
      prefixCls: itemPrefixCls = prefixCls,
      className,
      style,
      labelStyle,
      contentStyle,
      span = 1,
      key
    } = _ref3;
    if (typeof component === "string") {
      return /* @__PURE__ */ reactExports.createElement(Cell$2, {
        key: `${type}-${key || index}`,
        className,
        style,
        labelStyle: Object.assign(Object.assign({}, rootLabelStyle), labelStyle),
        contentStyle: Object.assign(Object.assign({}, rootContentStyle), contentStyle),
        span,
        colon,
        component,
        itemPrefixCls,
        bordered,
        label: showLabel ? label : null,
        content: showContent ? children : null,
        type
      });
    }
    return [/* @__PURE__ */ reactExports.createElement(Cell$2, {
      key: `label-${key || index}`,
      className,
      style: Object.assign(Object.assign(Object.assign({}, rootLabelStyle), style), labelStyle),
      span: 1,
      colon,
      component: component[0],
      itemPrefixCls,
      bordered,
      label,
      type: "label"
    }), /* @__PURE__ */ reactExports.createElement(Cell$2, {
      key: `content-${key || index}`,
      className,
      style: Object.assign(Object.assign(Object.assign({}, rootContentStyle), style), contentStyle),
      span: span * 2 - 1,
      component: component[1],
      itemPrefixCls,
      bordered,
      content: children,
      type: "content"
    })];
  });
}
const Row = (props) => {
  const descContext = reactExports.useContext(DescriptionsContext);
  const {
    prefixCls,
    vertical,
    row,
    index,
    bordered
  } = props;
  if (vertical) {
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("tr", {
      key: `label-${index}`,
      className: `${prefixCls}-row`
    }, renderCells(row, props, Object.assign({
      component: "th",
      type: "label",
      showLabel: true
    }, descContext))), /* @__PURE__ */ reactExports.createElement("tr", {
      key: `content-${index}`,
      className: `${prefixCls}-row`
    }, renderCells(row, props, Object.assign({
      component: "td",
      type: "content",
      showContent: true
    }, descContext))));
  }
  return /* @__PURE__ */ reactExports.createElement("tr", {
    key: index,
    className: `${prefixCls}-row`
  }, renderCells(row, props, Object.assign({
    component: bordered ? ["th", "td"] : "td",
    type: "item",
    showLabel: true,
    showContent: true
  }, descContext)));
};
const genBorderedStyle$3 = (token) => {
  const {
    componentCls,
    labelBg
  } = token;
  return {
    [`&${componentCls}-bordered`]: {
      [`> ${componentCls}-view`]: {
        overflow: "hidden",
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
        "> table": {
          tableLayout: "auto"
        },
        [`${componentCls}-row`]: {
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
          "&:last-child": {
            borderBottom: "none"
          },
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${unit(token.padding)} ${unit(token.paddingLG)}`,
            borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            "&:last-child": {
              borderInlineEnd: "none"
            }
          },
          [`> ${componentCls}-item-label`]: {
            color: token.colorTextSecondary,
            backgroundColor: labelBg,
            "&::after": {
              display: "none"
            }
          }
        }
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${unit(token.paddingSM)} ${unit(token.paddingLG)}`
          }
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${unit(token.paddingXS)} ${unit(token.padding)}`
          }
        }
      }
    }
  };
};
const genDescriptionStyles = (token) => {
  const {
    componentCls,
    extraColor,
    itemPaddingBottom,
    itemPaddingEnd,
    colonMarginRight,
    colonMarginLeft,
    titleMarginBottom
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genBorderedStyle$3(token)), {
      "&-rtl": {
        direction: "rtl"
      },
      [`${componentCls}-header`]: {
        display: "flex",
        alignItems: "center",
        marginBottom: titleMarginBottom
      },
      [`${componentCls}-title`]: Object.assign(Object.assign({}, textEllipsis), {
        flex: "auto",
        color: token.titleColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeLG,
        lineHeight: token.lineHeightLG
      }),
      [`${componentCls}-extra`]: {
        marginInlineStart: "auto",
        color: extraColor,
        fontSize: token.fontSize
      },
      [`${componentCls}-view`]: {
        width: "100%",
        borderRadius: token.borderRadiusLG,
        table: {
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse"
        }
      },
      [`${componentCls}-row`]: {
        "> th, > td": {
          paddingBottom: itemPaddingBottom,
          paddingInlineEnd: itemPaddingEnd
        },
        "> th:last-child, > td:last-child": {
          paddingInlineEnd: 0
        },
        "&:last-child": {
          borderBottom: "none",
          "> th, > td": {
            paddingBottom: 0
          }
        }
      },
      [`${componentCls}-item-label`]: {
        color: token.colorTextTertiary,
        fontWeight: "normal",
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        textAlign: "start",
        "&::after": {
          content: '":"',
          position: "relative",
          top: -0.5,
          // magic for position
          marginInline: `${unit(colonMarginLeft)} ${unit(colonMarginRight)}`
        },
        [`&${componentCls}-item-no-colon::after`]: {
          content: '""'
        }
      },
      [`${componentCls}-item-no-label`]: {
        "&::after": {
          margin: 0,
          content: '""'
        }
      },
      [`${componentCls}-item-content`]: {
        display: "table-cell",
        flex: 1,
        color: token.contentColor,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordBreak: "break-word",
        overflowWrap: "break-word"
      },
      [`${componentCls}-item`]: {
        paddingBottom: 0,
        verticalAlign: "top",
        "&-container": {
          display: "flex",
          [`${componentCls}-item-label`]: {
            display: "inline-flex",
            alignItems: "baseline"
          },
          [`${componentCls}-item-content`]: {
            display: "inline-flex",
            alignItems: "baseline",
            minWidth: 0
          }
        }
      },
      "&-middle": {
        [`${componentCls}-row`]: {
          "> th, > td": {
            paddingBottom: token.paddingSM
          }
        }
      },
      "&-small": {
        [`${componentCls}-row`]: {
          "> th, > td": {
            paddingBottom: token.paddingXS
          }
        }
      }
    })
  };
};
const prepareComponentToken$6 = (token) => ({
  labelBg: token.colorFillAlter,
  titleColor: token.colorText,
  titleMarginBottom: token.fontSizeSM * token.lineHeightSM,
  itemPaddingBottom: token.padding,
  itemPaddingEnd: token.padding,
  colonMarginRight: token.marginXS,
  colonMarginLeft: token.marginXXS / 2,
  contentColor: token.colorText,
  extraColor: token.colorText
});
const useStyle$6 = genStyleHooks("Descriptions", (token) => {
  const descriptionToken = merge(token, {});
  return genDescriptionStyles(descriptionToken);
}, prepareComponentToken$6);
var __rest$a = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Descriptions = (props) => {
  const {
    prefixCls: customizePrefixCls,
    title,
    extra,
    column,
    colon = true,
    bordered,
    layout,
    children,
    className,
    rootClassName,
    style,
    size: customizeSize,
    labelStyle,
    contentStyle,
    items
  } = props, restProps = __rest$a(props, ["prefixCls", "title", "extra", "column", "colon", "bordered", "layout", "children", "className", "rootClassName", "style", "size", "labelStyle", "contentStyle", "items"]);
  const {
    getPrefixCls,
    direction,
    descriptions
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("descriptions", customizePrefixCls);
  const screens = useBreakpoint();
  const mergedColumn = reactExports.useMemo(() => {
    var _a;
    if (typeof column === "number") {
      return column;
    }
    return (_a = matchScreen(screens, Object.assign(Object.assign({}, DEFAULT_COLUMN_MAP), column))) !== null && _a !== void 0 ? _a : 3;
  }, [screens, column]);
  const mergedItems = useItems(screens, items, children);
  const mergedSize = useSize(customizeSize);
  const rows = useRow(mergedColumn, mergedItems);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
  const contextValue = reactExports.useMemo(() => ({
    labelStyle,
    contentStyle
  }), [labelStyle, contentStyle]);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(DescriptionsContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ reactExports.createElement("div", Object.assign({
    className: classNames(prefixCls, descriptions === null || descriptions === void 0 ? void 0 : descriptions.className, {
      [`${prefixCls}-${mergedSize}`]: mergedSize && mergedSize !== "default",
      [`${prefixCls}-bordered`]: !!bordered,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName, hashId, cssVarCls),
    style: Object.assign(Object.assign({}, descriptions === null || descriptions === void 0 ? void 0 : descriptions.style), style)
  }, restProps), (title || extra) && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-header`
  }, title && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-title`
  }, title), extra && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-extra`
  }, extra)), /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-view`
  }, /* @__PURE__ */ reactExports.createElement("table", null, /* @__PURE__ */ reactExports.createElement("tbody", null, rows.map((row, index) => /* @__PURE__ */ reactExports.createElement(Row, {
    key: index,
    index,
    colon,
    prefixCls,
    vertical: layout === "vertical",
    bordered,
    row
  }))))))));
};
Descriptions.Item = DescriptionsItem;
const SpaceContext = /* @__PURE__ */ React.createContext({
  latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
const Item$1 = (_ref) => {
  let {
    className,
    index,
    children,
    split,
    style
  } = _ref;
  const {
    latestIndex
  } = reactExports.useContext(SpaceContext);
  if (children === null || children === void 0) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("div", {
    className,
    style
  }, children), index < latestIndex && split && /* @__PURE__ */ reactExports.createElement("span", {
    className: `${className}-split`
  }, split));
};
var __rest$9 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalSpace = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var _a, _b, _c;
  const {
    getPrefixCls,
    space,
    direction: directionConfig
  } = reactExports.useContext(ConfigContext);
  const {
    size = (_a = space === null || space === void 0 ? void 0 : space.size) !== null && _a !== void 0 ? _a : "small",
    align,
    className,
    rootClassName,
    children,
    direction = "horizontal",
    prefixCls: customizePrefixCls,
    split,
    style,
    wrap = false,
    classNames: customClassNames,
    styles
  } = props, otherProps = __rest$9(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = isPresetSize(verticalSize);
  const isPresetHorizontalSize = isPresetSize(horizontalSize);
  const isValidVerticalSize = isValidGapNumber(verticalSize);
  const isValidHorizontalSize = isValidGapNumber(horizontalSize);
  const childNodes = toArray$2(children, {
    keepEmpty: true
  });
  const mergedAlign = align === void 0 && direction === "horizontal" ? "center" : align;
  const prefixCls = getPrefixCls("space", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$b(prefixCls);
  const cls = classNames(prefixCls, space === null || space === void 0 ? void 0 : space.className, hashId, `${prefixCls}-${direction}`, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
    [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
  }, className, rootClassName, cssVarCls);
  const itemClassName = classNames(`${prefixCls}-item`, (_b = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _b !== void 0 ? _b : (_c = space === null || space === void 0 ? void 0 : space.classNames) === null || _c === void 0 ? void 0 : _c.item);
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    var _a2, _b2;
    if (child !== null && child !== void 0) {
      latestIndex = i;
    }
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${itemClassName}-${i}`;
    return /* @__PURE__ */ reactExports.createElement(Item$1, {
      className: itemClassName,
      key,
      index: i,
      split,
      style: (_a2 = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a2 !== void 0 ? _a2 : (_b2 = space === null || space === void 0 ? void 0 : space.styles) === null || _b2 === void 0 ? void 0 : _b2.item
    }, child);
  });
  const spaceContext = reactExports.useMemo(() => ({
    latestIndex
  }), [latestIndex]);
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = "wrap";
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({
    ref,
    className: cls,
    style: Object.assign(Object.assign(Object.assign({}, gapStyle), space === null || space === void 0 ? void 0 : space.style), style)
  }, otherProps), /* @__PURE__ */ reactExports.createElement(SpaceContextProvider, {
    value: spaceContext
  }, nodes)));
});
const Space = InternalSpace;
Space.Compact = Compact;
const Space$1 = Space;
var __rest$8 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DropdownButton = (props) => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    type = "default",
    danger,
    disabled,
    loading,
    onClick,
    htmlType,
    children,
    className,
    menu,
    arrow,
    autoFocus,
    overlay,
    trigger,
    align,
    open,
    onOpenChange,
    placement,
    getPopupContainer,
    href,
    icon = /* @__PURE__ */ reactExports.createElement(RefIcon$j, null),
    title,
    buttonsRender = (buttons) => buttons,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    destroyPopupOnHide,
    dropdownRender
  } = props, restProps = __rest$8(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]);
  const prefixCls = getPrefixCls("dropdown", customizePrefixCls);
  const buttonPrefixCls = `${prefixCls}-button`;
  const dropdownProps = {
    menu,
    arrow,
    autoFocus,
    align,
    disabled,
    trigger: disabled ? [] : trigger,
    onOpenChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    destroyPopupOnHide,
    dropdownRender
  };
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const classes = classNames(buttonPrefixCls, compactItemClassnames, className);
  if ("overlay" in props) {
    dropdownProps.overlay = overlay;
  }
  if ("open" in props) {
    dropdownProps.open = open;
  }
  if ("placement" in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === "rtl" ? "bottomLeft" : "bottomRight";
  }
  const leftButton = /* @__PURE__ */ reactExports.createElement(Button$1, {
    type,
    danger,
    disabled,
    loading,
    onClick,
    htmlType,
    href,
    title
  }, children);
  const rightButton = /* @__PURE__ */ reactExports.createElement(Button$1, {
    type,
    danger,
    icon
  });
  const [leftButtonToRender, rightButtonToRender] = buttonsRender([leftButton, rightButton]);
  return /* @__PURE__ */ reactExports.createElement(Space$1.Compact, Object.assign({
    className: classes,
    size: compactSize,
    block: true
  }, restProps), leftButtonToRender, /* @__PURE__ */ reactExports.createElement(Dropdown$2, Object.assign({}, dropdownProps), rightButtonToRender));
};
DropdownButton.__ANT_BUTTON = true;
const Dropdown = Dropdown$2;
Dropdown.Button = DropdownButton;
const Dropdown$1 = Dropdown;
const extendsObject = function() {
  const result = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]);
  for (let i = 1; i < arguments.length; i++) {
    const obj = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key];
        if (val !== void 0) {
          result[key] = val;
        }
      });
    }
  }
  return result;
};
var DoubleLeftOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
var DoubleLeftOutlined = function DoubleLeftOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: DoubleLeftOutlined$1
  }));
};
var RefIcon$b = /* @__PURE__ */ reactExports.forwardRef(DoubleLeftOutlined);
var DoubleRightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };
var DoubleRightOutlined = function DoubleRightOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: DoubleRightOutlined$1
  }));
};
var RefIcon$a = /* @__PURE__ */ reactExports.forwardRef(DoubleRightOutlined);
var locale = {
  // Options
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
};
var defaultPageSizeOptions = ["10", "20", "50", "100"];
var Options = function Options2(props) {
  var _props$pageSizeOption = props.pageSizeOptions, pageSizeOptions = _props$pageSizeOption === void 0 ? defaultPageSizeOptions : _props$pageSizeOption, locale2 = props.locale, changeSize = props.changeSize, pageSize = props.pageSize, goButton = props.goButton, quickGo = props.quickGo, rootPrefixCls = props.rootPrefixCls, Select2 = props.selectComponentClass, selectPrefixCls = props.selectPrefixCls, disabled = props.disabled, buildOptionText = props.buildOptionText;
  var _React$useState = React.useState(""), _React$useState2 = _slicedToArray(_React$useState, 2), goInputText = _React$useState2[0], setGoInputText = _React$useState2[1];
  var getValidValue = function getValidValue2() {
    return !goInputText || Number.isNaN(goInputText) ? void 0 : Number(goInputText);
  };
  var mergeBuildOptionText = typeof buildOptionText === "function" ? buildOptionText : function(value) {
    return "".concat(value, " ").concat(locale2.items_per_page);
  };
  var changeSizeHandle = function changeSizeHandle2(value) {
    changeSize === null || changeSize === void 0 || changeSize(Number(value));
  };
  var handleChange = function handleChange2(e) {
    setGoInputText(e.target.value);
  };
  var handleBlur = function handleBlur2(e) {
    if (goButton || goInputText === "") {
      return;
    }
    setGoInputText("");
    if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
      return;
    }
    quickGo === null || quickGo === void 0 || quickGo(getValidValue());
  };
  var go = function go2(e) {
    if (goInputText === "") {
      return;
    }
    if (e.keyCode === KeyCode.ENTER || e.type === "click") {
      setGoInputText("");
      quickGo === null || quickGo === void 0 || quickGo(getValidValue());
    }
  };
  var getPageSizeOptions = function getPageSizeOptions2() {
    if (pageSizeOptions.some(function(option) {
      return option.toString() === pageSize.toString();
    })) {
      return pageSizeOptions;
    }
    return pageSizeOptions.concat([pageSize.toString()]).sort(function(a, b) {
      var numberA = Number.isNaN(Number(a)) ? 0 : Number(a);
      var numberB = Number.isNaN(Number(b)) ? 0 : Number(b);
      return numberA - numberB;
    });
  };
  var prefixCls = "".concat(rootPrefixCls, "-options");
  if (!changeSize && !quickGo) {
    return null;
  }
  var changeSelect = null;
  var goInput = null;
  var gotoButton = null;
  if (changeSize && Select2) {
    var options = getPageSizeOptions().map(function(opt, i) {
      return /* @__PURE__ */ React.createElement(Select2.Option, {
        key: i,
        value: opt.toString()
      }, mergeBuildOptionText(opt));
    });
    changeSelect = /* @__PURE__ */ React.createElement(Select2, {
      disabled,
      prefixCls: selectPrefixCls,
      showSearch: false,
      className: "".concat(prefixCls, "-size-changer"),
      optionLabelProp: "children",
      popupMatchSelectWidth: false,
      value: (pageSize || pageSizeOptions[0]).toString(),
      onChange: changeSizeHandle,
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentNode;
      },
      "aria-label": locale2.page_size,
      defaultOpen: false
    }, options);
  }
  if (quickGo) {
    if (goButton) {
      gotoButton = typeof goButton === "boolean" ? /* @__PURE__ */ React.createElement("button", {
        type: "button",
        onClick: go,
        onKeyUp: go,
        disabled,
        className: "".concat(prefixCls, "-quick-jumper-button")
      }, locale2.jump_to_confirm) : /* @__PURE__ */ React.createElement("span", {
        onClick: go,
        onKeyUp: go
      }, goButton);
    }
    goInput = /* @__PURE__ */ React.createElement("div", {
      className: "".concat(prefixCls, "-quick-jumper")
    }, locale2.jump_to, /* @__PURE__ */ React.createElement("input", {
      disabled,
      type: "text",
      value: goInputText,
      onChange: handleChange,
      onKeyUp: go,
      onBlur: handleBlur,
      "aria-label": locale2.page
    }), locale2.page, gotoButton);
  }
  return /* @__PURE__ */ React.createElement("li", {
    className: prefixCls
  }, changeSelect, goInput);
};
var Pager = function Pager2(props) {
  var _classNames;
  var rootPrefixCls = props.rootPrefixCls, page = props.page, active = props.active, className = props.className, showTitle = props.showTitle, onClick = props.onClick, onKeyPress = props.onKeyPress, itemRender = props.itemRender;
  var prefixCls = "".concat(rootPrefixCls, "-item");
  var cls = classNames(prefixCls, "".concat(prefixCls, "-").concat(page), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-active"), active), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), !page), _classNames), className);
  var handleClick = function handleClick2() {
    onClick(page);
  };
  var handleKeyPress = function handleKeyPress2(e) {
    onKeyPress(e, onClick, page);
  };
  var pager = itemRender(page, "page", /* @__PURE__ */ React.createElement("a", {
    rel: "nofollow"
  }, page));
  return pager ? /* @__PURE__ */ React.createElement("li", {
    title: showTitle ? String(page) : null,
    className: cls,
    onClick: handleClick,
    onKeyDown: handleKeyPress,
    tabIndex: 0
  }, pager) : null;
};
var defaultItemRender = function defaultItemRender2(page, type, element) {
  return element;
};
function noop$1() {
}
function isInteger(v) {
  var value = Number(v);
  return typeof value === "number" && !Number.isNaN(value) && isFinite(value) && Math.floor(value) === value;
}
function calculatePage(p, pageSize, total) {
  var _pageSize = typeof p === "undefined" ? pageSize : p;
  return Math.floor((total - 1) / _pageSize) + 1;
}
var Pagination$1 = function Pagination2(props) {
  var _classNames5;
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-pagination" : _props$prefixCls, _props$selectPrefixCl = props.selectPrefixCls, selectPrefixCls = _props$selectPrefixCl === void 0 ? "rc-select" : _props$selectPrefixCl, className = props.className, selectComponentClass = props.selectComponentClass, currentProp = props.current, _props$defaultCurrent = props.defaultCurrent, defaultCurrent = _props$defaultCurrent === void 0 ? 1 : _props$defaultCurrent, _props$total = props.total, total = _props$total === void 0 ? 0 : _props$total, pageSizeProp = props.pageSize, _props$defaultPageSiz = props.defaultPageSize, defaultPageSize = _props$defaultPageSiz === void 0 ? 10 : _props$defaultPageSiz, _props$onChange = props.onChange, onChange = _props$onChange === void 0 ? noop$1 : _props$onChange, hideOnSinglePage = props.hideOnSinglePage, align = props.align, _props$showPrevNextJu = props.showPrevNextJumpers, showPrevNextJumpers = _props$showPrevNextJu === void 0 ? true : _props$showPrevNextJu, showQuickJumper = props.showQuickJumper, showLessItems = props.showLessItems, _props$showTitle = props.showTitle, showTitle = _props$showTitle === void 0 ? true : _props$showTitle, _props$onShowSizeChan = props.onShowSizeChange, onShowSizeChange = _props$onShowSizeChan === void 0 ? noop$1 : _props$onShowSizeChan, _props$locale = props.locale, locale$12 = _props$locale === void 0 ? locale : _props$locale, style = props.style, _props$totalBoundaryS = props.totalBoundaryShowSizeChanger, totalBoundaryShowSizeChanger = _props$totalBoundaryS === void 0 ? 50 : _props$totalBoundaryS, disabled = props.disabled, simple = props.simple, showTotal = props.showTotal, showSizeChangerProp = props.showSizeChanger, pageSizeOptions = props.pageSizeOptions, _props$itemRender = props.itemRender, itemRender = _props$itemRender === void 0 ? defaultItemRender : _props$itemRender, jumpPrevIcon = props.jumpPrevIcon, jumpNextIcon = props.jumpNextIcon, prevIcon = props.prevIcon, nextIcon = props.nextIcon;
  var paginationRef = React.useRef(null);
  var _useMergedState = useMergedState(10, {
    value: pageSizeProp,
    defaultValue: defaultPageSize
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), pageSize = _useMergedState2[0], setPageSize = _useMergedState2[1];
  var _useMergedState3 = useMergedState(1, {
    value: currentProp,
    defaultValue: defaultCurrent,
    postState: function postState(c) {
      return Math.max(1, Math.min(c, calculatePage(void 0, pageSize, total)));
    }
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), current = _useMergedState4[0], setCurrent = _useMergedState4[1];
  var _React$useState = React.useState(current), _React$useState2 = _slicedToArray(_React$useState, 2), internalInputVal = _React$useState2[0], setInternalInputVal = _React$useState2[1];
  reactExports.useEffect(function() {
    setInternalInputVal(current);
  }, [current]);
  var jumpPrevPage = Math.max(1, current - (showLessItems ? 3 : 5));
  var jumpNextPage = Math.min(calculatePage(void 0, pageSize, total), current + (showLessItems ? 3 : 5));
  function getItemIcon(icon, label) {
    var iconNode = icon || /* @__PURE__ */ React.createElement("button", {
      type: "button",
      "aria-label": label,
      className: "".concat(prefixCls, "-item-link")
    });
    if (typeof icon === "function") {
      iconNode = /* @__PURE__ */ React.createElement(icon, _objectSpread2({}, props));
    }
    return iconNode;
  }
  function getValidValue(e) {
    var inputValue = e.target.value;
    var allPages2 = calculatePage(void 0, pageSize, total);
    var value;
    if (inputValue === "") {
      value = inputValue;
    } else if (Number.isNaN(Number(inputValue))) {
      value = internalInputVal;
    } else if (inputValue >= allPages2) {
      value = allPages2;
    } else {
      value = Number(inputValue);
    }
    return value;
  }
  function isValid(page) {
    return isInteger(page) && page !== current && isInteger(total) && total > 0;
  }
  var shouldDisplayQuickJumper = total > pageSize ? showQuickJumper : false;
  function handleKeyDown(event) {
    if (event.keyCode === KeyCode.UP || event.keyCode === KeyCode.DOWN) {
      event.preventDefault();
    }
  }
  function handleKeyUp(event) {
    var value = getValidValue(event);
    if (value !== internalInputVal) {
      setInternalInputVal(value);
    }
    switch (event.keyCode) {
      case KeyCode.ENTER:
        handleChange(value);
        break;
      case KeyCode.UP:
        handleChange(value - 1);
        break;
      case KeyCode.DOWN:
        handleChange(value + 1);
        break;
    }
  }
  function handleBlur(event) {
    handleChange(getValidValue(event));
  }
  function changePageSize(size) {
    var newCurrent = calculatePage(size, pageSize, total);
    var nextCurrent = current > newCurrent && newCurrent !== 0 ? newCurrent : current;
    setPageSize(size);
    setInternalInputVal(nextCurrent);
    onShowSizeChange === null || onShowSizeChange === void 0 || onShowSizeChange(current, size);
    setCurrent(nextCurrent);
    onChange === null || onChange === void 0 || onChange(nextCurrent, size);
  }
  function handleChange(page) {
    if (isValid(page) && !disabled) {
      var currentPage = calculatePage(void 0, pageSize, total);
      var newPage = page;
      if (page > currentPage) {
        newPage = currentPage;
      } else if (page < 1) {
        newPage = 1;
      }
      if (newPage !== internalInputVal) {
        setInternalInputVal(newPage);
      }
      setCurrent(newPage);
      onChange === null || onChange === void 0 || onChange(newPage, pageSize);
      return newPage;
    }
    return current;
  }
  var hasPrev = current > 1;
  var hasNext = current < calculatePage(void 0, pageSize, total);
  var showSizeChanger = showSizeChangerProp !== null && showSizeChangerProp !== void 0 ? showSizeChangerProp : total > totalBoundaryShowSizeChanger;
  function prevHandle() {
    if (hasPrev) handleChange(current - 1);
  }
  function nextHandle() {
    if (hasNext) handleChange(current + 1);
  }
  function jumpPrevHandle() {
    handleChange(jumpPrevPage);
  }
  function jumpNextHandle() {
    handleChange(jumpNextPage);
  }
  function runIfEnter(event, callback) {
    if (event.key === "Enter" || event.charCode === KeyCode.ENTER || event.keyCode === KeyCode.ENTER) {
      for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        restParams[_key - 2] = arguments[_key];
      }
      callback.apply(void 0, restParams);
    }
  }
  function runIfEnterPrev(event) {
    runIfEnter(event, prevHandle);
  }
  function runIfEnterNext(event) {
    runIfEnter(event, nextHandle);
  }
  function runIfEnterJumpPrev(event) {
    runIfEnter(event, jumpPrevHandle);
  }
  function runIfEnterJumpNext(event) {
    runIfEnter(event, jumpNextHandle);
  }
  function renderPrev(prevPage2) {
    var prevButton = itemRender(prevPage2, "prev", getItemIcon(prevIcon, "prev page"));
    return /* @__PURE__ */ React.isValidElement(prevButton) ? /* @__PURE__ */ React.cloneElement(prevButton, {
      disabled: !hasPrev
    }) : prevButton;
  }
  function renderNext(nextPage2) {
    var nextButton = itemRender(nextPage2, "next", getItemIcon(nextIcon, "next page"));
    return /* @__PURE__ */ React.isValidElement(nextButton) ? /* @__PURE__ */ React.cloneElement(nextButton, {
      disabled: !hasNext
    }) : nextButton;
  }
  function handleGoTO(event) {
    if (event.type === "click" || event.keyCode === KeyCode.ENTER) {
      handleChange(internalInputVal);
    }
  }
  var jumpPrev = null;
  var dataOrAriaAttributeProps = pickAttrs(props, {
    aria: true,
    data: true
  });
  var totalText = showTotal && /* @__PURE__ */ React.createElement("li", {
    className: "".concat(prefixCls, "-total-text")
  }, showTotal(total, [total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize]));
  var jumpNext = null;
  var allPages = calculatePage(void 0, pageSize, total);
  if (hideOnSinglePage && total <= pageSize) {
    return null;
  }
  var pagerList = [];
  var pagerProps = {
    rootPrefixCls: prefixCls,
    onClick: handleChange,
    onKeyPress: runIfEnter,
    showTitle,
    itemRender,
    page: -1
  };
  var prevPage = current - 1 > 0 ? current - 1 : 0;
  var nextPage = current + 1 < allPages ? current + 1 : allPages;
  var goButton = showQuickJumper && showQuickJumper.goButton;
  var isReadOnly = _typeof(simple) === "object" ? simple.readOnly : !simple;
  var gotoButton = goButton;
  var simplePager = null;
  if (simple) {
    if (goButton) {
      if (typeof goButton === "boolean") {
        gotoButton = /* @__PURE__ */ React.createElement("button", {
          type: "button",
          onClick: handleGoTO,
          onKeyUp: handleGoTO
        }, locale$12.jump_to_confirm);
      } else {
        gotoButton = /* @__PURE__ */ React.createElement("span", {
          onClick: handleGoTO,
          onKeyUp: handleGoTO
        }, goButton);
      }
      gotoButton = /* @__PURE__ */ React.createElement("li", {
        title: showTitle ? "".concat(locale$12.jump_to).concat(current, "/").concat(allPages) : null,
        className: "".concat(prefixCls, "-simple-pager")
      }, gotoButton);
    }
    simplePager = /* @__PURE__ */ React.createElement("li", {
      title: showTitle ? "".concat(current, "/").concat(allPages) : null,
      className: "".concat(prefixCls, "-simple-pager")
    }, isReadOnly ? internalInputVal : /* @__PURE__ */ React.createElement("input", {
      type: "text",
      value: internalInputVal,
      disabled,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onChange: handleKeyUp,
      onBlur: handleBlur,
      size: 3
    }), /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-slash")
    }, "/"), allPages);
  }
  var pageBufferSize = showLessItems ? 1 : 2;
  if (allPages <= 3 + pageBufferSize * 2) {
    if (!allPages) {
      pagerList.push(/* @__PURE__ */ React.createElement(Pager, _extends({}, pagerProps, {
        key: "noPager",
        page: 1,
        className: "".concat(prefixCls, "-item-disabled")
      })));
    }
    for (var i = 1; i <= allPages; i += 1) {
      pagerList.push(/* @__PURE__ */ React.createElement(Pager, _extends({}, pagerProps, {
        key: i,
        page: i,
        active: current === i
      })));
    }
  } else {
    var prevItemTitle = showLessItems ? locale$12.prev_3 : locale$12.prev_5;
    var nextItemTitle = showLessItems ? locale$12.next_3 : locale$12.next_5;
    var jumpPrevContent = itemRender(jumpPrevPage, "jump-prev", getItemIcon(jumpPrevIcon, "prev page"));
    var jumpNextContent = itemRender(jumpNextPage, "jump-next", getItemIcon(jumpNextIcon, "next page"));
    if (showPrevNextJumpers) {
      jumpPrev = jumpPrevContent ? /* @__PURE__ */ React.createElement("li", {
        title: showTitle ? prevItemTitle : null,
        key: "prev",
        onClick: jumpPrevHandle,
        tabIndex: 0,
        onKeyDown: runIfEnterJumpPrev,
        className: classNames("".concat(prefixCls, "-jump-prev"), _defineProperty({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
      }, jumpPrevContent) : null;
      jumpNext = jumpNextContent ? /* @__PURE__ */ React.createElement("li", {
        title: showTitle ? nextItemTitle : null,
        key: "next",
        onClick: jumpNextHandle,
        tabIndex: 0,
        onKeyDown: runIfEnterJumpNext,
        className: classNames("".concat(prefixCls, "-jump-next"), _defineProperty({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
      }, jumpNextContent) : null;
    }
    var left = Math.max(1, current - pageBufferSize);
    var right = Math.min(current + pageBufferSize, allPages);
    if (current - 1 <= pageBufferSize) {
      right = 1 + pageBufferSize * 2;
    }
    if (allPages - current <= pageBufferSize) {
      left = allPages - pageBufferSize * 2;
    }
    for (var _i = left; _i <= right; _i += 1) {
      pagerList.push(/* @__PURE__ */ React.createElement(Pager, _extends({}, pagerProps, {
        key: _i,
        page: _i,
        active: current === _i
      })));
    }
    if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
      pagerList[0] = /* @__PURE__ */ React.cloneElement(pagerList[0], {
        className: classNames("".concat(prefixCls, "-item-after-jump-prev"), pagerList[0].props.className)
      });
      pagerList.unshift(jumpPrev);
    }
    if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
      var lastOne = pagerList[pagerList.length - 1];
      pagerList[pagerList.length - 1] = /* @__PURE__ */ React.cloneElement(lastOne, {
        className: classNames("".concat(prefixCls, "-item-before-jump-next"), lastOne.props.className)
      });
      pagerList.push(jumpNext);
    }
    if (left !== 1) {
      pagerList.unshift(/* @__PURE__ */ React.createElement(Pager, _extends({}, pagerProps, {
        key: 1,
        page: 1
      })));
    }
    if (right !== allPages) {
      pagerList.push(/* @__PURE__ */ React.createElement(Pager, _extends({}, pagerProps, {
        key: allPages,
        page: allPages
      })));
    }
  }
  var prev = renderPrev(prevPage);
  if (prev) {
    var prevDisabled = !hasPrev || !allPages;
    prev = /* @__PURE__ */ React.createElement("li", {
      title: showTitle ? locale$12.prev_page : null,
      onClick: prevHandle,
      tabIndex: prevDisabled ? null : 0,
      onKeyDown: runIfEnterPrev,
      className: classNames("".concat(prefixCls, "-prev"), _defineProperty({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
      "aria-disabled": prevDisabled
    }, prev);
  }
  var next = renderNext(nextPage);
  if (next) {
    var nextDisabled, nextTabIndex;
    if (simple) {
      nextDisabled = !hasNext;
      nextTabIndex = hasPrev ? 0 : null;
    } else {
      nextDisabled = !hasNext || !allPages;
      nextTabIndex = nextDisabled ? null : 0;
    }
    next = /* @__PURE__ */ React.createElement("li", {
      title: showTitle ? locale$12.next_page : null,
      onClick: nextHandle,
      tabIndex: nextTabIndex,
      onKeyDown: runIfEnterNext,
      className: classNames("".concat(prefixCls, "-next"), _defineProperty({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
      "aria-disabled": nextDisabled
    }, next);
  }
  var cls = classNames(prefixCls, className, (_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefixCls, "-start"), align === "start"), _defineProperty(_classNames5, "".concat(prefixCls, "-center"), align === "center"), _defineProperty(_classNames5, "".concat(prefixCls, "-end"), align === "end"), _defineProperty(_classNames5, "".concat(prefixCls, "-simple"), simple), _defineProperty(_classNames5, "".concat(prefixCls, "-disabled"), disabled), _classNames5));
  return /* @__PURE__ */ React.createElement("ul", _extends({
    className: cls,
    style,
    ref: paginationRef
  }, dataOrAriaAttributeProps), totalText, prev, simple ? simplePager : pagerList, next, /* @__PURE__ */ React.createElement(Options, {
    locale: locale$12,
    rootPrefixCls: prefixCls,
    disabled,
    selectComponentClass,
    selectPrefixCls,
    changeSize: showSizeChanger ? changePageSize : null,
    pageSize,
    pageSizeOptions,
    quickGo: shouldDisplayQuickJumper ? handleChange : null,
    goButton: gotoButton
  }));
};
const MiniSelect = (props) => /* @__PURE__ */ reactExports.createElement(Select, Object.assign({}, props, {
  showSearch: true,
  size: "small"
}));
const MiddleSelect = (props) => /* @__PURE__ */ reactExports.createElement(Select, Object.assign({}, props, {
  showSearch: true,
  size: "middle"
}));
MiniSelect.Option = Select.Option;
MiddleSelect.Option = Select.Option;
const genPaginationDisabledStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${componentCls}-disabled`]: {
      cursor: "not-allowed",
      [`${componentCls}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: token.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: token.colorBorder,
          backgroundColor: token.itemActiveBgDisabled,
          "&:hover, &:active": {
            backgroundColor: token.itemActiveBgDisabled
          },
          a: {
            color: token.itemActiveColorDisabled
          }
        }
      },
      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
};
const genPaginationMiniStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
      height: token.itemSizeSM,
      lineHeight: unit(token.itemSizeSM)
    },
    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: unit(token.calc(token.itemSizeSM).sub(2).equal())
    },
    [`&${componentCls}-mini:not(${componentCls}-disabled) ${componentCls}-item:not(${componentCls}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: token.colorBgTextHover
      },
      "&:active": {
        backgroundColor: token.colorBgTextActive
      }
    },
    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: unit(token.itemSizeSM)
    },
    [`&${componentCls}-mini:not(${componentCls}-disabled)`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:hover ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextHover
        },
        [`&:active ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextActive
        },
        [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM)
      }
    },
    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
      height: token.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: unit(token.itemSizeSM)
    },
    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
      "&-size-changer": {
        top: token.miniOptionsSizeChangerTop
      },
      "&-quick-jumper": {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM),
        input: Object.assign(Object.assign({}, genInputSmallStyle(token)), {
          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM
        })
      }
    }
  };
};
const genPaginationSimpleStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.itemSizeSM,
      lineHeight: unit(token.itemSizeSM),
      verticalAlign: "top",
      [`${componentCls}-item-link`]: {
        height: token.itemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        },
        "&::after": {
          height: token.itemSizeSM,
          lineHeight: unit(token.itemSizeSM)
        }
      }
    },
    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: "inline-block",
      height: token.itemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        padding: `0 ${unit(token.paginationItemPaddingInline)}`,
        textAlign: "center",
        backgroundColor: token.itemInputBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `border-color ${token.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: token.colorPrimary
        },
        "&:focus": {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${unit(token.inputOutlineOffset)} 0 ${unit(token.controlOutlineWidth)} ${token.controlOutline}`
        },
        "&[disabled]": {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
};
const genPaginationJumpStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,
      [`${componentCls}-item-container`]: {
        position: "relative",
        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${componentCls}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: token.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      }
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: "inline-block",
      minWidth: token.itemSize,
      height: token.itemSize,
      color: token.colorText,
      fontFamily: token.fontFamily,
      lineHeight: unit(token.itemSize),
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: token.borderRadius,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid}`
    },
    [`${componentCls}-prev, ${componentCls}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: token.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${componentCls}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `all ${token.motionDurationMid}`
      },
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    },
    [`${componentCls}-options`]: {
      display: "inline-block",
      marginInlineStart: token.margin,
      verticalAlign: "middle",
      "&-size-changer": {
        display: "inline-block",
        width: "auto",
        // https://github.com/ant-design/ant-design/issues/49258
        [`${antCls}-select-arrow:not(:last-child)`]: {
          opacity: 1
        }
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: unit(token.controlHeight),
        verticalAlign: "top",
        input: Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token)), genBaseOutlinedStyle$1(token, {
          borderColor: token.colorBorder,
          hoverBorderColor: token.colorPrimaryHover,
          activeBorderColor: token.colorPrimary,
          activeShadow: token.activeShadow
        })), {
          "&[disabled]": Object.assign({}, genDisabledStyle(token)),
          width: token.calc(token.controlHeightLG).mul(1.25).equal(),
          height: token.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        })
      }
    }
  };
};
const genPaginationItemStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-item`]: {
      display: "inline-block",
      minWidth: token.itemSize,
      height: token.itemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.fontFamily,
      lineHeight: unit(token.calc(token.itemSize).sub(2).equal()),
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: token.itemBg,
      border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${unit(token.paginationItemPaddingInline)}`,
        color: token.colorText,
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${componentCls}-item-active)`]: {
        "&:hover": {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        }
      },
      "&-active": {
        fontWeight: token.fontWeightStrong,
        backgroundColor: token.itemActiveBg,
        borderColor: token.colorPrimary,
        a: {
          color: token.colorPrimary
        },
        "&:hover": {
          borderColor: token.colorPrimaryHover
        },
        "&:hover a": {
          color: token.colorPrimaryHover
        }
      }
    }
  };
};
const genPaginationStyle$1 = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      display: "flex",
      "&-start": {
        justifyContent: "start"
      },
      "&-center": {
        justifyContent: "center"
      },
      "&-end": {
        justifyContent: "end"
      },
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${componentCls}-total-text`]: {
        display: "inline-block",
        height: token.itemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: unit(token.calc(token.itemSize).sub(2).equal()),
        verticalAlign: "middle"
      }
    }), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), {
      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${token.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
};
const genPaginationFocusStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}:not(${componentCls}-disabled)`]: {
      [`${componentCls}-item`]: Object.assign({}, genFocusStyle(token)),
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        "&:focus-visible": Object.assign({
          [`${componentCls}-item-link-icon`]: {
            opacity: 1
          },
          [`${componentCls}-item-ellipsis`]: {
            opacity: 0
          }
        }, genFocusOutline(token))
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:focus-visible ${componentCls}-item-link`]: Object.assign({}, genFocusOutline(token))
      }
    }
  };
};
const prepareComponentToken$5 = (token) => Object.assign({
  itemBg: token.colorBgContainer,
  itemSize: token.controlHeight,
  itemSizeSM: token.controlHeightSM,
  itemActiveBg: token.colorBgContainer,
  itemLinkBg: token.colorBgContainer,
  itemActiveColorDisabled: token.colorTextDisabled,
  itemActiveBgDisabled: token.controlItemBgActiveDisabled,
  itemInputBg: token.colorBgContainer,
  miniOptionsSizeChangerTop: 0
}, initComponentToken$1(token));
const prepareToken$1 = (token) => merge(token, {
  inputOutlineOffset: 0,
  paginationMiniOptionsMarginInlineStart: token.calc(token.marginXXS).div(2).equal(),
  paginationMiniQuickJumperInputWidth: token.calc(token.controlHeightLG).mul(1.1).equal(),
  paginationItemPaddingInline: token.calc(token.marginXXS).mul(1.5).equal(),
  paginationEllipsisLetterSpacing: token.calc(token.marginXXS).div(2).equal(),
  paginationSlashMarginInlineStart: token.marginSM,
  paginationSlashMarginInlineEnd: token.marginSM,
  paginationEllipsisTextIndent: "0.13em"
  // magic for ui experience
}, initInputToken(token));
const useStyle$5 = genStyleHooks("Pagination", (token) => {
  const paginationToken = prepareToken$1(token);
  return [genPaginationStyle$1(paginationToken), genPaginationFocusStyle(paginationToken)];
}, prepareComponentToken$5);
const genBorderedStyle$2 = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}${componentCls}-bordered${componentCls}-disabled:not(${componentCls}-mini)`]: {
      "&, &:hover": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      "&:focus-visible": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      [`${componentCls}-item, ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        [`&:hover:not(${componentCls}-item-active)`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          a: {
            color: token.colorTextDisabled
          }
        },
        [`&${componentCls}-item-active`]: {
          backgroundColor: token.itemActiveBgDisabled
        }
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          color: token.colorTextDisabled
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder
        }
      }
    },
    [`${componentCls}${componentCls}-bordered:not(${componentCls}-mini)`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          borderColor: token.colorPrimaryHover,
          backgroundColor: token.itemBg
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.itemLinkBg,
          borderColor: token.colorBorder
        },
        [`&:hover ${componentCls}-item-link`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.itemBg,
          color: token.colorPrimary
        },
        [`&${componentCls}-disabled`]: {
          [`${componentCls}-item-link`]: {
            borderColor: token.colorBorder,
            color: token.colorTextDisabled
          }
        }
      },
      [`${componentCls}-item`]: {
        backgroundColor: token.itemBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
        [`&:hover:not(${componentCls}-item-active)`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.itemBg,
          a: {
            color: token.colorPrimary
          }
        },
        "&-active": {
          borderColor: token.colorPrimary
        }
      }
    }
  };
};
const BorderedStyle = genSubStyleComponent(["Pagination", "bordered"], (token) => {
  const paginationToken = prepareToken$1(token);
  return [genBorderedStyle$2(paginationToken)];
}, prepareComponentToken$5);
var __rest$7 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Pagination = (props) => {
  const {
    align,
    prefixCls: customizePrefixCls,
    selectPrefixCls: customizeSelectPrefixCls,
    className,
    rootClassName,
    style,
    size: customizeSize,
    locale: customLocale,
    selectComponentClass,
    responsive,
    showSizeChanger
  } = props, restProps = __rest$7(props, ["align", "prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]);
  const {
    xs
  } = useBreakpoint(responsive);
  const [, token] = useToken();
  const {
    getPrefixCls,
    direction,
    pagination = {}
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("pagination", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls);
  const mergedShowSizeChanger = showSizeChanger !== null && showSizeChanger !== void 0 ? showSizeChanger : pagination.showSizeChanger;
  const iconsProps = reactExports.useMemo(() => {
    const ellipsis = /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-item-ellipsis`
    }, "•••");
    const prevIcon = /* @__PURE__ */ reactExports.createElement("button", {
      className: `${prefixCls}-item-link`,
      type: "button",
      tabIndex: -1
    }, direction === "rtl" ? /* @__PURE__ */ reactExports.createElement(RefIcon$i, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$k, null));
    const nextIcon = /* @__PURE__ */ reactExports.createElement("button", {
      className: `${prefixCls}-item-link`,
      type: "button",
      tabIndex: -1
    }, direction === "rtl" ? /* @__PURE__ */ reactExports.createElement(RefIcon$k, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$i, null));
    const jumpPrevIcon = (
      // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
      /* @__PURE__ */ reactExports.createElement("a", {
        className: `${prefixCls}-item-link`
      }, /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-item-container`
      }, direction === "rtl" ? /* @__PURE__ */ reactExports.createElement(RefIcon$a, {
        className: `${prefixCls}-item-link-icon`
      }) : /* @__PURE__ */ reactExports.createElement(RefIcon$b, {
        className: `${prefixCls}-item-link-icon`
      }), ellipsis))
    );
    const jumpNextIcon = (
      // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
      /* @__PURE__ */ reactExports.createElement("a", {
        className: `${prefixCls}-item-link`
      }, /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-item-container`
      }, direction === "rtl" ? /* @__PURE__ */ reactExports.createElement(RefIcon$b, {
        className: `${prefixCls}-item-link-icon`
      }) : /* @__PURE__ */ reactExports.createElement(RefIcon$a, {
        className: `${prefixCls}-item-link-icon`
      }), ellipsis))
    );
    return {
      prevIcon,
      nextIcon,
      jumpPrevIcon,
      jumpNextIcon
    };
  }, [direction, prefixCls]);
  const [contextLocale] = useLocale("Pagination", locale$1);
  const locale2 = Object.assign(Object.assign({}, contextLocale), customLocale);
  const mergedSize = useSize(customizeSize);
  const isSmall = mergedSize === "small" || !!(xs && !mergedSize && responsive);
  const selectPrefixCls = getPrefixCls("select", customizeSelectPrefixCls);
  const extendedClassName = classNames({
    [`${prefixCls}-${align}`]: !!align,
    [`${prefixCls}-mini`]: isSmall,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-bordered`]: token.wireframe
  }, pagination === null || pagination === void 0 ? void 0 : pagination.className, className, rootClassName, hashId, cssVarCls);
  const mergedStyle = Object.assign(Object.assign({}, pagination === null || pagination === void 0 ? void 0 : pagination.style), style);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, token.wireframe && /* @__PURE__ */ reactExports.createElement(BorderedStyle, {
    prefixCls
  }), /* @__PURE__ */ reactExports.createElement(Pagination$1, Object.assign({}, iconsProps, restProps, {
    style: mergedStyle,
    prefixCls,
    selectPrefixCls,
    className: extendedClassName,
    selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : MiddleSelect),
    locale: locale2,
    showSizeChanger: mergedShowSizeChanger
  }))));
};
const viewSize = 100;
const borderWidth = viewSize / 5;
const radius = viewSize / 2 - borderWidth / 2;
const circumference = radius * 2 * Math.PI;
const position = 50;
const CustomCircle = (props) => {
  const {
    dotClassName,
    style,
    hasCircleCls
  } = props;
  return /* @__PURE__ */ reactExports.createElement("circle", {
    className: classNames(`${dotClassName}-circle`, {
      [`${dotClassName}-circle-bg`]: hasCircleCls
    }),
    r: radius,
    cx: position,
    cy: position,
    strokeWidth: borderWidth,
    style
  });
};
const Progress = (_ref) => {
  let {
    percent,
    prefixCls
  } = _ref;
  const dotClassName = `${prefixCls}-dot`;
  const holderClassName = `${dotClassName}-holder`;
  const hideClassName = `${holderClassName}-hidden`;
  const [render, setRender] = reactExports.useState(false);
  useLayoutEffect$1(() => {
    if (percent !== 0) {
      setRender(true);
    }
  }, [percent !== 0]);
  const safePtg = Math.max(Math.min(percent, 100), 0);
  if (!render) {
    return null;
  }
  const circleStyle = {
    strokeDashoffset: `${circumference / 4}`,
    strokeDasharray: `${circumference * safePtg / 100} ${circumference * (100 - safePtg) / 100}`
  };
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(holderClassName, `${dotClassName}-progress`, safePtg <= 0 && hideClassName)
  }, /* @__PURE__ */ reactExports.createElement("svg", {
    viewBox: `0 0 ${viewSize} ${viewSize}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": safePtg
  }, /* @__PURE__ */ reactExports.createElement(CustomCircle, {
    dotClassName,
    hasCircleCls: true
  }), /* @__PURE__ */ reactExports.createElement(CustomCircle, {
    dotClassName,
    style: circleStyle
  })));
};
function Looper(props) {
  const {
    prefixCls,
    percent = 0
  } = props;
  const dotClassName = `${prefixCls}-dot`;
  const holderClassName = `${dotClassName}-holder`;
  const hideClassName = `${holderClassName}-hidden`;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(holderClassName, percent > 0 && hideClassName)
  }, /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(dotClassName, `${prefixCls}-dot-spin`)
  }, [1, 2, 3, 4].map((i) => /* @__PURE__ */ reactExports.createElement("i", {
    className: `${prefixCls}-dot-item`,
    key: i
  })))), /* @__PURE__ */ reactExports.createElement(Progress, {
    prefixCls,
    percent
  }));
}
function Indicator(props) {
  const {
    prefixCls,
    indicator,
    percent
  } = props;
  const dotClassName = `${prefixCls}-dot`;
  if (indicator && /* @__PURE__ */ reactExports.isValidElement(indicator)) {
    return cloneElement(indicator, {
      className: classNames(indicator.props.className, dotClassName),
      percent
    });
  }
  return /* @__PURE__ */ reactExports.createElement(Looper, {
    prefixCls,
    percent
  });
}
const antSpinMove = new Keyframe("antSpinMove", {
  to: {
    opacity: 1
  }
});
const antRotate = new Keyframe("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
});
const genSpinStyle = (token) => {
  const {
    componentCls,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: "absolute",
      display: "none",
      color: token.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${componentCls}-text`]: {
        fontSize: token.fontSize,
        paddingTop: calc(calc(token.dotSize).sub(token.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: token.colorBgMask,
        zIndex: token.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${token.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [componentCls]: {
          [`${componentCls}-dot-holder`]: {
            color: token.colorWhite
          },
          [`${componentCls}-text`]: {
            color: token.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${componentCls}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: token.contentHeight,
          [`${componentCls}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: calc(token.dotSize).mul(-1).div(2).equal()
          },
          [`${componentCls}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${token.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${componentCls}-show-text ${componentCls}-dot`]: {
            marginTop: calc(token.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${componentCls}-dot`]: {
              margin: calc(token.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${componentCls}-text`]: {
              paddingTop: calc(calc(token.dotSizeSM).sub(token.fontSize)).div(2).add(2).equal()
            },
            [`&${componentCls}-show-text ${componentCls}-dot`]: {
              marginTop: calc(token.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${componentCls}-dot`]: {
              margin: calc(token.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${componentCls}-text`]: {
              paddingTop: calc(calc(token.dotSizeLG).sub(token.fontSize)).div(2).add(2).equal()
            },
            [`&${componentCls}-show-text ${componentCls}-dot`]: {
              marginTop: calc(token.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${componentCls}-container`]: {
          position: "relative",
          transition: `opacity ${token.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: token.colorBgContainer,
            opacity: 0,
            transition: `all ${token.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none"
          }
        },
        [`${componentCls}-blur`]: {
          clear: "both",
          opacity: 0.5,
          userSelect: "none",
          pointerEvents: "none",
          "&::after": {
            opacity: 0.4,
            pointerEvents: "auto"
          }
        }
      },
      // tip
      // ------------------------------
      "&-tip": {
        color: token.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${componentCls}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: token.dotSize,
        display: "inline-block",
        transition: `transform ${token.motionDurationSlow} ease, opacity ${token.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: token.colorPrimary,
        "&-hidden": {
          transform: "scale(0.3)",
          opacity: 0
        }
      },
      // progress
      // ------------------------------
      [`${componentCls}-dot-progress`]: {
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
        insetInlineStart: "50%"
      },
      // dots
      // ------------------------------
      [`${componentCls}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: token.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
          height: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: antSpinMove,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
          "&:nth-child(1)": {
            top: 0,
            insetInlineStart: 0,
            animationDelay: "0s"
          },
          "&:nth-child(2)": {
            top: 0,
            insetInlineEnd: 0,
            animationDelay: "0.4s"
          },
          "&:nth-child(3)": {
            insetInlineEnd: 0,
            bottom: 0,
            animationDelay: "0.8s"
          },
          "&:nth-child(4)": {
            bottom: 0,
            insetInlineStart: 0,
            animationDelay: "1.2s"
          }
        },
        "&-spin": {
          transform: "rotate(45deg)",
          animationName: antRotate,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((item) => `${item} ${token.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: token.colorFillSecondary
        }
      },
      // small
      [`&-sm ${componentCls}-dot`]: {
        "&, &-holder": {
          fontSize: token.dotSizeSM
        }
      },
      [`&-sm ${componentCls}-dot-holder`]: {
        i: {
          width: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal(),
          height: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${componentCls}-dot`]: {
        "&, &-holder": {
          fontSize: token.dotSizeLG
        }
      },
      [`&-lg ${componentCls}-dot-holder`]: {
        i: {
          width: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal(),
          height: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal()
        }
      },
      [`&${componentCls}-show-text ${componentCls}-text`]: {
        display: "block"
      }
    })
  };
};
const prepareComponentToken$4 = (token) => {
  const {
    controlHeightLG,
    controlHeight
  } = token;
  return {
    contentHeight: 400,
    dotSize: controlHeightLG / 2,
    dotSizeSM: controlHeightLG * 0.35,
    dotSizeLG: controlHeight
  };
};
const useStyle$4 = genStyleHooks("Spin", (token) => {
  const spinToken = merge(token, {
    spinDotDefault: token.colorTextDescription
  });
  return [genSpinStyle(spinToken)];
}, prepareComponentToken$4);
const AUTO_INTERVAL = 200;
const STEP_BUCKETS = [[30, 0.05], [70, 0.03], [96, 0.01]];
function usePercent(spinning, percent) {
  const [mockPercent, setMockPercent] = reactExports.useState(0);
  const mockIntervalRef = reactExports.useRef();
  const isAuto = percent === "auto";
  reactExports.useEffect(() => {
    if (isAuto && spinning) {
      setMockPercent(0);
      mockIntervalRef.current = setInterval(() => {
        setMockPercent((prev) => {
          const restPTG = 100 - prev;
          for (let i = 0; i < STEP_BUCKETS.length; i += 1) {
            const [limit, stepPtg] = STEP_BUCKETS[i];
            if (prev <= limit) {
              return prev + restPTG * stepPtg;
            }
          }
          return prev;
        });
      }, AUTO_INTERVAL);
    }
    return () => {
      clearInterval(mockIntervalRef.current);
    };
  }, [isAuto, spinning]);
  return isAuto ? mockPercent : percent;
}
var __rest$6 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
let defaultIndicator;
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
const Spin = (props) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    spinning: customSpinning = true,
    delay = 0,
    className,
    rootClassName,
    size = "default",
    tip,
    wrapperClassName,
    style,
    children,
    fullscreen = false,
    indicator,
    percent
  } = props, restProps = __rest$6(props, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]);
  const {
    getPrefixCls,
    direction,
    spin
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("spin", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls);
  const [spinning, setSpinning] = reactExports.useState(() => customSpinning && !shouldDelay(customSpinning, delay));
  const mergedPercent = usePercent(spinning, percent);
  reactExports.useEffect(() => {
    if (customSpinning) {
      const showSpinning = debounce(delay, () => {
        setSpinning(true);
      });
      showSpinning();
      return () => {
        var _a2;
        (_a2 = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a2 === void 0 ? void 0 : _a2.call(showSpinning);
      };
    }
    setSpinning(false);
  }, [delay, customSpinning]);
  const isNestedPattern = reactExports.useMemo(() => typeof children !== "undefined" && !fullscreen, [children, fullscreen]);
  const spinClassName = classNames(prefixCls, spin === null || spin === void 0 ? void 0 : spin.className, {
    [`${prefixCls}-sm`]: size === "small",
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-spinning`]: spinning,
    [`${prefixCls}-show-text`]: !!tip,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, !fullscreen && rootClassName, hashId, cssVarCls);
  const containerClassName = classNames(`${prefixCls}-container`, {
    [`${prefixCls}-blur`]: spinning
  });
  const mergedIndicator = (_a = indicator !== null && indicator !== void 0 ? indicator : spin === null || spin === void 0 ? void 0 : spin.indicator) !== null && _a !== void 0 ? _a : defaultIndicator;
  const mergedStyle = Object.assign(Object.assign({}, spin === null || spin === void 0 ? void 0 : spin.style), style);
  const spinElement = /* @__PURE__ */ reactExports.createElement("div", Object.assign({}, restProps, {
    style: mergedStyle,
    className: spinClassName,
    "aria-live": "polite",
    "aria-busy": spinning
  }), /* @__PURE__ */ reactExports.createElement(Indicator, {
    prefixCls,
    indicator: mergedIndicator,
    percent: mergedPercent
  }), tip && (isNestedPattern || fullscreen) ? /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-text`
  }, tip) : null);
  if (isNestedPattern) {
    return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({}, restProps, {
      className: classNames(`${prefixCls}-nested-loading`, wrapperClassName, hashId, cssVarCls)
    }), spinning && /* @__PURE__ */ reactExports.createElement("div", {
      key: "loading"
    }, spinElement), /* @__PURE__ */ reactExports.createElement("div", {
      className: containerClassName,
      key: "container"
    }, children)));
  }
  if (fullscreen) {
    return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", {
      className: classNames(`${prefixCls}-fullscreen`, {
        [`${prefixCls}-fullscreen-show`]: spinning
      }, rootClassName, hashId, cssVarCls)
    }, spinElement));
  }
  return wrapCSSVar(spinElement);
};
Spin.setDefaultIndicator = (indicator) => {
  defaultIndicator = indicator;
};
const ListContext = /* @__PURE__ */ React.createContext({});
ListContext.Consumer;
var __rest$5 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Meta = (_a) => {
  var {
    prefixCls: customizePrefixCls,
    className,
    avatar,
    title,
    description
  } = _a, others = __rest$5(_a, ["prefixCls", "className", "avatar", "title", "description"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("list", customizePrefixCls);
  const classString = classNames(`${prefixCls}-item-meta`, className);
  const content = /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-item-meta-content`
  }, title && /* @__PURE__ */ React.createElement("h4", {
    className: `${prefixCls}-item-meta-title`
  }, title), description && /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-item-meta-description`
  }, description));
  return /* @__PURE__ */ React.createElement("div", Object.assign({}, others, {
    className: classString
  }), avatar && /* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-item-meta-avatar`
  }, avatar), (title || description) && content);
};
const InternalItem = /* @__PURE__ */ React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    actions,
    extra,
    styles,
    className,
    classNames: customizeClassNames,
    colStyle
  } = props, others = __rest$5(props, ["prefixCls", "children", "actions", "extra", "styles", "className", "classNames", "colStyle"]);
  const {
    grid,
    itemLayout
  } = reactExports.useContext(ListContext);
  const {
    getPrefixCls,
    list
  } = reactExports.useContext(ConfigContext);
  const moduleClass = (moduleName) => {
    var _a, _b;
    return classNames((_b = (_a = list === null || list === void 0 ? void 0 : list.item) === null || _a === void 0 ? void 0 : _a.classNames) === null || _b === void 0 ? void 0 : _b[moduleName], customizeClassNames === null || customizeClassNames === void 0 ? void 0 : customizeClassNames[moduleName]);
  };
  const moduleStyle = (moduleName) => {
    var _a, _b;
    return Object.assign(Object.assign({}, (_b = (_a = list === null || list === void 0 ? void 0 : list.item) === null || _a === void 0 ? void 0 : _a.styles) === null || _b === void 0 ? void 0 : _b[moduleName]), styles === null || styles === void 0 ? void 0 : styles[moduleName]);
  };
  const isItemContainsTextNodeAndNotSingular = () => {
    let result = false;
    reactExports.Children.forEach(children, (element) => {
      if (typeof element === "string") {
        result = true;
      }
    });
    return result && reactExports.Children.count(children) > 1;
  };
  const isFlexMode = () => {
    if (itemLayout === "vertical") {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };
  const prefixCls = getPrefixCls("list", customizePrefixCls);
  const actionsContent = actions && actions.length > 0 && /* @__PURE__ */ React.createElement("ul", {
    className: classNames(`${prefixCls}-item-action`, moduleClass("actions")),
    key: "actions",
    style: moduleStyle("actions")
  }, actions.map((action, i) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ React.createElement("li", {
      key: `${prefixCls}-item-action-${i}`
    }, action, i !== actions.length - 1 && /* @__PURE__ */ React.createElement("em", {
      className: `${prefixCls}-item-action-split`
    }))
  )));
  const Element2 = grid ? "div" : "li";
  const itemChildren = /* @__PURE__ */ React.createElement(Element2, Object.assign({}, others, !grid ? {
    ref
  } : {}, {
    className: classNames(`${prefixCls}-item`, {
      [`${prefixCls}-item-no-flex`]: !isFlexMode()
    }, className)
  }), itemLayout === "vertical" && extra ? [/* @__PURE__ */ React.createElement("div", {
    className: `${prefixCls}-item-main`,
    key: "content"
  }, children, actionsContent), /* @__PURE__ */ React.createElement("div", {
    className: classNames(`${prefixCls}-item-extra`, moduleClass("extra")),
    key: "extra",
    style: moduleStyle("extra")
  }, extra)] : [children, actionsContent, cloneElement(extra, {
    key: "extra"
  })]);
  return grid ? /* @__PURE__ */ React.createElement(Col, {
    ref,
    flex: 1,
    style: colStyle
  }, itemChildren) : itemChildren;
});
const Item = InternalItem;
Item.Meta = Meta;
const genBorderedStyle$1 = (token) => {
  const {
    listBorderedCls,
    componentCls,
    paddingLG,
    margin,
    itemPaddingSM,
    itemPaddingLG,
    marginLG,
    borderRadiusLG
  } = token;
  return {
    [listBorderedCls]: {
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: borderRadiusLG,
      [`${componentCls}-header,${componentCls}-footer,${componentCls}-item`]: {
        paddingInline: paddingLG
      },
      [`${componentCls}-pagination`]: {
        margin: `${unit(margin)} ${unit(marginLG)}`
      }
    },
    [`${listBorderedCls}${componentCls}-sm`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingSM
      }
    },
    [`${listBorderedCls}${componentCls}-lg`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingLG
      }
    }
  };
};
const genResponsiveStyle = (token) => {
  const {
    componentCls,
    screenSM,
    screenMD,
    marginLG,
    marginSM,
    margin
  } = token;
  return {
    [`@media screen and (max-width:${screenMD}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-action`]: {
            marginInlineStart: marginLG
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-extra`]: {
            marginInlineStart: marginLG
          }
        }
      }
    },
    [`@media screen and (max-width: ${screenSM}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          flexWrap: "wrap",
          [`${componentCls}-action`]: {
            marginInlineStart: marginSM
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          flexWrap: "wrap-reverse",
          [`${componentCls}-item-main`]: {
            minWidth: token.contentWidth
          },
          [`${componentCls}-item-extra`]: {
            margin: `auto auto ${unit(margin)}`
          }
        }
      }
    }
  };
};
const genBaseStyle$2 = (token) => {
  const {
    componentCls,
    antCls,
    controlHeight,
    minHeight,
    paddingSM,
    marginLG,
    padding,
    itemPadding,
    colorPrimary,
    itemPaddingSM,
    itemPaddingLG,
    paddingXS,
    margin,
    colorText,
    colorTextDescription,
    motionDurationSlow,
    lineWidth,
    headerBg,
    footerBg,
    emptyTextPadding,
    metaMarginBottom,
    avatarMarginRight,
    titleMarginBottom,
    descriptionFontSize
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      "*": {
        outline: "none"
      },
      [`${componentCls}-header`]: {
        background: headerBg
      },
      [`${componentCls}-footer`]: {
        background: footerBg
      },
      [`${componentCls}-header, ${componentCls}-footer`]: {
        paddingBlock: paddingSM
      },
      [`${componentCls}-pagination`]: {
        marginBlockStart: marginLG,
        // https://github.com/ant-design/ant-design/issues/20037
        [`${antCls}-pagination-options`]: {
          textAlign: "start"
        }
      },
      [`${componentCls}-spin`]: {
        minHeight,
        textAlign: "center"
      },
      [`${componentCls}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      [`${componentCls}-item`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: itemPadding,
        color: colorText,
        [`${componentCls}-item-meta`]: {
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          maxWidth: "100%",
          [`${componentCls}-item-meta-avatar`]: {
            marginInlineEnd: avatarMarginRight
          },
          [`${componentCls}-item-meta-content`]: {
            flex: "1 0",
            width: 0,
            color: colorText
          },
          [`${componentCls}-item-meta-title`]: {
            margin: `0 0 ${unit(token.marginXXS)} 0`,
            color: colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            "> a": {
              color: colorText,
              transition: `all ${motionDurationSlow}`,
              "&:hover": {
                color: colorPrimary
              }
            }
          },
          [`${componentCls}-item-meta-description`]: {
            color: colorTextDescription,
            fontSize: descriptionFontSize,
            lineHeight: token.lineHeight
          }
        },
        [`${componentCls}-item-action`]: {
          flex: "0 0 auto",
          marginInlineStart: token.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: "none",
          "& > li": {
            position: "relative",
            display: "inline-block",
            padding: `0 ${unit(paddingXS)}`,
            color: colorTextDescription,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            textAlign: "center",
            "&:first-child": {
              paddingInlineStart: 0
            }
          },
          [`${componentCls}-item-action-split`]: {
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineEnd: 0,
            width: lineWidth,
            height: token.calc(token.fontHeight).sub(token.calc(token.marginXXS).mul(2)).equal(),
            transform: "translateY(-50%)",
            backgroundColor: token.colorSplit
          }
        }
      },
      [`${componentCls}-empty`]: {
        padding: `${unit(padding)} 0`,
        color: colorTextDescription,
        fontSize: token.fontSizeSM,
        textAlign: "center"
      },
      [`${componentCls}-empty-text`]: {
        padding: emptyTextPadding,
        color: token.colorTextDisabled,
        fontSize: token.fontSize,
        textAlign: "center"
      },
      // ============================ without flex ============================
      [`${componentCls}-item-no-flex`]: {
        display: "block"
      }
    }),
    [`${componentCls}-grid ${antCls}-col > ${componentCls}-item`]: {
      display: "block",
      maxWidth: "100%",
      marginBlockEnd: margin,
      paddingBlock: 0,
      borderBlockEnd: "none"
    },
    [`${componentCls}-vertical ${componentCls}-item`]: {
      alignItems: "initial",
      [`${componentCls}-item-main`]: {
        display: "block",
        flex: 1
      },
      [`${componentCls}-item-extra`]: {
        marginInlineStart: marginLG
      },
      [`${componentCls}-item-meta`]: {
        marginBlockEnd: metaMarginBottom,
        [`${componentCls}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: titleMarginBottom,
          color: colorText,
          fontSize: token.fontSizeLG,
          lineHeight: token.lineHeightLG
        }
      },
      [`${componentCls}-item-action`]: {
        marginBlockStart: padding,
        marginInlineStart: "auto",
        "> li": {
          padding: `0 ${unit(padding)}`,
          "&:first-child": {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${componentCls}-split ${componentCls}-item`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
      "&:last-child": {
        borderBlockEnd: "none"
      }
    },
    [`${componentCls}-split ${componentCls}-header`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-split${componentCls}-empty ${componentCls}-footer`]: {
      borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-loading ${componentCls}-spin-nested-loading`]: {
      minHeight: controlHeight
    },
    [`${componentCls}-split${componentCls}-something-after-last-item ${antCls}-spin-container > ${componentCls}-items > ${componentCls}-item:last-child`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-lg ${componentCls}-item`]: {
      padding: itemPaddingLG
    },
    [`${componentCls}-sm ${componentCls}-item`]: {
      padding: itemPaddingSM
    },
    // Horizontal
    [`${componentCls}:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-no-flex`]: {
        [`${componentCls}-item-action`]: {
          float: "right"
        }
      }
    }
  };
};
const prepareComponentToken$3 = (token) => ({
  contentWidth: 220,
  itemPadding: `${unit(token.paddingContentVertical)} 0`,
  itemPaddingSM: `${unit(token.paddingContentVerticalSM)} ${unit(token.paddingContentHorizontal)}`,
  itemPaddingLG: `${unit(token.paddingContentVerticalLG)} ${unit(token.paddingContentHorizontalLG)}`,
  headerBg: "transparent",
  footerBg: "transparent",
  emptyTextPadding: token.padding,
  metaMarginBottom: token.padding,
  avatarMarginRight: token.padding,
  titleMarginBottom: token.paddingSM,
  descriptionFontSize: token.fontSize
});
const useStyle$3 = genStyleHooks("List", (token) => {
  const listToken = merge(token, {
    listBorderedCls: `${token.componentCls}-bordered`,
    minHeight: token.controlHeightLG
  });
  return [genBaseStyle$2(listToken), genBorderedStyle$1(listToken), genResponsiveStyle(listToken)];
}, prepareComponentToken$3);
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function List(_a) {
  var {
    pagination = false,
    prefixCls: customizePrefixCls,
    bordered = false,
    split = true,
    className,
    rootClassName,
    style,
    children,
    itemLayout,
    loadMore,
    grid,
    dataSource = [],
    size: customizeSize,
    header,
    footer,
    loading = false,
    rowKey,
    renderItem,
    locale: locale2
  } = _a, rest = __rest$4(_a, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  const paginationObj = pagination && typeof pagination === "object" ? pagination : {};
  const [paginationCurrent, setPaginationCurrent] = reactExports.useState(paginationObj.defaultCurrent || 1);
  const [paginationSize, setPaginationSize] = reactExports.useState(paginationObj.defaultPageSize || 10);
  const {
    getPrefixCls,
    renderEmpty,
    direction,
    list
  } = reactExports.useContext(ConfigContext);
  const defaultPaginationProps = {
    current: 1,
    total: 0
  };
  const triggerPaginationEvent = (eventName) => (page, pageSize) => {
    var _a2;
    setPaginationCurrent(page);
    setPaginationSize(pageSize);
    if (pagination) {
      (_a2 = pagination === null || pagination === void 0 ? void 0 : pagination[eventName]) === null || _a2 === void 0 ? void 0 : _a2.call(pagination, page, pageSize);
    }
  };
  const onPaginationChange = triggerPaginationEvent("onChange");
  const onPaginationShowSizeChange = triggerPaginationEvent("onShowSizeChange");
  const renderInnerItem = (item, index) => {
    if (!renderItem) return null;
    let key;
    if (typeof rowKey === "function") {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = `list-item-${index}`;
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, {
      key
    }, renderItem(item, index));
  };
  const isSomethingAfterLastItem = () => !!(loadMore || pagination || footer);
  const prefixCls = getPrefixCls("list", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls);
  let loadingProp = loading;
  if (typeof loadingProp === "boolean") {
    loadingProp = {
      spinning: loadingProp
    };
  }
  const isLoading = !!(loadingProp === null || loadingProp === void 0 ? void 0 : loadingProp.spinning);
  const mergedSize = useSize(customizeSize);
  let sizeCls = "";
  switch (mergedSize) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
  }
  const classString = classNames(prefixCls, {
    [`${prefixCls}-vertical`]: itemLayout === "vertical",
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-split`]: split,
    [`${prefixCls}-bordered`]: bordered,
    [`${prefixCls}-loading`]: isLoading,
    [`${prefixCls}-grid`]: !!grid,
    [`${prefixCls}-something-after-last-item`]: isSomethingAfterLastItem(),
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, list === null || list === void 0 ? void 0 : list.className, className, rootClassName, hashId, cssVarCls);
  const paginationProps = extendsObject(defaultPaginationProps, {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }, pagination || {});
  const largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }
  const paginationContent = pagination && /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames(`${prefixCls}-pagination`)
  }, /* @__PURE__ */ reactExports.createElement(Pagination, Object.assign({
    align: "end"
  }, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  })));
  let splitDataSource = _toConsumableArray(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  const needResponsive = Object.keys(grid || {}).some((key) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(key));
  const screens = useBreakpoint(needResponsive);
  const currentBreakpoint = reactExports.useMemo(() => {
    for (let i = 0; i < responsiveArray.length; i += 1) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return void 0;
  }, [screens]);
  const colStyle = reactExports.useMemo(() => {
    if (!grid) {
      return void 0;
    }
    const columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: `${100 / columnCount}%`,
        maxWidth: `${100 / columnCount}%`
      };
    }
  }, [JSON.stringify(grid), currentBreakpoint]);
  let childrenContent = isLoading && /* @__PURE__ */ reactExports.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    const items = splitDataSource.map((item, index) => renderInnerItem(item, index));
    childrenContent = grid ? /* @__PURE__ */ reactExports.createElement(Row$1, {
      gutter: grid.gutter
    }, reactExports.Children.map(items, (child) => /* @__PURE__ */ reactExports.createElement("div", {
      key: child === null || child === void 0 ? void 0 : child.key,
      style: colStyle
    }, child))) : /* @__PURE__ */ reactExports.createElement("ul", {
      className: `${prefixCls}-items`
    }, items);
  } else if (!children && !isLoading) {
    childrenContent = /* @__PURE__ */ reactExports.createElement("div", {
      className: `${prefixCls}-empty-text`
    }, (locale2 === null || locale2 === void 0 ? void 0 : locale2.emptyText) || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("List")) || /* @__PURE__ */ reactExports.createElement(DefaultRenderEmpty, {
      componentName: "List"
    }));
  }
  const paginationPosition = paginationProps.position || "bottom";
  const contextValue = reactExports.useMemo(() => ({
    grid,
    itemLayout
  }), [JSON.stringify(grid), itemLayout]);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(ListContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ reactExports.createElement("div", Object.assign({
    style: Object.assign(Object.assign({}, list === null || list === void 0 ? void 0 : list.style), style),
    className: classString
  }, rest), (paginationPosition === "top" || paginationPosition === "both") && paginationContent, header && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-header`
  }, header), /* @__PURE__ */ reactExports.createElement(Spin, Object.assign({}, loadingProp), childrenContent, children), footer && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-footer`
  }, footer), loadMore || (paginationPosition === "bottom" || paginationPosition === "both") && paginationContent)));
}
List.Item = Item;
var CaretDownFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "filled" };
var CaretDownFilled = function CaretDownFilled2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: CaretDownFilled$2
  }));
};
var RefIcon$9 = /* @__PURE__ */ reactExports.forwardRef(CaretDownFilled);
const CaretDownFilled$1 = RefIcon$9;
var CaretDownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "outlined" };
var CaretDownOutlined = function CaretDownOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: CaretDownOutlined$2
  }));
};
var RefIcon$8 = /* @__PURE__ */ reactExports.forwardRef(CaretDownOutlined);
const CaretDownOutlined$1 = RefIcon$8;
var CaretUpOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, "name": "caret-up", "theme": "outlined" };
var CaretUpOutlined = function CaretUpOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: CaretUpOutlined$2
  }));
};
var RefIcon$7 = /* @__PURE__ */ reactExports.forwardRef(CaretUpOutlined);
const CaretUpOutlined$1 = RefIcon$7;
var FileOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, "name": "file", "theme": "outlined" };
var FileOutlined = function FileOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: FileOutlined$2
  }));
};
var RefIcon$6 = /* @__PURE__ */ reactExports.forwardRef(FileOutlined);
const FileOutlined$1 = RefIcon$6;
var FilterFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" } }] }, "name": "filter", "theme": "filled" };
var FilterFilled = function FilterFilled2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: FilterFilled$2
  }));
};
var RefIcon$5 = /* @__PURE__ */ reactExports.forwardRef(FilterFilled);
const FilterFilled$1 = RefIcon$5;
var FolderOpenOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" } }] }, "name": "folder-open", "theme": "outlined" };
var FolderOpenOutlined = function FolderOpenOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: FolderOpenOutlined$2
  }));
};
var RefIcon$4 = /* @__PURE__ */ reactExports.forwardRef(FolderOpenOutlined);
const FolderOpenOutlined$1 = RefIcon$4;
var FolderOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z" } }] }, "name": "folder", "theme": "outlined" };
var FolderOutlined = function FolderOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: FolderOutlined$2
  }));
};
var RefIcon$3 = /* @__PURE__ */ reactExports.forwardRef(FolderOutlined);
const FolderOutlined$1 = RefIcon$3;
var HolderOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z" } }] }, "name": "holder", "theme": "outlined" };
var HolderOutlined = function HolderOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: HolderOutlined$2
  }));
};
var RefIcon$2 = /* @__PURE__ */ reactExports.forwardRef(HolderOutlined);
const HolderOutlined$1 = RefIcon$2;
var MinusSquareOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "minus-square", "theme": "outlined" };
var MinusSquareOutlined = function MinusSquareOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: MinusSquareOutlined$2
  }));
};
var RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(MinusSquareOutlined);
const MinusSquareOutlined$1 = RefIcon$1;
var PlusSquareOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "plus-square", "theme": "outlined" };
var PlusSquareOutlined = function PlusSquareOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: PlusSquareOutlined$2
  }));
};
var RefIcon = /* @__PURE__ */ reactExports.forwardRef(PlusSquareOutlined);
const PlusSquareOutlined$1 = RefIcon;
var EXPAND_COLUMN = {};
var INTERNAL_HOOKS = "rc-table-internal-hook";
function createContext(defaultValue) {
  var Context = /* @__PURE__ */ reactExports.createContext(void 0);
  var Provider = function Provider2(_ref) {
    var value = _ref.value, children = _ref.children;
    var valueRef = reactExports.useRef(value);
    valueRef.current = value;
    var _React$useState = reactExports.useState(function() {
      return {
        getValue: function getValue() {
          return valueRef.current;
        },
        listeners: /* @__PURE__ */ new Set()
      };
    }), _React$useState2 = _slicedToArray(_React$useState, 1), context = _React$useState2[0];
    useLayoutEffect$1(function() {
      reactDomExports.unstable_batchedUpdates(function() {
        context.listeners.forEach(function(listener) {
          listener(value);
        });
      });
    }, [value]);
    return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
      value: context
    }, children);
  };
  return {
    Context,
    Provider,
    defaultValue
  };
}
function useContext(holder, selector) {
  var eventSelector = useEvent(typeof selector === "function" ? selector : function(ctx) {
    if (selector === void 0) {
      return ctx;
    }
    if (!Array.isArray(selector)) {
      return ctx[selector];
    }
    var obj = {};
    selector.forEach(function(key) {
      obj[key] = ctx[key];
    });
    return obj;
  });
  var context = reactExports.useContext(holder === null || holder === void 0 ? void 0 : holder.Context);
  var _ref2 = context || {}, listeners = _ref2.listeners, getValue = _ref2.getValue;
  var valueRef = reactExports.useRef();
  valueRef.current = eventSelector(context ? getValue() : holder === null || holder === void 0 ? void 0 : holder.defaultValue);
  var _React$useState3 = reactExports.useState({}), _React$useState4 = _slicedToArray(_React$useState3, 2), forceUpdate = _React$useState4[1];
  useLayoutEffect$1(function() {
    if (!context) {
      return;
    }
    function trigger(nextValue) {
      var nextSelectorValue = eventSelector(nextValue);
      if (!isEqual(valueRef.current, nextSelectorValue, true)) {
        forceUpdate({});
      }
    }
    listeners.add(trigger);
    return function() {
      listeners.delete(trigger);
    };
  }, [context]);
  return valueRef.current;
}
function createImmutable() {
  var ImmutableContext = /* @__PURE__ */ reactExports.createContext(null);
  function useImmutableMark2() {
    return reactExports.useContext(ImmutableContext);
  }
  function makeImmutable2(Component, shouldTriggerRender) {
    var refAble = supportRef(Component);
    var ImmutableComponent = function ImmutableComponent2(props, ref) {
      var refProps = refAble ? {
        ref
      } : {};
      var renderTimesRef = reactExports.useRef(0);
      var prevProps = reactExports.useRef(props);
      var mark = useImmutableMark2();
      if (mark !== null) {
        return /* @__PURE__ */ reactExports.createElement(Component, _extends({}, props, refProps));
      }
      if (
        // Always trigger re-render if not provide `notTriggerRender`
        !shouldTriggerRender || shouldTriggerRender(prevProps.current, props)
      ) {
        renderTimesRef.current += 1;
      }
      prevProps.current = props;
      return /* @__PURE__ */ reactExports.createElement(ImmutableContext.Provider, {
        value: renderTimesRef.current
      }, /* @__PURE__ */ reactExports.createElement(Component, _extends({}, props, refProps)));
    };
    return refAble ? /* @__PURE__ */ reactExports.forwardRef(ImmutableComponent) : ImmutableComponent;
  }
  function responseImmutable2(Component, propsAreEqual) {
    var refAble = supportRef(Component);
    var ImmutableComponent = function ImmutableComponent2(props, ref) {
      var refProps = refAble ? {
        ref
      } : {};
      useImmutableMark2();
      return /* @__PURE__ */ reactExports.createElement(Component, _extends({}, props, refProps));
    };
    return refAble ? /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(ImmutableComponent), propsAreEqual) : /* @__PURE__ */ reactExports.memo(ImmutableComponent, propsAreEqual);
  }
  return {
    makeImmutable: makeImmutable2,
    responseImmutable: responseImmutable2,
    useImmutableMark: useImmutableMark2
  };
}
var _createImmutable = createImmutable(), makeImmutable = _createImmutable.makeImmutable, responseImmutable = _createImmutable.responseImmutable, useImmutableMark = _createImmutable.useImmutableMark;
var TableContext = createContext();
var PerfContext = /* @__PURE__ */ reactExports.createContext({
  renderWithProps: false
});
var INTERNAL_KEY_PREFIX = "RC_TABLE_KEY";
function toArray(arr) {
  if (arr === void 0 || arr === null) {
    return [];
  }
  return Array.isArray(arr) ? arr : [arr];
}
function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function(column) {
    var _ref = column || {}, key = _ref.key, dataIndex = _ref.dataIndex;
    var mergedKey = key || toArray(dataIndex).join("-") || INTERNAL_KEY_PREFIX;
    while (keys[mergedKey]) {
      mergedKey = "".concat(mergedKey, "_next");
    }
    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function validateValue(val) {
  return val !== null && val !== void 0;
}
function isRenderCell(data) {
  return data && _typeof(data) === "object" && !Array.isArray(data) && !/* @__PURE__ */ reactExports.isValidElement(data);
}
function useCellRender(record, dataIndex, renderIndex, children, render, shouldCellUpdate) {
  var perfRecord = reactExports.useContext(PerfContext);
  var mark = useImmutableMark();
  var retData = useMemo(function() {
    if (validateValue(children)) {
      return [children];
    }
    var path = dataIndex === null || dataIndex === void 0 || dataIndex === "" ? [] : Array.isArray(dataIndex) ? dataIndex : [dataIndex];
    var value = get(record, path);
    var returnChildNode = value;
    var returnCellProps = void 0;
    if (render) {
      var renderData = render(value, record, renderIndex);
      if (isRenderCell(renderData)) {
        returnChildNode = renderData.children;
        returnCellProps = renderData.props;
        perfRecord.renderWithProps = true;
      } else {
        returnChildNode = renderData;
      }
    }
    return [returnChildNode, returnCellProps];
  }, [
    // Force update deps
    mark,
    // Normal deps
    record,
    children,
    dataIndex,
    render,
    renderIndex
  ], function(prev, next) {
    if (shouldCellUpdate) {
      var _prev = _slicedToArray(prev, 2), prevRecord = _prev[1];
      var _next = _slicedToArray(next, 2), nextRecord = _next[1];
      return shouldCellUpdate(nextRecord, prevRecord);
    }
    if (perfRecord.renderWithProps) {
      return true;
    }
    return !isEqual(prev, next, true);
  });
  return retData;
}
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}
function useHoverState(rowIndex, rowSpan) {
  return useContext(TableContext, function(ctx) {
    var hovering = inHoverRange(rowIndex, rowSpan || 1, ctx.hoverStartRow, ctx.hoverEndRow);
    return [hovering, ctx.onHover];
  });
}
var getTitleFromCellRenderChildren = function getTitleFromCellRenderChildren2(_ref) {
  var ellipsis = _ref.ellipsis, rowType = _ref.rowType, children = _ref.children;
  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;
  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === "header")) {
    if (typeof children === "string" || typeof children === "number") {
      title = children.toString();
    } else if (/* @__PURE__ */ reactExports.isValidElement(children) && typeof children.props.children === "string") {
      title = children.props.children;
    }
  }
  return title;
};
function Cell(props) {
  var _ref2, _ref3, _legacyCellProps$colS, _ref4, _ref5, _legacyCellProps$rowS, _additionalProps$titl, _classNames;
  var Component = props.component, children = props.children, ellipsis = props.ellipsis, scope = props.scope, prefixCls = props.prefixCls, className = props.className, align = props.align, record = props.record, render = props.render, dataIndex = props.dataIndex, renderIndex = props.renderIndex, shouldCellUpdate = props.shouldCellUpdate, index = props.index, rowType = props.rowType, colSpan = props.colSpan, rowSpan = props.rowSpan, fixLeft = props.fixLeft, fixRight = props.fixRight, firstFixLeft = props.firstFixLeft, lastFixLeft = props.lastFixLeft, firstFixRight = props.firstFixRight, lastFixRight = props.lastFixRight, appendNode = props.appendNode, _props$additionalProp = props.additionalProps, additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp, isSticky = props.isSticky;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var _useContext = useContext(TableContext, ["supportSticky", "allColumnsFixedLeft", "rowHoverable"]), supportSticky = _useContext.supportSticky, allColumnsFixedLeft = _useContext.allColumnsFixedLeft, rowHoverable = _useContext.rowHoverable;
  var _useCellRender = useCellRender(record, dataIndex, renderIndex, children, render, shouldCellUpdate), _useCellRender2 = _slicedToArray(_useCellRender, 2), childNode = _useCellRender2[0], legacyCellProps = _useCellRender2[1];
  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === "number" && supportSticky;
  var isFixRight = typeof fixRight === "number" && supportSticky;
  if (isFixLeft) {
    fixedStyle.position = "sticky";
    fixedStyle.left = fixLeft;
  }
  if (isFixRight) {
    fixedStyle.position = "sticky";
    fixedStyle.right = fixRight;
  }
  var mergedColSpan = (_ref2 = (_ref3 = (_legacyCellProps$colS = legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.colSpan) !== null && _legacyCellProps$colS !== void 0 ? _legacyCellProps$colS : additionalProps.colSpan) !== null && _ref3 !== void 0 ? _ref3 : colSpan) !== null && _ref2 !== void 0 ? _ref2 : 1;
  var mergedRowSpan = (_ref4 = (_ref5 = (_legacyCellProps$rowS = legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.rowSpan) !== null && _legacyCellProps$rowS !== void 0 ? _legacyCellProps$rowS : additionalProps.rowSpan) !== null && _ref5 !== void 0 ? _ref5 : rowSpan) !== null && _ref4 !== void 0 ? _ref4 : 1;
  var _useHoverState = useHoverState(index, mergedRowSpan), _useHoverState2 = _slicedToArray(_useHoverState, 2), hovering = _useHoverState2[0], onHover = _useHoverState2[1];
  var onMouseEnter = useEvent(function(event) {
    var _additionalProps$onMo;
    if (record) {
      onHover(index, index + mergedRowSpan - 1);
    }
    additionalProps === null || additionalProps === void 0 || (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0 || _additionalProps$onMo.call(additionalProps, event);
  });
  var onMouseLeave = useEvent(function(event) {
    var _additionalProps$onMo2;
    if (record) {
      onHover(-1, -1);
    }
    additionalProps === null || additionalProps === void 0 || (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0 || _additionalProps$onMo2.call(additionalProps, event);
  });
  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  }
  var title = (_additionalProps$titl = additionalProps.title) !== null && _additionalProps$titl !== void 0 ? _additionalProps$titl : getTitleFromCellRenderChildren({
    rowType,
    ellipsis,
    children: childNode
  });
  var mergedClassName = classNames(cellPrefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-all"), lastFixLeft && allColumnsFixedLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), _defineProperty(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-row-hover"), !legacyCellProps && hovering), _classNames), additionalProps.className, legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.className);
  var alignStyle = {};
  if (align) {
    alignStyle.textAlign = align;
  }
  var mergedStyle = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, fixedStyle), additionalProps.style), alignStyle), legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.style);
  var mergedChildNode = childNode;
  if (_typeof(mergedChildNode) === "object" && !Array.isArray(mergedChildNode) && !/* @__PURE__ */ reactExports.isValidElement(mergedChildNode)) {
    mergedChildNode = null;
  }
  if (ellipsis && (lastFixLeft || firstFixRight)) {
    mergedChildNode = /* @__PURE__ */ reactExports.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, mergedChildNode);
  }
  return /* @__PURE__ */ reactExports.createElement(Component, _extends({}, legacyCellProps, additionalProps, {
    className: mergedClassName,
    style: mergedStyle,
    title,
    scope,
    onMouseEnter: rowHoverable ? onMouseEnter : void 0,
    onMouseLeave: rowHoverable ? onMouseLeave : void 0,
    colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null
  }), appendNode, mergedChildNode);
}
const Cell$1 = /* @__PURE__ */ reactExports.memo(Cell);
function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;
  if (startColumn.fixed === "left") {
    fixLeft = stickyOffsets.left[direction === "rtl" ? colEnd : colStart];
  } else if (endColumn.fixed === "right") {
    fixRight = stickyOffsets.right[direction === "rtl" ? colStart : colEnd];
  }
  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1];
  var canLastFix = nextColumn && !nextColumn.fixed || prevColumn && !prevColumn.fixed || columns.every(function(col) {
    return col.fixed === "left";
  });
  if (direction === "rtl") {
    if (fixLeft !== void 0) {
      var prevFixLeft = prevColumn && prevColumn.fixed === "left";
      firstFixLeft = !prevFixLeft && canLastFix;
    } else if (fixRight !== void 0) {
      var nextFixRight = nextColumn && nextColumn.fixed === "right";
      lastFixRight = !nextFixRight && canLastFix;
    }
  } else if (fixLeft !== void 0) {
    var nextFixLeft = nextColumn && nextColumn.fixed === "left";
    lastFixLeft = !nextFixLeft && canLastFix;
  } else if (fixRight !== void 0) {
    var prevFixRight = prevColumn && prevColumn.fixed === "right";
    firstFixRight = !prevFixRight && canLastFix;
  }
  return {
    fixLeft,
    fixRight,
    lastFixLeft,
    firstFixRight,
    lastFixRight,
    firstFixLeft,
    isSticky: stickyOffsets.isSticky
  };
}
var SummaryContext = /* @__PURE__ */ reactExports.createContext({});
function SummaryCell(_ref) {
  var className = _ref.className, index = _ref.index, children = _ref.children, _ref$colSpan = _ref.colSpan, colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan, rowSpan = _ref.rowSpan, align = _ref.align;
  var _useContext = useContext(TableContext, ["prefixCls", "direction"]), prefixCls = _useContext.prefixCls, direction = _useContext.direction;
  var _React$useContext = reactExports.useContext(SummaryContext), scrollColumnIndex = _React$useContext.scrollColumnIndex, stickyOffsets = _React$useContext.stickyOffsets, flattenColumns = _React$useContext.flattenColumns;
  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = getCellFixedInfo(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
  return /* @__PURE__ */ reactExports.createElement(Cell$1, _extends({
    className,
    index,
    component: "td",
    prefixCls,
    record: null,
    dataIndex: null,
    align,
    colSpan: mergedColSpan,
    rowSpan,
    render: function render() {
      return children;
    }
  }, fixedInfo));
}
var _excluded$8 = ["children"];
function FooterRow(_ref) {
  var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded$8);
  return /* @__PURE__ */ reactExports.createElement("tr", props, children);
}
function Summary(_ref) {
  var children = _ref.children;
  return children;
}
Summary.Row = FooterRow;
Summary.Cell = SummaryCell;
function Footer(props) {
  var children = props.children, stickyOffsets = props.stickyOffsets, flattenColumns = props.flattenColumns;
  var prefixCls = useContext(TableContext, "prefixCls");
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = reactExports.useMemo(function() {
    return {
      stickyOffsets,
      flattenColumns,
      scrollColumnIndex: scrollColumn !== null && scrollColumn !== void 0 && scrollColumn.scrollbar ? lastColumnIndex : null
    };
  }, [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets]);
  return /* @__PURE__ */ reactExports.createElement(SummaryContext.Provider, {
    value: summaryContext
  }, /* @__PURE__ */ reactExports.createElement("tfoot", {
    className: "".concat(prefixCls, "-summary")
  }, children));
}
const Footer$1 = responseImmutable(Footer);
var FooterComponents = Summary;
function Column$1(_) {
  return null;
}
function ColumnGroup$1(_) {
  return null;
}
function fillRecords(list, record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
  list.push({
    record,
    indent,
    index
  });
  var key = getRowKey(record);
  var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);
  if (record && Array.isArray(record[childrenColumnName]) && expanded) {
    for (var i = 0; i < record[childrenColumnName].length; i += 1) {
      fillRecords(list, record[childrenColumnName][i], indent + 1, childrenColumnName, expandedKeys, getRowKey, i);
    }
  }
}
function useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey) {
  var arr = reactExports.useMemo(function() {
    if (expandedKeys !== null && expandedKeys !== void 0 && expandedKeys.size) {
      var list = [];
      for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
        var record = data[i];
        fillRecords(list, record, 0, childrenColumnName, expandedKeys, getRowKey, i);
      }
      return list;
    }
    return data === null || data === void 0 ? void 0 : data.map(function(item, index) {
      return {
        record: item,
        indent: 0,
        index
      };
    });
  }, [data, childrenColumnName, expandedKeys, getRowKey]);
  return arr;
}
function useRowInfo(record, rowKey, recordIndex, indent) {
  var context = useContext(TableContext, ["prefixCls", "fixedInfoList", "flattenColumns", "expandableType", "expandRowByClick", "onTriggerExpand", "rowClassName", "expandedRowClassName", "indentSize", "expandIcon", "expandedRowRender", "expandIconColumnIndex", "expandedKeys", "childrenColumnName", "rowExpandable", "onRow"]);
  var flattenColumns = context.flattenColumns, expandableType = context.expandableType, expandedKeys = context.expandedKeys, childrenColumnName = context.childrenColumnName, onTriggerExpand = context.onTriggerExpand, rowExpandable = context.rowExpandable, onRow = context.onRow, expandRowByClick = context.expandRowByClick, rowClassName = context.rowClassName;
  var nestExpandable = expandableType === "nest";
  var rowSupportExpand = expandableType === "row" && (!rowExpandable || rowExpandable(record));
  var mergedExpandable = rowSupportExpand || nestExpandable;
  var expanded = expandedKeys && expandedKeys.has(rowKey);
  var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
  var onInternalTriggerExpand = useEvent(onTriggerExpand);
  var rowProps = onRow === null || onRow === void 0 ? void 0 : onRow(record, recordIndex);
  var onRowClick = rowProps === null || rowProps === void 0 ? void 0 : rowProps.onClick;
  var onClick = function onClick2(event) {
    if (expandRowByClick && mergedExpandable) {
      onTriggerExpand(record, event);
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    onRowClick === null || onRowClick === void 0 || onRowClick.apply(void 0, [event].concat(args));
  };
  var computeRowClassName;
  if (typeof rowClassName === "string") {
    computeRowClassName = rowClassName;
  } else if (typeof rowClassName === "function") {
    computeRowClassName = rowClassName(record, recordIndex, indent);
  }
  var columnsKey = getColumnsKey(flattenColumns);
  return _objectSpread2(_objectSpread2({}, context), {}, {
    columnsKey,
    nestExpandable,
    expanded,
    hasNestChildren,
    record,
    onTriggerExpand: onInternalTriggerExpand,
    rowSupportExpand,
    expandable: mergedExpandable,
    rowProps: _objectSpread2(_objectSpread2({}, rowProps), {}, {
      className: classNames(computeRowClassName, rowProps === null || rowProps === void 0 ? void 0 : rowProps.className),
      onClick
    })
  });
}
function ExpandedRow(props) {
  var prefixCls = props.prefixCls, children = props.children, Component = props.component, cellComponent = props.cellComponent, className = props.className, expanded = props.expanded, colSpan = props.colSpan, isEmpty = props.isEmpty;
  var _useContext = useContext(TableContext, ["scrollbarSize", "fixHeader", "fixColumn", "componentWidth", "horizonScroll"]), scrollbarSize = _useContext.scrollbarSize, fixHeader = _useContext.fixHeader, fixColumn = _useContext.fixColumn, componentWidth = _useContext.componentWidth, horizonScroll = _useContext.horizonScroll;
  var contentNode = children;
  if (isEmpty ? horizonScroll && componentWidth : fixColumn) {
    contentNode = /* @__PURE__ */ reactExports.createElement("div", {
      style: {
        width: componentWidth - (fixHeader ? scrollbarSize : 0),
        position: "sticky",
        left: 0,
        overflow: "hidden"
      },
      className: "".concat(prefixCls, "-expanded-row-fixed")
    }, contentNode);
  }
  return /* @__PURE__ */ reactExports.createElement(Component, {
    className,
    style: {
      display: expanded ? null : "none"
    }
  }, /* @__PURE__ */ reactExports.createElement(Cell$1, {
    component: cellComponent,
    prefixCls,
    colSpan
  }, contentNode));
}
function getCellProps(rowInfo, column, colIndex, indent, index) {
  var record = rowInfo.record, prefixCls = rowInfo.prefixCls, columnsKey = rowInfo.columnsKey, fixedInfoList = rowInfo.fixedInfoList, expandIconColumnIndex = rowInfo.expandIconColumnIndex, nestExpandable = rowInfo.nestExpandable, indentSize = rowInfo.indentSize, expandIcon = rowInfo.expandIcon, expanded = rowInfo.expanded, hasNestChildren = rowInfo.hasNestChildren, onTriggerExpand = rowInfo.onTriggerExpand;
  var key = columnsKey[colIndex];
  var fixedInfo = fixedInfoList[colIndex];
  var appendCellNode;
  if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
    appendCellNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("span", {
      style: {
        paddingLeft: "".concat(indentSize * indent, "px")
      },
      className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
    }), expandIcon({
      prefixCls,
      expanded,
      expandable: hasNestChildren,
      record,
      onExpand: onTriggerExpand
    }));
  }
  var additionalCellProps;
  if (column.onCell) {
    additionalCellProps = column.onCell(record, index);
  }
  return {
    key,
    fixedInfo,
    appendCellNode,
    additionalCellProps: additionalCellProps || {}
  };
}
function BodyRow(props) {
  var className = props.className, style = props.style, record = props.record, index = props.index, renderIndex = props.renderIndex, rowKey = props.rowKey, _props$indent = props.indent, indent = _props$indent === void 0 ? 0 : _props$indent, RowComponent = props.rowComponent, cellComponent = props.cellComponent, scopeCellComponent = props.scopeCellComponent;
  var rowInfo = useRowInfo(record, rowKey, index, indent);
  var prefixCls = rowInfo.prefixCls, flattenColumns = rowInfo.flattenColumns, expandedRowClassName = rowInfo.expandedRowClassName, expandedRowRender = rowInfo.expandedRowRender, rowProps = rowInfo.rowProps, expanded = rowInfo.expanded, rowSupportExpand = rowInfo.rowSupportExpand;
  var expandedRef = reactExports.useRef(false);
  expandedRef.current || (expandedRef.current = expanded);
  var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
  var baseRowNode = /* @__PURE__ */ reactExports.createElement(RowComponent, _extends({}, rowProps, {
    "data-row-key": rowKey,
    className: classNames(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), rowProps === null || rowProps === void 0 ? void 0 : rowProps.className, indent >= 1 ? computedExpandedRowClassName : ""),
    style: _objectSpread2(_objectSpread2({}, style), rowProps === null || rowProps === void 0 ? void 0 : rowProps.style)
  }), flattenColumns.map(function(column, colIndex) {
    var render = column.render, dataIndex = column.dataIndex, columnClassName = column.className;
    var _getCellProps = getCellProps(rowInfo, column, colIndex, indent, index), key = _getCellProps.key, fixedInfo = _getCellProps.fixedInfo, appendCellNode = _getCellProps.appendCellNode, additionalCellProps = _getCellProps.additionalCellProps;
    return /* @__PURE__ */ reactExports.createElement(Cell$1, _extends({
      className: columnClassName,
      ellipsis: column.ellipsis,
      align: column.align,
      scope: column.rowScope,
      component: column.rowScope ? scopeCellComponent : cellComponent,
      prefixCls,
      key,
      record,
      index,
      renderIndex,
      dataIndex,
      render,
      shouldCellUpdate: column.shouldCellUpdate
    }, fixedInfo, {
      appendNode: appendCellNode,
      additionalProps: additionalCellProps
    }));
  }));
  var expandRowNode;
  if (rowSupportExpand && (expandedRef.current || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    expandRowNode = /* @__PURE__ */ reactExports.createElement(ExpandedRow, {
      expanded,
      className: classNames("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
      prefixCls,
      component: RowComponent,
      cellComponent,
      colSpan: flattenColumns.length,
      isEmpty: false
    }, expandContent);
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, baseRowNode, expandRowNode);
}
const BodyRow$1 = responseImmutable(BodyRow);
function MeasureCell(_ref) {
  var columnKey = _ref.columnKey, onColumnResize = _ref.onColumnResize;
  var cellRef = reactExports.useRef();
  reactExports.useEffect(function() {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    data: columnKey
  }, /* @__PURE__ */ reactExports.createElement("td", {
    ref: cellRef,
    style: {
      padding: 0,
      border: 0,
      height: 0
    }
  }, /* @__PURE__ */ reactExports.createElement("div", {
    style: {
      height: 0,
      overflow: "hidden"
    }
  }, " ")));
}
function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls, columnsKey = _ref.columnsKey, onColumnResize = _ref.onColumnResize;
  return /* @__PURE__ */ reactExports.createElement("tr", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-measure-row"),
    style: {
      height: 0,
      fontSize: 0
    }
  }, /* @__PURE__ */ reactExports.createElement(RefResizeObserver.Collection, {
    onBatchResize: function onBatchResize(infoList) {
      infoList.forEach(function(_ref2) {
        var columnKey = _ref2.data, size = _ref2.size;
        onColumnResize(columnKey, size.offsetWidth);
      });
    }
  }, columnsKey.map(function(columnKey) {
    return /* @__PURE__ */ reactExports.createElement(MeasureCell, {
      key: columnKey,
      columnKey,
      onColumnResize
    });
  })));
}
function Body(props) {
  var data = props.data, measureColumnWidth = props.measureColumnWidth;
  var _useContext = useContext(TableContext, ["prefixCls", "getComponent", "onColumnResize", "flattenColumns", "getRowKey", "expandedKeys", "childrenColumnName", "emptyNode"]), prefixCls = _useContext.prefixCls, getComponent = _useContext.getComponent, onColumnResize = _useContext.onColumnResize, flattenColumns = _useContext.flattenColumns, getRowKey = _useContext.getRowKey, expandedKeys = _useContext.expandedKeys, childrenColumnName = _useContext.childrenColumnName, emptyNode = _useContext.emptyNode;
  var flattenData2 = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey);
  var perfRef = reactExports.useRef({
    renderWithProps: false
  });
  var WrapperComponent = getComponent(["body", "wrapper"], "tbody");
  var trComponent = getComponent(["body", "row"], "tr");
  var tdComponent = getComponent(["body", "cell"], "td");
  var thComponent = getComponent(["body", "cell"], "th");
  var rows;
  if (data.length) {
    rows = flattenData2.map(function(item, idx) {
      var record = item.record, indent = item.indent, renderIndex = item.index;
      var key = getRowKey(record, idx);
      return /* @__PURE__ */ reactExports.createElement(BodyRow$1, {
        key,
        rowKey: key,
        record,
        index: idx,
        renderIndex,
        rowComponent: trComponent,
        cellComponent: tdComponent,
        scopeCellComponent: thComponent,
        getRowKey,
        indent
      });
    });
  } else {
    rows = /* @__PURE__ */ reactExports.createElement(ExpandedRow, {
      expanded: true,
      className: "".concat(prefixCls, "-placeholder"),
      prefixCls,
      component: trComponent,
      cellComponent: tdComponent,
      colSpan: flattenColumns.length,
      isEmpty: true
    }, emptyNode);
  }
  var columnsKey = getColumnsKey(flattenColumns);
  return /* @__PURE__ */ reactExports.createElement(PerfContext.Provider, {
    value: perfRef.current
  }, /* @__PURE__ */ reactExports.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-tbody")
  }, measureColumnWidth && /* @__PURE__ */ reactExports.createElement(MeasureRow, {
    prefixCls,
    columnsKey,
    onColumnResize
  }), rows));
}
const Body$1 = responseImmutable(Body);
var _excluded$7 = ["expandable"];
var INTERNAL_COL_DEFINE = "RC_TABLE_INTERNAL_COL_DEFINE";
function getExpandableProps(props) {
  var expandable = props.expandable, legacyExpandableConfig = _objectWithoutProperties(props, _excluded$7);
  var config;
  if ("expandable" in props) {
    config = _objectSpread2(_objectSpread2({}, legacyExpandableConfig), expandable);
  } else {
    config = legacyExpandableConfig;
  }
  if (config.showExpandColumn === false) {
    config.expandIconColumnIndex = -1;
  }
  return config;
}
var _excluded$6 = ["columnType"];
function ColGroup(_ref) {
  var colWidths = _ref.colWidths, columns = _ref.columns, columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length;
  var mustInsert = false;
  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[INTERNAL_COL_DEFINE];
    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {};
      _ref2.columnType;
      var restAdditionalProps = _objectWithoutProperties(_ref2, _excluded$6);
      cols.unshift(/* @__PURE__ */ reactExports.createElement("col", _extends({
        key: i,
        style: {
          width
        }
      }, restAdditionalProps)));
      mustInsert = true;
    }
  }
  return /* @__PURE__ */ reactExports.createElement("colgroup", null, cols);
}
var _excluded$5 = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];
function useColumnWidth(colWidths, columCount) {
  return reactExports.useMemo(function() {
    var cloneColumns = [];
    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];
      if (val !== void 0) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }
    return cloneColumns;
  }, [colWidths.join("_"), columCount]);
}
var FixedHolder = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var className = props.className, noData = props.noData, columns = props.columns, flattenColumns = props.flattenColumns, colWidths = props.colWidths, columCount = props.columCount, stickyOffsets = props.stickyOffsets, direction = props.direction, fixHeader = props.fixHeader, stickyTopOffset = props.stickyTopOffset, stickyBottomOffset = props.stickyBottomOffset, stickyClassName = props.stickyClassName, onScroll = props.onScroll, maxContentScroll = props.maxContentScroll, children = props.children, restProps = _objectWithoutProperties(props, _excluded$5);
  var _useContext = useContext(TableContext, ["prefixCls", "scrollbarSize", "isSticky", "getComponent"]), prefixCls = _useContext.prefixCls, scrollbarSize = _useContext.scrollbarSize, isSticky = _useContext.isSticky, getComponent = _useContext.getComponent;
  var TableComponent = getComponent(["header", "table"], "table");
  var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize;
  var scrollRef = reactExports.useRef(null);
  var setScrollRef = reactExports.useCallback(function(element) {
    fillRef(ref, element);
    fillRef(scrollRef, element);
  }, []);
  reactExports.useEffect(function() {
    var _scrollRef$current;
    function onWheel(e) {
      var _ref = e, currentTarget = _ref.currentTarget, deltaX = _ref.deltaX;
      if (deltaX) {
        onScroll({
          currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    }
    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 || _scrollRef$current.addEventListener("wheel", onWheel, {
      passive: false
    });
    return function() {
      var _scrollRef$current2;
      (_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 || _scrollRef$current2.removeEventListener("wheel", onWheel);
    };
  }, []);
  var allFlattenColumnsWithWidth = reactExports.useMemo(function() {
    return flattenColumns.every(function(column) {
      return column.width;
    });
  }, [flattenColumns]);
  var lastColumn = flattenColumns[flattenColumns.length - 1];
  var ScrollBarColumn = {
    fixed: lastColumn ? lastColumn.fixed : null,
    scrollbar: true,
    onHeaderCell: function onHeaderCell() {
      return {
        className: "".concat(prefixCls, "-cell-scrollbar")
      };
    }
  };
  var columnsWithScrollbar = reactExports.useMemo(function() {
    return combinationScrollBarSize ? [].concat(_toConsumableArray(columns), [ScrollBarColumn]) : columns;
  }, [combinationScrollBarSize, columns]);
  var flattenColumnsWithScrollbar = reactExports.useMemo(function() {
    return combinationScrollBarSize ? [].concat(_toConsumableArray(flattenColumns), [ScrollBarColumn]) : flattenColumns;
  }, [combinationScrollBarSize, flattenColumns]);
  var headerStickyOffsets = reactExports.useMemo(function() {
    var right = stickyOffsets.right, left = stickyOffsets.left;
    return _objectSpread2(_objectSpread2({}, stickyOffsets), {}, {
      left: direction === "rtl" ? [].concat(_toConsumableArray(left.map(function(width) {
        return width + combinationScrollBarSize;
      })), [0]) : left,
      right: direction === "rtl" ? right : [].concat(_toConsumableArray(right.map(function(width) {
        return width + combinationScrollBarSize;
      })), [0]),
      isSticky
    });
  }, [combinationScrollBarSize, stickyOffsets, isSticky]);
  var mergedColumnWidth = useColumnWidth(colWidths, columCount);
  return /* @__PURE__ */ reactExports.createElement("div", {
    style: _objectSpread2({
      overflow: "hidden"
    }, isSticky ? {
      top: stickyTopOffset,
      bottom: stickyBottomOffset
    } : {}),
    ref: setScrollRef,
    className: classNames(className, _defineProperty({}, stickyClassName, !!stickyClassName))
  }, /* @__PURE__ */ reactExports.createElement(TableComponent, {
    style: {
      tableLayout: "fixed",
      visibility: noData || mergedColumnWidth ? null : "hidden"
    }
  }, (!noData || !maxContentScroll || allFlattenColumnsWithWidth) && /* @__PURE__ */ reactExports.createElement(ColGroup, {
    colWidths: mergedColumnWidth ? [].concat(_toConsumableArray(mergedColumnWidth), [combinationScrollBarSize]) : [],
    columCount: columCount + 1,
    columns: flattenColumnsWithScrollbar
  }), children(_objectSpread2(_objectSpread2({}, restProps), {}, {
    stickyOffsets: headerStickyOffsets,
    columns: columnsWithScrollbar,
    flattenColumns: flattenColumnsWithScrollbar
  }))));
});
const FixedHolder$1 = /* @__PURE__ */ reactExports.memo(FixedHolder);
var HeaderRow = function HeaderRow2(props) {
  var cells = props.cells, stickyOffsets = props.stickyOffsets, flattenColumns = props.flattenColumns, RowComponent = props.rowComponent, CellComponent = props.cellComponent, onHeaderRow = props.onHeaderRow, index = props.index;
  var _useContext = useContext(TableContext, ["prefixCls", "direction"]), prefixCls = _useContext.prefixCls, direction = _useContext.direction;
  var rowProps;
  if (onHeaderRow) {
    rowProps = onHeaderRow(cells.map(function(cell) {
      return cell.column;
    }), index);
  }
  var columnsKey = getColumnsKey(cells.map(function(cell) {
    return cell.column;
  }));
  return /* @__PURE__ */ reactExports.createElement(RowComponent, rowProps, cells.map(function(cell, cellIndex) {
    var column = cell.column;
    var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
    var additionalProps;
    if (column && column.onHeaderCell) {
      additionalProps = cell.column.onHeaderCell(column);
    }
    return /* @__PURE__ */ reactExports.createElement(Cell$1, _extends({}, cell, {
      scope: column.title ? cell.colSpan > 1 ? "colgroup" : "col" : null,
      ellipsis: column.ellipsis,
      align: column.align,
      component: CellComponent,
      prefixCls,
      key: columnsKey[cellIndex]
    }, fixedInfo, {
      additionalProps,
      rowType: "header"
    }));
  }));
};
function parseHeaderRows(rootColumns) {
  var rows = [];
  function fillRowCells(columns, colIndex) {
    var rowIndex2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    rows[rowIndex2] = rows[rowIndex2] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function(column) {
      var cell = {
        key: column.key,
        className: column.className || "",
        children: column.title,
        column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;
      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex2 + 1).reduce(function(total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }
      if ("colSpan" in column) {
        colSpan = column.colSpan;
      }
      if ("rowSpan" in column) {
        cell.rowSpan = column.rowSpan;
      }
      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex2].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  }
  fillRowCells(rootColumns, 0);
  var rowCount = rows.length;
  var _loop = function _loop2(rowIndex2) {
    rows[rowIndex2].forEach(function(cell) {
      if (!("rowSpan" in cell) && !cell.hasSubColumns) {
        cell.rowSpan = rowCount - rowIndex2;
      }
    });
  };
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }
  return rows;
}
var Header = function Header2(props) {
  var stickyOffsets = props.stickyOffsets, columns = props.columns, flattenColumns = props.flattenColumns, onHeaderRow = props.onHeaderRow;
  var _useContext = useContext(TableContext, ["prefixCls", "getComponent"]), prefixCls = _useContext.prefixCls, getComponent = _useContext.getComponent;
  var rows = reactExports.useMemo(function() {
    return parseHeaderRows(columns);
  }, [columns]);
  var WrapperComponent = getComponent(["header", "wrapper"], "thead");
  var trComponent = getComponent(["header", "row"], "tr");
  var thComponent = getComponent(["header", "cell"], "th");
  return /* @__PURE__ */ reactExports.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function(row, rowIndex) {
    var rowNode = /* @__PURE__ */ reactExports.createElement(HeaderRow, {
      key: rowIndex,
      flattenColumns,
      cells: row,
      stickyOffsets,
      rowComponent: trComponent,
      cellComponent: thComponent,
      onHeaderRow,
      index: rowIndex
    });
    return rowNode;
  }));
};
const Header$1 = responseImmutable(Header);
function parseColWidth(totalWidth) {
  var width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  if (typeof width === "number") {
    return width;
  }
  if (width.endsWith("%")) {
    return totalWidth * parseFloat(width) / 100;
  }
  return null;
}
function useWidthColumns(flattenColumns, scrollWidth, clientWidth) {
  return reactExports.useMemo(function() {
    if (scrollWidth && scrollWidth > 0) {
      var totalWidth = 0;
      var missWidthCount = 0;
      flattenColumns.forEach(function(col) {
        var colWidth = parseColWidth(scrollWidth, col.width);
        if (colWidth) {
          totalWidth += colWidth;
        } else {
          missWidthCount += 1;
        }
      });
      var maxFitWidth = Math.max(scrollWidth, clientWidth);
      var restWidth = Math.max(maxFitWidth - totalWidth, missWidthCount);
      var restCount = missWidthCount;
      var avgWidth = restWidth / missWidthCount;
      var realTotal = 0;
      var filledColumns = flattenColumns.map(function(col) {
        var clone = _objectSpread2({}, col);
        var colWidth = parseColWidth(scrollWidth, clone.width);
        if (colWidth) {
          clone.width = colWidth;
        } else {
          var colAvgWidth = Math.floor(avgWidth);
          clone.width = restCount === 1 ? restWidth : colAvgWidth;
          restWidth -= colAvgWidth;
          restCount -= 1;
        }
        realTotal += clone.width;
        return clone;
      });
      if (realTotal < maxFitWidth) {
        var scale = maxFitWidth / realTotal;
        restWidth = maxFitWidth;
        filledColumns.forEach(function(col, index) {
          var colWidth = Math.floor(col.width * scale);
          col.width = index === filledColumns.length - 1 ? restWidth : colWidth;
          restWidth -= colWidth;
        });
      }
      return [filledColumns, Math.max(realTotal, maxFitWidth)];
    }
    return [flattenColumns, scrollWidth];
  }, [flattenColumns, scrollWidth, clientWidth]);
}
var _excluded$4 = ["children"], _excluded2 = ["fixed"];
function convertChildrenToColumns(children) {
  return toArray$2(children).filter(function(node) {
    return /* @__PURE__ */ reactExports.isValidElement(node);
  }).map(function(_ref) {
    var key = _ref.key, props = _ref.props;
    var nodeChildren = props.children, restProps = _objectWithoutProperties(props, _excluded$4);
    var column = _objectSpread2({
      key
    }, restProps);
    if (nodeChildren) {
      column.children = convertChildrenToColumns(nodeChildren);
    }
    return column;
  });
}
function filterHiddenColumns(columns) {
  return columns.filter(function(column) {
    return column && _typeof(column) === "object" && !column.hidden;
  }).map(function(column) {
    var subColumns = column.children;
    if (subColumns && subColumns.length > 0) {
      return _objectSpread2(_objectSpread2({}, column), {}, {
        children: filterHiddenColumns(subColumns)
      });
    }
    return column;
  });
}
function flatColumns(columns) {
  var parentKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key";
  return columns.filter(function(column) {
    return column && _typeof(column) === "object";
  }).reduce(function(list, column, index) {
    var fixed = column.fixed;
    var parsedFixed = fixed === true ? "left" : fixed;
    var mergedKey = "".concat(parentKey, "-").concat(index);
    var subColumns = column.children;
    if (subColumns && subColumns.length > 0) {
      return [].concat(_toConsumableArray(list), _toConsumableArray(flatColumns(subColumns, mergedKey).map(function(subColum) {
        return _objectSpread2({
          fixed: parsedFixed
        }, subColum);
      })));
    }
    return [].concat(_toConsumableArray(list), [_objectSpread2(_objectSpread2({
      key: mergedKey
    }, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}
function revertForRtl(columns) {
  return columns.map(function(column) {
    var fixed = column.fixed, restProps = _objectWithoutProperties(column, _excluded2);
    var parsedFixed = fixed;
    if (fixed === "left") {
      parsedFixed = "right";
    } else if (fixed === "right") {
      parsedFixed = "left";
    }
    return _objectSpread2({
      fixed: parsedFixed
    }, restProps);
  });
}
function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls, columns = _ref2.columns, children = _ref2.children, expandable = _ref2.expandable, expandedKeys = _ref2.expandedKeys, columnTitle = _ref2.columnTitle, getRowKey = _ref2.getRowKey, onTriggerExpand = _ref2.onTriggerExpand, expandIcon = _ref2.expandIcon, rowExpandable = _ref2.rowExpandable, expandIconColumnIndex = _ref2.expandIconColumnIndex, direction = _ref2.direction, expandRowByClick = _ref2.expandRowByClick, columnWidth = _ref2.columnWidth, fixed = _ref2.fixed, scrollWidth = _ref2.scrollWidth, clientWidth = _ref2.clientWidth;
  var baseColumns = reactExports.useMemo(function() {
    var newColumns = columns || convertChildrenToColumns(children) || [];
    return filterHiddenColumns(newColumns.slice());
  }, [columns, children]);
  var withExpandColumns = reactExports.useMemo(function() {
    if (expandable) {
      var _expandColumn;
      var cloneColumns = baseColumns.slice();
      if (!cloneColumns.includes(EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex || 0;
        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, EXPAND_COLUMN);
        }
      }
      var expandColumnIndex = cloneColumns.indexOf(EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function(column, index) {
        return column !== EXPAND_COLUMN || index === expandColumnIndex;
      });
      var prevColumn = baseColumns[expandColumnIndex];
      var fixedColumn;
      if ((fixed === "left" || fixed) && !expandIconColumnIndex) {
        fixedColumn = "left";
      } else if ((fixed === "right" || fixed) && expandIconColumnIndex === baseColumns.length) {
        fixedColumn = "right";
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      }
      var expandColumn = (_expandColumn = {}, _defineProperty(_expandColumn, INTERNAL_COL_DEFINE, {
        className: "".concat(prefixCls, "-expand-icon-col"),
        columnType: "EXPAND_COLUMN"
      }), _defineProperty(_expandColumn, "title", columnTitle), _defineProperty(_expandColumn, "fixed", fixedColumn), _defineProperty(_expandColumn, "className", "".concat(prefixCls, "-row-expand-icon-cell")), _defineProperty(_expandColumn, "width", columnWidth), _defineProperty(_expandColumn, "render", function render(_, record, index) {
        var rowKey = getRowKey(record, index);
        var expanded = expandedKeys.has(rowKey);
        var recordExpandable = rowExpandable ? rowExpandable(record) : true;
        var icon = expandIcon({
          prefixCls,
          expanded,
          expandable: recordExpandable,
          record,
          onExpand: onTriggerExpand
        });
        if (expandRowByClick) {
          return /* @__PURE__ */ reactExports.createElement("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, icon);
        }
        return icon;
      }), _expandColumn);
      return cloneColumns.map(function(col) {
        return col === EXPAND_COLUMN ? expandColumn : col;
      });
    }
    return baseColumns.filter(function(col) {
      return col !== EXPAND_COLUMN;
    });
  }, [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]);
  var mergedColumns = reactExports.useMemo(function() {
    var finalColumns = withExpandColumns;
    if (transformColumns) {
      finalColumns = transformColumns(finalColumns);
    }
    if (!finalColumns.length) {
      finalColumns = [{
        render: function render() {
          return null;
        }
      }];
    }
    return finalColumns;
  }, [transformColumns, withExpandColumns, direction]);
  var flattenColumns = reactExports.useMemo(function() {
    if (direction === "rtl") {
      return revertForRtl(flatColumns(mergedColumns));
    }
    return flatColumns(mergedColumns);
  }, [mergedColumns, direction, scrollWidth]);
  var hasGapFixed = reactExports.useMemo(function() {
    var lastLeftIndex = -1;
    for (var i = flattenColumns.length - 1; i >= 0; i -= 1) {
      var colFixed = flattenColumns[i].fixed;
      if (colFixed === "left" || colFixed === true) {
        lastLeftIndex = i;
        break;
      }
    }
    if (lastLeftIndex >= 0) {
      for (var _i = 0; _i <= lastLeftIndex; _i += 1) {
        var _colFixed = flattenColumns[_i].fixed;
        if (_colFixed !== "left" && _colFixed !== true) {
          return true;
        }
      }
    }
    var firstRightIndex = flattenColumns.findIndex(function(_ref3) {
      var colFixed2 = _ref3.fixed;
      return colFixed2 === "right";
    });
    if (firstRightIndex >= 0) {
      for (var _i2 = firstRightIndex; _i2 < flattenColumns.length; _i2 += 1) {
        var _colFixed2 = flattenColumns[_i2].fixed;
        if (_colFixed2 !== "right") {
          return true;
        }
      }
    }
    return false;
  }, [flattenColumns]);
  var _useWidthColumns = useWidthColumns(flattenColumns, scrollWidth, clientWidth), _useWidthColumns2 = _slicedToArray(_useWidthColumns, 2), filledColumns = _useWidthColumns2[0], realScrollWidth = _useWidthColumns2[1];
  return [mergedColumns, filledColumns, realScrollWidth, hasGapFixed];
}
function renderExpandIcon$1(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls, record = _ref.record, onExpand = _ref.onExpand, expanded = _ref.expanded, expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");
  if (!expandable) {
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: classNames(expandClassName, "".concat(prefixCls, "-row-spaced"))
    });
  }
  var onClick = function onClick2(event) {
    onExpand(record, event);
    event.stopPropagation();
  };
  return /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(expandClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), _defineProperty(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick
  });
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];
  function dig(list) {
    (list || []).forEach(function(item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }
  dig(data);
  return keys;
}
function useExpand(props, mergedData, getRowKey) {
  var expandableConfig = getExpandableProps(props);
  var expandIcon = expandableConfig.expandIcon, expandedRowKeys = expandableConfig.expandedRowKeys, defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys, defaultExpandAllRows = expandableConfig.defaultExpandAllRows, expandedRowRender = expandableConfig.expandedRowRender, onExpand = expandableConfig.onExpand, onExpandedRowsChange = expandableConfig.onExpandedRowsChange, childrenColumnName = expandableConfig.childrenColumnName;
  var mergedExpandIcon = expandIcon || renderExpandIcon$1;
  var mergedChildrenColumnName = childrenColumnName || "children";
  var expandableType = reactExports.useMemo(function() {
    if (expandedRowRender) {
      return "row";
    }
    if (props.expandable && props.internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__ || mergedData.some(function(record) {
      return record && _typeof(record) === "object" && record[mergedChildrenColumnName];
    })) {
      return "nest";
    }
    return false;
  }, [!!expandedRowRender, mergedData]);
  var _React$useState = reactExports.useState(function() {
    if (defaultExpandedRowKeys) {
      return defaultExpandedRowKeys;
    }
    if (defaultExpandAllRows) {
      return findAllChildrenKeys(mergedData, getRowKey, mergedChildrenColumnName);
    }
    return [];
  }), _React$useState2 = _slicedToArray(_React$useState, 2), innerExpandedKeys = _React$useState2[0], setInnerExpandedKeys = _React$useState2[1];
  var mergedExpandedKeys = reactExports.useMemo(function() {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = reactExports.useCallback(function(record) {
    var key = getRowKey(record, mergedData.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);
    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = _toConsumableArray(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat(_toConsumableArray(mergedExpandedKeys), [key]);
    }
    setInnerExpandedKeys(newExpandedKeys);
    if (onExpand) {
      onExpand(!hasKey, record);
    }
    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]);
  return [expandableConfig, expandableType, mergedExpandedKeys, mergedExpandIcon, mergedChildrenColumnName, onTriggerExpand];
}
function useFixedInfo(flattenColumns, stickyOffsets, direction) {
  var fixedInfoList = flattenColumns.map(function(_, colIndex) {
    return getCellFixedInfo(colIndex, colIndex, flattenColumns, stickyOffsets, direction);
  });
  return useMemo(function() {
    return fixedInfoList;
  }, [fixedInfoList], function(prev, next) {
    return !isEqual(prev, next);
  });
}
function useLayoutState(defaultState) {
  var stateRef = reactExports.useRef(defaultState);
  var _useState = reactExports.useState({}), _useState2 = _slicedToArray(_useState, 2), forceUpdate = _useState2[1];
  var lastPromiseRef = reactExports.useRef(null);
  var updateBatchRef = reactExports.useRef([]);
  function setFrameState(updater) {
    updateBatchRef.current.push(updater);
    var promise = Promise.resolve();
    lastPromiseRef.current = promise;
    promise.then(function() {
      if (lastPromiseRef.current === promise) {
        var prevBatch = updateBatchRef.current;
        var prevState = stateRef.current;
        updateBatchRef.current = [];
        prevBatch.forEach(function(batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        lastPromiseRef.current = null;
        if (prevState !== stateRef.current) {
          forceUpdate({});
        }
      }
    });
  }
  reactExports.useEffect(function() {
    return function() {
      lastPromiseRef.current = null;
    };
  }, []);
  return [stateRef.current, setFrameState];
}
function useTimeoutLock(defaultState) {
  var frameRef = reactExports.useRef(null);
  var timeoutRef = reactExports.useRef();
  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }
  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function() {
      frameRef.current = null;
      timeoutRef.current = void 0;
    }, 100);
  }
  function getState() {
    return frameRef.current;
  }
  reactExports.useEffect(function() {
    return cleanUp;
  }, []);
  return [setState, getState];
}
function useHover() {
  var _React$useState = reactExports.useState(-1), _React$useState2 = _slicedToArray(_React$useState, 2), startRow = _React$useState2[0], setStartRow = _React$useState2[1];
  var _React$useState3 = reactExports.useState(-1), _React$useState4 = _slicedToArray(_React$useState3, 2), endRow = _React$useState4[0], setEndRow = _React$useState4[1];
  var onHover = reactExports.useCallback(function(start, end) {
    setStartRow(start);
    setEndRow(end);
  }, []);
  return [startRow, endRow, onHover];
}
var defaultContainer = canUseDom() ? window : null;
function useSticky(sticky, prefixCls) {
  var _ref = _typeof(sticky) === "object" ? sticky : {}, _ref$offsetHeader = _ref.offsetHeader, offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader, _ref$offsetSummary = _ref.offsetSummary, offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary, _ref$offsetScroll = _ref.offsetScroll, offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll, _ref$getContainer = _ref.getContainer, getContainer = _ref$getContainer === void 0 ? function() {
    return defaultContainer;
  } : _ref$getContainer;
  var container = getContainer() || defaultContainer;
  return reactExports.useMemo(function() {
    var isSticky = !!sticky;
    return {
      isSticky,
      stickyClassName: isSticky ? "".concat(prefixCls, "-sticky-holder") : "",
      offsetHeader,
      offsetSummary,
      offsetScroll,
      container
    };
  }, [offsetScroll, offsetHeader, offsetSummary, prefixCls, container]);
}
function useStickyOffsets(colWidths, flattenColumns, direction) {
  var stickyOffsets = reactExports.useMemo(function() {
    var columnCount = flattenColumns.length;
    var getOffsets = function getOffsets2(startIndex, endIndex, offset2) {
      var offsets = [];
      var total = 0;
      for (var i = startIndex; i !== endIndex; i += offset2) {
        offsets.push(total);
        if (flattenColumns[i].fixed) {
          total += colWidths[i] || 0;
        }
      }
      return offsets;
    };
    var startOffsets = getOffsets(0, columnCount, 1);
    var endOffsets = getOffsets(columnCount - 1, -1, -1).reverse();
    return direction === "rtl" ? {
      left: endOffsets,
      right: startOffsets
    } : {
      left: startOffsets,
      right: endOffsets
    };
  }, [colWidths, flattenColumns, direction]);
  return stickyOffsets;
}
function Panel(_ref) {
  var className = _ref.className, children = _ref.children;
  return /* @__PURE__ */ reactExports.createElement("div", {
    className
  }, children);
}
var StickyScrollBar = function StickyScrollBar2(_ref, ref) {
  var _scrollBodyRef$curren, _scrollBodyRef$curren2;
  var scrollBodyRef = _ref.scrollBodyRef, onScroll = _ref.onScroll, offsetScroll = _ref.offsetScroll, container = _ref.container;
  var prefixCls = useContext(TableContext, "prefixCls");
  var bodyScrollWidth = ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0 ? void 0 : _scrollBodyRef$curren.scrollWidth) || 0;
  var bodyWidth = ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0 ? void 0 : _scrollBodyRef$curren2.clientWidth) || 0;
  var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
  var scrollBarRef = reactExports.useRef();
  var _useLayoutState = useLayoutState({
    scrollLeft: 0,
    isHiddenScrollBar: false
  }), _useLayoutState2 = _slicedToArray(_useLayoutState, 2), scrollState = _useLayoutState2[0], setScrollState = _useLayoutState2[1];
  var refState = reactExports.useRef({
    delta: 0,
    x: 0
  });
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), isActive = _React$useState2[0], setActive = _React$useState2[1];
  var rafRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    return function() {
      wrapperRaf.cancel(rafRef.current);
    };
  }, []);
  var onMouseUp = function onMouseUp2() {
    setActive(false);
  };
  var onMouseDown = function onMouseDown2(event) {
    event.persist();
    refState.current.delta = event.pageX - scrollState.scrollLeft;
    refState.current.x = 0;
    setActive(true);
    event.preventDefault();
  };
  var onMouseMove = function onMouseMove2(event) {
    var _window;
    var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event), buttons = _ref2.buttons;
    if (!isActive || buttons === 0) {
      if (isActive) {
        setActive(false);
      }
      return;
    }
    var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;
    if (left <= 0) {
      left = 0;
    }
    if (left + scrollBarWidth >= bodyWidth) {
      left = bodyWidth - scrollBarWidth;
    }
    onScroll({
      scrollLeft: left / bodyWidth * (bodyScrollWidth + 2)
    });
    refState.current.x = event.pageX;
  };
  var checkScrollBarVisible = function checkScrollBarVisible2() {
    rafRef.current = wrapperRaf(function() {
      if (!scrollBodyRef.current) {
        return;
      }
      var tableOffsetTop = getOffset(scrollBodyRef.current).top;
      var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
      var currentClientOffset = container === window ? document.documentElement.scrollTop + window.innerHeight : getOffset(container).top + container.clientHeight;
      if (tableBottomOffset - getScrollBarSize() <= currentClientOffset || tableOffsetTop >= currentClientOffset - offsetScroll) {
        setScrollState(function(state) {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            isHiddenScrollBar: true
          });
        });
      } else {
        setScrollState(function(state) {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            isHiddenScrollBar: false
          });
        });
      }
    });
  };
  var setScrollLeft = function setScrollLeft2(left) {
    setScrollState(function(state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        scrollLeft: left / bodyScrollWidth * bodyWidth || 0
      });
    });
  };
  reactExports.useImperativeHandle(ref, function() {
    return {
      setScrollLeft,
      checkScrollBarVisible
    };
  });
  reactExports.useEffect(function() {
    var onMouseUpListener = addEventListenerWrap(document.body, "mouseup", onMouseUp, false);
    var onMouseMoveListener = addEventListenerWrap(document.body, "mousemove", onMouseMove, false);
    checkScrollBarVisible();
    return function() {
      onMouseUpListener.remove();
      onMouseMoveListener.remove();
    };
  }, [scrollBarWidth, isActive]);
  reactExports.useEffect(function() {
    var onScrollListener = addEventListenerWrap(container, "scroll", checkScrollBarVisible, false);
    var onResizeListener = addEventListenerWrap(window, "resize", checkScrollBarVisible, false);
    return function() {
      onScrollListener.remove();
      onResizeListener.remove();
    };
  }, [container]);
  reactExports.useEffect(function() {
    if (!scrollState.isHiddenScrollBar) {
      setScrollState(function(state) {
        var bodyNode = scrollBodyRef.current;
        if (!bodyNode) {
          return state;
        }
        return _objectSpread2(_objectSpread2({}, state), {}, {
          scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
        });
      });
    }
  }, [scrollState.isHiddenScrollBar]);
  if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    style: {
      height: getScrollBarSize(),
      width: bodyWidth,
      bottom: offsetScroll
    },
    className: "".concat(prefixCls, "-sticky-scroll")
  }, /* @__PURE__ */ reactExports.createElement("div", {
    onMouseDown,
    ref: scrollBarRef,
    className: classNames("".concat(prefixCls, "-sticky-scroll-bar"), _defineProperty({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive)),
    style: {
      width: "".concat(scrollBarWidth, "px"),
      transform: "translate3d(".concat(scrollState.scrollLeft, "px, 0, 0)")
    }
  }));
};
const StickyScrollBar$1 = /* @__PURE__ */ reactExports.forwardRef(StickyScrollBar);
var DEFAULT_PREFIX = "rc-table";
var EMPTY_DATA = [];
var EMPTY_SCROLL_TARGET = {};
function defaultEmpty() {
  return "No Data";
}
function Table$1(tableProps, ref) {
  var _classNames;
  var props = _objectSpread2({
    rowKey: "key",
    prefixCls: DEFAULT_PREFIX,
    emptyText: defaultEmpty
  }, tableProps);
  var prefixCls = props.prefixCls, className = props.className, rowClassName = props.rowClassName, style = props.style, data = props.data, rowKey = props.rowKey, scroll = props.scroll, tableLayout = props.tableLayout, direction = props.direction, title = props.title, footer = props.footer, summary = props.summary, caption = props.caption, id = props.id, showHeader = props.showHeader, components = props.components, emptyText = props.emptyText, onRow = props.onRow, onHeaderRow = props.onHeaderRow, onScroll = props.onScroll, internalHooks = props.internalHooks, transformColumns = props.transformColumns, internalRefs = props.internalRefs, tailor = props.tailor, getContainerWidth = props.getContainerWidth, sticky = props.sticky, _props$rowHoverable = props.rowHoverable, rowHoverable = _props$rowHoverable === void 0 ? true : _props$rowHoverable;
  var mergedData = data || EMPTY_DATA;
  var hasData = !!mergedData.length;
  var useInternalHooks = internalHooks === INTERNAL_HOOKS;
  var getComponent = reactExports.useCallback(function(path, defaultComponent) {
    return get(components, path) || defaultComponent;
  }, [components]);
  var getRowKey = reactExports.useMemo(function() {
    if (typeof rowKey === "function") {
      return rowKey;
    }
    return function(record) {
      var key = record && record[rowKey];
      return key;
    };
  }, [rowKey]);
  var customizeScrollBody = getComponent(["body"]);
  var _useHover = useHover(), _useHover2 = _slicedToArray(_useHover, 3), startRow = _useHover2[0], endRow = _useHover2[1], onHover = _useHover2[2];
  var _useExpand = useExpand(props, mergedData, getRowKey), _useExpand2 = _slicedToArray(_useExpand, 6), expandableConfig = _useExpand2[0], expandableType = _useExpand2[1], mergedExpandedKeys = _useExpand2[2], mergedExpandIcon = _useExpand2[3], mergedChildrenColumnName = _useExpand2[4], onTriggerExpand = _useExpand2[5];
  var scrollX = scroll === null || scroll === void 0 ? void 0 : scroll.x;
  var _React$useState = reactExports.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), componentWidth = _React$useState2[0], setComponentWidth = _React$useState2[1];
  var _useColumns = useColumns(_objectSpread2(_objectSpread2(_objectSpread2({}, props), expandableConfig), {}, {
    expandable: !!expandableConfig.expandedRowRender,
    columnTitle: expandableConfig.columnTitle,
    expandedKeys: mergedExpandedKeys,
    getRowKey,
    // https://github.com/ant-design/ant-design/issues/23894
    onTriggerExpand,
    expandIcon: mergedExpandIcon,
    expandIconColumnIndex: expandableConfig.expandIconColumnIndex,
    direction,
    scrollWidth: useInternalHooks && tailor && typeof scrollX === "number" ? scrollX : null,
    clientWidth: componentWidth
  }), useInternalHooks ? transformColumns : null), _useColumns2 = _slicedToArray(_useColumns, 4), columns = _useColumns2[0], flattenColumns = _useColumns2[1], flattenScrollX = _useColumns2[2], hasGapFixed = _useColumns2[3];
  var mergedScrollX = flattenScrollX !== null && flattenScrollX !== void 0 ? flattenScrollX : scrollX;
  var columnContext = reactExports.useMemo(function() {
    return {
      columns,
      flattenColumns
    };
  }, [columns, flattenColumns]);
  var fullTableRef = reactExports.useRef();
  var scrollHeaderRef = reactExports.useRef();
  var scrollBodyRef = reactExports.useRef();
  var scrollBodyContainerRef = reactExports.useRef();
  reactExports.useImperativeHandle(ref, function() {
    return {
      nativeElement: fullTableRef.current,
      scrollTo: function scrollTo2(config) {
        var _scrollBodyRef$curren3;
        if (scrollBodyRef.current instanceof HTMLElement) {
          var index = config.index, top = config.top, key = config.key;
          if (top) {
            var _scrollBodyRef$curren;
            (_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0 || _scrollBodyRef$curren.scrollTo({
              top
            });
          } else {
            var _scrollBodyRef$curren2;
            var mergedKey = key !== null && key !== void 0 ? key : getRowKey(mergedData[index]);
            (_scrollBodyRef$curren2 = scrollBodyRef.current.querySelector('[data-row-key="'.concat(mergedKey, '"]'))) === null || _scrollBodyRef$curren2 === void 0 || _scrollBodyRef$curren2.scrollIntoView();
          }
        } else if ((_scrollBodyRef$curren3 = scrollBodyRef.current) !== null && _scrollBodyRef$curren3 !== void 0 && _scrollBodyRef$curren3.scrollTo) {
          scrollBodyRef.current.scrollTo(config);
        }
      }
    };
  });
  var scrollSummaryRef = reactExports.useRef();
  var _React$useState3 = reactExports.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), pingedLeft = _React$useState4[0], setPingedLeft = _React$useState4[1];
  var _React$useState5 = reactExports.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), pingedRight = _React$useState6[0], setPingedRight = _React$useState6[1];
  var _useLayoutState = useLayoutState(/* @__PURE__ */ new Map()), _useLayoutState2 = _slicedToArray(_useLayoutState, 2), colsWidths = _useLayoutState2[0], updateColsWidths = _useLayoutState2[1];
  var colsKeys = getColumnsKey(flattenColumns);
  var pureColWidths = colsKeys.map(function(columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = reactExports.useMemo(function() {
    return pureColWidths;
  }, [pureColWidths.join("_")]);
  var stickyOffsets = useStickyOffsets(colWidths, flattenColumns, direction);
  var fixHeader = scroll && validateValue(scroll.y);
  var horizonScroll = scroll && validateValue(mergedScrollX) || Boolean(expandableConfig.fixed);
  var fixColumn = horizonScroll && flattenColumns.some(function(_ref) {
    var fixed = _ref.fixed;
    return fixed;
  });
  var stickyRef = reactExports.useRef();
  var _useSticky = useSticky(sticky, prefixCls), isSticky = _useSticky.isSticky, offsetHeader = _useSticky.offsetHeader, offsetSummary = _useSticky.offsetSummary, offsetScroll = _useSticky.offsetScroll, stickyClassName = _useSticky.stickyClassName, container = _useSticky.container;
  var summaryNode = reactExports.useMemo(function() {
    return summary === null || summary === void 0 ? void 0 : summary(mergedData);
  }, [summary, mergedData]);
  var fixFooter = (fixHeader || isSticky) && /* @__PURE__ */ reactExports.isValidElement(summaryNode) && summaryNode.type === Summary && summaryNode.props.fixed;
  var scrollXStyle;
  var scrollYStyle;
  var scrollTableStyle;
  if (fixHeader) {
    scrollYStyle = {
      overflowY: "scroll",
      maxHeight: scroll.y
    };
  }
  if (horizonScroll) {
    scrollXStyle = {
      overflowX: "auto"
    };
    if (!fixHeader) {
      scrollYStyle = {
        overflowY: "hidden"
      };
    }
    scrollTableStyle = {
      width: mergedScrollX === true ? "auto" : mergedScrollX,
      minWidth: "100%"
    };
  }
  var onColumnResize = reactExports.useCallback(function(columnKey, width) {
    if (isVisible(fullTableRef.current)) {
      updateColsWidths(function(widths) {
        if (widths.get(columnKey) !== width) {
          var newWidths = new Map(widths);
          newWidths.set(columnKey, width);
          return newWidths;
        }
        return widths;
      });
    }
  }, []);
  var _useTimeoutLock = useTimeoutLock(), _useTimeoutLock2 = _slicedToArray(_useTimeoutLock, 2), setScrollTarget = _useTimeoutLock2[0], getScrollTarget = _useTimeoutLock2[1];
  function forceScroll(scrollLeft, target) {
    if (!target) {
      return;
    }
    if (typeof target === "function") {
      target(scrollLeft);
    } else if (target.scrollLeft !== scrollLeft) {
      target.scrollLeft = scrollLeft;
      if (target.scrollLeft !== scrollLeft) {
        setTimeout(function() {
          target.scrollLeft = scrollLeft;
        }, 0);
      }
    }
  }
  var onInternalScroll = useEvent(function(_ref2) {
    var currentTarget = _ref2.currentTarget, scrollLeft = _ref2.scrollLeft;
    var isRTL = direction === "rtl";
    var mergedScrollLeft = typeof scrollLeft === "number" ? scrollLeft : currentTarget.scrollLeft;
    var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;
    if (!getScrollTarget() || getScrollTarget() === compareTarget) {
      var _stickyRef$current;
      setScrollTarget(compareTarget);
      forceScroll(mergedScrollLeft, scrollHeaderRef.current);
      forceScroll(mergedScrollLeft, scrollBodyRef.current);
      forceScroll(mergedScrollLeft, scrollSummaryRef.current);
      forceScroll(mergedScrollLeft, (_stickyRef$current = stickyRef.current) === null || _stickyRef$current === void 0 ? void 0 : _stickyRef$current.setScrollLeft);
    }
    var measureTarget = currentTarget || scrollHeaderRef.current;
    if (measureTarget) {
      var scrollWidth = measureTarget.scrollWidth, clientWidth = measureTarget.clientWidth;
      if (scrollWidth === clientWidth) {
        setPingedLeft(false);
        setPingedRight(false);
        return;
      }
      if (isRTL) {
        setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
        setPingedRight(-mergedScrollLeft > 0);
      } else {
        setPingedLeft(mergedScrollLeft > 0);
        setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
      }
    }
  });
  var onBodyScroll = useEvent(function(e) {
    onInternalScroll(e);
    onScroll === null || onScroll === void 0 || onScroll(e);
  });
  var triggerOnScroll = function triggerOnScroll2() {
    if (horizonScroll && scrollBodyRef.current) {
      onInternalScroll({
        currentTarget: scrollBodyRef.current
      });
    } else {
      setPingedLeft(false);
      setPingedRight(false);
    }
  };
  var onFullTableResize = function onFullTableResize2(_ref3) {
    var _stickyRef$current2;
    var width = _ref3.width;
    (_stickyRef$current2 = stickyRef.current) === null || _stickyRef$current2 === void 0 || _stickyRef$current2.checkScrollBarVisible();
    var mergedWidth = fullTableRef.current ? fullTableRef.current.offsetWidth : width;
    if (useInternalHooks && getContainerWidth && fullTableRef.current) {
      mergedWidth = getContainerWidth(fullTableRef.current, mergedWidth) || mergedWidth;
    }
    if (mergedWidth !== componentWidth) {
      triggerOnScroll();
      setComponentWidth(mergedWidth);
    }
  };
  var mounted = reactExports.useRef(false);
  reactExports.useEffect(function() {
    if (mounted.current) {
      triggerOnScroll();
    }
  }, [horizonScroll, data, columns.length]);
  reactExports.useEffect(function() {
    mounted.current = true;
  }, []);
  var _React$useState7 = reactExports.useState(0), _React$useState8 = _slicedToArray(_React$useState7, 2), scrollbarSize = _React$useState8[0], setScrollbarSize = _React$useState8[1];
  var _React$useState9 = reactExports.useState(true), _React$useState10 = _slicedToArray(_React$useState9, 2), supportSticky = _React$useState10[0], setSupportSticky = _React$useState10[1];
  reactExports.useEffect(function() {
    if (!tailor || !useInternalHooks) {
      if (scrollBodyRef.current instanceof Element) {
        setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.current).width);
      } else {
        setScrollbarSize(getTargetScrollBarSize(scrollBodyContainerRef.current).width);
      }
    }
    setSupportSticky(isStyleSupport("position", "sticky"));
  }, []);
  reactExports.useEffect(function() {
    if (useInternalHooks && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  });
  var renderFixedHeaderTable = reactExports.useCallback(function(fixedHolderPassProps) {
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Header$1, fixedHolderPassProps), fixFooter === "top" && /* @__PURE__ */ reactExports.createElement(Footer$1, fixedHolderPassProps, summaryNode));
  }, [fixFooter, summaryNode]);
  var renderFixedFooterTable = reactExports.useCallback(function(fixedHolderPassProps) {
    return /* @__PURE__ */ reactExports.createElement(Footer$1, fixedHolderPassProps, summaryNode);
  }, [summaryNode]);
  var TableComponent = getComponent(["table"], "table");
  var mergedTableLayout = reactExports.useMemo(function() {
    if (tableLayout) {
      return tableLayout;
    }
    if (fixColumn) {
      return mergedScrollX === "max-content" ? "auto" : "fixed";
    }
    if (fixHeader || isSticky || flattenColumns.some(function(_ref4) {
      var ellipsis = _ref4.ellipsis;
      return ellipsis;
    })) {
      return "fixed";
    }
    return "auto";
  }, [fixHeader, fixColumn, flattenColumns, tableLayout, isSticky]);
  var groupTableNode;
  var headerProps = {
    colWidths,
    columCount: flattenColumns.length,
    stickyOffsets,
    onHeaderRow,
    fixHeader,
    scroll
  };
  var emptyNode = reactExports.useMemo(function() {
    if (hasData) {
      return null;
    }
    if (typeof emptyText === "function") {
      return emptyText();
    }
    return emptyText;
  }, [hasData, emptyText]);
  var bodyTable = /* @__PURE__ */ reactExports.createElement(Body$1, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll || isSticky
  });
  var bodyColGroup = /* @__PURE__ */ reactExports.createElement(ColGroup, {
    colWidths: flattenColumns.map(function(_ref5) {
      var width = _ref5.width;
      return width;
    }),
    columns: flattenColumns
  });
  var captionElement = caption !== null && caption !== void 0 ? /* @__PURE__ */ reactExports.createElement("caption", {
    className: "".concat(prefixCls, "-caption")
  }, caption) : void 0;
  var dataProps = pickAttrs(props, {
    data: true
  });
  var ariaProps = pickAttrs(props, {
    aria: true
  });
  if (fixHeader || isSticky) {
    var bodyContent;
    if (typeof customizeScrollBody === "function") {
      bodyContent = customizeScrollBody(mergedData, {
        scrollbarSize,
        ref: scrollBodyRef,
        onScroll: onInternalScroll
      });
      headerProps.colWidths = flattenColumns.map(function(_ref6, index) {
        var width = _ref6.width;
        var colWidth = index === flattenColumns.length - 1 ? width - scrollbarSize : width;
        if (typeof colWidth === "number" && !Number.isNaN(colWidth)) {
          return colWidth;
        }
        return 0;
      });
    } else {
      bodyContent = /* @__PURE__ */ reactExports.createElement("div", {
        style: _objectSpread2(_objectSpread2({}, scrollXStyle), scrollYStyle),
        onScroll: onBodyScroll,
        ref: scrollBodyRef,
        className: classNames("".concat(prefixCls, "-body"))
      }, /* @__PURE__ */ reactExports.createElement(TableComponent, _extends({
        style: _objectSpread2(_objectSpread2({}, scrollTableStyle), {}, {
          tableLayout: mergedTableLayout
        })
      }, ariaProps), captionElement, bodyColGroup, bodyTable, !fixFooter && summaryNode && /* @__PURE__ */ reactExports.createElement(Footer$1, {
        stickyOffsets,
        flattenColumns
      }, summaryNode)));
    }
    var fixedHolderProps = _objectSpread2(_objectSpread2(_objectSpread2({
      noData: !mergedData.length,
      maxContentScroll: horizonScroll && mergedScrollX === "max-content"
    }, headerProps), columnContext), {}, {
      direction,
      stickyClassName,
      onScroll: onInternalScroll
    });
    groupTableNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, showHeader !== false && /* @__PURE__ */ reactExports.createElement(FixedHolder$1, _extends({}, fixedHolderProps, {
      stickyTopOffset: offsetHeader,
      className: "".concat(prefixCls, "-header"),
      ref: scrollHeaderRef
    }), renderFixedHeaderTable), bodyContent, fixFooter && fixFooter !== "top" && /* @__PURE__ */ reactExports.createElement(FixedHolder$1, _extends({}, fixedHolderProps, {
      stickyBottomOffset: offsetSummary,
      className: "".concat(prefixCls, "-summary"),
      ref: scrollSummaryRef
    }), renderFixedFooterTable), isSticky && scrollBodyRef.current && scrollBodyRef.current instanceof Element && /* @__PURE__ */ reactExports.createElement(StickyScrollBar$1, {
      ref: stickyRef,
      offsetScroll,
      scrollBodyRef,
      onScroll: onInternalScroll,
      container
    }));
  } else {
    groupTableNode = /* @__PURE__ */ reactExports.createElement("div", {
      style: _objectSpread2(_objectSpread2({}, scrollXStyle), scrollYStyle),
      className: classNames("".concat(prefixCls, "-content")),
      onScroll: onInternalScroll,
      ref: scrollBodyRef
    }, /* @__PURE__ */ reactExports.createElement(TableComponent, _extends({
      style: _objectSpread2(_objectSpread2({}, scrollTableStyle), {}, {
        tableLayout: mergedTableLayout
      })
    }, ariaProps), captionElement, bodyColGroup, showHeader !== false && /* @__PURE__ */ reactExports.createElement(Header$1, _extends({}, headerProps, columnContext)), bodyTable, summaryNode && /* @__PURE__ */ reactExports.createElement(Footer$1, {
      stickyOffsets,
      flattenColumns
    }, summaryNode)));
  }
  var fullTable = /* @__PURE__ */ reactExports.createElement("div", _extends({
    className: classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft), _defineProperty(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight), _defineProperty(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === "fixed"), _defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader), _defineProperty(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn), _defineProperty(_classNames, "".concat(prefixCls, "-fixed-column-gapped"), fixColumn && hasGapFixed), _defineProperty(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll), _defineProperty(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns[0] && flattenColumns[0].fixed), _defineProperty(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns[flattenColumns.length - 1] && flattenColumns[flattenColumns.length - 1].fixed === "right"), _classNames)),
    style,
    id,
    ref: fullTableRef
  }, dataProps), title && /* @__PURE__ */ reactExports.createElement(Panel, {
    className: "".concat(prefixCls, "-title")
  }, title(mergedData)), /* @__PURE__ */ reactExports.createElement("div", {
    ref: scrollBodyContainerRef,
    className: "".concat(prefixCls, "-container")
  }, groupTableNode), footer && /* @__PURE__ */ reactExports.createElement(Panel, {
    className: "".concat(prefixCls, "-footer")
  }, footer(mergedData)));
  if (horizonScroll) {
    fullTable = /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
      onResize: onFullTableResize
    }, fullTable);
  }
  var fixedInfoList = useFixedInfo(flattenColumns, stickyOffsets, direction);
  var TableContextValue = reactExports.useMemo(function() {
    return {
      // Scroll
      scrollX: mergedScrollX,
      // Table
      prefixCls,
      getComponent,
      scrollbarSize,
      direction,
      fixedInfoList,
      isSticky,
      supportSticky,
      componentWidth,
      fixHeader,
      fixColumn,
      horizonScroll,
      // Body
      tableLayout: mergedTableLayout,
      rowClassName,
      expandedRowClassName: expandableConfig.expandedRowClassName,
      expandIcon: mergedExpandIcon,
      expandableType,
      expandRowByClick: expandableConfig.expandRowByClick,
      expandedRowRender: expandableConfig.expandedRowRender,
      onTriggerExpand,
      expandIconColumnIndex: expandableConfig.expandIconColumnIndex,
      indentSize: expandableConfig.indentSize,
      allColumnsFixedLeft: flattenColumns.every(function(col) {
        return col.fixed === "left";
      }),
      emptyNode,
      // Column
      columns,
      flattenColumns,
      onColumnResize,
      // Row
      hoverStartRow: startRow,
      hoverEndRow: endRow,
      onHover,
      rowExpandable: expandableConfig.rowExpandable,
      onRow,
      getRowKey,
      expandedKeys: mergedExpandedKeys,
      childrenColumnName: mergedChildrenColumnName,
      rowHoverable
    };
  }, [
    // Scroll
    mergedScrollX,
    // Table
    prefixCls,
    getComponent,
    scrollbarSize,
    direction,
    fixedInfoList,
    isSticky,
    supportSticky,
    componentWidth,
    fixHeader,
    fixColumn,
    horizonScroll,
    // Body
    mergedTableLayout,
    rowClassName,
    expandableConfig.expandedRowClassName,
    mergedExpandIcon,
    expandableType,
    expandableConfig.expandRowByClick,
    expandableConfig.expandedRowRender,
    onTriggerExpand,
    expandableConfig.expandIconColumnIndex,
    expandableConfig.indentSize,
    emptyNode,
    // Column
    columns,
    flattenColumns,
    onColumnResize,
    // Row
    startRow,
    endRow,
    onHover,
    expandableConfig.rowExpandable,
    onRow,
    getRowKey,
    mergedExpandedKeys,
    mergedChildrenColumnName,
    rowHoverable
  ]);
  return /* @__PURE__ */ reactExports.createElement(TableContext.Provider, {
    value: TableContextValue
  }, fullTable);
}
var RefTable = /* @__PURE__ */ reactExports.forwardRef(Table$1);
function genTable(shouldTriggerRender) {
  return makeImmutable(RefTable, shouldTriggerRender);
}
var ImmutableTable = genTable();
ImmutableTable.EXPAND_COLUMN = EXPAND_COLUMN;
ImmutableTable.INTERNAL_HOOKS = INTERNAL_HOOKS;
ImmutableTable.Column = Column$1;
ImmutableTable.ColumnGroup = ColumnGroup$1;
ImmutableTable.Summary = FooterComponents;
var StaticContext = createContext(null);
var GridContext = createContext(null);
function getColumnWidth(colIndex, colSpan, columnsOffset) {
  var mergedColSpan = colSpan || 1;
  return columnsOffset[colIndex + mergedColSpan] - (columnsOffset[colIndex] || 0);
}
function VirtualCell(props) {
  var rowInfo = props.rowInfo, column = props.column, colIndex = props.colIndex, indent = props.indent, index = props.index, component = props.component, renderIndex = props.renderIndex, record = props.record, style = props.style, className = props.className, inverse = props.inverse, getHeight = props.getHeight;
  var render = column.render, dataIndex = column.dataIndex, columnClassName = column.className, colWidth = column.width;
  var _useContext = useContext(GridContext, ["columnsOffset"]), columnsOffset = _useContext.columnsOffset;
  var _getCellProps = getCellProps(rowInfo, column, colIndex, indent, index), key = _getCellProps.key, fixedInfo = _getCellProps.fixedInfo, appendCellNode = _getCellProps.appendCellNode, additionalCellProps = _getCellProps.additionalCellProps;
  var cellStyle = additionalCellProps.style, _additionalCellProps$ = additionalCellProps.colSpan, colSpan = _additionalCellProps$ === void 0 ? 1 : _additionalCellProps$, _additionalCellProps$2 = additionalCellProps.rowSpan, rowSpan = _additionalCellProps$2 === void 0 ? 1 : _additionalCellProps$2;
  var startColIndex = colIndex - 1;
  var concatColWidth = getColumnWidth(startColIndex, colSpan, columnsOffset);
  var marginOffset = colSpan > 1 ? colWidth - concatColWidth : 0;
  var mergedStyle = _objectSpread2(_objectSpread2(_objectSpread2({}, cellStyle), style), {}, {
    flex: "0 0 ".concat(concatColWidth, "px"),
    width: "".concat(concatColWidth, "px"),
    marginRight: marginOffset,
    pointerEvents: "auto"
  });
  var needHide = reactExports.useMemo(function() {
    if (inverse) {
      return rowSpan <= 1;
    } else {
      return colSpan === 0 || rowSpan === 0 || rowSpan > 1;
    }
  }, [rowSpan, colSpan, inverse]);
  if (needHide) {
    mergedStyle.visibility = "hidden";
  } else if (inverse) {
    mergedStyle.height = getHeight === null || getHeight === void 0 ? void 0 : getHeight(rowSpan);
  }
  var mergedRender = needHide ? function() {
    return null;
  } : render;
  var cellSpan = {};
  if (rowSpan === 0 || colSpan === 0) {
    cellSpan.rowSpan = 1;
    cellSpan.colSpan = 1;
  }
  return /* @__PURE__ */ reactExports.createElement(Cell$1, _extends({
    className: classNames(columnClassName, className),
    ellipsis: column.ellipsis,
    align: column.align,
    scope: column.rowScope,
    component,
    prefixCls: rowInfo.prefixCls,
    key,
    record,
    index,
    renderIndex,
    dataIndex,
    render: mergedRender,
    shouldCellUpdate: column.shouldCellUpdate
  }, fixedInfo, {
    appendNode: appendCellNode,
    additionalProps: _objectSpread2(_objectSpread2({}, additionalCellProps), {}, {
      style: mergedStyle
    }, cellSpan)
  }));
}
var _excluded$3 = ["data", "index", "className", "rowKey", "style", "extra", "getHeight"];
var BodyLine = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var data = props.data, index = props.index, className = props.className, rowKey = props.rowKey, style = props.style, extra = props.extra, getHeight = props.getHeight, restProps = _objectWithoutProperties(props, _excluded$3);
  var record = data.record, indent = data.indent, renderIndex = data.index;
  var _useContext = useContext(TableContext, ["prefixCls", "flattenColumns", "fixColumn", "componentWidth", "scrollX"]), scrollX = _useContext.scrollX, flattenColumns = _useContext.flattenColumns, prefixCls = _useContext.prefixCls, fixColumn = _useContext.fixColumn, componentWidth = _useContext.componentWidth;
  var _useContext2 = useContext(StaticContext, ["getComponent"]), getComponent = _useContext2.getComponent;
  var rowInfo = useRowInfo(record, rowKey, index, indent);
  var RowComponent = getComponent(["body", "row"], "div");
  var cellComponent = getComponent(["body", "cell"], "div");
  var rowSupportExpand = rowInfo.rowSupportExpand, expanded = rowInfo.expanded, rowProps = rowInfo.rowProps, expandedRowRender = rowInfo.expandedRowRender, expandedRowClassName = rowInfo.expandedRowClassName;
  var expandRowNode;
  if (rowSupportExpand && expanded) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName === null || expandedRowClassName === void 0 ? void 0 : expandedRowClassName(record, index, indent);
    var additionalProps = {};
    if (fixColumn) {
      additionalProps = {
        style: _defineProperty({}, "--virtual-width", "".concat(componentWidth, "px"))
      };
    }
    var rowCellCls = "".concat(prefixCls, "-expanded-row-cell");
    expandRowNode = /* @__PURE__ */ reactExports.createElement(RowComponent, {
      className: classNames("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName)
    }, /* @__PURE__ */ reactExports.createElement(Cell$1, {
      component: cellComponent,
      prefixCls,
      className: classNames(rowCellCls, _defineProperty({}, "".concat(rowCellCls, "-fixed"), fixColumn)),
      additionalProps
    }, expandContent));
  }
  var rowStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    width: scrollX
  });
  if (extra) {
    rowStyle.position = "absolute";
    rowStyle.pointerEvents = "none";
  }
  var rowNode = /* @__PURE__ */ reactExports.createElement(RowComponent, _extends({}, rowProps, restProps, {
    "data-row-key": rowKey,
    ref: rowSupportExpand ? null : ref,
    className: classNames(className, "".concat(prefixCls, "-row"), rowProps === null || rowProps === void 0 ? void 0 : rowProps.className, _defineProperty({}, "".concat(prefixCls, "-row-extra"), extra)),
    style: _objectSpread2(_objectSpread2({}, rowStyle), rowProps === null || rowProps === void 0 ? void 0 : rowProps.style)
  }), flattenColumns.map(function(column, colIndex) {
    return /* @__PURE__ */ reactExports.createElement(VirtualCell, {
      key: colIndex,
      component: cellComponent,
      rowInfo,
      column,
      colIndex,
      indent,
      index,
      renderIndex,
      record,
      inverse: extra,
      getHeight
    });
  }));
  if (rowSupportExpand) {
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref
    }, rowNode, expandRowNode);
  }
  return rowNode;
});
var ResponseBodyLine = responseImmutable(BodyLine);
var Grid = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var data = props.data, onScroll = props.onScroll;
  var _useContext = useContext(TableContext, ["flattenColumns", "onColumnResize", "getRowKey", "prefixCls", "expandedKeys", "childrenColumnName", "emptyNode", "scrollX"]), flattenColumns = _useContext.flattenColumns, onColumnResize = _useContext.onColumnResize, getRowKey = _useContext.getRowKey, expandedKeys = _useContext.expandedKeys, prefixCls = _useContext.prefixCls, childrenColumnName = _useContext.childrenColumnName, emptyNode = _useContext.emptyNode, scrollX = _useContext.scrollX;
  var _useContext2 = useContext(StaticContext), sticky = _useContext2.sticky, scrollY = _useContext2.scrollY, listItemHeight = _useContext2.listItemHeight, getComponent = _useContext2.getComponent, onTablePropScroll = _useContext2.onScroll;
  var listRef = reactExports.useRef();
  var flattenData2 = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey);
  var columnsWidth = reactExports.useMemo(function() {
    var total = 0;
    return flattenColumns.map(function(_ref) {
      var width = _ref.width, key = _ref.key;
      total += width;
      return [key, width, total];
    });
  }, [flattenColumns]);
  var columnsOffset = reactExports.useMemo(function() {
    return columnsWidth.map(function(colWidth) {
      return colWidth[2];
    });
  }, [columnsWidth]);
  reactExports.useEffect(function() {
    columnsWidth.forEach(function(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], width = _ref3[1];
      onColumnResize(key, width);
    });
  }, [columnsWidth]);
  reactExports.useImperativeHandle(ref, function() {
    var obj = {
      scrollTo: function scrollTo2(config) {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.scrollTo(config);
      }
    };
    Object.defineProperty(obj, "scrollLeft", {
      get: function get2() {
        var _listRef$current2;
        return ((_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 ? void 0 : _listRef$current2.getScrollInfo().x) || 0;
      },
      set: function set(value) {
        var _listRef$current3;
        (_listRef$current3 = listRef.current) === null || _listRef$current3 === void 0 || _listRef$current3.scrollTo({
          left: value
        });
      }
    });
    return obj;
  });
  var getRowSpan = function getRowSpan2(column, index) {
    var _flattenData$index;
    var record = (_flattenData$index = flattenData2[index]) === null || _flattenData$index === void 0 ? void 0 : _flattenData$index.record;
    var onCell = column.onCell;
    if (onCell) {
      var _cellProps$rowSpan;
      var cellProps = onCell(record, index);
      return (_cellProps$rowSpan = cellProps === null || cellProps === void 0 ? void 0 : cellProps.rowSpan) !== null && _cellProps$rowSpan !== void 0 ? _cellProps$rowSpan : 1;
    }
    return 1;
  };
  var extraRender = function extraRender2(info) {
    var start = info.start, end = info.end, getSize = info.getSize, offsetY = info.offsetY;
    if (end < 0) {
      return null;
    }
    var firstRowSpanColumns = flattenColumns.filter(
      // rowSpan is 0
      function(column) {
        return getRowSpan(column, start) === 0;
      }
    );
    var startIndex = start;
    var _loop = function _loop4(i2) {
      firstRowSpanColumns = firstRowSpanColumns.filter(function(column) {
        return getRowSpan(column, i2) === 0;
      });
      if (!firstRowSpanColumns.length) {
        startIndex = i2;
        return 1;
      }
    };
    for (var i = start; i >= 0; i -= 1) {
      if (_loop(i)) break;
    }
    var lastRowSpanColumns = flattenColumns.filter(
      // rowSpan is not 1
      function(column) {
        return getRowSpan(column, end) !== 1;
      }
    );
    var endIndex = end;
    var _loop2 = function _loop22(_i3) {
      lastRowSpanColumns = lastRowSpanColumns.filter(function(column) {
        return getRowSpan(column, _i3) !== 1;
      });
      if (!lastRowSpanColumns.length) {
        endIndex = Math.max(_i3 - 1, end);
        return 1;
      }
    };
    for (var _i = end; _i < flattenData2.length; _i += 1) {
      if (_loop2(_i)) break;
    }
    var spanLines = [];
    var _loop3 = function _loop32(_i22) {
      var item = flattenData2[_i22];
      if (!item) {
        return 1;
      }
      if (flattenColumns.some(function(column) {
        return getRowSpan(column, _i22) > 1;
      })) {
        spanLines.push(_i22);
      }
    };
    for (var _i2 = startIndex; _i2 <= endIndex; _i2 += 1) {
      if (_loop3(_i2)) continue;
    }
    var nodes = spanLines.map(function(index) {
      var item = flattenData2[index];
      var rowKey = getRowKey(item.record, index);
      var getHeight = function getHeight2(rowSpan) {
        var endItemIndex = index + rowSpan - 1;
        var endItemKey = getRowKey(flattenData2[endItemIndex].record, endItemIndex);
        var sizeInfo2 = getSize(rowKey, endItemKey);
        return sizeInfo2.bottom - sizeInfo2.top;
      };
      var sizeInfo = getSize(rowKey);
      return /* @__PURE__ */ reactExports.createElement(ResponseBodyLine, {
        key: index,
        data: item,
        rowKey,
        index,
        style: {
          top: -offsetY + sizeInfo.top
        },
        extra: true,
        getHeight
      });
    });
    return nodes;
  };
  var gridContext = reactExports.useMemo(function() {
    return {
      columnsOffset
    };
  }, [columnsOffset]);
  var tblPrefixCls = "".concat(prefixCls, "-tbody");
  var wrapperComponent = getComponent(["body", "wrapper"]);
  var RowComponent = getComponent(["body", "row"], "div");
  var cellComponent = getComponent(["body", "cell"], "div");
  var bodyContent;
  if (flattenData2.length) {
    var horizontalScrollBarStyle = {};
    if (sticky) {
      horizontalScrollBarStyle.position = "sticky";
      horizontalScrollBarStyle.bottom = 0;
      if (_typeof(sticky) === "object" && sticky.offsetScroll) {
        horizontalScrollBarStyle.bottom = sticky.offsetScroll;
      }
    }
    bodyContent = /* @__PURE__ */ reactExports.createElement(List$1, {
      fullHeight: false,
      ref: listRef,
      prefixCls: "".concat(tblPrefixCls, "-virtual"),
      styles: {
        horizontalScrollBar: horizontalScrollBarStyle
      },
      className: tblPrefixCls,
      height: scrollY,
      itemHeight: listItemHeight || 24,
      data: flattenData2,
      itemKey: function itemKey2(item) {
        return getRowKey(item.record);
      },
      component: wrapperComponent,
      scrollWidth: scrollX,
      onVirtualScroll: function onVirtualScroll(_ref4) {
        var x = _ref4.x;
        onScroll({
          scrollLeft: x
        });
      },
      onScroll: onTablePropScroll,
      extraRender
    }, function(item, index, itemProps) {
      var rowKey = getRowKey(item.record, index);
      return /* @__PURE__ */ reactExports.createElement(ResponseBodyLine, {
        data: item,
        rowKey,
        index,
        style: itemProps.style
      });
    });
  } else {
    bodyContent = /* @__PURE__ */ reactExports.createElement(RowComponent, {
      className: classNames("".concat(prefixCls, "-placeholder"))
    }, /* @__PURE__ */ reactExports.createElement(Cell$1, {
      component: cellComponent,
      prefixCls
    }, emptyNode));
  }
  return /* @__PURE__ */ reactExports.createElement(GridContext.Provider, {
    value: gridContext
  }, bodyContent);
});
var ResponseGrid = responseImmutable(Grid);
var renderBody = function renderBody2(rawData, props) {
  var ref = props.ref, onScroll = props.onScroll;
  return /* @__PURE__ */ reactExports.createElement(ResponseGrid, {
    ref,
    data: rawData,
    onScroll
  });
};
function VirtualTable(props, ref) {
  var columns = props.columns, scroll = props.scroll, sticky = props.sticky, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? DEFAULT_PREFIX : _props$prefixCls, className = props.className, listItemHeight = props.listItemHeight, components = props.components, onScroll = props.onScroll;
  var _ref = scroll || {}, scrollX = _ref.x, scrollY = _ref.y;
  if (typeof scrollX !== "number") {
    scrollX = 1;
  }
  if (typeof scrollY !== "number") {
    scrollY = 500;
  }
  var getComponent = useEvent(function(path, defaultComponent) {
    return get(components, path) || defaultComponent;
  });
  var onInternalScroll = useEvent(onScroll);
  var context = reactExports.useMemo(function() {
    return {
      sticky,
      scrollY,
      listItemHeight,
      getComponent,
      onScroll: onInternalScroll
    };
  }, [sticky, scrollY, listItemHeight, getComponent, onInternalScroll]);
  return /* @__PURE__ */ reactExports.createElement(StaticContext.Provider, {
    value: context
  }, /* @__PURE__ */ reactExports.createElement(ImmutableTable, _extends({}, props, {
    className: classNames(className, "".concat(prefixCls, "-virtual")),
    scroll: _objectSpread2(_objectSpread2({}, scroll), {}, {
      x: scrollX
    }),
    components: _objectSpread2(_objectSpread2({}, components), {}, {
      body: renderBody
    }),
    columns,
    internalHooks: INTERNAL_HOOKS,
    tailor: true,
    ref
  })));
}
var RefVirtualTable = /* @__PURE__ */ reactExports.forwardRef(VirtualTable);
function genVirtualTable(shouldTriggerRender) {
  return makeImmutable(RefVirtualTable, shouldTriggerRender);
}
genVirtualTable();
const Column = (_) => null;
const ColumnGroup = (_) => null;
var TreeContext = /* @__PURE__ */ reactExports.createContext(null);
var Indent = function Indent2(_ref) {
  var prefixCls = _ref.prefixCls, level = _ref.level, isStart = _ref.isStart, isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    list.push(/* @__PURE__ */ reactExports.createElement("span", {
      key: i,
      className: classNames(baseClassName, _defineProperty(_defineProperty({}, "".concat(baseClassName, "-start"), isStart[i]), "".concat(baseClassName, "-end"), isEnd[i]))
    }));
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};
const Indent$1 = /* @__PURE__ */ reactExports.memo(Indent);
var _excluded$2 = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"];
var ICON_OPEN = "open";
var ICON_CLOSE = "close";
var defaultTitle = "---";
var InternalTreeNode = /* @__PURE__ */ function(_React$Component) {
  _inherits(InternalTreeNode2, _React$Component);
  var _super = _createSuper(InternalTreeNode2);
  function InternalTreeNode2() {
    var _this;
    _classCallCheck(this, InternalTreeNode2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      dragNodeHighlight: false
    });
    _defineProperty(_assertThisInitialized(_this), "selectHandle", void 0);
    _defineProperty(_assertThisInitialized(_this), "cacheIndent", void 0);
    _defineProperty(_assertThisInitialized(_this), "onSelectorClick", function(e) {
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, convertNodePropsToEventData(_this.props));
      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectorDoubleClick", function(e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, convertNodePropsToEventData(_this.props));
    });
    _defineProperty(_assertThisInitialized(_this), "onSelect", function(e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      onNodeSelect(e, convertNodePropsToEventData(_this.props));
    });
    _defineProperty(_assertThisInitialized(_this), "onCheck", function(e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props, disableCheckbox = _this$props.disableCheckbox, checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      var targetChecked = !checked;
      onNodeCheck(e, convertNodePropsToEventData(_this.props), targetChecked);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, convertNodePropsToEventData(_this.props));
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, convertNodePropsToEventData(_this.props));
    });
    _defineProperty(_assertThisInitialized(_this), "onContextMenu", function(e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, convertNodePropsToEventData(_this.props));
    });
    _defineProperty(_assertThisInitialized(_this), "onDragStart", function(e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: true
      });
      onNodeDragStart(e, _assertThisInitialized(_this));
      try {
        e.dataTransfer.setData("text/plain", "");
      } catch (error) {
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function(e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, _assertThisInitialized(_this));
    });
    _defineProperty(_assertThisInitialized(_this), "onDragOver", function(e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, _assertThisInitialized(_this));
    });
    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function(e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, _assertThisInitialized(_this));
    });
    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function(e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDragEnd(e, _assertThisInitialized(_this));
    });
    _defineProperty(_assertThisInitialized(_this), "onDrop", function(e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDrop(e, _assertThisInitialized(_this));
    });
    _defineProperty(_assertThisInitialized(_this), "onExpand", function(e) {
      var _this$props2 = _this.props, loading = _this$props2.loading, onNodeExpand = _this$props2.context.onNodeExpand;
      if (loading) return;
      onNodeExpand(e, convertNodePropsToEventData(_this.props));
    });
    _defineProperty(_assertThisInitialized(_this), "setSelectHandle", function(node) {
      _this.selectHandle = node;
    });
    _defineProperty(_assertThisInitialized(_this), "getNodeState", function() {
      var expanded = _this.props.expanded;
      if (_this.isLeaf()) {
        return null;
      }
      return expanded ? ICON_OPEN : ICON_CLOSE;
    });
    _defineProperty(_assertThisInitialized(_this), "hasChildren", function() {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;
      var _ref = getEntity(keyEntities, eventKey) || {}, children = _ref.children;
      return !!(children || []).length;
    });
    _defineProperty(_assertThisInitialized(_this), "isLeaf", function() {
      var _this$props3 = _this.props, isLeaf = _this$props3.isLeaf, loaded = _this$props3.loaded;
      var loadData = _this.props.context.loadData;
      var hasChildren = _this.hasChildren();
      if (isLeaf === false) {
        return false;
      }
      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    });
    _defineProperty(_assertThisInitialized(_this), "isDisabled", function() {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    });
    _defineProperty(_assertThisInitialized(_this), "isCheckable", function() {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable;
      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    });
    _defineProperty(_assertThisInitialized(_this), "syncLoadData", function(props) {
      var expanded = props.expanded, loading = props.loading, loaded = props.loaded;
      var _this$props$context = _this.props.context, loadData = _this$props$context.loadData, onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) {
        return;
      }
      if (loadData && expanded && !_this.isLeaf() && !loaded) {
        onNodeLoad(convertNodePropsToEventData(_this.props));
      }
    });
    _defineProperty(_assertThisInitialized(_this), "isDraggable", function() {
      var _this$props4 = _this.props, data = _this$props4.data, draggable = _this$props4.context.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    });
    _defineProperty(_assertThisInitialized(_this), "renderDragHandler", function() {
      var _this$props$context2 = _this.props.context, draggable = _this$props$context2.draggable, prefixCls = _this$props$context2.prefixCls;
      return draggable !== null && draggable !== void 0 && draggable.icon ? /* @__PURE__ */ reactExports.createElement("span", {
        className: "".concat(prefixCls, "-draggable-icon")
      }, draggable.icon) : null;
    });
    _defineProperty(_assertThisInitialized(_this), "renderSwitcherIconDom", function(isLeaf) {
      var switcherIconFromProps = _this.props.switcherIcon;
      var switcherIconFromCtx = _this.props.context.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      if (typeof switcherIcon === "function") {
        return switcherIcon(_objectSpread2(_objectSpread2({}, _this.props), {}, {
          isLeaf
        }));
      }
      return switcherIcon;
    });
    _defineProperty(_assertThisInitialized(_this), "renderSwitcher", function() {
      var expanded = _this.props.expanded;
      var prefixCls = _this.props.context.prefixCls;
      if (_this.isLeaf()) {
        var _switcherIconDom = _this.renderSwitcherIconDom(true);
        return _switcherIconDom !== false ? /* @__PURE__ */ reactExports.createElement("span", {
          className: classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, _switcherIconDom) : null;
      }
      var switcherCls = classNames("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      var switcherIconDom = _this.renderSwitcherIconDom(false);
      return switcherIconDom !== false ? /* @__PURE__ */ reactExports.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, switcherIconDom) : null;
    });
    _defineProperty(_assertThisInitialized(_this), "renderCheckbox", function() {
      var _this$props5 = _this.props, checked = _this$props5.checked, halfChecked = _this$props5.halfChecked, disableCheckbox = _this$props5.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;
      var disabled = _this.isDisabled();
      var checkable = _this.isCheckable();
      if (!checkable) return null;
      var $custom = typeof checkable !== "boolean" ? checkable : null;
      return /* @__PURE__ */ reactExports.createElement("span", {
        className: classNames("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    });
    _defineProperty(_assertThisInitialized(_this), "renderIcon", function() {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /* @__PURE__ */ reactExports.createElement("span", {
        className: classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || "docu"), loading && "".concat(prefixCls, "-icon_loading"))
      });
    });
    _defineProperty(_assertThisInitialized(_this), "renderSelector", function() {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props6 = _this.props, _this$props6$title = _this$props6.title, title = _this$props6$title === void 0 ? defaultTitle : _this$props6$title, selected = _this$props6.selected, icon = _this$props6.icon, loading = _this$props6.loading, data = _this$props6.data;
      var _this$props$context3 = _this.props.context, prefixCls = _this$props$context3.prefixCls, showIcon = _this$props$context3.showIcon, treeIcon = _this$props$context3.icon, loadData = _this$props$context3.loadData, titleRender = _this$props$context3.titleRender;
      var disabled = _this.isDisabled();
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
      var $icon;
      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? /* @__PURE__ */ reactExports.createElement("span", {
          className: classNames("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === "function" ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      }
      var titleNode;
      if (typeof title === "function") {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }
      var $title = /* @__PURE__ */ reactExports.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, titleNode);
      return /* @__PURE__ */ reactExports.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === "string" ? title : "",
        className: classNames("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || "normal"), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected")),
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick
      }, $icon, $title, _this.renderDropIndicator());
    });
    _defineProperty(_assertThisInitialized(_this), "renderDropIndicator", function() {
      var _this$props7 = _this.props, disabled = _this$props7.disabled, eventKey = _this$props7.eventKey;
      var _this$props$context4 = _this.props.context, draggable = _this$props$context4.draggable, dropLevelOffset = _this$props$context4.dropLevelOffset, dropPosition = _this$props$context4.dropPosition, prefixCls = _this$props$context4.prefixCls, indent = _this$props$context4.indent, dropIndicatorRender2 = _this$props$context4.dropIndicatorRender, dragOverNodeKey = _this$props$context4.dragOverNodeKey, direction = _this$props$context4.direction;
      var rootDraggable = !!draggable;
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
      var mergedIndent = indent !== null && indent !== void 0 ? indent : _this.cacheIndent;
      _this.cacheIndent = indent;
      return showIndicator ? dropIndicatorRender2({
        dropPosition,
        dropLevelOffset,
        indent: mergedIndent,
        prefixCls,
        direction
      }) : null;
    });
    return _this;
  }
  _createClass(InternalTreeNode2, [{
    key: "componentDidMount",
    value: (
      // Isomorphic needn't load data in server side
      function componentDidMount() {
        this.syncLoadData(this.props);
      }
    )
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable;
      if (typeof selectable === "boolean") {
        return selectable;
      }
      return treeSelectable;
    }
  }, {
    key: "render",
    value: (
      // =========================== Render ===========================
      function render() {
        var _classNames;
        var _this$props8 = this.props, eventKey = _this$props8.eventKey, className = _this$props8.className, style = _this$props8.style, dragOver = _this$props8.dragOver, dragOverGapTop = _this$props8.dragOverGapTop, dragOverGapBottom = _this$props8.dragOverGapBottom, isLeaf = _this$props8.isLeaf, isStart = _this$props8.isStart, isEnd = _this$props8.isEnd, expanded = _this$props8.expanded, selected = _this$props8.selected, checked = _this$props8.checked, halfChecked = _this$props8.halfChecked, loading = _this$props8.loading, domRef = _this$props8.domRef, active = _this$props8.active;
        _this$props8.data;
        var onMouseMove = _this$props8.onMouseMove, selectable = _this$props8.selectable, otherProps = _objectWithoutProperties(_this$props8, _excluded$2);
        var _this$props$context5 = this.props.context, prefixCls = _this$props$context5.prefixCls, filterTreeNode = _this$props$context5.filterTreeNode, keyEntities = _this$props$context5.keyEntities, dropContainerKey = _this$props$context5.dropContainerKey, dropTargetKey = _this$props$context5.dropTargetKey, draggingNodeKey = _this$props$context5.draggingNodeKey;
        var disabled = this.isDisabled();
        var dataOrAriaAttributeProps = pickAttrs(otherProps, {
          aria: true,
          data: true
        });
        var _ref2 = getEntity(keyEntities, eventKey) || {}, level = _ref2.level;
        var isEndNode = isEnd[isEnd.length - 1];
        var mergedDraggable = this.isDraggable();
        var draggableWithoutDisabled = !disabled && mergedDraggable;
        var dragging = draggingNodeKey === eventKey;
        var ariaSelected = selectable !== void 0 ? {
          "aria-selected": !!selectable
        } : void 0;
        return /* @__PURE__ */ reactExports.createElement("div", _extends({
          ref: domRef,
          className: classNames(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? "open" : "close"), !isLeaf), "".concat(prefixCls, "-treenode-checkbox-checked"), checked), "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), "".concat(prefixCls, "-treenode-selected"), selected), "".concat(prefixCls, "-treenode-loading"), loading), "".concat(prefixCls, "-treenode-active"), active), "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), "".concat(prefixCls, "-treenode-draggable"), mergedDraggable), "dragging", dragging), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames, "drop-target", dropTargetKey === eventKey), "drop-container", dropContainerKey === eventKey), "drag-over", !disabled && dragOver), "drag-over-gap-top", !disabled && dragOverGapTop), "drag-over-gap-bottom", !disabled && dragOverGapBottom), "filter-node", filterTreeNode && filterTreeNode(convertNodePropsToEventData(this.props))))),
          style,
          draggable: draggableWithoutDisabled,
          "aria-grabbed": dragging,
          onDragStart: draggableWithoutDisabled ? this.onDragStart : void 0,
          onDragEnter: mergedDraggable ? this.onDragEnter : void 0,
          onDragOver: mergedDraggable ? this.onDragOver : void 0,
          onDragLeave: mergedDraggable ? this.onDragLeave : void 0,
          onDrop: mergedDraggable ? this.onDrop : void 0,
          onDragEnd: mergedDraggable ? this.onDragEnd : void 0,
          onMouseMove
        }, ariaSelected, dataOrAriaAttributeProps), /* @__PURE__ */ reactExports.createElement(Indent$1, {
          prefixCls,
          level,
          isStart,
          isEnd
        }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
      }
    )
  }]);
  return InternalTreeNode2;
}(reactExports.Component);
var ContextTreeNode = function ContextTreeNode2(props) {
  return /* @__PURE__ */ reactExports.createElement(TreeContext.Consumer, null, function(context) {
    return /* @__PURE__ */ reactExports.createElement(InternalTreeNode, _extends({}, props, {
      context
    }));
  });
};
ContextTreeNode.displayName = "TreeNode";
ContextTreeNode.isTreeNode = 1;
function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split("-");
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  var dragChildrenKeys = [];
  var entity = getEntity(keyEntities, dragNodeKey);
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    list.forEach(function(_ref) {
      var key = _ref.key, children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop2, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX, clientY = event.clientY;
  var _getBoundingClientRec = event.target.getBoundingClientRect(), top = _getBoundingClientRec.top, height = _getBoundingClientRec.height;
  var horizontalMouseOffset = (direction === "rtl" ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  var filteredExpandKeys = expandKeys.filter(function(key) {
    var _keyEntities$key;
    return (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.children) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key.length;
  });
  var abstractDropNodeEntity = getEntity(keyEntities, targetNode.props.eventKey);
  if (clientY < top + height / 2) {
    var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = getEntity(keyEntities, prevNodeKey);
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  if (!filteredExpandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNode.props.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop2({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && filteredExpandKeys.includes(dragOverNodeKey)) {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop2({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    if (allowDrop2({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition,
    dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed
  };
}
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return void 0;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }
  var keyProps;
  if (Array.isArray(keys)) {
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: void 0
    };
  } else if (_typeof(keys) === "object") {
    keyProps = {
      checkedKeys: keys.checked || void 0,
      halfCheckedKeys: keys.halfChecked || void 0
    };
  } else {
    warningOnce(false, "`checkedKeys` is not an array or an object");
    return null;
  }
  return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = /* @__PURE__ */ new Set();
  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = getEntity(keyEntities, key);
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent, node = entity.node;
    if (node.disabled) return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function(key) {
    conductUp(key);
  });
  return _toConsumableArray(expandedKeys);
}
function useMultipleSelect(getKey2) {
  const [prevSelectedIndex, setPrevSelectedIndex] = reactExports.useState(null);
  const multipleSelect = reactExports.useCallback((currentSelectedIndex, data, selectedKeys) => {
    const configPrevSelectedIndex = prevSelectedIndex !== null && prevSelectedIndex !== void 0 ? prevSelectedIndex : currentSelectedIndex;
    const startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
    const endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
    const rangeKeys = data.slice(startIndex, endIndex + 1).map((item) => getKey2(item));
    const shouldSelected = rangeKeys.some((rangeKey) => !selectedKeys.has(rangeKey));
    const changedKeys = [];
    rangeKeys.forEach((item) => {
      if (shouldSelected) {
        if (!selectedKeys.has(item)) {
          changedKeys.push(item);
        }
        selectedKeys.add(item);
      } else {
        selectedKeys.delete(item);
        changedKeys.push(item);
      }
    });
    setPrevSelectedIndex(shouldSelected ? endIndex : null);
    return changedKeys;
  }, [prevSelectedIndex]);
  const updatePrevSelectedIndex = (val) => {
    setPrevSelectedIndex(val);
  };
  return [multipleSelect, updatePrevSelectedIndex];
}
const SELECTION_COLUMN = {};
const SELECTION_ALL = "SELECT_ALL";
const SELECTION_INVERT = "SELECT_INVERT";
const SELECTION_NONE = "SELECT_NONE";
const EMPTY_LIST$1 = [];
const flattenData = (childrenColumnName, data) => {
  let list = [];
  (data || []).forEach((record) => {
    list.push(record);
    if (record && typeof record === "object" && childrenColumnName in record) {
      list = [].concat(_toConsumableArray(list), _toConsumableArray(flattenData(childrenColumnName, record[childrenColumnName])));
    }
  });
  return list;
};
const useSelection = (config, rowSelection) => {
  const {
    preserveSelectedRowKeys,
    selectedRowKeys,
    defaultSelectedRowKeys,
    getCheckboxProps,
    onChange: onSelectionChange,
    onSelect,
    onSelectAll,
    onSelectInvert,
    onSelectNone,
    onSelectMultiple,
    columnWidth: selectionColWidth,
    type: selectionType,
    selections,
    fixed,
    renderCell: customizeRenderCell,
    hideSelectAll,
    checkStrictly = true
  } = rowSelection || {};
  const {
    prefixCls,
    data,
    pageData,
    getRecordByKey,
    getRowKey,
    expandType,
    childrenColumnName,
    locale: tableLocale,
    getPopupContainer
  } = config;
  const warning2 = devUseWarning();
  const [multipleSelect, updatePrevSelectedIndex] = useMultipleSelect((item) => item);
  const [mergedSelectedKeys, setMergedSelectedKeys] = useMergedState(selectedRowKeys || defaultSelectedRowKeys || EMPTY_LIST$1, {
    value: selectedRowKeys
  });
  const preserveRecordsRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const updatePreserveRecordsCache = reactExports.useCallback((keys) => {
    if (preserveSelectedRowKeys) {
      const newCache = /* @__PURE__ */ new Map();
      keys.forEach((key) => {
        let record = getRecordByKey(key);
        if (!record && preserveRecordsRef.current.has(key)) {
          record = preserveRecordsRef.current.get(key);
        }
        newCache.set(key, record);
      });
      preserveRecordsRef.current = newCache;
    }
  }, [getRecordByKey, preserveSelectedRowKeys]);
  reactExports.useEffect(() => {
    updatePreserveRecordsCache(mergedSelectedKeys);
  }, [mergedSelectedKeys]);
  const {
    keyEntities
  } = reactExports.useMemo(() => {
    if (checkStrictly) {
      return {
        keyEntities: null
      };
    }
    let convertData = data;
    if (preserveSelectedRowKeys) {
      const keysSet = new Set(data.map((record, index) => getRowKey(record, index)));
      const preserveRecords = Array.from(preserveRecordsRef.current).reduce((total, _ref) => {
        let [key, value] = _ref;
        return keysSet.has(key) ? total : total.concat(value);
      }, []);
      convertData = [].concat(_toConsumableArray(convertData), _toConsumableArray(preserveRecords));
    }
    return convertDataToEntities(convertData, {
      externalGetKey: getRowKey,
      childrenPropName: childrenColumnName
    });
  }, [data, getRowKey, checkStrictly, childrenColumnName, preserveSelectedRowKeys]);
  const flattedData = reactExports.useMemo(() => flattenData(childrenColumnName, pageData), [childrenColumnName, pageData]);
  const checkboxPropsMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    flattedData.forEach((record, index) => {
      const key = getRowKey(record, index);
      const checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);
    });
    return map;
  }, [flattedData, getRowKey, getCheckboxProps]);
  const isCheckboxDisabled = reactExports.useCallback((r) => {
    var _a;
    return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
  }, [checkboxPropsMap, getRowKey]);
  const [derivedSelectedKeys, derivedHalfSelectedKeys] = reactExports.useMemo(() => {
    if (checkStrictly) {
      return [mergedSelectedKeys || [], []];
    }
    const {
      checkedKeys,
      halfCheckedKeys
    } = conductCheck(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled);
    return [checkedKeys || [], halfCheckedKeys];
  }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]);
  const derivedSelectedKeySet = reactExports.useMemo(() => {
    const keys = selectionType === "radio" ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
    return new Set(keys);
  }, [derivedSelectedKeys, selectionType]);
  const derivedHalfSelectedKeySet = reactExports.useMemo(() => selectionType === "radio" ? /* @__PURE__ */ new Set() : new Set(derivedHalfSelectedKeys), [derivedHalfSelectedKeys, selectionType]);
  reactExports.useEffect(() => {
    if (!rowSelection) {
      setMergedSelectedKeys(EMPTY_LIST$1);
    }
  }, [!!rowSelection]);
  const setSelectedKeys = reactExports.useCallback((keys, method) => {
    let availableKeys;
    let records;
    updatePreserveRecordsCache(keys);
    if (preserveSelectedRowKeys) {
      availableKeys = keys;
      records = keys.map((key) => preserveRecordsRef.current.get(key));
    } else {
      availableKeys = [];
      records = [];
      keys.forEach((key) => {
        const record = getRecordByKey(key);
        if (record !== void 0) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }
    setMergedSelectedKeys(availableKeys);
    onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records, {
      type: method
    });
  }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]);
  const triggerSingleSelection = reactExports.useCallback((key, selected, keys, event) => {
    if (onSelect) {
      const rows = keys.map((k) => getRecordByKey(k));
      onSelect(getRecordByKey(key), selected, rows, event);
    }
    setSelectedKeys(keys, "single");
  }, [onSelect, getRecordByKey, setSelectedKeys]);
  const mergedSelections = reactExports.useMemo(() => {
    if (!selections || hideSelectAll) {
      return null;
    }
    const selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
    return selectionList.map((selection) => {
      if (selection === SELECTION_ALL) {
        return {
          key: "all",
          text: tableLocale.selectionAll,
          onSelect() {
            setSelectedKeys(data.map((record, index) => getRowKey(record, index)).filter((key) => {
              const checkProps = checkboxPropsMap.get(key);
              return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.has(key);
            }), "all");
          }
        };
      }
      if (selection === SELECTION_INVERT) {
        return {
          key: "invert",
          text: tableLocale.selectInvert,
          onSelect() {
            const keySet = new Set(derivedSelectedKeySet);
            pageData.forEach((record, index) => {
              const key = getRowKey(record, index);
              const checkProps = checkboxPropsMap.get(key);
              if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                if (keySet.has(key)) {
                  keySet.delete(key);
                } else {
                  keySet.add(key);
                }
              }
            });
            const keys = Array.from(keySet);
            if (onSelectInvert) {
              warning2.deprecated(false, "onSelectInvert", "onChange");
              onSelectInvert(keys);
            }
            setSelectedKeys(keys, "invert");
          }
        };
      }
      if (selection === SELECTION_NONE) {
        return {
          key: "none",
          text: tableLocale.selectNone,
          onSelect() {
            onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
            setSelectedKeys(Array.from(derivedSelectedKeySet).filter((key) => {
              const checkProps = checkboxPropsMap.get(key);
              return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
            }), "none");
          }
        };
      }
      return selection;
    }).map((selection) => Object.assign(Object.assign({}, selection), {
      onSelect: function() {
        var _a2;
        var _a;
        for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }
        (_a = selection.onSelect) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [selection].concat(rest));
        updatePrevSelectedIndex(null);
      }
    }));
  }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]);
  const transformColumns = reactExports.useCallback((columns) => {
    var _a;
    if (!rowSelection) {
      return columns.filter((col) => col !== SELECTION_COLUMN);
    }
    let cloneColumns = _toConsumableArray(columns);
    const keySet = new Set(derivedSelectedKeySet);
    const recordKeys = flattedData.map(getRowKey).filter((key) => !checkboxPropsMap.get(key).disabled);
    const checkedCurrentAll = recordKeys.every((key) => keySet.has(key));
    const checkedCurrentSome = recordKeys.some((key) => keySet.has(key));
    const onSelectAllChange = () => {
      const changeKeys = [];
      if (checkedCurrentAll) {
        recordKeys.forEach((key) => {
          keySet.delete(key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach((key) => {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }
      const keys = Array.from(keySet);
      onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map((k) => getRecordByKey(k)), changeKeys.map((k) => getRecordByKey(k)));
      setSelectedKeys(keys, "all");
      updatePrevSelectedIndex(null);
    };
    let title;
    let columnTitleCheckbox;
    if (selectionType !== "radio") {
      let customizeSelections;
      if (mergedSelections) {
        const menu = {
          getPopupContainer,
          items: mergedSelections.map((selection, index) => {
            const {
              key,
              text,
              onSelect: onSelectionClick
            } = selection;
            return {
              key: key !== null && key !== void 0 ? key : index,
              onClick: () => {
                onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
              },
              label: text
            };
          })
        };
        customizeSelections = /* @__PURE__ */ reactExports.createElement("div", {
          className: `${prefixCls}-selection-extra`
        }, /* @__PURE__ */ reactExports.createElement(Dropdown$1, {
          menu,
          getPopupContainer
        }, /* @__PURE__ */ reactExports.createElement("span", null, /* @__PURE__ */ reactExports.createElement(RefIcon$h, null))));
      }
      const allDisabledData = flattedData.map((record, index) => {
        const key = getRowKey(record, index);
        const checkboxProps = checkboxPropsMap.get(key) || {};
        return Object.assign({
          checked: keySet.has(key)
        }, checkboxProps);
      }).filter((_ref2) => {
        let {
          disabled
        } = _ref2;
        return disabled;
      });
      const allDisabled = !!allDisabledData.length && allDisabledData.length === flattedData.length;
      const allDisabledAndChecked = allDisabled && allDisabledData.every((_ref3) => {
        let {
          checked
        } = _ref3;
        return checked;
      });
      const allDisabledSomeChecked = allDisabled && allDisabledData.some((_ref4) => {
        let {
          checked
        } = _ref4;
        return checked;
      });
      columnTitleCheckbox = /* @__PURE__ */ reactExports.createElement(Checkbox, {
        checked: !allDisabled ? !!flattedData.length && checkedCurrentAll : allDisabledAndChecked,
        indeterminate: !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
        onChange: onSelectAllChange,
        disabled: flattedData.length === 0 || allDisabled,
        "aria-label": customizeSelections ? "Custom selection" : "Select all",
        skipGroup: true
      });
      title = !hideSelectAll && /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-selection`
      }, columnTitleCheckbox, customizeSelections);
    }
    let renderCell;
    if (selectionType === "radio") {
      renderCell = (_, record, index) => {
        const key = getRowKey(record, index);
        const checked = keySet.has(key);
        return {
          node: /* @__PURE__ */ reactExports.createElement(Radio$1, Object.assign({}, checkboxPropsMap.get(key), {
            checked,
            onClick: (e) => e.stopPropagation(),
            onChange: (event) => {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          })),
          checked
        };
      };
    } else {
      renderCell = (_, record, index) => {
        var _a2;
        const key = getRowKey(record, index);
        const checked = keySet.has(key);
        const indeterminate = derivedHalfSelectedKeySet.has(key);
        const checkboxProps = checkboxPropsMap.get(key);
        let mergedIndeterminate;
        if (expandType === "nest") {
          mergedIndeterminate = indeterminate;
        } else {
          mergedIndeterminate = (_a2 = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a2 !== void 0 ? _a2 : indeterminate;
        }
        return {
          node: /* @__PURE__ */ reactExports.createElement(Checkbox, Object.assign({}, checkboxProps, {
            indeterminate: mergedIndeterminate,
            checked,
            skipGroup: true,
            onClick: (e) => e.stopPropagation(),
            onChange: (_ref5) => {
              let {
                nativeEvent
              } = _ref5;
              const {
                shiftKey
              } = nativeEvent;
              const currentSelectedIndex = recordKeys.findIndex((item) => item === key);
              const isMultiple3 = derivedSelectedKeys.some((item) => recordKeys.includes(item));
              if (shiftKey && checkStrictly && isMultiple3) {
                const changedKeys = multipleSelect(currentSelectedIndex, recordKeys, keySet);
                const keys = Array.from(keySet);
                onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map((recordKey) => getRecordByKey(recordKey)), changedKeys.map((recordKey) => getRecordByKey(recordKey)));
                setSelectedKeys(keys, "multiple");
              } else {
                const originCheckedKeys = derivedSelectedKeys;
                if (checkStrictly) {
                  const checkedKeys = checked ? arrDel(originCheckedKeys, key) : arrAdd(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  const result = conductCheck([].concat(_toConsumableArray(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                  const {
                    checkedKeys,
                    halfCheckedKeys
                  } = result;
                  let nextCheckedKeys = checkedKeys;
                  if (checked) {
                    const tempKeySet = new Set(checkedKeys);
                    tempKeySet.delete(key);
                    nextCheckedKeys = conductCheck(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys
                    }, keyEntities, isCheckboxDisabled).checkedKeys;
                  }
                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }
              if (checked) {
                updatePrevSelectedIndex(null);
              } else {
                updatePrevSelectedIndex(currentSelectedIndex);
              }
            }
          })),
          checked
        };
      };
    }
    const renderSelectionCell = (_, record, index) => {
      const {
        node,
        checked
      } = renderCell(_, record, index);
      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }
      return node;
    };
    if (!cloneColumns.includes(SELECTION_COLUMN)) {
      if (cloneColumns.findIndex((col) => {
        var _a2;
        return ((_a2 = col[INTERNAL_COL_DEFINE]) === null || _a2 === void 0 ? void 0 : _a2.columnType) === "EXPAND_COLUMN";
      }) === 0) {
        const [expandColumn, ...restColumns] = cloneColumns;
        cloneColumns = [expandColumn, SELECTION_COLUMN].concat(_toConsumableArray(restColumns));
      } else {
        cloneColumns = [SELECTION_COLUMN].concat(_toConsumableArray(cloneColumns));
      }
    }
    const selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
    cloneColumns = cloneColumns.filter((column, index) => column !== SELECTION_COLUMN || index === selectionColumnIndex);
    const prevCol = cloneColumns[selectionColumnIndex - 1];
    const nextCol = cloneColumns[selectionColumnIndex + 1];
    let mergedFixed = fixed;
    if (mergedFixed === void 0) {
      if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== void 0) {
        mergedFixed = nextCol.fixed;
      } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== void 0) {
        mergedFixed = prevCol.fixed;
      }
    }
    if (mergedFixed && prevCol && ((_a = prevCol[INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === "EXPAND_COLUMN" && prevCol.fixed === void 0) {
      prevCol.fixed = mergedFixed;
    }
    const columnCls = classNames(`${prefixCls}-selection-col`, {
      [`${prefixCls}-selection-col-with-dropdown`]: selections && selectionType === "checkbox"
    });
    const renderColumnTitle2 = () => {
      if (!(rowSelection === null || rowSelection === void 0 ? void 0 : rowSelection.columnTitle)) {
        return title;
      }
      if (typeof rowSelection.columnTitle === "function") {
        return rowSelection.columnTitle(columnTitleCheckbox);
      }
      return rowSelection.columnTitle;
    };
    const selectionColumn = {
      fixed: mergedFixed,
      width: selectionColWidth,
      className: `${prefixCls}-selection-column`,
      title: renderColumnTitle2(),
      render: renderSelectionCell,
      onCell: rowSelection.onCell,
      [INTERNAL_COL_DEFINE]: {
        className: columnCls
      }
    };
    return cloneColumns.map((col) => col === SELECTION_COLUMN ? selectionColumn : col);
  }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
  return [transformColumns, derivedSelectedKeySet];
};
function fillProxy(element, handler) {
  element._antProxy = element._antProxy || {};
  Object.keys(handler).forEach((key) => {
    if (!(key in element._antProxy)) {
      const ori = element[key];
      element._antProxy[key] = ori;
      element[key] = handler[key];
    }
  });
  return element;
}
function useProxyImperativeHandle(ref, init) {
  return reactExports.useImperativeHandle(ref, () => {
    const refObj = init();
    const {
      nativeElement
    } = refObj;
    if (typeof Proxy !== "undefined") {
      return new Proxy(nativeElement, {
        get(obj, prop) {
          if (refObj[prop]) {
            return refObj[prop];
          }
          return Reflect.get(obj, prop);
        }
      });
    }
    return fillProxy(nativeElement, refObj);
  });
}
function renderExpandIcon(locale2) {
  return (props) => {
    const {
      prefixCls,
      onExpand,
      record,
      expanded,
      expandable
    } = props;
    const iconPrefix = `${prefixCls}-row-expand-icon`;
    return /* @__PURE__ */ reactExports.createElement("button", {
      type: "button",
      onClick: (e) => {
        onExpand(record, e);
        e.stopPropagation();
      },
      className: classNames(iconPrefix, {
        [`${iconPrefix}-spaced`]: !expandable,
        [`${iconPrefix}-expanded`]: expandable && expanded,
        [`${iconPrefix}-collapsed`]: expandable && !expanded
      }),
      "aria-label": expanded ? locale2.collapse : locale2.expand,
      "aria-expanded": expanded
    });
  };
}
function useContainerWidth(prefixCls) {
  const getContainerWidth = (ele, width) => {
    const container = ele.querySelector(`.${prefixCls}-container`);
    let returnWidth = width;
    if (container) {
      const style = getComputedStyle(container);
      const borderLeft = parseInt(style.borderLeftWidth, 10);
      const borderRight = parseInt(style.borderRightWidth, 10);
      returnWidth = width - borderLeft - borderRight;
    }
    return returnWidth;
  };
  return getContainerWidth;
}
const getColumnKey = (column, defaultKey) => {
  if ("key" in column && column.key !== void 0 && column.key !== null) {
    return column.key;
  }
  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join(".") : column.dataIndex;
  }
  return defaultKey;
};
function getColumnPos(index, pos) {
  return pos ? `${pos}-${index}` : `${index}`;
}
const renderColumnTitle = (title, props) => {
  if (typeof title === "function") {
    return title(props);
  }
  return title;
};
const safeColumnTitle = (title, props) => {
  const res = renderColumnTitle(title, props);
  if (Object.prototype.toString.call(res) === "[object Object]") {
    return "";
  }
  return res;
};
function useSyncState(initialValue) {
  const ref = reactExports.useRef(initialValue);
  const forceUpdate = useForceUpdate();
  return [() => ref.current, (newValue) => {
    ref.current = newValue;
    forceUpdate();
  }];
}
function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition, dropLevelOffset = _ref.dropLevelOffset, indent = _ref.indent;
  var style = {
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    height: 2
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 1:
      style.bottom = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 0:
      style.bottom = 0;
      style.left = indent;
      break;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    style
  });
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function useUnmount(triggerStart, triggerEnd) {
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), firstMount = _React$useState2[0], setFirstMount = _React$useState2[1];
  useLayoutEffect$1(function() {
    if (firstMount) {
      triggerStart();
      return function() {
        triggerEnd();
      };
    }
  }, [firstMount]);
  useLayoutEffect$1(function() {
    setFirstMount(true);
    return function() {
      setFirstMount(false);
    };
  }, []);
}
var _excluded$1 = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];
var MotionTreeNode = function MotionTreeNode2(_ref, ref) {
  var className = _ref.className, style = _ref.style, motion = _ref.motion, motionNodes = _ref.motionNodes, motionType = _ref.motionType, onOriginMotionStart = _ref.onMotionStart, onOriginMotionEnd = _ref.onMotionEnd, active = _ref.active, treeNodeRequiredProps = _ref.treeNodeRequiredProps, props = _objectWithoutProperties(_ref, _excluded$1);
  var _React$useState = reactExports.useState(true), _React$useState2 = _slicedToArray(_React$useState, 2), visible = _React$useState2[0], setVisible = _React$useState2[1];
  var _React$useContext = reactExports.useContext(TreeContext), prefixCls = _React$useContext.prefixCls;
  var targetVisible = motionNodes && motionType !== "hide";
  useLayoutEffect$1(function() {
    if (motionNodes) {
      if (targetVisible !== visible) {
        setVisible(targetVisible);
      }
    }
  }, [motionNodes]);
  var triggerMotionStart = function triggerMotionStart2() {
    if (motionNodes) {
      onOriginMotionStart();
    }
  };
  var triggerMotionEndRef = reactExports.useRef(false);
  var triggerMotionEnd = function triggerMotionEnd2() {
    if (motionNodes && !triggerMotionEndRef.current) {
      triggerMotionEndRef.current = true;
      onOriginMotionEnd();
    }
  };
  useUnmount(triggerMotionStart, triggerMotionEnd);
  var onVisibleChanged = function onVisibleChanged2(nextVisible) {
    if (targetVisible === nextVisible) {
      triggerMotionEnd();
    }
  };
  if (motionNodes) {
    return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends({
      ref,
      visible
    }, motion, {
      motionAppear: motionType === "show",
      onVisibleChanged
    }), function(_ref2, motionRef) {
      var motionClassName = _ref2.className, motionStyle = _ref2.style;
      return /* @__PURE__ */ reactExports.createElement("div", {
        ref: motionRef,
        className: classNames("".concat(prefixCls, "-treenode-motion"), motionClassName),
        style: motionStyle
      }, motionNodes.map(function(treeNode) {
        var restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
        delete restProps.children;
        var treeNodeProps = getTreeNodeProps(key, treeNodeRequiredProps);
        return /* @__PURE__ */ reactExports.createElement(ContextTreeNode, _extends({}, restProps, treeNodeProps, {
          title,
          active,
          data: treeNode.data,
          key,
          isStart,
          isEnd
        }));
      }));
    });
  }
  return /* @__PURE__ */ reactExports.createElement(ContextTreeNode, _extends({
    domRef: ref,
    className,
    style
  }, props, {
    active
  }));
};
MotionTreeNode.displayName = "MotionTreeNode";
var RefMotionTreeNode = /* @__PURE__ */ reactExports.forwardRef(MotionTreeNode);
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = /* @__PURE__ */ new Map();
    shorter.forEach(function(key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function(key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function(data) {
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function(data) {
    return data.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function(data) {
      return data.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}
var _excluded = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"];
var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: "flex",
  overflow: "hidden",
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop2() {
};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: "0",
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key, pos = item.pos;
  return getKey(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.data.key, " > ").concat(path);
  }
  return path;
}
var NodeList = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, data = props.data;
  props.selectable;
  props.checkable;
  var expandedKeys = props.expandedKeys, selectedKeys = props.selectedKeys, checkedKeys = props.checkedKeys, loadedKeys = props.loadedKeys, loadingKeys = props.loadingKeys, halfCheckedKeys = props.halfCheckedKeys, keyEntities = props.keyEntities, disabled = props.disabled, dragging = props.dragging, dragOverNodeKey = props.dragOverNodeKey, dropPosition = props.dropPosition, motion = props.motion, height = props.height, itemHeight = props.itemHeight, virtual = props.virtual, focusable = props.focusable, activeItem = props.activeItem, focused = props.focused, tabIndex = props.tabIndex, onKeyDown2 = props.onKeyDown, onFocus = props.onFocus, onBlur = props.onBlur, onActiveChange = props.onActiveChange, onListChangeStart = props.onListChangeStart, onListChangeEnd = props.onListChangeEnd, domProps = _objectWithoutProperties(props, _excluded);
  var listRef = reactExports.useRef(null);
  var indentMeasurerRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, function() {
    return {
      scrollTo: function scrollTo2(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  });
  var _React$useState = reactExports.useState(expandedKeys), _React$useState2 = _slicedToArray(_React$useState, 2), prevExpandedKeys = _React$useState2[0], setPrevExpandedKeys = _React$useState2[1];
  var _React$useState3 = reactExports.useState(data), _React$useState4 = _slicedToArray(_React$useState3, 2), prevData = _React$useState4[0], setPrevData = _React$useState4[1];
  var _React$useState5 = reactExports.useState(data), _React$useState6 = _slicedToArray(_React$useState5, 2), transitionData = _React$useState6[0], setTransitionData = _React$useState6[1];
  var _React$useState7 = reactExports.useState([]), _React$useState8 = _slicedToArray(_React$useState7, 2), transitionRange = _React$useState8[0], setTransitionRange = _React$useState8[1];
  var _React$useState9 = reactExports.useState(null), _React$useState10 = _slicedToArray(_React$useState9, 2), motionType = _React$useState10[0], setMotionType = _React$useState10[1];
  var dataRef = reactExports.useRef(data);
  dataRef.current = data;
  function onMotionEnd() {
    var latestData = dataRef.current;
    setPrevData(latestData);
    setTransitionData(latestData);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  }
  useLayoutEffect$1(function() {
    setPrevExpandedKeys(expandedKeys);
    var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
    if (diffExpanded.key !== null) {
      if (diffExpanded.add) {
        var keyIndex = prevData.findIndex(function(_ref) {
          var key = _ref.key;
          return key === diffExpanded.key;
        });
        var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
        var newTransitionData = prevData.slice();
        newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(newTransitionData);
        setTransitionRange(rangeNodes);
        setMotionType("show");
      } else {
        var _keyIndex = data.findIndex(function(_ref2) {
          var key = _ref2.key;
          return key === diffExpanded.key;
        });
        var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
        var _newTransitionData = data.slice();
        _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(_newTransitionData);
        setTransitionRange(_rangeNodes);
        setMotionType("hide");
      }
    } else if (prevData !== data) {
      setPrevData(data);
      setTransitionData(data);
    }
  }, [expandedKeys, data]);
  reactExports.useEffect(function() {
    if (!dragging) {
      onMotionEnd();
    }
  }, [dragging]);
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys,
    selectedKeys,
    loadedKeys,
    loadingKeys,
    checkedKeys,
    halfCheckedKeys,
    dragOverNodeKey,
    dropPosition,
    keyEntities
  };
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, focused && activeItem && /* @__PURE__ */ reactExports.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, getAccessibilityPath(activeItem)), /* @__PURE__ */ reactExports.createElement("div", null, /* @__PURE__ */ reactExports.createElement("input", {
    style: HIDDEN_STYLE,
    disabled: focusable === false || disabled,
    tabIndex: focusable !== false ? tabIndex : null,
    onKeyDown: onKeyDown2,
    onFocus,
    onBlur,
    value: "",
    onChange: noop,
    "aria-label": "for screen reader"
  })), /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(prefixCls, "-treenode"),
    "aria-hidden": true,
    style: {
      position: "absolute",
      pointerEvents: "none",
      visibility: "hidden",
      height: 0,
      overflow: "hidden",
      border: 0,
      padding: 0
    }
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(prefixCls, "-indent")
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ref: indentMeasurerRef,
    className: "".concat(prefixCls, "-indent-unit")
  }))), /* @__PURE__ */ reactExports.createElement(List$1, _extends({}, domProps, {
    data: mergedData,
    itemKey,
    height,
    fullHeight: false,
    virtual,
    itemHeight,
    prefixCls: "".concat(prefixCls, "-list"),
    ref: listRef,
    onVisibleChange: function onVisibleChange(originList, fullList) {
      var originSet = new Set(originList);
      var restList = fullList.filter(function(item) {
        return !originSet.has(item);
      });
      if (restList.some(function(item) {
        return itemKey(item) === MOTION_KEY;
      })) {
        onMotionEnd();
      }
    }
  }), function(treeNode) {
    var pos = treeNode.pos, restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
    var mergedKey = getKey(key, pos);
    delete restProps.key;
    delete restProps.children;
    var treeNodeProps = getTreeNodeProps(mergedKey, treeNodeRequiredProps);
    return /* @__PURE__ */ reactExports.createElement(RefMotionTreeNode, _extends({}, restProps, treeNodeProps, {
      title,
      active: !!activeItem && key === activeItem.key,
      pos,
      data: treeNode.data,
      isStart,
      isEnd,
      motion,
      motionNodes: key === MOTION_KEY ? transitionRange : null,
      motionType,
      onMotionStart: onListChangeStart,
      onMotionEnd,
      treeNodeRequiredProps,
      onMouseMove: function onMouseMove() {
        onActiveChange(null);
      }
    }));
  }));
});
NodeList.displayName = "NodeList";
var MAX_RETRY_TIMES = 10;
var Tree$3 = /* @__PURE__ */ function(_React$Component) {
  _inherits(Tree2, _React$Component);
  var _super = _createSuper(Tree2);
  function Tree2() {
    var _this;
    _classCallCheck(this, Tree2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _defineProperty(_assertThisInitialized(_this), "destroyed", false);
    _defineProperty(_assertThisInitialized(_this), "delayedDragEnterLogic", void 0);
    _defineProperty(_assertThisInitialized(_this), "loadingRetryTimes", {});
    _defineProperty(_assertThisInitialized(_this), "state", {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      // the drop position of abstract-drop-node, inside 0, top -1, bottom 1
      dropContainerKey: null,
      // the container key of abstract-drop-node if dropPosition is -1 or 1
      dropLevelOffset: null,
      // the drop level offset of abstract-drag-over-node
      dropTargetPos: null,
      // the pos of abstract-drop-node
      dropAllowed: true,
      // if drop to abstract-drop-node is allowed
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: fillFieldNames()
    });
    _defineProperty(_assertThisInitialized(_this), "dragStartMousePosition", null);
    _defineProperty(_assertThisInitialized(_this), "dragNode", void 0);
    _defineProperty(_assertThisInitialized(_this), "currentMouseOverDroppableNodeKey", null);
    _defineProperty(_assertThisInitialized(_this), "listRef", /* @__PURE__ */ reactExports.createRef());
    _defineProperty(_assertThisInitialized(_this), "onNodeDragStart", function(event, node) {
      var _this$state = _this.state, expandedKeys = _this$state.expandedKeys, keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = node.props.eventKey;
      _this.dragNode = node;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys, eventKey);
      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: getDragChildrenKeys(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });
      _this.setExpandedKeys(newExpandedKeys);
      window.addEventListener("dragend", _this.onWindowDragEnd);
      onDragStart === null || onDragStart === void 0 || onDragStart({
        event,
        node: convertNodePropsToEventData(node.props)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragEnter", function(event, node) {
      var _this$state2 = _this.state, expandedKeys = _this$state2.expandedKeys, keyEntities = _this$state2.keyEntities, dragChildrenKeys = _this$state2.dragChildrenKeys, flattenNodes = _this$state2.flattenNodes, indent = _this$state2.indent;
      var _this$props = _this.props, onDragEnter = _this$props.onDragEnter, onExpand = _this$props.onExpand, allowDrop2 = _this$props.allowDrop, direction = _this$props.direction;
      var _node$props = node.props, pos = _node$props.pos, eventKey = _node$props.eventKey;
      var _assertThisInitialize = _assertThisInitialized(_this), dragNode = _assertThisInitialize.dragNode;
      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        _this.resetDragState();
        return;
      }
      var _calcDropPosition = calcDropPosition(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop2, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition.dropPosition, dropLevelOffset = _calcDropPosition.dropLevelOffset, dropTargetKey = _calcDropPosition.dropTargetKey, dropContainerKey = _calcDropPosition.dropContainerKey, dropTargetPos = _calcDropPosition.dropTargetPos, dropAllowed = _calcDropPosition.dropAllowed, dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (
        // don't allow drop inside its children
        dragChildrenKeys.indexOf(dropTargetKey) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
        !dropAllowed
      ) {
        _this.resetDragState();
        return;
      }
      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }
      Object.keys(_this.delayedDragEnterLogic).forEach(function(key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });
      if (dragNode.props.eventKey !== node.props.eventKey) {
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function() {
          if (_this.state.draggingNodeKey === null) return;
          var newExpandedKeys = _toConsumableArray(expandedKeys);
          var entity = getEntity(keyEntities, node.props.eventKey);
          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys, node.props.eventKey);
          }
          if (!("expandedKeys" in _this.props)) {
            _this.setExpandedKeys(newExpandedKeys);
          }
          onExpand === null || onExpand === void 0 || onExpand(newExpandedKeys, {
            node: convertNodePropsToEventData(node.props),
            expanded: true,
            nativeEvent: event.nativeEvent
          });
        }, 800);
      }
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();
        return;
      }
      _this.setState({
        dragOverNodeKey,
        dropPosition,
        dropLevelOffset,
        dropTargetKey,
        dropContainerKey,
        dropTargetPos,
        dropAllowed
      });
      onDragEnter === null || onDragEnter === void 0 || onDragEnter({
        event,
        node: convertNodePropsToEventData(node.props),
        expandedKeys
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragOver", function(event, node) {
      var _this$state3 = _this.state, dragChildrenKeys = _this$state3.dragChildrenKeys, flattenNodes = _this$state3.flattenNodes, keyEntities = _this$state3.keyEntities, expandedKeys = _this$state3.expandedKeys, indent = _this$state3.indent;
      var _this$props2 = _this.props, onDragOver = _this$props2.onDragOver, allowDrop2 = _this$props2.allowDrop, direction = _this$props2.direction;
      var _assertThisInitialize2 = _assertThisInitialized(_this), dragNode = _assertThisInitialize2.dragNode;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = calcDropPosition(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop2, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition2.dropPosition, dropLevelOffset = _calcDropPosition2.dropLevelOffset, dropTargetKey = _calcDropPosition2.dropTargetKey, dropContainerKey = _calcDropPosition2.dropContainerKey, dropAllowed = _calcDropPosition2.dropAllowed, dropTargetPos = _calcDropPosition2.dropTargetPos, dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        return;
      }
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
          _this.resetDragState();
        }
      } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
        _this.setState({
          dropPosition,
          dropLevelOffset,
          dropTargetKey,
          dropContainerKey,
          dropTargetPos,
          dropAllowed,
          dragOverNodeKey
        });
      }
      onDragOver === null || onDragOver === void 0 || onDragOver({
        event,
        node: convertNodePropsToEventData(node.props)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragLeave", function(event, node) {
      if (_this.currentMouseOverDroppableNodeKey === node.props.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        _this.resetDragState();
        _this.currentMouseOverDroppableNodeKey = null;
      }
      var onDragLeave = _this.props.onDragLeave;
      onDragLeave === null || onDragLeave === void 0 || onDragLeave({
        event,
        node: convertNodePropsToEventData(node.props)
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onWindowDragEnd", function(event) {
      _this.onNodeDragEnd(event, null, true);
      window.removeEventListener("dragend", _this.onWindowDragEnd);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDragEnd", function(event, node) {
      var onDragEnd = _this.props.onDragEnd;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      onDragEnd === null || onDragEnd === void 0 || onDragEnd({
        event,
        node: convertNodePropsToEventData(node.props)
      });
      _this.dragNode = null;
      window.removeEventListener("dragend", _this.onWindowDragEnd);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDrop", function(event, node) {
      var _this$getActiveItem;
      var outsideTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var _this$state4 = _this.state, dragChildrenKeys = _this$state4.dragChildrenKeys, dropPosition = _this$state4.dropPosition, dropTargetKey = _this$state4.dropTargetKey, dropTargetPos = _this$state4.dropTargetPos, dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) return;
      var onDrop = _this.props.onDrop;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = _objectSpread2(_objectSpread2({}, getTreeNodeProps(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
        active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
        data: getEntity(_this.state.keyEntities, dropTargetKey).node
      });
      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      warningOnce(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: _this.dragNode ? convertNodePropsToEventData(_this.dragNode.props) : null,
        dragNodesKeys: [_this.dragNode.props.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 || onDrop(dropResult);
      }
      _this.dragNode = null;
    });
    _defineProperty(_assertThisInitialized(_this), "cleanDragState", function() {
      var draggingNodeKey = _this.state.draggingNodeKey;
      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    });
    _defineProperty(_assertThisInitialized(_this), "triggerExpandActionExpand", function(e, treeNode) {
      var _this$state5 = _this.state, expandedKeys = _this$state5.expandedKeys, flattenNodes = _this$state5.flattenNodes;
      var expanded = treeNode.expanded, key = treeNode.key, isLeaf = treeNode.isLeaf;
      if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
        return;
      }
      var node = flattenNodes.filter(function(nodeItem) {
        return nodeItem.key === key;
      })[0];
      var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(key, _this.getTreeNodeRequiredProps())), {}, {
        data: node.data
      }));
      _this.setExpandedKeys(expanded ? arrDel(expandedKeys, key) : arrAdd(expandedKeys, key));
      _this.onNodeExpand(e, eventNode);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeClick", function(e, treeNode) {
      var _this$props3 = _this.props, onClick = _this$props3.onClick, expandAction = _this$props3.expandAction;
      if (expandAction === "click") {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onClick === null || onClick === void 0 || onClick(e, treeNode);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeDoubleClick", function(e, treeNode) {
      var _this$props4 = _this.props, onDoubleClick = _this$props4.onDoubleClick, expandAction = _this$props4.expandAction;
      if (expandAction === "doubleClick") {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onDoubleClick === null || onDoubleClick === void 0 || onDoubleClick(e, treeNode);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeSelect", function(e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state6 = _this.state, keyEntities = _this$state6.keyEntities, fieldNames = _this$state6.fieldNames;
      var _this$props5 = _this.props, onSelect = _this$props5.onSelect, multiple = _this$props5.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected;
      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = arrAdd(selectedKeys, key);
      }
      var selectedNodes = selectedKeys.map(function(selectedKey) {
        var entity = getEntity(keyEntities, selectedKey);
        if (!entity) return null;
        return entity.node;
      }).filter(function(node) {
        return node;
      });
      _this.setUncontrolledState({
        selectedKeys
      });
      onSelect === null || onSelect === void 0 || onSelect(selectedKeys, {
        event: "select",
        selected: targetSelected,
        node: treeNode,
        selectedNodes,
        nativeEvent: e.nativeEvent
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeCheck", function(e, treeNode, checked) {
      var _this$state7 = _this.state, keyEntities = _this$state7.keyEntities, oriCheckedKeys = _this$state7.checkedKeys, oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
      var _this$props6 = _this.props, checkStrictly = _this$props6.checkStrictly, onCheck = _this$props6.onCheck;
      var key = treeNode.key;
      var checkedObj;
      var eventObj = {
        event: "check",
        node: treeNode,
        checked,
        nativeEvent: e.nativeEvent
      };
      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, key) : arrDel(oriCheckedKeys, key);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function(checkedKey) {
          return getEntity(keyEntities, checkedKey);
        }).filter(function(entity) {
          return entity;
        }).map(function(entity) {
          return entity.node;
        });
        _this.setUncontrolledState({
          checkedKeys
        });
      } else {
        var _conductCheck = conductCheck([].concat(_toConsumableArray(oriCheckedKeys), [key]), true, keyEntities), _checkedKeys = _conductCheck.checkedKeys, _halfCheckedKeys = _conductCheck.halfCheckedKeys;
        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _halfCheckedKeys
          }, keyEntities);
          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _checkedKeys;
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;
        _checkedKeys.forEach(function(checkedKey) {
          var entity = getEntity(keyEntities, checkedKey);
          if (!entity) return;
          var node = entity.node, pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node,
            pos
          });
        });
        _this.setUncontrolledState({
          checkedKeys: _checkedKeys
        }, false, {
          halfCheckedKeys: _halfCheckedKeys
        });
      }
      onCheck === null || onCheck === void 0 || onCheck(checkedObj, eventObj);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeLoad", function(treeNode) {
      var _entity$children;
      var key = treeNode.key;
      var keyEntities = _this.state.keyEntities;
      var entity = getEntity(keyEntities, key);
      if (entity !== null && entity !== void 0 && (_entity$children = entity.children) !== null && _entity$children !== void 0 && _entity$children.length) {
        return;
      }
      var loadPromise = new Promise(function(resolve, reject) {
        _this.setState(function(_ref) {
          var _ref$loadedKeys = _ref.loadedKeys, loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys, _ref$loadingKeys = _ref.loadingKeys, loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props7 = _this.props, loadData = _this$props7.loadData, onLoad = _this$props7.onLoad;
          if (!loadData || loadedKeys.indexOf(key) !== -1 || loadingKeys.indexOf(key) !== -1) {
            return null;
          }
          var promise = loadData(treeNode);
          promise.then(function() {
            var currentLoadedKeys = _this.state.loadedKeys;
            var newLoadedKeys = arrAdd(currentLoadedKeys, key);
            onLoad === null || onLoad === void 0 || onLoad(newLoadedKeys, {
              event: "load",
              node: treeNode
            });
            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState(function(prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });
            resolve();
          }).catch(function(e) {
            _this.setState(function(prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });
            _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
            if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
              var currentLoadedKeys = _this.state.loadedKeys;
              warningOnce(false, "Retry for `loadData` many times but still failed. No more retry.");
              _this.setUncontrolledState({
                loadedKeys: arrAdd(currentLoadedKeys, key)
              });
              resolve();
            }
            reject(e);
          });
          return {
            loadingKeys: arrAdd(loadingKeys, key)
          };
        });
      });
      loadPromise.catch(function() {
      });
      return loadPromise;
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeMouseEnter", function(event, node) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
        event,
        node
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeMouseLeave", function(event, node) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
        event,
        node
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeContextMenu", function(event, node) {
      var onRightClick = _this.props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event,
          node
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onFocus", function() {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      onFocus === null || onFocus === void 0 || onFocus.apply(void 0, args);
    });
    _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      _this.onActiveChange(null);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);
    });
    _defineProperty(_assertThisInitialized(_this), "getTreeNodeRequiredProps", function() {
      var _this$state8 = _this.state, expandedKeys = _this$state8.expandedKeys, selectedKeys = _this$state8.selectedKeys, loadedKeys = _this$state8.loadedKeys, loadingKeys = _this$state8.loadingKeys, checkedKeys = _this$state8.checkedKeys, halfCheckedKeys = _this$state8.halfCheckedKeys, dragOverNodeKey = _this$state8.dragOverNodeKey, dropPosition = _this$state8.dropPosition, keyEntities = _this$state8.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey,
        dropPosition,
        keyEntities
      };
    });
    _defineProperty(_assertThisInitialized(_this), "setExpandedKeys", function(expandedKeys) {
      var _this$state9 = _this.state, treeData = _this$state9.treeData, fieldNames = _this$state9.fieldNames;
      var flattenNodes = flattenTreeData(treeData, expandedKeys, fieldNames);
      _this.setUncontrolledState({
        expandedKeys,
        flattenNodes
      }, true);
    });
    _defineProperty(_assertThisInitialized(_this), "onNodeExpand", function(e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state10 = _this.state, listChanging = _this$state10.listChanging, fieldNames = _this$state10.fieldNames;
      var _this$props8 = _this.props, onExpand = _this$props8.onExpand, loadData = _this$props8.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key];
      if (listChanging) {
        return;
      }
      var index = expandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      warningOnce(expanded && index !== -1 || !expanded && index === -1, "Expand state not sync with index check");
      if (targetExpanded) {
        expandedKeys = arrAdd(expandedKeys, key);
      } else {
        expandedKeys = arrDel(expandedKeys, key);
      }
      _this.setExpandedKeys(expandedKeys);
      onExpand === null || onExpand === void 0 || onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent
      });
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function() {
            var newFlattenTreeData = flattenTreeData(_this.state.treeData, expandedKeys, fieldNames);
            _this.setUncontrolledState({
              flattenNodes: newFlattenTreeData
            });
          }).catch(function() {
            var currentExpandedKeys = _this.state.expandedKeys;
            var expandedKeysToRestore = arrDel(currentExpandedKeys, key);
            _this.setExpandedKeys(expandedKeysToRestore);
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onListChangeStart", function() {
      _this.setUncontrolledState({
        listChanging: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onListChangeEnd", function() {
      setTimeout(function() {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onActiveChange", function(newActiveKey) {
      var activeKey = _this.state.activeKey;
      var _this$props9 = _this.props, onActiveChange = _this$props9.onActiveChange, _this$props9$itemScro = _this$props9.itemScrollOffset, itemScrollOffset = _this$props9$itemScro === void 0 ? 0 : _this$props9$itemScro;
      if (activeKey === newActiveKey) {
        return;
      }
      _this.setState({
        activeKey: newActiveKey
      });
      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey,
          offset: itemScrollOffset
        });
      }
      onActiveChange === null || onActiveChange === void 0 || onActiveChange(newActiveKey);
    });
    _defineProperty(_assertThisInitialized(_this), "getActiveItem", function() {
      var _this$state11 = _this.state, activeKey = _this$state11.activeKey, flattenNodes = _this$state11.flattenNodes;
      if (activeKey === null) {
        return null;
      }
      return flattenNodes.find(function(_ref2) {
        var key = _ref2.key;
        return key === activeKey;
      }) || null;
    });
    _defineProperty(_assertThisInitialized(_this), "offsetActiveKey", function(offset2) {
      var _this$state12 = _this.state, flattenNodes = _this$state12.flattenNodes, activeKey = _this$state12.activeKey;
      var index = flattenNodes.findIndex(function(_ref3) {
        var key = _ref3.key;
        return key === activeKey;
      });
      if (index === -1 && offset2 < 0) {
        index = flattenNodes.length;
      }
      index = (index + offset2 + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index];
      if (item) {
        var _key4 = item.key;
        _this.onActiveChange(_key4);
      } else {
        _this.onActiveChange(null);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
      var _this$state13 = _this.state, activeKey = _this$state13.activeKey, expandedKeys = _this$state13.expandedKeys, checkedKeys = _this$state13.checkedKeys, fieldNames = _this$state13.fieldNames;
      var _this$props10 = _this.props, onKeyDown2 = _this$props10.onKeyDown, checkable = _this$props10.checkable, selectable = _this$props10.selectable;
      switch (event.which) {
        case KeyCode.UP: {
          _this.offsetActiveKey(-1);
          event.preventDefault();
          break;
        }
        case KeyCode.DOWN: {
          _this.offsetActiveKey(1);
          event.preventDefault();
          break;
        }
      }
      var activeItem = _this.getActiveItem();
      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
        var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(activeKey, treeNodeRequiredProps)), {}, {
          data: activeItem.data,
          active: true
        }));
        switch (event.which) {
          case KeyCode.LEFT: {
            if (expandable && expandedKeys.includes(activeKey)) {
              _this.onNodeExpand({}, eventNode);
            } else if (activeItem.parent) {
              _this.onActiveChange(activeItem.parent.key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode.RIGHT: {
            if (expandable && !expandedKeys.includes(activeKey)) {
              _this.onNodeExpand({}, eventNode);
            } else if (activeItem.children && activeItem.children.length) {
              _this.onActiveChange(activeItem.children[0].key);
            }
            event.preventDefault();
            break;
          }
          case KeyCode.ENTER:
          case KeyCode.SPACE: {
            if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
              _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
            } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
              _this.onNodeSelect({}, eventNode);
            }
            break;
          }
        }
      }
      onKeyDown2 === null || onKeyDown2 === void 0 || onKeyDown2(event);
    });
    _defineProperty(_assertThisInitialized(_this), "setUncontrolledState", function(state) {
      var atomic = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function(name) {
          if (name in _this.props) {
            allPassed = false;
            return;
          }
          needSync = true;
          newState[name] = state[name];
        });
        if (needSync && (!atomic || allPassed)) {
          _this.setState(_objectSpread2(_objectSpread2({}, newState), forceState));
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "scrollTo", function(scroll) {
      _this.listRef.current.scrollTo(scroll);
    });
    return _this;
  }
  _createClass(Tree2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function onUpdated() {
      var _this$props11 = this.props, activeKey = _this$props11.activeKey, _this$props11$itemScr = _this$props11.itemScrollOffset, itemScrollOffset = _this$props11$itemScr === void 0 ? 0 : _this$props11$itemScr;
      if (activeKey !== void 0 && activeKey !== this.state.activeKey) {
        this.setState({
          activeKey
        });
        if (activeKey !== null) {
          this.scrollTo({
            key: activeKey,
            offset: itemScrollOffset
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("dragend", this.onWindowDragEnd);
      this.destroyed = true;
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state14 = this.state, focused = _this$state14.focused, flattenNodes = _this$state14.flattenNodes, keyEntities = _this$state14.keyEntities, draggingNodeKey = _this$state14.draggingNodeKey, activeKey = _this$state14.activeKey, dropLevelOffset = _this$state14.dropLevelOffset, dropContainerKey = _this$state14.dropContainerKey, dropTargetKey = _this$state14.dropTargetKey, dropPosition = _this$state14.dropPosition, dragOverNodeKey = _this$state14.dragOverNodeKey, indent = _this$state14.indent;
      var _this$props12 = this.props, prefixCls = _this$props12.prefixCls, className = _this$props12.className, style = _this$props12.style, showLine = _this$props12.showLine, focusable = _this$props12.focusable, _this$props12$tabInde = _this$props12.tabIndex, tabIndex = _this$props12$tabInde === void 0 ? 0 : _this$props12$tabInde, selectable = _this$props12.selectable, showIcon = _this$props12.showIcon, icon = _this$props12.icon, switcherIcon = _this$props12.switcherIcon, draggable = _this$props12.draggable, checkable = _this$props12.checkable, checkStrictly = _this$props12.checkStrictly, disabled = _this$props12.disabled, motion = _this$props12.motion, loadData = _this$props12.loadData, filterTreeNode = _this$props12.filterTreeNode, height = _this$props12.height, itemHeight = _this$props12.itemHeight, virtual = _this$props12.virtual, titleRender = _this$props12.titleRender, dropIndicatorRender2 = _this$props12.dropIndicatorRender, onContextMenu = _this$props12.onContextMenu, onScroll = _this$props12.onScroll, direction = _this$props12.direction, rootClassName = _this$props12.rootClassName, rootStyle = _this$props12.rootStyle;
      var domProps = pickAttrs(this.props, {
        aria: true,
        data: true
      });
      var draggableConfig;
      if (draggable) {
        if (_typeof(draggable) === "object") {
          draggableConfig = draggable;
        } else if (typeof draggable === "function") {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return /* @__PURE__ */ reactExports.createElement(TreeContext.Provider, {
        value: {
          prefixCls,
          selectable,
          showIcon,
          icon,
          switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey,
          checkable,
          checkStrictly,
          disabled,
          keyEntities,
          dropLevelOffset,
          dropContainerKey,
          dropTargetKey,
          dropPosition,
          dragOverNodeKey,
          indent,
          direction,
          dropIndicatorRender: dropIndicatorRender2,
          loadData,
          filterTreeNode,
          titleRender,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      }, /* @__PURE__ */ reactExports.createElement("div", {
        role: "tree",
        className: classNames(prefixCls, className, rootClassName, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-show-line"), showLine), "".concat(prefixCls, "-focused"), focused), "".concat(prefixCls, "-active-focused"), activeKey !== null)),
        style: rootStyle
      }, /* @__PURE__ */ reactExports.createElement(NodeList, _extends({
        ref: this.listRef,
        prefixCls,
        style,
        data: flattenNodes,
        disabled,
        selectable,
        checkable: !!checkable,
        motion,
        dragging: draggingNodeKey !== null,
        height,
        itemHeight,
        virtual,
        focusable,
        focused,
        tabIndex,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu,
        onScroll
      }, this.getTreeNodeRequiredProps(), domProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };
      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      }
      var treeData;
      var fieldNames = prevState.fieldNames;
      if (needSync("fieldNames")) {
        fieldNames = fillFieldNames(props.fieldNames);
        newState.fieldNames = fieldNames;
      }
      if (needSync("treeData")) {
        treeData = props.treeData;
      } else if (needSync("children")) {
        warningOnce(false, "`children` of Tree is deprecated. Please use `treeData` instead.");
        treeData = convertTreeToData(props.children);
      }
      if (treeData) {
        newState.treeData = treeData;
        var entitiesMap = convertDataToEntities(treeData, {
          fieldNames
        });
        newState.keyEntities = _objectSpread2(_defineProperty({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
      }
      var keyEntities = newState.keyEntities || prevState.keyEntities;
      if (needSync("expandedKeys") || prevProps && needSync("autoExpandParent")) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        var cloneKeyEntities = _objectSpread2({}, keyEntities);
        delete cloneKeyEntities[MOTION_KEY];
        newState.expandedKeys = Object.keys(cloneKeyEntities).map(function(key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }
      if (!newState.expandedKeys) {
        delete newState.expandedKeys;
      }
      if (treeData || newState.expandedKeys) {
        var flattenNodes = flattenTreeData(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
        newState.flattenNodes = flattenNodes;
      }
      if (props.selectable) {
        if (needSync("selectedKeys")) {
          newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      }
      if (props.checkable) {
        var checkedKeyEntity;
        if (needSync("checkedKeys")) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeData) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity, _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys, checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che, _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys, halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }
      if (needSync("loadedKeys")) {
        newState.loadedKeys = props.loadedKeys;
      }
      return newState;
    }
  }]);
  return Tree2;
}(reactExports.Component);
_defineProperty(Tree$3, "defaultProps", {
  prefixCls: "rc-tree",
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: DropIndicator,
  allowDrop: function allowDrop() {
    return true;
  },
  expandAction: false
});
_defineProperty(Tree$3, "TreeNode", ContextTreeNode);
const treeNodeFX = new Keyframe("ant-tree-node-fx-do-not-use", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const getSwitchStyle = (prefixCls, token) => ({
  [`.${prefixCls}-switcher-icon`]: {
    display: "inline-block",
    fontSize: 10,
    verticalAlign: "baseline",
    svg: {
      transition: `transform ${token.motionDurationSlow}`
    }
  }
});
const getDropIndicatorStyle = (prefixCls, token) => ({
  [`.${prefixCls}-drop-indicator`]: {
    position: "absolute",
    // it should displayed over the following node
    zIndex: 1,
    height: 2,
    backgroundColor: token.colorPrimary,
    borderRadius: 1,
    pointerEvents: "none",
    "&:after": {
      position: "absolute",
      top: -3,
      insetInlineStart: -6,
      width: 8,
      height: 8,
      backgroundColor: "transparent",
      border: `${unit(token.lineWidthBold)} solid ${token.colorPrimary}`,
      borderRadius: "50%",
      content: '""'
    }
  }
});
const genBaseStyle$1 = (prefixCls, token) => {
  const {
    treeCls,
    treeNodeCls,
    treeNodePadding,
    titleHeight,
    nodeSelectedBg,
    nodeHoverBg
  } = token;
  const treeCheckBoxMarginHorizontal = token.paddingXS;
  return {
    [treeCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      background: token.colorBgContainer,
      borderRadius: token.borderRadius,
      transition: `background-color ${token.motionDurationSlow}`,
      [`&${treeCls}-rtl`]: {
        // >>> Switcher
        [`${treeCls}-switcher`]: {
          "&_close": {
            [`${treeCls}-switcher-icon`]: {
              svg: {
                transform: "rotate(90deg)"
              }
            }
          }
        }
      },
      [`&-focused:not(:hover):not(${treeCls}-active-focused)`]: Object.assign({}, genFocusOutline(token)),
      // =================== Virtual List ===================
      [`${treeCls}-list-holder-inner`]: {
        alignItems: "flex-start"
      },
      [`&${treeCls}-block-node`]: {
        [`${treeCls}-list-holder-inner`]: {
          alignItems: "stretch",
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            flex: "auto"
          },
          // >>> Drag
          [`${treeNodeCls}.dragging`]: {
            position: "relative",
            "&:after": {
              position: "absolute",
              top: 0,
              insetInlineEnd: 0,
              bottom: treeNodePadding,
              insetInlineStart: 0,
              border: `1px solid ${token.colorPrimary}`,
              opacity: 0,
              animationName: treeNodeFX,
              animationDuration: token.motionDurationSlow,
              animationPlayState: "running",
              animationFillMode: "forwards",
              content: '""',
              pointerEvents: "none"
            }
          }
        }
      },
      // ===================== TreeNode =====================
      [treeNodeCls]: {
        display: "flex",
        alignItems: "flex-start",
        padding: `0 0 ${unit(treeNodePadding)} 0`,
        outline: "none",
        "&-rtl": {
          direction: "rtl"
        },
        // Disabled
        "&-disabled": {
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            color: token.colorTextDisabled,
            cursor: "not-allowed",
            "&:hover": {
              background: "transparent"
            }
          }
        },
        [`&-active ${treeCls}-node-content-wrapper`]: {
          background: token.controlItemBgHover
        },
        [`&:not(${treeNodeCls}-disabled).filter-node ${treeCls}-title`]: {
          color: token.colorPrimary,
          fontWeight: 500
        },
        "&-draggable": {
          cursor: "grab",
          [`${treeCls}-draggable-icon`]: {
            // https://github.com/ant-design/ant-design/issues/41915
            flexShrink: 0,
            width: titleHeight,
            lineHeight: unit(titleHeight),
            textAlign: "center",
            visibility: "visible",
            opacity: 0.2,
            transition: `opacity ${token.motionDurationSlow}`,
            [`${treeNodeCls}:hover &`]: {
              opacity: 0.45
            }
          },
          [`&${treeNodeCls}-disabled`]: {
            [`${treeCls}-draggable-icon`]: {
              visibility: "hidden"
            }
          }
        }
      },
      // >>> Indent
      [`${treeCls}-indent`]: {
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        userSelect: "none",
        "&-unit": {
          display: "inline-block",
          width: titleHeight
        }
      },
      // >>> Drag Handler
      [`${treeCls}-draggable-icon`]: {
        visibility: "hidden"
      },
      // >>> Switcher
      [`${treeCls}-switcher`]: Object.assign(Object.assign({}, getSwitchStyle(prefixCls, token)), {
        position: "relative",
        flex: "none",
        alignSelf: "stretch",
        width: titleHeight,
        margin: 0,
        lineHeight: unit(titleHeight),
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        transition: `all ${token.motionDurationSlow}`,
        "&-noop": {
          cursor: "unset"
        },
        "&:before": {
          pointerEvents: "none",
          content: '""',
          width: titleHeight,
          height: titleHeight,
          position: "absolute",
          left: {
            _skip_check_: true,
            value: 0
          },
          top: 0,
          borderRadius: token.borderRadius,
          transition: `all ${token.motionDurationSlow}`
        },
        [`&:not(${treeCls}-switcher-noop):hover:before`]: {
          backgroundColor: token.colorBgTextHover
        },
        "&_close": {
          [`${treeCls}-switcher-icon`]: {
            svg: {
              transform: "rotate(-90deg)"
            }
          }
        },
        "&-loading-icon": {
          color: token.colorPrimary
        },
        "&-leaf-line": {
          position: "relative",
          zIndex: 1,
          display: "inline-block",
          width: "100%",
          height: "100%",
          // https://github.com/ant-design/ant-design/issues/31884
          "&:before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: token.calc(titleHeight).div(2).equal(),
            bottom: token.calc(treeNodePadding).mul(-1).equal(),
            marginInlineStart: -1,
            borderInlineEnd: `1px solid ${token.colorBorder}`,
            content: '""'
          },
          "&:after": {
            position: "absolute",
            width: token.calc(token.calc(titleHeight).div(2).equal()).mul(0.8).equal(),
            height: token.calc(titleHeight).div(2).equal(),
            borderBottom: `1px solid ${token.colorBorder}`,
            content: '""'
          }
        }
      }),
      // >>> Checkbox
      [`${treeCls}-checkbox`]: {
        top: "initial",
        marginInlineEnd: treeCheckBoxMarginHorizontal,
        alignSelf: "flex-start",
        marginTop: token.marginXXS
      },
      // >>> Title
      // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
      [`${treeCls}-node-content-wrapper, ${treeCls}-checkbox + span`]: {
        position: "relative",
        zIndex: "auto",
        minHeight: titleHeight,
        margin: 0,
        padding: `0 ${unit(token.calc(token.paddingXS).div(2).equal())}`,
        color: "inherit",
        lineHeight: unit(titleHeight),
        background: "transparent",
        borderRadius: token.borderRadius,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
        "&:hover": {
          backgroundColor: nodeHoverBg
        },
        [`&${treeCls}-node-selected`]: {
          backgroundColor: nodeSelectedBg
        },
        // Icon
        [`${treeCls}-iconEle`]: {
          display: "inline-block",
          width: titleHeight,
          height: titleHeight,
          lineHeight: unit(titleHeight),
          textAlign: "center",
          verticalAlign: "top",
          "&:empty": {
            display: "none"
          }
        }
      },
      // https://github.com/ant-design/ant-design/issues/28217
      [`${treeCls}-unselectable ${treeCls}-node-content-wrapper:hover`]: {
        backgroundColor: "transparent"
      },
      // ==================== Draggable =====================
      [`${treeCls}-node-content-wrapper`]: Object.assign({
        lineHeight: unit(titleHeight),
        userSelect: "none"
      }, getDropIndicatorStyle(prefixCls, token)),
      [`${treeNodeCls}.drop-container`]: {
        "> [draggable]": {
          boxShadow: `0 0 0 2px ${token.colorPrimary}`
        }
      },
      // ==================== Show Line =====================
      "&-show-line": {
        // ================ Indent lines ================
        [`${treeCls}-indent`]: {
          "&-unit": {
            position: "relative",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: token.calc(titleHeight).div(2).equal(),
              bottom: token.calc(treeNodePadding).mul(-1).equal(),
              borderInlineEnd: `1px solid ${token.colorBorder}`,
              content: '""'
            },
            "&-end": {
              "&:before": {
                display: "none"
              }
            }
          }
        },
        // ============== Cover Background ==============
        [`${treeCls}-switcher`]: {
          background: "transparent",
          "&-line-icon": {
            // https://github.com/ant-design/ant-design/issues/32813
            verticalAlign: "-0.15em"
          }
        }
      },
      [`${treeNodeCls}-leaf-last`]: {
        [`${treeCls}-switcher`]: {
          "&-leaf-line": {
            "&:before": {
              top: "auto !important",
              bottom: "auto !important",
              height: `${unit(token.calc(titleHeight).div(2).equal())} !important`
            }
          }
        }
      }
    })
  };
};
const genDirectoryStyle = (token) => {
  const {
    treeCls,
    treeNodeCls,
    treeNodePadding,
    directoryNodeSelectedBg,
    directoryNodeSelectedColor
  } = token;
  return {
    [`${treeCls}${treeCls}-directory`]: {
      // ================== TreeNode ==================
      [treeNodeCls]: {
        position: "relative",
        // Hover color
        "&:before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: treeNodePadding,
          insetInlineStart: 0,
          transition: `background-color ${token.motionDurationMid}`,
          content: '""',
          pointerEvents: "none"
        },
        "&:hover": {
          "&:before": {
            background: token.controlItemBgHover
          }
        },
        // Elements
        "> *": {
          zIndex: 1
        },
        // >>> Switcher
        [`${treeCls}-switcher`]: {
          transition: `color ${token.motionDurationMid}`
        },
        // >>> Title
        [`${treeCls}-node-content-wrapper`]: {
          borderRadius: 0,
          userSelect: "none",
          "&:hover": {
            background: "transparent"
          },
          [`&${treeCls}-node-selected`]: {
            color: directoryNodeSelectedColor,
            background: "transparent"
          }
        },
        // ============= Selected =============
        "&-selected": {
          [`
            &:hover::before,
            &::before
          `]: {
            background: directoryNodeSelectedBg
          },
          // >>> Switcher
          [`${treeCls}-switcher`]: {
            color: directoryNodeSelectedColor
          },
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            color: directoryNodeSelectedColor,
            background: "transparent"
          }
        }
      }
    }
  };
};
const genTreeStyle = (prefixCls, token) => {
  const treeCls = `.${prefixCls}`;
  const treeNodeCls = `${treeCls}-treenode`;
  const treeNodePadding = token.calc(token.paddingXS).div(2).equal();
  const treeToken = merge(token, {
    treeCls,
    treeNodeCls,
    treeNodePadding
  });
  return [
    // Basic
    genBaseStyle$1(prefixCls, treeToken),
    // Directory
    genDirectoryStyle(treeToken)
  ];
};
const initComponentToken = (token) => {
  const {
    controlHeightSM
  } = token;
  return {
    titleHeight: controlHeightSM,
    nodeHoverBg: token.controlItemBgHover,
    nodeSelectedBg: token.controlItemBgActive
  };
};
const prepareComponentToken$2 = (token) => {
  const {
    colorTextLightSolid,
    colorPrimary
  } = token;
  return Object.assign(Object.assign({}, initComponentToken(token)), {
    directoryNodeSelectedColor: colorTextLightSolid,
    directoryNodeSelectedBg: colorPrimary
  });
};
const useStyle$2 = genStyleHooks("Tree", (token, _ref) => {
  let {
    prefixCls
  } = _ref;
  return [{
    [token.componentCls]: getStyle(`${prefixCls}-checkbox`, token)
  }, genTreeStyle(prefixCls, token), genCollapseMotion(token)];
}, prepareComponentToken$2);
const offset = 4;
function dropIndicatorRender(props) {
  const {
    dropPosition,
    dropLevelOffset,
    prefixCls,
    indent,
    direction = "ltr"
  } = props;
  const startPosition = direction === "ltr" ? "left" : "right";
  const endPosition = direction === "ltr" ? "right" : "left";
  const style = {
    [startPosition]: -dropLevelOffset * indent + offset,
    [endPosition]: 0
  };
  switch (dropPosition) {
    case -1:
      style.top = -3;
      break;
    case 1:
      style.bottom = -3;
      break;
    default:
      style.bottom = -3;
      style[startPosition] = indent + offset;
      break;
  }
  return /* @__PURE__ */ React.createElement("div", {
    style,
    className: `${prefixCls}-drop-indicator`
  });
}
const SwitcherIconCom = (props) => {
  const {
    prefixCls,
    switcherIcon,
    treeNodeProps,
    showLine,
    switcherLoadingIcon
  } = props;
  const {
    isLeaf,
    expanded,
    loading
  } = treeNodeProps;
  if (loading) {
    if (/* @__PURE__ */ reactExports.isValidElement(switcherLoadingIcon)) {
      return switcherLoadingIcon;
    }
    return /* @__PURE__ */ reactExports.createElement(RefIcon$f, {
      className: `${prefixCls}-switcher-loading-icon`
    });
  }
  let showLeafIcon;
  if (showLine && typeof showLine === "object") {
    showLeafIcon = showLine.showLeafIcon;
  }
  if (isLeaf) {
    if (!showLine) {
      return null;
    }
    if (typeof showLeafIcon !== "boolean" && !!showLeafIcon) {
      const leafIcon = typeof showLeafIcon === "function" ? showLeafIcon(treeNodeProps) : showLeafIcon;
      const leafCls = `${prefixCls}-switcher-line-custom-icon`;
      if (/* @__PURE__ */ reactExports.isValidElement(leafIcon)) {
        return cloneElement(leafIcon, {
          className: classNames(leafIcon.props.className || "", leafCls)
        });
      }
      return leafIcon;
    }
    return showLeafIcon ? /* @__PURE__ */ reactExports.createElement(FileOutlined$1, {
      className: `${prefixCls}-switcher-line-icon`
    }) : /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-switcher-leaf-line`
    });
  }
  const switcherCls = `${prefixCls}-switcher-icon`;
  const switcher = typeof switcherIcon === "function" ? switcherIcon(treeNodeProps) : switcherIcon;
  if (/* @__PURE__ */ reactExports.isValidElement(switcher)) {
    return cloneElement(switcher, {
      className: classNames(switcher.props.className || "", switcherCls)
    });
  }
  if (switcher !== void 0) {
    return switcher;
  }
  if (showLine) {
    return expanded ? /* @__PURE__ */ reactExports.createElement(MinusSquareOutlined$1, {
      className: `${prefixCls}-switcher-line-icon`
    }) : /* @__PURE__ */ reactExports.createElement(PlusSquareOutlined$1, {
      className: `${prefixCls}-switcher-line-icon`
    });
  }
  return /* @__PURE__ */ reactExports.createElement(CaretDownFilled$1, {
    className: switcherCls
  });
};
const Tree$2 = /* @__PURE__ */ React.forwardRef((props, ref) => {
  var _a;
  const {
    getPrefixCls,
    direction,
    virtual,
    tree
  } = React.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon = false,
    showLine,
    switcherIcon,
    switcherLoadingIcon,
    blockNode = false,
    children,
    checkable = false,
    selectable = true,
    draggable,
    motion: customMotion,
    style
  } = props;
  const prefixCls = getPrefixCls("tree", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const motion = customMotion !== null && customMotion !== void 0 ? customMotion : Object.assign(Object.assign({}, initCollapseMotion(rootPrefixCls)), {
    motionAppear: false
  });
  const newProps = Object.assign(Object.assign({}, props), {
    checkable,
    selectable,
    showIcon,
    motion,
    blockNode,
    showLine: Boolean(showLine),
    dropIndicatorRender
  });
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls);
  const [, token] = useToken();
  const itemHeight = token.paddingXS / 2 + (((_a = token.Tree) === null || _a === void 0 ? void 0 : _a.titleHeight) || token.controlHeightSM);
  const draggableConfig = React.useMemo(() => {
    if (!draggable) {
      return false;
    }
    let mergedDraggable = {};
    switch (typeof draggable) {
      case "function":
        mergedDraggable.nodeDraggable = draggable;
        break;
      case "object":
        mergedDraggable = Object.assign({}, draggable);
        break;
    }
    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || /* @__PURE__ */ React.createElement(HolderOutlined$1, null);
    }
    return mergedDraggable;
  }, [draggable]);
  const renderSwitcherIcon = (nodeProps) => /* @__PURE__ */ React.createElement(SwitcherIconCom, {
    prefixCls,
    switcherIcon,
    switcherLoadingIcon,
    treeNodeProps: nodeProps,
    showLine
  });
  return wrapCSSVar(
    // @ts-ignore
    /* @__PURE__ */ React.createElement(Tree$3, Object.assign({
      itemHeight,
      ref,
      virtual
    }, newProps, {
      // newProps may contain style so declare style below it
      style: Object.assign(Object.assign({}, tree === null || tree === void 0 ? void 0 : tree.style), style),
      prefixCls,
      className: classNames({
        [`${prefixCls}-icon-hide`]: !showIcon,
        [`${prefixCls}-block-node`]: blockNode,
        [`${prefixCls}-unselectable`]: !selectable,
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, tree === null || tree === void 0 ? void 0 : tree.className, className, hashId, cssVarCls),
      direction,
      checkable: checkable ? /* @__PURE__ */ React.createElement("span", {
        className: `${prefixCls}-checkbox-inner`
      }) : checkable,
      selectable,
      switcherIcon: renderSwitcherIcon,
      draggable: draggableConfig
    }), children)
  );
});
const RECORD_NONE = 0;
const RECORD_START = 1;
const RECORD_END = 2;
function traverseNodesKey(treeData, callback, fieldNames) {
  const {
    key: fieldKey,
    children: fieldChildren
  } = fieldNames;
  function processNode(dataNode) {
    const key = dataNode[fieldKey];
    const children = dataNode[fieldChildren];
    if (callback(key, dataNode) !== false) {
      traverseNodesKey(children || [], callback, fieldNames);
    }
  }
  treeData.forEach(processNode);
}
function calcRangeKeys(_ref) {
  let {
    treeData,
    expandedKeys,
    startKey,
    endKey,
    fieldNames
  } = _ref;
  const keys = [];
  let record = RECORD_NONE;
  if (startKey && startKey === endKey) {
    return [startKey];
  }
  if (!startKey || !endKey) {
    return [];
  }
  function matchKey(key) {
    return key === startKey || key === endKey;
  }
  traverseNodesKey(treeData, (key) => {
    if (record === RECORD_END) {
      return false;
    }
    if (matchKey(key)) {
      keys.push(key);
      if (record === RECORD_NONE) {
        record = RECORD_START;
      } else if (record === RECORD_START) {
        record = RECORD_END;
        return false;
      }
    } else if (record === RECORD_START) {
      keys.push(key);
    }
    return expandedKeys.includes(key);
  }, fillFieldNames(fieldNames));
  return keys;
}
function convertDirectoryKeysToNodes(treeData, keys, fieldNames) {
  const restKeys = _toConsumableArray(keys);
  const nodes = [];
  traverseNodesKey(treeData, (key, node) => {
    const index = restKeys.indexOf(key);
    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }
    return !!restKeys.length;
  }, fillFieldNames(fieldNames));
  return nodes;
}
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function getIcon(props) {
  const {
    isLeaf,
    expanded
  } = props;
  if (isLeaf) {
    return /* @__PURE__ */ reactExports.createElement(FileOutlined$1, null);
  }
  return expanded ? /* @__PURE__ */ reactExports.createElement(FolderOpenOutlined$1, null) : /* @__PURE__ */ reactExports.createElement(FolderOutlined$1, null);
}
function getTreeData(_ref) {
  let {
    treeData,
    children
  } = _ref;
  return treeData || convertTreeToData(children);
}
const DirectoryTree = (_a, ref) => {
  var {
    defaultExpandAll,
    defaultExpandParent,
    defaultExpandedKeys
  } = _a, props = __rest$3(_a, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]);
  const lastSelectedKey = reactExports.useRef();
  const cachedSelectedKeys = reactExports.useRef();
  const getInitExpandedKeys = () => {
    const {
      keyEntities
    } = convertDataToEntities(getTreeData(props));
    let initExpandedKeys;
    if (defaultExpandAll) {
      initExpandedKeys = Object.keys(keyEntities);
    } else if (defaultExpandParent) {
      initExpandedKeys = conductExpandParent(props.expandedKeys || defaultExpandedKeys || [], keyEntities);
    } else {
      initExpandedKeys = props.expandedKeys || defaultExpandedKeys || [];
    }
    return initExpandedKeys;
  };
  const [selectedKeys, setSelectedKeys] = reactExports.useState(props.selectedKeys || props.defaultSelectedKeys || []);
  const [expandedKeys, setExpandedKeys] = reactExports.useState(() => getInitExpandedKeys());
  reactExports.useEffect(() => {
    if ("selectedKeys" in props) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys]);
  reactExports.useEffect(() => {
    if ("expandedKeys" in props) {
      setExpandedKeys(props.expandedKeys);
    }
  }, [props.expandedKeys]);
  const onExpand = (keys, info) => {
    var _a2;
    if (!("expandedKeys" in props)) {
      setExpandedKeys(keys);
    }
    return (_a2 = props.onExpand) === null || _a2 === void 0 ? void 0 : _a2.call(props, keys, info);
  };
  const onSelect = (keys, event) => {
    var _a2;
    const {
      multiple,
      fieldNames
    } = props;
    const {
      node,
      nativeEvent
    } = event;
    const {
      key = ""
    } = node;
    const treeData = getTreeData(props);
    const newEvent = Object.assign(Object.assign({}, event), {
      selected: true
    });
    const ctrlPick = (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.ctrlKey) || (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.metaKey);
    const shiftPick = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.shiftKey;
    let newSelectedKeys;
    if (multiple && ctrlPick) {
      newSelectedKeys = keys;
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys, fieldNames);
    } else if (multiple && shiftPick) {
      newSelectedKeys = Array.from(new Set([].concat(_toConsumableArray(cachedSelectedKeys.current || []), _toConsumableArray(calcRangeKeys({
        treeData,
        expandedKeys,
        startKey: key,
        endKey: lastSelectedKey.current,
        fieldNames
      })))));
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys, fieldNames);
    } else {
      newSelectedKeys = [key];
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys, fieldNames);
    }
    (_a2 = props.onSelect) === null || _a2 === void 0 ? void 0 : _a2.call(props, newSelectedKeys, newEvent);
    if (!("selectedKeys" in props)) {
      setSelectedKeys(newSelectedKeys);
    }
  };
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon = true,
    expandAction = "click"
  } = props, otherProps = __rest$3(props, ["prefixCls", "className", "showIcon", "expandAction"]);
  const prefixCls = getPrefixCls("tree", customizePrefixCls);
  const connectClassName = classNames(`${prefixCls}-directory`, {
    [`${prefixCls}-directory-rtl`]: direction === "rtl"
  }, className);
  return /* @__PURE__ */ reactExports.createElement(Tree$2, Object.assign({
    icon: getIcon,
    ref,
    blockNode: true
  }, otherProps, {
    showIcon,
    expandAction,
    prefixCls,
    className: connectClassName,
    expandedKeys,
    selectedKeys,
    onSelect,
    onExpand
  }));
};
const ForwardDirectoryTree = /* @__PURE__ */ reactExports.forwardRef(DirectoryTree);
const Tree = Tree$2;
Tree.DirectoryTree = ForwardDirectoryTree;
Tree.TreeNode = ContextTreeNode;
const Tree$1 = Tree;
const FilterSearch = (props) => {
  const {
    value,
    filterSearch,
    tablePrefixCls,
    locale: locale2,
    onChange
  } = props;
  if (!filterSearch) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: `${tablePrefixCls}-filter-dropdown-search`
  }, /* @__PURE__ */ reactExports.createElement(Input$1, {
    prefix: /* @__PURE__ */ reactExports.createElement(RefIcon$g, null),
    placeholder: locale2.filterSearchPlaceholder,
    onChange,
    value,
    // for skip min-width of input
    htmlSize: 1,
    className: `${tablePrefixCls}-filter-dropdown-search-input`
  }));
};
const onKeyDown = (event) => {
  const {
    keyCode
  } = event;
  if (keyCode === KeyCode.ENTER) {
    event.stopPropagation();
  }
};
const FilterDropdownMenuWrapper = /* @__PURE__ */ reactExports.forwardRef((props, ref) => /* @__PURE__ */ reactExports.createElement("div", {
  className: props.className,
  onClick: (e) => e.stopPropagation(),
  onKeyDown,
  ref
}, props.children));
function flattenKeys(filters) {
  let keys = [];
  (filters || []).forEach((_ref) => {
    let {
      value,
      children
    } = _ref;
    keys.push(value);
    if (children) {
      keys = [].concat(_toConsumableArray(keys), _toConsumableArray(flattenKeys(children)));
    }
  });
  return keys;
}
function hasSubMenu(filters) {
  return filters.some((_ref2) => {
    let {
      children
    } = _ref2;
    return children;
  });
}
function searchValueMatched(searchValue, text) {
  if (typeof text === "string" || typeof text === "number") {
    return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
  }
  return false;
}
function renderFilterItems(_ref3) {
  let {
    filters,
    prefixCls,
    filteredKeys,
    filterMultiple,
    searchValue,
    filterSearch
  } = _ref3;
  return filters.map((filter, index) => {
    const key = String(filter.value);
    if (filter.children) {
      return {
        key: key || index,
        label: filter.text,
        popupClassName: `${prefixCls}-dropdown-submenu`,
        children: renderFilterItems({
          filters: filter.children,
          prefixCls,
          filteredKeys,
          filterMultiple,
          searchValue,
          filterSearch
        })
      };
    }
    const Component = filterMultiple ? Checkbox : Radio$1;
    const item = {
      key: filter.value !== void 0 ? key : index,
      label: /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Component, {
        checked: filteredKeys.includes(key)
      }), /* @__PURE__ */ reactExports.createElement("span", null, filter.text))
    };
    if (searchValue.trim()) {
      if (typeof filterSearch === "function") {
        return filterSearch(searchValue, filter) ? item : null;
      }
      return searchValueMatched(searchValue, filter.text) ? item : null;
    }
    return item;
  });
}
function wrapStringListType(keys) {
  return keys || [];
}
const FilterDropdown = (props) => {
  var _a, _b;
  const {
    tablePrefixCls,
    prefixCls,
    column,
    dropdownPrefixCls,
    columnKey,
    filterOnClose,
    filterMultiple,
    filterMode = "menu",
    filterSearch = false,
    filterState,
    triggerFilter,
    locale: locale2,
    children,
    getPopupContainer,
    rootClassName
  } = props;
  const {
    filterDropdownOpen,
    onFilterDropdownOpenChange,
    filterResetToDefaultFilteredValue,
    defaultFilteredValue,
    // Deprecated
    filterDropdownVisible,
    onFilterDropdownVisibleChange
  } = column;
  const [visible, setVisible] = reactExports.useState(false);
  const filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));
  const triggerVisible = (newVisible) => {
    setVisible(newVisible);
    onFilterDropdownOpenChange === null || onFilterDropdownOpenChange === void 0 ? void 0 : onFilterDropdownOpenChange(newVisible);
    onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 ? void 0 : onFilterDropdownVisibleChange(newVisible);
  };
  const mergedVisible = (_b = filterDropdownOpen !== null && filterDropdownOpen !== void 0 ? filterDropdownOpen : filterDropdownVisible) !== null && _b !== void 0 ? _b : visible;
  const propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;
  const [getFilteredKeysSync, setFilteredKeysSync] = useSyncState(wrapStringListType(propFilteredKeys));
  const onSelectKeys = (_ref5) => {
    let {
      selectedKeys
    } = _ref5;
    setFilteredKeysSync(selectedKeys);
  };
  const onCheck = (keys, _ref6) => {
    let {
      node,
      checked
    } = _ref6;
    if (!filterMultiple) {
      onSelectKeys({
        selectedKeys: checked && node.key ? [node.key] : []
      });
    } else {
      onSelectKeys({
        selectedKeys: keys
      });
    }
  };
  reactExports.useEffect(() => {
    if (!visible) {
      return;
    }
    onSelectKeys({
      selectedKeys: wrapStringListType(propFilteredKeys)
    });
  }, [propFilteredKeys]);
  const [openKeys, setOpenKeys] = reactExports.useState([]);
  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };
  const [searchValue, setSearchValue] = reactExports.useState("");
  const onSearch = (e) => {
    const {
      value
    } = e.target;
    setSearchValue(value);
  };
  reactExports.useEffect(() => {
    if (!visible) {
      setSearchValue("");
    }
  }, [visible]);
  const internalTriggerFilter = (keys) => {
    const mergedKeys = (keys === null || keys === void 0 ? void 0 : keys.length) ? keys : null;
    if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
      return null;
    }
    if (isEqual(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys, true)) {
      return null;
    }
    triggerFilter({
      column,
      key: columnKey,
      filteredKeys: mergedKeys
    });
  };
  const onConfirm = () => {
    triggerVisible(false);
    internalTriggerFilter(getFilteredKeysSync());
  };
  const onReset = function() {
    let {
      confirm,
      closeDropdown
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      confirm: false,
      closeDropdown: false
    };
    if (confirm) {
      internalTriggerFilter([]);
    }
    if (closeDropdown) {
      triggerVisible(false);
    }
    setSearchValue("");
    if (filterResetToDefaultFilteredValue) {
      setFilteredKeysSync((defaultFilteredValue || []).map((key) => String(key)));
    } else {
      setFilteredKeysSync([]);
    }
  };
  const doFilter = function() {
    let {
      closeDropdown
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      closeDropdown: true
    };
    if (closeDropdown) {
      triggerVisible(false);
    }
    internalTriggerFilter(getFilteredKeysSync());
  };
  const onVisibleChange = (newVisible, info) => {
    if (info.source === "trigger") {
      if (newVisible && propFilteredKeys !== void 0) {
        setFilteredKeysSync(wrapStringListType(propFilteredKeys));
      }
      triggerVisible(newVisible);
      if (!newVisible && !column.filterDropdown && filterOnClose) {
        onConfirm();
      }
    }
  };
  const dropdownMenuClass = classNames({
    [`${dropdownPrefixCls}-menu-without-submenu`]: !hasSubMenu(column.filters || [])
  });
  const onCheckAll = (e) => {
    if (e.target.checked) {
      const allFilterKeys = flattenKeys(column === null || column === void 0 ? void 0 : column.filters).map((key) => String(key));
      setFilteredKeysSync(allFilterKeys);
    } else {
      setFilteredKeysSync([]);
    }
  };
  const getTreeData2 = (_ref7) => {
    let {
      filters
    } = _ref7;
    return (filters || []).map((filter, index) => {
      const key = String(filter.value);
      const item = {
        title: filter.text,
        key: filter.value !== void 0 ? key : String(index)
      };
      if (filter.children) {
        item.children = getTreeData2({
          filters: filter.children
        });
      }
      return item;
    });
  };
  const getFilterData2 = (node) => {
    var _a2;
    return Object.assign(Object.assign({}, node), {
      text: node.title,
      value: node.key,
      children: ((_a2 = node.children) === null || _a2 === void 0 ? void 0 : _a2.map((item) => getFilterData2(item))) || []
    });
  };
  let dropdownContent;
  const {
    direction,
    renderEmpty
  } = reactExports.useContext(ConfigContext);
  if (typeof column.filterDropdown === "function") {
    dropdownContent = column.filterDropdown({
      prefixCls: `${dropdownPrefixCls}-custom`,
      setSelectedKeys: (selectedKeys) => onSelectKeys({
        selectedKeys
      }),
      selectedKeys: getFilteredKeysSync(),
      confirm: doFilter,
      clearFilters: onReset,
      filters: column.filters,
      visible: mergedVisible,
      close: () => {
        triggerVisible(false);
      }
    });
  } else if (column.filterDropdown) {
    dropdownContent = column.filterDropdown;
  } else {
    const selectedKeys = getFilteredKeysSync() || [];
    const getFilterComponent = () => {
      var _a2;
      const empty = (_a2 = renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Table.filter")) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ reactExports.createElement(Empty, {
        image: Empty.PRESENTED_IMAGE_SIMPLE,
        description: locale2.filterEmptyText,
        imageStyle: {
          height: 24
        },
        style: {
          margin: 0,
          padding: "16px 0"
        }
      });
      if ((column.filters || []).length === 0) {
        return empty;
      }
      if (filterMode === "tree") {
        return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(FilterSearch, {
          filterSearch,
          value: searchValue,
          onChange: onSearch,
          tablePrefixCls,
          locale: locale2
        }), /* @__PURE__ */ reactExports.createElement("div", {
          className: `${tablePrefixCls}-filter-dropdown-tree`
        }, filterMultiple ? /* @__PURE__ */ reactExports.createElement(Checkbox, {
          checked: selectedKeys.length === flattenKeys(column.filters).length,
          indeterminate: selectedKeys.length > 0 && selectedKeys.length < flattenKeys(column.filters).length,
          className: `${tablePrefixCls}-filter-dropdown-checkall`,
          onChange: onCheckAll
        }, locale2.filterCheckall) : null, /* @__PURE__ */ reactExports.createElement(Tree$1, {
          checkable: true,
          selectable: false,
          blockNode: true,
          multiple: filterMultiple,
          checkStrictly: !filterMultiple,
          className: `${dropdownPrefixCls}-menu`,
          onCheck,
          checkedKeys: selectedKeys,
          selectedKeys,
          showIcon: false,
          treeData: getTreeData2({
            filters: column.filters
          }),
          autoExpandParent: true,
          defaultExpandAll: true,
          filterTreeNode: searchValue.trim() ? (node) => {
            if (typeof filterSearch === "function") {
              return filterSearch(searchValue, getFilterData2(node));
            }
            return searchValueMatched(searchValue, node.title);
          } : void 0
        })));
      }
      const items = renderFilterItems({
        filters: column.filters || [],
        filterSearch,
        prefixCls,
        filteredKeys: getFilteredKeysSync(),
        filterMultiple,
        searchValue
      });
      const isEmpty = items.every((item) => item === null);
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(FilterSearch, {
        filterSearch,
        value: searchValue,
        onChange: onSearch,
        tablePrefixCls,
        locale: locale2
      }), isEmpty ? empty : /* @__PURE__ */ reactExports.createElement(Menu, {
        selectable: true,
        multiple: filterMultiple,
        prefixCls: `${dropdownPrefixCls}-menu`,
        className: dropdownMenuClass,
        onSelect: onSelectKeys,
        onDeselect: onSelectKeys,
        selectedKeys,
        getPopupContainer,
        openKeys,
        onOpenChange,
        items
      }));
    };
    const getResetDisabled = () => {
      if (filterResetToDefaultFilteredValue) {
        return isEqual((defaultFilteredValue || []).map((key) => String(key)), selectedKeys, true);
      }
      return selectedKeys.length === 0;
    };
    dropdownContent = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, getFilterComponent(), /* @__PURE__ */ reactExports.createElement("div", {
      className: `${prefixCls}-dropdown-btns`
    }, /* @__PURE__ */ reactExports.createElement(Button$1, {
      type: "link",
      size: "small",
      disabled: getResetDisabled(),
      onClick: () => onReset()
    }, locale2.filterReset), /* @__PURE__ */ reactExports.createElement(Button$1, {
      type: "primary",
      size: "small",
      onClick: onConfirm
    }, locale2.filterConfirm)));
  }
  if (column.filterDropdown) {
    dropdownContent = /* @__PURE__ */ reactExports.createElement(OverrideProvider, {
      selectable: void 0
    }, dropdownContent);
  }
  const menu = () => /* @__PURE__ */ reactExports.createElement(FilterDropdownMenuWrapper, {
    className: `${prefixCls}-dropdown`
  }, dropdownContent);
  let filterIcon;
  if (typeof column.filterIcon === "function") {
    filterIcon = column.filterIcon(filtered);
  } else if (column.filterIcon) {
    filterIcon = column.filterIcon;
  } else {
    filterIcon = /* @__PURE__ */ reactExports.createElement(FilterFilled$1, null);
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-column`
  }, /* @__PURE__ */ reactExports.createElement("span", {
    className: `${tablePrefixCls}-column-title`
  }, children), /* @__PURE__ */ reactExports.createElement(Dropdown$1, {
    dropdownRender: menu,
    trigger: ["click"],
    open: mergedVisible,
    onOpenChange: onVisibleChange,
    getPopupContainer,
    placement: direction === "rtl" ? "bottomLeft" : "bottomRight",
    rootClassName
  }, /* @__PURE__ */ reactExports.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: classNames(`${prefixCls}-trigger`, {
      active: filtered
    }),
    onClick: (e) => {
      e.stopPropagation();
    }
  }, filterIcon)));
};
const collectFilterStates = (columns, init, pos) => {
  let filterStates = [];
  (columns || []).forEach((column, index) => {
    var _a;
    const columnPos = getColumnPos(index, pos);
    if (column.filters || "filterDropdown" in column || "onFilter" in column) {
      if ("filteredValue" in column) {
        let filteredValues = column.filteredValue;
        if (!("filterDropdown" in column)) {
          filteredValues = (_a = filteredValues === null || filteredValues === void 0 ? void 0 : filteredValues.map(String)) !== null && _a !== void 0 ? _a : filteredValues;
        }
        filterStates.push({
          column,
          key: getColumnKey(column, columnPos),
          filteredKeys: filteredValues,
          forceFiltered: column.filtered
        });
      } else {
        filterStates.push({
          column,
          key: getColumnKey(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : void 0,
          forceFiltered: column.filtered
        });
      }
    }
    if ("children" in column) {
      filterStates = [].concat(_toConsumableArray(filterStates), _toConsumableArray(collectFilterStates(column.children, init, columnPos)));
    }
  });
  return filterStates;
};
function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, locale2, triggerFilter, getPopupContainer, pos, rootClassName) {
  return columns.map((column, index) => {
    const columnPos = getColumnPos(index, pos);
    const {
      filterOnClose = true,
      filterMultiple = true,
      filterMode,
      filterSearch
    } = column;
    let newColumn = column;
    if (newColumn.filters || newColumn.filterDropdown) {
      const columnKey = getColumnKey(newColumn, columnPos);
      const filterState = filterStates.find((_ref) => {
        let {
          key
        } = _ref;
        return columnKey === key;
      });
      newColumn = Object.assign(Object.assign({}, newColumn), {
        title: (renderProps) => /* @__PURE__ */ reactExports.createElement(FilterDropdown, {
          tablePrefixCls: prefixCls,
          prefixCls: `${prefixCls}-filter`,
          dropdownPrefixCls,
          column: newColumn,
          columnKey,
          filterState,
          filterOnClose,
          filterMultiple,
          filterMode,
          filterSearch,
          triggerFilter,
          locale: locale2,
          getPopupContainer,
          rootClassName
        }, renderColumnTitle(column.title, renderProps))
      });
    }
    if ("children" in newColumn) {
      newColumn = Object.assign(Object.assign({}, newColumn), {
        children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, locale2, triggerFilter, getPopupContainer, columnPos, rootClassName)
      });
    }
    return newColumn;
  });
}
const generateFilterInfo = (filterStates) => {
  const currentFilters = {};
  filterStates.forEach((_ref2) => {
    let {
      key,
      filteredKeys,
      column
    } = _ref2;
    const keyAsString = key;
    const {
      filters,
      filterDropdown
    } = column;
    if (filterDropdown) {
      currentFilters[keyAsString] = filteredKeys || null;
    } else if (Array.isArray(filteredKeys)) {
      const keys = flattenKeys(filters);
      currentFilters[keyAsString] = keys.filter((originKey) => filteredKeys.includes(String(originKey)));
    } else {
      currentFilters[keyAsString] = null;
    }
  });
  return currentFilters;
};
const getFilterData = (data, filterStates, childrenColumnName) => {
  const filterDatas = filterStates.reduce((currentData, filterState) => {
    const {
      column: {
        onFilter,
        filters
      },
      filteredKeys
    } = filterState;
    if (onFilter && filteredKeys && filteredKeys.length) {
      return currentData.map((record) => Object.assign({}, record)).filter((record) => filteredKeys.some((key) => {
        const keys = flattenKeys(filters);
        const keyIndex = keys.findIndex((k) => String(k) === String(key));
        const realKey = keyIndex !== -1 ? keys[keyIndex] : key;
        if (record[childrenColumnName]) {
          record[childrenColumnName] = getFilterData(record[childrenColumnName], filterStates, childrenColumnName);
        }
        return onFilter(realKey, record);
      }));
    }
    return currentData;
  }, data);
  return filterDatas;
};
const getMergedColumns = (rawMergedColumns) => rawMergedColumns.flatMap((column) => {
  if ("children" in column) {
    return [column].concat(_toConsumableArray(getMergedColumns(column.children || [])));
  }
  return [column];
});
const useFilter = (props) => {
  const {
    prefixCls,
    dropdownPrefixCls,
    mergedColumns: rawMergedColumns,
    onFilterChange,
    getPopupContainer,
    locale: tableLocale,
    rootClassName
  } = props;
  devUseWarning();
  const mergedColumns = reactExports.useMemo(() => getMergedColumns(rawMergedColumns || []), [rawMergedColumns]);
  const [filterStates, setFilterStates] = reactExports.useState(() => collectFilterStates(mergedColumns, true));
  const mergedFilterStates = reactExports.useMemo(() => {
    const collectedStates = collectFilterStates(mergedColumns, false);
    if (collectedStates.length === 0) {
      return collectedStates;
    }
    let filteredKeysIsAllNotControlled = true;
    collectedStates.forEach((_ref3) => {
      let {
        filteredKeys
      } = _ref3;
      if (filteredKeys !== void 0) {
        filteredKeysIsAllNotControlled = false;
      }
    });
    if (filteredKeysIsAllNotControlled) {
      const keyList = (mergedColumns || []).map((column, index) => getColumnKey(column, getColumnPos(index)));
      return filterStates.filter((_ref4) => {
        let {
          key
        } = _ref4;
        return keyList.includes(key);
      }).map((item) => {
        const col = mergedColumns[keyList.findIndex((key) => key === item.key)];
        return Object.assign(Object.assign({}, item), {
          column: Object.assign(Object.assign({}, item.column), col),
          forceFiltered: col.filtered
        });
      });
    }
    return collectedStates;
  }, [mergedColumns, filterStates]);
  const filters = reactExports.useMemo(() => generateFilterInfo(mergedFilterStates), [mergedFilterStates]);
  const triggerFilter = (filterState) => {
    const newFilterStates = mergedFilterStates.filter((_ref5) => {
      let {
        key
      } = _ref5;
      return key !== filterState.key;
    });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
  };
  const transformColumns = (innerColumns) => injectFilter(prefixCls, dropdownPrefixCls, innerColumns, mergedFilterStates, tableLocale, triggerFilter, getPopupContainer, void 0, rootClassName);
  return [transformColumns, mergedFilterStates, filters];
};
const useLazyKVMap = (data, childrenColumnName, getRowKey) => {
  const mapCacheRef = reactExports.useRef({});
  function getRecordByKey(key) {
    var _a;
    if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
      let dig = function(records) {
        records.forEach((record, index) => {
          const rowKey = getRowKey(record, index);
          kvMap.set(rowKey, record);
          if (record && typeof record === "object" && childrenColumnName in record) {
            dig(record[childrenColumnName] || []);
          }
        });
      };
      const kvMap = /* @__PURE__ */ new Map();
      dig(data);
      mapCacheRef.current = {
        data,
        childrenColumnName,
        kvMap,
        getRowKey
      };
    }
    return (_a = mapCacheRef.current.kvMap) === null || _a === void 0 ? void 0 : _a.get(key);
  }
  return [getRecordByKey];
};
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_PAGE_SIZE = 10;
function getPaginationParam(mergedPagination, pagination) {
  const param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  const paginationObj = pagination && typeof pagination === "object" ? pagination : {};
  Object.keys(paginationObj).forEach((pageProp) => {
    const value = mergedPagination[pageProp];
    if (typeof value !== "function") {
      param[pageProp] = value;
    }
  });
  return param;
}
function usePagination(total, onChange, pagination) {
  const _a = pagination && typeof pagination === "object" ? pagination : {}, {
    total: paginationTotal = 0
  } = _a, paginationObj = __rest$2(_a, ["total"]);
  const [innerPagination, setInnerPagination] = reactExports.useState(() => ({
    current: "defaultCurrent" in paginationObj ? paginationObj.defaultCurrent : 1,
    pageSize: "defaultPageSize" in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
  }));
  const mergedPagination = extendsObject(innerPagination, paginationObj, {
    total: paginationTotal > 0 ? paginationTotal : total
  });
  const maxPage = Math.ceil((paginationTotal || total) / mergedPagination.pageSize);
  if (mergedPagination.current > maxPage) {
    mergedPagination.current = maxPage || 1;
  }
  const refreshPagination = (current, pageSize) => {
    setInnerPagination({
      current: current !== null && current !== void 0 ? current : 1,
      pageSize: pageSize || mergedPagination.pageSize
    });
  };
  const onInternalChange = (current, pageSize) => {
    var _a2;
    if (pagination) {
      (_a2 = pagination.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(pagination, current, pageSize);
    }
    refreshPagination(current, pageSize);
    onChange(current, pageSize || (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize));
  };
  if (pagination === false) {
    return [{}, () => {
    }];
  }
  return [Object.assign(Object.assign({}, mergedPagination), {
    onChange: onInternalChange
  }), refreshPagination];
}
const ASCEND = "ascend";
const DESCEND = "descend";
const getMultiplePriority = (column) => {
  if (typeof column.sorter === "object" && typeof column.sorter.multiple === "number") {
    return column.sorter.multiple;
  }
  return false;
};
const getSortFunction = (sorter) => {
  if (typeof sorter === "function") {
    return sorter;
  }
  if (sorter && typeof sorter === "object" && sorter.compare) {
    return sorter.compare;
  }
  return false;
};
const nextSortDirection = (sortDirections, current) => {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
};
const collectSortStates = (columns, init, pos) => {
  let sortStates = [];
  const pushState = (column, columnPos) => {
    sortStates.push({
      column,
      key: getColumnKey(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  };
  (columns || []).forEach((column, index) => {
    const columnPos = getColumnPos(index, pos);
    if (column.children) {
      if ("sortOrder" in column) {
        pushState(column, columnPos);
      }
      sortStates = [].concat(_toConsumableArray(sortStates), _toConsumableArray(collectSortStates(column.children, init, columnPos)));
    } else if (column.sorter) {
      if ("sortOrder" in column) {
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        sortStates.push({
          column,
          key: getColumnKey(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
};
const injectSorter = (prefixCls, columns, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) => {
  const finalColumns = (columns || []).map((column, index) => {
    const columnPos = getColumnPos(index, pos);
    let newColumn = column;
    if (newColumn.sorter) {
      const sortDirections = newColumn.sortDirections || defaultSortDirections;
      const showSorterTooltip = newColumn.showSorterTooltip === void 0 ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      const columnKey = getColumnKey(newColumn, columnPos);
      const sorterState = sorterStates.find((_ref) => {
        let {
          key
        } = _ref;
        return key === columnKey;
      });
      const sortOrder = sorterState ? sorterState.sortOrder : null;
      const nextSortOrder = nextSortDirection(sortDirections, sortOrder);
      let sorter;
      if (column.sortIcon) {
        sorter = column.sortIcon({
          sortOrder
        });
      } else {
        const upNode = sortDirections.includes(ASCEND) && /* @__PURE__ */ reactExports.createElement(CaretUpOutlined$1, {
          className: classNames(`${prefixCls}-column-sorter-up`, {
            active: sortOrder === ASCEND
          })
        });
        const downNode = sortDirections.includes(DESCEND) && /* @__PURE__ */ reactExports.createElement(CaretDownOutlined$1, {
          className: classNames(`${prefixCls}-column-sorter-down`, {
            active: sortOrder === DESCEND
          })
        });
        sorter = /* @__PURE__ */ reactExports.createElement("span", {
          className: classNames(`${prefixCls}-column-sorter`, {
            [`${prefixCls}-column-sorter-full`]: !!(upNode && downNode)
          })
        }, /* @__PURE__ */ reactExports.createElement("span", {
          className: `${prefixCls}-column-sorter-inner`,
          "aria-hidden": "true"
        }, upNode, downNode));
      }
      const {
        cancelSort,
        triggerAsc,
        triggerDesc
      } = tableLocale || {};
      let sortTip = cancelSort;
      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }
      const tooltipProps = typeof showSorterTooltip === "object" ? Object.assign({
        title: sortTip
      }, showSorterTooltip) : {
        title: sortTip
      };
      newColumn = Object.assign(Object.assign({}, newColumn), {
        className: classNames(newColumn.className, {
          [`${prefixCls}-column-sort`]: sortOrder
        }),
        title: (renderProps) => {
          const columnSortersClass = `${prefixCls}-column-sorters`;
          const renderColumnTitleWrapper = /* @__PURE__ */ reactExports.createElement("span", {
            className: `${prefixCls}-column-title`
          }, renderColumnTitle(column.title, renderProps));
          const renderSortTitle = /* @__PURE__ */ reactExports.createElement("div", {
            className: columnSortersClass
          }, renderColumnTitleWrapper, sorter);
          if (showSorterTooltip) {
            if (typeof showSorterTooltip !== "boolean" && (showSorterTooltip === null || showSorterTooltip === void 0 ? void 0 : showSorterTooltip.target) === "sorter-icon") {
              return /* @__PURE__ */ reactExports.createElement("div", {
                className: `${columnSortersClass} ${prefixCls}-column-sorters-tooltip-target-sorter`
              }, renderColumnTitleWrapper, /* @__PURE__ */ reactExports.createElement(Tooltip, Object.assign({}, tooltipProps), sorter));
            }
            return /* @__PURE__ */ reactExports.createElement(Tooltip, Object.assign({}, tooltipProps), renderSortTitle);
          }
          return renderSortTitle;
        },
        onHeaderCell: (col) => {
          var _a;
          const cell = ((_a = column.onHeaderCell) === null || _a === void 0 ? void 0 : _a.call(column, col)) || {};
          const originOnClick = cell.onClick;
          const originOKeyDown = cell.onKeyDown;
          cell.onClick = (event) => {
            triggerSorter({
              column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });
            originOnClick === null || originOnClick === void 0 ? void 0 : originOnClick(event);
          };
          cell.onKeyDown = (event) => {
            if (event.keyCode === KeyCode.ENTER) {
              triggerSorter({
                column,
                key: columnKey,
                sortOrder: nextSortOrder,
                multiplePriority: getMultiplePriority(column)
              });
              originOKeyDown === null || originOKeyDown === void 0 ? void 0 : originOKeyDown(event);
            }
          };
          const renderTitle = safeColumnTitle(column.title, {});
          const displayTitle = renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle.toString();
          if (sortOrder) {
            cell["aria-sort"] = sortOrder === "ascend" ? "ascending" : "descending";
          } else {
            cell["aria-label"] = displayTitle || "";
          }
          cell.className = classNames(cell.className, `${prefixCls}-column-has-sorters`);
          cell.tabIndex = 0;
          if (column.ellipsis) {
            cell.title = (renderTitle !== null && renderTitle !== void 0 ? renderTitle : "").toString();
          }
          return cell;
        }
      });
    }
    if ("children" in newColumn) {
      newColumn = Object.assign(Object.assign({}, newColumn), {
        children: injectSorter(prefixCls, newColumn.children, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
      });
    }
    return newColumn;
  });
  return finalColumns;
};
const stateToInfo = (sorterStates) => {
  const {
    column,
    sortOrder
  } = sorterStates;
  return {
    column,
    order: sortOrder,
    field: column.dataIndex,
    columnKey: column.key
  };
};
const generateSorterInfo = (sorterStates) => {
  const list = sorterStates.filter((_ref2) => {
    let {
      sortOrder
    } = _ref2;
    return sortOrder;
  }).map(stateToInfo);
  if (list.length === 0 && sorterStates.length) {
    const lastIndex = sorterStates.length - 1;
    return Object.assign(Object.assign({}, stateToInfo(sorterStates[lastIndex])), {
      column: void 0
    });
  }
  if (list.length <= 1) {
    return list[0] || {};
  }
  return list;
};
const getSortData = (data, sortStates, childrenColumnName) => {
  const innerSorterStates = sortStates.slice().sort((a, b) => b.multiplePriority - a.multiplePriority);
  const cloneData = data.slice();
  const runningSorters = innerSorterStates.filter((_ref3) => {
    let {
      column: {
        sorter
      },
      sortOrder
    } = _ref3;
    return getSortFunction(sorter) && sortOrder;
  });
  if (!runningSorters.length) {
    return cloneData;
  }
  return cloneData.sort((record1, record2) => {
    for (let i = 0; i < runningSorters.length; i += 1) {
      const sorterState = runningSorters[i];
      const {
        column: {
          sorter
        },
        sortOrder
      } = sorterState;
      const compareFn = getSortFunction(sorter);
      if (compareFn && sortOrder) {
        const compareResult = compareFn(record1, record2, sortOrder);
        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }
    return 0;
  }).map((record) => {
    const subRecords = record[childrenColumnName];
    if (subRecords) {
      return Object.assign(Object.assign({}, record), {
        [childrenColumnName]: getSortData(subRecords, sortStates, childrenColumnName)
      });
    }
    return record;
  });
};
const useFilterSorter = (props) => {
  const {
    prefixCls,
    mergedColumns,
    sortDirections,
    tableLocale,
    showSorterTooltip,
    onSorterChange
  } = props;
  const [sortStates, setSortStates] = reactExports.useState(collectSortStates(mergedColumns, true));
  const getColumnKeys = (columns, pos) => {
    const newKeys = [];
    columns.forEach((item, index) => {
      const columnPos = getColumnPos(index, pos);
      newKeys.push(getColumnKey(item, columnPos));
      if (Array.isArray(item.children)) {
        const childKeys = getColumnKeys(item.children, columnPos);
        newKeys.push.apply(newKeys, _toConsumableArray(childKeys));
      }
    });
    return newKeys;
  };
  const mergedSorterStates = reactExports.useMemo(() => {
    let validate = true;
    const collectedStates = collectSortStates(mergedColumns, false);
    if (!collectedStates.length) {
      const mergedColumnsKeys = getColumnKeys(mergedColumns);
      return sortStates.filter((_ref4) => {
        let {
          key
        } = _ref4;
        return mergedColumnsKeys.includes(key);
      });
    }
    const validateStates = [];
    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push(Object.assign(Object.assign({}, state), {
          sortOrder: null
        }));
      }
    }
    let multipleMode = null;
    collectedStates.forEach((state) => {
      if (multipleMode === null) {
        patchStates(state);
        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  }, [mergedColumns, sortStates]);
  const columnTitleSorterProps = reactExports.useMemo(() => {
    var _a, _b;
    const sortColumns = mergedSorterStates.map((_ref5) => {
      let {
        column,
        sortOrder
      } = _ref5;
      return {
        column,
        order: sortOrder
      };
    });
    return {
      sortColumns,
      // Legacy
      sortColumn: (_a = sortColumns[0]) === null || _a === void 0 ? void 0 : _a.column,
      sortOrder: (_b = sortColumns[0]) === null || _b === void 0 ? void 0 : _b.order
    };
  }, [mergedSorterStates]);
  const triggerSorter = (sortState) => {
    let newSorterStates;
    if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [].concat(_toConsumableArray(mergedSorterStates.filter((_ref6) => {
        let {
          key
        } = _ref6;
        return key !== sortState.key;
      })), [sortState]);
    }
    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  };
  const transformColumns = (innerColumns) => injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
  const getSorters = () => generateSorterInfo(mergedSorterStates);
  return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
};
const fillTitle = (columns, columnTitleProps) => {
  const finalColumns = columns.map((column) => {
    const cloneColumn = Object.assign({}, column);
    cloneColumn.title = renderColumnTitle(column.title, columnTitleProps);
    if ("children" in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }
    return cloneColumn;
  });
  return finalColumns;
};
const useTitleColumns = (columnTitleProps) => {
  const filledColumns = reactExports.useCallback((columns) => fillTitle(columns, columnTitleProps), [columnTitleProps]);
  return [filledColumns];
};
const RcTable = genTable((prev, next) => {
  const {
    _renderTimes: prevRenderTimes
  } = prev;
  const {
    _renderTimes: nextRenderTimes
  } = next;
  return prevRenderTimes !== nextRenderTimes;
});
const RcVirtualTable = genVirtualTable((prev, next) => {
  const {
    _renderTimes: prevRenderTimes
  } = prev;
  const {
    _renderTimes: nextRenderTimes
  } = next;
  return prevRenderTimes !== nextRenderTimes;
});
const genBorderedStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    lineType,
    tableBorderColor,
    tableHeaderBg,
    tablePaddingVertical,
    tablePaddingHorizontal,
    calc
  } = token;
  const tableBorder = `${unit(lineWidth)} ${lineType} ${tableBorderColor}`;
  const getSizeBorderStyle = (size, paddingVertical, paddingHorizontal) => ({
    [`&${componentCls}-${size}`]: {
      [`> ${componentCls}-container`]: {
        [`> ${componentCls}-content, > ${componentCls}-body`]: {
          [`
            > table > tbody > tr > th,
            > table > tbody > tr > td
          `]: {
            [`> ${componentCls}-expanded-row-fixed`]: {
              margin: `${unit(calc(paddingVertical).mul(-1).equal())}
              ${unit(calc(calc(paddingHorizontal).add(lineWidth)).mul(-1).equal())}`
            }
          }
        }
      }
    }
  });
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}${componentCls}-bordered`]: Object.assign(Object.assign(Object.assign({
        // ============================ Title =============================
        [`> ${componentCls}-title`]: {
          border: tableBorder,
          borderBottom: 0
        },
        // ============================ Content ============================
        [`> ${componentCls}-container`]: {
          borderInlineStart: tableBorder,
          borderTop: tableBorder,
          [`
            > ${componentCls}-content,
            > ${componentCls}-header,
            > ${componentCls}-body,
            > ${componentCls}-summary
          `]: {
            "> table": {
              // ============================= Cell =============================
              [`
                > thead > tr > th,
                > thead > tr > td,
                > tbody > tr > th,
                > tbody > tr > td,
                > tfoot > tr > th,
                > tfoot > tr > td
              `]: {
                borderInlineEnd: tableBorder
              },
              // ============================ Header ============================
              "> thead": {
                "> tr:not(:last-child) > th": {
                  borderBottom: tableBorder
                },
                "> tr > th::before": {
                  backgroundColor: "transparent !important"
                }
              },
              // Fixed right should provides additional border
              [`
                > thead > tr,
                > tbody > tr,
                > tfoot > tr
              `]: {
                [`> ${componentCls}-cell-fix-right-first::after`]: {
                  borderInlineEnd: tableBorder
                }
              },
              // ========================== Expandable ==========================
              [`
                > tbody > tr > th,
                > tbody > tr > td
              `]: {
                [`> ${componentCls}-expanded-row-fixed`]: {
                  margin: `${unit(calc(tablePaddingVertical).mul(-1).equal())} ${unit(calc(calc(tablePaddingHorizontal).add(lineWidth)).mul(-1).equal())}`,
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: lineWidth,
                    bottom: 0,
                    borderInlineEnd: tableBorder,
                    content: '""'
                  }
                }
              }
            }
          }
        },
        // ============================ Scroll ============================
        [`&${componentCls}-scroll-horizontal`]: {
          [`> ${componentCls}-container > ${componentCls}-body`]: {
            "> table > tbody": {
              [`
                > tr${componentCls}-expanded-row,
                > tr${componentCls}-placeholder
              `]: {
                "> th, > td": {
                  borderInlineEnd: 0
                }
              }
            }
          }
        }
      }, getSizeBorderStyle("middle", token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle)), getSizeBorderStyle("small", token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall)), {
        // ============================ Footer ============================
        [`> ${componentCls}-footer`]: {
          border: tableBorder,
          borderTop: 0
        }
      }),
      // ============================ Nested ============================
      [`${componentCls}-cell`]: {
        [`${componentCls}-container:first-child`]: {
          // :first-child to avoid the case when bordered and title is set
          borderTop: 0
        },
        // https://github.com/ant-design/ant-design/issues/35577
        "&-scrollbar:not([rowspan])": {
          boxShadow: `0 ${unit(lineWidth)} 0 ${unit(lineWidth)} ${tableHeaderBg}`
        }
      },
      [`${componentCls}-bordered ${componentCls}-cell-scrollbar`]: {
        borderInlineEnd: tableBorder
      }
    }
  };
};
const genEllipsisStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-cell-ellipsis`]: Object.assign(Object.assign({}, textEllipsis), {
        wordBreak: "keep-all",
        // Fixed first or last should special process
        [`
          &${componentCls}-cell-fix-left-last,
          &${componentCls}-cell-fix-right-first
        `]: {
          overflow: "visible",
          [`${componentCls}-cell-content`]: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        },
        [`${componentCls}-column-title`]: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordBreak: "keep-all"
        }
      })
    }
  };
};
const genEmptyStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-tbody > tr${componentCls}-placeholder`]: {
        textAlign: "center",
        color: token.colorTextDisabled,
        [`
          &:hover > th,
          &:hover > td,
        `]: {
          background: token.colorBgContainer
        }
      }
    }
  };
};
const genExpandStyle = (token) => {
  const {
    componentCls,
    antCls,
    motionDurationSlow,
    lineWidth,
    paddingXS,
    lineType,
    tableBorderColor,
    tableExpandIconBg,
    tableExpandColumnWidth,
    borderRadius,
    tablePaddingVertical,
    tablePaddingHorizontal,
    tableExpandedRowBg,
    paddingXXS,
    expandIconMarginTop,
    expandIconSize,
    expandIconHalfInner,
    expandIconScale,
    calc
  } = token;
  const tableBorder = `${unit(lineWidth)} ${lineType} ${tableBorderColor}`;
  const expandIconLineOffset = calc(paddingXXS).sub(lineWidth).equal();
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-expand-icon-col`]: {
        width: tableExpandColumnWidth
      },
      [`${componentCls}-row-expand-icon-cell`]: {
        textAlign: "center",
        [`${componentCls}-row-expand-icon`]: {
          display: "inline-flex",
          float: "none",
          verticalAlign: "sub"
        }
      },
      [`${componentCls}-row-indent`]: {
        height: 1,
        float: "left"
      },
      [`${componentCls}-row-expand-icon`]: Object.assign(Object.assign({}, operationUnit(token)), {
        position: "relative",
        float: "left",
        boxSizing: "border-box",
        width: expandIconSize,
        height: expandIconSize,
        padding: 0,
        color: "inherit",
        lineHeight: unit(expandIconSize),
        background: tableExpandIconBg,
        border: tableBorder,
        borderRadius,
        transform: `scale(${expandIconScale})`,
        transition: `all ${motionDurationSlow}`,
        userSelect: "none",
        "&:focus, &:hover, &:active": {
          borderColor: "currentcolor"
        },
        "&::before, &::after": {
          position: "absolute",
          background: "currentcolor",
          transition: `transform ${motionDurationSlow} ease-out`,
          content: '""'
        },
        "&::before": {
          top: expandIconHalfInner,
          insetInlineEnd: expandIconLineOffset,
          insetInlineStart: expandIconLineOffset,
          height: lineWidth
        },
        "&::after": {
          top: expandIconLineOffset,
          bottom: expandIconLineOffset,
          insetInlineStart: expandIconHalfInner,
          width: lineWidth,
          transform: "rotate(90deg)"
        },
        // Motion effect
        "&-collapsed::before": {
          transform: "rotate(-180deg)"
        },
        "&-collapsed::after": {
          transform: "rotate(0deg)"
        },
        "&-spaced": {
          "&::before, &::after": {
            display: "none",
            content: "none"
          },
          background: "transparent",
          border: 0,
          visibility: "hidden"
        }
      }),
      [`${componentCls}-row-indent + ${componentCls}-row-expand-icon`]: {
        marginTop: expandIconMarginTop,
        marginInlineEnd: paddingXS
      },
      [`tr${componentCls}-expanded-row`]: {
        "&, &:hover": {
          "> th, > td": {
            background: tableExpandedRowBg
          }
        },
        // https://github.com/ant-design/ant-design/issues/25573
        [`${antCls}-descriptions-view`]: {
          display: "flex",
          table: {
            flex: "auto",
            width: "100%"
          }
        }
      },
      // With fixed
      [`${componentCls}-expanded-row-fixed`]: {
        position: "relative",
        margin: `${unit(calc(tablePaddingVertical).mul(-1).equal())} ${unit(calc(tablePaddingHorizontal).mul(-1).equal())}`,
        padding: `${unit(tablePaddingVertical)} ${unit(tablePaddingHorizontal)}`
      }
    }
  };
};
const genFilterStyle = (token) => {
  const {
    componentCls,
    antCls,
    iconCls,
    tableFilterDropdownWidth,
    tableFilterDropdownSearchWidth,
    paddingXXS,
    paddingXS,
    colorText,
    lineWidth,
    lineType,
    tableBorderColor,
    headerIconColor,
    fontSizeSM,
    tablePaddingHorizontal,
    borderRadius,
    motionDurationSlow,
    colorTextDescription,
    colorPrimary,
    tableHeaderFilterActiveBg,
    colorTextDisabled,
    tableFilterDropdownBg,
    tableFilterDropdownHeight,
    controlItemBgHover,
    controlItemBgActive,
    boxShadowSecondary,
    filterDropdownMenuBg,
    calc
  } = token;
  const dropdownPrefixCls = `${antCls}-dropdown`;
  const tableFilterDropdownPrefixCls = `${componentCls}-filter-dropdown`;
  const treePrefixCls = `${antCls}-tree`;
  const tableBorder = `${unit(lineWidth)} ${lineType} ${tableBorderColor}`;
  return [
    {
      [`${componentCls}-wrapper`]: {
        [`${componentCls}-filter-column`]: {
          display: "flex",
          justifyContent: "space-between"
        },
        [`${componentCls}-filter-trigger`]: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginBlock: calc(paddingXXS).mul(-1).equal(),
          marginInline: `${unit(paddingXXS)} ${unit(calc(tablePaddingHorizontal).div(2).mul(-1).equal())}`,
          padding: `0 ${unit(paddingXXS)}`,
          color: headerIconColor,
          fontSize: fontSizeSM,
          borderRadius,
          cursor: "pointer",
          transition: `all ${motionDurationSlow}`,
          "&:hover": {
            color: colorTextDescription,
            background: tableHeaderFilterActiveBg
          },
          "&.active": {
            color: colorPrimary
          }
        }
      }
    },
    {
      // Dropdown
      [`${antCls}-dropdown`]: {
        [tableFilterDropdownPrefixCls]: Object.assign(Object.assign({}, resetComponent(token)), {
          minWidth: tableFilterDropdownWidth,
          backgroundColor: tableFilterDropdownBg,
          borderRadius,
          boxShadow: boxShadowSecondary,
          overflow: "hidden",
          // Reset menu
          [`${dropdownPrefixCls}-menu`]: {
            // https://github.com/ant-design/ant-design/issues/4916
            // https://github.com/ant-design/ant-design/issues/19542
            maxHeight: tableFilterDropdownHeight,
            overflowX: "hidden",
            border: 0,
            boxShadow: "none",
            borderRadius: "unset",
            backgroundColor: filterDropdownMenuBg,
            "&:empty::after": {
              display: "block",
              padding: `${unit(paddingXS)} 0`,
              color: colorTextDisabled,
              fontSize: fontSizeSM,
              textAlign: "center",
              content: '"Not Found"'
            }
          },
          [`${tableFilterDropdownPrefixCls}-tree`]: {
            paddingBlock: `${unit(paddingXS)} 0`,
            paddingInline: paddingXS,
            [treePrefixCls]: {
              padding: 0
            },
            [`${treePrefixCls}-treenode ${treePrefixCls}-node-content-wrapper:hover`]: {
              backgroundColor: controlItemBgHover
            },
            [`${treePrefixCls}-treenode-checkbox-checked ${treePrefixCls}-node-content-wrapper`]: {
              "&, &:hover": {
                backgroundColor: controlItemBgActive
              }
            }
          },
          [`${tableFilterDropdownPrefixCls}-search`]: {
            padding: paddingXS,
            borderBottom: tableBorder,
            "&-input": {
              input: {
                minWidth: tableFilterDropdownSearchWidth
              },
              [iconCls]: {
                color: colorTextDisabled
              }
            }
          },
          [`${tableFilterDropdownPrefixCls}-checkall`]: {
            width: "100%",
            marginBottom: paddingXXS,
            marginInlineStart: paddingXXS
          },
          // Operation
          [`${tableFilterDropdownPrefixCls}-btns`]: {
            display: "flex",
            justifyContent: "space-between",
            padding: `${unit(calc(paddingXS).sub(lineWidth).equal())} ${unit(paddingXS)}`,
            overflow: "hidden",
            borderTop: tableBorder
          }
        })
      }
    },
    // Dropdown Menu & SubMenu
    {
      // submenu of table filter dropdown
      [`${antCls}-dropdown ${tableFilterDropdownPrefixCls}, ${tableFilterDropdownPrefixCls}-submenu`]: {
        // Checkbox
        [`${antCls}-checkbox-wrapper + span`]: {
          paddingInlineStart: paddingXS,
          color: colorText
        },
        "> ul": {
          maxHeight: "calc(100vh - 130px)",
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    }
  ];
};
const genFixedStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    colorSplit,
    motionDurationSlow,
    zIndexTableFixed: zIndexTableFixed2,
    tableBg,
    zIndexTableSticky,
    calc
  } = token;
  const shadowColor = colorSplit;
  return {
    [`${componentCls}-wrapper`]: {
      [`
        ${componentCls}-cell-fix-left,
        ${componentCls}-cell-fix-right
      `]: {
        position: "sticky !important",
        zIndex: zIndexTableFixed2,
        background: tableBg
      },
      [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after
      `]: {
        position: "absolute",
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: calc(lineWidth).mul(-1).equal(),
        width: 30,
        transform: "translateX(100%)",
        transition: `box-shadow ${motionDurationSlow}`,
        content: '""',
        pointerEvents: "none"
      },
      [`${componentCls}-cell-fix-left-all::after`]: {
        display: "none"
      },
      [`
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
        position: "absolute",
        top: 0,
        bottom: calc(lineWidth).mul(-1).equal(),
        left: {
          _skip_check_: true,
          value: 0
        },
        width: 30,
        transform: "translateX(-100%)",
        transition: `box-shadow ${motionDurationSlow}`,
        content: '""',
        pointerEvents: "none"
      },
      [`${componentCls}-container`]: {
        position: "relative",
        "&::before, &::after": {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: calc(zIndexTableSticky).add(1).equal({
            unit: false
          }),
          width: 30,
          transition: `box-shadow ${motionDurationSlow}`,
          content: '""',
          pointerEvents: "none"
        },
        "&::before": {
          insetInlineStart: 0
        },
        "&::after": {
          insetInlineEnd: 0
        }
      },
      [`${componentCls}-ping-left`]: {
        [`&:not(${componentCls}-has-fix-left) ${componentCls}-container::before`]: {
          boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
        },
        [`
          ${componentCls}-cell-fix-left-first::after,
          ${componentCls}-cell-fix-left-last::after
        `]: {
          boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
        },
        [`${componentCls}-cell-fix-left-last::before`]: {
          backgroundColor: "transparent !important"
        }
      },
      [`${componentCls}-ping-right`]: {
        [`&:not(${componentCls}-has-fix-right) ${componentCls}-container::after`]: {
          boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
        },
        [`
          ${componentCls}-cell-fix-right-first::after,
          ${componentCls}-cell-fix-right-last::after
        `]: {
          boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
        }
      },
      // Gapped fixed Columns do not show the shadow
      [`${componentCls}-fixed-column-gapped`]: {
        [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after,
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
          boxShadow: "none"
        }
      }
    }
  };
};
const genPaginationStyle = (token) => {
  const {
    componentCls,
    antCls,
    margin
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Pagination ==========================
      [`${componentCls}-pagination${antCls}-pagination`]: {
        margin: `${unit(margin)} 0`
      },
      [`${componentCls}-pagination`]: {
        display: "flex",
        flexWrap: "wrap",
        rowGap: token.paddingXS,
        "> *": {
          flex: "none"
        },
        "&-left": {
          justifyContent: "flex-start"
        },
        "&-center": {
          justifyContent: "center"
        },
        "&-right": {
          justifyContent: "flex-end"
        }
      }
    }
  };
};
const genRadiusStyle = (token) => {
  const {
    componentCls,
    tableRadius
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [componentCls]: {
        // https://github.com/ant-design/ant-design/issues/39115#issuecomment-1362314574
        [`${componentCls}-title, ${componentCls}-header`]: {
          borderRadius: `${unit(tableRadius)} ${unit(tableRadius)} 0 0`
        },
        [`${componentCls}-title + ${componentCls}-container`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          // https://github.com/ant-design/ant-design/issues/41975
          [`${componentCls}-header, table`]: {
            borderRadius: 0
          },
          "table > thead > tr:first-child": {
            "th:first-child, th:last-child, td:first-child, td:last-child": {
              borderRadius: 0
            }
          }
        },
        "&-container": {
          borderStartStartRadius: tableRadius,
          borderStartEndRadius: tableRadius,
          "table > thead > tr:first-child": {
            "> *:first-child": {
              borderStartStartRadius: tableRadius
            },
            "> *:last-child": {
              borderStartEndRadius: tableRadius
            }
          }
        },
        "&-footer": {
          borderRadius: `0 0 ${unit(tableRadius)} ${unit(tableRadius)}`
        }
      }
    }
  };
};
const genStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-wrapper-rtl`]: {
      direction: "rtl",
      table: {
        direction: "rtl"
      },
      [`${componentCls}-pagination-left`]: {
        justifyContent: "flex-end"
      },
      [`${componentCls}-pagination-right`]: {
        justifyContent: "flex-start"
      },
      [`${componentCls}-row-expand-icon`]: {
        float: "right",
        "&::after": {
          transform: "rotate(-90deg)"
        },
        "&-collapsed::before": {
          transform: "rotate(180deg)"
        },
        "&-collapsed::after": {
          transform: "rotate(0deg)"
        }
      },
      [`${componentCls}-container`]: {
        "&::before": {
          insetInlineStart: "unset",
          insetInlineEnd: 0
        },
        "&::after": {
          insetInlineStart: 0,
          insetInlineEnd: "unset"
        },
        [`${componentCls}-row-indent`]: {
          float: "right"
        }
      }
    }
  };
};
const genSelectionStyle = (token) => {
  const {
    componentCls,
    antCls,
    iconCls,
    fontSizeIcon,
    padding,
    paddingXS,
    headerIconColor,
    headerIconHoverColor,
    tableSelectionColumnWidth,
    tableSelectedRowBg,
    tableSelectedRowHoverBg,
    tableRowHoverBg,
    tablePaddingHorizontal,
    calc
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Selections ==========================
      [`${componentCls}-selection-col`]: {
        width: tableSelectionColumnWidth,
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).equal()
        }
      },
      [`${componentCls}-bordered ${componentCls}-selection-col`]: {
        width: calc(tableSelectionColumnWidth).add(calc(paddingXS).mul(2)).equal(),
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).add(calc(paddingXS).mul(2)).equal()
        }
      },
      [`
        table tr th${componentCls}-selection-column,
        table tr td${componentCls}-selection-column,
        ${componentCls}-selection-column
      `]: {
        paddingInlineEnd: token.paddingXS,
        paddingInlineStart: token.paddingXS,
        textAlign: "center",
        [`${antCls}-radio-wrapper`]: {
          marginInlineEnd: 0
        }
      },
      [`table tr th${componentCls}-selection-column${componentCls}-cell-fix-left`]: {
        zIndex: calc(token.zIndexTableFixed).add(1).equal({
          unit: false
        })
      },
      [`table tr th${componentCls}-selection-column::after`]: {
        backgroundColor: "transparent !important"
      },
      [`${componentCls}-selection`]: {
        position: "relative",
        display: "inline-flex",
        flexDirection: "column"
      },
      [`${componentCls}-selection-extra`]: {
        position: "absolute",
        top: 0,
        zIndex: 1,
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        marginInlineStart: "100%",
        paddingInlineStart: unit(calc(tablePaddingHorizontal).div(4).equal()),
        [iconCls]: {
          color: headerIconColor,
          fontSize: fontSizeIcon,
          verticalAlign: "baseline",
          "&:hover": {
            color: headerIconHoverColor
          }
        }
      },
      // ============================= Rows =============================
      [`${componentCls}-tbody`]: {
        [`${componentCls}-row`]: {
          [`&${componentCls}-row-selected`]: {
            [`> ${componentCls}-cell`]: {
              background: tableSelectedRowBg,
              "&-row-hover": {
                background: tableSelectedRowHoverBg
              }
            }
          },
          [`> ${componentCls}-cell-row-hover`]: {
            background: tableRowHoverBg
          }
        }
      }
    }
  };
};
const genSizeStyle = (token) => {
  const {
    componentCls,
    tableExpandColumnWidth,
    calc
  } = token;
  const getSizeStyle = (size, paddingVertical, paddingHorizontal, fontSize) => ({
    [`${componentCls}${componentCls}-${size}`]: {
      fontSize,
      [`
        ${componentCls}-title,
        ${componentCls}-footer,
        ${componentCls}-cell,
        ${componentCls}-thead > tr > th,
        ${componentCls}-tbody > tr > th,
        ${componentCls}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
        padding: `${unit(paddingVertical)} ${unit(paddingHorizontal)}`
      },
      [`${componentCls}-filter-trigger`]: {
        marginInlineEnd: unit(calc(paddingHorizontal).div(2).mul(-1).equal())
      },
      [`${componentCls}-expanded-row-fixed`]: {
        margin: `${unit(calc(paddingVertical).mul(-1).equal())} ${unit(calc(paddingHorizontal).mul(-1).equal())}`
      },
      [`${componentCls}-tbody`]: {
        // ========================= Nest Table ===========================
        [`${componentCls}-wrapper:only-child ${componentCls}`]: {
          marginBlock: unit(calc(paddingVertical).mul(-1).equal()),
          marginInline: `${unit(calc(tableExpandColumnWidth).sub(paddingHorizontal).equal())} ${unit(calc(paddingHorizontal).mul(-1).equal())}`
        }
      },
      // https://github.com/ant-design/ant-design/issues/35167
      [`${componentCls}-selection-extra`]: {
        paddingInlineStart: unit(calc(paddingHorizontal).div(4).equal())
      }
    }
  });
  return {
    [`${componentCls}-wrapper`]: Object.assign(Object.assign({}, getSizeStyle("middle", token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle, token.tableFontSizeMiddle)), getSizeStyle("small", token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall, token.tableFontSizeSmall))
  };
};
const genSorterStyle = (token) => {
  const {
    componentCls,
    marginXXS,
    fontSizeIcon,
    headerIconColor,
    headerIconHoverColor
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-thead th${componentCls}-column-has-sorters`]: {
        outline: "none",
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        "&:hover": {
          background: token.tableHeaderSortHoverBg,
          "&::before": {
            backgroundColor: "transparent !important"
          }
        },
        "&:focus-visible": {
          color: token.colorPrimary
        },
        // https://github.com/ant-design/ant-design/issues/30969
        [`
          &${componentCls}-cell-fix-left:hover,
          &${componentCls}-cell-fix-right:hover
        `]: {
          background: token.tableFixedHeaderSortActiveBg
        }
      },
      [`${componentCls}-thead th${componentCls}-column-sort`]: {
        background: token.tableHeaderSortBg,
        "&::before": {
          backgroundColor: "transparent !important"
        }
      },
      [`td${componentCls}-column-sort`]: {
        background: token.tableBodySortBg
      },
      [`${componentCls}-column-title`]: {
        position: "relative",
        zIndex: 1,
        flex: 1
      },
      [`${componentCls}-column-sorters`]: {
        display: "flex",
        flex: "auto",
        alignItems: "center",
        justifyContent: "space-between",
        "&::after": {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          content: '""'
        }
      },
      [`${componentCls}-column-sorters-tooltip-target-sorter`]: {
        "&::after": {
          content: "none"
        }
      },
      [`${componentCls}-column-sorter`]: {
        marginInlineStart: marginXXS,
        color: headerIconColor,
        fontSize: 0,
        transition: `color ${token.motionDurationSlow}`,
        "&-inner": {
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center"
        },
        "&-up, &-down": {
          fontSize: fontSizeIcon,
          "&.active": {
            color: token.colorPrimary
          }
        },
        [`${componentCls}-column-sorter-up + ${componentCls}-column-sorter-down`]: {
          marginTop: "-0.3em"
        }
      },
      [`${componentCls}-column-sorters:hover ${componentCls}-column-sorter`]: {
        color: headerIconHoverColor
      }
    }
  };
};
const genStickyStyle = (token) => {
  const {
    componentCls,
    opacityLoading,
    tableScrollThumbBg,
    tableScrollThumbBgHover,
    tableScrollThumbSize,
    tableScrollBg,
    zIndexTableSticky,
    stickyScrollBarBorderRadius,
    lineWidth,
    lineType,
    tableBorderColor
  } = token;
  const tableBorder = `${unit(lineWidth)} ${lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-sticky`]: {
        "&-holder": {
          position: "sticky",
          zIndex: zIndexTableSticky,
          background: token.colorBgContainer
        },
        "&-scroll": {
          position: "sticky",
          bottom: 0,
          height: `${unit(tableScrollThumbSize)} !important`,
          zIndex: zIndexTableSticky,
          display: "flex",
          alignItems: "center",
          background: tableScrollBg,
          borderTop: tableBorder,
          opacity: opacityLoading,
          "&:hover": {
            transformOrigin: "center bottom"
          },
          // fake scrollbar style of sticky
          "&-bar": {
            height: tableScrollThumbSize,
            backgroundColor: tableScrollThumbBg,
            borderRadius: stickyScrollBarBorderRadius,
            transition: `all ${token.motionDurationSlow}, transform none`,
            position: "absolute",
            bottom: 0,
            "&:hover, &-active": {
              backgroundColor: tableScrollThumbBgHover
            }
          }
        }
      }
    }
  };
};
const genSummaryStyle = (token) => {
  const {
    componentCls,
    lineWidth,
    tableBorderColor,
    calc
  } = token;
  const tableBorder = `${unit(lineWidth)} ${token.lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-summary`]: {
        position: "relative",
        zIndex: token.zIndexTableFixed,
        background: token.tableBg,
        "> tr": {
          "> th, > td": {
            borderBottom: tableBorder
          }
        }
      },
      [`div${componentCls}-summary`]: {
        boxShadow: `0 ${unit(calc(lineWidth).mul(-1).equal())} 0 ${tableBorderColor}`
      }
    }
  };
};
const genVirtualStyle = (token) => {
  const {
    componentCls,
    motionDurationMid,
    lineWidth,
    lineType,
    tableBorderColor,
    calc
  } = token;
  const tableBorder = `${unit(lineWidth)} ${lineType} ${tableBorderColor}`;
  const rowCellCls = `${componentCls}-expanded-row-cell`;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Row ==========================
      [`${componentCls}-tbody-virtual`]: {
        [`${componentCls}-row:not(tr)`]: {
          display: "flex",
          boxSizing: "border-box",
          width: "100%"
        },
        [`${componentCls}-cell`]: {
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid}`
        },
        [`${componentCls}-expanded-row`]: {
          [`${rowCellCls}${rowCellCls}-fixed`]: {
            position: "sticky",
            insetInlineStart: 0,
            overflow: "hidden",
            width: `calc(var(--virtual-width) - ${unit(lineWidth)})`,
            borderInlineEnd: "none"
          }
        }
      },
      // ======================== Border =========================
      [`${componentCls}-bordered`]: {
        [`${componentCls}-tbody-virtual`]: {
          "&:after": {
            content: '""',
            insetInline: 0,
            bottom: 0,
            borderBottom: tableBorder,
            position: "absolute"
          },
          [`${componentCls}-cell`]: {
            borderInlineEnd: tableBorder,
            [`&${componentCls}-cell-fix-right-first:before`]: {
              content: '""',
              position: "absolute",
              insetBlock: 0,
              insetInlineStart: calc(lineWidth).mul(-1).equal(),
              borderInlineStart: tableBorder
            }
          }
        },
        // Empty placeholder
        [`&${componentCls}-virtual`]: {
          [`${componentCls}-placeholder ${componentCls}-cell`]: {
            borderInlineEnd: tableBorder,
            borderBottom: tableBorder
          }
        }
      }
    }
  };
};
const genTableStyle = (token) => {
  const {
    componentCls,
    fontWeightStrong,
    tablePaddingVertical,
    tablePaddingHorizontal,
    tableExpandColumnWidth,
    lineWidth,
    lineType,
    tableBorderColor,
    tableFontSize,
    tableBg,
    tableRadius,
    tableHeaderTextColor,
    motionDurationMid,
    tableHeaderBg,
    tableHeaderCellSplitColor,
    tableFooterTextColor,
    tableFooterBg,
    calc
  } = token;
  const tableBorder = `${unit(lineWidth)} ${lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: Object.assign(Object.assign({
      clear: "both",
      maxWidth: "100%"
    }, clearFix()), {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        fontSize: tableFontSize,
        background: tableBg,
        borderRadius: `${unit(tableRadius)} ${unit(tableRadius)} 0 0`,
        // https://github.com/ant-design/ant-design/issues/47486
        scrollbarColor: `${token.tableScrollThumbBg} ${token.tableScrollBg}`
      }),
      // https://github.com/ant-design/ant-design/issues/17611
      table: {
        width: "100%",
        textAlign: "start",
        borderRadius: `${unit(tableRadius)} ${unit(tableRadius)} 0 0`,
        borderCollapse: "separate",
        borderSpacing: 0
      },
      // ============================= Cell ==============================
      [`
          ${componentCls}-cell,
          ${componentCls}-thead > tr > th,
          ${componentCls}-tbody > tr > th,
          ${componentCls}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
        position: "relative",
        padding: `${unit(tablePaddingVertical)} ${unit(tablePaddingHorizontal)}`,
        overflowWrap: "break-word"
      },
      // ============================ Title =============================
      [`${componentCls}-title`]: {
        padding: `${unit(tablePaddingVertical)} ${unit(tablePaddingHorizontal)}`
      },
      // ============================ Header ============================
      [`${componentCls}-thead`]: {
        [`
          > tr > th,
          > tr > td
        `]: {
          position: "relative",
          color: tableHeaderTextColor,
          fontWeight: fontWeightStrong,
          textAlign: "start",
          background: tableHeaderBg,
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid} ease`,
          "&[colspan]:not([colspan='1'])": {
            textAlign: "center"
          },
          [`&:not(:last-child):not(${componentCls}-selection-column):not(${componentCls}-row-expand-icon-cell):not([colspan])::before`]: {
            position: "absolute",
            top: "50%",
            insetInlineEnd: 0,
            width: 1,
            height: "1.6em",
            backgroundColor: tableHeaderCellSplitColor,
            transform: "translateY(-50%)",
            transition: `background-color ${motionDurationMid}`,
            content: '""'
          }
        },
        "> tr:not(:last-child) > th[colspan]": {
          borderBottom: 0
        }
      },
      // ============================ Body ============================
      [`${componentCls}-tbody`]: {
        "> tr": {
          "> th, > td": {
            transition: `background ${motionDurationMid}, border-color ${motionDurationMid}`,
            borderBottom: tableBorder,
            // ========================= Nest Table ===========================
            [`
              > ${componentCls}-wrapper:only-child,
              > ${componentCls}-expanded-row-fixed > ${componentCls}-wrapper:only-child
            `]: {
              [componentCls]: {
                marginBlock: unit(calc(tablePaddingVertical).mul(-1).equal()),
                marginInline: `${unit(calc(tableExpandColumnWidth).sub(tablePaddingHorizontal).equal())}
                ${unit(calc(tablePaddingHorizontal).mul(-1).equal())}`,
                [`${componentCls}-tbody > tr:last-child > td`]: {
                  borderBottom: 0,
                  "&:first-child, &:last-child": {
                    borderRadius: 0
                  }
                }
              }
            }
          },
          "> th": {
            position: "relative",
            color: tableHeaderTextColor,
            fontWeight: fontWeightStrong,
            textAlign: "start",
            background: tableHeaderBg,
            borderBottom: tableBorder,
            transition: `background ${motionDurationMid} ease`
          }
        }
      },
      // ============================ Footer ============================
      [`${componentCls}-footer`]: {
        padding: `${unit(tablePaddingVertical)} ${unit(tablePaddingHorizontal)}`,
        color: tableFooterTextColor,
        background: tableFooterBg
      }
    })
  };
};
const prepareComponentToken$1 = (token) => {
  const {
    colorFillAlter,
    colorBgContainer,
    colorTextHeading,
    colorFillSecondary,
    colorFillContent,
    controlItemBgActive,
    controlItemBgActiveHover,
    padding,
    paddingSM,
    paddingXS,
    colorBorderSecondary,
    borderRadiusLG,
    controlHeight,
    colorTextPlaceholder,
    fontSize,
    fontSizeSM,
    lineHeight,
    lineWidth,
    colorIcon,
    colorIconHover,
    opacityLoading,
    controlInteractiveSize
  } = token;
  const colorFillSecondarySolid = new TinyColor(colorFillSecondary).onBackground(colorBgContainer).toHexShortString();
  const colorFillContentSolid = new TinyColor(colorFillContent).onBackground(colorBgContainer).toHexShortString();
  const colorFillAlterSolid = new TinyColor(colorFillAlter).onBackground(colorBgContainer).toHexShortString();
  const baseColorAction = new TinyColor(colorIcon);
  const baseColorActionHover = new TinyColor(colorIconHover);
  const expandIconHalfInner = controlInteractiveSize / 2 - lineWidth;
  const expandIconSize = expandIconHalfInner * 2 + lineWidth * 3;
  return {
    headerBg: colorFillAlterSolid,
    headerColor: colorTextHeading,
    headerSortActiveBg: colorFillSecondarySolid,
    headerSortHoverBg: colorFillContentSolid,
    bodySortBg: colorFillAlterSolid,
    rowHoverBg: colorFillAlterSolid,
    rowSelectedBg: controlItemBgActive,
    rowSelectedHoverBg: controlItemBgActiveHover,
    rowExpandedBg: colorFillAlter,
    cellPaddingBlock: padding,
    cellPaddingInline: padding,
    cellPaddingBlockMD: paddingSM,
    cellPaddingInlineMD: paddingXS,
    cellPaddingBlockSM: paddingXS,
    cellPaddingInlineSM: paddingXS,
    borderColor: colorBorderSecondary,
    headerBorderRadius: borderRadiusLG,
    footerBg: colorFillAlterSolid,
    footerColor: colorTextHeading,
    cellFontSize: fontSize,
    cellFontSizeMD: fontSize,
    cellFontSizeSM: fontSize,
    headerSplitColor: colorBorderSecondary,
    fixedHeaderSortActiveBg: colorFillSecondarySolid,
    headerFilterHoverBg: colorFillContent,
    filterDropdownMenuBg: colorBgContainer,
    filterDropdownBg: colorBgContainer,
    expandIconBg: colorBgContainer,
    selectionColumnWidth: controlHeight,
    stickyScrollBarBg: colorTextPlaceholder,
    stickyScrollBarBorderRadius: 100,
    expandIconMarginTop: (fontSize * lineHeight - lineWidth * 3) / 2 - Math.ceil((fontSizeSM * 1.4 - lineWidth * 3) / 2),
    headerIconColor: baseColorAction.clone().setAlpha(baseColorAction.getAlpha() * opacityLoading).toRgbString(),
    headerIconHoverColor: baseColorActionHover.clone().setAlpha(baseColorActionHover.getAlpha() * opacityLoading).toRgbString(),
    expandIconHalfInner,
    expandIconSize,
    expandIconScale: controlInteractiveSize / expandIconSize
  };
};
const zIndexTableFixed = 2;
const useStyle$1 = genStyleHooks("Table", (token) => {
  const {
    colorTextHeading,
    colorSplit,
    colorBgContainer,
    controlInteractiveSize: checkboxSize,
    headerBg,
    headerColor,
    headerSortActiveBg,
    headerSortHoverBg,
    bodySortBg,
    rowHoverBg,
    rowSelectedBg,
    rowSelectedHoverBg,
    rowExpandedBg,
    cellPaddingBlock,
    cellPaddingInline,
    cellPaddingBlockMD,
    cellPaddingInlineMD,
    cellPaddingBlockSM,
    cellPaddingInlineSM,
    borderColor,
    footerBg,
    footerColor,
    headerBorderRadius,
    cellFontSize,
    cellFontSizeMD,
    cellFontSizeSM,
    headerSplitColor,
    fixedHeaderSortActiveBg,
    headerFilterHoverBg,
    filterDropdownBg,
    expandIconBg,
    selectionColumnWidth,
    stickyScrollBarBg,
    calc
  } = token;
  const tableToken = merge(token, {
    tableFontSize: cellFontSize,
    tableBg: colorBgContainer,
    tableRadius: headerBorderRadius,
    tablePaddingVertical: cellPaddingBlock,
    tablePaddingHorizontal: cellPaddingInline,
    tablePaddingVerticalMiddle: cellPaddingBlockMD,
    tablePaddingHorizontalMiddle: cellPaddingInlineMD,
    tablePaddingVerticalSmall: cellPaddingBlockSM,
    tablePaddingHorizontalSmall: cellPaddingInlineSM,
    tableBorderColor: borderColor,
    tableHeaderTextColor: headerColor,
    tableHeaderBg: headerBg,
    tableFooterTextColor: footerColor,
    tableFooterBg: footerBg,
    tableHeaderCellSplitColor: headerSplitColor,
    tableHeaderSortBg: headerSortActiveBg,
    tableHeaderSortHoverBg: headerSortHoverBg,
    tableBodySortBg: bodySortBg,
    tableFixedHeaderSortActiveBg: fixedHeaderSortActiveBg,
    tableHeaderFilterActiveBg: headerFilterHoverBg,
    tableFilterDropdownBg: filterDropdownBg,
    tableRowHoverBg: rowHoverBg,
    tableSelectedRowBg: rowSelectedBg,
    tableSelectedRowHoverBg: rowSelectedHoverBg,
    zIndexTableFixed,
    zIndexTableSticky: calc(zIndexTableFixed).add(1).equal({
      unit: false
    }),
    tableFontSizeMiddle: cellFontSizeMD,
    tableFontSizeSmall: cellFontSizeSM,
    tableSelectionColumnWidth: selectionColumnWidth,
    tableExpandIconBg: expandIconBg,
    tableExpandColumnWidth: calc(checkboxSize).add(calc(token.padding).mul(2)).equal(),
    tableExpandedRowBg: rowExpandedBg,
    // Dropdown
    tableFilterDropdownWidth: 120,
    tableFilterDropdownHeight: 264,
    tableFilterDropdownSearchWidth: 140,
    // Virtual Scroll Bar
    tableScrollThumbSize: 8,
    // Mac scroll bar size
    tableScrollThumbBg: stickyScrollBarBg,
    tableScrollThumbBgHover: colorTextHeading,
    tableScrollBg: colorSplit
  });
  return [genTableStyle(tableToken), genPaginationStyle(tableToken), genSummaryStyle(tableToken), genSorterStyle(tableToken), genFilterStyle(tableToken), genBorderedStyle(tableToken), genRadiusStyle(tableToken), genExpandStyle(tableToken), genSummaryStyle(tableToken), genEmptyStyle(tableToken), genSelectionStyle(tableToken), genFixedStyle(tableToken), genStickyStyle(tableToken), genEllipsisStyle(tableToken), genSizeStyle(tableToken), genStyle(tableToken), genVirtualStyle(tableToken)];
}, prepareComponentToken$1, {
  unitless: {
    expandIconScale: true
  }
});
const EMPTY_LIST = [];
const InternalTable = (props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    size: customizeSize,
    bordered,
    dropdownPrefixCls: customizeDropdownPrefixCls,
    dataSource,
    pagination,
    rowSelection,
    rowKey = "key",
    rowClassName,
    columns,
    children,
    childrenColumnName: legacyChildrenColumnName,
    onChange,
    getPopupContainer,
    loading,
    expandIcon,
    expandable,
    expandedRowRender,
    expandIconColumnIndex,
    indentSize,
    scroll,
    sortDirections,
    locale: locale2,
    showSorterTooltip = {
      target: "full-header"
    },
    virtual
  } = props;
  devUseWarning();
  const baseColumns = reactExports.useMemo(() => columns || convertChildrenToColumns(children), [columns, children]);
  const needResponsive = reactExports.useMemo(() => baseColumns.some((col) => col.responsive), [baseColumns]);
  const screens = useBreakpoint(needResponsive);
  const mergedColumns = reactExports.useMemo(() => {
    const matched = new Set(Object.keys(screens).filter((m) => screens[m]));
    return baseColumns.filter((c) => !c.responsive || c.responsive.some((r) => matched.has(r)));
  }, [baseColumns, screens]);
  const tableProps = omit(props, ["className", "style", "columns"]);
  const {
    locale: contextLocale = localeValues,
    direction,
    table,
    renderEmpty,
    getPrefixCls,
    getPopupContainer: getContextPopupContainer
  } = reactExports.useContext(ConfigContext);
  const mergedSize = useSize(customizeSize);
  const tableLocale = Object.assign(Object.assign({}, contextLocale.Table), locale2);
  const rawData = dataSource || EMPTY_LIST;
  const prefixCls = getPrefixCls("table", customizePrefixCls);
  const dropdownPrefixCls = getPrefixCls("dropdown", customizeDropdownPrefixCls);
  const [, token] = useToken();
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls, rootCls);
  const mergedExpandable = Object.assign(Object.assign({
    childrenColumnName: legacyChildrenColumnName,
    expandIconColumnIndex
  }, expandable), {
    expandIcon: (_a = expandable === null || expandable === void 0 ? void 0 : expandable.expandIcon) !== null && _a !== void 0 ? _a : (_b = table === null || table === void 0 ? void 0 : table.expandable) === null || _b === void 0 ? void 0 : _b.expandIcon
  });
  const {
    childrenColumnName = "children"
  } = mergedExpandable;
  const expandType = reactExports.useMemo(() => {
    if (rawData.some((item) => item === null || item === void 0 ? void 0 : item[childrenColumnName])) {
      return "nest";
    }
    if (expandedRowRender || (expandable === null || expandable === void 0 ? void 0 : expandable.expandedRowRender)) {
      return "row";
    }
    return null;
  }, [rawData]);
  const internalRefs = {
    body: reactExports.useRef()
  };
  const getContainerWidth = useContainerWidth(prefixCls);
  const rootRef = reactExports.useRef(null);
  const tblRef = reactExports.useRef(null);
  useProxyImperativeHandle(ref, () => Object.assign(Object.assign({}, tblRef.current), {
    nativeElement: rootRef.current
  }));
  const getRowKey = reactExports.useMemo(() => {
    if (typeof rowKey === "function") {
      return rowKey;
    }
    return (record) => record === null || record === void 0 ? void 0 : record[rowKey];
  }, [rowKey]);
  const [getRecordByKey] = useLazyKVMap(rawData, childrenColumnName, getRowKey);
  const changeEventInfo = {};
  const triggerOnChange = function(info, action) {
    let reset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var _a2, _b2, _c, _d;
    const changeInfo = Object.assign(Object.assign({}, changeEventInfo), info);
    if (reset) {
      (_a2 = changeEventInfo.resetPagination) === null || _a2 === void 0 ? void 0 : _a2.call(changeEventInfo);
      if ((_b2 = changeInfo.pagination) === null || _b2 === void 0 ? void 0 : _b2.current) {
        changeInfo.pagination.current = 1;
      }
      if (pagination) {
        (_c = pagination.onChange) === null || _c === void 0 ? void 0 : _c.call(pagination, 1, (_d = changeInfo.pagination) === null || _d === void 0 ? void 0 : _d.pageSize);
      }
    }
    if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
      scrollTo(0, {
        getContainer: () => internalRefs.body.current
      });
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
      currentDataSource: getFilterData(getSortData(rawData, changeInfo.sorterStates, childrenColumnName), changeInfo.filterStates, childrenColumnName),
      action
    });
  };
  const onSorterChange = (sorter, sorterStates) => {
    triggerOnChange({
      sorter,
      sorterStates
    }, "sort", false);
  };
  const [transformSorterColumns, sortStates, sorterTitleProps, getSorters] = useFilterSorter({
    prefixCls,
    mergedColumns,
    onSorterChange,
    sortDirections: sortDirections || ["ascend", "descend"],
    tableLocale,
    showSorterTooltip
  });
  const sortedData = reactExports.useMemo(() => getSortData(rawData, sortStates, childrenColumnName), [rawData, sortStates]);
  changeEventInfo.sorter = getSorters();
  changeEventInfo.sorterStates = sortStates;
  const onFilterChange = (filters2, filterStates2) => {
    triggerOnChange({
      filters: filters2,
      filterStates: filterStates2
    }, "filter", true);
  };
  const [transformFilterColumns, filterStates, filters] = useFilter({
    prefixCls,
    locale: tableLocale,
    dropdownPrefixCls,
    mergedColumns,
    onFilterChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    rootClassName: classNames(rootClassName, rootCls)
  });
  const mergedData = getFilterData(sortedData, filterStates, childrenColumnName);
  changeEventInfo.filters = filters;
  changeEventInfo.filterStates = filterStates;
  const columnTitleProps = reactExports.useMemo(() => {
    const mergedFilters = {};
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey] !== null) {
        mergedFilters[filterKey] = filters[filterKey];
      }
    });
    return Object.assign(Object.assign({}, sorterTitleProps), {
      filters: mergedFilters
    });
  }, [sorterTitleProps, filters]);
  const [transformTitleColumns] = useTitleColumns(columnTitleProps);
  const onPaginationChange = (current, pageSize) => {
    triggerOnChange({
      pagination: Object.assign(Object.assign({}, changeEventInfo.pagination), {
        current,
        pageSize
      })
    }, "paginate");
  };
  const [mergedPagination, resetPagination] = usePagination(mergedData.length, onPaginationChange, pagination);
  changeEventInfo.pagination = pagination === false ? {} : getPaginationParam(mergedPagination, pagination);
  changeEventInfo.resetPagination = resetPagination;
  const pageData = reactExports.useMemo(() => {
    if (pagination === false || !mergedPagination.pageSize) {
      return mergedData;
    }
    const {
      current = 1,
      total,
      pageSize = DEFAULT_PAGE_SIZE
    } = mergedPagination;
    if (mergedData.length < total) {
      if (mergedData.length > pageSize) {
        return mergedData.slice((current - 1) * pageSize, current * pageSize);
      }
      return mergedData;
    }
    return mergedData.slice((current - 1) * pageSize, current * pageSize);
  }, [!!pagination, mergedData, mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.current, mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize, mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total]);
  const [transformSelectionColumns, selectedKeySet] = useSelection({
    prefixCls,
    data: mergedData,
    pageData,
    getRowKey,
    getRecordByKey,
    expandType,
    childrenColumnName,
    locale: tableLocale,
    getPopupContainer: getPopupContainer || getContextPopupContainer
  }, rowSelection);
  const internalRowClassName = (record, index, indent) => {
    let mergedRowClassName;
    if (typeof rowClassName === "function") {
      mergedRowClassName = classNames(rowClassName(record, index, indent));
    } else {
      mergedRowClassName = classNames(rowClassName);
    }
    return classNames({
      [`${prefixCls}-row-selected`]: selectedKeySet.has(getRowKey(record, index))
    }, mergedRowClassName);
  };
  mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon;
  mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || renderExpandIcon(tableLocale);
  if (expandType === "nest" && mergedExpandable.expandIconColumnIndex === void 0) {
    mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
  } else if (mergedExpandable.expandIconColumnIndex > 0 && rowSelection) {
    mergedExpandable.expandIconColumnIndex -= 1;
  }
  if (typeof mergedExpandable.indentSize !== "number") {
    mergedExpandable.indentSize = typeof indentSize === "number" ? indentSize : 15;
  }
  const transformColumns = reactExports.useCallback((innerColumns) => transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns)))), [transformSorterColumns, transformFilterColumns, transformSelectionColumns]);
  let topPaginationNode;
  let bottomPaginationNode;
  if (pagination !== false && (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total)) {
    let paginationSize;
    if (mergedPagination.size) {
      paginationSize = mergedPagination.size;
    } else {
      paginationSize = mergedSize === "small" || mergedSize === "middle" ? "small" : void 0;
    }
    const renderPagination = (position22) => /* @__PURE__ */ reactExports.createElement(Pagination, Object.assign({}, mergedPagination, {
      className: classNames(`${prefixCls}-pagination ${prefixCls}-pagination-${position22}`, mergedPagination.className),
      size: paginationSize
    }));
    const defaultPosition = direction === "rtl" ? "left" : "right";
    const {
      position: position2
    } = mergedPagination;
    if (position2 !== null && Array.isArray(position2)) {
      const topPos = position2.find((p) => p.includes("top"));
      const bottomPos = position2.find((p) => p.includes("bottom"));
      const isDisable = position2.every((p) => `${p}` === "none");
      if (!topPos && !bottomPos && !isDisable) {
        bottomPaginationNode = renderPagination(defaultPosition);
      }
      if (topPos) {
        topPaginationNode = renderPagination(topPos.toLowerCase().replace("top", ""));
      }
      if (bottomPos) {
        bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace("bottom", ""));
      }
    } else {
      bottomPaginationNode = renderPagination(defaultPosition);
    }
  }
  let spinProps;
  if (typeof loading === "boolean") {
    spinProps = {
      spinning: loading
    };
  } else if (typeof loading === "object") {
    spinProps = Object.assign({
      spinning: true
    }, loading);
  }
  const wrapperClassNames = classNames(cssVarCls, rootCls, `${prefixCls}-wrapper`, table === null || table === void 0 ? void 0 : table.className, {
    [`${prefixCls}-wrapper-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId);
  const mergedStyle = Object.assign(Object.assign({}, table === null || table === void 0 ? void 0 : table.style), style);
  const emptyText = typeof (locale2 === null || locale2 === void 0 ? void 0 : locale2.emptyText) !== "undefined" ? locale2.emptyText : (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Table")) || /* @__PURE__ */ reactExports.createElement(DefaultRenderEmpty, {
    componentName: "Table"
  });
  const TableComponent = virtual ? RcVirtualTable : RcTable;
  const virtualProps = {};
  const listItemHeight = reactExports.useMemo(() => {
    const {
      fontSize,
      lineHeight,
      padding,
      paddingXS,
      paddingSM
    } = token;
    const fontHeight = Math.floor(fontSize * lineHeight);
    switch (mergedSize) {
      case "large":
        return padding * 2 + fontHeight;
      case "small":
        return paddingXS * 2 + fontHeight;
      default:
        return paddingSM * 2 + fontHeight;
    }
  }, [token, mergedSize]);
  if (virtual) {
    virtualProps.listItemHeight = listItemHeight;
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", {
    ref: rootRef,
    className: wrapperClassNames,
    style: mergedStyle
  }, /* @__PURE__ */ reactExports.createElement(Spin, Object.assign({
    spinning: false
  }, spinProps), topPaginationNode, /* @__PURE__ */ reactExports.createElement(TableComponent, Object.assign({}, virtualProps, tableProps, {
    ref: tblRef,
    columns: mergedColumns,
    direction,
    expandable: mergedExpandable,
    prefixCls,
    className: classNames({
      [`${prefixCls}-middle`]: mergedSize === "middle",
      [`${prefixCls}-small`]: mergedSize === "small",
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-empty`]: rawData.length === 0
    }, cssVarCls, rootCls, hashId),
    data: pageData,
    rowKey: getRowKey,
    rowClassName: internalRowClassName,
    emptyText,
    // Internal
    internalHooks: INTERNAL_HOOKS,
    internalRefs,
    transformColumns,
    getContainerWidth
  })), bottomPaginationNode)));
};
const InternalTable$1 = /* @__PURE__ */ reactExports.forwardRef(InternalTable);
const Table = (props, ref) => {
  const renderTimesRef = reactExports.useRef(0);
  renderTimesRef.current += 1;
  return /* @__PURE__ */ reactExports.createElement(InternalTable$1, Object.assign({}, props, {
    ref,
    _renderTimes: renderTimesRef.current
  }));
};
const ForwardTable = /* @__PURE__ */ reactExports.forwardRef(Table);
ForwardTable.SELECTION_COLUMN = SELECTION_COLUMN;
ForwardTable.EXPAND_COLUMN = EXPAND_COLUMN;
ForwardTable.SELECTION_ALL = SELECTION_ALL;
ForwardTable.SELECTION_INVERT = SELECTION_INVERT;
ForwardTable.SELECTION_NONE = SELECTION_NONE;
ForwardTable.Column = Column;
ForwardTable.ColumnGroup = ColumnGroup;
ForwardTable.Summary = FooterComponents;
const genBaseStyle = (token) => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls,
    calc
  } = token;
  const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
  const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      display: "inline-block",
      height: "auto",
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: "nowrap",
      background: token.defaultBg,
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: "start",
      position: "relative",
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: token.defaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        fontSize: token.tagIconSize,
        color: token.colorTextDescription,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      "&-checkable": {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        "&:active, &-checked": {
          color: token.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: token.colorPrimary,
          "&:hover": {
            backgroundColor: token.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: token.colorPrimaryActive
        }
      },
      "&-hidden": {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: "transparent",
      background: token.tagBorderlessBg
    }
  };
};
const prepareToken = (token) => {
  const {
    lineWidth,
    fontSizeIcon,
    calc
  } = token;
  const tagFontSize = token.fontSizeSM;
  const tagToken = merge(token, {
    tagFontSize,
    tagLineHeight: unit(calc(token.lineHeightSM).mul(tagFontSize).equal()),
    tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
    // Tag icon is much smaller
    tagPaddingHorizontal: 8,
    // Fixed padding.
    tagBorderlessBg: token.defaultBg
  });
  return tagToken;
};
const prepareComponentToken = (token) => ({
  defaultBg: new TinyColor(token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
  defaultColor: token.colorText
});
const useStyle = genStyleHooks("Tag", (token) => {
  const tagToken = prepareToken(token);
  return genBaseStyle(tagToken);
}, prepareComponentToken);
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const CheckableTag = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    style,
    className,
    checked,
    onChange,
    onClick
  } = props, restProps = __rest$1(props, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]);
  const {
    getPrefixCls,
    tag
  } = reactExports.useContext(ConfigContext);
  const handleClick = (e) => {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const prefixCls = getPrefixCls("tag", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const cls = classNames(prefixCls, `${prefixCls}-checkable`, {
    [`${prefixCls}-checkable-checked`]: checked
  }, tag === null || tag === void 0 ? void 0 : tag.className, className, hashId, cssVarCls);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("span", Object.assign({}, restProps, {
    ref,
    style: Object.assign(Object.assign({}, style), tag === null || tag === void 0 ? void 0 : tag.style),
    className: cls,
    onClick: handleClick
  })));
});
const genPresetStyle = (token) => genPresetColor(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      "&-inverse": {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
});
const PresetCmp = genSubStyleComponent(["Tag", "preset"], (token) => {
  const tagToken = prepareToken(token);
  return genPresetStyle(tagToken);
}, prepareComponentToken);
function capitalize(str) {
  if (typeof str !== "string") {
    return str;
  }
  const ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}
const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
};
const StatusCmp = genSubStyleComponent(["Tag", "status"], (token) => {
  const tagToken = prepareToken(token);
  return [genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
}, prepareComponentToken);
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalTag = /* @__PURE__ */ reactExports.forwardRef((tagProps, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    children,
    icon,
    color,
    onClose,
    bordered = true,
    visible: deprecatedVisible
  } = tagProps, props = __rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]);
  const {
    getPrefixCls,
    direction,
    tag: tagContext
  } = reactExports.useContext(ConfigContext);
  const [visible, setVisible] = reactExports.useState(true);
  const domProps = omit(props, ["closeIcon", "closable"]);
  reactExports.useEffect(() => {
    if (deprecatedVisible !== void 0) {
      setVisible(deprecatedVisible);
    }
  }, [deprecatedVisible]);
  const isPreset = isPresetColor(color);
  const isStatus = isPresetStatusColor(color);
  const isInternalColor = isPreset || isStatus;
  const tagStyle = Object.assign(Object.assign({
    backgroundColor: color && !isInternalColor ? color : void 0
  }, tagContext === null || tagContext === void 0 ? void 0 : tagContext.style), style);
  const prefixCls = getPrefixCls("tag", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const tagClassName = classNames(prefixCls, tagContext === null || tagContext === void 0 ? void 0 : tagContext.className, {
    [`${prefixCls}-${color}`]: isInternalColor,
    [`${prefixCls}-has-color`]: color && !isInternalColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-borderless`]: !bordered
  }, className, rootClassName, hashId, cssVarCls);
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const [, mergedCloseIcon] = useClosable(pickClosable(tagProps), pickClosable(tagContext), {
    closable: false,
    closeIconRender: (iconNode2) => {
      const replacement = /* @__PURE__ */ reactExports.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, iconNode2);
      return replaceElement(iconNode2, replacement, (originProps) => ({
        onClick: (e) => {
          var _a;
          (_a = originProps === null || originProps === void 0 ? void 0 : originProps.onClick) === null || _a === void 0 ? void 0 : _a.call(originProps, e);
          handleCloseClick(e);
        },
        className: classNames(originProps === null || originProps === void 0 ? void 0 : originProps.className, `${prefixCls}-close-icon`)
      }));
    }
  });
  const isNeedWave = typeof props.onClick === "function" || children && children.type === "a";
  const iconNode = icon || null;
  const kids = iconNode ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, iconNode, children && /* @__PURE__ */ reactExports.createElement("span", null, children)) : children;
  const tagNode = /* @__PURE__ */ reactExports.createElement("span", Object.assign({}, domProps, {
    ref,
    className: tagClassName,
    style: tagStyle
  }), kids, mergedCloseIcon, isPreset && /* @__PURE__ */ reactExports.createElement(PresetCmp, {
    key: "preset",
    prefixCls
  }), isStatus && /* @__PURE__ */ reactExports.createElement(StatusCmp, {
    key: "status",
    prefixCls
  }));
  return wrapCSSVar(isNeedWave ? /* @__PURE__ */ reactExports.createElement(Wave, {
    component: "Tag"
  }, tagNode) : tagNode);
});
const Tag = InternalTag;
Tag.CheckableTag = CheckableTag;
export {
  Tree$1 as $,
  RefIcon$a as A,
  Button as B,
  Checkbox as C,
  Descriptions as D,
  FileOutlined$1 as E,
  ForwardTable as F,
  Group as G,
  FilterFilled$1 as H,
  FolderOpenOutlined$1 as I,
  FolderOutlined$1 as J,
  HolderOutlined$1 as K,
  List as L,
  MinusSquareOutlined$1 as M,
  Pagination as N,
  Dropdown$1 as O,
  PlusSquareOutlined$1 as P,
  useMultipleSelect as Q,
  RefIcon$b as R,
  Select as S,
  Tag as T,
  Tree$3 as U,
  initComponentToken as V,
  genTreeStyle as W,
  SwitcherIconCom as X,
  Empty as Y,
  Radio$1 as Z,
  Space$1 as _,
  genPurePanel as a,
  Dropdown$2 as b,
  genOverflowStyle as c,
  getMultipleSelectorUnit as d,
  debounce as e,
  convertDataToEntities as f,
  getScroll as g,
  conductCheck as h,
  initMoveMotion as i,
  useBaseProps as j,
  useId as k,
  BaseSelect as l,
  getStyle as m,
  DefaultRenderEmpty as n,
  useSelectStyle as o,
  pickClosable as p,
  useShowArrow as q,
  useIcons as r,
  scrollTo as s,
  mergedBuiltinPlacements as t,
  useClosable as u,
  Spin as v,
  withPureRenderTheme as w,
  CaretDownFilled$1 as x,
  CaretDownOutlined$1 as y,
  CaretUpOutlined$1 as z
};
