import React from "react"
import * as S from "./text-image.styles.jsx"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import {Container} from "@mui/system"
import Grid from "@mui/material/Grid"

const TextImage = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      textImage: file(relativePath: { eq: "text-image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid xs={12} md={6} xl={6} item>
            <S.LeftWrapper>
              <S.Title>Opening Day</S.Title>
              <S.Descritpion>Food Vendors, 1-2 brand cultivator popups</S.Descritpion>
              <S.Link href="https://www.google.com/">Shop Now</S.Link>
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

TextImage.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default TextImage
