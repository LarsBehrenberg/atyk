import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 20px 20px;

  @media only screen and (min-width: 40.063em) {
    height: 80px;
    padding: 20px 60px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 3rem;
    display: inline;
    text-decoration: none;
    color: black;
  }

  p {
    display: none;
  }

  @media (max-width: 720px) {
    a {
      display: none;
    }
    p {
      display: block;
    }
  }
`

const Title = styled.h1`
  width: auto;
`

const Logo = styled.img`
  width: 176px;
  height: 41px;
  display: inline-block;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    {/* <Title>{siteTitle}</Title> */}
    <Logo src="logo/logo.png" alt="logo" />
    <Menu>
      <p>Menu</p>
      <Link to="/">Work</Link>
      <Link to="/">Design</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </Menu>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
