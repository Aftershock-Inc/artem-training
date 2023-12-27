/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header/header.component"
import { AppContainer } from "../styles/app.styles"
import Footer from "./footer/footer.component"

import AgeVerification from "./age-verification/age-verification.component"

const Layout = ({ children }) => {
  return (
    <>
      <AgeVerification />
      <Header />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
