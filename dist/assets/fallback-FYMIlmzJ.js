import { u as useNavigate, j as jsxRuntimeExports } from "./index-DVWNUoI2.js";
import { a as Result } from "./index-RrE0HiNd.js";
import { B as Button } from "./button-BVuZCKnA.js";
import "./ExclamationCircleFilled-DByNUksu.js";
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
