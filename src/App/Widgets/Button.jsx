import React from "react"
import styled, { css } from "styled-components"
import { useTheme } from "../Theme"

export default function Button({ children, ...rest }) {
  const { theme } = useTheme()
  return (
    <StyledButton theme={theme} {...rest}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: 0;
  padding: 2vh 3vw;
  outline: 0;
  transition: color 0.3s ease, background-color 0.3s ease;

  font-size: calc(0.7rem + 1vmax);
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.backgroundColor};
    background-color: ${theme.borderColor};
  `};
`
