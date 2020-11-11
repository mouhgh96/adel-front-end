import {Link} from "../../web_modules/@material-ui/core.js";
import Avatar2 from "../../web_modules/@material-ui/core/Avatar.js";
import Box2 from "../../web_modules/@material-ui/core/Box.js";
import Button2 from "../../web_modules/@material-ui/core/Button.js";
import Container2 from "../../web_modules/@material-ui/core/Container.js";
import Grid2 from "../../web_modules/@material-ui/core/Grid.js";
import {makeStyles} from "../../web_modules/@material-ui/core/styles.js";
import TextField2 from "../../web_modules/@material-ui/core/TextField.js";
import Typography2 from "../../web_modules/@material-ui/core/Typography.js";
import {Field, Form, Formik} from "../../web_modules/formik.js";
import React, {useEffect} from "../../web_modules/react.js";
import {Link as RouterLink, useHistory, useLocation} from "../../web_modules/react-router-dom.js";
import * as Yup from "../../web_modules/yup.js";
import {http} from "../utils.js";
function Copyright({site}) {
  return /* @__PURE__ */ React.createElement(Typography2, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", /* @__PURE__ */ React.createElement(Link, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, site), new Date().getFullYear());
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
let initialValues = {
  email: "",
  password: ""
};
let validationSchema = Yup.object().shape({
  email: Yup.string().trim().email("credentials incorrect").required("l'email est requis"),
  password: Yup.string().matches(/^[0-9a-z_$-]{7,}$/i, "credentials incorrect").required("le mot de passe est requis")
});
export function Login() {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let {from} = location.state || {from: {pathname: "/"}};
  console.log(location);
  useEffect(() => {
    let token = localStorage.getItem("access_token");
    if (token && token.trim()) {
      history.replace(from);
    }
  }, []);
  let onSubmit = async (values) => {
    try {
      let response = await http.post("/auth/login", values);
      let token = response.data.access_token;
      localStorage.setItem("access_token", token);
      let isAdmin = response.data.is_admin;
      localStorage.setItem("is_admin", isAdmin);
      history.replace(from);
    } catch (e) {
      console.log(e);
      debugger;
    }
  };
  return /* @__PURE__ */ React.createElement(Container2, {
    component: "main",
    maxWidth: "xs"
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.paper
  }, /* @__PURE__ */ React.createElement(Avatar2, {
    className: classes.avatar,
    src: "https://www.enp.edu.dz/storage/2020/06/cerist.png"
  }), /* @__PURE__ */ React.createElement(Typography2, {
    component: "h1",
    variant: "h5"
  }, "Login"), /* @__PURE__ */ React.createElement(Formik, {
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
      name: "email"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        variant: "outlined",
        fullWidth: true,
        id: "email",
        label: "Addresse Email",
        name: "email",
        autoComplete: "email",
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
      });
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "password"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        variant: "outlined",
        fullWidth: true,
        name: "password",
        label: "Mot de Passe",
        type: "password",
        id: "password",
        autoComplete: "current-password",
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
      });
    }))), /* @__PURE__ */ React.createElement(Button2, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      disabled: !isValid || isSubmitting
    }, "Connexion"), /* @__PURE__ */ React.createElement(Grid2, {
      container: true,
      justify: "flex-end"
    }, /* @__PURE__ */ React.createElement(Grid2, {
      item: true
    }, /* @__PURE__ */ React.createElement(RouterLink, {
      to: "/signup"
    }, /* @__PURE__ */ React.createElement(Typography2, {
      variant: "body2",
      color: "primary"
    }, "Vous n'avez pas de compte? inscription")))));
  })), /* @__PURE__ */ React.createElement(Box2, {
    mt: 5
  }, /* @__PURE__ */ React.createElement(Copyright, {
    site: "PFE"
  })));
}
