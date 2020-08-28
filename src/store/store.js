import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';

//sometimes called appReducers, or just reducers
//pass an object into combinedReducers
const rootReducers = combineReducers({
  auth: authReducer,
});

export default createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
