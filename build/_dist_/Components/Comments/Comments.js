import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography
} from "../../../web_modules/@material-ui/core.js";
import {makeStyles} from "../../../web_modules/@material-ui/core/styles.js";
import DeleteIcon from "../../../web_modules/@material-ui/icons/Delete.js";
import PersonIcon from "../../../web_modules/@material-ui/icons/Person.js";
import SendIcon from "../../../web_modules/@material-ui/icons/Send.js";
import {formatRelative} from "../../../web_modules/date-fns.js";
import {fr} from "../../../web_modules/date-fns/locale.js";
import {Field, Form, Formik} from "../../../web_modules/formik.js";
import React from "../../../web_modules/react.js";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2)
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  },
  content: {
    display: "block",
    padding: theme.spacing(0, 4)
  },
  create: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem"
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 0,
    marginLeft: ".25em"
  },
  item: {
    marginBottom: ".5rem",
    backgroundColor: theme.palette.background.paper
  }
}));
let initialValues = {
  content: ""
};
export const Comments = ({responses, deleteResponse, submitResponse}) => {
  console.log(responses);
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: "Comment"
  }, /* @__PURE__ */ React.createElement(Formik, {
    initialValues,
    onSubmit: submitResponse
  }, () => {
    return /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement("div", {
      className: classes.create
    }, /* @__PURE__ */ React.createElement(Avatar, {
      "aria-label": "recipe",
      className: classes.avatar
    }, /* @__PURE__ */ React.createElement(PersonIcon, null)), /* @__PURE__ */ React.createElement(Field, {
      name: "content"
    }, ({field}) => {
      return /* @__PURE__ */ React.createElement(TextField, {
        name: "content",
        type: "text",
        fullWidth: true,
        label: "donnez une reponse svp",
        className: classes.input,
        variant: "outlined",
        onChange: field.onChange,
        onBlur: field.onBlur
      });
    }), /* @__PURE__ */ React.createElement(IconButton, {
      type: "submit",
      color: "primary"
    }, /* @__PURE__ */ React.createElement(SendIcon, null))));
  }), responses.length > 0 ? /* @__PURE__ */ React.createElement(List, {
    className: classes.root
  }, responses.map((response) => {
    let {from, content, updatedAt, editable, id} = response;
    return /* @__PURE__ */ React.createElement("div", {
      key: id,
      className: classes.item,
      id
    }, /* @__PURE__ */ React.createElement(ListItem, {
      key: id,
      alignItems: "flex-start"
    }, /* @__PURE__ */ React.createElement(ListItemAvatar, null, /* @__PURE__ */ React.createElement(Avatar, {
      "aria-label": "recipe",
      className: classes.avatar
    }, /* @__PURE__ */ React.createElement(PersonIcon, null))), /* @__PURE__ */ React.createElement(ListItemText, {
      primary: /* @__PURE__ */ React.createElement(Typography, {
        className: classes.fonts
      }, from?.username),
      secondary: formatRelative(Date.parse(updatedAt), Date.now(), {
        locale: fr
      })
    }), editable ? /* @__PURE__ */ React.createElement(IconButton, {
      "aria-label": "settings",
      onClick: () => deleteResponse(id)
    }, /* @__PURE__ */ React.createElement(DeleteIcon, null)) : null), /* @__PURE__ */ React.createElement(Typography, {
      className: classes.content
    }, content));
  })) : null);
};
