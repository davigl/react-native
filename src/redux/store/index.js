import { createStore, combineReducers } from 'redux';

import DefaultReducer from '~/redux/reducers/default';

const rootReducer = combineReducers({ default: DefaultReducer });

const store = createStore(rootReducer);

export default store;
