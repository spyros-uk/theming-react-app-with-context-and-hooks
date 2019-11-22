import React from "react"
import styled, { css } from "styled-components"
import { useTheme } from "../Theme"

export default function Frame({ children }) {
  const { theme } = useTheme()
  return <StyledFrame theme={theme}>{children}</StyledFrame>
}

const StyledFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2vw solid;
  width: 80vw;
  height: 80vh;
  transition: border-color 0.3s ease;

  ${({ theme }) => css`
    border-color: ${theme.borderColor};
  `};
`
