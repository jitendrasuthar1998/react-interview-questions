import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Parent from './components/Parent'


function App() {
  return (
    <div>
      <Counter/>
      <Parent/>
    </div>
  )
}

export default App
