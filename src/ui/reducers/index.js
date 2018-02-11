import { combineReducers } from 'redux';
import allReducers from './allReducers';

const reducers = combineReducers({
    // ...allReducers TODO: make this with spread operator
    stepOne: allReducers.stepOne,
    stepTwo: allReducers.stepTwo,
    localization: allReducers.localization
});

export default reducers;