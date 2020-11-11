import Avatar2 from "../../web_modules/@material-ui/core/Avatar.js";
import Box2 from "../../web_modules/@material-ui/core/Box.js";
import Button2 from "../../web_modules/@material-ui/core/Button.js";
import Container2 from "../../web_modules/@material-ui/core/Container.js";
import CssBaseline2 from "../../web_modules/@material-ui/core/CssBaseline.js";
import Grid2 from "../../web_modules/@material-ui/core/Grid.js";
import Link2 from "../../web_modules/@material-ui/core/Link.js";
import {makeStyles} from "../../web_modules/@material-ui/core/styles.js";
import TextField2 from "../../web_modules/@material-ui/core/TextField.js";
import Typography2 from "../../web_modules/@material-ui/core/Typography.js";
import {Field, Form, Formik} from "../../web_modules/formik.js";
import React, {useEffect, useState} from "../../web_modules/react.js";
import {useHistory} from "../../web_modules/react-router-dom.js";
import * as Yup from "../../web_modules/yup.js";
import {http} from "../utils.js";
import "./SignUp.css.proxy.js";
function Copyright({site}) {
  return /* @__PURE__ */ React.createElement(Typography2, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", /* @__PURE__ */ React.createElement(Link2, {
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
  },
  signup: {
    marginBottom: theme.spacing(2)
  }
}));
let initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  username: "",
  confirmPassword: "",
  equipe: "1",
  domain: "",
  competences: []
};
let validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("le Prenom  est requis"),
  lastName: Yup.string().trim().required("le Nom  est requis"),
  email: Yup.string().trim().email("Veuillez entrer un email valid").required("l'email est requis"),
  password: Yup.string().matches(/^[0-9a-z_$-]{7,}$/i, "le mot de passe doit au moins contenir 7 characters (a-z,0-9,_-$)").required("le mot de passe est requis"),
  username: Yup.string().trim().min(3, "le nom d'utilisateur doit au moins contenir 3 characters").required("le nom d'utilisateur est requis"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "les mots de passe sont different").required("vous devez confirmer votre mot de passe"),
  domain: Yup.number().integer().positive().required("la division est requise"),
  equipe: Yup.number().integer().positive().min(1, "cette equipe est invalide").max(4, "cette equipe est invalide").required("l'equipe est requise"),
  competences: Yup.array().of(Yup.string().trim().min(0)).min(1).max(4).required("competences requies")
});
export function SignUp() {
  const classes = useStyles();
  let history = useHistory();
  let [domains, setDomains] = useState([]);
  let [selectedDomain, setSelectedDomain] = useState();
  let [competences, setCompetences] = useState([]);
  let onSubmit = async (values) => {
    delete values.confirmPassword;
    try {
      let response = await http.post("/auth/signup", values);
      if (response.status === 201) {
        history.replace("/login");
      }
    } catch (e) {
      let [key] = Object.keys(e.response.data.error);
      alert(e.response.data.error[key]);
    }
  };
  useEffect(() => {
    let fetchDomains = async () => {
      let response = await http.get("/auth/domains");
      setDomains(response.data);
      setSelectedDomain(response.data[0].id);
    };
    fetchDomains();
  }, []);
  useEffect(() => {
    let fetchCompetences = async () => {
      let response = await http.get(`/auth/domains/${selectedDomain}/competences`);
      setCompetences(response.data);
    };
    fetchCompetences();
  }, [selectedDomain]);
  return /* @__PURE__ */ React.createElement(Container2, {
    component: "main",
    maxWidth: "xs"
  }, /* @__PURE__ */ React.createElement(CssBaseline2, null), /* @__PURE__ */ React.createElement("div", {
    className: classes.paper
  }, /* @__PURE__ */ React.createElement(Avatar2, {
    className: classes.avatar,
    src: "https://www.enp.edu.dz/storage/2020/06/cerist.png"
  }), /* @__PURE__ */ React.createElement(Typography2, {
    component: "h1",
    variant: "h5",
    className: classes.signup
  }, "Inscription"), /* @__PURE__ */ React.createElement(Formik, {
    initialValues,
    validationSchema,
    onSubmit,
    isInitialValid: false
  }, ({isValid, isSubmitting, ...rest}) => {
    console.log(rest);
    return /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(Grid2, {
      container: true,
      spacing: 2
    }, /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12,
      sm: 6
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "firstName"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        autoComplete: "fname",
        name: "firstName",
        variant: "outlined",
        fullWidth: true,
        id: "firstName",
        label: "Prenom",
        autoFocus: true,
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
      });
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12,
      sm: 6
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "lastName"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        variant: "outlined",
        fullWidth: true,
        id: "lastName",
        label: "Nom",
        name: "lastName",
        autoComplete: "lname",
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
      });
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "username"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        variant: "outlined",
        fullWidth: true,
        id: "username",
        label: "Nom d'utilisateur",
        name: "username",
        autoComplete: "username",
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
      });
    })), /* @__PURE__ */ React.createElement(Grid2, {
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
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "ConfirmPassword"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement(TextField2, {
        variant: "outlined",
        fullWidth: true,
        name: "confirmPassword",
        label: "Mot de Passe Confirmation",
        type: "password",
        id: "confirmPassword",
        autoComplete: "current-password",
        error: meta.error && meta.touched,
        onChange: field.onChange,
        onBlur: field.onBlur,
        helperText: meta.touched && meta.error
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
        onChange: (e) => {
          setSelectedDomain(e.target.value);
          field.onChange(e);
        },
        onBlur: field.onBlur,
        value: selectedDomain
      }, domains?.map(({id, name}) => /* @__PURE__ */ React.createElement("option", {
        value: id
      }, name))));
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "equipe"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement("div", {
        className: "team_container"
      }, /* @__PURE__ */ React.createElement("p", null, "equipes: "), /* @__PURE__ */ React.createElement("label", {
        className: "container-radio"
      }, "A", /* @__PURE__ */ React.createElement("input", {
        type: "radio",
        name: "equipe",
        value: "1",
        onChange: field.onChange,
        onBlur: field.onBlur
      }), /* @__PURE__ */ React.createElement("span", {
        className: "checkmark"
      })), /* @__PURE__ */ React.createElement("label", {
        className: "container-radio"
      }, "B", /* @__PURE__ */ React.createElement("input", {
        type: "radio",
        name: "equipe",
        value: "2",
        onChange: field.onChange,
        onBlur: field.onBlur
      }), /* @__PURE__ */ React.createElement("span", {
        className: "checkmark"
      })), /* @__PURE__ */ React.createElement("label", {
        className: "container-radio"
      }, "C", /* @__PURE__ */ React.createElement("input", {
        type: "radio",
        name: "equipe",
        value: "3",
        onChange: field.onChange,
        onBlur: field.onBlur
      }), /* @__PURE__ */ React.createElement("span", {
        className: "checkmark"
      })), /* @__PURE__ */ React.createElement("label", {
        className: "container-radio"
      }, "D", /* @__PURE__ */ React.createElement("input", {
        type: "radio",
        name: "equipe",
        value: "4",
        onChange: field.onChange,
        onBlur: field.onBlur
      }), /* @__PURE__ */ React.createElement("span", {
        className: "checkmark"
      })));
    })), /* @__PURE__ */ React.createElement(Grid2, {
      item: true,
      xs: 12
    }, /* @__PURE__ */ React.createElement(Field, {
      name: "competences"
    }, ({field, meta}) => {
      return /* @__PURE__ */ React.createElement("div", {
        className: "team_container"
      }, /* @__PURE__ */ React.createElement("p", null, "competences: "), competences.map(({id, name}) => {
        return /* @__PURE__ */ React.createElement("label", {
          key: id,
          htmlFor: id,
          className: "competence"
        }, /* @__PURE__ */ React.createElement("input", {
          id,
          type: "checkbox",
          name: "competences",
          value: id,
          onChange: field.onChange,
          onBlur: field.onBlur
        }), name);
      }));
    })), /* @__PURE__ */ React.createElement(Button2, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      disabled: !isValid || isSubmitting
    }, "Confirmation")));
  })), /* @__PURE__ */ React.createElement(Box2, {
    mt: 5
  }, /* @__PURE__ */ React.createElement(Copyright, {
    site: "PFE"
  })));
}
