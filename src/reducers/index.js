// src/reducers/index.js
import { combineReducers } from 'redux';
import launchReducer from './launchReducer';

const rootReducer = combineReducers({
  launches: launchReducer,
});

export default rootReducer;
