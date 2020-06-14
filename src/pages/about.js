import React from "react"
import { Layout } from "layout"
import { SEO, Text } from "components"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Title = styled.h2`
  padding-left: 2rem;
  font-size: 36px;
  line-height: 40px;
  margin: 1rem 0 0 0;
  font-weight: 400;
  letter-spacing: 0.2em;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Row = styled.div`
  max-width: 45%;
  padding: 3rem;

  &.image-container {
    max-width: 55%;
    width: 100%;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    padding: 0 2rem;

    &.image-container {
      max-width: 100%;
      width: 100vw;

      padding: 0 0 3rem 0;
    }
  }
`
const About = ({ data }) => {
  const { file } = data
  return (
    <Layout>
      <SEO title="About" />
      <Title>About Me</Title>
      <Container>
        <Row>
          <Text />
        </Row>
        <Row className="image-container">
          <Img fluid={file.childImageSharp.fluid} alt="Atsuyuki Oshima" />
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(absolutePath: { regex: "/about/" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
