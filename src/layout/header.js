import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import image from "../../static/logo/logo.png"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;

  @media only screen and (min-width: 40.063em) {
    position: fixed;
    height: 80px;
    padding: 20px 60px;
    z-index: 30;
    background-color: white;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 3rem;
    display: inline;
    text-decoration: none;
    color: #353535;
  }

  @media (max-width: 720px) {
    a {
      display: none;
    }
    .mobile-toggle {
      div {
        width: 30px;
        height: 30px;
        position: relative;
      }

      span {
        display: block;
        position: absolute;
        width: 16px;
        height: 2px;
        background: #151515;
        content: " ";
        left: 7px;
      }
    }
  }
`

const Logo = styled.img`
  width: 176px;
  height: 41px;
  display: inline-block;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <Logo src={image} alt={siteTitle} />
    </Link>
    <Menu>
      <span className="mobile-toggle">
        <div style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
          <span
            style={{ transform: "matrix(1, 0, 0, 1, -1.6, 0)", top: "10px" }}
          ></span>
          <span
            style={{ transform: "matrix(1, 0, 0, 1, 1.6, 0)", top: "14px" }}
          ></span>
          <span
            style={{ transform: "matrix(1, 0, 0, 1, -1.6, 0)", top: "18px" }}
          ></span>
        </div>
      </span>
      <Link to="/works">Works</Link>
      <Link to="/design">Design</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
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
