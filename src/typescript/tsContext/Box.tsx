import React, { useContext } from 'react'
import ThemeContext from "./ThemeContext"

const Box = () => {
const {primary, secondary} = useContext(ThemeContext);

  return (
    <div style={{backgroundColor:primary.main, color:primary.text}}>
        <h1>Hello world from ThemeApp</h1>
    </div>
  )
}

export default Box