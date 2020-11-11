import {Avatar} from "../../../web_modules/@material-ui/core.js";
import AppBar2 from "../../../web_modules/@material-ui/core/AppBar.js";
import IconButton2 from "../../../web_modules/@material-ui/core/IconButton.js";
import Menu2 from "../../../web_modules/@material-ui/core/Menu.js";
import MenuItem2 from "../../../web_modules/@material-ui/core/MenuItem.js";
import {makeStyles} from "../../../web_modules/@material-ui/core/styles.js";
import Toolbar2 from "../../../web_modules/@material-ui/core/Toolbar.js";
import AccountCircle2 from "../../../web_modules/@material-ui/icons/AccountCircle.js";
import React, {useEffect, useState} from "../../../web_modules/react.js";
import {Link, useHistory} from "../../../web_modules/react-router-dom.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    flexGrow: 1
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}));
export let Header = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    let rs = localStorage.getItem("is_admin");
    setIsAdmin(rs == "true");
  }, []);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("is_admin");
    history.replace("/login");
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(AppBar2, {
    position: "static"
  }, /* @__PURE__ */ React.createElement(Toolbar2, null, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: classes.logo
  }, /* @__PURE__ */ React.createElement(Avatar, {
    className: classes.large,
    src: "https://www.enp.edu.dz/storage/2020/06/cerist.png"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(IconButton2, {
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit"
  }, /* @__PURE__ */ React.createElement(AccountCircle2, null)), /* @__PURE__ */ React.createElement(Menu2, {
    id: "menu-appbar",
    anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open,
    onClose: handleClose
  }, isAdmin && /* @__PURE__ */ React.createElement(MenuItem2, {
    onClick: handleClose
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/admin"
  }, "Administration")), /* @__PURE__ */ React.createElement(MenuItem2, {
    onClick: handleLogout
  }, "Deconnexion"))))));
};
