function factory(interface, parseProxyUrl) {
  function getProxyUrl(url, callback) {
    if (typeof url === 'function') {
      callback = url;
      url = null;
    }
    interface.getSettings(function (err, settings) {
      if (err) {
        callback(err, null);
      } else {
        try {
          var proxyUrl = parseProxyUrl(settings, url);
          callback(null, proxyUrl);
        } catch (err) {
          callback(err, null);
        }
      }
    });
  }

  function getProxyUrlSync(url) {
    var settings = interface.getSettingsSync();
    var proxyUrl = parseProxyUrl(settings, url);
    return proxyUrl;
  }

  function getProxyUrlAsync(url) {
    return new Promise(function (resolve, reject) {
      getProxyUrl(url, function(err, proxyUrl) {
        if (err) {
          reject(err);
        } else {
          resolve(proxyUrl);
        }
      });
    });
  }

  return {
    getProxyUrl: getProxyUrl,
    getProxyUrlSync: getProxyUrlSync,
    getProxyUrlAsync: getProxyUrlAsync,
  };
}

module.exports = factory;