import { _ as _extends } from './objectWithoutPropertiesLoose-1048eeae.js';
import { r as react } from './index-59543a25.js';
import { r as require$$2 } from './SvgIcon-4d6cafcd.js';

/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react.createElement(require$$2, _extends({
      ref: ref
    }, props), path);
  };

  Component.muiName = require$$2.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

export { createSvgIcon as c };
