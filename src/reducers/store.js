import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mapReducer from './mapReducer';
import markerReducer from './markerReducer';

const reducer = combineReducers({
    google: mapReducer,
    markers: markerReducer,
})

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)