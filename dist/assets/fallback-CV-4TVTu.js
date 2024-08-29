import { u as useNavigate, j as jsxRuntimeExports } from "./index-Dm159-KH.js";
import { a as Result } from "./index-CTU5v8rp.js";
import { B as Button } from "./button-UZVWBLMU.js";
import "./ExclamationCircleFilled-Ceu8Mgy8.js";
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
