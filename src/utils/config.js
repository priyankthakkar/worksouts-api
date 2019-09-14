const appRoot = require('app-root-path');
const nconf = require('nconf');

module.exports = {
    getConfig: () => {
        nconf
            .argv()
            .env()
            .file({
                file: `${appRoot}/config/app_config_${process.env.NODE_ENV}.json`,
                logicalSeperator: "."
            });

        return nconf;
    }
};