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
  margin-top: 1rem;
`
export const Description = styled.p`
  color: #5f5f5f;
  font-family: "Heebo";
  font-weight: 400;
  line-height: 26px;
  padding-top: 0rem;
  padding-bottom: 1rem;
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
