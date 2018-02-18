import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers';
import {request} from './../middleware';

const store = createStore(
    reducers,
    applyMiddleware(request)
);

export default store;