import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increament = () => {
    setCounter(counter + 1);
  };

  const decreament = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return [counter, increament, decreament, reset];
}