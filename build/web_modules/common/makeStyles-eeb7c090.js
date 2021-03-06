import { m as makeStyles$1, d as defaultTheme } from './defaultTheme-426619e3.js';
import { _ as _extends } from './objectWithoutPropertiesLoose-1048eeae.js';

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStyles$1(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

export { makeStyles as m };
