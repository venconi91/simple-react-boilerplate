import immutable from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = immutable.fromJS({
  firstName: 'test firstName'
});

export function stepOne(state = defaultState, action) {
  if (action.type === actionTypes.CHANGE_FIRSTNAME) {
    return state.set('firstName', action.firstName);
  }
  return state;
}

export default stepOne;
