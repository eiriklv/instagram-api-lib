var InstagramAPI = require('./lib');

var instagram = new InstagramAPI({
    host: 'https://api.instagram.com',
    clientId: '000000000000000000',
    clientSecret: '0000000000000000000',
    redirectUri: 'http://localhost:3000/auth/instagram/callback',
    verifyToken: 'yabbadabbadoo',
    maxSockets: 10
});

instagram.subscriptions.list({
    success: function (result) {
        console.log('success on list');
        console.log(result);
    },
    error: function (err) {
        console.log('error on list');
        console.log(err);
    }
});

instagram.tags.countMedia({
    hashtag: 'meshnorway',
    accessToken: '00000000.0000000.0000000000000000000000000',
    success: function (result) {
        console.log('success on media count');
        console.log(result);
    },
    error: function (err) {
        console.log('error on media count');
        console.log(err);
    }
});

var customUrl = instagram.tags.createUrl({
    hashtag: 'sunndal',
    accessToken: '0000000.0000000.000000000000000000000000',
    count: 1
});

console.log(customUrl);

instagram.tags.getMedia({
    url: customUrl,
    success: function (result) {
        console.log('success on media get for sunndal');
        console.log(result);
    },
    error: function (err, body) {
        console.log('error on media get');
        console.log(err);
        console.log(body);
    }
});

instagram.tags.getMedia({
    hashtag: 'oslo',
    accessToken: '0000000.0000000.00000000000000000000',
    count: 1,
    success: function (result) {
        console.log('success on media get for oslo');
        console.log(result);
    },
    error: function (err, body) {
        console.log('error on media get');
        console.log(err);
    }
});

console.log(instagram.auth.getUrl({ display: 'touch'}));