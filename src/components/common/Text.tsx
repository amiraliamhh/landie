import * as React from 'react'
import styled from 'styled-components'

interface TextProps {
  variant?: 'h4'|'subtitle1'|'medium16'|'regular12'
  className?: string
}

const TextContainer = styled.p`
  &.text-h4 {
    color: ${({ theme }) => theme.colors.blue[900]};
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 48px;
  }
  &.text-subtitle1 {
    color: ${({ theme }) => theme.colors.blue[400]};
    font-weight: 400;
    font-size: 1rem;
  }
  &.text-medium16 {
    color: ${({ theme }) => theme.colors.blue[900]};
    font-weight: 500;
    font-size: 1rem;
  }
  &.text-regular12 {
    color: ${({ theme }) => theme.colors.grey[600]};
    font-weight: 400;
    font-size: .75rem;
    line-height: 18px;
  }
`

export const Text = ({
  children,
  variant = 'subtitle1',
  className = ''
}: React.PropsWithChildren<TextProps>) => {
  return (
    <TextContainer className={`text-${variant} ${className}`}>
      {children}
    </TextContainer>
  )
}
