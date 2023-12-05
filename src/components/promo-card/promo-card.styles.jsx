import styled from "@emotion/styled"
import CustomImage from "../custom-image/custom-image.component.jsx"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 10px;
  margin-top: 1rem;
`
export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    object-fit: contain !important;
  }
  z-index: 2;
`

export const Title = styled.h3`
  color: #00ae00;
  font-size: 18px;
  font-family: "Heebo";
  font-weight: 700;
  line-height: 26px;
`
export const Description = styled.p`
  color: #5f5f5f;
  font-family: "Heebo";
  font-weight: 400;
  line-height: 26px;
`

export const Link = styled.a`
  color: #00ae00;
  font-size: 18px;
  font-weight: 500;
  line-height: 12px;
`
