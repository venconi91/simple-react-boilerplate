import * as actionTypes from './actionTypes';

export function changeFirstName(firstName) {
  return {
    type: actionTypes.CHANGE_FIRSTNAME,
    firstName
  };
}
