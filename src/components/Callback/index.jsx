import React, { useCallback, useState } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount)=> prevCount+ 1);
  }, []);
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button> <p>Count: {count}</p>{" "}
    </div>
  );
};

export default Callback;
