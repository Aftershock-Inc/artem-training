import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"
import PalmSVG from "../../assets/palm-tree.svg"
export const Wrapper = styled.div`
  background-color: #f8fdf7;
  position: relative;
  margin-top: ${({ theme }) => theme.typography.pxToRem(0)};
`

export const LeftWrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: flex-start;
  //align-items: center;
  //position: absolute;
  //gap: 2rem;
  //padding-top: 10rem;
  //padding-left: 4rem;
  //background-color: red;
  position: relative;
  z-index: 3;
`
export const ContentWrapper = styled.div``

export const RightWrapper = styled.div`
  position: relative;
  flex-direction: column;
  z-index: 3;
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

export const VectorPalm = styled(PalmSVG)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-55%);
  z-index: 1;
  opacity: 0.1;

  mix-blend-mode: multiply;
`
