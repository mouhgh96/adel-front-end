import {
  CircularProgress,
  Grid,
  IconButton,
  makeStyles
} from "../../../web_modules/@material-ui/core.js";
import DeleteIcon from "../../../web_modules/@material-ui/icons/Delete.js";
import EditIcon from "../../../web_modules/@material-ui/icons/Edit.js";
import React, {useEffect, useState} from "../../../web_modules/react.js";
import {Link, useHistory, useLocation} from "../../../web_modules/react-router-dom.js";
import {authHttp} from "../../utils.js";
import {Admin as Admin2} from "../Admin.js";
import "./AdminRoute.css.proxy.js";
let useStyles = makeStyles({});
export const AdminRoute = () => {
  let classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let [users, setUsers] = useState(null);
  let teams = ["A", "B", "C", "D"];
  useEffect(() => {
    let isAdmin = localStorage.getItem("is_admin") || false;
    console.log("location", location);
    if (!isAdmin) {
      history.replace("/");
    }
  }, []);
  useEffect(() => {
    let fetchUsers = async () => {
      let response = await authHttp.get("/users");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);
  if (users == null)
    return /* @__PURE__ */ React.createElement("div", {
      className: "Admin__spinner"
    }, /* @__PURE__ */ React.createElement(CircularProgress, {
      size: 90
    }));
  let deleteUser = async (id) => {
    try {
      let response = await authHttp.delete(`/users/${id}`);
      setUsers((old) => old.filter((user) => user.id != id));
    } catch (error) {
      debugger;
    }
  };
  return /* @__PURE__ */ React.createElement(Admin2, null, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 2
  }, users.map((user) => {
    return /* @__PURE__ */ React.createElement(Grid, {
      key: user.id,
      item: true,
      xs: 12,
      md: 6,
      lg: 4
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Admin__User"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Admin__User--header"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "left"
    }, /* @__PURE__ */ React.createElement("h1", null, user.lastName, " ", user.firstName), /* @__PURE__ */ React.createElement("span", null, user.email)), /* @__PURE__ */ React.createElement("div", {
      className: "right"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: `/user/${user.id}/edit`
    }, /* @__PURE__ */ React.createElement(IconButton, {
      "aria-label": "settings"
    }, /* @__PURE__ */ React.createElement(EditIcon, null))), /* @__PURE__ */ React.createElement(IconButton, {
      "aria-label": "settings",
      onClick: () => deleteUser(user.id)
    }, /* @__PURE__ */ React.createElement(DeleteIcon, null)))), /* @__PURE__ */ React.createElement("div", {
      className: "Admin__User--content"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card-user-info"
    }, "Nom ", /* @__PURE__ */ React.createElement("span", null, user.lastName)), /* @__PURE__ */ React.createElement("div", {
      className: "card-user-info"
    }, "Prenom ", /* @__PURE__ */ React.createElement("span", null, user.firstName)), /* @__PURE__ */ React.createElement("div", {
      className: "card-user-info"
    }, "Division ", /* @__PURE__ */ React.createElement("span", null, user.domain.name)), /* @__PURE__ */ React.createElement("div", {
      className: "card-user-info"
    }, "Equipe ", /* @__PURE__ */ React.createElement("span", null, teams[user.equipe] || "A")))));
  })));
};
