import {useEffect, useRef, useState} from 'react'

// whenever component loads, start the counter and increment it by one after each second

// when user clicks on pause button, that time stop counter increment

// when user clicks on reset button, that time reset the counter



const CounterTimer = () => {

  const [count, setCount] = useState(0);
  const [, setPause] = useState(false);

  const countRef = useRef(null);


  useEffect(()=> {
    startTimer();

    return () => {
      if(countRef.current) clearInterval(countRef.current);
    }
  },[])

  const startTimer = () => {
    countRef.current = setInterval(()=> {
      setCount((prevCount)=> prevCount+1);
    }, 1000)
  }

  const resetTimer = () => {
    clearInterval(countRef.current);
    setPause(true);
    setCount(0)
  }

  const stopTimer = () => {
    clearInterval(countRef.current);
    setPause(true);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=> startTimer()}>Start</button>
      <button onClick={()=> resetTimer()}>Reset</button>
      <button onClick={()=> stopTimer()}>Stop</button>
    </div>
  )
}

export default CounterTimer