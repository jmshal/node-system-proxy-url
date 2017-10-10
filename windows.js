var interface = require('windows-system-internet-settings');
var factory = require('./factory');

function parseProxyUrl(settings, url) {
  if (!settings.ProxyEnable) {
    return null;
  }
  return settings.ProxyServer;
}

module.exports = factory(interface, parseProxyUrl);