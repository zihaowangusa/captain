import { u as useNavigate, j as jsxRuntimeExports } from "./index-ChOFda4U.js";
import { a as Result } from "./index-D7Dy-HsF.js";
import { B as Button } from "./button-TYsta6CW.js";
import "./ExclamationCircleFilled-B3jAUZnm.js";
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
