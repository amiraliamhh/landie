import * as React from 'react'
import styled from 'styled-components'
import { Text } from 'common/Text'
import { Button } from 'common/Button'

const Section2Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.happy-news {
    padding-top: 122px;
    padding-bottom: 130px;
    img {
      margin-left: 30px;
    }
  }
  &.social-influencer {
    padding-top: 90px;
    padding-bottom: 114px;
  }
  &.mention {
    padding-top: 141px;
    padding-bottom: 163px;
    img {
      margin-left: 48px;
    }
  }
`

const Content = styled.div`
  width: 445px;
  .subtitle {
    margin-top: 16px;
  }
  .purchase {
    margin-top: 40px;
    width: 150px;
  }
`

export const Section2 = () => {
  return (
    <>
      <Section2Container className="container happy-news">
        <img src="happy_news.svg" width="480" height="317" alt="happy news" />
        <Content>
          <Text variant="h4">
            Light, Fast & Powerful
          </Text>
          <Text variant="subtitle1" className="subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          <br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </Text>
        </Content>
      </Section2Container>
      <Section2Container className="container social-influencer">
        <img width="540" height="389" src="social_influencer.svg" alt="social influencer" />
        <Content>
          <Text variant="h4">
            Light, Fast & Powerful
          </Text>
          <Text variant="subtitle1" className="subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          <br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </Text>
        </Content>
      </Section2Container>
      <Section2Container className="container mention">
        <img width="445" height="313" src="mention.svg" alt="mention" />
        <Content>
          <Text variant="h4">
            Light, Fast & Powerful
          </Text>
          <Text variant="subtitle1" className="subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          <br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </Text>
          <Button size="medium" className="purchase">
            Purchase Now
          </Button>
        </Content>
      </Section2Container>
    </>
  )
}
