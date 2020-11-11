import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import "./index.css.proxy.js";
import App2 from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App2, null)), document.getElementById("root"));
serviceWorker.unregister();
if (import.meta.hot) {
  import.meta.hot.accept();
}
