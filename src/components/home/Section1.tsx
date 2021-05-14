import * as React from 'react'
import styled from 'styled-components'
import { Text } from 'common/Text'
import { InfoCard } from 'common/InfoCard'
import Illustration1 from '../../../assets/illustration_1.svg'

const Section1Container = styled.section`
  margin-top: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Section1Content = styled.article`
  width: 540px;
  .subtitle {
    margin-top: 16px;
  }
`

const InfoCardsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  .second {
    margin-left: 30px;
  }
`

export const Section1 = () => {
  return (
    <Section1Container className="container">
      <Section1Content>
        <Text variant="h4">
          Light, Fast & Powerful
        </Text>
        <Text variant="subtitle1" className="subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
<br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </Text>
        <InfoCardsContainer>
          <InfoCard
            image="note.svg"
            title="Title Goes Here"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          />
          <InfoCard
            className="second"
            image="note.svg"
            title="Title Goes Here"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          />
        </InfoCardsContainer>
      </Section1Content>
      <Illustration1 />
    </Section1Container>
  )
}
