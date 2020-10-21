// file used to import nprogess/nprogress.css and other CSS files

const withCSS = require('@zeit/next-css');

module.exports = withCSS({

  // public runtime config - and object with some enviroment variables

  publicRuntimeConfig: {
    APP_NAME: 'SRE-TASK-MANAGER',
    API: 'http://localhost:8000/api',
    PRODUCTION: false,
    DOMAIN: 'http://localhost:3000',
    FB_APP_ID: 'CHDBHCFBDJVDBFV'
  }


});
