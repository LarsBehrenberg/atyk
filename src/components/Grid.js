import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2px;
  margin: 0 auto;
`

const Column = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;

  div {
    vertical-align: middle;
    width: 100%;
    margin-bottom: 6px;
  }

  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`

const Grid = ({ images, category }) => {
  let columnAmount = 4

  const filteredImages = [...images].filter(image =>
    image.name.includes(category)
  )

  const columns = []

  if (filteredImages !== 0) {
    for (
      let x = 0;
      x < filteredImages.length;
      x += filteredImages.length / columnAmount
    ) {
      columns.push(
        filteredImages.slice(x, x + filteredImages.length / columnAmount)
      )
    }
  }

  return (
    <Container>
      {columns.map((column, index) => (
        <Column key={`column-${index}`}>
          {column.map(({ id, childImageSharp }) => (
            <Img fluid={childImageSharp.fluid} alt={id} key={id} />
          ))}
        </Column>
      ))}
    </Container>
  )
}

export default Grid
