import { r as reactExports, R as React } from "./index-Cwm6DA4i.js";
import { a9 as useComposeRef, b as classNames, z as _objectSpread2, _ as _typeof, d as _extends, s as _slicedToArray, e as CSSMotion, aA as contains, g as genStyleHooks, u as unit, r as resetComponent, T as genFocusStyle, p as merge, f as composeRef, C as ConfigContext, a4 as useSize, c as cloneElement, U as toArray, v as _defineProperty, a8 as isEqual, w as wrapperRaf, y as _objectWithoutProperties, a as _toConsumableArray, I as Icon, $ as TinyColor, t as textEllipsis, S as localeValues, o as omit } from "./button-DWO5Pyws.js";
import { p as pickAttrs, a2 as useId, K as KeyCode, P as Portal, c as Keyframe, N as initMotion, a8 as initZoomMotion, a9 as responsiveArray, b as useCSSVarCls, R as RefResizeObserver, a4 as getArrowStyle, aa as PresetColors, o as getArrowToken, a5 as getArrowOffsetToken, ab as Popup, k as useMergedState, M as Tooltip, g as getTransitionName, a as RefIcon$6, e as useZIndex, a1 as RefIcon$9 } from "./index-BqvGiStD.js";
import { u as useBreakpoint, g as getClientSize, b as addEventListenerWrap, c as getOffset, R as RefIcon$7, a as RefIcon$8, S as Sider, L as LayoutContext, d as SiderContext } from "./addEventListener-BRBRdldn.js";
var RefContext = /* @__PURE__ */ reactExports.createContext({});
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
const MemoChildren = /* @__PURE__ */ reactExports.memo(function(_ref) {
  var children = _ref.children;
  return children;
}, function(_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
});
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
var entityStyle = {
  outline: "none"
};
var Panel = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, className = props.className, style = props.style, title = props.title, ariaId = props.ariaId, footer = props.footer, closable = props.closable, closeIcon = props.closeIcon, onClose = props.onClose, children = props.children, bodyStyle = props.bodyStyle, bodyProps = props.bodyProps, modalRender = props.modalRender, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, holderRef = props.holderRef, visible = props.visible, forceRender = props.forceRender, width = props.width, height = props.height, modalClassNames = props.classNames, modalStyles = props.styles;
  var _React$useContext = React.useContext(RefContext), panelRef = _React$useContext.panel;
  var mergedRef = useComposeRef(holderRef, panelRef);
  var sentinelStartRef = reactExports.useRef();
  var sentinelEndRef = reactExports.useRef();
  var entityRef = reactExports.useRef();
  React.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        var _entityRef$current;
        (_entityRef$current = entityRef.current) === null || _entityRef$current === void 0 || _entityRef$current.focus({
          preventScroll: true
        });
      },
      changeActive: function changeActive(next) {
        var _document = document, activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus({
            preventScroll: true
          });
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus({
            preventScroll: true
          });
        }
      }
    };
  });
  var contentStyle = {};
  if (width !== void 0) {
    contentStyle.width = width;
  }
  if (height !== void 0) {
    contentStyle.height = height;
  }
  var footerNode = footer ? /* @__PURE__ */ React.createElement("div", {
    className: classNames("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
    style: _objectSpread2({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
  }, footer) : null;
  var headerNode = title ? /* @__PURE__ */ React.createElement("div", {
    className: classNames("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
    style: _objectSpread2({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-title"),
    id: ariaId
  }, title)) : null;
  var closableObj = reactExports.useMemo(function() {
    if (_typeof(closable) === "object" && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : /* @__PURE__ */ React.createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        })
      };
    }
    return {};
  }, [closable, closeIcon, prefixCls]);
  var ariaProps = pickAttrs(closableObj, true);
  var closeBtnIsDisabled = _typeof(closable) === "object" && closable.disabled;
  var closerNode = closable ? /* @__PURE__ */ React.createElement("button", _extends({
    type: "button",
    onClick: onClose,
    "aria-label": "Close"
  }, ariaProps, {
    className: "".concat(prefixCls, "-close"),
    disabled: closeBtnIsDisabled
  }), closableObj.closeIcon) : null;
  var content = /* @__PURE__ */ React.createElement("div", {
    className: classNames("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
    style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
  }, closerNode, headerNode, /* @__PURE__ */ React.createElement("div", _extends({
    className: classNames("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
    style: _objectSpread2(_objectSpread2({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
  }, bodyProps), children), footerNode);
  return /* @__PURE__ */ React.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: _objectSpread2(_objectSpread2({}, style), contentStyle),
    className: classNames(prefixCls, className),
    onMouseDown,
    onMouseUp
  }, /* @__PURE__ */ React.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    ref: entityRef,
    tabIndex: -1,
    style: entityStyle
  }, /* @__PURE__ */ React.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content)), /* @__PURE__ */ React.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }));
});
var Content$1 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls, title = props.title, style = props.style, className = props.className, visible = props.visible, forceRender = props.forceRender, destroyOnClose = props.destroyOnClose, motionName = props.motionName, ariaId = props.ariaId, onVisibleChanged = props.onVisibleChanged, mousePosition = props.mousePosition;
  var dialogRef = reactExports.useRef();
  var _React$useState = reactExports.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), transformOrigin = _React$useState2[0], setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition && (mousePosition.x || mousePosition.y) ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : "");
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible,
    onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender,
    motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function(_ref, motionRef) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return /* @__PURE__ */ reactExports.createElement(Panel, _extends({}, props, {
      ref,
      title,
      ariaId,
      prefixCls,
      holderRef: motionRef,
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionStyle), style), contentStyle),
      className: classNames(className, motionClassName)
    }));
  });
});
Content$1.displayName = "Content";
var Mask = function Mask2(props) {
  var prefixCls = props.prefixCls, style = props.style, visible = props.visible, maskProps = props.maskProps, motionName = props.motionName, className = props.className;
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    key: "mask",
    visible,
    motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function(_ref, ref) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    return /* @__PURE__ */ reactExports.createElement("div", _extends({
      ref,
      style: _objectSpread2(_objectSpread2({}, motionStyle), style),
      className: classNames("".concat(prefixCls, "-mask"), motionClassName, className)
    }, maskProps));
  });
};
var Dialog = function Dialog2(props) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-dialog" : _props$prefixCls, zIndex = props.zIndex, _props$visible = props.visible, visible = _props$visible === void 0 ? false : _props$visible, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$focusTriggerAf = props.focusTriggerAfterClose, focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf, wrapStyle = props.wrapStyle, wrapClassName = props.wrapClassName, wrapProps = props.wrapProps, onClose = props.onClose, afterOpenChange = props.afterOpenChange, afterClose = props.afterClose, transitionName = props.transitionName, animation = props.animation, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, maskStyle = props.maskStyle, maskProps = props.maskProps, rootClassName = props.rootClassName, modalClassNames = props.classNames, modalStyles = props.styles;
  var lastOutSideActiveElementRef = reactExports.useRef();
  var wrapperRef = reactExports.useRef();
  var contentRef = reactExports.useRef();
  var _React$useState = reactExports.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  var ariaId = useId();
  function saveLastOutSideActiveElementRef() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
    }
  }
  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      focusDialogContent();
    } else {
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {
        }
        lastOutSideActiveElementRef.current = null;
      }
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 || afterClose();
      }
    }
    afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(newVisible);
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 || onClose(e);
  }
  var contentClickRef = reactExports.useRef(false);
  var contentTimeoutRef = reactExports.useRef();
  var onContentMouseDown = function onContentMouseDown2() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp2() {
    contentTimeoutRef.current = setTimeout(function() {
      contentClickRef.current = false;
    });
  };
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick2(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }
    if (visible && e.keyCode === KeyCode.TAB) {
      contentRef.current.changeActive(!e.shiftKey);
    }
  }
  reactExports.useEffect(function() {
    if (visible) {
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();
    }
  }, [visible]);
  reactExports.useEffect(function() {
    return function() {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  var mergedStyle = _objectSpread2(_objectSpread2(_objectSpread2({
    zIndex
  }, wrapStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.wrapper), {}, {
    display: !animatedVisible ? "none" : null
  });
  return /* @__PURE__ */ reactExports.createElement("div", _extends({
    className: classNames("".concat(prefixCls, "-root"), rootClassName)
  }, pickAttrs(props, {
    data: true
  })), /* @__PURE__ */ reactExports.createElement(Mask, {
    prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: _objectSpread2(_objectSpread2({
      zIndex
    }, maskStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.mask),
    maskProps,
    className: modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.mask
  }), /* @__PURE__ */ reactExports.createElement("div", _extends({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classNames("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: mergedStyle
  }, wrapProps), /* @__PURE__ */ reactExports.createElement(Content$1, _extends({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable,
    ariaId,
    prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
};
var DialogWrap = function DialogWrap2(props) {
  var visible = props.visible, getContainer = props.getContainer, forceRender = props.forceRender, _props$destroyOnClose = props.destroyOnClose, destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose, _afterClose = props.afterClose, panelRef = props.panelRef;
  var _React$useState = reactExports.useState(visible), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
  var refContext = reactExports.useMemo(function() {
    return {
      panel: panelRef
    };
  }, [panelRef]);
  reactExports.useEffect(function() {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(RefContext.Provider, {
    value: refContext
  }, /* @__PURE__ */ reactExports.createElement(Portal, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer,
    autoLock: visible || animatedVisible
  }, /* @__PURE__ */ reactExports.createElement(Dialog, _extends({}, props, {
    destroyOnClose,
    afterClose: function afterClose() {
      _afterClose === null || _afterClose === void 0 || _afterClose();
      setAnimatedVisible(false);
    }
  }))));
};
DialogWrap.displayName = "Dialog";
const fadeIn = new Keyframe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const fadeOut = new Keyframe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
const initFadeMotion = function(token) {
  let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        pointerEvents: "none",
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
const genModalStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax}px)`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${unit(token.marginXS)} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${unit(token.calc(token.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.titleColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.titleFontSize,
          lineHeight: token.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadow,
          pointerEvents: "auto",
          padding: token.contentPadding
        },
        [`${componentCls}-close`]: Object.assign({
          position: "absolute",
          top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
          zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: token.modalCloseIconColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalCloseBtnSize,
          height: token.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: unit(token.modalCloseBtnSize),
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: token.modalCloseIconHoverColor,
            backgroundColor: token.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.colorBgTextActive
          }
        }, genFocusStyle(token)),
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.headerBg,
          borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`,
          marginBottom: token.headerMarginBottom,
          padding: token.headerPadding,
          borderBottom: token.headerBorderBottom
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word",
          padding: token.bodyPadding,
          [`${componentCls}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${unit(token.margin)} auto`
          }
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.footerBg,
          marginTop: token.footerMarginTop,
          padding: token.footerPadding,
          borderTop: token.footerBorderTop,
          borderRadius: token.footerBorderRadius,
          [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
const genRTLStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
const prepareToken = (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalCloseIconColor: token.colorIcon,
    modalCloseIconHoverColor: token.colorIconHover,
    modalCloseBtnSize: token.controlHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
  return modalToken;
};
const prepareComponentToken$4 = (token) => ({
  footerBg: "transparent",
  headerBg: token.colorBgElevated,
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  contentPadding: token.wireframe ? 0 : `${unit(token.paddingMD)} ${unit(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${unit(token.padding)} ${unit(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : "none",
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${unit(token.paddingXS)} ${unit(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : "none",
  footerBorderRadius: token.wireframe ? `0 0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${unit(token.padding * 2)} ${unit(token.padding * 2)} ${unit(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM
});
const useStyle$4 = genStyleHooks("Modal", (token) => {
  const modalToken = prepareToken(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), initZoomMotion(modalToken, "zoom")];
}, prepareComponentToken$4, {
  unitless: {
    titleLineHeight: true
  }
});
const AvatarContext = /* @__PURE__ */ reactExports.createContext({});
const genBaseStyle$1 = (token) => {
  const {
    antCls,
    componentCls,
    iconCls,
    avatarBg,
    avatarColor,
    containerSize,
    containerSizeLG,
    containerSizeSM,
    textFontSize,
    textFontSizeLG,
    textFontSizeSM,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    lineWidth,
    lineType
  } = token;
  const avatarSizeStyle = (size, fontSize, radius) => ({
    width: size,
    height: size,
    borderRadius: "50%",
    [`&${componentCls}-square`]: {
      borderRadius: radius
    },
    [`&${componentCls}-icon`]: {
      fontSize,
      [`> ${iconCls}`]: {
        margin: 0
      }
    }
  });
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      color: avatarColor,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: avatarBg,
      border: `${unit(lineWidth)} ${lineType} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${antCls}-image-img`]: {
        display: "block"
      }
    }), avatarSizeStyle(containerSize, textFontSize, borderRadius)), {
      "&-lg": Object.assign({}, avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG)),
      "&-sm": Object.assign({}, avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
};
const genGroupStyle = (token) => {
  const {
    componentCls,
    groupBorderColor,
    groupOverlapping,
    groupSpace
  } = token;
  return {
    [`${componentCls}-group`]: {
      display: "inline-flex",
      [componentCls]: {
        borderColor: groupBorderColor
      },
      "> *:not(:first-child)": {
        marginInlineStart: groupOverlapping
      }
    },
    [`${componentCls}-group-popover`]: {
      [`${componentCls} + ${componentCls}`]: {
        marginInlineStart: groupSpace
      }
    }
  };
};
const prepareComponentToken$3 = (token) => {
  const {
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    fontSize,
    fontSizeLG,
    fontSizeXL,
    fontSizeHeading3,
    marginXS,
    marginXXS,
    colorBorderBg
  } = token;
  return {
    containerSize: controlHeight,
    containerSizeLG: controlHeightLG,
    containerSizeSM: controlHeightSM,
    textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
    textFontSizeLG: fontSizeHeading3,
    textFontSizeSM: fontSize,
    groupSpace: marginXXS,
    groupOverlapping: -marginXS,
    groupBorderColor: colorBorderBg
  };
};
const useStyle$3 = genStyleHooks("Avatar", (token) => {
  const {
    colorTextLightSolid,
    colorTextPlaceholder
  } = token;
  const avatarToken = merge(token, {
    avatarBg: colorTextPlaceholder,
    avatarColor: colorTextLightSolid
  });
  return [genBaseStyle$1(avatarToken), genGroupStyle(avatarToken)];
}, prepareComponentToken$3);
var __rest$5 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalAvatar = (props, ref) => {
  const [scale, setScale] = reactExports.useState(1);
  const [mounted, setMounted] = reactExports.useState(false);
  const [isImgExist, setIsImgExist] = reactExports.useState(true);
  const avatarNodeRef = reactExports.useRef(null);
  const avatarChildrenRef = reactExports.useRef(null);
  const avatarNodeMergedRef = composeRef(ref, avatarNodeRef);
  const {
    getPrefixCls,
    avatar
  } = reactExports.useContext(ConfigContext);
  const avatarCtx = reactExports.useContext(AvatarContext);
  const setScaleParam = () => {
    if (!avatarChildrenRef.current || !avatarNodeRef.current) {
      return;
    }
    const childrenWidth = avatarChildrenRef.current.offsetWidth;
    const nodeWidth = avatarNodeRef.current.offsetWidth;
    if (childrenWidth !== 0 && nodeWidth !== 0) {
      const {
        gap = 4
      } = props;
      if (gap * 2 < nodeWidth) {
        setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
      }
    }
  };
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    setIsImgExist(true);
    setScale(1);
  }, [props.src]);
  reactExports.useEffect(setScaleParam, [props.gap]);
  const handleImgLoadError = () => {
    const {
      onError
    } = props;
    const errorFlag = onError === null || onError === void 0 ? void 0 : onError();
    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };
  const {
    prefixCls: customizePrefixCls,
    shape,
    size: customSize,
    src,
    srcSet,
    icon,
    className,
    rootClassName,
    alt,
    draggable,
    children,
    crossOrigin
  } = props, others = __rest$5(props, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "alt", "draggable", "children", "crossOrigin"]);
  const size = useSize((ctxSize) => {
    var _a, _b;
    return (_b = (_a = customSize !== null && customSize !== void 0 ? customSize : avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.size) !== null && _a !== void 0 ? _a : ctxSize) !== null && _b !== void 0 ? _b : "default";
  });
  const needResponsive = Object.keys(typeof size === "object" ? size || {} : {}).some((key) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(key));
  const screens = useBreakpoint(needResponsive);
  const responsiveSizeStyle = reactExports.useMemo(() => {
    if (typeof size !== "object") {
      return {};
    }
    const currentBreakpoint = responsiveArray.find((screen) => screens[screen]);
    const currentSize = size[currentBreakpoint];
    return currentSize ? {
      width: currentSize,
      height: currentSize,
      fontSize: currentSize && (icon || children) ? currentSize / 2 : 18
    } : {};
  }, [screens, size]);
  const prefixCls = getPrefixCls("avatar", customizePrefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls, rootCls);
  const sizeCls = classNames({
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-sm`]: size === "small"
  });
  const hasImageElement = /* @__PURE__ */ reactExports.isValidElement(src);
  const mergedShape = shape || (avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.shape) || "circle";
  const classString = classNames(prefixCls, sizeCls, avatar === null || avatar === void 0 ? void 0 : avatar.className, `${prefixCls}-${mergedShape}`, {
    [`${prefixCls}-image`]: hasImageElement || src && isImgExist,
    [`${prefixCls}-icon`]: !!icon
  }, cssVarCls, rootCls, className, rootClassName, hashId);
  const sizeStyle = typeof size === "number" ? {
    width: size,
    height: size,
    fontSize: icon ? size / 2 : 18
  } : {};
  let childrenToRender;
  if (typeof src === "string" && isImgExist) {
    childrenToRender = /* @__PURE__ */ reactExports.createElement("img", {
      src,
      draggable,
      srcSet,
      onError: handleImgLoadError,
      alt,
      crossOrigin
    });
  } else if (hasImageElement) {
    childrenToRender = src;
  } else if (icon) {
    childrenToRender = icon;
  } else if (mounted || scale !== 1) {
    const transformString = `scale(${scale})`;
    const childrenStyle = {
      msTransform: transformString,
      WebkitTransform: transformString,
      transform: transformString
    };
    childrenToRender = /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
      onResize: setScaleParam
    }, /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-string`,
      ref: avatarChildrenRef,
      style: Object.assign({}, childrenStyle)
    }, children));
  } else {
    childrenToRender = /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-string`,
      style: {
        opacity: 0
      },
      ref: avatarChildrenRef
    }, children);
  }
  delete others.onError;
  delete others.gap;
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("span", Object.assign({}, others, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, sizeStyle), responsiveSizeStyle), avatar === null || avatar === void 0 ? void 0 : avatar.style), others.style),
    className: classString,
    ref: avatarNodeMergedRef
  }), childrenToRender));
};
const Avatar$1 = /* @__PURE__ */ reactExports.forwardRef(InternalAvatar);
const getRenderPropValue = (propValue) => {
  if (!propValue) {
    return null;
  }
  return typeof propValue === "function" ? propValue() : propValue;
};
const genBaseStyle = (token) => {
  const {
    componentCls,
    popoverColor,
    titleMinWidth,
    fontWeightStrong,
    innerPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG,
    zIndexPopup,
    titleMarginBottom,
    colorBgElevated,
    popoverBg,
    titleBorderBottom,
    innerContentPadding,
    titlePadding
  } = token;
  return [
    {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: true,
          value: 0
        },
        zIndex: zIndexPopup,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(" "),
        "--antd-arrow-background-color": colorBgElevated,
        width: "max-content",
        maxWidth: "100vw",
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        [`${componentCls}-inner`]: {
          backgroundColor: popoverBg,
          backgroundClip: "padding-box",
          borderRadius: borderRadiusLG,
          boxShadow: boxShadowSecondary,
          padding: innerPadding
        },
        [`${componentCls}-title`]: {
          minWidth: titleMinWidth,
          marginBottom: titleMarginBottom,
          color: colorTextHeading,
          fontWeight: fontWeightStrong,
          borderBottom: titleBorderBottom,
          padding: titlePadding
        },
        [`${componentCls}-inner-content`]: {
          color: popoverColor,
          padding: innerContentPadding
        }
      })
    },
    // Arrow Style
    getArrowStyle(token, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow,
        display: "inline-block",
        [`${componentCls}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
};
const genColorStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: PresetColors.map((colorKey) => {
      const lightColor = token[`${colorKey}6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          "--antd-arrow-background-color": lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
};
const prepareComponentToken$2 = (token) => {
  const {
    lineWidth,
    controlHeight,
    fontHeight,
    padding,
    wireframe,
    zIndexPopupBase,
    borderRadiusLG,
    marginXS,
    lineType,
    colorSplit,
    paddingSM
  } = token;
  const titlePaddingBlockDist = controlHeight - fontHeight;
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: zIndexPopupBase + 30
  }, getArrowToken(token)), getArrowOffsetToken({
    contentRadius: borderRadiusLG,
    limitVerticalRadius: true
  })), {
    // internal
    innerPadding: wireframe ? 0 : 12,
    titleMarginBottom: wireframe ? 0 : marginXS,
    titlePadding: wireframe ? `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px` : 0,
    titleBorderBottom: wireframe ? `${lineWidth}px ${lineType} ${colorSplit}` : "none",
    innerContentPadding: wireframe ? `${paddingSM}px ${popoverPaddingHorizontal}px` : 0
  });
};
const useStyle$2 = genStyleHooks("Popover", (token) => {
  const {
    colorBgElevated,
    colorText
  } = token;
  const popoverToken = merge(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText
  });
  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), initZoomMotion(popoverToken, "zoom-big")];
}, prepareComponentToken$2, {
  resetStyle: false,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Overlay = (_ref) => {
  let {
    title,
    content,
    prefixCls
  } = _ref;
  if (!title && !content) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, title && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-title`
  }, title), content && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, content));
};
const RawPurePanel = (props) => {
  const {
    hashId,
    prefixCls,
    className,
    style,
    placement = "top",
    title,
    content,
    children
  } = props;
  const titleNode = getRenderPropValue(title);
  const contentNode = getRenderPropValue(content);
  const cls = classNames(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className);
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /* @__PURE__ */ reactExports.createElement(Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls
  }), children || /* @__PURE__ */ reactExports.createElement(Overlay, {
    prefixCls,
    title: titleNode,
    content: contentNode
  })));
};
const PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className
  } = props, restProps = __rest$4(props, ["prefixCls", "className"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("popover", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(RawPurePanel, Object.assign({}, restProps, {
    prefixCls,
    hashId,
    className: classNames(className, cssVarCls)
  })));
};
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const InternalPopover = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    title,
    content,
    overlayClassName,
    placement = "top",
    trigger = "hover",
    children,
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    onOpenChange,
    overlayStyle = {}
  } = props, otherProps = __rest$3(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("popover", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const overlayCls = classNames(overlayClassName, hashId, cssVarCls);
  const [open, setOpen] = useMergedState(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
  });
  const settingOpen = (value, e) => {
    setOpen(value, true);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value, e);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === KeyCode.ESC) {
      settingOpen(false, e);
    }
  };
  const onInternalOpenChange = (value) => {
    settingOpen(value);
  };
  const titleNode = getRenderPropValue(title);
  const contentNode = getRenderPropValue(content);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(Tooltip, Object.assign({
    placement,
    trigger,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayStyle
  }, otherProps, {
    prefixCls,
    overlayClassName: overlayCls,
    ref,
    open,
    onOpenChange: onInternalOpenChange,
    overlay: titleNode || contentNode ? /* @__PURE__ */ reactExports.createElement(Overlay, {
      prefixCls,
      title: titleNode,
      content: contentNode
    }) : null,
    transitionName: getTransitionName(rootPrefixCls, "zoom-big", otherProps.transitionName),
    "data-popover-inject": true
  }), cloneElement(children, {
    onKeyDown: (e) => {
      var _a2, _b2;
      if (/* @__PURE__ */ reactExports.isValidElement(children)) {
        (_b2 = children === null || children === void 0 ? void 0 : (_a2 = children.props).onKeyDown) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, e);
      }
      onKeyDown(e);
    }
  })));
});
const Popover = InternalPopover;
Popover._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
const AvatarContextProvider = (props) => {
  const {
    size,
    shape
  } = reactExports.useContext(AvatarContext);
  const avatarContextValue = reactExports.useMemo(() => ({
    size: props.size || size,
    shape: props.shape || shape
  }), [props.size, props.shape, size, shape]);
  return /* @__PURE__ */ reactExports.createElement(AvatarContext.Provider, {
    value: avatarContextValue
  }, props.children);
};
const Group$1 = (props) => {
  var _a, _b, _c;
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    maxCount,
    maxStyle,
    size,
    shape,
    maxPopoverPlacement,
    maxPopoverTrigger,
    children,
    max
  } = props;
  const prefixCls = getPrefixCls("avatar", customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls, rootCls);
  const cls = classNames(groupPrefixCls, {
    [`${groupPrefixCls}-rtl`]: direction === "rtl"
  }, cssVarCls, rootCls, className, rootClassName, hashId);
  const childrenWithProps = toArray(children).map((child, index) => cloneElement(child, {
    key: `avatar-key-${index}`
  }));
  const mergeCount = (max === null || max === void 0 ? void 0 : max.count) || maxCount;
  const numOfChildren = childrenWithProps.length;
  if (mergeCount && mergeCount < numOfChildren) {
    const childrenShow = childrenWithProps.slice(0, mergeCount);
    const childrenHidden = childrenWithProps.slice(mergeCount, numOfChildren);
    const mergeStyle = (max === null || max === void 0 ? void 0 : max.style) || maxStyle;
    const mergePopoverTrigger = ((_a = max === null || max === void 0 ? void 0 : max.popover) === null || _a === void 0 ? void 0 : _a.trigger) || maxPopoverTrigger || "hover";
    const mergePopoverPlacement = ((_b = max === null || max === void 0 ? void 0 : max.popover) === null || _b === void 0 ? void 0 : _b.placement) || maxPopoverPlacement || "top";
    const mergeProps = Object.assign(Object.assign({
      content: childrenHidden
    }, max === null || max === void 0 ? void 0 : max.popover), {
      overlayClassName: classNames(`${groupPrefixCls}-popover`, (_c = max === null || max === void 0 ? void 0 : max.popover) === null || _c === void 0 ? void 0 : _c.overlayClassName),
      placement: mergePopoverPlacement,
      trigger: mergePopoverTrigger
    });
    childrenShow.push(/* @__PURE__ */ reactExports.createElement(Popover, Object.assign({
      key: "avatar-popover-key",
      destroyTooltipOnHide: true
    }, mergeProps), /* @__PURE__ */ reactExports.createElement(Avatar$1, {
      style: mergeStyle
    }, `+${numOfChildren - mergeCount}`)));
    return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(AvatarContextProvider, {
      shape,
      size
    }, /* @__PURE__ */ reactExports.createElement("div", {
      className: cls,
      style
    }, childrenShow)));
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(AvatarContextProvider, {
    shape,
    size
  }, /* @__PURE__ */ reactExports.createElement("div", {
    className: cls,
    style
  }, childrenWithProps)));
};
const Avatar = Avatar$1;
Avatar.Group = Group$1;
var PreviewGroupContext = /* @__PURE__ */ reactExports.createContext(null);
var Operations = function Operations2(props) {
  var visible = props.visible, maskTransitionName = props.maskTransitionName, getContainer = props.getContainer, prefixCls = props.prefixCls, rootClassName = props.rootClassName, icons2 = props.icons, countRender = props.countRender, showSwitch = props.showSwitch, showProgress = props.showProgress, current = props.current, transform = props.transform, count = props.count, scale = props.scale, minScale = props.minScale, maxScale = props.maxScale, closeIcon = props.closeIcon, onSwitchLeft = props.onSwitchLeft, onSwitchRight = props.onSwitchRight, onClose = props.onClose, onZoomIn = props.onZoomIn, onZoomOut = props.onZoomOut, onRotateRight = props.onRotateRight, onRotateLeft = props.onRotateLeft, onFlipX = props.onFlipX, onFlipY = props.onFlipY, onReset = props.onReset, toolbarRender = props.toolbarRender, zIndex = props.zIndex, image = props.image;
  var groupContext = reactExports.useContext(PreviewGroupContext);
  var rotateLeft = icons2.rotateLeft, rotateRight = icons2.rotateRight, zoomIn = icons2.zoomIn, zoomOut = icons2.zoomOut, close = icons2.close, left = icons2.left, right = icons2.right, flipX = icons2.flipX, flipY = icons2.flipY;
  var toolClassName = "".concat(prefixCls, "-operations-operation");
  reactExports.useEffect(function() {
    var onKeyDown = function onKeyDown2(e) {
      if (e.keyCode === KeyCode.ESC) {
        onClose();
      }
    };
    if (visible) {
      window.addEventListener("keydown", onKeyDown);
    }
    return function() {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);
  var tools = [{
    icon: flipY,
    onClick: onFlipY,
    type: "flipY"
  }, {
    icon: flipX,
    onClick: onFlipX,
    type: "flipX"
  }, {
    icon: rotateLeft,
    onClick: onRotateLeft,
    type: "rotateLeft"
  }, {
    icon: rotateRight,
    onClick: onRotateRight,
    type: "rotateRight"
  }, {
    icon: zoomOut,
    onClick: onZoomOut,
    type: "zoomOut",
    disabled: scale <= minScale
  }, {
    icon: zoomIn,
    onClick: onZoomIn,
    type: "zoomIn",
    disabled: scale === maxScale
  }];
  var toolsNode = tools.map(function(_ref) {
    var _classnames;
    var icon = _ref.icon, onClick = _ref.onClick, type = _ref.type, disabled = _ref.disabled;
    return /* @__PURE__ */ reactExports.createElement("div", {
      className: classNames(toolClassName, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-operations-operation-").concat(type), true), _defineProperty(_classnames, "".concat(prefixCls, "-operations-operation-disabled"), !!disabled), _classnames)),
      onClick,
      key: type
    }, icon);
  });
  var toolbarNode = /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(prefixCls, "-operations")
  }, toolsNode);
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible,
    motionName: maskTransitionName
  }, function(_ref2) {
    var className = _ref2.className, style = _ref2.style;
    return /* @__PURE__ */ reactExports.createElement(Portal, {
      open: true,
      getContainer: getContainer !== null && getContainer !== void 0 ? getContainer : document.body
    }, /* @__PURE__ */ reactExports.createElement("div", {
      className: classNames("".concat(prefixCls, "-operations-wrapper"), className, rootClassName),
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        zIndex
      })
    }, closeIcon === null ? null : /* @__PURE__ */ reactExports.createElement("button", {
      className: "".concat(prefixCls, "-close"),
      onClick: onClose
    }, closeIcon || close), showSwitch && /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("div", {
      className: classNames("".concat(prefixCls, "-switch-left"), _defineProperty({}, "".concat(prefixCls, "-switch-left-disabled"), current === 0)),
      onClick: onSwitchLeft
    }, left), /* @__PURE__ */ reactExports.createElement("div", {
      className: classNames("".concat(prefixCls, "-switch-right"), _defineProperty({}, "".concat(prefixCls, "-switch-right-disabled"), current === count - 1)),
      onClick: onSwitchRight
    }, right)), /* @__PURE__ */ reactExports.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, showProgress && /* @__PURE__ */ reactExports.createElement("div", {
      className: "".concat(prefixCls, "-progress")
    }, countRender ? countRender(current + 1, count) : "".concat(current + 1, " / ").concat(count)), toolbarRender ? toolbarRender(toolbarNode, _objectSpread2(_objectSpread2({
      icons: {
        flipYIcon: toolsNode[0],
        flipXIcon: toolsNode[1],
        rotateLeftIcon: toolsNode[2],
        rotateRightIcon: toolsNode[3],
        zoomOutIcon: toolsNode[4],
        zoomInIcon: toolsNode[5]
      },
      actions: {
        onFlipY,
        onFlipX,
        onRotateLeft,
        onRotateRight,
        onZoomOut,
        onZoomIn,
        onReset,
        onClose
      },
      transform
    }, groupContext ? {
      current,
      total: count
    } : {}), {}, {
      image
    })) : toolbarNode)));
  });
};
var initialTransform = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: false,
  flipY: false
};
function useImageTransform(imgRef, minScale, maxScale, onTransform) {
  var frame = reactExports.useRef(null);
  var queue = reactExports.useRef([]);
  var _useState = reactExports.useState(initialTransform), _useState2 = _slicedToArray(_useState, 2), transform = _useState2[0], setTransform = _useState2[1];
  var resetTransform = function resetTransform2(action) {
    setTransform(initialTransform);
    if (!isEqual(initialTransform, transform)) {
      onTransform === null || onTransform === void 0 || onTransform({
        transform: initialTransform,
        action
      });
    }
  };
  var updateTransform = function updateTransform2(newTransform, action) {
    if (frame.current === null) {
      queue.current = [];
      frame.current = wrapperRaf(function() {
        setTransform(function(preState) {
          var memoState = preState;
          queue.current.forEach(function(queueState) {
            memoState = _objectSpread2(_objectSpread2({}, memoState), queueState);
          });
          frame.current = null;
          onTransform === null || onTransform === void 0 || onTransform({
            transform: memoState,
            action
          });
          return memoState;
        });
      });
    }
    queue.current.push(_objectSpread2(_objectSpread2({}, transform), newTransform));
  };
  var dispatchZoomChange = function dispatchZoomChange2(ratio, action, centerX, centerY, isTouch) {
    var _imgRef$current = imgRef.current, width = _imgRef$current.width, height = _imgRef$current.height, offsetWidth = _imgRef$current.offsetWidth, offsetHeight = _imgRef$current.offsetHeight, offsetLeft = _imgRef$current.offsetLeft, offsetTop = _imgRef$current.offsetTop;
    var newRatio = ratio;
    var newScale = transform.scale * ratio;
    if (newScale > maxScale) {
      newScale = maxScale;
      newRatio = maxScale / transform.scale;
    } else if (newScale < minScale) {
      newScale = isTouch ? newScale : minScale;
      newRatio = newScale / transform.scale;
    }
    var mergedCenterX = centerX !== null && centerX !== void 0 ? centerX : innerWidth / 2;
    var mergedCenterY = centerY !== null && centerY !== void 0 ? centerY : innerHeight / 2;
    var diffRatio = newRatio - 1;
    var diffImgX = diffRatio * width * 0.5;
    var diffImgY = diffRatio * height * 0.5;
    var diffOffsetLeft = diffRatio * (mergedCenterX - transform.x - offsetLeft);
    var diffOffsetTop = diffRatio * (mergedCenterY - transform.y - offsetTop);
    var newX = transform.x - (diffOffsetLeft - diffImgX);
    var newY = transform.y - (diffOffsetTop - diffImgY);
    if (ratio < 1 && newScale === 1) {
      var mergedWidth = offsetWidth * newScale;
      var mergedHeight = offsetHeight * newScale;
      var _getClientSize = getClientSize(), clientWidth = _getClientSize.width, clientHeight = _getClientSize.height;
      if (mergedWidth <= clientWidth && mergedHeight <= clientHeight) {
        newX = 0;
        newY = 0;
      }
    }
    updateTransform({
      x: newX,
      y: newY,
      scale: newScale
    }, action);
  };
  return {
    transform,
    resetTransform,
    updateTransform,
    dispatchZoomChange
  };
}
function fixPoint(key, start, width, clientWidth) {
  var startAddWidth = start + width;
  var offsetStart = (width - clientWidth) / 2;
  if (width > clientWidth) {
    if (start > 0) {
      return _defineProperty({}, key, offsetStart);
    }
    if (start < 0 && startAddWidth < clientWidth) {
      return _defineProperty({}, key, -offsetStart);
    }
  } else if (start < 0 || startAddWidth > clientWidth) {
    return _defineProperty({}, key, start < 0 ? offsetStart : -offsetStart);
  }
  return {};
}
function getFixScaleEleTransPosition(width, height, left, top) {
  var _getClientSize = getClientSize(), clientWidth = _getClientSize.width, clientHeight = _getClientSize.height;
  var fixPos = null;
  if (width <= clientWidth && height <= clientHeight) {
    fixPos = {
      x: 0,
      y: 0
    };
  } else if (width > clientWidth || height > clientHeight) {
    fixPos = _objectSpread2(_objectSpread2({}, fixPoint("x", left, width, clientWidth)), fixPoint("y", top, height, clientHeight));
  }
  return fixPos;
}
var BASE_SCALE_RATIO = 1;
var WHEEL_MAX_SCALE_RATIO = 1;
function useMouseEvent(imgRef, movable, visible, scaleStep, transform, updateTransform, dispatchZoomChange) {
  var rotate = transform.rotate, scale = transform.scale, x = transform.x, y = transform.y;
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), isMoving = _useState2[0], setMoving = _useState2[1];
  var startPositionInfo = reactExports.useRef({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0
  });
  var onMouseDown = function onMouseDown2(event) {
    if (!movable || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    startPositionInfo.current = {
      diffX: event.pageX - x,
      diffY: event.pageY - y,
      transformX: x,
      transformY: y
    };
    setMoving(true);
  };
  var onMouseMove = function onMouseMove2(event) {
    if (visible && isMoving) {
      updateTransform({
        x: event.pageX - startPositionInfo.current.diffX,
        y: event.pageY - startPositionInfo.current.diffY
      }, "move");
    }
  };
  var onMouseUp = function onMouseUp2() {
    if (visible && isMoving) {
      setMoving(false);
      var _startPositionInfo$cu = startPositionInfo.current, transformX = _startPositionInfo$cu.transformX, transformY = _startPositionInfo$cu.transformY;
      var hasChangedPosition = x !== transformX && y !== transformY;
      if (!hasChangedPosition) return;
      var width = imgRef.current.offsetWidth * scale;
      var height = imgRef.current.offsetHeight * scale;
      var _imgRef$current$getBo = imgRef.current.getBoundingClientRect(), left = _imgRef$current$getBo.left, top = _imgRef$current$getBo.top;
      var isRotate = rotate % 180 !== 0;
      var fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, left, top);
      if (fixState) {
        updateTransform(_objectSpread2({}, fixState), "dragRebound");
      }
    }
  };
  var onWheel = function onWheel2(event) {
    if (!visible || event.deltaY == 0) return;
    var scaleRatio = Math.abs(event.deltaY / 100);
    var mergedScaleRatio = Math.min(scaleRatio, WHEEL_MAX_SCALE_RATIO);
    var ratio = BASE_SCALE_RATIO + mergedScaleRatio * scaleStep;
    if (event.deltaY > 0) {
      ratio = BASE_SCALE_RATIO / ratio;
    }
    dispatchZoomChange(ratio, "wheel", event.clientX, event.clientY);
  };
  reactExports.useEffect(function() {
    var onTopMouseUpListener;
    var onTopMouseMoveListener;
    var onMouseUpListener;
    var onMouseMoveListener;
    if (movable) {
      onMouseUpListener = addEventListenerWrap(window, "mouseup", onMouseUp, false);
      onMouseMoveListener = addEventListenerWrap(window, "mousemove", onMouseMove, false);
      try {
        if (window.top !== window.self) {
          onTopMouseUpListener = addEventListenerWrap(window.top, "mouseup", onMouseUp, false);
          onTopMouseMoveListener = addEventListenerWrap(window.top, "mousemove", onMouseMove, false);
        }
      } catch (error) {
      }
    }
    return function() {
      var _onMouseUpListener, _onMouseMoveListener, _onTopMouseUpListener, _onTopMouseMoveListen;
      (_onMouseUpListener = onMouseUpListener) === null || _onMouseUpListener === void 0 || _onMouseUpListener.remove();
      (_onMouseMoveListener = onMouseMoveListener) === null || _onMouseMoveListener === void 0 || _onMouseMoveListener.remove();
      (_onTopMouseUpListener = onTopMouseUpListener) === null || _onTopMouseUpListener === void 0 || _onTopMouseUpListener.remove();
      (_onTopMouseMoveListen = onTopMouseMoveListener) === null || _onTopMouseMoveListen === void 0 || _onTopMouseMoveListen.remove();
    };
  }, [visible, isMoving, x, y, rotate, movable]);
  return {
    isMoving,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onWheel
  };
}
function isImageValid(src) {
  return new Promise(function(resolve) {
    var img = document.createElement("img");
    img.onerror = function() {
      return resolve(false);
    };
    img.onload = function() {
      return resolve(true);
    };
    img.src = src;
  });
}
function useStatus(_ref) {
  var src = _ref.src, isCustomPlaceholder = _ref.isCustomPlaceholder, fallback = _ref.fallback;
  var _useState = reactExports.useState(isCustomPlaceholder ? "loading" : "normal"), _useState2 = _slicedToArray(_useState, 2), status = _useState2[0], setStatus = _useState2[1];
  var isLoaded = reactExports.useRef(false);
  var isError = status === "error";
  reactExports.useEffect(function() {
    var isCurrentSrc = true;
    isImageValid(src).then(function(isValid) {
      if (!isValid && isCurrentSrc) {
        setStatus("error");
      }
    });
    return function() {
      isCurrentSrc = false;
    };
  }, [src]);
  reactExports.useEffect(function() {
    if (isCustomPlaceholder && !isLoaded.current) {
      setStatus("loading");
    } else if (isError) {
      setStatus("normal");
    }
  }, [src]);
  var onLoad = function onLoad2() {
    setStatus("normal");
  };
  var getImgRef = function getImgRef2(img) {
    isLoaded.current = false;
    if (status === "loading" && img !== null && img !== void 0 && img.complete && (img.naturalWidth || img.naturalHeight)) {
      isLoaded.current = true;
      onLoad();
    }
  };
  var srcAndOnload = isError && fallback ? {
    src: fallback
  } : {
    onLoad,
    src
  };
  return [getImgRef, srcAndOnload, status];
}
function getDistance(a, b) {
  var x = a.x - b.x;
  var y = a.y - b.y;
  return Math.hypot(x, y);
}
function getCenter(oldPoint1, oldPoint2, newPoint1, newPoint2) {
  var distance1 = getDistance(oldPoint1, newPoint1);
  var distance2 = getDistance(oldPoint2, newPoint2);
  if (distance1 === 0 && distance2 === 0) {
    return [oldPoint1.x, oldPoint1.y];
  }
  var ratio = distance1 / (distance1 + distance2);
  var x = oldPoint1.x + ratio * (oldPoint2.x - oldPoint1.x);
  var y = oldPoint1.y + ratio * (oldPoint2.y - oldPoint1.y);
  return [x, y];
}
function useTouchEvent(imgRef, movable, visible, minScale, transform, updateTransform, dispatchZoomChange) {
  var rotate = transform.rotate, scale = transform.scale, x = transform.x, y = transform.y;
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), isTouching = _useState2[0], setIsTouching = _useState2[1];
  var touchPointInfo = reactExports.useRef({
    point1: {
      x: 0,
      y: 0
    },
    point2: {
      x: 0,
      y: 0
    },
    eventType: "none"
  });
  var updateTouchPointInfo = function updateTouchPointInfo2(values) {
    touchPointInfo.current = _objectSpread2(_objectSpread2({}, touchPointInfo.current), values);
  };
  var onTouchStart = function onTouchStart2(event) {
    if (!movable) return;
    event.stopPropagation();
    setIsTouching(true);
    var _event$touches = event.touches, touches = _event$touches === void 0 ? [] : _event$touches;
    if (touches.length > 1) {
      updateTouchPointInfo({
        point1: {
          x: touches[0].clientX,
          y: touches[0].clientY
        },
        point2: {
          x: touches[1].clientX,
          y: touches[1].clientY
        },
        eventType: "touchZoom"
      });
    } else {
      updateTouchPointInfo({
        point1: {
          x: touches[0].clientX - x,
          y: touches[0].clientY - y
        },
        eventType: "move"
      });
    }
  };
  var onTouchMove = function onTouchMove2(event) {
    var _event$touches2 = event.touches, touches = _event$touches2 === void 0 ? [] : _event$touches2;
    var _touchPointInfo$curre = touchPointInfo.current, point1 = _touchPointInfo$curre.point1, point2 = _touchPointInfo$curre.point2, eventType = _touchPointInfo$curre.eventType;
    if (touches.length > 1 && eventType === "touchZoom") {
      var newPoint1 = {
        x: touches[0].clientX,
        y: touches[0].clientY
      };
      var newPoint2 = {
        x: touches[1].clientX,
        y: touches[1].clientY
      };
      var _getCenter = getCenter(point1, point2, newPoint1, newPoint2), _getCenter2 = _slicedToArray(_getCenter, 2), centerX = _getCenter2[0], centerY = _getCenter2[1];
      var ratio = getDistance(newPoint1, newPoint2) / getDistance(point1, point2);
      dispatchZoomChange(ratio, "touchZoom", centerX, centerY, true);
      updateTouchPointInfo({
        point1: newPoint1,
        point2: newPoint2,
        eventType: "touchZoom"
      });
    } else if (eventType === "move") {
      updateTransform({
        x: touches[0].clientX - point1.x,
        y: touches[0].clientY - point1.y
      }, "move");
      updateTouchPointInfo({
        eventType: "move"
      });
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    if (!visible) return;
    if (isTouching) {
      setIsTouching(false);
    }
    updateTouchPointInfo({
      eventType: "none"
    });
    if (minScale > scale) {
      return updateTransform({
        x: 0,
        y: 0,
        scale: minScale
      }, "touchZoom");
    }
    var width = imgRef.current.offsetWidth * scale;
    var height = imgRef.current.offsetHeight * scale;
    var _imgRef$current$getBo = imgRef.current.getBoundingClientRect(), left = _imgRef$current$getBo.left, top = _imgRef$current$getBo.top;
    var isRotate = rotate % 180 !== 0;
    var fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, left, top);
    if (fixState) {
      updateTransform(_objectSpread2({}, fixState), "dragRebound");
    }
  };
  reactExports.useEffect(function() {
    var onTouchMoveListener;
    if (visible && movable) {
      onTouchMoveListener = addEventListenerWrap(window, "touchmove", function(e) {
        return e.preventDefault();
      }, {
        passive: false
      });
    }
    return function() {
      var _onTouchMoveListener;
      (_onTouchMoveListener = onTouchMoveListener) === null || _onTouchMoveListener === void 0 || _onTouchMoveListener.remove();
    };
  }, [visible, movable]);
  return {
    isTouching,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
}
var _excluded$2 = ["fallback", "src", "imgRef"], _excluded2$2 = ["prefixCls", "src", "alt", "imageInfo", "fallback", "movable", "onClose", "visible", "icons", "rootClassName", "closeIcon", "getContainer", "current", "count", "countRender", "scaleStep", "minScale", "maxScale", "transitionName", "maskTransitionName", "imageRender", "imgCommonProps", "toolbarRender", "onTransform", "onChange"];
var PreviewImage = function PreviewImage2(_ref) {
  var fallback = _ref.fallback, src = _ref.src, imgRef = _ref.imgRef, props = _objectWithoutProperties(_ref, _excluded$2);
  var _useStatus = useStatus({
    src,
    fallback
  }), _useStatus2 = _slicedToArray(_useStatus, 2), getImgRef = _useStatus2[0], srcAndOnload = _useStatus2[1];
  return /* @__PURE__ */ React.createElement("img", _extends({
    ref: function ref(_ref2) {
      imgRef.current = _ref2;
      getImgRef(_ref2);
    }
  }, props, srcAndOnload));
};
var Preview = function Preview2(props) {
  var prefixCls = props.prefixCls, src = props.src, alt = props.alt, imageInfo = props.imageInfo, fallback = props.fallback, _props$movable = props.movable, movable = _props$movable === void 0 ? true : _props$movable, onClose = props.onClose, visible = props.visible, _props$icons = props.icons, icons2 = _props$icons === void 0 ? {} : _props$icons, rootClassName = props.rootClassName, closeIcon = props.closeIcon, getContainer = props.getContainer, _props$current = props.current, current = _props$current === void 0 ? 0 : _props$current, _props$count = props.count, count = _props$count === void 0 ? 1 : _props$count, countRender = props.countRender, _props$scaleStep = props.scaleStep, scaleStep = _props$scaleStep === void 0 ? 0.5 : _props$scaleStep, _props$minScale = props.minScale, minScale = _props$minScale === void 0 ? 1 : _props$minScale, _props$maxScale = props.maxScale, maxScale = _props$maxScale === void 0 ? 50 : _props$maxScale, _props$transitionName = props.transitionName, transitionName = _props$transitionName === void 0 ? "zoom" : _props$transitionName, _props$maskTransition = props.maskTransitionName, maskTransitionName = _props$maskTransition === void 0 ? "fade" : _props$maskTransition, imageRender = props.imageRender, imgCommonProps = props.imgCommonProps, toolbarRender = props.toolbarRender, onTransform = props.onTransform, onChange = props.onChange, restProps = _objectWithoutProperties(props, _excluded2$2);
  var imgRef = reactExports.useRef();
  var groupContext = reactExports.useContext(PreviewGroupContext);
  var showLeftOrRightSwitches = groupContext && count > 1;
  var showOperationsProgress = groupContext && count >= 1;
  var _useState = reactExports.useState(true), _useState2 = _slicedToArray(_useState, 2), enableTransition = _useState2[0], setEnableTransition = _useState2[1];
  var _useImageTransform = useImageTransform(imgRef, minScale, maxScale, onTransform), transform = _useImageTransform.transform, resetTransform = _useImageTransform.resetTransform, updateTransform = _useImageTransform.updateTransform, dispatchZoomChange = _useImageTransform.dispatchZoomChange;
  var _useMouseEvent = useMouseEvent(imgRef, movable, visible, scaleStep, transform, updateTransform, dispatchZoomChange), isMoving = _useMouseEvent.isMoving, onMouseDown = _useMouseEvent.onMouseDown, onWheel = _useMouseEvent.onWheel;
  var _useTouchEvent = useTouchEvent(imgRef, movable, visible, minScale, transform, updateTransform, dispatchZoomChange), isTouching = _useTouchEvent.isTouching, onTouchStart = _useTouchEvent.onTouchStart, onTouchMove = _useTouchEvent.onTouchMove, onTouchEnd = _useTouchEvent.onTouchEnd;
  var rotate = transform.rotate, scale = transform.scale;
  var wrapClassName = classNames(_defineProperty({}, "".concat(prefixCls, "-moving"), isMoving));
  reactExports.useEffect(function() {
    if (!enableTransition) {
      setEnableTransition(true);
    }
  }, [enableTransition]);
  var onAfterClose = function onAfterClose2() {
    resetTransform("close");
  };
  var onZoomIn = function onZoomIn2() {
    dispatchZoomChange(BASE_SCALE_RATIO + scaleStep, "zoomIn");
  };
  var onZoomOut = function onZoomOut2() {
    dispatchZoomChange(BASE_SCALE_RATIO / (BASE_SCALE_RATIO + scaleStep), "zoomOut");
  };
  var onRotateRight = function onRotateRight2() {
    updateTransform({
      rotate: rotate + 90
    }, "rotateRight");
  };
  var onRotateLeft = function onRotateLeft2() {
    updateTransform({
      rotate: rotate - 90
    }, "rotateLeft");
  };
  var onFlipX = function onFlipX2() {
    updateTransform({
      flipX: !transform.flipX
    }, "flipX");
  };
  var onFlipY = function onFlipY2() {
    updateTransform({
      flipY: !transform.flipY
    }, "flipY");
  };
  var onReset = function onReset2() {
    resetTransform("reset");
  };
  var onSwitchLeft = function onSwitchLeft2(event) {
    event === null || event === void 0 || event.preventDefault();
    event === null || event === void 0 || event.stopPropagation();
    if (current > 0) {
      setEnableTransition(false);
      resetTransform("prev");
      onChange === null || onChange === void 0 || onChange(current - 1, current);
    }
  };
  var onSwitchRight = function onSwitchRight2(event) {
    event === null || event === void 0 || event.preventDefault();
    event === null || event === void 0 || event.stopPropagation();
    if (current < count - 1) {
      setEnableTransition(false);
      resetTransform("next");
      onChange === null || onChange === void 0 || onChange(current + 1, current);
    }
  };
  var onKeyDown = function onKeyDown2(event) {
    if (!visible || !showLeftOrRightSwitches) return;
    if (event.keyCode === KeyCode.LEFT) {
      onSwitchLeft();
    } else if (event.keyCode === KeyCode.RIGHT) {
      onSwitchRight();
    }
  };
  var onDoubleClick = function onDoubleClick2(event) {
    if (visible) {
      if (scale !== 1) {
        updateTransform({
          x: 0,
          y: 0,
          scale: 1
        }, "doubleClick");
      } else {
        dispatchZoomChange(BASE_SCALE_RATIO + scaleStep, "doubleClick", event.clientX, event.clientY);
      }
    }
  };
  reactExports.useEffect(function() {
    var onKeyDownListener = addEventListenerWrap(window, "keydown", onKeyDown, false);
    return function() {
      onKeyDownListener.remove();
    };
  }, [visible, showLeftOrRightSwitches, current]);
  var imgNode = /* @__PURE__ */ React.createElement(PreviewImage, _extends({}, imgCommonProps, {
    width: props.width,
    height: props.height,
    imgRef,
    className: "".concat(prefixCls, "-img"),
    alt,
    style: {
      transform: "translate3d(".concat(transform.x, "px, ").concat(transform.y, "px, 0) scale3d(").concat(transform.flipX ? "-" : "").concat(scale, ", ").concat(transform.flipY ? "-" : "").concat(scale, ", 1) rotate(").concat(rotate, "deg)"),
      transitionDuration: (!enableTransition || isTouching) && "0s"
    },
    fallback,
    src,
    onWheel,
    onMouseDown,
    onDoubleClick,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel: onTouchEnd
  }));
  var image = _objectSpread2({
    url: src,
    alt
  }, imageInfo);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DialogWrap, _extends({
    transitionName,
    maskTransitionName,
    closable: false,
    keyboard: true,
    prefixCls,
    onClose,
    visible,
    classNames: {
      wrapper: wrapClassName
    },
    rootClassName,
    getContainer
  }, restProps, {
    afterClose: onAfterClose
  }), /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefixCls, "-img-wrapper")
  }, imageRender ? imageRender(imgNode, _objectSpread2({
    transform,
    image
  }, groupContext ? {
    current
  } : {})) : imgNode)), /* @__PURE__ */ React.createElement(Operations, {
    visible,
    transform,
    maskTransitionName,
    closeIcon,
    getContainer,
    prefixCls,
    rootClassName,
    icons: icons2,
    countRender,
    showSwitch: showLeftOrRightSwitches,
    showProgress: showOperationsProgress,
    current,
    count,
    scale,
    minScale,
    maxScale,
    toolbarRender,
    onSwitchLeft,
    onSwitchRight,
    onZoomIn,
    onZoomOut,
    onRotateRight,
    onRotateLeft,
    onFlipX,
    onFlipY,
    onClose,
    onReset,
    zIndex: restProps.zIndex !== void 0 ? restProps.zIndex + 1 : void 0,
    image
  }));
};
var COMMON_PROPS = ["crossOrigin", "decoding", "draggable", "loading", "referrerPolicy", "sizes", "srcSet", "useMap", "alt"];
function usePreviewItems(items) {
  var _React$useState = reactExports.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), images = _React$useState2[0], setImages = _React$useState2[1];
  var registerImage = reactExports.useCallback(function(id, data) {
    setImages(function(imgs) {
      return _objectSpread2(_objectSpread2({}, imgs), {}, _defineProperty({}, id, data));
    });
    return function() {
      setImages(function(imgs) {
        var cloneImgs = _objectSpread2({}, imgs);
        delete cloneImgs[id];
        return cloneImgs;
      });
    };
  }, []);
  var mergedItems = reactExports.useMemo(function() {
    if (items) {
      return items.map(function(item) {
        if (typeof item === "string") {
          return {
            data: {
              src: item
            }
          };
        }
        var data = {};
        Object.keys(item).forEach(function(key) {
          if (["src"].concat(_toConsumableArray(COMMON_PROPS)).includes(key)) {
            data[key] = item[key];
          }
        });
        return {
          data
        };
      });
    }
    return Object.keys(images).reduce(function(total, id) {
      var _images$id = images[id], canPreview = _images$id.canPreview, data = _images$id.data;
      if (canPreview) {
        total.push({
          data,
          id
        });
      }
      return total;
    }, []);
  }, [items, images]);
  return [mergedItems, registerImage, !!items];
}
var _excluded$1 = ["visible", "onVisibleChange", "getContainer", "current", "movable", "minScale", "maxScale", "countRender", "closeIcon", "onChange", "onTransform", "toolbarRender", "imageRender"], _excluded2$1 = ["src"];
var Group = function Group2(_ref) {
  var _mergedItems$current;
  var _ref$previewPrefixCls = _ref.previewPrefixCls, previewPrefixCls = _ref$previewPrefixCls === void 0 ? "rc-image-preview" : _ref$previewPrefixCls, children = _ref.children, _ref$icons = _ref.icons, icons2 = _ref$icons === void 0 ? {} : _ref$icons, items = _ref.items, preview = _ref.preview, fallback = _ref.fallback;
  var _ref2 = _typeof(preview) === "object" ? preview : {}, previewVisible = _ref2.visible, onVisibleChange = _ref2.onVisibleChange, getContainer = _ref2.getContainer, currentIndex = _ref2.current, movable = _ref2.movable, minScale = _ref2.minScale, maxScale = _ref2.maxScale, countRender = _ref2.countRender, closeIcon = _ref2.closeIcon, onChange = _ref2.onChange, onTransform = _ref2.onTransform, toolbarRender = _ref2.toolbarRender, imageRender = _ref2.imageRender, dialogProps = _objectWithoutProperties(_ref2, _excluded$1);
  var _usePreviewItems = usePreviewItems(items), _usePreviewItems2 = _slicedToArray(_usePreviewItems, 3), mergedItems = _usePreviewItems2[0], register = _usePreviewItems2[1], fromItems = _usePreviewItems2[2];
  var _useMergedState = useMergedState(0, {
    value: currentIndex
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), current = _useMergedState2[0], setCurrent = _useMergedState2[1];
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), keepOpenIndex = _useState2[0], setKeepOpenIndex = _useState2[1];
  var _ref3 = ((_mergedItems$current = mergedItems[current]) === null || _mergedItems$current === void 0 ? void 0 : _mergedItems$current.data) || {}, src = _ref3.src, imgCommonProps = _objectWithoutProperties(_ref3, _excluded2$1);
  var _useMergedState3 = useMergedState(!!previewVisible, {
    value: previewVisible,
    onChange: function onChange2(val, prevVal) {
      onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(val, prevVal, current);
    }
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), isShowPreview = _useMergedState4[0], setShowPreview = _useMergedState4[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), mousePosition = _useState4[0], setMousePosition = _useState4[1];
  var onPreviewFromImage = reactExports.useCallback(function(id, imageSrc, mouseX, mouseY) {
    var index = fromItems ? mergedItems.findIndex(function(item) {
      return item.data.src === imageSrc;
    }) : mergedItems.findIndex(function(item) {
      return item.id === id;
    });
    setCurrent(index < 0 ? 0 : index);
    setShowPreview(true);
    setMousePosition({
      x: mouseX,
      y: mouseY
    });
    setKeepOpenIndex(true);
  }, [mergedItems, fromItems]);
  reactExports.useEffect(function() {
    if (isShowPreview) {
      if (!keepOpenIndex) {
        setCurrent(0);
      }
    } else {
      setKeepOpenIndex(false);
    }
  }, [isShowPreview]);
  var onInternalChange = function onInternalChange2(next, prev) {
    setCurrent(next);
    onChange === null || onChange === void 0 || onChange(next, prev);
  };
  var onPreviewClose = function onPreviewClose2() {
    setShowPreview(false);
    setMousePosition(null);
  };
  var previewGroupContext = reactExports.useMemo(function() {
    return {
      register,
      onPreview: onPreviewFromImage
    };
  }, [register, onPreviewFromImage]);
  return /* @__PURE__ */ reactExports.createElement(PreviewGroupContext.Provider, {
    value: previewGroupContext
  }, children, /* @__PURE__ */ reactExports.createElement(Preview, _extends({
    "aria-hidden": !isShowPreview,
    movable,
    visible: isShowPreview,
    prefixCls: previewPrefixCls,
    closeIcon,
    onClose: onPreviewClose,
    mousePosition,
    imgCommonProps,
    src,
    fallback,
    icons: icons2,
    minScale,
    maxScale,
    getContainer,
    current,
    count: mergedItems.length,
    countRender,
    onTransform,
    toolbarRender,
    imageRender,
    onChange: onInternalChange
  }, dialogProps)));
};
var uid = 0;
function useRegisterImage(canPreview, data) {
  var _React$useState = reactExports.useState(function() {
    uid += 1;
    return String(uid);
  }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
  var groupContext = reactExports.useContext(PreviewGroupContext);
  var registerData = {
    data,
    canPreview
  };
  reactExports.useEffect(function() {
    if (groupContext) {
      return groupContext.register(id, registerData);
    }
  }, []);
  reactExports.useEffect(function() {
    if (groupContext) {
      groupContext.register(id, registerData);
    }
  }, [canPreview, data]);
  return id;
}
var _excluded = ["src", "alt", "onPreviewClose", "prefixCls", "previewPrefixCls", "placeholder", "fallback", "width", "height", "style", "preview", "className", "onClick", "onError", "wrapperClassName", "wrapperStyle", "rootClassName"], _excluded2 = ["src", "visible", "onVisibleChange", "getContainer", "mask", "maskClassName", "movable", "icons", "scaleStep", "minScale", "maxScale", "imageRender", "toolbarRender"];
var ImageInternal = function ImageInternal2(props) {
  var imgSrc = props.src, alt = props.alt, onInitialPreviewClose = props.onPreviewClose, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-image" : _props$prefixCls, _props$previewPrefixC = props.previewPrefixCls, previewPrefixCls = _props$previewPrefixC === void 0 ? "".concat(prefixCls, "-preview") : _props$previewPrefixC, placeholder = props.placeholder, fallback = props.fallback, width = props.width, height = props.height, style = props.style, _props$preview = props.preview, preview = _props$preview === void 0 ? true : _props$preview, className = props.className, onClick = props.onClick, onError = props.onError, wrapperClassName = props.wrapperClassName, wrapperStyle = props.wrapperStyle, rootClassName = props.rootClassName, otherProps = _objectWithoutProperties(props, _excluded);
  var isCustomPlaceholder = placeholder && placeholder !== true;
  var _ref = _typeof(preview) === "object" ? preview : {}, previewSrc = _ref.src, _ref$visible = _ref.visible, previewVisible = _ref$visible === void 0 ? void 0 : _ref$visible, _ref$onVisibleChange = _ref.onVisibleChange, onPreviewVisibleChange = _ref$onVisibleChange === void 0 ? onInitialPreviewClose : _ref$onVisibleChange, _ref$getContainer = _ref.getContainer, getPreviewContainer = _ref$getContainer === void 0 ? void 0 : _ref$getContainer, previewMask = _ref.mask, maskClassName = _ref.maskClassName, movable = _ref.movable, icons2 = _ref.icons, scaleStep = _ref.scaleStep, minScale = _ref.minScale, maxScale = _ref.maxScale, imageRender = _ref.imageRender, toolbarRender = _ref.toolbarRender, dialogProps = _objectWithoutProperties(_ref, _excluded2);
  var src = previewSrc !== null && previewSrc !== void 0 ? previewSrc : imgSrc;
  var _useMergedState = useMergedState(!!previewVisible, {
    value: previewVisible,
    onChange: onPreviewVisibleChange
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), isShowPreview = _useMergedState2[0], setShowPreview = _useMergedState2[1];
  var _useStatus = useStatus({
    src: imgSrc,
    isCustomPlaceholder,
    fallback
  }), _useStatus2 = _slicedToArray(_useStatus, 3), getImgRef = _useStatus2[0], srcAndOnload = _useStatus2[1], status = _useStatus2[2];
  var _useState = reactExports.useState(null), _useState2 = _slicedToArray(_useState, 2), mousePosition = _useState2[0], setMousePosition = _useState2[1];
  var groupContext = reactExports.useContext(PreviewGroupContext);
  var canPreview = !!preview;
  var onPreviewClose = function onPreviewClose2() {
    setShowPreview(false);
    setMousePosition(null);
  };
  var wrapperClass = classNames(prefixCls, wrapperClassName, rootClassName, _defineProperty({}, "".concat(prefixCls, "-error"), status === "error"));
  var imgCommonProps = reactExports.useMemo(function() {
    var obj = {};
    COMMON_PROPS.forEach(function(prop) {
      if (props[prop] !== void 0) {
        obj[prop] = props[prop];
      }
    });
    return obj;
  }, COMMON_PROPS.map(function(prop) {
    return props[prop];
  }));
  var registerData = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, imgCommonProps), {}, {
      src
    });
  }, [src, imgCommonProps]);
  var imageId = useRegisterImage(canPreview, registerData);
  var onPreview = function onPreview2(e) {
    var _getOffset = getOffset(e.target), left = _getOffset.left, top = _getOffset.top;
    if (groupContext) {
      groupContext.onPreview(imageId, src, left, top);
    } else {
      setMousePosition({
        x: left,
        y: top
      });
      setShowPreview(true);
    }
    onClick === null || onClick === void 0 || onClick(e);
  };
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("div", _extends({}, otherProps, {
    className: wrapperClass,
    onClick: canPreview ? onPreview : onClick,
    style: _objectSpread2({
      width,
      height
    }, wrapperStyle)
  }), /* @__PURE__ */ reactExports.createElement("img", _extends({}, imgCommonProps, {
    className: classNames("".concat(prefixCls, "-img"), _defineProperty({}, "".concat(prefixCls, "-img-placeholder"), placeholder === true), className),
    style: _objectSpread2({
      height
    }, style),
    ref: getImgRef
  }, srcAndOnload, {
    width,
    height,
    onError
  })), status === "loading" && /* @__PURE__ */ reactExports.createElement("div", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-placeholder")
  }, placeholder), previewMask && canPreview && /* @__PURE__ */ reactExports.createElement("div", {
    className: classNames("".concat(prefixCls, "-mask"), maskClassName),
    style: {
      display: (style === null || style === void 0 ? void 0 : style.display) === "none" ? "none" : void 0
    }
  }, previewMask)), !groupContext && canPreview && /* @__PURE__ */ reactExports.createElement(Preview, _extends({
    "aria-hidden": !isShowPreview,
    visible: isShowPreview,
    prefixCls: previewPrefixCls,
    onClose: onPreviewClose,
    mousePosition,
    src,
    alt,
    imageInfo: {
      width,
      height
    },
    fallback,
    getContainer: getPreviewContainer,
    icons: icons2,
    movable,
    scaleStep,
    minScale,
    maxScale,
    rootClassName,
    imageRender,
    imgCommonProps,
    toolbarRender
  }, dialogProps)));
};
ImageInternal.PreviewGroup = Group;
var RotateLeftOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { "tag": "path", "attrs": { "d": "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, "name": "rotate-left", "theme": "outlined" };
var RotateLeftOutlined = function RotateLeftOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: RotateLeftOutlined$1
  }));
};
var RefIcon$5 = /* @__PURE__ */ reactExports.forwardRef(RotateLeftOutlined);
var RotateRightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { "tag": "path", "attrs": { "d": "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, "name": "rotate-right", "theme": "outlined" };
var RotateRightOutlined = function RotateRightOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: RotateRightOutlined$1
  }));
};
var RefIcon$4 = /* @__PURE__ */ reactExports.forwardRef(RotateRightOutlined);
var SwapOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, "name": "swap", "theme": "outlined" };
var SwapOutlined = function SwapOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: SwapOutlined$1
  }));
};
var RefIcon$3 = /* @__PURE__ */ reactExports.forwardRef(SwapOutlined);
var ZoomInOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, "name": "zoom-in", "theme": "outlined" };
var ZoomInOutlined = function ZoomInOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: ZoomInOutlined$1
  }));
};
var RefIcon$2 = /* @__PURE__ */ reactExports.forwardRef(ZoomInOutlined);
var ZoomOutOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, "name": "zoom-out", "theme": "outlined" };
var ZoomOutOutlined = function ZoomOutOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: ZoomOutOutlined$1
  }));
};
var RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(ZoomOutOutlined);
const genBoxStyle = (position) => ({
  position: position || "absolute",
  inset: 0
});
const genImageMaskStyle = (token) => {
  const {
    iconCls,
    motionDurationSlow,
    paddingXXS,
    marginXXS,
    prefixCls,
    colorTextLightSolid
  } = token;
  return {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colorTextLightSolid,
    background: new TinyColor("#000").setAlpha(0.5).toRgbString(),
    cursor: "pointer",
    opacity: 0,
    transition: `opacity ${motionDurationSlow}`,
    [`.${prefixCls}-mask-info`]: Object.assign(Object.assign({}, textEllipsis), {
      padding: `0 ${unit(paddingXXS)}`,
      [iconCls]: {
        marginInlineEnd: marginXXS,
        svg: {
          verticalAlign: "baseline"
        }
      }
    })
  };
};
const genPreviewOperationsStyle = (token) => {
  const {
    previewCls,
    modalMaskBg,
    paddingSM,
    marginXL,
    margin,
    paddingLG,
    previewOperationColorDisabled,
    previewOperationHoverColor,
    motionDurationSlow,
    iconCls,
    colorTextLightSolid
  } = token;
  const operationBg = new TinyColor(modalMaskBg).setAlpha(0.1);
  const operationBgHover = operationBg.clone().setAlpha(0.2);
  return {
    [`${previewCls}-footer`]: {
      position: "fixed",
      bottom: marginXL,
      left: {
        _skip_check_: true,
        value: "50%"
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: token.previewOperationColor,
      transform: "translateX(-50%)"
    },
    [`${previewCls}-progress`]: {
      marginBottom: margin
    },
    [`${previewCls}-close`]: {
      position: "fixed",
      top: marginXL,
      right: {
        _skip_check_: true,
        value: marginXL
      },
      display: "flex",
      color: colorTextLightSolid,
      backgroundColor: operationBg.toRgbString(),
      borderRadius: "50%",
      padding: paddingSM,
      outline: 0,
      border: 0,
      cursor: "pointer",
      transition: `all ${motionDurationSlow}`,
      "&:hover": {
        backgroundColor: operationBgHover.toRgbString()
      },
      [`& > ${iconCls}`]: {
        fontSize: token.previewOperationSize
      }
    },
    [`${previewCls}-operations`]: {
      display: "flex",
      alignItems: "center",
      padding: `0 ${unit(paddingLG)}`,
      backgroundColor: operationBg.toRgbString(),
      borderRadius: 100,
      "&-operation": {
        marginInlineStart: paddingSM,
        padding: paddingSM,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        userSelect: "none",
        [`&:not(${previewCls}-operations-operation-disabled):hover > ${iconCls}`]: {
          color: previewOperationHoverColor
        },
        "&-disabled": {
          color: previewOperationColorDisabled,
          cursor: "not-allowed"
        },
        "&:first-of-type": {
          marginInlineStart: 0
        },
        [`& > ${iconCls}`]: {
          fontSize: token.previewOperationSize
        }
      }
    }
  };
};
const genPreviewSwitchStyle = (token) => {
  const {
    modalMaskBg,
    iconCls,
    previewOperationColorDisabled,
    previewCls,
    zIndexPopup,
    motionDurationSlow
  } = token;
  const operationBg = new TinyColor(modalMaskBg).setAlpha(0.1);
  const operationBgHover = operationBg.clone().setAlpha(0.2);
  return {
    [`${previewCls}-switch-left, ${previewCls}-switch-right`]: {
      position: "fixed",
      insetBlockStart: "50%",
      zIndex: token.calc(zIndexPopup).add(1).equal(),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: token.imagePreviewSwitchSize,
      height: token.imagePreviewSwitchSize,
      marginTop: token.calc(token.imagePreviewSwitchSize).mul(-1).div(2).equal(),
      color: token.previewOperationColor,
      background: operationBg.toRgbString(),
      borderRadius: "50%",
      transform: `translateY(-50%)`,
      cursor: "pointer",
      transition: `all ${motionDurationSlow}`,
      userSelect: "none",
      "&:hover": {
        background: operationBgHover.toRgbString()
      },
      "&-disabled": {
        "&, &:hover": {
          color: previewOperationColorDisabled,
          background: "transparent",
          cursor: "not-allowed",
          [`> ${iconCls}`]: {
            cursor: "not-allowed"
          }
        }
      },
      [`> ${iconCls}`]: {
        fontSize: token.previewOperationSize
      }
    },
    [`${previewCls}-switch-left`]: {
      insetInlineStart: token.marginSM
    },
    [`${previewCls}-switch-right`]: {
      insetInlineEnd: token.marginSM
    }
  };
};
const genImagePreviewStyle = (token) => {
  const {
    motionEaseOut,
    previewCls,
    motionDurationSlow,
    componentCls
  } = token;
  return [
    {
      [`${componentCls}-preview-root`]: {
        [previewCls]: {
          height: "100%",
          textAlign: "center",
          pointerEvents: "none"
        },
        [`${previewCls}-body`]: Object.assign(Object.assign({}, genBoxStyle()), {
          overflow: "hidden"
        }),
        [`${previewCls}-img`]: {
          maxWidth: "100%",
          maxHeight: "70%",
          verticalAlign: "middle",
          transform: "scale3d(1, 1, 1)",
          cursor: "grab",
          transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`,
          userSelect: "none",
          "&-wrapper": Object.assign(Object.assign({}, genBoxStyle()), {
            transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`,
            // https://github.com/ant-design/ant-design/issues/39913
            // TailwindCSS will reset img default style.
            // Let's set back.
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > *": {
              pointerEvents: "auto"
            },
            "&::before": {
              display: "inline-block",
              width: 1,
              height: "50%",
              marginInlineEnd: -1,
              content: '""'
            }
          })
        },
        [`${previewCls}-moving`]: {
          [`${previewCls}-preview-img`]: {
            cursor: "grabbing",
            "&-wrapper": {
              transitionDuration: "0s"
            }
          }
        }
      }
    },
    // Override
    {
      [`${componentCls}-preview-root`]: {
        [`${previewCls}-wrap`]: {
          zIndex: token.zIndexPopup
        }
      }
    },
    // Preview operations & switch
    {
      [`${componentCls}-preview-operations-wrapper`]: {
        position: "fixed",
        zIndex: token.calc(token.zIndexPopup).add(1).equal()
      },
      "&": [genPreviewOperationsStyle(token), genPreviewSwitchStyle(token)]
    }
  ];
};
const genImageStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ============================== image ==============================
    [componentCls]: {
      position: "relative",
      display: "inline-block",
      [`${componentCls}-img`]: {
        width: "100%",
        height: "auto",
        verticalAlign: "middle"
      },
      [`${componentCls}-img-placeholder`]: {
        backgroundColor: token.colorBgContainerDisabled,
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "30%"
      },
      [`${componentCls}-mask`]: Object.assign({}, genImageMaskStyle(token)),
      [`${componentCls}-mask:hover`]: {
        opacity: 1
      },
      [`${componentCls}-placeholder`]: Object.assign({}, genBoxStyle())
    }
  };
};
const genPreviewMotion = (token) => {
  const {
    previewCls
  } = token;
  return {
    [`${previewCls}-root`]: initZoomMotion(token, "zoom"),
    "&": initFadeMotion(token, true)
  };
};
const prepareComponentToken$1 = (token) => ({
  zIndexPopup: token.zIndexPopupBase + 80,
  previewOperationColor: new TinyColor(token.colorTextLightSolid).setAlpha(0.65).toRgbString(),
  previewOperationHoverColor: new TinyColor(token.colorTextLightSolid).setAlpha(0.85).toRgbString(),
  previewOperationColorDisabled: new TinyColor(token.colorTextLightSolid).setAlpha(0.25).toRgbString(),
  previewOperationSize: token.fontSizeIcon * 1.5
  // FIXME: fontSizeIconLG
});
const useStyle$1 = genStyleHooks("Image", (token) => {
  const previewCls = `${token.componentCls}-preview`;
  const imageToken = merge(token, {
    previewCls,
    modalMaskBg: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    // FIXME: Shared Token
    imagePreviewSwitchSize: token.controlHeightLG
  });
  return [genImageStyle(imageToken), genImagePreviewStyle(imageToken), genModalMaskStyle(merge(imageToken, {
    componentCls: previewCls
  })), genPreviewMotion(imageToken)];
}, prepareComponentToken$1);
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const icons = {
  rotateLeft: /* @__PURE__ */ reactExports.createElement(RefIcon$5, null),
  rotateRight: /* @__PURE__ */ reactExports.createElement(RefIcon$4, null),
  zoomIn: /* @__PURE__ */ reactExports.createElement(RefIcon$2, null),
  zoomOut: /* @__PURE__ */ reactExports.createElement(RefIcon$1, null),
  close: /* @__PURE__ */ reactExports.createElement(RefIcon$6, null),
  left: /* @__PURE__ */ reactExports.createElement(RefIcon$7, null),
  right: /* @__PURE__ */ reactExports.createElement(RefIcon$8, null),
  flipX: /* @__PURE__ */ reactExports.createElement(RefIcon$3, null),
  flipY: /* @__PURE__ */ reactExports.createElement(RefIcon$3, {
    rotate: 90
  })
};
const InternalPreviewGroup = (_a) => {
  var {
    previewPrefixCls: customizePrefixCls,
    preview
  } = _a, otherProps = __rest$2(_a, ["previewPrefixCls", "preview"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("image", customizePrefixCls);
  const previewPrefixCls = `${prefixCls}-preview`;
  const rootPrefixCls = getPrefixCls();
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls, rootCls);
  const [zIndex] = useZIndex("ImagePreview", typeof preview === "object" ? preview.zIndex : void 0);
  const mergedPreview = reactExports.useMemo(() => {
    var _a2;
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === "object" ? preview : {};
    const mergedRootClassName = classNames(hashId, cssVarCls, rootCls, (_a2 = _preview.rootClassName) !== null && _a2 !== void 0 ? _a2 : "");
    return Object.assign(Object.assign({}, _preview), {
      transitionName: getTransitionName(rootPrefixCls, "zoom", _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", _preview.maskTransitionName),
      rootClassName: mergedRootClassName,
      zIndex
    });
  }, [preview]);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(ImageInternal.PreviewGroup, Object.assign({
    preview: mergedPreview,
    previewPrefixCls,
    icons
  }, otherProps)));
};
const PreviewGroup = InternalPreviewGroup;
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Image = (props) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    preview,
    className,
    rootClassName,
    style
  } = props, otherProps = __rest$1(props, ["prefixCls", "preview", "className", "rootClassName", "style"]);
  const {
    getPrefixCls,
    locale: contextLocale = localeValues,
    getPopupContainer: getContextPopupContainer,
    image
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("image", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const imageLocale = contextLocale.Image || localeValues.Image;
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls, rootCls);
  const mergedRootClassName = classNames(rootClassName, hashId, cssVarCls, rootCls);
  const mergedClassName = classNames(className, hashId, image === null || image === void 0 ? void 0 : image.className);
  const [zIndex] = useZIndex("ImagePreview", typeof preview === "object" ? preview.zIndex : void 0);
  const mergedPreview = reactExports.useMemo(() => {
    var _a2;
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === "object" ? preview : {};
    const {
      getContainer,
      closeIcon
    } = _preview, restPreviewProps = __rest$1(_preview, ["getContainer", "closeIcon"]);
    return Object.assign(Object.assign({
      mask: /* @__PURE__ */ reactExports.createElement("div", {
        className: `${prefixCls}-mask-info`
      }, /* @__PURE__ */ reactExports.createElement(RefIcon$9, null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview),
      icons
    }, restPreviewProps), {
      getContainer: getContainer !== null && getContainer !== void 0 ? getContainer : getContextPopupContainer,
      transitionName: getTransitionName(rootPrefixCls, "zoom", _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", _preview.maskTransitionName),
      zIndex,
      closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : (_a2 = image === null || image === void 0 ? void 0 : image.preview) === null || _a2 === void 0 ? void 0 : _a2.closeIcon
    });
  }, [preview, imageLocale, (_a = image === null || image === void 0 ? void 0 : image.preview) === null || _a === void 0 ? void 0 : _a.closeIcon]);
  const mergedStyle = Object.assign(Object.assign({}, image === null || image === void 0 ? void 0 : image.style), style);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(ImageInternal, Object.assign({
    prefixCls,
    preview: mergedPreview,
    rootClassName: mergedRootClassName,
    className: mergedClassName,
    style: mergedStyle
  }, otherProps)));
};
Image.PreviewGroup = PreviewGroup;
function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === "boolean") {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = toArray(children);
  return childNodes.some((node) => node.type === Sider);
}
const genLayoutLightStyle = (token) => {
  const {
    componentCls,
    bodyBg,
    lightSiderBg,
    lightTriggerBg,
    lightTriggerColor
  } = token;
  return {
    [`${componentCls}-sider-light`]: {
      background: lightSiderBg,
      [`${componentCls}-sider-trigger`]: {
        color: lightTriggerColor,
        background: lightTriggerBg
      },
      [`${componentCls}-sider-zero-width-trigger`]: {
        color: lightTriggerColor,
        background: lightTriggerBg,
        border: `1px solid ${bodyBg}`,
        // Safe to modify to any other color
        borderInlineStart: 0
      }
    }
  };
};
const genLayoutStyle = (token) => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    triggerColor,
    footerBg,
    triggerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    triggerHeight,
    zeroTriggerHeight,
    zeroTriggerWidth,
    motionDurationMid,
    motionDurationSlow,
    fontSize,
    borderRadius,
    bodyBg,
    headerBg,
    siderBg
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: "row",
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: "0 0 auto"
      },
      [`${componentCls}-sider`]: {
        position: "relative",
        // fix firefox can't set width smaller than content on flex item
        minWidth: 0,
        background: siderBg,
        transition: `all ${motionDurationMid}, background 0s`,
        "&-children": {
          height: "100%",
          // Hack for fixing margin collapse bug
          // https://github.com/ant-design/ant-design/issues/7967
          // solution from https://stackoverflow.com/a/33132624/3040605
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
            width: "auto"
          }
        },
        "&-has-trigger": {
          paddingBottom: triggerHeight
        },
        "&-right": {
          order: 1
        },
        "&-trigger": {
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          height: triggerHeight,
          color: triggerColor,
          lineHeight: unit(triggerHeight),
          textAlign: "center",
          background: triggerBg,
          cursor: "pointer",
          transition: `all ${motionDurationMid}`
        },
        "&-zero-width": {
          "> *": {
            overflow: "hidden"
          },
          "&-trigger": {
            position: "absolute",
            top: headerHeight,
            insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
            zIndex: 1,
            width: zeroTriggerWidth,
            height: zeroTriggerHeight,
            color: triggerColor,
            fontSize: token.fontSizeXL,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: siderBg,
            borderStartStartRadius: 0,
            borderStartEndRadius: borderRadius,
            borderEndEndRadius: borderRadius,
            borderEndStartRadius: 0,
            cursor: "pointer",
            transition: `background ${motionDurationSlow} ease`,
            "&::after": {
              position: "absolute",
              inset: 0,
              background: "transparent",
              transition: `all ${motionDurationSlow}`,
              content: '""'
            },
            "&:hover::after": {
              background: `rgba(255, 255, 255, 0.2)`
            },
            "&-right": {
              insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
              borderStartStartRadius: borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: borderRadius
            }
          }
        }
      }
    }, genLayoutLightStyle(token)), {
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    }),
    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: unit(headerHeight),
      background: headerBg,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${antCls}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg
    },
    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: "auto",
      color: colorText,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
};
const prepareComponentToken = (token) => {
  const {
    colorBgLayout,
    controlHeight,
    controlHeightLG,
    colorText,
    controlHeightSM,
    marginXXS,
    colorTextLightSolid,
    colorBgContainer
  } = token;
  const paddingInline = controlHeightLG * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: colorBgLayout,
    colorBgTrigger: "#002140",
    bodyBg: colorBgLayout,
    headerBg: "#001529",
    headerHeight: controlHeight * 2,
    headerPadding: `0 ${paddingInline}px`,
    headerColor: colorText,
    footerPadding: `${controlHeightSM}px ${paddingInline}px`,
    footerBg: colorBgLayout,
    siderBg: "#001529",
    triggerHeight: controlHeightLG + marginXXS * 2,
    triggerBg: "#002140",
    triggerColor: colorTextLightSolid,
    zeroTriggerWidth: controlHeightLG,
    zeroTriggerHeight: controlHeightLG,
    lightSiderBg: colorBgContainer,
    lightTriggerBg: colorBgContainer,
    lightTriggerColor: colorText
  };
};
const useStyle = genStyleHooks("Layout", (token) => [genLayoutStyle(token)], prepareComponentToken, {
  deprecatedTokens: [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]]
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return (BasicComponent) => {
    const Adapter = /* @__PURE__ */ reactExports.forwardRef((props, ref) => /* @__PURE__ */ reactExports.createElement(BasicComponent, Object.assign({
      ref,
      suffixCls,
      tagName
    }, props)));
    return Adapter;
  };
}
const Basic = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    suffixCls,
    className,
    tagName: TagName
  } = props, others = __rest(props, ["prefixCls", "suffixCls", "className", "tagName"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const [wrapSSR, hashId, cssVarCls] = useStyle(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return wrapSSR(/* @__PURE__ */ reactExports.createElement(TagName, Object.assign({
    className: classNames(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
    ref
  }, others)));
});
const BasicLayout = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    direction
  } = reactExports.useContext(ConfigContext);
  const [siders, setSiders] = reactExports.useState([]);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    hasSider,
    tagName: Tag,
    style
  } = props, others = __rest(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
  const passedProps = omit(others, ["suffixCls"]);
  const {
    getPrefixCls,
    layout
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const mergedHasSider = useHasSider(siders, children, hasSider);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const classString = classNames(prefixCls, {
    [`${prefixCls}-has-sider`]: mergedHasSider,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, layout === null || layout === void 0 ? void 0 : layout.className, className, rootClassName, hashId, cssVarCls);
  const contextValue = reactExports.useMemo(() => ({
    siderHook: {
      addSider: (id) => {
        setSiders((prev) => [].concat(_toConsumableArray(prev), [id]));
      },
      removeSider: (id) => {
        setSiders((prev) => prev.filter((currentId) => currentId !== id));
      }
    }
  }), []);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(LayoutContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ reactExports.createElement(Tag, Object.assign({
    ref,
    className: classString,
    style: Object.assign(Object.assign({}, layout === null || layout === void 0 ? void 0 : layout.style), style)
  }, passedProps), children)));
});
const Layout$1 = generator({
  tagName: "div",
  displayName: "Layout"
})(BasicLayout);
const Header = generator({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Basic);
const Footer = generator({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Basic);
const Content = generator({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Basic);
const Layout = Layout$1;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;
Layout._InternalSiderContext = SiderContext;
var UserOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
var UserOutlined = function UserOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: UserOutlined$1
  }));
};
var RefIcon = /* @__PURE__ */ reactExports.forwardRef(UserOutlined);
export {
  Avatar as A,
  DialogWrap as D,
  Image as I,
  Layout as L,
  Popover as P,
  RefIcon as R,
  prepareComponentToken$4 as a,
  Panel as b,
  PurePanel as c,
  RefIcon$5 as d,
  RefIcon$4 as e,
  RefIcon$3 as f,
  getRenderPropValue as g,
  RefIcon$2 as h,
  initFadeMotion as i,
  RefIcon$1 as j,
  RawPurePanel as k,
  prepareToken as p,
  useStyle$4 as u
};
