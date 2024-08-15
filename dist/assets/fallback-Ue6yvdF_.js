import { u as useNavigate, j as jsxRuntimeExports } from "./index-Cwm6DA4i.js";
import { a as Result } from "./index-BzKK40nH.js";
import { B as Button } from "./button-DWO5Pyws.js";
import "./ExclamationCircleFilled-CkwZJrv2.js";
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
