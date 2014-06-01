var qs = require('qs');

exports = module.exports = function (parent, path) {
    return function (options) {
        options['client_id'] = parent.settings['client_id'];
        options['redirect_uri'] = parent.settings['redirect_uri'];
        options['response_type'] = 'code';

        return parent.settings.host + path + '/authorize/?' + qs.stringify(options);
    };
};