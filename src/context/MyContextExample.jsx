import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const MyContextExample = () => {
  const {name, setName} = useContext(MyContext);
  
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setName("Hello Jitendra") }>Update</button>
    </div>
  );
};

export default MyContextExample;
