import React from "react"
import * as S from "./upcoming-events.styles.jsx"
import { Container } from "@mui/system"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import PromoCard from "../../components/promo-card/promo-card.component"
import { graphql, useStaticQuery } from "gatsby"

const UpcomingEvents = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "upcoming-events.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "upcoming-events.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: { eq: "upcoming-events.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <S.Title>Upcoming Events</S.Title>
          <Grid container spacing={8}>
            <Grid xs={12} md={4} item>
              <S.StyledCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="march 20, 2023"
                image={staticQuery.image1}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <S.StyledCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="February 12, 2023"
                image={staticQuery.image2}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <S.StyledCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="June 21, 2023"
                image={staticQuery.image3}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </S.Wrapper>
  )
}

export default UpcomingEvents
