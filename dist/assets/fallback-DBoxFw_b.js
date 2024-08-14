import { u as useNavigate, j as jsxRuntimeExports } from "./index-7keqV54e.js";
import { a as Result } from "./index-Cjn4yuFF.js";
import { B as Button } from "./button-BrzAxnPE.js";
import "./ExclamationCircleFilled-BGTe5BcG.js";
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
