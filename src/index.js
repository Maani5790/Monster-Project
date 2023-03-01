import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import { BrowserRouter } from "react-router-dom";


import Routes from "./Components/Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </BrowserRouter>
);

