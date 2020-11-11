import '../../common/defaultTheme-426619e3.js';
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
import { _ as __pika_web_default_export_for_treeshaking__$1 } from '../../common/Typography-619e37e4.js';
import { a as useFormControl } from '../../common/useFormControl-321ae61b.js';

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

var FormControlLabel = /*#__PURE__*/react.forwardRef(function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = _objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = useFormControl();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return /*#__PURE__*/react.createElement("label", _extends({
    className: clsx(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat(capitalize(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react.cloneElement(control, controlProps), /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__$1, {
    component: "span",
    className: clsx(classes.label, disabled && classes.disabled)
  }, label));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel);

export default __pika_web_default_export_for_treeshaking__;
