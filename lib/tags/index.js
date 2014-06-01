exports = module.exports = function (parent, path) {
    return {
        getMedia: require('./get-media')(parent, path),
        countMedia: require('./count-media')(parent, path),
        createUrl: require('./create-url')(parent, path)
    };
};