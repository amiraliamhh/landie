import * as React from 'react'
import styled from 'styled-components'
import { Text } from 'common/Text'

interface InfoCardProps {
  image: string
  title: string
  description: string
  alt?: string
  className?: string
}

const InfoCardContainer = styled.div`
  width: 255px;
  .title {
    margin-top: 14px;
  }
  .description {
    margin-top: 6px;
  }
`

export const InfoCard = ({
  image,
  alt = '',
  title,
  description,
  className = ''
}: InfoCardProps) => {
  return (
    <InfoCardContainer className={className}>
      <img src={image} alt={alt} />
      <Text variant="medium16" className="title">
        {title}
      </Text>
      <Text variant="regular12" className="description">
        {description}
      </Text>
    </InfoCardContainer>
  )
}
