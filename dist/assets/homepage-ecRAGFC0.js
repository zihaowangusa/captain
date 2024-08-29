import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-Dm159-KH.js";
import { L as Logo } from "./logo-DRY5X6k7.js";
import { L as Layout, I as Image, A as Avatar, R as RefIcon } from "./UserOutlined-KxrNyESi.js";
import { F as Flex, T as Typography } from "./index-BP7gQFMJ.js";
import { M as Menu } from "./addEventListener-DFNdAVU4.js";
import { P as Popover } from "./index-a0MEfi6p.js";
import { B as Button } from "./button-UZVWBLMU.js";
const layout = "_layout_g053u_1";
const header = "_header_g053u_12";
const content = "_content_g053u_17";
const footer = "_footer_g053u_21";
const styles = {
  layout,
  header,
  content,
  footer
};
const HomePage = (props) => {
  const { Component, user = {} } = props;
  const { Header, Content, Footer } = Layout;
  const { Text } = Typography;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = reactExports.useState("scheduler");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { className: styles.layout, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: styles.header, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justify: "space-between", align: "top", style: { height: "100%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Image,
          {
            src: Logo,
            alt: "Captain Dental",
            width: 150,
            preview: false
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Menu,
          {
            mode: "horizontal",
            selectedKeys: [currentPage],
            onClick: (e) => {
              setCurrentPage(e.key);
              navigate(`/${e.key}`);
            },
            items: [
              {
                key: "duty",
                label: "Duty",
                children: [
                  { key: "schedule", label: "Schedule" },
                  { key: "employee", label: "Employee" }
                ]
              },
              {
                key: "tool",
                label: "Tool",
                children: [
                  { key: "ortho", label: "Ortho" },
                  { key: "checkout", label: "Checkout" }
                ]
              }
            ],
            style: { width: 500, marginLeft: 50 }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Popover,
        {
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { vertical: true, style: { minWidth: 200, maxWidth: 400 }, gap: 10, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { align: "center", gap: 5, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  src: "https://api.dicebear.com/7.x/miniavs/svg?seed=5"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { vertical: true, children: [
                (user == null ? void 0 : user.name) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Text,
                  {
                    style: { fontSize: 16, textWrap: "nowrap" },
                    children: `Name: ${(user == null ? void 0 : user.name) || ""}`
                  }
                ),
                (user == null ? void 0 : user.email) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Text,
                  {
                    style: { fontSize: 16, textWrap: "nowrap" },
                    children: `Email: ${(user == null ? void 0 : user.email) || ""}`
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", onClick: () => {
            }, children: "Logout" })
          ] }),
          title: "",
          placement: "bottom",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Avatar,
            {
              style: { backgroundColor: "#87d068", marginTop: 18 },
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon, {})
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { className: styles.content, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { className: styles.footer, children: "© Captain Dental 2024" })
  ] });
};
export {
  HomePage as default
};
