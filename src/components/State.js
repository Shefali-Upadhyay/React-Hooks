import React, { useState } from "react";

export default function StateHook() {
  //useState() returns, the current state(count) and the function that updates the state(setCount)
  //prevCount keeps a copy of the state
  const initialCount = 0
	const [count, setCount] = useState(initialCount)
  const [name, setName] = useState({ firstName: '', lastName: '' })
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}

  return (
    <div>
    <p><b><u>useState()</u> => </b>Hook state is the new way of declaring a state in React app. Hook uses useState() functional component for setting and retrieving state.This hook replaces the need for a state object in a class component structure.</p>
    <div><h5>Count: {count}</h5>
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button></div>
      <div>
     <h5> Enter the First and Last Name</h5>
      <form>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
		</form></div>
      
    </div>
  );
}
