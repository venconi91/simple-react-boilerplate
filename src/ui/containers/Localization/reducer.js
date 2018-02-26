import immutable from 'immutable';

import * as actionTypes from './actionTypes';
import getLocalizedLabels from './localizations';


const defaultState = immutable.fromJS({
  currentLocale: 'en',
  localizedLabels: getLocalizedLabels()
});

export function localization(state = defaultState, action) {
  if (action.type === actionTypes.CHANGE_LOCALE) {
    return state
      .set('currentLocale', action.locale)
      .set('localizedLabels', immutable.fromJS(getLocalizedLabels(action.locale)));
  }

  return state;
}

export default localization;
