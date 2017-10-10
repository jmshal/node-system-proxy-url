var macos = require('./macos');
var windows = require('./windows');

function merge(base, obj) {
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var key in obj) {
    if (hasOwn.call(obj, key)) {
      base[key] = obj[key];
    }
  }
  return base;
}

var defaults;

switch (process.platform) {
  case 'darwin': {
    defaults = macos;
    break;
  }
  case 'win32': {
    defaults = windows;
    break;
  }
  default: {
    console.warn('Unknown platform "' + process.platform + '", unable to provide proxy url.');
    break;
  }
}

merge(exports, defaults);
exports.macos = macos;
exports.windows = windows;