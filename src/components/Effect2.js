import React, { useState, useEffect } from "react";

export default function EffectHook1() {
  const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

//this below works like componentdidmount(), here we are basically telling react that this particular effect does not depend on any props or state, so there is no reason to call this effect on re-renders and hence the effect is called only on the initial render and then to me forgotten
	useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)
//the below part of the code is known as the claenup code, this is called when the component unmounts
    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}
