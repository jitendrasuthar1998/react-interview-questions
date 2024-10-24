import './App.css'
import CounterTimer from "./components/CounterTimer"
import Counter from './components/Counter'
import Parent from './components/Parent'
import WindowResize from "./components/WindowResize"
import ContextApp from "./context/ContextApp"
import UserApp from "./context/UserApp"
import CountDownTimer from "./components/CountDownTimer"
import Pagination from "./components/Pagination"


function App() {
  return (
    <div>
      {/* <Counter/>
      <Parent/> */}
      {/* <ContextApp/> */}
      {/* <UserApp/> */}
      {/* <WindowResize/> */}
      <CounterTimer/>
      <CountDownTimer/>
      <Pagination/>
    </div>
  )
}

export default App
