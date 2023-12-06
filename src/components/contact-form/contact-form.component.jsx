import React from "react"
import * as S from "./contact-form.styles"
import { Grid } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
//import CustomButton from "../../components/custom-button/custom-button.component"
import { TextFields } from "@mui/icons-material"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Container } from "@mui/system"

const ContactFormComponent = () => {
  const methods = useForm()

  const { handleSubmit } = methods

  const onSubmit = data => {
    console.log("data :>> ", data)
  }

  return (
    <Container>
      <S.Section>
        <S.Wrapper>
          <div style={{ maxWidth: "39rem" }}>
            <S.Title>Get in Touch</S.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <S.CustomInput //width 100%
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <S.CustomInput
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <S.CustomInput
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <S.CustomInput
                    multiline
                    rows={6}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <S.MyCustomButton className="dark" type="submit">
                    Submit
                  </S.MyCustomButton>
                </Grid>
              </Grid>
            </form>
          </div>
        </S.Wrapper>
      </S.Section>
    </Container>
  )
}

export default ContactFormComponent
