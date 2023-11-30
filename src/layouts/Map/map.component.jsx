import React from "react"
import * as S from "./map.styles.jsx"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import { graphql, useStaticQuery } from "gatsby"

const Map = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.BgImage img={staticQuery.map} />
      <S.FilterColor />
      <Container>
        <Grid container md={12} xl={12}>
          <Grid item md={4}>
            <S.Circle />
            <S.WhiteBox>
              <S.Title>CANNA RETREAT</S.Title>
              <S.Description>
                1024 Aventura Street, Boston, MA 02496
              </S.Description>
              <S.LinksWrapper>
                <S.Link href="tel:1-800-555-5555">CALL</S.Link>
                <S.Link href="tel:1-800-555-5555">DIRECTIONS</S.Link>
              </S.LinksWrapper>
              <S.Title>Hours</S.Title>
              <S.Description>
                Open 9 to 8 <br /> 7 Days a Week
              </S.Description>
            </S.WhiteBox>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default Map
