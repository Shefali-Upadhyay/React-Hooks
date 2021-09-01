import React, { useState, useMemo } from "react";

function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default function MemoHook() {
const [number, setNumber] = useState(0)
  // Using useMemo
  //if useMemo was not used, then the squareNum() would have been called multiple times
  const squaredNum = useMemo(()=> {
    return squareNum(number);
  }, [number])
  const [counter, setCounter] = useState(0);
  
 // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  }
    
  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
    <p><b><u>useMemo()</u> => </b>Memoization is the process of caching a result of inputs linearly related to its output. So when the input is requested the output is returned from the cache without any computation. The multiple render() operations for generating the same resulting output for a similar set of inputs can be prevented. We can catch the initial render result and refer to that result in the memory next time. The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs.</p>
    <input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler}>
      </input>
      <div>OUTPUT: {squaredNum}</div>
      <button onClick= {counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
}
