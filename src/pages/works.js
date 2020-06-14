import React, { useState } from "react"
import { Layout } from "layout"
import { SEO, Grid, TagButton } from "components"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`

const Works = ({ data }) => {
  const { nodes } = data.allFile

  const [state, setState] = useState({ activeCategory: "Wildlife" })

  const categoryArray = ["Wildlife", "Portrait", "Landscape", "Bird", "Video"]

  const Button = name => (
    <TagButton
      className={name === state.activeCategory ? "active" : ""}
      onClick={() => setState({ activeCategory: name })}
      key={name}
    >
      {name}
    </TagButton>
  )

  return (
    <Layout>
      <SEO title="Works" />
      <ButtonContainer>
        {categoryArray.map(button => Button(button))}
      </ButtonContainer>
      <Grid images={nodes} category={state.activeCategory.toLowerCase()} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/works/" } }) {
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

export default Works
