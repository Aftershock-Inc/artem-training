import styled from "@emotion/styled"
import CustomImage from "../custom-image/custom-image.component.jsx"

import {Card, CardMedia, Grid,} from "@mui/material"

export const CardCarouselContainer = styled.div`
overflow: hidden;
`

export const CardCarouselGrid = styled(Grid)`
transition: transform 0.5s ease-in-out;
flex-wrap:nowrap;
`

export const CardImage = styled(CustomImage, CardMedia)`
  width: 100%;
  height: 100%;
  margin:2rem;
  width: 330px;
  height:330px;
  img {
    object-fit: contain !important;
  }
  z-index: 2;
`

export const MyCard = styled(Card)`
gap:2rem;

`
// .card-carousel-container {
//     overflow: hidden;
//   }

//   .card-carousel-grid {
//     transition: transform 0.5s ease-in-out;
//   }
