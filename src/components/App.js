import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from '../counter/counter';

const App = () => {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch();
  const { increment, decrement } = counterSlice.actions;
  return (
    <>
      <div>count:{value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App