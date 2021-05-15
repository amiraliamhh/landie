import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Text } from 'common/Text'
import { Button } from 'common/Button'

const FooterContainer = styled.footer`
  padding-top: 60px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.blue[100]};
  hr {
    margin: 0;
    border-top: 1px solid #cdd1d4;
  }
`

const Content = styled.div`
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  .brand-name {
    text-align: center;
    color: ${({ theme }) => theme.colors.logoPrimary};
    font-weight: 900;
    font-size: 26px;
    line-height: 38px;
  }
  .cta {
    width: 110px;
    justify-self: flex-end;
  }
`

const BottomNav = styled.div`
  padding-top: 20px;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  a {
    margin-right: 60px;
    font-size: .875rem;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.blue[300]};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .social {
    margin-right: 0;
    margin-left: 30px;
  }
  .social-container {
    display: flex;
    align-items: center;
  }
`

export const Footer = () => {
  const socials = [
    'facebook.svg',
    'linkedin.svg',
    'twitter.svg',
    'youtube.svg',
    'instagram.svg'
  ]
  return (
    <FooterContainer className="container">
      <Content>
        <Text variant="medium12">
          ©2020 Yourcompany
        </Text>
        <p className="brand-name">Landie</p>
        <Button size="small" className="cta">
          Purchase Now
        </Button>
      </Content>
      <hr />
      <BottomNav>
        <div className="menu">
          <Link to="/">
            Home
          </Link>
          <Link to="/">
            About
          </Link>
          <Link to="/">
            Contact
          </Link>
        </div>
        <div className="social-container">
          {
            socials.map(social => (
              <Link to="/" className="social">
                <img width="16" height="16" src={social} alt={social} />
              </Link>
            ))
          }
        </div>
      </BottomNav>
    </FooterContainer>
  )
}
