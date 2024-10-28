import { useEffect, useRef, useState } from "react";

const TrafficLight = () => {
  // red = 10 seconds
  // yellow = 5 seconds
  // blue = 15 seconds

  // 10 =< time >= 1 => red
  // 15 =< time >= 11 => yellow
  // 30 =< time >= 16 => blue

  const [timer, setTimer] = useState(0);

  const timeRef = useRef(null);

  useEffect(() => {
    // timeRef.current = setInterval(() => {
    //   setTimer((prevTimer) => prevTimer + 1);
    // }, 1000);

    // return () => {
    //   clearInterval(timeRef.current);
    // };
  }, []);

  console.log("timer", timer);

  function getCurrentLightColor() {
    let newTime = timer > 30 ? timer % 30 : timer;

    console.log("time", newTime);
    if (newTime >= 1 && newTime <= 10) {
      return "red";
    } else if (newTime >= 11 && newTime <= 15) {
      return "yellow";
    } else {
      return "blue";
    }
  }

  const handleClearTimer = () => {
    clearInterval(timeRef.current);
  };

  const handleStartTimer = () => {
    timeRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const [inputText, setInputText] = useState(0);

  return (
    <div>
      <ht>TrafficLight</ht>
      <h2>{timer}</h2>

      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />

      {getCurrentLightColor() == "red" ? (
        <div
          style={{
            backgroundColor: getCurrentLightColor(),
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundColor: "lightpink",
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        ></div>
      )}

      {getCurrentLightColor() == "yellow" ? (
        <div
          style={{
            backgroundColor: getCurrentLightColor(),
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundColor: "lightcyan",
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        ></div>
      )}

      {getCurrentLightColor() == "blue" ? (
        <div
          style={{
            backgroundColor: getCurrentLightColor(),
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundColor: "lightblue",
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        ></div>
      )}
      <button onClick={handleClearTimer}>Stop Timer</button>

      <button onClick={handleStartTimer}>Start Timer</button>
    </div>
  );
};

export default TrafficLight;
