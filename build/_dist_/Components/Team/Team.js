import React from "../../../web_modules/react.js";
import {withStyles} from "../../../web_modules/@material-ui/core/styles.js";
import {green} from "../../../web_modules/@material-ui/core/colors.js";
import FormGroup2 from "../../../web_modules/@material-ui/core/FormGroup.js";
import FormControlLabel2 from "../../../web_modules/@material-ui/core/FormControlLabel.js";
import Checkbox2 from "../../../web_modules/@material-ui/core/Checkbox.js";
import CheckBoxOutlineBlankIcon from "../../../web_modules/@material-ui/icons/CheckBoxOutlineBlank.js";
import CheckBoxIcon from "../../../web_modules/@material-ui/icons/CheckBox.js";
import Favorite2 from "../../../web_modules/@material-ui/icons/Favorite.js";
import FavoriteBorder2 from "../../../web_modules/@material-ui/icons/FavoriteBorder.js";
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => /* @__PURE__ */ React.createElement(Checkbox2, {
  color: "default",
  ...props
}));
export function Team() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };
  return /* @__PURE__ */ React.createElement(FormGroup2, {
    row: true
  }, /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      checked: state.checkedA,
      onChange: handleChange,
      name: "checkedA"
    }),
    label: "Secondary"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      checked: state.checkedB,
      onChange: handleChange,
      name: "checkedB",
      color: "primary"
    }),
    label: "Primary"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      name: "checkedC"
    }),
    label: "Uncontrolled"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    disabled: true,
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      name: "checkedD"
    }),
    label: "Disabled"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    disabled: true,
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      checked: true,
      name: "checkedE"
    }),
    label: "Disabled"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      checked: state.checkedF,
      onChange: handleChange,
      name: "checkedF",
      indeterminate: true
    }),
    label: "Indeterminate"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(GreenCheckbox, {
      checked: state.checkedG,
      onChange: handleChange,
      name: "checkedG"
    }),
    label: "Custom color"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      icon: /* @__PURE__ */ React.createElement(FavoriteBorder2, null),
      checkedIcon: /* @__PURE__ */ React.createElement(Favorite2, null),
      name: "checkedH"
    }),
    label: "Custom icon"
  }), /* @__PURE__ */ React.createElement(FormControlLabel2, {
    control: /* @__PURE__ */ React.createElement(Checkbox2, {
      icon: /* @__PURE__ */ React.createElement(CheckBoxOutlineBlankIcon, {
        fontSize: "small"
      }),
      checkedIcon: /* @__PURE__ */ React.createElement(CheckBoxIcon, {
        fontSize: "small"
      }),
      name: "checkedI"
    }),
    label: "Custom size"
  }));
}
