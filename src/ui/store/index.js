import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers';

const store = createStore(
    reducers
    // applyMiddleware() // TODO: apply middleware
);

export default store;