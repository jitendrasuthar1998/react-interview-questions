import React, {useEffect, useState, useRef} from 'react'

// get the time duration for timer
// decrement time by each second


const CountDownTimer = () => {

  const [duration, setDuration ] = useState(36000000);
  const [pause, setPause] = useState(false);

  const countRef = useRef(null);

  useEffect(()=> {
    countRef.current = setTimeout(()=> {
        setDuration((prevCount)=> prevCount - 1000);
      },1000)

    if(duration <= 0){
        clearTimeout(countRef.current);
        setPause(true);
    }

    return () => clearTimeout(countRef.current)

  },[duration])

  const startTimer = () => {
    if(duration > 0){
        setDuration((time) => time - 1000);
        setPause(false);
    }
  }

  const stopTimer = () => {
    clearTimeout(countRef.current);
    setPause(true);
  }


  const getFormatedTime = (time) => {
    const SECONDS = 1000;
    const MINUTES = 60 * SECONDS;
    const HOURS = 60 * MINUTES;
    const DAYS = 24 * HOURS;

    const days = Math.floor(time/DAYS);

    const hours = Math.floor((time%DAYS)/HOURS);

    const minutes = Math.floor((time%HOURS)/MINUTES);

    const seconds = Math.floor((time%MINUTES)/ SECONDS);

    return (
        <div>
            {days < 10 ? `0${days}` : days} : {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {
                seconds < 10 ? `0${seconds}` : seconds
            }
        </div>
    )
  }

  return (
    <div>
        <h1>Count Down Timer</h1>
        <h2>{duration}</h2>
        {getFormatedTime(duration)}
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default CountDownTimer