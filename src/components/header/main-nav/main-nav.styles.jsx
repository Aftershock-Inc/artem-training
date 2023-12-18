import styled from "@emotion/styled"

import CustomImage from "../../custom-image/custom-image.component"
import CustomButton from "../../custom-button/custom-button.component"
import CustomLink from "../../custom-link/custom-link.component"

import { AppBar, Drawer, List, ListItem, ListItemText } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

export const TopWrapper = styled(AppBar)`
  //position: fixed;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;

  .MuiSvgIcon-root {
    align-self: center;
    color: green;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    justify-content: space-between;
    color: black;
  }
`

export const LeftWrapper = styled(CustomLink)`
  display: none;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }
`
export const CustomMenuIcon = styled(MenuIcon)`
  order: 2;
  font-size: 2rem;
  justify-self: center;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`
export const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
  }
  .MuiList-root {
  }
  .MuiButtonBase-root {
    font-weight: 700;
    text-align: center;
    span {
      font-weight: 700;
      font-size: 2rem;
    }
  }
`

export const MidWrapper = styled(CustomImage)`
  display: flex;
  justify-content: center;
  //width: 100%;
  //height: 100%;
  width: 100px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    justify-content: center;
    height: 104px;
    width: 205px;
  }
`

export const RightWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
    width: 271px;
  }
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
