import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import counterStore from './redux/counterStore';
import App from './App';

ReactDOM.render(<Provider store={counterStore}><App /></Provider>, document.getElementById('root'));
