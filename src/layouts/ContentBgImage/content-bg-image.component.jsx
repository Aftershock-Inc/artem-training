import React from "react"
import * as S from "./content-bg-image.styles.jsx"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import {graphql, useStaticQuery} from "gatsby"

const ContentBgImage = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "bg-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.BgImage img={staticQuery.background}></S.BgImage>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <S.LeftWrapper>
              <S.Title>Shop online + Pick up In Store Today</S.Title>
              <S.Button>SHOP NOW</S.Button>
            </S.LeftWrapper>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ContentBgImage
