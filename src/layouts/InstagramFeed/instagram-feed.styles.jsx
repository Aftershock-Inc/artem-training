import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"
import CustomButton from "../../components/custom-button/custom-button.component.jsx"
import CustomTypography from "../../components/custom-typography/custom-typography.component.jsx"
import CustomLinkComponent from "../../components/custom-link/custom-link.component"

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    object-fit: contain !important;
  }
  overflow: visible;
`

export const Wrapper = styled.div`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
`

export const Background = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`
export const Title = styled(CustomTypography)`
  -webkit-text-stroke: 2px #00ae00;
  color: #ffffff;
  font-family: "Soe-Regular", Helvetica;
  font-size: 84.5px;
  font-weight: 400;
  left: 0;
  letter-spacing: 1.69px;
  line-height: 79.5px;
  position: relative;
`
export const InstagramLink = styled.a`
  color: #00ae00;
  font-size: 18px;
  font-weight: 500;
  line-height: 12px;
  text-decoration: none;
`
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
`

export const Button = styled(CustomButton)`
  background-color: Green;
  border-radius: 40px;
  gap: 122px;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem !important;
  align-self: flex-end;
  z-index: 2;
`

export const GridContainer = styled.div`
  margin-bottom: 2rem;
`
