import { createStore } from 'redux';
import { flightReducer } from './reducers/flightReducer';

// Deprecated, Developers indicating to use redux-toolkit
const store = createStore(flightReducer);

export default store;