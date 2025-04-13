import { useState } from "react"

const Counter = () => {
  
    const [count, setCount] = useState(0);

    return (
    <div>
        <p>Count is = {count}</p>
        <button onClick={()=> {
            setCount((prevCount)=> prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            // setCount(count + 1);
            console.log(count);
        }}>Increment</button>
    </div>
  )
}

export default Counter