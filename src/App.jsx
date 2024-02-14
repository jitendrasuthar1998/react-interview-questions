import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from './hooks/useCounter'


function App() {
  const {count, decrement, increment, reset} = useCounter(10);

  return (
    <>
      
      <div className="card">
        <p>Count is {count}</p>
        <button onClick={() => increment()}>
          Increment
        </button>
        <button onClick={() => decrement()}>
          Decrement
        </button>
        <button onClick={() => reset()}>
          Reset
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
