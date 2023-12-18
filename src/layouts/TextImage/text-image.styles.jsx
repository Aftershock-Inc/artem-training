import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"

export const Wrapper = styled.div`
  background-color: #f8fdf7;
  margin-top: ${({ theme }) => theme.typography.pxToRem(148)};
  overflow: hidden;
`

export const LeftWrapper = styled.div`
  heigth: 37rem;
`
export const ContentWrapper = styled.div``

export const RightWrapper = styled.div`
  flex-direction: column;
`

export const Title = styled.h2`
  color: #00ae00;
  font-size: 64px;
  font-family: "Heebo";
  font-weight: 700;
  line-height: 64px;
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
  padding-bottom: 0.5rem;
`

export const Link = styled.a`
  color: #00ae00;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;

  text-decoration: none; // Remove the default underline

  display: inline-block; // Ensures the container fits the content
  position: relative; // Establishes a positioning context for pseudo-elements

  span {
    position: relative;
    display: inline;

    // Adding custom underline using ::after pseudo-element
    &::after {
      content: "";
      display: block;
      width: 100%; // Underline will match the text width
      height: 1.5px; // Adjust the thickness of the underline
      background: #00ae00; // Color of the underline
      position: absolute;
      left: 0;
      bottom: -0.2rem; // Adjust vertical position of the underline
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
