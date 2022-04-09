import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';
import {store} from './Toolkit/store';
import { Provider } from 'react-redux'


axios.defaults.baseURL='http://127.0.0.1:8000/api';
//bearer model token
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token');




ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
     <App />
  </Provider>
    </BrowserRouter>
 ,
  document.getElementById('root')
);


