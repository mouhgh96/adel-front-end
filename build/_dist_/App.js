import {CssBaseline, makeStyles, Paper} from "../web_modules/@material-ui/core.js";
import React from "../web_modules/react.js";
import {BrowserRouter as Router, Route, Switch} from "../web_modules/react-router-dom.js";
import "./App.css.proxy.js";
import {
  EditRoute,
  Home,
  Login,
  Protected,
  Question,
  SignUp
} from "./Components/index.js";
import {AdminRoute as AdminRoute2} from "./Components/AdminRoute/AdminRoute.js";
const useStyles = makeStyles({
  content: {
    maxWidth: "max-content",
    marginLeft: "auto",
    marginRight: "auto"
  }
});
function App2() {
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true
  }, /* @__PURE__ */ React.createElement(Protected, null, /* @__PURE__ */ React.createElement(Home, null))), /* @__PURE__ */ React.createElement(Route, {
    path: "/questions/:id",
    exact: true
  }, /* @__PURE__ */ React.createElement(Protected, null, /* @__PURE__ */ React.createElement(Question, null))), /* @__PURE__ */ React.createElement(Route, {
    path: "/admin",
    exact: true
  }, /* @__PURE__ */ React.createElement(Protected, null, /* @__PURE__ */ React.createElement(AdminRoute2, null))), /* @__PURE__ */ React.createElement(Route, {
    path: "/user/:id/edit",
    exact: true
  }, /* @__PURE__ */ React.createElement(Protected, null, /* @__PURE__ */ React.createElement(EditRoute, null))), /* @__PURE__ */ React.createElement(Route, {
    path: "/signup",
    exact: true
  }, /* @__PURE__ */ React.createElement(Paper, {
    className: classes.content
  }, /* @__PURE__ */ React.createElement(SignUp, null))), /* @__PURE__ */ React.createElement(Route, {
    path: "/login",
    exact: true
  }, /* @__PURE__ */ React.createElement(Paper, {
    className: classes.content
  }, /* @__PURE__ */ React.createElement(Login, null))))));
}
export default App2;
