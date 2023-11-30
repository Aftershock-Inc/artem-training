import styled from "@emotion/styled"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomTypography from "../../components/custom-typography/custom-typography.component"
import { CustomLink } from "../../components/custom-link/custom-link.styles"

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  align-self: center;
  padding: 5.94rem 0rem;
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
  background-color: #00ae00;
  mix-blend-mode: multiply;
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
  font-family: "Heebo", Helvetica;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.025rem;
  padding-top: 2rem;
`
export const Description = styled(CustomTypography)`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Heebo;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
`
export const Link = styled(CustomLink)`
  color: #00ae00;
  text-decoration: underline;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Heebo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 85.714% */
  letter-spacing: -0.0175rem;
  text-transform: uppercase;
`
export const Circle = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  z-index: 1;
  width: 1.875rem;
  height: 1.875rem;
  flex-shrink: 0;
`
