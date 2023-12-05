import styled from "@emotion/styled"

import CustomImage from "../../custom-image/custom-image.component"
import CustomButton from "../../custom-button/custom-button.component"
import CustomLink from "../../custom-link/custom-link.component"

export const TopWrapper = styled.div`
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
`

export const LeftWrapper = styled(CustomLink)`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
`

export const MidWrapper = styled(CustomImage)`
  display: flex;
  //width: 100%;
  //height: 100%;
  height: 104px;
  width: 205px;
`

export const RightWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-end;
  width: 271px;
`

export const Link = styled(CustomLink)`
  padding: 0 0rem;
  font-family: "Heebo-Medium", Helvetica;
  color: #003400;
  font-size: 17px;
  font-weight: 500;
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
export const HomeLink = styled(CustomLink)``
