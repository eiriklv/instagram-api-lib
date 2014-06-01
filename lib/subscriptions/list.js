exports = module.exports = function (parent, path) {
    return function (options) {
        console.log('derp');
        var url = parent.settings.apiURL + path;
        var queryObject = {
            'client_secret': parent.settings['client_secret'],
            'client_id': parent.settings['client_id'],
        };
        var method = 'GET';
        parent._request(url, queryObject, method, options.success, options.error);
    };
};