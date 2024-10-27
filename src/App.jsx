import './App.css'
import CounterTimer from "./components/CounterTimer"
import Counter from './components/Counter'
import Parent from './components/Parent'
import WindowResize from "./components/WindowResize"
import ContextApp from "./context/ContextApp"
import UserApp from "./context/UserApp"
import CountDownTimer from "./components/CountDownTimer"
import Pagination from "./components/Pagination"
import StartRating from "./components/StarRating"
import Demo from "./typescript/Demo"
import InfiniteScroll from "./components/InfiniteScroll"
import WindowScroll from "./components/InfiniteScroll/WindowScroll"
import Autocomplete from "./components/AutoComplete"


function App() {
  return (
    <div>
      {/* <Counter/>
      <Parent/> */}
      {/* <ContextApp/> */}
      {/* <UserApp/> */}
      {/* <WindowResize/> */}
      {/* <CounterTimer/>
      <CountDownTimer/>
      <Pagination/> */}
      {/* <StartRating/> */}
      {/* <InfiniteScroll/> */}
      <Autocomplete/>
      {/* <WindowScroll/> */}
      {/* <Demo/> */}
    </div>
  )
}

export default App
