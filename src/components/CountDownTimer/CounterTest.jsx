import  { useState, useEffect, useRef } from 'react';

const CounterTest = () => {
    const [count, setCount] = useState(0);
    // const [intervalId, setIntervalId] = useState(null);
    const intervalRef = useRef(null)
    const startCounting = () => {
        console.log("intervalRef", intervalRef);
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
    };

    const stopCounting = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            // setIntervalId(null);
        }
    };

    useEffect(() => {
        return () => {
            // Cleanup when the component unmounts
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <p>Count is = {count}</p>
            <button onClick={startCounting}>Start</button>
            <button onClick={stopCounting}>Stop</button>
        </div>
    );
};

export default CounterTest;