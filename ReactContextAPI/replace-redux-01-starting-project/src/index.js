import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import ProductsProvider from './components/Context/Product-Context';
import configureStore from './components/hooks-store/Product-store';
configureStore();
const rootReducer = combineReducers({
  shop: productReducer
});
const store = createStore(rootReducer);
ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root')
);
