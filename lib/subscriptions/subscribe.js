exports = module.exports = function (parent, path) {
    return function (options) {
        var url = parent.settings.apiURL + path;
        var method = 'POST';
        var formInput = {
            'client_id': parent.settings['client_id'],
            'client_secret': parent.settings['client_secret'],
            'callback_url': parent.settings['callback_url'],
            'verify_token': parent.settings['verify_token'],
            'aspect': 'media',
            'object': 'tag',
            'object_id': options.hashtag
        };
        parent._request(url, formInput, method, options.success, options.error);
    };
};