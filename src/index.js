import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './reducers/store'
import { Provider } from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {LoadingSpinerComponent} from './loader';
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//     <LoadingSpinerComponent/>
//   </Provider>,
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <LoadingSpinerComponent/>
  </Provider>,
);