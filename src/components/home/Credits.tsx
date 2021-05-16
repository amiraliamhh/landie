import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { Text } from 'common/Text'

const CreditsContainer = styled.div`
  background-color: ${({ theme }) => transparentize(.85, theme.colors.blue[900])};
  padding-top: 16px;
  padding-bottom: 16px;
`

export const Credits = () => {
  return (
    <CreditsContainer className="container">
      <Text variant="regular16">
        Credits:
      </Text>
      <Text variant="regular14">
        <a href="https://www.figma.com/community/file/849342658995967505/Figma-Website-Template---Landie-Demo">
        This theme
        </a> was designed by 
        <a href="https://www.figma.com/@saasdesign">
          @saasdesign
        </a>
        .
      </Text>
      {/* <Text variant="regular14">
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Text> */}
    </CreditsContainer>
  )
}
