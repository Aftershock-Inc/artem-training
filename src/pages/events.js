import Layout from "../components/layout"
import InstagramFeed from "../layouts/InstagramFeed/instagram-feed"
import ContentBgImage from "../layouts/ContentBgImage/content-bg-image.component"
import Map from "../layouts/Map/map.component"
import React from "react"
import EventTitle from "../layouts/EventTitle/event-title.component"
import UpcomingEvents from "../layouts/UpcomingEvents/upcoming-events.component"

const Events = () => {
  return (
    <Layout>
      <EventTitle />
      <UpcomingEvents />
      <InstagramFeed />
      <ContentBgImage />
      <Map />
    </Layout>
  )
}

export default Events
