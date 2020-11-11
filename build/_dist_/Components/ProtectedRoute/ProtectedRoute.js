import {Container, Fab, makeStyles} from "../../../web_modules/@material-ui/core.js";
import EditIcon from "../../../web_modules/@material-ui/icons/Edit.js";
import React, {useEffect, useState} from "../../../web_modules/react.js";
import {useHistory, useLocation} from "../../../web_modules/react-router-dom.js";
import {QuestionProvider} from "../../question.context.js";
import {AddPost as AddPost2} from "../AddPost/AddPost.js";
import {Header as Header2} from "../Header/Header.js";
let useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    textAlign: "right",
    zIndex: "-1"
  }
}));
export const Protected = ({children}) => {
  let classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let [open, setOpen] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("access_token") || "";
    console.log("location", location);
    if (!token.trim()) {
      history.push("/login", {
        from: {
          pathname: location.pathname
        }
      });
    }
  }, []);
  const onClick = () => {
    setOpen(true);
  };
  return /* @__PURE__ */ React.createElement(QuestionProvider, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(Container, {
    maxWidth: "lg"
  }, children, /* @__PURE__ */ React.createElement(AddPost2, {
    open,
    setOpen
  })), /* @__PURE__ */ React.createElement(Container, {
    maxWidth: "lg",
    className: classes.fab
  }, /* @__PURE__ */ React.createElement(Fab, {
    color: "primary",
    "aria-label": "edit",
    onClick
  }, /* @__PURE__ */ React.createElement(EditIcon, null))));
};
