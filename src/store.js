import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import {listsReduser} from "./redusers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    lists: listsReduser
})

const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));