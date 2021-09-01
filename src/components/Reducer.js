import React, { useReducer } from "react";

const initialState = { count: 0 }
 // The reducer function which consists of the current state and the action
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return {count: state.count = 0}
    default:
     return { count: state.count  }
  }
}

export default function ReducerHook() {
  //useReducer() consists of a function and an initial value
  //useReducer() returns a pair of values[newState, dispatch]
  //dispatch specifies the action
  const [state, dispatch] = useReducer(reducer, initialState)
 
	return (
		<div>
    <p><b><u>useReducer()</u> => </b>An alternative to the useState Hook, it helps you manage complex state logic in React applications. When combined with other Hooks like useContext, useReducer can be a good alternative to Redux or MobX — indeed, it can sometimes be an outright better option. The useReducer is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function, to which you can pass an action and later invoke. This is similar to the pattern Redux uses but with a few differences.</p>
    Count: {state.count}
       <br />
       <br/>
       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
       <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
       <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
		</div>
	)
}
