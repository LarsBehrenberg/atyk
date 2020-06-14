import React from "react"
import { Layout } from "layout"
import { Gallery, SEO } from "components"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { nodes } = data.allFile
  return (
    <Layout>
      <SEO title="Home" />
      <Gallery images={nodes} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/front-gallery/" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage
