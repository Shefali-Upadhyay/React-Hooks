import React, { useState, useCallback } from "react";

export default function CallbackHook() {

  const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

  return (
    <div>
    <p><b><u>useCallback()</u> => </b>The useCallback hook has a primary and specific function: avoid unnecessary re-renders in your code, making your application faster and more efficient.The useCallback hook receives a function as a parameter, and also an array of dependencies. The useCallback hook will return a memoized version of the callback, and it’ll only be changed if one of the dependencies has changed.The useCallback hook is used when you have a component in which the child is rerendering again and again without need.Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
    <h5>Age=> {age}</h5>
		<button onClick={incrementAge}>Increment Age</button>
			<h5>Salary=> {salary}</h5>
			<button onClick={incrementSalary}>Increment Salary</button>
    </div>
  );
}
