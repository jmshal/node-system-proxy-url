var parse = require('url').parse;
var interface = require('macos-system-proxy-settings');
var factory = require('./factory');

function parseProxyUrl(settings, url) {
  var types = [];
  if (settings.HTTPEnable) {
    types.push('http');
  }
  if (settings.HTTPSEnable) {
    types.push('https');
  }
  if (!types.length) {
    return null;
  }
  var type;
  if (url) {
    var protocol = parse(url).protocol;                    // "hTtP:"
    protocol = protocol.substring(0, protocol.length - 1); // "hTtP"
    protocol = protocol.toLowerCase();                     // "http"
    if (types.indexOf(protocol) === -1) {
      return null;
    }
    type = protocol;
  } else {
    type = types[0];
  }
  var prefix = type.toUpperCase(); // "http" -> "HTTP" (settings are uppercased)
  var server = settings[prefix + 'Proxy'];
  var port = settings[prefix + 'Port'];
  var proxyUrl = server + ':' + port;
  return proxyUrl;
}

module.exports = factory(interface, parseProxyUrl);