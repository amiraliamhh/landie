import * as React from 'react'
import styled from 'styled-components'
import { Button } from 'common/Button'
import DesignerImage from '../../../assets/designer.svg'
import { Nav } from './Nav'

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  p {
    font-family: "Roboto";
    font-weight: 900;
  }
`

const Content = styled.div`
  margin-top: 305px;
  max-width: 540px;
  position: absolute;
  left: 165px;
  h3 {
    font-weight: 500;
    font-size: 50px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.blue[900]};
  }
  p {
    margin-top: 30px;
    font-weight: 400;
    font-size: 1.125rem;
    color: ${({theme}) => theme.colors.blue[500]};
    line-height: 30px;
  }
`

const CTAContainer = styled.div`
  margin-top: 70px;
  button {
    width: 190px;
  }
  .learn-more {
    margin-left: 30px;
  }
`

export const Head = () => {
  return (
    <HeadContainer>
      <Nav />
      <DesignerImage />
      <Content>
        <h3>Introduce Your Product Quickly & Effectively</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
<br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <CTAContainer>
          <Button size="medium">
            Purchase UI Kit
          </Button>
          <Button size="medium" className="learn-more" variant="outlined">
            Learn More
          </Button>
        </CTAContainer>
      </Content>
    </HeadContainer>
  )
}
