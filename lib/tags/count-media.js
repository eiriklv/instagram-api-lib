exports = module.exports = function (parent, path) {
    return function (options) {
        var url = parent.settings.apiURL + path + '/' + options.hashtag;
        var method = 'GET';
        var queryObject = {
            'access_token': options.accessToken
        };
        parent._request(url, queryObject, method, options.success, options.error);
    };
};