import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from '../actions'

//コンポーネントの初期値を設定
const initialState = { value: 0 }

const count = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}

export default combineReducers(({ count }))