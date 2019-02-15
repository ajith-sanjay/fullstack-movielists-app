import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers , createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import {totalPages} from './reducers/totalPages';
import {searchReducer} from './reducers/searchReducer';
import thunk from 'redux-thunk';

//combining all reducers
const allReducers = combineReducers({
  totalPages : totalPages,
  currentSearchInp : searchReducer
})

//creating the store for state management
const store = createStore(allReducers , applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><App /></Provider> , document.getElementById( 'root' ) );

serviceWorker.unregister();
