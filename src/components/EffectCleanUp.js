import React, { useState } from "react";
import EffectHook2 from './Effect2';

export default function EffectHookCleanUp() {
  const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <EffectHook2 />}
		</div>
	)
}
