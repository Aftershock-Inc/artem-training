import styled from "@emotion/styled"
import Dialog from "@mui/material/Dialog"
import CustomImage from "../custom-image/custom-image.component"
import customButtonComponent from "../custom-button/custom-button.component"
import LogoSVG from "../../assets/logo-black.svg"
import DialogActions from "@mui/material/DialogActions"
import DialogContentText from "@mui/material/DialogContentText"

export const LogoBlack = styled(LogoSVG)`
  max-width: 180px;
  max-height: 180px;
`
export const CustomDialog = styled(Dialog)`
  //padding: 5em 5em 5em 5em;

  .MuiPaper-root {
    width: 520px;
    height: 520px;
    padding: 5em;
    align-items: center;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      padding: 1em;
    }
  }
`
export const LogoImage = styled(CustomImage)`
  width: 178px;

  position: relative;
  img {
    object-fit: contain !important;
    padding-right: 1rem;
    //background-color: red;
    color: red;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    //padding-right: 1rem;
  }
`

// export const CustomWrapper = styled.div``
// export const CustomDialogTitle = styled(DialogTitle)``
// export const CustomDialogContent = styled(DialogContent)``
export const CustomDialogContentText = styled(DialogContentText)`
  font-size: 2.5rem;
  line-height: 2.75rem;
  text-align: center;
  font-family: "Soe";
  color: black;
`
export const CustomButton = styled(customButtonComponent)`
  background-color: Green;
  border-radius: 40px;
  //gap: 122px;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem !important;
`
export const CustomDialogActions = styled.div`
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  display: flex;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .MuiButtonBase-root {
    min-width: 150px;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`
// export const CustomImage = styled(CustomImage)``
