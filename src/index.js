import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './components/App'
import Another from './components/Another'

// 作成されたReducerをもとにstoreを作成
const store = createStore(reducer)

// Providerによって、storeがどのコンポーネントからも参照できるようになる
ReactDOM.render(
  <Provider store={store}>
    <App/>
    <Another/>
  </Provider>,
  document.getElementById('root')
);
