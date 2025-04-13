import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const timerRef = useRef();

  const play = () => {
    setIsPlay(true);
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const pause = () => {
    setIsPlay(false);
    clearInterval(timerRef.current);
  };
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
        setIsPlay(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => (isPlay ? pause() : play())}>
        {isPlay ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Counter;
