import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"

export const Wrapper = styled.div`
  background-color: #f8fdf7;
  margin-top: ${({ theme }) => theme.typography.pxToRem(148)};
`

export const LeftWrapper = styled.div``
export const ContentWrapper = styled.div``

export const RightWrapper = styled.div`
  flex-direction: column;
`

export const Title = styled.h2`
  color: #00ae00;
  font-size: 64px;
  font-family: "Heebo";
  font-weight: 700;
  line-height: 26px;
  align-self: flex-start;
  padding-bottom: 1rem;
`

export const Descritpion = styled.p`
  color: #5f5f5f;
  size: 16px;
  font-family: "Heebo";
  font-weight: 400;
  line-height: 26px;
  align-self: flex-start;
  padding-bottom: 2rem;
`

export const Link = styled.a`
  color: #00ae00;
  font-size: 14px;
  font-weight: 500;
  line-height: 12px;
  align-self: flex-start;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  min-width: 722px;
  img {
    object-fit: contain !important;
  }
`
