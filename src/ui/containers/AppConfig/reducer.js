import immutable from 'immutable';

import getLocalizedLabels from './../../localizations';
import * as actionTypes from './actionTypes';

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
