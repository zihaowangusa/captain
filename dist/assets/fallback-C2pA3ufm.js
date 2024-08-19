import { u as useNavigate, j as jsxRuntimeExports } from "./index-mAcNNorA.js";
import { a as Result } from "./index-BJVy0UP3.js";
import { B as Button } from "./button-B5nM96vg.js";
import "./ExclamationCircleFilled-qhqJD7Ls.js";
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
