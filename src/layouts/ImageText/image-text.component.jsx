import React from "react"
import * as S from "./image-text.styles.jsx"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/system"
import Grid from "@mui/material/Grid"
import PropTypes from "prop-types"

const ImageText = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      textImage: file(relativePath: { eq: "ImageText.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid xs={12} md={6} xl={6} item>
            <S.LeftWrapper>
              <S.Image
                img={staticQuery.textImage}
                arPaddingPercentage={100}
                fit="cover"
              />
            </S.LeftWrapper>
          </Grid>
          <Grid xs={12} md={6} xl={6} item>
            <S.RightWrapper>
              <S.Title>Visit Us</S.Title>
              <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </S.Description>
              <S.Link href="https://www.google.com/">Shop Now</S.Link>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

ImageText.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ImageText
