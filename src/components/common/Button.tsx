import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  size?: 'small'|'medium'
  className?: string
  variant?: 'contained'|'outlined'
}

const styleMapper = {
  size: {
    small: '26px',
    medium: '36px'
  },
  font: {
    small: '.75rem',
    medium: '1rem'
  }
}

const ButtonContainer = styled.button<Required<ButtonProps>>`
  border-radius: 2px;
  background-color: ${({ theme, variant }) => variant === 'contained' ? theme.colors.blue[800] : 'transparent'};
  border: ${({ theme, variant }) => variant === 'contained' ? 'none' : `3px solid ${theme.colors.blue[800]}`};
  height: ${({ size }) => styleMapper.size[size]};
  color: ${({ theme, variant }) => variant === 'contained' ? '#fff' : theme.colors.blue[800]};
  font-weight: 500;
  font-size: ${({ size }) => styleMapper.font[size]};
  cursor: pointer;
`

export const Button = ({
  className = '',
  size = 'small',
  variant = 'contained',
  children
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonContainer size={size} className={className} variant={variant}>
      {children}
    </ButtonContainer>
  )
}
