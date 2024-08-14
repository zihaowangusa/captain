import { u as useNavigate, j as jsxRuntimeExports } from "./index-CZkbI01Q.js";
import { a as Result } from "./index-ClNfddT2.js";
import { B as Button } from "./button-BAr2yIdL.js";
import "./ExclamationCircleFilled-Gk6Lz5U7.js";
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
