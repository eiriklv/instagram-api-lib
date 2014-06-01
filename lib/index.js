var debug = require('debug')('instagram-api-lib');
var request = require('request');
var qs = require('qs');
var util = require('util');

function InstagramAPI (settings) {
    // settings
    this.settings = {};
    this.settings.host = settings.host || 'https://api.instagram.com';
    this.settings.apiURL = this.settings.host + '/v1';
    this.settings['client_id'] = settings.clientId || 'localdevclient';
    this.settings['client_secret'] = settings.clientSecret || 'localdevsecret';
    this.settings['callback_url'] = settings.callbackUrl || 'localdev-callbackurl';
    this.settings['redirect_uri'] = settings.redirectUri || 'localdev-redirecturi';
    this.settings['verify_token'] = settings.verifyToken || 'localdev-verifytoken';
    this.settings.maxSockets = settings.maxSockets || 5;

    // submodules
    this.auth = require('./auth')(this, '/oauth');
    this.tags = require('./tags')(this, '/tags');
    this.subscriptions = require('./subscriptions')(this, '/subscriptions');
}

InstagramAPI.prototype._request = function (path, query, method, onSuccess, onError) {
    var requestOptions = {
        'uri': path,
        'method': method,
        'pool': {
            maxSockets: this.settings.maxSockets
        }
    };

    if (method == 'POST' && query) requestOptions.form = query;
    if (method == 'GET' && query) requestOptions.qs = query;

    request(requestOptions, function (error, response, body) {
        var data;

        try {
            data = JSON.parse(body);
        }
        catch (e) {
            return !!onError ? onError(e) : debug('got an error on ' + method + ' request for:\n' + path + '\n' + 'with query:\n' + qs.stringify(query) + '\n' + 'Error payload:\n' + util.inspect(body));
        }

        if (error) return !!onError ? onError(error) : debug('got an error on ' + method + ' request for:\n' + path + '\n' + 'with query:\n' + qs.stringify(query) + '\n' + 'Error payload:\n' + util.inspect(error));
        if (!error && response.statusCode != 200) return !!onError ? onError(data) : debug('got an error on ' + method + ' request for:\n' + path + '\n' + 'with query:\n' + qs.stringify(query) + '\n' + 'Error payload:\n' + util.inspect('unexpected status code: ' + response.statusCode));

        !!onSuccess ? onSuccess(data) : debug(util.inspect(data));
    });
};

module.exports = InstagramAPI;