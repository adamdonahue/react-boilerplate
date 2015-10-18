var path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    public: {
        route: '/',
        folder: path.join(__dirname, '..', 'public')
    },
    services: {}
};
