import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component.jsx"
import CustomTypography from "../../components/custom-typography/custom-typography.component.jsx"
import CustomButton from "../../components/custom-button/custom-button.component.jsx"

export const BgImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12rem;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.2rem;
  top: 0;
`

export const Title = styled(CustomTypography)`
  -webkit-text-stroke: 1px lightgreen;
  color: #ffffff;
  font-family: "Soe-Regular", Helvetica;
  font-size: 50px;
  font-weight: 400;
  left: 0;
  letter-spacing: 1.69px;
  line-height: 79.5px;
  position: relative;
  text-align: justify;
`

export const Button = styled(CustomButton)`
  background-color: Green;
  border-radius: 40px;
  gap: 122px;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem !important;
  align-self: flex-start;
  z-index: 2;
  padding: 2rem;
`
