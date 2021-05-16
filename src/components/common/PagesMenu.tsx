import * as React from 'react'
import styled from 'styled-components'

const PagesMenuContainer = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  background-color: #fff;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 4px ${({ theme }) => theme.colors.grey[600]};
`

export const PagesMenu = () => {
  return (
    <PagesMenuContainer>
      <img width="32px" height="32px" src="blend-tool.svg" alt="" />
    </PagesMenuContainer>
  )
}
