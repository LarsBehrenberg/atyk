import React from "react"
import { Layout } from "layout"
import { SEO, Grid } from "components"
import SimpleReactLightbox from "simple-react-lightbox"
import { graphql } from "gatsby"

const Design = ({ data }) => {
  return (
    <Layout>
      <SEO title="Design" />
      <SimpleReactLightbox>
        <Grid images={data.allFile.nodes} onDesignPage={true} />
      </SimpleReactLightbox>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: { absolutePath: { regex: "/design/" } }
      sort: { order: ASC, fields: name }
    ) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default Design
