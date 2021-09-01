import React, { Fragment, useRef } from "react";

export default function RefHook() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(name, email, password)
  }
  return (
    <Fragment>
    <p><b><u>useRef()</u> => </b>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
      <label>
        Name:
        <input
          placeholder="name"
          type="text"
          ref={nameRef}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="email"
          type="text"
          ref={emailRef}
        />
      </label>
      <label>
        Password:
        <input
          placeholder="password"
          type="text"
          ref={passwordRef}
        />
      </label>
      <hr />
      <button onClick={() => nameRef.current.focus()}>
        Focus Name Input
      </button>
      <button onClick={() => emailRef.current.focus()}>
        Focus Email Input
      </button>
      <button onClick={() => passwordRef.current.focus()}>
        Focus Password Input
      </button>
      <hr />
      <button onClick={handleSubmit}>Submit</button>
    </Fragment>
  );
}
