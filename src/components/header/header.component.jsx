import React from "react"
import * as S from "./header.styles.jsx"
import Container from "@mui/material/Container"
import MainNav from "./main-nav/main-nav.component.jsx"

import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"

const Header = () => {
  return (
    <S.TopWrapper>
      <Container maxWidth="xl">
        <S.Wrapper>
          <S.LeftWrapper>
            <S.Link>Location 1 – MA: (413) 650-250</S.Link>
            <S.Link>Location 2 – MA: (413) 650-250</S.Link>
            <S.Link>Location 3 – MA: (413) 650-250</S.Link>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.IconLink>
              <InstagramIcon />
            </S.IconLink>
            <S.IconLink>
              <FacebookIcon />
            </S.IconLink>
            <S.IconLink>
              <TwitterIcon />
            </S.IconLink>
          </S.RightWrapper>
        </S.Wrapper>
        
      </Container>
      <MainNav />
    </S.TopWrapper>
  )
}

export default Header
