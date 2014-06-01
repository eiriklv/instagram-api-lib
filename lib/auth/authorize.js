exports = module.exports = function (parent, path) {
    return function (options) {
        var url = parent.settings.host + path + '/access_token';
        var method = 'POST';
        var formInput = {
            'client_id': parent.settings['client_id'],
            'client_secret': parent.settings['client_secret'],
            'grant_type': 'authorization_code',
            'redirect_uri': parent.settings['redirect_uri'],
            'code': options.code
        };
        parent._request(url, formInput, method, options.success, options.error);
    };
};