import React from "react"
import { THEME_CONFIG, useTheme } from "../Theme"
import Button from "./Button"

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  return (
    <Button onClick={() => toggleTheme(theme, setTheme)}>TOGGLE THEME</Button>
  )
}

function toggleTheme(theme, setTheme) {
  return theme.name === THEME_CONFIG.light.name
    ? setTheme(THEME_CONFIG.dark)
    : setTheme(THEME_CONFIG.light)
}
