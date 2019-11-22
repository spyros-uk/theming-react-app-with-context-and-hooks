import React from "react"
import Page from "./Widgets/Page"
import Frame from "./Widgets/Frame"
import GlobalStyle from "./Widgets/GlobalStyle"
import ThemeToggler from "./Widgets/ThemeToggler"
import { ThemeProvider } from "./Theme"

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Page>
        <Frame>
          <ThemeToggler />
        </Frame>
      </Page>
    </ThemeProvider>
  )
}
