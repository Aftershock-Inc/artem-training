import React from "react"
import * as S from "./home-hero.styles.jsx"

import Grid from "@mui/material/Grid"

import {graphql, useStaticQuery} from "gatsby"

const HomeHero = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "sea-background.png" }) {
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
        <Grid container >
          <Grid item xs={4} md={4}>
            <S.LeftWrapper>
              <S.SoeHelveticaBigText>Vacation at Home</S.SoeHelveticaBigText>
              <S.HeeboText>
                Visit one of our two locations lorem ipsum sit velit official
                consequat and vacation at home.
              </S.HeeboText>
              <S.Button>SHOP NOW</S.Button>
            </S.LeftWrapper>
          </Grid>
          <Grid item xs={4} md={4}>
            <S.MidWrapper>
              <S.VeteranOwnedImg
                img={staticQuery.veteranOwnedImage}
              ></S.VeteranOwnedImg>
            </S.MidWrapper>
          </Grid>
          <Grid item xs={4} md={4}>
            <S.RightWrapper>
              <S.VectorPalm img={staticQuery.vectorPalmImage}></S.VectorPalm>
            </S.RightWrapper>
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

export default HomeHero
