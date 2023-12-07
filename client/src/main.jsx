import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import { reducers } from './redux/reducers/indexReducer.js'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension.js'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = configureStore({reducer:reducers}, composedEnhancer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
