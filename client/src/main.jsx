import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"
import {configureStore} from "@reduxjs/toolkit"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
