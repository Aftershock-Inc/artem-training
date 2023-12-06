import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"

export const Wrapper = styled.div`
  background-color: #f8fdf7;
  padding-top: 2.5rem;
  padding-bottom: 3.69rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 5.5rem;
    padding-bottom: 6.69rem;
  }
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
`
export const ContentWrapper = styled.div``

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 0;
    padding-left: ${({ theme }) => theme.typography.pxToRem(157)};
  }
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

export const Description = styled.p`
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
  img {
    object-fit: cover !important;
  }
`
