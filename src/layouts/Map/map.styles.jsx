import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomTypography from "../../components/custom-typography/custom-typography.component"
import {CustomLink} from "../../components/custom-link/custom-link.styles"

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  align-self: center;
  padding: 20rem 8rem;
`

export const BgImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const FilterColor = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 255, 0, 0.5);
  top: 0;
  left: 0;
`

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  background-color: #ffffff;
  z-index: 2;
  padding: 1rem;
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const Title = styled(CustomTypography)`
  color: #00ae00;
  font-family: "Soe-Regular", Helvetica;
  font-size: 24px;
  padding-top: 2rem;
`

export const Link = styled(CustomLink)`
  color: #00ae00;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-decoration: underline;
`
