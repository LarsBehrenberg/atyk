import React from "react"
import styled from "@emotion/styled"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const GalleryWrapper = styled.div`
  margin: 0 auto;
  max-height: 82vh;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 82vh;

  @media (max-width: 650px) {
    height: 100vh;
  }
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: bottom;
  position: absolute;
  top: 0;
  bottom: 0;
`

const Gallery = ({ images }) => {
  return (
    <GalleryWrapper>
      <Carousel
        animationSpeed="2000" // Determines transition duration in milliseconds.
        autoPlay="4000" // Slide change interval in milliseconds
        infinite // Loops through side indefinitely
        keepDirectionWhenDragging // While dragging, it doesn't matter which slide is the nearest one, but in what direction you dragged
      >
        {images.map(image => (
          <ImageWrapper key={image.id}>
            <CarouselImage
              src={image.childImageSharp.fluid.src}
              alt={image.id}
            />
          </ImageWrapper>
        ))}
      </Carousel>
    </GalleryWrapper>
  )
}

export default Gallery
