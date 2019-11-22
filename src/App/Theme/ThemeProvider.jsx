import React, { useState } from "react"
import ThemeContext from "./ThemeContext"
import THEME_CONFIG from "./config"

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME_CONFIG.dark)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
