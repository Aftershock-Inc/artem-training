/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo/seo.component"
import Header from "../components/header/header.component"
import MainNav from "../components/header/main-nav/main-nav.component"
import { AppContainer } from "../styles/app.styles"
import Footer from "./footer/footer.component"
import HomeHero from "../layouts/HomeHero/home-hero.component"
import LinkCards from "../layouts/LinksCards/link-card.component"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AppContainer>
        <HomeHero />
        <LinkCards />
        {children}
      </AppContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
