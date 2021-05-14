import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { Text } from 'common/Text'
import { Button } from 'common/Button'

const PricingContainer = styled.section`
  margin-top: 48px;
  width: 100%;
  background-color: ${({ theme }) => transparentize(.5, theme.colors.blue[100])};
  display: flex;
  justify-content: center;
  padding-top: 237px;
  padding-bottom: 172px;
  position: relative;
  .subtitle {
    margin-top: 16px;
  }
`

const PricingContent = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
  .price {
    margin-top: 35px;
    font-weight: 500;
    font-size: 50px;
    line-height: 66px;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.blue[700]};
  }
  .cta-text {
    margin-top: 60px;
  }
  .cta-btn {
    margin-top: 9px;
    width: 190px;
  }
`

export const Pricing = () => {
  return (
    <PricingContainer>
      <PricingContent>
        <Text variant="h4">
          A Price To Suit Everyone
        </Text>
        <Text variant="subtitle1" className="subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        </Text>
        <p className="price">
          $40
        </p>
        <Text variant="regular16">
          UI Design Kit
        </Text>
        <Text variant="regular14" className="cta-text">
          See, One price. Simple.
        </Text>
        <Button size="medium" className="cta-btn">
          Purchase Now
        </Button>
      </PricingContent>
    </PricingContainer>
  )
}
