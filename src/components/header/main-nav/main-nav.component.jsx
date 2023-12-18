import React, { useState } from "react"
import * as S from "./main-nav.styles.jsx"

import Container from "@mui/material/Container"

import { graphql, useStaticQuery } from "gatsby"
import CustomLink from "../../custom-link/custom-link.component"

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
} from "@mui/material"

import CloseIcon from "@mui/icons-material/Close"

import MenuIcon from "@mui/icons-material/Menu"

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  })

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <S.TopWrapper elevation={scrollTrigger ? 4 : 0} position="sticky">
        <Container maxWidth="xl">
          <S.Wrapper>
            <S.CustomMenuIcon onClick={handleToggleDrawer} />
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
      <Container maxWidth="lg">
        <S.CustomDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleToggleDrawer}
          variant="temporary"
        >
          <CloseIcon
            fontSize={"large"}
            style={{ color: "green", alignSelf: "flex-end" }}
            onClick={handleToggleDrawer}
          />
          <List>
            <ListItem button component="a" href="/about">
              <ListItemText primary="ABOUT" />
            </ListItem>
            <ListItem button component="a" href="/events">
              <ListItemText primary="EVENTS" />
            </ListItem>
            <ListItem button component="a" href="/contact">
              <ListItemText primary="CONTACT" />
            </ListItem>
          </List>
          <S.Button
            style={{ width: "100%" }}
            href="https://shop.eastbostoncannabis.com/"
            target="_blank"
          >
            SHOP NOW
          </S.Button>
        </S.CustomDrawer>
      </Container>
    </>
  )
}

export default MainNav
