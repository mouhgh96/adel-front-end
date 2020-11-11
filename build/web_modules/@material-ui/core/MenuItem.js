import { b as _defineProperty } from '../../common/defaultTheme-426619e3.js';
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
import '../../common/isMuiElement-9d76b06e.js';
import '../../common/useForkRef-7f492f6d.js';
import '../../common/useEventCallback-1d61c650.js';
import '../../common/index-1e1063fc.js';
import '../../common/useIsFocusVisible-bed0d6c1.js';
import '../../common/TransitionGroupContext-bf73b0b8.js';
import '../../common/ButtonBase-c907805a.js';
import '../../common/ListContext-aa4d50ad.js';
import { L as ListItem } from '../../common/ListItem-8f08d2a8.js';

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body1, _defineProperty({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: _extends({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      ListItemClasses = props.ListItemClasses,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/react.createElement(ListItem, _extends({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: _extends({
      dense: classes.dense
    }, ListItemClasses),
    className: clsx(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiMenuItem'
})(MenuItem);

export default __pika_web_default_export_for_treeshaking__;
