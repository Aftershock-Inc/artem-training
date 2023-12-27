import styled from "@emotion/styled"
import Dialog from "@mui/material/Dialog"
import CustomImage from "../custom-image/custom-image.component"

export const CustomDialog = styled(Dialog)`
  padding: 5em 5em 5em 5em;
  .MuiPaper-root {
    width: 520px;
    height: 520px;
    padding: 5em;
  }
`
export const LogoImage = styled(CustomImage)`
  width: 78px;

  position: relative;
  img {
    object-fit: contain !important;
    padding-right: 1rem;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    //padding-right: 1rem;
  }
`

// export const CustomWrapper = styled.div``
// export const CustomDialogTitle = styled(DialogTitle)``
// export const CustomDialogContent = styled(DialogContent)``
// export const CustomTypography = styled(Typography)``
// export const CustomButton = styled(Button)``
// export const CustomImage = styled(CustomImage)``
