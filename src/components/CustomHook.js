import React from "react";
import useCounter from "./useCounter";

export default function CustomHook({ initialValue }) {
  const [counter, increament, decreament, reset] = useCounter(initialValue);

  return (
    <div>
    
      <h4>Custom useCounter hook used {counter}</h4>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}