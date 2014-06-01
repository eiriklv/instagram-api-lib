exports = module.exports = function (parent, path) {
    return {
        authorize: require('./authorize')(parent, path),
        getUrl: require('./get-url')(parent, path)
    };
};