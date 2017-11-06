var parse = require('url').parse;
var interface = require('windows-system-internet-settings');
var factory = require('./factory');

function parseProxyUrl(settings, url) {
  if (!settings.ProxyEnable) {
    return null;
  }
  var scheme = parse(url).protocol;
  return scheme + '//' + settings.ProxyServer;
}

module.exports = factory(interface, parseProxyUrl);