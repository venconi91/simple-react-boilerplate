import * as actionTypes from './actionTypes';

export function loadConfig() {
  return {
    type: actionTypes.LOAD_CONFIG,
    httpRequest: {
      httpMethod: 'GET',
      url: '/public/request_env.json'
    }
  };
}
