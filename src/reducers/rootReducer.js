import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {Router, routerReducer, Route, Animations, Schema} from 'react-native-redux-router';
const loggerMiddleware = createLogger();

var reducers = [];
export const store = createStore(
    combineReducers({
        ...reducers,
        routerReducer
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);