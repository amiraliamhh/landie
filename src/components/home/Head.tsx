import * as React from 'react'
import styled from 'styled-components'
import DesignerImage from '../../../assets/designer.svg'

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  p {
    font-family: "Roboto";
    font-weight: 900;
  }
`

export const Head = () => {
  return (
    <HeadContainer>
      <DesignerImage />
      <p>Hello</p>
    </HeadContainer>
  )
}
