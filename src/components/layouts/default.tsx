import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { defaultTheme } from './default-theme'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    font-family: "Roboto";
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
  }
  .container {
    width: 100%;
    padding: 0 165px;
  }
`

const DefaultLayoutContainer = styled.div`
  position: relative;
`

interface DefaultLayoutProps {}

export const DefaultLayout = (props: React.PropsWithChildren<DefaultLayoutProps>) => {
  return (
    <DefaultLayoutContainer>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        {props.children}
      </ThemeProvider>
    </DefaultLayoutContainer>
  )
}
