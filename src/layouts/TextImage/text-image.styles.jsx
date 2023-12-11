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
  padding-bottom: 1.25rem;
`

export const Descritpion = styled.p`
  color: #5f5f5f;
  size: 16px;
  font-family: "Heebo";
  font-weight: 400;
  line-height: 26px;
  align-self: flex-start;
  padding-bottom: 2.5rem;
`

export const Link = styled.a`
  color: #00ae00;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Heebo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 85.714% */
  letter-spacing: 0.04375rem;
  text-transform: uppercase;

  align-self: flex-start;

  text-decoration: none;

  display: inline-block;
  position: relative;

  span {
    position: relative;
    display: inline;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1.5px;
      background: #00ae00;
      position: absolute;
      left: 0;
      bottom: -0.2rem;
    }
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  min-width: 722px;
  img {
    object-fit: contain !important;
  }
`
