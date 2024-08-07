import React, { useReducer } from "react";

const initialState01 = { count: 0 };

const reducer01 = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "ADD-2":
      return { count: state.count + 2 };

    default:
      return state;
  }
};

export default function UseReducerSample() {
  const [state, dispatch] = useReducer(reducer01, initialState01);
  return (
    <div>
      UseReducerSample
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "ADD-2" })}>Add+2</button>
    </div>
  );
}
