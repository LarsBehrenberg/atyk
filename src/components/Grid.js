import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"

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
  img {
    filter: blur(0px);
    transition: filter 0.25s !important;
  }
  img:hover {
    filter: blur(2px);
  }
`

const Grid = ({ images, category }) => {
  // Change this variable to change the columns displayed
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

  const options = {
    settings: {
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      showDownloadButton: false,
    },
    caption: {
      showCaption: false,
    },
  }

  return (
    <SRLWrapper options={options}>
      <Container>
        {columns.map((column, index) => (
          <Column key={`column-${index}`}>
            {column.map(({ id, childImageSharp }) => (
              <Img fluid={childImageSharp.fluid} alt={id} key={id} />
            ))}
          </Column>
        ))}
      </Container>
    </SRLWrapper>
  )
}

export default Grid
