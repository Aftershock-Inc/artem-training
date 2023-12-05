import styled from "@emotion/styled"
import { Container, Typography, TextField } from "@mui/material"
import CustomButtonComponent from "../custom-button/custom-button.component"
export const Section = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
`

export const CustomInput = styled(TextField)`
  width: 100%;
  .MuiFormLabel-root {
    color: gray;

    &[data-shrink="true"] {
      color: green;
    }
  }
`
export const MyCustomButton = styled(CustomButtonComponent)`
  background-color: #15372c;
  border-radius: 75;
  &.MuiButtonBase-root {
    color: white;
  }
`
