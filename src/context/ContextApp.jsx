import MyContextExample from "./MyContextExample";
import { ContextProvider } from "./ContextProvider";

const ContextApp = () => {
  return (
    <div>
      <ContextProvider>
        <MyContextExample />
      </ContextProvider>
    </div>
  );
};

export default ContextApp;
