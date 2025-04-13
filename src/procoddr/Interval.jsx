import  { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startCounting = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const stopCounting = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    useEffect(() => {
        return () => {
            // Cleanup when the component unmounts
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <div>
            <p>Count is = {count}</p>
            <button onClick={startCounting}>Start</button>
            <button onClick={stopCounting}>Stop</button>
        </div>
    );
};

export default Counter;
