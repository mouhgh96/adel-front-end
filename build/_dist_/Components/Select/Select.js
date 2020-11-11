import {FormControl, InputLabel, makeStyles} from "../../../web_modules/@material-ui/core.js";
import React from "../../../web_modules/react.js";
let useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%"
  }
}));
export let Select = (props) => {
  let classes = useStyles();
  return /* @__PURE__ */ React.createElement(FormControl, {
    variant: "outlined",
    className: classes.formControl,
    fullWidth: true
  }, /* @__PURE__ */ React.createElement(InputLabel, {
    htmlFor: "age-native-simple"
  }, "Age"), /* @__PURE__ */ React.createElement(Select, {
    native: true,
    value: 10,
    inputProps: {
      name: "age",
      id: "age-native-simple"
    }
  }, /* @__PURE__ */ React.createElement("option", {
    "aria-label": "None",
    value: ""
  }), /* @__PURE__ */ React.createElement("option", {
    value: 10
  }, "Ten"), /* @__PURE__ */ React.createElement("option", {
    value: 20
  }, "Twenty"), /* @__PURE__ */ React.createElement("option", {
    value: 30
  }, "Thirty")));
};
