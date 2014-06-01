var debug = require('debug')('instagram-api:tags:get-media');

exports = module.exports = function (parent, path) {
    return function (options) {
        var url = parent.settings.apiURL + path + '/' + options.hashtag + '/media/recent';
        var queryObject = {
            'access_token': options.accessToken,
            'count': options.count
        };
        var method = 'GET';

        // if a url is given, this overrides the method
        if (options.url) {
            debug('url override: ' + options.url);
            parent._request(options.url, null, method, options.success, options.error);
        }
        else {
            parent._request(url, queryObject, method, options.success, options.error);
        }
    };
};