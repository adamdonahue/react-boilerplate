import {combineReducers} from 'redux';

var initialState = {};

export function noop(state=initialState, action) {
    return state;
}

const app = combineReducers({
    noop
});

export default app;
