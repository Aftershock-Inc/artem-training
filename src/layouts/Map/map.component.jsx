import React from "react"
import * as S from "./map.styles.jsx"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import {graphql, useStaticQuery} from "gatsby"

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
            <S.WhiteBox>
              <S.Title>Store Locator</S.Title>
              <p>1024 Aventura Street, Boston, MA 02496</p>
              <S.LinksWrapper>
                <S.Link href="tel:1-800-555-5555">CALL</S.Link>
                <S.Link href="tel:1-800-555-5555">DIRECTIONS</S.Link>
              </S.LinksWrapper>
                <S.Title>Hours</S.Title>
              <p>
                Open 9 to 8 <br /> 7 Days a Week
              </p>
            </S.WhiteBox>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default Map
