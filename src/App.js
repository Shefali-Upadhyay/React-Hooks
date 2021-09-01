import React, { Component } from 'react';
import StateHook from './components/State';
import EffectHook1 from './components/Effect1';
import EffectHookCleanUp from './components/EffectCleanUp';
import ComponentA from './components/ComponentA';
import ReducerHook from './components/Reducer';
import CallbackHook from './components/Callback';
import MemoHook from './components/Memo';
import RefHook from './components/Ref';
import CustomHook from './components/CustomHook';

export const UserContext = React.createContext()
export const PlaceContext = React.createContext()

export class App extends Component {
  render() {
    return (
      <div>
        <h1>React Hooks</h1>
        <p>Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes. Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.</p>
        <h4>Rules of Hooks</h4>
        <p>Hooks are similar to JavaScript functions, but you need to follow these two rules when using them. Hooks rule ensures that all the stateful logic in a component is visible in its source code. 
        <br/>These rules are:<br/>1. Only call Hooks at the top level => Do not call Hooks inside loops, conditions, or nested functions. Hooks should always be used at the top level of the React functions. This rule ensures that Hooks are called in the same order each time a components renders.<br/>2. Only call Hooks from React functions => You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components. Hooks can also be called from custom Hooks.</p>
        <br/>
        <br/>
        <p>useState should be used when the value of state should affect what gets rendered. useRef should be used when you want to have a piece of information that persists “for the full lifetime of the component” - not just during its render cycle.</p>
        <StateHook />
        <RefHook />
        <UserContext.Provider value={'Lisa'}>
          <PlaceContext.Provider value={'Paris'}>
            <ComponentA />
          </PlaceContext.Provider>
			  </UserContext.Provider>
        <ReducerHook />
        <ol>
        <li>useEffect does not run immediately but runs after the first render. This means any useRef values referring to HTML elements will be valid on the first run. Since it runs after all the code in your function has finished and rendered, there is no point having a return value as there is no further code running that could use it. The only way useEffect code can do anything visible is by either changing the state to cause a re-render, or modifying the DOM directly.</li>
        <li>useMemo runs the code immediately, so the return value is available to code that comes after after it. This means it runs before the first render, so any useRef you are using to access HTML components won't be available on the initial run. (But you can add ref.current to the useMemo dependencies to have the useMemo code run again after the first render, when the useRef value has become available). Since the return value is available to code directly following it, this is why it is recommended for complex calculations that don't need to re-run on each render, as having the return value available immediately saves you from having to mess with the state to store the value now and access it later - just grab the return value of useMemo() and use it right away.</li>
        <li>useCallback is the same as useMemo except that it remembers the function itself rather than its return value. This means a useCallback function does not run immediately but can be run later (or not run at all), while useMemo runs its function immediately and just saves its return value for later use. Unlike useMemo this is not good for complex calculations as the code will run again every time it is used.</li>
        </ol>
        <EffectHook1 />
        <EffectHookCleanUp />
        {/* useContext() component called here */}
        <MemoHook />
        <CallbackHook />
        <CustomHook />
      </div>
    );
  }
}

export default App;
