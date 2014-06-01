var qs = require('qs');

exports = module.exports = function (parent, path) {
    return function (options) {
        var result = parent.settings.apiURL + path + '/' + options.hashtag + '/media/recent?';
        var queryString = qs.stringify({
            'access_token': options.accessToken,
            'count': options.count
        });
        result += queryString;
        return result;
    };
};