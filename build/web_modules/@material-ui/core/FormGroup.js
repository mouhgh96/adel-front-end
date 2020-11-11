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

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

var FormGroup = /*#__PURE__*/react.forwardRef(function FormGroup(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$row = props.row,
      row = _props$row === void 0 ? false : _props$row,
      other = _objectWithoutProperties(props, ["classes", "className", "row"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className, row && classes.row),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiFormGroup'
})(FormGroup);

export default __pika_web_default_export_for_treeshaking__;
