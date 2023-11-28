import React from "react"
import Layout from "../components/layout"
import InstagramFeed from "../layouts/InstagramFeed/instagram-feed"
import ContentBgImage from "../layouts/ContentBgImage/content-bg-image.component"
import Map from "../layouts/Map/map.component"
import AboutHero from "../layouts/AboutHero/about-hero.component"

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <InstagramFeed />
      <ContentBgImage />
      <Map />
    </Layout>
  )
}

export default About
