import immutable from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = immutable.fromJS({
    lastName: 'test lastName'
});

export function stepTwo(state = defaultState, action) {
    if (action.type === actionTypes.CHANGE_LASTNAME) {
        return state.set('lastName', action.lastName);
    }
    return state;
}

export default stepTwo;
