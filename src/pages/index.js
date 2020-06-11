import React from "react"
import { Layout } from "layout"
import SEO from "../components/seo"
import { Gallery } from "components"
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
    allFile(filter: { absolutePath: { regex: "/gallery-assets/" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1920, traceSVG: { color: "#2B2B2F" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage
