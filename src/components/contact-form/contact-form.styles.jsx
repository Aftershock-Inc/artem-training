import styled from "@emotion/styled"
import { Container, TextField } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"
import CustomTypography from "../custom-typography/custom-typography.component"

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
export const MyCustomButton = styled(CustomButton)`
  background-color: #15372c;
  border-radius: 2.5rem;
  border: 1px solid var(--neutral-white, #fff);
  background: var(--brand-primary-80, #15372c);
  text-transform: capitalize;
  //border-radius: 75%;
  &.MuiButtonBase-root {
    color: white;
  }
`

export const Title = styled(CustomTypography)`
  color: var(--brand-primary-80, #15372c);
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Soe;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.375rem; /* 84.375% */
  letter-spacing: -0.1rem;
  padding: 3rem 0;
`
