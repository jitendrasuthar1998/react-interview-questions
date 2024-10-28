import React from 'react'
import { ThemeContextProvider } from "./ThemeContext"
import Box from "./Box"

const ThemeApp = () => {
    
  return (

    <ThemeContextProvider>
        <Box/>
    </ThemeContextProvider>
  )
}

export default ThemeApp