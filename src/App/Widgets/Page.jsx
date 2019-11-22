import React from "react"
import styled, { css } from "styled-components"
import { useTheme } from "../Theme"

export default function Page({ children }) {
  const { theme } = useTheme()
  return <StyledPage theme={theme}>{children}</StyledPage>
}

const StyledPage = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.backgroundColor};
  `};

  transition: background-color 0.3s ease;
`
