import { useState } from 'react'

export const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((prevCount) => prevCount + 1);

    const decrement = () => setCount((prevCount)=> prevCount - 1);

    const reset = () => setCount(initialValue);

    return {count, increment, decrement,reset}
}

