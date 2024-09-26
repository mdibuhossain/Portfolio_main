import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "boxicons/css/boxicons.min.css";
import "boxicons/dist/boxicons.js";

import "./App.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
