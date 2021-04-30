import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App'
import Another from './components/Another'
import {counterSlice} from './counter/counter'

const store = configureStore({reducer: counterSlice.reducer})

ReactDOM.render(
  <Provider store={store}>
    <App/>
    <Another/>
  </Provider>,
  document.getElementById('root')
);
