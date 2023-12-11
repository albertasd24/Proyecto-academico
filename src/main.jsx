import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApplicationRouter } from "./routes";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>,
)
