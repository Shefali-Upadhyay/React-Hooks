import React, { useState, useEffect } from "react";

export default function EffectHook1() {
  const [count, setCount] = useState(0)
	const [name, setName] = useState('')
  //called only when the value of the count changes, so if name is changed, useEffect() will not be called
	useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
	}, [count])
	return (
		<div>
    <p><b><u>useEffect()</u> => </b>The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
    {/* on the input change the document title will not update */}
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}
