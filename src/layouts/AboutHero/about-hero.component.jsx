import React from "react"
import * as S from "./about-hero.styles"

import Grid from "@mui/material/Grid"

import {graphql, useStaticQuery} from "gatsby"

const AboutHero = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "sea-abouthero-background.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      veteranOwnedImage: file(relativePath: { eq: "veteran-owned-img.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      vectorPalmImage: file(relativePath: { eq: "vector-palm.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.BgImage img={staticQuery.background}>
      <S.Wrapper>
        <Grid container>
          <Grid item xs={4} md={4}>
            <S.LeftWrapper>
              <S.SoeHelveticaBigText>About Us</S.SoeHelveticaBigText>
              <S.HeeboText>
                Visit one of our two locations lorem ipsum sit velit official
                consequat and vacation at home.
              </S.HeeboText>
              <S.Button>SHOP NOW</S.Button>
            </S.LeftWrapper>
          </Grid>
          <Grid item xs={4} md={4}>
            <S.MidWrapper></S.MidWrapper>
          </Grid>
          <Grid item xs={4} md={4}>
            <S.RightWrapper></S.RightWrapper>
          </Grid>
        </Grid>
        {/*       <S.LeftWrapper>asdf</S.LeftWrapper>
        <S.MidWrapper>asdf</S.MidWrapper>
        <S.RightWrapper>asdf</S.RightWrapper>*/}
        <S.GradientBox />
      </S.Wrapper>
    </S.BgImage>
  )
}

export default AboutHero
