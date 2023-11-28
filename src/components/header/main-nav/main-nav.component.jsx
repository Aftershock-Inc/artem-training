import React from "react"
import * as S from "./main-nav.styles.jsx"

import Container from "@mui/material/Container"

import { graphql, useStaticQuery } from "gatsby"

const MainNav = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.TopWrapper>
      <Container maxWidth="xl">
        <S.Wrapper>
          <S.LeftWrapper>
            {" "}
            <S.Link href="/about">ABOUT</S.Link> <S.Link>EVENTS</S.Link>{" "}
            <S.Link>CONTACT</S.Link>
          </S.LeftWrapper>
          <S.MidWrapper img={staticQuery.logo} />
          <S.RightWrapper>
            <S.Button>SHOP NOW</S.Button>
          </S.RightWrapper>
        </S.Wrapper>
      </Container>
    </S.TopWrapper>
  )
}

export default MainNav
