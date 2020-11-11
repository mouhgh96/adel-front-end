import { _ as _slicedToArray, f as fade } from '../../common/defaultTheme-426619e3.js';
import '../../common/green-001eb97a.js';
import { _ as _extends } from '../../common/objectWithoutPropertiesLoose-1048eeae.js';
import '../../common/_commonjsHelpers-913f9c4a.js';
import '../../common/index-9a858da8.js';
import '../../common/hoist-non-react-statics.cjs-3f14c29b.js';
import { _ as _objectWithoutProperties } from '../../common/objectWithoutProperties-94ce8121.js';
import '../../common/useTheme-d938d124.js';
import '../../common/getThemeProps-6712df0a.js';
import '../../common/createClass-2698d1b7.js';
import '../../common/inheritsLoose-b67f434e.js';
import { r as react } from '../../common/index-59543a25.js';
import { c as clsx } from '../../common/clsx.m-114f790f.js';
import { w as withStyles } from '../../common/withStyles-ab554b96.js';
import { c as capitalize } from '../../common/capitalize-cecff5f0.js';
import '../../common/SvgIcon-4d6cafcd.js';
import { c as createSvgIcon } from '../../common/createSvgIcon-5286a992.js';
import '../../common/useForkRef-7f492f6d.js';
import { u as useControlled } from '../../common/useControlled-a7465eb0.js';
import '../../common/useEventCallback-1d61c650.js';
import '../../common/index-1e1063fc.js';
import '../../common/useIsFocusVisible-bed0d6c1.js';
import '../../common/TransitionGroupContext-bf73b0b8.js';
import '../../common/ButtonBase-c907805a.js';
import { _ as __pika_web_default_export_for_treeshaking__$1 } from '../../common/IconButton-4c53c8c1.js';
import { a as useFormControl } from '../../common/useFormControl-321ae61b.js';

var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = _objectWithoutProperties(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = useFormControl();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__$1, _extends({
    component: "span",
    className: clsx(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react.createElement("input", _extends({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
var SwitchBase$1 = withStyles(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase);

/**
 * @ignore - internal component.
 */

var CheckBoxOutlineBlankIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}));

/**
 * @ignore - internal component.
 */

var CheckBoxIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}));

/**
 * @ignore - internal component.
 */

var IndeterminateCheckBoxIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}));

var styles$1 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = /*#__PURE__*/react.createElement(CheckBoxIcon, null);
var defaultIcon = /*#__PURE__*/react.createElement(CheckBoxOutlineBlankIcon, null);
var defaultIndeterminateIcon = /*#__PURE__*/react.createElement(IndeterminateCheckBoxIcon, null);
var Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(props, ref) {
  var _props$checkedIcon = props.checkedIcon,
      checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$icon = props.icon,
      iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$indeterminateI = props.indeterminateIcon,
      indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
      inputProps = props.inputProps,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = _objectWithoutProperties(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);

  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return /*#__PURE__*/react.createElement(SwitchBase$1, _extends({
    type: "checkbox",
    classes: {
      root: clsx(classes.root, classes["color".concat(capitalize(color))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color,
    inputProps: _extends({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react.cloneElement(icon, {
      fontSize: icon.props.fontSize === undefined && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === undefined && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles$1, {
  name: 'MuiCheckbox'
})(Checkbox);

export default __pika_web_default_export_for_treeshaking__;
