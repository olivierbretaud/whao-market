import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import cardReducer from './Reducers/CardReducer'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

const allReducers = combineReducers({
  card: cardReducer
});

const store = createStore(allReducers, {
  card: []
}, window.devToolsExtension && window.devToolsExtension() );

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));


// ACTIONS

// ADD_PRODUCT_TO_CARD
// REMOVE_PRODUCT_FROM_CARD
// PREV_PAGINATION
// NEXT_PAGINATION
// SELECT_PAGINATION


// ARTICLES

// ID : AI, PRIMARY_KEY
// NAME : VARCHAR(255)
// PRICE : INT
// QUANTITY : INT
// DATE: DATE


// ROUTES

// Post /articles/qty/2/0
// Get /articles/
// Get /articles/2 <= pagination
