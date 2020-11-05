import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mapReducer from './mapReducer';
import markerReducer from './markerReducer';
import tagReducer from './itemReducer';

const reducer = combineReducers({
    google: mapReducer,
    markers: markerReducer,
    tags: tagReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)