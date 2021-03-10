import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './components/App'

// 作成されたReducerをもとにstoreを作成
const store = createStore(reducer)

// Providerによって、storeがどのコンポーネントからも参照できるようになる
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
