exports = module.exports = function (parent, path) {
    return function (options) {
        var url = parent.settings.apiURL + path;
        var queryObject = {
            'client_secret': parent.settings['client_secret'],
            'client_id': parent.settings['client_id'],
            'id': options.id
        };
        var method = 'DELETE';
        parent._request(url, queryObject, method, options.success, options.error);
    };
};