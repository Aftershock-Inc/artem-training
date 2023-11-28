import React from "react"
import Layout from "../components/layout"
import {LayoutTitle} from "../styles/app.styles"
import {Helmet} from "react-helmet"

import HomeHero from "../layouts/HomeHero/home-hero.component"


const Layouts = () => {
  return (
    <Layout>
      <Helmet>
        <title>Layouts - ONLY FOR DEV</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <LayoutTitle>MiscContent</LayoutTitle>
      <HomeHero />
      
    </Layout>
  )
}

export default Layouts
