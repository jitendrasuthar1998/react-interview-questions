import { useRef, useState } from "react"

const CounterWithRef = () => {
    
    const [count, setCount] = useState(0);

    const countRef = useRef(0);

  
    return (
    <div>
        <p>CountRef {countRef.current}</p>
        <button onClick={()=> countRef.current+=1}>Increment Count Ref</button>

        <p>Count {count}</p>
        <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>Increment Count</button>
    </div>
  )
}

export default CounterWithRef