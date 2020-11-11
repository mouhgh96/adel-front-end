import React from "../../web_modules/react.js";
import {Redirect} from "../../web_modules/react-router-dom.js";
export let Admin = ({children}) => {
  let is_admin = localStorage.getItem("is_admin") || "false";
  if (is_admin === "false") {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: "/"
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};
