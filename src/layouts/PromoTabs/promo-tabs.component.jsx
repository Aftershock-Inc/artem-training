// App.js

import React from "react"
import * as S from "./promo-tabs.styles.jsx"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import PromoCard from "../../components/promo-card/promo-card.component.jsx"

import {graphql, useStaticQuery} from "gatsby"
import {Container} from "@mui/system"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const PromoTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const staticQuery = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "churro-milk-chocolate.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: { eq: "pinaple-habanero.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: { eq: "soup-grape-sangria.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper sx={{ width: "100%" }}>
      <Container maxWidth="lg">
        <S.Title>This Week’s Specials</S.Title>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <S.CustomTabs
            centered={true}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <S.CustomTab label="PREROLLS" />
            <S.CustomTab label="CARTRIDGES" />
            <S.CustomTab label="FLOWER" />
            <S.CustomTab label="EDIBLES" />
          </S.CustomTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={8}>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image1}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Pineapple Habanero"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image2}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Sour Grape Sangria "
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image3}
              />
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={8}>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image1}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Pineapple Habanero"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image2}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Sour Grape Sangria "
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image3}
              />
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container spacing={8}>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image1}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Pineapple Habanero"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image2}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Sour Grape Sangria "
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image3}
              />
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Grid container spacing={8}>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Churro Milk Chocolate"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image1}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Pineapple Habanero"
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image2}
              />
            </Grid>
            <Grid xs={12} md={4} item>
              <PromoCard
                title="Sour Grape Sangria "
                description="Dusted in cinnamon sugar, this sweetly satisfying milk chocolate bar tastes like a golden, fried churro dipped in..."
                shopLinkText="Shop Now"
                shopLinkUrl={"https://www.google.com/"}
                image={staticQuery.image3}
              />
            </Grid>
          </Grid>
        </CustomTabPanel>
      </Container>
    </S.Wrapper>
  )
}
export default PromoTabs
