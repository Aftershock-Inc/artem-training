import styled from "@emotion/styled"
import {CustomLink} from "../custom-link/custom-link.styles"

export const TopWrapper = styled.div`
  background-color: #003400;
  padding: 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

export const TopNavItem = styled.span`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  align-items: center;
  display: inline-flex;
  gap: 32px;
`

export const TopNavLogos = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 16px;
  left: 1000px;
  position: relative;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  padding: 0.5rem;
`

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightWrapper = styled.div`
gap: 16px;
display: flex;
row-gap: 16px;
`

export const Link = styled(CustomLink)`
  padding: 0 2rem;
  border-right: 1px solid #ffffff;
  &:last-child {
    border-right: none;
  }
`
export const IconLink = styled(CustomLink)`
  align-items: center;
  background-color: #ffffff26;
  border: 0.44px solid;
  border-color: transparent;
  border-radius: 38.5px;
  display: inline-flex;
  flex-direction: column;
  gap: 9.87px;
  height: 28px;
  justify-content: center;
  overflow: hidden;
  padding: 3.95px;
  position: relative;
  width: 28px;

`
