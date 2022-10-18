import {applyMiddleware, compose, createStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
// @ts-ignore
import logger from 'redux-logger'
import reducers from "./reducers";
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['ui'],
};

const persistedReducers = persistCombineReducers(persistConfig, reducers);

export const store = createStore(persistedReducers, compose(

    applyMiddleware(thunk),
    applyMiddleware(logger)

));

export const persistor = persistStore(store);
