import React from "react"

import * as S from "./footer.styles"

import { graphql, useStaticQuery } from "gatsby"

const Footer = ({ className }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "footer-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      palm: file(relativePath: { eq: "footer-palm-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.FooterAndTradeMarkWrapper>
      <S.Wrapper className={className}>
        <S.LeftWrapper>
          {" "}
          <S.LogoWrapper>
            <S.LogoImage img={staticQuery.logo} />
            <S.LogoText>Veteran Owned Business</S.LogoText>
          </S.LogoWrapper>
        </S.LeftWrapper>
        <S.LogoPalmImage img={staticQuery.palm} />
        <S.RightWrapper>
          <S.Link>Privacy & Terms</S.Link>
          <S.Link>INSTAGRAM</S.Link>
          <S.Link>FACEBOOK</S.Link>
          <S.Link>TIKTOK</S.Link>
        </S.RightWrapper>
      </S.Wrapper>
      <S.TradeMark>© 2023 CANNA RETREAT</S.TradeMark>
    </S.FooterAndTradeMarkWrapper>
  )
}

export default Footer
