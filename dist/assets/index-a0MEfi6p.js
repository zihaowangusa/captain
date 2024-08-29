import { Y as useComposeRef, b as classNames, E as _objectSpread2, _ as _typeof, z as _extends, F as _slicedToArray, d as CSSMotion, aC as contains, g as genStyleHooks, u as unit, r as resetComponent, q as genFocusStyle, n as merge, C as ConfigContext, c as cloneElement } from "./button-UZVWBLMU.js";
import { p as pickAttrs, a2 as useId, B as KeyCode, P as Portal, K as Keyframe, O as initMotion, a9 as initZoomMotion, a4 as getArrowStyle, ag as PresetColors, l as getArrowToken, a5 as getArrowOffsetToken, ah as Popup, f as useMergedState, L as Tooltip, G as getTransitionName } from "./index-BP7gQFMJ.js";
import { r as reactExports, R as React } from "./index-Dm159-KH.js";
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
var Content = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
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
Content.displayName = "Content";
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
  }, wrapProps), /* @__PURE__ */ reactExports.createElement(Content, _extends({}, props, {
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
const prepareComponentToken$1 = (token) => ({
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
const useStyle$1 = genStyleHooks("Modal", (token) => {
  const modalToken = prepareToken(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), initZoomMotion(modalToken, "zoom")];
}, prepareComponentToken$1, {
  unitless: {
    titleLineHeight: true
  }
});
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
const prepareComponentToken = (token) => {
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
const useStyle = genStyleHooks("Popover", (token) => {
  const {
    colorBgElevated,
    colorText
  } = token;
  const popoverToken = merge(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText
  });
  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), initZoomMotion(popoverToken, "zoom-big")];
}, prepareComponentToken, {
  resetStyle: false,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var __rest$1 = function(s, e) {
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
  } = props, restProps = __rest$1(props, ["prefixCls", "className"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("popover", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(RawPurePanel, Object.assign({}, restProps, {
    prefixCls,
    hashId,
    className: classNames(className, cssVarCls)
  })));
};
var __rest = function(s, e) {
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
  } = props, otherProps = __rest(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("popover", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
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
export {
  DialogWrap as D,
  Popover as P,
  RawPurePanel as R,
  prepareComponentToken$1 as a,
  Panel as b,
  PurePanel as c,
  getRenderPropValue as d,
  genModalMaskStyle as g,
  initFadeMotion as i,
  prepareToken as p,
  useStyle$1 as u
};
