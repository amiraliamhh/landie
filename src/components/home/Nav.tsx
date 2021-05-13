import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from 'common/Button'

const NavContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  height: 60px;
  padding: 0 165px;
`

const NavContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  h1 {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.logoPrimary};
    font-size: 1.625rem;
    text-align: center;
  }
`

const Menu = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue[500]};
    font-size: .875rem;
    margin-right: 60px;
    &:hover {
      text-decoration: underline;
    }
  }
`

const CTA = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    width: 160px;
  }
`

export const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <Menu>
          <Link to="/">
            Home
          </Link>
          <Link to="/">
            About
          </Link>
          <Link to="/">
            Contact
          </Link>
        </Menu>
        <h1>Landie</h1>
        <CTA>
          <Button>
            Buy Now
          </Button>
        </CTA>
      </NavContent>
    </NavContainer>
  )
}
