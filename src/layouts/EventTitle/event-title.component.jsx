import React from "react"
import * as S from "./event-title.styles.jsx"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/system"
import Grid from "@mui/material/Grid"

const EventTitle = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      textImage: file(relativePath: { eq: "weed-text.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      vectorPalm: file(relativePath: { eq: "palm-tree.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.VectorPalm />
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          <Grid xs={12} md={6} xl={6} item>
            <S.LeftWrapper>
              <S.Title>Event Title</S.Title>
              <S.Descritpion>
                Inspired by Canna Retreat, our mission is to provide a wide
                variety of locally sourced quality products.
              </S.Descritpion>
              <S.Link href="https://www.google.com/">READ MORE</S.Link>
            </S.LeftWrapper>
          </Grid>
          <Grid xs={12} md={6} item>
            <S.RightWrapper>
              <S.Image img={staticQuery.textImage} />
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

Event.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default EventTitle
