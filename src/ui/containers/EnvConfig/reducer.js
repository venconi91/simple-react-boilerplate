import immutable from 'immutable';

import * as actionTypes from './actionTypes';
import * as configKeys from './constants';

const defaultState = immutable.fromJS({
  isConfigSet: false
});

export function envConfig(state = defaultState, action) {
  if (action.type === actionTypes.LOAD_CONFIG && action.result) {
    const immutableResult = immutable.fromJS(action.result);
    return state
      .set('isConfigSet', true)
      .set(configKeys.BRAND, immutableResult.get(configKeys.BRAND))
      .set(configKeys.BACKEND_URL, immutableResult.get(configKeys.BACKEND_URL))
      .set(configKeys.PAGE_TITLE, immutableResult.get(configKeys.PAGE_TITLE))
      .set(configKeys.FAVICON_URL, immutableResult.get(configKeys.FAVICON_URL));
  }
  return state;
}

export default envConfig;
