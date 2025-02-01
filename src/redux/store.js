import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducer';

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk)) // Add middleware (e.g., thunk) for async actions
);

export default store;