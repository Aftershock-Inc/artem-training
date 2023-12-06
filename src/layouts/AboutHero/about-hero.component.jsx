import React from "react"
import * as S from "./about-hero.styles"

import Grid from "@mui/material/Grid"

import { graphql, useStaticQuery } from "gatsby"
import { Container } from "@mui/system"

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
        <Container maxWidth="xl">
          <S.LeftWrapper>
            <S.SoeHelveticaBigText>About Us</S.SoeHelveticaBigText>
            <S.HeeboText>
              Visit one of our two locations lorem ipsum sit velit official
              consequat and vacation at home.
            </S.HeeboText>
            <S.Button>SHOP NOW</S.Button>
          </S.LeftWrapper>

          <S.MidWrapper></S.MidWrapper>

          <S.RightWrapper></S.RightWrapper>

          {/*       <S.LeftWrapper>asdf</S.LeftWrapper>
        <S.MidWrapper>asdf</S.MidWrapper>
        <S.RightWrapper>asdf</S.RightWrapper>*/}
          <S.GradientBox />
        </Container>
      </S.Wrapper>
    </S.BgImage>
  )
}

export default AboutHero
