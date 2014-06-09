var url = require('url');

exports = module.exports = function (parent) {
    return function (req, res) {
        var query = url.parse(req.url,true).query;

        if (query['hub.mode'] === 'subscribe' && (query['hub.challenge'] !== null) && query['hub.challenge'].length > 0) {
            if (query['hub.verify_token'] === parent.settings['verify_token']) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(query['hub.challenge']);
            }
            else {
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.write('Error: Wrong parameters (request not from Instagram API, or wrong verify_token)\n');
                res.write(JSON.stringify(query));
            }
        }
        else {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.write('Bad request');
        }
        res.end();
    };
};