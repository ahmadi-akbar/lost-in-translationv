import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import translationReducer from './reducers/translations';

//sometimes called appReducers, or just reducers
//pass an object into combinedReducers
const rootReducers = combineReducers({
  auth: authReducer,
  translations: translationReducer,
});

export default createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
