const paths = require('./config/paths');
require('dotenv').config({ path: paths.envFile });

const { NODE_ENV } = process.env;
const environmentsMapping = {
  development: 'dev',
  production: 'prod'
};

function buildConfig(env) {
  if (!env) {
    throw new Error('NODE_ENV is not passed');
  }
  return require(`./config/webpack.config.${environmentsMapping[env]}.js`);
}

module.exports = buildConfig(NODE_ENV);
