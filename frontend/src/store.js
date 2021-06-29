import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { projectListReducer , projectSubmitReducer } from './reducers/projectReducer';


const reducer = combineReducers({
    projectList : projectListReducer,
    projectSubmit : projectSubmitReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;