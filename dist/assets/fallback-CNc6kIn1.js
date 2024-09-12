import { u as useNavigate, j as jsxRuntimeExports } from "./index-MDR-H4h2.js";
import { a as Result } from "./index-DbMffhrA.js";
import { B as Button } from "./button--6RXP4y6.js";
import "./ExclamationCircleFilled-DS1Bo3j1.js";
const Fallback = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Result,
    {
      status: "404",
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      extra: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "primary",
          onClick: () => {
            navigate("/");
          },
          children: "Back Home"
        }
      )
    }
  );
};
export {
  Fallback as default
};
