import Avatar2 from "../../../web_modules/@material-ui/core/Avatar.js";
import Backdrop2 from "../../../web_modules/@material-ui/core/Backdrop.js";
import Button2 from "../../../web_modules/@material-ui/core/Button.js";
import Grid2 from "../../../web_modules/@material-ui/core/Grid.js";
import Modal2 from "../../../web_modules/@material-ui/core/Modal.js";
import {makeStyles} from "../../../web_modules/@material-ui/core/styles.js";
import TextareaAutosize2 from "../../../web_modules/@material-ui/core/TextareaAutosize.js";
import TextField2 from "../../../web_modules/@material-ui/core/TextField.js";
import AddCircleIcon from "../../../web_modules/@material-ui/icons/AddCircle.js";
import {Field, Form, Formik} from "../../../web_modules/formik.js";
import PropTypes from "../../../web_modules/prop-types.js";
import React, {useContext, useEffect, useState} from "../../../web_modules/react.js";
import {useHistory} from "../../../web_modules/react-router-dom.js";
import {animated, useSpring} from "../../../web_modules/react-spring/web.cjs.js";
import * as Yup from "../../../web_modules/yup.js";
import {QuestionsContext} from "../../question.context.js";
import {authHttp, http} from "../../utils.js";
let initialValues = {
  title: "",
  content: "",
  domain: ""
};
let validationSchema = Yup.object().shape({
  title: Yup.string().trim().required("le titre est requis"),
  content: Yup.string().trim().required("le contenu est requis"),
  domain: Yup.number().integer().positive("veuillez entrer le nom d'un domaine sans espace").required("le domaine est requis")
});
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    width: "100%",
    minWidth: "100%",
    fontSize: "1rem",
    padding: theme.spacing(1),
    letterSpacing: "0.025em"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginLeft: "auto",
    marginRight: "auto"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    marginLeft: ".25em"
  }
}));
const Fade = React.forwardRef(function Fade2(props, ref) {
  const {in: open, children, onEnter, onExited} = props;
  const style = useSpring({
    from: {opacity: 0},
    to: {opacity: open ? 1 : 0},
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });
  return /* @__PURE__ */ React.createElement(animated.div, {
    ref,
    style
  }, children);
});
Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
};
export let AddPost = (props) => {
  let {open, setOpen} = props;
  let history = useHistory();
  const classes = useStyles();
  let [domains, setDomains] = useState([]);
  let [_, setQuestions] = useContext(QuestionsContext);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let fetchDomains = async () => {
      let response = await http.get("/auth/domains");
      setDomains(response.data);
    };
    fetchDomains();
  }, []);
  let onSubmit = async (values) => {
    console.log("submit");
    let response = await authHttp.post("/questions", values);
    setQuestions((oldState) => [
      {editable: true, ...response.data},
      ...oldState
    ]);
    setOpen(false);
  };
  return /* @__PURE__ */ React.createElement(Modal2, {
    "aria-labelledby": "spring-modal-title",
    "aria-describedby": "spring-modal-description",
    className: classes.modal,
    open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: Backdrop2,
    BackdropProps: {
      timeout: 500
    }
  }, /* @__PURE__ */ React.createElement(Fade, {
    in: open
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.paper
  }, /* @__PURE__ */ React.createElement(Avatar2, {
    className: classes.avatar
  }, /* @__PURE__ */ React.createElement(AddCircleIcon, null)), /* @__PURE__ */ React.createElement(Formik, {
    initialValues,
    validationSchema,
    onSubmit,
    isInitialValid: false
  }, ({isValid, isSubmitting}) => {
    return /* @__PURE__ */ React.createElement(Form, {
      className: classes.form,
      noValidate: true
    }, /* @__PURE__ */ React.createElement(Grid2, {
      container: true,
      spacing: 2
    }, /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "title"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        variant: "outlined",
        fullWidth: true,
        id: "title",
        label: "Titre",
        name: "title",
        type: "text",
        autoComplete: "title",
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
      });
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "content"
    }, ({field}) => {
      return /* @__PURE__ */ React.createElement(TextareaAutosize2, {
        "aria-label": "minimum height",
        rowsMin: 3,
        rowsMax: 12,
        variant: "outlined",
        fullWidth: true,
        name: "content",
        placeholder: "Ecrivez le contenu de la question ici",
        type: "text",
        id: "content",
        autoComplete: "content",
        className: classes.content,
        onChange: field.onChange,
        onBlur: field.onBlur
      });
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12,
      sm: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "domain"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Division"), /* @__PURE__ */ React.createElement("select", {
        className: "select",
        name: "domain",
        onChange: field.onChange,
        onBlur: field.onBlur
      }, domains?.map(({id, name}) => /* @__PURE__ */ React.createElement("option", {
        value: id
      }, name))));
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      container: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 6
    }, /* @__PURE__ */ React.createElement(Button2, {
      fullWidth: true,
      variant: "contained",
      color: "secondary",
      onClick: () => setOpen(false)
    }, "Annuler")), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 6
    }, /* @__PURE__ */ React.createElement(Button2, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      disabled: !isValid || isSubmitting
    }, "Poster")))));
  }))));
};
