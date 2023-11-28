import styled from "@emotion/styled"
import { CustomLink } from "../custom-link/custom-link.styles"
import CustomImage from "../custom-image/custom-image.component"
import CustomButton from "../custom-button/custom-button.component"
export const FooterAndTradeMarkWrapper = styled.div`
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`
export const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  padding-top: 2.5rem;

  color: white;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`

export const LeftWrapper = styled(CustomLink)`
  display: flex;
  flex-direction: row; /* Change to column direction */
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.2rem;
`

export const MidWrapper = styled(CustomImage)`
  display: flex;
`

export const RightWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.2rem;
`

export const Link = styled(CustomLink)`
  padding: 0 0rem;
  font-family: "Heebo-Medium", Helvetica;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`

export const Button = styled(CustomButton)`
  background-color: Green;
  border-radius: 40px;
  gap: 122px;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem !important;
`
export const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: white;
`
export const LogoPalmImage = styled(CustomImage)`
  width: 140px;
  position: relative;
  img {
    object-fit: contain !important;
  }
`

export const LogoImage = styled(CustomImage)`
  width: 78px;

  position: relative;
  img {
    object-fit: contain !important;
  }
`

export const TradeMark = styled.div`
  display: flex;
  color: #f9f9f9;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: uppercase;

  flex-direction: row; /* Change to column direction */
  padding-left: 2.2rem;
  padding-bottom: 2.5rem;
`
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
