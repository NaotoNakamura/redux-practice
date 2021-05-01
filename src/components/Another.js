import React, { useContext } from "react";
import { CounterContext } from "./App";
import { increment, decrement } from "../actions";

const Parent = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <div>count:{state.value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default Parent