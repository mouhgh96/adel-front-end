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
import '../../common/capitalize-cecff5f0.js';
import { _ as __pika_web_default_export_for_treeshaking__$1 } from '../../common/Typography-619e37e4.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 16
  },

  /* Styles applied to the avatar element. */
  avatar: {
    flex: '0 0 auto',
    marginRight: 16
  },

  /* Styles applied to the action element. */
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -8,
    marginRight: -8
  },

  /* Styles applied to the content wrapper element. */
  content: {
    flex: '1 1 auto'
  },

  /* Styles applied to the title Typography element. */
  title: {},

  /* Styles applied to the subheader Typography element. */
  subheader: {}
};
var CardHeader = /*#__PURE__*/react.forwardRef(function CardHeader(props, ref) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      subheaderProp = props.subheader,
      subheaderTypographyProps = props.subheaderTypographyProps,
      titleProp = props.title,
      titleTypographyProps = props.titleTypographyProps,
      other = _objectWithoutProperties(props, ["action", "avatar", "classes", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"]);

  var title = titleProp;

  if (title != null && title.type !== __pika_web_default_export_for_treeshaking__$1 && !disableTypography) {
    title = /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__$1, _extends({
      variant: avatar ? 'body2' : 'h5',
      className: classes.title,
      component: "span",
      display: "block"
    }, titleTypographyProps), title);
  }

  var subheader = subheaderProp;

  if (subheader != null && subheader.type !== __pika_web_default_export_for_treeshaking__$1 && !disableTypography) {
    subheader = /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__$1, _extends({
      variant: avatar ? 'body2' : 'body1',
      className: classes.subheader,
      color: "textSecondary",
      component: "span",
      display: "block"
    }, subheaderTypographyProps), subheader);
  }

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other), avatar && /*#__PURE__*/react.createElement("div", {
    className: classes.avatar
  }, avatar), /*#__PURE__*/react.createElement("div", {
    className: classes.content
  }, title, subheader), action && /*#__PURE__*/react.createElement("div", {
    className: classes.action
  }, action));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCardHeader'
})(CardHeader);

export default __pika_web_default_export_for_treeshaking__;
