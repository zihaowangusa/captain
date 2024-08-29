import { r as reactExports, e as ReactDOM } from "./index-CnDKNMMk.js";
import { J as useLayoutEffect, I as Icon, z as _extends, C as ConfigContext, o as omit, b as classNames, y as toArray, c as cloneElement, aQ as supportNodeRef, Y as useComposeRef, u as unit, aa as genFocusOutline, t as textEllipsis, g as genStyleHooks, n as merge, as as clearFix, r as resetComponent, T as TinyColor, V as resetIcon, p as useEvent } from "./button-Dmqd4lCi.js";
import { u as useForceUpdate, aE as useResponsiveObserver, aF as Divider, S as MenuItem$1, L as Tooltip, M as ContextIsolator, I as genCollapseMotion, y as initSlideMotion, a9 as initZoomMotion, aG as useFullPath, d as useZIndex, aH as SubMenu$1, c as useCSSVarCls, Q as ExportMenu, $ as RefIcon$3, J as initCollapseMotion, aI as MenuItemGroup } from "./index-htyRGXs6.js";
function useBreakpoint() {
  let refreshOnChange = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  const screensRef = reactExports.useRef({});
  const forceUpdate = useForceUpdate();
  const responsiveObserver = useResponsiveObserver();
  useLayoutEffect(() => {
    const token = responsiveObserver.subscribe((supportScreens) => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  return screensRef.current;
}
var RightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
var RightOutlined = function RightOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: RightOutlined$1
  }));
};
var RefIcon$2 = /* @__PURE__ */ reactExports.forwardRef(RightOutlined);
var BarsOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
var BarsOutlined = function BarsOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: BarsOutlined$2
  }));
};
var RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(BarsOutlined);
const BarsOutlined$1 = RefIcon$1;
var LeftOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
var LeftOutlined = function LeftOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
    ref,
    icon: LeftOutlined$1
  }));
};
var RefIcon = /* @__PURE__ */ reactExports.forwardRef(LeftOutlined);
const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);
const LayoutContext = /* @__PURE__ */ reactExports.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const dimensionMaxMap = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
};
const SiderContext = /* @__PURE__ */ reactExports.createContext({});
const generateId = /* @__PURE__ */ (() => {
  let i = 0;
  return function() {
    let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    trigger,
    children,
    defaultCollapsed = false,
    theme = "dark",
    style = {},
    collapsible = false,
    reverseArrow = false,
    width = 200,
    collapsedWidth = 80,
    zeroWidthTriggerStyle,
    breakpoint,
    onCollapse,
    onBreakpoint
  } = props, otherProps = __rest$3(props, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = reactExports.useContext(LayoutContext);
  const [collapsed, setCollapsed] = reactExports.useState("collapsed" in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if ("collapsed" in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!("collapsed" in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  const responsiveHandlerRef = reactExports.useRef();
  responsiveHandlerRef.current = (mql) => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, "responsive");
    }
  };
  reactExports.useEffect(() => {
    function responsiveHandler(mql2) {
      return responsiveHandlerRef.current(mql2);
    }
    let mql;
    if (typeof window !== "undefined") {
      const {
        matchMedia
      } = window;
      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
        try {
          mql.addEventListener("change", responsiveHandler);
        } catch (_a) {
          mql.addListener(responsiveHandler);
        }
        responsiveHandler(mql);
      }
    }
    return () => {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener("change", responsiveHandler);
      } catch (_a) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, [breakpoint]);
  reactExports.useEffect(() => {
    const uniqueId = generateId("ant-sider-");
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, "clickTrigger");
  };
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const renderSider = () => {
    const prefixCls = getPrefixCls("layout-sider", customizePrefixCls);
    const divProps = omit(otherProps, ["collapsed"]);
    const rawWidth = collapsed ? collapsedWidth : width;
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /* @__PURE__ */ reactExports.createElement("span", {
      onClick: toggle,
      className: classNames(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? "right" : "left"}`),
      style: zeroWidthTriggerStyle
    }, trigger || /* @__PURE__ */ reactExports.createElement(BarsOutlined$1, null)) : null;
    const iconObj = {
      expanded: reverseArrow ? /* @__PURE__ */ reactExports.createElement(RefIcon$2, null) : /* @__PURE__ */ reactExports.createElement(RefIcon, null),
      collapsed: reverseArrow ? /* @__PURE__ */ reactExports.createElement(RefIcon, null) : /* @__PURE__ */ reactExports.createElement(RefIcon$2, null)
    };
    const status = collapsed ? "collapsed" : "expanded";
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /* @__PURE__ */ reactExports.createElement("div", {
      className: `${prefixCls}-trigger`,
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;
    const divStyle = Object.assign(Object.assign({}, style), {
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });
    const siderCls = classNames(prefixCls, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!collapsed,
      [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    }, className);
    return /* @__PURE__ */ reactExports.createElement("aside", Object.assign({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref
    }), /* @__PURE__ */ reactExports.createElement("div", {
      className: `${prefixCls}-children`
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };
  const contextValue = reactExports.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return /* @__PURE__ */ reactExports.createElement(SiderContext.Provider, {
    value: contextValue
  }, renderSider());
});
const Sider$1 = Sider;
const MenuContext = /* @__PURE__ */ reactExports.createContext({
  prefixCls: "",
  firstLevel: true,
  inlineCollapsed: false
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const MenuDivider = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    dashed
  } = props, restProps = __rest$2(props, ["prefixCls", "className", "dashed"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("menu", customizePrefixCls);
  const classString = classNames({
    [`${prefixCls}-item-divider-dashed`]: !!dashed
  }, className);
  return /* @__PURE__ */ reactExports.createElement(Divider, Object.assign({
    className: classString
  }, restProps));
};
const MenuItem = (props) => {
  var _a;
  const {
    className,
    children,
    icon,
    title,
    danger
  } = props;
  const {
    prefixCls,
    firstLevel,
    direction,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed
  } = reactExports.useContext(MenuContext);
  const renderItemChildren = (inlineCollapsed) => {
    const wrapNode = /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-title-content`
    }, children);
    if (!icon || /* @__PURE__ */ reactExports.isValidElement(children) && children.type === "span") {
      if (children && inlineCollapsed && firstLevel && typeof children === "string") {
        return /* @__PURE__ */ reactExports.createElement("div", {
          className: `${prefixCls}-inline-collapsed-noicon`
        }, children.charAt(0));
      }
    }
    return wrapNode;
  };
  const {
    siderCollapsed
  } = reactExports.useContext(SiderContext);
  let tooltipTitle = title;
  if (typeof title === "undefined") {
    tooltipTitle = firstLevel ? children : "";
  } else if (title === false) {
    tooltipTitle = "";
  }
  const tooltipProps = {
    title: tooltipTitle
  };
  if (!siderCollapsed && !isInlineCollapsed) {
    tooltipProps.title = null;
    tooltipProps.open = false;
  }
  const childrenLength = toArray(children).length;
  let returnNode = /* @__PURE__ */ reactExports.createElement(MenuItem$1, Object.assign({}, omit(props, ["title", "icon", "danger"]), {
    className: classNames({
      [`${prefixCls}-item-danger`]: danger,
      [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
    }, className),
    title: typeof title === "string" ? title : void 0
  }), cloneElement(icon, {
    className: classNames(/* @__PURE__ */ reactExports.isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : "", `${prefixCls}-item-icon`)
  }), renderItemChildren(isInlineCollapsed));
  if (!disableMenuItemTitleTooltip) {
    returnNode = /* @__PURE__ */ reactExports.createElement(Tooltip, Object.assign({}, tooltipProps, {
      placement: direction === "rtl" ? "left" : "right",
      overlayClassName: `${prefixCls}-inline-collapsed-tooltip`
    }), returnNode);
  }
  return returnNode;
};
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const OverrideContext = /* @__PURE__ */ reactExports.createContext(null);
const OverrideProvider = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    children
  } = props, restProps = __rest$1(props, ["children"]);
  const override = reactExports.useContext(OverrideContext);
  const context = reactExports.useMemo(() => Object.assign(Object.assign({}, override), restProps), [
    override,
    restProps.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    restProps.mode,
    restProps.selectable,
    restProps.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]);
  const canRef = supportNodeRef(children);
  const mergedRef = useComposeRef(ref, canRef ? children.ref : null);
  return /* @__PURE__ */ reactExports.createElement(OverrideContext.Provider, {
    value: context
  }, /* @__PURE__ */ reactExports.createElement(ContextIsolator, {
    space: true
  }, canRef ? /* @__PURE__ */ reactExports.cloneElement(children, {
    ref: mergedRef
  }) : children));
});
const getHorizontalStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    horizontalLineHeight,
    colorSplit,
    lineWidth,
    lineType,
    itemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: horizontalLineHeight,
      border: 0,
      borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: itemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
};
const getRTLStyle = (_ref) => {
  let {
    componentCls,
    menuArrowOffset,
    calc
  } = _ref;
  return {
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
      [`${componentCls}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(${unit(calc(menuArrowOffset).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${unit(menuArrowOffset)})`
        }
      }
    }
  };
};
const accessibilityFocus = (token) => Object.assign({}, genFocusOutline(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    itemColor,
    itemSelectedColor,
    groupTitleColor,
    itemBg,
    subMenuItemBg,
    itemSelectedBg,
    activeBarHeight,
    activeBarWidth,
    activeBarBorderWidth,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    itemPaddingInline,
    motionDurationMid,
    itemHoverColor,
    lineType,
    colorSplit,
    // Disabled
    itemDisabledColor,
    // Danger
    dangerItemColor,
    dangerItemHoverColor,
    dangerItemSelectedColor,
    dangerItemActiveBg,
    dangerItemSelectedBg,
    // Bg
    popupBg,
    itemHoverBg,
    itemActiveBg,
    menuSubMenuBg,
    // Horizontal
    horizontalItemSelectedColor,
    horizontalItemSelectedBg,
    horizontalItemBorderRadius,
    horizontalItemHoverBg
  } = token;
  return {
    [`${componentCls}-${themeSuffix}, ${componentCls}-${themeSuffix} > ${componentCls}`]: {
      color: itemColor,
      background: itemBg,
      [`&${componentCls}-root:focus-visible`]: Object.assign({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: groupTitleColor
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: itemSelectedColor
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        color: itemColor,
        [`&:not(${componentCls}-item-disabled):focus-visible`]: Object.assign({}, accessibilityFocus(token))
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${itemDisabledColor} !important`
      },
      // Hover
      [`${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
        [`&:hover, > ${componentCls}-submenu-title:hover`]: {
          color: itemHoverColor
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          "&:hover": {
            backgroundColor: itemHoverBg
          },
          "&:active": {
            backgroundColor: itemActiveBg
          }
        },
        [`${componentCls}-submenu-title`]: {
          "&:hover": {
            backgroundColor: itemHoverBg
          },
          "&:active": {
            backgroundColor: itemActiveBg
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: dangerItemColor,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: dangerItemHoverColor
          }
        },
        [`&${componentCls}-item:active`]: {
          background: dangerItemActiveBg
        }
      },
      [`${componentCls}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${componentCls}-item-selected`]: {
        color: itemSelectedColor,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: dangerItemSelectedColor
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: itemSelectedBg,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: dangerItemSelectedBg
        }
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      [`&${componentCls}-submenu-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: Object.assign(Object.assign({}, themeSuffix === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: activeBarBorderWidth,
          marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: horizontalItemBorderRadius,
          "&::after": {
            position: "absolute",
            insetInline: itemPaddingInline,
            bottom: 0,
            borderBottom: `${unit(activeBarHeight)} solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: horizontalItemHoverBg,
            "&::after": {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          },
          "&-selected": {
            color: horizontalItemSelectedColor,
            backgroundColor: horizontalItemSelectedBg,
            "&:hover": {
              backgroundColor: horizontalItemSelectedBg
            },
            "&::after": {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${unit(activeBarBorderWidth)} ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: subMenuItemBg
        },
        [`${componentCls}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${unit(activeBarWidth)} solid ${itemSelectedColor}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(","),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: dangerItemSelectedColor
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(",")
          }
        }
      }
    }
  };
};
const getVerticalInlineStyle = (token) => {
  const {
    componentCls,
    itemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    itemMarginBlock,
    itemWidth
  } = token;
  const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
  return {
    [`${componentCls}-item`]: {
      position: "relative",
      overflow: "hidden"
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: unit(itemHeight),
      paddingInline: padding,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: itemWidth
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: unit(itemHeight)
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = (token) => {
  const {
    componentCls,
    iconCls,
    itemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    itemMarginInline,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary,
    collapsedWidth,
    collapsedIconSize
  } = token;
  const inlineItemStyle = {
    height: itemHeight,
    lineHeight: unit(itemHeight),
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [componentCls]: {
        "&-inline, &-vertical": Object.assign({
          [`&${componentCls}-root`]: {
            boxShadow: "none"
          }
        }, getVerticalInlineStyle(token))
      },
      [`${componentCls}-submenu-popup`]: {
        [`${componentCls}-vertical`]: Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
          boxShadow: boxShadowSecondary
        })
      }
    },
    // Vertical only
    {
      [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
        minWidth: dropdownWidth,
        maxHeight: `calc(100vh - ${unit(token.calc(controlHeightLG).mul(2.5).equal())})`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${componentCls}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationMid} ${motionEaseOut}`, `padding-inline calc(50% - ${unit(token.calc(fontSizeLG).div(2).equal())} - ${unit(itemMarginInline)})`].join(","),
            [`> ${componentCls}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
          [`& ${componentCls}-item-group-title`]: {
            paddingInlineStart: paddingXL
          }
        },
        // >>>>> Item
        [`${componentCls}-item`]: inlineItemStyle
      }
    },
    // Inline Collapse Only
    {
      [`${componentCls}-inline-collapsed`]: {
        width: collapsedWidth,
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
            [`> ${componentCls}-inline-collapsed-noicon`]: {
              fontSize: fontSizeLG,
              textAlign: "center"
            }
          }
        },
        [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${unit(token.calc(fontSizeLG).div(2).equal())} - ${unit(itemMarginInline)})`,
          textOverflow: "clip",
          [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${componentCls}-item-icon, ${iconCls}`]: {
            margin: 0,
            fontSize: collapsedIconSize,
            lineHeight: unit(itemHeight),
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${componentCls}-item-icon, ${iconCls}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: colorTextLightSolid
          }
        },
        [`${componentCls}-item-group-title`]: Object.assign(Object.assign({}, textEllipsis), {
          paddingInline: paddingXS
        })
      }
    }
  ];
};
const genMenuItemStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    iconSize,
    iconMarginInlineEnd
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(","),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: iconSize,
        fontSize: iconSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(","),
        "+ span": {
          marginInlineStart: iconMarginInlineEnd,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(",")
        }
      },
      [`${componentCls}-item-icon`]: Object.assign({}, resetIcon()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${componentCls}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
};
const genSubMenuArrowStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      "&-expand-icon, &-arrow": {
        position: "absolute",
        top: "50%",
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: token.calc(menuArrowSize).mul(0.6).equal(),
          height: token.calc(menuArrowSize).mul(0.15).equal(),
          backgroundColor: "currentcolor",
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(${unit(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${unit(menuArrowOffset)})`
        }
      }
    }
  };
};
const getBaseStyle = (token) => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    subMenuItemBorderRadius,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    groupTitleLineHeight,
    groupTitleFontSize
  } = token;
  return [
    // Misc
    {
      "": {
        [componentCls]: Object.assign(Object.assign({}, clearFix()), {
          // Hidden
          "&-hidden": {
            display: "none"
          }
        })
      },
      [`${componentCls}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), clearFix()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        // Magic cubic here but smooth transition
        transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        "&-overflow": {
          display: "flex",
          [`${componentCls}-item`]: {
            flex: "none"
          }
        },
        [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
          borderRadius: token.itemBorderRadius
        },
        [`${componentCls}-item-group-title`]: {
          padding: `${unit(paddingXS)} ${unit(padding)}`,
          fontSize: groupTitleFontSize,
          lineHeight: groupTitleLineHeight,
          transition: `all ${motionDurationSlow}`
        },
        [`&-horizontal ${componentCls}-submenu`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu ${componentCls}-sub`]: {
          cursor: "initial",
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-title-content`]: {
          transition: `color ${motionDurationSlow}`,
          // https://github.com/ant-design/ant-design/issues/41143
          [`> ${antCls}-typography-ellipsis-single-line`]: {
            display: "inline",
            verticalAlign: "unset"
          }
        },
        [`${componentCls}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${componentCls}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: colorSplit,
          borderStyle: lineType,
          borderWidth: 0,
          borderTopWidth: lineWidth,
          marginBlock: lineWidth,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), genMenuItemStyle(token)), {
        [`${componentCls}-item-group`]: {
          [`${componentCls}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
              paddingInline: `${unit(token.calc(fontSize).mul(2).equal())} ${unit(padding)}`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: zIndexPopup,
            borderRadius: borderRadiusLG,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${componentCls}-submenu`]: {
              background: "transparent"
            },
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            },
            [`> ${componentCls}`]: Object.assign(Object.assign(Object.assign({
              borderRadius: borderRadiusLG
            }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
              [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
                borderRadius: subMenuItemBorderRadius
              },
              [`${componentCls}-submenu-title::after`]: {
                transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
              }
            })
          },
          [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
            transformOrigin: "100% 0"
          },
          [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
            transformOrigin: "100% 100%"
          },
          [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
            transformOrigin: "0 100%"
          },
          [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
            transformOrigin: "0 0"
          },
          [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
            paddingInlineEnd: token.paddingXS
          },
          [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
            paddingInlineStart: token.paddingXS
          },
          [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
            paddingBottom: token.paddingXS
          },
          [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
            paddingTop: token.paddingXS
          }
        }
      }), genSubMenuArrowStyle(token)), {
        [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${unit(menuArrowOffset)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${unit(token.calc(menuArrowOffset).mul(-1).equal())})`
          }
        },
        [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${unit(token.calc(menuArrowSize).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${unit(token.calc(menuArrowOffset).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${unit(menuArrowOffset)})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${antCls}-layout-header`]: {
        [componentCls]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
};
const prepareComponentToken = (token) => {
  var _a, _b, _c;
  const {
    colorPrimary,
    colorError,
    colorTextDisabled,
    colorErrorBg,
    colorText,
    colorTextDescription,
    colorBgContainer,
    colorFillAlter,
    colorFillContent,
    lineWidth,
    lineWidthBold,
    controlItemBgActive,
    colorBgTextHover,
    controlHeightLG,
    lineHeight,
    colorBgElevated,
    marginXXS,
    padding,
    fontSize,
    controlHeightSM,
    fontSizeLG,
    colorTextLightSolid,
    colorErrorHover
  } = token;
  const activeBarWidth = (_a = token.activeBarWidth) !== null && _a !== void 0 ? _a : 0;
  const activeBarBorderWidth = (_b = token.activeBarBorderWidth) !== null && _b !== void 0 ? _b : lineWidth;
  const itemMarginInline = (_c = token.itemMarginInline) !== null && _c !== void 0 ? _c : token.marginXXS;
  const colorTextDark = new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: token.zIndexPopupBase + 50,
    radiusItem: token.borderRadiusLG,
    itemBorderRadius: token.borderRadiusLG,
    radiusSubMenuItem: token.borderRadiusSM,
    subMenuItemBorderRadius: token.borderRadiusSM,
    colorItemText: colorText,
    itemColor: colorText,
    colorItemTextHover: colorText,
    itemHoverColor: colorText,
    colorItemTextHoverHorizontal: colorPrimary,
    horizontalItemHoverColor: colorPrimary,
    colorGroupTitle: colorTextDescription,
    groupTitleColor: colorTextDescription,
    colorItemTextSelected: colorPrimary,
    itemSelectedColor: colorPrimary,
    colorItemTextSelectedHorizontal: colorPrimary,
    horizontalItemSelectedColor: colorPrimary,
    colorItemBg: colorBgContainer,
    itemBg: colorBgContainer,
    colorItemBgHover: colorBgTextHover,
    itemHoverBg: colorBgTextHover,
    colorItemBgActive: colorFillContent,
    itemActiveBg: controlItemBgActive,
    colorSubItemBg: colorFillAlter,
    subMenuItemBg: colorFillAlter,
    colorItemBgSelected: controlItemBgActive,
    itemSelectedBg: controlItemBgActive,
    colorItemBgSelectedHorizontal: "transparent",
    horizontalItemSelectedBg: "transparent",
    colorActiveBarWidth: 0,
    activeBarWidth,
    colorActiveBarHeight: lineWidthBold,
    activeBarHeight: lineWidthBold,
    colorActiveBarBorderSize: lineWidth,
    activeBarBorderWidth,
    // Disabled
    colorItemTextDisabled: colorTextDisabled,
    itemDisabledColor: colorTextDisabled,
    // Danger
    colorDangerItemText: colorError,
    dangerItemColor: colorError,
    colorDangerItemTextHover: colorError,
    dangerItemHoverColor: colorError,
    colorDangerItemTextSelected: colorError,
    dangerItemSelectedColor: colorError,
    colorDangerItemBgActive: colorErrorBg,
    dangerItemActiveBg: colorErrorBg,
    colorDangerItemBgSelected: colorErrorBg,
    dangerItemSelectedBg: colorErrorBg,
    itemMarginInline,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: "transparent",
    itemHeight: controlHeightLG,
    groupTitleLineHeight: lineHeight,
    collapsedWidth: controlHeightLG * 2,
    popupBg: colorBgElevated,
    itemMarginBlock: marginXXS,
    itemPaddingInline: padding,
    horizontalLineHeight: `${controlHeightLG * 1.15}px`,
    iconSize: fontSize,
    iconMarginInlineEnd: controlHeightSM - fontSize,
    collapsedIconSize: fontSizeLG,
    groupTitleFontSize: fontSize,
    // Disabled
    darkItemDisabledColor: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
    // Dark
    darkItemColor: colorTextDark,
    darkDangerItemColor: colorError,
    darkItemBg: "#001529",
    darkPopupBg: "#001529",
    darkSubMenuItemBg: "#000c17",
    darkItemSelectedColor: colorTextLightSolid,
    darkItemSelectedBg: colorPrimary,
    darkDangerItemSelectedBg: colorError,
    darkItemHoverBg: "transparent",
    darkGroupTitleColor: colorTextDark,
    darkItemHoverColor: colorTextLightSolid,
    darkDangerItemHoverColor: colorErrorHover,
    darkDangerItemSelectedColor: colorTextLightSolid,
    darkDangerItemActiveBg: colorError,
    // internal
    itemWidth: activeBarWidth ? `calc(100% + ${activeBarBorderWidth}px)` : `calc(100% - ${itemMarginInline * 2}px)`
  };
};
const useStyle = function(prefixCls) {
  let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
  let injectStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const useStyle2 = genStyleHooks("Menu", (token) => {
    const {
      colorBgElevated,
      controlHeightLG,
      fontSize,
      darkItemColor,
      darkDangerItemColor,
      darkItemBg,
      darkSubMenuItemBg,
      darkItemSelectedColor,
      darkItemSelectedBg,
      darkDangerItemSelectedBg,
      darkItemHoverBg,
      darkGroupTitleColor,
      darkItemHoverColor,
      darkItemDisabledColor,
      darkDangerItemHoverColor,
      darkDangerItemSelectedColor,
      darkDangerItemActiveBg,
      popupBg,
      darkPopupBg
    } = token;
    const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
    const menuToken = merge(token, {
      menuArrowSize,
      menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
      menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
      menuSubMenuBg: colorBgElevated,
      calc: token.calc,
      popupBg
    });
    const menuDarkToken = merge(menuToken, {
      itemColor: darkItemColor,
      itemHoverColor: darkItemHoverColor,
      groupTitleColor: darkGroupTitleColor,
      itemSelectedColor: darkItemSelectedColor,
      itemBg: darkItemBg,
      popupBg: darkPopupBg,
      subMenuItemBg: darkSubMenuItemBg,
      itemActiveBg: "transparent",
      itemSelectedBg: darkItemSelectedBg,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: darkItemHoverBg,
      // Disabled
      itemDisabledColor: darkItemDisabledColor,
      // Danger
      dangerItemColor: darkDangerItemColor,
      dangerItemHoverColor: darkDangerItemHoverColor,
      dangerItemSelectedColor: darkDangerItemSelectedColor,
      dangerItemActiveBg: darkDangerItemActiveBg,
      dangerItemSelectedBg: darkDangerItemSelectedBg,
      menuSubMenuBg: darkSubMenuItemBg,
      // Horizontal
      horizontalItemSelectedColor: darkItemSelectedColor,
      horizontalItemSelectedBg: darkItemSelectedBg
    });
    return [
      // Basic
      getBaseStyle(menuToken),
      // Horizontal
      getHorizontalStyle(menuToken),
      // Hard code for some light style
      // Vertical
      getVerticalStyle(menuToken),
      // Hard code for some light style
      // Theme
      getThemeStyle(menuToken, "light"),
      getThemeStyle(menuDarkToken, "dark"),
      // RTL
      getRTLStyle(menuToken),
      // Motion
      genCollapseMotion(menuToken),
      initSlideMotion(menuToken, "slide-up"),
      initSlideMotion(menuToken, "slide-down"),
      initZoomMotion(menuToken, "zoom-big")
    ];
  }, prepareComponentToken, {
    deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle,
    unitless: {
      groupTitleLineHeight: true
    }
  });
  return useStyle2(prefixCls, rootCls);
};
const SubMenu = (props) => {
  var _a;
  const {
    popupClassName,
    icon,
    title,
    theme: customTheme
  } = props;
  const context = reactExports.useContext(MenuContext);
  const {
    prefixCls,
    inlineCollapsed,
    theme: contextTheme
  } = context;
  const parentPath = useFullPath();
  let titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === "string" ? /* @__PURE__ */ reactExports.createElement("div", {
      className: `${prefixCls}-inline-collapsed-noicon`
    }, title.charAt(0)) : /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title);
  } else {
    const titleIsSpan = /* @__PURE__ */ reactExports.isValidElement(title) && title.type === "span";
    titleNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, cloneElement(icon, {
      className: classNames(/* @__PURE__ */ reactExports.isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : "", `${prefixCls}-item-icon`)
    }), titleIsSpan ? title : /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  }
  const contextValue = reactExports.useMemo(() => Object.assign(Object.assign({}, context), {
    firstLevel: false
  }), [context]);
  const [zIndex] = useZIndex("Menu");
  return /* @__PURE__ */ reactExports.createElement(MenuContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ reactExports.createElement(SubMenu$1, Object.assign({}, omit(props, ["icon"]), {
    title: titleNode,
    popupClassName: classNames(prefixCls, popupClassName, `${prefixCls}-${customTheme || contextTheme}`),
    popupStyle: {
      zIndex
    }
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
function isEmptyIcon(icon) {
  return icon === null || icon === false;
}
const MENU_COMPONENTS = {
  item: MenuItem,
  submenu: SubMenu,
  divider: MenuDivider
};
const InternalMenu = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var _a;
  const override = reactExports.useContext(OverrideContext);
  const overrideObj = override || {};
  const {
    getPrefixCls,
    getPopupContainer,
    direction,
    menu
  } = reactExports.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    theme = "light",
    expandIcon,
    _internalDisableMenuItemTitleTooltip,
    inlineCollapsed,
    siderCollapsed,
    rootClassName,
    mode,
    selectable,
    onClick,
    overflowedIndicatorPopupClassName
  } = props, restProps = __rest(props, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]);
  const passedProps = omit(restProps, ["collapsedWidth"]);
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode
  });
  const onItemClick = useEvent(function() {
    var _a2;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, arguments);
    (_a2 = overrideObj.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(overrideObj);
  });
  const mergedMode = overrideObj.mode || mode;
  const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  const mergedInlineCollapsed = reactExports.useMemo(() => {
    if (siderCollapsed !== void 0) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  const defaultMotions = {
    horizontal: {
      motionName: `${rootPrefixCls}-slide-up`
    },
    inline: initCollapseMotion(rootPrefixCls),
    other: {
      motionName: `${rootPrefixCls}-zoom-big`
    }
  };
  const prefixCls = getPrefixCls("menu", customizePrefixCls || overrideObj.prefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls, !override);
  const menuClassName = classNames(`${prefixCls}-${theme}`, menu === null || menu === void 0 ? void 0 : menu.className, className);
  const mergedExpandIcon = reactExports.useMemo(() => {
    var _a2, _b;
    if (typeof expandIcon === "function" || isEmptyIcon(expandIcon)) {
      return expandIcon || null;
    }
    if (typeof overrideObj.expandIcon === "function" || isEmptyIcon(overrideObj.expandIcon)) {
      return overrideObj.expandIcon || null;
    }
    if (typeof (menu === null || menu === void 0 ? void 0 : menu.expandIcon) === "function" || isEmptyIcon(menu === null || menu === void 0 ? void 0 : menu.expandIcon)) {
      return (menu === null || menu === void 0 ? void 0 : menu.expandIcon) || null;
    }
    const mergedIcon = (_a2 = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon) !== null && _a2 !== void 0 ? _a2 : menu === null || menu === void 0 ? void 0 : menu.expandIcon;
    return cloneElement(mergedIcon, {
      className: classNames(`${prefixCls}-submenu-expand-icon`, /* @__PURE__ */ reactExports.isValidElement(mergedIcon) ? (_b = mergedIcon.props) === null || _b === void 0 ? void 0 : _b.className : void 0)
    });
  }, [expandIcon, overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon, menu === null || menu === void 0 ? void 0 : menu.expandIcon, prefixCls]);
  const contextValue = reactExports.useMemo(() => ({
    prefixCls,
    inlineCollapsed: mergedInlineCollapsed || false,
    direction,
    firstLevel: true,
    theme,
    mode: mergedMode,
    disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
  }), [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(OverrideContext.Provider, {
    value: null
  }, /* @__PURE__ */ reactExports.createElement(MenuContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ reactExports.createElement(ExportMenu, Object.assign({
    getPopupContainer,
    overflowedIndicator: /* @__PURE__ */ reactExports.createElement(RefIcon$3, null),
    overflowedIndicatorPopupClassName: classNames(prefixCls, `${prefixCls}-${theme}`, overflowedIndicatorPopupClassName),
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    style: Object.assign(Object.assign({}, menu === null || menu === void 0 ? void 0 : menu.style), style),
    className: menuClassName,
    prefixCls,
    direction,
    defaultMotions,
    expandIcon: mergedExpandIcon,
    ref,
    rootClassName: classNames(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls),
    _internalComponents: MENU_COMPONENTS
  })))));
});
const Menu = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const menuRef = reactExports.useRef(null);
  const context = reactExports.useContext(SiderContext);
  reactExports.useImperativeHandle(ref, () => ({
    menu: menuRef.current,
    focus: (options) => {
      var _a;
      (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
  }));
  return /* @__PURE__ */ reactExports.createElement(InternalMenu, Object.assign({
    ref: menuRef
  }, props, context));
});
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.Divider = MenuDivider;
Menu.ItemGroup = MenuItemGroup;
function getClientSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height
  };
}
function getOffset(node) {
  var box = node.getBoundingClientRect();
  var docElem = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
function addEventListenerWrap(target, eventType, cb, option) {
  var callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  if (target !== null && target !== void 0 && target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target !== null && target !== void 0 && target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}
export {
  BarsOutlined$1 as B,
  LayoutContext as L,
  Menu as M,
  OverrideProvider as O,
  RefIcon as R,
  Sider$1 as S,
  RefIcon$2 as a,
  addEventListenerWrap as b,
  getOffset as c,
  SiderContext as d,
  getClientSize as g,
  useBreakpoint as u
};
