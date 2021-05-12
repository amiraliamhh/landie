import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

interface DefaultLayoutProps {}

export const DefaultLayout = (props: React.PropsWithChildren<DefaultLayoutProps>) => {
  return (
    <>
      <GlobalStyles />
      {props.children}
    </>
  )
}
