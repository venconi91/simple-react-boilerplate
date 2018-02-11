
import * as actionTypes from './actionTypes';

export function changeLastName(lastName) {
    return {
        type: actionTypes.CHANGE_LASTNAME,
        lastName
    };
}
