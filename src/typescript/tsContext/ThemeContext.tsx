import React, { createContext, useState } from 'react'
import { theme } from "./theme"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {

    const [currentTheme, setCurrentTheme] = useState("");

    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext