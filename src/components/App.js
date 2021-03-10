import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

const App = (props) => {
  return (
    <>
      <div>count:{props.value}</div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
}

// stateから必要な情報をコンポーネントにマッピングする関数
const mapStateToProps = state => ({ value: state.count.value })

// dispatch関数をコンポーネントにマッピングする関数
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// stateとacitonをコンポーネントに関連づける
export default connect(mapStateToProps, mapDispatchToProps)(App)