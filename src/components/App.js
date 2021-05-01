import React, { createContext, useReducer } from "react";
import { counterReducer } from '../counter/counter'
import Another from './Another'
import { increment, decrement } from "../actions";

export const CounterContext = createContext();

const App = () => {
  const initialState = { value: 0 }
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <CounterContext.Provider value={{state, dispatch}}>
        <div>count:{state.value}</div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <Another/>
      </CounterContext.Provider>
    </>
  );
}

export default App