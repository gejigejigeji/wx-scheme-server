const sequelize = require('./dataBases');
const cors = require('./cors');
const file = require('./multipart/file');
const ejs = require('./ejs/ejs');


module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567921742355_2967';

  // add your middleware config here
  config.middleware = [];
    // permission:{
    //
    // }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

    config.sequelize  = sequelize.config;

    config.cors = cors.config;

    config.security = {
        csrf: {
            enable: false,
            // ignoreJSON: true,
            // headerName: 'x-csrf-token',
            domainWhiteList: [ 'http://localhost:8080' ],

        }
    };
    config.multipart = file.config;


    config.view = {
        mapping: {
            '.html': 'ejs',
        }
    };
    config.static = {
        prefix: '/'
    };

  return {
    ...config,
    ...userConfig,
  };
};
