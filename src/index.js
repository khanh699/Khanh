import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Layout from './Layout';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      {/* <App /> */} 
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
