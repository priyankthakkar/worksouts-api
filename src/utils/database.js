const nconf = require('src/utils/config');

module.exports = {
    connectionOptions: {
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        keepAlive: 60000,
        connectTimeoutMS: 6600000,
        socketTimeoutMS: 6600000,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },

    connectionString:
        `mongodb+srv://${nconf.getConfig().get('database').username}:${nconf.getConfig().get('database').password}@${nconf.getConfig().get('database').host}/${nconf.getConfig().get('database').name}?retryWrites=true&w=majority`
};