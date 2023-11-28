import React, {useState} from "react"
import {Button, Grid,} from "@mui/material"
//import './card-carousel.styles.jsx'; // Import your CSS file
import * as S from "./card-carousel.styles.jsx"
import {graphql, useStaticQuery} from "gatsby"

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleMoveLeft = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1,
    )
  }

  const handleMoveRight = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const translateValue = -currentIndex * 20 // Move the grid left or right by the percentage of one card width

  const staticQuery = useStaticQuery(graphql`
    query {
      weed1: file(relativePath: { eq: "weed-1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      weed2: file(relativePath: { eq: "weed-2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      weed3: file(relativePath: { eq: "weed-3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      cookie1: file(relativePath: { eq: "cookie-1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const cardData = [
    { id: 1, title: "Card 1", image: staticQuery.weed1 },
    { id: 2, title: "Card 2", image: staticQuery.weed2 },
    { id: 3, title: "Card 3", image: staticQuery.weed3 },
    { id: 4, title: "Card 4", image: staticQuery.cookie1 },
  ]

  return (
    <S.CardCarouselContainer className="card-carousel-container">
      <S.CardCarouselGrid
        container
        className="card-carousel-grid"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {cardData.map(card => (
          <Grid item key={card.id}>
            <S.MyCard>
              <S.CardImage
                component="img"
                height="240"
                img={card.image}
                alt={card.title}
              />
            </S.MyCard>
          </Grid>
        ))}
      </S.CardCarouselGrid>
      <div>
        <Button onClick={handleMoveLeft}>&#8249;</Button>
        <Button onClick={handleMoveRight}>&#8250;</Button>
      </div>
    </S.CardCarouselContainer>
  )
}

export default CardCarousel
//swiper react