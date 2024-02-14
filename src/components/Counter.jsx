import { useCounter } from '../hooks/useCounter';


function Counter() {
  const {count, decrement, increment, reset} = useCounter(10);

  return (
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
  )
}

export default Counter
