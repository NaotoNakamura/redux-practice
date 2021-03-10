import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../actions'

const App = () => {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch();
  return (
    <>
      <div>count:{value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App