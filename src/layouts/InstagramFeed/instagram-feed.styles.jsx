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
  padding-top: 6rem;
  padding-bottom: 6rem;
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
  position: relative;

  color: #00ae00;
  font-family: Soe;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.875rem; /* 104.545% */
  letter-spacing: 0.055rem;
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
  display: none;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    flex-direction: row-reverse;
  }
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
