import { u as useNavigate, j as jsxRuntimeExports } from "./index-DfZzsxxF.js";
import { a as Result } from "./index-ByItkaOA.js";
import { B as Button } from "./button-BUMtXZ25.js";
import "./ExclamationCircleFilled-CzJ7AK9F.js";
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
