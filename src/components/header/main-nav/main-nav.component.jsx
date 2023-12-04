import React from "react"
import * as S from "./main-nav.styles.jsx"

import Container from "@mui/material/Container"

import { graphql, useStaticQuery } from "gatsby"
import CustomLink from "../../custom-link/custom-link.component"

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
            <S.Link url="/about">ABOUT</S.Link>{" "}
            <S.Link url="/events">EVENTS</S.Link>{" "}
            <S.Link url="/contact">CONTACT</S.Link>
          </S.LeftWrapper>
          <CustomLink url="/">
            <S.MidWrapper img={staticQuery.logo} />
          </CustomLink>
          <S.RightWrapper>
            <S.Button>SHOP NOW</S.Button>
          </S.RightWrapper>
        </S.Wrapper>
      </Container>
    </S.TopWrapper>
  )
}

export default MainNav
