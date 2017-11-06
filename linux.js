var parse = require('url').parse;
var getProxyForUrl = require('proxy-from-env').getProxyForUrl;
var factory = require('./factory');
var interface = require('./noop-interface');

function parseProxyUrl(_, url) {
  return getProxyForUrl(url) || null;
}

module.exports = factory(interface, parseProxyUrl);