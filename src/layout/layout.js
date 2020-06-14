/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { SocialIcon } from "react-social-icons"

import { Header } from "layout"
import "../styles/layout.css"

const Bar = styled.div`
  display: inline-block;
  position: fixed;
  color: rgba(128, 128, 128, 0.7);
  font-size: 12px;
  top: 50%;
  left: 24px;
  width: 300px;
  height: 12px;
  line-height: 12px;
  margin-top: 150px;
  text-align: center;
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  text-transform: uppercase;

  &.right-side {
    left: auto;
    right: 34px;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  @media (max-width: 650px) {
    display: none;
  }
`

const ContentWrapper = styled.div`
  margin: 0 30px;
  max-width: 960;
  padding: 80px 1.0875rem 1.45rem;

  @media (max-width: 650px) {
    padding: 0 0 1.45rem;
    margin: 0;

    max-width: 100%;
    width: 100%;
  }
`

const Footer = styled.footer`
  position: fixed;
  margin-top: auto;
  padding: 20px;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <aside>
        <Bar>&copy; {new Date().getFullYear()} atykosm</Bar>
      </aside>
      <aside>
        <Bar className="right-side">atykosm.net</Bar>
      </aside>
      <ContentWrapper>
        <main>{children}</main>
        <Footer>
          <SocialIcon
            url="https://twitter.com/atyk12"
            style={{
              width: "30px",
              height: "30px",
              fill: "gray",
            }}
          />
          <SocialIcon
            url="https://www.instagram.com/atyk_naturegraphy/"
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "20px",
            }}
          />
        </Footer>
      </ContentWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
