import * as actionTypes from './actionTypes';

export function changeLocale(locale) {
    return {
        type: actionTypes.CHANGE_LOCALE,
        locale
    };
}
