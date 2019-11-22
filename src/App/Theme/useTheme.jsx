import { useContext } from "react"
import ThemeContext from "./ThemeContext"

export default function useThemeContext() {
  const { theme, setTheme } = useContext(ThemeContext)
  return { theme, setTheme }
}
