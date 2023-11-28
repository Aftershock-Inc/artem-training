//instagram-feed

import React from "react"
import * as S from "./instagram-feed.styles.jsx"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import Grid from "@mui/material/Grid"

//imports for
import Prev from "../../assets/arrow-left.svg"
import Next from "../../assets/arrow-right.svg"
import {IconButton} from "@mui/material"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import {Container} from "@mui/system"

// import required modules
import {Navigation} from "swiper/modules"

import {graphql, useStaticQuery} from "gatsby"

export default function App() {
  const staticQuery = useStaticQuery(graphql`
    query {
      weed1: file(relativePath: { eq: "weed-1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      weed2: file(relativePath: { eq: "weed-2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      weed3: file(relativePath: { eq: "weed-3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      cookie1: file(relativePath: { eq: "cookie.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      background: file(relativePath: { eq: "ig-pattern.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
    <S.Background img={staticQuery.background} />
      <Container maxWidth="lg">
        <S.GridContainer>
          <Grid container>
            <Grid item xs={6} md={7.5}>
              <S.Title>Stay Updated</S.Title>
              <p>Follow us for daily inspiration and exciting updates!</p>
              <a>@cannaretreat</a>
            </Grid>
            <Grid item xs={6} md={4.5}>
              <S.RightWrapper>
                <S.Button>FOLLOW US</S.Button>
              </S.RightWrapper>
            </Grid>
          </Grid>
        </S.GridContainer>
        <Swiper
          navigation={{ prevEl: ".slider-left", nextEl: ".slider-right" }}
          slidesPerView={3}
          spaceBetween={50}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <S.Image img={staticQuery.weed1} />
          </SwiperSlide>
          <SwiperSlide>
            <S.Image img={staticQuery.weed2} />
          </SwiperSlide>
          <SwiperSlide>
            <S.Image img={staticQuery.weed3} />
          </SwiperSlide>
          <SwiperSlide>
            <S.Image img={staticQuery.cookie1} />
          </SwiperSlide>
        </Swiper>
        <IconButton className="slider-left">
          <Prev />
        </IconButton>
        <IconButton className="slider-right">
          <Next />
        </IconButton>
      </Container>
      
    </S.Wrapper>
  )
}
