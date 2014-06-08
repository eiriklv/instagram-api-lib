exports = module.exports = function (parent, path) {
    return {
        list: require('./list')(parent, path),
        subscribe: require('./subscribe')(parent, path),
        unsubscribe: require('./unsubscribe')(parent, path),
        unsubscribeAll: require('./unsubscribe-all')(parent, path),
        verify: require('./verify')(parent)
    };
};